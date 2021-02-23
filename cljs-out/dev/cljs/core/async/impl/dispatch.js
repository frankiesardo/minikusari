// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer((32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
(cljs.core.async.impl.dispatch.running_QMARK_ = true);

(cljs.core.async.impl.dispatch.queued_QMARK_ = false);

var count_16211 = (0);
while(true){
var m_16212 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_16212 == null)){
} else {
(m_16212.cljs$core$IFn$_invoke$arity$0 ? m_16212.cljs$core$IFn$_invoke$arity$0() : m_16212.call(null));

if((count_16211 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__16213 = (count_16211 + (1));
count_16211 = G__16213;
continue;
} else {
}
}
break;
}

(cljs.core.async.impl.dispatch.running_QMARK_ = false);

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return (cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.impl.dispatch.queue_dispatcher.call(null));
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_))){
return null;
} else {
(cljs.core.async.impl.dispatch.queued_QMARK_ = true);

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});
