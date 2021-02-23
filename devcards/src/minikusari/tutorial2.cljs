(ns minikusari.tutorial2
  (:require
    [minikusari.core :refer [r]]
    [devcards.core]
    [datascript.core :as d])
  (:require-macros
    [devcards.core :as dc :refer [defcard-doc deftest]]
    [cljs.test :refer [testing is]]))

(defcard-doc
  "# Forward Chaining Inference for the modern detective"

  "> Key concepts: `infer` loop"

  "We know the basics of minikusari rules, but they don't seem too useful for now, don't they."

  "I mean, we can basically transact a bit of extra data whenever some conditions are met, but what can we do with it?"

  "Well, everything becomes more interesting when it's recursive: what if the transaction data returned by the rules is added to the db, and then rules are run again against the new db?"

  "We can chain facts that can be derived from very simple assumptions, just like Sherlock Holmes does."

  "(We can also decouple complex systems where different actions trigger changes to related data sources, like a payment and shipping system causing changes on your order system, but let's just stick to Sherlock for now)")

(def crime-db
  (d/db-with
    (d/empty-db {:country/code       {:db/unique :db.unique/identity}
                 :person/name        {:db/unique :db.unique/identity}
                 :person/citizens-of {:db/cardinality :db.cardinality/many
                                      :db/valueType   :db.type/ref}
                 :country/enemy-of   {:db/cardinality :db.cardinality/many
                                      :db/valueType   :db.type/ref}
                 :country/owns       {:db/cardinality :db.cardinality/many
                                      :db/valueType   :db.type/ref}
                 :object/sold-by     {:db/valueType :db.type/ref}})

    [{:db/id "USA" :country/code :usa}
     {:db/id "Robert" :person/criminal? false :person/name "Robert" :person/citizens-of [{:db/id "USA"}]}
     {:db/id "Missiles" :object/type :missiles :object/sold-by {:db/id "Robert"}}
     {:db/id "Sokovia" :country/code :sokovia :country/enemy-of [{:db/id "USA"}] :country/owns [{:db/id "Missiles"}]}]))

(def rules
  '[;; American law
    {:when [[?p :person/american? true]
            [?c :country/hostile? true]
            [?o :object/weapon? true]
            [?i :invoice/seller ?p]
            [?i :invoice/buyer ?c]
            [?i :invoice/object ?o]]
     :then [[:db/add ?p :person/criminal? true]]}
    ;; A USA citizen is American
    {:when [[?p :person/citizens-of ?c]
            [?c :country/code :usa]]
     :then [[:db/add ?p :person/american? true]]}
    ;; An enemy is hostile
    {:when [[?c1 :country/enemy-of ?c2]
            [?c2 :country/code :usa]]
     :then [[:db/add ?c1 :country/hostile? true]]}
    ;; A missile is a weapon
    {:when [[?o :object/type :missiles]]
     :then [[:db/add ?o :object/weapon? true]]}
    ;; If someone sold it and someone bought it, there should be an invoice somewhere, right?
    {:when [[?c :country/owns ?o]
            [?o :object/sold-by ?p]
            (not [?i :invoice/object ?o])]
     :then [[:db/add "invoice" :invoice/seller ?p]
            [:db/add "invoice" :invoice/buyer ?c]
            [:db/add "invoice" :invoice/object ?o]]}])

(defn infer
  "Takes a db and a list of rules. Returns a new db with all inferred facts.
  Keeps adding data derived from the rules to the db until db doesn't change.
  Stops after max 100 iterations."
  [db rules]
  (loop [db db max-iter 100]
    (let [tx-data (for [rule rules tx (r rule db)] tx)
          new-db (d/db-with db tx-data)]
      (cond
        (= db new-db) new-db
        (= 1 max-iter) new-db
        :else (recur new-db (dec max-iter))))))

(defcard-doc
  "## Robert's in trouble"

  "Consider this problem statement:

  > As per the law, it is a crime for an American to sell weapons to hostile nations. Sokovia, an enemy of America, has some missiles, and all the missiles were sold to it by Robert, who is an American citizen.
  >
  > Prove that Robert is criminal"

  "We collect the evidence at our disposal and place it in our crime-db"

  (dc/mkdn-pprint-source crime-db)

  "We have to add a little bit of schema to this db so we can follow links between countries, objects and people

  If we create a rule that matches the definition given by the law, it would look something like"

  (dc/mkdn-pprint-code (first rules))

  "We have a problem now: our rule does not match the shape of our data. We have to add additional rule that derive more facts until this rule is applicable.

  Let's code a basic `infer` loop"

  (dc/mkdn-pprint-source infer)

  "Now we can keep generating data until we get to the correct shape that matches our initial rule.

  Let's add a few more rules, for example: that a missile is a weapon, an enemy is hostile, etc."

  (dc/mkdn-pprint-source rules)

  "NB: in the last rule there is a `not` exists condition to avoid generating an infinite amount of invoices

  Let's see our infer loop in action")

(deftest robert-trial-test
  (testing "We assume Robert is innocent until proven otherwise"
    (is (= {:person/criminal? false} (-> crime-db (d/pull [:person/criminal?] [:person/name "Robert"])))))
  (testing "We can prove Robert is a criminal following a forward chaining inference"
    (is (= {:person/criminal? true} (-> crime-db (infer rules) (d/pull [:person/criminal?] [:person/name "Robert"]))))))

(defcard-doc "Too bad Robert, computer says you're a criminal")



