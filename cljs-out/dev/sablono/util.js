// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

var sablono$util$ToString$to_str$dyn_19920 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (sablono.util.to_str[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4429__auto__.call(null,x));
} else {
var m__4426__auto__ = (sablono.util.to_str["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4426__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
});
/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if((((!((x == null)))) && ((!((x.sablono$util$ToString$to_str$arity$1 == null)))))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
return sablono$util$ToString$to_str$dyn_19920(x);
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

var sablono$util$ToURI$to_uri$dyn_19921 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (sablono.util.to_uri[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4429__auto__.call(null,x));
} else {
var m__4426__auto__ = (sablono.util.to_uri["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4426__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
});
/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if((((!((x == null)))) && ((!((x.sablono$util$ToURI$to_uri$arity$1 == null)))))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
return sablono$util$ToURI$to_uri$dyn_19921(x);
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19923 = arguments.length;
var i__4737__auto___19924 = (0);
while(true){
if((i__4737__auto___19924 < len__4736__auto___19923)){
args__4742__auto__.push((arguments[i__4737__auto___19924]));

var G__19925 = (i__4737__auto___19924 + (1));
i__4737__auto___19924 = G__19925;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
}));

(sablono.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.util.as_str.cljs$lang$applyTo = (function (seq19922){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19922));
}));

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__19926 = cljs.core.name(k).split("-");
var seq__19927 = cljs.core.seq(vec__19926);
var first__19928 = cljs.core.first(seq__19927);
var seq__19927__$1 = cljs.core.next(seq__19927);
var first_word = first__19928;
var words = seq__19927__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var m__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__19929){
var vec__19930 = p__19929;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19930,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.util.camel_case(k),v], null);
})),m);
var G__19933 = m__$1;
if(cljs.core.map_QMARK_(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19933,cljs.core.cst$kw$style,sablono.util.camel_case_keys);
} else {
return G__19933;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
sablono.util.element_QMARK_ = (function sablono$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], null));
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
if(typeof x === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return cljs.core.seq(x);
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),classes));
});
(cljs.core.Keyword.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name(x__$1);
}));

(goog.Uri.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__4126__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath()))));
}
})())){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1);
} else {
var base = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_);
if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base))){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(((base).length) - (1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
return [base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
}
}
}));

goog.object.set(sablono.util.ToString,"null",true);

goog.object.set(sablono.util.to_str,"null",(function (_){
return "";
}));

goog.object.set(sablono.util.ToString,"number",true);

goog.object.set(sablono.util.to_str,"number",(function (x){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}));

goog.object.set(sablono.util.ToString,"_",true);

goog.object.set(sablono.util.to_str,"_",(function (x){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}));
(goog.Uri.prototype.sablono$util$ToURI$ = cljs.core.PROTOCOL_SENTINEL);

(goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

goog.object.set(sablono.util.ToURI,"_",true);

goog.object.set(sablono.util.to_uri,"_",(function (x){
return (new goog.Uri(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
}));
