// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_com.text');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.box');
goog.require('re_com.util');
goog.require('re_com.validate');
re_com.text.label_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"anything",cljs.core.cst$kw$description,"text or hiccup or whatever to display"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the label is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"additional CSS styles"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * Returns markup for a basic label
 */
re_com.text.label = (function re_com$text$label(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17519 = arguments.length;
var i__12082__auto___17520 = (0);
while(true){
if((i__12082__auto___17520 < len__12081__auto___17519)){
args__12088__auto__.push((arguments[i__12082__auto___17520]));

var G__17521 = (i__12082__auto___17520 + (1));
i__12082__auto___17520 = G__17521;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.text.label.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.text.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__17516){
var map__17517 = p__17516;
var map__17517__$1 = ((((!((map__17517 == null)))?((((map__17517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17517):map__17517);
var args = map__17517__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$label);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$on_DASH_click);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$width);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$attr);

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$width,width,cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,"display-inline-flex",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-label ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),style], 0))], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__17517,map__17517__$1,args,label,on_click,width,class$,style,attr){
return (function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

return null;
});})(map__17517,map__17517__$1,args,label,on_click,width,class$,style,attr))
], null):null),attr], 0)),label], null)], null);
});

re_com.text.label.cljs$lang$maxFixedArity = (0);

re_com.text.label.cljs$lang$applyTo = (function (seq17515){
return re_com.text.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17515));
});

re_com.text.title_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"anything",cljs.core.cst$kw$description,"title or hiccup or anything to display"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$level,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.title_level_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.title_levels_list,". If not provided then style the title using ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$underline_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the title is underlined"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin_DASH_top,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"0.4em",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS size for space above the title"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$margin_DASH_bottom,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"0.1em",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS size for space below the title"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed"], null)], null)], null);
/**
 * A title with four preset levels
 */
re_com.text.title = (function re_com$text$title(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17526 = arguments.length;
var i__12082__auto___17527 = (0);
while(true){
if((i__12082__auto___17527 < len__12081__auto___17526)){
args__12088__auto__.push((arguments[i__12082__auto___17527]));

var G__17528 = (i__12082__auto___17527 + (1));
i__12082__auto___17527 = G__17528;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.text.title.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.text.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__17523){
var map__17524 = p__17523;
var map__17524__$1 = ((((!((map__17524 == null)))?((((map__17524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17524):map__17524);
var args = map__17524__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,cljs.core.cst$kw$label);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,cljs.core.cst$kw$level);
var underline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,cljs.core.cst$kw$underline_QMARK_);
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17524__$1,cljs.core.cst$kw$margin_DASH_top,"0.6em");
var margin_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17524__$1,cljs.core.cst$kw$margin_DASH_bottom,"0.3em");
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,cljs.core.cst$kw$class);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,cljs.core.cst$kw$style);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,cljs.core.cst$kw$attr);

var preset_class = (((level == null))?"":cljs.core.name(level));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$class,preset_class,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-title display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(preset_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,margin_top], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$line_DASH_height,(1)], null),(cljs.core.truth_(underline_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,margin_bottom], null)),style], 0))], null),attr], 0)),label], null),(cljs.core.truth_(underline_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line,cljs.core.cst$kw$size,"1px",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,margin_bottom], null)], null):null)], null)], null);
});

re_com.text.title.cljs$lang$maxFixedArity = (0);

re_com.text.title.cljs$lang$applyTo = (function (seq17522){
return re_com.text.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17522));
});

/**
 * acts like [:p ]
 * 
 * Creates a paragraph of body text, expected to have a font-szie of 14px or 15px,
 * which should have limited width.
 * 
 * Why limited text width?  See http://baymard.com/blog/line-length-readability
 * 
 * The actual font-size is inherited.
 * 
 * At 14px, 450px will yield between 69 and 73 chars.
 * At 15px, 450px will yield about 66 to 70 chars.
 * So we're at the upper end of the prefered 50 to 75 char range.
 * 
 * If the first child is a map, it is interpreted as a map of styles / attributes.
 */
re_com.text.p = (function re_com$text$p(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17533 = arguments.length;
var i__12082__auto___17534 = (0);
while(true){
if((i__12082__auto___17534 < len__12081__auto___17533)){
args__12088__auto__.push((arguments[i__12082__auto___17534]));

var G__17535 = (i__12082__auto___17534 + (1));
i__12082__auto___17534 = G__17535;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.text.p.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.text.p.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var child1 = cljs.core.first(children);
var vec__17530 = ((cljs.core.map_QMARK_(child1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child1,cljs.core.rest(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,children], null));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17530,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17530,(1),null);
var m__$1 = re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flex,"none",cljs.core.cst$kw$width,"450px",cljs.core.cst$kw$min_DASH_width,"450px"], null)], null),m], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,m__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),children__$1)], null);
});

re_com.text.p.cljs$lang$maxFixedArity = (0);

re_com.text.p.cljs$lang$applyTo = (function (seq17529){
return re_com.text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17529));
});

