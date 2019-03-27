// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__16574__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16575__i = 0, G__16575__a = new Array(arguments.length -  0);
while (G__16575__i < G__16575__a.length) {G__16575__a[G__16575__i] = arguments[G__16575__i + 0]; ++G__16575__i;}
  args = new cljs.core.IndexedSeq(G__16575__a,0,null);
} 
return G__16574__delegate.call(this,args);};
G__16574.cljs$lang$maxFixedArity = 0;
G__16574.cljs$lang$applyTo = (function (arglist__16576){
var args = cljs.core.seq(arglist__16576);
return G__16574__delegate(args);
});
G__16574.cljs$core$IFn$_invoke$arity$variadic = G__16574__delegate;
return G__16574;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__16577__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16578__i = 0, G__16578__a = new Array(arguments.length -  0);
while (G__16578__i < G__16578__a.length) {G__16578__a[G__16578__i] = arguments[G__16578__i + 0]; ++G__16578__i;}
  args = new cljs.core.IndexedSeq(G__16578__a,0,null);
} 
return G__16577__delegate.call(this,args);};
G__16577.cljs$lang$maxFixedArity = 0;
G__16577.cljs$lang$applyTo = (function (arglist__16579){
var args = cljs.core.seq(arglist__16579);
return G__16577__delegate(args);
});
G__16577.cljs$core$IFn$_invoke$arity$variadic = G__16577__delegate;
return G__16577;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
