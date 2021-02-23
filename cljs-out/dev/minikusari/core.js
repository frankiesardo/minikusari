// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('minikusari.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('clojure.walk');
/**
 * Tries to match rule against db
 *   Returns tx-data or empty list if rule does not match
 */
minikusari.core.r = (function minikusari$core$r(p__26907,db){
var map__26908 = p__26907;
var map__26908__$1 = (((((!((map__26908 == null))))?(((((map__26908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26908):map__26908);
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26908__$1,cljs.core.cst$kw$when);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26908__$1,cljs.core.cst$kw$then);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26908__$1,cljs.core.cst$kw$args);
var syms = (function (){var iter__4529__auto__ = (function minikusari$core$r_$_iter__26910(s__26911){
return (new cljs.core.LazySeq(null,(function (){
var s__26911__$1 = s__26911;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26911__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var row = cljs.core.first(xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__26911__$1,row,xs__6277__auto__,temp__5720__auto__,map__26908,map__26908__$1,when,then,args){
return (function minikusari$core$r_$_iter__26910_$_iter__26912(s__26913){
return (new cljs.core.LazySeq(null,((function (s__26911__$1,row,xs__6277__auto__,temp__5720__auto__,map__26908,map__26908__$1,when,then,args){
return (function (){
var s__26913__$1 = s__26913;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26913__$1);
if(temp__5720__auto____$1){
var s__26913__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26913__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26913__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26915 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26914 = (0);
while(true){
if((i__26914 < size__4528__auto__)){
var el = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26914);
if((el instanceof cljs.core.Symbol)){
cljs.core.chunk_append(b__26915,el);

var G__26922 = (i__26914 + (1));
i__26914 = G__26922;
continue;
} else {
var G__26923 = (i__26914 + (1));
i__26914 = G__26923;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26915),minikusari$core$r_$_iter__26910_$_iter__26912(cljs.core.chunk_rest(s__26913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26915),null);
}
} else {
var el = cljs.core.first(s__26913__$2);
if((el instanceof cljs.core.Symbol)){
return cljs.core.cons(el,minikusari$core$r_$_iter__26910_$_iter__26912(cljs.core.rest(s__26913__$2)));
} else {
var G__26924 = cljs.core.rest(s__26913__$2);
s__26913__$1 = G__26924;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26911__$1,row,xs__6277__auto__,temp__5720__auto__,map__26908,map__26908__$1,when,then,args))
,null,null));
});})(s__26911__$1,row,xs__6277__auto__,temp__5720__auto__,map__26908,map__26908__$1,when,then,args))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(row));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,minikusari$core$r_$_iter__26910(cljs.core.rest(s__26911__$1)));
} else {
var G__26925 = cljs.core.rest(s__26911__$1);
s__26911__$1 = G__26925;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(then);
})();
var results = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$find,syms,cljs.core.cst$kw$in,cljs.core.cons(cljs.core.cst$sym$$,cljs.core.keys(args)),cljs.core.cst$kw$where,when], null),db,cljs.core.vals(args));
var iter__4529__auto__ = (function minikusari$core$r_$_iter__26916(s__26917){
return (new cljs.core.LazySeq(null,(function (){
var s__26917__$1 = s__26917;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26917__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var match = cljs.core.first(xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__26917__$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args){
return (function minikusari$core$r_$_iter__26916_$_iter__26918(s__26919){
return (new cljs.core.LazySeq(null,((function (s__26917__$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args){
return (function (){
var s__26919__$1 = s__26919;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26919__$1);
if(temp__5720__auto____$1){
var s__26919__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26919__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26919__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26921 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26920 = (0);
while(true){
if((i__26920 < size__4528__auto__)){
var tx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26920);
cljs.core.chunk_append(b__26921,(function (){var swaps = cljs.core.zipmap(syms,match);
var f = ((function (i__26920,s__26917__$1,swaps,tx,c__4527__auto__,size__4528__auto__,b__26921,s__26919__$2,temp__5720__auto____$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args){
return (function (x){
if(cljs.core.coll_QMARK_(x)){
return x;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(swaps,x,x);
}
});})(i__26920,s__26917__$1,swaps,tx,c__4527__auto__,size__4528__auto__,b__26921,s__26919__$2,temp__5720__auto____$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args))
;
return clojure.walk.postwalk(f,tx);
})());

var G__26926 = (i__26920 + (1));
i__26920 = G__26926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26921),minikusari$core$r_$_iter__26916_$_iter__26918(cljs.core.chunk_rest(s__26919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26921),null);
}
} else {
var tx = cljs.core.first(s__26919__$2);
return cljs.core.cons((function (){var swaps = cljs.core.zipmap(syms,match);
var f = ((function (s__26917__$1,swaps,tx,s__26919__$2,temp__5720__auto____$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args){
return (function (x){
if(cljs.core.coll_QMARK_(x)){
return x;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(swaps,x,x);
}
});})(s__26917__$1,swaps,tx,s__26919__$2,temp__5720__auto____$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args))
;
return clojure.walk.postwalk(f,tx);
})(),minikusari$core$r_$_iter__26916_$_iter__26918(cljs.core.rest(s__26919__$2)));
}
} else {
return null;
}
break;
}
});})(s__26917__$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args))
,null,null));
});})(s__26917__$1,match,xs__6277__auto__,temp__5720__auto__,syms,results,map__26908,map__26908__$1,when,then,args))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(then));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,minikusari$core$r_$_iter__26916(cljs.core.rest(s__26917__$1)));
} else {
var G__26927 = cljs.core.rest(s__26917__$1);
s__26917__$1 = G__26927;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(results);
});
