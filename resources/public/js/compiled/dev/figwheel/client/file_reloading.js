// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26462__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26462__auto__){
return or__26462__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return ["goog/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26462__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35514_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35514_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35515 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35516 = null;
var count__35517 = (0);
var i__35518 = (0);
while(true){
if((i__35518 < count__35517)){
var n = cljs.core._nth.call(null,chunk__35516,i__35518);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35519 = seq__35515;
var G__35520 = chunk__35516;
var G__35521 = count__35517;
var G__35522 = (i__35518 + (1));
seq__35515 = G__35519;
chunk__35516 = G__35520;
count__35517 = G__35521;
i__35518 = G__35522;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35515);
if(temp__4657__auto__){
var seq__35515__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35515__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__35515__$1);
var G__35523 = cljs.core.chunk_rest.call(null,seq__35515__$1);
var G__35524 = c__27301__auto__;
var G__35525 = cljs.core.count.call(null,c__27301__auto__);
var G__35526 = (0);
seq__35515 = G__35523;
chunk__35516 = G__35524;
count__35517 = G__35525;
i__35518 = G__35526;
continue;
} else {
var n = cljs.core.first.call(null,seq__35515__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35527 = cljs.core.next.call(null,seq__35515__$1);
var G__35528 = null;
var G__35529 = (0);
var G__35530 = (0);
seq__35515 = G__35527;
chunk__35516 = G__35528;
count__35517 = G__35529;
i__35518 = G__35530;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35540_35548 = cljs.core.seq.call(null,deps);
var chunk__35541_35549 = null;
var count__35542_35550 = (0);
var i__35543_35551 = (0);
while(true){
if((i__35543_35551 < count__35542_35550)){
var dep_35552 = cljs.core._nth.call(null,chunk__35541_35549,i__35543_35551);
topo_sort_helper_STAR_.call(null,dep_35552,(depth + (1)),state);

var G__35553 = seq__35540_35548;
var G__35554 = chunk__35541_35549;
var G__35555 = count__35542_35550;
var G__35556 = (i__35543_35551 + (1));
seq__35540_35548 = G__35553;
chunk__35541_35549 = G__35554;
count__35542_35550 = G__35555;
i__35543_35551 = G__35556;
continue;
} else {
var temp__4657__auto___35557 = cljs.core.seq.call(null,seq__35540_35548);
if(temp__4657__auto___35557){
var seq__35540_35558__$1 = temp__4657__auto___35557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35540_35558__$1)){
var c__27301__auto___35559 = cljs.core.chunk_first.call(null,seq__35540_35558__$1);
var G__35560 = cljs.core.chunk_rest.call(null,seq__35540_35558__$1);
var G__35561 = c__27301__auto___35559;
var G__35562 = cljs.core.count.call(null,c__27301__auto___35559);
var G__35563 = (0);
seq__35540_35548 = G__35560;
chunk__35541_35549 = G__35561;
count__35542_35550 = G__35562;
i__35543_35551 = G__35563;
continue;
} else {
var dep_35564 = cljs.core.first.call(null,seq__35540_35558__$1);
topo_sort_helper_STAR_.call(null,dep_35564,(depth + (1)),state);

var G__35565 = cljs.core.next.call(null,seq__35540_35558__$1);
var G__35566 = null;
var G__35567 = (0);
var G__35568 = (0);
seq__35540_35548 = G__35565;
chunk__35541_35549 = G__35566;
count__35542_35550 = G__35567;
i__35543_35551 = G__35568;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35544){
var vec__35545 = p__35544;
var seq__35546 = cljs.core.seq.call(null,vec__35545);
var first__35547 = cljs.core.first.call(null,seq__35546);
var seq__35546__$1 = cljs.core.next.call(null,seq__35546);
var x = first__35547;
var xs = seq__35546__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35545,seq__35546,first__35547,seq__35546__$1,x,xs,get_deps__$1){
return (function (p1__35531_SHARP_){
return clojure.set.difference.call(null,p1__35531_SHARP_,x);
});})(vec__35545,seq__35546,first__35547,seq__35546__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35569 = cljs.core.seq.call(null,provides);
var chunk__35570 = null;
var count__35571 = (0);
var i__35572 = (0);
while(true){
if((i__35572 < count__35571)){
var prov = cljs.core._nth.call(null,chunk__35570,i__35572);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35573_35581 = cljs.core.seq.call(null,requires);
var chunk__35574_35582 = null;
var count__35575_35583 = (0);
var i__35576_35584 = (0);
while(true){
if((i__35576_35584 < count__35575_35583)){
var req_35585 = cljs.core._nth.call(null,chunk__35574_35582,i__35576_35584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35585,prov);

var G__35586 = seq__35573_35581;
var G__35587 = chunk__35574_35582;
var G__35588 = count__35575_35583;
var G__35589 = (i__35576_35584 + (1));
seq__35573_35581 = G__35586;
chunk__35574_35582 = G__35587;
count__35575_35583 = G__35588;
i__35576_35584 = G__35589;
continue;
} else {
var temp__4657__auto___35590 = cljs.core.seq.call(null,seq__35573_35581);
if(temp__4657__auto___35590){
var seq__35573_35591__$1 = temp__4657__auto___35590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35573_35591__$1)){
var c__27301__auto___35592 = cljs.core.chunk_first.call(null,seq__35573_35591__$1);
var G__35593 = cljs.core.chunk_rest.call(null,seq__35573_35591__$1);
var G__35594 = c__27301__auto___35592;
var G__35595 = cljs.core.count.call(null,c__27301__auto___35592);
var G__35596 = (0);
seq__35573_35581 = G__35593;
chunk__35574_35582 = G__35594;
count__35575_35583 = G__35595;
i__35576_35584 = G__35596;
continue;
} else {
var req_35597 = cljs.core.first.call(null,seq__35573_35591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35597,prov);

var G__35598 = cljs.core.next.call(null,seq__35573_35591__$1);
var G__35599 = null;
var G__35600 = (0);
var G__35601 = (0);
seq__35573_35581 = G__35598;
chunk__35574_35582 = G__35599;
count__35575_35583 = G__35600;
i__35576_35584 = G__35601;
continue;
}
} else {
}
}
break;
}

var G__35602 = seq__35569;
var G__35603 = chunk__35570;
var G__35604 = count__35571;
var G__35605 = (i__35572 + (1));
seq__35569 = G__35602;
chunk__35570 = G__35603;
count__35571 = G__35604;
i__35572 = G__35605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35569);
if(temp__4657__auto__){
var seq__35569__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35569__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__35569__$1);
var G__35606 = cljs.core.chunk_rest.call(null,seq__35569__$1);
var G__35607 = c__27301__auto__;
var G__35608 = cljs.core.count.call(null,c__27301__auto__);
var G__35609 = (0);
seq__35569 = G__35606;
chunk__35570 = G__35607;
count__35571 = G__35608;
i__35572 = G__35609;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35569__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35577_35610 = cljs.core.seq.call(null,requires);
var chunk__35578_35611 = null;
var count__35579_35612 = (0);
var i__35580_35613 = (0);
while(true){
if((i__35580_35613 < count__35579_35612)){
var req_35614 = cljs.core._nth.call(null,chunk__35578_35611,i__35580_35613);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35614,prov);

var G__35615 = seq__35577_35610;
var G__35616 = chunk__35578_35611;
var G__35617 = count__35579_35612;
var G__35618 = (i__35580_35613 + (1));
seq__35577_35610 = G__35615;
chunk__35578_35611 = G__35616;
count__35579_35612 = G__35617;
i__35580_35613 = G__35618;
continue;
} else {
var temp__4657__auto___35619__$1 = cljs.core.seq.call(null,seq__35577_35610);
if(temp__4657__auto___35619__$1){
var seq__35577_35620__$1 = temp__4657__auto___35619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35577_35620__$1)){
var c__27301__auto___35621 = cljs.core.chunk_first.call(null,seq__35577_35620__$1);
var G__35622 = cljs.core.chunk_rest.call(null,seq__35577_35620__$1);
var G__35623 = c__27301__auto___35621;
var G__35624 = cljs.core.count.call(null,c__27301__auto___35621);
var G__35625 = (0);
seq__35577_35610 = G__35622;
chunk__35578_35611 = G__35623;
count__35579_35612 = G__35624;
i__35580_35613 = G__35625;
continue;
} else {
var req_35626 = cljs.core.first.call(null,seq__35577_35620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35626,prov);

var G__35627 = cljs.core.next.call(null,seq__35577_35620__$1);
var G__35628 = null;
var G__35629 = (0);
var G__35630 = (0);
seq__35577_35610 = G__35627;
chunk__35578_35611 = G__35628;
count__35579_35612 = G__35629;
i__35580_35613 = G__35630;
continue;
}
} else {
}
}
break;
}

var G__35631 = cljs.core.next.call(null,seq__35569__$1);
var G__35632 = null;
var G__35633 = (0);
var G__35634 = (0);
seq__35569 = G__35631;
chunk__35570 = G__35632;
count__35571 = G__35633;
i__35572 = G__35634;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35635_35639 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35636_35640 = null;
var count__35637_35641 = (0);
var i__35638_35642 = (0);
while(true){
if((i__35638_35642 < count__35637_35641)){
var ns_35643 = cljs.core._nth.call(null,chunk__35636_35640,i__35638_35642);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35643);

var G__35644 = seq__35635_35639;
var G__35645 = chunk__35636_35640;
var G__35646 = count__35637_35641;
var G__35647 = (i__35638_35642 + (1));
seq__35635_35639 = G__35644;
chunk__35636_35640 = G__35645;
count__35637_35641 = G__35646;
i__35638_35642 = G__35647;
continue;
} else {
var temp__4657__auto___35648 = cljs.core.seq.call(null,seq__35635_35639);
if(temp__4657__auto___35648){
var seq__35635_35649__$1 = temp__4657__auto___35648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35635_35649__$1)){
var c__27301__auto___35650 = cljs.core.chunk_first.call(null,seq__35635_35649__$1);
var G__35651 = cljs.core.chunk_rest.call(null,seq__35635_35649__$1);
var G__35652 = c__27301__auto___35650;
var G__35653 = cljs.core.count.call(null,c__27301__auto___35650);
var G__35654 = (0);
seq__35635_35639 = G__35651;
chunk__35636_35640 = G__35652;
count__35637_35641 = G__35653;
i__35638_35642 = G__35654;
continue;
} else {
var ns_35655 = cljs.core.first.call(null,seq__35635_35649__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35655);

var G__35656 = cljs.core.next.call(null,seq__35635_35649__$1);
var G__35657 = null;
var G__35658 = (0);
var G__35659 = (0);
seq__35635_35639 = G__35656;
chunk__35636_35640 = G__35657;
count__35637_35641 = G__35658;
i__35638_35642 = G__35659;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26462__auto__ = goog.require__;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35660__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35661__i = 0, G__35661__a = new Array(arguments.length -  0);
while (G__35661__i < G__35661__a.length) {G__35661__a[G__35661__i] = arguments[G__35661__i + 0]; ++G__35661__i;}
  args = new cljs.core.IndexedSeq(G__35661__a,0,null);
} 
return G__35660__delegate.call(this,args);};
G__35660.cljs$lang$maxFixedArity = 0;
G__35660.cljs$lang$applyTo = (function (arglist__35662){
var args = cljs.core.seq(arglist__35662);
return G__35660__delegate(args);
});
G__35660.cljs$core$IFn$_invoke$arity$variadic = G__35660__delegate;
return G__35660;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35664 = cljs.core._EQ_;
var expr__35665 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35664.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35665))){
var path_parts = ((function (pred__35664,expr__35665){
return (function (p1__35663_SHARP_){
return clojure.string.split.call(null,p1__35663_SHARP_,/[\/\\]/);
});})(pred__35664,expr__35665))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35664,expr__35665){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35667){if((e35667 instanceof Error)){
var e = e35667;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35667;

}
}})());
});
;})(path_parts,sep,root,pred__35664,expr__35665))
} else {
if(cljs.core.truth_(pred__35664.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35665))){
return ((function (pred__35664,expr__35665){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35664,expr__35665){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35664,expr__35665))
);

return deferred.addErrback(((function (deferred,pred__35664,expr__35665){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35664,expr__35665))
);
});
;})(pred__35664,expr__35665))
} else {
return ((function (pred__35664,expr__35665){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35664,expr__35665))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35668,callback){
var map__35669 = p__35668;
var map__35669__$1 = ((((!((map__35669 == null)))?((((map__35669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35669):map__35669);
var file_msg = map__35669__$1;
var request_url = cljs.core.get.call(null,map__35669__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35669,map__35669__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35669,map__35669__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__){
return (function (state_35693){
var state_val_35694 = (state_35693[(1)]);
if((state_val_35694 === (7))){
var inst_35689 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35695_35712 = state_35693__$1;
(statearr_35695_35712[(2)] = inst_35689);

(statearr_35695_35712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (1))){
var state_35693__$1 = state_35693;
var statearr_35696_35713 = state_35693__$1;
(statearr_35696_35713[(2)] = null);

(statearr_35696_35713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (4))){
var inst_35673 = (state_35693[(7)]);
var inst_35673__$1 = (state_35693[(2)]);
var state_35693__$1 = (function (){var statearr_35697 = state_35693;
(statearr_35697[(7)] = inst_35673__$1);

return statearr_35697;
})();
if(cljs.core.truth_(inst_35673__$1)){
var statearr_35698_35714 = state_35693__$1;
(statearr_35698_35714[(1)] = (5));

} else {
var statearr_35699_35715 = state_35693__$1;
(statearr_35699_35715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (6))){
var state_35693__$1 = state_35693;
var statearr_35700_35716 = state_35693__$1;
(statearr_35700_35716[(2)] = null);

(statearr_35700_35716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (3))){
var inst_35691 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35693__$1,inst_35691);
} else {
if((state_val_35694 === (2))){
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35693__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35694 === (11))){
var inst_35685 = (state_35693[(2)]);
var state_35693__$1 = (function (){var statearr_35701 = state_35693;
(statearr_35701[(8)] = inst_35685);

return statearr_35701;
})();
var statearr_35702_35717 = state_35693__$1;
(statearr_35702_35717[(2)] = null);

(statearr_35702_35717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (9))){
var inst_35679 = (state_35693[(9)]);
var inst_35677 = (state_35693[(10)]);
var inst_35681 = inst_35679.call(null,inst_35677);
var state_35693__$1 = state_35693;
var statearr_35703_35718 = state_35693__$1;
(statearr_35703_35718[(2)] = inst_35681);

(statearr_35703_35718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (5))){
var inst_35673 = (state_35693[(7)]);
var inst_35675 = figwheel.client.file_reloading.blocking_load.call(null,inst_35673);
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35693__$1,(8),inst_35675);
} else {
if((state_val_35694 === (10))){
var inst_35677 = (state_35693[(10)]);
var inst_35683 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35677);
var state_35693__$1 = state_35693;
var statearr_35704_35719 = state_35693__$1;
(statearr_35704_35719[(2)] = inst_35683);

(statearr_35704_35719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (8))){
var inst_35673 = (state_35693[(7)]);
var inst_35679 = (state_35693[(9)]);
var inst_35677 = (state_35693[(2)]);
var inst_35678 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35679__$1 = cljs.core.get.call(null,inst_35678,inst_35673);
var state_35693__$1 = (function (){var statearr_35705 = state_35693;
(statearr_35705[(9)] = inst_35679__$1);

(statearr_35705[(10)] = inst_35677);

return statearr_35705;
})();
if(cljs.core.truth_(inst_35679__$1)){
var statearr_35706_35720 = state_35693__$1;
(statearr_35706_35720[(1)] = (9));

} else {
var statearr_35707_35721 = state_35693__$1;
(statearr_35707_35721[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31032__auto__))
;
return ((function (switch__30944__auto__,c__31032__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30945__auto__ = null;
var figwheel$client$file_reloading$state_machine__30945__auto____0 = (function (){
var statearr_35708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35708[(0)] = figwheel$client$file_reloading$state_machine__30945__auto__);

(statearr_35708[(1)] = (1));

return statearr_35708;
});
var figwheel$client$file_reloading$state_machine__30945__auto____1 = (function (state_35693){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_35693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e35709){if((e35709 instanceof Object)){
var ex__30948__auto__ = e35709;
var statearr_35710_35722 = state_35693;
(statearr_35710_35722[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35723 = state_35693;
state_35693 = G__35723;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30945__auto__ = function(state_35693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30945__auto____1.call(this,state_35693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30945__auto____0;
figwheel$client$file_reloading$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30945__auto____1;
return figwheel$client$file_reloading$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__))
})();
var state__31034__auto__ = (function (){var statearr_35711 = f__31033__auto__.call(null);
(statearr_35711[(6)] = c__31032__auto__);

return statearr_35711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__))
);

return c__31032__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35724,callback){
var map__35725 = p__35724;
var map__35725__$1 = ((((!((map__35725 == null)))?((((map__35725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35725):map__35725);
var file_msg = map__35725__$1;
var namespace = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35725,map__35725__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35725,map__35725__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35727){
var map__35728 = p__35727;
var map__35728__$1 = ((((!((map__35728 == null)))?((((map__35728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35728):map__35728);
var file_msg = map__35728__$1;
var namespace = cljs.core.get.call(null,map__35728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26450__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__26450__auto__){
var or__26462__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
var or__26462__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26462__auto____$1)){
return or__26462__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26450__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35730,callback){
var map__35731 = p__35730;
var map__35731__$1 = ((((!((map__35731 == null)))?((((map__35731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35731):map__35731);
var file_msg = map__35731__$1;
var request_url = cljs.core.get.call(null,map__35731__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35731__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31032__auto___35781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___35781,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___35781,out){
return (function (state_35766){
var state_val_35767 = (state_35766[(1)]);
if((state_val_35767 === (1))){
var inst_35740 = cljs.core.seq.call(null,files);
var inst_35741 = cljs.core.first.call(null,inst_35740);
var inst_35742 = cljs.core.next.call(null,inst_35740);
var inst_35743 = files;
var state_35766__$1 = (function (){var statearr_35768 = state_35766;
(statearr_35768[(7)] = inst_35743);

(statearr_35768[(8)] = inst_35742);

(statearr_35768[(9)] = inst_35741);

return statearr_35768;
})();
var statearr_35769_35782 = state_35766__$1;
(statearr_35769_35782[(2)] = null);

(statearr_35769_35782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (2))){
var inst_35749 = (state_35766[(10)]);
var inst_35743 = (state_35766[(7)]);
var inst_35748 = cljs.core.seq.call(null,inst_35743);
var inst_35749__$1 = cljs.core.first.call(null,inst_35748);
var inst_35750 = cljs.core.next.call(null,inst_35748);
var inst_35751 = (inst_35749__$1 == null);
var inst_35752 = cljs.core.not.call(null,inst_35751);
var state_35766__$1 = (function (){var statearr_35770 = state_35766;
(statearr_35770[(10)] = inst_35749__$1);

(statearr_35770[(11)] = inst_35750);

return statearr_35770;
})();
if(inst_35752){
var statearr_35771_35783 = state_35766__$1;
(statearr_35771_35783[(1)] = (4));

} else {
var statearr_35772_35784 = state_35766__$1;
(statearr_35772_35784[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (3))){
var inst_35764 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35766__$1,inst_35764);
} else {
if((state_val_35767 === (4))){
var inst_35749 = (state_35766[(10)]);
var inst_35754 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35749);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35766__$1,(7),inst_35754);
} else {
if((state_val_35767 === (5))){
var inst_35760 = cljs.core.async.close_BANG_.call(null,out);
var state_35766__$1 = state_35766;
var statearr_35773_35785 = state_35766__$1;
(statearr_35773_35785[(2)] = inst_35760);

(statearr_35773_35785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (6))){
var inst_35762 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35774_35786 = state_35766__$1;
(statearr_35774_35786[(2)] = inst_35762);

(statearr_35774_35786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (7))){
var inst_35750 = (state_35766[(11)]);
var inst_35756 = (state_35766[(2)]);
var inst_35757 = cljs.core.async.put_BANG_.call(null,out,inst_35756);
var inst_35743 = inst_35750;
var state_35766__$1 = (function (){var statearr_35775 = state_35766;
(statearr_35775[(7)] = inst_35743);

(statearr_35775[(12)] = inst_35757);

return statearr_35775;
})();
var statearr_35776_35787 = state_35766__$1;
(statearr_35776_35787[(2)] = null);

(statearr_35776_35787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31032__auto___35781,out))
;
return ((function (switch__30944__auto__,c__31032__auto___35781,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto____0 = (function (){
var statearr_35777 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35777[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto__);

(statearr_35777[(1)] = (1));

return statearr_35777;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto____1 = (function (state_35766){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_35766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e35778){if((e35778 instanceof Object)){
var ex__30948__auto__ = e35778;
var statearr_35779_35788 = state_35766;
(statearr_35779_35788[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35789 = state_35766;
state_35766 = G__35789;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto__ = function(state_35766){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto____1.call(this,state_35766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___35781,out))
})();
var state__31034__auto__ = (function (){var statearr_35780 = f__31033__auto__.call(null);
(statearr_35780[(6)] = c__31032__auto___35781);

return statearr_35780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___35781,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35790,opts){
var map__35791 = p__35790;
var map__35791__$1 = ((((!((map__35791 == null)))?((((map__35791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35791):map__35791);
var eval_body = cljs.core.get.call(null,map__35791__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26450__auto__ = eval_body;
if(cljs.core.truth_(and__26450__auto__)){
return typeof eval_body === 'string';
} else {
return and__26450__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35793){var e = e35793;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35794_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35794_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35795){
var vec__35796 = p__35795;
var k = cljs.core.nth.call(null,vec__35796,(0),null);
var v = cljs.core.nth.call(null,vec__35796,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35799){
var vec__35800 = p__35799;
var k = cljs.core.nth.call(null,vec__35800,(0),null);
var v = cljs.core.nth.call(null,vec__35800,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35806,p__35807){
var map__35808 = p__35806;
var map__35808__$1 = ((((!((map__35808 == null)))?((((map__35808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35808):map__35808);
var opts = map__35808__$1;
var before_jsload = cljs.core.get.call(null,map__35808__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35808__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35808__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35809 = p__35807;
var map__35809__$1 = ((((!((map__35809 == null)))?((((map__35809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35809):map__35809);
var msg = map__35809__$1;
var files = cljs.core.get.call(null,map__35809__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35809__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35809__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35963){
var state_val_35964 = (state_35963[(1)]);
if((state_val_35964 === (7))){
var inst_35823 = (state_35963[(7)]);
var inst_35826 = (state_35963[(8)]);
var inst_35825 = (state_35963[(9)]);
var inst_35824 = (state_35963[(10)]);
var inst_35831 = cljs.core._nth.call(null,inst_35824,inst_35826);
var inst_35832 = figwheel.client.file_reloading.eval_body.call(null,inst_35831,opts);
var inst_35833 = (inst_35826 + (1));
var tmp35965 = inst_35823;
var tmp35966 = inst_35825;
var tmp35967 = inst_35824;
var inst_35823__$1 = tmp35965;
var inst_35824__$1 = tmp35967;
var inst_35825__$1 = tmp35966;
var inst_35826__$1 = inst_35833;
var state_35963__$1 = (function (){var statearr_35968 = state_35963;
(statearr_35968[(7)] = inst_35823__$1);

(statearr_35968[(8)] = inst_35826__$1);

(statearr_35968[(9)] = inst_35825__$1);

(statearr_35968[(10)] = inst_35824__$1);

(statearr_35968[(11)] = inst_35832);

return statearr_35968;
})();
var statearr_35969_36052 = state_35963__$1;
(statearr_35969_36052[(2)] = null);

(statearr_35969_36052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (20))){
var inst_35866 = (state_35963[(12)]);
var inst_35874 = figwheel.client.file_reloading.sort_files.call(null,inst_35866);
var state_35963__$1 = state_35963;
var statearr_35970_36053 = state_35963__$1;
(statearr_35970_36053[(2)] = inst_35874);

(statearr_35970_36053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (27))){
var state_35963__$1 = state_35963;
var statearr_35971_36054 = state_35963__$1;
(statearr_35971_36054[(2)] = null);

(statearr_35971_36054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (1))){
var inst_35815 = (state_35963[(13)]);
var inst_35812 = before_jsload.call(null,files);
var inst_35813 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35814 = (function (){return ((function (inst_35815,inst_35812,inst_35813,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35803_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35803_SHARP_);
});
;})(inst_35815,inst_35812,inst_35813,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35815__$1 = cljs.core.filter.call(null,inst_35814,files);
var inst_35816 = cljs.core.not_empty.call(null,inst_35815__$1);
var state_35963__$1 = (function (){var statearr_35972 = state_35963;
(statearr_35972[(14)] = inst_35813);

(statearr_35972[(13)] = inst_35815__$1);

(statearr_35972[(15)] = inst_35812);

return statearr_35972;
})();
if(cljs.core.truth_(inst_35816)){
var statearr_35973_36055 = state_35963__$1;
(statearr_35973_36055[(1)] = (2));

} else {
var statearr_35974_36056 = state_35963__$1;
(statearr_35974_36056[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (24))){
var state_35963__$1 = state_35963;
var statearr_35975_36057 = state_35963__$1;
(statearr_35975_36057[(2)] = null);

(statearr_35975_36057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (39))){
var inst_35916 = (state_35963[(16)]);
var state_35963__$1 = state_35963;
var statearr_35976_36058 = state_35963__$1;
(statearr_35976_36058[(2)] = inst_35916);

(statearr_35976_36058[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (46))){
var inst_35958 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_35977_36059 = state_35963__$1;
(statearr_35977_36059[(2)] = inst_35958);

(statearr_35977_36059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (4))){
var inst_35860 = (state_35963[(2)]);
var inst_35861 = cljs.core.List.EMPTY;
var inst_35862 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35861);
var inst_35863 = (function (){return ((function (inst_35860,inst_35861,inst_35862,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35804_SHARP_){
var and__26450__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35804_SHARP_);
if(cljs.core.truth_(and__26450__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35804_SHARP_));
} else {
return and__26450__auto__;
}
});
;})(inst_35860,inst_35861,inst_35862,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35864 = cljs.core.filter.call(null,inst_35863,files);
var inst_35865 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35866 = cljs.core.concat.call(null,inst_35864,inst_35865);
var state_35963__$1 = (function (){var statearr_35978 = state_35963;
(statearr_35978[(17)] = inst_35862);

(statearr_35978[(18)] = inst_35860);

(statearr_35978[(12)] = inst_35866);

return statearr_35978;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35979_36060 = state_35963__$1;
(statearr_35979_36060[(1)] = (16));

} else {
var statearr_35980_36061 = state_35963__$1;
(statearr_35980_36061[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (15))){
var inst_35850 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_35981_36062 = state_35963__$1;
(statearr_35981_36062[(2)] = inst_35850);

(statearr_35981_36062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (21))){
var inst_35876 = (state_35963[(19)]);
var inst_35876__$1 = (state_35963[(2)]);
var inst_35877 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35876__$1);
var state_35963__$1 = (function (){var statearr_35982 = state_35963;
(statearr_35982[(19)] = inst_35876__$1);

return statearr_35982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35963__$1,(22),inst_35877);
} else {
if((state_val_35964 === (31))){
var inst_35961 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35963__$1,inst_35961);
} else {
if((state_val_35964 === (32))){
var inst_35916 = (state_35963[(16)]);
var inst_35921 = inst_35916.cljs$lang$protocol_mask$partition0$;
var inst_35922 = (inst_35921 & (64));
var inst_35923 = inst_35916.cljs$core$ISeq$;
var inst_35924 = (cljs.core.PROTOCOL_SENTINEL === inst_35923);
var inst_35925 = (inst_35922) || (inst_35924);
var state_35963__$1 = state_35963;
if(cljs.core.truth_(inst_35925)){
var statearr_35983_36063 = state_35963__$1;
(statearr_35983_36063[(1)] = (35));

} else {
var statearr_35984_36064 = state_35963__$1;
(statearr_35984_36064[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (40))){
var inst_35938 = (state_35963[(20)]);
var inst_35937 = (state_35963[(2)]);
var inst_35938__$1 = cljs.core.get.call(null,inst_35937,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35939 = cljs.core.get.call(null,inst_35937,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35940 = cljs.core.not_empty.call(null,inst_35938__$1);
var state_35963__$1 = (function (){var statearr_35985 = state_35963;
(statearr_35985[(20)] = inst_35938__$1);

(statearr_35985[(21)] = inst_35939);

return statearr_35985;
})();
if(cljs.core.truth_(inst_35940)){
var statearr_35986_36065 = state_35963__$1;
(statearr_35986_36065[(1)] = (41));

} else {
var statearr_35987_36066 = state_35963__$1;
(statearr_35987_36066[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (33))){
var state_35963__$1 = state_35963;
var statearr_35988_36067 = state_35963__$1;
(statearr_35988_36067[(2)] = false);

(statearr_35988_36067[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (13))){
var inst_35836 = (state_35963[(22)]);
var inst_35840 = cljs.core.chunk_first.call(null,inst_35836);
var inst_35841 = cljs.core.chunk_rest.call(null,inst_35836);
var inst_35842 = cljs.core.count.call(null,inst_35840);
var inst_35823 = inst_35841;
var inst_35824 = inst_35840;
var inst_35825 = inst_35842;
var inst_35826 = (0);
var state_35963__$1 = (function (){var statearr_35989 = state_35963;
(statearr_35989[(7)] = inst_35823);

(statearr_35989[(8)] = inst_35826);

(statearr_35989[(9)] = inst_35825);

(statearr_35989[(10)] = inst_35824);

return statearr_35989;
})();
var statearr_35990_36068 = state_35963__$1;
(statearr_35990_36068[(2)] = null);

(statearr_35990_36068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (22))){
var inst_35879 = (state_35963[(23)]);
var inst_35876 = (state_35963[(19)]);
var inst_35884 = (state_35963[(24)]);
var inst_35880 = (state_35963[(25)]);
var inst_35879__$1 = (state_35963[(2)]);
var inst_35880__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35879__$1);
var inst_35881 = (function (){var all_files = inst_35876;
var res_SINGLEQUOTE_ = inst_35879__$1;
var res = inst_35880__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35879,inst_35876,inst_35884,inst_35880,inst_35879__$1,inst_35880__$1,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35805_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35805_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35879,inst_35876,inst_35884,inst_35880,inst_35879__$1,inst_35880__$1,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35882 = cljs.core.filter.call(null,inst_35881,inst_35879__$1);
var inst_35883 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35884__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35883);
var inst_35885 = cljs.core.not_empty.call(null,inst_35884__$1);
var state_35963__$1 = (function (){var statearr_35991 = state_35963;
(statearr_35991[(23)] = inst_35879__$1);

(statearr_35991[(26)] = inst_35882);

(statearr_35991[(24)] = inst_35884__$1);

(statearr_35991[(25)] = inst_35880__$1);

return statearr_35991;
})();
if(cljs.core.truth_(inst_35885)){
var statearr_35992_36069 = state_35963__$1;
(statearr_35992_36069[(1)] = (23));

} else {
var statearr_35993_36070 = state_35963__$1;
(statearr_35993_36070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (36))){
var state_35963__$1 = state_35963;
var statearr_35994_36071 = state_35963__$1;
(statearr_35994_36071[(2)] = false);

(statearr_35994_36071[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (41))){
var inst_35938 = (state_35963[(20)]);
var inst_35942 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35943 = cljs.core.map.call(null,inst_35942,inst_35938);
var inst_35944 = cljs.core.pr_str.call(null,inst_35943);
var inst_35945 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35944)].join('');
var inst_35946 = figwheel.client.utils.log.call(null,inst_35945);
var state_35963__$1 = state_35963;
var statearr_35995_36072 = state_35963__$1;
(statearr_35995_36072[(2)] = inst_35946);

(statearr_35995_36072[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (43))){
var inst_35939 = (state_35963[(21)]);
var inst_35949 = (state_35963[(2)]);
var inst_35950 = cljs.core.not_empty.call(null,inst_35939);
var state_35963__$1 = (function (){var statearr_35996 = state_35963;
(statearr_35996[(27)] = inst_35949);

return statearr_35996;
})();
if(cljs.core.truth_(inst_35950)){
var statearr_35997_36073 = state_35963__$1;
(statearr_35997_36073[(1)] = (44));

} else {
var statearr_35998_36074 = state_35963__$1;
(statearr_35998_36074[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (29))){
var inst_35879 = (state_35963[(23)]);
var inst_35876 = (state_35963[(19)]);
var inst_35916 = (state_35963[(16)]);
var inst_35882 = (state_35963[(26)]);
var inst_35884 = (state_35963[(24)]);
var inst_35880 = (state_35963[(25)]);
var inst_35912 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35915 = (function (){var all_files = inst_35876;
var res_SINGLEQUOTE_ = inst_35879;
var res = inst_35880;
var files_not_loaded = inst_35882;
var dependencies_that_loaded = inst_35884;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35916,inst_35882,inst_35884,inst_35880,inst_35912,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35914){
var map__35999 = p__35914;
var map__35999__$1 = ((((!((map__35999 == null)))?((((map__35999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35999):map__35999);
var namespace = cljs.core.get.call(null,map__35999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35916,inst_35882,inst_35884,inst_35880,inst_35912,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35916__$1 = cljs.core.group_by.call(null,inst_35915,inst_35882);
var inst_35918 = (inst_35916__$1 == null);
var inst_35919 = cljs.core.not.call(null,inst_35918);
var state_35963__$1 = (function (){var statearr_36001 = state_35963;
(statearr_36001[(28)] = inst_35912);

(statearr_36001[(16)] = inst_35916__$1);

return statearr_36001;
})();
if(inst_35919){
var statearr_36002_36075 = state_35963__$1;
(statearr_36002_36075[(1)] = (32));

} else {
var statearr_36003_36076 = state_35963__$1;
(statearr_36003_36076[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (44))){
var inst_35939 = (state_35963[(21)]);
var inst_35952 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35939);
var inst_35953 = cljs.core.pr_str.call(null,inst_35952);
var inst_35954 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35953)].join('');
var inst_35955 = figwheel.client.utils.log.call(null,inst_35954);
var state_35963__$1 = state_35963;
var statearr_36004_36077 = state_35963__$1;
(statearr_36004_36077[(2)] = inst_35955);

(statearr_36004_36077[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (6))){
var inst_35857 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_36005_36078 = state_35963__$1;
(statearr_36005_36078[(2)] = inst_35857);

(statearr_36005_36078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (28))){
var inst_35882 = (state_35963[(26)]);
var inst_35909 = (state_35963[(2)]);
var inst_35910 = cljs.core.not_empty.call(null,inst_35882);
var state_35963__$1 = (function (){var statearr_36006 = state_35963;
(statearr_36006[(29)] = inst_35909);

return statearr_36006;
})();
if(cljs.core.truth_(inst_35910)){
var statearr_36007_36079 = state_35963__$1;
(statearr_36007_36079[(1)] = (29));

} else {
var statearr_36008_36080 = state_35963__$1;
(statearr_36008_36080[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (25))){
var inst_35880 = (state_35963[(25)]);
var inst_35896 = (state_35963[(2)]);
var inst_35897 = cljs.core.not_empty.call(null,inst_35880);
var state_35963__$1 = (function (){var statearr_36009 = state_35963;
(statearr_36009[(30)] = inst_35896);

return statearr_36009;
})();
if(cljs.core.truth_(inst_35897)){
var statearr_36010_36081 = state_35963__$1;
(statearr_36010_36081[(1)] = (26));

} else {
var statearr_36011_36082 = state_35963__$1;
(statearr_36011_36082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (34))){
var inst_35932 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
if(cljs.core.truth_(inst_35932)){
var statearr_36012_36083 = state_35963__$1;
(statearr_36012_36083[(1)] = (38));

} else {
var statearr_36013_36084 = state_35963__$1;
(statearr_36013_36084[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (17))){
var state_35963__$1 = state_35963;
var statearr_36014_36085 = state_35963__$1;
(statearr_36014_36085[(2)] = recompile_dependents);

(statearr_36014_36085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (3))){
var state_35963__$1 = state_35963;
var statearr_36015_36086 = state_35963__$1;
(statearr_36015_36086[(2)] = null);

(statearr_36015_36086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (12))){
var inst_35853 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_36016_36087 = state_35963__$1;
(statearr_36016_36087[(2)] = inst_35853);

(statearr_36016_36087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (2))){
var inst_35815 = (state_35963[(13)]);
var inst_35822 = cljs.core.seq.call(null,inst_35815);
var inst_35823 = inst_35822;
var inst_35824 = null;
var inst_35825 = (0);
var inst_35826 = (0);
var state_35963__$1 = (function (){var statearr_36017 = state_35963;
(statearr_36017[(7)] = inst_35823);

(statearr_36017[(8)] = inst_35826);

(statearr_36017[(9)] = inst_35825);

(statearr_36017[(10)] = inst_35824);

return statearr_36017;
})();
var statearr_36018_36088 = state_35963__$1;
(statearr_36018_36088[(2)] = null);

(statearr_36018_36088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (23))){
var inst_35879 = (state_35963[(23)]);
var inst_35876 = (state_35963[(19)]);
var inst_35882 = (state_35963[(26)]);
var inst_35884 = (state_35963[(24)]);
var inst_35880 = (state_35963[(25)]);
var inst_35887 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35889 = (function (){var all_files = inst_35876;
var res_SINGLEQUOTE_ = inst_35879;
var res = inst_35880;
var files_not_loaded = inst_35882;
var dependencies_that_loaded = inst_35884;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35882,inst_35884,inst_35880,inst_35887,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35888){
var map__36019 = p__35888;
var map__36019__$1 = ((((!((map__36019 == null)))?((((map__36019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36019):map__36019);
var request_url = cljs.core.get.call(null,map__36019__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35882,inst_35884,inst_35880,inst_35887,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35890 = cljs.core.reverse.call(null,inst_35884);
var inst_35891 = cljs.core.map.call(null,inst_35889,inst_35890);
var inst_35892 = cljs.core.pr_str.call(null,inst_35891);
var inst_35893 = figwheel.client.utils.log.call(null,inst_35892);
var state_35963__$1 = (function (){var statearr_36021 = state_35963;
(statearr_36021[(31)] = inst_35887);

return statearr_36021;
})();
var statearr_36022_36089 = state_35963__$1;
(statearr_36022_36089[(2)] = inst_35893);

(statearr_36022_36089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (35))){
var state_35963__$1 = state_35963;
var statearr_36023_36090 = state_35963__$1;
(statearr_36023_36090[(2)] = true);

(statearr_36023_36090[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (19))){
var inst_35866 = (state_35963[(12)]);
var inst_35872 = figwheel.client.file_reloading.expand_files.call(null,inst_35866);
var state_35963__$1 = state_35963;
var statearr_36024_36091 = state_35963__$1;
(statearr_36024_36091[(2)] = inst_35872);

(statearr_36024_36091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (11))){
var state_35963__$1 = state_35963;
var statearr_36025_36092 = state_35963__$1;
(statearr_36025_36092[(2)] = null);

(statearr_36025_36092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (9))){
var inst_35855 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_36026_36093 = state_35963__$1;
(statearr_36026_36093[(2)] = inst_35855);

(statearr_36026_36093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (5))){
var inst_35826 = (state_35963[(8)]);
var inst_35825 = (state_35963[(9)]);
var inst_35828 = (inst_35826 < inst_35825);
var inst_35829 = inst_35828;
var state_35963__$1 = state_35963;
if(cljs.core.truth_(inst_35829)){
var statearr_36027_36094 = state_35963__$1;
(statearr_36027_36094[(1)] = (7));

} else {
var statearr_36028_36095 = state_35963__$1;
(statearr_36028_36095[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (14))){
var inst_35836 = (state_35963[(22)]);
var inst_35845 = cljs.core.first.call(null,inst_35836);
var inst_35846 = figwheel.client.file_reloading.eval_body.call(null,inst_35845,opts);
var inst_35847 = cljs.core.next.call(null,inst_35836);
var inst_35823 = inst_35847;
var inst_35824 = null;
var inst_35825 = (0);
var inst_35826 = (0);
var state_35963__$1 = (function (){var statearr_36029 = state_35963;
(statearr_36029[(7)] = inst_35823);

(statearr_36029[(8)] = inst_35826);

(statearr_36029[(9)] = inst_35825);

(statearr_36029[(32)] = inst_35846);

(statearr_36029[(10)] = inst_35824);

return statearr_36029;
})();
var statearr_36030_36096 = state_35963__$1;
(statearr_36030_36096[(2)] = null);

(statearr_36030_36096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (45))){
var state_35963__$1 = state_35963;
var statearr_36031_36097 = state_35963__$1;
(statearr_36031_36097[(2)] = null);

(statearr_36031_36097[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (26))){
var inst_35879 = (state_35963[(23)]);
var inst_35876 = (state_35963[(19)]);
var inst_35882 = (state_35963[(26)]);
var inst_35884 = (state_35963[(24)]);
var inst_35880 = (state_35963[(25)]);
var inst_35899 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35901 = (function (){var all_files = inst_35876;
var res_SINGLEQUOTE_ = inst_35879;
var res = inst_35880;
var files_not_loaded = inst_35882;
var dependencies_that_loaded = inst_35884;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35882,inst_35884,inst_35880,inst_35899,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35900){
var map__36032 = p__35900;
var map__36032__$1 = ((((!((map__36032 == null)))?((((map__36032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36032):map__36032);
var namespace = cljs.core.get.call(null,map__36032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36032__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35882,inst_35884,inst_35880,inst_35899,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35902 = cljs.core.map.call(null,inst_35901,inst_35880);
var inst_35903 = cljs.core.pr_str.call(null,inst_35902);
var inst_35904 = figwheel.client.utils.log.call(null,inst_35903);
var inst_35905 = (function (){var all_files = inst_35876;
var res_SINGLEQUOTE_ = inst_35879;
var res = inst_35880;
var files_not_loaded = inst_35882;
var dependencies_that_loaded = inst_35884;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35882,inst_35884,inst_35880,inst_35899,inst_35901,inst_35902,inst_35903,inst_35904,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35879,inst_35876,inst_35882,inst_35884,inst_35880,inst_35899,inst_35901,inst_35902,inst_35903,inst_35904,state_val_35964,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35906 = setTimeout(inst_35905,(10));
var state_35963__$1 = (function (){var statearr_36034 = state_35963;
(statearr_36034[(33)] = inst_35904);

(statearr_36034[(34)] = inst_35899);

return statearr_36034;
})();
var statearr_36035_36098 = state_35963__$1;
(statearr_36035_36098[(2)] = inst_35906);

(statearr_36035_36098[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (16))){
var state_35963__$1 = state_35963;
var statearr_36036_36099 = state_35963__$1;
(statearr_36036_36099[(2)] = reload_dependents);

(statearr_36036_36099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (38))){
var inst_35916 = (state_35963[(16)]);
var inst_35934 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35916);
var state_35963__$1 = state_35963;
var statearr_36037_36100 = state_35963__$1;
(statearr_36037_36100[(2)] = inst_35934);

(statearr_36037_36100[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (30))){
var state_35963__$1 = state_35963;
var statearr_36038_36101 = state_35963__$1;
(statearr_36038_36101[(2)] = null);

(statearr_36038_36101[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (10))){
var inst_35836 = (state_35963[(22)]);
var inst_35838 = cljs.core.chunked_seq_QMARK_.call(null,inst_35836);
var state_35963__$1 = state_35963;
if(inst_35838){
var statearr_36039_36102 = state_35963__$1;
(statearr_36039_36102[(1)] = (13));

} else {
var statearr_36040_36103 = state_35963__$1;
(statearr_36040_36103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (18))){
var inst_35870 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
if(cljs.core.truth_(inst_35870)){
var statearr_36041_36104 = state_35963__$1;
(statearr_36041_36104[(1)] = (19));

} else {
var statearr_36042_36105 = state_35963__$1;
(statearr_36042_36105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (42))){
var state_35963__$1 = state_35963;
var statearr_36043_36106 = state_35963__$1;
(statearr_36043_36106[(2)] = null);

(statearr_36043_36106[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (37))){
var inst_35929 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_36044_36107 = state_35963__$1;
(statearr_36044_36107[(2)] = inst_35929);

(statearr_36044_36107[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (8))){
var inst_35823 = (state_35963[(7)]);
var inst_35836 = (state_35963[(22)]);
var inst_35836__$1 = cljs.core.seq.call(null,inst_35823);
var state_35963__$1 = (function (){var statearr_36045 = state_35963;
(statearr_36045[(22)] = inst_35836__$1);

return statearr_36045;
})();
if(inst_35836__$1){
var statearr_36046_36108 = state_35963__$1;
(statearr_36046_36108[(1)] = (10));

} else {
var statearr_36047_36109 = state_35963__$1;
(statearr_36047_36109[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30944__auto__,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto____0 = (function (){
var statearr_36048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36048[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto__);

(statearr_36048[(1)] = (1));

return statearr_36048;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto____1 = (function (state_35963){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_35963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e36049){if((e36049 instanceof Object)){
var ex__30948__auto__ = e36049;
var statearr_36050_36110 = state_35963;
(statearr_36050_36110[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36111 = state_35963;
state_35963 = G__36111;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto__ = function(state_35963){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto____1.call(this,state_35963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31034__auto__ = (function (){var statearr_36051 = f__31033__auto__.call(null);
(statearr_36051[(6)] = c__31032__auto__);

return statearr_36051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__,map__35808,map__35808__$1,opts,before_jsload,on_jsload,reload_dependents,map__35809,map__35809__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31032__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36114,link){
var map__36115 = p__36114;
var map__36115__$1 = ((((!((map__36115 == null)))?((((map__36115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36115):map__36115);
var file = cljs.core.get.call(null,map__36115__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36115,map__36115__$1,file){
return (function (p1__36112_SHARP_,p2__36113_SHARP_){
if(cljs.core._EQ_.call(null,p1__36112_SHARP_,p2__36113_SHARP_)){
return p1__36112_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36115,map__36115__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36118){
var map__36119 = p__36118;
var map__36119__$1 = ((((!((map__36119 == null)))?((((map__36119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36119):map__36119);
var match_length = cljs.core.get.call(null,map__36119__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36119__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36117_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36117_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var G__36122 = arguments.length;
switch (G__36122) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36124_SHARP_,p2__36125_SHARP_){
return cljs.core.assoc.call(null,p1__36124_SHARP_,cljs.core.get.call(null,p2__36125_SHARP_,key),p2__36125_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36126){
var map__36127 = p__36126;
var map__36127__$1 = ((((!((map__36127 == null)))?((((map__36127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36127):map__36127);
var f_data = map__36127__$1;
var file = cljs.core.get.call(null,map__36127__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36129,p__36130){
var map__36131 = p__36129;
var map__36131__$1 = ((((!((map__36131 == null)))?((((map__36131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36131):map__36131);
var opts = map__36131__$1;
var on_cssload = cljs.core.get.call(null,map__36131__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36132 = p__36130;
var map__36132__$1 = ((((!((map__36132 == null)))?((((map__36132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36132):map__36132);
var files_msg = map__36132__$1;
var files = cljs.core.get.call(null,map__36132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36135_36139 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__36136_36140 = null;
var count__36137_36141 = (0);
var i__36138_36142 = (0);
while(true){
if((i__36138_36142 < count__36137_36141)){
var f_36143 = cljs.core._nth.call(null,chunk__36136_36140,i__36138_36142);
figwheel.client.file_reloading.reload_css_file.call(null,f_36143);

var G__36144 = seq__36135_36139;
var G__36145 = chunk__36136_36140;
var G__36146 = count__36137_36141;
var G__36147 = (i__36138_36142 + (1));
seq__36135_36139 = G__36144;
chunk__36136_36140 = G__36145;
count__36137_36141 = G__36146;
i__36138_36142 = G__36147;
continue;
} else {
var temp__4657__auto___36148 = cljs.core.seq.call(null,seq__36135_36139);
if(temp__4657__auto___36148){
var seq__36135_36149__$1 = temp__4657__auto___36148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36135_36149__$1)){
var c__27301__auto___36150 = cljs.core.chunk_first.call(null,seq__36135_36149__$1);
var G__36151 = cljs.core.chunk_rest.call(null,seq__36135_36149__$1);
var G__36152 = c__27301__auto___36150;
var G__36153 = cljs.core.count.call(null,c__27301__auto___36150);
var G__36154 = (0);
seq__36135_36139 = G__36151;
chunk__36136_36140 = G__36152;
count__36137_36141 = G__36153;
i__36138_36142 = G__36154;
continue;
} else {
var f_36155 = cljs.core.first.call(null,seq__36135_36149__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36155);

var G__36156 = cljs.core.next.call(null,seq__36135_36149__$1);
var G__36157 = null;
var G__36158 = (0);
var G__36159 = (0);
seq__36135_36139 = G__36156;
chunk__36136_36140 = G__36157;
count__36137_36141 = G__36158;
i__36138_36142 = G__36159;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36131,map__36131__$1,opts,on_cssload,map__36132,map__36132__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__36131,map__36131__$1,opts,on_cssload,map__36132,map__36132__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1553724330964
