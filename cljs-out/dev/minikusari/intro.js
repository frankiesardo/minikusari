// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('minikusari.intro');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.core');
goog.require('minikusari.tutorial1');
goog.require('minikusari.tutorial2');
goog.require('minikusari.tutorial3');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minikusari$intro,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# minikusari\n\n> And if, you don't love me now\n> \n> You will never love me again\n> \n> I can still hear you saying\n> \n> You would never break the chain (Never break the chain)\n\n[minikusari](https://github.com/frankiesardo/minikusari) is a minimal rule engine built on top of Datascript (and can work with Datomic or Datahike).\n\nYou can use minikusari to simulate a [Forward Chaining](https://en.wikipedia.org/wiki/Forward_chaining) system that generates new facts based on a set of rules.\n\nThink of minikusari as the dual of the datalog query engine:\n\n- `datascript.core/q` finds all facts (datoms) that match a particular condition (backward chaining)\n- `minikusari.core/r` generates new facts (datoms) if a particular condition is met (forward chaining) \n\n## Comparison with other Clojure rule engines\n\nWhile other rule engines have defined their own semantics and language, minikusari is intentionally kept small and without any additional cognitive overhead.\nIf you know Datascript, you already know how to use minikusari. Play with the [interactive documentation]() and see for yourself.\n\nminikusari is therefore well suited as a learning tool to tinker with rule engines and see them at work.\nYou can build fully working systems with it, such as an [inference engine]() or a [game](), but they're obviously not optimised for performance.\n\nMore mature and \"production ready\" solutions already exist for Clojure:\n- [clara](https://github.com/cerner/clara-rules) led the way on forward chaining in Clojure. Its syntax might be a bit tricky to get at first, but it's a battle tested library \n- [zeder](https://www.youtube.com/watch?v=1E2CoObAaPQ) was the first to play with the idea of rules engines built on top of the Datomic model, but it was never released as an OS library\n- [odoyle](https://github.com/oakes/odoyle-rules) it's the most recent library and it's used for both inference and as a game engine. It's the main inspiration for minikusari, and the reason I wanted to build a similar experience on top of Datascript. \n\n## Naming\n\n`kusari` is Japanese for `chain`. The name `minikusari` is a tribute to `minikanren` (the embedded language for logic programming)"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();
