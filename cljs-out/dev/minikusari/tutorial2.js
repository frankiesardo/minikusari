// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('minikusari.tutorial2');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('minikusari.core');
goog.require('devcards.core');
goog.require('datascript.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minikusari$tutorial2,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["# Forward Chaining Inference for the modern detective","> Key concepts: `infer` loop","We know the basics of minikusari rules, but they don't seem too useful for now, don't they.","I mean, we can basically transact a bit of extra data whenever some conditions are met, but what can we do with it?","Well, everything becomes more interesting when it's recursive: what if the transaction data returned by the rules is added to the db, and then rules are run again against the new db?","We can chain facts that can be derived from very simple assumptions, just like Sherlock Holmes does.","(We can also decouple complex systems where different actions trigger changes to related data sources, like a payment and shipping system causing changes on your order system, but let's just stick to Sherlock for now)"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
minikusari.tutorial2.crime_db = datascript.core.db_with((function (){var G__26972 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$country_SLASH_code,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity], null),cljs.core.cst$kw$person_SLASH_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity], null),cljs.core.cst$kw$person_SLASH_citizens_DASH_of,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),cljs.core.cst$kw$country_SLASH_enemy_DASH_of,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),cljs.core.cst$kw$country_SLASH_owns,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db$cardinality_SLASH_many,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null),cljs.core.cst$kw$object_SLASH_sold_DASH_by,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db$type_SLASH_ref], null)], null);
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__26972) : datascript.core.empty_db.call(null,G__26972));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db_SLASH_id,"USA",cljs.core.cst$kw$country_SLASH_code,cljs.core.cst$kw$usa], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,"Robert",cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false,cljs.core.cst$kw$person_SLASH_name,"Robert",cljs.core.cst$kw$person_SLASH_citizens_DASH_of,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,"USA"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db_SLASH_id,"Missiles",cljs.core.cst$kw$object_SLASH_type,cljs.core.cst$kw$missiles,cljs.core.cst$kw$object_SLASH_sold_DASH_by,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,"Robert"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_SLASH_id,"Sokovia",cljs.core.cst$kw$country_SLASH_code,cljs.core.cst$kw$sokovia,cljs.core.cst$kw$country_SLASH_enemy_DASH_of,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,"USA"], null)], null),cljs.core.cst$kw$country_SLASH_owns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_id,"Missiles"], null)], null)], null)], null));
minikusari.tutorial2.rules = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$when,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_p,cljs.core.cst$kw$person_SLASH_american_QMARK_,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_c,cljs.core.cst$kw$country_SLASH_hostile_QMARK_,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_o,cljs.core.cst$kw$object_SLASH_weapon_QMARK_,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_i,cljs.core.cst$kw$invoice_SLASH_seller,cljs.core.cst$sym$_QMARK_p], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_i,cljs.core.cst$kw$invoice_SLASH_buyer,cljs.core.cst$sym$_QMARK_c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_i,cljs.core.cst$kw$invoice_SLASH_object,cljs.core.cst$sym$_QMARK_o], null)], null),cljs.core.cst$kw$then,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,cljs.core.cst$sym$_QMARK_p,cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$when,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_p,cljs.core.cst$kw$person_SLASH_citizens_DASH_of,cljs.core.cst$sym$_QMARK_c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_c,cljs.core.cst$kw$country_SLASH_code,cljs.core.cst$kw$usa], null)], null),cljs.core.cst$kw$then,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,cljs.core.cst$sym$_QMARK_p,cljs.core.cst$kw$person_SLASH_american_QMARK_,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$when,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_c1,cljs.core.cst$kw$country_SLASH_enemy_DASH_of,cljs.core.cst$sym$_QMARK_c2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_c2,cljs.core.cst$kw$country_SLASH_code,cljs.core.cst$kw$usa], null)], null),cljs.core.cst$kw$then,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,cljs.core.cst$sym$_QMARK_c1,cljs.core.cst$kw$country_SLASH_hostile_QMARK_,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$when,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_o,cljs.core.cst$kw$object_SLASH_type,cljs.core.cst$kw$missiles], null)], null),cljs.core.cst$kw$then,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,cljs.core.cst$sym$_QMARK_o,cljs.core.cst$kw$object_SLASH_weapon_QMARK_,true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$when,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_c,cljs.core.cst$kw$country_SLASH_owns,cljs.core.cst$sym$_QMARK_o], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_o,cljs.core.cst$kw$object_SLASH_sold_DASH_by,cljs.core.cst$sym$_QMARK_p], null),cljs.core.list(cljs.core.cst$sym$not,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_i,cljs.core.cst$kw$invoice_SLASH_object,cljs.core.cst$sym$_QMARK_o], null))], null),cljs.core.cst$kw$then,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,"invoice",cljs.core.cst$kw$invoice_SLASH_seller,cljs.core.cst$sym$_QMARK_p], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,"invoice",cljs.core.cst$kw$invoice_SLASH_buyer,cljs.core.cst$sym$_QMARK_c], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,"invoice",cljs.core.cst$kw$invoice_SLASH_object,cljs.core.cst$sym$_QMARK_o], null)], null)], null)], null);
/**
 * Takes a db and a list of rules. Returns a new db with all inferred facts.
 *   Keeps adding data derived from the rules to the db until db doesn't change.
 *   Stops after max 100 iterations.
 */
minikusari.tutorial2.infer = (function minikusari$tutorial2$infer(db,rules){
var db__$1 = db;
var max_iter = (100);
while(true){
var tx_data = (function (){var iter__4529__auto__ = ((function (db__$1,max_iter){
return (function minikusari$tutorial2$infer_$_iter__26973(s__26974){
return (new cljs.core.LazySeq(null,((function (db__$1,max_iter){
return (function (){
var s__26974__$1 = s__26974;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26974__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var rule = cljs.core.first(xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__26974__$1,db__$1,max_iter,rule,xs__6277__auto__,temp__5720__auto__){
return (function minikusari$tutorial2$infer_$_iter__26973_$_iter__26975(s__26976){
return (new cljs.core.LazySeq(null,((function (s__26974__$1,db__$1,max_iter,rule,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26976__$1 = s__26976;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26976__$1);
if(temp__5720__auto____$1){
var s__26976__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26976__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26976__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26978 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26977 = (0);
while(true){
if((i__26977 < size__4528__auto__)){
var tx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26977);
cljs.core.chunk_append(b__26978,tx);

var G__26979 = (i__26977 + (1));
i__26977 = G__26979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26978),minikusari$tutorial2$infer_$_iter__26973_$_iter__26975(cljs.core.chunk_rest(s__26976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26978),null);
}
} else {
var tx = cljs.core.first(s__26976__$2);
return cljs.core.cons(tx,minikusari$tutorial2$infer_$_iter__26973_$_iter__26975(cljs.core.rest(s__26976__$2)));
}
} else {
return null;
}
break;
}
});})(s__26974__$1,db__$1,max_iter,rule,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26974__$1,db__$1,max_iter,rule,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(minikusari.core.r(rule,db__$1)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,minikusari$tutorial2$infer_$_iter__26973(cljs.core.rest(s__26974__$1)));
} else {
var G__26980 = cljs.core.rest(s__26974__$1);
s__26974__$1 = G__26980;
continue;
}
} else {
return null;
}
break;
}
});})(db__$1,max_iter))
,null,null));
});})(db__$1,max_iter))
;
return iter__4529__auto__(rules);
})();
var new_db = datascript.core.db_with(db__$1,tx_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db__$1,new_db)){
return new_db;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),max_iter)){
return new_db;
} else {
var G__26981 = new_db;
var G__26982 = (max_iter - (1));
db__$1 = G__26981;
max_iter = G__26982;
continue;

}
}
break;
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minikusari$tutorial2,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["## Robert's in trouble","Consider this problem statement:\n\n  > As per the law, it is a crime for an American to sell weapons to hostile nations. Sokovia, an enemy of America, has some missiles, and all the missiles were sold to it by Robert, who is an American citizen.\n  >\n  > Prove that Robert is criminal","We collect the evidence at our disposal and place it in our crime-db",["\n```clojure\n","(def crime-db\n  (d/db-with\n    (d/empty-db {:country/code       {:db/unique :db.unique/identity}\n                 :person/name        {:db/unique :db.unique/identity}\n                 :person/citizens-of {:db/cardinality :db.cardinality/many\n                                      :db/valueType   :db.type/ref}\n                 :country/enemy-of   {:db/cardinality :db.cardinality/many\n                                      :db/valueType   :db.type/ref}\n                 :country/owns       {:db/cardinality :db.cardinality/many\n                                      :db/valueType   :db.type/ref}\n                 :object/sold-by     {:db/valueType :db.type/ref}})\n\n    [{:db/id \"USA\" :country/code :usa}\n     {:db/id \"Robert\" :person/criminal? false :person/name \"Robert\" :person/citizens-of [{:db/id \"USA\"}]}\n     {:db/id \"Missiles\" :object/type :missiles :object/sold-by {:db/id \"Robert\"}}\n     {:db/id \"Sokovia\" :country/code :sokovia :country/enemy-of [{:db/id \"USA\"}] :country/owns [{:db/id \"Missiles\"}]}]))","\n```\n"].join(''),"We have to add a little bit of schema to this db so we can follow links between countries, objects and people\n\n  If we create a rule that matches the definition given by the law, it would look something like",["\n```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code(cljs.core.first(minikusari.tutorial2.rules))),"\n```\n"].join(''),"We have a problem now: our rule does not match the shape of our data. We have to add additional rule that derive more facts until this rule is applicable.\n\n  Let's code a basic `infer` loop",["\n```clojure\n","(defn infer\n  \"Takes a db and a list of rules. Returns a new db with all inferred facts.\n  Keeps adding data derived from the rules to the db until db doesn't change.\n  Stops after max 100 iterations.\"\n  [db rules]\n  (loop [db db max-iter 100]\n    (let [tx-data (for [rule rules tx (r rule db)] tx)\n          new-db (d/db-with db tx-data)]\n      (cond\n        (= db new-db) new-db\n        (= 1 max-iter) new-db\n        :else (recur new-db (dec max-iter))))))","\n```\n"].join(''),"Now we can keep generating data until we get to the correct shape that matches our initial rule.\n\n  Let's add a few more rules, for example: that a missile is a weapon, an enemy is hostile, etc.",["\n```clojure\n","(def rules\n  '[;; American law\n    {:when [[?p :person/american? true]\n            [?c :country/hostile? true]\n            [?o :object/weapon? true]\n            [?i :invoice/seller ?p]\n            [?i :invoice/buyer ?c]\n            [?i :invoice/object ?o]]\n     :then [[:db/add ?p :person/criminal? true]]}\n    ;; A USA citizen is American\n    {:when [[?p :person/citizens-of ?c]\n            [?c :country/code :usa]]\n     :then [[:db/add ?p :person/american? true]]}\n    ;; An enemy is hostile\n    {:when [[?c1 :country/enemy-of ?c2]\n            [?c2 :country/code :usa]]\n     :then [[:db/add ?c1 :country/hostile? true]]}\n    ;; A missile is a weapon\n    {:when [[?o :object/type :missiles]]\n     :then [[:db/add ?o :object/weapon? true]]}\n    ;; If someone sold it and someone bought it, there should be an invoice somewhere, right?\n    {:when [[?c :country/owns ?o]\n            [?o :object/sold-by ?p]\n            (not [?i :invoice/object ?o])]\n     :then [[:db/add \"invoice\" :invoice/seller ?p]\n            [:db/add \"invoice\" :invoice/buyer ?c]\n            [:db/add \"invoice\" :invoice/object ?o]]}])","\n```\n"].join(''),"NB: in the last rule there is a `not` exists condition to avoid generating an infinite amount of invoices\n\n  Let's see our infer loop in action"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minikusari$tutorial2,cljs.core.cst$kw$robert_DASH_trial_DASH_test], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"robert-trial-test",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["We assume Robert is innocent until proven otherwise"], 0));

try{try{var values__22335__auto__ = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),(new cljs.core.List(null,(function (){var G__26985 = minikusari.tutorial2.crime_db;
var G__26986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null);
var G__26987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__26985,G__26986,G__26987) : datascript.core.pull.call(null,G__26985,G__26986,G__26987));
})(),null,(1),null)),(2),null));
var result__22336__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22335__auto__);
if(cljs.core.truth_(result__22336__auto__)){
var G__26988_27011 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",105,cljs.core.cst$kw$pass,9,120,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),120,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto__),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26988_27011) : cljs.test.report.call(null,G__26988_27011));
} else {
var G__26989_27012 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",105,cljs.core.cst$kw$fail,9,120,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),120,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto__),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26989_27012) : cljs.test.report.call(null,G__26989_27012));
}

return result__22336__auto__;
}catch (e26983){var t__22386__auto__ = e26983;
var G__26984 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",105,cljs.core.cst$kw$error,9,120,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),120,t__22386__auto__,null]);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26984) : cljs.test.report.call(null,G__26984));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["We can prove Robert is a criminal following a forward chaining inference"], 0));

try{try{var values__22335__auto__ = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),(new cljs.core.List(null,(function (){var G__26992 = minikusari.tutorial2.infer(minikusari.tutorial2.crime_db,minikusari.tutorial2.rules);
var G__26993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null);
var G__26994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__26992,G__26993,G__26994) : datascript.core.pull.call(null,G__26992,G__26993,G__26994));
})(),null,(1),null)),(2),null));
var result__22336__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22335__auto__);
if(cljs.core.truth_(result__22336__auto__)){
var G__26995_27013 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",118,cljs.core.cst$kw$pass,9,122,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$infer,cljs.core.cst$sym$rules),cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),122,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto__),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26995_27013) : cljs.test.report.call(null,G__26995_27013));
} else {
var G__26996_27014 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",118,cljs.core.cst$kw$fail,9,122,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$infer,cljs.core.cst$sym$rules),cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),122,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto__),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26996_27014) : cljs.test.report.call(null,G__26996_27014));
}

return result__22336__auto__;
}catch (e26990){var t__22386__auto__ = e26990;
var G__26991 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",118,cljs.core.cst$kw$error,9,122,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$infer,cljs.core.cst$sym$rules),cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),122,t__22386__auto__,null]);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26991) : cljs.test.report.call(null,G__26991));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.rest);
}})], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

minikusari.tutorial2.robert_trial_test = (function minikusari$tutorial2$robert_trial_test(){
return cljs.test.test_var(minikusari.tutorial2.robert_trial_test.cljs$lang$var);
});
minikusari.tutorial2.robert_trial_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["We assume Robert is innocent until proven otherwise"], 0));

try{try{var values__22335__auto___27015 = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),(new cljs.core.List(null,(function (){var G__26999 = minikusari.tutorial2.crime_db;
var G__27000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null);
var G__27001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__26999,G__27000,G__27001) : datascript.core.pull.call(null,G__26999,G__27000,G__27001));
})(),null,(1),null)),(2),null));
var result__22336__auto___27016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22335__auto___27015);
if(cljs.core.truth_(result__22336__auto___27016)){
var G__27002_27017 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",105,cljs.core.cst$kw$pass,9,120,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),120,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto___27015),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__27002_27017) : cljs.test.report.call(null,G__27002_27017));
} else {
var G__27003_27018 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",105,cljs.core.cst$kw$fail,9,120,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),120,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto___27015),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__27003_27018) : cljs.test.report.call(null,G__27003_27018));
}

}catch (e26997){var t__22386__auto___27019 = e26997;
var G__26998_27020 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",105,cljs.core.cst$kw$error,9,120,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,false], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),120,t__22386__auto___27019,null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__26998_27020) : cljs.test.report.call(null,G__26998_27020));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["We can prove Robert is a criminal following a forward chaining inference"], 0));

try{try{var values__22335__auto__ = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),(new cljs.core.List(null,(function (){var G__27006 = minikusari.tutorial2.infer(minikusari.tutorial2.crime_db,minikusari.tutorial2.rules);
var G__27007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null);
var G__27008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__27006,G__27007,G__27008) : datascript.core.pull.call(null,G__27006,G__27007,G__27008));
})(),null,(1),null)),(2),null));
var result__22336__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__22335__auto__);
if(cljs.core.truth_(result__22336__auto__)){
var G__27009_27021 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",118,cljs.core.cst$kw$pass,9,122,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$infer,cljs.core.cst$sym$rules),cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),122,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto__),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__27009_27021) : cljs.test.report.call(null,G__27009_27021));
} else {
var G__27010_27022 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",118,cljs.core.cst$kw$fail,9,122,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$infer,cljs.core.cst$sym$rules),cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),122,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__22335__auto__),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__27010_27022) : cljs.test.report.call(null,G__27010_27022));
}

return result__22336__auto__;
}catch (e27004){var t__22386__auto__ = e27004;
var G__27005 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",118,cljs.core.cst$kw$error,9,122,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_,true], null),cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$crime_DASH_db,cljs.core.list(cljs.core.cst$sym$infer,cljs.core.cst$sym$rules),cljs.core.list(cljs.core.cst$sym$d_SLASH_pull,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_criminal_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$person_SLASH_name,"Robert"], null)))),122,t__22386__auto__,null]);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__27005) : cljs.test.report.call(null,G__27005));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null),cljs.core.rest);
}});

(minikusari.tutorial2.robert_trial_test.cljs$lang$var = new cljs.core.Var(function(){return minikusari.tutorial2.robert_trial_test;},cljs.core.cst$sym$minikusari$tutorial2_SLASH_robert_DASH_trial_DASH_test,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$minikusari$tutorial2,cljs.core.cst$sym$robert_DASH_trial_DASH_test,"/Users/frankie/Documents/minikusari/devcards/src/minikusari/tutorial2.cljs",27,1,118,118,cljs.core.List.EMPTY,null,(cljs.core.truth_(minikusari.tutorial2.robert_trial_test)?minikusari.tutorial2.robert_trial_test.cljs$lang$test:null)])));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minikusari$tutorial2,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Too bad Robert, computer says you're a criminal"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
