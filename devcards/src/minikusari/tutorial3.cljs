(ns minikusari.tutorial3
  (:require
    [sablono.core :as sab :include-macros true]
    [minikusari.core :refer [r]]
    [datascript.core :as d])
  (:require-macros
    [devcards.core :as dc :refer [defcard defcard-doc deftest]]
    [cljs.test :refer [testing is]]))

(def horiz-vel -0.15)
(def gravity 0.05)
(def jump-vel 21)
(def start-y 312)
(def bottom-y 561)
(def flappy-x 212)
(def flappy-width 57)
(def flappy-height 41)
(def pillar-spacing 324)
(def pillar-gap 158)
(def pillar-width 86)

(def flappy-db
  (d/db-with
    (d/empty-db)
    [{:game/started?   false
      :game/score      0
      :game/start-time 0
      :game/border-pos 0}
     {:flappy/active?    false
      :flappy/start-time 0
      :flappy/cur-y      start-y}
     {:pillar/start-time   0
      :pillar/start-x      900
      :pillar/cur-x        900
      :pillar/upper-height 200}]))

(defn sine-wave [time-delta]
  (+ start-y (* 30 (js/Math.sin (/ time-delta 300)))))

(defn new-y [time-delta flappy-y]
  (let [cur-vel (- jump-vel (* time-delta gravity))
        new-y (- flappy-y cur-vel)]
    (min new-y (- bottom-y flappy-height))))

(defn rand-height []
  (+ 60 (rand-int (- bottom-y 120 pillar-gap))))

(defn translate [start-pos vel time]
  (js/Math.floor (+ start-pos (* time vel))))

(defn curr-pillar-pos [cur-time start-x start-time]
  (translate start-x horiz-vel (- cur-time start-time)))

(defn pillars-in-world [db]
  (d/q '[:find (count ?e) .
         :in $ pillar-width
         :where
         [?e :pillar/cur-x ?cur-x]
         [(> ?cur-x pillar-width)]]
       db (- pillar-width)))

(defn new-pillar-start-x [db]
  (+ pillar-spacing (d/q '[:find (max ?cur-x) . :where [?e :pillar/cur-x ?cur-x]] db)))

(defn in-pillar? [cur-x]
  (and (>= (+ flappy-x flappy-width)
           cur-x)
       (< flappy-x (+ cur-x pillar-width))))

(defn in-pillar-gap? [cur-y upper-height]
  (and (< upper-height cur-y)
       (> (+ upper-height pillar-gap)
          (+ cur-y flappy-height))))

(defn bottom-collision? [cur-y]
  (>= cur-y (- bottom-y flappy-height)))

(defn collision? [cur-x upper-height cur-y]
  (or (bottom-collision? cur-y)
      (and (in-pillar? cur-x)
           (not (in-pillar-gap? cur-y upper-height)))))

(defn calc-score [cur-time start-time]
  (-> cur-time
      (- start-time)
      (* horiz-vel)
      (- 544)
      (/ pillar-spacing)
      js/Math.floor
      js/Math.abs
      (- 4)
      (max 0)))

(defn infer
  "Returns a new db with all inferred facts and a list of tx-data.
  Stops when no more rules apply or after 100 iterations"
  [db rules]
  (loop [db db max-iter 100]
    (let [tx-data (for [rule rules tx (r rule db)] tx)]
      (cond
        (empty? tx-data) db
        (zero? max-iter) db
        :else (recur (d/db-with db tx-data) (dec max-iter))))))

(def rules
  [;; start
   {:when '[[_ :action/start ?now ?max-tx]
            [(max-tx $) ?max-tx]
            [?game :game/started? false]
            [?flappy :flappy/active?]
            [?pillar :pillar/start-time]]
    :then '[[:db/add ?game :game/started? true]
            [:db/add ?game :game/start-time ?now]
            [:db/add ?flappy :flappy/start-time ?now]
            [:db/add ?pillar :pillar/start-time ?now]
            [:db/add :db/current-tx :db/doc "Start" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx}}
   ;; jump
   {:when '[[_ :action/jump ?now ?max-tx]
            [(max-tx $) ?max-tx]
            [?flappy :flappy/active?]]
    :then '[[:db/add ?flappy :flappy/active? true]
            [:db/add ?flappy :flappy/start-time ?now]
            [:db/add :db/current-tx :db/doc "Jump" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx}}
   ;; time update
   {:when '[[_ :action/update-time ?now ?max-tx]
            [(max-tx $) ?max-tx]
            [?game :game/started?]
            [?flappy :flappy/start-time ?flappy-start-time]
            [(- ?now ?flappy-start-time) ?time-delta]]
    :then '[[:db/add ?game :game/current-time ?now]
            [:db/add ?game :game/time-delta ?time-delta]
            [:db/add :db/current-tx :db/doc "Time update" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx}}
   ;; update flappy
   ;; NB: we have some branching logic here: one rule for when flappy is active, one for when it is not active
   {:when '[[?game :game/time-delta ?time-delta ?max-tx]
            [(max-tx $) ?max-tx]
            [?flappy :flappy/active? true]
            [?flappy :flappy/cur-y ?cur-y]
            [(new-y ?time-delta ?cur-y) ?new-y]]
    :then '[[:db/add ?flappy :flappy/cur-y ?new-y]
            [:db/add :db/current-tx :db/doc "Update active flappy" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx 'new-y new-y}}
   {:when '[[?game :game/time-delta ?time-delta ?max-tx]
            [(max-tx $) ?max-tx]
            [?flappy :flappy/active? false]
            [(sine-wave ?time-delta) ?cur-y]]
    :then '[[:db/add ?flappy :flappy/cur-y ?cur-y]
            [:db/add :db/current-tx :db/doc "Update inactive flappy" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx 'sine-wave sine-wave}}
   ; update pillars
   {:when '[[?game :game/current-time ?current-time ?max-tx]
            [(max-tx $) ?max-tx]
            [?pillar :pillar/start-x ?start-x]
            [?pillar :pillar/start-time ?start-time]
            [(curr-pillar-pos ?current-time ?start-x ?start-time) ?new-x]]
    :then '[[:db/add ?pillar :pillar/cur-x ?new-x]
            [:db/add :db/current-tx :db/doc "Update pillars" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx 'curr-pillar-pos curr-pillar-pos}}
   ;; delete old pillars
   {:when '[[?pillar :pillar/cur-x ?cur-x ?max-tx]
            [(max-tx $) ?max-tx]
            [(<= ?cur-x pillar-width)]]
    :then '[[:db/retractEntity ?pillar]
            [:db/add :db/current-tx :db/doc "Delete pillar" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx 'pillar-width (- pillar-width)}}
   ;; add new pillar
   ;; NB: only trigger this when the pillar position has just been updated
   {:when '[[?pillar :pillar/cur-x ?cur-x ?max-tx]
            [(max-tx $) ?max-tx]
            [?game :game/current-time ?current-time]
            [(pillars-in-world $) ?count]
            [(new-pillar-pos-x $) ?pos-x]
            [(< ?count 3)]
            [(rand-height) ?height]]
    :then '[[:db/add "new-pillar" :pillar/start-time ?current-time]
            [:db/add "new-pillar" :pillar/start-x ?pos-x]
            [:db/add "new-pillar" :pillar/cur-x ?pos-x]
            [:db/add "new-pillar" :pillar/upper-height ?height]
            [:db/add :db/current-tx :db/doc "Add pillar" :tx/trigger ?max-tx :tx/hack ?count]]
    :args {'max-tx :max-tx 'rand-height rand-height 'pillars-in-world pillars-in-world 'new-pillar-pos-x new-pillar-start-x}}
   ;; check collisions
   {:when '[[?pillar :pillar/cur-x ?cur-x ?max-tx]
            [(max-tx $) ?max-tx]
            [?pillar :pillar/upper-height ?height]
            [?game :game/started?]
            [?flappy :flappy/cur-y ?cur-y]
            [(collision? ?cur-x ?height ?cur-y)]]
    :then '[[:db/add ?game :game/started? false]
            [:db/add :db/current-tx :db/doc "Check collision" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx 'collision? collision?}}
   ;; update score
   {:when '[[?game :game/current-time ?current-time ?max-tx]
            [(max-tx $) ?max-tx]
            [?game :game/start-time ?start-time]
            [?game :game/score ?old-score]
            [(calc-score ?current-time ?start-time) ?new-score]
            [(> ?new-score ?old-score)]]
    :then '[[:db/add ?game :game/score ?new-score]
            [:db/add :db/current-tx :db/doc "Update score" :tx/trigger ?max-tx]]
    :args {'max-tx :max-tx 'calc-score calc-score}}])

(defn ui [{:game/keys [started? current-time score border-pos]}
          {:flappy/keys [cur-y]} pillar-list
          {:keys [start-game jump]}]
  [:div {:style       {:position   :relative :width 480 :height 640 :overflow :hidden
                       :margin     "0px auto"
                       :background "rgb(112, 197, 206) url(imgs/background.png) no-repeat left bottom"}
         :onMouseDown (fn [e] (.preventDefault e) (when jump (jump)))}
   [:h1 {:style {:position    :absolute
                 :width       300
                 :text-align  :center
                 :left        90
                 :font-size   58
                 :top         13
                 :color       :white
                 :text-shadow "-4px 0 black, 0 4px black, 4px 0 black, 0 -4px black"
                 :z-index     5
                 :font-family :monospace}} score]
   (if-not started?
     [:a {:style   {:color            "rgb(244,176,36)"
                    :background-color :white
                    :font-size        40
                    :font-family      :monospace
                    :z-index          5
                    :position         :absolute
                    :border-bottom    "3px solid rgb(84,56,71)"
                    :border-right     "3px solid rgb(84,56,71)"
                    :padding          "1px 10px"
                    :top              363
                    :left             128
                    :text-align       :center
                    :width            200
                    :text-shadow      "-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black"}
          :onClick (or start-game identity)} (if (pos? current-time) "RESTART" "START")]
     [:span])
   [:div (for [{:pillar/keys [cur-x upper-height]} pillar-list
               :let [lower-height (- bottom-y upper-height pillar-gap)]]
           [:div
            [:div
             {:style {:position            :absolute
                      :top                 0
                      :right               150
                      :background-image    "url(imgs/upper-pillar-head.png), url(imgs/pillar-bkg.png)"
                      :background-position "left bottom, left bottom"
                      :background-repeat   "no-repeat, repeat-y"
                      :width               86
                      :left                cur-x
                      :height              upper-height}}]
            [:div
             {:style {:position            :absolute
                      :bottom              80
                      :right               150
                      :background-image    "url(imgs/lower-pillar-head.png), url(imgs/pillar-bkg.png)"
                      :background-position "left top, left top"
                      :background-repeat   "no-repeat, repeat-y"
                      :width               86
                      :left                cur-x
                      :height              lower-height}}]])]
   [:div {:style {:position   :absolute
                  :background "transparent url(imgs/flappy-base.png) no-repeat top left"
                  :top        cur-y
                  :left       212
                  :width      57
                  :height     41}}]
   [:div {:style {:position              :absolute
                  :height                10
                  :width                 480
                  :top                   567
                  :background            "transparent url(imgs/scrolling-border.png) repeat-x top left"
                  :background-position-x border-pos}}]])

(defcard-doc
  "# Meet flappy, he needs some help to fly"

  "> Key concepts: rule `args`, rules that execute only when something changed, `:db/current-tx` metadata"

  "In this classic flappy bird game, we're going to see how our rule engine can derive a new game state based on user input")

(defcard flappy-static
  (fn [data-atom]
    (let [[game flappy pillar-list] @data-atom]
      (sab/html (ui game flappy pillar-list {}))))
  [{:game/started?   true
    :game/score      1
    :game/border-pos 0}
   {:flappy/cur-y start-y}
   [{:pillar/cur-x        350
     :pillar/upper-height 200}]]
  {:frame false :inspect-data true})


(defcard-doc
  "## Not so fast, flappy.

  If you recall our rules are pure data. How the heck are we supposed to calculate gravity based games and invoke complex Math functions?

  On the JVM it's not a big deal, because we can call functions directly in our binding vectors.

  The following is perfectly valid code in clj"

  (dc/mkdn-pprint-code '(defn my-fn [] (rand-int 5)))

  (dc/mkdn-pprint-code '{:when [[?e :person/age ?age]
                                [(my.ns/my-fn) ?rand]
                                [(< ?age ?rand)]]
                         :then [[:db/retractEntity ?e :person/age ?age]]})

  "You can even call functions that rely on the state of the database itself by passing the implicit db reference `$`"

  (dc/mkdn-pprint-code '(defn count-people [db] (d/q '[:find (count ?e) . :where [?e :person/name]] db)))

  (dc/mkdn-pprint-code '{:when [[(my.ns/count-people $) ?count]
                                [(< ?count 5)]]
                         :then [[:db/add "new person" :person/name "Johnny"]]})

  "Unfortunately this doesn't work in cljs because we're missing the ability to `resolve` symbols that refer to functions."

  "We need to introduce a new concept. Remember the code that interprets our rules"

  (dc/mkdn-pprint-source r)

  "You can optionally specify an `args` key. This is a map of symbols to values or functions, and that allows you to refer to those symbols in your `when` clause, similarly to how an `in` clause works for queries."

  "Let's see this in action below."

  (dc/mkdn-pprint-source flappy-db)

  (dc/mkdn-pprint-source pillars-in-world))

(deftest args-test
  (testing "You can pass arguments to the rule execution. Note that you need to move the quote next to each vector, because args needs to be unquoted"
    (is (= (r {:when '[[(pillars-in-world $) ?count]
                       [(< ?count 3)]]
               :args {'pillars-in-world pillars-in-world}
               :then '[[:db/add "new pillar" :pillar/index ?count]]}
              flappy-db)
           [[:db/add "new pillar" :pillar/index 1]]))))

(defcard-doc
  "We will need `args` not only to calculate complex values, but also to check what has been recently updated."

  "In most of the examples we've seen before it was fine to re-run some rules."

  "But in something as complex as flying a bird we only want to trigger rules when certain things have just been updated."

  "Thankfully, Datascript stores the transaction number for each datom, so we could just check if the tx at the end of the eavt vector is the latest one in the db.")

(deftest max-tx-test
  (testing "You can observe max-tx from a Datascript db by simply getting it by key"
    (is (= (get flappy-db :max-tx) 536870913)))
  (testing "You can match rules against recently changed datoms by matching it with max-tx"
    (is (let [rule {:when '[[(max-tx $) ?max-tx]
                            [?e :game/started? false ?max-tx]]
                    :args {'max-tx :max-tx}
                    :then '[[:db/add :db/current-tx :db/doc "The game begins" :tx/trigger ?max-tx]]}]
          (= (r rule flappy-db)
             [[:db/add :db/current-tx :db/doc "The game begins" :tx/trigger 536870913]]))))
  (testing "If something else changed in the meantime the same rule will not trigger again"
    (is (let [rule {:when '[[(max-tx $) ?max-tx]
                            [?e :game/started? false ?max-tx]]
                    :args {'max-tx :max-tx}
                    :then '[[:db/add :db/current-tx :db/doc "The game begins" :tx/trigger ?max-tx]]}]
          (= (r rule (d/db-with flappy-db [{:some :data}]))
             [])))))

(defcard-doc
  "## Ready, set, fly"

  "The eagle eyed of you might have spotted an interesting thing in the previous example: we're using `:db/current-tx` to attach metadata on the current transaction, so it's easier to see which rule was executed. This is nice, we're going to use it."

  "We pretty much have all the ingredients now. Let's cook something up."

  "There are only two user inputs the game takes: `start` and `jump` and one automatic new fact: `time-update`"

  "All the other rules are to help us derive some more facts when we change the model: for example, when we update the game clock, some rules will take care of updating the gravity of the bird and others will move the pillars forward."

  (dc/mkdn-pprint-source rules)

  "We need some tweak to our infer loop so we check for empty tx-data as a stopping condition"

  (dc/mkdn-pprint-source infer)

  "Have a go with the version below. Time is not updated automatically, you have to click to increase it."

  "You can use the arrows at the bottom of the card to rewind and replay state history")

(defcard flappy-manual
  (fn [data-atom]
    (let [db @data-atom
          game (d/q '[:find (pull ?e [*]) . :where [?e :game/started?]] db)
          flappy (d/q '[:find (pull ?e [*]) . :where [?e :flappy/active?]] db)
          pillar-list (d/q '[:find [(pull ?e [*]) ...] :where [?e :pillar/cur-x]] db)
          {:game/keys [current-time started?]} game
          perform-action! (fn [action] (swap! data-atom #(-> % (d/db-with [action]) (infer rules))))]
      (sab/html
        [:div
         (ui game flappy pillar-list {})
         (if started?
           [:div
            [:button {:onClick #(reset! data-atom (-> flappy-db (d/db-with [{:action/start 0}]) (infer rules)))} "Restart!"]
            [:button {:onClick #(perform-action! {:action/update-time (+ current-time 120)})} "Increase time"]
            [:button {:onClick #(perform-action! {:action/jump (+ current-time 60)})} "Jump"]]
           [:button {:onClick #(reset! data-atom (-> flappy-db (d/db-with [{:action/start 0}]) (infer rules)))} "Start!"])])))
  flappy-db
  {:frame false :history true})

(defcard-doc
  "## Putting it all together"

  "I hope that was interesting, seeing how a list of rules together can describe the state changes a system goes through"

  "What I find fascinating is that when you add a new rule (say: `update-score`), you don't need to go and find the right place to add a function to transform the state"

  "Every rule lives in a global space and it only needs to specify what bits of state it wants to react to (say: `:game/current-time`) to get called when it's needed"

  "But yes, I know what you are about to say: where's the real flappy already? Don't worry, you can play the full version of the game below")

(defonce conn (d/conn-from-db flappy-db))

(defn time-loop []
  (let [db @conn
        {:game/keys [started?]} (d/q '[:find (pull ?e [*]) . :where [?e :game/started?]] db)]
    (when started?
      (swap! conn #(-> % (d/db-with [{:action/update-time (js/Date.now)}]) (infer rules))))
    (js/setTimeout time-loop 30)))

(defonce start-timer (time-loop))

(defcard flappy-full
  (fn [data-atom]
    (let [db @data-atom
          game (d/q '[:find (pull ?e [*]) . :where [?e :game/started?]] db)
          flappy (d/q '[:find (pull ?e [*]) . :where [?e :flappy/active?]] db)
          pillar-list (d/q '[:find [(pull ?e [*]) ...] :where [?e :pillar/cur-x]] db)
          perform-action! (fn [action] (swap! data-atom #(-> % (d/db-with [action]) (infer rules))))]
      (sab/html
        [:div
         (ui game flappy pillar-list {:start-game #(reset! data-atom (-> flappy-db (d/db-with [{:action/start (js/Date.now)}]) (infer rules)))
                                      :jump #(perform-action! {:action/jump (js/Date.now)})})])))
  conn
  {:frame false})
