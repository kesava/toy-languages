// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_com.tour');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_com.box');
goog.require('re_com.buttons');
/**
 * Returns a map containing
 *   - A reagent atom for each tour step controlling popover show/hide (boolean)
 *   - A standard atom holding the current step (integer)
 *   - A copy of the steps parameter passed in, to determine the order for prev/next functions
 *   It sets the first step atom to true so that it will be initially shown
 *   Sample return value:
 *   {:steps [:step1 :step2 :step3]
 *   :current-step (atom 0)
 *   :step1 (reagent/atom true)
 *   :step2 (reagent/atom false)
 *   :step3 (reagent/atom false)}
 */
re_com.tour.make_tour = (function re_com$tour$make_tour(tour_spec){
var tour_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_step,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.cst$kw$steps,tour_spec], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tour_map){
return (function (p1__21752_SHARP_,p2__21753_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21752_SHARP_,p2__21753_SHARP_,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));
});})(tour_map))
,tour_map,tour_spec);
});
/**
 * Resets all poover atoms to false
 */
re_com.tour.initialise_tour = (function re_com$tour$initialise_tour(tour){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__11729__auto__ = (function re_com$tour$initialise_tour_$_iter__21754(s__21755){
return (new cljs.core.LazySeq(null,(function (){
var s__21755__$1 = s__21755;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21755__$1);
if(temp__4657__auto__){
var s__21755__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21755__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__21755__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__21757 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__21756 = (0);
while(true){
if((i__21756 < size__11728__auto__)){
var step = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__21756);
cljs.core.chunk_append(b__21757,cljs.core.reset_BANG_((step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(tour) : step.call(null,tour)),false));

var G__21758 = (i__21756 + (1));
i__21756 = G__21758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21757),re_com$tour$initialise_tour_$_iter__21754(cljs.core.chunk_rest(s__21755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21757),null);
}
} else {
var step = cljs.core.first(s__21755__$2);
return cljs.core.cons(cljs.core.reset_BANG_((step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(tour) : step.call(null,tour)),false),re_com$tour$initialise_tour_$_iter__21754(cljs.core.rest(s__21755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour));
})());
});
/**
 * Sets the first popover atom in the tour to true
 */
re_com.tour.start_tour = (function re_com$tour$start_tour(tour){
re_com.tour.initialise_tour(tour);

cljs.core.reset_BANG_(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour),(0));

return cljs.core.reset_BANG_((function (){var fexpr__21759 = cljs.core.first(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour));
return (fexpr__21759.cljs$core$IFn$_invoke$arity$1 ? fexpr__21759.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__21759.call(null,tour));
})(),true);
});
/**
 * Closes all tour popovers
 */
re_com.tour.finish_tour = (function re_com$tour$finish_tour(tour){
return re_com.tour.initialise_tour(tour);
});
re_com.tour.next_tour_step = (function re_com$tour$next_tour_step(tour){
var steps = cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step + (1));
if((new_step < cljs.core.count(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour)))){
cljs.core.reset_BANG_(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_((function (){var fexpr__21760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,old_step);
return (fexpr__21760.cljs$core$IFn$_invoke$arity$1 ? fexpr__21760.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__21760.call(null,tour));
})(),false);

return cljs.core.reset_BANG_((function (){var fexpr__21761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,new_step);
return (fexpr__21761.cljs$core$IFn$_invoke$arity$1 ? fexpr__21761.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__21761.call(null,tour));
})(),true);
} else {
return null;
}
});
re_com.tour.prev_tour_step = (function re_com$tour$prev_tour_step(tour){
var steps = cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour);
var old_step = cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour));
var new_step = (old_step - (1));
if((new_step >= (0))){
cljs.core.reset_BANG_(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour),new_step);

cljs.core.reset_BANG_((function (){var fexpr__21762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,old_step);
return (fexpr__21762.cljs$core$IFn$_invoke$arity$1 ? fexpr__21762.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__21762.call(null,tour));
})(),false);

return cljs.core.reset_BANG_((function (){var fexpr__21763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(steps,new_step);
return (fexpr__21763.cljs$core$IFn$_invoke$arity$1 ? fexpr__21763.cljs$core$IFn$_invoke$arity$1(tour) : fexpr__21763.call(null,tour));
})(),true);
} else {
return null;
}
});
/**
 * Generate the hr and previous/next buttons markup.
 *   If first button in tour, don't generate a Previous button.
 *   If last button in tour, change Next button to a Finish button
 */
re_com.tour.make_tour_nav = (function re_com$tour$make_tour_nav(tour){
var on_first_button = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour)),(0));
var on_last_button = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$current_DASH_step.cljs$core$IFn$_invoke$arity$1(tour)),(cljs.core.count(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(tour)) - (1)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"10px 0px 10px"], null)], 0))], null)], null),((on_first_button)?null:new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$label,"Previous",cljs.core.cst$kw$on_DASH_click,((function (on_first_button,on_last_button){
return (function (event){
re_com.tour.prev_tour_step(tour);

return null;
});})(on_first_button,on_last_button))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"15px"], null),cljs.core.cst$kw$class,"btn-default"], null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,cljs.core.cst$kw$label,((on_last_button)?"Finish":"Next"),cljs.core.cst$kw$on_DASH_click,((function (on_first_button,on_last_button){
return (function (event){
if(on_last_button){
re_com.tour.finish_tour(tour);
} else {
re_com.tour.next_tour_step(tour);
}

return null;
});})(on_first_button,on_last_button))
,cljs.core.cst$kw$class,"btn-default"], null)], null);
});
