goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('toy_languages.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38871__delegate = function (x){
if(cljs.core.truth_(toy_languages.core.reload)){
return cljs.core.apply.call(null,toy_languages.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'toy-languages.core/reload' is missing");
}
};
var G__38871 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38872__i = 0, G__38872__a = new Array(arguments.length -  0);
while (G__38872__i < G__38872__a.length) {G__38872__a[G__38872__i] = arguments[G__38872__i + 0]; ++G__38872__i;}
  x = new cljs.core.IndexedSeq(G__38872__a,0,null);
} 
return G__38871__delegate.call(this,x);};
G__38871.cljs$lang$maxFixedArity = 0;
G__38871.cljs$lang$applyTo = (function (arglist__38873){
var x = cljs.core.seq(arglist__38873);
return G__38871__delegate(x);
});
G__38871.cljs$core$IFn$_invoke$arity$variadic = G__38871__delegate;
return G__38871;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
