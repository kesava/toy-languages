// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__20856){
var map__20857 = p__20856;
var map__20857__$1 = ((((!((map__20857 == null)))?((((map__20857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20857):map__20857);
var args = map__20857__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$on_DASH_change);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$data_DASH_source);
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$debounce_DASH_delay);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,cljs.core.cst$kw$model);
var external_model_value = re_com.util.deref_or_value(model);
var G__20859 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$waiting_QMARK_,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,cljs.core.cst$kw$input_DASH_text,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$c_DASH_search,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$suggestions,cljs.core.cst$kw$c_DASH_input,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$external_DASH_model,cljs.core.cst$kw$model],[false,(function (){var or__10921__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__20859,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__20859,external_model_value));
} else {
return G__20859;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__20860,event){
var map__20861 = p__20860;
var map__20861__$1 = ((((!((map__20861 == null)))?((((map__20861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20861):map__20861);
var state = map__20861__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20861__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20861__$1,cljs.core.cst$kw$rigid_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__20863 = event;
var G__20863__$1 = (((G__20863 instanceof cljs.core.Keyword))?G__20863.fqn:null);
switch (G__20863__$1) {
case "input-text-blurred":
var and__10909__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__10909__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__10909__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not((function (){var or__10921__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20863__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__20865,event){
var map__20866 = p__20865;
var map__20866__$1 = ((((!((map__20866 == null)))?((((map__20866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20866):map__20866);
var state = map__20866__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20866__$1,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__20868 = event;
var G__20868__$1 = (((G__20868 instanceof cljs.core.Keyword))?G__20868.fqn:null);
switch (G__20868__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__20870,new_value){
var map__20871 = p__20870;
var map__20871__$1 = ((((!((map__20871 == null)))?((((map__20871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20871):map__20871);
var state = map__20871__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,cljs.core.cst$kw$on_DASH_change);
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$model,new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__20873,suggestion){
var map__20874 = p__20873;
var map__20874__$1 = ((((!((map__20874 == null)))?((((map__20874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20874):map__20874);
var state = map__20874__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20874__$1,cljs.core.cst$kw$suggestion_DASH_to_DASH_string);
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__20876 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20876,cljs.core.cst$kw$input_DASH_text,suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,true], 0));
} else {
return G__20876;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$suggestion_DASH_active_DASH_index], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__20877,index){
var map__20878 = p__20877;
var map__20878__$1 = ((((!((map__20878 == null)))?((((map__20878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20878):map__20878);
var state = map__20878__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20878__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__20880 = state;
var G__20880__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20880,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,index)
;
var G__20880__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))?re_com.typeahead.update_model(G__20880__$1,suggestion):G__20880__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,cljs.core.cst$kw$suggestion_DASH_activated))){
return re_com.typeahead.display_suggestion(G__20880__$2,suggestion);
} else {
return G__20880__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__20881,index){
var map__20882 = p__20881;
var map__20882__$1 = ((((!((map__20882 == null)))?((((map__20882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20882):map__20882);
var state = map__20882__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20882__$1,cljs.core.cst$kw$suggestions);
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__20884){
var map__20885 = p__20884;
var map__20885__$1 = ((((!((map__20885 == null)))?((((map__20885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20885):map__20885);
var state = map__20885__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20885__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__20887 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__20887,suggestion_active_index);
} else {
return G__20887;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__20888){
var map__20889 = p__20888;
var map__20889__$1 = ((((!((map__20889 == null)))?((((map__20889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20889):map__20889);
var state = map__20889__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20889__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20889__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__20891 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__20891,re_com.typeahead.wrap(((function (){var or__10921__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__20891;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__20892){
var map__20893 = p__20892;
var map__20893__$1 = ((((!((map__20893 == null)))?((((map__20893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20893):map__20893);
var state = map__20893__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,cljs.core.cst$kw$suggestions);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var G__20895 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__20895,re_com.typeahead.wrap(((function (){var or__10921__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__20895;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__20896 = state;
var G__20896__$1 = re_com.typeahead.clear_suggestions(G__20896)
;
var G__20896__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20896__$1,cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_text,"",cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__20896__$2,null);
} else {
return G__20896__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$suggestions,suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$waiting_QMARK_,false,cljs.core.cst$kw$suggestion_DASH_active_DASH_index,null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__20897){
var map__20898 = p__20897;
var map__20898__$1 = ((((!((map__20898 == null)))?((((map__20898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20898):map__20898);
var state = map__20898__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20898__$1,cljs.core.cst$kw$input_DASH_text);
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20898__$1,cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_);
var G__20900 = state;
if(cljs.core.truth_((function (){var and__10909__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__10909__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_blurred);
} else {
return and__10909__auto__;
}
})())){
return re_com.typeahead.update_model(G__20900,input_text);
} else {
return G__20900;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),cljs.core.cst$kw$data_DASH_source,data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = (function (){var G__20902 = text;
var G__20903 = ((function (G__20902){
return (function (p1__20901_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__20901_SHARP_);
});})(G__20902))
;
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__20902,G__20903) : data_source.call(null,G__20902,G__20903));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,cljs.core.cst$kw$waiting_QMARK_,true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__18859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto__){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto__){
return (function (state_20920){
var state_val_20921 = (state_20920[(1)]);
if((state_val_20921 === (1))){
var state_20920__$1 = state_20920;
var statearr_20922_20934 = state_20920__$1;
(statearr_20922_20934[(2)] = null);

(statearr_20922_20934[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20921 === (2))){
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20920__$1,(4),c_search);
} else {
if((state_val_20921 === (3))){
var inst_20918 = (state_20920[(2)]);
var state_20920__$1 = state_20920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20920__$1,inst_20918);
} else {
if((state_val_20921 === (4))){
var inst_20906 = (state_20920[(7)]);
var inst_20906__$1 = (state_20920[(2)]);
var inst_20907 = cljs.core.deref(state_atom);
var inst_20908 = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(inst_20907);
var inst_20909 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_20906__$1);
var state_20920__$1 = (function (){var statearr_20923 = state_20920;
(statearr_20923[(7)] = inst_20906__$1);

(statearr_20923[(8)] = inst_20908);

return statearr_20923;
})();
if(inst_20909){
var statearr_20924_20935 = state_20920__$1;
(statearr_20924_20935[(1)] = (5));

} else {
var statearr_20925_20936 = state_20920__$1;
(statearr_20925_20936[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20921 === (5))){
var inst_20911 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var state_20920__$1 = state_20920;
var statearr_20926_20937 = state_20920__$1;
(statearr_20926_20937[(2)] = inst_20911);

(statearr_20926_20937[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20921 === (6))){
var inst_20906 = (state_20920[(7)]);
var inst_20908 = (state_20920[(8)]);
var inst_20913 = re_com.typeahead.search_data_source_BANG_(inst_20908,state_atom,inst_20906);
var state_20920__$1 = state_20920;
var statearr_20927_20938 = state_20920__$1;
(statearr_20927_20938[(2)] = inst_20913);

(statearr_20927_20938[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20921 === (7))){
var inst_20915 = (state_20920[(2)]);
var state_20920__$1 = (function (){var statearr_20928 = state_20920;
(statearr_20928[(9)] = inst_20915);

return statearr_20928;
})();
var statearr_20929_20939 = state_20920__$1;
(statearr_20929_20939[(2)] = null);

(statearr_20929_20939[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__18859__auto__))
;
return ((function (switch__18759__auto__,c__18859__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto____0 = (function (){
var statearr_20930 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20930[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto__);

(statearr_20930[(1)] = (1));

return statearr_20930;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto____1 = (function (state_20920){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20920);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20931){if((e20931 instanceof Object)){
var ex__18763__auto__ = e20931;
var statearr_20932_20940 = state_20920;
(statearr_20932_20940[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20920);

return cljs.core.cst$kw$recur;
} else {
throw e20931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20941 = state_20920;
state_20920 = G__20941;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto__ = function(state_20920){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto____1.call(this,state_20920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto__))
})();
var state__18861__auto__ = (function (){var statearr_20933 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20933[(6)] = c__18859__auto__);

return statearr_20933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto__))
);

return c__18859__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__20943 = cljs.core.deref(state_atom);
var map__20943__$1 = ((((!((map__20943 == null)))?((((map__20943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20943):map__20943);
var state = map__20943__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943__$1,cljs.core.cst$kw$input_DASH_text);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943__$1,cljs.core.cst$kw$c_DASH_input);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_(new_text)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,((function (map__20943,map__20943__$1,state,input_text,c_input){
return (function (p1__20942_SHARP_){
var G__20945 = p1__20942_SHARP_;
var G__20945__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20945,cljs.core.cst$kw$input_DASH_text,new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$displaying_DASH_suggestion_QMARK_,false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,cljs.core.cst$kw$input_DASH_text_DASH_changed))){
return re_com.typeahead.update_model(G__20945__$1,new_text);
} else {
return G__20945__$1;
}
});})(map__20943,map__20943__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__20946 = cljs.core._EQ_;
var expr__20947 = event.which;
if(cljs.core.truth_((pred__20946.cljs$core$IFn$_invoke$arity$2 ? pred__20946.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__20947) : pred__20946.call(null,goog.events.KeyCodes.UP,expr__20947)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__20946.cljs$core$IFn$_invoke$arity$2 ? pred__20946.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__20947) : pred__20946.call(null,goog.events.KeyCodes.DOWN,expr__20947)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__20946.cljs$core$IFn$_invoke$arity$2 ? pred__20946.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__20947) : pred__20946.call(null,goog.events.KeyCodes.ENTER,expr__20947)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__20946.cljs$core$IFn$_invoke$arity$2 ? pred__20946.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__20947) : pred__20946.call(null,goog.events.KeyCodes.ESC,expr__20947)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_((pred__20946.cljs$core$IFn$_invoke$arity$2 ? pred__20946.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__20947) : pred__20946.call(null,goog.events.KeyCodes.TAB,expr__20947)))){
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$suggestions.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$data_DASH_source,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"string -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,null,cljs.core.cst$kw$type,"object | atom",cljs.core.cst$kw$description,"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$debounce_DASH_delay,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(250),cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$validate_DASH_fn,cljs.core.integer_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$render_DASH_suggestion,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"render fn",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$suggestion_DASH_to_DASH_string,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"suggestion -> string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$rigid_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.input_status_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$status_DASH_tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__12088__auto__ = [];
var len__12081__auto___20971 = arguments.length;
var i__12082__auto___20972 = (0);
while(true){
if((i__12082__auto___20972 < len__12081__auto___20971)){
args__12088__auto__.push((arguments[i__12082__auto___20972]));

var G__20973 = (i__12082__auto___20972 + (1));
i__12082__auto___20972 = G__20973;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__20951){
var map__20952 = p__20951;
var map__20952__$1 = ((((!((map__20952 == null)))?((((map__20952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20952):map__20952);
var args = map__20952__$1;

var map__20954 = re_com.typeahead.make_typeahead_state(args);
var map__20954__$1 = ((((!((map__20954 == null)))?((((map__20954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20954):map__20954);
var state = map__20954__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20954__$1,cljs.core.cst$kw$c_DASH_search);
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20954__$1,cljs.core.cst$kw$c_DASH_input);
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_text], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return ((function (map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args){
return (function() { 
var G__20974__delegate = function (p__20956){
var map__20957 = p__20956;
var map__20957__$1 = ((((!((map__20957 == null)))?((((map__20957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20957):map__20957);
var args__$1 = map__20957__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$disabled_QMARK_);
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$status_DASH_icon_QMARK_);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$height);
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$status_DASH_tooltip);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$model);
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$_debounce_DASH_delay);
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$_on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$placeholder);
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$render_DASH_suggestion);
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$_suggestion_DASH_to_DASH_string);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$width);
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$data_DASH_source);
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$_rigid_QMARK_);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$style);
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$_change_DASH_on_DASH_blur_QMARK_);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$status);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$class);
var _attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20957__$1,cljs.core.cst$kw$_attr);

var map__20959 = cljs.core.deref(state_atom);
var map__20959__$1 = ((((!((map__20959 == null)))?((((map__20959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20959):map__20959);
var state__$1 = map__20959__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20959__$1,cljs.core.cst$kw$suggestions);
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20959__$1,cljs.core.cst$kw$waiting_QMARK_);
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20959__$1,cljs.core.cst$kw$suggestion_DASH_active_DASH_index);
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20959__$1,cljs.core.cst$kw$external_DASH_model);
var last_data_source = cljs.core.cst$kw$data_DASH_source.cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__10921__auto__ = width;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,cljs.core.cst$kw$model,input_text_model,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$status_DASH_icon_QMARK_,status_icon_QMARK_,cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_tooltip,status_tooltip,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,height,cljs.core.cst$kw$placeholder,placeholder,cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,false,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_key_DASH_down,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__10921__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,"rc-typeahead-suggestions-container",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,cljs.core.cst$kw$size,cljs.core.cst$kw$small,cljs.core.cst$kw$class,"rc-typeahead-throbber"], null)], null):null),(function (){var iter__11729__auto__ = ((function (map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args){
return (function re_com$typeahead$iter__20961(s__20962){
return (new cljs.core.LazySeq(null,((function (map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args){
return (function (){
var s__20962__$1 = s__20962;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20962__$1);
if(temp__4657__auto__){
var s__20962__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20962__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__20962__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__20964 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__20963 = (0);
while(true){
if((i__20963 < size__11728__auto__)){
var vec__20965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__20963);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20965,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20965,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__20964,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__20963,selected_QMARK_,vec__20965,i,s,c__11727__auto__,size__11728__auto__,b__20964,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__20963,selected_QMARK_,vec__20965,i,s,c__11727__auto__,size__11728__auto__,b__20964,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (i__20963,selected_QMARK_,vec__20965,i,s,c__11727__auto__,size__11728__auto__,b__20964,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args){
return (function (p1__20949_SHARP_){
p1__20949_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__20963,selected_QMARK_,vec__20965,i,s,c__11727__auto__,size__11728__auto__,b__20964,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__20975 = (i__20963 + (1));
i__20963 = G__20975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20964),re_com$typeahead$iter__20961(cljs.core.chunk_rest(s__20962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20964),null);
}
} else {
var vec__20968 = cljs.core.first(s__20962__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20968,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20968,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$child,(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),cljs.core.cst$kw$class,["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (selected_QMARK_,vec__20968,i,s,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__20968,i,s,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (selected_QMARK_,vec__20968,i,s,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args){
return (function (p1__20949_SHARP_){
p1__20949_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__20968,i,s,s__20962__$2,temp__4657__auto__,map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),re_com$typeahead$iter__20961(cljs.core.rest(s__20962__$2)));
}
} else {
return null;
}
break;
}
});})(map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args))
,null,null));
});})(map__20959,map__20959__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__20957,map__20957__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args))
;
return iter__11729__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__20974 = function (var_args){
var p__20956 = null;
if (arguments.length > 0) {
var G__20976__i = 0, G__20976__a = new Array(arguments.length -  0);
while (G__20976__i < G__20976__a.length) {G__20976__a[G__20976__i] = arguments[G__20976__i + 0]; ++G__20976__i;}
  p__20956 = new cljs.core.IndexedSeq(G__20976__a,0,null);
} 
return G__20974__delegate.call(this,p__20956);};
G__20974.cljs$lang$maxFixedArity = 0;
G__20974.cljs$lang$applyTo = (function (arglist__20977){
var p__20956 = cljs.core.seq(arglist__20977);
return G__20974__delegate(p__20956);
});
G__20974.cljs$core$IFn$_invoke$arity$variadic = G__20974__delegate;
return G__20974;
})()
;
;})(map__20954,map__20954__$1,state,c_search,c_input,state_atom,input_text_model,map__20952,map__20952__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq20950){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20950));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__18859__auto___21058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___21058,out){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___21058,out){
return (function (state_21028){
var state_val_21029 = (state_21028[(1)]);
if((state_val_21029 === (7))){
var inst_20983 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21030_21059 = state_21028__$1;
(statearr_21030_21059[(2)] = inst_20983);

(statearr_21030_21059[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (1))){
var inst_20978 = null;
var state_21028__$1 = (function (){var statearr_21031 = state_21028;
(statearr_21031[(7)] = inst_20978);

return statearr_21031;
})();
var statearr_21032_21060 = state_21028__$1;
(statearr_21032_21060[(2)] = null);

(statearr_21032_21060[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (4))){
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21028__$1,(7),in$);
} else {
if((state_val_21029 === (15))){
var inst_21013 = (state_21028[(2)]);
var state_21028__$1 = (function (){var statearr_21033 = state_21028;
(statearr_21033[(8)] = inst_21013);

return statearr_21033;
})();
var statearr_21034_21061 = state_21028__$1;
(statearr_21034_21061[(2)] = null);

(statearr_21034_21061[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (13))){
var inst_21001 = (state_21028[(9)]);
var inst_21015 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21001,cljs.core.cst$kw$default);
var state_21028__$1 = state_21028;
if(inst_21015){
var statearr_21035_21062 = state_21028__$1;
(statearr_21035_21062[(1)] = (16));

} else {
var statearr_21036_21063 = state_21028__$1;
(statearr_21036_21063[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (6))){
var inst_20987 = (state_21028[(10)]);
var inst_20986 = (state_21028[(2)]);
var inst_20987__$1 = cljs.core.async.timeout(ms);
var inst_20995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20996 = [in$,inst_20987__$1];
var inst_20997 = (new cljs.core.PersistentVector(null,2,(5),inst_20995,inst_20996,null));
var state_21028__$1 = (function (){var statearr_21037 = state_21028;
(statearr_21037[(11)] = inst_20986);

(statearr_21037[(10)] = inst_20987__$1);

return statearr_21037;
})();
return cljs.core.async.ioc_alts_BANG_(state_21028__$1,(8),inst_20997);
} else {
if((state_val_21029 === (17))){
var state_21028__$1 = state_21028;
var statearr_21038_21064 = state_21028__$1;
(statearr_21038_21064[(2)] = null);

(statearr_21038_21064[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (3))){
var inst_21026 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21028__$1,inst_21026);
} else {
if((state_val_21029 === (12))){
var inst_20986 = (state_21028[(11)]);
var state_21028__$1 = state_21028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21028__$1,(15),out,inst_20986);
} else {
if((state_val_21029 === (2))){
var inst_20978 = (state_21028[(7)]);
var inst_20980 = (inst_20978 == null);
var state_21028__$1 = state_21028;
if(cljs.core.truth_(inst_20980)){
var statearr_21039_21065 = state_21028__$1;
(statearr_21039_21065[(1)] = (4));

} else {
var statearr_21040_21066 = state_21028__$1;
(statearr_21040_21066[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (11))){
var inst_21023 = (state_21028[(2)]);
var inst_20978 = inst_21023;
var state_21028__$1 = (function (){var statearr_21041 = state_21028;
(statearr_21041[(7)] = inst_20978);

return statearr_21041;
})();
var statearr_21042_21067 = state_21028__$1;
(statearr_21042_21067[(2)] = null);

(statearr_21042_21067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (9))){
var inst_20999 = (state_21028[(12)]);
var inst_21007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20999,(0),null);
var inst_21008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20999,(1),null);
var state_21028__$1 = (function (){var statearr_21043 = state_21028;
(statearr_21043[(13)] = inst_21008);

return statearr_21043;
})();
var statearr_21044_21068 = state_21028__$1;
(statearr_21044_21068[(2)] = inst_21007);

(statearr_21044_21068[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (5))){
var inst_20978 = (state_21028[(7)]);
var state_21028__$1 = state_21028;
var statearr_21045_21069 = state_21028__$1;
(statearr_21045_21069[(2)] = inst_20978);

(statearr_21045_21069[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (14))){
var inst_21021 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21046_21070 = state_21028__$1;
(statearr_21046_21070[(2)] = inst_21021);

(statearr_21046_21070[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (16))){
var inst_21000 = (state_21028[(14)]);
var state_21028__$1 = state_21028;
var statearr_21047_21071 = state_21028__$1;
(statearr_21047_21071[(2)] = inst_21000);

(statearr_21047_21071[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (10))){
var inst_21001 = (state_21028[(9)]);
var inst_20987 = (state_21028[(10)]);
var inst_21010 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21001,inst_20987);
var state_21028__$1 = state_21028;
if(inst_21010){
var statearr_21048_21072 = state_21028__$1;
(statearr_21048_21072[(1)] = (12));

} else {
var statearr_21049_21073 = state_21028__$1;
(statearr_21049_21073[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (18))){
var inst_21019 = (state_21028[(2)]);
var state_21028__$1 = state_21028;
var statearr_21050_21074 = state_21028__$1;
(statearr_21050_21074[(2)] = inst_21019);

(statearr_21050_21074[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21029 === (8))){
var inst_21001 = (state_21028[(9)]);
var inst_20999 = (state_21028[(12)]);
var inst_20999__$1 = (state_21028[(2)]);
var inst_21000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20999__$1,(0),null);
var inst_21001__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20999__$1,(1),null);
var inst_21002 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21001__$1,in$);
var state_21028__$1 = (function (){var statearr_21051 = state_21028;
(statearr_21051[(9)] = inst_21001__$1);

(statearr_21051[(12)] = inst_20999__$1);

(statearr_21051[(14)] = inst_21000);

return statearr_21051;
})();
if(inst_21002){
var statearr_21052_21075 = state_21028__$1;
(statearr_21052_21075[(1)] = (9));

} else {
var statearr_21053_21076 = state_21028__$1;
(statearr_21053_21076[(1)] = (10));

}

return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___21058,out))
;
return ((function (switch__18759__auto__,c__18859__auto___21058,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__18760__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__18760__auto____0 = (function (){
var statearr_21054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21054[(0)] = re_com$typeahead$debounce_$_state_machine__18760__auto__);

(statearr_21054[(1)] = (1));

return statearr_21054;
});
var re_com$typeahead$debounce_$_state_machine__18760__auto____1 = (function (state_21028){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_21028);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e21055){if((e21055 instanceof Object)){
var ex__18763__auto__ = e21055;
var statearr_21056_21077 = state_21028;
(statearr_21056_21077[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21028);

return cljs.core.cst$kw$recur;
} else {
throw e21055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__21078 = state_21028;
state_21028 = G__21078;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__18760__auto__ = function(state_21028){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__18760__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__18760__auto____1.call(this,state_21028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__18760__auto____0;
re_com$typeahead$debounce_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__18760__auto____1;
return re_com$typeahead$debounce_$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___21058,out))
})();
var state__18861__auto__ = (function (){var statearr_21057 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_21057[(6)] = c__18859__auto___21058);

return statearr_21057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___21058,out))
);


return out;
});
