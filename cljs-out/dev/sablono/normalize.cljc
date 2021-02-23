(ns sablono.normalize
  (:refer-clojure :exclude [class])
  (:require #?(:clj [om.next.protocols :as p])
            #?(:clj [om.dom :as dom])
            [clojure.set :as set]
            [clojure.string :as str]
            [sablono.util :as util]))

(defn compact-map
  "Removes all map entries where the value of the entry is empty."
  [m]
  (when m
    (into {}
          (remove (fn [[_ v]] (empty? v)))
          m)))

(defn class-name
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    :else x))

(defn map-lookup?
  "Returns true if `x` is a map lookup form, otherwise false."
  [x]
  (and (list? x) (keyword? (first x))))

(defn class
  "Normalize `class` into a vector of classes."
  [class]
  (cond
    (nil? class)
    nil

    (map-lookup? class)
    [class]

    (list? class)
    (if (symbol? (first class))
      [class]
      (map class-name class))

    (symbol? class)
    [class]

    (string? class)
    [class]

    (keyword? class)
    [(class-name class)]

    (and (or (set? class)
             (sequential? class))
         (every? #(or (keyword? %)
                      (string? %))
                 class))
    (mapv class-name class)

    (and (or (set? class)
             (sequential? class)))
    (mapv class-name class)

    :else class))

(defn attributes
  "Normalize the `attrs` of an element."
  [attrs]
  (cond-> attrs
    (:class attrs)
    (update-in [:class] class)))

(defn merge-with-class
  "Like clojure.core/merge but concatenate :class entries."
  [& maps]
  (let [maps (map attributes maps)
        classes (mapcat :class maps)]
    (when (seq maps)
      (cond-> (reduce into {} maps)
        (not (empty? classes))
        (assoc :class (vec classes))))))

(defn strip-css
  "Strip the # and . characters from the beginning of `s`."
  [s]
  (when s
    (str/replace s #"^[.#]" "")))

(defn match-tag
  "Match `s` as a CSS tag and return a vector of tag name, CSS id and
  CSS classes."
  [s]
  (let [matches (re-seq #"[#.]?[^#.]+" (name s))
        [tag-name names]
        (cond (empty? matches)
              (throw (ex-info (str "Can't match CSS tag: " s) {:tag s}))

              (#{\# \.} (ffirst matches)) ;; shorthand for div
              ["div" matches]

              :default
              [(first matches) (rest matches)])]
    [tag-name
     (strip-css (some #(when (= \# (first %1)) %1)  names))
     (into []
           (comp (filter #(= \. (first %1))) (map strip-css))
           names)]))

(defn children
  "Normalize the children of a HTML element."
  [x]
  (->> (cond
         (nil? x)
         '()
         (string? x)
         (list x)

         (util/element? x)
         (list x)
         (and (list? x) (symbol? (first x)))
         (list x)

         (list? x)
         x

         (and (sequential? x)
              (= (count x) 1)
              (sequential? (first x))
              (not (string? (first x)))
              (not (util/element? (first x))))
         (children (first x))

         (sequential? x)
         x

         :else (list x))
       (remove nil?)))

(defn- attrs?
  "Returns true if `x` are the attributes of an HTML element,
  otherwise false."
  [x]
  (and (map? x)
       ;; Server rendered Om.next components are also maps. They
       ;; should NOT be treated as HTML element attributes.
       #?(:clj (and (not (instance? om.dom.Element x))
                    (not (instance? om.next.protocols.IReactComponent x))
                    (not (satisfies? p/IReactComponent x))))))

(defn element
  "Ensure an element vector is of the form [tag-name attrs content]."
  [[tag & content]]
  (when-not (or (keyword? tag)
                (symbol? tag)
                (string? tag))
    (throw (ex-info (str tag " is not a valid element name.") {:tag tag :content content})))
  (let [[tag id class] (match-tag tag)
        tag-attrs (compact-map {:id id :class class})
        map-attrs (first content)]
    (if (attrs? map-attrs)
      [tag
       (merge-with-class tag-attrs map-attrs)
       (children (next content))]
      [tag
       (attributes tag-attrs)
       (children content)])))
