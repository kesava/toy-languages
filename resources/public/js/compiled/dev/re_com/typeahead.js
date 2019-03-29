// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__33002){
var map__33003 = p__33002;
var map__33003__$1 = ((((!((map__33003 == null)))?((((map__33003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33003):map__33003);
var args = map__33003__$1;
var on_change = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__33003__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__33005 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__26462__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__33005,external_model_value);
} else {
return G__33005;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__33006,event){
var map__33007 = p__33006;
var map__33007__$1 = ((((!((map__33007 == null)))?((((map__33007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);
var state = map__33007__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__33009 = event;
var G__33009__$1 = (((G__33009 instanceof cljs.core.Keyword))?G__33009.fqn:null);
switch (G__33009__$1) {
case "input-text-blurred":
var and__26450__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__26450__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__26450__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__26462__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33009__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__33011,event){
var map__33012 = p__33011;
var map__33012__$1 = ((((!((map__33012 == null)))?((((map__33012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33012):map__33012);
var state = map__33012__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__33012__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__33014 = event;
var G__33014__$1 = (((G__33014 instanceof cljs.core.Keyword))?G__33014.fqn:null);
switch (G__33014__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__33016,new_value){
var map__33017 = p__33016;
var map__33017__$1 = ((((!((map__33017 == null)))?((((map__33017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33017):map__33017);
var state = map__33017__$1;
var on_change = cljs.core.get.call(null,map__33017__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__33019,suggestion){
var map__33020 = p__33019;
var map__33020__$1 = ((((!((map__33020 == null)))?((((map__33020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33020):map__33020);
var state = map__33020__$1;
var suggestion_to_string = cljs.core.get.call(null,map__33020__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__33022 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__33022,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__33022;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__33023,index){
var map__33024 = p__33023;
var map__33024__$1 = ((((!((map__33024 == null)))?((((map__33024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33024):map__33024);
var state = map__33024__$1;
var suggestions = cljs.core.get.call(null,map__33024__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__33026 = state;
var G__33026__$1 = cljs.core.assoc.call(null,G__33026,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__33026__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__33026__$1,suggestion):G__33026__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__33026__$2,suggestion);
} else {
return G__33026__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__33027,index){
var map__33028 = p__33027;
var map__33028__$1 = ((((!((map__33028 == null)))?((((map__33028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33028):map__33028);
var state = map__33028__$1;
var suggestions = cljs.core.get.call(null,map__33028__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__33030){
var map__33031 = p__33030;
var map__33031__$1 = ((((!((map__33031 == null)))?((((map__33031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33031):map__33031);
var state = map__33031__$1;
var suggestion_active_index = cljs.core.get.call(null,map__33031__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33033 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__33033,suggestion_active_index);
} else {
return G__33033;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__33034){
var map__33035 = p__33034;
var map__33035__$1 = ((((!((map__33035 == null)))?((((map__33035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33035):map__33035);
var state = map__33035__$1;
var suggestions = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33037 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33037,re_com.typeahead.wrap.call(null,((function (){var or__26462__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33037;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__33038){
var map__33039 = p__33038;
var map__33039__$1 = ((((!((map__33039 == null)))?((((map__33039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33039):map__33039);
var state = map__33039__$1;
var suggestions = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__33041 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__33041,re_com.typeahead.wrap.call(null,((function (){var or__26462__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__33041;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__33042 = state;
var G__33042__$1 = re_com.typeahead.clear_suggestions.call(null,G__33042)
;
var G__33042__$2 = cljs.core.assoc.call(null,G__33042__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33042__$2,null);
} else {
return G__33042__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__33043){
var map__33044 = p__33043;
var map__33044__$1 = ((((!((map__33044 == null)))?((((map__33044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33044):map__33044);
var state = map__33044__$1;
var input_text = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__33044__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__33046 = state;
if(cljs.core.truth_((function (){var and__26450__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__26450__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__26450__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__33046,input_text);
} else {
return G__33046;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__33047_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__33047_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__){
return (function (state_33064){
var state_val_33065 = (state_33064[(1)]);
if((state_val_33065 === (1))){
var state_33064__$1 = state_33064;
var statearr_33066_33078 = state_33064__$1;
(statearr_33066_33078[(2)] = null);

(statearr_33066_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (2))){
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33064__$1,(4),c_search);
} else {
if((state_val_33065 === (3))){
var inst_33062 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33064__$1,inst_33062);
} else {
if((state_val_33065 === (4))){
var inst_33050 = (state_33064[(7)]);
var inst_33050__$1 = (state_33064[(2)]);
var inst_33051 = cljs.core.deref.call(null,state_atom);
var inst_33052 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_33051);
var inst_33053 = cljs.core._EQ_.call(null,"",inst_33050__$1);
var state_33064__$1 = (function (){var statearr_33067 = state_33064;
(statearr_33067[(7)] = inst_33050__$1);

(statearr_33067[(8)] = inst_33052);

return statearr_33067;
})();
if(inst_33053){
var statearr_33068_33079 = state_33064__$1;
(statearr_33068_33079[(1)] = (5));

} else {
var statearr_33069_33080 = state_33064__$1;
(statearr_33069_33080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (5))){
var inst_33055 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_33064__$1 = state_33064;
var statearr_33070_33081 = state_33064__$1;
(statearr_33070_33081[(2)] = inst_33055);

(statearr_33070_33081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (6))){
var inst_33050 = (state_33064[(7)]);
var inst_33052 = (state_33064[(8)]);
var inst_33057 = re_com.typeahead.search_data_source_BANG_.call(null,inst_33052,state_atom,inst_33050);
var state_33064__$1 = state_33064;
var statearr_33071_33082 = state_33064__$1;
(statearr_33071_33082[(2)] = inst_33057);

(statearr_33071_33082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (7))){
var inst_33059 = (state_33064[(2)]);
var state_33064__$1 = (function (){var statearr_33072 = state_33064;
(statearr_33072[(9)] = inst_33059);

return statearr_33072;
})();
var statearr_33073_33083 = state_33064__$1;
(statearr_33073_33083[(2)] = null);

(statearr_33073_33083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31032__auto__))
;
return ((function (switch__30944__auto__,c__31032__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto____0 = (function (){
var statearr_33074 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33074[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto__);

(statearr_33074[(1)] = (1));

return statearr_33074;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto____1 = (function (state_33064){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_33064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e33075){if((e33075 instanceof Object)){
var ex__30948__auto__ = e33075;
var statearr_33076_33084 = state_33064;
(statearr_33076_33084[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33085 = state_33064;
state_33064 = G__33085;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto__ = function(state_33064){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto____1.call(this,state_33064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__))
})();
var state__31034__auto__ = (function (){var statearr_33077 = f__31033__auto__.call(null);
(statearr_33077[(6)] = c__31032__auto__);

return statearr_33077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__))
);

return c__31032__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__33087 = cljs.core.deref.call(null,state_atom);
var map__33087__$1 = ((((!((map__33087 == null)))?((((map__33087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33087):map__33087);
var state = map__33087__$1;
var input_text = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__33087,map__33087__$1,state,input_text,c_input){
return (function (p1__33086_SHARP_){
var G__33089 = p1__33086_SHARP_;
var G__33089__$1 = cljs.core.assoc.call(null,G__33089,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__33089__$1,new_text);
} else {
return G__33089__$1;
}
});})(map__33087,map__33087__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__33090 = cljs.core._EQ_;
var expr__33091 = event.which;
if(cljs.core.truth_(pred__33090.call(null,goog.events.KeyCodes.UP,expr__33091))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__33090.call(null,goog.events.KeyCodes.DOWN,expr__33091))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__33090.call(null,goog.events.KeyCodes.ENTER,expr__33091))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__33090.call(null,goog.events.KeyCodes.ESC,expr__33091))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__33090.call(null,goog.events.KeyCodes.TAB,expr__33091))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__27640__auto__ = [];
var len__27633__auto___33115 = arguments.length;
var i__27634__auto___33116 = (0);
while(true){
if((i__27634__auto___33116 < len__27633__auto___33115)){
args__27640__auto__.push((arguments[i__27634__auto___33116]));

var G__33117 = (i__27634__auto___33116 + (1));
i__27634__auto___33116 = G__33117;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__33095){
var map__33096 = p__33095;
var map__33096__$1 = ((((!((map__33096 == null)))?((((map__33096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33096):map__33096);
var args = map__33096__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33098 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__33098__$1 = ((((!((map__33098 == null)))?((((map__33098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);
var state = map__33098__$1;
var c_search = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args){
return (function() { 
var G__33118__delegate = function (p__33100){
var map__33101 = p__33100;
var map__33101__$1 = ((((!((map__33101 == null)))?((((map__33101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33101):map__33101);
var args__$1 = map__33101__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__33101__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__33103 = cljs.core.deref.call(null,state_atom);
var map__33103__$1 = ((((!((map__33103 == null)))?((((map__33103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33103):map__33103);
var state__$1 = map__33103__$1;
var suggestions = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__33103__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__26462__auto__ = width;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__26462__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__27270__auto__ = ((function (map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args){
return (function re_com$typeahead$iter__33105(s__33106){
return (new cljs.core.LazySeq(null,((function (map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args){
return (function (){
var s__33106__$1 = s__33106;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33106__$1);
if(temp__4657__auto__){
var s__33106__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33106__$2)){
var c__27268__auto__ = cljs.core.chunk_first.call(null,s__33106__$2);
var size__27269__auto__ = cljs.core.count.call(null,c__27268__auto__);
var b__33108 = cljs.core.chunk_buffer.call(null,size__27269__auto__);
if((function (){var i__33107 = (0);
while(true){
if((i__33107 < size__27269__auto__)){
var vec__33109 = cljs.core._nth.call(null,c__27268__auto__,i__33107);
var i = cljs.core.nth.call(null,vec__33109,(0),null);
var s = cljs.core.nth.call(null,vec__33109,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__33108,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__33107,selected_QMARK_,vec__33109,i,s,c__27268__auto__,size__27269__auto__,b__33108,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__33107,selected_QMARK_,vec__33109,i,s,c__27268__auto__,size__27269__auto__,b__33108,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__33107,selected_QMARK_,vec__33109,i,s,c__27268__auto__,size__27269__auto__,b__33108,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args){
return (function (p1__33093_SHARP_){
p1__33093_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__33107,selected_QMARK_,vec__33109,i,s,c__27268__auto__,size__27269__auto__,b__33108,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__33119 = (i__33107 + (1));
i__33107 = G__33119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33108),re_com$typeahead$iter__33105.call(null,cljs.core.chunk_rest.call(null,s__33106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33108),null);
}
} else {
var vec__33112 = cljs.core.first.call(null,s__33106__$2);
var i = cljs.core.nth.call(null,vec__33112,(0),null);
var s = cljs.core.nth.call(null,vec__33112,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__33112,i,s,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__33112,i,s,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__33112,i,s,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args){
return (function (p1__33093_SHARP_){
p1__33093_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__33112,i,s,s__33106__$2,temp__4657__auto__,map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__33105.call(null,cljs.core.rest.call(null,s__33106__$2)));
}
} else {
return null;
}
break;
}
});})(map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args))
,null,null));
});})(map__33103,map__33103__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__33101,map__33101__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args))
;
return iter__27270__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__33118 = function (var_args){
var p__33100 = null;
if (arguments.length > 0) {
var G__33120__i = 0, G__33120__a = new Array(arguments.length -  0);
while (G__33120__i < G__33120__a.length) {G__33120__a[G__33120__i] = arguments[G__33120__i + 0]; ++G__33120__i;}
  p__33100 = new cljs.core.IndexedSeq(G__33120__a,0,null);
} 
return G__33118__delegate.call(this,p__33100);};
G__33118.cljs$lang$maxFixedArity = 0;
G__33118.cljs$lang$applyTo = (function (arglist__33121){
var p__33100 = cljs.core.seq(arglist__33121);
return G__33118__delegate(p__33100);
});
G__33118.cljs$core$IFn$_invoke$arity$variadic = G__33118__delegate;
return G__33118;
})()
;
;})(map__33098,map__33098__$1,state,c_search,c_input,state_atom,input_text_model,map__33096,map__33096__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq33094){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33094));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__31032__auto___33202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___33202,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___33202,out){
return (function (state_33172){
var state_val_33173 = (state_33172[(1)]);
if((state_val_33173 === (7))){
var inst_33127 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33174_33203 = state_33172__$1;
(statearr_33174_33203[(2)] = inst_33127);

(statearr_33174_33203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (1))){
var inst_33122 = null;
var state_33172__$1 = (function (){var statearr_33175 = state_33172;
(statearr_33175[(7)] = inst_33122);

return statearr_33175;
})();
var statearr_33176_33204 = state_33172__$1;
(statearr_33176_33204[(2)] = null);

(statearr_33176_33204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (4))){
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33172__$1,(7),in$);
} else {
if((state_val_33173 === (15))){
var inst_33157 = (state_33172[(2)]);
var state_33172__$1 = (function (){var statearr_33177 = state_33172;
(statearr_33177[(8)] = inst_33157);

return statearr_33177;
})();
var statearr_33178_33205 = state_33172__$1;
(statearr_33178_33205[(2)] = null);

(statearr_33178_33205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (13))){
var inst_33145 = (state_33172[(9)]);
var inst_33159 = cljs.core._EQ_.call(null,inst_33145,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_33172__$1 = state_33172;
if(inst_33159){
var statearr_33179_33206 = state_33172__$1;
(statearr_33179_33206[(1)] = (16));

} else {
var statearr_33180_33207 = state_33172__$1;
(statearr_33180_33207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (6))){
var inst_33131 = (state_33172[(10)]);
var inst_33130 = (state_33172[(2)]);
var inst_33131__$1 = cljs.core.async.timeout.call(null,ms);
var inst_33139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33140 = [in$,inst_33131__$1];
var inst_33141 = (new cljs.core.PersistentVector(null,2,(5),inst_33139,inst_33140,null));
var state_33172__$1 = (function (){var statearr_33181 = state_33172;
(statearr_33181[(10)] = inst_33131__$1);

(statearr_33181[(11)] = inst_33130);

return statearr_33181;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33172__$1,(8),inst_33141);
} else {
if((state_val_33173 === (17))){
var state_33172__$1 = state_33172;
var statearr_33182_33208 = state_33172__$1;
(statearr_33182_33208[(2)] = null);

(statearr_33182_33208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (3))){
var inst_33170 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33172__$1,inst_33170);
} else {
if((state_val_33173 === (12))){
var inst_33130 = (state_33172[(11)]);
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33172__$1,(15),out,inst_33130);
} else {
if((state_val_33173 === (2))){
var inst_33122 = (state_33172[(7)]);
var inst_33124 = (inst_33122 == null);
var state_33172__$1 = state_33172;
if(cljs.core.truth_(inst_33124)){
var statearr_33183_33209 = state_33172__$1;
(statearr_33183_33209[(1)] = (4));

} else {
var statearr_33184_33210 = state_33172__$1;
(statearr_33184_33210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (11))){
var inst_33167 = (state_33172[(2)]);
var inst_33122 = inst_33167;
var state_33172__$1 = (function (){var statearr_33185 = state_33172;
(statearr_33185[(7)] = inst_33122);

return statearr_33185;
})();
var statearr_33186_33211 = state_33172__$1;
(statearr_33186_33211[(2)] = null);

(statearr_33186_33211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (9))){
var inst_33143 = (state_33172[(12)]);
var inst_33151 = cljs.core.nth.call(null,inst_33143,(0),null);
var inst_33152 = cljs.core.nth.call(null,inst_33143,(1),null);
var state_33172__$1 = (function (){var statearr_33187 = state_33172;
(statearr_33187[(13)] = inst_33152);

return statearr_33187;
})();
var statearr_33188_33212 = state_33172__$1;
(statearr_33188_33212[(2)] = inst_33151);

(statearr_33188_33212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (5))){
var inst_33122 = (state_33172[(7)]);
var state_33172__$1 = state_33172;
var statearr_33189_33213 = state_33172__$1;
(statearr_33189_33213[(2)] = inst_33122);

(statearr_33189_33213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (14))){
var inst_33165 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33190_33214 = state_33172__$1;
(statearr_33190_33214[(2)] = inst_33165);

(statearr_33190_33214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (16))){
var inst_33144 = (state_33172[(14)]);
var state_33172__$1 = state_33172;
var statearr_33191_33215 = state_33172__$1;
(statearr_33191_33215[(2)] = inst_33144);

(statearr_33191_33215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (10))){
var inst_33145 = (state_33172[(9)]);
var inst_33131 = (state_33172[(10)]);
var inst_33154 = cljs.core._EQ_.call(null,inst_33145,inst_33131);
var state_33172__$1 = state_33172;
if(inst_33154){
var statearr_33192_33216 = state_33172__$1;
(statearr_33192_33216[(1)] = (12));

} else {
var statearr_33193_33217 = state_33172__$1;
(statearr_33193_33217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (18))){
var inst_33163 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33194_33218 = state_33172__$1;
(statearr_33194_33218[(2)] = inst_33163);

(statearr_33194_33218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (8))){
var inst_33145 = (state_33172[(9)]);
var inst_33143 = (state_33172[(12)]);
var inst_33143__$1 = (state_33172[(2)]);
var inst_33144 = cljs.core.nth.call(null,inst_33143__$1,(0),null);
var inst_33145__$1 = cljs.core.nth.call(null,inst_33143__$1,(1),null);
var inst_33146 = cljs.core._EQ_.call(null,inst_33145__$1,in$);
var state_33172__$1 = (function (){var statearr_33195 = state_33172;
(statearr_33195[(14)] = inst_33144);

(statearr_33195[(9)] = inst_33145__$1);

(statearr_33195[(12)] = inst_33143__$1);

return statearr_33195;
})();
if(inst_33146){
var statearr_33196_33219 = state_33172__$1;
(statearr_33196_33219[(1)] = (9));

} else {
var statearr_33197_33220 = state_33172__$1;
(statearr_33197_33220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31032__auto___33202,out))
;
return ((function (switch__30944__auto__,c__31032__auto___33202,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__30945__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__30945__auto____0 = (function (){
var statearr_33198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33198[(0)] = re_com$typeahead$debounce_$_state_machine__30945__auto__);

(statearr_33198[(1)] = (1));

return statearr_33198;
});
var re_com$typeahead$debounce_$_state_machine__30945__auto____1 = (function (state_33172){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_33172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e33199){if((e33199 instanceof Object)){
var ex__30948__auto__ = e33199;
var statearr_33200_33221 = state_33172;
(statearr_33200_33221[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33222 = state_33172;
state_33172 = G__33222;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__30945__auto__ = function(state_33172){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__30945__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__30945__auto____1.call(this,state_33172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__30945__auto____0;
re_com$typeahead$debounce_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__30945__auto____1;
return re_com$typeahead$debounce_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___33202,out))
})();
var state__31034__auto__ = (function (){var statearr_33201 = f__31033__auto__.call(null);
(statearr_33201[(6)] = c__31032__auto___33202);

return statearr_33201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___33202,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1553724323865
