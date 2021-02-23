// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('datascript.db');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

var datascript$parser$ITraversable$_collect$dyn_24685 = (function (_,pred,acc){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (datascript.parser._collect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__4429__auto__.call(null,_,pred,acc));
} else {
var m__4426__auto__ = (datascript.parser._collect["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__4426__auto__.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
});
datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
return datascript$parser$ITraversable$_collect$dyn_24685(_,pred,acc);
}
});

var datascript$parser$ITraversable$_collect_vars$dyn_24686 = (function (_,acc){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__4429__auto__.call(null,_,acc));
} else {
var m__4426__auto__ = (datascript.parser._collect_vars["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__4426__auto__.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
});
datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
return datascript$parser$ITraversable$_collect_vars$dyn_24686(_,acc);
}
});

var datascript$parser$ITraversable$_postwalk$dyn_24687 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (datascript.parser._postwalk[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (datascript.parser._postwalk["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
});
datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
return datascript$parser$ITraversable$_postwalk$dyn_24687(_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24698_SHARP_,p2__24697_SHARP_){
var temp__5718__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__24697_SHARP_) : parse_el.call(null,p2__24697_SHARP_));
if(cljs.core.truth_(temp__5718__auto__)){
var parsed = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24698_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__24700 = arguments.length;
switch (G__24700) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form,cljs.core.PersistentVector.EMPTY);
}));

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form) : pred.call(null,form)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect(form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,form__$1){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
}));

(datascript.parser.collect.cljs$lang$maxFixedArity = 3);

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__4126__auto__ = cljs.core.empty_QMARK_(coll);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__24706 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24706) : f.call(null,G__24706));
} else {
if(cljs.core.map_QMARK_(form)){
var G__24707 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__24708){
var vec__24709 = p__24708;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24709,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24707) : f.call(null,G__24707));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__24712 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24703_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__24703_SHARP_,f) : datascript.parser.postwalk.call(null,p1__24703_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24712) : f.call(null,G__24712));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__24713 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24704_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__24704_SHARP_,f) : datascript.parser.postwalk.call(null,p1__24704_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24713) : f.call(null,G__24713));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form));

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta(obj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__4126__auto__ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return obj;
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24718,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24722 = k24718;
switch (G__24722) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24718,else__4383__auto__);

}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24723){
var vec__24724 = p__24723;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24724,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Placeholder{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24717){
var self__ = this;
var G__24717__$1 = this;
return (new cljs.core.RecordIter((0),G__24717__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24727 = (function (coll__4377__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24727(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24719,other24720){
var self__ = this;
var this24719__$1 = this;
return (((!((other24720 == null)))) && ((this24719__$1.constructor === other24720.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24719__$1.__extmap,other24720.__extmap)));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24717){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24728 = cljs.core.keyword_identical_QMARK_;
var expr__24729 = k__4388__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24717),null));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24717){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Placeholder(G__24717,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24714){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24715,acc24716){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24716;
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24716){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24716;
}));

(datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.Placeholder.cljs$lang$type = true);

(datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
}));

(datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Placeholder");
}));

/**
 * Positional factory function for datascript.parser/Placeholder.
 */
datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

/**
 * Factory function for datascript.parser/Placeholder, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__24721){
var extmap__4419__auto__ = (function (){var G__24731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24721);
if(cljs.core.record_QMARK_(G__24721)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24731);
} else {
return G__24731;
}
})();
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24737,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24741 = k24737;
var G__24741__$1 = (((G__24741 instanceof cljs.core.Keyword))?G__24741.fqn:null);
switch (G__24741__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24737,else__4383__auto__);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24742){
var vec__24743 = p__24742;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24743,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24743,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Variable{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24736){
var self__ = this;
var G__24736__$1 = this;
return (new cljs.core.RecordIter((0),G__24736__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24746 = (function (coll__4377__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24746(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24738,other24739){
var self__ = this;
var this24738__$1 = this;
return (((!((other24739 == null)))) && ((this24738__$1.constructor === other24739.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24738__$1.symbol,other24739.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24738__$1.__extmap,other24739.__extmap)));
}));

(datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24736){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24747 = cljs.core.keyword_identical_QMARK_;
var expr__24748 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24750 = cljs.core.cst$kw$symbol;
var G__24751 = expr__24748;
return (pred__24747.cljs$core$IFn$_invoke$arity$2 ? pred__24747.cljs$core$IFn$_invoke$arity$2(G__24750,G__24751) : pred__24747.call(null,G__24750,G__24751));
})())){
return (new datascript.parser.Variable(G__24736,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24736),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$symbol,self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24736){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__24736,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24733){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f24733),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24734,acc24735){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24734,self__.symbol,acc24735);
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24735){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24735,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc24735,self__.symbol));
}));

(datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
}));

(datascript.parser.Variable.cljs$lang$type = true);

(datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
}));

(datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Variable");
}));

/**
 * Positional factory function for datascript.parser/Variable.
 */
datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/Variable, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__24740){
var extmap__4419__auto__ = (function (){var G__24752 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24740,cljs.core.cst$kw$symbol);
if(cljs.core.record_QMARK_(G__24740)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24752);
} else {
return G__24752;
}
})();
return (new datascript.parser.Variable(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__24740),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24758,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24762 = k24758;
var G__24762__$1 = (((G__24762 instanceof cljs.core.Keyword))?G__24762.fqn:null);
switch (G__24762__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24758,else__4383__auto__);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24763){
var vec__24764 = p__24763;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24764,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24764,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.SrcVar{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24757){
var self__ = this;
var G__24757__$1 = this;
return (new cljs.core.RecordIter((0),G__24757__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24767 = (function (coll__4377__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24767(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24759,other24760){
var self__ = this;
var this24759__$1 = this;
return (((!((other24760 == null)))) && ((this24759__$1.constructor === other24760.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24759__$1.symbol,other24760.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24759__$1.__extmap,other24760.__extmap)));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24757){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24768 = cljs.core.keyword_identical_QMARK_;
var expr__24769 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24771 = cljs.core.cst$kw$symbol;
var G__24772 = expr__24769;
return (pred__24768.cljs$core$IFn$_invoke$arity$2 ? pred__24768.cljs$core$IFn$_invoke$arity$2(G__24771,G__24772) : pred__24768.call(null,G__24771,G__24772));
})())){
return (new datascript.parser.SrcVar(G__24757,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24757),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$symbol,self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24757){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__24757,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24754){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f24754),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24755,acc24756){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24755,self__.symbol,acc24756);
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24756){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24756,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc24756,self__.symbol));
}));

(datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
}));

(datascript.parser.SrcVar.cljs$lang$type = true);

(datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
}));

(datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/SrcVar");
}));

/**
 * Positional factory function for datascript.parser/SrcVar.
 */
datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/SrcVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__24761){
var extmap__4419__auto__ = (function (){var G__24773 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24761,cljs.core.cst$kw$symbol);
if(cljs.core.record_QMARK_(G__24761)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24773);
} else {
return G__24773;
}
})();
return (new datascript.parser.SrcVar(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__24761),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24779,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24783 = k24779;
switch (G__24783) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24779,else__4383__auto__);

}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24784){
var vec__24785 = p__24784;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24778){
var self__ = this;
var G__24778__$1 = this;
return (new cljs.core.RecordIter((0),G__24778__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24788 = (function (coll__4377__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24788(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24780,other24781){
var self__ = this;
var this24780__$1 = this;
return (((!((other24781 == null)))) && ((this24780__$1.constructor === other24781.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24780__$1.__extmap,other24781.__extmap)));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24778){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24789 = cljs.core.keyword_identical_QMARK_;
var expr__24790 = k__4388__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24778),null));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24778){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__24778,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24775){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24776,acc24777){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24777;
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24777){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24777;
}));

(datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.DefaultSrc.cljs$lang$type = true);

(datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
}));

(datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/DefaultSrc");
}));

/**
 * Positional factory function for datascript.parser/DefaultSrc.
 */
datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

/**
 * Factory function for datascript.parser/DefaultSrc, taking a map of keywords to field values.
 */
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__24782){
var extmap__4419__auto__ = (function (){var G__24792 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24782);
if(cljs.core.record_QMARK_(G__24782)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24792);
} else {
return G__24792;
}
})();
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24798,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24802 = k24798;
switch (G__24802) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24798,else__4383__auto__);

}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24803){
var vec__24804 = p__24803;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24804,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24804,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RulesVar{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24797){
var self__ = this;
var G__24797__$1 = this;
return (new cljs.core.RecordIter((0),G__24797__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24807 = (function (coll__4377__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24807(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24799,other24800){
var self__ = this;
var this24799__$1 = this;
return (((!((other24800 == null)))) && ((this24799__$1.constructor === other24800.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24799__$1.__extmap,other24800.__extmap)));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24797){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24808 = cljs.core.keyword_identical_QMARK_;
var expr__24809 = k__4388__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24797),null));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24797){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RulesVar(G__24797,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24794){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24795,acc24796){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24796;
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24796){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24796;
}));

(datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.RulesVar.cljs$lang$type = true);

(datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
}));

(datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/RulesVar");
}));

/**
 * Positional factory function for datascript.parser/RulesVar.
 */
datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

/**
 * Factory function for datascript.parser/RulesVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__24801){
var extmap__4419__auto__ = (function (){var G__24811 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24801);
if(cljs.core.record_QMARK_(G__24801)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24811);
} else {
return G__24811;
}
})();
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24817,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24821 = k24817;
var G__24821__$1 = (((G__24821 instanceof cljs.core.Keyword))?G__24821.fqn:null);
switch (G__24821__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24817,else__4383__auto__);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24822){
var vec__24823 = p__24822;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24823,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24823,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Constant{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24816){
var self__ = this;
var G__24816__$1 = this;
return (new cljs.core.RecordIter((0),G__24816__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24826 = (function (coll__4377__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24826(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24818,other24819){
var self__ = this;
var this24818__$1 = this;
return (((!((other24819 == null)))) && ((this24818__$1.constructor === other24819.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24818__$1.value,other24819.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24818__$1.__extmap,other24819.__extmap)));
}));

(datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24816){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24827 = cljs.core.keyword_identical_QMARK_;
var expr__24828 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24830 = cljs.core.cst$kw$value;
var G__24831 = expr__24828;
return (pred__24827.cljs$core$IFn$_invoke$arity$2 ? pred__24827.cljs$core$IFn$_invoke$arity$2(G__24830,G__24831) : pred__24827.call(null,G__24830,G__24831));
})())){
return (new datascript.parser.Constant(G__24816,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24816),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24816){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__24816,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24813){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f24813),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24814,acc24815){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24814,self__.value,acc24815);
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24815){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24815,self__.value) : datascript.parser.collect_vars_acc.call(null,acc24815,self__.value));
}));

(datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
}));

(datascript.parser.Constant.cljs$lang$type = true);

(datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
}));

(datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Constant");
}));

/**
 * Positional factory function for datascript.parser/Constant.
 */
datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

/**
 * Factory function for datascript.parser/Constant, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__24820){
var extmap__4419__auto__ = (function (){var G__24832 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24820,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__24820)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24832);
} else {
return G__24832;
}
})();
return (new datascript.parser.Constant(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__24820),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24838,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24842 = k24838;
var G__24842__$1 = (((G__24842 instanceof cljs.core.Keyword))?G__24842.fqn:null);
switch (G__24842__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24838,else__4383__auto__);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24843){
var vec__24844 = p__24843;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24837){
var self__ = this;
var G__24837__$1 = this;
return (new cljs.core.RecordIter((0),G__24837__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24847 = (function (coll__4377__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24847(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24839,other24840){
var self__ = this;
var this24839__$1 = this;
return (((!((other24840 == null)))) && ((this24839__$1.constructor === other24840.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24839__$1.symbol,other24840.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24839__$1.__extmap,other24840.__extmap)));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24837){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24848 = cljs.core.keyword_identical_QMARK_;
var expr__24849 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24851 = cljs.core.cst$kw$symbol;
var G__24852 = expr__24849;
return (pred__24848.cljs$core$IFn$_invoke$arity$2 ? pred__24848.cljs$core$IFn$_invoke$arity$2(G__24851,G__24852) : pred__24848.call(null,G__24851,G__24852));
})())){
return (new datascript.parser.PlainSymbol(G__24837,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24837),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$symbol,self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24837){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__24837,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24834){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f24834),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24835,acc24836){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24835,self__.symbol,acc24836);
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24836){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24836,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc24836,self__.symbol));
}));

(datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
}));

(datascript.parser.PlainSymbol.cljs$lang$type = true);

(datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
}));

(datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/PlainSymbol");
}));

/**
 * Positional factory function for datascript.parser/PlainSymbol.
 */
datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/PlainSymbol, taking a map of keywords to field values.
 */
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__24841){
var extmap__4419__auto__ = (function (){var G__24853 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24841,cljs.core.cst$kw$symbol);
if(cljs.core.record_QMARK_(G__24841)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24853);
} else {
return G__24853;
}
})();
return (new datascript.parser.PlainSymbol(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__24841),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_var_required = (function datascript$parser$parse_var_required(form){
var or__4126__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse var, expected symbol starting with ?, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_var,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"$")))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_PERCENT_,form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if((!((form instanceof cljs.core.Symbol)))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core.not(datascript.parser.parse_variable(form))) && (cljs.core.not(datascript.parser.parse_src_var(form))) && (cljs.core.not(datascript.parser.parse_rules_var(form))) && (cljs.core.not(datascript.parser.parse_placeholder(form))))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol(form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__4126__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_constant(form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_src_var(form);
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24859,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24863 = k24859;
var G__24863__$1 = (((G__24863 instanceof cljs.core.Keyword))?G__24863.fqn:null);
switch (G__24863__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24859,else__4383__auto__);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24864){
var vec__24865 = p__24864;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24865,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24865,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RuleVars{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24858){
var self__ = this;
var G__24858__$1 = this;
return (new cljs.core.RecordIter((0),G__24858__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$required,cljs.core.cst$kw$free], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24868 = (function (coll__4377__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24868(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24860,other24861){
var self__ = this;
var this24860__$1 = this;
return (((!((other24861 == null)))) && ((this24860__$1.constructor === other24861.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24860__$1.required,other24861.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24860__$1.free,other24861.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24860__$1.__extmap,other24861.__extmap)));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$free,null,cljs.core.cst$kw$required,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24858){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24869 = cljs.core.keyword_identical_QMARK_;
var expr__24870 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24872 = cljs.core.cst$kw$required;
var G__24873 = expr__24870;
return (pred__24869.cljs$core$IFn$_invoke$arity$2 ? pred__24869.cljs$core$IFn$_invoke$arity$2(G__24872,G__24873) : pred__24869.call(null,G__24872,G__24873));
})())){
return (new datascript.parser.RuleVars(G__24858,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24874 = cljs.core.cst$kw$free;
var G__24875 = expr__24870;
return (pred__24869.cljs$core$IFn$_invoke$arity$2 ? pred__24869.cljs$core$IFn$_invoke$arity$2(G__24874,G__24875) : pred__24869.call(null,G__24874,G__24875));
})())){
return (new datascript.parser.RuleVars(self__.required,G__24858,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24858),null));
}
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$required,self__.required,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$free,self__.free,null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24858){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__24858,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24855){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f24855),datascript.parser.postwalk(self__.free,f24855),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24856,acc24857){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24856,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24856,self__.required,acc24857));
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24857){
var self__ = this;
var ___23477__auto____$1 = this;
var G__24876 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24857,self__.required) : datascript.parser.collect_vars_acc.call(null,acc24857,self__.required));
var G__24877 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24876,G__24877) : datascript.parser.collect_vars_acc.call(null,G__24876,G__24877));
}));

(datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$required,cljs.core.cst$sym$free], null);
}));

(datascript.parser.RuleVars.cljs$lang$type = true);

(datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
}));

(datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/RuleVars");
}));

/**
 * Positional factory function for datascript.parser/RuleVars.
 */
datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleVars, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__24862){
var extmap__4419__auto__ = (function (){var G__24878 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24862,cljs.core.cst$kw$required,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$free], 0));
if(cljs.core.record_QMARK_(G__24862)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24878);
} else {
return G__24878;
}
})();
return (new datascript.parser.RuleVars(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__24862),cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(G__24862),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__24880 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24880,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24880,(1),null);
var required_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,required);
var free_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,rest);
if(((cljs.core.empty_QMARK_(required_STAR_)) && (cljs.core.empty_QMARK_(free_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Rule variables should be distinct",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count(cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24887,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24891 = k24887;
switch (G__24891) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24887,else__4383__auto__);

}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24892){
var vec__24893 = p__24892;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24893,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24893,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24886){
var self__ = this;
var G__24886__$1 = this;
return (new cljs.core.RecordIter((0),G__24886__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24896 = (function (coll__4377__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24896(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24888,other24889){
var self__ = this;
var this24888__$1 = this;
return (((!((other24889 == null)))) && ((this24888__$1.constructor === other24889.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24888__$1.__extmap,other24889.__extmap)));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24886){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24897 = cljs.core.keyword_identical_QMARK_;
var expr__24898 = k__4388__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24886),null));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24886){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__24886,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24883){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24884,acc24885){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24885;
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24885){
var self__ = this;
var ___23477__auto____$1 = this;
return acc24885;
}));

(datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.BindIgnore.cljs$lang$type = true);

(datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
}));

(datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/BindIgnore");
}));

/**
 * Positional factory function for datascript.parser/BindIgnore.
 */
datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

/**
 * Factory function for datascript.parser/BindIgnore, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__24890){
var extmap__4419__auto__ = (function (){var G__24900 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24890);
if(cljs.core.record_QMARK_(G__24890)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24900);
} else {
return G__24900;
}
})();
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24906,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24910 = k24906;
var G__24910__$1 = (((G__24910 instanceof cljs.core.Keyword))?G__24910.fqn:null);
switch (G__24910__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24906,else__4383__auto__);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24911){
var vec__24912 = p__24911;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24912,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24912,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindScalar{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24905){
var self__ = this;
var G__24905__$1 = this;
return (new cljs.core.RecordIter((0),G__24905__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24915 = (function (coll__4377__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24915(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24907,other24908){
var self__ = this;
var this24907__$1 = this;
return (((!((other24908 == null)))) && ((this24907__$1.constructor === other24908.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24907__$1.variable,other24908.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24907__$1.__extmap,other24908.__extmap)));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variable,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24905){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24916 = cljs.core.keyword_identical_QMARK_;
var expr__24917 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24919 = cljs.core.cst$kw$variable;
var G__24920 = expr__24917;
return (pred__24916.cljs$core$IFn$_invoke$arity$2 ? pred__24916.cljs$core$IFn$_invoke$arity$2(G__24919,G__24920) : pred__24916.call(null,G__24919,G__24920));
})())){
return (new datascript.parser.BindScalar(G__24905,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24905),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$variable,self__.variable,null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24905){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__24905,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24902){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f24902),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24903,acc24904){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24903,self__.variable,acc24904);
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24904){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24904,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc24904,self__.variable));
}));

(datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$variable], null);
}));

(datascript.parser.BindScalar.cljs$lang$type = true);

(datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
}));

(datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/BindScalar");
}));

/**
 * Positional factory function for datascript.parser/BindScalar.
 */
datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

/**
 * Factory function for datascript.parser/BindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__24909){
var extmap__4419__auto__ = (function (){var G__24921 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24909,cljs.core.cst$kw$variable);
if(cljs.core.record_QMARK_(G__24909)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24921);
} else {
return G__24921;
}
})();
return (new datascript.parser.BindScalar(cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__24909),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24927,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24931 = k24927;
var G__24931__$1 = (((G__24931 instanceof cljs.core.Keyword))?G__24931.fqn:null);
switch (G__24931__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24927,else__4383__auto__);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24932){
var vec__24933 = p__24932;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24933,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24933,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindTuple{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24926){
var self__ = this;
var G__24926__$1 = this;
return (new cljs.core.RecordIter((0),G__24926__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24936 = (function (coll__4377__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24936(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24928,other24929){
var self__ = this;
var this24928__$1 = this;
return (((!((other24929 == null)))) && ((this24928__$1.constructor === other24929.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24928__$1.bindings,other24929.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24928__$1.__extmap,other24929.__extmap)));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24926){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24937 = cljs.core.keyword_identical_QMARK_;
var expr__24938 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24940 = cljs.core.cst$kw$bindings;
var G__24941 = expr__24938;
return (pred__24937.cljs$core$IFn$_invoke$arity$2 ? pred__24937.cljs$core$IFn$_invoke$arity$2(G__24940,G__24941) : pred__24937.call(null,G__24940,G__24941));
})())){
return (new datascript.parser.BindTuple(G__24926,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24926),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$bindings,self__.bindings,null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24926){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__24926,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24923){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f24923),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24924,acc24925){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24924,self__.bindings,acc24925);
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24925){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24925,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc24925,self__.bindings));
}));

(datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings], null);
}));

(datascript.parser.BindTuple.cljs$lang$type = true);

(datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
}));

(datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/BindTuple");
}));

/**
 * Positional factory function for datascript.parser/BindTuple.
 */
datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

/**
 * Factory function for datascript.parser/BindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__24930){
var extmap__4419__auto__ = (function (){var G__24942 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24930,cljs.core.cst$kw$bindings);
if(cljs.core.record_QMARK_(G__24930)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24942);
} else {
return G__24942;
}
})();
return (new datascript.parser.BindTuple(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(G__24930),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24948,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24952 = k24948;
var G__24952__$1 = (((G__24952 instanceof cljs.core.Keyword))?G__24952.fqn:null);
switch (G__24952__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24948,else__4383__auto__);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24953){
var vec__24954 = p__24953;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24954,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24954,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.BindColl{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24947){
var self__ = this;
var G__24947__$1 = this;
return (new cljs.core.RecordIter((0),G__24947__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24957 = (function (coll__4377__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24957(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24949,other24950){
var self__ = this;
var this24949__$1 = this;
return (((!((other24950 == null)))) && ((this24949__$1.constructor === other24950.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24949__$1.binding,other24950.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24949__$1.__extmap,other24950.__extmap)));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$binding,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24947){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24958 = cljs.core.keyword_identical_QMARK_;
var expr__24959 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24961 = cljs.core.cst$kw$binding;
var G__24962 = expr__24959;
return (pred__24958.cljs$core$IFn$_invoke$arity$2 ? pred__24958.cljs$core$IFn$_invoke$arity$2(G__24961,G__24962) : pred__24958.call(null,G__24961,G__24962));
})())){
return (new datascript.parser.BindColl(G__24947,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24947),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$binding,self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24947){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__24947,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24944){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f24944),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24945,acc24946){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24945,self__.binding,acc24946);
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24946){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24946,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc24946,self__.binding));
}));

(datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$binding], null);
}));

(datascript.parser.BindColl.cljs$lang$type = true);

(datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
}));

(datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/BindColl");
}));

/**
 * Positional factory function for datascript.parser/BindColl.
 */
datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

/**
 * Factory function for datascript.parser/BindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__24951){
var extmap__4419__auto__ = (function (){var G__24963 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24951,cljs.core.cst$kw$binding);
if(cljs.core.record_QMARK_(G__24951)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24963);
} else {
return G__24963;
}
})();
return (new datascript.parser.BindColl(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__24951),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return datascript.parser.with_source((new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5720__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(temp__5720__auto__)){
var var$ = temp__5720__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(((datascript.parser.of_size_QMARK_(form,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$$$$)))){
var temp__5718__auto__ = (function (){var G__24965 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__24965) : datascript.parser.parse_binding.call(null,G__24965));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var sub_bind = temp__5718__auto__;
return datascript.parser.with_source((new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse collection binding",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__4126__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(form) : datascript.parser.parse_binding.call(null,form));
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5720__auto__ = datascript.parser.parse_seq(datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5720__auto__)){
var sub_bindings = temp__5720__auto__;
if((!(cljs.core.empty_QMARK_(sub_bindings)))){
return datascript.parser.with_source((new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tuple binding cannot be empty",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(((datascript.parser.of_size_QMARK_(form,(1))) && (cljs.core.sequential_QMARK_(cljs.core.first(form))))){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__4126__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

var datascript$parser$IFindVars$_find_vars$dyn_24966 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (datascript.parser._find_vars[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (datascript.parser._find_vars["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
});
datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
return datascript$parser$IFindVars$_find_vars$dyn_24966(this$);
}
});

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
}));

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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(cljs.core.last(self__.args));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24971,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__24975 = k24971;
var G__24975__$1 = (((G__24975 instanceof cljs.core.Keyword))?G__24975.fqn:null);
switch (G__24975__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24971,else__4383__auto__);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__24976){
var vec__24977 = p__24976;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24977,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Aggregate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24970){
var self__ = this;
var G__24970__$1 = this;
return (new cljs.core.RecordIter((0),G__24970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__24980 = (function (coll__4377__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__24980(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24972,other24973){
var self__ = this;
var this24972__$1 = this;
return (((!((other24973 == null)))) && ((this24972__$1.constructor === other24973.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24972__$1.fn,other24973.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24972__$1.args,other24973.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24972__$1.__extmap,other24973.__extmap)));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24970){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__24981 = cljs.core.keyword_identical_QMARK_;
var expr__24982 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__24984 = cljs.core.cst$kw$fn;
var G__24985 = expr__24982;
return (pred__24981.cljs$core$IFn$_invoke$arity$2 ? pred__24981.cljs$core$IFn$_invoke$arity$2(G__24984,G__24985) : pred__24981.call(null,G__24984,G__24985));
})())){
return (new datascript.parser.Aggregate(G__24970,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24986 = cljs.core.cst$kw$args;
var G__24987 = expr__24982;
return (pred__24981.cljs$core$IFn$_invoke$arity$2 ? pred__24981.cljs$core$IFn$_invoke$arity$2(G__24986,G__24987) : pred__24981.call(null,G__24986,G__24987));
})())){
return (new datascript.parser.Aggregate(self__.fn,G__24970,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24970),null));
}
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24970){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__24970,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24967){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f24967),datascript.parser.postwalk(self__.args,f24967),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24968,acc24969){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24968,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24968,self__.fn,acc24969));
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24969){
var self__ = this;
var ___23477__auto____$1 = this;
var G__24988 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24969,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc24969,self__.fn));
var G__24989 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__24988,G__24989) : datascript.parser.collect_vars_acc.call(null,G__24988,G__24989));
}));

(datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
}));

(datascript.parser.Aggregate.cljs$lang$type = true);

(datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
}));

(datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Aggregate");
}));

/**
 * Positional factory function for datascript.parser/Aggregate.
 */
datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Aggregate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__24974){
var extmap__4419__auto__ = (function (){var G__24990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24974,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__24974)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24990);
} else {
return G__24990;
}
})();
return (new datascript.parser.Aggregate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__24974),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__24974),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(self__.variable);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k24996,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25000 = k24996;
var G__25000__$1 = (((G__25000 instanceof cljs.core.Keyword))?G__25000.fqn:null);
switch (G__25000__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24996,else__4383__auto__);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25001){
var vec__25002 = p__25001;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25002,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25002,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Pull{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24995){
var self__ = this;
var G__24995__$1 = this;
return (new cljs.core.RecordIter((0),G__24995__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25005 = (function (coll__4377__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25005(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24997,other24998){
var self__ = this;
var this24997__$1 = this;
return (((!((other24998 == null)))) && ((this24997__$1.constructor === other24998.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24997__$1.source,other24998.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24997__$1.variable,other24998.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24997__$1.pattern,other24998.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24997__$1.__extmap,other24998.__extmap)));
}));

(datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$variable,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__24995){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25006 = cljs.core.keyword_identical_QMARK_;
var expr__25007 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25009 = cljs.core.cst$kw$source;
var G__25010 = expr__25007;
return (pred__25006.cljs$core$IFn$_invoke$arity$2 ? pred__25006.cljs$core$IFn$_invoke$arity$2(G__25009,G__25010) : pred__25006.call(null,G__25009,G__25010));
})())){
return (new datascript.parser.Pull(G__24995,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25011 = cljs.core.cst$kw$variable;
var G__25012 = expr__25007;
return (pred__25006.cljs$core$IFn$_invoke$arity$2 ? pred__25006.cljs$core$IFn$_invoke$arity$2(G__25011,G__25012) : pred__25006.call(null,G__25011,G__25012));
})())){
return (new datascript.parser.Pull(self__.source,G__24995,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25013 = cljs.core.cst$kw$pattern;
var G__25014 = expr__25007;
return (pred__25006.cljs$core$IFn$_invoke$arity$2 ? pred__25006.cljs$core$IFn$_invoke$arity$2(G__25013,G__25014) : pred__25006.call(null,G__25013,G__25014));
})())){
return (new datascript.parser.Pull(self__.source,self__.variable,G__24995,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__24995),null));
}
}
}
}));

(datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$variable,self__.variable,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pattern,self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__24995){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__24995,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f24992){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f24992),datascript.parser.postwalk(self__.variable,f24992),datascript.parser.postwalk(self__.pattern,f24992),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred24993,acc24994){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24993,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24993,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred24993,self__.source,acc24994)));
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc24994){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25015 = (function (){var G__25017 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc24994,self__.source) : datascript.parser.collect_vars_acc.call(null,acc24994,self__.source));
var G__25018 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25017,G__25018) : datascript.parser.collect_vars_acc.call(null,G__25017,G__25018));
})();
var G__25016 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25015,G__25016) : datascript.parser.collect_vars_acc.call(null,G__25015,G__25016));
}));

(datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$variable,cljs.core.cst$sym$pattern], null);
}));

(datascript.parser.Pull.cljs$lang$type = true);

(datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
}));

(datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Pull");
}));

/**
 * Positional factory function for datascript.parser/Pull.
 */
datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pull, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__24999){
var extmap__4419__auto__ = (function (){var G__25019 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24999,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], 0));
if(cljs.core.record_QMARK_(G__24999)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25019);
} else {
return G__25019;
}
})();
return (new datascript.parser.Pull(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__24999),cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__24999),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__24999),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

var datascript$parser$IFindElements$find_elements$dyn_25021 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (datascript.parser.find_elements[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (datascript.parser.find_elements["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
}
}
});
datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
return datascript$parser$IFindElements$find_elements$dyn_25021(this$);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25026,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25030 = k25026;
var G__25030__$1 = (((G__25030 instanceof cljs.core.Keyword))?G__25030.fqn:null);
switch (G__25030__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25026,else__4383__auto__);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25031){
var vec__25032 = p__25031;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25032,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25032,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindRel{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25025){
var self__ = this;
var G__25025__$1 = this;
return (new cljs.core.RecordIter((0),G__25025__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25035 = (function (coll__4377__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25035(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25027,other25028){
var self__ = this;
var this25027__$1 = this;
return (((!((other25028 == null)))) && ((this25027__$1.constructor === other25028.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25027__$1.elements,other25028.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25027__$1.__extmap,other25028.__extmap)));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25025){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25036 = cljs.core.keyword_identical_QMARK_;
var expr__25037 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25039 = cljs.core.cst$kw$elements;
var G__25040 = expr__25037;
return (pred__25036.cljs$core$IFn$_invoke$arity$2 ? pred__25036.cljs$core$IFn$_invoke$arity$2(G__25039,G__25040) : pred__25036.call(null,G__25039,G__25040));
})())){
return (new datascript.parser.FindRel(G__25025,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25025),null));
}
}));

(datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$elements,self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25025){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__25025,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25022){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f25022),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25023,acc25024){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25023,self__.elements,acc25024);
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25024){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25024,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc25024,self__.elements));
}));

(datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
}));

(datascript.parser.FindRel.cljs$lang$type = true);

(datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
}));

(datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/FindRel");
}));

/**
 * Positional factory function for datascript.parser/FindRel.
 */
datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindRel, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__25029){
var extmap__4419__auto__ = (function (){var G__25041 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25029,cljs.core.cst$kw$elements);
if(cljs.core.record_QMARK_(G__25029)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25041);
} else {
return G__25041;
}
})();
return (new datascript.parser.FindRel(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__25029),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25047,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25051 = k25047;
var G__25051__$1 = (((G__25051 instanceof cljs.core.Keyword))?G__25051.fqn:null);
switch (G__25051__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25047,else__4383__auto__);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25052){
var vec__25053 = p__25052;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25053,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25053,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindColl{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25046){
var self__ = this;
var G__25046__$1 = this;
return (new cljs.core.RecordIter((0),G__25046__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25056 = (function (coll__4377__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25056(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25048,other25049){
var self__ = this;
var this25048__$1 = this;
return (((!((other25049 == null)))) && ((this25048__$1.constructor === other25049.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25048__$1.element,other25049.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25048__$1.__extmap,other25049.__extmap)));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25046){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25057 = cljs.core.keyword_identical_QMARK_;
var expr__25058 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25060 = cljs.core.cst$kw$element;
var G__25061 = expr__25058;
return (pred__25057.cljs$core$IFn$_invoke$arity$2 ? pred__25057.cljs$core$IFn$_invoke$arity$2(G__25060,G__25061) : pred__25057.call(null,G__25060,G__25061));
})())){
return (new datascript.parser.FindColl(G__25046,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25046),null));
}
}));

(datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$element,self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25046){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__25046,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25043){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f25043),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25044,acc25045){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25044,self__.element,acc25045);
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25045){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25045,self__.element) : datascript.parser.collect_vars_acc.call(null,acc25045,self__.element));
}));

(datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
}));

(datascript.parser.FindColl.cljs$lang$type = true);

(datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
}));

(datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/FindColl");
}));

/**
 * Positional factory function for datascript.parser/FindColl.
 */
datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__25050){
var extmap__4419__auto__ = (function (){var G__25062 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25050,cljs.core.cst$kw$element);
if(cljs.core.record_QMARK_(G__25050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25062);
} else {
return G__25062;
}
})();
return (new datascript.parser.FindColl(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__25050),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25068,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25072 = k25068;
var G__25072__$1 = (((G__25072 instanceof cljs.core.Keyword))?G__25072.fqn:null);
switch (G__25072__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25068,else__4383__auto__);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25073){
var vec__25074 = p__25073;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25074,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25074,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindScalar{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25067){
var self__ = this;
var G__25067__$1 = this;
return (new cljs.core.RecordIter((0),G__25067__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25077 = (function (coll__4377__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25077(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25069,other25070){
var self__ = this;
var this25069__$1 = this;
return (((!((other25070 == null)))) && ((this25069__$1.constructor === other25070.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25069__$1.element,other25070.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25069__$1.__extmap,other25070.__extmap)));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25067){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25078 = cljs.core.keyword_identical_QMARK_;
var expr__25079 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25081 = cljs.core.cst$kw$element;
var G__25082 = expr__25079;
return (pred__25078.cljs$core$IFn$_invoke$arity$2 ? pred__25078.cljs$core$IFn$_invoke$arity$2(G__25081,G__25082) : pred__25078.call(null,G__25081,G__25082));
})())){
return (new datascript.parser.FindScalar(G__25067,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25067),null));
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$element,self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25067){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__25067,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25064){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f25064),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25065,acc25066){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25065,self__.element,acc25066);
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25066){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25066,self__.element) : datascript.parser.collect_vars_acc.call(null,acc25066,self__.element));
}));

(datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
}));

(datascript.parser.FindScalar.cljs$lang$type = true);

(datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
}));

(datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/FindScalar");
}));

/**
 * Positional factory function for datascript.parser/FindScalar.
 */
datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__25071){
var extmap__4419__auto__ = (function (){var G__25083 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25071,cljs.core.cst$kw$element);
if(cljs.core.record_QMARK_(G__25071)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25083);
} else {
return G__25083;
}
})();
return (new datascript.parser.FindScalar(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__25071),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25089,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25093 = k25089;
var G__25093__$1 = (((G__25093 instanceof cljs.core.Keyword))?G__25093.fqn:null);
switch (G__25093__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25089,else__4383__auto__);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25094){
var vec__25095 = p__25094;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.FindTuple{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25088){
var self__ = this;
var G__25088__$1 = this;
return (new cljs.core.RecordIter((0),G__25088__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25098 = (function (coll__4377__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25098(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25090,other25091){
var self__ = this;
var this25090__$1 = this;
return (((!((other25091 == null)))) && ((this25090__$1.constructor === other25091.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25090__$1.elements,other25091.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25090__$1.__extmap,other25091.__extmap)));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25088){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25099 = cljs.core.keyword_identical_QMARK_;
var expr__25100 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25102 = cljs.core.cst$kw$elements;
var G__25103 = expr__25100;
return (pred__25099.cljs$core$IFn$_invoke$arity$2 ? pred__25099.cljs$core$IFn$_invoke$arity$2(G__25102,G__25103) : pred__25099.call(null,G__25102,G__25103));
})())){
return (new datascript.parser.FindTuple(G__25088,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25088),null));
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$elements,self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25088){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__25088,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25085){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f25085),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25086,acc25087){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25086,self__.elements,acc25087);
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25087){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25087,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc25087,self__.elements));
}));

(datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
}));

(datascript.parser.FindTuple.cljs$lang$type = true);

(datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
}));

(datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/FindTuple");
}));

/**
 * Positional factory function for datascript.parser/FindTuple.
 */
datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__25092){
var extmap__4419__auto__ = (function (){var G__25104 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25092,cljs.core.cst$kw$elements);
if(cljs.core.record_QMARK_(G__25092)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25104);
} else {
return G__25104;
}
})();
return (new datascript.parser.FindTuple(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__25092),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(datascript.parser._find_vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.find_elements(find)], 0));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if(((cljs.core.sequential_QMARK_(form)) && ((cljs.core.count(form) >= (2))))){
var vec__25106 = form;
var seq__25107 = cljs.core.seq(vec__25106);
var first__25108 = cljs.core.first(seq__25107);
var seq__25107__$1 = cljs.core.next(seq__25107);
var fn = first__25108;
var args = seq__25107__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4115__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return args_STAR_;
} else {
return and__4115__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$aggregate)))){
if((cljs.core.count(form) >= (3))){
var vec__25109 = form;
var seq__25110 = cljs.core.seq(vec__25109);
var first__25111 = cljs.core.first(seq__25110);
var seq__25110__$1 = cljs.core.next(seq__25110);
var _ = first__25111;
var first__25111__$1 = cljs.core.first(seq__25110__$1);
var seq__25110__$2 = cljs.core.next(seq__25110__$1);
var fn = first__25111__$1;
var args = seq__25110__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4115__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return args_STAR_;
} else {
return and__4115__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$pull)))){
if(((((3) <= cljs.core.count(form))) && ((cljs.core.count(form) <= (4))))){
var long_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(4));
var src = ((long_QMARK_)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)):cljs.core.cst$sym$$);
var vec__25112 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25112,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25112,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__4126__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = src_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return pattern_STAR_;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__4126__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__25115 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__25115 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__25115,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
if(((cljs.core.sequential_QMARK_(inner)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),cljs.core.cst$sym$$$$)))){
var G__25116 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__25116 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__25116,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$_DOT_)))){
var G__25117 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__25117 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__25117,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
var G__25118 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__25118 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__25118,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__4126__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
}
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.ReturnMap = (function (type,symbols,__meta,__extmap,__hash){
this.type = type;
this.symbols = symbols;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25123,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25127 = k25123;
var G__25127__$1 = (((G__25127 instanceof cljs.core.Keyword))?G__25127.fqn:null);
switch (G__25127__$1) {
case "type":
return self__.type;

break;
case "symbols":
return self__.symbols;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25123,else__4383__auto__);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25128){
var vec__25129 = p__25128;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25129,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25129,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.ReturnMap{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbols,self__.symbols],null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25122){
var self__ = this;
var G__25122__$1 = this;
return (new cljs.core.RecordIter((0),G__25122__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type,cljs.core.cst$kw$symbols], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25132 = (function (coll__4377__auto__){
return (-2025547471 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25132(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25124,other25125){
var self__ = this;
var this25124__$1 = this;
return (((!((other25125 == null)))) && ((this25124__$1.constructor === other25125.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25124__$1.type,other25125.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25124__$1.symbols,other25125.symbols)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25124__$1.__extmap,other25125.__extmap)));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,null,cljs.core.cst$kw$symbols,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25122){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25133 = cljs.core.keyword_identical_QMARK_;
var expr__25134 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25136 = cljs.core.cst$kw$type;
var G__25137 = expr__25134;
return (pred__25133.cljs$core$IFn$_invoke$arity$2 ? pred__25133.cljs$core$IFn$_invoke$arity$2(G__25136,G__25137) : pred__25133.call(null,G__25136,G__25137));
})())){
return (new datascript.parser.ReturnMap(G__25122,self__.symbols,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25138 = cljs.core.cst$kw$symbols;
var G__25139 = expr__25134;
return (pred__25133.cljs$core$IFn$_invoke$arity$2 ? pred__25133.cljs$core$IFn$_invoke$arity$2(G__25138,G__25139) : pred__25133.call(null,G__25138,G__25139));
})())){
return (new datascript.parser.ReturnMap(self__.type,G__25122,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25122),null));
}
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$symbols,self__.symbols,null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25122){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,G__25122,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25119){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.ReturnMap(datascript.parser.postwalk(self__.type,f25119),datascript.parser.postwalk(self__.symbols,f25119),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25120,acc25121){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25120,self__.symbols,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25120,self__.type,acc25121));
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25121){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25140 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25121,self__.type) : datascript.parser.collect_vars_acc.call(null,acc25121,self__.type));
var G__25141 = self__.symbols;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25140,G__25141) : datascript.parser.collect_vars_acc.call(null,G__25140,G__25141));
}));

(datascript.parser.ReturnMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type,cljs.core.cst$sym$symbols], null);
}));

(datascript.parser.ReturnMap.cljs$lang$type = true);

(datascript.parser.ReturnMap.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/ReturnMap",null,(1),null));
}));

(datascript.parser.ReturnMap.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/ReturnMap");
}));

/**
 * Positional factory function for datascript.parser/ReturnMap.
 */
datascript.parser.__GT_ReturnMap = (function datascript$parser$__GT_ReturnMap(type,symbols){
return (new datascript.parser.ReturnMap(type,symbols,null,null,null));
});

/**
 * Factory function for datascript.parser/ReturnMap, taking a map of keywords to field values.
 */
datascript.parser.map__GT_ReturnMap = (function datascript$parser$map__GT_ReturnMap(G__25126){
var extmap__4419__auto__ = (function (){var G__25142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25126,cljs.core.cst$kw$type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbols], 0));
if(cljs.core.record_QMARK_(G__25126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25142);
} else {
return G__25142;
}
})();
return (new datascript.parser.ReturnMap(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__25126),cljs.core.cst$kw$symbols.cljs$core$IFn$_invoke$arity$1(G__25126),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.parse_return_map = (function datascript$parser$parse_return_map(type,form){
if((((!(cljs.core.empty_QMARK_(form)))) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,form)))){
var G__25144 = type;
var G__25144__$1 = (((G__25144 instanceof cljs.core.Keyword))?G__25144.fqn:null);
switch (G__25144__$1) {
case "keys":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,form),null,null,null));

break;
case "syms":
return (new datascript.parser.ReturnMap(type,cljs.core.vec(form),null,null,null));

break;
case "strs":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,form),null,null,null));

break;
default:
return null;

}
} else {
return null;
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__4126__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :with clause, expected [ variable+ ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_with,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5718__auto__ = (function (){var or__4126__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_plain_variable(form);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var var$ = temp__5718__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding(form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__4126__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_in,cljs.core.cst$kw$form,form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25150,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25154 = k25150;
var G__25154__$1 = (((G__25154 instanceof cljs.core.Keyword))?G__25154.fqn:null);
switch (G__25154__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25150,else__4383__auto__);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25155){
var vec__25156 = p__25155;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25156,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25156,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Pattern{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25149){
var self__ = this;
var G__25149__$1 = this;
return (new cljs.core.RecordIter((0),G__25149__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25159 = (function (coll__4377__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25159(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25151,other25152){
var self__ = this;
var this25151__$1 = this;
return (((!((other25152 == null)))) && ((this25151__$1.constructor === other25152.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25151__$1.source,other25152.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25151__$1.pattern,other25152.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25151__$1.__extmap,other25152.__extmap)));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25149){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25160 = cljs.core.keyword_identical_QMARK_;
var expr__25161 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25163 = cljs.core.cst$kw$source;
var G__25164 = expr__25161;
return (pred__25160.cljs$core$IFn$_invoke$arity$2 ? pred__25160.cljs$core$IFn$_invoke$arity$2(G__25163,G__25164) : pred__25160.call(null,G__25163,G__25164));
})())){
return (new datascript.parser.Pattern(G__25149,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25165 = cljs.core.cst$kw$pattern;
var G__25166 = expr__25161;
return (pred__25160.cljs$core$IFn$_invoke$arity$2 ? pred__25160.cljs$core$IFn$_invoke$arity$2(G__25165,G__25166) : pred__25160.call(null,G__25165,G__25166));
})())){
return (new datascript.parser.Pattern(self__.source,G__25149,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25149),null));
}
}
}));

(datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pattern,self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25149){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__25149,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25146){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f25146),datascript.parser.postwalk(self__.pattern,f25146),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25147,acc25148){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25147,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25147,self__.source,acc25148));
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25148){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25167 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25148,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25148,self__.source));
var G__25168 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25167,G__25168) : datascript.parser.collect_vars_acc.call(null,G__25167,G__25168));
}));

(datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$pattern], null);
}));

(datascript.parser.Pattern.cljs$lang$type = true);

(datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
}));

(datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Pattern");
}));

/**
 * Positional factory function for datascript.parser/Pattern.
 */
datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pattern, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__25153){
var extmap__4419__auto__ = (function (){var G__25169 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25153,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pattern], 0));
if(cljs.core.record_QMARK_(G__25153)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25169);
} else {
return G__25169;
}
})();
return (new datascript.parser.Pattern(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25153),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__25153),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25175,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25179 = k25175;
var G__25179__$1 = (((G__25179 instanceof cljs.core.Keyword))?G__25179.fqn:null);
switch (G__25179__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25175,else__4383__auto__);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25180){
var vec__25181 = p__25180;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Predicate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25174){
var self__ = this;
var G__25174__$1 = this;
return (new cljs.core.RecordIter((0),G__25174__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25184 = (function (coll__4377__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25184(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25176,other25177){
var self__ = this;
var this25176__$1 = this;
return (((!((other25177 == null)))) && ((this25176__$1.constructor === other25177.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25176__$1.fn,other25177.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25176__$1.args,other25177.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25176__$1.__extmap,other25177.__extmap)));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25174){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25185 = cljs.core.keyword_identical_QMARK_;
var expr__25186 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25188 = cljs.core.cst$kw$fn;
var G__25189 = expr__25186;
return (pred__25185.cljs$core$IFn$_invoke$arity$2 ? pred__25185.cljs$core$IFn$_invoke$arity$2(G__25188,G__25189) : pred__25185.call(null,G__25188,G__25189));
})())){
return (new datascript.parser.Predicate(G__25174,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25190 = cljs.core.cst$kw$args;
var G__25191 = expr__25186;
return (pred__25185.cljs$core$IFn$_invoke$arity$2 ? pred__25185.cljs$core$IFn$_invoke$arity$2(G__25190,G__25191) : pred__25185.call(null,G__25190,G__25191));
})())){
return (new datascript.parser.Predicate(self__.fn,G__25174,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25174),null));
}
}
}));

(datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25174){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__25174,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25171){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f25171),datascript.parser.postwalk(self__.args,f25171),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25172,acc25173){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25172,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25172,self__.fn,acc25173));
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25173){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25192 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25173,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc25173,self__.fn));
var G__25193 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25192,G__25193) : datascript.parser.collect_vars_acc.call(null,G__25192,G__25193));
}));

(datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
}));

(datascript.parser.Predicate.cljs$lang$type = true);

(datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
}));

(datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Predicate");
}));

/**
 * Positional factory function for datascript.parser/Predicate.
 */
datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Predicate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__25178){
var extmap__4419__auto__ = (function (){var G__25194 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25178,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__25178)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25194);
} else {
return G__25194;
}
})();
return (new datascript.parser.Predicate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__25178),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__25178),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25200,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25204 = k25200;
var G__25204__$1 = (((G__25204 instanceof cljs.core.Keyword))?G__25204.fqn:null);
switch (G__25204__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25200,else__4383__auto__);

}
}));

(datascript.parser.Function.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25205){
var vec__25206 = p__25205;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25206,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25206,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Function{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25199){
var self__ = this;
var G__25199__$1 = this;
return (new cljs.core.RecordIter((0),G__25199__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args,cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25209 = (function (coll__4377__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25209(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25201,other25202){
var self__ = this;
var this25201__$1 = this;
return (((!((other25202 == null)))) && ((this25201__$1.constructor === other25202.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25201__$1.fn,other25202.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25201__$1.args,other25202.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25201__$1.binding,other25202.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25201__$1.__extmap,other25202.__extmap)));
}));

(datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$binding,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25199){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25210 = cljs.core.keyword_identical_QMARK_;
var expr__25211 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25213 = cljs.core.cst$kw$fn;
var G__25214 = expr__25211;
return (pred__25210.cljs$core$IFn$_invoke$arity$2 ? pred__25210.cljs$core$IFn$_invoke$arity$2(G__25213,G__25214) : pred__25210.call(null,G__25213,G__25214));
})())){
return (new datascript.parser.Function(G__25199,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25215 = cljs.core.cst$kw$args;
var G__25216 = expr__25211;
return (pred__25210.cljs$core$IFn$_invoke$arity$2 ? pred__25210.cljs$core$IFn$_invoke$arity$2(G__25215,G__25216) : pred__25210.call(null,G__25215,G__25216));
})())){
return (new datascript.parser.Function(self__.fn,G__25199,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25217 = cljs.core.cst$kw$binding;
var G__25218 = expr__25211;
return (pred__25210.cljs$core$IFn$_invoke$arity$2 ? pred__25210.cljs$core$IFn$_invoke$arity$2(G__25217,G__25218) : pred__25210.call(null,G__25217,G__25218));
})())){
return (new datascript.parser.Function(self__.fn,self__.args,G__25199,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25199),null));
}
}
}
}));

(datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$binding,self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25199){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__25199,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25196){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f25196),datascript.parser.postwalk(self__.args,f25196),datascript.parser.postwalk(self__.binding,f25196),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25197,acc25198){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25197,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25197,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25197,self__.fn,acc25198)));
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25198){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25219 = (function (){var G__25221 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25198,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc25198,self__.fn));
var G__25222 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25221,G__25222) : datascript.parser.collect_vars_acc.call(null,G__25221,G__25222));
})();
var G__25220 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25219,G__25220) : datascript.parser.collect_vars_acc.call(null,G__25219,G__25220));
}));

(datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args,cljs.core.cst$sym$binding], null);
}));

(datascript.parser.Function.cljs$lang$type = true);

(datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
}));

(datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Function");
}));

/**
 * Positional factory function for datascript.parser/Function.
 */
datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

/**
 * Factory function for datascript.parser/Function, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__25203){
var extmap__4419__auto__ = (function (){var G__25223 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25203,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args,cljs.core.cst$kw$binding], 0));
if(cljs.core.record_QMARK_(G__25203)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25223);
} else {
return G__25223;
}
})();
return (new datascript.parser.Function(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__25203),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__25203),cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__25203),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25229,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25233 = k25229;
var G__25233__$1 = (((G__25233 instanceof cljs.core.Keyword))?G__25233.fqn:null);
switch (G__25233__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25229,else__4383__auto__);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25234){
var vec__25235 = p__25234;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25235,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25235,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25228){
var self__ = this;
var G__25228__$1 = this;
return (new cljs.core.RecordIter((0),G__25228__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$name,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25238 = (function (coll__4377__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25238(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25230,other25231){
var self__ = this;
var this25230__$1 = this;
return (((!((other25231 == null)))) && ((this25230__$1.constructor === other25231.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25230__$1.source,other25231.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25230__$1.name,other25231.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25230__$1.args,other25231.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25230__$1.__extmap,other25231.__extmap)));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$source,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25228){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25239 = cljs.core.keyword_identical_QMARK_;
var expr__25240 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25242 = cljs.core.cst$kw$source;
var G__25243 = expr__25240;
return (pred__25239.cljs$core$IFn$_invoke$arity$2 ? pred__25239.cljs$core$IFn$_invoke$arity$2(G__25242,G__25243) : pred__25239.call(null,G__25242,G__25243));
})())){
return (new datascript.parser.RuleExpr(G__25228,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25244 = cljs.core.cst$kw$name;
var G__25245 = expr__25240;
return (pred__25239.cljs$core$IFn$_invoke$arity$2 ? pred__25239.cljs$core$IFn$_invoke$arity$2(G__25244,G__25245) : pred__25239.call(null,G__25244,G__25245));
})())){
return (new datascript.parser.RuleExpr(self__.source,G__25228,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25246 = cljs.core.cst$kw$args;
var G__25247 = expr__25240;
return (pred__25239.cljs$core$IFn$_invoke$arity$2 ? pred__25239.cljs$core$IFn$_invoke$arity$2(G__25246,G__25247) : pred__25239.call(null,G__25246,G__25247));
})())){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__25228,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25228),null));
}
}
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25228){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__25228,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25225){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f25225),datascript.parser.postwalk(self__.name,f25225),datascript.parser.postwalk(self__.args,f25225),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25226,acc25227){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25226,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25226,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25226,self__.source,acc25227)));
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25227){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25248 = (function (){var G__25250 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25227,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25227,self__.source));
var G__25251 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25250,G__25251) : datascript.parser.collect_vars_acc.call(null,G__25250,G__25251));
})();
var G__25249 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25248,G__25249) : datascript.parser.collect_vars_acc.call(null,G__25248,G__25249));
}));

(datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$name,cljs.core.cst$sym$args], null);
}));

(datascript.parser.RuleExpr.cljs$lang$type = true);

(datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
}));

(datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/RuleExpr");
}));

/**
 * Positional factory function for datascript.parser/RuleExpr.
 */
datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleExpr, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__25232){
var extmap__4419__auto__ = (function (){var G__25252 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25232,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__25232)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25252);
} else {
return G__25252;
}
})();
return (new datascript.parser.RuleExpr(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25232),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__25232),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__25232),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25258,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25262 = k25258;
var G__25262__$1 = (((G__25262 instanceof cljs.core.Keyword))?G__25262.fqn:null);
switch (G__25262__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25258,else__4383__auto__);

}
}));

(datascript.parser.Not.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25263){
var vec__25264 = p__25263;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25264,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25264,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Not{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25257){
var self__ = this;
var G__25257__$1 = this;
return (new cljs.core.RecordIter((0),G__25257__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25267 = (function (coll__4377__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25267(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25259,other25260){
var self__ = this;
var this25259__$1 = this;
return (((!((other25260 == null)))) && ((this25259__$1.constructor === other25260.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25259__$1.source,other25260.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25259__$1.vars,other25260.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25259__$1.clauses,other25260.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25259__$1.__extmap,other25260.__extmap)));
}));

(datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25257){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25268 = cljs.core.keyword_identical_QMARK_;
var expr__25269 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25271 = cljs.core.cst$kw$source;
var G__25272 = expr__25269;
return (pred__25268.cljs$core$IFn$_invoke$arity$2 ? pred__25268.cljs$core$IFn$_invoke$arity$2(G__25271,G__25272) : pred__25268.call(null,G__25271,G__25272));
})())){
return (new datascript.parser.Not(G__25257,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25273 = cljs.core.cst$kw$vars;
var G__25274 = expr__25269;
return (pred__25268.cljs$core$IFn$_invoke$arity$2 ? pred__25268.cljs$core$IFn$_invoke$arity$2(G__25273,G__25274) : pred__25268.call(null,G__25273,G__25274));
})())){
return (new datascript.parser.Not(self__.source,G__25257,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25275 = cljs.core.cst$kw$clauses;
var G__25276 = expr__25269;
return (pred__25268.cljs$core$IFn$_invoke$arity$2 ? pred__25268.cljs$core$IFn$_invoke$arity$2(G__25275,G__25276) : pred__25268.call(null,G__25275,G__25276));
})())){
return (new datascript.parser.Not(self__.source,self__.vars,G__25257,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25257),null));
}
}
}
}));

(datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$vars,self__.vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25257){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__25257,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25254){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f25254),datascript.parser.postwalk(self__.vars,f25254),datascript.parser.postwalk(self__.clauses,f25254),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25255,acc25256){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25255,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25255,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25255,self__.source,acc25256)));
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25256){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25277 = (function (){var G__25279 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25256,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25256,self__.source));
var G__25280 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25279,G__25280) : datascript.parser.collect_vars_acc.call(null,G__25279,G__25280));
})();
var G__25278 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25277,G__25278) : datascript.parser.collect_vars_acc.call(null,G__25277,G__25278));
}));

(datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
}));

(datascript.parser.Not.cljs$lang$type = true);

(datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
}));

(datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Not");
}));

/**
 * Positional factory function for datascript.parser/Not.
 */
datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Not, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__25261){
var extmap__4419__auto__ = (function (){var G__25281 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25261,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], 0));
if(cljs.core.record_QMARK_(G__25261)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25281);
} else {
return G__25281;
}
})();
return (new datascript.parser.Not(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25261),cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__25261),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25261),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25287,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25291 = k25287;
var G__25291__$1 = (((G__25291 instanceof cljs.core.Keyword))?G__25291.fqn:null);
switch (G__25291__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25287,else__4383__auto__);

}
}));

(datascript.parser.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25292){
var vec__25293 = p__25292;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25293,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25293,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Or{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25286){
var self__ = this;
var G__25286__$1 = this;
return (new cljs.core.RecordIter((0),G__25286__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25296 = (function (coll__4377__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25296(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25288,other25289){
var self__ = this;
var this25288__$1 = this;
return (((!((other25289 == null)))) && ((this25288__$1.constructor === other25289.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25288__$1.source,other25289.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25288__$1.rule_vars,other25289.rule_vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25288__$1.clauses,other25289.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25288__$1.__extmap,other25289.__extmap)));
}));

(datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rule_DASH_vars,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25286){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25297 = cljs.core.keyword_identical_QMARK_;
var expr__25298 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25300 = cljs.core.cst$kw$source;
var G__25301 = expr__25298;
return (pred__25297.cljs$core$IFn$_invoke$arity$2 ? pred__25297.cljs$core$IFn$_invoke$arity$2(G__25300,G__25301) : pred__25297.call(null,G__25300,G__25301));
})())){
return (new datascript.parser.Or(G__25286,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25302 = cljs.core.cst$kw$rule_DASH_vars;
var G__25303 = expr__25298;
return (pred__25297.cljs$core$IFn$_invoke$arity$2 ? pred__25297.cljs$core$IFn$_invoke$arity$2(G__25302,G__25303) : pred__25297.call(null,G__25302,G__25303));
})())){
return (new datascript.parser.Or(self__.source,G__25286,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25304 = cljs.core.cst$kw$clauses;
var G__25305 = expr__25298;
return (pred__25297.cljs$core$IFn$_invoke$arity$2 ? pred__25297.cljs$core$IFn$_invoke$arity$2(G__25304,G__25305) : pred__25297.call(null,G__25304,G__25305));
})())){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__25286,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25286),null));
}
}
}
}));

(datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25286){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__25286,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25283){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f25283),datascript.parser.postwalk(self__.rule_vars,f25283),datascript.parser.postwalk(self__.clauses,f25283),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25284,acc25285){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25284,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25284,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25284,self__.source,acc25285)));
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25285){
var self__ = this;
var ___23477__auto____$1 = this;
var G__25306 = (function (){var G__25308 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25285,self__.source) : datascript.parser.collect_vars_acc.call(null,acc25285,self__.source));
var G__25309 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25308,G__25309) : datascript.parser.collect_vars_acc.call(null,G__25308,G__25309));
})();
var G__25307 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25306,G__25307) : datascript.parser.collect_vars_acc.call(null,G__25306,G__25307));
}));

(datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$rule_DASH_vars,cljs.core.cst$sym$clauses], null);
}));

(datascript.parser.Or.cljs$lang$type = true);

(datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
}));

(datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Or");
}));

/**
 * Positional factory function for datascript.parser/Or.
 */
datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Or, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__25290){
var extmap__4419__auto__ = (function (){var G__25310 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25290,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], 0));
if(cljs.core.record_QMARK_(G__25290)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25310);
} else {
return G__25310;
}
})();
return (new datascript.parser.Or(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__25290),cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(G__25290),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25290),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25316,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25320 = k25316;
var G__25320__$1 = (((G__25320 instanceof cljs.core.Keyword))?G__25320.fqn:null);
switch (G__25320__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25316,else__4383__auto__);

}
}));

(datascript.parser.And.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25321){
var vec__25322 = p__25321;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25322,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.And{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25315){
var self__ = this;
var G__25315__$1 = this;
return (new cljs.core.RecordIter((0),G__25315__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25325 = (function (coll__4377__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25325(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25317,other25318){
var self__ = this;
var this25317__$1 = this;
return (((!((other25318 == null)))) && ((this25317__$1.constructor === other25318.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25317__$1.clauses,other25318.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25317__$1.__extmap,other25318.__extmap)));
}));

(datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25315){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25326 = cljs.core.keyword_identical_QMARK_;
var expr__25327 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25329 = cljs.core.cst$kw$clauses;
var G__25330 = expr__25327;
return (pred__25326.cljs$core$IFn$_invoke$arity$2 ? pred__25326.cljs$core$IFn$_invoke$arity$2(G__25329,G__25330) : pred__25326.call(null,G__25329,G__25330));
})())){
return (new datascript.parser.And(G__25315,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25315),null));
}
}));

(datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25315){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__25315,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25312){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f25312),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25313,acc25314){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25313,self__.clauses,acc25314);
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25314){
var self__ = this;
var ___23477__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc25314,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc25314,self__.clauses));
}));

(datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clauses], null);
}));

(datascript.parser.And.cljs$lang$type = true);

(datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
}));

(datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/And");
}));

/**
 * Positional factory function for datascript.parser/And.
 */
datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/And, taking a map of keywords to field values.
 */
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__25319){
var extmap__4419__auto__ = (function (){var G__25331 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25319,cljs.core.cst$kw$clauses);
if(cljs.core.record_QMARK_(G__25319)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25331);
} else {
return G__25331;
}
})();
return (new datascript.parser.And(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25319),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__4126__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_(form)){
var temp__5718__auto__ = datascript.parser.parse_src_var(cljs.core.first(form));
if(cljs.core.truth_(temp__5718__auto__)){
var source_STAR_ = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next(form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25333 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25333,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25333,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5720__auto____$1)){
var pattern_STAR_ = temp__5720__auto____$1;
if((!(cljs.core.empty_QMARK_(pattern_STAR_)))){
return datascript.parser.with_source((new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Pattern could not be empty",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__25336 = form;
var seq__25337 = cljs.core.seq(vec__25336);
var first__25338 = cljs.core.first(seq__25337);
var seq__25337__$1 = cljs.core.next(seq__25337);
var fn = first__25338;
var args = seq__25337__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__4126__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return args_STAR_;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(datascript.parser.of_size_QMARK_(form,(1))){
var temp__5720__auto__ = datascript.parser.parse_call(cljs.core.first(form));
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25339 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25339,(1),null);
return datascript.parser.with_source((new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(datascript.parser.of_size_QMARK_(form,(2))){
var vec__25342 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25342,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25342,(1),null);
var temp__5720__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25345 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25345,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25345,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_binding(binding);
if(cljs.core.truth_(temp__5720__auto____$1)){
var binding_STAR_ = temp__5720__auto____$1;
return datascript.parser.with_source((new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25348 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348,(1),null);
var vec__25351 = next_form;
var seq__25352 = cljs.core.seq(vec__25351);
var first__25353 = cljs.core.first(seq__25352);
var seq__25352__$1 = cljs.core.next(seq__25352);
var name = first__25353;
var args = seq__25352__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol(name);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rule-expr requires at least one argument",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,form.vars);
} else {
if((form instanceof datascript.parser.Or)){
var G__25354 = acc;
var G__25355 = form.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__25354,G__25355) : datascript.parser.collect_vars_acc.call(null,G__25354,G__25355));
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars(form,acc);
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc(cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(datascript.parser.collect_vars(form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(required,free,form){
if(((cljs.core.empty_QMARK_(required)) && (cljs.core.empty_QMARK_(free)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Join variables should not be empty",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars(null,cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25357 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(1),null);
var vec__25360 = next_form;
var seq__25361 = cljs.core.seq(vec__25360);
var first__25362 = cljs.core.first(seq__25361);
var seq__25361__$1 = cljs.core.next(seq__25361);
var sym = first__25362;
var clauses = seq__25361__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not,sym)){
var temp__5718__auto__ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct(clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25363 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25363,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25363,(1),null);
var vec__25366 = next_form;
var seq__25367 = cljs.core.seq(vec__25366);
var first__25368 = cljs.core.first(seq__25367);
var seq__25367__$1 = cljs.core.next(seq__25367);
var sym = first__25368;
var first__25368__$1 = cljs.core.first(seq__25367__$1);
var seq__25367__$2 = cljs.core.next(seq__25367__$1);
var vars = first__25368__$1;
var clauses = seq__25367__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__4115__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return clauses_STAR_;
} else {
return and__4115__auto__;
}
})())){
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__25369 = clause;
var map__25369__$1 = (((((!((map__25369 == null))))?(((((map__25369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25369):map__25369);
var map__25370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25369__$1,cljs.core.cst$kw$rule_DASH_vars);
var map__25370__$1 = (((((!((map__25370 == null))))?(((((map__25370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25370):map__25370);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25370__$1,cljs.core.cst$kw$required);
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25370__$1,cljs.core.cst$kw$free);
datascript.parser.validate_join_vars(required,free,form);

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,cljs.core.first(form))))){
var clauses_STAR_ = (function (){var G__25373 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__25373) : datascript.parser.parse_clauses.call(null,G__25373));
})();
if(cljs.core.truth_(cljs.core.not_empty(clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'and' clause, expected [ 'and' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25374 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25374,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25374,(1),null);
var vec__25377 = next_form;
var seq__25378 = cljs.core.seq(vec__25377);
var first__25379 = cljs.core.first(seq__25378);
var seq__25378__$1 = cljs.core.next(seq__25378);
var sym = first__25379;
var clauses = seq__25378__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,sym)){
var temp__5718__auto__ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct(clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25380 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25380,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25380,(1),null);
var vec__25383 = next_form;
var seq__25384 = cljs.core.seq(vec__25383);
var first__25385 = cljs.core.first(seq__25384);
var seq__25384__$1 = cljs.core.next(seq__25384);
var sym = first__25385;
var first__25385__$1 = cljs.core.first(seq__25384__$1);
var seq__25384__$2 = cljs.core.next(seq__25384__$1);
var vars = first__25385__$1;
var clauses = seq__25384__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__4115__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return clauses_STAR_;
} else {
return and__4115__auto__;
}
})())){
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__4126__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq(datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__4126__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :where clause, expected [clause+]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25391,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25395 = k25391;
var G__25395__$1 = (((G__25395 instanceof cljs.core.Keyword))?G__25395.fqn:null);
switch (G__25395__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25391,else__4383__auto__);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25396){
var vec__25397 = p__25396;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25397,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25397,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25390){
var self__ = this;
var G__25390__$1 = this;
return (new cljs.core.RecordIter((0),G__25390__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25400 = (function (coll__4377__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25400(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25392,other25393){
var self__ = this;
var this25392__$1 = this;
return (((!((other25393 == null)))) && ((this25392__$1.constructor === other25393.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25392__$1.vars,other25393.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25392__$1.clauses,other25393.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25392__$1.__extmap,other25393.__extmap)));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25390){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25401 = cljs.core.keyword_identical_QMARK_;
var expr__25402 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25404 = cljs.core.cst$kw$vars;
var G__25405 = expr__25402;
return (pred__25401.cljs$core$IFn$_invoke$arity$2 ? pred__25401.cljs$core$IFn$_invoke$arity$2(G__25404,G__25405) : pred__25401.call(null,G__25404,G__25405));
})())){
return (new datascript.parser.RuleBranch(G__25390,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25406 = cljs.core.cst$kw$clauses;
var G__25407 = expr__25402;
return (pred__25401.cljs$core$IFn$_invoke$arity$2 ? pred__25401.cljs$core$IFn$_invoke$arity$2(G__25406,G__25407) : pred__25401.call(null,G__25406,G__25407));
})())){
return (new datascript.parser.RuleBranch(self__.vars,G__25390,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25390),null));
}
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$vars,self__.vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25390){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__25390,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25387){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f25387),datascript.parser.postwalk(self__.clauses,f25387),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25388,acc25389){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25388,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25388,self__.vars,acc25389));
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25389){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc25389,self__.vars),self__.clauses);
}));

(datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
}));

(datascript.parser.RuleBranch.cljs$lang$type = true);

(datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
}));

(datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/RuleBranch");
}));

/**
 * Positional factory function for datascript.parser/RuleBranch.
 */
datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleBranch, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__25394){
var extmap__4419__auto__ = (function (){var G__25408 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25394,cljs.core.cst$kw$vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clauses], 0));
if(cljs.core.record_QMARK_(G__25394)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25408);
} else {
return G__25408;
}
})();
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__25394),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__25394),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25414,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25418 = k25414;
var G__25418__$1 = (((G__25418 instanceof cljs.core.Keyword))?G__25418.fqn:null);
switch (G__25418__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25414,else__4383__auto__);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25419){
var vec__25420 = p__25419;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25420,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25420,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Rule{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25413){
var self__ = this;
var G__25413__$1 = this;
return (new cljs.core.RecordIter((0),G__25413__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$branches], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25423 = (function (coll__4377__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25423(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25415,other25416){
var self__ = this;
var this25415__$1 = this;
return (((!((other25416 == null)))) && ((this25415__$1.constructor === other25416.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25415__$1.name,other25416.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25415__$1.branches,other25416.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25415__$1.__extmap,other25416.__extmap)));
}));

(datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$branches,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25413){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25424 = cljs.core.keyword_identical_QMARK_;
var expr__25425 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25427 = cljs.core.cst$kw$name;
var G__25428 = expr__25425;
return (pred__25424.cljs$core$IFn$_invoke$arity$2 ? pred__25424.cljs$core$IFn$_invoke$arity$2(G__25427,G__25428) : pred__25424.call(null,G__25427,G__25428));
})())){
return (new datascript.parser.Rule(G__25413,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25429 = cljs.core.cst$kw$branches;
var G__25430 = expr__25425;
return (pred__25424.cljs$core$IFn$_invoke$arity$2 ? pred__25424.cljs$core$IFn$_invoke$arity$2(G__25429,G__25430) : pred__25424.call(null,G__25429,G__25430));
})())){
return (new datascript.parser.Rule(self__.name,G__25413,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25413),null));
}
}
}));

(datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$branches,self__.branches,null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25413){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__25413,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25410){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f25410),datascript.parser.postwalk(self__.branches,f25410),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25411,acc25412){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25411,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25411,self__.name,acc25412));
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25412){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc25412,self__.name),self__.branches);
}));

(datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$branches], null);
}));

(datascript.parser.Rule.cljs$lang$type = true);

(datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
}));

(datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Rule");
}));

/**
 * Positional factory function for datascript.parser/Rule.
 */
datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

/**
 * Factory function for datascript.parser/Rule, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__25417){
var extmap__4419__auto__ = (function (){var G__25431 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25417,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$branches], 0));
if(cljs.core.record_QMARK_(G__25417)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25431);
} else {
return G__25431;
}
})();
return (new datascript.parser.Rule(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__25417),cljs.core.cst$kw$branches.cljs$core$IFn$_invoke$arity$1(G__25417),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__25433 = form;
var seq__25434 = cljs.core.seq(vec__25433);
var first__25435 = cljs.core.first(seq__25434);
var seq__25434__$1 = cljs.core.next(seq__25434);
var head = first__25435;
var clauses = seq__25434__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__25436 = head;
var seq__25437 = cljs.core.seq(vec__25436);
var first__25438 = cljs.core.first(seq__25437);
var seq__25437__$1 = cljs.core.next(seq__25437);
var name = first__25438;
var vars = seq__25437__$1;
var name_STAR_ = (function (){var or__4126__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule name, expected plain-symbol",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__4126__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Rule branch should have clauses",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name_STAR_,cljs.core.cst$kw$vars,vars_STAR_,cljs.core.cst$kw$clauses,clauses_STAR_], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule head, expected [rule-name rule-vars], got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule, expected [rule-head clause+]",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(cljs.core.first(branches));
var arity0 = datascript.parser.rule_vars_arity(vars0);
var seq__25439 = cljs.core.seq(cljs.core.next(branches));
var chunk__25441 = null;
var count__25442 = (0);
var i__25443 = (0);
while(true){
if((i__25443 < count__25442)){
var b = chunk__25441.cljs$core$IIndexed$_nth$arity$2(null,i__25443);
var vars_25445 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_25445))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_25445)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}


var G__25446 = seq__25439;
var G__25447 = chunk__25441;
var G__25448 = count__25442;
var G__25449 = (i__25443 + (1));
seq__25439 = G__25446;
chunk__25441 = G__25447;
count__25442 = G__25448;
i__25443 = G__25449;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__25439);
if(temp__5720__auto__){
var seq__25439__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25439__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__25439__$1);
var G__25450 = cljs.core.chunk_rest(seq__25439__$1);
var G__25451 = c__4556__auto__;
var G__25452 = cljs.core.count(c__4556__auto__);
var G__25453 = (0);
seq__25439 = G__25450;
chunk__25441 = G__25451;
count__25442 = G__25452;
i__25443 = G__25453;
continue;
} else {
var b = cljs.core.first(seq__25439__$1);
var vars_25454 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_25454))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_25454)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}


var G__25455 = cljs.core.next(seq__25439__$1);
var G__25456 = null;
var G__25457 = (0);
var G__25458 = (0);
seq__25439 = G__25455;
chunk__25441 = G__25456;
count__25442 = G__25457;
i__25443 = G__25458;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec((function (){var iter__4529__auto__ = (function datascript$parser$parse_rules_$_iter__25460(s__25461){
return (new cljs.core.LazySeq(null,(function (){
var s__25461__$1 = s__25461;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__25461__$1);
if(temp__5720__auto__){
var s__25461__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25461__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__25461__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__25463 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__25462 = (0);
while(true){
if((i__25462 < size__4528__auto__)){
var vec__25464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__25462);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25464,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25464,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__25462,vec__25464,name,branches,c__4527__auto__,size__4528__auto__,b__25463,s__25461__$2,temp__5720__auto__){
return (function (p1__25459_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__25459_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__25459_SHARP_),null,null,null));
});})(i__25462,vec__25464,name,branches,c__4527__auto__,size__4528__auto__,b__25463,s__25461__$2,temp__5720__auto__))
,branches);
cljs.core.chunk_append(b__25463,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__25470 = (i__25462 + (1));
i__25462 = G__25470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25463),datascript$parser$parse_rules_$_iter__25460(cljs.core.chunk_rest(s__25461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25463),null);
}
} else {
var vec__25467 = cljs.core.first(s__25461__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25467,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25467,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__25467,name,branches,s__25461__$2,temp__5720__auto__){
return (function (p1__25459_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__25459_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__25459_SHARP_),null,null,null));
});})(vec__25467,name,branches,s__25461__$2,temp__5720__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__25460(cljs.core.rest(s__25461__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.group_by(cljs.core.cst$kw$name,datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qreturn_map,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qreturn_map = qreturn_map;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k25475,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__25479 = k25475;
var G__25479__$1 = (((G__25479 instanceof cljs.core.Keyword))?G__25479.fqn:null);
switch (G__25479__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qreturn-map":
return self__.qreturn_map;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25475,else__4383__auto__);

}
}));

(datascript.parser.Query.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__25480){
var vec__25481 = p__25480;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25481,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25481,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.parser.Query{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qfind,self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qwith,self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qreturn_DASH_map,self__.qreturn_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qin,self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qwhere,self__.qwhere],null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25474){
var self__ = this;
var G__25474__$1 = this;
return (new cljs.core.RecordIter((0),G__25474__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$qfind,cljs.core.cst$kw$qwith,cljs.core.cst$kw$qreturn_DASH_map,cljs.core.cst$kw$qin,cljs.core.cst$kw$qwhere], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__25484 = (function (coll__4377__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__25484(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25476,other25477){
var self__ = this;
var this25476__$1 = this;
return (((!((other25477 == null)))) && ((this25476__$1.constructor === other25477.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25476__$1.qfind,other25477.qfind)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25476__$1.qwith,other25477.qwith)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25476__$1.qreturn_map,other25477.qreturn_map)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25476__$1.qin,other25477.qin)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25476__$1.qwhere,other25477.qwhere)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25476__$1.__extmap,other25477.__extmap)));
}));

(datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$qfind,null,cljs.core.cst$kw$qwhere,null,cljs.core.cst$kw$qin,null,cljs.core.cst$kw$qwith,null,cljs.core.cst$kw$qreturn_DASH_map,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__25474){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__25485 = cljs.core.keyword_identical_QMARK_;
var expr__25486 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__25488 = cljs.core.cst$kw$qfind;
var G__25489 = expr__25486;
return (pred__25485.cljs$core$IFn$_invoke$arity$2 ? pred__25485.cljs$core$IFn$_invoke$arity$2(G__25488,G__25489) : pred__25485.call(null,G__25488,G__25489));
})())){
return (new datascript.parser.Query(G__25474,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25490 = cljs.core.cst$kw$qwith;
var G__25491 = expr__25486;
return (pred__25485.cljs$core$IFn$_invoke$arity$2 ? pred__25485.cljs$core$IFn$_invoke$arity$2(G__25490,G__25491) : pred__25485.call(null,G__25490,G__25491));
})())){
return (new datascript.parser.Query(self__.qfind,G__25474,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25492 = cljs.core.cst$kw$qreturn_DASH_map;
var G__25493 = expr__25486;
return (pred__25485.cljs$core$IFn$_invoke$arity$2 ? pred__25485.cljs$core$IFn$_invoke$arity$2(G__25492,G__25493) : pred__25485.call(null,G__25492,G__25493));
})())){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__25474,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25494 = cljs.core.cst$kw$qin;
var G__25495 = expr__25486;
return (pred__25485.cljs$core$IFn$_invoke$arity$2 ? pred__25485.cljs$core$IFn$_invoke$arity$2(G__25494,G__25495) : pred__25485.call(null,G__25494,G__25495));
})())){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,G__25474,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25496 = cljs.core.cst$kw$qwhere;
var G__25497 = expr__25486;
return (pred__25485.cljs$core$IFn$_invoke$arity$2 ? pred__25485.cljs$core$IFn$_invoke$arity$2(G__25496,G__25497) : pred__25485.call(null,G__25496,G__25497));
})())){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,G__25474,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__25474),null));
}
}
}
}
}
}));

(datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$qfind,self__.qfind,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$qwith,self__.qwith,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$qreturn_DASH_map,self__.qreturn_map,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$qin,self__.qin,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$qwhere,self__.qwhere,null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__25474){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,G__25474,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__23474__auto__,f25471){
var self__ = this;
var this__23474__auto____$1 = this;
var new__23475__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.qfind,f25471),datascript.parser.postwalk(self__.qwith,f25471),datascript.parser.postwalk(self__.qreturn_map,f25471),datascript.parser.postwalk(self__.qin,f25471),datascript.parser.postwalk(self__.qwhere,f25471),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__23474__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__23476__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__23475__auto__,meta__23476__auto__);
} else {
return new__23475__auto__;
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___23477__auto__,pred25472,acc25473){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25472,self__.qwhere,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25472,self__.qin,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25472,self__.qreturn_map,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25472,self__.qwith,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred25472,self__.qfind,acc25473)))));
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___23477__auto__,acc25473){
var self__ = this;
var ___23477__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc25473,self__.qfind),self__.qwith),self__.qreturn_map),self__.qin),self__.qwhere);
}));

(datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$qfind,cljs.core.cst$sym$qwith,cljs.core.cst$sym$qreturn_DASH_map,cljs.core.cst$sym$qin,cljs.core.cst$sym$qwhere], null);
}));

(datascript.parser.Query.cljs$lang$type = true);

(datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
}));

(datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.parser/Query");
}));

/**
 * Positional factory function for datascript.parser/Query.
 */
datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qreturn_map,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qreturn_map,qin,qwhere,null,null,null));
});

/**
 * Factory function for datascript.parser/Query, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__25478){
var extmap__4419__auto__ = (function (){var G__25498 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25478,cljs.core.cst$kw$qfind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$qwith,cljs.core.cst$kw$qreturn_DASH_map,cljs.core.cst$kw$qin,cljs.core.cst$kw$qwhere], 0));
if(cljs.core.record_QMARK_(G__25478)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25498);
} else {
return G__25498;
}
})();
return (new datascript.parser.Query(cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(G__25478),cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(G__25478),cljs.core.cst$kw$qreturn_DASH_map.cljs$core$IFn$_invoke$arity$1(G__25478),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(G__25478),cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(G__25478),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5718__auto__ = cljs.core.first(qs);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
if((q instanceof cljs.core.Keyword)){
var G__25500 = parsed;
var G__25501 = q;
var G__25502 = cljs.core.next(qs);
parsed = G__25500;
key = G__25501;
qs = G__25502;
continue;
} else {
var G__25503 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__25504 = key;
var G__25505 = cljs.core.next(qs);
parsed = G__25503;
key = G__25504;
qs = G__25505;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.explicit_input = (function datascript$parser$explicit_input(parsed){
var source = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(parsed);
if((parsed instanceof datascript.parser.Pattern)){
return source;
} else {
if((!((source == null)))){
if((!((source instanceof datascript.parser.DefaultSrc)))){
return source;
} else {
return null;
}
} else {
return null;
}
}
});
datascript.parser.default_in = (function datascript$parser$default_in(qwhere){
if((!(cljs.core.empty_QMARK_(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(datascript.parser.explicit_input,qwhere))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form,form_map){
var find_vars_25512 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_25513 = cljs.core.set(cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(q));
var in_vars_25514 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_25515 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(q)));
var unknown_25516 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_25512,with_vars_25513),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_25515,in_vars_25514));
var shared_25517 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_25512,with_vars_25513);
if(cljs.core.empty_QMARK_(unknown_25516)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query for unknown vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_25516)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_25516,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(shared_25517)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":find and :with should not use same variables: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,shared_25517)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,shared_25517,cljs.core.cst$kw$form,form], null));
}

var temp__5724__auto___25518 = cljs.core.cst$kw$qreturn_DASH_map.cljs$core$IFn$_invoke$arity$1(q);
if((temp__5724__auto___25518 == null)){
} else {
var return_map_25519 = temp__5724__auto___25518;
if((cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindScalar)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(return_map_25519)], 0))," does not work with single-scalar :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
} else {
}

if((cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindColl)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(return_map_25519)], 0))," does not work with collection :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
} else {
}
}

var temp__5724__auto___25520 = cljs.core.cst$kw$symbols.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$qreturn_DASH_map.cljs$core$IFn$_invoke$arity$1(q));
if((temp__5724__auto___25520 == null)){
} else {
var return_symbols_25521 = temp__5724__auto___25520;
var find_elements_25522 = datascript.parser.find_elements(cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(return_symbols_25521),cljs.core.count(find_elements_25522))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Count of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$qreturn_DASH_map.cljs$core$IFn$_invoke$arity$1(q))], 0))," must match count of :find"].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$return_DASH_map,cljs.core.cons(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$qreturn_DASH_map.cljs$core$IFn$_invoke$arity$1(q)),return_symbols_25521),cljs.core.cst$kw$find,find_elements_25522,cljs.core.cst$kw$form,form], null));
}
}

if(((1) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keys.cljs$core$IFn$_invoke$arity$1(form_map),cljs.core.cst$kw$syms.cljs$core$IFn$_invoke$arity$1(form_map),cljs.core.cst$kw$strs.cljs$core$IFn$_invoke$arity$1(form_map)], null))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Only one of :keys/:syms/:strs must be present",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
} else {
}

var in_vars_25523 = datascript.parser.collect_vars(cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
var in_sources_25524 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__25506_SHARP_){
return (p1__25506_SHARP_ instanceof datascript.parser.SrcVar);
}),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
var in_rules_25525 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__25507_SHARP_){
return (p1__25507_SHARP_ instanceof datascript.parser.RulesVar);
}),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__4115__auto__ = datascript.parser.distinct_QMARK_(in_vars_25523);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_25524);
if(cljs.core.truth_(and__4115__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_25525);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :in should be distinct",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var with_vars_25526 = datascript.parser.collect_vars(cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_25526))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :with should be distinct",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var in_sources_25527 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__25508_SHARP_){
return (p1__25508_SHARP_ instanceof datascript.parser.SrcVar);
}),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_25528 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__25509_SHARP_){
return (p1__25509_SHARP_ instanceof datascript.parser.SrcVar);
}),cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_25529 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_25528,in_sources_25527);
if(cljs.core.empty_QMARK_(unknown_25529)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Where uses unknown source vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_25529)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_25529,cljs.core.cst$kw$form,form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__25510_SHARP_){
return (p1__25510_SHARP_ instanceof datascript.parser.RuleExpr);
}),cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__25511_SHARP_){
return (p1__25511_SHARP_ instanceof datascript.parser.RulesVar);
}),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
if((((!(cljs.core.empty_QMARK_(rule_exprs)))) && (cljs.core.empty_QMARK_(rules_vars)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing rules var '%' in :in",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_(q))?q:((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(q):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Query should be a vector or a map",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,q], null))})()
));
var qwhere = datascript.parser.parse_where(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY));
var res = datascript.parser.map__GT_Query(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$qfind,datascript.parser.parse_find(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(qm)),cljs.core.cst$kw$qwith,(function (){var temp__5720__auto__ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5720__auto__)){
var with$ = temp__5720__auto__;
return datascript.parser.parse_with(with$);
} else {
return null;
}
})(),cljs.core.cst$kw$qreturn_DASH_map,(function (){var or__4126__auto__ = datascript.parser.parse_return_map(cljs.core.cst$kw$keys,cljs.core.cst$kw$keys.cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.parser.parse_return_map(cljs.core.cst$kw$syms,cljs.core.cst$kw$syms.cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return datascript.parser.parse_return_map(cljs.core.cst$kw$strs,cljs.core.cst$kw$strs.cljs$core$IFn$_invoke$arity$1(qm));
}
}
})(),cljs.core.cst$kw$qin,datascript.parser.parse_in((function (){var or__4126__auto__ = cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.parser.default_in(qwhere);
}
})()),cljs.core.cst$kw$qwhere,qwhere], null));
datascript.parser.validate_query(res,q,qm);

return res;
});
