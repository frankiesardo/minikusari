// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



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
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k26198,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__26202 = k26198;
var G__26202__$1 = (((G__26202 instanceof cljs.core.Keyword))?G__26202.fqn:null);
switch (G__26202__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26198,else__4383__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__26203){
var vec__26204 = p__26203;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26204,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26204,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.query.Context{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26197){
var self__ = this;
var G__26197__$1 = this;
return (new cljs.core.RecordIter((0),G__26197__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__26207 = (function (coll__4377__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__26207(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26199,other26200){
var self__ = this;
var this26199__$1 = this;
return (((!((other26200 == null)))) && ((this26199__$1.constructor === other26200.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26199__$1.rels,other26200.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26199__$1.sources,other26200.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26199__$1.rules,other26200.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26199__$1.__extmap,other26200.__extmap)));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sources,null,cljs.core.cst$kw$rules,null,cljs.core.cst$kw$rels,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__26197){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__26208 = cljs.core.keyword_identical_QMARK_;
var expr__26209 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__26211 = cljs.core.cst$kw$rels;
var G__26212 = expr__26209;
return (pred__26208.cljs$core$IFn$_invoke$arity$2 ? pred__26208.cljs$core$IFn$_invoke$arity$2(G__26211,G__26212) : pred__26208.call(null,G__26211,G__26212));
})())){
return (new datascript.query.Context(G__26197,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26213 = cljs.core.cst$kw$sources;
var G__26214 = expr__26209;
return (pred__26208.cljs$core$IFn$_invoke$arity$2 ? pred__26208.cljs$core$IFn$_invoke$arity$2(G__26213,G__26214) : pred__26208.call(null,G__26213,G__26214));
})())){
return (new datascript.query.Context(self__.rels,G__26197,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26215 = cljs.core.cst$kw$rules;
var G__26216 = expr__26209;
return (pred__26208.cljs$core$IFn$_invoke$arity$2 ? pred__26208.cljs$core$IFn$_invoke$arity$2(G__26215,G__26216) : pred__26208.call(null,G__26215,G__26216));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__26197,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__26197),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$rels,self__.rels,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sources,self__.sources,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rules,self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__26197){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__26197,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rels,cljs.core.cst$sym$sources,cljs.core.cst$sym$rules], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__26201){
var extmap__4419__auto__ = (function (){var G__26217 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26201,cljs.core.cst$kw$rels,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0));
if(cljs.core.record_QMARK_(G__26201)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26217);
} else {
return G__26217;
}
})();
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__26201),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__26201),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__26201),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k26220,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__26224 = k26220;
var G__26224__$1 = (((G__26224 instanceof cljs.core.Keyword))?G__26224.fqn:null);
switch (G__26224__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26220,else__4383__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__26225){
var vec__26226 = p__26225;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26226,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26226,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#datascript.query.Relation{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26219){
var self__ = this;
var G__26219__$1 = this;
return (new cljs.core.RecordIter((0),G__26219__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__26229 = (function (coll__4377__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__26229(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26221,other26222){
var self__ = this;
var this26221__$1 = this;
return (((!((other26222 == null)))) && ((this26221__$1.constructor === other26222.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26221__$1.attrs,other26222.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26221__$1.tuples,other26222.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26221__$1.__extmap,other26222.__extmap)));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tuples,null,cljs.core.cst$kw$attrs,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__26219){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__26230 = cljs.core.keyword_identical_QMARK_;
var expr__26231 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__26233 = cljs.core.cst$kw$attrs;
var G__26234 = expr__26231;
return (pred__26230.cljs$core$IFn$_invoke$arity$2 ? pred__26230.cljs$core$IFn$_invoke$arity$2(G__26233,G__26234) : pred__26230.call(null,G__26233,G__26234));
})())){
return (new datascript.query.Relation(G__26219,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26235 = cljs.core.cst$kw$tuples;
var G__26236 = expr__26231;
return (pred__26230.cljs$core$IFn$_invoke$arity$2 ? pred__26230.cljs$core$IFn$_invoke$arity$2(G__26235,G__26236) : pred__26230.call(null,G__26235,G__26236));
})())){
return (new datascript.query.Relation(self__.attrs,G__26219,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__26219),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$attrs,self__.attrs,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$tuples,self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__26219){
var self__ = this;
var this__4379__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__26219,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attrs,cljs.core.cst$sym$tuples], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__26223){
var extmap__4419__auto__ = (function (){var G__26237 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26223,cljs.core.cst$kw$attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tuples], 0));
if(cljs.core.record_QMARK_(G__26223)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26237);
} else {
return G__26237;
}
})();
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__26223),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__26223),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26240 = arguments.length;
var i__4737__auto___26241 = (0);
while(true){
if((i__4737__auto___26241 < len__4736__auto___26240)){
args__4742__auto__.push((arguments[i__4737__auto___26241]));

var G__26242 = (i__4737__auto___26241 + (1));
i__4737__auto___26241 = G__26242;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq26239){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26239));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__26247 = arguments.length;
switch (G__26247) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___26249 = arguments.length;
var i__4737__auto___26250 = (0);
while(true){
if((i__4737__auto___26250 < len__4736__auto___26249)){
args_arr__4757__auto__.push((arguments[i__4737__auto___26250]));

var G__26251 = (i__4737__auto___26250 + (1));
i__4737__auto___26250 = G__26251;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq26244){
var G__26245 = cljs.core.first(seq26244);
var seq26244__$1 = cljs.core.next(seq26244);
var G__26246 = cljs.core.first(seq26244__$1);
var seq26244__$2 = cljs.core.next(seq26244__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26245,G__26246,seq26244__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (cljs.core.every_QMARK_((function (p1__26252_SHARP_){
return cljs.core.contains_QMARK_(b,p1__26252_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__26253_SHARP_){
return cljs.core.contains_QMARK_(b,p1__26253_SHARP_);
}),cljs.core.keys(a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),cljs.core.cst$sym$_STAR_)){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__26258){
var vec__26259 = p__26258;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26259,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26259,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__26266){
var vec__26267 = p__26266;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,cljs.core.cst$sym$_], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4613__auto___26270 = l1;
var i_26271 = (0);
while(true){
if((i_26271 < n__4613__auto___26270)){
(res[i_26271] = (t1[(idxs1[i_26271])]));

var G__26272 = (i_26271 + (1));
i_26271 = G__26272;
continue;
} else {
}
break;
}

var n__4613__auto___26273 = l2;
var i_26274 = (0);
while(true){
if((i_26274 < n__4613__auto___26273)){
(res[(l1 + i_26274)] = (t2[(idxs2[i_26274])]));

var G__26275 = (i_26274 + (1));
i_26274 = G__26275;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__26276 = a;
var map__26276__$1 = (((((!((map__26276 == null))))?(((((map__26276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26276):map__26276);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26276__$1,cljs.core.cst$kw$attrs);
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26276__$1,cljs.core.cst$kw$tuples);
var map__26277 = b;
var map__26277__$1 = (((((!((map__26277 == null))))?(((((map__26277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26277):map__26277);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26277__$1,cljs.core.cst$kw$attrs);
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26277__$1,cljs.core.cst$kw$tuples);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4529__auto__ = (function datascript$query$sum_rel_$_iter__26280(s__26281){
return (new cljs.core.LazySeq(null,(function (){
var s__26281__$1 = s__26281;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26281__$1);
if(temp__5720__auto__){
var s__26281__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26281__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26281__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26283 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26282 = (0);
while(true){
if((i__26282 < size__4528__auto__)){
var vec__26284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26282);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26284,(1),null);
cljs.core.chunk_append(b__26283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__26310 = (i__26282 + (1));
i__26282 = G__26310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26283),datascript$query$sum_rel_$_iter__26280(cljs.core.chunk_rest(s__26281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26283),null);
}
} else {
var vec__26287 = cljs.core.first(s__26281__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__26280(cljs.core.rest(s__26281__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__26290_26311 = cljs.core.seq(idxb__GT_idxa);
var chunk__26291_26312 = null;
var count__26292_26313 = (0);
var i__26293_26314 = (0);
while(true){
if((i__26293_26314 < count__26292_26313)){
var vec__26300_26315 = chunk__26291_26312.cljs$core$IIndexed$_nth$arity$2(null,i__26293_26314);
var idx_b_26316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26300_26315,(0),null);
var idx_a_26317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26300_26315,(1),null);
(tuple_SINGLEQUOTE_[idx_a_26317] = (tuple_b[idx_b_26316]));


var G__26318 = seq__26290_26311;
var G__26319 = chunk__26291_26312;
var G__26320 = count__26292_26313;
var G__26321 = (i__26293_26314 + (1));
seq__26290_26311 = G__26318;
chunk__26291_26312 = G__26319;
count__26292_26313 = G__26320;
i__26293_26314 = G__26321;
continue;
} else {
var temp__5720__auto___26322 = cljs.core.seq(seq__26290_26311);
if(temp__5720__auto___26322){
var seq__26290_26323__$1 = temp__5720__auto___26322;
if(cljs.core.chunked_seq_QMARK_(seq__26290_26323__$1)){
var c__4556__auto___26324 = cljs.core.chunk_first(seq__26290_26323__$1);
var G__26325 = cljs.core.chunk_rest(seq__26290_26323__$1);
var G__26326 = c__4556__auto___26324;
var G__26327 = cljs.core.count(c__4556__auto___26324);
var G__26328 = (0);
seq__26290_26311 = G__26325;
chunk__26291_26312 = G__26326;
count__26292_26313 = G__26327;
i__26293_26314 = G__26328;
continue;
} else {
var vec__26303_26329 = cljs.core.first(seq__26290_26323__$1);
var idx_b_26330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26303_26329,(0),null);
var idx_a_26331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26303_26329,(1),null);
(tuple_SINGLEQUOTE_[idx_a_26331] = (tuple_b[idx_b_26330]));


var G__26332 = cljs.core.next(seq__26290_26323__$1);
var G__26333 = null;
var G__26334 = (0);
var G__26335 = (0);
seq__26290_26311 = G__26332;
chunk__26291_26312 = G__26333;
count__26292_26313 = G__26334;
i__26293_26314 = G__26335;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__26306 = (function (){var G__26308 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__26309 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__26308,G__26309) : datascript.query.sum_rel.call(null,G__26308,G__26309));
})();
var G__26307 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__26306,G__26307) : datascript.query.sum_rel.call(null,G__26306,G__26307));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__26337 = arguments.length;
switch (G__26337) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26340 = arguments.length;
var i__4737__auto___26341 = (0);
while(true){
if((i__4737__auto___26341 < len__4736__auto___26340)){
args__4742__auto__.push((arguments[i__4737__auto___26341]));

var G__26342 = (i__4737__auto___26341 + (1));
i__4737__auto___26341 = G__26342;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
}));

(datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq26339){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26339));
}));

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where], null));
} else {
}

var temp__5722__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5722__auto__ == null)){
return else_val;
} else {
var datom = temp__5722__auto__;
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26346 = arguments.length;
var i__4737__auto___26347 = (0);
while(true){
if((i__4737__auto___26347 < len__4736__auto___26346)){
args__4742__auto__.push((arguments[i__4737__auto___26347]));

var G__26348 = (i__4737__auto___26347 + (1));
i__4737__auto___26347 = G__26348;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5724__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5724__auto__ == null)){
return null;
} else {
var datom = temp__5724__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(datom),cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
}));

(datascript.query._get_some.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datascript.query._get_some.cljs$lang$applyTo = (function (seq26343){
var G__26344 = cljs.core.first(seq26343);
var seq26343__$1 = cljs.core.next(seq26343);
var G__26345 = cljs.core.first(seq26343__$1);
var seq26343__$2 = cljs.core.next(seq26343__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26344,G__26345,seq26343__$2);
}));

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26350 = arguments.length;
var i__4737__auto___26351 = (0);
while(true){
if((i__4737__auto___26351 < len__4736__auto___26350)){
args__4742__auto__.push((arguments[i__4737__auto___26351]));

var G__26352 = (i__4737__auto___26351 + (1));
i__4737__auto___26351 = G__26352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
}));

(datascript.query.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.and_fn.cljs$lang$applyTo = (function (seq26349){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26349));
}));

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26354 = arguments.length;
var i__4737__auto___26355 = (0);
while(true){
if((i__4737__auto___26355 < len__4736__auto___26354)){
args__4742__auto__.push((arguments[i__4737__auto___26355]));

var G__26356 = (i__4737__auto___26355 + (1));
i__4737__auto___26355 = G__26356;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
}));

(datascript.query.or_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.or_fn.cljs$lang$applyTo = (function (seq26353){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26353));
}));

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$true_QMARK_,cljs.core.cst$sym$and,cljs.core.cst$sym$odd_QMARK_,cljs.core.cst$sym$get_DASH_else,cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$print_DASH_str,cljs.core.cst$sym$_GT_,cljs.core.cst$sym$count,cljs.core.cst$sym$get_DASH_some,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$untuple,cljs.core.cst$sym$inc,cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$quot,cljs.core.cst$sym$false_QMARK_,cljs.core.cst$sym$not,cljs.core.cst$sym$identity,cljs.core.cst$sym$_DASH_differ_QMARK_,cljs.core.cst$sym$tuple,cljs.core.cst$sym$re_DASH_seq,cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$clojure$string_SLASH_starts_DASH_with_QMARK_,cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$min,cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$name,cljs.core.cst$sym$missing_QMARK_,cljs.core.cst$sym$ground,cljs.core.cst$sym$rand_DASH_int,cljs.core.cst$sym$complement,cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$hash_DASH_map,cljs.core.cst$sym$compare,cljs.core.cst$sym$range,cljs.core.cst$sym$max,cljs.core.cst$sym$empty_QMARK_,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pr_DASH_str,cljs.core.cst$sym$println_DASH_str,cljs.core.cst$sym$meta,cljs.core.cst$sym$zero_QMARK_,cljs.core.cst$sym$_BANG__EQ_,cljs.core.cst$sym$prn_DASH_str,cljs.core.cst$sym$dec,cljs.core.cst$sym$re_DASH_pattern,cljs.core.cst$sym$vector,cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$str,cljs.core.cst$sym$_LT_,cljs.core.cst$sym$namespace,cljs.core.cst$sym$keyword,cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$some_QMARK_,cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$rand,cljs.core.cst$sym$re_DASH_matches,cljs.core.cst$sym$list,cljs.core.cst$sym$contains_QMARK_,cljs.core.cst$sym$clojure$string_SLASH_ends_DASH_with_QMARK_,cljs.core.cst$sym$subs,cljs.core.cst$sym$mod,cljs.core.cst$sym$clojure$string_SLASH_includes_QMARK_,cljs.core.cst$sym$array_DASH_map,cljs.core.cst$sym$rem,cljs.core.cst$sym$even_QMARK_,cljs.core.cst$sym$type,cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$clojure$string_SLASH_blank_QMARK_,cljs.core.cst$sym$not_DASH_empty,cljs.core.cst$sym$or,cljs.core.cst$sym$identical_QMARK_,cljs.core.cst$sym$set,cljs.core.cst$sym$re_DASH_find],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.identity,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.vector,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty_QMARK_,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core.keyword,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__26362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__26362 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__26362;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__4529__auto__ = (function datascript$query$variance_$_iter__26363(s__26364){
return (new cljs.core.LazySeq(null,(function (){
var s__26364__$1 = s__26364;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26364__$1);
if(temp__5720__auto__){
var s__26364__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26364__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26364__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26366 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26365 = (0);
while(true){
if((i__26365 < size__4528__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26365);
var delta = (x - mean);
cljs.core.chunk_append(b__26366,(delta * delta));

var G__26367 = (i__26365 + (1));
i__26365 = G__26367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26366),datascript$query$variance_$_iter__26363(cljs.core.chunk_rest(s__26364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26366),null);
}
} else {
var x = cljs.core.first(s__26364__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__26363(cljs.core.rest(s__26364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance(coll));
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__26368 = null;
var G__26368__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__26368__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__26368 = function(n,coll){
switch(arguments.length){
case 1:
return G__26368__1.call(this,n);
case 2:
return G__26368__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26368.cljs$core$IFn$_invoke$arity$1 = G__26368__1;
G__26368.cljs$core$IFn$_invoke$arity$2 = G__26368__2;
return G__26368;
})()
,(function() {
var G__26369 = null;
var G__26369__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__26369__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__26369 = function(n,coll){
switch(arguments.length){
case 1:
return G__26369__1.call(this,n);
case 2:
return G__26369__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26369.cljs$core$IFn$_invoke$arity$1 = G__26369__1;
G__26369.cljs$core$IFn$_invoke$arity$2 = G__26369__2;
return G__26369;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.set,avg,stddev,(function() {
var G__26370 = null;
var G__26370__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__26370__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__26370 = function(n,coll){
switch(arguments.length){
case 1:
return G__26370__1.call(this,n);
case 2:
return G__26370__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26370.cljs$core$IFn$_invoke$arity$1 = G__26370__1;
G__26370.cljs$core$IFn$_invoke$arity$2 = G__26370__2;
return G__26370;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
datascript.parser.parse_rules(rules__$1);

return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

var datascript$query$IBinding$in__GT_rel$dyn_26371 = (function (binding,value){
var x__4428__auto__ = (((binding == null))?null:binding);
var m__4429__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4429__auto__.call(null,binding,value));
} else {
var m__4426__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4426__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
});
datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
return datascript$query$IBinding$in__GT_rel$dyn_26371(binding,value);
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26372_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__26372_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26373_SHARP_,p2__26374_SHARP_){
return datascript.query.in__GT_rel(p1__26373_SHARP_,p2__26374_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__26375){
var vec__26376 = p__26375;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26376,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26376,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,cljs.core.cst$kw$sources,cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rules,datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
var cb = cljs.core.count(bindings);
var cv = cljs.core.count(values);
if((cb < cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Extra inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26379_SHARP_){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__26379_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_inputs,cljs.core.cst$kw$expected,bindings,cljs.core.cst$kw$got,values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Too few inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26380_SHARP_){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__26380_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_inputs,cljs.core.cst$kw$expected,bindings,cljs.core.cst$kw$got,values], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));

}
}
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map((function (p1__26381_SHARP_){
return (p1__26381_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26381_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__26381_SHARP_.call(null,tuple));
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5722__auto__ = cljs.core.first(tuples__$1);
if((temp__5722__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5722__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__26383 = cljs.core.next(tuples__$1);
var G__26384 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__26383;
hash_table = G__26384;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26385_SHARP_){
return datascript.query.getter_fn(attrs1,p1__26385_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26386_SHARP_){
return datascript.query.getter_fn(attrs2,p1__26386_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5722__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5722__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__26390 = a;
var map__26390__$1 = (((((!((map__26390 == null))))?(((((map__26390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26390):map__26390);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26390__$1,cljs.core.cst$kw$attrs);
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26390__$1,cljs.core.cst$kw$tuples);
var map__26391 = b;
var map__26391__$1 = (((((!((map__26391 == null))))?(((((map__26391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26391):map__26391);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26391__$1,cljs.core.cst$kw$attrs);
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26391__$1,cljs.core.cst$kw$tuples);
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26387_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__26387_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26388_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__26388_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,cljs.core.cst$kw$tuples,cljs.core.filterv((function (p1__26389_SHARP_){
return ((function (){var G__26394 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__26389_SHARP_) : key_fn_a.call(null,p1__26389_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__26394) : hash.call(null,G__26394));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26395_SHARP_){
if((p1__26395_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__26395_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26396){
var vec__26397 = p__26396;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26397,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26397,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4115__auto__ = tuple__$1;
if(cljs.core.truth_(and__4115__auto__)){
return pattern__$1;
} else {
return and__4115__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__26400 = cljs.core.next(tuple__$1);
var G__26401 = cljs.core.next(pattern__$1);
tuple__$1 = G__26400;
pattern__$1 = G__26401;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26402_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__26402_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__26403){
var vec__26404 = p__26403;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26404,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26404,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5722__auto__ = cljs.core.first(rels__$1);
if((temp__5722__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5722__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(new_rel__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))){
var G__26408 = cljs.core.next(rels__$1);
var G__26409 = datascript.query.hash_join(rel,new_rel__$1);
var G__26410 = acc;
rels__$1 = G__26408;
new_rel__$1 = G__26409;
acc = G__26410;
continue;
} else {
var G__26411 = cljs.core.next(rels__$1);
var G__26412 = new_rel__$1;
var G__26413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__26411;
new_rel__$1 = G__26412;
acc = G__26413;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__26414_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__26414_SHARP_),sym)){
return p1__26414_SHARP_;
} else {
return null;
}
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5724__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5724__auto__ == null)){
return null;
} else {
var rel = temp__5724__auto__;
var temp__5724__auto____$1 = cljs.core.first(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5724__auto____$1 == null)){
return null;
} else {
var tuple = temp__5724__auto____$1;
return (tuple[(function (){var fexpr__26415 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__26415.cljs$core$IFn$_invoke$arity$1 ? fexpr__26415.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__26415.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__26416_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),p1__26416_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26417_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__26417_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,(function (p1__26418_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__26418_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context);
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4613__auto___26419 = len;
var i_26420 = (0);
while(true){
if((i_26420 < n__4613__auto___26419)){
var arg_26421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_26420);
if((arg_26421 instanceof cljs.core.Symbol)){
var temp__5722__auto___26422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_26421);
if((temp__5722__auto___26422 == null)){
(tuples_args[i_26420] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_26421));
} else {
var source_26423 = temp__5722__auto___26422;
(static_args[i_26420] = source_26423);
}
} else {
(static_args[i_26420] = arg_26421);
}

var G__26424 = (i_26420 + (1));
i_26420 = G__26424;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4613__auto___26425 = len;
var i_26426 = (0);
while(true){
if((i_26426 < n__4613__auto___26425)){
var temp__5724__auto___26427 = (tuples_args[i_26426]);
if((temp__5724__auto___26427 == null)){
} else {
var tuple_idx_26428 = temp__5724__auto___26427;
var v_26429 = (tuple[tuple_idx_26428]);
(args__$1[i_26426] = v_26429);
}

var G__26430 = (i_26426 + (1));
i_26426 = G__26430;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__4613__auto___26431 = len;
var i_26432 = (0);
while(true){
if((i_26432 < n__4613__auto___26431)){
var temp__5724__auto___26433 = (tuples_args[i_26432]);
if((temp__5724__auto___26433 == null)){
} else {
var tuple_idx_26434 = temp__5724__auto___26433;
var v_26435 = (tuple[tuple_idx_26434]);
(static_args[i_26432] = v_26435);
}

var G__26436 = (i_26432 + (1));
i_26432 = G__26436;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__26438 = clause;
var vec__26441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26438,(0),null);
var seq__26442 = cljs.core.seq(vec__26441);
var first__26443 = cljs.core.first(seq__26442);
var seq__26442__$1 = cljs.core.next(seq__26442);
var f = first__26443;
var args = seq__26442__$1;
var pred = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__26444 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26444,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26444,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,(function (p1__26437_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__26437_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,cljs.core.cst$kw$rels,cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__26447 = clause;
var vec__26450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26447,(0),null);
var seq__26451 = cljs.core.seq(vec__26450);
var first__26452 = cljs.core.first(seq__26451);
var seq__26451__$1 = cljs.core.next(seq__26451);
var f = first__26452;
var args = seq__26451__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26447,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__26453 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26453,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26453,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4529__auto__ = (function datascript$query$bind_by_fn_$_iter__26456(s__26457){
return (new cljs.core.LazySeq(null,(function (){
var s__26457__$1 = s__26457;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26457__$1);
if(temp__5720__auto__){
var s__26457__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26457__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26457__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26459 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26458 = (0);
while(true){
if((i__26458 < size__4528__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26458);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
cljs.core.chunk_append(b__26459,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__26460 = (i__26458 + (1));
i__26458 = G__26460;
continue;
} else {
var G__26461 = (i__26458 + (1));
i__26458 = G__26461;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26459),datascript$query$bind_by_fn_$_iter__26456(cljs.core.chunk_rest(s__26457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26459),null);
}
} else {
var tuple = cljs.core.first(s__26457__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__26456(cljs.core.rest(s__26457__$2)));
} else {
var G__26462 = cljs.core.rest(s__26457__$2);
s__26457__$1 = G__26462;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,cljs.core.cst$kw$rels,datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
if((!(cljs.core.sequential_QMARK_(clause)))){
return false;
} else {
var head = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause));
if((!((head instanceof cljs.core.Symbol)))){
return false;
} else {
if(datascript.query.free_var_QMARK_(head)){
return false;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$and,null,cljs.core.cst$sym$not,null,cljs.core.cst$sym$not_DASH_join,null,cljs.core.cst$sym$or_DASH_join,null,cljs.core.cst$sym$or,null,cljs.core.cst$sym$_,null], null), null),head)){
return false;
} else {
if((!(cljs.core.contains_QMARK_(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),head)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause], null));
} else {
return true;

}
}
}
}
}
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__26464 = clause;
var seq__26465 = cljs.core.seq(vec__26464);
var first__26466 = cljs.core.first(seq__26465);
var seq__26465__$1 = cljs.core.next(seq__26465);
var rule = first__26466;
var call_args = seq__26465__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4529__auto__ = (function datascript$query$expand_rule_$_iter__26467(s__26468){
return (new cljs.core.LazySeq(null,(function (){
var s__26468__$1 = s__26468;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26468__$1);
if(temp__5720__auto__){
var s__26468__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26468__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26468__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26470 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26469 = (0);
while(true){
if((i__26469 < size__4528__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26469);
var vec__26471 = branch;
var seq__26472 = cljs.core.seq(vec__26471);
var first__26473 = cljs.core.first(seq__26472);
var seq__26472__$1 = cljs.core.next(seq__26472);
var vec__26474 = first__26473;
var seq__26475 = cljs.core.seq(vec__26474);
var first__26476 = cljs.core.first(seq__26475);
var seq__26475__$1 = cljs.core.next(seq__26475);
var _ = first__26476;
var rule_args = seq__26475__$1;
var clauses = seq__26472__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__26470,clojure.walk.postwalk(((function (i__26469,vec__26471,seq__26472,first__26473,seq__26472__$1,vec__26474,seq__26475,first__26476,seq__26475__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__26470,s__26468__$2,temp__5720__auto__,vec__26464,seq__26465,first__26466,seq__26465__$1,rule,call_args,seqid,branches){
return (function (p1__26463_SHARP_){
if(datascript.query.free_var_QMARK_(p1__26463_SHARP_)){
var x__13303__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__26463_SHARP_) : replacements.call(null,p1__26463_SHARP_));
if((x__13303__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__26463_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__13303__auto__;
}
} else {
return p1__26463_SHARP_;
}
});})(i__26469,vec__26471,seq__26472,first__26473,seq__26472__$1,vec__26474,seq__26475,first__26476,seq__26475__$1,_,rule_args,clauses,replacements,branch,c__4527__auto__,size__4528__auto__,b__26470,s__26468__$2,temp__5720__auto__,vec__26464,seq__26465,first__26466,seq__26465__$1,rule,call_args,seqid,branches))
,clauses));

var G__26483 = (i__26469 + (1));
i__26469 = G__26483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26470),datascript$query$expand_rule_$_iter__26467(cljs.core.chunk_rest(s__26468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26470),null);
}
} else {
var branch = cljs.core.first(s__26468__$2);
var vec__26477 = branch;
var seq__26478 = cljs.core.seq(vec__26477);
var first__26479 = cljs.core.first(seq__26478);
var seq__26478__$1 = cljs.core.next(seq__26478);
var vec__26480 = first__26479;
var seq__26481 = cljs.core.seq(vec__26480);
var first__26482 = cljs.core.first(seq__26481);
var seq__26481__$1 = cljs.core.next(seq__26481);
var _ = first__26482;
var rule_args = seq__26481__$1;
var clauses = seq__26478__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__26477,seq__26478,first__26479,seq__26478__$1,vec__26480,seq__26481,first__26482,seq__26481__$1,_,rule_args,clauses,replacements,branch,s__26468__$2,temp__5720__auto__,vec__26464,seq__26465,first__26466,seq__26465__$1,rule,call_args,seqid,branches){
return (function (p1__26463_SHARP_){
if(datascript.query.free_var_QMARK_(p1__26463_SHARP_)){
var x__13303__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__26463_SHARP_) : replacements.call(null,p1__26463_SHARP_));
if((x__13303__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__26463_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__13303__auto__;
}
} else {
return p1__26463_SHARP_;
}
});})(vec__26477,seq__26478,first__26479,seq__26478__$1,vec__26480,seq__26481,first__26482,seq__26481__$1,_,rule_args,clauses,replacements,branch,s__26468__$2,temp__5720__auto__,vec__26464,seq__26465,first__26466,seq__26465__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__26467(cljs.core.rest(s__26468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26484){
var vec__26485 = p__26484;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26485,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26485,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__26488 = rule_clause;
var seq__26489 = cljs.core.seq(vec__26488);
var first__26490 = cljs.core.first(seq__26489);
var seq__26489__$1 = cljs.core.next(seq__26489);
var rule = first__26490;
var call_args = seq__26489__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4529__auto__ = (function datascript$query$rule_gen_guards_$_iter__26491(s__26492){
return (new cljs.core.LazySeq(null,(function (){
var s__26492__$1 = s__26492;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26492__$1);
if(temp__5720__auto__){
var s__26492__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26492__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26492__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26494 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26493 = (0);
while(true){
if((i__26493 < size__4528__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26493);
var vec__26495 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26495,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26495,(1),null);
cljs.core.chunk_append(b__26494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__26501 = (i__26493 + (1));
i__26493 = G__26501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26494),datascript$query$rule_gen_guards_$_iter__26491(cljs.core.chunk_rest(s__26492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26494),null);
}
} else {
var prev_args = cljs.core.first(s__26492__$2);
var vec__26498 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26498,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26498,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__26491(cljs.core.rest(s__26492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__26502_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__26502_SHARP_) : pred.call(null,p1__26502_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__26502_SHARP_);
} else {
}

return p1__26502_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__26503){
var vec__26504 = p__26503;
var vec__26507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26504,(0),null);
var seq__26508 = cljs.core.seq(vec__26507);
var first__26509 = cljs.core.first(seq__26508);
var seq__26508__$1 = cljs.core.next(seq__26508);
var _ = first__26509;
var vars = seq__26508__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__26510_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__26510_SHARP_));
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prefix_DASH_context,context,cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$used_DASH_args,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pending_DASH_guards,cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5722__auto__ = cljs.core.first(stack);
if((temp__5722__auto__ == null)){
return rel;
} else {
var frame = temp__5722__auto__;
var vec__26529 = cljs.core.split_with(((function (stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__26511_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__26511_SHARP_)));
});})(stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26529,(0),null);
var vec__26532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26529,(1),null);
var seq__26533 = cljs.core.seq(vec__26532);
var first__26534 = cljs.core.first(seq__26533);
var seq__26533__$1 = cljs.core.next(seq__26533);
var rule_clause = first__26534;
var next_clauses = seq__26533__$1;
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__26545 = cljs.core.next(stack);
var G__26546 = datascript.query.sum_rel(rel,new_rel);
stack = G__26545;
rel = G__26546;
continue;
} else {
var vec__26535 = rule_clause;
var seq__26536 = cljs.core.seq(vec__26535);
var first__26537 = cljs.core.first(seq__26536);
var seq__26536__$1 = cljs.core.next(seq__26536);
var rule = first__26537;
var call_args = seq__26536__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__26538 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__26535,seq__26536,first__26537,seq__26536__$1,rule,call_args,guards,vec__26538,active_gs,pending_gs,vec__26529,clauses,vec__26532,seq__26533,first__26534,seq__26533__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__26512_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26512_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__26535,seq__26536,first__26537,seq__26536__$1,rule,call_args,guards,vec__26538,active_gs,pending_gs,vec__26529,clauses,vec__26532,seq__26533,first__26534,seq__26533__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__26547 = cljs.core.next(stack);
var G__26548 = rel;
stack = G__26547;
rel = G__26548;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__26549 = cljs.core.next(stack);
var G__26550 = rel;
stack = G__26549;
rel = G__26550;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__26551 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26535,seq__26536,first__26537,seq__26536__$1,rule,call_args,guards,vec__26538,active_gs,pending_gs,vec__26529,clauses,vec__26532,seq__26533,first__26534,seq__26533__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__26541(s__26542){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26535,seq__26536,first__26537,seq__26536__$1,rule,call_args,guards,vec__26538,active_gs,pending_gs,vec__26529,clauses,vec__26532,seq__26533,first__26534,seq__26533__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__26542__$1 = s__26542;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26542__$1);
if(temp__5720__auto__){
var s__26542__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26542__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26542__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26544 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26543 = (0);
while(true){
if((i__26543 < size__4528__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26543);
cljs.core.chunk_append(b__26544,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__26553 = (i__26543 + (1));
i__26543 = G__26553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26544),datascript$query$solve_rule_$_iter__26541(cljs.core.chunk_rest(s__26542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26544),null);
}
} else {
var branch = cljs.core.first(s__26542__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__26541(cljs.core.rest(s__26542__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26535,seq__26536,first__26537,seq__26536__$1,rule,call_args,guards,vec__26538,active_gs,pending_gs,vec__26529,clauses,vec__26532,seq__26533,first__26534,seq__26533__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__26535,seq__26536,first__26537,seq__26536__$1,rule,call_args,guards,vec__26538,active_gs,pending_gs,vec__26529,clauses,vec__26532,seq__26533,first__26534,seq__26533__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4529__auto__(branches);
})(),cljs.core.next(stack));
var G__26552 = rel;
stack = G__26551;
rel = G__26552;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__26555 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26555,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26555,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26555,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26555,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
if(datascript.query.attr_QMARK_(a)){
if(datascript.db.ref_QMARK_(source,a)){
var or__4126__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__26558 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26558,(3),null);
var G__26561 = cljs.core.PersistentHashSet.EMPTY;
var G__26561__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26561,e):G__26561);
var G__26561__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26561__$1,tx):G__26561__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26561__$2,v);
} else {
return G__26561__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5724__auto__ = cljs.core.not_empty(cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5724__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5724__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,cljs.core.cst$kw$attrs,attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__26562_SHARP_){
return datascript.query.limit_rel(p1__26562_SHARP_,vars);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26563_SHARP_){
return cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__26563_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context)], 0)));
});
datascript.query.check_bound = (function datascript$query$check_bound(bound,vars,form){
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,form,cljs.core.cst$kw$vars,missing], null));
}
});
datascript.query.check_free_same = (function datascript$query$check_free_same(bound,branches,form){
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26564_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__26564_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,form,cljs.core.cst$kw$vars,free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__26565 = cljs.core.seq(branches);
var chunk__26566 = null;
var count__26567 = (0);
var i__26568 = (0);
while(true){
if((i__26568 < count__26567)){
var branch = chunk__26566.cljs$core$IIndexed$_nth$arity$2(null,i__26568);
var temp__5724__auto___26569 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5724__auto___26569 == null)){
} else {
var missing_26570 = temp__5724__auto___26569;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_26570], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,branch,cljs.core.cst$kw$vars,missing_26570], null));
}


var G__26571 = seq__26565;
var G__26572 = chunk__26566;
var G__26573 = count__26567;
var G__26574 = (i__26568 + (1));
seq__26565 = G__26571;
chunk__26566 = G__26572;
count__26567 = G__26573;
i__26568 = G__26574;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26565);
if(temp__5720__auto__){
var seq__26565__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26565__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26565__$1);
var G__26575 = cljs.core.chunk_rest(seq__26565__$1);
var G__26576 = c__4556__auto__;
var G__26577 = cljs.core.count(c__4556__auto__);
var G__26578 = (0);
seq__26565 = G__26575;
chunk__26566 = G__26576;
count__26567 = G__26577;
i__26568 = G__26578;
continue;
} else {
var branch = cljs.core.first(seq__26565__$1);
var temp__5724__auto___26579 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5724__auto___26579 == null)){
} else {
var missing_26580 = temp__5724__auto___26579;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_26580], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,branch,cljs.core.cst$kw$vars,missing_26580], null));
}


var G__26581 = cljs.core.next(seq__26565__$1);
var G__26582 = null;
var G__26583 = (0);
var G__26584 = (0);
seq__26565 = G__26581;
chunk__26566 = G__26582;
count__26567 = G__26583;
i__26568 = G__26584;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__26590 = arguments.length;
switch (G__26590) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__26591 = datascript.query.looks_like_QMARK_;
var expr__26592 = clause;
if(cljs.core.truth_((function (){var G__26594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__26595 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26594,G__26595) : pred__26591.call(null,G__26594,G__26595));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__26596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__26597 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26596,G__26597) : pred__26591.call(null,G__26596,G__26597));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__26598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,cljs.core.cst$sym$_STAR_], null);
var G__26599 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26598,G__26599) : pred__26591.call(null,G__26598,G__26599));
})())){
var vec__26600 = clause;
var seq__26601 = cljs.core.seq(vec__26600);
var first__26602 = cljs.core.first(seq__26601);
var seq__26601__$1 = cljs.core.next(seq__26601);
var source_sym = first__26602;
var rest = seq__26601__$1;
var _STAR_implicit_source_STAR__orig_val__26603 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__26604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__26604);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__26603);
}} else {
if(cljs.core.truth_((function (){var G__26605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or,cljs.core.cst$sym$_STAR_], null);
var G__26606 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26605,G__26606) : pred__26591.call(null,G__26605,G__26606));
})())){
var vec__26607 = clause;
var seq__26608 = cljs.core.seq(vec__26607);
var first__26609 = cljs.core.first(seq__26608);
var seq__26608__$1 = cljs.core.next(seq__26608);
var _ = first__26609;
var branches = seq__26608__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__26607,seq__26608,first__26609,seq__26608__$1,_,branches,___$1,pred__26591,expr__26592){
return (function (p1__26585_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__26585_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__26585_SHARP_));
});})(context,clause,orig_clause,vec__26607,seq__26608,first__26609,seq__26608__$1,_,branches,___$1,pred__26591,expr__26592))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__26607,seq__26608,first__26609,seq__26608__$1,_,branches,___$1,contexts,pred__26591,expr__26592){
return (function (p1__26586_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(p1__26586_SHARP_));
});})(context,clause,orig_clause,vec__26607,seq__26608,first__26609,seq__26608__$1,_,branches,___$1,contexts,pred__26591,expr__26592))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__26610 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null);
var G__26611 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26610,G__26611) : pred__26591.call(null,G__26610,G__26611));
})())){
var vec__26612 = clause;
var seq__26613 = cljs.core.seq(vec__26612);
var first__26614 = cljs.core.first(seq__26613);
var seq__26613__$1 = cljs.core.next(seq__26613);
var _ = first__26614;
var first__26614__$1 = cljs.core.first(seq__26613__$1);
var seq__26613__$2 = cljs.core.next(seq__26613__$1);
var vec__26615 = first__26614__$1;
var seq__26616 = cljs.core.seq(vec__26615);
var first__26617 = cljs.core.first(seq__26616);
var seq__26616__$1 = cljs.core.next(seq__26616);
var req_vars = first__26617;
var vars = seq__26616__$1;
var branches = seq__26613__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__26644 = context;
var G__26645 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$or_DASH_join,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__26646 = clause;
context = G__26644;
clause = G__26645;
orig_clause = G__26646;
continue;
} else {
if(cljs.core.truth_((function (){var G__26618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null);
var G__26619 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26618,G__26619) : pred__26591.call(null,G__26618,G__26619));
})())){
var vec__26620 = clause;
var seq__26621 = cljs.core.seq(vec__26620);
var first__26622 = cljs.core.first(seq__26621);
var seq__26621__$1 = cljs.core.next(seq__26621);
var _ = first__26622;
var first__26622__$1 = cljs.core.first(seq__26621__$1);
var seq__26621__$2 = cljs.core.next(seq__26621__$1);
var vars = first__26622__$1;
var branches = seq__26621__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__26620,seq__26621,first__26622,seq__26621__$1,_,first__26622__$1,seq__26621__$2,vars,branches,vars__$1,___$1,join_context,pred__26591,expr__26592){
return (function (p1__26587_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__26587_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__26587_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__26620,seq__26621,first__26622,seq__26621__$1,_,first__26622__$1,seq__26621__$2,vars,branches,vars__$1,___$1,join_context,pred__26591,expr__26592))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__26620,seq__26621,first__26622,seq__26621__$1,_,first__26622__$1,seq__26621__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__26591,expr__26592){
return (function (p1__26588_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(p1__26588_SHARP_));
});})(context,clause,orig_clause,vec__26620,seq__26621,first__26622,seq__26621__$1,_,first__26622__$1,seq__26621__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__26591,expr__26592))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__26623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$and,cljs.core.cst$sym$_STAR_], null);
var G__26624 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26623,G__26624) : pred__26591.call(null,G__26623,G__26624));
})())){
var vec__26625 = clause;
var seq__26626 = cljs.core.seq(vec__26625);
var first__26627 = cljs.core.first(seq__26626);
var seq__26626__$1 = cljs.core.next(seq__26626);
var _ = first__26627;
var clauses = seq__26626__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__26628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$not,cljs.core.cst$sym$_STAR_], null);
var G__26629 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26628,G__26629) : pred__26591.call(null,G__26628,G__26629));
})())){
var vec__26630 = clause;
var seq__26631 = cljs.core.seq(vec__26630);
var first__26632 = cljs.core.first(seq__26631);
var seq__26631__$1 = cljs.core.next(seq__26631);
var _ = first__26632;
var clauses = seq__26631__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__26633 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$not_DASH_join,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null);
var G__26634 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26633,G__26634) : pred__26591.call(null,G__26633,G__26634));
})())){
var vec__26635 = clause;
var seq__26636 = cljs.core.seq(vec__26635);
var first__26637 = cljs.core.first(seq__26636);
var seq__26636__$1 = cljs.core.next(seq__26636);
var _ = first__26637;
var first__26637__$1 = cljs.core.first(seq__26636__$1);
var seq__26636__$2 = cljs.core.next(seq__26636__$1);
var vars = first__26637__$1;
var clauses = seq__26636__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__26638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__26639 = expr__26592;
return (pred__26591.cljs$core$IFn$_invoke$arity$2 ? pred__26591.cljs$core$IFn$_invoke$arity$2(G__26638,G__26639) : pred__26591.call(null,G__26638,G__26639));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__26640 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__26641 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__26641);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__26640);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26592)].join('')));
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
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__26647 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__26648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__26648);

try{var G__26649 = context;
var G__26650 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__26649,G__26650) : datascript.query.resolve_clause.call(null,G__26649,G__26650));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__26647);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__26651 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__26652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),cljs.core.cst$sym$$);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__26652);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__26651);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__26655 = arguments.length;
switch (G__26655) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5722__auto__ = cljs.core.first(rels);
if((temp__5722__auto__ == null)){
return acc;
} else {
var rel = temp__5722__auto__;
var keep_attrs = cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__26663 = acc;
var G__26664 = cljs.core.next(rels);
var G__26665 = symbols;
acc = G__26663;
rels = G__26664;
symbols = G__26665;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5722__auto__){
return (function (p1__26653_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__26653_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5722__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__26666 = (function (){var iter__4529__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function datascript$query$iter__26656(s__26657){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function (){
var s__26657__$1 = s__26657;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26657__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var t1 = cljs.core.first(xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__26657__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function datascript$query$iter__26656_$_iter__26658(s__26659){
return (new cljs.core.LazySeq(null,((function (s__26657__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function (){
var s__26659__$1 = s__26659;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__26659__$1);
if(temp__5720__auto____$1){
var s__26659__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26659__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26659__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26661 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26660 = (0);
while(true){
if((i__26660 < size__4528__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26660);
cljs.core.chunk_append(b__26661,(function (){var res = cljs.core.aclone(t1);
var n__4613__auto___26669 = len;
var i_26670 = (0);
while(true){
if((i_26670 < n__4613__auto___26669)){
var temp__5724__auto___26671 = (copy_map[i_26670]);
if((temp__5724__auto___26671 == null)){
} else {
var idx_26672 = temp__5724__auto___26671;
(res[i_26670] = (t2[idx_26672]));
}

var G__26673 = (i_26670 + (1));
i_26670 = G__26673;
continue;
} else {
}
break;
}

return res;
})());

var G__26674 = (i__26660 + (1));
i__26660 = G__26674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26661),datascript$query$iter__26656_$_iter__26658(cljs.core.chunk_rest(s__26659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26661),null);
}
} else {
var t2 = cljs.core.first(s__26659__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4613__auto___26675 = len;
var i_26676 = (0);
while(true){
if((i_26676 < n__4613__auto___26675)){
var temp__5724__auto___26677 = (copy_map[i_26676]);
if((temp__5724__auto___26677 == null)){
} else {
var idx_26678 = temp__5724__auto___26677;
(res[i_26676] = (t2[idx_26678]));
}

var G__26679 = (i_26676 + (1));
i_26676 = G__26679;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__26656_$_iter__26658(cljs.core.rest(s__26659__$2)));
}
} else {
return null;
}
break;
}
});})(s__26657__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__))
,null,null));
});})(s__26657__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,datascript$query$iter__26656(cljs.core.rest(s__26657__$1)));
} else {
var G__26680 = cljs.core.rest(s__26657__$1);
s__26657__$1 = G__26680;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__))
;
return iter__4529__auto__(acc);
})();
var G__26667 = cljs.core.next(rels);
var G__26668 = symbols;
acc = G__26666;
rels = G__26667;
symbols = G__26668;
continue;
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

var datascript$query$IContextResolve$_context_resolve$dyn_26681 = (function (var$,context){
var x__4428__auto__ = (((var$ == null))?null:var$);
var m__4429__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4429__auto__.call(null,var$,context));
} else {
var m__4426__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4426__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
});
datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
return datascript$query$IContextResolve$_context_resolve$dyn_26681(var$,context);
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26682_SHARP_){
return datascript.query._context_resolve(p1__26682_SHARP_,context);
}),cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26683_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__26683_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26684_SHARP_,p2__26685_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__26684_SHARP_) : pred.call(null,p1__26684_SHARP_)))){
return p2__26685_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26686_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__26686_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4529__auto__ = (function datascript$query$aggregate_$_iter__26687(s__26688){
return (new cljs.core.LazySeq(null,(function (){
var s__26688__$1 = s__26688;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26688__$1);
if(temp__5720__auto__){
var s__26688__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26688__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26688__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26690 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26689 = (0);
while(true){
if((i__26689 < size__4528__auto__)){
var vec__26691 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26689);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26691,(1),null);
cljs.core.chunk_append(b__26690,datascript.query._aggregate(find_elements,context,tuples));

var G__26697 = (i__26689 + (1));
i__26689 = G__26697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26690),datascript$query$aggregate_$_iter__26687(cljs.core.chunk_rest(s__26688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26690),null);
}
} else {
var vec__26694 = cljs.core.first(s__26688__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__26687(cljs.core.rest(s__26688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(grouped);
});
datascript.query.map_STAR_ = (function datascript$query$map_STAR_(f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26698_SHARP_,p2__26699_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26698_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__26699_SHARP_) : f.call(null,p2__26699_SHARP_)));
}),cljs.core.empty(xs),xs);
});
datascript.query.tuples__GT_return_map = (function datascript$query$tuples__GT_return_map(return_map,tuples){
var symbols = cljs.core.cst$kw$symbols.cljs$core$IFn$_invoke$arity$1(return_map);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(symbols));
return datascript.query.map_STAR_((function (tuple){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(symbols,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,i));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
}),tuples);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

var datascript$query$IPostProcess$_post_process$dyn_26700 = (function (find,return_map,tuples){
var x__4428__auto__ = (((find == null))?null:find);
var m__4429__auto__ = (datascript.query._post_process[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__4429__auto__.call(null,find,return_map,tuples));
} else {
var m__4426__auto__ = (datascript.query._post_process["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__4426__auto__.call(null,find,return_map,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
});
datascript.query._post_process = (function datascript$query$_post_process(find,return_map,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$3 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$3(find,return_map,tuples);
} else {
return datascript$query$IPostProcess$_post_process$dyn_26700(find,return_map,tuples);
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((return_map == null)){
return tuples;
} else {
return datascript.query.tuples__GT_return_map(return_map,tuples);
}
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((!((return_map == null)))){
return cljs.core.first(datascript.query.tuples__GT_return_map(return_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tuples)], null)));
} else {
return cljs.core.first(tuples);
}
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4529__auto__ = (function datascript$query$pull_$_iter__26701(s__26702){
return (new cljs.core.LazySeq(null,(function (){
var s__26702__$1 = s__26702;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26702__$1);
if(temp__5720__auto__){
var s__26702__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26702__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26702__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26704 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26703 = (0);
while(true){
if((i__26703 < size__4528__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26703);
cljs.core.chunk_append(b__26704,((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__26715 = (i__26703 + (1));
i__26703 = G__26715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26704),datascript$query$pull_$_iter__26701(cljs.core.chunk_rest(s__26702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26704),null);
}
} else {
var find = cljs.core.first(s__26702__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__26701(cljs.core.rest(s__26702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(find_elements);
})();
var iter__4529__auto__ = (function datascript$query$pull_$_iter__26705(s__26706){
return (new cljs.core.LazySeq(null,(function (){
var s__26706__$1 = s__26706;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26706__$1);
if(temp__5720__auto__){
var s__26706__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26706__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26706__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26708 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26707 = (0);
while(true){
if((i__26707 < size__4528__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26707);
cljs.core.chunk_append(b__26708,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__26707,tuple,c__4527__auto__,size__4528__auto__,b__26708,s__26706__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__26709 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26709,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26709,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__26707,tuple,c__4527__auto__,size__4528__auto__,b__26708,s__26706__$2,temp__5720__auto__,resolved))
,resolved,tuple));

var G__26716 = (i__26707 + (1));
i__26707 = G__26716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26708),datascript$query$pull_$_iter__26705(cljs.core.chunk_rest(s__26706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26708),null);
}
} else {
var tuple = cljs.core.first(s__26706__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__26706__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__26712 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26712,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26712,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__26706__$2,temp__5720__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__26705(cljs.core.rest(s__26706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if((temp__5722__auto__ == null)){
var qp = datascript.parser.parse_query(q);
datascript.query.query_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.query.query_cache.cljs$core$IDeref$_deref$arity$1(null),q,qp));

return qp;
} else {
var cached = temp__5722__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26722 = arguments.length;
var i__4737__auto___26723 = (0);
while(true){
if((i__4737__auto___26723 < len__4736__auto___26722)){
args__4742__auto__.push((arguments[i__4737__auto___26723]));

var G__26724 = (i__4737__auto___26723 + (1));
i__4737__auto___26723 = G__26724;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,with$));
var q__$1 = (function (){var G__26720 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__26720);
} else {
return G__26720;
}
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__26721 = resultset;
var G__26721__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26717_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__26717_SHARP_,(0),result_arity));
}),G__26721):G__26721);
var G__26721__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__26721__$1):G__26721__$1);
var G__26721__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__26721__$2):G__26721__$2);
return datascript.query._post_process(find,cljs.core.cst$kw$qreturn_DASH_map.cljs$core$IFn$_invoke$arity$1(parsed_q),G__26721__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq26718){
var G__26719 = cljs.core.first(seq26718);
var seq26718__$1 = cljs.core.next(seq26718);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26719,seq26718__$1);
}));

