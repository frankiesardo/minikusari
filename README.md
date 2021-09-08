# minikusari

> And if, you don't love me now
> 
> You will never love me again
> 
> I can still hear you saying
> 
> You would never break the chain (Never break the chain)

[minikusari](https://github.com/frankiesardo/minikusari) is a minimal rules engine built on top of Datascript (and can work with Datomic or Datahike).

`kusari` is Japanese for `chain`. The name `minikusari` is a tribute to `minikanren` (the embedded language for logic programming)

You can use minikusari to simulate a [Forward Chaining](https://en.wikipedia.org/wiki/Forward_chaining) system that generates new facts based on a set of rules.

Think of minikusari as the dual of the datalog query engine:

- `datascript.core/q` finds all facts (datoms) that match a particular condition (backward chaining)
- `minikusari.core/r` generates new facts (datoms) if a particular condition is met (forward chaining)

## What does it look like

```clojure
(def people-db
  (d/db-with (d/empty-db) [#:person{:first-name "John" :last-name "Doe" :age 45}
                           #:person{:first-name "Jane" :last-name "Doe" :age 44}
                           #:person{:first-name "Sarah" :last-name "Doe" :age 19}
                           #:person{:first-name "Bobby" :last-name "Doe" :age 14}]))

(def ballot-rule
  '{:when [[?e :person/first-name ?first]
           [?e :person/last-name ?last]
           [?e :person/age ?age]
           [(>= ?age 18)]
           [(str ?first " " ?last) ?full]]
    :then [[:db/add ?e :person/ballot-sent? true]
           [:db/add ?full :ballot/full-name ?full]]})

(=
  (minikusari.core/r ballot-rule people-db)
  [[:db/add 1 :person/ballot-sent? true]
   [:db/add "John Doe" :ballot/full-name "John Doe"]
   [:db/add 2 :person/ballot-sent? true]
   [:db/add "Jane Doe" :ballot/full-name "Jane Doe"]
   [:db/add 3 :person/ballot-sent? true]
   [:db/add "Sarah Doe" :ballot/full-name "Sarah Doe"]])
```

## Comparison with other Clojure rules engines

While other rules engines have defined their own semantics and language, minikusari is intentionally kept small and without any additional cognitive overhead.
If you know Datascript, you already know how to use minikusari. Go to the [interactive documentation](https://frankiesardo.github.io/minikusari/#!/minikusari.tutorial1) and see for yourself.

minikusari is therefore well suited as a learning tool to tinker with rule engines and see them at work.
You can build fully working systems with it, such as an [inference engine](https://frankiesardo.github.io/minikusari/#!/minikusari.tutorial2) or a [game](https://frankiesardo.github.io/minikusari/#!/minikusari.tutorial3), but they're obviously not optimised for performance.

More mature and "production ready" solutions already exist for Clojure:
- [clara](https://github.com/cerner/clara-rules) led the way on forward chaining in Clojure. Its syntax might be a bit tricky to get at first, but it's a battle tested library 
- [mimir](https://github.com/hraberg/mimir) is a fantastic implementation of the Rete Algorithm in clojure
- [zeder](https://www.youtube.com/watch?v=1E2CoObAaPQ) was the first to play with the idea of rules engines built on top of the Datomic model, but it was never released as an OS library
- [odoyle](https://github.com/oakes/odoyle-rules) is the most recent library, and it's used for both inference and as a game engine. It's the main inspiration for minikusari, and the reason I wanted to build a similar experience on top of Datascript
