// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__34634_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__34634_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___34635 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___34635)){
var not_i_34636 = temp__4657__auto___34635;
if(cljs.core.fn_QMARK_.call(null,not_i_34636)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_34636);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_34636);
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
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_34637 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34638 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34582__auto___34651 = re_frame.interop.now.call(null);
var duration__34583__auto___34652 = (end__34582__auto___34651 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__34639_34653 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__34640_34654 = null;
var count__34641_34655 = (0);
var i__34642_34656 = (0);
while(true){
if((i__34642_34656 < count__34641_34655)){
var vec__34643_34657 = cljs.core._nth.call(null,chunk__34640_34654,i__34642_34656);
var k__34584__auto___34658 = cljs.core.nth.call(null,vec__34643_34657,(0),null);
var cb__34585__auto___34659 = cljs.core.nth.call(null,vec__34643_34657,(1),null);
try{cb__34585__auto___34659.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34583__auto___34652,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34646){if((e34646 instanceof java.lang.Exception)){
var e__34586__auto___34660 = e34646;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34584__auto___34658,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34586__auto___34660);
} else {
throw e34646;

}
}
var G__34661 = seq__34639_34653;
var G__34662 = chunk__34640_34654;
var G__34663 = count__34641_34655;
var G__34664 = (i__34642_34656 + (1));
seq__34639_34653 = G__34661;
chunk__34640_34654 = G__34662;
count__34641_34655 = G__34663;
i__34642_34656 = G__34664;
continue;
} else {
var temp__4657__auto___34665 = cljs.core.seq.call(null,seq__34639_34653);
if(temp__4657__auto___34665){
var seq__34639_34666__$1 = temp__4657__auto___34665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34639_34666__$1)){
var c__27301__auto___34667 = cljs.core.chunk_first.call(null,seq__34639_34666__$1);
var G__34668 = cljs.core.chunk_rest.call(null,seq__34639_34666__$1);
var G__34669 = c__27301__auto___34667;
var G__34670 = cljs.core.count.call(null,c__27301__auto___34667);
var G__34671 = (0);
seq__34639_34653 = G__34668;
chunk__34640_34654 = G__34669;
count__34641_34655 = G__34670;
i__34642_34656 = G__34671;
continue;
} else {
var vec__34647_34672 = cljs.core.first.call(null,seq__34639_34666__$1);
var k__34584__auto___34673 = cljs.core.nth.call(null,vec__34647_34672,(0),null);
var cb__34585__auto___34674 = cljs.core.nth.call(null,vec__34647_34672,(1),null);
try{cb__34585__auto___34674.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34583__auto___34652,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e34650){if((e34650 instanceof java.lang.Exception)){
var e__34586__auto___34675 = e34650;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34584__auto___34673,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34586__auto___34675);
} else {
throw e34650;

}
}
var G__34676 = cljs.core.next.call(null,seq__34639_34666__$1);
var G__34677 = null;
var G__34678 = (0);
var G__34679 = (0);
seq__34639_34653 = G__34676;
chunk__34640_34654 = G__34677;
count__34641_34655 = G__34678;
i__34642_34656 = G__34679;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34638;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_34637;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1553721082883
