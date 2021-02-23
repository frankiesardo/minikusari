// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__21782__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__21779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__21780 = cljs.core.seq(vec__21779);
var first__21781 = cljs.core.first(seq__21780);
var seq__21780__$1 = cljs.core.next(seq__21780);
var tag = first__21781;
var body = seq__21780__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__21782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21783__i = 0, G__21783__a = new Array(arguments.length -  0);
while (G__21783__i < G__21783__a.length) {G__21783__a[G__21783__i] = arguments[G__21783__i + 0]; ++G__21783__i;}
  args = new cljs.core.IndexedSeq(G__21783__a,0,null);
} 
return G__21782__delegate.call(this,args);};
G__21782.cljs$lang$maxFixedArity = 0;
G__21782.cljs$lang$applyTo = (function (arglist__21784){
var args = cljs.core.seq(arglist__21784);
return G__21782__delegate(args);
});
G__21782.cljs$core$IFn$_invoke$arity$variadic = G__21782__delegate;
return G__21782;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__21785(s__21786){
return (new cljs.core.LazySeq(null,(function (){
var s__21786__$1 = s__21786;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__21786__$1);
if(temp__5720__auto__){
var s__21786__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21786__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__21786__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__21788 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__21787 = (0);
while(true){
if((i__21787 < size__4528__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__21787);
cljs.core.chunk_append(b__21788,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__21789 = (i__21787 + (1));
i__21787 = G__21789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21788),sablono$core$update_arglists_$_iter__21785(cljs.core.chunk_rest(s__21786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21788),null);
}
} else {
var args = cljs.core.first(s__21786__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__21785(cljs.core.rest(s__21786__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21795 = arguments.length;
var i__4737__auto___21796 = (0);
while(true){
if((i__4737__auto___21796 < len__4736__auto___21795)){
args__4742__auto__.push((arguments[i__4737__auto___21796]));

var G__21797 = (i__4737__auto___21796 + (1));
i__4737__auto___21796 = G__21797;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__21791(s__21792){
return (new cljs.core.LazySeq(null,(function (){
var s__21792__$1 = s__21792;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__21792__$1);
if(temp__5720__auto__){
var s__21792__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21792__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__21792__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__21794 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__21793 = (0);
while(true){
if((i__21793 < size__4528__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__21793);
cljs.core.chunk_append(b__21794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__21798 = (i__21793 + (1));
i__21793 = G__21798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21794),sablono$core$iter__21791(cljs.core.chunk_rest(s__21792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21794),null);
}
} else {
var style = cljs.core.first(s__21792__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__21791(cljs.core.rest(s__21792__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq21790){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21790));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to21799 = (function sablono$core$link_to21799(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21802 = arguments.length;
var i__4737__auto___21803 = (0);
while(true){
if((i__4737__auto___21803 < len__4736__auto___21802)){
args__4742__auto__.push((arguments[i__4737__auto___21803]));

var G__21804 = (i__4737__auto___21803 + (1));
i__4737__auto___21803 = G__21804;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to21799.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to21799.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to21799.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to21799.cljs$lang$applyTo = (function (seq21800){
var G__21801 = cljs.core.first(seq21800);
var seq21800__$1 = cljs.core.next(seq21800);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21801,seq21800__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to21799);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21805 = (function sablono$core$mail_to21805(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21812 = arguments.length;
var i__4737__auto___21813 = (0);
while(true){
if((i__4737__auto___21813 < len__4736__auto___21812)){
args__4742__auto__.push((arguments[i__4737__auto___21813]));

var G__21814 = (i__4737__auto___21813 + (1));
i__4737__auto___21813 = G__21814;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to21805.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to21805.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21808){
var vec__21809 = p__21808;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21809,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to21805.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to21805.cljs$lang$applyTo = (function (seq21806){
var G__21807 = cljs.core.first(seq21806);
var seq21806__$1 = cljs.core.next(seq21806);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21807,seq21806__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to21805);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21815 = (function sablono$core$unordered_list21815(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4529__auto__ = (function sablono$core$unordered_list21815_$_iter__21816(s__21817){
return (new cljs.core.LazySeq(null,(function (){
var s__21817__$1 = s__21817;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__21817__$1);
if(temp__5720__auto__){
var s__21817__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21817__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__21817__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__21819 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__21818 = (0);
while(true){
if((i__21818 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__21818);
cljs.core.chunk_append(b__21819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__21820 = (i__21818 + (1));
i__21818 = G__21820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21819),sablono$core$unordered_list21815_$_iter__21816(cljs.core.chunk_rest(s__21817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21819),null);
}
} else {
var x = cljs.core.first(s__21817__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list21815_$_iter__21816(cljs.core.rest(s__21817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list21815);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21821 = (function sablono$core$ordered_list21821(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4529__auto__ = (function sablono$core$ordered_list21821_$_iter__21822(s__21823){
return (new cljs.core.LazySeq(null,(function (){
var s__21823__$1 = s__21823;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__21823__$1);
if(temp__5720__auto__){
var s__21823__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21823__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__21823__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__21825 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__21824 = (0);
while(true){
if((i__21824 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__21824);
cljs.core.chunk_append(b__21825,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__21826 = (i__21824 + (1));
i__21824 = G__21826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21825),sablono$core$ordered_list21821_$_iter__21822(cljs.core.chunk_rest(s__21823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21825),null);
}
} else {
var x = cljs.core.first(s__21823__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list21821_$_iter__21822(cljs.core.rest(s__21823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list21821);
/**
 * Create an image element.
 */
sablono.core.image21827 = (function sablono$core$image21827(var_args){
var G__21829 = arguments.length;
switch (G__21829) {
case 1:
return sablono.core.image21827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image21827.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image21827.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
}));

(sablono.core.image21827.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image21827);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__21831_SHARP_,p2__21832_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21831_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21832_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__21833_SHARP_,p2__21834_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21833_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21834_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__21836 = arguments.length;
switch (G__21836) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field21838 = (function sablono$core$color_field21838(var_args){
var G__21840 = arguments.length;
switch (G__21840) {
case 1:
return sablono.core.color_field21838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field21838.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__21769__auto__);
}));

(sablono.core.color_field21838.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.color_field21838.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field21838);

/**
 * Creates a date input field.
 */
sablono.core.date_field21841 = (function sablono$core$date_field21841(var_args){
var G__21843 = arguments.length;
switch (G__21843) {
case 1:
return sablono.core.date_field21841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field21841.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__21769__auto__);
}));

(sablono.core.date_field21841.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.date_field21841.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field21841);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21844 = (function sablono$core$datetime_field21844(var_args){
var G__21846 = arguments.length;
switch (G__21846) {
case 1:
return sablono.core.datetime_field21844.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21844.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field21844.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__21769__auto__);
}));

(sablono.core.datetime_field21844.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.datetime_field21844.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field21844);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21847 = (function sablono$core$datetime_local_field21847(var_args){
var G__21849 = arguments.length;
switch (G__21849) {
case 1:
return sablono.core.datetime_local_field21847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field21847.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__21769__auto__);
}));

(sablono.core.datetime_local_field21847.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.datetime_local_field21847.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field21847);

/**
 * Creates a email input field.
 */
sablono.core.email_field21850 = (function sablono$core$email_field21850(var_args){
var G__21852 = arguments.length;
switch (G__21852) {
case 1:
return sablono.core.email_field21850.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21850.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field21850.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__21769__auto__);
}));

(sablono.core.email_field21850.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.email_field21850.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field21850);

/**
 * Creates a file input field.
 */
sablono.core.file_field21853 = (function sablono$core$file_field21853(var_args){
var G__21855 = arguments.length;
switch (G__21855) {
case 1:
return sablono.core.file_field21853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field21853.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__21769__auto__);
}));

(sablono.core.file_field21853.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.file_field21853.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field21853);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21856 = (function sablono$core$hidden_field21856(var_args){
var G__21858 = arguments.length;
switch (G__21858) {
case 1:
return sablono.core.hidden_field21856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field21856.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__21769__auto__);
}));

(sablono.core.hidden_field21856.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.hidden_field21856.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field21856);

/**
 * Creates a month input field.
 */
sablono.core.month_field21859 = (function sablono$core$month_field21859(var_args){
var G__21861 = arguments.length;
switch (G__21861) {
case 1:
return sablono.core.month_field21859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field21859.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__21769__auto__);
}));

(sablono.core.month_field21859.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.month_field21859.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field21859);

/**
 * Creates a number input field.
 */
sablono.core.number_field21862 = (function sablono$core$number_field21862(var_args){
var G__21864 = arguments.length;
switch (G__21864) {
case 1:
return sablono.core.number_field21862.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21862.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field21862.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__21769__auto__);
}));

(sablono.core.number_field21862.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.number_field21862.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field21862);

/**
 * Creates a password input field.
 */
sablono.core.password_field21865 = (function sablono$core$password_field21865(var_args){
var G__21867 = arguments.length;
switch (G__21867) {
case 1:
return sablono.core.password_field21865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field21865.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__21769__auto__);
}));

(sablono.core.password_field21865.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.password_field21865.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field21865);

/**
 * Creates a range input field.
 */
sablono.core.range_field21868 = (function sablono$core$range_field21868(var_args){
var G__21870 = arguments.length;
switch (G__21870) {
case 1:
return sablono.core.range_field21868.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21868.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field21868.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__21769__auto__);
}));

(sablono.core.range_field21868.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.range_field21868.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field21868);

/**
 * Creates a search input field.
 */
sablono.core.search_field21871 = (function sablono$core$search_field21871(var_args){
var G__21873 = arguments.length;
switch (G__21873) {
case 1:
return sablono.core.search_field21871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field21871.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__21769__auto__);
}));

(sablono.core.search_field21871.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.search_field21871.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field21871);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21874 = (function sablono$core$tel_field21874(var_args){
var G__21876 = arguments.length;
switch (G__21876) {
case 1:
return sablono.core.tel_field21874.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field21874.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__21769__auto__);
}));

(sablono.core.tel_field21874.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.tel_field21874.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field21874);

/**
 * Creates a text input field.
 */
sablono.core.text_field21877 = (function sablono$core$text_field21877(var_args){
var G__21879 = arguments.length;
switch (G__21879) {
case 1:
return sablono.core.text_field21877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field21877.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__21769__auto__);
}));

(sablono.core.text_field21877.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.text_field21877.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field21877);

/**
 * Creates a time input field.
 */
sablono.core.time_field21880 = (function sablono$core$time_field21880(var_args){
var G__21882 = arguments.length;
switch (G__21882) {
case 1:
return sablono.core.time_field21880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field21880.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__21769__auto__);
}));

(sablono.core.time_field21880.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.time_field21880.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field21880);

/**
 * Creates a url input field.
 */
sablono.core.url_field21883 = (function sablono$core$url_field21883(var_args){
var G__21885 = arguments.length;
switch (G__21885) {
case 1:
return sablono.core.url_field21883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field21883.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__21769__auto__);
}));

(sablono.core.url_field21883.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.url_field21883.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field21883);

/**
 * Creates a week input field.
 */
sablono.core.week_field21886 = (function sablono$core$week_field21886(var_args){
var G__21888 = arguments.length;
switch (G__21888) {
case 1:
return sablono.core.week_field21886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field21886.cljs$core$IFn$_invoke$arity$1 = (function (name__21769__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__21769__auto__);
}));

(sablono.core.week_field21886.cljs$core$IFn$_invoke$arity$2 = (function (name__21769__auto__,value__21770__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week),name__21769__auto__,value__21770__auto__);
}));

(sablono.core.week_field21886.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field21886);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21906 = (function sablono$core$check_box21906(var_args){
var G__21908 = arguments.length;
switch (G__21908) {
case 1:
return sablono.core.check_box21906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21906.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box21906.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box21906.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box21906.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.check_box21906.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box21906);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21910 = (function sablono$core$radio_button21910(var_args){
var G__21912 = arguments.length;
switch (G__21912) {
case 1:
return sablono.core.radio_button21910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21910.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button21910.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button21910.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button21910.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
}));

(sablono.core.radio_button21910.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button21910);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21914 = (function sablono$core$select_options21914(coll){
var iter__4529__auto__ = (function sablono$core$select_options21914_$_iter__21915(s__21916){
return (new cljs.core.LazySeq(null,(function (){
var s__21916__$1 = s__21916;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__21916__$1);
if(temp__5720__auto__){
var s__21916__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21916__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__21916__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__21918 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__21917 = (0);
while(true){
if((i__21917 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__21917);
cljs.core.chunk_append(b__21918,((cljs.core.sequential_QMARK_(x))?(function (){var vec__21919 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21919,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21919,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21919,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options21914.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options21914.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options21914.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__21925 = (i__21917 + (1));
i__21917 = G__21925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21918),sablono$core$select_options21914_$_iter__21915(cljs.core.chunk_rest(s__21916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21918),null);
}
} else {
var x = cljs.core.first(s__21916__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__21922 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21922,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21922,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21922,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options21914.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options21914.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options21914.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options21914_$_iter__21915(cljs.core.rest(s__21916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options21914);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21926 = (function sablono$core$drop_down21926(var_args){
var G__21928 = arguments.length;
switch (G__21928) {
case 2:
return sablono.core.drop_down21926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21926.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down21926.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21926.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down21926.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down21926.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down21926);
/**
 * Creates a text area element.
 */
sablono.core.text_area21930 = (function sablono$core$text_area21930(var_args){
var G__21932 = arguments.length;
switch (G__21932) {
case 1:
return sablono.core.text_area21930.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21930.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area21930.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area21930.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area21930.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area21930);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21934 = (function sablono$core$label21934(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label21934);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21935 = (function sablono$core$submit_button21935(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button21935);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21936 = (function sablono$core$reset_button21936(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button21936);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21937 = (function sablono$core$form_to21937(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21947 = arguments.length;
var i__4737__auto___21948 = (0);
while(true){
if((i__4737__auto___21948 < len__4736__auto___21947)){
args__4742__auto__.push((arguments[i__4737__auto___21948]));

var G__21949 = (i__4737__auto___21948 + (1));
i__4737__auto___21948 = G__21949;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to21937.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to21937.cljs$core$IFn$_invoke$arity$variadic = (function (p__21940,body){
var vec__21941 = p__21940;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21941,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21941,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__21944 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__21945 = "_method";
var G__21946 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__21944,G__21945,G__21946) : sablono.core.hidden_field.call(null,G__21944,G__21945,G__21946));
})()], null)),body));
}));

(sablono.core.form_to21937.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to21937.cljs$lang$applyTo = (function (seq21938){
var G__21939 = cljs.core.first(seq21938);
var seq21938__$1 = cljs.core.next(seq21938);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21939,seq21938__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to21937);
