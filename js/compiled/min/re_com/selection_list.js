// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_com.selection_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.text');
goog.require('re_com.misc');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.util');
re_com.selection_list.label_style = (function re_com$selection_list$label_style(var_args){
var G__21767 = arguments.length;
switch (G__21767) {
case 2:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2 = (function (selected_QMARK_,as_exclusions_QMARK_){
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3(selected_QMARK_,as_exclusions_QMARK_,null);
});

re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3 = (function (selected_QMARK_,as_exclusions_QMARK_,selected_color){
var base_style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"1px"], null);
var base_style__$1 = (cljs.core.truth_((function (){var and__10909__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__10909__auto__)){
return as_exclusions_QMARK_;
} else {
return and__10909__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"line-through"], null)], 0)):base_style);
var base_style__$2 = (cljs.core.truth_((function (){var and__10909__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__10909__auto__)){
return selected_color;
} else {
return and__10909__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,selected_color], null)], 0)):base_style__$1);
return base_style__$2;
});

re_com.selection_list.label_style.cljs$lang$maxFixedArity = 3;

re_com.selection_list.check_clicked = (function re_com$selection_list$check_clicked(selections,item_id,ticked_QMARK_,required_QMARK_){
var num_selected = cljs.core.count(selections);
var only_item = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected))?cljs.core.first(selections):null);
if(cljs.core.truth_((function (){var and__10909__auto__ = required_QMARK_;
if(cljs.core.truth_(and__10909__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(only_item,item_id);
} else {
return and__10909__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(ticked_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
}
}
});
re_com.selection_list.as_checked = (function re_com$selection_list$as_checked(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"list-group-item compact",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (item_id){
return (function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__21769_21770 = re_com.selection_list.check_clicked(selections,item_id,cljs.core.not((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id))),required_QMARK_);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__21769_21770) : on_change.call(null,G__21769_21770));
}

return null;
});})(item_id))
], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.checkbox,cljs.core.cst$kw$model,!(((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)) == null)),cljs.core.cst$kw$on_DASH_change,((function (item_id){
return (function (){
return cljs.core.List.EMPTY;
});})(item_id))
,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$label_DASH_style,re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)),as_exclusions_QMARK_),cljs.core.cst$kw$label,(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null);
});
re_com.selection_list.radio_clicked = (function re_com$selection_list$radio_clicked(selections,item_id,required_QMARK_){
if(cljs.core.truth_((function (){var and__10909__auto__ = required_QMARK_;
if(cljs.core.truth_(and__10909__auto__)){
return (selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id));
} else {
return and__10909__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([item_id]);
}
}
});
re_com.selection_list.as_radio = (function re_com$selection_list$as_radio(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"list-group-item compact",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (item_id){
return (function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__21771_21772 = re_com.selection_list.radio_clicked(selections,item_id,required_QMARK_);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__21771_21772) : on_change.call(null,G__21771_21772));
}

return null;
});})(item_id))
], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.radio_button,cljs.core.cst$kw$model,cljs.core.first(selections),cljs.core.cst$kw$value,item_id,cljs.core.cst$kw$on_DASH_change,((function (item_id){
return (function (){
return cljs.core.List.EMPTY;
});})(item_id))
,cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$label_DASH_style,re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)),as_exclusions_QMARK_),cljs.core.cst$kw$label,(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null);
});
re_com.selection_list.list_style = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$overflow_DASH_y,"auto"], null);
re_com.selection_list.spacing_bordered = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$padding_DASH_left,"5px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$margin_DASH_top,"5px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null);
re_com.selection_list.spacing_unbordered = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_left,"0px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$margin_DASH_top,"0px",cljs.core.cst$kw$margin_DASH_bottom,"0px"], null);
re_com.selection_list.selection_list_args_desc = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of choices | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the selectable items. Elements can be strings or more interesting data items like {:label \"some name\" :sort 5}. Also see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," below (list of maps also allowed)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"set of :ids within :choices | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.set_or_atom_QMARK_,cljs.core.cst$kw$description,"the currently selected items. Note: items are considered distinct"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"set of :ids -> nil | atom",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a callback which will be passed set of the ids (as defined by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id-fn"], null),") of the selected items"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"choice -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$multi_DASH_select_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, use check boxes, otherwise radio buttons"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$as_DASH_exclusions_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, selected items are shown with struck-out labels"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$required_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, at least one item must be selected. Note: being able to un-select a radio button is not a common use case, so this should probably be set to true when in single select mode"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"250px\". When specified, item labels may be clipped. Otherwise based on widest label"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"150px\". Size beyond which items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"a CSS style e.g. \"150px\". If there are less items then this height, box will shrink. If there are more, items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, the time input will be disabled. Can be atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$hide_DASH_border_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, the list will be displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$item_DASH_renderer,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil | atom",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called for each element during setup, the returned component renders the element, responds to clicks etc."], null)], null);
re_com.selection_list.list_container = (function re_com$selection_list$list_container(p__21776){
var map__21777 = p__21776;
var map__21777__$1 = ((((!((map__21777 == null)))?((((map__21777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21777):map__21777);
var args = map__21777__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$on_DASH_change);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$height);
var item_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$item_DASH_renderer);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$model);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$label_DASH_fn);
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$required_QMARK_);
var as_exclusions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$as_DASH_exclusions_QMARK_);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$max_DASH_height);
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$width);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$choices);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$id_DASH_fn);
var multi_select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,cljs.core.cst$kw$multi_DASH_select_QMARK_);

var selected = (cljs.core.truth_(multi_select_QMARK_)?model:cljs.core.set((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(model)],null))));
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(item_renderer)?((function (selected,map__21777,map__21777__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,multi_select_QMARK_){
return (function (p1__21773_SHARP_){
return (item_renderer.cljs$core$IFn$_invoke$arity$8 ? item_renderer.cljs$core$IFn$_invoke$arity$8(p1__21773_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_) : item_renderer.call(null,p1__21773_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_));
});})(selected,map__21777,map__21777__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,multi_select_QMARK_))
:(cljs.core.truth_(multi_select_QMARK_)?((function (selected,map__21777,map__21777__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,multi_select_QMARK_){
return (function (p1__21774_SHARP_){
return re_com.selection_list.as_checked(p1__21774_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__21777,map__21777__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,multi_select_QMARK_))
:((function (selected,map__21777,map__21777__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,multi_select_QMARK_){
return (function (p1__21775_SHARP_){
return re_com.selection_list.as_radio(p1__21775_SHARP_,id_fn,selected,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_);
});})(selected,map__21777,map__21777__$1,args,disabled_QMARK_,on_change,height,item_renderer,model,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,width,choices,id_fn,multi_select_QMARK_))
)),choices);
var bounds = cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$max_DASH_height], null));
var spacing = (cljs.core.truth_(hide_border_QMARK_)?new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_left,"0px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$margin_DASH_top,"0px",cljs.core.cst$kw$margin_DASH_bottom,"0px"], null):new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_top,"0px",cljs.core.cst$kw$padding_DASH_bottom,"0px",cljs.core.cst$kw$padding_DASH_left,"5px",cljs.core.cst$kw$padding_DASH_right,"5px",cljs.core.cst$kw$margin_DASH_top,"5px",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$radius,"4px",cljs.core.cst$kw$border,(cljs.core.truth_(hide_border_QMARK_)?"none":null),cljs.core.cst$kw$child,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"list-group noselect",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$overflow_DASH_y,"auto"], null),bounds,spacing], 0))], null)], null),items)], null);
});
/**
 * Augment passed attributes with defaults and deref any atoms
 */
re_com.selection_list.configure = (function re_com$selection_list$configure(attributes){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$multi_DASH_select_QMARK_,true,cljs.core.cst$kw$as_DASH_exclusions_QMARK_,false,cljs.core.cst$kw$required_QMARK_,false,cljs.core.cst$kw$disabled_QMARK_,false,cljs.core.cst$kw$hide_DASH_border_QMARK_,false,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label], null),re_com.util.fmap(re_com.util.deref_or_value,attributes)], 0));
});
/**
 * Produce a list box with items arranged vertically
 */
re_com.selection_list.selection_list = (function re_com$selection_list$selection_list(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21786 = arguments.length;
var i__12082__auto___21787 = (0);
while(true){
if((i__12082__auto___21787 < len__12081__auto___21786)){
args__12088__auto__.push((arguments[i__12082__auto___21787]));

var G__21788 = (i__12082__auto___21787 + (1));
i__12082__auto___21787 = G__21788;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__21780){
var map__21781 = p__21780;
var map__21781__$1 = ((((!((map__21781 == null)))?((((map__21781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21781):map__21781);
var args = map__21781__$1;

return ((function (map__21781,map__21781__$1,args){
return (function() { 
var G__21789__delegate = function (p__21783){
var map__21784 = p__21783;
var map__21784__$1 = ((((!((map__21784 == null)))?((((map__21784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21784):map__21784);
var args__$1 = map__21784__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.selection_list.list_container,re_com.selection_list.configure(args__$1)], null);
};
var G__21789 = function (var_args){
var p__21783 = null;
if (arguments.length > 0) {
var G__21790__i = 0, G__21790__a = new Array(arguments.length -  0);
while (G__21790__i < G__21790__a.length) {G__21790__a[G__21790__i] = arguments[G__21790__i + 0]; ++G__21790__i;}
  p__21783 = new cljs.core.IndexedSeq(G__21790__a,0,null);
} 
return G__21789__delegate.call(this,p__21783);};
G__21789.cljs$lang$maxFixedArity = 0;
G__21789.cljs$lang$applyTo = (function (arglist__21791){
var p__21783 = cljs.core.seq(arglist__21791);
return G__21789__delegate(p__21783);
});
G__21789.cljs$core$IFn$_invoke$arity$variadic = G__21789__delegate;
return G__21789;
})()
;
;})(map__21781,map__21781__$1,args))
});

re_com.selection_list.selection_list.cljs$lang$maxFixedArity = (0);

re_com.selection_list.selection_list.cljs$lang$applyTo = (function (seq21779){
return re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21779));
});

