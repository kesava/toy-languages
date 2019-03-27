// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__23132_23142 = cljs.core.seq(cljs.core.deref(re_frame.subs.query__GT_reaction));
var chunk__23133_23143 = null;
var count__23134_23144 = (0);
var i__23135_23145 = (0);
while(true){
if((i__23135_23145 < count__23134_23144)){
var vec__23136_23146 = chunk__23133_23143.cljs$core$IIndexed$_nth$arity$2(null,i__23135_23145);
var k_23147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23136_23146,(0),null);
var rxn_23148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23136_23146,(1),null);
re_frame.interop.dispose_BANG_(rxn_23148);

var G__23149 = seq__23132_23142;
var G__23150 = chunk__23133_23143;
var G__23151 = count__23134_23144;
var G__23152 = (i__23135_23145 + (1));
seq__23132_23142 = G__23149;
chunk__23133_23143 = G__23150;
count__23134_23144 = G__23151;
i__23135_23145 = G__23152;
continue;
} else {
var temp__4657__auto___23153 = cljs.core.seq(seq__23132_23142);
if(temp__4657__auto___23153){
var seq__23132_23154__$1 = temp__4657__auto___23153;
if(cljs.core.chunked_seq_QMARK_(seq__23132_23154__$1)){
var c__11760__auto___23155 = cljs.core.chunk_first(seq__23132_23154__$1);
var G__23156 = cljs.core.chunk_rest(seq__23132_23154__$1);
var G__23157 = c__11760__auto___23155;
var G__23158 = cljs.core.count(c__11760__auto___23155);
var G__23159 = (0);
seq__23132_23142 = G__23156;
chunk__23133_23143 = G__23157;
count__23134_23144 = G__23158;
i__23135_23145 = G__23159;
continue;
} else {
var vec__23139_23160 = cljs.core.first(seq__23132_23154__$1);
var k_23161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139_23160,(0),null);
var rxn_23162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139_23160,(1),null);
re_frame.interop.dispose_BANG_(rxn_23162);

var G__23163 = cljs.core.next(seq__23132_23154__$1);
var G__23164 = null;
var G__23165 = (0);
var G__23166 = (0);
seq__23132_23142 = G__23163;
chunk__23133_23143 = G__23164;
count__23134_23144 = G__23165;
i__23135_23145 = G__23166;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23167 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22736__auto___23182 = re_frame.interop.now();
var duration__22737__auto___23183 = (end__22736__auto___23182 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23168_23184 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23169_23185 = null;
var count__23170_23186 = (0);
var i__23171_23187 = (0);
while(true){
if((i__23171_23187 < count__23170_23186)){
var vec__23172_23188 = chunk__23169_23185.cljs$core$IIndexed$_nth$arity$2(null,i__23171_23187);
var k__22738__auto___23189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172_23188,(0),null);
var cb__22739__auto___23190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23172_23188,(1),null);
try{var G__23176_23191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23183,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23190.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23190.cljs$core$IFn$_invoke$arity$1(G__23176_23191) : cb__22739__auto___23190.call(null,G__23176_23191));
}catch (e23175){if((e23175 instanceof java.lang.Exception)){
var e__22740__auto___23192 = e23175;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23189,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23192], 0));
} else {
throw e23175;

}
}
var G__23193 = seq__23168_23184;
var G__23194 = chunk__23169_23185;
var G__23195 = count__23170_23186;
var G__23196 = (i__23171_23187 + (1));
seq__23168_23184 = G__23193;
chunk__23169_23185 = G__23194;
count__23170_23186 = G__23195;
i__23171_23187 = G__23196;
continue;
} else {
var temp__4657__auto___23197 = cljs.core.seq(seq__23168_23184);
if(temp__4657__auto___23197){
var seq__23168_23198__$1 = temp__4657__auto___23197;
if(cljs.core.chunked_seq_QMARK_(seq__23168_23198__$1)){
var c__11760__auto___23199 = cljs.core.chunk_first(seq__23168_23198__$1);
var G__23200 = cljs.core.chunk_rest(seq__23168_23198__$1);
var G__23201 = c__11760__auto___23199;
var G__23202 = cljs.core.count(c__11760__auto___23199);
var G__23203 = (0);
seq__23168_23184 = G__23200;
chunk__23169_23185 = G__23201;
count__23170_23186 = G__23202;
i__23171_23187 = G__23203;
continue;
} else {
var vec__23177_23204 = cljs.core.first(seq__23168_23198__$1);
var k__22738__auto___23205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23177_23204,(0),null);
var cb__22739__auto___23206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23177_23204,(1),null);
try{var G__23181_23207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23183,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23206.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23206.cljs$core$IFn$_invoke$arity$1(G__23181_23207) : cb__22739__auto___23206.call(null,G__23181_23207));
}catch (e23180){if((e23180 instanceof java.lang.Exception)){
var e__22740__auto___23208 = e23180;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23205,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23208], 0));
} else {
throw e23180;

}
}
var G__23209 = cljs.core.next(seq__23168_23198__$1);
var G__23210 = null;
var G__23211 = (0);
var G__23212 = (0);
seq__23168_23184 = G__23209;
chunk__23169_23185 = G__23210;
count__23170_23186 = G__23211;
i__23171_23187 = G__23212;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23167;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23213 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23213;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__23215 = arguments.length;
switch (G__23215) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__23218 = arguments.length;
switch (G__23218) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23219 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23256 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23256;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23257 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23257;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23258 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23258;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22736__auto___23259 = re_frame.interop.now();
var duration__22737__auto___23260 = (end__22736__auto___23259 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23220_23261 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23221_23262 = null;
var count__23222_23263 = (0);
var i__23223_23264 = (0);
while(true){
if((i__23223_23264 < count__23222_23263)){
var vec__23224_23265 = chunk__23221_23262.cljs$core$IIndexed$_nth$arity$2(null,i__23223_23264);
var k__22738__auto___23266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23265,(0),null);
var cb__22739__auto___23267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23265,(1),null);
try{var G__23228_23268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23260,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23267.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23267.cljs$core$IFn$_invoke$arity$1(G__23228_23268) : cb__22739__auto___23267.call(null,G__23228_23268));
}catch (e23227){if((e23227 instanceof java.lang.Exception)){
var e__22740__auto___23269 = e23227;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23266,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23269], 0));
} else {
throw e23227;

}
}
var G__23270 = seq__23220_23261;
var G__23271 = chunk__23221_23262;
var G__23272 = count__23222_23263;
var G__23273 = (i__23223_23264 + (1));
seq__23220_23261 = G__23270;
chunk__23221_23262 = G__23271;
count__23222_23263 = G__23272;
i__23223_23264 = G__23273;
continue;
} else {
var temp__4657__auto___23274 = cljs.core.seq(seq__23220_23261);
if(temp__4657__auto___23274){
var seq__23220_23275__$1 = temp__4657__auto___23274;
if(cljs.core.chunked_seq_QMARK_(seq__23220_23275__$1)){
var c__11760__auto___23276 = cljs.core.chunk_first(seq__23220_23275__$1);
var G__23277 = cljs.core.chunk_rest(seq__23220_23275__$1);
var G__23278 = c__11760__auto___23276;
var G__23279 = cljs.core.count(c__11760__auto___23276);
var G__23280 = (0);
seq__23220_23261 = G__23277;
chunk__23221_23262 = G__23278;
count__23222_23263 = G__23279;
i__23223_23264 = G__23280;
continue;
} else {
var vec__23229_23281 = cljs.core.first(seq__23220_23275__$1);
var k__22738__auto___23282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23229_23281,(0),null);
var cb__22739__auto___23283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23229_23281,(1),null);
try{var G__23233_23284 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23260,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23283.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23283.cljs$core$IFn$_invoke$arity$1(G__23233_23284) : cb__22739__auto___23283.call(null,G__23233_23284));
}catch (e23232){if((e23232 instanceof java.lang.Exception)){
var e__22740__auto___23285 = e23232;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23282,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23285], 0));
} else {
throw e23232;

}
}
var G__23286 = cljs.core.next(seq__23220_23275__$1);
var G__23287 = null;
var G__23288 = (0);
var G__23289 = (0);
seq__23220_23261 = G__23286;
chunk__23221_23262 = G__23287;
count__23222_23263 = G__23288;
i__23223_23264 = G__23289;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23219;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23290 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23290;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23291 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23291;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23292 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23292;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23234 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23293 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23293;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23294 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23294;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___23295 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___23295)){
var not_reactive_23296 = temp__4657__auto___23295;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_23296], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23297 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23297;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23234){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23234))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23234){
return (function (){
var G__23249 = re_frame.db.app_db;
var G__23250 = query;
var G__23251 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__23249,G__23250,G__23251) : handler_fn.call(null,G__23249,G__23250,G__23251));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23234))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23234){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_23234))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22736__auto___23298 = re_frame.interop.now();
var duration__22737__auto___23299 = (end__22736__auto___23298 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23235_23300 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23236_23301 = null;
var count__23237_23302 = (0);
var i__23238_23303 = (0);
while(true){
if((i__23238_23303 < count__23237_23302)){
var vec__23239_23304 = chunk__23236_23301.cljs$core$IIndexed$_nth$arity$2(null,i__23238_23303);
var k__22738__auto___23305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23239_23304,(0),null);
var cb__22739__auto___23306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23239_23304,(1),null);
try{var G__23243_23307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23299,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23306.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23306.cljs$core$IFn$_invoke$arity$1(G__23243_23307) : cb__22739__auto___23306.call(null,G__23243_23307));
}catch (e23242){if((e23242 instanceof java.lang.Exception)){
var e__22740__auto___23308 = e23242;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23305,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23308], 0));
} else {
throw e23242;

}
}
var G__23309 = seq__23235_23300;
var G__23310 = chunk__23236_23301;
var G__23311 = count__23237_23302;
var G__23312 = (i__23238_23303 + (1));
seq__23235_23300 = G__23309;
chunk__23236_23301 = G__23310;
count__23237_23302 = G__23311;
i__23238_23303 = G__23312;
continue;
} else {
var temp__4657__auto___23313 = cljs.core.seq(seq__23235_23300);
if(temp__4657__auto___23313){
var seq__23235_23314__$1 = temp__4657__auto___23313;
if(cljs.core.chunked_seq_QMARK_(seq__23235_23314__$1)){
var c__11760__auto___23315 = cljs.core.chunk_first(seq__23235_23314__$1);
var G__23316 = cljs.core.chunk_rest(seq__23235_23314__$1);
var G__23317 = c__11760__auto___23315;
var G__23318 = cljs.core.count(c__11760__auto___23315);
var G__23319 = (0);
seq__23235_23300 = G__23316;
chunk__23236_23301 = G__23317;
count__23237_23302 = G__23318;
i__23238_23303 = G__23319;
continue;
} else {
var vec__23244_23320 = cljs.core.first(seq__23235_23314__$1);
var k__22738__auto___23321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23244_23320,(0),null);
var cb__22739__auto___23322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23244_23320,(1),null);
try{var G__23248_23323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23299,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23322.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23322.cljs$core$IFn$_invoke$arity$1(G__23248_23323) : cb__22739__auto___23322.call(null,G__23248_23323));
}catch (e23247){if((e23247 instanceof java.lang.Exception)){
var e__22740__auto___23324 = e23247;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23321,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23324], 0));
} else {
throw e23247;

}
}
var G__23325 = cljs.core.next(seq__23235_23314__$1);
var G__23326 = null;
var G__23327 = (0);
var G__23328 = (0);
seq__23235_23300 = G__23325;
chunk__23236_23301 = G__23326;
count__23237_23302 = G__23327;
i__23238_23303 = G__23328;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23234;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23329 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23329;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23330 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23330;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___23331 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___23331)){
var not_reactive_23332 = temp__4657__auto___23331;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_23332], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23333 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23333;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__23252 = re_frame.db.app_db;
var G__23253 = query;
var G__23254 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__23252,G__23253,G__23254) : handler_fn.call(null,G__23252,G__23253,G__23254));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__23334){
var vec__23335 = p__23334;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23335,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?cljs.core.deref(signals):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__22741__auto___23338 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22741__auto___23338;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__12088__auto__ = [];
var len__12081__auto___23385 = arguments.length;
var i__12082__auto___23386 = (0);
while(true){
if((i__12082__auto___23386 < len__12081__auto___23385)){
args__12088__auto__.push((arguments[i__12082__auto___23386]));

var G__23387 = (i__12082__auto___23386 + (1));
i__12082__auto___23386 = G__23387;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((1) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12089__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__23341 = cljs.core.count(input_args);
switch (G__23341) {
case (0):
return ((function (G__23341,computation_fn,input_args,err_header){
return (function() {
var G__23389 = null;
var G__23389__1 = (function (_){
return re_frame.db.app_db;
});
var G__23389__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__23389 = function(_,___$1){
switch(arguments.length){
case 1:
return G__23389__1.call(this,_);
case 2:
return G__23389__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23389.cljs$core$IFn$_invoke$arity$1 = G__23389__1;
G__23389.cljs$core$IFn$_invoke$arity$2 = G__23389__2;
return G__23389;
})()
;})(G__23341,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__23342 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23342,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23342,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT__DASH_,marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__23342,marker,vec,G__23341,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__23342,marker,vec,G__23341,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_LT__DASH_,null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__23341,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__23341,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23345 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var G__23360 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23361 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23360,G__23361) : computation_fn.call(null,G__23360,G__23361));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22736__auto___23390 = re_frame.interop.now();
var duration__22737__auto___23391 = (end__22736__auto___23390 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23346_23392 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23347_23393 = null;
var count__23348_23394 = (0);
var i__23349_23395 = (0);
while(true){
if((i__23349_23395 < count__23348_23394)){
var vec__23350_23396 = chunk__23347_23393.cljs$core$IIndexed$_nth$arity$2(null,i__23349_23395);
var k__22738__auto___23397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23350_23396,(0),null);
var cb__22739__auto___23398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23350_23396,(1),null);
try{var G__23354_23399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23391,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23398.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23398.cljs$core$IFn$_invoke$arity$1(G__23354_23399) : cb__22739__auto___23398.call(null,G__23354_23399));
}catch (e23353){if((e23353 instanceof java.lang.Exception)){
var e__22740__auto___23400 = e23353;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23397,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23400], 0));
} else {
throw e23353;

}
}
var G__23401 = seq__23346_23392;
var G__23402 = chunk__23347_23393;
var G__23403 = count__23348_23394;
var G__23404 = (i__23349_23395 + (1));
seq__23346_23392 = G__23401;
chunk__23347_23393 = G__23402;
count__23348_23394 = G__23403;
i__23349_23395 = G__23404;
continue;
} else {
var temp__4657__auto___23405 = cljs.core.seq(seq__23346_23392);
if(temp__4657__auto___23405){
var seq__23346_23406__$1 = temp__4657__auto___23405;
if(cljs.core.chunked_seq_QMARK_(seq__23346_23406__$1)){
var c__11760__auto___23407 = cljs.core.chunk_first(seq__23346_23406__$1);
var G__23408 = cljs.core.chunk_rest(seq__23346_23406__$1);
var G__23409 = c__11760__auto___23407;
var G__23410 = cljs.core.count(c__11760__auto___23407);
var G__23411 = (0);
seq__23346_23392 = G__23408;
chunk__23347_23393 = G__23409;
count__23348_23394 = G__23410;
i__23349_23395 = G__23411;
continue;
} else {
var vec__23355_23412 = cljs.core.first(seq__23346_23406__$1);
var k__22738__auto___23413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23355_23412,(0),null);
var cb__22739__auto___23414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23355_23412,(1),null);
try{var G__23359_23415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23391,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23414.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23414.cljs$core$IFn$_invoke$arity$1(G__23359_23415) : cb__22739__auto___23414.call(null,G__23359_23415));
}catch (e23358){if((e23358 instanceof java.lang.Exception)){
var e__22740__auto___23416 = e23358;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23413,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23416], 0));
} else {
throw e23358;

}
}
var G__23417 = cljs.core.next(seq__23346_23406__$1);
var G__23418 = null;
var G__23419 = (0);
var G__23420 = (0);
seq__23346_23392 = G__23417;
chunk__23347_23393 = G__23418;
count__23348_23394 = G__23419;
i__23349_23395 = G__23420;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23345;
}} else {
var G__23362 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23363 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__23362,G__23363) : computation_fn.call(null,G__23362,G__23363));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_23364 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var G__23379 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23380 = query_vec;
var G__23381 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__23379,G__23380,G__23381) : computation_fn.call(null,G__23379,G__23380,G__23381));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22736__auto___23421 = re_frame.interop.now();
var duration__22737__auto___23422 = (end__22736__auto___23421 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__23365_23423 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23366_23424 = null;
var count__23367_23425 = (0);
var i__23368_23426 = (0);
while(true){
if((i__23368_23426 < count__23367_23425)){
var vec__23369_23427 = chunk__23366_23424.cljs$core$IIndexed$_nth$arity$2(null,i__23368_23426);
var k__22738__auto___23428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369_23427,(0),null);
var cb__22739__auto___23429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369_23427,(1),null);
try{var G__23373_23430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23422,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23429.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23429.cljs$core$IFn$_invoke$arity$1(G__23373_23430) : cb__22739__auto___23429.call(null,G__23373_23430));
}catch (e23372){if((e23372 instanceof java.lang.Exception)){
var e__22740__auto___23431 = e23372;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23428,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23431], 0));
} else {
throw e23372;

}
}
var G__23432 = seq__23365_23423;
var G__23433 = chunk__23366_23424;
var G__23434 = count__23367_23425;
var G__23435 = (i__23368_23426 + (1));
seq__23365_23423 = G__23432;
chunk__23366_23424 = G__23433;
count__23367_23425 = G__23434;
i__23368_23426 = G__23435;
continue;
} else {
var temp__4657__auto___23436 = cljs.core.seq(seq__23365_23423);
if(temp__4657__auto___23436){
var seq__23365_23437__$1 = temp__4657__auto___23436;
if(cljs.core.chunked_seq_QMARK_(seq__23365_23437__$1)){
var c__11760__auto___23438 = cljs.core.chunk_first(seq__23365_23437__$1);
var G__23439 = cljs.core.chunk_rest(seq__23365_23437__$1);
var G__23440 = c__11760__auto___23438;
var G__23441 = cljs.core.count(c__11760__auto___23438);
var G__23442 = (0);
seq__23365_23423 = G__23439;
chunk__23366_23424 = G__23440;
count__23367_23425 = G__23441;
i__23368_23426 = G__23442;
continue;
} else {
var vec__23374_23443 = cljs.core.first(seq__23365_23437__$1);
var k__22738__auto___23444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23374_23443,(0),null);
var cb__22739__auto___23445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23374_23443,(1),null);
try{var G__23378_23446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__22737__auto___23422,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__22739__auto___23445.cljs$core$IFn$_invoke$arity$1 ? cb__22739__auto___23445.cljs$core$IFn$_invoke$arity$1(G__23378_23446) : cb__22739__auto___23445.call(null,G__23378_23446));
}catch (e23377){if((e23377 instanceof java.lang.Exception)){
var e__22740__auto___23447 = e23377;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__22738__auto___23444,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__22740__auto___23447], 0));
} else {
throw e23377;

}
}
var G__23448 = cljs.core.next(seq__23365_23437__$1);
var G__23449 = null;
var G__23450 = (0);
var G__23451 = (0);
seq__23365_23423 = G__23448;
chunk__23366_23424 = G__23449;
count__23367_23425 = G__23450;
i__23368_23426 = G__23451;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23364;
}} else {
var G__23382 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__23383 = query_vec;
var G__23384 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__23382,G__23383,G__23384) : computation_fn.call(null,G__23382,G__23383,G__23384));
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq23339){
var G__23340 = cljs.core.first(seq23339);
var seq23339__$1 = cljs.core.next(seq23339);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__23340,seq23339__$1);
});

