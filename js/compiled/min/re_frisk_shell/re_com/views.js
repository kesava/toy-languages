// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk_shell.re_com.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frisk_shell.re_com.ui');
goog.require('re_frisk_shell.re_com.vendors');
goog.require('re_com.core');
goog.require('re_frisk_shell.re_com.splits');
goog.require('clojure.string');
goog.require('re_frisk_shell.frisk');
re_frisk_shell.re_com.views.event_list_item = (function re_frisk_shell$re_com$views$event_list_item(){
return (function (item,checkbox_val,deb_data){
var clrs = cljs.core.cst$kw$evnt_DASH_colors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deb_data));
var event = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item)))].join('');
var trace_QMARK_ = cljs.core.boolean$(cljs.core.cst$kw$trace.cljs$core$IFn$_invoke$arity$1(item));
var completed_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$completed,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$status], null)));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event_DASH_data,cljs.core.cst$kw$indx], null)),cljs.core.cst$kw$indx.cljs$core$IFn$_invoke$arity$1(item));
var namespace = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(event,/:/,""),/\//);
var splited_label = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(namespace),/\./);
var clr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clrs,cljs.core.first(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,(5)], null),(cljs.core.truth_(clr)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clr)].join('')], null):null)], 0))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$class,["list-group-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,(5),cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$pre,cljs.core.cst$kw$width,"100%"], null),(((trace_QMARK_) && (!(completed_QMARK_)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$red], null):null)], 0)),cljs.core.cst$kw$on_DASH_click,((function (clrs,event,trace_QMARK_,completed_QMARK_,selected_QMARK_,namespace,splited_label,clr){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data,cljs.core.assoc,cljs.core.cst$kw$event_DASH_data,item);
});})(clrs,event,trace_QMARK_,completed_QMARK_,selected_QMARK_,namespace,splited_label,clr))
], null),(((trace_QMARK_) && (completed_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$duration], null)))," ms "].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_((function (){var and__10909__auto__ = cljs.core.deref(checkbox_val);
if(cljs.core.truth_(and__10909__auto__)){
return (cljs.core.count(namespace) > (1));
} else {
return and__10909__auto__;
}
})())?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,splited_label))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(namespace))].join(''):event)], null)], null)], null)], null)], null);
});
});
re_frisk_shell.re_com.views.filter_event = (function re_frisk_shell$re_com$views$filter_event(text){
return (function (item){
var name = clojure.string.lower_case(cljs.core.name(cljs.core.first(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(item))));
var text__$1 = clojure.string.lower_case(text);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(name,text__$1),null);
});
});
re_frisk_shell.re_com.views.events_scroller = (function re_frisk_shell$re_com$views$events_scroller(filtered_events,checkbox_val,deb_data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"debugger-messages",cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$){
var n = reagent.core.dom_node(this$);
if(cljs.core.truth_(cljs.core.cst$kw$scroll_DASH_bottom_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deb_data)))){
return n.scrollTop = n.scrollHeight;
} else {
return null;
}
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.scroller,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_scroll,(function (p1__22557_SHARP_){
var t = p1__22557_SHARP_.target;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data,cljs.core.assoc,cljs.core.cst$kw$scroll_DASH_bottom_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((t.scrollHeight - t.offsetHeight),t.scrollTop));
})], null),(function (){var iter__11729__auto__ = (function re_frisk_shell$re_com$views$events_scroller_$_iter__22558(s__22559){
return (new cljs.core.LazySeq(null,(function (){
var s__22559__$1 = s__22559;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__22559__$1);
if(temp__4657__auto__){
var s__22559__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22559__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__22559__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__22561 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__22560 = (0);
while(true){
if((i__22560 < size__11728__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__22560);
cljs.core.chunk_append(b__22561,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.event_list_item,item,checkbox_val,deb_data], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__22562 = (i__22560 + (1));
i__22560 = G__22562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22561),re_frisk_shell$re_com$views$events_scroller_$_iter__22558(cljs.core.chunk_rest(s__22559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22561),null);
}
} else {
var item = cljs.core.first(s__22559__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.event_list_item,item,checkbox_val,deb_data], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),re_frisk_shell$re_com$views$events_scroller_$_iter__22558(cljs.core.rest(s__22559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(cljs.core.deref(filtered_events));
})()], null);
})], null));
});
re_frisk_shell.re_com.views.events_view = (function re_frisk_shell$re_com$views$events_view(re_frame_events,deb_data,imp_hndl,exp_hndl){
var checkbox_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var checkbox_sort_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var trace_QMARK_ = reagent.ratom.make_reaction(((function (checkbox_val,checkbox_sort_val){
return (function (){
return cljs.core.boolean$(cljs.core.cst$kw$trace.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(re_frame_events))));
});})(checkbox_val,checkbox_sort_val))
);
var text_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var sorted_events = reagent.ratom.make_reaction(((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val){
return (function (){
if(cljs.core.truth_(cljs.core.deref(checkbox_sort_val))){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val){
return (function (p1__22563_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__22563_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$duration], null));
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val))
,cljs.core._GT_,cljs.core.deref(re_frame_events));
} else {
return cljs.core.deref(re_frame_events);
}
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val))
);
var filtered_events = reagent.ratom.make_reaction(((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(text_val),"")){
return cljs.core.deref(sorted_events);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(re_frisk_shell.re_com.views.filter_event(cljs.core.deref(text_val)),cljs.core.deref(sorted_events));
}
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events))
);
return ((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,cljs.core.cst$kw$auto,cljs.core.cst$kw$padding,"0"], null),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$model,text_val,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$placeholder,"Filter events",cljs.core.cst$kw$on_DASH_change,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (p1__22564_SHARP_){
return cljs.core.reset_BANG_(text_val,p1__22564_SHARP_);
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (){
return cljs.core.reset_BANG_(text_val,"");
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
], null),"X"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$model,checkbox_val,cljs.core.cst$kw$on_DASH_change,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (p1__22565_SHARP_){
return cljs.core.reset_BANG_(checkbox_val,p1__22565_SHARP_);
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
,cljs.core.cst$kw$label,"truncate"], null),(cljs.core.truth_(cljs.core.deref(trace_QMARK_))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$model,checkbox_sort_val,cljs.core.cst$kw$on_DASH_change,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (p1__22566_SHARP_){
return cljs.core.reset_BANG_(checkbox_sort_val,p1__22566_SHARP_);
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
,cljs.core.cst$kw$label,"sort by performance"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.events_scroller,filtered_events,checkbox_val,deb_data], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$gap,"5px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,(3)], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(imp_hndl)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,imp_hndl], null),"import"], null):null),(cljs.core.truth_(imp_hndl)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,exp_hndl], null),"export"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.small_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events){
return (function (){
cljs.core.reset_BANG_(re_frame_events,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deb_data,cljs.core.dissoc,cljs.core.cst$kw$event_DASH_data);
});})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
], null),"clear"], null)], null)], null)], null)], null);
});
;})(checkbox_val,checkbox_sort_val,trace_QMARK_,text_val,sorted_events,filtered_events))
});
re_frisk_shell.re_com.views.event_bar = (function re_frisk_shell$re_com$views$event_bar(deb_data){
var evnt_key = reagent.ratom.make_reaction((function (){
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event_DASH_data,cljs.core.cst$kw$event], null)));
}));
var clr = reagent.ratom.make_reaction(((function (evnt_key){
return (function (){
if(cljs.core.truth_(cljs.core.deref(evnt_key))){
var G__22569 = cljs.core.cst$kw$evnt_DASH_colors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(deb_data));
var fexpr__22568 = cljs.core.deref(evnt_key);
return (fexpr__22568.cljs$core$IFn$_invoke$arity$1 ? fexpr__22568.cljs$core$IFn$_invoke$arity$1(G__22569) : fexpr__22568.call(null,G__22569));
} else {
return "";
}
});})(evnt_key))
);
return ((function (evnt_key,clr){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#4e5d6c"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Event",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"4px"], null)], null),(cljs.core.truth_(cljs.core.deref(evnt_key))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,cljs.core.deref(evnt_key),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,"4px",cljs.core.cst$kw$color,"#df691a"], null)], null):null),(cljs.core.truth_(cljs.core.deref(evnt_key))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"#",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"4px"], null)], null):null),(cljs.core.truth_(cljs.core.deref(evnt_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"60px"], null),cljs.core.cst$kw$placeholder,"000000",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.deref(clr),cljs.core.cst$kw$max_DASH_length,"6",cljs.core.cst$kw$on_DASH_change,((function (evnt_key,clr){
return (function (p1__22567_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evnt_DASH_colors,cljs.core.deref(evnt_key)], null),p1__22567_SHARP_.target.value);
});})(evnt_key,clr))
], null)], null):null)], null)], null);
});
;})(evnt_key,clr))
});
re_frisk_shell.re_com.views.main_view = (function re_frisk_shell$re_com$views$main_view(re_frame_data,deb_data,doc){
var checkbox_sorted_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var open_event_split_QMARK_ = reagent.ratom.make_reaction(((function (checkbox_sorted_val){
return (function (){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event_DASH_data,cljs.core.cst$kw$event], null)));
});})(checkbox_sorted_val))
);
return ((function (checkbox_sorted_val,open_event_split_QMARK_){
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#4e5d6c"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Active subscriptions"], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.v_split,cljs.core.cst$kw$document,doc,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$margin,"0"], null),cljs.core.cst$kw$initial_DASH_split,"0",cljs.core.cst$kw$panel_DASH_1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.handler_frisk,re_frame_data], null)], null)], null),cljs.core.cst$kw$panel_DASH_2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.v_split,cljs.core.cst$kw$document,doc,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"0",cljs.core.cst$kw$margin,"0"], null),cljs.core.cst$kw$initial_DASH_split,"100",cljs.core.cst$kw$open_DASH_bottom_DASH_split_QMARK_,open_event_split_QMARK_,cljs.core.cst$kw$panel_DASH_1,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#4e5d6c"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,cljs.core.cst$kw$model,checkbox_sorted_val,cljs.core.cst$kw$on_DASH_change,((function (checkbox_sorted_val,open_event_split_QMARK_){
return (function (val){
cljs.core.reset_BANG_(checkbox_sorted_val,val);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame_data)),cljs.core.assoc,cljs.core.cst$kw$re_DASH_frisk_DASH_sorted,true);

var G__22570 = ((function (checkbox_sorted_val,open_event_split_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame_data)),cljs.core.dissoc,cljs.core.cst$kw$re_DASH_frisk_DASH_sorted);
});})(checkbox_sorted_val,open_event_split_QMARK_))
;
var G__22571 = (100);
return setTimeout(G__22570,G__22571);
});})(checkbox_sorted_val,open_event_split_QMARK_))
,cljs.core.cst$kw$label,"sorted"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.main_frisk,re_frame_data,checkbox_sorted_val], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.event_bar,deb_data], null)], null)], null),cljs.core.cst$kw$panel_DASH_2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.event_frisk,deb_data], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"1"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.vendors.star], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(checkbox_sorted_val,open_event_split_QMARK_))
});
re_frisk_shell.re_com.views.main = (function re_frisk_shell$re_com$views$main(var_args){
var args__12088__auto__ = [];
var len__12081__auto___22580 = arguments.length;
var i__12082__auto___22581 = (0);
while(true){
if((i__12082__auto___22581 < len__12081__auto___22580)){
args__12088__auto__.push((arguments[i__12082__auto___22581]));

var G__22582 = (i__12082__auto___22581 + (1));
i__12082__auto___22581 = G__22582;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((3) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((3)),(0),null)):null);
return re_frisk_shell.re_com.views.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12089__auto__);
});

re_frisk_shell.re_com.views.main.cljs$core$IFn$_invoke$arity$variadic = (function (re_frame_data,re_frame_events,deb_data,p__22576){
var vec__22577 = p__22576;
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577,(0),null);
var imp_hndl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577,(1),null);
var exp_hndl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22577,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.splits.h_split,cljs.core.cst$kw$size,"1",cljs.core.cst$kw$initial_DASH_split,"20",cljs.core.cst$kw$panel_DASH_1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.events_view,re_frame_events,deb_data,imp_hndl,exp_hndl], null),cljs.core.cst$kw$panel_DASH_2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.main_view,re_frame_data,deb_data,doc], null),cljs.core.cst$kw$document,doc], null)], null)], null);
});

re_frisk_shell.re_com.views.main.cljs$lang$maxFixedArity = (3);

re_frisk_shell.re_com.views.main.cljs$lang$applyTo = (function (seq22572){
var G__22573 = cljs.core.first(seq22572);
var seq22572__$1 = cljs.core.next(seq22572);
var G__22574 = cljs.core.first(seq22572__$1);
var seq22572__$2 = cljs.core.next(seq22572__$1);
var G__22575 = cljs.core.first(seq22572__$2);
var seq22572__$3 = cljs.core.next(seq22572__$2);
return re_frisk_shell.re_com.views.main.cljs$core$IFn$_invoke$arity$variadic(G__22573,G__22574,G__22575,seq22572__$3);
});

