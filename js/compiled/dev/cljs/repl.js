// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36958){
var map__36959 = p__36958;
var map__36959__$1 = ((((!((map__36959 == null)))?((((map__36959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36959):map__36959);
var m = map__36959__$1;
var n = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36961_36983 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36962_36984 = null;
var count__36963_36985 = (0);
var i__36964_36986 = (0);
while(true){
if((i__36964_36986 < count__36963_36985)){
var f_36987 = cljs.core._nth.call(null,chunk__36962_36984,i__36964_36986);
cljs.core.println.call(null,"  ",f_36987);

var G__36988 = seq__36961_36983;
var G__36989 = chunk__36962_36984;
var G__36990 = count__36963_36985;
var G__36991 = (i__36964_36986 + (1));
seq__36961_36983 = G__36988;
chunk__36962_36984 = G__36989;
count__36963_36985 = G__36990;
i__36964_36986 = G__36991;
continue;
} else {
var temp__4657__auto___36992 = cljs.core.seq.call(null,seq__36961_36983);
if(temp__4657__auto___36992){
var seq__36961_36993__$1 = temp__4657__auto___36992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36961_36993__$1)){
var c__27301__auto___36994 = cljs.core.chunk_first.call(null,seq__36961_36993__$1);
var G__36995 = cljs.core.chunk_rest.call(null,seq__36961_36993__$1);
var G__36996 = c__27301__auto___36994;
var G__36997 = cljs.core.count.call(null,c__27301__auto___36994);
var G__36998 = (0);
seq__36961_36983 = G__36995;
chunk__36962_36984 = G__36996;
count__36963_36985 = G__36997;
i__36964_36986 = G__36998;
continue;
} else {
var f_36999 = cljs.core.first.call(null,seq__36961_36993__$1);
cljs.core.println.call(null,"  ",f_36999);

var G__37000 = cljs.core.next.call(null,seq__36961_36993__$1);
var G__37001 = null;
var G__37002 = (0);
var G__37003 = (0);
seq__36961_36983 = G__37000;
chunk__36962_36984 = G__37001;
count__36963_36985 = G__37002;
i__36964_36986 = G__37003;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37004 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26462__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37004);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37004)))?cljs.core.second.call(null,arglists_37004):arglists_37004));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36965_37005 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36966_37006 = null;
var count__36967_37007 = (0);
var i__36968_37008 = (0);
while(true){
if((i__36968_37008 < count__36967_37007)){
var vec__36969_37009 = cljs.core._nth.call(null,chunk__36966_37006,i__36968_37008);
var name_37010 = cljs.core.nth.call(null,vec__36969_37009,(0),null);
var map__36972_37011 = cljs.core.nth.call(null,vec__36969_37009,(1),null);
var map__36972_37012__$1 = ((((!((map__36972_37011 == null)))?((((map__36972_37011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36972_37011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36972_37011):map__36972_37011);
var doc_37013 = cljs.core.get.call(null,map__36972_37012__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37014 = cljs.core.get.call(null,map__36972_37012__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37010);

cljs.core.println.call(null," ",arglists_37014);

if(cljs.core.truth_(doc_37013)){
cljs.core.println.call(null," ",doc_37013);
} else {
}

var G__37015 = seq__36965_37005;
var G__37016 = chunk__36966_37006;
var G__37017 = count__36967_37007;
var G__37018 = (i__36968_37008 + (1));
seq__36965_37005 = G__37015;
chunk__36966_37006 = G__37016;
count__36967_37007 = G__37017;
i__36968_37008 = G__37018;
continue;
} else {
var temp__4657__auto___37019 = cljs.core.seq.call(null,seq__36965_37005);
if(temp__4657__auto___37019){
var seq__36965_37020__$1 = temp__4657__auto___37019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36965_37020__$1)){
var c__27301__auto___37021 = cljs.core.chunk_first.call(null,seq__36965_37020__$1);
var G__37022 = cljs.core.chunk_rest.call(null,seq__36965_37020__$1);
var G__37023 = c__27301__auto___37021;
var G__37024 = cljs.core.count.call(null,c__27301__auto___37021);
var G__37025 = (0);
seq__36965_37005 = G__37022;
chunk__36966_37006 = G__37023;
count__36967_37007 = G__37024;
i__36968_37008 = G__37025;
continue;
} else {
var vec__36974_37026 = cljs.core.first.call(null,seq__36965_37020__$1);
var name_37027 = cljs.core.nth.call(null,vec__36974_37026,(0),null);
var map__36977_37028 = cljs.core.nth.call(null,vec__36974_37026,(1),null);
var map__36977_37029__$1 = ((((!((map__36977_37028 == null)))?((((map__36977_37028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36977_37028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36977_37028):map__36977_37028);
var doc_37030 = cljs.core.get.call(null,map__36977_37029__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37031 = cljs.core.get.call(null,map__36977_37029__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37027);

cljs.core.println.call(null," ",arglists_37031);

if(cljs.core.truth_(doc_37030)){
cljs.core.println.call(null," ",doc_37030);
} else {
}

var G__37032 = cljs.core.next.call(null,seq__36965_37020__$1);
var G__37033 = null;
var G__37034 = (0);
var G__37035 = (0);
seq__36965_37005 = G__37032;
chunk__36966_37006 = G__37033;
count__36967_37007 = G__37034;
i__36968_37008 = G__37035;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36979 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36980 = null;
var count__36981 = (0);
var i__36982 = (0);
while(true){
if((i__36982 < count__36981)){
var role = cljs.core._nth.call(null,chunk__36980,i__36982);
var temp__4657__auto___37036__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37036__$1)){
var spec_37037 = temp__4657__auto___37036__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37037));
} else {
}

var G__37038 = seq__36979;
var G__37039 = chunk__36980;
var G__37040 = count__36981;
var G__37041 = (i__36982 + (1));
seq__36979 = G__37038;
chunk__36980 = G__37039;
count__36981 = G__37040;
i__36982 = G__37041;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36979);
if(temp__4657__auto____$1){
var seq__36979__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36979__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__36979__$1);
var G__37042 = cljs.core.chunk_rest.call(null,seq__36979__$1);
var G__37043 = c__27301__auto__;
var G__37044 = cljs.core.count.call(null,c__27301__auto__);
var G__37045 = (0);
seq__36979 = G__37042;
chunk__36980 = G__37043;
count__36981 = G__37044;
i__36982 = G__37045;
continue;
} else {
var role = cljs.core.first.call(null,seq__36979__$1);
var temp__4657__auto___37046__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37046__$2)){
var spec_37047 = temp__4657__auto___37046__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37047));
} else {
}

var G__37048 = cljs.core.next.call(null,seq__36979__$1);
var G__37049 = null;
var G__37050 = (0);
var G__37051 = (0);
seq__36979 = G__37048;
chunk__36980 = G__37049;
count__36981 = G__37050;
i__36982 = G__37051;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1553721085980
