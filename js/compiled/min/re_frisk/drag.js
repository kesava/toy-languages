// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frisk.drag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('goog.events.EventType');
if(typeof re_frisk.drag.draggable !== 'undefined'){
} else {
re_frisk.drag.draggable = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.drag.get_client_rect = (function re_frisk$drag$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$top,r.top], null);
});
re_frisk.drag.mouse_move_handler = (function re_frisk$drag$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_(re_frisk.drag.draggable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));
});
});
re_frisk.drag.mouse_up_handler = (function re_frisk$drag$mouse_up_handler(on_move){
return (function re_frisk$drag$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
re_frisk.drag.mouse_down_handler = (function re_frisk$drag$mouse_down_handler(e){
var map__17075 = re_frisk.drag.get_client_rect(e);
var map__17075__$1 = ((((!((map__17075 == null)))?((((map__17075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17075):map__17075);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17075__$1,cljs.core.cst$kw$left);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17075__$1,cljs.core.cst$kw$top);
var offset = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(e.clientX - left),cljs.core.cst$kw$y,(e.clientY - top)], null);
var on_move = re_frisk.drag.mouse_move_handler(offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

var G__17077 = window;
var G__17078 = goog.events.EventType.MOUSEUP;
var G__17079 = re_frisk.drag.mouse_up_handler(on_move);
return goog.events.listen(G__17077,G__17078,G__17079);
});
