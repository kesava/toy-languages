goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('toy_languages.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38834__delegate = function (x){
if(cljs.core.truth_(toy_languages.core.reload)){
return cljs.core.apply.call(null,toy_languages.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'toy-languages.core/reload' is missing");
}
};
var G__38834 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38835__i = 0, G__38835__a = new Array(arguments.length -  0);
while (G__38835__i < G__38835__a.length) {G__38835__a[G__38835__i] = arguments[G__38835__i + 0]; ++G__38835__i;}
  x = new cljs.core.IndexedSeq(G__38835__a,0,null);
} 
return G__38834__delegate.call(this,x);};
G__38834.cljs$lang$maxFixedArity = 0;
G__38834.cljs$lang$applyTo = (function (arglist__38836){
var x = cljs.core.seq(arglist__38836);
return G__38834__delegate(x);
});
G__38834.cljs$core$IFn$_invoke$arity$variadic = G__38834__delegate;
return G__38834;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
