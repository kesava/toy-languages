// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
var seq__22919 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__22920 = null;
var count__22921 = (0);
var i__22922 = (0);
while(true){
if((i__22922 < count__22921)){
var vec__22923 = chunk__22920.cljs$core$IIndexed$_nth$arity$2(null,i__22922);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22923,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22923,(1),null);
var temp__4655__auto___22929 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___22929)){
var effect_fn_22930 = temp__4655__auto___22929;
(effect_fn_22930.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22930.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22930.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__22931 = seq__22919;
var G__22932 = chunk__22920;
var G__22933 = count__22921;
var G__22934 = (i__22922 + (1));
seq__22919 = G__22931;
chunk__22920 = G__22932;
count__22921 = G__22933;
i__22922 = G__22934;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22919);
if(temp__4657__auto__){
var seq__22919__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22919__$1)){
var c__11760__auto__ = cljs.core.chunk_first(seq__22919__$1);
var G__22935 = cljs.core.chunk_rest(seq__22919__$1);
var G__22936 = c__11760__auto__;
var G__22937 = cljs.core.count(c__11760__auto__);
var G__22938 = (0);
seq__22919 = G__22935;
chunk__22920 = G__22936;
count__22921 = G__22937;
i__22922 = G__22938;
continue;
} else {
var vec__22926 = cljs.core.first(seq__22919__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22926,(1),null);
var temp__4655__auto___22939 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___22939)){
var effect_fn_22940 = temp__4655__auto___22939;
(effect_fn_22940.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22940.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22940.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__22941 = cljs.core.next(seq__22919__$1);
var G__22942 = null;
var G__22943 = (0);
var G__22944 = (0);
seq__22919 = G__22941;
chunk__22920 = G__22942;
count__22921 = G__22943;
i__22922 = G__22944;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__22945 = cljs.core.seq(value);
var chunk__22946 = null;
var count__22947 = (0);
var i__22948 = (0);
while(true){
if((i__22948 < count__22947)){
var map__22949 = chunk__22946.cljs$core$IIndexed$_nth$arity$2(null,i__22948);
var map__22949__$1 = ((((!((map__22949 == null)))?((((map__22949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22949):map__22949);
var effect = map__22949__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__22945,chunk__22946,count__22947,i__22948,map__22949,map__22949__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__22945,chunk__22946,count__22947,i__22948,map__22949,map__22949__$1,effect,ms,dispatch))
,ms);
}

var G__22953 = seq__22945;
var G__22954 = chunk__22946;
var G__22955 = count__22947;
var G__22956 = (i__22948 + (1));
seq__22945 = G__22953;
chunk__22946 = G__22954;
count__22947 = G__22955;
i__22948 = G__22956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22945);
if(temp__4657__auto__){
var seq__22945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22945__$1)){
var c__11760__auto__ = cljs.core.chunk_first(seq__22945__$1);
var G__22957 = cljs.core.chunk_rest(seq__22945__$1);
var G__22958 = c__11760__auto__;
var G__22959 = cljs.core.count(c__11760__auto__);
var G__22960 = (0);
seq__22945 = G__22957;
chunk__22946 = G__22958;
count__22947 = G__22959;
i__22948 = G__22960;
continue;
} else {
var map__22951 = cljs.core.first(seq__22945__$1);
var map__22951__$1 = ((((!((map__22951 == null)))?((((map__22951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22951):map__22951);
var effect = map__22951__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__22945,chunk__22946,count__22947,i__22948,map__22951,map__22951__$1,effect,ms,dispatch,seq__22945__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__22945,chunk__22946,count__22947,i__22948,map__22951,map__22951__$1,effect,ms,dispatch,seq__22945__$1,temp__4657__auto__))
,ms);
}

var G__22961 = cljs.core.next(seq__22945__$1);
var G__22962 = null;
var G__22963 = (0);
var G__22964 = (0);
seq__22945 = G__22961;
chunk__22946 = G__22962;
count__22947 = G__22963;
i__22948 = G__22964;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__22965 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__22966 = null;
var count__22967 = (0);
var i__22968 = (0);
while(true){
if((i__22968 < count__22967)){
var event = chunk__22966.cljs$core$IIndexed$_nth$arity$2(null,i__22968);
re_frame.router.dispatch(event);

var G__22969 = seq__22965;
var G__22970 = chunk__22966;
var G__22971 = count__22967;
var G__22972 = (i__22968 + (1));
seq__22965 = G__22969;
chunk__22966 = G__22970;
count__22967 = G__22971;
i__22968 = G__22972;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22965);
if(temp__4657__auto__){
var seq__22965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22965__$1)){
var c__11760__auto__ = cljs.core.chunk_first(seq__22965__$1);
var G__22973 = cljs.core.chunk_rest(seq__22965__$1);
var G__22974 = c__11760__auto__;
var G__22975 = cljs.core.count(c__11760__auto__);
var G__22976 = (0);
seq__22965 = G__22973;
chunk__22966 = G__22974;
count__22967 = G__22975;
i__22968 = G__22976;
continue;
} else {
var event = cljs.core.first(seq__22965__$1);
re_frame.router.dispatch(event);

var G__22977 = cljs.core.next(seq__22965__$1);
var G__22978 = null;
var G__22979 = (0);
var G__22980 = (0);
seq__22965 = G__22977;
chunk__22966 = G__22978;
count__22967 = G__22979;
i__22968 = G__22980;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__22981 = cljs.core.seq(value);
var chunk__22982 = null;
var count__22983 = (0);
var i__22984 = (0);
while(true){
if((i__22984 < count__22983)){
var event = chunk__22982.cljs$core$IIndexed$_nth$arity$2(null,i__22984);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__22985 = seq__22981;
var G__22986 = chunk__22982;
var G__22987 = count__22983;
var G__22988 = (i__22984 + (1));
seq__22981 = G__22985;
chunk__22982 = G__22986;
count__22983 = G__22987;
i__22984 = G__22988;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22981);
if(temp__4657__auto__){
var seq__22981__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22981__$1)){
var c__11760__auto__ = cljs.core.chunk_first(seq__22981__$1);
var G__22989 = cljs.core.chunk_rest(seq__22981__$1);
var G__22990 = c__11760__auto__;
var G__22991 = cljs.core.count(c__11760__auto__);
var G__22992 = (0);
seq__22981 = G__22989;
chunk__22982 = G__22990;
count__22983 = G__22991;
i__22984 = G__22992;
continue;
} else {
var event = cljs.core.first(seq__22981__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__22993 = cljs.core.next(seq__22981__$1);
var G__22994 = null;
var G__22995 = (0);
var G__22996 = (0);
seq__22981 = G__22993;
chunk__22982 = G__22994;
count__22983 = G__22995;
i__22984 = G__22996;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
