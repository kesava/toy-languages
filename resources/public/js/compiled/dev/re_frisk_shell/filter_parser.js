// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frisk_shell.filter_parser');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
re_frisk_shell.filter_parser.read_all = (function re_frisk_shell$filter_parser$read_all(rdr){
var G__34115 = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core._EQ_.call(null,null,G__34115)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.tools.reader.reader_types.read_char.call(null,rdr),re_frisk_shell.filter_parser.read_all.call(null,rdr));

}
});
re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$read_string_SINGLEQUOTE_(s){
var sr = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
var val = cljs.tools.reader.read.call(null,sr);
var rest = clojure.string.join.call(null,re_frisk_shell.filter_parser.read_all.call(null,sr));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
});
re_frisk_shell.filter_parser.parse_freeform = (function re_frisk_shell$filter_parser$parse_freeform(s){
var vec__34116 = clojure.string.split.call(null,s,/\s+/,(2));
var prefix = cljs.core.nth.call(null,vec__34116,(0),null);
var rest = cljs.core.nth.call(null,vec__34116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"free","free",801364328),prefix], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__26462__auto__ = rest;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return "";
}
})()], null);
});
re_frisk_shell.filter_parser.parse_clojure_expr = (function re_frisk_shell$filter_parser$parse_clojure_expr(s){
try{var map__34120 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_.call(null,s);
var map__34120__$1 = ((((!((map__34120 == null)))?((((map__34120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34120):map__34120);
var foo = map__34120__$1;
var val = cljs.core.get.call(null,map__34120__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__34120__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e34119){var _ = e34119;
return re_frisk_shell.filter_parser.parse_freeform.call(null,s);
}});
re_frisk_shell.filter_parser.parse_clojure_string = (function re_frisk_shell$filter_parser$parse_clojure_string(s){
try{var map__34126 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_.call(null,s);
var map__34126__$1 = ((((!((map__34126 == null)))?((((map__34126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34126):map__34126);
var val = cljs.core.get.call(null,map__34126__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__34126__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e34122){var _ = e34122;
var vec__34123 = clojure.string.split.call(null,s,/\s+/,(2));
var prefix = cljs.core.nth.call(null,vec__34123,(0),null);
var rest = cljs.core.nth.call(null,vec__34123,(1),null);
var prefix__$1 = clojure.string.replace.call(null,prefix,/^\"/,"");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string-prefix","string-prefix",2091851734),prefix__$1], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__26462__auto__ = rest;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return "";
}
})()], null);
}});
re_frisk_shell.filter_parser.parse_part = (function re_frisk_shell$filter_parser$parse_part(s){
var G__34128 = cljs.core.first.call(null,s);
switch (G__34128) {
case "[":
case "(":
case "{":
case "#":
case "\\":
case "'":
case ":":
return re_frisk_shell.filter_parser.parse_clojure_expr.call(null,s);

break;
case "\"":
return re_frisk_shell.filter_parser.parse_clojure_string.call(null,s);

break;
default:
return re_frisk_shell.filter_parser.parse_freeform.call(null,s);

}
});
re_frisk_shell.filter_parser.parse_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$parse_SINGLEQUOTE_(s){
var s__$1 = clojure.string.trim.call(null,s);
var s__$2 = clojure.string.replace.call(null,s__$1,/^\[(.*)\]$/,"$1");
if(cljs.core._EQ_.call(null,s__$2,"")){
return cljs.core.List.EMPTY;
} else {
var map__34130 = re_frisk_shell.filter_parser.parse_part.call(null,s__$2);
var map__34130__$1 = ((((!((map__34130 == null)))?((((map__34130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34130):map__34130);
var val = cljs.core.get.call(null,map__34130__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__34130__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return cljs.core.cons.call(null,val,re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.call(null,rest));
}
});
re_frisk_shell.filter_parser.parse = (function re_frisk_shell$filter_parser$parse(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.call(null,s));
});

//# sourceMappingURL=filter_parser.js.map?rel=1553721081791
