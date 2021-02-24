# minikusari

> And if, you don't love me now
> 
> You will never love me again
> 
> I can still hear you saying
> 
> You would never break the chain (Never break the chain)

[minikusari](https://github.com/frankiesardo/minikusari) is a minimal rule engine built on top of Datascript (and can work with Datomic or Datahike).

You can use minikusari to simulate a [Forward Chaining](https://en.wikipedia.org/wiki/Forward_chaining) system that generates new facts based on a set of rules.

Think of minikusari as the dual of the datalog query engine:

- `datascript.core/q` finds all facts (datoms) that match a particular condition (backward chaining)
- `minikusari.core/r` generates new facts (datoms) if a particular condition is met (forward chaining) 

## Comparison with other Clojure rule engines

While other rule engines have defined their own semantics and language, minikusari is intentionally kept small and without any additional cognitive overhead.
If you know Datascript, you already know how to use minikusari. Go to the [interactive documentation](https://frankiesardo.github.io/minikusari/#!/minikusari.tutorial1) and see for yourself.

minikusari is therefore well suited as a learning tool to tinker with rule engines and see them at work.
You can build fully working systems with it, such as an [inference engine](https://frankiesardo.github.io/minikusari/#!/minikusari.tutorial2) or a [game](https://frankiesardo.github.io/minikusari/#!/minikusari.tutorial3), but they're obviously not optimised for performance.

More mature and "production ready" solutions already exist for Clojure:
- [clara](https://github.com/cerner/clara-rules) led the way on forward chaining in Clojure. Its syntax might be a bit tricky to get at first, but it's a battle tested library 
- [mimir](https://github.com/hraberg/mimir) is a fantastic implementation of the Rete Algorithm in clojure
- [zeder](https://www.youtube.com/watch?v=1E2CoObAaPQ) was the first to play with the idea of rules engines built on top of the Datomic model, but it was never released as an OS library
- [odoyle](https://github.com/oakes/odoyle-rules) is the most recent library, and it's used for both inference and as a game engine. It's the main inspiration for minikusari, and the reason I wanted to build a similar experience on top of Datascript

## Naming

`kusari` is Japanese for `chain`. The name `minikusari` is a tribute to `minikanren` (the embedded language for logic programming)