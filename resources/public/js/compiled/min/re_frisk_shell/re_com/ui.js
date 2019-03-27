// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk_shell.re_com.ui');
goog.require('cljs.core');
goog.require('cljs.core.constants');
re_frisk_shell.re_com.ui.small_button = (function re_frisk_shell$re_com$ui$small_button(var_args){
var G__22419 = arguments.length;
switch (G__22419) {
case 1:
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,label);
});

re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2 = (function (p__22420,label){
var map__22421 = p__22420;
var map__22421__$1 = ((((!((map__22421 == null)))?((((map__22421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22421):map__22421);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421__$1,cljs.core.cst$kw$on_DASH_click);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$class,"btn btn-primary btn-xs",cljs.core.cst$kw$on_DASH_click,on_click], null),label], null);
});

re_frisk_shell.re_com.ui.small_button.cljs$lang$maxFixedArity = 2;

re_frisk_shell.re_com.ui.big_button = (function re_frisk_shell$re_com$ui$big_button(style,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$class,"btn btn-primary btn-lg",cljs.core.cst$kw$style,style], null),label], null);
});
re_frisk_shell.re_com.ui.scroller = (function re_frisk_shell$re_com$ui$scroller(var_args){
var G__22425 = arguments.length;
switch (G__22425) {
case 1:
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$1 = (function (div){
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,div);
});

re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2 = (function (attr,div){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$overflow,"auto",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$flex,"1"], null),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(attr)], 0))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.cst$kw$style)], 0)),div], null);
});

re_frisk_shell.re_com.ui.scroller.cljs$lang$maxFixedArity = 2;

