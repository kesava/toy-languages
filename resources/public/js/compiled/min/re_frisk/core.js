// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('re_frame.subs');
goog.require('re_frisk.data');
goog.require('re_frisk.devtool');
goog.require('re_frisk.diff');
re_frisk.core.app_db_diff = (function re_frisk$core$app_db_diff(){
return re_frisk.diff.diff(cljs.core.deref(re_frisk.data.app_db_prev_event),cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data))));
});
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$contexts.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)),cljs.core.first(value));
var indx = cljs.core.count(cljs.core.deref(re_frisk.data.re_frame_events));
var diff = re_frisk.core.app_db_diff();
cljs.core.reset_BANG_(re_frisk.data.app_db_prev_event,cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.data.re_frame_events,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__10921__auto__ = cntx;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cst$kw$event,value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$app_DASH_db_DASH_diff,diff,cljs.core.cst$kw$indx,indx], 0)));
});
re_frisk.core.re_frame_sub = (function re_frisk$core$re_frame_sub(var_args){
var args__12088__auto__ = [];
var len__12081__auto___23569 = arguments.length;
var i__12082__auto___23570 = (0);
while(true){
if((i__12082__auto___23570 < len__12081__auto___23569)){
args__12088__auto__.push((arguments[i__12082__auto___23570]));

var G__23571 = (i__12082__auto___23570 + (1));
i__12082__auto___23570 = G__23571;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
return cljs.core.reset_BANG_(cljs.core.cst$kw$id_DASH_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23566_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first(p1__23566_SHARP_)],[cljs.core.deref(cljs.core.second(p1__23566_SHARP_))]);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23567_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.ffirst(p1__23567_SHARP_)),cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db)) || ((cljs.core.second(p1__23567_SHARP_) == null));
}),cljs.core.deref(re_frame.subs.query__GT_reaction)))));
});

re_frisk.core.re_frame_sub.cljs$lang$maxFixedArity = (0);

re_frisk.core.re_frame_sub.cljs$lang$applyTo = (function (seq23568){
return re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23568));
});

re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)))){
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stopped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.re_frisk_shell,params], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__12088__auto__ = [];
var len__12081__auto___23580 = arguments.length;
var i__12082__auto___23581 = (0);
while(true){
if((i__12082__auto___23581 < len__12081__auto___23580)){
args__12088__auto__.push((arguments[i__12082__auto___23581]));

var G__23582 = (i__12082__auto___23581 + (1));
i__12082__auto___23581 = G__23582;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__23573){
var vec__23574 = p__23573;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23574,(0),null);
if(cljs.core.truth_(cljs.core.deref(re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk.data.initialized,true);

if(cljs.core.truth_(re_frame.core.reg_sub)){
var G__23577_23583 = cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db;
var G__23578_23584 = ((function (G__23577_23583,vec__23574,opts){
return (function (db,_){
return db;
});})(G__23577_23583,vec__23574,opts))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__23577_23583,G__23578_23584) : re_frame.core.reg_sub.call(null,G__23577_23583,G__23578_23584));
} else {
re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db,((function (vec__23574,opts){
return (function (db,_){
return reagent.ratom.make_reaction(((function (vec__23574,opts){
return (function (){
return cljs.core.deref(db);
});})(vec__23574,opts))
);
});})(vec__23574,opts))
], 0));
}

cljs.core.reset_BANG_(re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$app_DASH_db,(function (){var G__23579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_frisk$core_SLASH_db], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23579) : re_frame.core.subscribe.call(null,G__23579));
})(),cljs.core.cst$kw$id_DASH_handler,reagent.core.atom.cljs$core$IFn$_invoke$arity$1("not connected")], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$prefs,opts);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$events_QMARK_.cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk.core.post_event_callback);
}

if(cljs.core.truth_(re_frame.subs.query__GT_reaction)){
cljs.core.add_watch(re_frame.db.app_db,cljs.core.cst$kw$re_DASH_frisk_DASH_watcher,re_frisk.core.re_frame_sub);

re_frisk.core.re_frame_sub();
} else {
}

return setTimeout(re_frisk.core.render_re_frisk,(100),opts);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq23572){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23572));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__12088__auto__ = [];
var len__12081__auto___23589 = arguments.length;
var i__12082__auto___23590 = (0);
while(true){
if((i__12082__auto___23590 < len__12081__auto___23589)){
args__12088__auto__.push((arguments[i__12082__auto___23590]));

var G__23591 = (i__12082__auto___23590 + (1));
i__12082__auto___23590 = G__23591;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref(re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk.data.initialized,true);

var G__23586 = re_frisk.core.render_re_frisk;
var G__23587 = (100);
var G__23588 = cljs.core.first(params);
return setTimeout(G__23586,G__23587,G__23588);
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq23585){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23585));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = (function (){var G__23592 = cljs.core.cst$kw$id;
var G__23593 = cljs.core.cst$kw$re_DASH_frisk_DASH_watch_DASH_context;
var G__23594 = cljs.core.cst$kw$before;
var G__23595 = ((function (G__23592,G__23593,G__23594){
return (function (context){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$contexts,cljs.core.first(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(context))),cljs.core.cst$kw$before], null),context);

return context;
});})(G__23592,G__23593,G__23594))
;
return (re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__23592,G__23593,G__23594,G__23595) : re_frame.core.__GT_interceptor.call(null,G__23592,G__23593,G__23594,G__23595));
})();
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$events], null),cljs.core.set(events));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views,view,cljs.core.cst$kw$subs], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23596_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__23596_SHARP_],[(function (){var G__23597 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23596_SHARP_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23597) : re_frame.core.subscribe.call(null,G__23597));
})()]);
}),subs)));

var seq__23598 = cljs.core.seq(subs);
var chunk__23599 = null;
var count__23600 = (0);
var i__23601 = (0);
while(true){
if((i__23601 < count__23600)){
var s = chunk__23599.cljs$core$IIndexed$_nth$arity$2(null,i__23601);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__23602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23602) : re_frame.core.subscribe.call(null,G__23602));
})());

var G__23604 = seq__23598;
var G__23605 = chunk__23599;
var G__23606 = count__23600;
var G__23607 = (i__23601 + (1));
seq__23598 = G__23604;
chunk__23599 = G__23605;
count__23600 = G__23606;
i__23601 = G__23607;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__23598);
if(temp__4657__auto__){
var seq__23598__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23598__$1)){
var c__11760__auto__ = cljs.core.chunk_first(seq__23598__$1);
var G__23608 = cljs.core.chunk_rest(seq__23598__$1);
var G__23609 = c__11760__auto__;
var G__23610 = cljs.core.count(c__11760__auto__);
var G__23611 = (0);
seq__23598 = G__23608;
chunk__23599 = G__23609;
count__23600 = G__23610;
i__23601 = G__23611;
continue;
} else {
var s = cljs.core.first(seq__23598__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subs,s], null),(function (){var G__23603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__23603) : re_frame.core.subscribe.call(null,G__23603));
})());

var G__23612 = cljs.core.next(seq__23598__$1);
var G__23613 = null;
var G__23614 = (0);
var G__23615 = (0);
seq__23598 = G__23612;
chunk__23599 = G__23613;
count__23600 = G__23614;
i__23601 = G__23615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$views], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([view], 0));
} else {
return null;
}
});
var G__23617_23623 = cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db;
var G__23618_23624 = ((function (G__23617_23623){
return (function (_,p__23619){
var vec__23620 = p__23619;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,(1),null);
return value;
});})(G__23617_23623))
;
var fexpr__23616_23625 = (function (){var or__10921__auto__ = re_frame.core.reg_event_db;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return re_frame.core.register_handler;
}
})();
(fexpr__23616_23625.cljs$core$IFn$_invoke$arity$2 ? fexpr__23616_23625.cljs$core$IFn$_invoke$arity$2(G__23617_23623,G__23618_23624) : fexpr__23616_23625.call(null,G__23617_23623,G__23618_23624));
