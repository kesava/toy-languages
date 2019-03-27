// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.interop');
goog.require('re_frame.db');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('re_frame.router');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.interceptor');
goog.require('re_frame.std_interceptors');
goog.require('clojure.set');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_fx = re_frame.fx.reg_fx;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.reg_cofx;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var G__23455 = arguments.length;
switch (G__23455) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var G__23458 = arguments.length;
switch (G__23458) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var G__23461 = arguments.length;
switch (G__23461) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_23467 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_23468 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__23463_23469 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_23468,original_subs_23467));
var chunk__23464_23470 = null;
var count__23465_23471 = (0);
var i__23466_23472 = (0);
while(true){
if((i__23466_23472 < count__23465_23471)){
var sub_23473 = chunk__23464_23470.cljs$core$IIndexed$_nth$arity$2(null,i__23466_23472);
re_frame.interop.dispose_BANG_(sub_23473);

var G__23474 = seq__23463_23469;
var G__23475 = chunk__23464_23470;
var G__23476 = count__23465_23471;
var G__23477 = (i__23466_23472 + (1));
seq__23463_23469 = G__23474;
chunk__23464_23470 = G__23475;
count__23465_23471 = G__23476;
i__23466_23472 = G__23477;
continue;
} else {
var temp__4657__auto___23478 = cljs.core.seq(seq__23463_23469);
if(temp__4657__auto___23478){
var seq__23463_23479__$1 = temp__4657__auto___23478;
if(cljs.core.chunked_seq_QMARK_(seq__23463_23479__$1)){
var c__11760__auto___23480 = cljs.core.chunk_first(seq__23463_23479__$1);
var G__23481 = cljs.core.chunk_rest(seq__23463_23479__$1);
var G__23482 = c__11760__auto___23480;
var G__23483 = cljs.core.count(c__11760__auto___23480);
var G__23484 = (0);
seq__23463_23469 = G__23481;
chunk__23464_23470 = G__23482;
count__23465_23471 = G__23483;
i__23466_23472 = G__23484;
continue;
} else {
var sub_23485 = cljs.core.first(seq__23463_23479__$1);
re_frame.interop.dispose_BANG_(sub_23485);

var G__23486 = cljs.core.next(seq__23463_23479__$1);
var G__23487 = null;
var G__23488 = (0);
var G__23489 = (0);
seq__23463_23469 = G__23486;
chunk__23464_23470 = G__23487;
count__23465_23471 = G__23488;
i__23466_23472 = G__23489;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__23491 = arguments.length;
switch (G__23491) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback(re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback(re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__12088__auto__ = [];
var len__12081__auto___23498 = arguments.length;
var i__12082__auto___23499 = (0);
while(true){
if((i__12082__auto___23499 < len__12081__auto___23498)){
args__12088__auto__.push((arguments[i__12082__auto___23499]));

var G__23500 = (i__12082__auto___23499 + (1));
i__12082__auto___23499 = G__23500;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__23494_23501 = cljs.core.cst$kw$warn;
var G__23495_23502 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ";
var G__23496_23503 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join('');
var G__23497_23504 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__23494_23501,G__23495_23502,G__23496_23503,G__23497_23504) : re_frame.core.console.call(null,G__23494_23501,G__23495_23502,G__23496_23503,G__23497_23504));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq23493){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23493));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__12088__auto__ = [];
var len__12081__auto___23510 = arguments.length;
var i__12082__auto___23511 = (0);
while(true){
if((i__12082__auto___23511 < len__12081__auto___23510)){
args__12088__auto__.push((arguments[i__12082__auto___23511]));

var G__23512 = (i__12082__auto___23511 + (1));
i__12082__auto___23511 = G__23512;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__23506_23513 = cljs.core.cst$kw$warn;
var G__23507_23514 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of ";
var G__23508_23515 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join('');
var G__23509_23516 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__23506_23513,G__23507_23514,G__23508_23515,G__23509_23516) : re_frame.core.console.call(null,G__23506_23513,G__23507_23514,G__23508_23515,G__23509_23516));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq23505){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23505));
});

