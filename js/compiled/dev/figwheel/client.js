// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38347 = arguments.length;
switch (G__38347) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27640__auto__ = [];
var len__27633__auto___38350 = arguments.length;
var i__27634__auto___38351 = (0);
while(true){
if((i__27634__auto___38351 < len__27633__auto___38350)){
args__27640__auto__.push((arguments[i__27634__auto___38351]));

var G__38352 = (i__27634__auto___38351 + (1));
i__27634__auto___38351 = G__38352;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38349){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38349));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27640__auto__ = [];
var len__27633__auto___38354 = arguments.length;
var i__27634__auto___38355 = (0);
while(true){
if((i__27634__auto___38355 < len__27633__auto___38354)){
args__27640__auto__.push((arguments[i__27634__auto___38355]));

var G__38356 = (i__27634__auto___38355 + (1));
i__27634__auto___38355 = G__38356;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38353){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38353));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38357 = cljs.core._EQ_;
var expr__38358 = (function (){var or__26462__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38361){if((e38361 instanceof Error)){
var e = e38361;
return false;
} else {
throw e38361;

}
}})();
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38357.call(null,"true",expr__38358))){
return true;
} else {
if(cljs.core.truth_(pred__38357.call(null,"false",expr__38358))){
return false;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38358)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38362){if((e38362 instanceof Error)){
var e = e38362;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Unable to access localStorage"].join(''));
} else {
throw e38362;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38363){
var map__38364 = p__38363;
var map__38364__$1 = ((((!((map__38364 == null)))?((((map__38364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38364):map__38364);
var message = cljs.core.get.call(null,map__38364__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38364__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26462__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26450__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26450__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26450__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31032__auto___38443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___38443,ch){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___38443,ch){
return (function (state_38415){
var state_val_38416 = (state_38415[(1)]);
if((state_val_38416 === (7))){
var inst_38411 = (state_38415[(2)]);
var state_38415__$1 = state_38415;
var statearr_38417_38444 = state_38415__$1;
(statearr_38417_38444[(2)] = inst_38411);

(statearr_38417_38444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (1))){
var state_38415__$1 = state_38415;
var statearr_38418_38445 = state_38415__$1;
(statearr_38418_38445[(2)] = null);

(statearr_38418_38445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (4))){
var inst_38368 = (state_38415[(7)]);
var inst_38368__$1 = (state_38415[(2)]);
var state_38415__$1 = (function (){var statearr_38419 = state_38415;
(statearr_38419[(7)] = inst_38368__$1);

return statearr_38419;
})();
if(cljs.core.truth_(inst_38368__$1)){
var statearr_38420_38446 = state_38415__$1;
(statearr_38420_38446[(1)] = (5));

} else {
var statearr_38421_38447 = state_38415__$1;
(statearr_38421_38447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (15))){
var inst_38375 = (state_38415[(8)]);
var inst_38390 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38375);
var inst_38391 = cljs.core.first.call(null,inst_38390);
var inst_38392 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38391);
var inst_38393 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38392)].join('');
var inst_38394 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38393);
var state_38415__$1 = state_38415;
var statearr_38422_38448 = state_38415__$1;
(statearr_38422_38448[(2)] = inst_38394);

(statearr_38422_38448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (13))){
var inst_38399 = (state_38415[(2)]);
var state_38415__$1 = state_38415;
var statearr_38423_38449 = state_38415__$1;
(statearr_38423_38449[(2)] = inst_38399);

(statearr_38423_38449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (6))){
var state_38415__$1 = state_38415;
var statearr_38424_38450 = state_38415__$1;
(statearr_38424_38450[(2)] = null);

(statearr_38424_38450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (17))){
var inst_38397 = (state_38415[(2)]);
var state_38415__$1 = state_38415;
var statearr_38425_38451 = state_38415__$1;
(statearr_38425_38451[(2)] = inst_38397);

(statearr_38425_38451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (3))){
var inst_38413 = (state_38415[(2)]);
var state_38415__$1 = state_38415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38415__$1,inst_38413);
} else {
if((state_val_38416 === (12))){
var inst_38374 = (state_38415[(9)]);
var inst_38388 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38374,opts);
var state_38415__$1 = state_38415;
if(cljs.core.truth_(inst_38388)){
var statearr_38426_38452 = state_38415__$1;
(statearr_38426_38452[(1)] = (15));

} else {
var statearr_38427_38453 = state_38415__$1;
(statearr_38427_38453[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (2))){
var state_38415__$1 = state_38415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38415__$1,(4),ch);
} else {
if((state_val_38416 === (11))){
var inst_38375 = (state_38415[(8)]);
var inst_38380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38381 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38375);
var inst_38382 = cljs.core.async.timeout.call(null,(1000));
var inst_38383 = [inst_38381,inst_38382];
var inst_38384 = (new cljs.core.PersistentVector(null,2,(5),inst_38380,inst_38383,null));
var state_38415__$1 = state_38415;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38415__$1,(14),inst_38384);
} else {
if((state_val_38416 === (9))){
var inst_38375 = (state_38415[(8)]);
var inst_38401 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38402 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38375);
var inst_38403 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38402);
var inst_38404 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38403)].join('');
var inst_38405 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38404);
var state_38415__$1 = (function (){var statearr_38428 = state_38415;
(statearr_38428[(10)] = inst_38401);

return statearr_38428;
})();
var statearr_38429_38454 = state_38415__$1;
(statearr_38429_38454[(2)] = inst_38405);

(statearr_38429_38454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (5))){
var inst_38368 = (state_38415[(7)]);
var inst_38370 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38371 = (new cljs.core.PersistentArrayMap(null,2,inst_38370,null));
var inst_38372 = (new cljs.core.PersistentHashSet(null,inst_38371,null));
var inst_38373 = figwheel.client.focus_msgs.call(null,inst_38372,inst_38368);
var inst_38374 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38373);
var inst_38375 = cljs.core.first.call(null,inst_38373);
var inst_38376 = figwheel.client.autoload_QMARK_.call(null);
var state_38415__$1 = (function (){var statearr_38430 = state_38415;
(statearr_38430[(8)] = inst_38375);

(statearr_38430[(9)] = inst_38374);

return statearr_38430;
})();
if(cljs.core.truth_(inst_38376)){
var statearr_38431_38455 = state_38415__$1;
(statearr_38431_38455[(1)] = (8));

} else {
var statearr_38432_38456 = state_38415__$1;
(statearr_38432_38456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (14))){
var inst_38386 = (state_38415[(2)]);
var state_38415__$1 = state_38415;
var statearr_38433_38457 = state_38415__$1;
(statearr_38433_38457[(2)] = inst_38386);

(statearr_38433_38457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (16))){
var state_38415__$1 = state_38415;
var statearr_38434_38458 = state_38415__$1;
(statearr_38434_38458[(2)] = null);

(statearr_38434_38458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (10))){
var inst_38407 = (state_38415[(2)]);
var state_38415__$1 = (function (){var statearr_38435 = state_38415;
(statearr_38435[(11)] = inst_38407);

return statearr_38435;
})();
var statearr_38436_38459 = state_38415__$1;
(statearr_38436_38459[(2)] = null);

(statearr_38436_38459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38416 === (8))){
var inst_38374 = (state_38415[(9)]);
var inst_38378 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38374,opts);
var state_38415__$1 = state_38415;
if(cljs.core.truth_(inst_38378)){
var statearr_38437_38460 = state_38415__$1;
(statearr_38437_38460[(1)] = (11));

} else {
var statearr_38438_38461 = state_38415__$1;
(statearr_38438_38461[(1)] = (12));

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
});})(c__31032__auto___38443,ch))
;
return ((function (switch__30944__auto__,c__31032__auto___38443,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30945__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30945__auto____0 = (function (){
var statearr_38439 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38439[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30945__auto__);

(statearr_38439[(1)] = (1));

return statearr_38439;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30945__auto____1 = (function (state_38415){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_38415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e38440){if((e38440 instanceof Object)){
var ex__30948__auto__ = e38440;
var statearr_38441_38462 = state_38415;
(statearr_38441_38462[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38463 = state_38415;
state_38415 = G__38463;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30945__auto__ = function(state_38415){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30945__auto____1.call(this,state_38415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30945__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30945__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___38443,ch))
})();
var state__31034__auto__ = (function (){var statearr_38442 = f__31033__auto__.call(null);
(statearr_38442[(6)] = c__31032__auto___38443);

return statearr_38442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___38443,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38464_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38464_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38466 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38466){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38465){if((e38465 instanceof Error)){
var e = e38465;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38466], null));
} else {
var e = e38465;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38466))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38467){
var map__38468 = p__38467;
var map__38468__$1 = ((((!((map__38468 == null)))?((((map__38468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38468):map__38468);
var opts = map__38468__$1;
var build_id = cljs.core.get.call(null,map__38468__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38468,map__38468__$1,opts,build_id){
return (function (p__38470){
var vec__38471 = p__38470;
var seq__38472 = cljs.core.seq.call(null,vec__38471);
var first__38473 = cljs.core.first.call(null,seq__38472);
var seq__38472__$1 = cljs.core.next.call(null,seq__38472);
var map__38474 = first__38473;
var map__38474__$1 = ((((!((map__38474 == null)))?((((map__38474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38474):map__38474);
var msg = map__38474__$1;
var msg_name = cljs.core.get.call(null,map__38474__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38472__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38471,seq__38472,first__38473,seq__38472__$1,map__38474,map__38474__$1,msg,msg_name,_,map__38468,map__38468__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38471,seq__38472,first__38473,seq__38472__$1,map__38474,map__38474__$1,msg,msg_name,_,map__38468,map__38468__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38468,map__38468__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38476){
var vec__38477 = p__38476;
var seq__38478 = cljs.core.seq.call(null,vec__38477);
var first__38479 = cljs.core.first.call(null,seq__38478);
var seq__38478__$1 = cljs.core.next.call(null,seq__38478);
var map__38480 = first__38479;
var map__38480__$1 = ((((!((map__38480 == null)))?((((map__38480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38480):map__38480);
var msg = map__38480__$1;
var msg_name = cljs.core.get.call(null,map__38480__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38478__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38482){
var map__38483 = p__38482;
var map__38483__$1 = ((((!((map__38483 == null)))?((((map__38483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38483):map__38483);
var on_compile_warning = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38483__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38483,map__38483__$1,on_compile_warning,on_compile_fail){
return (function (p__38485){
var vec__38486 = p__38485;
var seq__38487 = cljs.core.seq.call(null,vec__38486);
var first__38488 = cljs.core.first.call(null,seq__38487);
var seq__38487__$1 = cljs.core.next.call(null,seq__38487);
var map__38489 = first__38488;
var map__38489__$1 = ((((!((map__38489 == null)))?((((map__38489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38489):map__38489);
var msg = map__38489__$1;
var msg_name = cljs.core.get.call(null,map__38489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38487__$1;
var pred__38491 = cljs.core._EQ_;
var expr__38492 = msg_name;
if(cljs.core.truth_(pred__38491.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38492))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38491.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38492))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38483,map__38483__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__,msg_hist,msg_names,msg){
return (function (state_38581){
var state_val_38582 = (state_38581[(1)]);
if((state_val_38582 === (7))){
var inst_38501 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38501)){
var statearr_38583_38630 = state_38581__$1;
(statearr_38583_38630[(1)] = (8));

} else {
var statearr_38584_38631 = state_38581__$1;
(statearr_38584_38631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (20))){
var inst_38575 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38585_38632 = state_38581__$1;
(statearr_38585_38632[(2)] = inst_38575);

(statearr_38585_38632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (27))){
var inst_38571 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38586_38633 = state_38581__$1;
(statearr_38586_38633[(2)] = inst_38571);

(statearr_38586_38633[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (1))){
var inst_38494 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38494)){
var statearr_38587_38634 = state_38581__$1;
(statearr_38587_38634[(1)] = (2));

} else {
var statearr_38588_38635 = state_38581__$1;
(statearr_38588_38635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (24))){
var inst_38573 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38589_38636 = state_38581__$1;
(statearr_38589_38636[(2)] = inst_38573);

(statearr_38589_38636[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (4))){
var inst_38579 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38581__$1,inst_38579);
} else {
if((state_val_38582 === (15))){
var inst_38577 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38590_38637 = state_38581__$1;
(statearr_38590_38637[(2)] = inst_38577);

(statearr_38590_38637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (21))){
var inst_38530 = (state_38581[(2)]);
var inst_38531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38532 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38531);
var state_38581__$1 = (function (){var statearr_38591 = state_38581;
(statearr_38591[(7)] = inst_38530);

return statearr_38591;
})();
var statearr_38592_38638 = state_38581__$1;
(statearr_38592_38638[(2)] = inst_38532);

(statearr_38592_38638[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (31))){
var inst_38560 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38560)){
var statearr_38593_38639 = state_38581__$1;
(statearr_38593_38639[(1)] = (34));

} else {
var statearr_38594_38640 = state_38581__$1;
(statearr_38594_38640[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (32))){
var inst_38569 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38595_38641 = state_38581__$1;
(statearr_38595_38641[(2)] = inst_38569);

(statearr_38595_38641[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (33))){
var inst_38556 = (state_38581[(2)]);
var inst_38557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38557);
var state_38581__$1 = (function (){var statearr_38596 = state_38581;
(statearr_38596[(8)] = inst_38556);

return statearr_38596;
})();
var statearr_38597_38642 = state_38581__$1;
(statearr_38597_38642[(2)] = inst_38558);

(statearr_38597_38642[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (13))){
var inst_38515 = figwheel.client.heads_up.clear.call(null);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(16),inst_38515);
} else {
if((state_val_38582 === (22))){
var inst_38536 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38537 = figwheel.client.heads_up.append_warning_message.call(null,inst_38536);
var state_38581__$1 = state_38581;
var statearr_38598_38643 = state_38581__$1;
(statearr_38598_38643[(2)] = inst_38537);

(statearr_38598_38643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (36))){
var inst_38567 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38599_38644 = state_38581__$1;
(statearr_38599_38644[(2)] = inst_38567);

(statearr_38599_38644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (29))){
var inst_38547 = (state_38581[(2)]);
var inst_38548 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38549 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38548);
var state_38581__$1 = (function (){var statearr_38600 = state_38581;
(statearr_38600[(9)] = inst_38547);

return statearr_38600;
})();
var statearr_38601_38645 = state_38581__$1;
(statearr_38601_38645[(2)] = inst_38549);

(statearr_38601_38645[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (6))){
var inst_38496 = (state_38581[(10)]);
var state_38581__$1 = state_38581;
var statearr_38602_38646 = state_38581__$1;
(statearr_38602_38646[(2)] = inst_38496);

(statearr_38602_38646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (28))){
var inst_38543 = (state_38581[(2)]);
var inst_38544 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38545 = figwheel.client.heads_up.display_warning.call(null,inst_38544);
var state_38581__$1 = (function (){var statearr_38603 = state_38581;
(statearr_38603[(11)] = inst_38543);

return statearr_38603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(29),inst_38545);
} else {
if((state_val_38582 === (25))){
var inst_38541 = figwheel.client.heads_up.clear.call(null);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(28),inst_38541);
} else {
if((state_val_38582 === (34))){
var inst_38562 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(37),inst_38562);
} else {
if((state_val_38582 === (17))){
var inst_38521 = (state_38581[(2)]);
var inst_38522 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38523 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38522);
var state_38581__$1 = (function (){var statearr_38604 = state_38581;
(statearr_38604[(12)] = inst_38521);

return statearr_38604;
})();
var statearr_38605_38647 = state_38581__$1;
(statearr_38605_38647[(2)] = inst_38523);

(statearr_38605_38647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (3))){
var inst_38513 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38513)){
var statearr_38606_38648 = state_38581__$1;
(statearr_38606_38648[(1)] = (13));

} else {
var statearr_38607_38649 = state_38581__$1;
(statearr_38607_38649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (12))){
var inst_38509 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38608_38650 = state_38581__$1;
(statearr_38608_38650[(2)] = inst_38509);

(statearr_38608_38650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (2))){
var inst_38496 = (state_38581[(10)]);
var inst_38496__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38581__$1 = (function (){var statearr_38609 = state_38581;
(statearr_38609[(10)] = inst_38496__$1);

return statearr_38609;
})();
if(cljs.core.truth_(inst_38496__$1)){
var statearr_38610_38651 = state_38581__$1;
(statearr_38610_38651[(1)] = (5));

} else {
var statearr_38611_38652 = state_38581__$1;
(statearr_38611_38652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (23))){
var inst_38539 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38539)){
var statearr_38612_38653 = state_38581__$1;
(statearr_38612_38653[(1)] = (25));

} else {
var statearr_38613_38654 = state_38581__$1;
(statearr_38613_38654[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (35))){
var state_38581__$1 = state_38581;
var statearr_38614_38655 = state_38581__$1;
(statearr_38614_38655[(2)] = null);

(statearr_38614_38655[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (19))){
var inst_38534 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38534)){
var statearr_38615_38656 = state_38581__$1;
(statearr_38615_38656[(1)] = (22));

} else {
var statearr_38616_38657 = state_38581__$1;
(statearr_38616_38657[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (11))){
var inst_38505 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38617_38658 = state_38581__$1;
(statearr_38617_38658[(2)] = inst_38505);

(statearr_38617_38658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (9))){
var inst_38507 = figwheel.client.heads_up.clear.call(null);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(12),inst_38507);
} else {
if((state_val_38582 === (5))){
var inst_38498 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38581__$1 = state_38581;
var statearr_38618_38659 = state_38581__$1;
(statearr_38618_38659[(2)] = inst_38498);

(statearr_38618_38659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (14))){
var inst_38525 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38525)){
var statearr_38619_38660 = state_38581__$1;
(statearr_38619_38660[(1)] = (18));

} else {
var statearr_38620_38661 = state_38581__$1;
(statearr_38620_38661[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (26))){
var inst_38551 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38581__$1 = state_38581;
if(cljs.core.truth_(inst_38551)){
var statearr_38621_38662 = state_38581__$1;
(statearr_38621_38662[(1)] = (30));

} else {
var statearr_38622_38663 = state_38581__$1;
(statearr_38622_38663[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (16))){
var inst_38517 = (state_38581[(2)]);
var inst_38518 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38519 = figwheel.client.heads_up.display_exception.call(null,inst_38518);
var state_38581__$1 = (function (){var statearr_38623 = state_38581;
(statearr_38623[(13)] = inst_38517);

return statearr_38623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(17),inst_38519);
} else {
if((state_val_38582 === (30))){
var inst_38553 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38554 = figwheel.client.heads_up.display_warning.call(null,inst_38553);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(33),inst_38554);
} else {
if((state_val_38582 === (10))){
var inst_38511 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38624_38664 = state_38581__$1;
(statearr_38624_38664[(2)] = inst_38511);

(statearr_38624_38664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (18))){
var inst_38527 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38528 = figwheel.client.heads_up.display_exception.call(null,inst_38527);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(21),inst_38528);
} else {
if((state_val_38582 === (37))){
var inst_38564 = (state_38581[(2)]);
var state_38581__$1 = state_38581;
var statearr_38625_38665 = state_38581__$1;
(statearr_38625_38665[(2)] = inst_38564);

(statearr_38625_38665[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38582 === (8))){
var inst_38503 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38581__$1 = state_38581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38581__$1,(11),inst_38503);
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
});})(c__31032__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30944__auto__,c__31032__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto____0 = (function (){
var statearr_38626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38626[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto__);

(statearr_38626[(1)] = (1));

return statearr_38626;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto____1 = (function (state_38581){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_38581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e38627){if((e38627 instanceof Object)){
var ex__30948__auto__ = e38627;
var statearr_38628_38666 = state_38581;
(statearr_38628_38666[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38667 = state_38581;
state_38581 = G__38667;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto__ = function(state_38581){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto____1.call(this,state_38581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__,msg_hist,msg_names,msg))
})();
var state__31034__auto__ = (function (){var statearr_38629 = f__31033__auto__.call(null);
(statearr_38629[(6)] = c__31032__auto__);

return statearr_38629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__,msg_hist,msg_names,msg))
);

return c__31032__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31032__auto___38696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___38696,ch){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___38696,ch){
return (function (state_38682){
var state_val_38683 = (state_38682[(1)]);
if((state_val_38683 === (1))){
var state_38682__$1 = state_38682;
var statearr_38684_38697 = state_38682__$1;
(statearr_38684_38697[(2)] = null);

(statearr_38684_38697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (2))){
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(4),ch);
} else {
if((state_val_38683 === (3))){
var inst_38680 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38682__$1,inst_38680);
} else {
if((state_val_38683 === (4))){
var inst_38670 = (state_38682[(7)]);
var inst_38670__$1 = (state_38682[(2)]);
var state_38682__$1 = (function (){var statearr_38685 = state_38682;
(statearr_38685[(7)] = inst_38670__$1);

return statearr_38685;
})();
if(cljs.core.truth_(inst_38670__$1)){
var statearr_38686_38698 = state_38682__$1;
(statearr_38686_38698[(1)] = (5));

} else {
var statearr_38687_38699 = state_38682__$1;
(statearr_38687_38699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (5))){
var inst_38670 = (state_38682[(7)]);
var inst_38672 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38670);
var state_38682__$1 = state_38682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38682__$1,(8),inst_38672);
} else {
if((state_val_38683 === (6))){
var state_38682__$1 = state_38682;
var statearr_38688_38700 = state_38682__$1;
(statearr_38688_38700[(2)] = null);

(statearr_38688_38700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (7))){
var inst_38678 = (state_38682[(2)]);
var state_38682__$1 = state_38682;
var statearr_38689_38701 = state_38682__$1;
(statearr_38689_38701[(2)] = inst_38678);

(statearr_38689_38701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38683 === (8))){
var inst_38674 = (state_38682[(2)]);
var state_38682__$1 = (function (){var statearr_38690 = state_38682;
(statearr_38690[(8)] = inst_38674);

return statearr_38690;
})();
var statearr_38691_38702 = state_38682__$1;
(statearr_38691_38702[(2)] = null);

(statearr_38691_38702[(1)] = (2));


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
});})(c__31032__auto___38696,ch))
;
return ((function (switch__30944__auto__,c__31032__auto___38696,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30945__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30945__auto____0 = (function (){
var statearr_38692 = [null,null,null,null,null,null,null,null,null];
(statearr_38692[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30945__auto__);

(statearr_38692[(1)] = (1));

return statearr_38692;
});
var figwheel$client$heads_up_plugin_$_state_machine__30945__auto____1 = (function (state_38682){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_38682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e38693){if((e38693 instanceof Object)){
var ex__30948__auto__ = e38693;
var statearr_38694_38703 = state_38682;
(statearr_38694_38703[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38704 = state_38682;
state_38682 = G__38704;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30945__auto__ = function(state_38682){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30945__auto____1.call(this,state_38682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30945__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30945__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___38696,ch))
})();
var state__31034__auto__ = (function (){var statearr_38695 = f__31033__auto__.call(null);
(statearr_38695[(6)] = c__31032__auto___38696);

return statearr_38695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___38696,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__){
return (function (state_38710){
var state_val_38711 = (state_38710[(1)]);
if((state_val_38711 === (1))){
var inst_38705 = cljs.core.async.timeout.call(null,(3000));
var state_38710__$1 = state_38710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38710__$1,(2),inst_38705);
} else {
if((state_val_38711 === (2))){
var inst_38707 = (state_38710[(2)]);
var inst_38708 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38710__$1 = (function (){var statearr_38712 = state_38710;
(statearr_38712[(7)] = inst_38707);

return statearr_38712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38710__$1,inst_38708);
} else {
return null;
}
}
});})(c__31032__auto__))
;
return ((function (switch__30944__auto__,c__31032__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30945__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30945__auto____0 = (function (){
var statearr_38713 = [null,null,null,null,null,null,null,null];
(statearr_38713[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30945__auto__);

(statearr_38713[(1)] = (1));

return statearr_38713;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30945__auto____1 = (function (state_38710){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_38710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e38714){if((e38714 instanceof Object)){
var ex__30948__auto__ = e38714;
var statearr_38715_38717 = state_38710;
(statearr_38715_38717[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38718 = state_38710;
state_38710 = G__38718;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30945__auto__ = function(state_38710){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30945__auto____1.call(this,state_38710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30945__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30945__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__))
})();
var state__31034__auto__ = (function (){var statearr_38716 = f__31033__auto__.call(null);
(statearr_38716[(6)] = c__31032__auto__);

return statearr_38716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__))
);

return c__31032__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38725){
var state_val_38726 = (state_38725[(1)]);
if((state_val_38726 === (1))){
var inst_38719 = cljs.core.async.timeout.call(null,(2000));
var state_38725__$1 = state_38725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38725__$1,(2),inst_38719);
} else {
if((state_val_38726 === (2))){
var inst_38721 = (state_38725[(2)]);
var inst_38722 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38723 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38722);
var state_38725__$1 = (function (){var statearr_38727 = state_38725;
(statearr_38727[(7)] = inst_38721);

return statearr_38727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38725__$1,inst_38723);
} else {
return null;
}
}
});})(c__31032__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30944__auto__,c__31032__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto____0 = (function (){
var statearr_38728 = [null,null,null,null,null,null,null,null];
(statearr_38728[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto__);

(statearr_38728[(1)] = (1));

return statearr_38728;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto____1 = (function (state_38725){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_38725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e38729){if((e38729 instanceof Object)){
var ex__30948__auto__ = e38729;
var statearr_38730_38732 = state_38725;
(statearr_38730_38732[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38733 = state_38725;
state_38725 = G__38733;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto__ = function(state_38725){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto____1.call(this,state_38725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31034__auto__ = (function (){var statearr_38731 = f__31033__auto__.call(null);
(statearr_38731[(6)] = c__31032__auto__);

return statearr_38731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__,figwheel_version,temp__4657__auto__))
);

return c__31032__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38734){
var map__38735 = p__38734;
var map__38735__$1 = ((((!((map__38735 == null)))?((((map__38735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38735):map__38735);
var file = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38737 = "";
var G__38737__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38737),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38737);
var G__38737__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38737__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38737__$1);
if(cljs.core.truth_((function (){var and__26450__auto__ = line;
if(cljs.core.truth_(and__26450__auto__)){
return column;
} else {
return and__26450__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38737__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38737__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38738){
var map__38739 = p__38738;
var map__38739__$1 = ((((!((map__38739 == null)))?((((map__38739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38739):map__38739);
var ed = map__38739__$1;
var formatted_exception = cljs.core.get.call(null,map__38739__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38739__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38739__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38741_38745 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38742_38746 = null;
var count__38743_38747 = (0);
var i__38744_38748 = (0);
while(true){
if((i__38744_38748 < count__38743_38747)){
var msg_38749 = cljs.core._nth.call(null,chunk__38742_38746,i__38744_38748);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38749);

var G__38750 = seq__38741_38745;
var G__38751 = chunk__38742_38746;
var G__38752 = count__38743_38747;
var G__38753 = (i__38744_38748 + (1));
seq__38741_38745 = G__38750;
chunk__38742_38746 = G__38751;
count__38743_38747 = G__38752;
i__38744_38748 = G__38753;
continue;
} else {
var temp__4657__auto___38754 = cljs.core.seq.call(null,seq__38741_38745);
if(temp__4657__auto___38754){
var seq__38741_38755__$1 = temp__4657__auto___38754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38741_38755__$1)){
var c__27301__auto___38756 = cljs.core.chunk_first.call(null,seq__38741_38755__$1);
var G__38757 = cljs.core.chunk_rest.call(null,seq__38741_38755__$1);
var G__38758 = c__27301__auto___38756;
var G__38759 = cljs.core.count.call(null,c__27301__auto___38756);
var G__38760 = (0);
seq__38741_38745 = G__38757;
chunk__38742_38746 = G__38758;
count__38743_38747 = G__38759;
i__38744_38748 = G__38760;
continue;
} else {
var msg_38761 = cljs.core.first.call(null,seq__38741_38755__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38761);

var G__38762 = cljs.core.next.call(null,seq__38741_38755__$1);
var G__38763 = null;
var G__38764 = (0);
var G__38765 = (0);
seq__38741_38745 = G__38762;
chunk__38742_38746 = G__38763;
count__38743_38747 = G__38764;
i__38744_38748 = G__38765;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38766){
var map__38767 = p__38766;
var map__38767__$1 = ((((!((map__38767 == null)))?((((map__38767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38767):map__38767);
var w = map__38767__$1;
var message = cljs.core.get.call(null,map__38767__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/dev/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/dev/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26450__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26450__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26450__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38769 = cljs.core.seq.call(null,plugins);
var chunk__38770 = null;
var count__38771 = (0);
var i__38772 = (0);
while(true){
if((i__38772 < count__38771)){
var vec__38773 = cljs.core._nth.call(null,chunk__38770,i__38772);
var k = cljs.core.nth.call(null,vec__38773,(0),null);
var plugin = cljs.core.nth.call(null,vec__38773,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38779 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38769,chunk__38770,count__38771,i__38772,pl_38779,vec__38773,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38779.call(null,msg_hist);
});})(seq__38769,chunk__38770,count__38771,i__38772,pl_38779,vec__38773,k,plugin))
);
} else {
}

var G__38780 = seq__38769;
var G__38781 = chunk__38770;
var G__38782 = count__38771;
var G__38783 = (i__38772 + (1));
seq__38769 = G__38780;
chunk__38770 = G__38781;
count__38771 = G__38782;
i__38772 = G__38783;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38769);
if(temp__4657__auto__){
var seq__38769__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38769__$1)){
var c__27301__auto__ = cljs.core.chunk_first.call(null,seq__38769__$1);
var G__38784 = cljs.core.chunk_rest.call(null,seq__38769__$1);
var G__38785 = c__27301__auto__;
var G__38786 = cljs.core.count.call(null,c__27301__auto__);
var G__38787 = (0);
seq__38769 = G__38784;
chunk__38770 = G__38785;
count__38771 = G__38786;
i__38772 = G__38787;
continue;
} else {
var vec__38776 = cljs.core.first.call(null,seq__38769__$1);
var k = cljs.core.nth.call(null,vec__38776,(0),null);
var plugin = cljs.core.nth.call(null,vec__38776,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38788 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38769,chunk__38770,count__38771,i__38772,pl_38788,vec__38776,k,plugin,seq__38769__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38788.call(null,msg_hist);
});})(seq__38769,chunk__38770,count__38771,i__38772,pl_38788,vec__38776,k,plugin,seq__38769__$1,temp__4657__auto__))
);
} else {
}

var G__38789 = cljs.core.next.call(null,seq__38769__$1);
var G__38790 = null;
var G__38791 = (0);
var G__38792 = (0);
seq__38769 = G__38789;
chunk__38770 = G__38790;
count__38771 = G__38791;
i__38772 = G__38792;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38794 = arguments.length;
switch (G__38794) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38795_38800 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38796_38801 = null;
var count__38797_38802 = (0);
var i__38798_38803 = (0);
while(true){
if((i__38798_38803 < count__38797_38802)){
var msg_38804 = cljs.core._nth.call(null,chunk__38796_38801,i__38798_38803);
figwheel.client.socket.handle_incoming_message.call(null,msg_38804);

var G__38805 = seq__38795_38800;
var G__38806 = chunk__38796_38801;
var G__38807 = count__38797_38802;
var G__38808 = (i__38798_38803 + (1));
seq__38795_38800 = G__38805;
chunk__38796_38801 = G__38806;
count__38797_38802 = G__38807;
i__38798_38803 = G__38808;
continue;
} else {
var temp__4657__auto___38809 = cljs.core.seq.call(null,seq__38795_38800);
if(temp__4657__auto___38809){
var seq__38795_38810__$1 = temp__4657__auto___38809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38795_38810__$1)){
var c__27301__auto___38811 = cljs.core.chunk_first.call(null,seq__38795_38810__$1);
var G__38812 = cljs.core.chunk_rest.call(null,seq__38795_38810__$1);
var G__38813 = c__27301__auto___38811;
var G__38814 = cljs.core.count.call(null,c__27301__auto___38811);
var G__38815 = (0);
seq__38795_38800 = G__38812;
chunk__38796_38801 = G__38813;
count__38797_38802 = G__38814;
i__38798_38803 = G__38815;
continue;
} else {
var msg_38816 = cljs.core.first.call(null,seq__38795_38810__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38816);

var G__38817 = cljs.core.next.call(null,seq__38795_38810__$1);
var G__38818 = null;
var G__38819 = (0);
var G__38820 = (0);
seq__38795_38800 = G__38817;
chunk__38796_38801 = G__38818;
count__38797_38802 = G__38819;
i__38798_38803 = G__38820;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27640__auto__ = [];
var len__27633__auto___38825 = arguments.length;
var i__27634__auto___38826 = (0);
while(true){
if((i__27634__auto___38826 < len__27633__auto___38825)){
args__27640__auto__.push((arguments[i__27634__auto___38826]));

var G__38827 = (i__27634__auto___38826 + (1));
i__27634__auto___38826 = G__38827;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((0) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27641__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38822){
var map__38823 = p__38822;
var map__38823__$1 = ((((!((map__38823 == null)))?((((map__38823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38823):map__38823);
var opts = map__38823__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38821){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38821));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38828){if((e38828 instanceof Error)){
var e = e38828;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38828;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38829){
var map__38830 = p__38829;
var map__38830__$1 = ((((!((map__38830 == null)))?((((map__38830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38830):map__38830);
var msg_name = cljs.core.get.call(null,map__38830__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1553721088312
