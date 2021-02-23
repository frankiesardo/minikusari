// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if(((typeof eid === 'number') || (cljs.core.sequential_QMARK_(eid)) || ((eid instanceof cljs.core.Keyword)))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5720__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
var G__26105 = db;
var G__26106 = e;
var G__26107 = cljs.core.volatile_BANG_(false);
var G__26108 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__26105,G__26106,G__26107,G__26108) : datascript.impl.entity.__GT_Entity.call(null,G__26105,G__26106,G__26107,G__26108));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26109_SHARP_,p2__26110_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26109_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__26110_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26111_SHARP_,p2__26112_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26111_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__26112_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__5718__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__5718__auto__)){
var datoms = temp__5718__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26113_SHARP_,p2__26114_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26113_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__26114_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__4529__auto__ = (function datascript$impl$entity$js_seq_$_iter__26115(s__26116){
return (new cljs.core.LazySeq(null,(function (){
var s__26116__$1 = s__26116;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26116__$1);
if(temp__5720__auto__){
var s__26116__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26116__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26116__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26118 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26117 = (0);
while(true){
if((i__26117 < size__4528__auto__)){
var vec__26119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__26117);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(1),null);
cljs.core.chunk_append(b__26118,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__26125 = (i__26117 + (1));
i__26117 = G__26125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26118),datascript$impl$entity$js_seq_$_iter__26115(cljs.core.chunk_rest(s__26116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26118),null);
}
} else {
var vec__26122 = cljs.core.first(s__26116__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26122,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__26115(cljs.core.rest(s__26116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__26163 = null;
var G__26163__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__26127 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__26128 = null;
var count__26129 = (0);
var i__26130 = (0);
while(true){
if((i__26130 < count__26129)){
var vec__26137 = chunk__26128.cljs$core$IIndexed$_nth$arity$2(null,i__26130);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26137,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__26164 = seq__26127;
var G__26165 = chunk__26128;
var G__26166 = count__26129;
var G__26167 = (i__26130 + (1));
seq__26127 = G__26164;
chunk__26128 = G__26165;
count__26129 = G__26166;
i__26130 = G__26167;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26127);
if(temp__5720__auto__){
var seq__26127__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26127__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26127__$1);
var G__26168 = cljs.core.chunk_rest(seq__26127__$1);
var G__26169 = c__4556__auto__;
var G__26170 = cljs.core.count(c__4556__auto__);
var G__26171 = (0);
seq__26127 = G__26168;
chunk__26128 = G__26169;
count__26129 = G__26170;
i__26130 = G__26171;
continue;
} else {
var vec__26140 = cljs.core.first(seq__26127__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26140,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__26172 = cljs.core.next(seq__26127__$1);
var G__26173 = null;
var G__26174 = (0);
var G__26175 = (0);
seq__26127 = G__26172;
chunk__26128 = G__26173;
count__26129 = G__26174;
i__26130 = G__26175;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__26163__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__26143 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__26144 = null;
var count__26145 = (0);
var i__26146 = (0);
while(true){
if((i__26146 < count__26145)){
var vec__26153 = chunk__26144.cljs$core$IIndexed$_nth$arity$2(null,i__26146);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26153,(1),null);
f.call(use_as_this,v,a,this$);


var G__26176 = seq__26143;
var G__26177 = chunk__26144;
var G__26178 = count__26145;
var G__26179 = (i__26146 + (1));
seq__26143 = G__26176;
chunk__26144 = G__26177;
count__26145 = G__26178;
i__26146 = G__26179;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26143);
if(temp__5720__auto__){
var seq__26143__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26143__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26143__$1);
var G__26180 = cljs.core.chunk_rest(seq__26143__$1);
var G__26181 = c__4556__auto__;
var G__26182 = cljs.core.count(c__4556__auto__);
var G__26183 = (0);
seq__26143 = G__26180;
chunk__26144 = G__26181;
count__26145 = G__26182;
i__26146 = G__26183;
continue;
} else {
var vec__26156 = cljs.core.first(seq__26143__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26156,(1),null);
f.call(use_as_this,v,a,this$);


var G__26184 = cljs.core.next(seq__26143__$1);
var G__26185 = null;
var G__26186 = (0);
var G__26187 = (0);
seq__26143 = G__26184;
chunk__26144 = G__26185;
count__26145 = G__26186;
i__26146 = G__26187;
continue;
}
} else {
return null;
}
}
break;
}
});
G__26163 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__26163__1.call(this,f);
case 2:
return G__26163__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26163.cljs$core$IFn$_invoke$arity$1 = G__26163__1;
G__26163.cljs$core$IFn$_invoke$arity$2 = G__26163__2;
return G__26163;
})()
);

(datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__26159 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__26159);
} else {
return G__26159;
}
}
}
}));

(datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
}));

(datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
}));

(datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
}));

(datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
}));

(datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
}));

(datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return (!((this$.get(attr) == null)));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.cache),cljs.core.cst$kw$db_SLASH_id,self__.eid),writer,opts);
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count(cljs.core.deref(self__.cache));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.eid);
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__26160 = this$__$1;
var G__26161 = k;
var G__26162 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__26160,G__26161,G__26162) : datascript.impl.entity.lookup_entity.call(null,G__26160,G__26161,G__26162));
})());
}));

(datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq(cljs.core.deref(self__.cache));
}));

(datascript.impl.entity.Entity.prototype.call = (function() {
var G__26188 = null;
var G__26188__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__26188__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__26188 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26188__2.call(this,self__,k);
case 3:
return G__26188__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__26188.cljs$core$IFn$_invoke$arity$2 = G__26188__2;
G__26188.cljs$core$IFn$_invoke$arity$3 = G__26188__3;
return G__26188;
})()
);

(datascript.impl.entity.Entity.prototype.apply = (function (self__,args26126){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26126)));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
}));

(datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
}));

(datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$eid,cljs.core.cst$sym$touched,cljs.core.cst$sym$cache], null);
}));

(datascript.impl.entity.Entity.cljs$lang$type = true);

(datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity");

(datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"datascript.impl.entity/Entity");
}));

/**
 * Positional factory function for datascript.impl.entity/Entity.
 */
datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return (((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid)));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var G__26190 = arguments.length;
switch (G__26190) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
}));

(datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.cst$kw$db_SLASH_id)){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var temp__5722__auto__ = (function (){var fexpr__26191 = cljs.core.deref(this$.cache);
return (fexpr__26191.cljs$core$IFn$_invoke$arity$1 ? fexpr__26191.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__26191.call(null,attr));
})();
if((temp__5722__auto__ == null)){
if(cljs.core.truth_(cljs.core.deref(this$.touched))){
return not_found;
} else {
var temp__5722__auto____$1 = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if((temp__5722__auto____$1 == null)){
return not_found;
} else {
var datoms = temp__5722__auto____$1;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(this$.cache),attr,value));

return value;
}
}
} else {
var v = temp__5722__auto__;
return v;
}
}
}
}));

(datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3);

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(datascript.impl.entity.entity_QMARK_(e)){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref(e.touched))){
} else {
var temp__5720__auto___26193 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5720__auto___26193)){
var datoms_26194 = temp__5720__auto___26193;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_26194)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity",datascript.impl.entity.Entity);
