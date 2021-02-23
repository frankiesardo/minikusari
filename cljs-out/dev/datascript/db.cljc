(ns ^:no-doc ^:lean-ns datascript.db
  (:require
    #?(:cljs [goog.array :as garray])
    [clojure.walk]
    [clojure.data]
    [me.tonsky.persistent-sorted-set :as set]
    [me.tonsky.persistent-sorted-set.arrays :as arrays])
  #?(:cljs (:require-macros [datascript.db :refer [case-tree combine-cmp raise defrecord-updatable cond+]]))
  (:refer-clojure :exclude [seqable?])) 

;; ----------------------------------------------------------------------------

#?(:cljs
   (do
     (def Exception js/Error)
     (def IllegalArgumentException js/Error)
     (def UnsupportedOperationException js/Error)))

(def ^:const e0    0)
(def ^:const tx0   0x20000000)
(def ^:const emax  0x7FFFFFFF)
(def ^:const txmax 0x7FFFFFFF)
(def ^:const implicit-schema {:db/ident {:db/unique :db.unique/identity}})

;; ----------------------------------------------------------------------------

#?(:clj
  (defmacro raise [& fragments]
    (let [msgs (butlast fragments)
          data (last fragments)]
      `(throw (ex-info (str ~@(map (fn [m#] (if (string? m#) m# (list 'pr-str m#))) msgs)) ~data)))))

(defn #?@(:clj  [^Boolean seqable?]  
          :cljs [^boolean seqable?])
  [x]
  (and (not (string? x))
  #?(:cljs (or (cljs.core/seqable? x)
               (arrays/array? x))
     :clj  (or (seq? x)
               (instance? clojure.lang.Seqable x)
               (nil? x)
               (instance? Iterable x)
               (arrays/array? x)
               (instance? java.util.Map x)))))

#?(:clj
  (defmacro cond+ [& clauses]
    (when-some [[test expr & rest] clauses]
      (case test
        :let `(let ~expr (cond+ ~@rest))
        `(if ~test ~expr (cond+ ~@rest))))))

#?(:clj
(defmacro some-of
  ([] nil)
  ([x] x)
  ([x & more]
    `(let [x# ~x] (if (nil? x#) (some-of ~@more) x#)))))

(def conjv (fnil conj []))
(def conjs (fnil conj #{}))

(defn reduce-indexed
  "Same as reduce, but `f` takes [acc el idx]"
  [f init xs]
  (first
    (reduce
      (fn [[acc idx] x]
        (let [res (f acc x idx)]
          (if (reduced? res)
            (reduced [res idx])
            [res (inc idx)])))
      [init 0]
      xs)))

;; ----------------------------------------------------------------------------
;; macros and funcs to support writing defrecords and updating
;; (replacing) builtins, i.e., Object/hashCode, IHashEq hasheq, etc.
;; code taken from prismatic:
;;  https://github.com/Prismatic/schema/commit/e31c419c56555c83ef9ee834801e13ef3c112597
;;

(defn- cljs-env?
  "Take the &env from a macro, and tell whether we are expanding into cljs."
  [env]
  (boolean (:ns env)))

#?(:clj
   (defmacro if-cljs
     "Return then if we are generating cljs code and else for Clojure code.
     https://groups.google.com/d/msg/clojurescript/iBY5HaQda4A/w1lAQi9_AwsJ"
     [then else]
     (if (cljs-env? &env) then else)))

(defn combine-hashes [x y]
  #?(:clj  (clojure.lang.Util/hashCombine x y)
     :cljs (hash-combine x y)))

#?(:clj
   (defn- get-sig [method]
     ;; expects something like '(method-symbol [arg arg arg] ...)
     ;; if the thing matches, returns [fully-qualified-symbol arity], otherwise nil
     (and (sequential? method)
          (symbol? (first method))
          (vector? (second method))
          (let [sym (first method)
                ns  (or (some->> sym resolve meta :ns str) "clojure.core")]
            [(symbol ns (name sym)) (-> method second count)]))))

#?(:clj
   (defn- dedupe-interfaces [deftype-form]
     ;; get the interfaces list, remove any duplicates, similar to remove-nil-implements in potemkin
     ;; verified w/ deftype impl in compiler:
     ;; (deftype* tagname classname [fields] :implements [interfaces] :tag tagname methods*)
     (let [[deftype* tagname classname fields implements interfaces & rest] deftype-form]
       (when (or (not= deftype* 'deftype*) (not= implements :implements))
         (throw (IllegalArgumentException. "deftype-form mismatch")))
       (list* deftype* tagname classname fields implements (vec (distinct interfaces)) rest))))

#?(:clj
   (defn- make-record-updatable-clj [name fields & impls]
     (let [impl-map (->> impls (map (juxt get-sig identity)) (filter first) (into {}))
           body     (macroexpand-1 (list* 'defrecord name fields impls))]
       (clojure.walk/postwalk
        (fn [form]
          (if (and (sequential? form) (= 'deftype* (first form)))
            (->> form
                 dedupe-interfaces
                 (remove (fn [method]
                           (when-some [impl (-> method get-sig impl-map)]
                             (not= method impl)))))
            form))
        body))))

#?(:clj
   (defn- make-record-updatable-cljs [name fields & impls]
     `(do
        (defrecord ~name ~fields)
        (extend-type ~name ~@impls))))

#?(:clj
   (defmacro defrecord-updatable [name fields & impls]
     `(if-cljs
       ~(apply make-record-updatable-cljs name fields impls)
       ~(apply make-record-updatable-clj  name fields impls))))

;; ----------------------------------------------------------------------------

(declare hash-datom equiv-datom seq-datom nth-datom assoc-datom val-at-datom)

(defprotocol IDatom
  (datom-tx [this])
  (datom-added [this]))

(deftype Datom #?(:clj [^int e a v ^int tx ^:unsynchronized-mutable ^int _hash]
                  :cljs [^number e a v ^number tx ^:mutable ^number _hash])
  IDatom
  (datom-tx [d] (if (pos? tx) tx (- tx)))
  (datom-added [d] (pos? tx))

  #?@(:cljs
       [IHash
        (-hash [d] (if (zero? _hash)
                     (set! _hash (hash-datom d))
                     _hash))
        IEquiv
        (-equiv [d o] (and (instance? Datom o) (equiv-datom d o)))

        ISeqable
        (-seq [d] (seq-datom d))

        ILookup
        (-lookup [d k] (val-at-datom d k nil))
        (-lookup [d k nf] (val-at-datom d k nf))

        IIndexed
        (-nth [this i] (nth-datom this i))
        (-nth [this i not-found] (nth-datom this i not-found))
        
        IAssociative
        (-assoc [d k v] (assoc-datom d k v))

        IPrintWithWriter
        (-pr-writer [d writer opts]
                    (pr-sequential-writer writer pr-writer
                                          "#datascript/Datom [" " " "]"
                                          opts [(.-e d) (.-a d) (.-v d) (datom-tx d) (datom-added d)]))]
      :clj
       [Object
        (hashCode [d]
          (if (zero? _hash)
            (let [h (int (hash-datom d))]
              (set! _hash h)
              h)
            _hash))
        (toString [d] (pr-str d))

        clojure.lang.IHashEq
        (hasheq [d] (.hashCode d))

        clojure.lang.Seqable
        (seq [d] (seq-datom d))

        clojure.lang.IPersistentCollection
        (equiv [d o] (and (instance? Datom o) (equiv-datom d o)))
        (empty [d] (throw (UnsupportedOperationException. "empty is not supported on Datom")))
        (count [d] 5)
        (cons [d [k v]] (assoc-datom d k v))
        
        clojure.lang.Indexed
        (nth [this i]           (nth-datom this i))
        (nth [this i not-found] (nth-datom this i not-found))

        clojure.lang.ILookup
        (valAt [d k] (val-at-datom d k nil))
        (valAt [d k nf] (val-at-datom d k nf))

        clojure.lang.Associative
        (entryAt [d k] (some->> (val-at-datom d k nil) (clojure.lang.MapEntry k)))
        (containsKey [e k] (#{:e :a :v :tx :added} k))
        (assoc [d k v] (assoc-datom d k v))]
))

#?(:cljs (goog/exportSymbol "datascript.db.Datom" Datom))

(defn ^Datom datom
  ([e a v] (Datom. e a v tx0 0))
  ([e a v tx] (Datom. e a v tx 0))
  ([e a v tx added] (Datom. e a v (if added tx (- tx)) 0)))

(defn datom? [x] (instance? Datom x))

(defn- hash-datom [^Datom d]
  (-> (hash (.-e d))
      (combine-hashes (hash (.-a d)))
      (combine-hashes (hash (.-v d)))))

(defn- equiv-datom [^Datom d ^Datom o]
  (and (== (.-e d) (.-e o))
       (= (.-a d) (.-a o))
       (= (.-v d) (.-v o))))

(defn- seq-datom [^Datom d]
  (list (.-e d) (.-a d) (.-v d) (datom-tx d) (datom-added d)))

;; keep it fast by duplicating for both keyword and string cases
;; instead of using sets or some other matching func
(defn- val-at-datom [^Datom d k not-found]
  (case k
    :e      (.-e d) "e"     (.-e d)
    :a      (.-a d) "a"     (.-a d)
    :v      (.-v d) "v"     (.-v d)
    :tx     (datom-tx d)
    "tx"    (datom-tx d)
    :added  (datom-added d)
    "added" (datom-added d)
    not-found))

(defn- nth-datom
  ([^Datom d ^long i]
    (case i
      0 (.-e d)
      1 (.-a d)
      2 (.-v d)
      3 (datom-tx d)
      4 (datom-added d)
        #?(:clj  (throw (IndexOutOfBoundsException.))
           :cljs (throw (js/Error. (str "Datom/-nth: Index out of bounds: " i))))))
  ([^Datom d ^long i not-found]
    (case i
      0 (.-e d)
      1 (.-a d)
      2 (.-v d)
      3 (datom-tx d)
      4 (datom-added d)
        not-found)))

(defn- ^Datom assoc-datom [^Datom d k v]
  (case k
    :e     (datom v       (.-a d) (.-v d) (datom-tx d) (datom-added d))
    :a     (datom (.-e d) v       (.-v d) (datom-tx d) (datom-added d))
    :v     (datom (.-e d) (.-a d) v       (datom-tx d) (datom-added d))
    :tx    (datom (.-e d) (.-a d) (.-v d) v            (datom-added d))
    :added (datom (.-e d) (.-a d) (.-v d) (datom-tx d) v)
    (throw (IllegalArgumentException. (str "invalid key for #datascript/Datom: " k)))))

;; printing and reading
;; #datomic/DB {:schema <map>, :datoms <vector of [e a v tx]>}

(defn ^Datom datom-from-reader [vec]
  (apply datom vec))

#?(:clj
   (defmethod print-method Datom [^Datom d, ^java.io.Writer w]
     (.write w (str "#datascript/Datom "))
     (binding [*out* w]
       (pr [(.-e d) (.-a d) (.-v d) (datom-tx d) (datom-added d)]))))

;; ----------------------------------------------------------------------------
;; datom cmp macros/funcs
;;

#?(:clj
  (defmacro combine-cmp [& comps]
    (loop [comps (reverse comps)
           res   (num 0)]
      (if (not-empty comps)
        (recur
          (next comps)
          `(let [c# ~(first comps)]
             (if (== 0 c#)
               ~res
               c#)))
        res))))

#?(:clj
   (defn- -case-tree [queries variants]
     (if queries
       (let [v1 (take (/ (count variants) 2) variants)
             v2 (drop (/ (count variants) 2) variants)]
         (list 'if (first queries)
               (-case-tree (next queries) v1)
               (-case-tree (next queries) v2)))
       (first variants))))

#?(:clj
   (defmacro case-tree [qs vs]
     (-case-tree qs vs)))

(defn cmp [x y]
  (if (nil? x) 0
    (if (nil? y) 0
      (compare x y))))

(defn value-compare [x y]
  (cond
    (= x y) 0
    #?@(:clj  [(instance? Number x)       (clojure.lang.Numbers/compare x y)])
    #?@(:clj  [(instance? Comparable x)   (.compareTo ^Comparable x y)]
        :cljs [(satisfies? IComparable x) (-compare x y)])
    #?@(:cljs [(and (or (string? x) (array? x) (true? x) (false? x))
                 (identical? (type x) (type y))) (garray/defaultCompare x y)])
    :else (- (hash x) (hash y))))

(defn value-cmp [x y]
  (cond 
    (nil? x) 0
    (nil? y) 0
    :else     (value-compare x y)))

;; Slower cmp-* fns allows for datom fields to be nil.
;; Such datoms come from slice method where they are used as boundary markers.

(defn cmp-datoms-eavt [^Datom d1, ^Datom d2]
  (combine-cmp
    (#?(:clj Integer/compare :cljs -) (.-e d1) (.-e d2))
    (cmp (.-a d1) (.-a d2))
    (value-cmp (.-v d1) (.-v d2))
    (#?(:clj Integer/compare :cljs -) (datom-tx d1) (datom-tx d2))))

(defn cmp-datoms-aevt [^Datom d1, ^Datom d2]
  (combine-cmp
    (cmp (.-a d1) (.-a d2))
    (#?(:clj Integer/compare :cljs -) (.-e d1) (.-e d2))
    (value-cmp (.-v d1) (.-v d2))
    (#?(:clj Integer/compare :cljs -) (datom-tx d1) (datom-tx d2))))

(defn cmp-datoms-avet [^Datom d1, ^Datom d2]
  (combine-cmp
    (cmp (.-a d1) (.-a d2))
    (value-cmp (.-v d1) (.-v d2))
    (#?(:clj Integer/compare :cljs -) (.-e d1) (.-e d2))
    (#?(:clj Integer/compare :cljs -) (datom-tx d1) (datom-tx d2))))

;; fast versions without nil checks

(defn- cmp-attr-quick [a1 a2]
  ;; either both are keywords or both are strings
  #?(:cljs
     (if (keyword? a1)
       (-compare a1 a2)
       (garray/defaultCompare a1 a2))
     :clj
     (.compareTo ^Comparable a1 a2)))

(defn cmp-datoms-eav-quick [^Datom d1, ^Datom d2]
  (combine-cmp
    (#?(:clj Integer/compare :cljs -) (.-e d1) (.-e d2))
    (cmp-attr-quick (.-a d1) (.-a d2))
    (value-compare (.-v d1) (.-v d2))))

(defn cmp-datoms-eavt-quick [^Datom d1, ^Datom d2]
  (combine-cmp
    (#?(:clj Integer/compare :cljs -) (.-e d1) (.-e d2))
    (cmp-attr-quick (.-a d1) (.-a d2))
    (value-compare (.-v d1) (.-v d2))
    (#?(:clj Integer/compare :cljs -) (datom-tx d1) (datom-tx d2))))

(defn cmp-datoms-aevt-quick [^Datom d1, ^Datom d2]
  (combine-cmp
    (cmp-attr-quick (.-a d1) (.-a d2))
    (#?(:clj Integer/compare :cljs -) (.-e d1) (.-e d2))
    (value-compare (.-v d1) (.-v d2))
    (#?(:clj Integer/compare :cljs -) (datom-tx d1) (datom-tx d2))))

(defn cmp-datoms-avet-quick [^Datom d1, ^Datom d2]
  (combine-cmp
    (cmp-attr-quick (.-a d1) (.-a d2))
    (value-compare (.-v d1) (.-v d2))
    (#?(:clj Integer/compare :cljs -) (.-e d1) (.-e d2))
    (#?(:clj Integer/compare :cljs -) (datom-tx d1) (datom-tx d2))))

(defn- diff-sorted [a b cmp]
  (loop [only-a []
         only-b []
         both   []
         a      a
         b      b]
    (cond
      (empty? a) [(not-empty only-a) (not-empty (into only-b b)) (not-empty both)]
      (empty? b) [(not-empty (into only-a a)) (not-empty only-b) (not-empty both)]
      :else
      (let [first-a (first a)
            first-b (first b)
            diff (try
                   (cmp first-a first-b)
                   (catch #?(:clj ClassCastException :cljs js/Error) _
                     :incomparable))]
        (cond
          (= diff :incomparable) (recur (conj only-a first-a) (conj only-b first-b) both                (next a) (next b))
          (== diff 0)            (recur only-a                only-b                (conj both first-a) (next a) (next b))
          (< diff 0)             (recur (conj only-a first-a) only-b                both                (next a) b)
          (> diff 0)             (recur only-a                (conj only-b first-b) both                a        (next b)))))))

;; ----------------------------------------------------------------------------

(declare hash-db hash-fdb equiv-db empty-db resolve-datom validate-attr components->pattern indexing?)
#?(:cljs (declare pr-db))

;;;;;;;;;; Searching

(defprotocol ISearch
  (-search [data pattern]))

(defn- ^Datom fsearch [data pattern]
  (first (-search data pattern)))

(defprotocol IIndexAccess
  (-datoms [db index components])
  (-seek-datoms [db index components])
  (-rseek-datoms [db index components])
  (-index-range [db attr start end]))

(defn validate-indexed [db index components]
  (when (= index :avet)
    (when-some [attr (first components)]
      (when-not (indexing? db attr)
        (raise "Attribute " attr " should be marked as :db/index true"
          {:error :index-access :index :avet :components components})))))

(defprotocol IDB
  (-schema [db])
  (-attrs-by [db property]))

;; ----------------------------------------------------------------------------

(defn db-transient [db]
  (-> db
    (update :eavt transient)
    (update :aevt transient)
    (update :avet transient)))

(defn db-persistent! [db]
  (-> db
    (update :eavt persistent!)
    (update :aevt persistent!)
    (update :avet persistent!)))

(defrecord-updatable DB [schema eavt aevt avet max-eid max-tx rschema hash]
  #?@(:cljs
      [IHash                (-hash  [db]        (hash-db db))
       IEquiv               (-equiv [db other]  (equiv-db db other))
       ISeqable             (-seq   [db]        (-seq  (.-eavt db)))
       IReversible          (-rseq  [db]        (-rseq (.-eavt db)))
       ICounted             (-count [db]        (count (.-eavt db)))
       IEmptyableCollection (-empty [db]        (with-meta (empty-db (.-schema db)) (meta db)))
       IPrintWithWriter     (-pr-writer [db w opts] (pr-db db w opts))
       IEditableCollection  (-as-transient [db] (db-transient db))
       ITransientCollection (-conj! [db key] (throw (ex-info "datascript.DB/conj! is not supported" {})))
                            (-persistent! [db] (db-persistent! db))]

      :clj
      [Object               (hashCode [db]      (hash-db db))
       clojure.lang.IHashEq (hasheq [db]        (hash-db db))
       clojure.lang.Seqable (seq [db]           (seq eavt))
       clojure.lang.IPersistentCollection
                            (count [db]         (count eavt))
                            (equiv [db other]   (equiv-db db other))
       clojure.lang.IEditableCollection 
                            (empty [db]         (with-meta (empty-db schema) (meta db)))
                            (asTransient [db] (db-transient db))
       clojure.lang.ITransientCollection
                            (conj [db key] (throw (ex-info "datascript.DB/conj! is not supported" {})))
                            (persistent [db] (db-persistent! db))])

  IDB
  (-schema [db] (.-schema db))
  (-attrs-by [db property] ((.-rschema db) property))

  ISearch
  (-search [db pattern]
    (let [[e a v tx] pattern
          eavt       (.-eavt db)
          aevt       (.-aevt db)
          avet       (.-avet db)
          multival?  (contains? (-attrs-by db :db.cardinality/many) a)]
      (case-tree [e a (some? v) tx]
        [(set/slice eavt (datom e a v tx) (datom e a v tx))                   ;; e a v tx
         (set/slice eavt (datom e a v tx0) (datom e a v txmax))               ;; e a v _
         (->> (set/slice eavt (datom e a nil tx0) (datom e a nil txmax))      ;; e a _ tx
              (filter (fn [^Datom d] (= tx (datom-tx d)))))
         (set/slice eavt (datom e a nil tx0) (datom e a nil txmax))           ;; e a _ _
         (->> (set/slice eavt (datom e nil nil tx0) (datom e nil nil txmax))  ;; e _ v tx
              (filter (fn [^Datom d] (and (= v (.-v d))
                                          (= tx (datom-tx d))))))
         (->> (set/slice eavt (datom e nil nil tx0) (datom e nil nil txmax))  ;; e _ v _
              (filter (fn [^Datom d] (= v (.-v d)))))
         (->> (set/slice eavt (datom e nil nil tx0) (datom e nil nil txmax))  ;; e _ _ tx
              (filter (fn [^Datom d] (= tx (datom-tx d)))))
         (set/slice eavt (datom e nil nil tx0) (datom e nil nil txmax))       ;; e _ _ _
         (if (indexing? db a)                                                   ;; _ a v tx
           (->> (set/slice avet (datom e0 a v tx0) (datom emax a v txmax))      
                (filter (fn [^Datom d] (= tx (datom-tx d)))))
           (->> (set/slice aevt (datom e0 a nil tx0) (datom emax a nil txmax))
                (filter (fn [^Datom d] (and (= v (.-v d))
                                            (= tx (datom-tx d)))))))
         (if (indexing? db a)                                                   ;; _ a v _
           (set/slice avet (datom e0 a v tx0) (datom emax a v txmax))
           (->> (set/slice aevt (datom e0 a nil tx0) (datom emax a nil txmax))
                (filter (fn [^Datom d] (= v (.-v d))))))
         (->> (set/slice aevt (datom e0 a nil tx0) (datom emax a nil txmax))  ;; _ a _ tx
              (filter (fn [^Datom d] (= tx (datom-tx d)))))
         (set/slice aevt (datom e0 a nil tx0) (datom emax a nil txmax))       ;; _ a _ _
         (filter (fn [^Datom d] (and (= v (.-v d))
                                     (= tx (datom-tx d)))) eavt)                ;; _ _ v tx
         (filter (fn [^Datom d] (= v (.-v d))) eavt)                            ;; _ _ v _
         (filter (fn [^Datom d] (= tx (datom-tx d))) eavt)                      ;; _ _ _ tx
         eavt])))                                                               ;; _ _ _ _

  IIndexAccess
  (-datoms [db index cs]
    (validate-indexed db index cs)
    (set/slice (get db index) (components->pattern db index cs e0 tx0) (components->pattern db index cs emax txmax)))

  (-seek-datoms [db index cs]
    (validate-indexed db index cs)
    (set/slice (get db index) (components->pattern db index cs e0 tx0) (datom emax nil nil txmax)))

  (-rseek-datoms [db index cs]
    (validate-indexed db index cs)
    (set/rslice (get db index) (components->pattern db index cs emax txmax) (datom e0 nil nil tx0)))

  (-index-range [db attr start end]
    (validate-indexed db :avet [attr])
    (validate-attr attr (list '-index-range 'db attr start end))
    (set/slice (.-avet db)
      (resolve-datom db nil attr start nil e0 tx0)
      (resolve-datom db nil attr end nil emax txmax)))
                
  clojure.data/EqualityPartition
  (equality-partition [x] :datascript/db)

  clojure.data/Diff
  (diff-similar [a b]
    (diff-sorted (:eavt a) (:eavt b) cmp-datoms-eav-quick)))

(defn db? [x]
  (and (satisfies? ISearch x)
       (satisfies? IIndexAccess x)
       (satisfies? IDB x)))

;; ----------------------------------------------------------------------------
(defrecord-updatable FilteredDB [unfiltered-db pred hash]
  #?@(:cljs
      [IHash                (-hash  [db]        (hash-fdb db))
       IEquiv               (-equiv [db other]  (equiv-db db other))
       ISeqable             (-seq   [db]        (seq (-datoms db :eavt [])))
       ICounted             (-count [db]        (count (-datoms db :eavt [])))
       IPrintWithWriter     (-pr-writer [db w opts] (pr-db db w opts))

       IEmptyableCollection (-empty [_]         (throw (js/Error. "-empty is not supported on FilteredDB")))

       ILookup              (-lookup ([_ _]     (throw (js/Error. "-lookup is not supported on FilteredDB")))
                                     ([_ _ _]   (throw (js/Error. "-lookup is not supported on FilteredDB"))))


       IAssociative         (-contains-key? [_ _] (throw (js/Error. "-contains-key? is not supported on FilteredDB")))
                            (-assoc [_ _ _]       (throw (js/Error. "-assoc is not supported on FilteredDB")))]

      :clj
      [Object               (hashCode [db]      (hash-fdb db))

       clojure.lang.IHashEq (hasheq [db]        (hash-fdb db))

       clojure.lang.IPersistentCollection
                            (count [db]         (count (-datoms db :eavt [])))
                            (equiv [db o]       (equiv-db db o))
                            (cons [db [k v]]    (throw (UnsupportedOperationException. "cons is not supported on FilteredDB")))
                            (empty [db]         (throw (UnsupportedOperationException. "empty is not supported on FilteredDB")))

       clojure.lang.Seqable (seq [db]           (seq (-datoms db :eavt [])))

       clojure.lang.ILookup (valAt [db k]       (throw (UnsupportedOperationException. "valAt/2 is not supported on FilteredDB")))
                            (valAt [db k nf]    (throw (UnsupportedOperationException. "valAt/3 is not supported on FilteredDB")))
       clojure.lang.IKeywordLookup (getLookupThunk [db k]
                                                (throw (UnsupportedOperationException. "getLookupThunk is not supported on FilteredDB")))

       clojure.lang.Associative
                            (containsKey [e k]  (throw (UnsupportedOperationException. "containsKey is not supported on FilteredDB")))
                            (entryAt [db k]     (throw (UnsupportedOperationException. "entryAt is not supported on FilteredDB")))
                            (assoc [db k v]     (throw (UnsupportedOperationException. "assoc is not supported on FilteredDB")))])

  IDB
  (-schema [db]
    (-schema (.-unfiltered-db db)))

  (-attrs-by [db property]
    (-attrs-by (.-unfiltered-db db) property))

  ISearch
  (-search [db pattern]
    (filter (.-pred db) (-search (.-unfiltered-db db) pattern)))

  IIndexAccess
  (-datoms [db index cs]
    (filter (.-pred db) (-datoms (.-unfiltered-db db) index cs)))

  (-seek-datoms [db index cs]
    (filter (.-pred db) (-seek-datoms (.-unfiltered-db db) index cs)))

  (-rseek-datoms [db index cs]
    (filter (.-pred db) (-rseek-datoms (.-unfiltered-db db) index cs)))

  (-index-range [db attr start end]
    (filter (.-pred db) (-index-range (.-unfiltered-db db) attr start end))))

;; ----------------------------------------------------------------------------

(defn attr->properties [k v]
  (case v
    :db.unique/identity  [:db/unique :db.unique/identity :db/index]
    :db.unique/value     [:db/unique :db.unique/value :db/index]
    :db.cardinality/many [:db.cardinality/many]
    :db.type/ref         [:db.type/ref :db/index]
    (cond
      (and (= :db/isComponent k) (true? v)) [:db/isComponent]
      (and (= :db/index k) (true? v))       [:db/index]
      (= :db/tupleAttrs k)                  [:db.type/tuple :db/index]
      :else [])))

(defn attr-tuples
  "e.g. :reg/semester => #{:reg/semester+course+student ...}"
  [schema rschema]
  (reduce
    (fn [m tuple-attr] ;; e.g. :reg/semester+course+student
      (reduce-indexed
        (fn [m src-attr idx] ;; e.g. :reg/semester
          (update m src-attr assoc tuple-attr idx))
        m
        (-> schema tuple-attr :db/tupleAttrs)))
    {}
    (:db.type/tuple rschema)))

(defn- rschema
  ":db/unique           => #{attr ...}
   :db.unique/identity  => #{attr ...}
   :db.unique/value     => #{attr ...}
   :db/index            => #{attr ...}
   :db.cardinality/many => #{attr ...}
   :db.type/ref         => #{attr ...}
   :db/isComponent      => #{attr ...}
   :db.type/tuple       => #{attr ...}
   :db/attrTuples       => {attr => {tuple-attr => idx}}"
  [schema]
  (let [rschema (reduce-kv
                  (fn [rschema attr attr-schema]
                    (reduce-kv
                      (fn [rschema key value]
                        (reduce
                          (fn [rschema prop]
                            (update rschema prop conjs attr))
                          rschema (attr->properties key value)))
                      rschema attr-schema))
                  {} schema)]
    (assoc rschema :db/attrTuples (attr-tuples schema rschema))))

(defn- validate-schema-key [a k v expected]
  (when-not (or (nil? v)
                (contains? expected v))
    (throw (ex-info (str "Bad attribute specification for " (pr-str {a {k v}}) ", expected one of " expected)
                    {:error :schema/validation
                     :attribute a
                     :key k
                     :value v}))))

(defn- validate-schema [schema]
  (doseq [[a kv] schema]

    ;; isComponent
    (let [comp? (:db/isComponent kv false)]
      (validate-schema-key a :db/isComponent (:db/isComponent kv) #{true false})
      (when (and comp? (not= (:db/valueType kv) :db.type/ref))
        (raise "Bad attribute specification for " a ": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"
          {:error     :schema/validation
           :attribute a
           :key       :db/isComponent})))

    (validate-schema-key a :db/unique (:db/unique kv) #{:db.unique/value :db.unique/identity})
    (validate-schema-key a :db/valueType (:db/valueType kv) #{:db.type/ref})
    (validate-schema-key a :db/cardinality (:db/cardinality kv) #{:db.cardinality/one :db.cardinality/many})

    ;; :db/tupleAttrs is a non-empty sequential coll
    (when (contains? kv :db/tupleAttrs)
      (let [ex-data {:error :schema/validation
                     :attribute a
                     :key :db/tupleAttrs}]
        (when (= :db.cardinality/many (:db/cardinality kv))
          (raise a " has :db/tupleAttrs, must be :db.cardinality/one" ex-data))

        (let [attrs (:db/tupleAttrs kv)]
          (when-not (sequential? attrs)
            (raise a " :db/tupleAttrs must be a sequential collection, got: " attrs ex-data))

          (when (empty? attrs)
            (raise a " :db/tupleAttrs can’t be empty" ex-data))

          (doseq [attr attrs
                  :let [ex-data (assoc ex-data :value attr)]]
            (when (contains? (get schema attr) :db/tupleAttrs)
              (raise a " :db/tupleAttrs can’t depend on another tuple attribute: " attr ex-data))

            (when (= :db.cardinality/many (:db/cardinality (get schema attr)))
              (raise a " :db/tupleAttrs can’t depend on :db.cardinality/many attribute: " attr ex-data))))))))

(defn ^DB empty-db
  ([] (empty-db nil))
  ([schema]
    {:pre [(or (nil? schema) (map? schema))]}
    (validate-schema schema)
    (map->DB
      {:schema  schema
       :rschema (rschema (merge implicit-schema schema))
       :eavt    (set/sorted-set-by cmp-datoms-eavt)
       :aevt    (set/sorted-set-by cmp-datoms-aevt)
       :avet    (set/sorted-set-by cmp-datoms-avet)
       :max-eid e0
       :max-tx  tx0
       :hash    (atom 0)})))

(defn- init-max-eid [eavt]
  (or (-> (set/rslice eavt (datom (dec tx0) nil nil txmax) (datom e0 nil nil tx0))
        (first)
        (:e))
    e0))

(defn ^DB init-db
  ([datoms] (init-db datoms nil))
  ([datoms schema]
    (when-some [not-datom (first (drop-while datom? datoms))]
      (raise "init-db expects list of Datoms, got " (type not-datom)
        {:error :init-db}))
    (validate-schema schema)
    (let [rschema     (rschema (merge implicit-schema schema))
          indexed     (:db/index rschema)
          arr         (cond-> datoms
                        (not (arrays/array? datoms)) (arrays/into-array))
          _           (arrays/asort arr cmp-datoms-eavt-quick)
          eavt        (set/from-sorted-array cmp-datoms-eavt arr)
          _           (arrays/asort arr cmp-datoms-aevt-quick)
          aevt        (set/from-sorted-array cmp-datoms-aevt arr)
          avet-datoms (filter (fn [^Datom d] (contains? indexed (.-a d))) datoms)
          avet-arr    (to-array avet-datoms)
          _           (arrays/asort avet-arr cmp-datoms-avet-quick)
          avet        (set/from-sorted-array cmp-datoms-avet avet-arr)
          max-eid     (init-max-eid eavt)
          max-tx      (transduce (map (fn [^Datom d] (datom-tx d))) max tx0 eavt)]
      (map->DB {
        :schema  schema
        :rschema rschema
        :eavt    eavt
        :aevt    aevt
        :avet    avet
        :max-eid max-eid
        :max-tx  max-tx
        :hash    (atom 0)}))))

(defn- equiv-db-index [x y]
  (loop [xs (seq x)
         ys (seq y)]
    (cond
      (nil? xs) (nil? ys)
      (= (first xs) (first ys)) (recur (next xs) (next ys))
      :else false)))

(defn- hash-db [^DB db]
  (let [h @(.-hash db)]
    (if (zero? h)
      (reset! (.-hash db) (combine-hashes (hash (.-schema db))
                                          (hash (.-eavt db))))
      h)))

(defn- hash-fdb [^FilteredDB db]
  (let [h @(.-hash db)
        datoms (or (-datoms db :eavt []) #{})]
    (if (zero? h)
      (let [datoms (or (-datoms db :eavt []) #{})]
        (reset! (.-hash db) (combine-hashes (hash (-schema db))
                                            (hash-unordered-coll datoms))))
      h)))

(defn- equiv-db [db other]
  (and (or (instance? DB other) (instance? FilteredDB other))
       (= (-schema db) (-schema other))
       (equiv-db-index (-datoms db :eavt []) (-datoms other :eavt []))))

#?(:cljs
   (defn pr-db [db w opts]
     (-write w "#datascript/DB {")
     (-write w ":schema ")
     (pr-writer (-schema db) w opts)
     (-write w ", :datoms ")
     (pr-sequential-writer w
                           (fn [d w opts]
                             (pr-sequential-writer w pr-writer "[" " " "]" opts [(.-e d) (.-a d) (.-v d) (datom-tx d)]))
                           "[" " " "]" opts (-datoms db :eavt []))
     (-write w "}")))

#?(:clj
   (do
     (defn pr-db [db, ^java.io.Writer w]
       (.write w (str "#datascript/DB {"))
       (.write w ":schema ")
       (binding [*out* w]
         (pr (-schema db))
         (.write w ", :datoms [")
         (apply pr (map (fn [^Datom d] [(.-e d) (.-a d) (.-v d) (datom-tx d)]) (-datoms db :eavt []))))
       (.write w "]}"))

     (defmethod print-method DB [db w] (pr-db db w))
     (defmethod print-method FilteredDB [db w] (pr-db db w))     
))

(defn db-from-reader [{:keys [schema datoms]}]
  (init-db (map (fn [[e a v tx]] (datom e a v tx)) datoms) schema))

;; ----------------------------------------------------------------------------

(declare entid-strict entid-some ref?)

(defn- resolve-datom [db e a v t default-e default-tx]
  (when a (validate-attr a (list 'resolve-datom 'db e a v t)))
  (datom
    (or (entid-some db e) default-e)  ;; e
    a                                 ;; a
    (if (and (some? v) (ref? db a))   ;; v
      (entid-strict db v)
      v)
    (or (entid-some db t) default-tx))) ;; t

(defn- components->pattern [db index [c0 c1 c2 c3] default-e default-tx]
  (case index
    :eavt (resolve-datom db c0 c1 c2 c3 default-e default-tx)
    :aevt (resolve-datom db c1 c0 c2 c3 default-e default-tx)
    :avet (resolve-datom db c2 c0 c1 c3 default-e default-tx)))

;; ----------------------------------------------------------------------------

(defrecord TxReport [db-before db-after tx-data tempids tx-meta])

(defn #?@(:clj  [^Boolean is-attr?]
          :cljs [^boolean is-attr?]) [db attr property]
  (contains? (-attrs-by db property) attr))

(defn #?@(:clj  [^Boolean multival?]
          :cljs [^boolean multival?]) [db attr]
  (is-attr? db attr :db.cardinality/many))

(defn #?@(:clj  [^Boolean ref?]
          :cljs [^boolean ref?]) [db attr]
  (is-attr? db attr :db.type/ref))

(defn #?@(:clj  [^Boolean component?]
          :cljs [^boolean component?]) [db attr]
  (is-attr? db attr :db/isComponent))

(defn #?@(:clj  [^Boolean indexing?]
          :cljs [^boolean indexing?]) [db attr]
  (is-attr? db attr :db/index))

(defn #?@(:clj  [^Boolean tuple?]
          :cljs [^boolean tuple?]) [db attr]
  (is-attr? db attr :db.type/tuple))

(defn #?@(:clj  [^Boolean tuple-source?]
          :cljs [^boolean tuple-source?]) [db attr]
  (is-attr? db attr :db/attrTuples))

(defn entid [db eid]
  {:pre [(db? db)]}
  (cond
    (and (number? eid) (pos? eid))
    (if (> eid emax)
      (raise "Highest supported entity id is " emax ", got " eid {:error :entity-id :value eid})
      eid)
    
    (sequential? eid)
    (let [[attr value] eid]
      (cond
        (not= (count eid) 2)
          (raise "Lookup ref should contain 2 elements: " eid
            {:error :lookup-ref/syntax, :entity-id eid})
        (not (is-attr? db attr :db/unique))
          (raise "Lookup ref attribute should be marked as :db/unique: " eid
            {:error :lookup-ref/unique, :entity-id eid})
        (nil? value)
          nil
        :else
          (-> (-datoms db :avet eid) first :e)))
    
    #?@(:cljs [(array? eid) (recur db (array-seq eid))])
    
    (keyword? eid)
    (-> (-datoms db :avet [:db/ident eid]) first :e)

    :else
    (raise "Expected number or lookup ref for entity id, got " eid
      {:error :entity-id/syntax, :entity-id eid})))

(defn entid-strict [db eid]
  (or (entid db eid)
      (raise "Nothing found for entity id " eid
             {:error :entity-id/missing
              :entity-id eid})))

(defn entid-some [db eid]
  (when eid
    (entid-strict db eid)))

;;;;;;;;;; Transacting

(defn validate-datom [db ^Datom datom]
  (when (and (datom-added datom)
             (is-attr? db (.-a datom) :db/unique))
    (when-some [found (not-empty (-datoms db :avet [(.-a datom) (.-v datom)]))]
      (raise "Cannot add " datom " because of unique constraint: " found
             {:error :transact/unique
              :attribute (.-a datom)
              :datom datom}))))

(defn- validate-attr [attr at]
  (when-not (or (keyword? attr) (string? attr))
    (raise "Bad entity attribute " attr " at " at ", expected keyword or string"
           {:error :transact/syntax, :attribute attr, :context at})))

(defn- validate-val [v at]
  (when (nil? v)
    (raise "Cannot store nil as a value at " at
           {:error :transact/syntax, :value v, :context at})))

(defn- current-tx [report]
  (inc (get-in report [:db-before :max-tx])))

(defn- next-eid [db]
  (inc (:max-eid db)))

(defn- #?@(:clj  [^Boolean tx-id?]
           :cljs [^boolean tx-id?])
  [e]
  (or (= e :db/current-tx)
      (= e ":db/current-tx") ;; for datascript.js interop
      (= e "datomic.tx")
      (= e "datascript.tx")))

(defn- #?@(:clj  [^Boolean tempid?]
           :cljs [^boolean tempid?])
  [x]
  (or (and (number? x) (neg? x)) (string? x)))

(defn- new-eid? [db eid]
  (and (> eid (:max-eid db))
       (< eid tx0))) ;; tx0 is max eid

(defn- advance-max-eid [db eid]
  (cond-> db
    (new-eid? db eid)
      (assoc :max-eid eid)))

(defn- allocate-eid
  ([report eid]
    (update report :db-after advance-max-eid eid))
  ([report e eid]
    (cond-> report
      (tx-id? e)
      (update :tempids assoc e eid)

      (tempid? e)
      (update :tempids assoc e eid)

      (and (not (tempid? e)) (new-eid? (:db-after report) eid))
      (update :tempids assoc eid eid)

      true
      (update :db-after advance-max-eid eid))))

;; In context of `with-datom` we can use faster comparators which
;; do not check for nil (~10-15% performance gain in `transact`)

(defn- with-datom [db ^Datom datom]
  (validate-datom db datom)
  (let [indexing? (indexing? db (.-a datom))]
    (if (datom-added datom)
      (cond-> db
        true      (update :eavt set/conj datom cmp-datoms-eavt-quick)
        true      (update :aevt set/conj datom cmp-datoms-aevt-quick)
        indexing? (update :avet set/conj datom cmp-datoms-avet-quick)
        true      (advance-max-eid (.-e datom))
        true      (assoc :hash (atom 0)))
      (if-some [removing (fsearch db [(.-e datom) (.-a datom) (.-v datom)])]
        (cond-> db
          true      (update :eavt set/disj removing cmp-datoms-eavt-quick)
          true      (update :aevt set/disj removing cmp-datoms-aevt-quick)
          indexing? (update :avet set/disj removing cmp-datoms-avet-quick)
          true      (assoc :hash (atom 0)))
        db))))

(defn- queue-tuple [queue tuple idx db e a v]
  (let [tuple-value  (or (get queue tuple)
                       (:v (first (-datoms db :eavt [e tuple])))
                       (vec (repeat (-> db (-schema) (get tuple) :db/tupleAttrs count) nil)))
        tuple-value' (assoc tuple-value idx v)]
    (assoc queue tuple tuple-value')))

(defn- queue-tuples [queue tuples db e a v]
  (reduce-kv
    (fn [queue tuple idx]
      (queue-tuple queue tuple idx db e a v))
    queue
    tuples))

(defn- transact-report [report datom]
  (let [db      (:db-after report)
        a       (:a datom)
        report' (-> report
                  (assoc :db-after (with-datom db datom))
                  (update :tx-data conj datom))]
    (if (tuple-source? db a)
      (let [e      (:e datom)
            v      (if (datom-added datom) (:v datom) nil)
            queue  (or (-> report' ::queued-tuples (get e)) {})
            tuples (get (-attrs-by db :db/attrTuples) a)
            queue' (queue-tuples queue tuples db e a v)]
        (update report' ::queued-tuples assoc e queue'))
      report')))

(defn #?@(:clj  [^Boolean reverse-ref?]
          :cljs [^boolean reverse-ref?]) [attr]
  (cond
    (keyword? attr)
    (= \_ (nth (name attr) 0))
    
    (string? attr)
    (boolean (re-matches #"(?:([^/]+)/)?_([^/]+)" attr))
   
    :else
    (raise "Bad attribute type: " attr ", expected keyword or string"
           {:error :transact/syntax, :attribute attr})))

(defn reverse-ref [attr]
  (cond
    (keyword? attr)
    (if (reverse-ref? attr)
      (keyword (namespace attr) (subs (name attr) 1))
      (keyword (namespace attr) (str "_" (name attr))))

   (string? attr)
   (let [[_ ns name] (re-matches #"(?:([^/]+)/)?([^/]+)" attr)]
     (if (= \_ (nth name 0))
       (if ns (str ns "/" (subs name 1)) (subs name 1))
       (if ns (str ns "/_" name) (str "_" name))))
   
   :else
    (raise "Bad attribute type: " attr ", expected keyword or string"
           {:error :transact/syntax, :attribute attr})))

(defn- resolve-upserts
  "Returns [entity' upserts]. Upsert attributes that resolve to existing entities
   are removed from entity, rest are kept in entity for insertion. No validation is performed.

   upserts :: {:name  {\"Ivan\"  1}
               :email {\"ivan@\" 2}
               :alias {\"abc\"   3
                       \"def\"   4}}}"
  [db entity]
  (if-some [idents (not-empty (-attrs-by db :db.unique/identity))]
    (let [resolve (fn [a v]
                    (:e (first (-datoms db :avet [a v]))))
          split   (fn [a vs]
                    (reduce
                      (fn [acc v]
                        (if-some [e (resolve a v)]
                          (update acc 1 assoc v e)
                          (update acc 0 conj v)))
                      [[] {}] vs))]
      (reduce-kv
        (fn [[entity upserts] a v]
          (cond
            (not (contains? idents a))
            [(assoc entity a v) upserts]

            (and
              (multival? db a)
              (or
                (arrays/array? v)
                (and (coll? v) (not (map? v)))))
            (let [[insert upsert] (split a v)]
              [(cond-> entity
                 (not (empty? insert)) (assoc a insert))
               (cond-> upserts
                 (not (empty? upsert)) (assoc a upsert))])

            :else
            (if-some [e (resolve a v)]
              [entity (assoc upserts a {v e})]
              [(assoc entity a v) upserts])))
        [{} {}]
        entity))
    [entity nil]))

(defn validate-upserts
  "Throws if not all upserts point to the same entity. 
   Returns single eid that all upserts point to, or null."
  [entity upserts]
  (let [upsert-ids (reduce-kv
                     (fn [m a v->e]
                       (reduce-kv
                         (fn [m v e]
                           (assoc m e [a v]))
                         m v->e))
                     {} upserts)]
    (if (<= 2 (count upsert-ids))
      (let [[e1 [a1 v1]] (first upsert-ids)
            [e2 [a2 v2]] (second upsert-ids)]
        (raise "Conflicting upserts: " [a1 v1] " resolves to " e1 ", but " [a2 v2] " resolves to " e2
          {:error     :transact/upsert
           :assertion [e1 a1 v1]
           :conflict  [e2 a2 v2]}))
      (let [[upsert-id [a v]] (first upsert-ids)
            eid (:db/id entity)]
        (when (and
                (some? upsert-id)
                (some? eid)
                (not (tempid? eid))
                (not= upsert-id eid))
          (raise "Conflicting upsert: " [a v] " resolves to " upsert-id ", but entity already has :db/id " eid
            {:error     :transact/upsert
             :assertion [upsert-id a v]
             :conflict  {:db/id eid}}))
        upsert-id))))

;; multivals/reverse can be specified as coll or as a single value, trying to guess
(defn- maybe-wrap-multival [db a vs]
  (cond
    ;; not a multival context
    (not (or (reverse-ref? a)
             (multival? db a)))
    [vs]

    ;; not a collection at all, so definitely a single value
    (not (or (arrays/array? vs)
             (and (coll? vs) (not (map? vs)))))
    [vs]
    
    ;; probably lookup ref
    (and (= (count vs) 2)
         (is-attr? db (first vs) :db.unique/identity))
    [vs]
    
    :else vs))

(defn- explode [db entity]
  (let [eid (:db/id entity)]
    (for [[a vs] entity
          :when  (not= a :db/id)
          :let   [_          (validate-attr a {:db/id eid, a vs})
                  reverse?   (reverse-ref? a)
                  straight-a (if reverse? (reverse-ref a) a)
                  _          (when (and reverse? (not (ref? db straight-a)))
                               (raise "Bad attribute " a ": reverse attribute name requires {:db/valueType :db.type/ref} in schema"
                                      {:error :transact/syntax, :attribute a, :context {:db/id eid, a vs}}))]
          v      (maybe-wrap-multival db a vs)]
      (if (and (ref? db straight-a) (map? v)) ;; another entity specified as nested map
        (assoc v (reverse-ref a) eid)
        (if reverse?
          [:db/add v   straight-a eid]
          [:db/add eid straight-a v])))))

(defn- transact-add [report [_ e a v tx :as ent]]
  (validate-attr a ent)
  (validate-val  v ent)
  (let [tx        (or tx (current-tx report))
        db        (:db-after report)
        e         (entid-strict db e)
        v         (if (ref? db a) (entid-strict db v) v)
        new-datom (datom e a v tx)
        multival? (multival? db a)
        old-datom ^Datom (if multival?
                           (fsearch db [e a v])
                           (fsearch db [e a]))]
      (cond
        (nil? old-datom)
        (transact-report report new-datom)

        (= (.-v old-datom) v)
        (update report ::tx-redundant conjv new-datom)

        :else
        (-> report
          (transact-report (datom e a (.-v old-datom) tx false))
          (transact-report new-datom)))))

(defn- transact-retract-datom [report ^Datom d]
  (let [tx (current-tx report)]
    (transact-report report (datom (.-e d) (.-a d) (.-v d) tx false))))

(defn- retract-components [db datoms]
  (into #{} (comp
              (filter (fn [^Datom d] (component? db (.-a d))))
              (map (fn [^Datom d] [:db.fn/retractEntity (.-v d)]))) datoms))

(declare transact-tx-data)

(defn- retry-with-tempid [initial-report report es tempid upserted-eid]
  (if (contains? (:tempids initial-report) tempid)
    (raise "Conflicting upsert: " tempid " resolves"
           " both to " upserted-eid " and " (get-in initial-report [:tempids tempid])
      {:error :transact/upsert})
    ;; try to re-run from the beginning
    ;; but remembering that `tempid` will resolve to `upserted-eid`
    (let [tempids' (-> (:tempids report)
                     (assoc tempid upserted-eid))
          report'  (assoc initial-report :tempids tempids')]
      (transact-tx-data report' es))))

(def builtin-fn?
  #{:db.fn/call
    :db.fn/cas
    :db/cas
    :db/add
    :db/retract
    :db.fn/retractAttribute
    :db.fn/retractEntity
    :db/retractEntity})

(defn flush-tuples [report]
  (let [db          (:db-after report)
        schema      (-schema db)
        attr-tuples (-attrs-by db :db/attrTuples)]
    (reduce-kv
      (fn [entities eid tuples+values]
        (reduce-kv
          (fn [entities tuple value]
            (let [value   (if (every? nil? value) nil value)
                  current (:v (first (-datoms db :eavt [eid tuple])))]
              (cond
                (= value current) entities
                (nil? value)      (conj entities ^::internal [:db/retract eid tuple current])
                :else             (conj entities ^::internal [:db/add eid tuple value]))))
          entities
          tuples+values))
      []
      (::queued-tuples report))))

(defn check-value-tempids [report]
  (let [all-tempids (::value-tempids report)
        reduce-fn   (fn [tempids datom]
                      (if (datom-added datom)
                        (dissoc tempids (:e datom))
                        tempids))
        unused      (reduce reduce-fn all-tempids (concat (:tx-data report) (::tx-redundant report)))]
    (if (empty? unused)
      (dissoc report ::value-tempids ::tx-redundant)
      (raise "Tempids used only as value in transaction: " (sort (vals unused))
        {:error :transact/syntax, :tempids unused}))))

(defn transact-tx-data [initial-report initial-es]
  (when-not (or (nil? initial-es)
                (sequential? initial-es))
    (raise "Bad transaction data " initial-es ", expected sequential collection"
           {:error :transact/syntax, :tx-data initial-es}))
  (let [initial-report' (-> initial-report
                          #_(update :db-after transient))
        has-tuples?     (not (empty? (-attrs-by (:db-after initial-report) :db.type/tuple)))
        initial-es'     (if has-tuples?
                          (interleave initial-es (repeat ::flush-tuples))
                          initial-es)]
    (loop [report initial-report'
           es     initial-es']
      (cond+
        (empty? es)
        (-> report
          (check-value-tempids)
          (update :tempids assoc :db/current-tx (current-tx report))
          (update :db-after update :max-tx inc)
          #_(update :db-after persistent!))

        :let [[entity & entities] es]

        (nil? entity)
        (recur report entities)

        (= ::flush-tuples entity)
        (if (contains? report ::queued-tuples)
          (recur
            (dissoc report ::queued-tuples)
            (concat (flush-tuples report) entities))
          (recur report entities))

        :let [db      (:db-after report)
              tempids (:tempids report)]

        (map? entity)
        (let [old-eid (:db/id entity)]
          (cond+
            ;; trivial entity
            ; (if (contains? entity :db/id)
            ;   (= 1 (count entity))
            ;   (= 0 (count entity)))
            ; (recur report entities)

            ;; :db/current-tx / "datomic.tx" => tx
            (tx-id? old-eid)
            (let [id (current-tx report)]
              (recur (allocate-eid report old-eid id)
                     (cons (assoc entity :db/id id) entities)))
           
            ;; lookup-ref => resolved | error
            (sequential? old-eid)
            (let [id (entid-strict db old-eid)]
              (recur report
                     (cons (assoc entity :db/id id) entities)))
           
            ;; upserted => explode | error
            :let [[entity' upserts] (resolve-upserts db entity)
                  upserted-eid      (validate-upserts entity' upserts)]

            (some? upserted-eid)
            (if (and (tempid? old-eid)
                     (contains? tempids old-eid)
                     (not= upserted-eid (get tempids old-eid)))
              (retry-with-tempid initial-report report initial-es old-eid upserted-eid)
              (recur (allocate-eid report old-eid upserted-eid)
                     (concat (explode db (assoc entity' :db/id upserted-eid)) entities)))
           
            ;; resolved | allocated-tempid | tempid | nil => explode
            (or (number? old-eid)
                (nil?    old-eid)
                (string? old-eid))
            (let [new-eid (cond
                            (nil? old-eid)    (next-eid db)
                            (tempid? old-eid) (or (get tempids old-eid) (next-eid db))
                            :else             old-eid)
                  new-entity (assoc entity :db/id new-eid)]                
              (recur (allocate-eid report old-eid new-eid)
                     (concat (explode db new-entity) entities)))
           
            ;; trash => error
            :else
            (raise "Expected number, string or lookup ref for :db/id, got " old-eid
              { :error :entity-id/syntax, :entity entity })))

        (sequential? entity)
        (let [[op e a v] entity]
          (cond
            (= op :db.fn/call)
            (let [[_ f & args] entity]
              (recur report (concat (apply f db args) entities)))
            
            (and (keyword? op)
              (not (builtin-fn? op)))
            (if-some [ident (entid db op)]
              (let [fun  (:v (fsearch db [ident :db/fn]))
                    args (next entity)]
                (if (fn? fun)
                  (recur report (concat (apply fun db args) entities))
                  (raise "Entity " op " expected to have :db/fn attribute with fn? value"
                         {:error :transact/syntax, :operation :db.fn/call, :tx-data entity})))
              (raise "Can’t find entity for transaction fn " op
                     {:error :transact/syntax, :operation :db.fn/call, :tx-data entity}))
            
            (and (tempid? e)
              (not= op :db/add))
            (raise "Can't use tempid in '" entity "'. Tempids are allowed in :db/add only"
              { :error :transact/syntax, :op entity })

            (or (= op :db.fn/cas)
              (= op :db/cas))
            (let [[_ e a ov nv] entity
                  e (entid-strict db e)
                  _ (validate-attr a entity)
                  ov (if (ref? db a) (entid-strict db ov) ov)
                  nv (if (ref? db a) (entid-strict db nv) nv)
                  _ (validate-val nv entity)
                  datoms (vec (-search db [e a]))]
              (if (multival? db a)
                (if (some (fn [^Datom d] (= (.-v d) ov)) datoms)
                  (recur (transact-add report [:db/add e a nv]) entities)
                  (raise ":db.fn/cas failed on datom [" e " " a " " (map :v datoms) "], expected " ov
                         {:error :transact/cas, :old datoms, :expected ov, :new nv}))
                (let [v (:v (first datoms))]
                  (if (= v ov)
                    (recur (transact-add report [:db/add e a nv]) entities)
                    (raise ":db.fn/cas failed on datom [" e " " a " " v "], expected " ov
                           {:error :transact/cas, :old (first datoms), :expected ov, :new nv })))))

            (tx-id? e)
            (recur (allocate-eid report e (current-tx report)) (cons [op (current-tx report) a v] entities))

            (and (ref? db a) (tx-id? v))
            (recur (allocate-eid report v (current-tx report)) (cons [op e a (current-tx report)] entities))

            (and (ref? db a) (tempid? v))
            (if-some [resolved (get tempids v)]
              (let [report' (update report ::value-tempids assoc resolved v)]
                (recur report' (cons [op e a resolved] entities)))
              (let [resolved (next-eid db)
                    report'  (-> report
                               (allocate-eid v resolved)
                               (update ::value-tempids assoc resolved v))]
                (recur report' es)))

            (tempid? e)
            (let [upserted-eid  (when (is-attr? db a :db.unique/identity)
                                  (:e (first (-datoms db :avet [a v]))))
                  allocated-eid (get tempids e)]
              (if (and upserted-eid allocated-eid (not= upserted-eid allocated-eid))
                (retry-with-tempid initial-report report initial-es e upserted-eid)
                (let [eid (or upserted-eid allocated-eid (next-eid db))]
                  (recur (allocate-eid report e eid) (cons [op eid a v] entities)))))

            (and (not (::internal (meta entity)))
              (tuple? db a))
            (raise "Can’t modify tuple attrs directly: " entity
              {:error :transact/syntax, :tx-data entity})

            (= op :db/add)
            (recur (transact-add report entity) entities)

            (and (= op :db/retract) (some? v))
            (if-some [e (entid db e)]
              (let [v (if (ref? db a) (entid-strict db v) v)]
                (validate-attr a entity)
                (validate-val v entity)
                (if-some [old-datom (fsearch db [e a v])]
                  (recur (transact-retract-datom report old-datom) entities)
                  (recur report entities)))
              (recur report entities))

            (or (= op :db.fn/retractAttribute)
                (= op :db/retract))
            (if-some [e (entid db e)]
              (let [_      (validate-attr a entity)
                    datoms (vec (-search db [e a]))]
                (recur (reduce transact-retract-datom report datoms)
                       (concat (retract-components db datoms) entities)))
              (recur report entities))

            (or (= op :db.fn/retractEntity)
                (= op :db/retractEntity))
            (if-some [e (entid db e)]
              (let [e-datoms (vec (-search db [e]))
                    v-datoms (vec (mapcat (fn [a] (-search db [nil a e])) (-attrs-by db :db.type/ref)))]
                (recur (reduce transact-retract-datom report (concat e-datoms v-datoms))
                       (concat (retract-components db e-datoms) entities)))
              (recur report entities))

           :else
           (raise "Unknown operation at " entity ", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute, :db.fn/retractEntity or an ident corresponding to an installed transaction function (e.g. {:db/ident <keyword> :db/fn <Ifn>}, usage of :db/ident requires {:db/unique :db.unique/identity} in schema)" {:error :transact/syntax, :operation op, :tx-data entity})))
       
       (datom? entity)
       (let [[e a v tx added] entity]
         (if added
           (recur (transact-add report [:db/add e a v tx]) entities)
           (recur report (cons [:db/retract e a v] entities))))

       :else
       (raise "Bad entity type at " entity ", expected map or vector"
              {:error :transact/syntax, :tx-data entity})))))
