// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
devcards.util.markdown.global$module$devcards_marked = goog.global["DevcardsMarked"];
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__5720__auto__ = cljs.core.second(cljs.core.re_matches(/^([\s]*).*/,s));
if(cljs.core.truth_(temp__5720__auto__)){
var ws = temp__5720__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__4126__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.leading_space_count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(devcards.util.markdown.is_bullet_item_QMARK_(s)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,margin);
} else {
return clojure.string.trim(s);
}
});
devcards.util.markdown.markdown_to_html = (function devcards$util$markdown$markdown_to_html(markdown_txt){
return DevcardsMarked(markdown_txt);
});
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches(/^[\s]*```(\w*).*/,line);
});
if((typeof devcards !== 'undefined') && (typeof devcards.util !== 'undefined') && (typeof devcards.util.markdown !== 'undefined') && (typeof devcards.util.markdown.block_parser !== 'undefined')){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__22605 = cljs.core.get_global_hierarchy;
return (fexpr__22605.cljs$core$IFn$_invoke$arity$0 ? fexpr__22605.cljs$core$IFn$_invoke$arity$0() : fexpr__22605.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.util.markdown","block-parser"),(function (p__22606,line){
var map__22607 = p__22606;
var map__22607__$1 = (((((!((map__22607 == null))))?(((((map__22607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22607):map__22607);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22607__$1,cljs.core.cst$kw$stage);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_(line))?cljs.core.cst$kw$delim:cljs.core.cst$kw$line),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(stage)], null);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$markdown], null),(function (p__22609,line){
var map__22610 = p__22609;
var map__22610__$1 = (((((!((map__22610 == null))))?(((((map__22610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22610):map__22610);
var st = map__22610__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22610__$1,cljs.core.cst$kw$stage);
var left_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22610__$1,cljs.core.cst$kw$left_DASH_margin);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,devcards.util.markdown.strip_left_margin(line,left_margin));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$code_DASH_block], null),(function (p__22612,line){
var map__22613 = p__22612;
var map__22613__$1 = (((((!((map__22613 == null))))?(((((map__22613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22613):map__22613);
var st = map__22613__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22613__$1,cljs.core.cst$kw$stage);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stage,cljs.core.cst$kw$content], null),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,cljs.core.cst$kw$leading_DASH_spaces.cljs$core$IFn$_invoke$arity$1(stage)));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$markdown], null),(function (p__22615,line){
var map__22616 = p__22615;
var map__22616__$1 = (((((!((map__22616 == null))))?(((((map__22616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22616):map__22616);
var st = map__22616__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,cljs.core.cst$kw$accum);
var lang = cljs.core.second(devcards.util.markdown.matches_delim_QMARK_(line));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$code_DASH_block,cljs.core.cst$kw$lang,((clojure.string.blank_QMARK_(lang))?null:lang),cljs.core.cst$kw$leading_DASH_spaces,devcards.util.markdown.leading_space_count(line),cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.block_parser.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delim,cljs.core.cst$kw$code_DASH_block], null),(function (p__22618,line){
var map__22619 = p__22618;
var map__22619__$1 = (((((!((map__22619 == null))))?(((((map__22619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22619):map__22619);
var st = map__22619__$1;
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22619__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22619__$1,cljs.core.cst$kw$accum);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,cljs.core.cst$kw$accum,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)),cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(m,"\n");
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stage,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$markdown,cljs.core.cst$kw$content,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$accum,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$left_DASH_margin,devcards.util.markdown.bullets_left_edge(lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__22622 = devcards.util.markdown.parse_out_blocks_STAR_(m);
var map__22622__$1 = (((((!((map__22622 == null))))?(((((map__22622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22622):map__22622);
var stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622__$1,cljs.core.cst$kw$stage);
var accum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622__$1,cljs.core.cst$kw$accum);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content], null),(function (p1__22621_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",p1__22621_SHARP_);
}));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__22624){
var map__22625 = p__22624;
var map__22625__$1 = (((((!((map__22625 == null))))?(((((map__22625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22625):map__22625);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,cljs.core.cst$kw$content);
return cljs.core.not_empty(content);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accum,stage)));
});
