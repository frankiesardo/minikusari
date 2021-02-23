(ns ^:no-doc me.tonsky.persistent-sorted-set.arrays
  (:require
    [clojure.string :as str])
  (:refer-clojure :exclude [make-array into-array array amap aget aset alength array? aclone])
  #?(:cljs (:require-macros me.tonsky.persistent-sorted-set.arrays))
  #?(:clj  (:import [java.util Arrays])))


(defn- if-cljs [env then else]
  (if (:ns env) then else))


#?(:cljs
   (defn ^array make-array [size] (js/Array. size))
   :clj 
   (defn make-array ^{:tag "[[Ljava.lang.Object;"} [size]
     (clojure.core/make-array java.lang.Object size)))


#?(:cljs
   (defn ^array into-array [aseq]
     (reduce (fn [a x] (.push a x) a) (js/Array.) aseq))
   :clj
   (defn into-array ^{:tag "[[Ljava.lang.Object;"} [aseq]
     (clojure.core/into-array java.lang.Object aseq)))


#?(:clj
  (defmacro aget [arr i]
    (if-cljs &env
      (list 'js* "(~{}[~{}])" arr i)
     `(clojure.lang.RT/aget ~(vary-meta arr assoc :tag "[[Ljava.lang.Object;") (int ~i)))))


#?(:clj
  (defmacro alength [arr]
    (if-cljs &env
      (-> (list 'js* "~{}.length" arr)
          (vary-meta assoc :tag 'number))
     `(clojure.lang.RT/alength ~(vary-meta arr assoc :tag "[[Ljava.lang.Object;")))))


#?(:clj
  (defmacro aset [arr i v]
    (if-cljs &env
      (list 'js* "(~{}[~{}] = ~{})" arr i v)
     `(clojure.lang.RT/aset ~(vary-meta arr assoc :tag "[[Ljava.lang.Object;") (int ~i) ~v))))


#?(:clj
  (defmacro array [& args]
    (if-cljs &env
      (->
        (list* 'js* (str "[" (str/join "," (repeat (count args) "~{}")) "]") args)
        (vary-meta assoc :tag 'array))
      (let [len (count args)]
        (if (zero? len)
          'clojure.lang.RT/EMPTY_ARRAY
         `(let [arr# (clojure.core/make-array java.lang.Object ~len)]
            (doto ^{:tag "[[Ljava.lang.Object;"} arr#
            ~@(map #(list 'aset % (nth args %)) (range len)))))))))


#?(:clj
  (defmacro acopy [from from-start from-end to to-start]
    (if-cljs &env
     `(let [l# (- ~from-end ~from-start)]
        (dotimes [i# l#]
          (aset ~to (+ i# ~to-start) (aget ~from (+ i# ~from-start)))))
     `(let [l# (- ~from-end ~from-start)]
        (when (pos? l#)
          (System/arraycopy ~from ~from-start ~to ~to-start l#))))))


(defn aclone [from]
  #?(:clj  (Arrays/copyOf ^{:tag "[[Ljava.lang.Object;"} from (alength from))
     :cljs (.slice from 0)))


(defn aconcat [a b]
  #?(:cljs (.concat a b)
     :clj  (let [al  (alength a)
                 bl  (alength b)
                 res (Arrays/copyOf ^{:tag "[[Ljava.lang.Object;"} a (+ al bl))]
             (System/arraycopy ^{:tag "[[Ljava.lang.Object;"} b 0 res al bl)
             res)))


#?(:cljs
   (defn amap [f arr]
     (.map arr f))
   :clj
   (defn amap 
     ([f arr]
      (amap f Object arr))
     ([f type arr] ;; TODO check if faster in Java
      (let [res (clojure.core/make-array type (alength arr))]
        (dotimes [i (alength arr)]
          (aset res i (f (aget arr i))))
        res))))


(defn asort [arr cmp]
  #?(:cljs (.sort arr cmp)
     :clj  (doto arr (Arrays/parallelSort cmp))))


#?(:cljs
   (defn ^boolean array? [x]
     (if (identical? *target* "nodejs")
       (.isArray js/Array x)
       (instance? js/Array x)))
   :clj
   (defn array? [^Object x]
     (-> x .getClass .isArray)))


#?(:clj
   (defmacro alast [arr]
     `(let [arr# ~arr]
        (aget arr# (dec (alength arr#))))))


#?(:clj
   (defmacro half [x]
     `(unsigned-bit-shift-right ~x 1)))


#?(:clj
  (def array-type
    (memoize
      (fn [type]
        (.getClass ^Object (java.lang.reflect.Array/newInstance ^Class type 0))))))
