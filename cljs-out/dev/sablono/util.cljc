(ns sablono.util
  #?(:cljs (:import goog.Uri))
  (:require [clojure.set :refer [rename-keys]]
            [clojure.string :as str]))

(def ^:dynamic *base-url* nil)

(defprotocol ToString
  (to-str [x] "Convert a value into a string."))

(defprotocol ToURI
  (to-uri [x] "Convert a value into a URI."))

(defn as-str
  "Converts its arguments into a string using to-str."
  [& xs]
  (str/join (map to-str xs)))

(defn camel-case
  "Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv."
  [k]
  (if (or (keyword? k)
          (string? k)
          (symbol? k))
    (let [[first-word & words] (.split (name k) "-")]
      (if (or (empty? words)
              (= "aria" first-word)
              (= "data" first-word))
        k
        (-> (map str/capitalize words)
            (conj first-word)
            str/join
            keyword)))
    k))

(defn camel-case-keys
  "Recursively transforms all map keys into camel case."
  [m]
  (if (map? m)
    (let [m (into {}
                  (map (fn [[k v]] [(camel-case k) v]))
                  m)]
      (cond-> m
        (map? (:style m))
        (update :style camel-case-keys)))
    m))

(defn element?
  "Return true if `x` is an HTML element. True when `x` is a vector
  and the first element is a keyword, e.g. `[:div]` or `[:div [:span \"x\"]`."
  [x]
  (and (vector? x)
       (keyword? (first x))))

(defn html-to-dom-attrs
  "Converts all HTML attributes to their DOM equivalents."
  [attrs]
  (rename-keys (camel-case-keys attrs)
               {:class :className
                :for :htmlFor}))

(defn join-classes
  "Join the `classes` with a whitespace."
  [classes]
  (->> classes
       (into [] (comp
                 (mapcat (fn [x] (if (string? x) [x] (seq x))))
                 (remove nil?)))
       (str/join " ")))

#?(:cljs
   (extend-protocol ToString
     cljs.core.Keyword
     (to-str [x]
       (name x))
     goog.Uri
     (to-str [x]
       (if (or (. x (hasDomain))
               (nil? (. x (getPath)))
               (not (re-matches #"^/.*" (. x (getPath)))))
         (str x)
         (let [base (str *base-url*)]
           (if (re-matches #".*/$" base)
             (str (subs base 0 (dec (count base))) x)
             (str base x)))))
     nil
     (to-str [_]
       "")
     number
     (to-str [x]
       (str x))
     default
     (to-str [x]
       (str x))))

#?(:cljs
   (extend-protocol ToURI
     Uri
     (to-uri [x] x)
     default
     (to-uri [x] (Uri. (str x)))))
