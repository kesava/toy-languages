// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk_shell.filter_parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
re_frisk_shell.filter_parser.read_all = (function re_frisk_shell$filter_parser$read_all(rdr){
var G__22212 = cljs.tools.reader.reader_types.peek_char(rdr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22212)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(cljs.tools.reader.reader_types.read_char(rdr),(re_frisk_shell.filter_parser.read_all.cljs$core$IFn$_invoke$arity$1 ? re_frisk_shell.filter_parser.read_all.cljs$core$IFn$_invoke$arity$1(rdr) : re_frisk_shell.filter_parser.read_all.call(null,rdr)));

}
});
re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$read_string_SINGLEQUOTE_(s){
var sr = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s);
var val = cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1(sr);
var rest = clojure.string.join.cljs$core$IFn$_invoke$arity$1(re_frisk_shell.filter_parser.read_all(sr));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,val,cljs.core.cst$kw$rest,rest], null);
});
re_frisk_shell.filter_parser.parse_freeform = (function re_frisk_shell$filter_parser$parse_freeform(s){
var vec__22213 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,(2));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22213,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22213,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$free,prefix], null),cljs.core.cst$kw$rest,(function (){var or__10921__auto__ = rest;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return "";
}
})()], null);
});
re_frisk_shell.filter_parser.parse_clojure_expr = (function re_frisk_shell$filter_parser$parse_clojure_expr(s){
try{var map__22217 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_(s);
var map__22217__$1 = ((((!((map__22217 == null)))?((((map__22217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22217):map__22217);
var foo = map__22217__$1;
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22217__$1,cljs.core.cst$kw$val);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22217__$1,cljs.core.cst$kw$rest);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,val], null),cljs.core.cst$kw$rest,rest], null);
}catch (e22216){var _ = e22216;
return re_frisk_shell.filter_parser.parse_freeform(s);
}});
re_frisk_shell.filter_parser.parse_clojure_string = (function re_frisk_shell$filter_parser$parse_clojure_string(s){
try{var map__22223 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_(s);
var map__22223__$1 = ((((!((map__22223 == null)))?((((map__22223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22223):map__22223);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223__$1,cljs.core.cst$kw$val);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223__$1,cljs.core.cst$kw$rest);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expr,val], null),cljs.core.cst$kw$rest,rest], null);
}catch (e22219){var _ = e22219;
var vec__22220 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,(2));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22220,(1),null);
var prefix__$1 = clojure.string.replace(prefix,/^\"/,"");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$val,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string_DASH_prefix,prefix__$1], null),cljs.core.cst$kw$rest,(function (){var or__10921__auto__ = rest;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return "";
}
})()], null);
}});
re_frisk_shell.filter_parser.parse_part = (function re_frisk_shell$filter_parser$parse_part(s){
var G__22225 = cljs.core.first(s);
switch (G__22225) {
case "[":
case "(":
case "{":
case "#":
case "\\":
case "'":
case ":":
return re_frisk_shell.filter_parser.parse_clojure_expr(s);

break;
case "\"":
return re_frisk_shell.filter_parser.parse_clojure_string(s);

break;
default:
return re_frisk_shell.filter_parser.parse_freeform(s);

}
});
re_frisk_shell.filter_parser.parse_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$parse_SINGLEQUOTE_(s){
var s__$1 = clojure.string.trim(s);
var s__$2 = clojure.string.replace(s__$1,/^\[(.*)\]$/,"$1");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s__$2,"")){
return cljs.core.List.EMPTY;
} else {
var map__22227 = re_frisk_shell.filter_parser.parse_part(s__$2);
var map__22227__$1 = ((((!((map__22227 == null)))?((((map__22227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22227):map__22227);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22227__$1,cljs.core.cst$kw$val);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22227__$1,cljs.core.cst$kw$rest);
return cljs.core.cons(val,(re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(rest) : re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.call(null,rest)));
}
});
re_frisk_shell.filter_parser.parse = (function re_frisk_shell$filter_parser$parse(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,re_frisk_shell.filter_parser.parse_SINGLEQUOTE_(s));
});
