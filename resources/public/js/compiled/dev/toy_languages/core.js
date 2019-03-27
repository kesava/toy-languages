// Compiled by ClojureScript 1.9.946 {}
goog.provide('toy_languages.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('cljs.core');
goog.require('toy_languages.dream');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('re_frisk.core');
if(typeof toy_languages.core.app_state !== 'undefined'){
} else {
toy_languages.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
toy_languages.core.hook_browser_navigation_BANG_ = (function toy_languages$core$hook_browser_navigation_BANG_(){
var G__38900 = (new goog.History());
goog.events.listen(G__38900,goog.history.EventType.NAVIGATE,((function (G__38900){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__38900))
);

G__38900.setEnabled(true);

return G__38900;
});
toy_languages.core.app_routes = (function toy_languages$core$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35309__auto___38911 = (function (params__35310__auto__){
if(cljs.core.map_QMARK_.call(null,params__35310__auto__)){
var map__38901 = params__35310__auto__;
var map__38901__$1 = ((((!((map__38901 == null)))?((((map__38901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38901):map__38901);
return cljs.core.swap_BANG_.call(null,toy_languages.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35310__auto__)){
var vec__38903 = params__35310__auto__;
return cljs.core.swap_BANG_.call(null,toy_languages.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35309__auto___38911);


var action__35309__auto___38912 = (function (params__35310__auto__){
if(cljs.core.map_QMARK_.call(null,params__35310__auto__)){
var map__38906 = params__35310__auto__;
var map__38906__$1 = ((((!((map__38906 == null)))?((((map__38906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38906):map__38906);
return cljs.core.swap_BANG_.call(null,toy_languages.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35310__auto__)){
var vec__38908 = params__35310__auto__;
return cljs.core.swap_BANG_.call(null,toy_languages.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__35309__auto___38912);


return toy_languages.core.hook_browser_navigation_BANG_.call(null);
});
toy_languages.core.atom_input = (function toy_languages$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"likeQuora",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"rows","rows",850049680),(9),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38913_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__38913_SHARP_.target.value);
})], null)], null);
});
toy_languages.core.editor_vector = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.doall.call(null,cljs.core.map.call(null,(function (){
return [""].join('');
}),cljs.core.range.call(null,(10))))));
toy_languages.core.result_vector = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.doall.call(null,cljs.core.map.call(null,(function (){
return [""].join('');
}),cljs.core.range.call(null,(10))))));
toy_languages.core.editor_table = (function toy_languages$core$editor_table(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"thead"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Result"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__27270__auto__ = (function toy_languages$core$editor_table_$_iter__38915(s__38916){
return (new cljs.core.LazySeq(null,(function (){
var s__38916__$1 = s__38916;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38916__$1);
if(temp__4657__auto__){
var s__38916__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38916__$2)){
var c__27268__auto__ = cljs.core.chunk_first.call(null,s__38916__$2);
var size__27269__auto__ = cljs.core.count.call(null,c__27268__auto__);
var b__38918 = cljs.core.chunk_buffer.call(null,size__27269__auto__);
if((function (){var i__38917 = (0);
while(true){
if((i__38917 < size__27269__auto__)){
var i = cljs.core._nth.call(null,c__27268__auto__,i__38917);
cljs.core.chunk_append.call(null,b__38918,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content-editable","content-editable",636764967),"true",new cljs.core.Keyword(null,"class","class",-2030961996),"likeQuora code-col",new cljs.core.Keyword(null,"on-input","on-input",-267523366),((function (i__38917,i,c__27268__auto__,size__27269__auto__,b__38918,s__38916__$2,temp__4657__auto__){
return (function (p1__38914_SHARP_){
console.log(p1__38914_SHARP_.target.innerHTML);

cljs.core.swap_BANG_.call(null,toy_languages.core.editor_vector,cljs.core.assoc,i,p1__38914_SHARP_.target.innerHTML);

cljs.core.swap_BANG_.call(null,toy_languages.core.result_vector,cljs.core.assoc,i,toy_languages.dream.expr_eval.call(null,cljs.reader.read_string.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,toy_languages.core.editor_vector),i))));

return console.log(cljs.core.deref.call(null,toy_languages.core.result_vector));
});})(i__38917,i,c__27268__auto__,size__27269__auto__,b__38918,s__38916__$2,temp__4657__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"res-col"], null),cljs.core.get.call(null,cljs.core.deref.call(null,toy_languages.core.result_vector),i)], null)], null));

var G__38919 = (i__38917 + (1));
i__38917 = G__38919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38918),toy_languages$core$editor_table_$_iter__38915.call(null,cljs.core.chunk_rest.call(null,s__38916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38918),null);
}
} else {
var i = cljs.core.first.call(null,s__38916__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content-editable","content-editable",636764967),"true",new cljs.core.Keyword(null,"class","class",-2030961996),"likeQuora code-col",new cljs.core.Keyword(null,"on-input","on-input",-267523366),((function (i,s__38916__$2,temp__4657__auto__){
return (function (p1__38914_SHARP_){
console.log(p1__38914_SHARP_.target.innerHTML);

cljs.core.swap_BANG_.call(null,toy_languages.core.editor_vector,cljs.core.assoc,i,p1__38914_SHARP_.target.innerHTML);

cljs.core.swap_BANG_.call(null,toy_languages.core.result_vector,cljs.core.assoc,i,toy_languages.dream.expr_eval.call(null,cljs.reader.read_string.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,toy_languages.core.editor_vector),i))));

return console.log(cljs.core.deref.call(null,toy_languages.core.result_vector));
});})(i,s__38916__$2,temp__4657__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"res-col"], null),cljs.core.get.call(null,cljs.core.deref.call(null,toy_languages.core.result_vector),i)], null)], null),toy_languages$core$editor_table_$_iter__38915.call(null,cljs.core.rest.call(null,s__38916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27270__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,toy_languages.core.editor_vector))));
})()], null)], null);
});
toy_languages.core.home = (function toy_languages$core$home(ratom){
var val = reagent.core.atom.call(null,"()");
var result = reagent.core.atom.call(null,"??");
return ((function (val,result){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Dream Language Interpreter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"(From The Schematics of Computation by Vincent Manis)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [toy_languages.core.editor_table], null)], null)], null)], null);
});
;})(val,result))
});
toy_languages.core.about = (function toy_languages$core$about(ratom){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Hello world"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"home page"], null)], null);
});
if(typeof toy_languages.core.page !== 'undefined'){
} else {
toy_languages.core.page = (function (){var method_table__27419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27423__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"toy-languages.core","page"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27423__auto__,method_table__27419__auto__,prefer_table__27420__auto__,method_cache__27421__auto__,cached_hierarchy__27422__auto__));
})();
}
cljs.core._add_method.call(null,toy_languages.core.page,new cljs.core.Keyword(null,"home","home",-74557309),(function (){
return toy_languages.core.home;
}));
cljs.core._add_method.call(null,toy_languages.core.page,new cljs.core.Keyword(null,"about","about",1423892543),(function (){
return toy_languages.core.about;
}));
cljs.core._add_method.call(null,toy_languages.core.page,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
}));
toy_languages.core.current_page = (function toy_languages$core$current_page(ratom){
var page_key = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ratom));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [toy_languages.core.page.call(null,page_key),ratom], null);
});
toy_languages.core.dev_setup = (function toy_languages$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.println.call(null,"dev mode");

re_frisk.core.enable_frisk_BANG_.call(null);

return re_frisk.core.add_data.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),toy_languages.core.app_state);
} else {
return null;
}
});
toy_languages.core.reload = (function toy_languages$core$reload(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [toy_languages.core.current_page,toy_languages.core.app_state], null),document.getElementById("app"));
});
toy_languages.core.main = (function toy_languages$core$main(){
toy_languages.core.dev_setup.call(null);

toy_languages.core.app_routes.call(null);

return toy_languages.core.reload.call(null);
});
goog.exportSymbol('toy_languages.core.main', toy_languages.core.main);

//# sourceMappingURL=core.js.map?rel=1553721447766
