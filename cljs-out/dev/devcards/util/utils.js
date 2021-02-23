// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.global$module$react = goog.global["React"];
devcards.util.utils.react_holder = devcards.util.utils.global$module$react;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5718__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5718__auto__)){
var doc = temp__5718__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16178_16182 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16179_16183 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16180_16184 = true;
var _STAR_print_fn_STAR__temp_val__16181_16185 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16180_16184);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16181_16185);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16179_16183);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16178_16182);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}catch (e16176){if((e16176 instanceof Error)){
var e1 = e16176;
try{return obj.toString();
}catch (e16177){if((e16177 instanceof Error)){
var e2 = e16177;
return "<<Un-printable Type>>";
} else {
throw e16177;

}
}} else {
throw e16176;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__16186 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__16187 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__16187);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__16186);
}});
