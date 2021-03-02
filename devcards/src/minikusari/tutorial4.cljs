(ns minikusari.tutorial4
  (:require
    [minikusari.core :refer [r]]
    [devcards.core]
    [datascript.core :as d]
    [sablono.core :as sab])
  (:require-macros
    [devcards.core :as dc :refer [defcard-doc deftest defcard]]
    [cljs.test :refer [testing is]]))

(defn socially-distanced? [next-x positions]
  (let [next-y (count positions)
        not-ok (fn [[x y]] (or (= next-x x)
                               (= (js/Math.abs (- next-x x))
                                  (js/Math.abs (- next-y y)))))]
    (empty? (filter not-ok positions))))

(defcard-doc
  "# Socially distanced queens"

  "> Key concepts: backtracking solutions using `retract`"

  "Wait a minute, I thought rule systems were about logic, and logic was about exploring different options and discarding invalid solutions."

  "`minikusari` seems good at deriving state, but can it actually narrow down a problem with branching logic to a unique solution?"

  "Let's test it with a classic problem: placing eight queens on a chessboard in a socially distanced manner, so no two queens are on the same row, column or diagonal"

  "Queens have position x and y and we will add them one at a time, so we just need to find the next valid `x` for our queen."

  (dc/mkdn-pprint-source socially-distanced?))

(deftest social-distance-test
  (testing "Cannot add a queen on the same column"
    (is (false? (socially-distanced? 0 [[0 0]]))))
  (testing "Cannot add a queen on the diagonal"
    (is (false? (socially-distanced? 1 [[0 0]])))
    (is (false? (socially-distanced? 6 [[0 1] [1 3] [2 7]]))))
  (testing "Otherwise it's fine"
    (is (true? (socially-distanced? 2 [[0 0]])))))

(def queens-db
  (d/db-with
    (d/empty-db
      {:queen/tried {:db/cardinality :db.cardinality/many}})
    (concat (for [y (range 8)] {:queen/y y})
            [{:queen/current 1}])))

(defn valid-x [db]
  (let [positions (d/q '{:find [?x ?y] :where [[?e :queen/y ?y] [?e :queen/x ?x]]} db)]
    (shuffle (for [next-x (range 8) :when (socially-distanced? next-x positions)] next-x))))

(def rules
  [{:when '[[?e :queen/current ?queen]
            [(valid-x $) [?x ...]]
            (not [?queen :queen/tried ?x])
            [(inc ?queen) ?next]]
    :then '[[:db/add ?queen :queen/x ?x]
            [:db/add ?e :queen/current ?next]]
    :args {'valid-x valid-x}}
   {:when '[[?e :queen/current ?queen]
            (not [(valid-x $) [?x ...]]
                 (not [?queen :queen/tried ?x]))
            [(dec ?queen) ?prev]
            [?prev :queen/x ?wrong-x]]
    :then '[[:db.fn/retractAttribute ?prev :queen/x]
            [:db/add ?prev :queen/tried ?wrong-x]
            [:db/add ?e :queen/current ?prev]
            [:db.fn/retractAttribute ?queen :queen/tried]]
    :args {'valid-x valid-x}}])

(defcard-doc
  "We want to keep a list of `x` positions that we've tried for a queen, in case we need to backtrack and try a new one."

  "We need to add that to our Datascript schema"

  (dc/mkdn-pprint-source queens-db)

  "And what about our rules?"

  "We need a rule that says:
  - Give me the next queen we want to position
  - Give me a valid position for that queen
  - If we haven't tried that before, let's add the queen to the board"

  "Something like this"

  (dc/mkdn-pprint-code (-> rules first (dissoc :args)))

  "Where `valid-x` gets the relevant information from the db"

  (dc/mkdn-pprint-source valid-x)

  "Notice that `valid-x` returns more than one result (and we shuffle them to randomize the solutions) so every time this rule runs we're transacting multiple `[:db/add ?e :queen/x ?x]`"

  "This is fine since the cardinality is `one` by default, so the last one will win, but if we were using an attribute with `:db.cardinality/many`, like our `queen/tried` that would be a problem, just so you know."

  "Ok then, how about backtracking incorrect solutions?"

  "Let's say we placed 5 queens and the 6th one has nowhere to go"

  "Well, if we cannot place the current queen, we want to remove the `x` position of the previous one and save the fact that that is not a position to try again"

  (dc/mkdn-pprint-code (-> rules second (dissoc :args)))

  "A little detail that is easy to miss is the last assertion in the second rule `[:db.fn/retractAttribute ?e :queen/tried]`. Why do we need that?"

  "When you backtrack the previous qu8een position you want to clear the list of positions you tried with the current one, because they are valid positions to try again"

  "That's all we need, literally, two rules (and a little help from Datascript)."

  (dc/mkdn-pprint-source rules)

  "You can check the interactive version below and observe the engine trying to place a queen at a time")

(defcard socially-distanced-queens
  (fn [data-atom]
    (let [db @data-atom
          queens (d/q '{:find [?x ?y] :where [[?e :queen/y ?y] [?e :queen/x ?x]]} db)
          next-step (fn [] (swap! data-atom #(d/db-with % (for [rule rules tx (r rule %)] tx))))
          clear (fn [] (reset! data-atom queens-db))]
      (sab/html
        [:div {:style {:margin "0px auto"}}
         [:table {:style {:border "5px solid #333"}}
          [:tbody
           (for [y (range 8)]
             [:tr (for [x (range 8)]
                    [:td {:style {:width           48 :height 48
                                  :fontSize        26 :textAlign :center
                                  :backgroundColor (if (even? (+ x y)) "white" "#999")}}
                     (if (queens [x y]) "\uD83D\uDC51" " ")])])]]
         [:button {:style {:margin 8} :onClick clear} "Clear"]
         (when (< (count queens) 8) [:button {:onClick next-step} "Next step"])])))
  queens-db)