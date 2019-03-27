// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__34754 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34755 = null;
var count__34756 = (0);
var i__34757 = (0);
while(true){
if((i__34757 < count__34756)){
var vec__34758 = cljs.core._nth.call(null,chunk__34755,i__34757);
var effect_key = cljs.core.nth.call(null,vec__34758,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34758,(1),null);
var temp__4655__auto___34764 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34764)){
var effect_fn_34765 = temp__4655__auto___34764;
effect_fn_34765.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__34766 = seq__34754;
var G__34767 = chunk__34755;
var G__34768 = count__34756;
var G__34769 = (i__34757 + (1));
seq__34754 = G__34766;
chunk__34755 = G__34767;
count__34756 = G__34768;
i__34757 = G__34769;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34754);
if(temp__4657__auto__){
var seq__34754__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34754__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__34754__$1);
var G__34770 = cljs.core.chunk_rest.call(null,seq__34754__$1);
var G__34771 = c__27301__auto__;
var G__34772 = cljs.core.count.call(null,c__27301__auto__);
var G__34773 = (0);
seq__34754 = G__34770;
chunk__34755 = G__34771;
count__34756 = G__34772;
i__34757 = G__34773;
continue;
} else {
var vec__34761 = cljs.core.first.call(null,seq__34754__$1);
var effect_key = cljs.core.nth.call(null,vec__34761,(0),null);
var effect_value = cljs.core.nth.call(null,vec__34761,(1),null);
var temp__4655__auto___34774 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___34774)){
var effect_fn_34775 = temp__4655__auto___34774;
effect_fn_34775.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__34776 = cljs.core.next.call(null,seq__34754__$1);
var G__34777 = null;
var G__34778 = (0);
var G__34779 = (0);
seq__34754 = G__34776;
chunk__34755 = G__34777;
count__34756 = G__34778;
i__34757 = G__34779;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__34780 = cljs.core.seq.call(null,value);
var chunk__34781 = null;
var count__34782 = (0);
var i__34783 = (0);
while(true){
if((i__34783 < count__34782)){
var map__34784 = cljs.core._nth.call(null,chunk__34781,i__34783);
var map__34784__$1 = ((((!((map__34784 == null)))?((((map__34784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34784):map__34784);
var effect = map__34784__$1;
var ms = cljs.core.get.call(null,map__34784__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34784__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34780,chunk__34781,count__34782,i__34783,map__34784,map__34784__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34780,chunk__34781,count__34782,i__34783,map__34784,map__34784__$1,effect,ms,dispatch))
,ms);
}

var G__34788 = seq__34780;
var G__34789 = chunk__34781;
var G__34790 = count__34782;
var G__34791 = (i__34783 + (1));
seq__34780 = G__34788;
chunk__34781 = G__34789;
count__34782 = G__34790;
i__34783 = G__34791;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34780);
if(temp__4657__auto__){
var seq__34780__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34780__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__34780__$1);
var G__34792 = cljs.core.chunk_rest.call(null,seq__34780__$1);
var G__34793 = c__27301__auto__;
var G__34794 = cljs.core.count.call(null,c__27301__auto__);
var G__34795 = (0);
seq__34780 = G__34792;
chunk__34781 = G__34793;
count__34782 = G__34794;
i__34783 = G__34795;
continue;
} else {
var map__34786 = cljs.core.first.call(null,seq__34780__$1);
var map__34786__$1 = ((((!((map__34786 == null)))?((((map__34786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34786):map__34786);
var effect = map__34786__$1;
var ms = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__34780,chunk__34781,count__34782,i__34783,map__34786,map__34786__$1,effect,ms,dispatch,seq__34780__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__34780,chunk__34781,count__34782,i__34783,map__34786,map__34786__$1,effect,ms,dispatch,seq__34780__$1,temp__4657__auto__))
,ms);
}

var G__34796 = cljs.core.next.call(null,seq__34780__$1);
var G__34797 = null;
var G__34798 = (0);
var G__34799 = (0);
seq__34780 = G__34796;
chunk__34781 = G__34797;
count__34782 = G__34798;
i__34783 = G__34799;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__34800 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__34801 = null;
var count__34802 = (0);
var i__34803 = (0);
while(true){
if((i__34803 < count__34802)){
var event = cljs.core._nth.call(null,chunk__34801,i__34803);
re_frame.router.dispatch.call(null,event);

var G__34804 = seq__34800;
var G__34805 = chunk__34801;
var G__34806 = count__34802;
var G__34807 = (i__34803 + (1));
seq__34800 = G__34804;
chunk__34801 = G__34805;
count__34802 = G__34806;
i__34803 = G__34807;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34800);
if(temp__4657__auto__){
var seq__34800__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34800__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__34800__$1);
var G__34808 = cljs.core.chunk_rest.call(null,seq__34800__$1);
var G__34809 = c__27301__auto__;
var G__34810 = cljs.core.count.call(null,c__27301__auto__);
var G__34811 = (0);
seq__34800 = G__34808;
chunk__34801 = G__34809;
count__34802 = G__34810;
i__34803 = G__34811;
continue;
} else {
var event = cljs.core.first.call(null,seq__34800__$1);
re_frame.router.dispatch.call(null,event);

var G__34812 = cljs.core.next.call(null,seq__34800__$1);
var G__34813 = null;
var G__34814 = (0);
var G__34815 = (0);
seq__34800 = G__34812;
chunk__34801 = G__34813;
count__34802 = G__34814;
i__34803 = G__34815;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__34816 = cljs.core.seq.call(null,value);
var chunk__34817 = null;
var count__34818 = (0);
var i__34819 = (0);
while(true){
if((i__34819 < count__34818)){
var event = cljs.core._nth.call(null,chunk__34817,i__34819);
clear_event.call(null,event);

var G__34820 = seq__34816;
var G__34821 = chunk__34817;
var G__34822 = count__34818;
var G__34823 = (i__34819 + (1));
seq__34816 = G__34820;
chunk__34817 = G__34821;
count__34818 = G__34822;
i__34819 = G__34823;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34816);
if(temp__4657__auto__){
var seq__34816__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34816__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__34816__$1);
var G__34824 = cljs.core.chunk_rest.call(null,seq__34816__$1);
var G__34825 = c__27301__auto__;
var G__34826 = cljs.core.count.call(null,c__27301__auto__);
var G__34827 = (0);
seq__34816 = G__34824;
chunk__34817 = G__34825;
count__34818 = G__34826;
i__34819 = G__34827;
continue;
} else {
var event = cljs.core.first.call(null,seq__34816__$1);
clear_event.call(null,event);

var G__34828 = cljs.core.next.call(null,seq__34816__$1);
var G__34829 = null;
var G__34830 = (0);
var G__34831 = (0);
seq__34816 = G__34828;
chunk__34817 = G__34829;
count__34818 = G__34830;
i__34819 = G__34831;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1553721083081
