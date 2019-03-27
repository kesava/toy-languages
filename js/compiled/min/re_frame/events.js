// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__22788_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__22788_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__4657__auto___22789 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___22789)){
var not_i_22790 = temp__4657__auto___22789;
if(cljs.core.fn_QMARK_(not_i_22790)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_22790], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_22790], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_22791 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_22792 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22736__auto___22807 = re_frame.interop.now();
var duration__22737__auto___22808 = (end__22736__auto___22807 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__22793_22809 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22794_22810 = null;
var count__22795_22811 = (0);
var i__22796_22812 = (0);
while(true){
if((i__22796_22812 < count__22795_22811)){
var vec__22797_22813 = chunk__22794_22810.cljs$core$IIndexed$_nth$arity$2(null,i__22796_22812);
var k__22738__auto___22814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22797_22813,(0),null);
var cb__22739__auto___22815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22797_22813,(1),null);
try{var G__22801_22816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___22808,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___22815.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___22815.cljs$core$IFn$_invoke$arity$1(G__22801_22816) : cb__22739__auto___22815.call(null,G__22801_22816));
}catch (e22800){if((e22800 instanceof java.lang.Exception)){
var e__22740__auto___22817 = e22800;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___22814,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___22817], 0));
} else {
throw e22800;

}
}
var G__22818 = seq__22793_22809;
var G__22819 = chunk__22794_22810;
var G__22820 = count__22795_22811;
var G__22821 = (i__22796_22812 + (1));
seq__22793_22809 = G__22818;
chunk__22794_22810 = G__22819;
count__22795_22811 = G__22820;
i__22796_22812 = G__22821;
continue;
} else {
var temp__4657__auto___22822 = cljs.core.seq(seq__22793_22809);
if(temp__4657__auto___22822){
var seq__22793_22823__$1 = temp__4657__auto___22822;
if(cljs.core.chunked_seq_QMARK_(seq__22793_22823__$1)){
var c__11760__auto___22824 = cljs.core.chunk_first(seq__22793_22823__$1);
var G__22825 = cljs.core.chunk_rest(seq__22793_22823__$1);
var G__22826 = c__11760__auto___22824;
var G__22827 = cljs.core.count(c__11760__auto___22824);
var G__22828 = (0);
seq__22793_22809 = G__22825;
chunk__22794_22810 = G__22826;
count__22795_22811 = G__22827;
i__22796_22812 = G__22828;
continue;
} else {
var vec__22802_22829 = cljs.core.first(seq__22793_22823__$1);
var k__22738__auto___22830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22802_22829,(0),null);
var cb__22739__auto___22831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22802_22829,(1),null);
try{var G__22806_22832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___22808,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___22831.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___22831.cljs$core$IFn$_invoke$arity$1(G__22806_22832) : cb__22739__auto___22831.call(null,G__22806_22832));
}catch (e22805){if((e22805 instanceof java.lang.Exception)){
var e__22740__auto___22833 = e22805;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___22830,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___22833], 0));
} else {
throw e22805;

}
}
var G__22834 = cljs.core.next(seq__22793_22823__$1);
var G__22835 = null;
var G__22836 = (0);
var G__22837 = (0);
seq__22793_22809 = G__22834;
chunk__22794_22810 = G__22835;
count__22795_22811 = G__22836;
i__22796_22812 = G__22837;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_22792;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_22791;
}}
} else {
return null;
}
});
