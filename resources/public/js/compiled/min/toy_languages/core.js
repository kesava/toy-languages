// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('toy_languages.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
toy_languages.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
toy_languages.core.hook_browser_navigation_BANG_ = (function toy_languages$core$hook_browser_navigation_BANG_(){
var G__23792 = (new goog.History());
var G__23793_23796 = G__23792;
var G__23794_23797 = goog.history.EventType.NAVIGATE;
var G__23795_23798 = ((function (G__23793_23796,G__23794_23797,G__23792){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__23793_23796,G__23794_23797,G__23792))
;
goog.events.listen(G__23793_23796,G__23794_23797,G__23795_23798);

G__23792.setEnabled(true);

return G__23792;
});
toy_languages.core.app_routes = (function toy_languages$core$app_routes(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__23637__auto___23809 = (function (params__23638__auto__){
if(cljs.core.map_QMARK_(params__23638__auto__)){
var map__23799 = params__23638__auto__;
var map__23799__$1 = ((((!((map__23799 == null)))?((((map__23799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23799):map__23799);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__23638__auto__)){
var vec__23801 = params__23638__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__23637__auto___23809);


var action__23637__auto___23810 = (function (params__23638__auto__){
if(cljs.core.map_QMARK_(params__23638__auto__)){
var map__23804 = params__23638__auto__;
var map__23804__$1 = ((((!((map__23804 == null)))?((((map__23804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23804):map__23804);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
if(cljs.core.vector_QMARK_(params__23638__auto__)){
var vec__23806 = params__23638__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$about);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__23637__auto___23810);


return toy_languages.core.hook_browser_navigation_BANG_();
});
toy_languages.core.atom_input = (function toy_languages$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$class,"likeQuora",cljs.core.cst$kw$value,cljs.core.deref(value),cljs.core.cst$kw$rows,(9),cljs.core.cst$kw$cols,(50),cljs.core.cst$kw$on_DASH_change,(function (p1__23811_SHARP_){
return cljs.core.reset_BANG_(value,p1__23811_SHARP_.target.value);
})], null)], null);
});
toy_languages.core.editor_vector = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
return [""].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))))));
toy_languages.core.result_vector = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){
return [""].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))))));
toy_languages.core.editor_table = (function toy_languages$core$editor_table(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"thead"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Result"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__11729__auto__ = (function toy_languages$core$editor_table_$_iter__23813(s__23814){
return (new cljs.core.LazySeq(null,(function (){
var s__23814__$1 = s__23814;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23814__$1);
if(temp__4657__auto__){
var s__23814__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23814__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__23814__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__23816 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__23815 = (0);
while(true){
if((i__23815 < size__11728__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__23815);
cljs.core.chunk_append(b__23816,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content_DASH_editable,"true",cljs.core.cst$kw$class,"likeQuora code-col",cljs.core.cst$kw$on_DASH_input,((function (i__23815,i,c__11727__auto__,size__11728__auto__,b__23816,s__23814__$2,temp__4657__auto__){
return (function (p1__23812_SHARP_){
var G__23817_23821 = p1__23812_SHARP_.target.innerHTML;
console.log(G__23817_23821);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.editor_vector,cljs.core.assoc,i,p1__23812_SHARP_.target.innerHTML);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.result_vector,cljs.core.assoc,i,toy_languages.dream.expr_eval(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(toy_languages.core.editor_vector),i))));

var G__23818 = cljs.core.deref(toy_languages.core.result_vector);
return console.log(G__23818);
});})(i__23815,i,c__11727__auto__,size__11728__auto__,b__23816,s__23814__$2,temp__4657__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"res-col"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(toy_languages.core.result_vector),i)], null)], null));

var G__23822 = (i__23815 + (1));
i__23815 = G__23822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23816),toy_languages$core$editor_table_$_iter__23813(cljs.core.chunk_rest(s__23814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23816),null);
}
} else {
var i = cljs.core.first(s__23814__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$content_DASH_editable,"true",cljs.core.cst$kw$class,"likeQuora code-col",cljs.core.cst$kw$on_DASH_input,((function (i,s__23814__$2,temp__4657__auto__){
return (function (p1__23812_SHARP_){
var G__23819_23823 = p1__23812_SHARP_.target.innerHTML;
console.log(G__23819_23823);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.editor_vector,cljs.core.assoc,i,p1__23812_SHARP_.target.innerHTML);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.core.result_vector,cljs.core.assoc,i,toy_languages.dream.expr_eval(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(toy_languages.core.editor_vector),i))));

var G__23820 = cljs.core.deref(toy_languages.core.result_vector);
return console.log(G__23820);
});})(i,s__23814__$2,temp__4657__auto__))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"res-col"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(toy_languages.core.result_vector),i)], null)], null),toy_languages$core$editor_table_$_iter__23813(cljs.core.rest(s__23814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(toy_languages.core.editor_vector))));
})()], null)], null);
});
toy_languages.core.home = (function toy_languages$core$home(ratom){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("()");
var result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("??");
return ((function (val,result){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Dream Language Interpreter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h6,"(From The Schematics of Computation by Vincent Manis)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [toy_languages.core.editor_table], null)], null)], null)], null);
});
;})(val,result))
});
toy_languages.core.about = (function toy_languages$core$about(ratom){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"About Page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Hello world"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),"home page"], null)], null);
});
if(typeof toy_languages.core.page !== 'undefined'){
} else {
toy_languages.core.page = (function (){var method_table__11878__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11879__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11880__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11881__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11882__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("toy-languages.core","page"),cljs.core.identity,cljs.core.cst$kw$default,hierarchy__11882__auto__,method_table__11878__auto__,prefer_table__11879__auto__,method_cache__11880__auto__,cached_hierarchy__11881__auto__));
})();
}
toy_languages.core.page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$home,(function (){
return toy_languages.core.home;
}));
toy_languages.core.page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$about,(function (){
return toy_languages.core.about;
}));
toy_languages.core.page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);
});
}));
toy_languages.core.current_page = (function toy_languages$core$current_page(ratom){
var page_key = cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(toy_languages.core.page.cljs$core$IFn$_invoke$arity$1 ? toy_languages.core.page.cljs$core$IFn$_invoke$arity$1(page_key) : toy_languages.core.page.call(null,page_key)),ratom], null);
});
toy_languages.core.dev_setup = (function toy_languages$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));

re_frisk.core.enable_frisk_BANG_();

return re_frisk.core.add_data(cljs.core.cst$kw$app_DASH_state,toy_languages.core.app_state);
} else {
return null;
}
});
toy_languages.core.reload = (function toy_languages$core$reload(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [toy_languages.core.current_page,toy_languages.core.app_state], null),document.getElementById("app"));
});
toy_languages.core.main = (function toy_languages$core$main(){
toy_languages.core.dev_setup();

toy_languages.core.app_routes();

return toy_languages.core.reload();
});
goog.exportSymbol('toy_languages.core.main', toy_languages.core.main);
