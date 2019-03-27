// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk.diff');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
re_frisk.diff.mv_keys = (function re_frisk$diff$mv_keys(coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core.keys(coll);
} else {
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__23558_SHARP_,p2__23557_SHARP_){
if((p2__23557_SHARP_ == null)){
return null;
} else {
return p1__23558_SHARP_;
}
}),coll);
}
});
re_frisk.diff.diff_coll = (function re_frisk$diff$diff_coll(a,b){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11729__auto__ = (function re_frisk$diff$diff_coll_$_iter__23559(s__23560){
return (new cljs.core.LazySeq(null,(function (){
var s__23560__$1 = s__23560;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__23560__$1);
if(temp__4657__auto__){
var s__23560__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23560__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__23560__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__23562 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__23561 = (0);
while(true){
if((i__23561 < size__11728__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__23561);
cljs.core.chunk_append(b__23562,(function (){var val_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,key);
var val_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__10909__auto__ = val_a;
if(cljs.core.truth_(and__10909__auto__)){
return val_b;
} else {
return and__10909__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(re_frisk.diff.diff.cljs$core$IFn$_invoke$arity$2 ? re_frisk.diff.diff.cljs$core$IFn$_invoke$arity$2(val_a,val_b) : re_frisk.diff.diff.call(null,val_a,val_b))], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted,val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})());

var G__23563 = (i__23561 + (1));
i__23561 = G__23563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23562),re_frisk$diff$diff_coll_$_iter__23559(cljs.core.chunk_rest(s__23560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23562),null);
}
} else {
var key = cljs.core.first(s__23560__$2);
return cljs.core.cons((function (){var val_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,key);
var val_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_a,val_b)){
return null;
} else {
if(cljs.core.truth_((function (){var and__10909__auto__ = val_a;
if(cljs.core.truth_(and__10909__auto__)){
return val_b;
} else {
return and__10909__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(re_frisk.diff.diff.cljs$core$IFn$_invoke$arity$2 ? re_frisk.diff.diff.cljs$core$IFn$_invoke$arity$2(val_a,val_b) : re_frisk.diff.diff.call(null,val_a,val_b))], null);
} else {
if(cljs.core.truth_(val_a)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$deleted,val_a], null)], null);
} else {
if(cljs.core.truth_(val_b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val_b], null);
} else {
return null;
}
}
}
}
})(),re_frisk$diff$diff_coll_$_iter__23559(cljs.core.rest(s__23560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(re_frisk.diff.mv_keys(a)),cljs.core.set(re_frisk.diff.mv_keys(b))));
})());
});
re_frisk.diff.diff_set = (function re_frisk$diff$diff_set(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$deleted,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b),cljs.core.cst$kw$added,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)], null);
});
re_frisk.diff.diff_rest = (function re_frisk$diff$diff_rest(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$before,a,cljs.core.cst$kw$after,b], null);
});
re_frisk.diff.diff = (function re_frisk$diff$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
if((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b))){
return re_frisk.diff.diff_coll(a,b);
} else {
if((cljs.core.vector_QMARK_(a)) && (cljs.core.vector_QMARK_(b))){
return re_frisk.diff.diff_coll(a,b);
} else {
if((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b))){
return re_frisk.diff.diff_set(a,b);
} else {
return re_frisk.diff.diff_rest(a,b);

}
}
}
}
});
