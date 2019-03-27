// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id | atom",cljs.core.cst$kw$description,"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tabs,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of tabs | atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"tab -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (for each individual tab rather than the container)"], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21090 = arguments.length;
var i__12082__auto___21091 = (0);
while(true){
if((i__12082__auto___21091 < len__12081__auto___21090)){
args__12088__auto__.push((arguments[i__12082__auto___21091]));

var G__21092 = (i__12082__auto___21091 + (1));
i__12082__auto___21091 = G__21092;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21083){
var map__21084 = p__21083;
var map__21084__$1 = ((((!((map__21084 == null)))?((((map__21084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21084):map__21084);
var args = map__21084__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21084__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21084__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084__$1,cljs.core.cst$kw$style);

var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"rc-tabs nav nav-tabs noselect",cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),(function (){var iter__11729__auto__ = ((function (current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function re_com$tabs$iter__21086(s__21087){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (){
var s__21087__$1 = s__21087;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21087__$1);
if(temp__4657__auto__){
var s__21087__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21087__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__21087__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__21089 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__21088 = (0);
while(true){
if((i__21088 < size__11728__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__21088);
cljs.core.chunk_append(b__21089,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__21088,id,label,selected_QMARK_,t,c__11727__auto__,size__11728__auto__,b__21089,s__21087__$2,temp__4657__auto__,current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__21088,id,label,selected_QMARK_,t,c__11727__auto__,size__11728__auto__,b__21089,s__21087__$2,temp__4657__auto__,current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})());

var G__21093 = (i__21088 + (1));
i__21088 = G__21093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21089),re_com$tabs$iter__21086(cljs.core.chunk_rest(s__21087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21089),null);
}
} else {
var t = cljs.core.first(s__21087__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":null),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__21087__$2,temp__4657__auto__,current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__21087__$2,temp__4657__auto__,current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__21086(cljs.core.rest(s__21087__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style))
,null,null));
});})(current,tabs__$1,_,map__21084,map__21084__$1,args,model,tabs,on_change,id_fn,label_fn,style))
;
return iter__11729__auto__(tabs__$1);
})()], null);
});

re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq21082){
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21082));
});

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21103 = arguments.length;
var i__12082__auto___21104 = (0);
while(true){
if((i__12082__auto___21104 < len__12081__auto___21103)){
args__12088__auto__.push((arguments[i__12082__auto___21104]));

var G__21105 = (i__12082__auto___21104 + (1));
i__12082__auto___21104 = G__21105;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21096){
var map__21097 = p__21096;
var map__21097__$1 = ((((!((map__21097 == null)))?((((map__21097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21097):map__21097);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,cljs.core.cst$kw$id_DASH_fn);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,cljs.core.cst$kw$label_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,cljs.core.cst$kw$style);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21097__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-tabs noselect btn-group",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?"-vertical":null))].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none")], null),(function (){var iter__11729__auto__ = ((function (current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__21099(s__21100){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__21100__$1 = s__21100;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21100__$1);
if(temp__4657__auto__){
var s__21100__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21100__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__21100__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__21102 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__21101 = (0);
while(true){
if((i__21101 < size__11728__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__21101);
cljs.core.chunk_append(b__21102,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$class,["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__21101,id,label,selected_QMARK_,t,c__11727__auto__,size__11728__auto__,b__21102,s__21100__$2,temp__4657__auto__,current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__21101,id,label,selected_QMARK_,t,c__11727__auto__,size__11728__auto__,b__21102,s__21100__$2,temp__4657__auto__,current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})());

var G__21106 = (i__21101 + (1));
i__21101 = G__21106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21102),re_com$tabs$iter__21099(cljs.core.chunk_rest(s__21100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21102),null);
}
} else {
var t = cljs.core.first(s__21100__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$class,["btn btn-default ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?"active":null))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__21100__$2,temp__4657__auto__,current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__21100__$2,temp__4657__auto__,current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__21099(cljs.core.rest(s__21100__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__21097,map__21097__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__11729__auto__(tabs__$1);
})()], null);
});

re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq21095){
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21095));
});

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21111 = arguments.length;
var i__12082__auto___21112 = (0);
while(true){
if((i__12082__auto___21112 < len__12081__auto___21111)){
args__12088__auto__.push((arguments[i__12082__auto___21112]));

var G__21113 = (i__12082__auto___21112 + (1));
i__12082__auto___21112 = G__21113;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21108){
var map__21109 = p__21108;
var map__21109__$1 = ((((!((map__21109 == null)))?((((map__21109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21109):map__21109);
var args = map__21109__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21109__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21109__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,cljs.core.cst$kw$style);

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false], 0));
});

re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq21107){
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21107));
});

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21118 = arguments.length;
var i__12082__auto___21119 = (0);
while(true){
if((i__12082__auto___21119 < len__12081__auto___21118)){
args__12088__auto__.push((arguments[i__12082__auto___21119]));

var G__21120 = (i__12082__auto___21119 + (1));
i__12082__auto___21119 = G__21120;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21115){
var map__21116 = p__21115;
var map__21116__$1 = ((((!((map__21116 == null)))?((((map__21116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21116):map__21116);
var args = map__21116__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21116__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21116__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$style);

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true], 0));
});

re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq21114){
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21114));
});

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21130 = arguments.length;
var i__12082__auto___21131 = (0);
while(true){
if((i__12082__auto___21131 < len__12081__auto___21130)){
args__12088__auto__.push((arguments[i__12082__auto___21131]));

var G__21132 = (i__12082__auto___21131 + (1));
i__12082__auto___21131 = G__21132;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21123){
var map__21124 = p__21123;
var map__21124__$1 = ((((!((map__21124 == null)))?((((map__21124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21124):map__21124);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$id_DASH_fn);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$label_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$style);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs noselect nav nav-pills",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null))].join(''),cljs.core.cst$kw$style,re_com.box.flex_child_style("none"),cljs.core.cst$kw$role,"tabslist"], null),(function (){var iter__11729__auto__ = ((function (current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function re_com$tabs$iter__21126(s__21127){
return (new cljs.core.LazySeq(null,((function (current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (){
var s__21127__$1 = s__21127;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21127__$1);
if(temp__4657__auto__){
var s__21127__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21127__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__21127__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__21129 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__21128 = (0);
while(true){
if((i__21128 < size__11728__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__21128);
cljs.core.chunk_append(b__21129,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__21128,id,label,selected_QMARK_,t,c__11727__auto__,size__11728__auto__,b__21129,s__21127__$2,temp__4657__auto__,current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__21128,id,label,selected_QMARK_,t,c__11727__auto__,size__11728__auto__,b__21129,s__21127__$2,temp__4657__auto__,current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__21133 = (i__21128 + (1));
i__21128 = G__21133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),re_com$tabs$iter__21126(cljs.core.chunk_rest(s__21127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),null);
}
} else {
var t = cljs.core.first(s__21127__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((selected_QMARK_)?"active":""),cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__21127__$2,temp__4657__auto__,current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__21127__$2,temp__4657__auto__,current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__21126(cljs.core.rest(s__21127__$2)));
}
} else {
return null;
}
break;
}
});})(current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
,null,null));
});})(current,tabs__$1,_,map__21124,map__21124__$1,model,tabs,on_change,id_fn,label_fn,style,vertical_QMARK_))
;
return iter__11729__auto__(tabs__$1);
})()], null);
});

re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq21122){
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21122));
});

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21138 = arguments.length;
var i__12082__auto___21139 = (0);
while(true){
if((i__12082__auto___21139 < len__12081__auto___21138)){
args__12088__auto__.push((arguments[i__12082__auto___21139]));

var G__21140 = (i__12082__auto___21139 + (1));
i__12082__auto___21139 = G__21140;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21135){
var map__21136 = p__21135;
var map__21136__$1 = ((((!((map__21136 == null)))?((((map__21136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21136):map__21136);
var args = map__21136__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21136__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21136__$1,cljs.core.cst$kw$style);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21136__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false], 0));
});

re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq21134){
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21134));
});

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__12088__auto__ = [];
var len__12081__auto___21145 = arguments.length;
var i__12082__auto___21146 = (0);
while(true){
if((i__12082__auto___21146 < len__12081__auto___21145)){
args__12088__auto__.push((arguments[i__12082__auto___21146]));

var G__21147 = (i__12082__auto___21146 + (1));
i__12082__auto___21146 = G__21147;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__21142){
var map__21143 = p__21142;
var map__21143__$1 = ((((!((map__21143 == null)))?((((map__21143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21143):map__21143);
var args = map__21143__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143__$1,cljs.core.cst$kw$model);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143__$1,cljs.core.cst$kw$tabs);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143__$1,cljs.core.cst$kw$on_DASH_change);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21143__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21143__$1,cljs.core.cst$kw$style);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21143__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$style,style,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true], 0));
});

re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0);

re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq21141){
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21141));
});

