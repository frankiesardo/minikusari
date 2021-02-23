// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('devcards.util.utils');
goog.require('goog.History');
devcards.system.global$module$react = goog.global["React"];
devcards.system.global$module$react_dom = goog.global["ReactDOM"];
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id(devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(cljs.core.cst$kw$cardpath,path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
(el.id = id);

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5718__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var first_child = temp__5718__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5718__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5718__auto__)){
var heads = temp__5718__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild((function (){var G__22034 = "com-rigsomelight-code-highlight-css";
var G__22035 = "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__22034,G__22035) : devcards.system.create_style_element.call(null,G__22034,G__22035));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-css"))){
} else {
head.appendChild((function (){var G__22036 = "com-rigsomelight-devcards-css";
var G__22037 = "body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__22036,G__22037) : devcards.system.create_style_element.call(null,G__22036,G__22037));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild((function (){var G__22038 = "com-rigsomelight-devcards-addons-css";
var G__22039 = "/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__22038,G__22039) : devcards.system.create_style_element.call(null,G__22038,G__22039));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild((function (){var G__22040 = "com-rigsomelight-edn-css";
var G__22041 = ".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__22040,G__22041) : devcards.system.create_style_element.call(null,G__22040,G__22041));
})());
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_();

if(cljs.core.truth_(devcards.system.devcards_app_node())){
return null;
} else {
var el = document.createElement("div");
(el.id = devcards.system.devcards_app_element_id);

return devcards.system.prepend_child(document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,path))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token(path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__22042_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__22042_SHARP_.token));
}));

var temp__5720__auto__ = goog.object.get(location,"hash");
if(cljs.core.truth_(temp__5720__auto__)){
var token = temp__5720__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
if(cljs.core.map_QMARK_(d)){
var and__4115__auto__ = cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$2)){
return d;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path_DASH_collision_DASH_count.cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.vec(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(cljs.core.last(path)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_collision_DASH_count,path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__22043 = cljs.core.get_global_hierarchy;
return (fexpr__22043.cljs$core$IFn$_invoke$arity$0 ? fexpr__22043.cljs$core$IFn$_invoke$arity$0() : fexpr__22043.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$register_DASH_card,(function (p__22044,state){
var vec__22045 = p__22044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(0),null);
var map__22048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(1),null);
var map__22048__$1 = (((((!((map__22048 == null))))?(((((map__22048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22048):map__22048);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22048__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22048__$1,cljs.core.cst$kw$options);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22048__$1,cljs.core.cst$kw$func);
var position = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision(state,path);
return devcards.system.register_collision(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$position], null),cljs.core.inc),cljs.core.cons(cljs.core.cst$kw$cards,new_path),(function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,new_path,cljs.core.cst$kw$func,func,cljs.core.cst$kw$position,position], null);
})),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$current_DASH_path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$position,(0),cljs.core.cst$kw$cards,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$base_DASH_card_DASH_options,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$frame,true,cljs.core.cst$kw$heading,true,cljs.core.cst$kw$padding,true,cljs.core.cst$kw$hidden,false,cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$watch_DASH_atom,true,cljs.core.cst$kw$history,false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec((cljs.core.truth_(devcards.system.valid_path_QMARK_(state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__22050,path){
var map__22051 = p__22050;
var map__22051__$1 = (((((!((map__22051 == null))))?(((((map__22051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22051):map__22051);
var state = map__22051__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22051__$1,cljs.core.cst$kw$current_DASH_path);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$current_DASH_path,devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__22053,path){
var map__22054 = p__22053;
var map__22054__$1 = (((((!((map__22054 == null))))?(((((map__22054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22054):map__22054);
var state = map__22054__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054__$1,cljs.core.cst$kw$current_DASH_path);
var path__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,path__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$current_DASH_path,devcards.system.enforce_valid_path(state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate(path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__4115__auto__ = cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_(devcards.system.current_page(state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page(state);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__22056_SHARP_){
if(cljs.core.not(cljs.core.cst$kw$delete_DASH_card.cljs$core$IFn$_invoke$arity$1(p1__22056_SHARP_))){
return devcards.system.devcard_QMARK_(p1__22056_SHARP_);
} else {
return false;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__22057){
var map__22058 = p__22057;
var map__22058__$1 = (((((!((map__22058 == null))))?(((((map__22058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22058):map__22058);
var card = map__22058__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22058__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22058__$1,cljs.core.cst$kw$options);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22058__$1,cljs.core.cst$kw$func);
var G__22060 = "div";
var G__22061 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__22062 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR__orig_val__22063 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__22064 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__22064);

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__22063);
}})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22060,G__22061,G__22062) : sablono.core.create_element.call(null,G__22060,G__22061,G__22062));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref(state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))){
return devcards.system.card_template(state_atom,devcards.system.current_page(data));
} else {
return devcards.system.render_cards(devcards.system.display_cards(devcards.system.current_page(data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__22065){
var map__22066 = p__22065;
var map__22066__$1 = (((((!((map__22066 == null))))?(((((map__22066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22066):map__22066);
var state = map__22066__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22066__$1,cljs.core.cst$kw$current_DASH_path);
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(cljs.core.cst$kw$devcards,current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sep_fn = (function (_){
var G__22068 = "span";
var G__22069 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return cljs.core.deref(counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__22070 = "/";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22068,G__22069,G__22070) : sablono.core.create_element.call(null,G__22068,G__22069,G__22070));
});
var G__22071 = "div";
var G__22072 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__22073 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22075){
var vec__22076 = p__22075;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(1),null);
var G__22079 = "span";
var G__22080 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__22081 = (function (){var G__22082 = "a";
var G__22083 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"});
var G__22084 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22082,G__22083,G__22084) : sablono.core.create_element.call(null,G__22082,G__22083,G__22084));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22079,G__22080,G__22081) : sablono.core.create_element.call(null,G__22079,G__22080,G__22081));
}),crumbs))));
var G__22074 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22071,G__22072,G__22073,G__22074) : sablono.core.create_element.call(null,G__22071,G__22072,G__22073,G__22074));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var new_s = devcards.system.add_to_current_path(s,key);
devcards.system.hash_navigate(cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_(dirs)){
return null;
} else {
var attrs22085 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22086){
var vec__22087 = p__22086;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,(1),null);
var G__22090 = "a";
var G__22091 = ({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_((function (e){
return devcards.system.navigate_to_path(key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"});
var G__22092 = (function (){var G__22094 = "span";
var G__22095 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__22096 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22094,G__22095,G__22096) : sablono.core.create_element.call(null,G__22094,G__22095,G__22096));
})();
var G__22093 = (function (){var G__22097 = "span";
var G__22098 = null;
var G__22099 = " ";
var G__22100 = sablono.interpreter.interpret(cljs.core.name(key));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22097,G__22098,G__22099,G__22100) : sablono.core.create_element.call(null,G__22097,G__22098,G__22099,G__22100));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__22090,G__22091,G__22092,G__22093) : sablono.core.create_element.call(null,G__22090,G__22091,G__22092,G__22093));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__22101){
var vec__22102 = p__22101;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22102,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22102,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22085))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs22085], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs22085))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22085)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref(state_atom);
var G__22108 = "div";
var G__22109 = ({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5720__auto__ = cljs.core.first(cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})()].join('')});
var G__22110 = (function (){var attrs22105 = (function (){var temp__5720__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__5720__auto__)){
var crumbs = temp__5720__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22105))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs22105], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs22105))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs22106 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22106))?sablono.interpreter.attributes(attrs22106):null),((cljs.core.map_QMARK_(attrs22106))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22106)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22105),(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs22107 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs22107))?sablono.interpreter.attributes(attrs22107):null),((cljs.core.map_QMARK_(attrs22107))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22107)], null)));
})()], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__22108,G__22109,G__22110) : sablono.core.create_element.call(null,G__22108,G__22109,G__22110));
});
devcards.system.DevcardsRoot = (function (){var ctor__16154__auto__ = (function (props__16151__auto__){
var this__16152__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__16152__auto__,props__16151__auto__);

return this__16152__auto__;
});
goog.inherits(ctor__16154__auto__,devcards.util.utils.react_holder.Component);

var x22111_22112 = ctor__16154__auto__.prototype;
(x22111_22112.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,cljs.core.cst$kw$renderer_DASH_watch,(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x22111_22112.render = (function (){
var this$ = this;
return devcards.system.main_template(devcards.system.app_state);
}));


return ctor__16154__auto__;
})();

(devcards.system.DevcardsRoot.displayName = cljs.core.name(cljs.core.cst$sym$DevcardsRoot));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
var G__22113 = devcards.system.global$module$react.createElement(devcards.system.DevcardsRoot);
var G__22114 = devcards.system.devcards_app_node();
return devcards.system.global$module$react_dom.render(G__22113,G__22114);
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$position,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(new_state),cljs.core.cst$kw$cards,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(new_state)], 0))], 0));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start_data,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$cards);
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_22162){
var state_val_22163 = (state_22162[(1)]);
if((state_val_22163 === (7))){
var inst_22158 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
var statearr_22164_22191 = state_22162__$1;
(statearr_22164_22191[(2)] = inst_22158);

(statearr_22164_22191[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (1))){
var inst_22115 = (devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2 ? devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data) : devcards.system.dev_trans.call(null,first_message,initial_data));
var inst_22116 = inst_22115;
var state_22162__$1 = (function (){var statearr_22165 = state_22162;
(statearr_22165[(7)] = inst_22116);

return statearr_22165;
})();
var statearr_22166_22192 = state_22162__$1;
(statearr_22166_22192[(2)] = null);

(statearr_22166_22192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (4))){
var inst_22123 = (state_22162[(8)]);
var inst_22123__$1 = (state_22162[(2)]);
var state_22162__$1 = (function (){var statearr_22167 = state_22162;
(statearr_22167[(8)] = inst_22123__$1);

return statearr_22167;
})();
if(cljs.core.truth_(inst_22123__$1)){
var statearr_22168_22193 = state_22162__$1;
(statearr_22168_22193[(1)] = (5));

} else {
var statearr_22169_22194 = state_22162__$1;
(statearr_22169_22194[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (15))){
var state_22162__$1 = state_22162;
var statearr_22170_22195 = state_22162__$1;
(statearr_22170_22195[(2)] = null);

(statearr_22170_22195[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (13))){
var inst_22153 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
var statearr_22171_22196 = state_22162__$1;
(statearr_22171_22196[(2)] = inst_22153);

(statearr_22171_22196[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (6))){
var state_22162__$1 = state_22162;
var statearr_22172_22197 = state_22162__$1;
(statearr_22172_22197[(2)] = null);

(statearr_22172_22197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (3))){
var inst_22160 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22162__$1,inst_22160);
} else {
if((state_val_22163 === (12))){
var state_22162__$1 = state_22162;
var statearr_22173_22198 = state_22162__$1;
(statearr_22173_22198[(1)] = (14));



return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (2))){
var inst_22118 = (state_22162[(9)]);
var inst_22118__$1 = cljs.core.async.timeout((500));
var inst_22119 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22120 = [channel,inst_22118__$1];
var inst_22121 = (new cljs.core.PersistentVector(null,2,(5),inst_22119,inst_22120,null));
var state_22162__$1 = (function (){var statearr_22175 = state_22162;
(statearr_22175[(9)] = inst_22118__$1);

return statearr_22175;
})();
return cljs.core.async.ioc_alts_BANG_(state_22162__$1,(4),inst_22121);
} else {
if((state_val_22163 === (11))){
var inst_22116 = (state_22162[(7)]);
var inst_22141 = devcards.system.merge_in_new_data(start_data,inst_22116);
var state_22162__$1 = state_22162;
var statearr_22176_22199 = state_22162__$1;
(statearr_22176_22199[(2)] = inst_22141);

(statearr_22176_22199[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (9))){
var inst_22132 = (state_22162[(10)]);
var inst_22139 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22132,cljs.core.cst$kw$jsreload);
var state_22162__$1 = state_22162;
if(inst_22139){
var statearr_22177_22200 = state_22162__$1;
(statearr_22177_22200[(1)] = (11));

} else {
var statearr_22178_22201 = state_22162__$1;
(statearr_22178_22201[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (5))){
var inst_22118 = (state_22162[(9)]);
var inst_22123 = (state_22162[(8)]);
var inst_22131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22123,(0),null);
var inst_22132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22131,(0),null);
var inst_22133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22131,(1),null);
var inst_22134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22123,(1),null);
var inst_22135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22134,inst_22118);
var state_22162__$1 = (function (){var statearr_22179 = state_22162;
(statearr_22179[(10)] = inst_22132);

(statearr_22179[(11)] = inst_22133);

return statearr_22179;
})();
if(inst_22135){
var statearr_22180_22202 = state_22162__$1;
(statearr_22180_22202[(1)] = (8));

} else {
var statearr_22181_22203 = state_22162__$1;
(statearr_22181_22203[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (14))){
var inst_22116 = (state_22162[(7)]);
var inst_22132 = (state_22162[(10)]);
var inst_22133 = (state_22162[(11)]);
var inst_22144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22145 = [inst_22132,inst_22133];
var inst_22146 = (new cljs.core.PersistentVector(null,2,(5),inst_22144,inst_22145,null));
var inst_22147 = (devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2 ? devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_22146,inst_22116) : devcards.system.dev_trans.call(null,inst_22146,inst_22116));
var inst_22116__$1 = inst_22147;
var state_22162__$1 = (function (){var statearr_22182 = state_22162;
(statearr_22182[(7)] = inst_22116__$1);

return statearr_22182;
})();
var statearr_22183_22204 = state_22162__$1;
(statearr_22183_22204[(2)] = null);

(statearr_22183_22204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (16))){
var inst_22151 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
var statearr_22184_22205 = state_22162__$1;
(statearr_22184_22205[(2)] = inst_22151);

(statearr_22184_22205[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (10))){
var inst_22155 = (state_22162[(2)]);
var state_22162__$1 = state_22162;
var statearr_22185_22206 = state_22162__$1;
(statearr_22185_22206[(2)] = inst_22155);

(statearr_22185_22206[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22163 === (8))){
var inst_22116 = (state_22162[(7)]);
var inst_22137 = devcards.system.merge_in_new_data(start_data,inst_22116);
var state_22162__$1 = state_22162;
var statearr_22186_22207 = state_22162__$1;
(statearr_22186_22207[(2)] = inst_22137);

(statearr_22186_22207[(1)] = (10));


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
});
return (function() {
var devcards$system$off_the_books_$_state_machine__17874__auto__ = null;
var devcards$system$off_the_books_$_state_machine__17874__auto____0 = (function (){
var statearr_22187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22187[(0)] = devcards$system$off_the_books_$_state_machine__17874__auto__);

(statearr_22187[(1)] = (1));

return statearr_22187;
});
var devcards$system$off_the_books_$_state_machine__17874__auto____1 = (function (state_22162){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_22162);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e22188){if((e22188 instanceof Object)){
var ex__17877__auto__ = e22188;
var statearr_22189_22208 = state_22162;
(statearr_22189_22208[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22162);

return cljs.core.cst$kw$recur;
} else {
throw e22188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__22209 = state_22162;
state_22162 = G__22209;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__17874__auto__ = function(state_22162){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__17874__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__17874__auto____1.call(this,state_22162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__17874__auto____0;
devcards$system$off_the_books_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__17874__auto____1;
return devcards$system$off_the_books_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_22190 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_22190[(6)] = c__17980__auto__);

return statearr_22190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_22217){
var state_val_22218 = (state_22217[(1)]);
if((state_val_22218 === (1))){
var inst_22210 = cljs.core.deref(devcards.system.app_state);
var inst_22211 = cljs.core.PersistentVector.EMPTY;
var inst_22212 = devcards.system.off_the_books(channel,inst_22210,inst_22211);
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22217__$1,(2),inst_22212);
} else {
if((state_val_22218 === (2))){
var inst_22214 = (state_22217[(2)]);
var inst_22215 = cljs.core.reset_BANG_(devcards.system.app_state,inst_22214);
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22217__$1,inst_22215);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto____0 = (function (){
var statearr_22219 = [null,null,null,null,null,null,null];
(statearr_22219[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto__);

(statearr_22219[(1)] = (1));

return statearr_22219;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto____1 = (function (state_22217){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_22217);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e22220){if((e22220 instanceof Object)){
var ex__17877__auto__ = e22220;
var statearr_22221_22223 = state_22217;
(statearr_22221_22223[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22217);

return cljs.core.cst$kw$recur;
} else {
throw e22220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__22224 = state_22217;
state_22217 = G__22224;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto__ = function(state_22217){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto____1.call(this,state_22217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_22222 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_22222[(6)] = c__17980__auto__);

return statearr_22222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents(true);
} else {
}

var c__17980__auto___22264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_22249){
var state_val_22250 = (state_22249[(1)]);
if((state_val_22250 === (7))){
var state_22249__$1 = state_22249;
var statearr_22251_22265 = state_22249__$1;
(statearr_22251_22265[(2)] = null);

(statearr_22251_22265[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22250 === (1))){
var inst_22225 = devcards.system.load_data_from_channel_BANG_(channel);
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22249__$1,(2),inst_22225);
} else {
if((state_val_22250 === (4))){
var inst_22247 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22249__$1,inst_22247);
} else {
if((state_val_22250 === (6))){
var inst_22234 = (state_22249[(7)]);
var inst_22236 = cljs.core.deref(devcards.system.app_state);
var inst_22237 = devcards.system.off_the_books(channel,inst_22236,inst_22234);
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22249__$1,(9),inst_22237);
} else {
if((state_val_22250 === (3))){
var state_22249__$1 = state_22249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22249__$1,(5),channel);
} else {
if((state_val_22250 === (2))){
var inst_22227 = (state_22249[(2)]);
var inst_22228 = (function (){return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
})();
var inst_22229 = setTimeout(inst_22228,(0));
var inst_22230 = (function (){return (function (){
return cljs.core.add_watch(devcards.system.app_state,cljs.core.cst$kw$devcards_DASH_render,(function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
}));
});
})();
var inst_22231 = setTimeout(inst_22230,(0));
var state_22249__$1 = (function (){var statearr_22252 = state_22249;
(statearr_22252[(8)] = inst_22227);

(statearr_22252[(9)] = inst_22231);

(statearr_22252[(10)] = inst_22229);

return statearr_22252;
})();
var statearr_22253_22266 = state_22249__$1;
(statearr_22253_22266[(2)] = null);

(statearr_22253_22266[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22250 === (9))){
var inst_22234 = (state_22249[(7)]);
var inst_22239 = (state_22249[(2)]);
var inst_22240 = (function (){var temp__5720__auto__ = inst_22234;
var v = inst_22234;
var new_state = inst_22239;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_22241 = setTimeout(inst_22240,(0));
var state_22249__$1 = (function (){var statearr_22254 = state_22249;
(statearr_22254[(11)] = inst_22241);

return statearr_22254;
})();
var statearr_22255_22267 = state_22249__$1;
(statearr_22255_22267[(2)] = null);

(statearr_22255_22267[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22250 === (5))){
var inst_22234 = (state_22249[(7)]);
var inst_22234__$1 = (state_22249[(2)]);
var state_22249__$1 = (function (){var statearr_22256 = state_22249;
(statearr_22256[(7)] = inst_22234__$1);

return statearr_22256;
})();
if(cljs.core.truth_(inst_22234__$1)){
var statearr_22257_22268 = state_22249__$1;
(statearr_22257_22268[(1)] = (6));

} else {
var statearr_22258_22269 = state_22249__$1;
(statearr_22258_22269[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22250 === (8))){
var inst_22245 = (state_22249[(2)]);
var state_22249__$1 = state_22249;
var statearr_22259_22270 = state_22249__$1;
(statearr_22259_22270[(2)] = inst_22245);

(statearr_22259_22270[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__17874__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__17874__auto____0 = (function (){
var statearr_22260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22260[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__17874__auto__);

(statearr_22260[(1)] = (1));

return statearr_22260;
});
var devcards$system$start_ui_with_renderer_$_state_machine__17874__auto____1 = (function (state_22249){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_22249);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e22261){if((e22261 instanceof Object)){
var ex__17877__auto__ = e22261;
var statearr_22262_22271 = state_22249;
(statearr_22262_22271[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22249);

return cljs.core.cst$kw$recur;
} else {
throw e22261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__22272 = state_22249;
state_22249 = G__22272;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__17874__auto__ = function(state_22249){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__17874__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__17874__auto____1.call(this,state_22249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__17874__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__17874__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_22263 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_22263[(6)] = c__17980__auto___22264);

return statearr_22263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_();

var c__17980__auto___22312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_22297){
var state_val_22298 = (state_22297[(1)]);
if((state_val_22298 === (7))){
var state_22297__$1 = state_22297;
var statearr_22299_22313 = state_22297__$1;
(statearr_22299_22313[(2)] = null);

(statearr_22299_22313[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22298 === (1))){
var inst_22273 = devcards.system.load_data_from_channel_BANG_(channel);
var state_22297__$1 = state_22297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22297__$1,(2),inst_22273);
} else {
if((state_val_22298 === (4))){
var inst_22295 = (state_22297[(2)]);
var state_22297__$1 = state_22297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22297__$1,inst_22295);
} else {
if((state_val_22298 === (6))){
var inst_22282 = (state_22297[(7)]);
var inst_22284 = cljs.core.deref(devcards.system.app_state);
var inst_22285 = devcards.system.off_the_books(channel,inst_22284,inst_22282);
var state_22297__$1 = state_22297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22297__$1,(9),inst_22285);
} else {
if((state_val_22298 === (3))){
var state_22297__$1 = state_22297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22297__$1,(5),channel);
} else {
if((state_val_22298 === (2))){
var inst_22275 = (state_22297[(2)]);
var inst_22276 = (function (){return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
})();
var inst_22277 = setTimeout(inst_22276,(0));
var inst_22278 = (function (){return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
})();
var inst_22279 = setTimeout(inst_22278,(0));
var state_22297__$1 = (function (){var statearr_22300 = state_22297;
(statearr_22300[(8)] = inst_22275);

(statearr_22300[(9)] = inst_22279);

(statearr_22300[(10)] = inst_22277);

return statearr_22300;
})();
var statearr_22301_22314 = state_22297__$1;
(statearr_22301_22314[(2)] = null);

(statearr_22301_22314[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22298 === (9))){
var inst_22282 = (state_22297[(7)]);
var inst_22287 = (state_22297[(2)]);
var inst_22288 = (function (){var temp__5720__auto__ = inst_22282;
var v = inst_22282;
var new_state = inst_22287;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_22289 = setTimeout(inst_22288,(0));
var state_22297__$1 = (function (){var statearr_22302 = state_22297;
(statearr_22302[(11)] = inst_22289);

return statearr_22302;
})();
var statearr_22303_22315 = state_22297__$1;
(statearr_22303_22315[(2)] = null);

(statearr_22303_22315[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22298 === (5))){
var inst_22282 = (state_22297[(7)]);
var inst_22282__$1 = (state_22297[(2)]);
var state_22297__$1 = (function (){var statearr_22304 = state_22297;
(statearr_22304[(7)] = inst_22282__$1);

return statearr_22304;
})();
if(cljs.core.truth_(inst_22282__$1)){
var statearr_22305_22316 = state_22297__$1;
(statearr_22305_22316[(1)] = (6));

} else {
var statearr_22306_22317 = state_22297__$1;
(statearr_22306_22317[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22298 === (8))){
var inst_22293 = (state_22297[(2)]);
var state_22297__$1 = state_22297;
var statearr_22307_22318 = state_22297__$1;
(statearr_22307_22318[(2)] = inst_22293);

(statearr_22307_22318[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_$_state_machine__17874__auto__ = null;
var devcards$system$start_ui_$_state_machine__17874__auto____0 = (function (){
var statearr_22308 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22308[(0)] = devcards$system$start_ui_$_state_machine__17874__auto__);

(statearr_22308[(1)] = (1));

return statearr_22308;
});
var devcards$system$start_ui_$_state_machine__17874__auto____1 = (function (state_22297){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_22297);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e22309){if((e22309 instanceof Object)){
var ex__17877__auto__ = e22309;
var statearr_22310_22319 = state_22297;
(statearr_22310_22319[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22297);

return cljs.core.cst$kw$recur;
} else {
throw e22309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__22320 = state_22297;
state_22297 = G__22320;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__17874__auto__ = function(state_22297){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__17874__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__17874__auto____1.call(this,state_22297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__17874__auto____0;
devcards$system$start_ui_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__17874__auto____1;
return devcards$system$start_ui_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_22311 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_22311[(6)] = c__17980__auto___22312);

return statearr_22311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
var G__22321 = "span";
var G__22322 = ({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})});
return devcards.system.global$module$react.createElement(G__22321,G__22322);
});
