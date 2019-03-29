// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36163 = arguments.length;
var i__27634__auto___36164 = (0);
while(true){
if((i__27634__auto___36164 < len__27633__auto___36163)){
args__27640__auto__.push((arguments[i__27634__auto___36164]));

var G__36165 = (i__27634__auto___36164 + (1));
i__27634__auto___36164 = G__36165;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36162){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36162));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36167 = arguments.length;
var i__27634__auto___36168 = (0);
while(true){
if((i__27634__auto___36168 < len__27633__auto___36167)){
args__27640__auto__.push((arguments[i__27634__auto___36168]));

var G__36169 = (i__27634__auto___36168 + (1));
i__27634__auto___36168 = G__36169;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq36166){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36166));
});

var g_QMARK__36170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_36171 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36170){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__36170))
,null));
var mkg_36172 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36170,g_36171){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__36170,g_36171))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__36170,g_36171,mkg_36172){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36170).call(null,x);
});})(g_QMARK__36170,g_36171,mkg_36172))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__36170,g_36171,mkg_36172){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_36172).call(null,gfn);
});})(g_QMARK__36170,g_36171,mkg_36172))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__36170,g_36171,mkg_36172){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_36171).call(null,generator);
});})(g_QMARK__36170,g_36171,mkg_36172))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28788__auto___36192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__28788__auto___36192){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36193 = arguments.length;
var i__27634__auto___36194 = (0);
while(true){
if((i__27634__auto___36194 < len__27633__auto___36193)){
args__27640__auto__.push((arguments[i__27634__auto___36194]));

var G__36195 = (i__27634__auto___36194 + (1));
i__27634__auto___36194 = G__36195;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36192))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36192){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36192),args);
});})(g__28788__auto___36192))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__28788__auto___36192){
return (function (seq36173){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36173));
});})(g__28788__auto___36192))
;


var g__28788__auto___36196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__28788__auto___36196){
return (function cljs$spec$gen$alpha$list(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36197 = arguments.length;
var i__27634__auto___36198 = (0);
while(true){
if((i__27634__auto___36198 < len__27633__auto___36197)){
args__27640__auto__.push((arguments[i__27634__auto___36198]));

var G__36199 = (i__27634__auto___36198 + (1));
i__27634__auto___36198 = G__36199;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36196))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36196){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36196),args);
});})(g__28788__auto___36196))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__28788__auto___36196){
return (function (seq36174){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36174));
});})(g__28788__auto___36196))
;


var g__28788__auto___36200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__28788__auto___36200){
return (function cljs$spec$gen$alpha$map(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36201 = arguments.length;
var i__27634__auto___36202 = (0);
while(true){
if((i__27634__auto___36202 < len__27633__auto___36201)){
args__27640__auto__.push((arguments[i__27634__auto___36202]));

var G__36203 = (i__27634__auto___36202 + (1));
i__27634__auto___36202 = G__36203;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36200))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36200){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36200),args);
});})(g__28788__auto___36200))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__28788__auto___36200){
return (function (seq36175){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36175));
});})(g__28788__auto___36200))
;


var g__28788__auto___36204 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__28788__auto___36204){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36205 = arguments.length;
var i__27634__auto___36206 = (0);
while(true){
if((i__27634__auto___36206 < len__27633__auto___36205)){
args__27640__auto__.push((arguments[i__27634__auto___36206]));

var G__36207 = (i__27634__auto___36206 + (1));
i__27634__auto___36206 = G__36207;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36204))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36204){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36204),args);
});})(g__28788__auto___36204))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__28788__auto___36204){
return (function (seq36176){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36176));
});})(g__28788__auto___36204))
;


var g__28788__auto___36208 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__28788__auto___36208){
return (function cljs$spec$gen$alpha$set(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36209 = arguments.length;
var i__27634__auto___36210 = (0);
while(true){
if((i__27634__auto___36210 < len__27633__auto___36209)){
args__27640__auto__.push((arguments[i__27634__auto___36210]));

var G__36211 = (i__27634__auto___36210 + (1));
i__27634__auto___36210 = G__36211;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36208))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36208){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36208),args);
});})(g__28788__auto___36208))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__28788__auto___36208){
return (function (seq36177){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36177));
});})(g__28788__auto___36208))
;


var g__28788__auto___36212 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__28788__auto___36212){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36213 = arguments.length;
var i__27634__auto___36214 = (0);
while(true){
if((i__27634__auto___36214 < len__27633__auto___36213)){
args__27640__auto__.push((arguments[i__27634__auto___36214]));

var G__36215 = (i__27634__auto___36214 + (1));
i__27634__auto___36214 = G__36215;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36212))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36212){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36212),args);
});})(g__28788__auto___36212))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__28788__auto___36212){
return (function (seq36178){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36178));
});})(g__28788__auto___36212))
;


var g__28788__auto___36216 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__28788__auto___36216){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36217 = arguments.length;
var i__27634__auto___36218 = (0);
while(true){
if((i__27634__auto___36218 < len__27633__auto___36217)){
args__27640__auto__.push((arguments[i__27634__auto___36218]));

var G__36219 = (i__27634__auto___36218 + (1));
i__27634__auto___36218 = G__36219;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36216))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36216){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36216),args);
});})(g__28788__auto___36216))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__28788__auto___36216){
return (function (seq36179){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36179));
});})(g__28788__auto___36216))
;


var g__28788__auto___36220 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__28788__auto___36220){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36221 = arguments.length;
var i__27634__auto___36222 = (0);
while(true){
if((i__27634__auto___36222 < len__27633__auto___36221)){
args__27640__auto__.push((arguments[i__27634__auto___36222]));

var G__36223 = (i__27634__auto___36222 + (1));
i__27634__auto___36222 = G__36223;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36220))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36220){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36220),args);
});})(g__28788__auto___36220))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__28788__auto___36220){
return (function (seq36180){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36180));
});})(g__28788__auto___36220))
;


var g__28788__auto___36224 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__28788__auto___36224){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36225 = arguments.length;
var i__27634__auto___36226 = (0);
while(true){
if((i__27634__auto___36226 < len__27633__auto___36225)){
args__27640__auto__.push((arguments[i__27634__auto___36226]));

var G__36227 = (i__27634__auto___36226 + (1));
i__27634__auto___36226 = G__36227;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36224))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36224){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36224),args);
});})(g__28788__auto___36224))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__28788__auto___36224){
return (function (seq36181){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36181));
});})(g__28788__auto___36224))
;


var g__28788__auto___36228 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__28788__auto___36228){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36229 = arguments.length;
var i__27634__auto___36230 = (0);
while(true){
if((i__27634__auto___36230 < len__27633__auto___36229)){
args__27640__auto__.push((arguments[i__27634__auto___36230]));

var G__36231 = (i__27634__auto___36230 + (1));
i__27634__auto___36230 = G__36231;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36228))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36228){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36228),args);
});})(g__28788__auto___36228))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__28788__auto___36228){
return (function (seq36182){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36182));
});})(g__28788__auto___36228))
;


var g__28788__auto___36232 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__28788__auto___36232){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36233 = arguments.length;
var i__27634__auto___36234 = (0);
while(true){
if((i__27634__auto___36234 < len__27633__auto___36233)){
args__27640__auto__.push((arguments[i__27634__auto___36234]));

var G__36235 = (i__27634__auto___36234 + (1));
i__27634__auto___36234 = G__36235;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36232))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36232){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36232),args);
});})(g__28788__auto___36232))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__28788__auto___36232){
return (function (seq36183){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36183));
});})(g__28788__auto___36232))
;


var g__28788__auto___36236 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__28788__auto___36236){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36237 = arguments.length;
var i__27634__auto___36238 = (0);
while(true){
if((i__27634__auto___36238 < len__27633__auto___36237)){
args__27640__auto__.push((arguments[i__27634__auto___36238]));

var G__36239 = (i__27634__auto___36238 + (1));
i__27634__auto___36238 = G__36239;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36236))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36236){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36236),args);
});})(g__28788__auto___36236))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__28788__auto___36236){
return (function (seq36184){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36184));
});})(g__28788__auto___36236))
;


var g__28788__auto___36240 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__28788__auto___36240){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36241 = arguments.length;
var i__27634__auto___36242 = (0);
while(true){
if((i__27634__auto___36242 < len__27633__auto___36241)){
args__27640__auto__.push((arguments[i__27634__auto___36242]));

var G__36243 = (i__27634__auto___36242 + (1));
i__27634__auto___36242 = G__36243;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36240))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36240){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36240),args);
});})(g__28788__auto___36240))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__28788__auto___36240){
return (function (seq36185){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36185));
});})(g__28788__auto___36240))
;


var g__28788__auto___36244 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__28788__auto___36244){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36245 = arguments.length;
var i__27634__auto___36246 = (0);
while(true){
if((i__27634__auto___36246 < len__27633__auto___36245)){
args__27640__auto__.push((arguments[i__27634__auto___36246]));

var G__36247 = (i__27634__auto___36246 + (1));
i__27634__auto___36246 = G__36247;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36244))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36244){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36244),args);
});})(g__28788__auto___36244))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__28788__auto___36244){
return (function (seq36186){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36186));
});})(g__28788__auto___36244))
;


var g__28788__auto___36248 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__28788__auto___36248){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36249 = arguments.length;
var i__27634__auto___36250 = (0);
while(true){
if((i__27634__auto___36250 < len__27633__auto___36249)){
args__27640__auto__.push((arguments[i__27634__auto___36250]));

var G__36251 = (i__27634__auto___36250 + (1));
i__27634__auto___36250 = G__36251;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36248))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36248),args);
});})(g__28788__auto___36248))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__28788__auto___36248){
return (function (seq36187){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36187));
});})(g__28788__auto___36248))
;


var g__28788__auto___36252 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__28788__auto___36252){
return (function cljs$spec$gen$alpha$return(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36253 = arguments.length;
var i__27634__auto___36254 = (0);
while(true){
if((i__27634__auto___36254 < len__27633__auto___36253)){
args__27640__auto__.push((arguments[i__27634__auto___36254]));

var G__36255 = (i__27634__auto___36254 + (1));
i__27634__auto___36254 = G__36255;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36252))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36252){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36252),args);
});})(g__28788__auto___36252))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__28788__auto___36252){
return (function (seq36188){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36188));
});})(g__28788__auto___36252))
;


var g__28788__auto___36256 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__28788__auto___36256){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36257 = arguments.length;
var i__27634__auto___36258 = (0);
while(true){
if((i__27634__auto___36258 < len__27633__auto___36257)){
args__27640__auto__.push((arguments[i__27634__auto___36258]));

var G__36259 = (i__27634__auto___36258 + (1));
i__27634__auto___36258 = G__36259;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36256))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36256){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36256),args);
});})(g__28788__auto___36256))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28788__auto___36256){
return (function (seq36189){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36189));
});})(g__28788__auto___36256))
;


var g__28788__auto___36260 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__28788__auto___36260){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36261 = arguments.length;
var i__27634__auto___36262 = (0);
while(true){
if((i__27634__auto___36262 < len__27633__auto___36261)){
args__27640__auto__.push((arguments[i__27634__auto___36262]));

var G__36263 = (i__27634__auto___36262 + (1));
i__27634__auto___36262 = G__36263;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36260))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36260){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36260),args);
});})(g__28788__auto___36260))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__28788__auto___36260){
return (function (seq36190){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36190));
});})(g__28788__auto___36260))
;


var g__28788__auto___36264 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__28788__auto___36264){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36265 = arguments.length;
var i__27634__auto___36266 = (0);
while(true){
if((i__27634__auto___36266 < len__27633__auto___36265)){
args__27640__auto__.push((arguments[i__27634__auto___36266]));

var G__36267 = (i__27634__auto___36266 + (1));
i__27634__auto___36266 = G__36267;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28788__auto___36264))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28788__auto___36264){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28788__auto___36264),args);
});})(g__28788__auto___36264))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__28788__auto___36264){
return (function (seq36191){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36191));
});})(g__28788__auto___36264))
;

var g__28801__auto___36289 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__28801__auto___36289){
return (function cljs$spec$gen$alpha$any(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36290 = arguments.length;
var i__27634__auto___36291 = (0);
while(true){
if((i__27634__auto___36291 < len__27633__auto___36290)){
args__27640__auto__.push((arguments[i__27634__auto___36291]));

var G__36292 = (i__27634__auto___36291 + (1));
i__27634__auto___36291 = G__36292;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36289))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36289){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36289);
});})(g__28801__auto___36289))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__28801__auto___36289){
return (function (seq36268){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36268));
});})(g__28801__auto___36289))
;


var g__28801__auto___36293 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__28801__auto___36293){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36294 = arguments.length;
var i__27634__auto___36295 = (0);
while(true){
if((i__27634__auto___36295 < len__27633__auto___36294)){
args__27640__auto__.push((arguments[i__27634__auto___36295]));

var G__36296 = (i__27634__auto___36295 + (1));
i__27634__auto___36295 = G__36296;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36293))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36293){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36293);
});})(g__28801__auto___36293))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__28801__auto___36293){
return (function (seq36269){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36269));
});})(g__28801__auto___36293))
;


var g__28801__auto___36297 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__28801__auto___36297){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36298 = arguments.length;
var i__27634__auto___36299 = (0);
while(true){
if((i__27634__auto___36299 < len__27633__auto___36298)){
args__27640__auto__.push((arguments[i__27634__auto___36299]));

var G__36300 = (i__27634__auto___36299 + (1));
i__27634__auto___36299 = G__36300;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36297))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36297){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36297);
});})(g__28801__auto___36297))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__28801__auto___36297){
return (function (seq36270){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36270));
});})(g__28801__auto___36297))
;


var g__28801__auto___36301 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__28801__auto___36301){
return (function cljs$spec$gen$alpha$char(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36302 = arguments.length;
var i__27634__auto___36303 = (0);
while(true){
if((i__27634__auto___36303 < len__27633__auto___36302)){
args__27640__auto__.push((arguments[i__27634__auto___36303]));

var G__36304 = (i__27634__auto___36303 + (1));
i__27634__auto___36303 = G__36304;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36301))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36301){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36301);
});})(g__28801__auto___36301))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__28801__auto___36301){
return (function (seq36271){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36271));
});})(g__28801__auto___36301))
;


var g__28801__auto___36305 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__28801__auto___36305){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36306 = arguments.length;
var i__27634__auto___36307 = (0);
while(true){
if((i__27634__auto___36307 < len__27633__auto___36306)){
args__27640__auto__.push((arguments[i__27634__auto___36307]));

var G__36308 = (i__27634__auto___36307 + (1));
i__27634__auto___36307 = G__36308;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36305))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36305){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36305);
});})(g__28801__auto___36305))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__28801__auto___36305){
return (function (seq36272){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36272));
});})(g__28801__auto___36305))
;


var g__28801__auto___36309 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__28801__auto___36309){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36310 = arguments.length;
var i__27634__auto___36311 = (0);
while(true){
if((i__27634__auto___36311 < len__27633__auto___36310)){
args__27640__auto__.push((arguments[i__27634__auto___36311]));

var G__36312 = (i__27634__auto___36311 + (1));
i__27634__auto___36311 = G__36312;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36309))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36309){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36309);
});})(g__28801__auto___36309))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__28801__auto___36309){
return (function (seq36273){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36273));
});})(g__28801__auto___36309))
;


var g__28801__auto___36313 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__28801__auto___36313){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36314 = arguments.length;
var i__27634__auto___36315 = (0);
while(true){
if((i__27634__auto___36315 < len__27633__auto___36314)){
args__27640__auto__.push((arguments[i__27634__auto___36315]));

var G__36316 = (i__27634__auto___36315 + (1));
i__27634__auto___36315 = G__36316;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36313))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36313){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36313);
});})(g__28801__auto___36313))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__28801__auto___36313){
return (function (seq36274){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36274));
});})(g__28801__auto___36313))
;


var g__28801__auto___36317 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__28801__auto___36317){
return (function cljs$spec$gen$alpha$double(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36318 = arguments.length;
var i__27634__auto___36319 = (0);
while(true){
if((i__27634__auto___36319 < len__27633__auto___36318)){
args__27640__auto__.push((arguments[i__27634__auto___36319]));

var G__36320 = (i__27634__auto___36319 + (1));
i__27634__auto___36319 = G__36320;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36317))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36317){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36317);
});})(g__28801__auto___36317))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__28801__auto___36317){
return (function (seq36275){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36275));
});})(g__28801__auto___36317))
;


var g__28801__auto___36321 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__28801__auto___36321){
return (function cljs$spec$gen$alpha$int(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36322 = arguments.length;
var i__27634__auto___36323 = (0);
while(true){
if((i__27634__auto___36323 < len__27633__auto___36322)){
args__27640__auto__.push((arguments[i__27634__auto___36323]));

var G__36324 = (i__27634__auto___36323 + (1));
i__27634__auto___36323 = G__36324;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36321))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36321){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36321);
});})(g__28801__auto___36321))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__28801__auto___36321){
return (function (seq36276){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36276));
});})(g__28801__auto___36321))
;


var g__28801__auto___36325 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__28801__auto___36325){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36326 = arguments.length;
var i__27634__auto___36327 = (0);
while(true){
if((i__27634__auto___36327 < len__27633__auto___36326)){
args__27640__auto__.push((arguments[i__27634__auto___36327]));

var G__36328 = (i__27634__auto___36327 + (1));
i__27634__auto___36327 = G__36328;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36325))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36325){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36325);
});})(g__28801__auto___36325))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__28801__auto___36325){
return (function (seq36277){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36277));
});})(g__28801__auto___36325))
;


var g__28801__auto___36329 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__28801__auto___36329){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36330 = arguments.length;
var i__27634__auto___36331 = (0);
while(true){
if((i__27634__auto___36331 < len__27633__auto___36330)){
args__27640__auto__.push((arguments[i__27634__auto___36331]));

var G__36332 = (i__27634__auto___36331 + (1));
i__27634__auto___36331 = G__36332;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36329))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36329){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36329);
});})(g__28801__auto___36329))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__28801__auto___36329){
return (function (seq36278){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36278));
});})(g__28801__auto___36329))
;


var g__28801__auto___36333 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__28801__auto___36333){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36334 = arguments.length;
var i__27634__auto___36335 = (0);
while(true){
if((i__27634__auto___36335 < len__27633__auto___36334)){
args__27640__auto__.push((arguments[i__27634__auto___36335]));

var G__36336 = (i__27634__auto___36335 + (1));
i__27634__auto___36335 = G__36336;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36333))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36333){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36333);
});})(g__28801__auto___36333))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__28801__auto___36333){
return (function (seq36279){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36279));
});})(g__28801__auto___36333))
;


var g__28801__auto___36337 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__28801__auto___36337){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36338 = arguments.length;
var i__27634__auto___36339 = (0);
while(true){
if((i__27634__auto___36339 < len__27633__auto___36338)){
args__27640__auto__.push((arguments[i__27634__auto___36339]));

var G__36340 = (i__27634__auto___36339 + (1));
i__27634__auto___36339 = G__36340;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36337))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36337){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36337);
});})(g__28801__auto___36337))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__28801__auto___36337){
return (function (seq36280){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36280));
});})(g__28801__auto___36337))
;


var g__28801__auto___36341 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__28801__auto___36341){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36342 = arguments.length;
var i__27634__auto___36343 = (0);
while(true){
if((i__27634__auto___36343 < len__27633__auto___36342)){
args__27640__auto__.push((arguments[i__27634__auto___36343]));

var G__36344 = (i__27634__auto___36343 + (1));
i__27634__auto___36343 = G__36344;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36341))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36341){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36341);
});})(g__28801__auto___36341))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__28801__auto___36341){
return (function (seq36281){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36281));
});})(g__28801__auto___36341))
;


var g__28801__auto___36345 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__28801__auto___36345){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36346 = arguments.length;
var i__27634__auto___36347 = (0);
while(true){
if((i__27634__auto___36347 < len__27633__auto___36346)){
args__27640__auto__.push((arguments[i__27634__auto___36347]));

var G__36348 = (i__27634__auto___36347 + (1));
i__27634__auto___36347 = G__36348;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36345))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36345){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36345);
});})(g__28801__auto___36345))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__28801__auto___36345){
return (function (seq36282){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36282));
});})(g__28801__auto___36345))
;


var g__28801__auto___36349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__28801__auto___36349){
return (function cljs$spec$gen$alpha$string(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36350 = arguments.length;
var i__27634__auto___36351 = (0);
while(true){
if((i__27634__auto___36351 < len__27633__auto___36350)){
args__27640__auto__.push((arguments[i__27634__auto___36351]));

var G__36352 = (i__27634__auto___36351 + (1));
i__27634__auto___36351 = G__36352;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36349))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36349){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36349);
});})(g__28801__auto___36349))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__28801__auto___36349){
return (function (seq36283){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36283));
});})(g__28801__auto___36349))
;


var g__28801__auto___36353 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__28801__auto___36353){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36354 = arguments.length;
var i__27634__auto___36355 = (0);
while(true){
if((i__27634__auto___36355 < len__27633__auto___36354)){
args__27640__auto__.push((arguments[i__27634__auto___36355]));

var G__36356 = (i__27634__auto___36355 + (1));
i__27634__auto___36355 = G__36356;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36353))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36353){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36353);
});})(g__28801__auto___36353))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__28801__auto___36353){
return (function (seq36284){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36284));
});})(g__28801__auto___36353))
;


var g__28801__auto___36357 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__28801__auto___36357){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36358 = arguments.length;
var i__27634__auto___36359 = (0);
while(true){
if((i__27634__auto___36359 < len__27633__auto___36358)){
args__27640__auto__.push((arguments[i__27634__auto___36359]));

var G__36360 = (i__27634__auto___36359 + (1));
i__27634__auto___36359 = G__36360;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36357))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36357){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36357);
});})(g__28801__auto___36357))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__28801__auto___36357){
return (function (seq36285){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36285));
});})(g__28801__auto___36357))
;


var g__28801__auto___36361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__28801__auto___36361){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36362 = arguments.length;
var i__27634__auto___36363 = (0);
while(true){
if((i__27634__auto___36363 < len__27633__auto___36362)){
args__27640__auto__.push((arguments[i__27634__auto___36363]));

var G__36364 = (i__27634__auto___36363 + (1));
i__27634__auto___36363 = G__36364;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36361))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36361){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36361);
});})(g__28801__auto___36361))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__28801__auto___36361){
return (function (seq36286){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36286));
});})(g__28801__auto___36361))
;


var g__28801__auto___36365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__28801__auto___36365){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36366 = arguments.length;
var i__27634__auto___36367 = (0);
while(true){
if((i__27634__auto___36367 < len__27633__auto___36366)){
args__27640__auto__.push((arguments[i__27634__auto___36367]));

var G__36368 = (i__27634__auto___36367 + (1));
i__27634__auto___36367 = G__36368;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36365))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36365){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36365);
});})(g__28801__auto___36365))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__28801__auto___36365){
return (function (seq36287){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36287));
});})(g__28801__auto___36365))
;


var g__28801__auto___36369 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__28801__auto___36369){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36370 = arguments.length;
var i__27634__auto___36371 = (0);
while(true){
if((i__27634__auto___36371 < len__27633__auto___36370)){
args__27640__auto__.push((arguments[i__27634__auto___36371]));

var G__36372 = (i__27634__auto___36371 + (1));
i__27634__auto___36371 = G__36372;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});})(g__28801__auto___36369))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28801__auto___36369){
return (function (args){
return cljs.core.deref.call(null,g__28801__auto___36369);
});})(g__28801__auto___36369))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__28801__auto___36369){
return (function (seq36288){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36288));
});})(g__28801__auto___36369))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__27640__auto__ = [];
var len__27633__auto___36375 = arguments.length;
var i__27634__auto___36376 = (0);
while(true){
if((i__27634__auto___36376 < len__27633__auto___36375)){
args__27640__auto__.push((arguments[i__27634__auto___36376]));

var G__36377 = (i__27634__auto___36376 + (1));
i__27634__auto___36376 = G__36377;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36373_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36373_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36374){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36374));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36378_SHARP_){
return (new Date(p1__36378_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1553724331418
