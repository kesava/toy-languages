// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__23004){
var vec__23005 = p__23004;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23005,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__23008 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23008,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__23012 = arguments.length;
switch (G__23012) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__11271__auto__ = cljs.core.count(a);
var y__11272__auto__ = cljs.core.count(b);
return ((x__11271__auto__ > y__11272__auto__) ? x__11271__auto__ : y__11272__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__11604__auto__ = (((x == null))?null:x);
var m__11605__auto__ = (clojure.data.equality_partition[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__11605__auto__.call(null,x));
} else {
var m__11605__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__11605__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__11604__auto__ = (((a == null))?null:a);
var m__11605__auto__ = (clojure.data.diff_similar[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__11605__auto__.call(null,a,b));
} else {
var m__11605__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__11605__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__23014_23038 = clojure.data.equality_partition;
var G__23015_23039 = "null";
var G__23016_23040 = ((function (G__23014_23038,G__23015_23039){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23014_23038,G__23015_23039))
;
goog.object.set(G__23014_23038,G__23015_23039,G__23016_23040);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__23017_23041 = clojure.data.equality_partition;
var G__23018_23042 = "string";
var G__23019_23043 = ((function (G__23017_23041,G__23018_23042){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23017_23041,G__23018_23042))
;
goog.object.set(G__23017_23041,G__23018_23042,G__23019_23043);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__23020_23044 = clojure.data.equality_partition;
var G__23021_23045 = "number";
var G__23022_23046 = ((function (G__23020_23044,G__23021_23045){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23020_23044,G__23021_23045))
;
goog.object.set(G__23020_23044,G__23021_23045,G__23022_23046);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__23023_23047 = clojure.data.equality_partition;
var G__23024_23048 = "array";
var G__23025_23049 = ((function (G__23023_23047,G__23024_23048){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__23023_23047,G__23024_23048))
;
goog.object.set(G__23023_23047,G__23024_23048,G__23025_23049);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__23026_23050 = clojure.data.equality_partition;
var G__23027_23051 = "function";
var G__23028_23052 = ((function (G__23026_23050,G__23027_23051){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23026_23050,G__23027_23051))
;
goog.object.set(G__23026_23050,G__23027_23051,G__23028_23052);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__23029_23053 = clojure.data.equality_partition;
var G__23030_23054 = "boolean";
var G__23031_23055 = ((function (G__23029_23053,G__23030_23054){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__23029_23053,G__23030_23054))
;
goog.object.set(G__23029_23053,G__23030_23054,G__23031_23055);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__23032_23056 = clojure.data.equality_partition;
var G__23033_23057 = "_";
var G__23034_23058 = ((function (G__23032_23056,G__23033_23057){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__23032_23056,G__23033_23057))
;
goog.object.set(G__23032_23056,G__23033_23057,G__23034_23058);
goog.object.set(clojure.data.Diff,"null",true);

var G__23059_23083 = clojure.data.diff_similar;
var G__23060_23084 = "null";
var G__23061_23085 = ((function (G__23059_23083,G__23060_23084){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23059_23083,G__23060_23084))
;
goog.object.set(G__23059_23083,G__23060_23084,G__23061_23085);

goog.object.set(clojure.data.Diff,"string",true);

var G__23062_23086 = clojure.data.diff_similar;
var G__23063_23087 = "string";
var G__23064_23088 = ((function (G__23062_23086,G__23063_23087){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23062_23086,G__23063_23087))
;
goog.object.set(G__23062_23086,G__23063_23087,G__23064_23088);

goog.object.set(clojure.data.Diff,"number",true);

var G__23065_23089 = clojure.data.diff_similar;
var G__23066_23090 = "number";
var G__23067_23091 = ((function (G__23065_23089,G__23066_23090){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23065_23089,G__23066_23090))
;
goog.object.set(G__23065_23089,G__23066_23090,G__23067_23091);

goog.object.set(clojure.data.Diff,"array",true);

var G__23068_23092 = clojure.data.diff_similar;
var G__23069_23093 = "array";
var G__23070_23094 = ((function (G__23068_23092,G__23069_23093){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__23068_23092,G__23069_23093))
;
goog.object.set(G__23068_23092,G__23069_23093,G__23070_23094);

goog.object.set(clojure.data.Diff,"function",true);

var G__23071_23095 = clojure.data.diff_similar;
var G__23072_23096 = "function";
var G__23073_23097 = ((function (G__23071_23095,G__23072_23096){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23071_23095,G__23072_23096))
;
goog.object.set(G__23071_23095,G__23072_23096,G__23073_23097);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__23074_23098 = clojure.data.diff_similar;
var G__23075_23099 = "boolean";
var G__23076_23100 = ((function (G__23074_23098,G__23075_23099){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__23074_23098,G__23075_23099))
;
goog.object.set(G__23074_23098,G__23075_23099,G__23076_23100);

goog.object.set(clojure.data.Diff,"_",true);

var G__23077_23101 = clojure.data.diff_similar;
var G__23078_23102 = "_";
var G__23079_23103 = ((function (G__23077_23101,G__23078_23102){
return (function (a,b){
var fexpr__23081 = (function (){var G__23082 = clojure.data.equality_partition(a);
var G__23082__$1 = (((G__23082 instanceof cljs.core.Keyword))?G__23082.fqn:null);
switch (G__23082__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23082__$1)].join('')));

}
})();
return (fexpr__23081.cljs$core$IFn$_invoke$arity$2 ? fexpr__23081.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__23081.call(null,a,b));
});})(G__23077_23101,G__23078_23102))
;
goog.object.set(G__23077_23101,G__23078_23102,G__23079_23103);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
