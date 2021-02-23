// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18040 = arguments.length;
switch (G__18040) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18041 = (function (f,blockable,meta18042){
this.f = f;
this.blockable = blockable;
this.meta18042 = meta18042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18043,meta18042__$1){
var self__ = this;
var _18043__$1 = this;
return (new cljs.core.async.t_cljs$core$async18041(self__.f,self__.blockable,meta18042__$1));
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18043){
var self__ = this;
var _18043__$1 = this;
return self__.meta18042;
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta18042], null);
}));

(cljs.core.async.t_cljs$core$async18041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18041");

(cljs.core.async.t_cljs$core$async18041.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18041.
 */
cljs.core.async.__GT_t_cljs$core$async18041 = (function cljs$core$async$__GT_t_cljs$core$async18041(f__$1,blockable__$1,meta18042){
return (new cljs.core.async.t_cljs$core$async18041(f__$1,blockable__$1,meta18042));
});

}

return (new cljs.core.async.t_cljs$core$async18041(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18047 = arguments.length;
switch (G__18047) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18050 = arguments.length;
switch (G__18050) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18053 = arguments.length;
switch (G__18053) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18055 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18055) : fn1.call(null,val_18055));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18055) : fn1.call(null,val_18055));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18057 = arguments.length;
switch (G__18057) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___18059 = n;
var x_18060 = (0);
while(true){
if((x_18060 < n__4613__auto___18059)){
(a[x_18060] = (0));

var G__18061 = (x_18060 + (1));
x_18060 = G__18061;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18062 = (i + (1));
i = G__18062;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18063 = (function (flag,meta18064){
this.flag = flag;
this.meta18064 = meta18064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18065,meta18064__$1){
var self__ = this;
var _18065__$1 = this;
return (new cljs.core.async.t_cljs$core$async18063(self__.flag,meta18064__$1));
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18065){
var self__ = this;
var _18065__$1 = this;
return self__.meta18064;
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta18064], null);
}));

(cljs.core.async.t_cljs$core$async18063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18063");

(cljs.core.async.t_cljs$core$async18063.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18063.
 */
cljs.core.async.__GT_t_cljs$core$async18063 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18063(flag__$1,meta18064){
return (new cljs.core.async.t_cljs$core$async18063(flag__$1,meta18064));
});

}

return (new cljs.core.async.t_cljs$core$async18063(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18066 = (function (flag,cb,meta18067){
this.flag = flag;
this.cb = cb;
this.meta18067 = meta18067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18068,meta18067__$1){
var self__ = this;
var _18068__$1 = this;
return (new cljs.core.async.t_cljs$core$async18066(self__.flag,self__.cb,meta18067__$1));
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18068){
var self__ = this;
var _18068__$1 = this;
return self__.meta18067;
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta18067], null);
}));

(cljs.core.async.t_cljs$core$async18066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18066");

(cljs.core.async.t_cljs$core$async18066.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18066.
 */
cljs.core.async.__GT_t_cljs$core$async18066 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18066(flag__$1,cb__$1,meta18067){
return (new cljs.core.async.t_cljs$core$async18066(flag__$1,cb__$1,meta18067));
});

}

return (new cljs.core.async.t_cljs$core$async18066(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18069_SHARP_){
var G__18071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18069_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18071) : fret.call(null,G__18071));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18070_SHARP_){
var G__18072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18070_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18072) : fret.call(null,G__18072));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18073 = (i + (1));
i = G__18073;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18079 = arguments.length;
var i__4737__auto___18080 = (0);
while(true){
if((i__4737__auto___18080 < len__4736__auto___18079)){
args__4742__auto__.push((arguments[i__4737__auto___18080]));

var G__18081 = (i__4737__auto___18080 + (1));
i__4737__auto___18080 = G__18081;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18076){
var map__18077 = p__18076;
var map__18077__$1 = (((((!((map__18077 == null))))?(((((map__18077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18077):map__18077);
var opts = map__18077__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18074){
var G__18075 = cljs.core.first(seq18074);
var seq18074__$1 = cljs.core.next(seq18074);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18075,seq18074__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18083 = arguments.length;
switch (G__18083) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17980__auto___18129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18107){
var state_val_18108 = (state_18107[(1)]);
if((state_val_18108 === (7))){
var inst_18103 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18109_18130 = state_18107__$1;
(statearr_18109_18130[(2)] = inst_18103);

(statearr_18109_18130[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (1))){
var state_18107__$1 = state_18107;
var statearr_18110_18131 = state_18107__$1;
(statearr_18110_18131[(2)] = null);

(statearr_18110_18131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (4))){
var inst_18086 = (state_18107[(7)]);
var inst_18086__$1 = (state_18107[(2)]);
var inst_18087 = (inst_18086__$1 == null);
var state_18107__$1 = (function (){var statearr_18111 = state_18107;
(statearr_18111[(7)] = inst_18086__$1);

return statearr_18111;
})();
if(cljs.core.truth_(inst_18087)){
var statearr_18112_18132 = state_18107__$1;
(statearr_18112_18132[(1)] = (5));

} else {
var statearr_18113_18133 = state_18107__$1;
(statearr_18113_18133[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (13))){
var state_18107__$1 = state_18107;
var statearr_18114_18134 = state_18107__$1;
(statearr_18114_18134[(2)] = null);

(statearr_18114_18134[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (6))){
var inst_18086 = (state_18107[(7)]);
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18107__$1,(11),to,inst_18086);
} else {
if((state_val_18108 === (3))){
var inst_18105 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18107__$1,inst_18105);
} else {
if((state_val_18108 === (12))){
var state_18107__$1 = state_18107;
var statearr_18115_18135 = state_18107__$1;
(statearr_18115_18135[(2)] = null);

(statearr_18115_18135[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (2))){
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18107__$1,(4),from);
} else {
if((state_val_18108 === (11))){
var inst_18096 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18096)){
var statearr_18116_18136 = state_18107__$1;
(statearr_18116_18136[(1)] = (12));

} else {
var statearr_18117_18137 = state_18107__$1;
(statearr_18117_18137[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (9))){
var state_18107__$1 = state_18107;
var statearr_18118_18138 = state_18107__$1;
(statearr_18118_18138[(2)] = null);

(statearr_18118_18138[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (5))){
var state_18107__$1 = state_18107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18119_18139 = state_18107__$1;
(statearr_18119_18139[(1)] = (8));

} else {
var statearr_18120_18140 = state_18107__$1;
(statearr_18120_18140[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (14))){
var inst_18101 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18121_18141 = state_18107__$1;
(statearr_18121_18141[(2)] = inst_18101);

(statearr_18121_18141[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (10))){
var inst_18093 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18122_18142 = state_18107__$1;
(statearr_18122_18142[(2)] = inst_18093);

(statearr_18122_18142[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (8))){
var inst_18090 = cljs.core.async.close_BANG_(to);
var state_18107__$1 = state_18107;
var statearr_18123_18143 = state_18107__$1;
(statearr_18123_18143[(2)] = inst_18090);

(statearr_18123_18143[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_18124 = [null,null,null,null,null,null,null,null];
(statearr_18124[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_18124[(1)] = (1));

return statearr_18124;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_18107){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18107);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18125){if((e18125 instanceof Object)){
var ex__17877__auto__ = e18125;
var statearr_18126_18144 = state_18107;
(statearr_18126_18144[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18107);

return cljs.core.cst$kw$recur;
} else {
throw e18125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18145 = state_18107;
state_18107 = G__18145;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_18107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_18107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18127 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18127[(6)] = c__17980__auto___18129);

return statearr_18127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__18146){
var vec__18147 = p__18146;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(1),null);
var job = vec__18147;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17980__auto___18318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18154){
var state_val_18155 = (state_18154[(1)]);
if((state_val_18155 === (1))){
var state_18154__$1 = state_18154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18154__$1,(2),res,v);
} else {
if((state_val_18155 === (2))){
var inst_18151 = (state_18154[(2)]);
var inst_18152 = cljs.core.async.close_BANG_(res);
var state_18154__$1 = (function (){var statearr_18156 = state_18154;
(statearr_18156[(7)] = inst_18151);

return statearr_18156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18154__$1,inst_18152);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0 = (function (){
var statearr_18157 = [null,null,null,null,null,null,null,null];
(statearr_18157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__);

(statearr_18157[(1)] = (1));

return statearr_18157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1 = (function (state_18154){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18154);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18158){if((e18158 instanceof Object)){
var ex__17877__auto__ = e18158;
var statearr_18159_18319 = state_18154;
(statearr_18159_18319[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18154);

return cljs.core.cst$kw$recur;
} else {
throw e18158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18320 = state_18154;
state_18154 = G__18320;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = function(state_18154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1.call(this,state_18154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18160 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18160[(6)] = c__17980__auto___18318);

return statearr_18160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18161){
var vec__18162 = p__18161;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18162,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18162,(1),null);
var job = vec__18162;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___18321 = n;
var __18322 = (0);
while(true){
if((__18322 < n__4613__auto___18321)){
var G__18165_18323 = type;
var G__18165_18324__$1 = (((G__18165_18323 instanceof cljs.core.Keyword))?G__18165_18323.fqn:null);
switch (G__18165_18324__$1) {
case "compute":
var c__17980__auto___18326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18322,c__17980__auto___18326,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async){
return (function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = ((function (__18322,c__17980__auto___18326,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async){
return (function (state_18178){
var state_val_18179 = (state_18178[(1)]);
if((state_val_18179 === (1))){
var state_18178__$1 = state_18178;
var statearr_18180_18327 = state_18178__$1;
(statearr_18180_18327[(2)] = null);

(statearr_18180_18327[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18179 === (2))){
var state_18178__$1 = state_18178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18178__$1,(4),jobs);
} else {
if((state_val_18179 === (3))){
var inst_18176 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18178__$1,inst_18176);
} else {
if((state_val_18179 === (4))){
var inst_18168 = (state_18178[(2)]);
var inst_18169 = process(inst_18168);
var state_18178__$1 = state_18178;
if(cljs.core.truth_(inst_18169)){
var statearr_18181_18328 = state_18178__$1;
(statearr_18181_18328[(1)] = (5));

} else {
var statearr_18182_18329 = state_18178__$1;
(statearr_18182_18329[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18179 === (5))){
var state_18178__$1 = state_18178;
var statearr_18183_18330 = state_18178__$1;
(statearr_18183_18330[(2)] = null);

(statearr_18183_18330[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18179 === (6))){
var state_18178__$1 = state_18178;
var statearr_18184_18331 = state_18178__$1;
(statearr_18184_18331[(2)] = null);

(statearr_18184_18331[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18179 === (7))){
var inst_18174 = (state_18178[(2)]);
var state_18178__$1 = state_18178;
var statearr_18185_18332 = state_18178__$1;
(statearr_18185_18332[(2)] = inst_18174);

(statearr_18185_18332[(1)] = (3));


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
});})(__18322,c__17980__auto___18326,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async))
;
return ((function (__18322,switch__17873__auto__,c__17980__auto___18326,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0 = (function (){
var statearr_18186 = [null,null,null,null,null,null,null];
(statearr_18186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__);

(statearr_18186[(1)] = (1));

return statearr_18186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1 = (function (state_18178){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18178);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18187){if((e18187 instanceof Object)){
var ex__17877__auto__ = e18187;
var statearr_18188_18333 = state_18178;
(statearr_18188_18333[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18178);

return cljs.core.cst$kw$recur;
} else {
throw e18187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18334 = state_18178;
state_18178 = G__18334;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = function(state_18178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1.call(this,state_18178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__;
})()
;})(__18322,switch__17873__auto__,c__17980__auto___18326,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async))
})();
var state__17982__auto__ = (function (){var statearr_18189 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18189[(6)] = c__17980__auto___18326);

return statearr_18189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
});})(__18322,c__17980__auto___18326,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async))
);


break;
case "async":
var c__17980__auto___18335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18322,c__17980__auto___18335,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async){
return (function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = ((function (__18322,c__17980__auto___18335,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async){
return (function (state_18202){
var state_val_18203 = (state_18202[(1)]);
if((state_val_18203 === (1))){
var state_18202__$1 = state_18202;
var statearr_18204_18336 = state_18202__$1;
(statearr_18204_18336[(2)] = null);

(statearr_18204_18336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18203 === (2))){
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18202__$1,(4),jobs);
} else {
if((state_val_18203 === (3))){
var inst_18200 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18202__$1,inst_18200);
} else {
if((state_val_18203 === (4))){
var inst_18192 = (state_18202[(2)]);
var inst_18193 = async(inst_18192);
var state_18202__$1 = state_18202;
if(cljs.core.truth_(inst_18193)){
var statearr_18205_18337 = state_18202__$1;
(statearr_18205_18337[(1)] = (5));

} else {
var statearr_18206_18338 = state_18202__$1;
(statearr_18206_18338[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18203 === (5))){
var state_18202__$1 = state_18202;
var statearr_18207_18339 = state_18202__$1;
(statearr_18207_18339[(2)] = null);

(statearr_18207_18339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18203 === (6))){
var state_18202__$1 = state_18202;
var statearr_18208_18340 = state_18202__$1;
(statearr_18208_18340[(2)] = null);

(statearr_18208_18340[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18203 === (7))){
var inst_18198 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
var statearr_18209_18341 = state_18202__$1;
(statearr_18209_18341[(2)] = inst_18198);

(statearr_18209_18341[(1)] = (3));


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
});})(__18322,c__17980__auto___18335,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async))
;
return ((function (__18322,switch__17873__auto__,c__17980__auto___18335,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0 = (function (){
var statearr_18210 = [null,null,null,null,null,null,null];
(statearr_18210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__);

(statearr_18210[(1)] = (1));

return statearr_18210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1 = (function (state_18202){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18202);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18211){if((e18211 instanceof Object)){
var ex__17877__auto__ = e18211;
var statearr_18212_18342 = state_18202;
(statearr_18212_18342[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18202);

return cljs.core.cst$kw$recur;
} else {
throw e18211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18343 = state_18202;
state_18202 = G__18343;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = function(state_18202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1.call(this,state_18202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__;
})()
;})(__18322,switch__17873__auto__,c__17980__auto___18335,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async))
})();
var state__17982__auto__ = (function (){var statearr_18213 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18213[(6)] = c__17980__auto___18335);

return statearr_18213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
});})(__18322,c__17980__auto___18335,G__18165_18323,G__18165_18324__$1,n__4613__auto___18321,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18165_18324__$1)].join('')));

}

var G__18344 = (__18322 + (1));
__18322 = G__18344;
continue;
} else {
}
break;
}

var c__17980__auto___18345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18235){
var state_val_18236 = (state_18235[(1)]);
if((state_val_18236 === (7))){
var inst_18231 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
var statearr_18237_18346 = state_18235__$1;
(statearr_18237_18346[(2)] = inst_18231);

(statearr_18237_18346[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18236 === (1))){
var state_18235__$1 = state_18235;
var statearr_18238_18347 = state_18235__$1;
(statearr_18238_18347[(2)] = null);

(statearr_18238_18347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18236 === (4))){
var inst_18216 = (state_18235[(7)]);
var inst_18216__$1 = (state_18235[(2)]);
var inst_18217 = (inst_18216__$1 == null);
var state_18235__$1 = (function (){var statearr_18239 = state_18235;
(statearr_18239[(7)] = inst_18216__$1);

return statearr_18239;
})();
if(cljs.core.truth_(inst_18217)){
var statearr_18240_18348 = state_18235__$1;
(statearr_18240_18348[(1)] = (5));

} else {
var statearr_18241_18349 = state_18235__$1;
(statearr_18241_18349[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18236 === (6))){
var inst_18221 = (state_18235[(8)]);
var inst_18216 = (state_18235[(7)]);
var inst_18221__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18223 = [inst_18216,inst_18221__$1];
var inst_18224 = (new cljs.core.PersistentVector(null,2,(5),inst_18222,inst_18223,null));
var state_18235__$1 = (function (){var statearr_18242 = state_18235;
(statearr_18242[(8)] = inst_18221__$1);

return statearr_18242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18235__$1,(8),jobs,inst_18224);
} else {
if((state_val_18236 === (3))){
var inst_18233 = (state_18235[(2)]);
var state_18235__$1 = state_18235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18235__$1,inst_18233);
} else {
if((state_val_18236 === (2))){
var state_18235__$1 = state_18235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18235__$1,(4),from);
} else {
if((state_val_18236 === (9))){
var inst_18228 = (state_18235[(2)]);
var state_18235__$1 = (function (){var statearr_18243 = state_18235;
(statearr_18243[(9)] = inst_18228);

return statearr_18243;
})();
var statearr_18244_18350 = state_18235__$1;
(statearr_18244_18350[(2)] = null);

(statearr_18244_18350[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18236 === (5))){
var inst_18219 = cljs.core.async.close_BANG_(jobs);
var state_18235__$1 = state_18235;
var statearr_18245_18351 = state_18235__$1;
(statearr_18245_18351[(2)] = inst_18219);

(statearr_18245_18351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18236 === (8))){
var inst_18221 = (state_18235[(8)]);
var inst_18226 = (state_18235[(2)]);
var state_18235__$1 = (function (){var statearr_18246 = state_18235;
(statearr_18246[(10)] = inst_18226);

return statearr_18246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18235__$1,(9),results,inst_18221);
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
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0 = (function (){
var statearr_18247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__);

(statearr_18247[(1)] = (1));

return statearr_18247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1 = (function (state_18235){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18235);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18248){if((e18248 instanceof Object)){
var ex__17877__auto__ = e18248;
var statearr_18249_18352 = state_18235;
(statearr_18249_18352[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18235);

return cljs.core.cst$kw$recur;
} else {
throw e18248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18353 = state_18235;
state_18235 = G__18353;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = function(state_18235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1.call(this,state_18235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18250 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18250[(6)] = c__17980__auto___18345);

return statearr_18250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18288){
var state_val_18289 = (state_18288[(1)]);
if((state_val_18289 === (7))){
var inst_18284 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18290_18354 = state_18288__$1;
(statearr_18290_18354[(2)] = inst_18284);

(statearr_18290_18354[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (20))){
var state_18288__$1 = state_18288;
var statearr_18291_18355 = state_18288__$1;
(statearr_18291_18355[(2)] = null);

(statearr_18291_18355[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (1))){
var state_18288__$1 = state_18288;
var statearr_18292_18356 = state_18288__$1;
(statearr_18292_18356[(2)] = null);

(statearr_18292_18356[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (4))){
var inst_18253 = (state_18288[(7)]);
var inst_18253__$1 = (state_18288[(2)]);
var inst_18254 = (inst_18253__$1 == null);
var state_18288__$1 = (function (){var statearr_18293 = state_18288;
(statearr_18293[(7)] = inst_18253__$1);

return statearr_18293;
})();
if(cljs.core.truth_(inst_18254)){
var statearr_18294_18357 = state_18288__$1;
(statearr_18294_18357[(1)] = (5));

} else {
var statearr_18295_18358 = state_18288__$1;
(statearr_18295_18358[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (15))){
var inst_18266 = (state_18288[(8)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18288__$1,(18),to,inst_18266);
} else {
if((state_val_18289 === (21))){
var inst_18279 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18296_18359 = state_18288__$1;
(statearr_18296_18359[(2)] = inst_18279);

(statearr_18296_18359[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (13))){
var inst_18281 = (state_18288[(2)]);
var state_18288__$1 = (function (){var statearr_18297 = state_18288;
(statearr_18297[(9)] = inst_18281);

return statearr_18297;
})();
var statearr_18298_18360 = state_18288__$1;
(statearr_18298_18360[(2)] = null);

(statearr_18298_18360[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (6))){
var inst_18253 = (state_18288[(7)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18288__$1,(11),inst_18253);
} else {
if((state_val_18289 === (17))){
var inst_18274 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
if(cljs.core.truth_(inst_18274)){
var statearr_18299_18361 = state_18288__$1;
(statearr_18299_18361[(1)] = (19));

} else {
var statearr_18300_18362 = state_18288__$1;
(statearr_18300_18362[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (3))){
var inst_18286 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18288__$1,inst_18286);
} else {
if((state_val_18289 === (12))){
var inst_18263 = (state_18288[(10)]);
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18288__$1,(14),inst_18263);
} else {
if((state_val_18289 === (2))){
var state_18288__$1 = state_18288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18288__$1,(4),results);
} else {
if((state_val_18289 === (19))){
var state_18288__$1 = state_18288;
var statearr_18301_18363 = state_18288__$1;
(statearr_18301_18363[(2)] = null);

(statearr_18301_18363[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (11))){
var inst_18263 = (state_18288[(2)]);
var state_18288__$1 = (function (){var statearr_18302 = state_18288;
(statearr_18302[(10)] = inst_18263);

return statearr_18302;
})();
var statearr_18303_18364 = state_18288__$1;
(statearr_18303_18364[(2)] = null);

(statearr_18303_18364[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (9))){
var state_18288__$1 = state_18288;
var statearr_18304_18365 = state_18288__$1;
(statearr_18304_18365[(2)] = null);

(statearr_18304_18365[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (5))){
var state_18288__$1 = state_18288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18305_18366 = state_18288__$1;
(statearr_18305_18366[(1)] = (8));

} else {
var statearr_18306_18367 = state_18288__$1;
(statearr_18306_18367[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (14))){
var inst_18266 = (state_18288[(8)]);
var inst_18266__$1 = (state_18288[(2)]);
var inst_18267 = (inst_18266__$1 == null);
var inst_18268 = cljs.core.not(inst_18267);
var state_18288__$1 = (function (){var statearr_18307 = state_18288;
(statearr_18307[(8)] = inst_18266__$1);

return statearr_18307;
})();
if(inst_18268){
var statearr_18308_18368 = state_18288__$1;
(statearr_18308_18368[(1)] = (15));

} else {
var statearr_18309_18369 = state_18288__$1;
(statearr_18309_18369[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (16))){
var state_18288__$1 = state_18288;
var statearr_18310_18370 = state_18288__$1;
(statearr_18310_18370[(2)] = false);

(statearr_18310_18370[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (10))){
var inst_18260 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18311_18371 = state_18288__$1;
(statearr_18311_18371[(2)] = inst_18260);

(statearr_18311_18371[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (18))){
var inst_18271 = (state_18288[(2)]);
var state_18288__$1 = state_18288;
var statearr_18312_18372 = state_18288__$1;
(statearr_18312_18372[(2)] = inst_18271);

(statearr_18312_18372[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18289 === (8))){
var inst_18257 = cljs.core.async.close_BANG_(to);
var state_18288__$1 = state_18288;
var statearr_18313_18373 = state_18288__$1;
(statearr_18313_18373[(2)] = inst_18257);

(statearr_18313_18373[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1 = (function (state_18288){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18288);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18315){if((e18315 instanceof Object)){
var ex__17877__auto__ = e18315;
var statearr_18316_18374 = state_18288;
(statearr_18316_18374[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18288);

return cljs.core.cst$kw$recur;
} else {
throw e18315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18375 = state_18288;
state_18288 = G__18375;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__ = function(state_18288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1.call(this,state_18288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17874__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18317 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18317[(6)] = c__17980__auto__);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18377 = arguments.length;
switch (G__18377) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18380 = arguments.length;
switch (G__18380) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18383 = arguments.length;
switch (G__18383) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17980__auto___18432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18409){
var state_val_18410 = (state_18409[(1)]);
if((state_val_18410 === (7))){
var inst_18405 = (state_18409[(2)]);
var state_18409__$1 = state_18409;
var statearr_18411_18433 = state_18409__$1;
(statearr_18411_18433[(2)] = inst_18405);

(statearr_18411_18433[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (1))){
var state_18409__$1 = state_18409;
var statearr_18412_18434 = state_18409__$1;
(statearr_18412_18434[(2)] = null);

(statearr_18412_18434[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (4))){
var inst_18386 = (state_18409[(7)]);
var inst_18386__$1 = (state_18409[(2)]);
var inst_18387 = (inst_18386__$1 == null);
var state_18409__$1 = (function (){var statearr_18413 = state_18409;
(statearr_18413[(7)] = inst_18386__$1);

return statearr_18413;
})();
if(cljs.core.truth_(inst_18387)){
var statearr_18414_18435 = state_18409__$1;
(statearr_18414_18435[(1)] = (5));

} else {
var statearr_18415_18436 = state_18409__$1;
(statearr_18415_18436[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (13))){
var state_18409__$1 = state_18409;
var statearr_18416_18437 = state_18409__$1;
(statearr_18416_18437[(2)] = null);

(statearr_18416_18437[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (6))){
var inst_18386 = (state_18409[(7)]);
var inst_18392 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18386) : p.call(null,inst_18386));
var state_18409__$1 = state_18409;
if(cljs.core.truth_(inst_18392)){
var statearr_18417_18438 = state_18409__$1;
(statearr_18417_18438[(1)] = (9));

} else {
var statearr_18418_18439 = state_18409__$1;
(statearr_18418_18439[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (3))){
var inst_18407 = (state_18409[(2)]);
var state_18409__$1 = state_18409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18409__$1,inst_18407);
} else {
if((state_val_18410 === (12))){
var state_18409__$1 = state_18409;
var statearr_18419_18440 = state_18409__$1;
(statearr_18419_18440[(2)] = null);

(statearr_18419_18440[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (2))){
var state_18409__$1 = state_18409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18409__$1,(4),ch);
} else {
if((state_val_18410 === (11))){
var inst_18386 = (state_18409[(7)]);
var inst_18396 = (state_18409[(2)]);
var state_18409__$1 = state_18409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18409__$1,(8),inst_18396,inst_18386);
} else {
if((state_val_18410 === (9))){
var state_18409__$1 = state_18409;
var statearr_18420_18441 = state_18409__$1;
(statearr_18420_18441[(2)] = tc);

(statearr_18420_18441[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (5))){
var inst_18389 = cljs.core.async.close_BANG_(tc);
var inst_18390 = cljs.core.async.close_BANG_(fc);
var state_18409__$1 = (function (){var statearr_18421 = state_18409;
(statearr_18421[(8)] = inst_18389);

return statearr_18421;
})();
var statearr_18422_18442 = state_18409__$1;
(statearr_18422_18442[(2)] = inst_18390);

(statearr_18422_18442[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (14))){
var inst_18403 = (state_18409[(2)]);
var state_18409__$1 = state_18409;
var statearr_18423_18443 = state_18409__$1;
(statearr_18423_18443[(2)] = inst_18403);

(statearr_18423_18443[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (10))){
var state_18409__$1 = state_18409;
var statearr_18424_18444 = state_18409__$1;
(statearr_18424_18444[(2)] = fc);

(statearr_18424_18444[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (8))){
var inst_18398 = (state_18409[(2)]);
var state_18409__$1 = state_18409;
if(cljs.core.truth_(inst_18398)){
var statearr_18425_18445 = state_18409__$1;
(statearr_18425_18445[(1)] = (12));

} else {
var statearr_18426_18446 = state_18409__$1;
(statearr_18426_18446[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_18427 = [null,null,null,null,null,null,null,null,null];
(statearr_18427[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_18427[(1)] = (1));

return statearr_18427;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_18409){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18409);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18428){if((e18428 instanceof Object)){
var ex__17877__auto__ = e18428;
var statearr_18429_18447 = state_18409;
(statearr_18429_18447[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18409);

return cljs.core.cst$kw$recur;
} else {
throw e18428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18448 = state_18409;
state_18409 = G__18448;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_18409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_18409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18430 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18430[(6)] = c__17980__auto___18432);

return statearr_18430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18469){
var state_val_18470 = (state_18469[(1)]);
if((state_val_18470 === (7))){
var inst_18465 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18471_18489 = state_18469__$1;
(statearr_18471_18489[(2)] = inst_18465);

(statearr_18471_18489[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18470 === (1))){
var inst_18449 = init;
var state_18469__$1 = (function (){var statearr_18472 = state_18469;
(statearr_18472[(7)] = inst_18449);

return statearr_18472;
})();
var statearr_18473_18490 = state_18469__$1;
(statearr_18473_18490[(2)] = null);

(statearr_18473_18490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18470 === (4))){
var inst_18452 = (state_18469[(8)]);
var inst_18452__$1 = (state_18469[(2)]);
var inst_18453 = (inst_18452__$1 == null);
var state_18469__$1 = (function (){var statearr_18474 = state_18469;
(statearr_18474[(8)] = inst_18452__$1);

return statearr_18474;
})();
if(cljs.core.truth_(inst_18453)){
var statearr_18475_18491 = state_18469__$1;
(statearr_18475_18491[(1)] = (5));

} else {
var statearr_18476_18492 = state_18469__$1;
(statearr_18476_18492[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18470 === (6))){
var inst_18452 = (state_18469[(8)]);
var inst_18449 = (state_18469[(7)]);
var inst_18456 = (state_18469[(9)]);
var inst_18456__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18449,inst_18452) : f.call(null,inst_18449,inst_18452));
var inst_18457 = cljs.core.reduced_QMARK_(inst_18456__$1);
var state_18469__$1 = (function (){var statearr_18477 = state_18469;
(statearr_18477[(9)] = inst_18456__$1);

return statearr_18477;
})();
if(inst_18457){
var statearr_18478_18493 = state_18469__$1;
(statearr_18478_18493[(1)] = (8));

} else {
var statearr_18479_18494 = state_18469__$1;
(statearr_18479_18494[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18470 === (3))){
var inst_18467 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18469__$1,inst_18467);
} else {
if((state_val_18470 === (2))){
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18469__$1,(4),ch);
} else {
if((state_val_18470 === (9))){
var inst_18456 = (state_18469[(9)]);
var inst_18449 = inst_18456;
var state_18469__$1 = (function (){var statearr_18480 = state_18469;
(statearr_18480[(7)] = inst_18449);

return statearr_18480;
})();
var statearr_18481_18495 = state_18469__$1;
(statearr_18481_18495[(2)] = null);

(statearr_18481_18495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18470 === (5))){
var inst_18449 = (state_18469[(7)]);
var state_18469__$1 = state_18469;
var statearr_18482_18496 = state_18469__$1;
(statearr_18482_18496[(2)] = inst_18449);

(statearr_18482_18496[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18470 === (10))){
var inst_18463 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18483_18497 = state_18469__$1;
(statearr_18483_18497[(2)] = inst_18463);

(statearr_18483_18497[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18470 === (8))){
var inst_18456 = (state_18469[(9)]);
var inst_18459 = cljs.core.deref(inst_18456);
var state_18469__$1 = state_18469;
var statearr_18484_18498 = state_18469__$1;
(statearr_18484_18498[(2)] = inst_18459);

(statearr_18484_18498[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17874__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17874__auto____0 = (function (){
var statearr_18485 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18485[(0)] = cljs$core$async$reduce_$_state_machine__17874__auto__);

(statearr_18485[(1)] = (1));

return statearr_18485;
});
var cljs$core$async$reduce_$_state_machine__17874__auto____1 = (function (state_18469){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18469);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18486){if((e18486 instanceof Object)){
var ex__17877__auto__ = e18486;
var statearr_18487_18499 = state_18469;
(statearr_18487_18499[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18469);

return cljs.core.cst$kw$recur;
} else {
throw e18486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18500 = state_18469;
state_18469 = G__18500;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17874__auto__ = function(state_18469){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17874__auto____1.call(this,state_18469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17874__auto____0;
cljs$core$async$reduce_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17874__auto____1;
return cljs$core$async$reduce_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18488 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18488[(6)] = c__17980__auto__);

return statearr_18488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18506){
var state_val_18507 = (state_18506[(1)]);
if((state_val_18507 === (1))){
var inst_18501 = cljs.core.async.reduce(f__$1,init,ch);
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18506__$1,(2),inst_18501);
} else {
if((state_val_18507 === (2))){
var inst_18503 = (state_18506[(2)]);
var inst_18504 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18503) : f__$1.call(null,inst_18503));
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18506__$1,inst_18504);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17874__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17874__auto____0 = (function (){
var statearr_18508 = [null,null,null,null,null,null,null];
(statearr_18508[(0)] = cljs$core$async$transduce_$_state_machine__17874__auto__);

(statearr_18508[(1)] = (1));

return statearr_18508;
});
var cljs$core$async$transduce_$_state_machine__17874__auto____1 = (function (state_18506){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18506);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18509){if((e18509 instanceof Object)){
var ex__17877__auto__ = e18509;
var statearr_18510_18512 = state_18506;
(statearr_18510_18512[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18506);

return cljs.core.cst$kw$recur;
} else {
throw e18509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18513 = state_18506;
state_18506 = G__18513;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17874__auto__ = function(state_18506){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17874__auto____1.call(this,state_18506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17874__auto____0;
cljs$core$async$transduce_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17874__auto____1;
return cljs$core$async$transduce_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18511 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18511[(6)] = c__17980__auto__);

return statearr_18511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18515 = arguments.length;
switch (G__18515) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18540){
var state_val_18541 = (state_18540[(1)]);
if((state_val_18541 === (7))){
var inst_18522 = (state_18540[(2)]);
var state_18540__$1 = state_18540;
var statearr_18542_18563 = state_18540__$1;
(statearr_18542_18563[(2)] = inst_18522);

(statearr_18542_18563[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (1))){
var inst_18516 = cljs.core.seq(coll);
var inst_18517 = inst_18516;
var state_18540__$1 = (function (){var statearr_18543 = state_18540;
(statearr_18543[(7)] = inst_18517);

return statearr_18543;
})();
var statearr_18544_18564 = state_18540__$1;
(statearr_18544_18564[(2)] = null);

(statearr_18544_18564[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (4))){
var inst_18517 = (state_18540[(7)]);
var inst_18520 = cljs.core.first(inst_18517);
var state_18540__$1 = state_18540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18540__$1,(7),ch,inst_18520);
} else {
if((state_val_18541 === (13))){
var inst_18534 = (state_18540[(2)]);
var state_18540__$1 = state_18540;
var statearr_18545_18565 = state_18540__$1;
(statearr_18545_18565[(2)] = inst_18534);

(statearr_18545_18565[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (6))){
var inst_18525 = (state_18540[(2)]);
var state_18540__$1 = state_18540;
if(cljs.core.truth_(inst_18525)){
var statearr_18546_18566 = state_18540__$1;
(statearr_18546_18566[(1)] = (8));

} else {
var statearr_18547_18567 = state_18540__$1;
(statearr_18547_18567[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (3))){
var inst_18538 = (state_18540[(2)]);
var state_18540__$1 = state_18540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18540__$1,inst_18538);
} else {
if((state_val_18541 === (12))){
var state_18540__$1 = state_18540;
var statearr_18548_18568 = state_18540__$1;
(statearr_18548_18568[(2)] = null);

(statearr_18548_18568[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (2))){
var inst_18517 = (state_18540[(7)]);
var state_18540__$1 = state_18540;
if(cljs.core.truth_(inst_18517)){
var statearr_18549_18569 = state_18540__$1;
(statearr_18549_18569[(1)] = (4));

} else {
var statearr_18550_18570 = state_18540__$1;
(statearr_18550_18570[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (11))){
var inst_18531 = cljs.core.async.close_BANG_(ch);
var state_18540__$1 = state_18540;
var statearr_18551_18571 = state_18540__$1;
(statearr_18551_18571[(2)] = inst_18531);

(statearr_18551_18571[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (9))){
var state_18540__$1 = state_18540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18552_18572 = state_18540__$1;
(statearr_18552_18572[(1)] = (11));

} else {
var statearr_18553_18573 = state_18540__$1;
(statearr_18553_18573[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (5))){
var inst_18517 = (state_18540[(7)]);
var state_18540__$1 = state_18540;
var statearr_18554_18574 = state_18540__$1;
(statearr_18554_18574[(2)] = inst_18517);

(statearr_18554_18574[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (10))){
var inst_18536 = (state_18540[(2)]);
var state_18540__$1 = state_18540;
var statearr_18555_18575 = state_18540__$1;
(statearr_18555_18575[(2)] = inst_18536);

(statearr_18555_18575[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18541 === (8))){
var inst_18517 = (state_18540[(7)]);
var inst_18527 = cljs.core.next(inst_18517);
var inst_18517__$1 = inst_18527;
var state_18540__$1 = (function (){var statearr_18556 = state_18540;
(statearr_18556[(7)] = inst_18517__$1);

return statearr_18556;
})();
var statearr_18557_18576 = state_18540__$1;
(statearr_18557_18576[(2)] = null);

(statearr_18557_18576[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_18558 = [null,null,null,null,null,null,null,null];
(statearr_18558[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_18558[(1)] = (1));

return statearr_18558;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_18540){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18540);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18559){if((e18559 instanceof Object)){
var ex__17877__auto__ = e18559;
var statearr_18560_18577 = state_18540;
(statearr_18560_18577[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18540);

return cljs.core.cst$kw$recur;
} else {
throw e18559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18578 = state_18540;
state_18540 = G__18578;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_18540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_18540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18561 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18561[(6)] = c__17980__auto__);

return statearr_18561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18579 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18579(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18580 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18580(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18581 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18581(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18582 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18582(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18583 = (function (ch,cs,meta18584){
this.ch = ch;
this.cs = cs;
this.meta18584 = meta18584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18585,meta18584__$1){
var self__ = this;
var _18585__$1 = this;
return (new cljs.core.async.t_cljs$core$async18583(self__.ch,self__.cs,meta18584__$1));
}));

(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18585){
var self__ = this;
var _18585__$1 = this;
return self__.meta18584;
}));

(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18583.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18584], null);
}));

(cljs.core.async.t_cljs$core$async18583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18583");

(cljs.core.async.t_cljs$core$async18583.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18583.
 */
cljs.core.async.__GT_t_cljs$core$async18583 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18583(ch__$1,cs__$1,meta18584){
return (new cljs.core.async.t_cljs$core$async18583(ch__$1,cs__$1,meta18584));
});

}

return (new cljs.core.async.t_cljs$core$async18583(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17980__auto___18805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18720){
var state_val_18721 = (state_18720[(1)]);
if((state_val_18721 === (7))){
var inst_18716 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18722_18806 = state_18720__$1;
(statearr_18722_18806[(2)] = inst_18716);

(statearr_18722_18806[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (20))){
var inst_18619 = (state_18720[(7)]);
var inst_18631 = cljs.core.first(inst_18619);
var inst_18632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18631,(0),null);
var inst_18633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18631,(1),null);
var state_18720__$1 = (function (){var statearr_18723 = state_18720;
(statearr_18723[(8)] = inst_18632);

return statearr_18723;
})();
if(cljs.core.truth_(inst_18633)){
var statearr_18724_18807 = state_18720__$1;
(statearr_18724_18807[(1)] = (22));

} else {
var statearr_18725_18808 = state_18720__$1;
(statearr_18725_18808[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (27))){
var inst_18588 = (state_18720[(9)]);
var inst_18661 = (state_18720[(10)]);
var inst_18668 = (state_18720[(11)]);
var inst_18663 = (state_18720[(12)]);
var inst_18668__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18661,inst_18663);
var inst_18669 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18668__$1,inst_18588,done);
var state_18720__$1 = (function (){var statearr_18726 = state_18720;
(statearr_18726[(11)] = inst_18668__$1);

return statearr_18726;
})();
if(cljs.core.truth_(inst_18669)){
var statearr_18727_18809 = state_18720__$1;
(statearr_18727_18809[(1)] = (30));

} else {
var statearr_18728_18810 = state_18720__$1;
(statearr_18728_18810[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (1))){
var state_18720__$1 = state_18720;
var statearr_18729_18811 = state_18720__$1;
(statearr_18729_18811[(2)] = null);

(statearr_18729_18811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (24))){
var inst_18619 = (state_18720[(7)]);
var inst_18638 = (state_18720[(2)]);
var inst_18639 = cljs.core.next(inst_18619);
var inst_18597 = inst_18639;
var inst_18598 = null;
var inst_18599 = (0);
var inst_18600 = (0);
var state_18720__$1 = (function (){var statearr_18730 = state_18720;
(statearr_18730[(13)] = inst_18600);

(statearr_18730[(14)] = inst_18598);

(statearr_18730[(15)] = inst_18599);

(statearr_18730[(16)] = inst_18638);

(statearr_18730[(17)] = inst_18597);

return statearr_18730;
})();
var statearr_18731_18812 = state_18720__$1;
(statearr_18731_18812[(2)] = null);

(statearr_18731_18812[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (39))){
var state_18720__$1 = state_18720;
var statearr_18735_18813 = state_18720__$1;
(statearr_18735_18813[(2)] = null);

(statearr_18735_18813[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (4))){
var inst_18588 = (state_18720[(9)]);
var inst_18588__$1 = (state_18720[(2)]);
var inst_18589 = (inst_18588__$1 == null);
var state_18720__$1 = (function (){var statearr_18736 = state_18720;
(statearr_18736[(9)] = inst_18588__$1);

return statearr_18736;
})();
if(cljs.core.truth_(inst_18589)){
var statearr_18737_18814 = state_18720__$1;
(statearr_18737_18814[(1)] = (5));

} else {
var statearr_18738_18815 = state_18720__$1;
(statearr_18738_18815[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (15))){
var inst_18600 = (state_18720[(13)]);
var inst_18598 = (state_18720[(14)]);
var inst_18599 = (state_18720[(15)]);
var inst_18597 = (state_18720[(17)]);
var inst_18615 = (state_18720[(2)]);
var inst_18616 = (inst_18600 + (1));
var tmp18732 = inst_18598;
var tmp18733 = inst_18599;
var tmp18734 = inst_18597;
var inst_18597__$1 = tmp18734;
var inst_18598__$1 = tmp18732;
var inst_18599__$1 = tmp18733;
var inst_18600__$1 = inst_18616;
var state_18720__$1 = (function (){var statearr_18739 = state_18720;
(statearr_18739[(13)] = inst_18600__$1);

(statearr_18739[(14)] = inst_18598__$1);

(statearr_18739[(18)] = inst_18615);

(statearr_18739[(15)] = inst_18599__$1);

(statearr_18739[(17)] = inst_18597__$1);

return statearr_18739;
})();
var statearr_18740_18816 = state_18720__$1;
(statearr_18740_18816[(2)] = null);

(statearr_18740_18816[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (21))){
var inst_18642 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18744_18817 = state_18720__$1;
(statearr_18744_18817[(2)] = inst_18642);

(statearr_18744_18817[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (31))){
var inst_18668 = (state_18720[(11)]);
var inst_18672 = done(null);
var inst_18673 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18668);
var state_18720__$1 = (function (){var statearr_18745 = state_18720;
(statearr_18745[(19)] = inst_18672);

return statearr_18745;
})();
var statearr_18746_18818 = state_18720__$1;
(statearr_18746_18818[(2)] = inst_18673);

(statearr_18746_18818[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (32))){
var inst_18662 = (state_18720[(20)]);
var inst_18660 = (state_18720[(21)]);
var inst_18661 = (state_18720[(10)]);
var inst_18663 = (state_18720[(12)]);
var inst_18675 = (state_18720[(2)]);
var inst_18676 = (inst_18663 + (1));
var tmp18741 = inst_18662;
var tmp18742 = inst_18660;
var tmp18743 = inst_18661;
var inst_18660__$1 = tmp18742;
var inst_18661__$1 = tmp18743;
var inst_18662__$1 = tmp18741;
var inst_18663__$1 = inst_18676;
var state_18720__$1 = (function (){var statearr_18747 = state_18720;
(statearr_18747[(20)] = inst_18662__$1);

(statearr_18747[(21)] = inst_18660__$1);

(statearr_18747[(10)] = inst_18661__$1);

(statearr_18747[(22)] = inst_18675);

(statearr_18747[(12)] = inst_18663__$1);

return statearr_18747;
})();
var statearr_18748_18819 = state_18720__$1;
(statearr_18748_18819[(2)] = null);

(statearr_18748_18819[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (40))){
var inst_18688 = (state_18720[(23)]);
var inst_18692 = done(null);
var inst_18693 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18688);
var state_18720__$1 = (function (){var statearr_18749 = state_18720;
(statearr_18749[(24)] = inst_18692);

return statearr_18749;
})();
var statearr_18750_18820 = state_18720__$1;
(statearr_18750_18820[(2)] = inst_18693);

(statearr_18750_18820[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (33))){
var inst_18679 = (state_18720[(25)]);
var inst_18681 = cljs.core.chunked_seq_QMARK_(inst_18679);
var state_18720__$1 = state_18720;
if(inst_18681){
var statearr_18751_18821 = state_18720__$1;
(statearr_18751_18821[(1)] = (36));

} else {
var statearr_18752_18822 = state_18720__$1;
(statearr_18752_18822[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (13))){
var inst_18609 = (state_18720[(26)]);
var inst_18612 = cljs.core.async.close_BANG_(inst_18609);
var state_18720__$1 = state_18720;
var statearr_18753_18823 = state_18720__$1;
(statearr_18753_18823[(2)] = inst_18612);

(statearr_18753_18823[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (22))){
var inst_18632 = (state_18720[(8)]);
var inst_18635 = cljs.core.async.close_BANG_(inst_18632);
var state_18720__$1 = state_18720;
var statearr_18754_18824 = state_18720__$1;
(statearr_18754_18824[(2)] = inst_18635);

(statearr_18754_18824[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (36))){
var inst_18679 = (state_18720[(25)]);
var inst_18683 = cljs.core.chunk_first(inst_18679);
var inst_18684 = cljs.core.chunk_rest(inst_18679);
var inst_18685 = cljs.core.count(inst_18683);
var inst_18660 = inst_18684;
var inst_18661 = inst_18683;
var inst_18662 = inst_18685;
var inst_18663 = (0);
var state_18720__$1 = (function (){var statearr_18755 = state_18720;
(statearr_18755[(20)] = inst_18662);

(statearr_18755[(21)] = inst_18660);

(statearr_18755[(10)] = inst_18661);

(statearr_18755[(12)] = inst_18663);

return statearr_18755;
})();
var statearr_18756_18825 = state_18720__$1;
(statearr_18756_18825[(2)] = null);

(statearr_18756_18825[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (41))){
var inst_18679 = (state_18720[(25)]);
var inst_18695 = (state_18720[(2)]);
var inst_18696 = cljs.core.next(inst_18679);
var inst_18660 = inst_18696;
var inst_18661 = null;
var inst_18662 = (0);
var inst_18663 = (0);
var state_18720__$1 = (function (){var statearr_18757 = state_18720;
(statearr_18757[(20)] = inst_18662);

(statearr_18757[(27)] = inst_18695);

(statearr_18757[(21)] = inst_18660);

(statearr_18757[(10)] = inst_18661);

(statearr_18757[(12)] = inst_18663);

return statearr_18757;
})();
var statearr_18758_18826 = state_18720__$1;
(statearr_18758_18826[(2)] = null);

(statearr_18758_18826[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (43))){
var state_18720__$1 = state_18720;
var statearr_18759_18827 = state_18720__$1;
(statearr_18759_18827[(2)] = null);

(statearr_18759_18827[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (29))){
var inst_18704 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18760_18828 = state_18720__$1;
(statearr_18760_18828[(2)] = inst_18704);

(statearr_18760_18828[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (44))){
var inst_18713 = (state_18720[(2)]);
var state_18720__$1 = (function (){var statearr_18761 = state_18720;
(statearr_18761[(28)] = inst_18713);

return statearr_18761;
})();
var statearr_18762_18829 = state_18720__$1;
(statearr_18762_18829[(2)] = null);

(statearr_18762_18829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (6))){
var inst_18652 = (state_18720[(29)]);
var inst_18651 = cljs.core.deref(cs);
var inst_18652__$1 = cljs.core.keys(inst_18651);
var inst_18653 = cljs.core.count(inst_18652__$1);
var inst_18654 = cljs.core.reset_BANG_(dctr,inst_18653);
var inst_18659 = cljs.core.seq(inst_18652__$1);
var inst_18660 = inst_18659;
var inst_18661 = null;
var inst_18662 = (0);
var inst_18663 = (0);
var state_18720__$1 = (function (){var statearr_18763 = state_18720;
(statearr_18763[(20)] = inst_18662);

(statearr_18763[(29)] = inst_18652__$1);

(statearr_18763[(30)] = inst_18654);

(statearr_18763[(21)] = inst_18660);

(statearr_18763[(10)] = inst_18661);

(statearr_18763[(12)] = inst_18663);

return statearr_18763;
})();
var statearr_18764_18830 = state_18720__$1;
(statearr_18764_18830[(2)] = null);

(statearr_18764_18830[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (28))){
var inst_18660 = (state_18720[(21)]);
var inst_18679 = (state_18720[(25)]);
var inst_18679__$1 = cljs.core.seq(inst_18660);
var state_18720__$1 = (function (){var statearr_18765 = state_18720;
(statearr_18765[(25)] = inst_18679__$1);

return statearr_18765;
})();
if(inst_18679__$1){
var statearr_18766_18831 = state_18720__$1;
(statearr_18766_18831[(1)] = (33));

} else {
var statearr_18767_18832 = state_18720__$1;
(statearr_18767_18832[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (25))){
var inst_18662 = (state_18720[(20)]);
var inst_18663 = (state_18720[(12)]);
var inst_18665 = (inst_18663 < inst_18662);
var inst_18666 = inst_18665;
var state_18720__$1 = state_18720;
if(cljs.core.truth_(inst_18666)){
var statearr_18768_18833 = state_18720__$1;
(statearr_18768_18833[(1)] = (27));

} else {
var statearr_18769_18834 = state_18720__$1;
(statearr_18769_18834[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (34))){
var state_18720__$1 = state_18720;
var statearr_18770_18835 = state_18720__$1;
(statearr_18770_18835[(2)] = null);

(statearr_18770_18835[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (17))){
var state_18720__$1 = state_18720;
var statearr_18771_18836 = state_18720__$1;
(statearr_18771_18836[(2)] = null);

(statearr_18771_18836[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (3))){
var inst_18718 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18720__$1,inst_18718);
} else {
if((state_val_18721 === (12))){
var inst_18647 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18772_18837 = state_18720__$1;
(statearr_18772_18837[(2)] = inst_18647);

(statearr_18772_18837[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (2))){
var state_18720__$1 = state_18720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18720__$1,(4),ch);
} else {
if((state_val_18721 === (23))){
var state_18720__$1 = state_18720;
var statearr_18773_18838 = state_18720__$1;
(statearr_18773_18838[(2)] = null);

(statearr_18773_18838[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (35))){
var inst_18702 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18774_18839 = state_18720__$1;
(statearr_18774_18839[(2)] = inst_18702);

(statearr_18774_18839[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (19))){
var inst_18619 = (state_18720[(7)]);
var inst_18623 = cljs.core.chunk_first(inst_18619);
var inst_18624 = cljs.core.chunk_rest(inst_18619);
var inst_18625 = cljs.core.count(inst_18623);
var inst_18597 = inst_18624;
var inst_18598 = inst_18623;
var inst_18599 = inst_18625;
var inst_18600 = (0);
var state_18720__$1 = (function (){var statearr_18775 = state_18720;
(statearr_18775[(13)] = inst_18600);

(statearr_18775[(14)] = inst_18598);

(statearr_18775[(15)] = inst_18599);

(statearr_18775[(17)] = inst_18597);

return statearr_18775;
})();
var statearr_18776_18840 = state_18720__$1;
(statearr_18776_18840[(2)] = null);

(statearr_18776_18840[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (11))){
var inst_18597 = (state_18720[(17)]);
var inst_18619 = (state_18720[(7)]);
var inst_18619__$1 = cljs.core.seq(inst_18597);
var state_18720__$1 = (function (){var statearr_18777 = state_18720;
(statearr_18777[(7)] = inst_18619__$1);

return statearr_18777;
})();
if(inst_18619__$1){
var statearr_18778_18841 = state_18720__$1;
(statearr_18778_18841[(1)] = (16));

} else {
var statearr_18779_18842 = state_18720__$1;
(statearr_18779_18842[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (9))){
var inst_18649 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18780_18843 = state_18720__$1;
(statearr_18780_18843[(2)] = inst_18649);

(statearr_18780_18843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (5))){
var inst_18595 = cljs.core.deref(cs);
var inst_18596 = cljs.core.seq(inst_18595);
var inst_18597 = inst_18596;
var inst_18598 = null;
var inst_18599 = (0);
var inst_18600 = (0);
var state_18720__$1 = (function (){var statearr_18781 = state_18720;
(statearr_18781[(13)] = inst_18600);

(statearr_18781[(14)] = inst_18598);

(statearr_18781[(15)] = inst_18599);

(statearr_18781[(17)] = inst_18597);

return statearr_18781;
})();
var statearr_18782_18844 = state_18720__$1;
(statearr_18782_18844[(2)] = null);

(statearr_18782_18844[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (14))){
var state_18720__$1 = state_18720;
var statearr_18783_18845 = state_18720__$1;
(statearr_18783_18845[(2)] = null);

(statearr_18783_18845[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (45))){
var inst_18710 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18784_18846 = state_18720__$1;
(statearr_18784_18846[(2)] = inst_18710);

(statearr_18784_18846[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (26))){
var inst_18652 = (state_18720[(29)]);
var inst_18706 = (state_18720[(2)]);
var inst_18707 = cljs.core.seq(inst_18652);
var state_18720__$1 = (function (){var statearr_18785 = state_18720;
(statearr_18785[(31)] = inst_18706);

return statearr_18785;
})();
if(inst_18707){
var statearr_18786_18847 = state_18720__$1;
(statearr_18786_18847[(1)] = (42));

} else {
var statearr_18787_18848 = state_18720__$1;
(statearr_18787_18848[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (16))){
var inst_18619 = (state_18720[(7)]);
var inst_18621 = cljs.core.chunked_seq_QMARK_(inst_18619);
var state_18720__$1 = state_18720;
if(inst_18621){
var statearr_18788_18849 = state_18720__$1;
(statearr_18788_18849[(1)] = (19));

} else {
var statearr_18789_18850 = state_18720__$1;
(statearr_18789_18850[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (38))){
var inst_18699 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18790_18851 = state_18720__$1;
(statearr_18790_18851[(2)] = inst_18699);

(statearr_18790_18851[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (30))){
var state_18720__$1 = state_18720;
var statearr_18791_18852 = state_18720__$1;
(statearr_18791_18852[(2)] = null);

(statearr_18791_18852[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (10))){
var inst_18600 = (state_18720[(13)]);
var inst_18598 = (state_18720[(14)]);
var inst_18608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18598,inst_18600);
var inst_18609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18608,(0),null);
var inst_18610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18608,(1),null);
var state_18720__$1 = (function (){var statearr_18792 = state_18720;
(statearr_18792[(26)] = inst_18609);

return statearr_18792;
})();
if(cljs.core.truth_(inst_18610)){
var statearr_18793_18853 = state_18720__$1;
(statearr_18793_18853[(1)] = (13));

} else {
var statearr_18794_18854 = state_18720__$1;
(statearr_18794_18854[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (18))){
var inst_18645 = (state_18720[(2)]);
var state_18720__$1 = state_18720;
var statearr_18795_18855 = state_18720__$1;
(statearr_18795_18855[(2)] = inst_18645);

(statearr_18795_18855[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (42))){
var state_18720__$1 = state_18720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18720__$1,(45),dchan);
} else {
if((state_val_18721 === (37))){
var inst_18688 = (state_18720[(23)]);
var inst_18588 = (state_18720[(9)]);
var inst_18679 = (state_18720[(25)]);
var inst_18688__$1 = cljs.core.first(inst_18679);
var inst_18689 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18688__$1,inst_18588,done);
var state_18720__$1 = (function (){var statearr_18796 = state_18720;
(statearr_18796[(23)] = inst_18688__$1);

return statearr_18796;
})();
if(cljs.core.truth_(inst_18689)){
var statearr_18797_18856 = state_18720__$1;
(statearr_18797_18856[(1)] = (39));

} else {
var statearr_18798_18857 = state_18720__$1;
(statearr_18798_18857[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18721 === (8))){
var inst_18600 = (state_18720[(13)]);
var inst_18599 = (state_18720[(15)]);
var inst_18602 = (inst_18600 < inst_18599);
var inst_18603 = inst_18602;
var state_18720__$1 = state_18720;
if(cljs.core.truth_(inst_18603)){
var statearr_18799_18858 = state_18720__$1;
(statearr_18799_18858[(1)] = (10));

} else {
var statearr_18800_18859 = state_18720__$1;
(statearr_18800_18859[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__17874__auto__ = null;
var cljs$core$async$mult_$_state_machine__17874__auto____0 = (function (){
var statearr_18801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18801[(0)] = cljs$core$async$mult_$_state_machine__17874__auto__);

(statearr_18801[(1)] = (1));

return statearr_18801;
});
var cljs$core$async$mult_$_state_machine__17874__auto____1 = (function (state_18720){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18720);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e18802){if((e18802 instanceof Object)){
var ex__17877__auto__ = e18802;
var statearr_18803_18860 = state_18720;
(statearr_18803_18860[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18720);

return cljs.core.cst$kw$recur;
} else {
throw e18802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__18861 = state_18720;
state_18720 = G__18861;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17874__auto__ = function(state_18720){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17874__auto____1.call(this,state_18720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17874__auto____0;
cljs$core$async$mult_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17874__auto____1;
return cljs$core$async$mult_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_18804 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_18804[(6)] = c__17980__auto___18805);

return statearr_18804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18863 = arguments.length;
switch (G__18863) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18865 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18865(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18866 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18866(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18867 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18867(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18868 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18868(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18869 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18869(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18880 = arguments.length;
var i__4737__auto___18881 = (0);
while(true){
if((i__4737__auto___18881 < len__4736__auto___18880)){
args__4742__auto__.push((arguments[i__4737__auto___18881]));

var G__18882 = (i__4737__auto___18881 + (1));
i__4737__auto___18881 = G__18882;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18874){
var map__18875 = p__18874;
var map__18875__$1 = (((((!((map__18875 == null))))?(((((map__18875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18875):map__18875);
var opts = map__18875__$1;
var statearr_18877_18883 = state;
(statearr_18877_18883[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18878_18884 = state;
(statearr_18878_18884[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_18879_18885 = state;
(statearr_18879_18885[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18870){
var G__18871 = cljs.core.first(seq18870);
var seq18870__$1 = cljs.core.next(seq18870);
var G__18872 = cljs.core.first(seq18870__$1);
var seq18870__$2 = cljs.core.next(seq18870__$1);
var G__18873 = cljs.core.first(seq18870__$2);
var seq18870__$3 = cljs.core.next(seq18870__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18871,G__18872,G__18873,seq18870__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18886 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18887){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18887 = meta18887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18888,meta18887__$1){
var self__ = this;
var _18888__$1 = this;
return (new cljs.core.async.t_cljs$core$async18886(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18887__$1));
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18888){
var self__ = this;
var _18888__$1 = this;
return self__.meta18887;
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18886.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta18887], null);
}));

(cljs.core.async.t_cljs$core$async18886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18886");

(cljs.core.async.t_cljs$core$async18886.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async18886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18886.
 */
cljs.core.async.__GT_t_cljs$core$async18886 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18886(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18887){
return (new cljs.core.async.t_cljs$core$async18886(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18887));
});

}

return (new cljs.core.async.t_cljs$core$async18886(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17980__auto___19050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_18990){
var state_val_18991 = (state_18990[(1)]);
if((state_val_18991 === (7))){
var inst_18905 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
var statearr_18992_19051 = state_18990__$1;
(statearr_18992_19051[(2)] = inst_18905);

(statearr_18992_19051[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (20))){
var inst_18917 = (state_18990[(7)]);
var state_18990__$1 = state_18990;
var statearr_18993_19052 = state_18990__$1;
(statearr_18993_19052[(2)] = inst_18917);

(statearr_18993_19052[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (27))){
var state_18990__$1 = state_18990;
var statearr_18994_19053 = state_18990__$1;
(statearr_18994_19053[(2)] = null);

(statearr_18994_19053[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (1))){
var inst_18892 = (state_18990[(8)]);
var inst_18892__$1 = calc_state();
var inst_18894 = (inst_18892__$1 == null);
var inst_18895 = cljs.core.not(inst_18894);
var state_18990__$1 = (function (){var statearr_18995 = state_18990;
(statearr_18995[(8)] = inst_18892__$1);

return statearr_18995;
})();
if(inst_18895){
var statearr_18996_19054 = state_18990__$1;
(statearr_18996_19054[(1)] = (2));

} else {
var statearr_18997_19055 = state_18990__$1;
(statearr_18997_19055[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (24))){
var inst_18964 = (state_18990[(9)]);
var inst_18941 = (state_18990[(10)]);
var inst_18950 = (state_18990[(11)]);
var inst_18964__$1 = (inst_18941.cljs$core$IFn$_invoke$arity$1 ? inst_18941.cljs$core$IFn$_invoke$arity$1(inst_18950) : inst_18941.call(null,inst_18950));
var state_18990__$1 = (function (){var statearr_18998 = state_18990;
(statearr_18998[(9)] = inst_18964__$1);

return statearr_18998;
})();
if(cljs.core.truth_(inst_18964__$1)){
var statearr_18999_19056 = state_18990__$1;
(statearr_18999_19056[(1)] = (29));

} else {
var statearr_19000_19057 = state_18990__$1;
(statearr_19000_19057[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (4))){
var inst_18908 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18908)){
var statearr_19001_19058 = state_18990__$1;
(statearr_19001_19058[(1)] = (8));

} else {
var statearr_19002_19059 = state_18990__$1;
(statearr_19002_19059[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (15))){
var inst_18935 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18935)){
var statearr_19003_19060 = state_18990__$1;
(statearr_19003_19060[(1)] = (19));

} else {
var statearr_19004_19061 = state_18990__$1;
(statearr_19004_19061[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (21))){
var inst_18940 = (state_18990[(12)]);
var inst_18940__$1 = (state_18990[(2)]);
var inst_18941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18940__$1,cljs.core.cst$kw$solos);
var inst_18942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18940__$1,cljs.core.cst$kw$mutes);
var inst_18943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18940__$1,cljs.core.cst$kw$reads);
var state_18990__$1 = (function (){var statearr_19005 = state_18990;
(statearr_19005[(12)] = inst_18940__$1);

(statearr_19005[(10)] = inst_18941);

(statearr_19005[(13)] = inst_18942);

return statearr_19005;
})();
return cljs.core.async.ioc_alts_BANG_(state_18990__$1,(22),inst_18943);
} else {
if((state_val_18991 === (31))){
var inst_18972 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18972)){
var statearr_19006_19062 = state_18990__$1;
(statearr_19006_19062[(1)] = (32));

} else {
var statearr_19007_19063 = state_18990__$1;
(statearr_19007_19063[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (32))){
var inst_18949 = (state_18990[(14)]);
var state_18990__$1 = state_18990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18990__$1,(35),out,inst_18949);
} else {
if((state_val_18991 === (33))){
var inst_18940 = (state_18990[(12)]);
var inst_18917 = inst_18940;
var state_18990__$1 = (function (){var statearr_19008 = state_18990;
(statearr_19008[(7)] = inst_18917);

return statearr_19008;
})();
var statearr_19009_19064 = state_18990__$1;
(statearr_19009_19064[(2)] = null);

(statearr_19009_19064[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (13))){
var inst_18917 = (state_18990[(7)]);
var inst_18924 = inst_18917.cljs$lang$protocol_mask$partition0$;
var inst_18925 = (inst_18924 & (64));
var inst_18926 = inst_18917.cljs$core$ISeq$;
var inst_18927 = (cljs.core.PROTOCOL_SENTINEL === inst_18926);
var inst_18928 = ((inst_18925) || (inst_18927));
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18928)){
var statearr_19010_19065 = state_18990__$1;
(statearr_19010_19065[(1)] = (16));

} else {
var statearr_19011_19066 = state_18990__$1;
(statearr_19011_19066[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (22))){
var inst_18950 = (state_18990[(11)]);
var inst_18949 = (state_18990[(14)]);
var inst_18948 = (state_18990[(2)]);
var inst_18949__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18948,(0),null);
var inst_18950__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18948,(1),null);
var inst_18951 = (inst_18949__$1 == null);
var inst_18952 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18950__$1,change);
var inst_18953 = ((inst_18951) || (inst_18952));
var state_18990__$1 = (function (){var statearr_19012 = state_18990;
(statearr_19012[(11)] = inst_18950__$1);

(statearr_19012[(14)] = inst_18949__$1);

return statearr_19012;
})();
if(cljs.core.truth_(inst_18953)){
var statearr_19013_19067 = state_18990__$1;
(statearr_19013_19067[(1)] = (23));

} else {
var statearr_19014_19068 = state_18990__$1;
(statearr_19014_19068[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (36))){
var inst_18940 = (state_18990[(12)]);
var inst_18917 = inst_18940;
var state_18990__$1 = (function (){var statearr_19015 = state_18990;
(statearr_19015[(7)] = inst_18917);

return statearr_19015;
})();
var statearr_19016_19069 = state_18990__$1;
(statearr_19016_19069[(2)] = null);

(statearr_19016_19069[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (29))){
var inst_18964 = (state_18990[(9)]);
var state_18990__$1 = state_18990;
var statearr_19017_19070 = state_18990__$1;
(statearr_19017_19070[(2)] = inst_18964);

(statearr_19017_19070[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (6))){
var state_18990__$1 = state_18990;
var statearr_19018_19071 = state_18990__$1;
(statearr_19018_19071[(2)] = false);

(statearr_19018_19071[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (28))){
var inst_18960 = (state_18990[(2)]);
var inst_18961 = calc_state();
var inst_18917 = inst_18961;
var state_18990__$1 = (function (){var statearr_19019 = state_18990;
(statearr_19019[(7)] = inst_18917);

(statearr_19019[(15)] = inst_18960);

return statearr_19019;
})();
var statearr_19020_19072 = state_18990__$1;
(statearr_19020_19072[(2)] = null);

(statearr_19020_19072[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (25))){
var inst_18986 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
var statearr_19021_19073 = state_18990__$1;
(statearr_19021_19073[(2)] = inst_18986);

(statearr_19021_19073[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (34))){
var inst_18984 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
var statearr_19022_19074 = state_18990__$1;
(statearr_19022_19074[(2)] = inst_18984);

(statearr_19022_19074[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (17))){
var state_18990__$1 = state_18990;
var statearr_19023_19075 = state_18990__$1;
(statearr_19023_19075[(2)] = false);

(statearr_19023_19075[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (3))){
var state_18990__$1 = state_18990;
var statearr_19024_19076 = state_18990__$1;
(statearr_19024_19076[(2)] = false);

(statearr_19024_19076[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (12))){
var inst_18988 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18990__$1,inst_18988);
} else {
if((state_val_18991 === (2))){
var inst_18892 = (state_18990[(8)]);
var inst_18897 = inst_18892.cljs$lang$protocol_mask$partition0$;
var inst_18898 = (inst_18897 & (64));
var inst_18899 = inst_18892.cljs$core$ISeq$;
var inst_18900 = (cljs.core.PROTOCOL_SENTINEL === inst_18899);
var inst_18901 = ((inst_18898) || (inst_18900));
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18901)){
var statearr_19025_19077 = state_18990__$1;
(statearr_19025_19077[(1)] = (5));

} else {
var statearr_19026_19078 = state_18990__$1;
(statearr_19026_19078[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (23))){
var inst_18949 = (state_18990[(14)]);
var inst_18955 = (inst_18949 == null);
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18955)){
var statearr_19027_19079 = state_18990__$1;
(statearr_19027_19079[(1)] = (26));

} else {
var statearr_19028_19080 = state_18990__$1;
(statearr_19028_19080[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (35))){
var inst_18975 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
if(cljs.core.truth_(inst_18975)){
var statearr_19029_19081 = state_18990__$1;
(statearr_19029_19081[(1)] = (36));

} else {
var statearr_19030_19082 = state_18990__$1;
(statearr_19030_19082[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (19))){
var inst_18917 = (state_18990[(7)]);
var inst_18937 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18917);
var state_18990__$1 = state_18990;
var statearr_19031_19083 = state_18990__$1;
(statearr_19031_19083[(2)] = inst_18937);

(statearr_19031_19083[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (11))){
var inst_18917 = (state_18990[(7)]);
var inst_18921 = (inst_18917 == null);
var inst_18922 = cljs.core.not(inst_18921);
var state_18990__$1 = state_18990;
if(inst_18922){
var statearr_19032_19084 = state_18990__$1;
(statearr_19032_19084[(1)] = (13));

} else {
var statearr_19033_19085 = state_18990__$1;
(statearr_19033_19085[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (9))){
var inst_18892 = (state_18990[(8)]);
var state_18990__$1 = state_18990;
var statearr_19034_19086 = state_18990__$1;
(statearr_19034_19086[(2)] = inst_18892);

(statearr_19034_19086[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (5))){
var state_18990__$1 = state_18990;
var statearr_19035_19087 = state_18990__$1;
(statearr_19035_19087[(2)] = true);

(statearr_19035_19087[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (14))){
var state_18990__$1 = state_18990;
var statearr_19036_19088 = state_18990__$1;
(statearr_19036_19088[(2)] = false);

(statearr_19036_19088[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (26))){
var inst_18950 = (state_18990[(11)]);
var inst_18957 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18950);
var state_18990__$1 = state_18990;
var statearr_19037_19089 = state_18990__$1;
(statearr_19037_19089[(2)] = inst_18957);

(statearr_19037_19089[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (16))){
var state_18990__$1 = state_18990;
var statearr_19038_19090 = state_18990__$1;
(statearr_19038_19090[(2)] = true);

(statearr_19038_19090[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (38))){
var inst_18980 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
var statearr_19039_19091 = state_18990__$1;
(statearr_19039_19091[(2)] = inst_18980);

(statearr_19039_19091[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (30))){
var inst_18941 = (state_18990[(10)]);
var inst_18950 = (state_18990[(11)]);
var inst_18942 = (state_18990[(13)]);
var inst_18967 = cljs.core.empty_QMARK_(inst_18941);
var inst_18968 = (inst_18942.cljs$core$IFn$_invoke$arity$1 ? inst_18942.cljs$core$IFn$_invoke$arity$1(inst_18950) : inst_18942.call(null,inst_18950));
var inst_18969 = cljs.core.not(inst_18968);
var inst_18970 = ((inst_18967) && (inst_18969));
var state_18990__$1 = state_18990;
var statearr_19040_19092 = state_18990__$1;
(statearr_19040_19092[(2)] = inst_18970);

(statearr_19040_19092[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (10))){
var inst_18892 = (state_18990[(8)]);
var inst_18913 = (state_18990[(2)]);
var inst_18914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18913,cljs.core.cst$kw$solos);
var inst_18915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18913,cljs.core.cst$kw$mutes);
var inst_18916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18913,cljs.core.cst$kw$reads);
var inst_18917 = inst_18892;
var state_18990__$1 = (function (){var statearr_19041 = state_18990;
(statearr_19041[(16)] = inst_18915);

(statearr_19041[(17)] = inst_18914);

(statearr_19041[(7)] = inst_18917);

(statearr_19041[(18)] = inst_18916);

return statearr_19041;
})();
var statearr_19042_19093 = state_18990__$1;
(statearr_19042_19093[(2)] = null);

(statearr_19042_19093[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (18))){
var inst_18932 = (state_18990[(2)]);
var state_18990__$1 = state_18990;
var statearr_19043_19094 = state_18990__$1;
(statearr_19043_19094[(2)] = inst_18932);

(statearr_19043_19094[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (37))){
var state_18990__$1 = state_18990;
var statearr_19044_19095 = state_18990__$1;
(statearr_19044_19095[(2)] = null);

(statearr_19044_19095[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18991 === (8))){
var inst_18892 = (state_18990[(8)]);
var inst_18910 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18892);
var state_18990__$1 = state_18990;
var statearr_19045_19096 = state_18990__$1;
(statearr_19045_19096[(2)] = inst_18910);

(statearr_19045_19096[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__17874__auto__ = null;
var cljs$core$async$mix_$_state_machine__17874__auto____0 = (function (){
var statearr_19046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19046[(0)] = cljs$core$async$mix_$_state_machine__17874__auto__);

(statearr_19046[(1)] = (1));

return statearr_19046;
});
var cljs$core$async$mix_$_state_machine__17874__auto____1 = (function (state_18990){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_18990);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19047){if((e19047 instanceof Object)){
var ex__17877__auto__ = e19047;
var statearr_19048_19097 = state_18990;
(statearr_19048_19097[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18990);

return cljs.core.cst$kw$recur;
} else {
throw e19047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19098 = state_18990;
state_18990 = G__19098;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17874__auto__ = function(state_18990){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17874__auto____1.call(this,state_18990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17874__auto____0;
cljs$core$async$mix_$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17874__auto____1;
return cljs$core$async$mix_$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19049 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19049[(6)] = c__17980__auto___19050);

return statearr_19049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19101 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19101(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19102 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19102(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19103 = (function() {
var G__19104 = null;
var G__19104__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19104__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19104 = function(p,v){
switch(arguments.length){
case 1:
return G__19104__1.call(this,p);
case 2:
return G__19104__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19104.cljs$core$IFn$_invoke$arity$1 = G__19104__1;
G__19104.cljs$core$IFn$_invoke$arity$2 = G__19104__2;
return G__19104;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19100 = arguments.length;
switch (G__19100) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19103.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19103.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19108 = arguments.length;
switch (G__19108) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19106_SHARP_){
if(cljs.core.truth_((p1__19106_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19106_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19106_SHARP_.call(null,topic)))){
return p1__19106_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19106_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19109 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19110){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19110 = meta19110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19111,meta19110__$1){
var self__ = this;
var _19111__$1 = this;
return (new cljs.core.async.t_cljs$core$async19109(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19110__$1));
}));

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19111){
var self__ = this;
var _19111__$1 = this;
return self__.meta19110;
}));

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19110], null);
}));

(cljs.core.async.t_cljs$core$async19109.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19109");

(cljs.core.async.t_cljs$core$async19109.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19109");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19109.
 */
cljs.core.async.__GT_t_cljs$core$async19109 = (function cljs$core$async$__GT_t_cljs$core$async19109(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19110){
return (new cljs.core.async.t_cljs$core$async19109(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19110));
});

}

return (new cljs.core.async.t_cljs$core$async19109(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17980__auto___19229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19183){
var state_val_19184 = (state_19183[(1)]);
if((state_val_19184 === (7))){
var inst_19179 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19185_19230 = state_19183__$1;
(statearr_19185_19230[(2)] = inst_19179);

(statearr_19185_19230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (20))){
var state_19183__$1 = state_19183;
var statearr_19186_19231 = state_19183__$1;
(statearr_19186_19231[(2)] = null);

(statearr_19186_19231[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (1))){
var state_19183__$1 = state_19183;
var statearr_19187_19232 = state_19183__$1;
(statearr_19187_19232[(2)] = null);

(statearr_19187_19232[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (24))){
var inst_19162 = (state_19183[(7)]);
var inst_19171 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19162);
var state_19183__$1 = state_19183;
var statearr_19188_19233 = state_19183__$1;
(statearr_19188_19233[(2)] = inst_19171);

(statearr_19188_19233[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (4))){
var inst_19114 = (state_19183[(8)]);
var inst_19114__$1 = (state_19183[(2)]);
var inst_19115 = (inst_19114__$1 == null);
var state_19183__$1 = (function (){var statearr_19189 = state_19183;
(statearr_19189[(8)] = inst_19114__$1);

return statearr_19189;
})();
if(cljs.core.truth_(inst_19115)){
var statearr_19190_19234 = state_19183__$1;
(statearr_19190_19234[(1)] = (5));

} else {
var statearr_19191_19235 = state_19183__$1;
(statearr_19191_19235[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (15))){
var inst_19156 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19192_19236 = state_19183__$1;
(statearr_19192_19236[(2)] = inst_19156);

(statearr_19192_19236[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (21))){
var inst_19176 = (state_19183[(2)]);
var state_19183__$1 = (function (){var statearr_19193 = state_19183;
(statearr_19193[(9)] = inst_19176);

return statearr_19193;
})();
var statearr_19194_19237 = state_19183__$1;
(statearr_19194_19237[(2)] = null);

(statearr_19194_19237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (13))){
var inst_19138 = (state_19183[(10)]);
var inst_19140 = cljs.core.chunked_seq_QMARK_(inst_19138);
var state_19183__$1 = state_19183;
if(inst_19140){
var statearr_19195_19238 = state_19183__$1;
(statearr_19195_19238[(1)] = (16));

} else {
var statearr_19196_19239 = state_19183__$1;
(statearr_19196_19239[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (22))){
var inst_19168 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
if(cljs.core.truth_(inst_19168)){
var statearr_19197_19240 = state_19183__$1;
(statearr_19197_19240[(1)] = (23));

} else {
var statearr_19198_19241 = state_19183__$1;
(statearr_19198_19241[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (6))){
var inst_19162 = (state_19183[(7)]);
var inst_19164 = (state_19183[(11)]);
var inst_19114 = (state_19183[(8)]);
var inst_19162__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19114) : topic_fn.call(null,inst_19114));
var inst_19163 = cljs.core.deref(mults);
var inst_19164__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19163,inst_19162__$1);
var state_19183__$1 = (function (){var statearr_19199 = state_19183;
(statearr_19199[(7)] = inst_19162__$1);

(statearr_19199[(11)] = inst_19164__$1);

return statearr_19199;
})();
if(cljs.core.truth_(inst_19164__$1)){
var statearr_19200_19242 = state_19183__$1;
(statearr_19200_19242[(1)] = (19));

} else {
var statearr_19201_19243 = state_19183__$1;
(statearr_19201_19243[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (25))){
var inst_19173 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19202_19244 = state_19183__$1;
(statearr_19202_19244[(2)] = inst_19173);

(statearr_19202_19244[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (17))){
var inst_19138 = (state_19183[(10)]);
var inst_19147 = cljs.core.first(inst_19138);
var inst_19148 = cljs.core.async.muxch_STAR_(inst_19147);
var inst_19149 = cljs.core.async.close_BANG_(inst_19148);
var inst_19150 = cljs.core.next(inst_19138);
var inst_19124 = inst_19150;
var inst_19125 = null;
var inst_19126 = (0);
var inst_19127 = (0);
var state_19183__$1 = (function (){var statearr_19203 = state_19183;
(statearr_19203[(12)] = inst_19126);

(statearr_19203[(13)] = inst_19124);

(statearr_19203[(14)] = inst_19149);

(statearr_19203[(15)] = inst_19127);

(statearr_19203[(16)] = inst_19125);

return statearr_19203;
})();
var statearr_19204_19245 = state_19183__$1;
(statearr_19204_19245[(2)] = null);

(statearr_19204_19245[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (3))){
var inst_19181 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19183__$1,inst_19181);
} else {
if((state_val_19184 === (12))){
var inst_19158 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19205_19246 = state_19183__$1;
(statearr_19205_19246[(2)] = inst_19158);

(statearr_19205_19246[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (2))){
var state_19183__$1 = state_19183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19183__$1,(4),ch);
} else {
if((state_val_19184 === (23))){
var state_19183__$1 = state_19183;
var statearr_19206_19247 = state_19183__$1;
(statearr_19206_19247[(2)] = null);

(statearr_19206_19247[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (19))){
var inst_19164 = (state_19183[(11)]);
var inst_19114 = (state_19183[(8)]);
var inst_19166 = cljs.core.async.muxch_STAR_(inst_19164);
var state_19183__$1 = state_19183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19183__$1,(22),inst_19166,inst_19114);
} else {
if((state_val_19184 === (11))){
var inst_19138 = (state_19183[(10)]);
var inst_19124 = (state_19183[(13)]);
var inst_19138__$1 = cljs.core.seq(inst_19124);
var state_19183__$1 = (function (){var statearr_19207 = state_19183;
(statearr_19207[(10)] = inst_19138__$1);

return statearr_19207;
})();
if(inst_19138__$1){
var statearr_19208_19248 = state_19183__$1;
(statearr_19208_19248[(1)] = (13));

} else {
var statearr_19209_19249 = state_19183__$1;
(statearr_19209_19249[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (9))){
var inst_19160 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19210_19250 = state_19183__$1;
(statearr_19210_19250[(2)] = inst_19160);

(statearr_19210_19250[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (5))){
var inst_19121 = cljs.core.deref(mults);
var inst_19122 = cljs.core.vals(inst_19121);
var inst_19123 = cljs.core.seq(inst_19122);
var inst_19124 = inst_19123;
var inst_19125 = null;
var inst_19126 = (0);
var inst_19127 = (0);
var state_19183__$1 = (function (){var statearr_19211 = state_19183;
(statearr_19211[(12)] = inst_19126);

(statearr_19211[(13)] = inst_19124);

(statearr_19211[(15)] = inst_19127);

(statearr_19211[(16)] = inst_19125);

return statearr_19211;
})();
var statearr_19212_19251 = state_19183__$1;
(statearr_19212_19251[(2)] = null);

(statearr_19212_19251[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (14))){
var state_19183__$1 = state_19183;
var statearr_19216_19252 = state_19183__$1;
(statearr_19216_19252[(2)] = null);

(statearr_19216_19252[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (16))){
var inst_19138 = (state_19183[(10)]);
var inst_19142 = cljs.core.chunk_first(inst_19138);
var inst_19143 = cljs.core.chunk_rest(inst_19138);
var inst_19144 = cljs.core.count(inst_19142);
var inst_19124 = inst_19143;
var inst_19125 = inst_19142;
var inst_19126 = inst_19144;
var inst_19127 = (0);
var state_19183__$1 = (function (){var statearr_19217 = state_19183;
(statearr_19217[(12)] = inst_19126);

(statearr_19217[(13)] = inst_19124);

(statearr_19217[(15)] = inst_19127);

(statearr_19217[(16)] = inst_19125);

return statearr_19217;
})();
var statearr_19218_19253 = state_19183__$1;
(statearr_19218_19253[(2)] = null);

(statearr_19218_19253[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (10))){
var inst_19126 = (state_19183[(12)]);
var inst_19124 = (state_19183[(13)]);
var inst_19127 = (state_19183[(15)]);
var inst_19125 = (state_19183[(16)]);
var inst_19132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19125,inst_19127);
var inst_19133 = cljs.core.async.muxch_STAR_(inst_19132);
var inst_19134 = cljs.core.async.close_BANG_(inst_19133);
var inst_19135 = (inst_19127 + (1));
var tmp19213 = inst_19126;
var tmp19214 = inst_19124;
var tmp19215 = inst_19125;
var inst_19124__$1 = tmp19214;
var inst_19125__$1 = tmp19215;
var inst_19126__$1 = tmp19213;
var inst_19127__$1 = inst_19135;
var state_19183__$1 = (function (){var statearr_19219 = state_19183;
(statearr_19219[(12)] = inst_19126__$1);

(statearr_19219[(17)] = inst_19134);

(statearr_19219[(13)] = inst_19124__$1);

(statearr_19219[(15)] = inst_19127__$1);

(statearr_19219[(16)] = inst_19125__$1);

return statearr_19219;
})();
var statearr_19220_19254 = state_19183__$1;
(statearr_19220_19254[(2)] = null);

(statearr_19220_19254[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (18))){
var inst_19153 = (state_19183[(2)]);
var state_19183__$1 = state_19183;
var statearr_19221_19255 = state_19183__$1;
(statearr_19221_19255[(2)] = inst_19153);

(statearr_19221_19255[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19184 === (8))){
var inst_19126 = (state_19183[(12)]);
var inst_19127 = (state_19183[(15)]);
var inst_19129 = (inst_19127 < inst_19126);
var inst_19130 = inst_19129;
var state_19183__$1 = state_19183;
if(cljs.core.truth_(inst_19130)){
var statearr_19222_19256 = state_19183__$1;
(statearr_19222_19256[(1)] = (10));

} else {
var statearr_19223_19257 = state_19183__$1;
(statearr_19223_19257[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19224[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19224[(1)] = (1));

return statearr_19224;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19183){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19183);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19225){if((e19225 instanceof Object)){
var ex__17877__auto__ = e19225;
var statearr_19226_19258 = state_19183;
(statearr_19226_19258[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19183);

return cljs.core.cst$kw$recur;
} else {
throw e19225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19259 = state_19183;
state_19183 = G__19259;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19227 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19227[(6)] = c__17980__auto___19229);

return statearr_19227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19261 = arguments.length;
switch (G__19261) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19264 = arguments.length;
switch (G__19264) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19267 = arguments.length;
switch (G__19267) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__17980__auto___19334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19306){
var state_val_19307 = (state_19306[(1)]);
if((state_val_19307 === (7))){
var state_19306__$1 = state_19306;
var statearr_19308_19335 = state_19306__$1;
(statearr_19308_19335[(2)] = null);

(statearr_19308_19335[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (1))){
var state_19306__$1 = state_19306;
var statearr_19309_19336 = state_19306__$1;
(statearr_19309_19336[(2)] = null);

(statearr_19309_19336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (4))){
var inst_19270 = (state_19306[(7)]);
var inst_19272 = (inst_19270 < cnt);
var state_19306__$1 = state_19306;
if(cljs.core.truth_(inst_19272)){
var statearr_19310_19337 = state_19306__$1;
(statearr_19310_19337[(1)] = (6));

} else {
var statearr_19311_19338 = state_19306__$1;
(statearr_19311_19338[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (15))){
var inst_19302 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19312_19339 = state_19306__$1;
(statearr_19312_19339[(2)] = inst_19302);

(statearr_19312_19339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (13))){
var inst_19295 = cljs.core.async.close_BANG_(out);
var state_19306__$1 = state_19306;
var statearr_19313_19340 = state_19306__$1;
(statearr_19313_19340[(2)] = inst_19295);

(statearr_19313_19340[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (6))){
var state_19306__$1 = state_19306;
var statearr_19314_19341 = state_19306__$1;
(statearr_19314_19341[(2)] = null);

(statearr_19314_19341[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (3))){
var inst_19304 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19306__$1,inst_19304);
} else {
if((state_val_19307 === (12))){
var inst_19292 = (state_19306[(8)]);
var inst_19292__$1 = (state_19306[(2)]);
var inst_19293 = cljs.core.some(cljs.core.nil_QMARK_,inst_19292__$1);
var state_19306__$1 = (function (){var statearr_19315 = state_19306;
(statearr_19315[(8)] = inst_19292__$1);

return statearr_19315;
})();
if(cljs.core.truth_(inst_19293)){
var statearr_19316_19342 = state_19306__$1;
(statearr_19316_19342[(1)] = (13));

} else {
var statearr_19317_19343 = state_19306__$1;
(statearr_19317_19343[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (2))){
var inst_19269 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19270 = (0);
var state_19306__$1 = (function (){var statearr_19318 = state_19306;
(statearr_19318[(9)] = inst_19269);

(statearr_19318[(7)] = inst_19270);

return statearr_19318;
})();
var statearr_19319_19344 = state_19306__$1;
(statearr_19319_19344[(2)] = null);

(statearr_19319_19344[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (11))){
var inst_19270 = (state_19306[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19306,(10),Object,null,(9));
var inst_19279 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19270) : chs__$1.call(null,inst_19270));
var inst_19280 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19270) : done.call(null,inst_19270));
var inst_19281 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19279,inst_19280);
var state_19306__$1 = state_19306;
var statearr_19320_19345 = state_19306__$1;
(statearr_19320_19345[(2)] = inst_19281);


cljs.core.async.impl.ioc_helpers.process_exception(state_19306__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (9))){
var inst_19270 = (state_19306[(7)]);
var inst_19283 = (state_19306[(2)]);
var inst_19284 = (inst_19270 + (1));
var inst_19270__$1 = inst_19284;
var state_19306__$1 = (function (){var statearr_19321 = state_19306;
(statearr_19321[(10)] = inst_19283);

(statearr_19321[(7)] = inst_19270__$1);

return statearr_19321;
})();
var statearr_19322_19346 = state_19306__$1;
(statearr_19322_19346[(2)] = null);

(statearr_19322_19346[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (5))){
var inst_19290 = (state_19306[(2)]);
var state_19306__$1 = (function (){var statearr_19323 = state_19306;
(statearr_19323[(11)] = inst_19290);

return statearr_19323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19306__$1,(12),dchan);
} else {
if((state_val_19307 === (14))){
var inst_19292 = (state_19306[(8)]);
var inst_19297 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19292);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19306__$1,(16),out,inst_19297);
} else {
if((state_val_19307 === (16))){
var inst_19299 = (state_19306[(2)]);
var state_19306__$1 = (function (){var statearr_19324 = state_19306;
(statearr_19324[(12)] = inst_19299);

return statearr_19324;
})();
var statearr_19325_19347 = state_19306__$1;
(statearr_19325_19347[(2)] = null);

(statearr_19325_19347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (10))){
var inst_19274 = (state_19306[(2)]);
var inst_19275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19306__$1 = (function (){var statearr_19326 = state_19306;
(statearr_19326[(13)] = inst_19274);

return statearr_19326;
})();
var statearr_19327_19348 = state_19306__$1;
(statearr_19327_19348[(2)] = inst_19275);


cljs.core.async.impl.ioc_helpers.process_exception(state_19306__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19307 === (8))){
var inst_19288 = (state_19306[(2)]);
var state_19306__$1 = state_19306;
var statearr_19328_19349 = state_19306__$1;
(statearr_19328_19349[(2)] = inst_19288);

(statearr_19328_19349[(1)] = (5));


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
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19329[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19329[(1)] = (1));

return statearr_19329;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19306){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19306);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19330){if((e19330 instanceof Object)){
var ex__17877__auto__ = e19330;
var statearr_19331_19350 = state_19306;
(statearr_19331_19350[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19306);

return cljs.core.cst$kw$recur;
} else {
throw e19330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19351 = state_19306;
state_19306 = G__19351;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19332 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19332[(6)] = c__17980__auto___19334);

return statearr_19332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19354 = arguments.length;
switch (G__19354) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___19408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19386){
var state_val_19387 = (state_19386[(1)]);
if((state_val_19387 === (7))){
var inst_19366 = (state_19386[(7)]);
var inst_19365 = (state_19386[(8)]);
var inst_19365__$1 = (state_19386[(2)]);
var inst_19366__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19365__$1,(0),null);
var inst_19367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19365__$1,(1),null);
var inst_19368 = (inst_19366__$1 == null);
var state_19386__$1 = (function (){var statearr_19388 = state_19386;
(statearr_19388[(7)] = inst_19366__$1);

(statearr_19388[(8)] = inst_19365__$1);

(statearr_19388[(9)] = inst_19367);

return statearr_19388;
})();
if(cljs.core.truth_(inst_19368)){
var statearr_19389_19409 = state_19386__$1;
(statearr_19389_19409[(1)] = (8));

} else {
var statearr_19390_19410 = state_19386__$1;
(statearr_19390_19410[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19387 === (1))){
var inst_19355 = cljs.core.vec(chs);
var inst_19356 = inst_19355;
var state_19386__$1 = (function (){var statearr_19391 = state_19386;
(statearr_19391[(10)] = inst_19356);

return statearr_19391;
})();
var statearr_19392_19411 = state_19386__$1;
(statearr_19392_19411[(2)] = null);

(statearr_19392_19411[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19387 === (4))){
var inst_19356 = (state_19386[(10)]);
var state_19386__$1 = state_19386;
return cljs.core.async.ioc_alts_BANG_(state_19386__$1,(7),inst_19356);
} else {
if((state_val_19387 === (6))){
var inst_19382 = (state_19386[(2)]);
var state_19386__$1 = state_19386;
var statearr_19393_19412 = state_19386__$1;
(statearr_19393_19412[(2)] = inst_19382);

(statearr_19393_19412[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19387 === (3))){
var inst_19384 = (state_19386[(2)]);
var state_19386__$1 = state_19386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19386__$1,inst_19384);
} else {
if((state_val_19387 === (2))){
var inst_19356 = (state_19386[(10)]);
var inst_19358 = cljs.core.count(inst_19356);
var inst_19359 = (inst_19358 > (0));
var state_19386__$1 = state_19386;
if(cljs.core.truth_(inst_19359)){
var statearr_19395_19413 = state_19386__$1;
(statearr_19395_19413[(1)] = (4));

} else {
var statearr_19396_19414 = state_19386__$1;
(statearr_19396_19414[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19387 === (11))){
var inst_19356 = (state_19386[(10)]);
var inst_19375 = (state_19386[(2)]);
var tmp19394 = inst_19356;
var inst_19356__$1 = tmp19394;
var state_19386__$1 = (function (){var statearr_19397 = state_19386;
(statearr_19397[(11)] = inst_19375);

(statearr_19397[(10)] = inst_19356__$1);

return statearr_19397;
})();
var statearr_19398_19415 = state_19386__$1;
(statearr_19398_19415[(2)] = null);

(statearr_19398_19415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19387 === (9))){
var inst_19366 = (state_19386[(7)]);
var state_19386__$1 = state_19386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19386__$1,(11),out,inst_19366);
} else {
if((state_val_19387 === (5))){
var inst_19380 = cljs.core.async.close_BANG_(out);
var state_19386__$1 = state_19386;
var statearr_19399_19416 = state_19386__$1;
(statearr_19399_19416[(2)] = inst_19380);

(statearr_19399_19416[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19387 === (10))){
var inst_19378 = (state_19386[(2)]);
var state_19386__$1 = state_19386;
var statearr_19400_19417 = state_19386__$1;
(statearr_19400_19417[(2)] = inst_19378);

(statearr_19400_19417[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19387 === (8))){
var inst_19356 = (state_19386[(10)]);
var inst_19366 = (state_19386[(7)]);
var inst_19365 = (state_19386[(8)]);
var inst_19367 = (state_19386[(9)]);
var inst_19370 = (function (){var cs = inst_19356;
var vec__19361 = inst_19365;
var v = inst_19366;
var c = inst_19367;
return (function (p1__19352_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19352_SHARP_);
});
})();
var inst_19371 = cljs.core.filterv(inst_19370,inst_19356);
var inst_19356__$1 = inst_19371;
var state_19386__$1 = (function (){var statearr_19401 = state_19386;
(statearr_19401[(10)] = inst_19356__$1);

return statearr_19401;
})();
var statearr_19402_19418 = state_19386__$1;
(statearr_19402_19418[(2)] = null);

(statearr_19402_19418[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19403 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19403[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19403[(1)] = (1));

return statearr_19403;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19386){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19386);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19404){if((e19404 instanceof Object)){
var ex__17877__auto__ = e19404;
var statearr_19405_19419 = state_19386;
(statearr_19405_19419[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19386);

return cljs.core.cst$kw$recur;
} else {
throw e19404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19420 = state_19386;
state_19386 = G__19420;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19406 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19406[(6)] = c__17980__auto___19408);

return statearr_19406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19422 = arguments.length;
switch (G__19422) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___19467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19446){
var state_val_19447 = (state_19446[(1)]);
if((state_val_19447 === (7))){
var inst_19428 = (state_19446[(7)]);
var inst_19428__$1 = (state_19446[(2)]);
var inst_19429 = (inst_19428__$1 == null);
var inst_19430 = cljs.core.not(inst_19429);
var state_19446__$1 = (function (){var statearr_19448 = state_19446;
(statearr_19448[(7)] = inst_19428__$1);

return statearr_19448;
})();
if(inst_19430){
var statearr_19449_19468 = state_19446__$1;
(statearr_19449_19468[(1)] = (8));

} else {
var statearr_19450_19469 = state_19446__$1;
(statearr_19450_19469[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (1))){
var inst_19423 = (0);
var state_19446__$1 = (function (){var statearr_19451 = state_19446;
(statearr_19451[(8)] = inst_19423);

return statearr_19451;
})();
var statearr_19452_19470 = state_19446__$1;
(statearr_19452_19470[(2)] = null);

(statearr_19452_19470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (4))){
var state_19446__$1 = state_19446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19446__$1,(7),ch);
} else {
if((state_val_19447 === (6))){
var inst_19441 = (state_19446[(2)]);
var state_19446__$1 = state_19446;
var statearr_19453_19471 = state_19446__$1;
(statearr_19453_19471[(2)] = inst_19441);

(statearr_19453_19471[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (3))){
var inst_19443 = (state_19446[(2)]);
var inst_19444 = cljs.core.async.close_BANG_(out);
var state_19446__$1 = (function (){var statearr_19454 = state_19446;
(statearr_19454[(9)] = inst_19443);

return statearr_19454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19446__$1,inst_19444);
} else {
if((state_val_19447 === (2))){
var inst_19423 = (state_19446[(8)]);
var inst_19425 = (inst_19423 < n);
var state_19446__$1 = state_19446;
if(cljs.core.truth_(inst_19425)){
var statearr_19455_19472 = state_19446__$1;
(statearr_19455_19472[(1)] = (4));

} else {
var statearr_19456_19473 = state_19446__$1;
(statearr_19456_19473[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (11))){
var inst_19423 = (state_19446[(8)]);
var inst_19433 = (state_19446[(2)]);
var inst_19434 = (inst_19423 + (1));
var inst_19423__$1 = inst_19434;
var state_19446__$1 = (function (){var statearr_19457 = state_19446;
(statearr_19457[(10)] = inst_19433);

(statearr_19457[(8)] = inst_19423__$1);

return statearr_19457;
})();
var statearr_19458_19474 = state_19446__$1;
(statearr_19458_19474[(2)] = null);

(statearr_19458_19474[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (9))){
var state_19446__$1 = state_19446;
var statearr_19459_19475 = state_19446__$1;
(statearr_19459_19475[(2)] = null);

(statearr_19459_19475[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (5))){
var state_19446__$1 = state_19446;
var statearr_19460_19476 = state_19446__$1;
(statearr_19460_19476[(2)] = null);

(statearr_19460_19476[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (10))){
var inst_19438 = (state_19446[(2)]);
var state_19446__$1 = state_19446;
var statearr_19461_19477 = state_19446__$1;
(statearr_19461_19477[(2)] = inst_19438);

(statearr_19461_19477[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19447 === (8))){
var inst_19428 = (state_19446[(7)]);
var state_19446__$1 = state_19446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19446__$1,(11),out,inst_19428);
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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19462[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19462[(1)] = (1));

return statearr_19462;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19446){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19446);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19463){if((e19463 instanceof Object)){
var ex__17877__auto__ = e19463;
var statearr_19464_19478 = state_19446;
(statearr_19464_19478[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19446);

return cljs.core.cst$kw$recur;
} else {
throw e19463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19479 = state_19446;
state_19446 = G__19479;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19465 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19465[(6)] = c__17980__auto___19467);

return statearr_19465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19481 = (function (f,ch,meta19482){
this.f = f;
this.ch = ch;
this.meta19482 = meta19482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19483,meta19482__$1){
var self__ = this;
var _19483__$1 = this;
return (new cljs.core.async.t_cljs$core$async19481(self__.f,self__.ch,meta19482__$1));
}));

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19483){
var self__ = this;
var _19483__$1 = this;
return self__.meta19482;
}));

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19484 = (function (f,ch,meta19482,_,fn1,meta19485){
this.f = f;
this.ch = ch;
this.meta19482 = meta19482;
this._ = _;
this.fn1 = fn1;
this.meta19485 = meta19485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19486,meta19485__$1){
var self__ = this;
var _19486__$1 = this;
return (new cljs.core.async.t_cljs$core$async19484(self__.f,self__.ch,self__.meta19482,self__._,self__.fn1,meta19485__$1));
}));

(cljs.core.async.t_cljs$core$async19484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19486){
var self__ = this;
var _19486__$1 = this;
return self__.meta19485;
}));

(cljs.core.async.t_cljs$core$async19484.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19480_SHARP_){
var G__19487 = (((p1__19480_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19480_SHARP_) : self__.f.call(null,p1__19480_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19487) : f1.call(null,G__19487));
});
}));

(cljs.core.async.t_cljs$core$async19484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19482,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19481], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19485], null);
}));

(cljs.core.async.t_cljs$core$async19484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19484");

(cljs.core.async.t_cljs$core$async19484.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19484.
 */
cljs.core.async.__GT_t_cljs$core$async19484 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19484(f__$1,ch__$1,meta19482__$1,___$2,fn1__$1,meta19485){
return (new cljs.core.async.t_cljs$core$async19484(f__$1,ch__$1,meta19482__$1,___$2,fn1__$1,meta19485));
});

}

return (new cljs.core.async.t_cljs$core$async19484(self__.f,self__.ch,self__.meta19482,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19488 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19488) : self__.f.call(null,G__19488));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19482], null);
}));

(cljs.core.async.t_cljs$core$async19481.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19481");

(cljs.core.async.t_cljs$core$async19481.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19481");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19481.
 */
cljs.core.async.__GT_t_cljs$core$async19481 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19481(f__$1,ch__$1,meta19482){
return (new cljs.core.async.t_cljs$core$async19481(f__$1,ch__$1,meta19482));
});

}

return (new cljs.core.async.t_cljs$core$async19481(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19489 = (function (f,ch,meta19490){
this.f = f;
this.ch = ch;
this.meta19490 = meta19490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19491,meta19490__$1){
var self__ = this;
var _19491__$1 = this;
return (new cljs.core.async.t_cljs$core$async19489(self__.f,self__.ch,meta19490__$1));
}));

(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19491){
var self__ = this;
var _19491__$1 = this;
return self__.meta19490;
}));

(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19490], null);
}));

(cljs.core.async.t_cljs$core$async19489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19489");

(cljs.core.async.t_cljs$core$async19489.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19489.
 */
cljs.core.async.__GT_t_cljs$core$async19489 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19489(f__$1,ch__$1,meta19490){
return (new cljs.core.async.t_cljs$core$async19489(f__$1,ch__$1,meta19490));
});

}

return (new cljs.core.async.t_cljs$core$async19489(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19492 = (function (p,ch,meta19493){
this.p = p;
this.ch = ch;
this.meta19493 = meta19493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19494,meta19493__$1){
var self__ = this;
var _19494__$1 = this;
return (new cljs.core.async.t_cljs$core$async19492(self__.p,self__.ch,meta19493__$1));
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19494){
var self__ = this;
var _19494__$1 = this;
return self__.meta19493;
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19492.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19493], null);
}));

(cljs.core.async.t_cljs$core$async19492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19492");

(cljs.core.async.t_cljs$core$async19492.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async19492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19492.
 */
cljs.core.async.__GT_t_cljs$core$async19492 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19492(p__$1,ch__$1,meta19493){
return (new cljs.core.async.t_cljs$core$async19492(p__$1,ch__$1,meta19493));
});

}

return (new cljs.core.async.t_cljs$core$async19492(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19496 = arguments.length;
switch (G__19496) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___19536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19517){
var state_val_19518 = (state_19517[(1)]);
if((state_val_19518 === (7))){
var inst_19513 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
var statearr_19519_19537 = state_19517__$1;
(statearr_19519_19537[(2)] = inst_19513);

(statearr_19519_19537[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (1))){
var state_19517__$1 = state_19517;
var statearr_19520_19538 = state_19517__$1;
(statearr_19520_19538[(2)] = null);

(statearr_19520_19538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (4))){
var inst_19499 = (state_19517[(7)]);
var inst_19499__$1 = (state_19517[(2)]);
var inst_19500 = (inst_19499__$1 == null);
var state_19517__$1 = (function (){var statearr_19521 = state_19517;
(statearr_19521[(7)] = inst_19499__$1);

return statearr_19521;
})();
if(cljs.core.truth_(inst_19500)){
var statearr_19522_19539 = state_19517__$1;
(statearr_19522_19539[(1)] = (5));

} else {
var statearr_19523_19540 = state_19517__$1;
(statearr_19523_19540[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (6))){
var inst_19499 = (state_19517[(7)]);
var inst_19504 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19499) : p.call(null,inst_19499));
var state_19517__$1 = state_19517;
if(cljs.core.truth_(inst_19504)){
var statearr_19524_19541 = state_19517__$1;
(statearr_19524_19541[(1)] = (8));

} else {
var statearr_19525_19542 = state_19517__$1;
(statearr_19525_19542[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (3))){
var inst_19515 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19517__$1,inst_19515);
} else {
if((state_val_19518 === (2))){
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19517__$1,(4),ch);
} else {
if((state_val_19518 === (11))){
var inst_19507 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
var statearr_19526_19543 = state_19517__$1;
(statearr_19526_19543[(2)] = inst_19507);

(statearr_19526_19543[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (9))){
var state_19517__$1 = state_19517;
var statearr_19527_19544 = state_19517__$1;
(statearr_19527_19544[(2)] = null);

(statearr_19527_19544[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (5))){
var inst_19502 = cljs.core.async.close_BANG_(out);
var state_19517__$1 = state_19517;
var statearr_19528_19545 = state_19517__$1;
(statearr_19528_19545[(2)] = inst_19502);

(statearr_19528_19545[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (10))){
var inst_19510 = (state_19517[(2)]);
var state_19517__$1 = (function (){var statearr_19529 = state_19517;
(statearr_19529[(8)] = inst_19510);

return statearr_19529;
})();
var statearr_19530_19546 = state_19517__$1;
(statearr_19530_19546[(2)] = null);

(statearr_19530_19546[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19518 === (8))){
var inst_19499 = (state_19517[(7)]);
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19517__$1,(11),out,inst_19499);
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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19531 = [null,null,null,null,null,null,null,null,null];
(statearr_19531[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19531[(1)] = (1));

return statearr_19531;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19517){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19517);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19532){if((e19532 instanceof Object)){
var ex__17877__auto__ = e19532;
var statearr_19533_19547 = state_19517;
(statearr_19533_19547[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19517);

return cljs.core.cst$kw$recur;
} else {
throw e19532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19548 = state_19517;
state_19517 = G__19548;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19534 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19534[(6)] = c__17980__auto___19536);

return statearr_19534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19550 = arguments.length;
switch (G__19550) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17980__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (7))){
var inst_19609 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19615_19653 = state_19613__$1;
(statearr_19615_19653[(2)] = inst_19609);

(statearr_19615_19653[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (20))){
var inst_19579 = (state_19613[(7)]);
var inst_19590 = (state_19613[(2)]);
var inst_19591 = cljs.core.next(inst_19579);
var inst_19565 = inst_19591;
var inst_19566 = null;
var inst_19567 = (0);
var inst_19568 = (0);
var state_19613__$1 = (function (){var statearr_19616 = state_19613;
(statearr_19616[(8)] = inst_19565);

(statearr_19616[(9)] = inst_19568);

(statearr_19616[(10)] = inst_19590);

(statearr_19616[(11)] = inst_19566);

(statearr_19616[(12)] = inst_19567);

return statearr_19616;
})();
var statearr_19617_19654 = state_19613__$1;
(statearr_19617_19654[(2)] = null);

(statearr_19617_19654[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (1))){
var state_19613__$1 = state_19613;
var statearr_19618_19655 = state_19613__$1;
(statearr_19618_19655[(2)] = null);

(statearr_19618_19655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (4))){
var inst_19554 = (state_19613[(13)]);
var inst_19554__$1 = (state_19613[(2)]);
var inst_19555 = (inst_19554__$1 == null);
var state_19613__$1 = (function (){var statearr_19619 = state_19613;
(statearr_19619[(13)] = inst_19554__$1);

return statearr_19619;
})();
if(cljs.core.truth_(inst_19555)){
var statearr_19620_19656 = state_19613__$1;
(statearr_19620_19656[(1)] = (5));

} else {
var statearr_19621_19657 = state_19613__$1;
(statearr_19621_19657[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (15))){
var state_19613__$1 = state_19613;
var statearr_19625_19658 = state_19613__$1;
(statearr_19625_19658[(2)] = null);

(statearr_19625_19658[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (21))){
var state_19613__$1 = state_19613;
var statearr_19626_19659 = state_19613__$1;
(statearr_19626_19659[(2)] = null);

(statearr_19626_19659[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (13))){
var inst_19565 = (state_19613[(8)]);
var inst_19568 = (state_19613[(9)]);
var inst_19566 = (state_19613[(11)]);
var inst_19567 = (state_19613[(12)]);
var inst_19575 = (state_19613[(2)]);
var inst_19576 = (inst_19568 + (1));
var tmp19622 = inst_19565;
var tmp19623 = inst_19566;
var tmp19624 = inst_19567;
var inst_19565__$1 = tmp19622;
var inst_19566__$1 = tmp19623;
var inst_19567__$1 = tmp19624;
var inst_19568__$1 = inst_19576;
var state_19613__$1 = (function (){var statearr_19627 = state_19613;
(statearr_19627[(8)] = inst_19565__$1);

(statearr_19627[(9)] = inst_19568__$1);

(statearr_19627[(11)] = inst_19566__$1);

(statearr_19627[(12)] = inst_19567__$1);

(statearr_19627[(14)] = inst_19575);

return statearr_19627;
})();
var statearr_19628_19660 = state_19613__$1;
(statearr_19628_19660[(2)] = null);

(statearr_19628_19660[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (22))){
var state_19613__$1 = state_19613;
var statearr_19629_19661 = state_19613__$1;
(statearr_19629_19661[(2)] = null);

(statearr_19629_19661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (6))){
var inst_19554 = (state_19613[(13)]);
var inst_19563 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19554) : f.call(null,inst_19554));
var inst_19564 = cljs.core.seq(inst_19563);
var inst_19565 = inst_19564;
var inst_19566 = null;
var inst_19567 = (0);
var inst_19568 = (0);
var state_19613__$1 = (function (){var statearr_19630 = state_19613;
(statearr_19630[(8)] = inst_19565);

(statearr_19630[(9)] = inst_19568);

(statearr_19630[(11)] = inst_19566);

(statearr_19630[(12)] = inst_19567);

return statearr_19630;
})();
var statearr_19631_19662 = state_19613__$1;
(statearr_19631_19662[(2)] = null);

(statearr_19631_19662[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (17))){
var inst_19579 = (state_19613[(7)]);
var inst_19583 = cljs.core.chunk_first(inst_19579);
var inst_19584 = cljs.core.chunk_rest(inst_19579);
var inst_19585 = cljs.core.count(inst_19583);
var inst_19565 = inst_19584;
var inst_19566 = inst_19583;
var inst_19567 = inst_19585;
var inst_19568 = (0);
var state_19613__$1 = (function (){var statearr_19632 = state_19613;
(statearr_19632[(8)] = inst_19565);

(statearr_19632[(9)] = inst_19568);

(statearr_19632[(11)] = inst_19566);

(statearr_19632[(12)] = inst_19567);

return statearr_19632;
})();
var statearr_19633_19663 = state_19613__$1;
(statearr_19633_19663[(2)] = null);

(statearr_19633_19663[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (3))){
var inst_19611 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19613__$1,inst_19611);
} else {
if((state_val_19614 === (12))){
var inst_19599 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19634_19664 = state_19613__$1;
(statearr_19634_19664[(2)] = inst_19599);

(statearr_19634_19664[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (2))){
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19613__$1,(4),in$);
} else {
if((state_val_19614 === (23))){
var inst_19607 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19635_19665 = state_19613__$1;
(statearr_19635_19665[(2)] = inst_19607);

(statearr_19635_19665[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (19))){
var inst_19594 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19636_19666 = state_19613__$1;
(statearr_19636_19666[(2)] = inst_19594);

(statearr_19636_19666[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (11))){
var inst_19565 = (state_19613[(8)]);
var inst_19579 = (state_19613[(7)]);
var inst_19579__$1 = cljs.core.seq(inst_19565);
var state_19613__$1 = (function (){var statearr_19637 = state_19613;
(statearr_19637[(7)] = inst_19579__$1);

return statearr_19637;
})();
if(inst_19579__$1){
var statearr_19638_19667 = state_19613__$1;
(statearr_19638_19667[(1)] = (14));

} else {
var statearr_19639_19668 = state_19613__$1;
(statearr_19639_19668[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (9))){
var inst_19601 = (state_19613[(2)]);
var inst_19602 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19613__$1 = (function (){var statearr_19640 = state_19613;
(statearr_19640[(15)] = inst_19601);

return statearr_19640;
})();
if(cljs.core.truth_(inst_19602)){
var statearr_19641_19669 = state_19613__$1;
(statearr_19641_19669[(1)] = (21));

} else {
var statearr_19642_19670 = state_19613__$1;
(statearr_19642_19670[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (5))){
var inst_19557 = cljs.core.async.close_BANG_(out);
var state_19613__$1 = state_19613;
var statearr_19643_19671 = state_19613__$1;
(statearr_19643_19671[(2)] = inst_19557);

(statearr_19643_19671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (14))){
var inst_19579 = (state_19613[(7)]);
var inst_19581 = cljs.core.chunked_seq_QMARK_(inst_19579);
var state_19613__$1 = state_19613;
if(inst_19581){
var statearr_19644_19672 = state_19613__$1;
(statearr_19644_19672[(1)] = (17));

} else {
var statearr_19645_19673 = state_19613__$1;
(statearr_19645_19673[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (16))){
var inst_19597 = (state_19613[(2)]);
var state_19613__$1 = state_19613;
var statearr_19646_19674 = state_19613__$1;
(statearr_19646_19674[(2)] = inst_19597);

(statearr_19646_19674[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19614 === (10))){
var inst_19568 = (state_19613[(9)]);
var inst_19566 = (state_19613[(11)]);
var inst_19573 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19566,inst_19568);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19613__$1,(13),out,inst_19573);
} else {
if((state_val_19614 === (18))){
var inst_19579 = (state_19613[(7)]);
var inst_19588 = cljs.core.first(inst_19579);
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19613__$1,(20),out,inst_19588);
} else {
if((state_val_19614 === (8))){
var inst_19568 = (state_19613[(9)]);
var inst_19567 = (state_19613[(12)]);
var inst_19570 = (inst_19568 < inst_19567);
var inst_19571 = inst_19570;
var state_19613__$1 = state_19613;
if(cljs.core.truth_(inst_19571)){
var statearr_19647_19675 = state_19613__$1;
(statearr_19647_19675[(1)] = (10));

} else {
var statearr_19648_19676 = state_19613__$1;
(statearr_19648_19676[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17874__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17874__auto____0 = (function (){
var statearr_19649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19649[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17874__auto__);

(statearr_19649[(1)] = (1));

return statearr_19649;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17874__auto____1 = (function (state_19613){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19613);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19650){if((e19650 instanceof Object)){
var ex__17877__auto__ = e19650;
var statearr_19651_19677 = state_19613;
(statearr_19651_19677[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19613);

return cljs.core.cst$kw$recur;
} else {
throw e19650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19678 = state_19613;
state_19613 = G__19678;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17874__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17874__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17874__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17874__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19652 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19652[(6)] = c__17980__auto__);

return statearr_19652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));

return c__17980__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19680 = arguments.length;
switch (G__19680) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19683 = arguments.length;
switch (G__19683) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19686 = arguments.length;
switch (G__19686) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___19733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19710){
var state_val_19711 = (state_19710[(1)]);
if((state_val_19711 === (7))){
var inst_19705 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19712_19734 = state_19710__$1;
(statearr_19712_19734[(2)] = inst_19705);

(statearr_19712_19734[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (1))){
var inst_19687 = null;
var state_19710__$1 = (function (){var statearr_19713 = state_19710;
(statearr_19713[(7)] = inst_19687);

return statearr_19713;
})();
var statearr_19714_19735 = state_19710__$1;
(statearr_19714_19735[(2)] = null);

(statearr_19714_19735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (4))){
var inst_19690 = (state_19710[(8)]);
var inst_19690__$1 = (state_19710[(2)]);
var inst_19691 = (inst_19690__$1 == null);
var inst_19692 = cljs.core.not(inst_19691);
var state_19710__$1 = (function (){var statearr_19715 = state_19710;
(statearr_19715[(8)] = inst_19690__$1);

return statearr_19715;
})();
if(inst_19692){
var statearr_19716_19736 = state_19710__$1;
(statearr_19716_19736[(1)] = (5));

} else {
var statearr_19717_19737 = state_19710__$1;
(statearr_19717_19737[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (6))){
var state_19710__$1 = state_19710;
var statearr_19718_19738 = state_19710__$1;
(statearr_19718_19738[(2)] = null);

(statearr_19718_19738[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (3))){
var inst_19707 = (state_19710[(2)]);
var inst_19708 = cljs.core.async.close_BANG_(out);
var state_19710__$1 = (function (){var statearr_19719 = state_19710;
(statearr_19719[(9)] = inst_19707);

return statearr_19719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19710__$1,inst_19708);
} else {
if((state_val_19711 === (2))){
var state_19710__$1 = state_19710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19710__$1,(4),ch);
} else {
if((state_val_19711 === (11))){
var inst_19690 = (state_19710[(8)]);
var inst_19699 = (state_19710[(2)]);
var inst_19687 = inst_19690;
var state_19710__$1 = (function (){var statearr_19720 = state_19710;
(statearr_19720[(7)] = inst_19687);

(statearr_19720[(10)] = inst_19699);

return statearr_19720;
})();
var statearr_19721_19739 = state_19710__$1;
(statearr_19721_19739[(2)] = null);

(statearr_19721_19739[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (9))){
var inst_19690 = (state_19710[(8)]);
var state_19710__$1 = state_19710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19710__$1,(11),out,inst_19690);
} else {
if((state_val_19711 === (5))){
var inst_19687 = (state_19710[(7)]);
var inst_19690 = (state_19710[(8)]);
var inst_19694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19690,inst_19687);
var state_19710__$1 = state_19710;
if(inst_19694){
var statearr_19723_19740 = state_19710__$1;
(statearr_19723_19740[(1)] = (8));

} else {
var statearr_19724_19741 = state_19710__$1;
(statearr_19724_19741[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (10))){
var inst_19702 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19725_19742 = state_19710__$1;
(statearr_19725_19742[(2)] = inst_19702);

(statearr_19725_19742[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (8))){
var inst_19687 = (state_19710[(7)]);
var tmp19722 = inst_19687;
var inst_19687__$1 = tmp19722;
var state_19710__$1 = (function (){var statearr_19726 = state_19710;
(statearr_19726[(7)] = inst_19687__$1);

return statearr_19726;
})();
var statearr_19727_19743 = state_19710__$1;
(statearr_19727_19743[(2)] = null);

(statearr_19727_19743[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19728[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19728[(1)] = (1));

return statearr_19728;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19710){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19710);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19729){if((e19729 instanceof Object)){
var ex__17877__auto__ = e19729;
var statearr_19730_19744 = state_19710;
(statearr_19730_19744[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19710);

return cljs.core.cst$kw$recur;
} else {
throw e19729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19745 = state_19710;
state_19710 = G__19745;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19731 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19731[(6)] = c__17980__auto___19733);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19747 = arguments.length;
switch (G__19747) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___19813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19785){
var state_val_19786 = (state_19785[(1)]);
if((state_val_19786 === (7))){
var inst_19781 = (state_19785[(2)]);
var state_19785__$1 = state_19785;
var statearr_19787_19814 = state_19785__$1;
(statearr_19787_19814[(2)] = inst_19781);

(statearr_19787_19814[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (1))){
var inst_19748 = (new Array(n));
var inst_19749 = inst_19748;
var inst_19750 = (0);
var state_19785__$1 = (function (){var statearr_19788 = state_19785;
(statearr_19788[(7)] = inst_19749);

(statearr_19788[(8)] = inst_19750);

return statearr_19788;
})();
var statearr_19789_19815 = state_19785__$1;
(statearr_19789_19815[(2)] = null);

(statearr_19789_19815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (4))){
var inst_19753 = (state_19785[(9)]);
var inst_19753__$1 = (state_19785[(2)]);
var inst_19754 = (inst_19753__$1 == null);
var inst_19755 = cljs.core.not(inst_19754);
var state_19785__$1 = (function (){var statearr_19790 = state_19785;
(statearr_19790[(9)] = inst_19753__$1);

return statearr_19790;
})();
if(inst_19755){
var statearr_19791_19816 = state_19785__$1;
(statearr_19791_19816[(1)] = (5));

} else {
var statearr_19792_19817 = state_19785__$1;
(statearr_19792_19817[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (15))){
var inst_19775 = (state_19785[(2)]);
var state_19785__$1 = state_19785;
var statearr_19793_19818 = state_19785__$1;
(statearr_19793_19818[(2)] = inst_19775);

(statearr_19793_19818[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (13))){
var state_19785__$1 = state_19785;
var statearr_19794_19819 = state_19785__$1;
(statearr_19794_19819[(2)] = null);

(statearr_19794_19819[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (6))){
var inst_19750 = (state_19785[(8)]);
var inst_19771 = (inst_19750 > (0));
var state_19785__$1 = state_19785;
if(cljs.core.truth_(inst_19771)){
var statearr_19795_19820 = state_19785__$1;
(statearr_19795_19820[(1)] = (12));

} else {
var statearr_19796_19821 = state_19785__$1;
(statearr_19796_19821[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (3))){
var inst_19783 = (state_19785[(2)]);
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19785__$1,inst_19783);
} else {
if((state_val_19786 === (12))){
var inst_19749 = (state_19785[(7)]);
var inst_19773 = cljs.core.vec(inst_19749);
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19785__$1,(15),out,inst_19773);
} else {
if((state_val_19786 === (2))){
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19785__$1,(4),ch);
} else {
if((state_val_19786 === (11))){
var inst_19765 = (state_19785[(2)]);
var inst_19766 = (new Array(n));
var inst_19749 = inst_19766;
var inst_19750 = (0);
var state_19785__$1 = (function (){var statearr_19797 = state_19785;
(statearr_19797[(7)] = inst_19749);

(statearr_19797[(10)] = inst_19765);

(statearr_19797[(8)] = inst_19750);

return statearr_19797;
})();
var statearr_19798_19822 = state_19785__$1;
(statearr_19798_19822[(2)] = null);

(statearr_19798_19822[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (9))){
var inst_19749 = (state_19785[(7)]);
var inst_19763 = cljs.core.vec(inst_19749);
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19785__$1,(11),out,inst_19763);
} else {
if((state_val_19786 === (5))){
var inst_19749 = (state_19785[(7)]);
var inst_19753 = (state_19785[(9)]);
var inst_19750 = (state_19785[(8)]);
var inst_19758 = (state_19785[(11)]);
var inst_19757 = (inst_19749[inst_19750] = inst_19753);
var inst_19758__$1 = (inst_19750 + (1));
var inst_19759 = (inst_19758__$1 < n);
var state_19785__$1 = (function (){var statearr_19799 = state_19785;
(statearr_19799[(12)] = inst_19757);

(statearr_19799[(11)] = inst_19758__$1);

return statearr_19799;
})();
if(cljs.core.truth_(inst_19759)){
var statearr_19800_19823 = state_19785__$1;
(statearr_19800_19823[(1)] = (8));

} else {
var statearr_19801_19824 = state_19785__$1;
(statearr_19801_19824[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (14))){
var inst_19778 = (state_19785[(2)]);
var inst_19779 = cljs.core.async.close_BANG_(out);
var state_19785__$1 = (function (){var statearr_19803 = state_19785;
(statearr_19803[(13)] = inst_19778);

return statearr_19803;
})();
var statearr_19804_19825 = state_19785__$1;
(statearr_19804_19825[(2)] = inst_19779);

(statearr_19804_19825[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (10))){
var inst_19769 = (state_19785[(2)]);
var state_19785__$1 = state_19785;
var statearr_19805_19826 = state_19785__$1;
(statearr_19805_19826[(2)] = inst_19769);

(statearr_19805_19826[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19786 === (8))){
var inst_19749 = (state_19785[(7)]);
var inst_19758 = (state_19785[(11)]);
var tmp19802 = inst_19749;
var inst_19749__$1 = tmp19802;
var inst_19750 = inst_19758;
var state_19785__$1 = (function (){var statearr_19806 = state_19785;
(statearr_19806[(7)] = inst_19749__$1);

(statearr_19806[(8)] = inst_19750);

return statearr_19806;
})();
var statearr_19807_19827 = state_19785__$1;
(statearr_19807_19827[(2)] = null);

(statearr_19807_19827[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19808[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19808[(1)] = (1));

return statearr_19808;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19785){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19785);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19809){if((e19809 instanceof Object)){
var ex__17877__auto__ = e19809;
var statearr_19810_19828 = state_19785;
(statearr_19810_19828[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19785);

return cljs.core.cst$kw$recur;
} else {
throw e19809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19829 = state_19785;
state_19785 = G__19829;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19811 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19811[(6)] = c__17980__auto___19813);

return statearr_19811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19831 = arguments.length;
switch (G__19831) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17980__auto___19901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17981__auto__ = (function (){var switch__17873__auto__ = (function (state_19873){
var state_val_19874 = (state_19873[(1)]);
if((state_val_19874 === (7))){
var inst_19869 = (state_19873[(2)]);
var state_19873__$1 = state_19873;
var statearr_19875_19902 = state_19873__$1;
(statearr_19875_19902[(2)] = inst_19869);

(statearr_19875_19902[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (1))){
var inst_19832 = [];
var inst_19833 = inst_19832;
var inst_19834 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19873__$1 = (function (){var statearr_19876 = state_19873;
(statearr_19876[(7)] = inst_19834);

(statearr_19876[(8)] = inst_19833);

return statearr_19876;
})();
var statearr_19877_19903 = state_19873__$1;
(statearr_19877_19903[(2)] = null);

(statearr_19877_19903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (4))){
var inst_19837 = (state_19873[(9)]);
var inst_19837__$1 = (state_19873[(2)]);
var inst_19838 = (inst_19837__$1 == null);
var inst_19839 = cljs.core.not(inst_19838);
var state_19873__$1 = (function (){var statearr_19878 = state_19873;
(statearr_19878[(9)] = inst_19837__$1);

return statearr_19878;
})();
if(inst_19839){
var statearr_19879_19904 = state_19873__$1;
(statearr_19879_19904[(1)] = (5));

} else {
var statearr_19880_19905 = state_19873__$1;
(statearr_19880_19905[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (15))){
var inst_19863 = (state_19873[(2)]);
var state_19873__$1 = state_19873;
var statearr_19881_19906 = state_19873__$1;
(statearr_19881_19906[(2)] = inst_19863);

(statearr_19881_19906[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (13))){
var state_19873__$1 = state_19873;
var statearr_19882_19907 = state_19873__$1;
(statearr_19882_19907[(2)] = null);

(statearr_19882_19907[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (6))){
var inst_19833 = (state_19873[(8)]);
var inst_19858 = inst_19833.length;
var inst_19859 = (inst_19858 > (0));
var state_19873__$1 = state_19873;
if(cljs.core.truth_(inst_19859)){
var statearr_19883_19908 = state_19873__$1;
(statearr_19883_19908[(1)] = (12));

} else {
var statearr_19884_19909 = state_19873__$1;
(statearr_19884_19909[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (3))){
var inst_19871 = (state_19873[(2)]);
var state_19873__$1 = state_19873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19873__$1,inst_19871);
} else {
if((state_val_19874 === (12))){
var inst_19833 = (state_19873[(8)]);
var inst_19861 = cljs.core.vec(inst_19833);
var state_19873__$1 = state_19873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19873__$1,(15),out,inst_19861);
} else {
if((state_val_19874 === (2))){
var state_19873__$1 = state_19873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19873__$1,(4),ch);
} else {
if((state_val_19874 === (11))){
var inst_19837 = (state_19873[(9)]);
var inst_19841 = (state_19873[(10)]);
var inst_19851 = (state_19873[(2)]);
var inst_19852 = [];
var inst_19853 = inst_19852.push(inst_19837);
var inst_19833 = inst_19852;
var inst_19834 = inst_19841;
var state_19873__$1 = (function (){var statearr_19885 = state_19873;
(statearr_19885[(11)] = inst_19853);

(statearr_19885[(7)] = inst_19834);

(statearr_19885[(8)] = inst_19833);

(statearr_19885[(12)] = inst_19851);

return statearr_19885;
})();
var statearr_19886_19910 = state_19873__$1;
(statearr_19886_19910[(2)] = null);

(statearr_19886_19910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (9))){
var inst_19833 = (state_19873[(8)]);
var inst_19849 = cljs.core.vec(inst_19833);
var state_19873__$1 = state_19873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19873__$1,(11),out,inst_19849);
} else {
if((state_val_19874 === (5))){
var inst_19834 = (state_19873[(7)]);
var inst_19837 = (state_19873[(9)]);
var inst_19841 = (state_19873[(10)]);
var inst_19841__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19837) : f.call(null,inst_19837));
var inst_19842 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19841__$1,inst_19834);
var inst_19843 = cljs.core.keyword_identical_QMARK_(inst_19834,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19844 = ((inst_19842) || (inst_19843));
var state_19873__$1 = (function (){var statearr_19887 = state_19873;
(statearr_19887[(10)] = inst_19841__$1);

return statearr_19887;
})();
if(cljs.core.truth_(inst_19844)){
var statearr_19888_19911 = state_19873__$1;
(statearr_19888_19911[(1)] = (8));

} else {
var statearr_19889_19912 = state_19873__$1;
(statearr_19889_19912[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (14))){
var inst_19866 = (state_19873[(2)]);
var inst_19867 = cljs.core.async.close_BANG_(out);
var state_19873__$1 = (function (){var statearr_19891 = state_19873;
(statearr_19891[(13)] = inst_19866);

return statearr_19891;
})();
var statearr_19892_19913 = state_19873__$1;
(statearr_19892_19913[(2)] = inst_19867);

(statearr_19892_19913[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (10))){
var inst_19856 = (state_19873[(2)]);
var state_19873__$1 = state_19873;
var statearr_19893_19914 = state_19873__$1;
(statearr_19893_19914[(2)] = inst_19856);

(statearr_19893_19914[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19874 === (8))){
var inst_19837 = (state_19873[(9)]);
var inst_19833 = (state_19873[(8)]);
var inst_19841 = (state_19873[(10)]);
var inst_19846 = inst_19833.push(inst_19837);
var tmp19890 = inst_19833;
var inst_19833__$1 = tmp19890;
var inst_19834 = inst_19841;
var state_19873__$1 = (function (){var statearr_19894 = state_19873;
(statearr_19894[(7)] = inst_19834);

(statearr_19894[(14)] = inst_19846);

(statearr_19894[(8)] = inst_19833__$1);

return statearr_19894;
})();
var statearr_19895_19915 = state_19873__$1;
(statearr_19895_19915[(2)] = null);

(statearr_19895_19915[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17874__auto__ = null;
var cljs$core$async$state_machine__17874__auto____0 = (function (){
var statearr_19896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19896[(0)] = cljs$core$async$state_machine__17874__auto__);

(statearr_19896[(1)] = (1));

return statearr_19896;
});
var cljs$core$async$state_machine__17874__auto____1 = (function (state_19873){
while(true){
var ret_value__17875__auto__ = (function (){try{while(true){
var result__17876__auto__ = switch__17873__auto__(state_19873);
if(cljs.core.keyword_identical_QMARK_(result__17876__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17876__auto__;
}
break;
}
}catch (e19897){if((e19897 instanceof Object)){
var ex__17877__auto__ = e19897;
var statearr_19898_19916 = state_19873;
(statearr_19898_19916[(5)] = ex__17877__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19873);

return cljs.core.cst$kw$recur;
} else {
throw e19897;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17875__auto__,cljs.core.cst$kw$recur)){
var G__19917 = state_19873;
state_19873 = G__19917;
continue;
} else {
return ret_value__17875__auto__;
}
break;
}
});
cljs$core$async$state_machine__17874__auto__ = function(state_19873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17874__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17874__auto____1.call(this,state_19873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17874__auto____0;
cljs$core$async$state_machine__17874__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17874__auto____1;
return cljs$core$async$state_machine__17874__auto__;
})()
})();
var state__17982__auto__ = (function (){var statearr_19899 = (f__17981__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17981__auto__.cljs$core$IFn$_invoke$arity$0() : f__17981__auto__.call(null));
(statearr_19899[(6)] = c__17980__auto___19901);

return statearr_19899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17982__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

