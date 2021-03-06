// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_com.input_time');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_com.validate');
goog.require('re_com.text');
goog.require('re_com.box');
goog.require('re_com.util');
re_com.input_time.time__GT_mins = (function re_com$input_time$time__GT_mins(time){
return cljs.core.rem(time,(100));
});
re_com.input_time.time__GT_hrs = (function re_com$input_time$time__GT_hrs(time){
return cljs.core.quot(time,(100));
});
/**
 * Parse the string 's' to a valid int. On parse failure, return 0
 */
re_com.input_time.to_int = (function re_com$input_time$to_int(s){
var val = parseInt(s);
if(cljs.core.truth_(isNaN(val))){
return (0);
} else {
return val;
}
});
/**
 * Return a time integer from a triple int vector of form  [H  _  M]
 */
re_com.input_time.triple__GT_time = (function re_com$input_time$triple__GT_time(p__21733){
var vec__21734 = p__21733;
var hr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21734,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21734,(1),null);
var mi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21734,(2),null);
return ((hr * (100)) + mi);
});
re_com.input_time.triple_seeking_re = /^(\d{0,2})()()$|^(\d{0,1})(:{0,1})(\d{0,2})$|^(\d{0,2})(:{0,1})(\d{0,2})$/;
re_com.input_time.extract_triple_from_text = (function re_com$input_time$extract_triple_from_text(text){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.rest(cljs.core.re_matches(re_com.input_time.triple_seeking_re,text)));
});
/**
 * return as a time int, the contents of 'text'
 */
re_com.input_time.text__GT_time = (function re_com$input_time$text__GT_time(text){
return re_com.input_time.triple__GT_time(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.input_time.to_int,re_com.input_time.extract_triple_from_text(text)));
});
/**
 * return a string of format HH:MM for 'time'
 */
re_com.input_time.time__GT_text = (function re_com$input_time$time__GT_text(time){
var hrs = re_com.input_time.time__GT_hrs(time);
var mins = re_com.input_time.time__GT_mins(time);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(hrs,(2))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(mins,(2)))].join('');
});
/**
 * Return true if text passes basic time validation.
 * Can't do to much validation because user input might not be finished.
 * Why?  On the way to entering 6:30, you must pass through the invalid state of '63'.
 * So we only really check against the triple-extracting regular expression
 */
re_com.input_time.valid_text_QMARK_ = (function re_com$input_time$valid_text_QMARK_(text){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(re_com.input_time.extract_triple_from_text(text)));
});
re_com.input_time.valid_time_QMARK_ = (function re_com$input_time$valid_time_QMARK_(time){
if((time == null)){
return false;
} else {
if(((0) > time)){
return false;
} else {
if(((60) < re_com.input_time.time__GT_mins(time))){
return false;
} else {
return true;

}
}
}
});
re_com.input_time.validate_arg_times = (function re_com$input_time$validate_arg_times(model,minimum,maximum){




return true;
});
/**
 * Validate the time supplied.
 * Return either the time or, if it is invalid, return something valid
 */
re_com.input_time.force_valid_time = (function re_com$input_time$force_valid_time(time,min,max,previous){
if((time == null)){
return previous;
} else {
if(cljs.core.not(re_com.input_time.valid_time_QMARK_(time))){
return previous;
} else {
if((time < min)){
return min;
} else {
if((max < time)){
return max;
} else {
return time;

}
}
}
}
});
/**
 * Called each time the <input> field gets a keypress, or paste operation.
 * Rests  the text-model only if the new text is valid
 */
re_com.input_time.on_new_keypress = (function re_com$input_time$on_new_keypress(event,text_model){
var current_text = event.target.value;
if(cljs.core.truth_(re_com.input_time.valid_text_QMARK_(current_text))){
return cljs.core.reset_BANG_(text_model,current_text);
} else {
return null;
}
});
/**
 * When Enter is pressed, force the component to lose focus
 */
re_com.input_time.lose_focus_if_enter = (function re_com$input_time$lose_focus_if_enter(ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev.keyCode,(13))){
ev.target.blur();

return true;
} else {
return null;
}
});
/**
 * Called when the field looses focus.
 * Re-validate what has been entered, comparing to mins and maxs.
 * Invoke the callback as necessary
 */
re_com.input_time.on_defocus = (function re_com$input_time$on_defocus(text_model,min,max,callback,previous_val){
var time = re_com.input_time.text__GT_time(cljs.core.deref(text_model));
var time__$1 = re_com.input_time.force_valid_time(time,min,max,previous_val);
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(time__$1));

if(cljs.core.truth_((function (){var and__10909__auto__ = callback;
if(cljs.core.truth_(and__10909__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(time__$1,previous_val);
} else {
return and__10909__auto__;
}
})())){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(time__$1) : callback.call(null,time__$1));
} else {
return null;
}
});
re_com.input_time.input_time_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"integer | string | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"a time in integer form. e.g. '09:30am' is 930"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"integer -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user entry completes and value is new. Passed new value as integer"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$minimum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(0),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"user can't enter a time less than this value"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$maximum,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,(2359),cljs.core.cst$kw$type,"integer | string",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.number_or_string_QMARK_,cljs.core.cst$kw$description,"user can't enter a time more than this value"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"when true, user input is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$show_DASH_icon_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, a clock icon will be displayed to the right of input field"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$hide_DASH_border_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"when true, input filed is displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS width setting for width of the input box (excluding the icon if present)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"standard CSS height setting"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS style. e.g. {:color \"red\" :width \"50px\"}"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * I return the markup for an input box which will accept and validate times.
 * Parameters - refer input-time-args above
 */
re_com.input_time.input_time = (function re_com$input_time$input_time(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21744 = arguments.length;
var i__12082__auto___21745 = (0);
while(true){
if((i__12082__auto___21745 < len__12081__auto___21744)){
args__12088__auto__.push((arguments[i__12082__auto___21745]));

var G__21746 = (i__12082__auto___21745 + (1));
i__12082__auto___21745 = G__21746;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic = (function (p__21738){
var map__21739 = p__21738;
var map__21739__$1 = ((((!((map__21739 == null)))?((((map__21739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21739):map__21739);
var args = map__21739__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21739__$1,cljs.core.cst$kw$model);
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21739__$1,cljs.core.cst$kw$minimum,(0));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21739__$1,cljs.core.cst$kw$maximum,(2359));


var deref_model = re_com.util.deref_or_value(model);
var text_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.input_time.time__GT_text(deref_model));
var previous_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(deref_model);
return ((function (deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum){
return (function() { 
var G__21747__delegate = function (p__21741){
var map__21742 = p__21741;
var map__21742__$1 = ((((!((map__21742 == null)))?((((map__21742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21742):map__21742);
var args__$1 = map__21742__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$on_DASH_change);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$height);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$attr);
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_);
var maximum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21742__$1,cljs.core.cst$kw$maximum,(2359));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$width);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$class);
var show_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21742__$1,cljs.core.cst$kw$show_DASH_icon_QMARK_);
var minimum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21742__$1,cljs.core.cst$kw$minimum,(0));


var style__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(hide_border_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"none"], null):null),style], 0));
var new_val = re_com.util.deref_or_value(model__$1);
var new_val__$1 = (((new_val < minimum__$1))?minimum__$1:new_val);
var new_val__$2 = (((new_val__$1 > maximum__$1))?maximum__$1:new_val__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(previous_model),new_val__$2)){
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(new_val__$2));

cljs.core.reset_BANG_(previous_model,new_val__$2);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$class,"rc-input-time",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null),style__$1], 0)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,["time-entry ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null),style__$1], 0)),cljs.core.cst$kw$value,cljs.core.deref(text_model),cljs.core.cst$kw$disabled,re_com.util.deref_or_value(disabled_QMARK_),cljs.core.cst$kw$on_DASH_change,((function (style__$1,new_val,new_val__$1,new_val__$2,map__21742,map__21742__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum){
return (function (event){
re_com.input_time.on_new_keypress(event,text_model);

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__21742,map__21742__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum))
,cljs.core.cst$kw$on_DASH_blur,((function (style__$1,new_val,new_val__$1,new_val__$2,map__21742,map__21742__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum){
return (function (event){
re_com.input_time.on_defocus(text_model,minimum__$1,maximum__$1,on_change,cljs.core.deref(previous_model));

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__21742,map__21742__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum))
,cljs.core.cst$kw$on_DASH_key_DASH_up,((function (style__$1,new_val,new_val__$1,new_val__$2,map__21742,map__21742__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum){
return (function (event){
re_com.input_time.lose_focus_if_enter(event);

return null;
});})(style__$1,new_val,new_val__$1,new_val__$2,map__21742,map__21742__$1,args__$1,disabled_QMARK_,on_change,height,model__$1,attr,hide_border_QMARK_,maximum__$1,width,style,class$,show_icon_QMARK_,minimum__$1,deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum))
], null),attr], 0))], null),(cljs.core.truth_(show_icon_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$time_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$zmdi$zmdi_DASH_hc_DASH_fw_DASH_rc$zmdi_DASH_time,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$margin,"auto"], null)], null)], null)], null):null)], null)], null);
};
var G__21747 = function (var_args){
var p__21741 = null;
if (arguments.length > 0) {
var G__21748__i = 0, G__21748__a = new Array(arguments.length -  0);
while (G__21748__i < G__21748__a.length) {G__21748__a[G__21748__i] = arguments[G__21748__i + 0]; ++G__21748__i;}
  p__21741 = new cljs.core.IndexedSeq(G__21748__a,0,null);
} 
return G__21747__delegate.call(this,p__21741);};
G__21747.cljs$lang$maxFixedArity = 0;
G__21747.cljs$lang$applyTo = (function (arglist__21749){
var p__21741 = cljs.core.seq(arglist__21749);
return G__21747__delegate(p__21741);
});
G__21747.cljs$core$IFn$_invoke$arity$variadic = G__21747__delegate;
return G__21747;
})()
;
;})(deref_model,text_model,previous_model,map__21739,map__21739__$1,args,model,minimum,maximum))
});

re_com.input_time.input_time.cljs$lang$maxFixedArity = (0);

re_com.input_time.input_time.cljs$lang$applyTo = (function (seq21737){
return re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21737));
});

