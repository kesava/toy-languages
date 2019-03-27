// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk_shell.filter_matcher');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
re_frisk_shell.filter_matcher.match_expr = (function re_frisk_shell$filter_matcher$match_expr(f,p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,p);
});
re_frisk_shell.filter_matcher.match_string_prefix = (function re_frisk_shell$filter_matcher$match_string_prefix(f,p){
return (typeof p === 'string') && (clojure.string.starts_with_QMARK_(p,f));
});
re_frisk_shell.filter_matcher.match_free = (function re_frisk_shell$filter_matcher$match_free(f,p){
return clojure.string.includes_QMARK_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),f);
});
re_frisk_shell.filter_matcher.match_value = (function re_frisk_shell$filter_matcher$match_value(f,p){
if(cljs.core.contains_QMARK_(f,cljs.core.cst$kw$expr)){
return re_frisk_shell.filter_matcher.match_expr(cljs.core.cst$kw$expr.cljs$core$IFn$_invoke$arity$1(f),p);
} else {
if(cljs.core.contains_QMARK_(f,cljs.core.cst$kw$string_DASH_prefix)){
return re_frisk_shell.filter_matcher.match_string_prefix(cljs.core.cst$kw$string_DASH_prefix.cljs$core$IFn$_invoke$arity$1(f),p);
} else {
if(cljs.core.contains_QMARK_(f,cljs.core.cst$kw$free)){
return re_frisk_shell.filter_matcher.match_free(cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(f),p);
} else {
throw (new Error(["Unknown kind of filter-path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')));

}
}
}
});
re_frisk_shell.filter_matcher.match = (function re_frisk_shell$filter_matcher$match(filter,path){
while(true){
if(cljs.core.empty_QMARK_(filter)){
return null;
} else {
if(cljs.core.empty_QMARK_(path)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(filter),(1))){
return re_frisk_shell.filter_matcher.match_value(cljs.core.first(filter),cljs.core.last(path));
} else {
if(cljs.core.truth_(re_frisk_shell.filter_matcher.match_value(cljs.core.first(filter),cljs.core.first(path)))){
var G__22231 = cljs.core.rest(filter);
var G__22232 = cljs.core.rest(path);
filter = G__22231;
path = G__22232;
continue;
} else {
var G__22233 = filter;
var G__22234 = cljs.core.rest(path);
filter = G__22233;
path = G__22234;
continue;
}

}
}
}
break;
}
});
