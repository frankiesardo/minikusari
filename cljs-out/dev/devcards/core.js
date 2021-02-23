// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devcards.system');
goog.require('devcards.util.markdown');
goog.require('devcards.util.utils');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('goog.labs.userAgent.device');
goog.require('cljs.core.async');
devcards.core.global$module$react = goog.global["React"];
devcards.core.global$module$react_dom = goog.global["ReactDOM"];
devcards.core.global$module$create_react_class = goog.global["createReactClass"];
devcards.core.global$module$devcards_syntax_highlighter = goog.global["DevcardsSyntaxHighlighter"];

/**
 * @define {boolean}
 */
devcards.core.active = goog.define("devcards.core.active",false);

/**
 * @define {number}
 */
devcards.core.card_buffer_size = goog.define("devcards.core.card_buffer_size",(5000));
cljs.core.enable_console_print_BANG_();
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.devcard_event_chan !== 'undefined')){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(devcards.core.card_buffer_size));
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__4126__auto__ = (((typeof Symbol !== 'undefined'))?((cljs.core.fn_QMARK_(Symbol))?(function (){var and__4115__auto__ = goog.object.get(Symbol,"for");
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__22813 = goog.object.get(Symbol,"for");
return (fexpr__22813.cljs$core$IFn$_invoke$arity$1 ? fexpr__22813.cljs$core$IFn$_invoke$arity$1("react.element") : fexpr__22813.call(null,"react.element"));
} else {
return and__4115__auto__;
}
})():false):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.register_listeners_fig !== 'undefined')){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__22814_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__22814_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if((!((((m == null)) || (cljs.core.map_QMARK_(m)))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var G__22816 = arguments.length;
switch (G__22816) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,cljs.core.cst$kw$default_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1);

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
if(cljs.core.map_QMARK_(c)){
var map__22820 = c;
var map__22820__$1 = (((((!((map__22820 == null))))?(((((map__22820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22820):map__22820);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22820__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return false;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(devcards.core.card_QMARK_(c)){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

var G__22822 = "div";
var G__22823 = ({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(raw_html_str)), "dangerouslySetInnerHTML": ({"__html": raw_html_str})});
return devcards.core.global$module$react.createElement(G__22822,G__22823);
});

devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
if(goog.labs.userAgent.device.isMobile()){
return null;
} else {
var temp__5720__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return DevcardsSyntaxHighlighter.highlightBlock(node);
} else {
return null;
}
}
});
devcards.core.CodeHighlight = (function (){var ctor__16154__auto__ = (function (props__16151__auto__){
var this__16152__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16152__auto__,props__16151__auto__);

return this__16152__auto__;
});
goog.inherits(ctor__16154__auto__,devcards.util.utils.react_holder.Component);

var x22824_22839 = ctor__16154__auto__.prototype;
(x22824_22839.componentDidMount = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x22824_22839.componentDidUpdate = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x22824_22839.render = (function (){
var this$ = this;
var G__22825 = "pre";
var G__22826 = ({"className": (((!(goog.labs.userAgent.device.isMobile())))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__22828 = this$;
var G__22829 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__22828,G__22829) : devcards.core.get_props.call(null,G__22828,G__22829));
})())});
var G__22827 = (function (){var G__22830 = "code";
var G__22831 = ({"className": (function (){var or__4126__auto__ = (function (){var G__22835 = this$;
var G__22836 = cljs.core.cst$kw$lang;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__22835,G__22836) : devcards.core.get_props.call(null,G__22835,G__22836));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(), "ref": "code-ref"});
var G__22832 = sablono.interpreter.interpret((function (){var G__22837 = this$;
var G__22838 = cljs.core.cst$kw$code;
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__22837,G__22838) : devcards.core.get_props.call(null,G__22837,G__22838));
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22830,G__22831,G__22832) : sablono.core.create_element.call(null,G__22830,G__22831,G__22832));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22825,G__22826,G__22827) : sablono.core.create_element.call(null,G__22825,G__22826,G__22827));
}));


return ctor__16154__auto__;
})();

(devcards.core.CodeHighlight.displayName = cljs.core.name(cljs.core.cst$sym$CodeHighlight));
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__22840 = devcards.core.CodeHighlight;
var G__22841 = ({"code": code_str, "lang": lang});
return devcards.core.global$module$react.createElement(G__22840,G__22841);
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.markdown_block__GT_react !== 'undefined')){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__22842 = cljs.core.get_global_hierarchy;
return (fexpr__22842.cljs$core$IFn$_invoke$arity$0 ? fexpr__22842.cljs$core$IFn$_invoke$arity$0() : fexpr__22842.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__22843){
var map__22844 = p__22843;
var map__22844__$1 = (((((!((map__22844 == null))))?(((((map__22844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22844):map__22844);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22844__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__22846){
var map__22847 = p__22846;
var map__22847__$1 = (((((!((map__22847 == null))))?(((((map__22847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22847):map__22847);
var block = map__22847__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22847__$1,cljs.core.cst$kw$content);
var G__22849 = devcards.core.CodeHighlight;
var G__22850 = ({"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)});
return devcards.core.global$module$react.createElement(G__22849,G__22850);
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22861 = arguments.length;
var i__4737__auto___22862 = (0);
while(true){
if((i__4737__auto___22862 < len__4736__auto___22861)){
args__4742__auto__.push((arguments[i__4737__auto___22862]));

var G__22863 = (i__4737__auto___22862 + (1));
i__4737__auto___22862 = G__22863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return ["```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code(x)),"```\n"].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([strs__$1], 0));
var G__22852 = "div";
var G__22853 = ({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"});
var G__22854 = sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,data){
var G__22855 = "div";
var G__22856 = ({"key": i});
var G__22857 = sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22855,G__22856,G__22857) : sablono.core.create_element.call(null,G__22855,G__22856,G__22857));
}),blocks));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22852,G__22853,G__22854) : sablono.core.create_element.call(null,G__22852,G__22853,G__22854));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__22858 = "div";
var G__22859 = ({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"});
var G__22860 = sablono.interpreter.interpret(message);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22858,G__22859,G__22860) : sablono.core.create_element.call(null,G__22858,G__22859,G__22860));
}
}));

(devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq22851){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22851));
}));

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__22864 = "div";
var G__22865 = ({"key": "devcards_naked-card", "className": (function (){var G__22867 = devcards.system.devcards_rendered_card_class;
var G__22867__$1 = (cljs.core.truth_(padding_QMARK_)?[G__22867," com-rigsomelight-devcards-devcard-padding"].join(''):G__22867);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [G__22867__$1," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__22867__$1;
}
})()});
var G__22866 = sablono.interpreter.interpret(children);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22864,G__22865,G__22866) : sablono.core.create_element.call(null,G__22864,G__22865,G__22866));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var G__22869 = arguments.length;
switch (G__22869) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__22870 = card;
var map__22870__$1 = (((((!((map__22870 == null))))?(((((map__22870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22870):map__22870);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__22872 = "div";
var G__22873 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["com-rigsomelight-devcards-card-base-no-pad ",(cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null)].join('')], null))});
var G__22874 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22872,G__22873,G__22874) : sablono.core.create_element.call(null,G__22872,G__22873,G__22874));
} else {
var G__22875 = "div";
var G__22876 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"});
var G__22877 = (function (){var G__22879 = "div";
var G__22880 = ({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"});
var G__22881 = (cljs.core.truth_(path)?sablono.interpreter.interpret((function (){var G__22882 = "a";
var G__22883 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))});
var G__22884 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__22885 = " ";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22882,G__22883,G__22884,G__22885) : sablono.core.create_element.call(null,G__22882,G__22883,G__22884,G__22885));
})()):sablono.interpreter.interpret((function (){var attrs22886 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"span",((cljs.core.map_QMARK_(attrs22886))?sablono.interpreter.attributes(attrs22886):null),((cljs.core.map_QMARK_(attrs22886))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22886)], null)));
})()));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22879,G__22880,G__22881) : sablono.core.create_element.call(null,G__22879,G__22880,G__22881));
})();
var G__22878 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22875,G__22876,G__22877,G__22878) : sablono.core.create_element.call(null,G__22875,G__22876,G__22877,G__22878));
}
} else {
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2("span",null) : sablono.core.create_element.call(null,"span",null));
}
}));

(devcards.core.frame.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

var devcards$core$IDevcardOptions$_devcard_options$dyn_22890 = (function (this$,devcard_opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (devcards.core._devcard_options[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4429__auto__.call(null,this$,devcard_opts));
} else {
var m__4426__auto__ = (devcards.core._devcard_options["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4426__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
});
devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcardOptions$_devcard_options$dyn_22890(this$,devcard_opts);
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

var devcards$core$IDevcard$_devcard$dyn_22891 = (function (this$,devcard_opts){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (devcards.core._devcard[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4429__auto__.call(null,this$,devcard_opts));
} else {
var m__4426__auto__ = (devcards.core._devcard["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4426__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
});
devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
return devcards$core$IDevcard$_devcard$dyn_22891(this$,devcard_opts);
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5720__auto__ = goog.object.get(this$.refs,ref);
if(cljs.core.truth_(temp__5720__auto__)){
var comp = temp__5720__auto__;
return devcards.core.global$module$react_dom.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return goog.object.get(this$.props,cljs.core.name(k));
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return goog.object.get(this$.state,cljs.core.name(k));
} else {
return null;
}
});
devcards.core.DontUpdate = (function (){var ctor__16154__auto__ = (function (props__16151__auto__){
var this__16152__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16152__auto__,props__16151__auto__);

return this__16152__auto__;
});
goog.inherits(ctor__16154__auto__,devcards.util.utils.react_holder.Component);

var x22892_22894 = ctor__16154__auto__.prototype;
(x22892_22894.shouldComponentUpdate = (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(next_props,"change_count"),devcards.core.get_props(this$,cljs.core.cst$kw$change_count));
return update_QMARK_;
}));

(x22892_22894.render = (function (){
var this$ = this;
var attrs22893 = devcards.core.get_props(this$,cljs.core.cst$kw$children_thunk);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22893))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs22893], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs22893))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22893)], null)));
}));


return ctor__16154__auto__;
})();

(devcards.core.DontUpdate.displayName = cljs.core.name(cljs.core.cst$sym$DontUpdate));
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
var G__22895 = devcards.core.DontUpdate;
var G__22896 = ({"change_count": change_count, "children_thunk": children_thunk});
return devcards.core.global$module$react.createElement(G__22895,G__22896);
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__4126__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((((!((main_obj_SINGLEQUOTE_ == null)))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var project = (function (){var or__4126__auto__ = cljs.core.cst$kw$projection.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})();
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__5720__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5720__auto__)){
var docu = temp__5720__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((function (){var G__22898 = cljs.core.deref(data_atom);
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__22898) : project.call(null,G__22898));
})()):null);
var card__$1 = ((((typeof main === 'string') || ((main == null))))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var main__$1 = (function (){var G__22899 = "div";
var G__22900 = ({"key": "devcards-main-section"});
var G__22901 = sablono.interpreter.interpret(main);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22899,G__22900,G__22901) : sablono.core.create_element.call(null,G__22899,G__22900,G__22901));
})();
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(new cljs.core.List(null,document,(new cljs.core.List(null,main__$1,(new cljs.core.List(null,hist_ctl,(new cljs.core.List(null,edn,null,(1),null)),(2),null)),(3),null)),(4),null)));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__22902 = "div";
var G__22903 = ({"className": "com-rigsomelight-devcards-frameless"});
var G__22904 = sablono.interpreter.interpret(children);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22902,G__22903,G__22904) : sablono.core.create_element.call(null,G__22902,G__22903,G__22904));
}
});
devcards.core.DevcardBase = (function (){var ctor__16154__auto__ = (function (props__16149__auto__){
var this__16150__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16150__auto__,props__16149__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_), "state_change_count": (0)}));
}).call(this__16150__auto__,props__16149__auto__);

return this__16150__auto__;
});
goog.inherits(ctor__16154__auto__,devcards.util.utils.react_holder.Component);

var x22905_22906 = ctor__16154__auto__.prototype;
(x22905_22906.componentDidUpdate = (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?cljs.core.deref(initial_data):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atom),data)){
return cljs.core.reset_BANG_(atom,data);
} else {
return null;
}
} else {
return null;
}
}));

(x22905_22906.componentWillMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
return this$.setState((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__4115__auto__)){
return this$.state;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
} else {
return null;
}
}));

(x22905_22906.componentWillUnmount = (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__4115__auto__ = data_atom;
if(cljs.core.truth_(and__4115__auto__)){
return id;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}));

(x22905_22906.componentDidMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
var temp__5720__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__5720__auto__)){
var data_atom = temp__5720__auto__;
var temp__5720__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(x22905_22906.render = (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var change_count = devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count);
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
}));


return ctor__16154__auto__;
})();

(devcards.core.DevcardBase.displayName = cljs.core.name(cljs.core.cst$sym$DevcardBase));
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__5720__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__5720__auto__)){
var node_fn = temp__5720__auto__;
var temp__5720__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__5720__auto____$1)){
var node = temp__5720__auto____$1;
var G__22907 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__22908 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__22907,G__22908) : node_fn.call(null,G__22907,G__22908));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
devcards.core.DomComponent = (function (){var ctor__16154__auto__ = (function (props__16149__auto__){
var this__16150__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16150__auto__,props__16149__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))}));
}).call(this__16150__auto__,props__16149__auto__);

return this__16150__auto__;
});
goog.inherits(ctor__16154__auto__,devcards.util.utils.react_holder.Component);

var x22909_22913 = ctor__16154__auto__.prototype;
(x22909_22913.componentDidUpdate = (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),goog.object.get(prevP,"node_fn"));
} else {
return and__4115__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}));

(x22909_22913.componentWillUnmount = (function (){
var this$ = this;
var temp__5720__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return devcards.core.global$module$react_dom.unmountComponentAtNode(node);
} else {
return null;
}
}));

(x22909_22913.componentDidMount = (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}));

(x22909_22913.render = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
var G__22910 = "div";
var G__22911 = ({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)});
var G__22912 = "Card has not mounted DOM node.";
return devcards.core.global$module$react.createElement(G__22910,G__22911,G__22912);
} else {
return devcards.core.global$module$react.createElement("div",null,"Card has not mounted DOM node.");
}
}));


return ctor__16154__auto__;
})();

(devcards.core.DomComponent.displayName = cljs.core.name(cljs.core.cst$sym$DomComponent));
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4126__auto__ = x === true;
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = x === false;
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (x == null);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4126__auto__ = typeof x === 'string';
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (x == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4126__auto__ = goog.object.get(main_obj,"_isReactElement");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,goog.object.get(main_obj,"$$typeof"));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22914_SHARP_){
return (!(p1__22914_SHARP_ === true));
}),(function (){var map__22916 = opts;
var map__22916__$1 = (((((!((map__22916 == null))))?(((((map__22916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22916):map__22916);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22916__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = cljs.core.map_QMARK_(options);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (options == null);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__4126__auto__ = (initial_data == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = (((!((initial_data == null))))?(((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$))))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__4126__auto____$3){
return or__4126__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22915_SHARP_){
return devcards.core.booler_QMARK_(p1__22915_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__22923 = "div";
var G__22924 = ({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})});
var G__22925 = sablono.interpreter.interpret((function (){var G__22928 = "code";
var G__22929 = ({"style": ({"flex": "1 100px", "marginRight": "10px"})});
var G__22930 = (cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0))):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22928,G__22929,G__22930) : sablono.core.create_element.call(null,G__22928,G__22929,G__22930));
})());
var G__22926 = (function (){var G__22931 = "span";
var G__22932 = ({"style": ({"flex": "3 100px", "marginRight": "10px"})});
var G__22933 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22931,G__22932,G__22933) : sablono.core.create_element.call(null,G__22931,G__22932,G__22933));
})();
var G__22927 = (function (){var G__22935 = "span";
var G__22936 = ({"style": ({"flex": "1 100px"})});
var G__22937 = " Received: ";
var G__22938 = (function (){var attrs22934 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"code",((cljs.core.map_QMARK_(attrs22934))?sablono.interpreter.attributes(attrs22934):null),((cljs.core.map_QMARK_(attrs22934))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22934)], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22935,G__22936,G__22937,G__22938) : sablono.core.create_element.call(null,G__22935,G__22936,G__22937,G__22938));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__22923,G__22924,G__22925,G__22926,G__22927) : sablono.core.create_element.call(null,G__22923,G__22924,G__22925,G__22926,G__22927));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__22940 = "div";
var G__22941 = ({"className": "com-rigsomelight-devcards-card-base-no-pad"});
var G__22942 = (function (){var attrs22939 = [((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),": "].join(''):null),"Devcard received bad options"].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22939))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs22939], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs22939))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22939)], null)));
})();
var G__22943 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__22945 = "div";
var G__22946 = null;
var G__22947 = (function (){var attrs22944 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22944))?sablono.interpreter.attributes(attrs22944):null),((cljs.core.map_QMARK_(attrs22944))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22944)], null)));
})();
var G__22948 = ((cljs.core.map_QMARK_(opts))?sablono.interpreter.interpret((function (){var attrs22949 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22949))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs22949], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs22949))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22949)], null)));
})()):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22945,G__22946,G__22947,G__22948) : sablono.core.create_element.call(null,G__22945,G__22946,G__22947,G__22948));
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22940,G__22941,G__22942,G__22943) : sablono.core.create_element.call(null,G__22940,G__22941,G__22942,G__22943));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__22950_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state)),p1__22950_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__22951 = devcards.core.DevcardBase;
var G__22952 = ({"card": devcards.core.add_environment_defaults(card_options)});
return devcards.core.global$module$react.createElement(G__22951,G__22952);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentityOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22954,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22958 = k22954;
var G__22958__$1 = (((G__22958 instanceof cljs.core.Keyword))?G__22958.fqn:null);
switch (G__22958__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22954,else__4383__auto__);

}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__22959){
var vec__22960 = p__22959;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22960,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22960,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.IdentityOptions{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22953){
var self__ = this;
var G__22953__$1 = this;
return (new cljs.core.RecordIter((0),G__22953__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__22963 = (function (coll__4377__auto__){
return (-550579441 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__22963(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22955,other22956){
var self__ = this;
var this22955__$1 = this;
return (((!((other22956 == null)))) && ((this22955__$1.constructor === other22956.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22955__$1.obj,other22956.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22955__$1.__extmap,other22956.__extmap)));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22953){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22964 = cljs.core.keyword_identical_QMARK_;
var expr__22965 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__22967 = cljs.core.cst$kw$obj;
var G__22968 = expr__22965;
return (pred__22964.cljs$core$IFn$_invoke$arity$2 ? pred__22964.cljs$core$IFn$_invoke$arity$2(G__22967,G__22968) : pred__22964.call(null,G__22967,G__22968));
})())){
return (new devcards.core.IdentityOptions(G__22953,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__22953),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$obj,self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22953){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,G__22953,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.IdentityOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
}));

(devcards.core.IdentityOptions.cljs$lang$type = true);

(devcards.core.IdentityOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/IdentityOptions",null,(1),null));
}));

(devcards.core.IdentityOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"devcards.core/IdentityOptions");
}));

/**
 * Positional factory function for devcards.core/IdentityOptions.
 */
devcards.core.__GT_IdentityOptions = (function devcards$core$__GT_IdentityOptions(obj){
return (new devcards.core.IdentityOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/IdentityOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_IdentityOptions = (function devcards$core$map__GT_IdentityOptions(G__22957){
var extmap__4419__auto__ = (function (){var G__22969 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22957,cljs.core.cst$kw$obj);
if(cljs.core.record_QMARK_(G__22957)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22969);
} else {
return G__22969;
}
})();
return (new devcards.core.IdentityOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__22957),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__22971){
var map__22972 = p__22971;
var map__22972__$1 = (((((!((map__22972 == null))))?(((((map__22972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22972):map__22972);
var devcard_opts = map__22972__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22972__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,(function (data_atom,_){
return devcards.util.edn_renderer.html_edn(cljs.core.deref(data_atom));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22975,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22979 = k22975;
var G__22979__$1 = (((G__22979 instanceof cljs.core.Keyword))?G__22979.fqn:null);
switch (G__22979__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22975,else__4383__auto__);

}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__22980){
var vec__22981 = p__22980;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22981,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22981,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22974){
var self__ = this;
var G__22974__$1 = this;
return (new cljs.core.RecordIter((0),G__22974__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__22984 = (function (coll__4377__auto__){
return (-1574099704 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__22984(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22976,other22977){
var self__ = this;
var this22976__$1 = this;
return (((!((other22977 == null)))) && ((this22976__$1.constructor === other22977.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22976__$1.obj,other22977.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22976__$1.__extmap,other22977.__extmap)));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22974){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__22985 = cljs.core.keyword_identical_QMARK_;
var expr__22986 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__22988 = cljs.core.cst$kw$obj;
var G__22989 = expr__22986;
return (pred__22985.cljs$core$IFn$_invoke$arity$2 ? pred__22985.cljs$core$IFn$_invoke$arity$2(G__22988,G__22989) : pred__22985.call(null,G__22988,G__22989));
})())){
return (new devcards.core.AtomLikeOptions(G__22974,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__22974),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$obj,self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22974){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__22974,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
}));

(devcards.core.AtomLikeOptions.cljs$lang$type = true);

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/AtomLikeOptions",null,(1),null));
}));

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"devcards.core/AtomLikeOptions");
}));

/**
 * Positional factory function for devcards.core/AtomLikeOptions.
 */
devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/AtomLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__22978){
var extmap__4419__auto__ = (function (){var G__22990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22978,cljs.core.cst$kw$obj);
if(cljs.core.record_QMARK_(G__22978)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22990);
} else {
return G__22990;
}
})();
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__22978),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn((((((!((main_obj == null))))?(((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?cljs.core.deref(main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k22994,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__22998 = k22994;
var G__22998__$1 = (((G__22998 instanceof cljs.core.Keyword))?G__22998.fqn:null);
switch (G__22998__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22994,else__4383__auto__);

}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__22999){
var vec__23000 = p__22999;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23000,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23000,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22993){
var self__ = this;
var G__22993__$1 = this;
return (new cljs.core.RecordIter((0),G__22993__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__23003 = (function (coll__4377__auto__){
return (1012705544 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__23003(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22995,other22996){
var self__ = this;
var this22995__$1 = this;
return (((!((other22996 == null)))) && ((this22995__$1.constructor === other22996.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22995__$1.obj,other22996.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22995__$1.__extmap,other22996.__extmap)));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__22993){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23004 = cljs.core.keyword_identical_QMARK_;
var expr__23005 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__23007 = cljs.core.cst$kw$obj;
var G__23008 = expr__23005;
return (pred__23004.cljs$core$IFn$_invoke$arity$2 ? pred__23004.cljs$core$IFn$_invoke$arity$2(G__23007,G__23008) : pred__23004.call(null,G__23007,G__23008));
})())){
return (new devcards.core.EdnLikeOptions(G__22993,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__22993),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$obj,self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__22993){
var self__ = this;
var this__4379__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__22993,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
}));

(devcards.core.EdnLikeOptions.cljs$lang$type = true);

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"devcards.core/EdnLikeOptions",null,(1),null));
}));

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"devcards.core/EdnLikeOptions");
}));

/**
 * Positional factory function for devcards.core/EdnLikeOptions.
 */
devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/EdnLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__22997){
var extmap__4419__auto__ = (function (){var G__23009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22997,cljs.core.cst$kw$obj);
if(cljs.core.record_QMARK_(G__22997)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23009);
} else {
return G__23009;
}
})();
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__22997),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x))){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return false;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if((((!((main_obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(devcards.core.atom_like_QMARK_(main_obj)){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(devcards.core.edn_like_QMARK_(main_obj)){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentityOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__23017 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if((!((G__23017 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__23017.devcards$core$IDevcard$)))){
return true;
} else {
if((!G__23017.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__23017);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__23017);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__23018 = devcards.core.DomComponent;
var G__23019 = ({"node_fn": node_fn, "data_atom": data_atom});
return devcards.core.global$module$react.createElement(G__23018,G__23019);
});
});
goog.object.set(devcards.core.IDevcardOptions,"string",true);

goog.object.set(devcards.core._devcard_options,"string",(function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
}));
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__23020 = cljs.core.deref(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom));
var map__23020__$1 = (((((!((map__23020 == null))))?(((((map__23020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23020):map__23020);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23020__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23020__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return (!((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom))) === (0))));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__23022 = cljs.core.deref(history_atom);
var map__23022__$1 = (((((!((map__23022 == null))))?(((((map__23022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23022):map__23022);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23022__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23022__$1,cljs.core.cst$kw$pointer);
if(devcards.core.can_go_back(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_click,true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,cljs.core.cst$kw$data_atom),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__23024 = cljs.core.deref(history_atom);
var map__23024__$1 = (((((!((map__23024 == null))))?(((((map__23024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23024):map__23024);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.cst$kw$pointer);
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_click,true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,cljs.core.cst$kw$data_atom),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__23026 = cljs.core.deref(history_atom);
var map__23026__$1 = (((((!((map__23026 == null))))?(((((map__23026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23026):map__23026);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23026__$1,cljs.core.cst$kw$history);
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_click,true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,cljs.core.cst$kw$data_atom),cljs.core.first(history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var ctor__16154__auto__ = (function (props__16149__auto__){
var this__16150__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16150__auto__,props__16149__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_)), "history_atom": cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null))}));
}).call(this__16150__auto__,props__16149__auto__);

return this__16150__auto__;
});
goog.inherits(ctor__16154__auto__,devcards.util.utils.react_holder.Component);

var x23028_23079 = ctor__16154__auto__.prototype;
(x23028_23079.componentWillMount = (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),(new cljs.core.List(null,cljs.core.deref(devcards.core.get_props(this$,cljs.core.cst$kw$data_atom)),null,(1),null)));
}));

(x23028_23079.componentDidMount = (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__4115__auto__ = data_atom;
if(cljs.core.truth_(and__4115__auto__)){
return id;
} else {
return and__4115__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,n){
if(devcards.core.in_time_machine_QMARK_(this$)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,(function (p__23029){
var map__23030 = p__23029;
var map__23030__$1 = (((((!((map__23030 == null))))?(((((map__23030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23030):map__23030);
var ha = map__23030__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23030__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23030__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23030__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pointer,(0)], 0));
}
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(history_atom));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
}));
} else {
return null;
}
}));

(x23028_23079.render = (function (){
var this$ = this;
if(((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$)))){
var G__23032 = "div";
var G__23033 = ({"style": ({"display": ((((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$))))?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"});
var G__23034 = (function (){var action = (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__23040 = "button";
var G__23041 = ({"style": ({"visibility": ((devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action});
var G__23042 = (function (){var G__23043 = "span";
var G__23044 = ({"className": "com-rigsomelight-devcards-history-control-left"});
var G__23045 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23043,G__23044,G__23045) : sablono.core.create_element.call(null,G__23043,G__23044,G__23045));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23040,G__23041,G__23042) : sablono.core.create_element.call(null,G__23040,G__23041,G__23042));
})());
})();
var G__23035 = (function (){var action = (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return cljs.core.reset_BANG_(data_atom,cljs.core.deref(data_atom));
});
return sablono.interpreter.interpret((function (){var G__23048 = "button";
var G__23049 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__23050 = (function (){var G__23051 = "span";
var G__23052 = ({"className": "com-rigsomelight-devcards-history-stop"});
var G__23053 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23051,G__23052,G__23053) : sablono.core.create_element.call(null,G__23051,G__23052,G__23053));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23048,G__23049,G__23050) : sablono.core.create_element.call(null,G__23048,G__23049,G__23050));
})());
})();
var G__23036 = (function (){var action = (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__23056 = "button";
var G__23057 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action});
var G__23058 = (function (){var G__23059 = "span";
var G__23060 = ({"className": "com-rigsomelight-devcards-history-control-right"});
var G__23061 = "";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23059,G__23060,G__23061) : sablono.core.create_element.call(null,G__23059,G__23060,G__23061));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23056,G__23057,G__23058) : sablono.core.create_element.call(null,G__23056,G__23057,G__23058));
})());
})();
var G__23037 = (function (){var listener = (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});
return sablono.interpreter.interpret((function (){var G__23068 = "button";
var G__23069 = ({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener});
var G__23070 = (function (){var G__23073 = "span";
var G__23074 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__23073,G__23074) : sablono.core.create_element.call(null,G__23073,G__23074));
})();
var G__23071 = (function (){var G__23075 = "span";
var G__23076 = ({"className": "com-rigsomelight-devcards-history-control-small-arrow"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__23075,G__23076) : sablono.core.create_element.call(null,G__23075,G__23076));
})();
var G__23072 = (function (){var G__23077 = "span";
var G__23078 = ({"className": "com-rigsomelight-devcards-history-control-block"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__23077,G__23078) : sablono.core.create_element.call(null,G__23077,G__23078));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__23068,G__23069,G__23070,G__23071,G__23072) : sablono.core.create_element.call(null,G__23068,G__23069,G__23070,G__23071,G__23072));
})());
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__23032,G__23033,G__23034,G__23035,G__23036,G__23037) : sablono.core.create_element.call(null,G__23032,G__23033,G__23034,G__23035,G__23036,G__23037));
} else {
return null;
}
}));


return ctor__16154__auto__;
})();

(devcards.core.HistoryComponent.displayName = cljs.core.name(cljs.core.cst$sym$HistoryComponent));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__23080 = devcards.core.HistoryComponent;
var G__23081 = ({"data_atom": data_atom, "key": "devcards-history-control-bar"});
return devcards.core.global$module$react.createElement(G__23080,G__23081);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR__orig_val__23082 = cljs.test._STAR_current_env_STAR_;
var _STAR_current_env_STAR__temp_val__23083 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__temp_val__23083);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__orig_val__23082);
}});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_render !== 'undefined')){
} else {
devcards.core.test_render = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__23084 = cljs.core.get_global_hierarchy;
return (fexpr__23084.cljs$core$IFn$_invoke$arity$0 ? fexpr__23084.cljs$core$IFn$_invoke$arity$0() : fexpr__23084.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs23085 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs23085))?sablono.interpreter.attributes(attrs23085):null),((cljs.core.map_QMARK_(attrs23085))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23085)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__23086,body){
var map__23087 = p__23086;
var map__23087__$1 = (((((!((map__23087 == null))))?(((((map__23087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23087):map__23087);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23087__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__23090 = "div";
var G__23091 = null;
var G__23092 = (function (){var attrs23089 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"span",((cljs.core.map_QMARK_(attrs23089))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs23089], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs23089))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23089)], null)));
})();
var G__23093 = sablono.interpreter.interpret(body);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__23090,G__23091,G__23092,G__23093) : sablono.core.create_element.call(null,G__23090,G__23091,G__23092,G__23093));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__23094){
var map__23095 = p__23094;
var map__23095__$1 = (((((!((map__23095 == null))))?(((((map__23095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23095):map__23095);
var m = map__23095__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23095__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23095__$1,cljs.core.cst$kw$actual);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23095__$1,cljs.core.cst$kw$type);
return devcards.core.display_message(m,(function (){var attrs23097 = (function (){var G__23098 = devcards.core.CodeHighlight;
var G__23099 = ({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"});
return devcards.core.global$module$react.createElement(G__23098,G__23099);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs23097))?sablono.interpreter.attributes(attrs23097):null),((cljs.core.map_QMARK_(attrs23097))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?sablono.interpreter.interpret((function (){var G__23102 = "div";
var G__23103 = ({"style": ({"marginTop": "5px"})});
var G__23104 = (function (){var G__23106 = "div";
var G__23107 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__23108 = "\u25B6";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23106,G__23107,G__23108) : sablono.core.create_element.call(null,G__23106,G__23107,G__23108));
})();
var G__23105 = (function (){var G__23109 = "div";
var G__23110 = ({"style": ({"marginLeft": "20px"})});
var G__23111 = sablono.interpreter.interpret((function (){var G__23112 = devcards.core.CodeHighlight;
var G__23113 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return devcards.core.global$module$react.createElement(G__23112,G__23113);
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23109,G__23110,G__23111) : sablono.core.create_element.call(null,G__23109,G__23110,G__23111));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__23102,G__23103,G__23104,G__23105) : sablono.core.create_element.call(null,G__23102,G__23103,G__23104,G__23105));
})()):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23097),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$fail))?sablono.interpreter.interpret((function (){var G__23116 = "div";
var G__23117 = ({"style": ({"marginTop": "5px"})});
var G__23118 = (function (){var G__23120 = "div";
var G__23121 = ({"style": ({"position": "absolute", "fontSize": "0.9em"})});
var G__23122 = "\u25B6";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23120,G__23121,G__23122) : sablono.core.create_element.call(null,G__23120,G__23121,G__23122));
})();
var G__23119 = (function (){var G__23123 = "div";
var G__23124 = ({"style": ({"marginLeft": "20px"})});
var G__23125 = sablono.interpreter.interpret((function (){var G__23126 = devcards.core.CodeHighlight;
var G__23127 = ({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"});
return devcards.core.global$module$react.createElement(G__23126,G__23127);
})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23123,G__23124,G__23125) : sablono.core.create_element.call(null,G__23123,G__23124,G__23125));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__23116,G__23117,G__23118,G__23119) : sablono.core.create_element.call(null,G__23116,G__23117,G__23118,G__23119));
})()):null)], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__23131 = "div";
var G__23132 = null;
var G__23133 = (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3("strong",null,"Error: ") : sablono.core.create_element.call(null,"strong",null,"Error: "));
var G__23134 = (function (){var attrs23130 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"code",((cljs.core.map_QMARK_(attrs23130))?sablono.interpreter.attributes(attrs23130):null),((cljs.core.map_QMARK_(attrs23130))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23130)], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__23131,G__23132,G__23133,G__23134) : sablono.core.create_element.call(null,G__23131,G__23132,G__23133,G__23134));
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs23135 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs23135))?sablono.interpreter.attributes(attrs23135):null),((cljs.core.map_QMARK_(attrs23135))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23135)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__23136){
var map__23137 = p__23136;
var map__23137__$1 = (((((!((map__23137 == null))))?(((((map__23137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23137):map__23137);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs23139 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
}),cljs.core.reverse(cljs.core.rest(testing_contexts))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(-1)], null),cljs.core.first(testing_contexts)], null),null,(1),null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs23139))?sablono.interpreter.attributes(attrs23139):null),((cljs.core.map_QMARK_(attrs23139))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23139)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__23140 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__23140) : cljs.test.report.call(null,G__23140));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,i], 0)),cljs.core.cst$kw$className,["com-rigsomelight-devcards-test-line com-rigsomelight-devcards-",cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs23141 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__23142,p__23143){
var map__23144 = p__23142;
var map__23144__$1 = (((((!((map__23144 == null))))?(((((map__23144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23144):map__23144);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23144__$1,cljs.core.cst$kw$html_DASH_list);
var vec__23145 = p__23143;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23145,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23145,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = (new cljs.core.List(null,devcards.core.test_renderer(t,i),null,(1),null));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs23141))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs23141], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs23141))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23141)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23150){
var map__23151 = p__23150;
var map__23151__$1 = (((((!((map__23151 == null))))?(((((map__23151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23151):map__23151);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23151__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
}),cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__23149 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__23149__$1 = (((((!((map__23149 == null))))?(((((map__23149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23149):map__23149);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23149__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23149__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23149__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__23154 = "div";
var G__23155 = ({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"});
var G__23156 = (function (){var G__23158 = "div";
var G__23159 = ({"className": "com-rigsomelight-devcards-panel-heading"});
var G__23160 = (function (){var G__23164 = "a";
var G__23165 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))});
var G__23166 = (cljs.core.truth_(path)?sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path))):null);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23164,G__23165,G__23166) : sablono.core.create_element.call(null,G__23164,G__23165,G__23166));
})();
var G__23161 = (function (){var G__23167 = "button";
var G__23168 = ({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": cljs.core.identity}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__23169 = sablono.interpreter.interpret(total_tests);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23167,G__23168,G__23169) : sablono.core.create_element.call(null,G__23167,G__23168,G__23169));
})();
var G__23162 = ((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret((function (){var G__23170 = "button";
var G__23171 = ({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__23173){
var map__23174 = p__23173;
var map__23174__$1 = (((((!((map__23174 == null))))?(((((map__23174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23174):map__23174);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23174__$1,cljs.core.cst$kw$type);
var fexpr__23176 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__23176.cljs$core$IFn$_invoke$arity$1 ? fexpr__23176.cljs$core$IFn$_invoke$arity$1(type) : fexpr__23176.call(null,type));
})}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__23172 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23170,G__23171,G__23172) : sablono.core.create_element.call(null,G__23170,G__23171,G__23172));
})()));
var G__23163 = (((((pass == null)) || ((pass === (0)))))?null:sablono.interpreter.interpret((function (){var G__23177 = "button";
var G__23178 = ({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__23180){
var map__23181 = p__23180;
var map__23181__$1 = (((((!((map__23181 == null))))?(((((map__23181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23181):map__23181);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23181__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
})}));
})), "className": "com-rigsomelight-devcards-badge"});
var G__23179 = sablono.interpreter.interpret(pass);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23177,G__23178,G__23179) : sablono.core.create_element.call(null,G__23177,G__23178,G__23179));
})()));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$6 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$6(G__23158,G__23159,G__23160,G__23161,G__23162,G__23163) : sablono.core.create_element.call(null,G__23158,G__23159,G__23160,G__23161,G__23162,G__23163));
})();
var G__23157 = (function (){var G__23183 = "div";
var G__23184 = ({"className": devcards.system.devcards_rendered_card_class});
var G__23185 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__23183,G__23184,G__23185) : sablono.core.create_element.call(null,G__23183,G__23184,G__23185));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__23154,G__23155,G__23156,G__23157) : sablono.core.create_element.call(null,G__23154,G__23155,G__23156,G__23157));
});
devcards.core.test_timeout = (800);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_channel !== 'undefined')){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
})], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_loop !== 'undefined')){
} else {
devcards.core.test_loop = (function (){var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_23276){
var state_val_23277 = (state_23276[(1)]);
if((state_val_23277 === (7))){
var state_23276__$1 = state_23276;
var statearr_23278_23324 = state_23276__$1;
(statearr_23278_23324[(2)] = false);

(statearr_23278_23324[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (20))){
var inst_23214 = (state_23276[(7)]);
var inst_23234 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23214);
var state_23276__$1 = state_23276;
var statearr_23279_23325 = state_23276__$1;
(statearr_23279_23325[(2)] = inst_23234);

(statearr_23279_23325[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (27))){
var inst_23239 = (state_23276[(8)]);
var inst_23251 = (state_23276[(9)]);
var inst_23255 = (inst_23239.cljs$core$IFn$_invoke$arity$1 ? inst_23239.cljs$core$IFn$_invoke$arity$1(inst_23251) : inst_23239.call(null,inst_23251));
var state_23276__$1 = state_23276;
var statearr_23280_23326 = state_23276__$1;
(statearr_23280_23326[(2)] = inst_23255);

(statearr_23280_23326[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (1))){
var state_23276__$1 = state_23276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23276__$1,(2),devcards.core.test_channel);
} else {
if((state_val_23277 === (24))){
var state_23276__$1 = state_23276;
var statearr_23281_23327 = state_23276__$1;
(statearr_23281_23327[(2)] = null);

(statearr_23281_23327[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (4))){
var state_23276__$1 = state_23276;
var statearr_23282_23328 = state_23276__$1;
(statearr_23282_23328[(2)] = false);

(statearr_23282_23328[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (15))){
var state_23276__$1 = state_23276;
var statearr_23283_23329 = state_23276__$1;
(statearr_23283_23329[(2)] = false);

(statearr_23283_23329[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (21))){
var inst_23214 = (state_23276[(7)]);
var state_23276__$1 = state_23276;
var statearr_23284_23330 = state_23276__$1;
(statearr_23284_23330[(2)] = inst_23214);

(statearr_23284_23330[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (13))){
var inst_23274 = (state_23276[(2)]);
var state_23276__$1 = state_23276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23276__$1,inst_23274);
} else {
if((state_val_23277 === (22))){
var inst_23238 = (state_23276[(10)]);
var inst_23237 = (state_23276[(2)]);
var inst_23238__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23237,cljs.core.cst$kw$tests);
var inst_23239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23237,cljs.core.cst$kw$callback);
var state_23276__$1 = (function (){var statearr_23285 = state_23276;
(statearr_23285[(10)] = inst_23238__$1);

(statearr_23285[(8)] = inst_23239);

return statearr_23285;
})();
if(cljs.core.truth_(inst_23238__$1)){
var statearr_23286_23331 = state_23276__$1;
(statearr_23286_23331[(1)] = (23));

} else {
var statearr_23287_23332 = state_23276__$1;
(statearr_23287_23332[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (29))){
var inst_23265 = (state_23276[(2)]);
var inst_23266 = cljs.test.clear_env_BANG_();
var state_23276__$1 = (function (){var statearr_23288 = state_23276;
(statearr_23288[(11)] = inst_23266);

(statearr_23288[(12)] = inst_23265);

return statearr_23288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23276__$1,(30),devcards.core.test_channel);
} else {
if((state_val_23277 === (6))){
var state_23276__$1 = state_23276;
var statearr_23289_23333 = state_23276__$1;
(statearr_23289_23333[(2)] = true);

(statearr_23289_23333[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (28))){
var inst_23239 = (state_23276[(8)]);
var inst_23257 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_23258 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_23259 = cljs.core.PersistentHashMap.fromArrays(inst_23257,inst_23258);
var inst_23260 = devcards.core.collect_test(inst_23259);
var inst_23261 = cljs.test.get_current_env();
var inst_23262 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_23261,cljs.core.cst$kw$error,"Execution timed out!");
var inst_23263 = (inst_23239.cljs$core$IFn$_invoke$arity$1 ? inst_23239.cljs$core$IFn$_invoke$arity$1(inst_23262) : inst_23239.call(null,inst_23262));
var state_23276__$1 = (function (){var statearr_23290 = state_23276;
(statearr_23290[(13)] = inst_23260);

return statearr_23290;
})();
var statearr_23291_23334 = state_23276__$1;
(statearr_23291_23334[(2)] = inst_23263);

(statearr_23291_23334[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (25))){
var inst_23272 = (state_23276[(2)]);
var state_23276__$1 = state_23276;
var statearr_23292_23335 = state_23276__$1;
(statearr_23292_23335[(2)] = inst_23272);

(statearr_23292_23335[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (17))){
var state_23276__$1 = state_23276;
var statearr_23293_23336 = state_23276__$1;
(statearr_23293_23336[(2)] = true);

(statearr_23293_23336[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (3))){
var inst_23190 = (state_23276[(14)]);
var inst_23195 = inst_23190.cljs$lang$protocol_mask$partition0$;
var inst_23196 = (inst_23195 & (64));
var inst_23197 = inst_23190.cljs$core$ISeq$;
var inst_23198 = (cljs.core.PROTOCOL_SENTINEL === inst_23197);
var inst_23199 = ((inst_23196) || (inst_23198));
var state_23276__$1 = state_23276;
if(cljs.core.truth_(inst_23199)){
var statearr_23294_23337 = state_23276__$1;
(statearr_23294_23337[(1)] = (6));

} else {
var statearr_23295_23338 = state_23276__$1;
(statearr_23295_23338[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (12))){
var inst_23214 = (state_23276[(7)]);
var inst_23218 = (inst_23214 == null);
var inst_23219 = cljs.core.not(inst_23218);
var state_23276__$1 = state_23276;
if(inst_23219){
var statearr_23296_23339 = state_23276__$1;
(statearr_23296_23339[(1)] = (14));

} else {
var statearr_23297_23340 = state_23276__$1;
(statearr_23297_23340[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (2))){
var inst_23190 = (state_23276[(14)]);
var inst_23190__$1 = (state_23276[(2)]);
var inst_23192 = (inst_23190__$1 == null);
var inst_23193 = cljs.core.not(inst_23192);
var state_23276__$1 = (function (){var statearr_23298 = state_23276;
(statearr_23298[(14)] = inst_23190__$1);

return statearr_23298;
})();
if(inst_23193){
var statearr_23299_23341 = state_23276__$1;
(statearr_23299_23341[(1)] = (3));

} else {
var statearr_23300_23342 = state_23276__$1;
(statearr_23300_23342[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (23))){
var inst_23238 = (state_23276[(10)]);
var inst_23244 = (state_23276[(15)]);
var inst_23244__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_23245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23246 = devcards.core.run_card_tests(inst_23238);
var inst_23247 = [inst_23246,inst_23244__$1];
var inst_23248 = (new cljs.core.PersistentVector(null,2,(5),inst_23245,inst_23247,null));
var state_23276__$1 = (function (){var statearr_23301 = state_23276;
(statearr_23301[(15)] = inst_23244__$1);

return statearr_23301;
})();
return cljs.core.async.ioc_alts_BANG_(state_23276__$1,(26),inst_23248);
} else {
if((state_val_23277 === (19))){
var inst_23229 = (state_23276[(2)]);
var state_23276__$1 = state_23276;
var statearr_23302_23343 = state_23276__$1;
(statearr_23302_23343[(2)] = inst_23229);

(statearr_23302_23343[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (11))){
var inst_23190 = (state_23276[(14)]);
var inst_23211 = (state_23276[(2)]);
var inst_23212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23211,cljs.core.cst$kw$tests);
var inst_23213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23211,cljs.core.cst$kw$callback);
var inst_23214 = inst_23190;
var state_23276__$1 = (function (){var statearr_23303 = state_23276;
(statearr_23303[(16)] = inst_23212);

(statearr_23303[(17)] = inst_23213);

(statearr_23303[(7)] = inst_23214);

return statearr_23303;
})();
var statearr_23304_23344 = state_23276__$1;
(statearr_23304_23344[(2)] = null);

(statearr_23304_23344[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (9))){
var inst_23190 = (state_23276[(14)]);
var inst_23208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23190);
var state_23276__$1 = state_23276;
var statearr_23305_23345 = state_23276__$1;
(statearr_23305_23345[(2)] = inst_23208);

(statearr_23305_23345[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (5))){
var inst_23206 = (state_23276[(2)]);
var state_23276__$1 = state_23276;
if(cljs.core.truth_(inst_23206)){
var statearr_23306_23346 = state_23276__$1;
(statearr_23306_23346[(1)] = (9));

} else {
var statearr_23307_23347 = state_23276__$1;
(statearr_23307_23347[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (14))){
var inst_23214 = (state_23276[(7)]);
var inst_23221 = inst_23214.cljs$lang$protocol_mask$partition0$;
var inst_23222 = (inst_23221 & (64));
var inst_23223 = inst_23214.cljs$core$ISeq$;
var inst_23224 = (cljs.core.PROTOCOL_SENTINEL === inst_23223);
var inst_23225 = ((inst_23222) || (inst_23224));
var state_23276__$1 = state_23276;
if(cljs.core.truth_(inst_23225)){
var statearr_23308_23348 = state_23276__$1;
(statearr_23308_23348[(1)] = (17));

} else {
var statearr_23309_23349 = state_23276__$1;
(statearr_23309_23349[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (26))){
var inst_23244 = (state_23276[(15)]);
var inst_23250 = (state_23276[(2)]);
var inst_23251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23250,(0),null);
var inst_23252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23250,(1),null);
var inst_23253 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_23252,inst_23244);
var state_23276__$1 = (function (){var statearr_23310 = state_23276;
(statearr_23310[(9)] = inst_23251);

return statearr_23310;
})();
if(inst_23253){
var statearr_23311_23350 = state_23276__$1;
(statearr_23311_23350[(1)] = (27));

} else {
var statearr_23312_23351 = state_23276__$1;
(statearr_23312_23351[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (16))){
var inst_23232 = (state_23276[(2)]);
var state_23276__$1 = state_23276;
if(cljs.core.truth_(inst_23232)){
var statearr_23313_23352 = state_23276__$1;
(statearr_23313_23352[(1)] = (20));

} else {
var statearr_23314_23353 = state_23276__$1;
(statearr_23314_23353[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (30))){
var inst_23268 = (state_23276[(2)]);
var inst_23214 = inst_23268;
var state_23276__$1 = (function (){var statearr_23315 = state_23276;
(statearr_23315[(7)] = inst_23214);

return statearr_23315;
})();
var statearr_23316_23354 = state_23276__$1;
(statearr_23316_23354[(2)] = null);

(statearr_23316_23354[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (10))){
var inst_23190 = (state_23276[(14)]);
var state_23276__$1 = state_23276;
var statearr_23317_23355 = state_23276__$1;
(statearr_23317_23355[(2)] = inst_23190);

(statearr_23317_23355[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (18))){
var state_23276__$1 = state_23276;
var statearr_23318_23356 = state_23276__$1;
(statearr_23318_23356[(2)] = false);

(statearr_23318_23356[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23277 === (8))){
var inst_23203 = (state_23276[(2)]);
var state_23276__$1 = state_23276;
var statearr_23319_23357 = state_23276__$1;
(statearr_23319_23357[(2)] = inst_23203);

(statearr_23319_23357[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$core$state_machine__17874__auto__ = null;
var devcards$core$state_machine__17874__auto____0 = (function (){
var statearr_23320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23320[(0)] = devcards$core$state_machine__17874__auto__);

(statearr_23320[(1)] = (1));

return statearr_23320;
});
var devcards$core$state_machine__17874__auto____1 = (function (state_23276){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_23276);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e23321){if((e23321 instanceof Object)){
var ex__17877__auto__ = e23321;
var statearr_23322_23358 = state_23276;
(statearr_23322_23358[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23276);

return cljs.core.cst$kw$recur;
} else {
throw e23321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__23359 = state_23276;
state_23276 = G__23359;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
devcards$core$state_machine__17874__auto__ = function(state_23276){
switch(arguments.length){
case 0:
return devcards$core$state_machine__17874__auto____0.call(this);
case 1:
return devcards$core$state_machine__17874__auto____1.call(this,state_23276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__17874__auto____0;
devcards$core$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__17874__auto____1;
return devcards$core$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_23323 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_23323[(6)] = c__17980__auto__);

return statearr_23323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
devcards.core.TestDevcard = (function (){var ctor__16154__auto__ = (function (props__16151__auto__){
var this__16152__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16152__auto__,props__16151__auto__);

return this__16152__auto__;
});
goog.inherits(ctor__16154__auto__,devcards.util.utils.react_holder.Component);

var x23360_23361 = ctor__16154__auto__.prototype;
(x23360_23361.componentWillMount = (function (){
var this$ = this;
var temp__5720__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__5720__auto__)){
var test_thunks = temp__5720__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x23360_23361.componentWillReceiveProps = (function (next_props){
var this$ = this;
var temp__5720__auto__ = goog.object.get(next_props,cljs.core.name(cljs.core.cst$kw$test_thunks));
if(cljs.core.truth_(temp__5720__auto__)){
var test_thunks = temp__5720__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x23360_23361.render = (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
}));


return ctor__16154__auto__;
})();

(devcards.core.TestDevcard.displayName = cljs.core.name(cljs.core.cst$sym$TestDevcard));
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23368 = arguments.length;
var i__4737__auto___23369 = (0);
while(true){
if((i__4737__auto___23369 < len__4736__auto___23368)){
args__4742__auto__.push((arguments[i__4737__auto___23369]));

var G__23370 = (i__4737__auto___23369 + (1));
i__4737__auto___23369 = G__23370;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.t_devcards$core23363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core23363 = (function (test_thunks,meta23364){
this.test_thunks = test_thunks;
this.meta23364 = meta23364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devcards.core.t_devcards$core23363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23365,meta23364__$1){
var self__ = this;
var _23365__$1 = this;
return (new devcards.core.t_devcards$core23363(self__.test_thunks,meta23364__$1));
}));

(devcards.core.t_devcards$core23363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23365){
var self__ = this;
var _23365__$1 = this;
return self__.meta23364;
}));

(devcards.core.t_devcards$core23363.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.t_devcards$core23363.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__23366 = devcards.core.TestDevcard;
var G__23367 = ({"test_thunks": self__.test_thunks, "path": path});
return devcards.core.global$module$react.createElement(G__23366,G__23367);
}));

(devcards.core.t_devcards$core23363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta23364], null);
}));

(devcards.core.t_devcards$core23363.cljs$lang$type = true);

(devcards.core.t_devcards$core23363.cljs$lang$ctorStr = "devcards.core/t_devcards$core23363");

(devcards.core.t_devcards$core23363.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"devcards.core/t_devcards$core23363");
}));

/**
 * Positional factory function for devcards.core/t_devcards$core23363.
 */
devcards.core.__GT_t_devcards$core23363 = (function devcards$core$__GT_t_devcards$core23363(test_thunks__$1,meta23364){
return (new devcards.core.t_devcards$core23363(test_thunks__$1,meta23364));
});

}

return (new devcards.core.t_devcards$core23363(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
}));

(devcards.core.test_card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.test_card.cljs$lang$applyTo = (function (seq23362){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23362));
}));

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23371_SHARP_,p2__23372_SHARP_){
return goog.object.get(p1__23371_SHARP_,p2__23372_SHARP_);
}),goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5720__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state));
if(cljs.core.truth_(temp__5720__auto__)){
var cards = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(ns_symbol))], null));
if(cljs.core.truth_(temp__5720__auto____$1)){
var card = temp__5720__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5720__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(cljs.core.munge(ns_symbol))));
if(cljs.core.truth_(temp__5720__auto__)){
var base_card_options = temp__5720__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,base_card_options], 0));
}));
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5720__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5720__auto__)){
var card = temp__5720__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return ["<div id=\"com-rigsomelight-devcards-main\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ReactDOMServer.renderToString((function (){var attrs23374 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs23374))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs23374], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs23374))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23374)], null)));
})())),"</div>"].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5720__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5720__auto__)){
var card = temp__5720__auto__;
var G__23375 = (function (){var attrs23377 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs23377))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs23377], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs23377))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs23377)], null)));
})();
var G__23376 = devcards.system.devcards_app_node();
return devcards.core.global$module$react_dom.render(G__23375,G__23376);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_23387){
var state_val_23388 = (state_23387[(1)]);
if((state_val_23388 === (1))){
var inst_23378 = devcards.core.load_data_from_channel_BANG_();
var state_23387__$1 = state_23387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23387__$1,(2),inst_23378);
} else {
if((state_val_23388 === (2))){
var inst_23380 = (state_23387[(2)]);
var inst_23381 = cljs.core.async.timeout((100));
var state_23387__$1 = (function (){var statearr_23389 = state_23387;
(statearr_23389[(7)] = inst_23380);

return statearr_23389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23387__$1,(3),inst_23381);
} else {
if((state_val_23388 === (3))){
var inst_23383 = (state_23387[(2)]);
var inst_23384 = (function (){return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
})();
var inst_23385 = setTimeout(inst_23384,(0));
var state_23387__$1 = (function (){var statearr_23390 = state_23387;
(statearr_23390[(8)] = inst_23383);

return statearr_23390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23387__$1,inst_23385);
} else {
return null;
}
}
}
});
return (function() {
var devcards$core$mount_namespace_$_state_machine__17874__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__17874__auto____0 = (function (){
var statearr_23391 = [null,null,null,null,null,null,null,null,null];
(statearr_23391[(0)] = devcards$core$mount_namespace_$_state_machine__17874__auto__);

(statearr_23391[(1)] = (1));

return statearr_23391;
});
var devcards$core$mount_namespace_$_state_machine__17874__auto____1 = (function (state_23387){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_23387);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e23392){if((e23392 instanceof Object)){
var ex__17877__auto__ = e23392;
var statearr_23393_23395 = state_23387;
(statearr_23393_23395[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23387);

return cljs.core.cst$kw$recur;
} else {
throw e23392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__23396 = state_23387;
state_23387 = G__23396;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__17874__auto__ = function(state_23387){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__17874__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__17874__auto____1.call(this,state_23387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__17874__auto____0;
devcards$core$mount_namespace_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__17874__auto____1;
return devcards$core$mount_namespace_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_23394 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_23394[(6)] = c__17980__auto__);

return statearr_23394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
