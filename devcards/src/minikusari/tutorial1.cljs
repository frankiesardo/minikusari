(ns minikusari.tutorial1
  (:require
    [minikusari.core :refer [r]]
    [devcards.core]
    [datascript.core :as d])
  (:require-macros
    [devcards.core :as dc :refer [defcard-doc deftest]]
    [cljs.test :refer [testing is]]))

(def people-db
  (d/db-with (d/empty-db) [#:person{:first-name "John" :last-name "Doe" :age 45}
                           #:person{:first-name "Jane" :last-name "Doe" :age 44}
                           #:person{:first-name "Sarah" :last-name "Doe" :age 19}
                           #:person{:first-name "Bobby" :last-name "Doe" :age 14}]))

(def ballot-query
  '{:find  [?full]
    :where [[?e :person/first-name ?first]
            [?e :person/last-name ?last]
            [?e :person/age ?age]
            [(>= ?age 18)]
            [(str ?first " " ?last) ?full]]})

(def ballot-rule
  '{:when [[?e :person/first-name ?first]
           [?e :person/last-name ?last]
           [?e :person/age ?age]
           [(>= ?age 18)]
           [(str ?first " " ?last) ?full]]
    :then [[:db/add ?e :person/ballot-sent? true]
           [:db/add ?full :ballot/full-name ?full]]})

(defcard-doc
  "# Anatomy of a query"

  "> Key concepts: rule `when` and `then`"

  "Let's start by revising what we know: how a Datascript db its query operations work."

  "Take for example the following db containing information about the Doe family"

  (dc/mkdn-pprint-source people-db)

  "If we want to find out the full name of the people in this family eligible for an electoral ballot, we might write a query such as this."

  (dc/mkdn-pprint-source ballot-query)

  "And hopefully it will return the expected result")

(deftest datascript-test
  (testing "We remember how to use Datascript"
    (is (= (d/q ballot-query people-db)
           #{["John Doe"] ["Jane Doe"] ["Sarah Doe"]}))))

(defcard-doc
  "# Anatomy of a rule"

  "A rule is very similar to a query, but it returns transaction data instead of query results."

  "Imagine, in the example above, that we want to create an electoral ballot for anyone that is eligible."

  "We create a rule: when [person is adult] -> then [assert ballot with person full name]"

  "Datascript already has a syntax to describe asserting or retracting facts in the form of"

  (dc/mkdn-pprint-code
    '[[:db/add entity attribute value]
      [:db/retract entity attribute value]
      ...])

  "We can go ahead and write our rule like so"

  (dc/mkdn-pprint-source ballot-rule)

  "Notice how the `when` part is identical to our first query and how we reuse the same variable names (`?e`, `?full`) in our `then` part.

  This is important: our rule is pure data (keywords and symbols) so any concrete value we want to assert has to first be matched in the query.

  BTW if you're wondering why I am doing `[:db/add ?full]` I am just using a string tempid that is different for every ballot, so they do not clash")


(defcard-doc
  "# Anatomy of an engine
  We're ready to learn the entire extent of the code contained in minikusari. It's so small it almost fits into a tweet.

  This is where the magic happens"

  (dc/mkdn-pprint-source r)

  "We're basically saying:

  - Create a `find` query clause based on all the symbols referenced in the transaction vectors
  - Run the query just like you would in Datascript (remember: query `where` and rule `when` are basically the same)
  - Swaps the query results into the transaction vector, to obtain the `then` clause"

  "Don't worry about what `args` is and what happens in the `in` clause for now. Let's see it in action")

(deftest r-test
  (testing "We get transaction data when matching a rule against our db"
    (is (= (r ballot-rule people-db)
           [[:db/add 1 :person/ballot-sent? true]
            [:db/add "John Doe" :ballot/full-name "John Doe"]
            [:db/add 2 :person/ballot-sent? true]
            [:db/add "Jane Doe" :ballot/full-name "Jane Doe"]
            [:db/add 3 :person/ballot-sent? true]
            [:db/add "Sarah Doe" :ballot/full-name "Sarah Doe"]])))
  (testing "We can transact this data into our db to create a ballot for each member of the family (except Bobby, Bobby is too young)"
    (is (= (->> (d/datoms (d/db-with people-db (r ballot-rule people-db)) :eavt)
                (map (juxt :e :a :v)))
           [[1 :person/age 45]
            [1 :person/ballot-sent? true]
            [1 :person/first-name "John"]
            [1 :person/last-name "Doe"]
            [2 :person/age 44]
            [2 :person/ballot-sent? true]
            [2 :person/first-name "Jane"]
            [2 :person/last-name "Doe"]
            [3 :person/age 19]
            [3 :person/ballot-sent? true]
            [3 :person/first-name "Sarah"]
            [3 :person/last-name "Doe"]
            [4 :person/age 14]
            [4 :person/first-name "Bobby"]
            [4 :person/last-name "Doe"]
            [5 :ballot/full-name "John Doe"]
            [6 :ballot/full-name "Jane Doe"]
            [7 :ballot/full-name "Sarah Doe"]]))))

(defcard-doc
  "Congrats! You have learned how to use a rules engine to generate new facts based on existing ones!"

  "Forward chaining inference is pretty useful, even if it's very basic like this one."

  "Compared with backward chaining inference, where you already have all the facts and you want to find a subset that matches a certain condition (hey, like a db!), forward chaining shines in a system that is constantly accumulating new facts (hey, like a game!) to easily generate derived data."

  "Check the other tutorials to observe minikusari in action and discover how you can **solve crimes** or **make things fly** with it")

(defcard-doc
  "## Current limitations and future work"

  "### The shape of the `then` clause")

(deftest shape-of-then-clause-test
  (testing "The supported syntax is a vector of vectors"
    (is (= (r '{:when [[?e :person/age 14]] :then [[:db/add ?e :person/kid? true]]} people-db)
           '[[:db/add 4 :person/kid? true]])))
  (testing "Maps might be supported in the future, but not for now"
    (is (not= (r '{:when [[?e :person/age 14]] :then [{:db/id ?e :person/kid? true}]} people-db)
              '[[:db/add 4 :person/kid? true]]))))

(defcard-doc
  "### The `:args` key."

  "I resisted adding this workaround for cljs because the rule stops being pure data and you have to put quotes around every vector."

  "Possible way to solve that: use `multimethods`"

  (dc/mkdn-pprint-code '(defmulti f first))

  (dc/mkdn-pprint-code '(defmethod f :?my-fn [_ & args]))

  (dc/mkdn-pprint-code '{:when [[?e :person/last-name ?last]
                                [(f :?my-fn ?e) ?result]
                                [(< ?result 3)]]
                         :then [...]})

  "But there's a bit too much magic for my taste. At least `args` is very explicit.")

(defn at-least-one-changed
  [{:keys [max-tx]} t1 & more]
  (some #{max-tx} (cons t1 more)))

(def last-name-rule
  {:when '[[?e :person/last-name ?last ?t1]
           [?e :person/first-name ?first ?t2]
           [(at-least-one-changed $ ?t1 ?t2)]
           [(str ?first " " ?last) ?full]]
   :then '[[:db/add ?e :person/full-name ?full]]
   :args {'at-least-one-changed at-least-one-changed}})

(defcard-doc
  "### The network of constraints"

  "It would be great to only trigger rules when the underlying data changes without having to specify `max-tx`."

  "The current approach has some limitations. You can recalculate a rule when either t1 or t2 change by comparing them to ?max-tx"

  (dc/mkdn-pprint-source at-least-one-changed)

  (dc/mkdn-pprint-source last-name-rule))

(deftest track-multiple-changes
  (testing "Trigger when both tx change"
    (is (= ["John Doe" "Jane Doe" "Sarah Doe" "Bobby Doe"] (map last (r last-name-rule people-db)))))
  (testing "Trigger when just one change"
    (is (let [db (d/db-with people-db [{:db/id 1 :person/first-name "Johnny"}])]
          (= ["Johnny Doe"] (map last (r last-name-rule db))))))
  (testing "Do not trigger when neither changed"
    (is (let [db (d/db-with people-db [{:db/id 1 :person/age 46}])]
          (= [] (map last (r last-name-rule db)))))))

(defcard-doc
  "While this works fine, there might be cases when one infer loop changes t1 and another changes t2 and it's tricky to track that."

  "I once wrote a 'percolator' for datomic for 'saved searches'. The idea is similar to the ElasticSearch percolator: I give you a query and you call me when the result of that query changes."

  "But another interesting approach is to look at what [posh](https://github.com/denistakeda/re-posh) is doing ")




