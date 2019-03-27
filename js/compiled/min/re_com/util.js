// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11729__auto__ = (function re_com$util$fmap_$_iter__17228(s__17229){
return (new cljs.core.LazySeq(null,(function (){
var s__17229__$1 = s__17229;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17229__$1);
if(temp__4657__auto__){
var s__17229__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17229__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__17229__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__17231 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__17230 = (0);
while(true){
if((i__17230 < size__11728__auto__)){
var vec__17232 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__17230);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17232,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17232,(1),null);
cljs.core.chunk_append(b__17231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__17238 = (i__17230 + (1));
i__17230 = G__17238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17231),re_com$util$fmap_$_iter__17228(cljs.core.chunk_rest(s__17229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17231),null);
}
} else {
var vec__17235 = cljs.core.first(s__17229__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17235,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17235,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_com$util$fmap_$_iter__17228(cljs.core.rest(s__17229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17240 = arguments.length;
var i__12082__auto___17241 = (0);
while(true){
if((i__12082__auto___17241 < len__12081__auto___17240)){
args__12088__auto__.push((arguments[i__12082__auto___17241]));

var G__17242 = (i__12082__auto___17241 + (1));
i__12082__auto___17241 = G__17242;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((0) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__12089__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq17239){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17239));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count(s) < len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(len,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero([cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17247 = arguments.length;
var i__12082__auto___17248 = (0);
while(true){
if((i__12082__auto___17248 < len__12081__auto___17247)){
args__12088__auto__.push((arguments[i__12082__auto___17248]));

var G__17249 = (i__12082__auto___17248 + (1));
i__12082__auto___17248 = G__17249;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((1) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12089__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq17245){
var G__17246 = cljs.core.first(seq17245);
var seq17245__$1 = cljs.core.next(seq17245);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__17246,seq17245__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(n + (1)),cljs.core.count(v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,(0),index),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17256 = arguments.length;
var i__12082__auto___17257 = (0);
while(true){
if((i__12082__auto___17257 < len__12081__auto___17256)){
args__12088__auto__.push((arguments[i__12082__auto___17257]));

var G__17258 = (i__12082__auto___17257 + (1));
i__12082__auto___17257 = G__17258;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((2) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12089__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__17253){
var map__17254 = p__17253;
var map__17254__$1 = ((((!((map__17254 == null)))?((((map__17254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17254):map__17254);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17254__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var index_fn = ((function (map__17254,map__17254__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)),id)){
return index;
} else {
return null;
}
});})(map__17254,map__17254__$1,id_fn))
;
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq17250){
var G__17251 = cljs.core.first(seq17250);
var seq17250__$1 = cljs.core.next(seq17250);
var G__17252 = cljs.core.first(seq17250__$1);
var seq17250__$2 = cljs.core.next(seq17250__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__17251,G__17252,seq17250__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17266 = arguments.length;
var i__12082__auto___17267 = (0);
while(true){
if((i__12082__auto___17267 < len__12081__auto___17266)){
args__12088__auto__.push((arguments[i__12082__auto___17267]));

var G__17268 = (i__12082__auto___17267 + (1));
i__12082__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((2) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12089__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__17263){
var map__17264 = p__17263;
var map__17264__$1 = ((((!((map__17264 == null)))?((((map__17264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17264):map__17264);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17264__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__17264,map__17264__$1,id_fn){
return (function (p1__17259_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__17259_SHARP_) : id_fn.call(null,p1__17259_SHARP_)),id);
});})(map__17264,map__17264__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq17260){
var G__17261 = cljs.core.first(seq17260);
var seq17260__$1 = cljs.core.next(seq17260);
var G__17262 = cljs.core.first(seq17260__$1);
var seq17260__$2 = cljs.core.next(seq17260__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__17261,G__17262,seq17260__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__12088__auto__ = [];
var len__12081__auto___17276 = arguments.length;
var i__12082__auto___17277 = (0);
while(true){
if((i__12082__auto___17277 < len__12081__auto___17276)){
args__12088__auto__.push((arguments[i__12082__auto___17277]));

var G__17278 = (i__12082__auto___17277 + (1));
i__12082__auto___17277 = G__17278;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((2) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12089__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__17273){
var map__17274 = p__17273;
var map__17274__$1 = ((((!((map__17274 == null)))?((((map__17274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17274):map__17274);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17274__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
return cljs.core.filterv(((function (map__17274,map__17274__$1,id_fn){
return (function (p1__17269_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__17269_SHARP_) : id_fn.call(null,p1__17269_SHARP_)),id);
});})(map__17274,map__17274__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq17270){
var G__17271 = cljs.core.first(seq17270);
var seq17270__$1 = cljs.core.next(seq17270);
var G__17272 = cljs.core.first(seq17270__$1);
var seq17270__$2 = cljs.core.next(seq17270__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__17271,G__17272,seq17270__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count(coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,index)], null);
});})(c))
;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__17279 = current_node.parentNode;
var G__17280 = (sum_scroll_left + current_node.scrollLeft);
var G__17281 = (sum_scroll_top + current_node.scrollTop);
current_node = G__17279;
sum_scroll_left = G__17280;
sum_scroll_top = G__17281;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,sum_scroll_left,cljs.core.cst$kw$top,sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});
