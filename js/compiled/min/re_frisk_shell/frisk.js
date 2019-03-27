// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk_shell.frisk');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('re_frisk_shell.filter_parser');
goog.require('re_frisk_shell.filter_matcher');
goog.require('re_com.core');
goog.require('re_frisk_shell.re_com.ui');
re_frisk_shell.frisk.debounce_pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frisk_shell.frisk.debounce = (function re_frisk_shell$frisk$debounce(key,delay,f){
var old_timeout = (function (){var G__22429 = cljs.core.deref(re_frisk_shell.frisk.debounce_pending);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__22429) : key.call(null,G__22429));
})();
var new_timeout = setTimeout(f,delay);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_shell.frisk.debounce_pending,cljs.core.assoc,key,new_timeout);

return clearTimeout(old_timeout);
});
re_frisk_shell.frisk.ExpandButton = (function re_frisk_shell$frisk$ExpandButton(p__22430){
var map__22431 = p__22430;
var map__22431__$1 = ((((!((map__22431 == null)))?((((map__22431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22431):map__22431);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,cljs.core.cst$kw$expanded_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22431__$1,cljs.core.cst$kw$emit_DASH_fn);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"20px"], null),cljs.core.cst$kw$on_DASH_click,((function (map__22431,map__22431__$1,expanded_QMARK_,path,emit_fn){
return (function (){
var G__22433 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.cst$kw$contract:cljs.core.cst$kw$expand);
var G__22434 = path;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__22433,G__22434) : emit_fn.call(null,G__22433,G__22434));
});})(map__22431,map__22431__$1,expanded_QMARK_,path,emit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"gray",cljs.core.cst$kw$color,"gray"], null)], null)], null)], null);
});
re_frisk_shell.frisk.styles = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$shell,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$backgroundColor,"#FAFAFA",cljs.core.cst$kw$fontFamily,"Consolas,Monaco,Courier New,monospace",cljs.core.cst$kw$fontSize,"12px",cljs.core.cst$kw$z_DASH_index,(9999)], null),cljs.core.cst$kw$strings,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#4Ebb4E"], null),cljs.core.cst$kw$keywords,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"purple"], null),cljs.core.cst$kw$numbers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null),cljs.core.cst$kw$nil,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),cljs.core.cst$kw$shell_DASH_visible_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"#4EE24E"], null)], null);
re_frisk_shell.frisk.ExpandAllButton = (function re_frisk_shell$frisk$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__22435 = cljs.core.cst$kw$expand_DASH_all;
var G__22436 = data;
return (emit_fn.cljs$core$IFn$_invoke$arity$2 ? emit_fn.cljs$core$IFn$_invoke$arity$2(G__22435,G__22436) : emit_fn.call(null,G__22435,G__22436));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding,"0px",cljs.core.cst$kw$borderTopLeftRadius,"2px",cljs.core.cst$kw$borderBottomLeftRadius,"2px",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$border,"1px solid darkgray",cljs.core.cst$kw$backgroundColor,"white"], null)], null),"Expand all"], null);
});
re_frisk_shell.frisk.CollapseAllButton = (function re_frisk_shell$frisk$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__22437 = cljs.core.cst$kw$collapse_DASH_all;
return (emit_fn.cljs$core$IFn$_invoke$arity$1 ? emit_fn.cljs$core$IFn$_invoke$arity$1(G__22437) : emit_fn.call(null,G__22437));
}),cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$borderBottomRightRadius,cljs.core.cst$kw$borderTop,cljs.core.cst$kw$cursor,cljs.core.cst$kw$borderBottom,cljs.core.cst$kw$borderTopRightRadius,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRight,cljs.core.cst$kw$borderLeft,cljs.core.cst$kw$backgroundColor],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","0px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
});
re_frisk_shell.frisk.edit_debounce_ms = (400);
re_frisk_shell.frisk.FilterEditBox = (function re_frisk_shell$frisk$FilterEditBox(emit_fn,filter){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$margin_DASH_left,(5)], null),cljs.core.cst$kw$value,filter,cljs.core.cst$kw$placeholder,"Type here to find keys...",cljs.core.cst$kw$on_DASH_change,(function (p1__22438_SHARP_){
var G__22439 = cljs.core.cst$kw$filter_DASH_change;
var G__22440 = p1__22438_SHARP_.target.value;
var G__22441 = re_frisk_shell.frisk.edit_debounce_ms;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22439,G__22440,G__22441) : emit_fn.call(null,G__22439,G__22440,G__22441));
})], null)], null);
});
re_frisk_shell.frisk.FilterReset = (function re_frisk_shell$frisk$FilterReset(emit_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,(5),cljs.core.cst$kw$width,(25)], null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__22442 = cljs.core.cst$kw$filter_DASH_change;
var G__22443 = "";
var G__22444 = (0);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22442,G__22443,G__22444) : emit_fn.call(null,G__22442,G__22443,G__22444));
})], null),"X"], null);
});
re_frisk_shell.frisk.node_clicked = (function re_frisk_shell$frisk$node_clicked(p__22445){
var map__22446 = p__22445;
var map__22446__$1 = ((((!((map__22446 == null)))?((((map__22446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22446):map__22446);
var all = map__22446__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$event);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$emit_DASH_fn);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$path);
event.stopPropagation();

var G__22448 = cljs.core.cst$kw$filter_DASH_change;
var G__22449 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var G__22450 = (0);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22448,G__22449,G__22450) : emit_fn.call(null,G__22448,G__22449,G__22450));
});
re_frisk_shell.frisk.NilText = (function re_frisk_shell$frisk$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$nil.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))], null);
});
re_frisk_shell.frisk.StringText = (function re_frisk_shell$frisk$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$strings.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
re_frisk_shell.frisk.KeywordText = (function re_frisk_shell$frisk$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$keywords.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null);
});
re_frisk_shell.frisk.NumberText = (function re_frisk_shell$frisk$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.cst$kw$numbers.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),data], null);
});
re_frisk_shell.frisk.is_prefix = (function re_frisk_shell$frisk$is_prefix(needle,haystack){
return ((cljs.core.count(needle) < cljs.core.count(haystack))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(haystack,(0),cljs.core.count(needle))));
});
re_frisk_shell.frisk.Node = (function re_frisk_shell$frisk$Node(p__22452){
var map__22453 = p__22452;
var map__22453__$1 = ((((!((map__22453 == null)))?((((map__22453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22453):map__22453);
var val = map__22453__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,cljs.core.cst$kw$path);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,cljs.core.cst$kw$node);
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,cljs.core.cst$kw$matching_DASH_paths);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_top,"5px"], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function (p1__22451_SHARP_){
return re_frisk_shell.frisk.node_clicked(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event,p1__22451_SHARP_,cljs.core.cst$kw$emit_DASH_fn,emit_fn,cljs.core.cst$kw$path,path], null));
});})(map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths))
,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(node)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"10px"], null):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matching_paths,path))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#fff9db"], null):null)], 0))], null),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),cljs.core.cst$kw$on_DASH_change,((function (map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function re_frisk_shell$frisk$Node_$_string_changed(e){
var G__22455 = cljs.core.cst$kw$changed;
var G__22456 = path;
var G__22457 = e.target.value;
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22455,G__22456,G__22457) : emit_fn.call(null,G__22455,G__22456,G__22457));
});})(map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$default_DASH_value,cljs.core.name(data),cljs.core.cst$kw$on_DASH_change,((function (map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function re_frisk_shell$frisk$Node_$_keyword_changed(e){
var G__22458 = cljs.core.cst$kw$changed;
var G__22459 = path;
var G__22460 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value);
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22458,G__22459,G__22460) : emit_fn.call(null,G__22458,G__22459,G__22460));
});})(map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeywordText,data], null)):((cljs.core.object_QMARK_(data))?"Object":((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$default_DASH_value,data,cljs.core.cst$kw$on_DASH_change,((function (map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function re_frisk_shell$frisk$Node_$_number_changed(e){
var G__22461 = cljs.core.cst$kw$changed;
var G__22462 = path;
var G__22463 = (function (){var G__22464 = e.target.value;
return Number(G__22464);
})();
return (emit_fn.cljs$core$IFn$_invoke$arity$3 ? emit_fn.cljs$core$IFn$_invoke$arity$3(G__22461,G__22462,G__22463) : emit_fn.call(null,G__22461,G__22462,G__22463));
});})(map__22453,map__22453__$1,val,data,path,emit_fn,swappable,node,matching_paths))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NumberText,data], null)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')
)))))], null)], null);
});
re_frisk_shell.frisk.is_expanded = (function re_frisk_shell$frisk$is_expanded(expanded_paths,expanded_matching_paths,path){
var or__10921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_paths,path);
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expanded_matching_paths,path);
}
});
re_frisk_shell.frisk.KeyValNode = (function re_frisk_shell$frisk$KeyValNode(p__22465){
var map__22466 = p__22465;
var map__22466__$1 = ((((!((map__22466 == null)))?((((map__22466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22466):map__22466);
var vec__22467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22466__$1,cljs.core.cst$kw$data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22467,(1),null);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22466__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22466__$1,cljs.core.cst$kw$expanded_DASH_paths);
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22466__$1,cljs.core.cst$kw$matching_DASH_paths);
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22466__$1,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22466__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22466__$1,cljs.core.cst$kw$swappable);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$node,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$data,k,cljs.core.cst$kw$emit_DASH_fn,emit_fn,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),cljs.core.cst$kw$matching_DASH_paths,matching_paths], null),cljs.core.cst$kw$data,v,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$matching_DASH_paths,matching_paths,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths,expanded_matching_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null);
});
re_frisk_shell.frisk.MapNode = (function re_frisk_shell$frisk$MapNode(p__22471){
var map__22472 = p__22471;
var map__22472__$1 = ((((!((map__22472 == null)))?((((map__22472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22472):map__22472);
var all = map__22472__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472__$1,cljs.core.cst$kw$expanded_DASH_paths);
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472__$1,cljs.core.cst$kw$matching_DASH_paths);
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472__$1,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472__$1,cljs.core.cst$kw$emit_DASH_fn);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22472__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = re_frisk_shell.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," {"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.keys(data)))," keys"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__22472,map__22472__$1,all,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeyValNode,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__22472,map__22472__$1,all,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.ListVecNode = (function re_frisk_shell$frisk$ListVecNode(p__22474){
var map__22475 = p__22474;
var map__22475__$1 = ((((!((map__22475 == null)))?((((map__22475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22475):map__22475);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$expanded_DASH_paths);
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$matching_DASH_paths);
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = re_frisk_shell.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?" [":" ("),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core.vector_QMARK_(data))?"]":")")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__22475,map__22475__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$matching_DASH_paths,matching_paths,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths,expanded_matching_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__22475,map__22475__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.SetNode = (function re_frisk_shell$frisk$SetNode(p__22477){
var map__22478 = p__22477;
var map__22478__$1 = ((((!((map__22478 == null)))?((((map__22478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22478):map__22478);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$data);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$path);
var expanded_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$expanded_DASH_paths);
var matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$matching_DASH_paths);
var expanded_matching_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths);
var emit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$emit_DASH_fn);
var swappable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$swappable);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22478__$1,cljs.core.cst$kw$node);
var expanded_QMARK_ = re_frisk_shell.frisk.is_expanded(expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,"0 1 auto"], null)], null),((cljs.core.empty_QMARK_(data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$expanded_QMARK_,expanded_QMARK_,cljs.core.cst$kw$path,path,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," #{",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expanded_QMARK_,map__22478,map__22478__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$data,x,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,x),cljs.core.cst$kw$expanded_DASH_paths,expanded_paths,cljs.core.cst$kw$matching_DASH_paths,matching_paths,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths,expanded_matching_paths,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
});})(expanded_QMARK_,map__22478,map__22478__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.DataFrisk = (function re_frisk_shell$frisk$DataFrisk(p__22480){
var map__22481 = p__22480;
var map__22481__$1 = ((((!((map__22481 == null)))?((((map__22481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22481):map__22481);
var all = map__22481__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22481__$1,cljs.core.cst$kw$data);
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.SetNode,all], null);
} else {
if((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ListVecNode,all], null);
} else {
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(all,cljs.core.cst$kw$data,cljs.core.deref(data))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,all], null);

}
}
}
}
});
re_frisk_shell.frisk.conj_to_set = (function re_frisk_shell$frisk$conj_to_set(coll,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__10921__auto__ = coll;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
re_frisk_shell.frisk.expand_all_paths = (function re_frisk_shell$frisk$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$node,root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(remaining)){
var vec__22484 = remaining;
var seq__22485 = cljs.core.seq(vec__22484);
var first__22486 = cljs.core.first(seq__22485);
var seq__22485__$1 = cljs.core.next(seq__22485);
var current = first__22486;
var rest = seq__22485__$1;
var current_node = (((function (){var G__22487 = cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current);
if(!((G__22487 == null))){
if(((G__22487.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__22487.cljs$core$IDeref$))){
return true;
} else {
if((!G__22487.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__22487);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__22487);
}
})())?cljs.core.deref(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current)):cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_(current_node)){
var G__22492 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__22484,seq__22485,first__22486,seq__22485__$1,current,rest,current_node){
return (function (p__22488){
var vec__22489 = p__22488;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22489,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),k),cljs.core.cst$kw$node,v], null);
});})(remaining,expanded_paths,vec__22484,seq__22485,first__22486,seq__22485__$1,current,rest,current_node))
,current_node));
var G__22493 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__22492;
expanded_paths = G__22493;
continue;
} else {
if((cljs.core.seq_QMARK_(current_node)) || (cljs.core.vector_QMARK_(current_node))){
var G__22494 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rest,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (remaining,expanded_paths,vec__22484,seq__22485,first__22486,seq__22485__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current),i),cljs.core.cst$kw$node,node], null);
});})(remaining,expanded_paths,vec__22484,seq__22485,first__22486,seq__22485__$1,current,rest,current_node))
,current_node));
var G__22495 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current));
remaining = G__22494;
expanded_paths = G__22495;
continue;
} else {
var G__22496 = rest;
var G__22497 = ((cljs.core.coll_QMARK_(current_node))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(expanded_paths,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__22496;
expanded_paths = G__22497;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
re_frisk_shell.frisk.apply_filter = (function re_frisk_shell$frisk$apply_filter(state,id){
var filter = re_frisk_shell.filter_parser.parse(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$raw_DASH_filter], null)));
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$filter], null),filter);
});
re_frisk_shell.frisk.emit_fn_factory = (function re_frisk_shell$frisk$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__22502__delegate = function (event,args){
var G__22498 = event;
var G__22498__$1 = (((G__22498 instanceof cljs.core.Keyword))?G__22498.fqn:null);
switch (G__22498__$1) {
case "expand":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),re_frisk_shell.frisk.conj_to_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "expand-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),re_frisk_shell.frisk.expand_all_paths(cljs.core.first(args)));

break;
case "contract":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0));

break;
case "collapse-all":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "filter-change":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,id,cljs.core.cst$kw$raw_DASH_filter], null),cljs.core.first(args));

return re_frisk_shell.frisk.debounce(cljs.core.cst$kw$filter_DASH_change,cljs.core.second(args),((function (G__22498,G__22498__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_frisk_shell.frisk.apply_filter,id);
});})(G__22498,G__22498__$1))
);

break;
case "changed":
var vec__22499 = args;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,(1),null);
if(cljs.core.seq(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_(swappable,value);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22498__$1)].join('')));

}
};
var G__22502 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__22504__i = 0, G__22504__a = new Array(arguments.length -  1);
while (G__22504__i < G__22504__a.length) {G__22504__a[G__22504__i] = arguments[G__22504__i + 1]; ++G__22504__i;}
  args = new cljs.core.IndexedSeq(G__22504__a,0,null);
} 
return G__22502__delegate.call(this,event,args);};
G__22502.cljs$lang$maxFixedArity = 1;
G__22502.cljs$lang$applyTo = (function (arglist__22505){
var event = cljs.core.first(arglist__22505);
var args = cljs.core.rest(arglist__22505);
return G__22502__delegate(event,args);
});
G__22502.cljs$core$IFn$_invoke$arity$variadic = G__22502__delegate;
return G__22502;
})()
;
});
re_frisk_shell.frisk.walk_paths = (function re_frisk_shell$frisk$walk_paths(var_args){
var G__22507 = arguments.length;
switch (G__22507) {
case 1:
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1 = (function (data){
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,data);
});

re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2 = (function (prefix,data){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((cljs.core.map_QMARK_(data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22508){
var vec__22509 = p__22508;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22509,(1),null);
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k),v);
}),data)):((cljs.core.set_QMARK_(data))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,v),v);
}),data)):(((cljs.core.seq_QMARK_(data)) || (cljs.core.vector_QMARK_(data)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,i),v);
}),data)):((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,data)))?re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2(prefix,cljs.core.deref(data)):cljs.core.PersistentHashSet.EMPTY
)))),prefix);
});

re_frisk_shell.frisk.walk_paths.cljs$lang$maxFixedArity = 2;

re_frisk_shell.frisk.matching_paths = (function re_frisk_shell$frisk$matching_paths(data,filter_SINGLEQUOTE_){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22514_SHARP_){
return re_frisk_shell.filter_matcher.match(filter_SINGLEQUOTE_,p1__22514_SHARP_);
}),re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1(data)));
});
re_frisk_shell.frisk.prefixes = (function re_frisk_shell$frisk$prefixes(path){
return cljs.core.set(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,path));
});
re_frisk_shell.frisk.expanded_matching_paths = (function re_frisk_shell$frisk$expanded_matching_paths(paths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frisk_shell.frisk.prefixes,paths));
});
re_frisk_shell.frisk.Root = (function re_frisk_shell$frisk$Root(data,id,state_atom){
var data_frisk = cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var swappable = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data)))?data:null);
var filter = (function (){var or__10921__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$filter], null));
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var matching = re_frisk_shell.frisk.matching_paths(data,filter);
var expanded_matching = re_frisk_shell.frisk.expanded_matching_paths(matching);
var emit_fn = re_frisk_shell.frisk.emit_fn_factory(state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,"#f3f3f3",cljs.core.cst$kw$color,"#444444"], null),cljs.core.cst$kw$size,"1",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"4px 2px",cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.CollapseAllButton,emit_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"2px",cljs.core.cst$kw$margin_DASH_left,"4px",cljs.core.cst$kw$background_DASH_color,"#fff9db"], null)], null),cljs.core.count(matching)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.FilterEditBox,emit_fn,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$raw_DASH_filter], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.FilterReset,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.scroller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$swappable,swappable,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$expanded_DASH_paths,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$expanded_DASH_paths], null)),cljs.core.cst$kw$matching_DASH_paths,matching,cljs.core.cst$kw$expanded_DASH_matching_DASH_paths,expanded_matching,cljs.core.cst$kw$emit_DASH_fn,emit_fn], null)], null)], null)], null)], null);
});
re_frisk_shell.frisk.expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22516_SHARP_,p2__22517_SHARP_){
return cljs.core.assoc_in(p1__22516_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__22517_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
re_frisk_shell.frisk.main_frisk = (function re_frisk_shell$frisk$main_frisk(re_frame_data,checkbox_sorted_val){
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.expand_by_default);
return ((function (state_atom){
return (function (_){
var db = cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame_data)));
var db_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__10909__auto__ = cljs.core.deref(checkbox_sorted_val);
if(cljs.core.truth_(and__10909__auto__)){
return cljs.core.map_QMARK_(db);
} else {
return and__10909__auto__;
}
})())?(function (){try{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),db);
}catch (e22518){var e = e22518;
cljs.core.reset_BANG_(checkbox_sorted_val,false);

return db;
}})():db);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,db_SINGLEQUOTE_,(0),state_atom], null);
});
;})(state_atom))
});
re_frisk_shell.frisk.handler_frisk = (function re_frisk_shell$frisk$handler_frisk(re_frame_data){
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.expand_by_default);
return ((function (state_atom){
return (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,cljs.core.deref(cljs.core.cst$kw$id_DASH_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame_data))),(0),state_atom], null);
});
;})(state_atom))
});
re_frisk_shell.frisk.event_frisk = (function re_frisk_shell$frisk$event_frisk(deb_data){
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.expand_by_default);
return ((function (state_atom){
return (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event_DASH_vector,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event_DASH_data,cljs.core.cst$kw$event], null)),cljs.core.cst$kw$app_DASH_db_DASH_diff,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event_DASH_data,cljs.core.cst$kw$app_DASH_db_DASH_diff], null))], null),(0),state_atom], null);
});
;})(state_atom))
});
