// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk.devtool');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frisk.drag');
goog.require('re_frame.core');
goog.require('re_frisk.debugger_page');
goog.require('cognitect.transit');
goog.require('re_frisk.data');
goog.require('re_frisk_shell.re_com.views');
goog.require('re_frisk_shell.frisk');
goog.require('re_frisk.style');
re_frisk.devtool.ua = window.navigator.userAgent;
re_frisk.devtool.ie_QMARK_ = (function (){var or__10921__auto__ = cljs.core.re_find(/MSIE /,re_frisk.devtool.ua);
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
var or__10921__auto____$1 = cljs.core.re_find(/Trident\//,re_frisk.devtool.ua);
if(cljs.core.truth_(or__10921__auto____$1)){
return or__10921__auto____$1;
} else {
return cljs.core.re_find(/Edge\//,re_frisk.devtool.ua);
}
}
})();
re_frisk.devtool.export_json = (function re_frisk$devtool$export_json(){
var temp__4655__auto__ = cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlerForForeign,(function (_,___$1){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (___$2){
return "ForeignType";
}),(function (___$2){
return "";
}));
})], null)),cljs.core.deref(cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data))));
if(cljs.core.truth_(temp__4655__auto__)){
var str = temp__4655__auto__;
return cljs.core.cst$kw$win.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)).saveAs((new Blob((new Array(str)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"application/json"], null))),"app-db.json");
} else {
return null;
}
});
re_frisk.devtool.json_on_change = (function re_frisk$devtool$json_on_change(event){
var rdr = (new FileReader());
rdr.onload = ((function (rdr){
return (function (p1__23534_SHARP_){
cljs.core.reset_BANG_(re_frisk.data.re_frame_events,cljs.core.PersistentVector.EMPTY);

var G__23535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_frisk_SLASH_update_DASH_db,cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json),p1__23534_SHARP_.target.result)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__23535) : re_frame.core.dispatch.call(null,G__23535));
});})(rdr))
;

return rdr.readAsText((event.target.files[(0)]));
});
re_frisk.devtool.reagent_debugger_shell = (function re_frisk$devtool$reagent_debugger_shell(re_frame_data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23536_SHARP_,p2__23537_SHARP_){
return cljs.core.assoc_in(p1__23536_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__23537_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((1)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,re_frisk.style.frisk_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(re_frame_data)], null))], null)], null);
});
;})(expand_by_default,state_atom))
});
re_frisk.devtool.on_window_unload = (function re_frisk$devtool$on_window_unload(){
reagent.dom.unmount_component_at_node(cljs.core.cst$kw$app.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_,true);
});
re_frisk.devtool.mount = (function re_frisk$devtool$mount(w,d){
var app = d.getElementById("app");
var re_frame_QMARK_ = cljs.core.cst$kw$app_DASH_db.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.re_frame_data));
var doc = document;
(w["onunload"] = re_frisk.devtool.on_window_unload);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.data.deb_data,cljs.core.assoc,cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$doc,d,cljs.core.cst$kw$win,w,cljs.core.cst$kw$app,app], 0));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$id,"json-file-field",cljs.core.cst$kw$on_DASH_change,re_frisk.devtool.json_on_change,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"100%"], null)], null),(cljs.core.truth_((function (){var and__10909__auto__ = re_frame_QMARK_;
if(cljs.core.truth_(and__10909__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$events_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$prefs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data))),false);
} else {
return and__10909__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.views.main,re_frisk.data.re_frame_data,re_frisk.data.re_frame_events,re_frisk.data.deb_data,d,((function (app,re_frame_QMARK_,doc){
return (function (){
return cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)).getElementById("json-file-field").click();
});})(app,re_frame_QMARK_,doc))
,re_frisk.devtool.export_json], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.reagent_debugger_shell,re_frisk.data.re_frame_data], null))], null)], null),app);
});
re_frisk.devtool.open_debugger_window = (function re_frisk$devtool$open_debugger_window(){
var map__23538 = cljs.core.cst$kw$prefs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data));
var map__23538__$1 = ((((!((map__23538 == null)))?((((map__23538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23538):map__23538);
var ext_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23538__$1,cljs.core.cst$kw$ext_height);
var ext_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23538__$1,cljs.core.cst$kw$ext_width);
var w = (function (){var G__23540 = "";
var G__23541 = "Debugger";
var G__23542 = ["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10921__auto__ = ext_width;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10921__auto__ = ext_height;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join('');
return window.open(G__23540,G__23541,G__23542);
})();
var d = w.document;
d.open();

d.write(re_frisk.debugger_page.html_doc);

(w["onload"] = ((function (map__23538,map__23538__$1,ext_height,ext_width,w,d){
return (function (){
return re_frisk.devtool.mount(w,d);
});})(map__23538,map__23538__$1,ext_height,ext_width,w,d))
);

return d.close();
});
re_frisk.devtool.visibility_button = (function re_frisk$devtool$visibility_button(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border,(0),cljs.core.cst$kw$backgroundColor,"transparent",cljs.core.cst$kw$width,"20px",cljs.core.cst$kw$height,"10px"], null),cljs.core.cst$kw$onClick,update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$viewBox,"0 0 100 100",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$transition,"all 0.2s ease",cljs.core.cst$kw$transform,(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$points,"0,0 0,100 100,50",cljs.core.cst$kw$stroke,"black"], null)], null)], null)], null);
});
re_frisk.devtool.re_frisk_panel = (function re_frisk$devtool$re_frisk_panel(var_args){
var args__12088__auto__ = [];
var len__12081__auto___23546 = arguments.length;
var i__12082__auto___23547 = (0);
while(true){
if((i__12082__auto___23547 < len__12081__auto___23546)){
args__12088__auto__.push((arguments[i__12082__auto___23547]));

var G__23548 = (i__12082__auto___23547 + (1));
i__12082__auto___23547 = G__23548;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_frisk.devtool.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_frisk.devtool.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23543_SHARP_,p2__23544_SHARP_){
return cljs.core.assoc_in(p1__23543_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,p2__23544_SHARP_,cljs.core.cst$kw$expanded_DASH_paths], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__23549__delegate = function (data__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data__$1], null))], null);
};
var G__23549 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__23550__i = 0, G__23550__a = new Array(arguments.length -  0);
while (G__23550__i < G__23550__a.length) {G__23550__a[G__23550__i] = arguments[G__23550__i + 0]; ++G__23550__i;}
  data__$1 = new cljs.core.IndexedSeq(G__23550__a,0,null);
} 
return G__23549__delegate.call(this,data__$1);};
G__23549.cljs$lang$maxFixedArity = 0;
G__23549.cljs$lang$applyTo = (function (arglist__23551){
var data__$1 = cljs.core.seq(arglist__23551);
return G__23549__delegate(data__$1);
});
G__23549.cljs$core$IFn$_invoke$arity$variadic = G__23549__delegate;
return G__23549;
})()
;
;})(expand_by_default,state_atom))
});

re_frisk.devtool.re_frisk_panel.cljs$lang$maxFixedArity = (0);

re_frisk.devtool.re_frisk_panel.cljs$lang$applyTo = (function (seq23545){
return re_frisk.devtool.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23545));
});

re_frisk.devtool.re_frisk_shell = (function re_frisk$devtool$re_frisk_shell(p__23552){
var map__23553 = p__23552;
var map__23553__$1 = ((((!((map__23553 == null)))?((((map__23553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23553):map__23553);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23553__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23553__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23553__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23553__$1,cljs.core.cst$kw$height);
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.style.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$resize,"both",cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$height,"200px"], null)], 0));
var height__$1 = (cljs.core.truth_((function (){var and__10909__auto__ = re_frisk.devtool.ie_QMARK_;
if(cljs.core.truth_(and__10909__auto__)){
return cljs.core.not(height);
} else {
return and__10909__auto__;
}
})())?(200):height);
var style__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,height__$1,cljs.core.cst$kw$max_DASH_height,height__$1,cljs.core.cst$kw$overflow,"auto"], null):null)], 0));
var style__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style__$1,(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$max_DASH_width,width,cljs.core.cst$kw$overflow,"auto"], null):null)], 0));
if(cljs.core.truth_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.drag.draggable,cljs.core.assoc,cljs.core.cst$kw$x,x);
} else {
}

if(cljs.core.truth_(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.drag.draggable,cljs.core.assoc,cljs.core.cst$kw$y,y);
} else {
}

return ((function (style,height__$1,style__$1,style__$2,map__23553,map__23553__$1,x,y,width,height){
return (function (_){
if(cljs.core.truth_(cljs.core.cst$kw$deb_DASH_win_DASH_closed_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.drag.draggable))),"px"].join(''),cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.drag.draggable))),"px"].join(''),cljs.core.cst$kw$z_DASH_index,(999)], null),(cljs.core.truth_((function (){var or__10921__auto__ = re_frisk.devtool.ie_QMARK_;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.drag.draggable)));
}
})())?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$right,"20px"], null):null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,re_frisk.style.re_frisk_button_style,cljs.core.cst$kw$on_DASH_mouse_DASH_down,re_frisk.drag.mouse_down_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.visibility_button,cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data))),((function (style,height__$1,style__$1,style__$2,map__23553,map__23553__$1,x,y,width,height){
return (function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_frisk,cljs.core.cst$kw$visible_QMARK_], null),cljs.core.not(cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data)))));
});})(style,height__$1,style__$1,style__$2,map__23553,map__23553__$1,x,y,width,height))
], null),"re-frisk"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,re_frisk.style.arrow_style,cljs.core.cst$kw$on_DASH_click,re_frisk.devtool.open_debugger_window], null),"\u2197"], null),(cljs.core.truth_(cljs.core.cst$kw$visible_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data_DASH_frisk.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.data.deb_data))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.re_frisk_panel,cljs.core.deref(re_frisk.data.re_frame_data)], null)], null):null)], null);
} else {
return null;
}
});
;})(style,height__$1,style__$1,style__$2,map__23553,map__23553__$1,x,y,width,height))
});
