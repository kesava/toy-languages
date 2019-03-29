// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31078 = arguments.length;
switch (G__31078) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31079 = (function (f,blockable,meta31080){
this.f = f;
this.blockable = blockable;
this.meta31080 = meta31080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31081,meta31080__$1){
var self__ = this;
var _31081__$1 = this;
return (new cljs.core.async.t_cljs$core$async31079(self__.f,self__.blockable,meta31080__$1));
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31081){
var self__ = this;
var _31081__$1 = this;
return self__.meta31080;
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31080","meta31080",1347087362,null)], null);
});

cljs.core.async.t_cljs$core$async31079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31079";

cljs.core.async.t_cljs$core$async31079.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async31079");
});

cljs.core.async.__GT_t_cljs$core$async31079 = (function cljs$core$async$__GT_t_cljs$core$async31079(f__$1,blockable__$1,meta31080){
return (new cljs.core.async.t_cljs$core$async31079(f__$1,blockable__$1,meta31080));
});

}

return (new cljs.core.async.t_cljs$core$async31079(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31085 = arguments.length;
switch (G__31085) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31088 = arguments.length;
switch (G__31088) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31091 = arguments.length;
switch (G__31091) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31093 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31093);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31093,ret){
return (function (){
return fn1.call(null,val_31093);
});})(val_31093,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31095 = arguments.length;
switch (G__31095) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27409__auto___31097 = n;
var x_31098 = (0);
while(true){
if((x_31098 < n__27409__auto___31097)){
(a[x_31098] = (0));

var G__31099 = (x_31098 + (1));
x_31098 = G__31099;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31100 = (i + (1));
i = G__31100;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31101 = (function (flag,meta31102){
this.flag = flag;
this.meta31102 = meta31102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31103,meta31102__$1){
var self__ = this;
var _31103__$1 = this;
return (new cljs.core.async.t_cljs$core$async31101(self__.flag,meta31102__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31103){
var self__ = this;
var _31103__$1 = this;
return self__.meta31102;
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31102","meta31102",-706429532,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31101";

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async31101");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31101 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31101(flag__$1,meta31102){
return (new cljs.core.async.t_cljs$core$async31101(flag__$1,meta31102));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31101(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31104 = (function (flag,cb,meta31105){
this.flag = flag;
this.cb = cb;
this.meta31105 = meta31105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31106,meta31105__$1){
var self__ = this;
var _31106__$1 = this;
return (new cljs.core.async.t_cljs$core$async31104(self__.flag,self__.cb,meta31105__$1));
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31106){
var self__ = this;
var _31106__$1 = this;
return self__.meta31105;
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31105","meta31105",1740122376,null)], null);
});

cljs.core.async.t_cljs$core$async31104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31104";

cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async31104");
});

cljs.core.async.__GT_t_cljs$core$async31104 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31104(flag__$1,cb__$1,meta31105){
return (new cljs.core.async.t_cljs$core$async31104(flag__$1,cb__$1,meta31105));
});

}

return (new cljs.core.async.t_cljs$core$async31104(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31107_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31108_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31108_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26462__auto__ = wport;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31109 = (i + (1));
i = G__31109;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26462__auto__ = ret;
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26450__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26450__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26450__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27640__auto__ = [];
var len__27633__auto___31115 = arguments.length;
var i__27634__auto___31116 = (0);
while(true){
if((i__27634__auto___31116 < len__27633__auto___31115)){
args__27640__auto__.push((arguments[i__27634__auto___31116]));

var G__31117 = (i__27634__auto___31116 + (1));
i__27634__auto___31116 = G__31117;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((1) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27641__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31112){
var map__31113 = p__31112;
var map__31113__$1 = ((((!((map__31113 == null)))?((((map__31113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31113):map__31113);
var opts = map__31113__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31110){
var G__31111 = cljs.core.first.call(null,seq31110);
var seq31110__$1 = cljs.core.next.call(null,seq31110);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31111,seq31110__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31119 = arguments.length;
switch (G__31119) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31032__auto___31165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___31165){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___31165){
return (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (7))){
var inst_31139 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31145_31166 = state_31143__$1;
(statearr_31145_31166[(2)] = inst_31139);

(statearr_31145_31166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (1))){
var state_31143__$1 = state_31143;
var statearr_31146_31167 = state_31143__$1;
(statearr_31146_31167[(2)] = null);

(statearr_31146_31167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (4))){
var inst_31122 = (state_31143[(7)]);
var inst_31122__$1 = (state_31143[(2)]);
var inst_31123 = (inst_31122__$1 == null);
var state_31143__$1 = (function (){var statearr_31147 = state_31143;
(statearr_31147[(7)] = inst_31122__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31123)){
var statearr_31148_31168 = state_31143__$1;
(statearr_31148_31168[(1)] = (5));

} else {
var statearr_31149_31169 = state_31143__$1;
(statearr_31149_31169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (13))){
var state_31143__$1 = state_31143;
var statearr_31150_31170 = state_31143__$1;
(statearr_31150_31170[(2)] = null);

(statearr_31150_31170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (6))){
var inst_31122 = (state_31143[(7)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31143__$1,(11),to,inst_31122);
} else {
if((state_val_31144 === (3))){
var inst_31141 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31143__$1,inst_31141);
} else {
if((state_val_31144 === (12))){
var state_31143__$1 = state_31143;
var statearr_31151_31171 = state_31143__$1;
(statearr_31151_31171[(2)] = null);

(statearr_31151_31171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (2))){
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31143__$1,(4),from);
} else {
if((state_val_31144 === (11))){
var inst_31132 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31132)){
var statearr_31152_31172 = state_31143__$1;
(statearr_31152_31172[(1)] = (12));

} else {
var statearr_31153_31173 = state_31143__$1;
(statearr_31153_31173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (9))){
var state_31143__$1 = state_31143;
var statearr_31154_31174 = state_31143__$1;
(statearr_31154_31174[(2)] = null);

(statearr_31154_31174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (5))){
var state_31143__$1 = state_31143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31155_31175 = state_31143__$1;
(statearr_31155_31175[(1)] = (8));

} else {
var statearr_31156_31176 = state_31143__$1;
(statearr_31156_31176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (14))){
var inst_31137 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31157_31177 = state_31143__$1;
(statearr_31157_31177[(2)] = inst_31137);

(statearr_31157_31177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (10))){
var inst_31129 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31158_31178 = state_31143__$1;
(statearr_31158_31178[(2)] = inst_31129);

(statearr_31158_31178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (8))){
var inst_31126 = cljs.core.async.close_BANG_.call(null,to);
var state_31143__$1 = state_31143;
var statearr_31159_31179 = state_31143__$1;
(statearr_31159_31179[(2)] = inst_31126);

(statearr_31159_31179[(1)] = (10));


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
});})(c__31032__auto___31165))
;
return ((function (switch__30944__auto__,c__31032__auto___31165){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_31160 = [null,null,null,null,null,null,null,null];
(statearr_31160[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_31160[(1)] = (1));

return statearr_31160;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_31143){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31161){if((e31161 instanceof Object)){
var ex__30948__auto__ = e31161;
var statearr_31162_31180 = state_31143;
(statearr_31162_31180[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31181 = state_31143;
state_31143 = G__31181;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___31165))
})();
var state__31034__auto__ = (function (){var statearr_31163 = f__31033__auto__.call(null);
(statearr_31163[(6)] = c__31032__auto___31165);

return statearr_31163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___31165))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31182){
var vec__31183 = p__31182;
var v = cljs.core.nth.call(null,vec__31183,(0),null);
var p = cljs.core.nth.call(null,vec__31183,(1),null);
var job = vec__31183;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31032__auto___31354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___31354,res,vec__31183,v,p,job,jobs,results){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___31354,res,vec__31183,v,p,job,jobs,results){
return (function (state_31190){
var state_val_31191 = (state_31190[(1)]);
if((state_val_31191 === (1))){
var state_31190__$1 = state_31190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31190__$1,(2),res,v);
} else {
if((state_val_31191 === (2))){
var inst_31187 = (state_31190[(2)]);
var inst_31188 = cljs.core.async.close_BANG_.call(null,res);
var state_31190__$1 = (function (){var statearr_31192 = state_31190;
(statearr_31192[(7)] = inst_31187);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31190__$1,inst_31188);
} else {
return null;
}
}
});})(c__31032__auto___31354,res,vec__31183,v,p,job,jobs,results))
;
return ((function (switch__30944__auto__,c__31032__auto___31354,res,vec__31183,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0 = (function (){
var statearr_31193 = [null,null,null,null,null,null,null,null];
(statearr_31193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__);

(statearr_31193[(1)] = (1));

return statearr_31193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1 = (function (state_31190){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31194){if((e31194 instanceof Object)){
var ex__30948__auto__ = e31194;
var statearr_31195_31355 = state_31190;
(statearr_31195_31355[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31356 = state_31190;
state_31190 = G__31356;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = function(state_31190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1.call(this,state_31190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___31354,res,vec__31183,v,p,job,jobs,results))
})();
var state__31034__auto__ = (function (){var statearr_31196 = f__31033__auto__.call(null);
(statearr_31196[(6)] = c__31032__auto___31354);

return statearr_31196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___31354,res,vec__31183,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31197){
var vec__31198 = p__31197;
var v = cljs.core.nth.call(null,vec__31198,(0),null);
var p = cljs.core.nth.call(null,vec__31198,(1),null);
var job = vec__31198;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27409__auto___31357 = n;
var __31358 = (0);
while(true){
if((__31358 < n__27409__auto___31357)){
var G__31201_31359 = type;
var G__31201_31360__$1 = (((G__31201_31359 instanceof cljs.core.Keyword))?G__31201_31359.fqn:null);
switch (G__31201_31360__$1) {
case "compute":
var c__31032__auto___31362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31358,c__31032__auto___31362,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (__31358,c__31032__auto___31362,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async){
return (function (state_31214){
var state_val_31215 = (state_31214[(1)]);
if((state_val_31215 === (1))){
var state_31214__$1 = state_31214;
var statearr_31216_31363 = state_31214__$1;
(statearr_31216_31363[(2)] = null);

(statearr_31216_31363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (2))){
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31214__$1,(4),jobs);
} else {
if((state_val_31215 === (3))){
var inst_31212 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31214__$1,inst_31212);
} else {
if((state_val_31215 === (4))){
var inst_31204 = (state_31214[(2)]);
var inst_31205 = process.call(null,inst_31204);
var state_31214__$1 = state_31214;
if(cljs.core.truth_(inst_31205)){
var statearr_31217_31364 = state_31214__$1;
(statearr_31217_31364[(1)] = (5));

} else {
var statearr_31218_31365 = state_31214__$1;
(statearr_31218_31365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (5))){
var state_31214__$1 = state_31214;
var statearr_31219_31366 = state_31214__$1;
(statearr_31219_31366[(2)] = null);

(statearr_31219_31366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (6))){
var state_31214__$1 = state_31214;
var statearr_31220_31367 = state_31214__$1;
(statearr_31220_31367[(2)] = null);

(statearr_31220_31367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (7))){
var inst_31210 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31221_31368 = state_31214__$1;
(statearr_31221_31368[(2)] = inst_31210);

(statearr_31221_31368[(1)] = (3));


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
});})(__31358,c__31032__auto___31362,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async))
;
return ((function (__31358,switch__30944__auto__,c__31032__auto___31362,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0 = (function (){
var statearr_31222 = [null,null,null,null,null,null,null];
(statearr_31222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__);

(statearr_31222[(1)] = (1));

return statearr_31222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1 = (function (state_31214){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31223){if((e31223 instanceof Object)){
var ex__30948__auto__ = e31223;
var statearr_31224_31369 = state_31214;
(statearr_31224_31369[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31370 = state_31214;
state_31214 = G__31370;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = function(state_31214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1.call(this,state_31214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__;
})()
;})(__31358,switch__30944__auto__,c__31032__auto___31362,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async))
})();
var state__31034__auto__ = (function (){var statearr_31225 = f__31033__auto__.call(null);
(statearr_31225[(6)] = c__31032__auto___31362);

return statearr_31225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(__31358,c__31032__auto___31362,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async))
);


break;
case "async":
var c__31032__auto___31371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31358,c__31032__auto___31371,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (__31358,c__31032__auto___31371,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async){
return (function (state_31238){
var state_val_31239 = (state_31238[(1)]);
if((state_val_31239 === (1))){
var state_31238__$1 = state_31238;
var statearr_31240_31372 = state_31238__$1;
(statearr_31240_31372[(2)] = null);

(statearr_31240_31372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (2))){
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31238__$1,(4),jobs);
} else {
if((state_val_31239 === (3))){
var inst_31236 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31238__$1,inst_31236);
} else {
if((state_val_31239 === (4))){
var inst_31228 = (state_31238[(2)]);
var inst_31229 = async.call(null,inst_31228);
var state_31238__$1 = state_31238;
if(cljs.core.truth_(inst_31229)){
var statearr_31241_31373 = state_31238__$1;
(statearr_31241_31373[(1)] = (5));

} else {
var statearr_31242_31374 = state_31238__$1;
(statearr_31242_31374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (5))){
var state_31238__$1 = state_31238;
var statearr_31243_31375 = state_31238__$1;
(statearr_31243_31375[(2)] = null);

(statearr_31243_31375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (6))){
var state_31238__$1 = state_31238;
var statearr_31244_31376 = state_31238__$1;
(statearr_31244_31376[(2)] = null);

(statearr_31244_31376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31239 === (7))){
var inst_31234 = (state_31238[(2)]);
var state_31238__$1 = state_31238;
var statearr_31245_31377 = state_31238__$1;
(statearr_31245_31377[(2)] = inst_31234);

(statearr_31245_31377[(1)] = (3));


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
});})(__31358,c__31032__auto___31371,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async))
;
return ((function (__31358,switch__30944__auto__,c__31032__auto___31371,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null];
(statearr_31246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1 = (function (state_31238){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__30948__auto__ = e31247;
var statearr_31248_31378 = state_31238;
(statearr_31248_31378[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31379 = state_31238;
state_31238 = G__31379;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = function(state_31238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1.call(this,state_31238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__;
})()
;})(__31358,switch__30944__auto__,c__31032__auto___31371,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async))
})();
var state__31034__auto__ = (function (){var statearr_31249 = f__31033__auto__.call(null);
(statearr_31249[(6)] = c__31032__auto___31371);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(__31358,c__31032__auto___31371,G__31201_31359,G__31201_31360__$1,n__27409__auto___31357,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31201_31360__$1)].join('')));

}

var G__31380 = (__31358 + (1));
__31358 = G__31380;
continue;
} else {
}
break;
}

var c__31032__auto___31381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___31381,jobs,results,process,async){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___31381,jobs,results,process,async){
return (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (1))){
var state_31271__$1 = state_31271;
var statearr_31273_31382 = state_31271__$1;
(statearr_31273_31382[(2)] = null);

(statearr_31273_31382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (2))){
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31271__$1,(4),from);
} else {
if((state_val_31272 === (3))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (4))){
var inst_31252 = (state_31271[(7)]);
var inst_31252__$1 = (state_31271[(2)]);
var inst_31253 = (inst_31252__$1 == null);
var state_31271__$1 = (function (){var statearr_31274 = state_31271;
(statearr_31274[(7)] = inst_31252__$1);

return statearr_31274;
})();
if(cljs.core.truth_(inst_31253)){
var statearr_31275_31383 = state_31271__$1;
(statearr_31275_31383[(1)] = (5));

} else {
var statearr_31276_31384 = state_31271__$1;
(statearr_31276_31384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (5))){
var inst_31255 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31271__$1 = state_31271;
var statearr_31277_31385 = state_31271__$1;
(statearr_31277_31385[(2)] = inst_31255);

(statearr_31277_31385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (6))){
var inst_31257 = (state_31271[(8)]);
var inst_31252 = (state_31271[(7)]);
var inst_31257__$1 = cljs.core.async.chan.call(null,(1));
var inst_31258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31259 = [inst_31252,inst_31257__$1];
var inst_31260 = (new cljs.core.PersistentVector(null,2,(5),inst_31258,inst_31259,null));
var state_31271__$1 = (function (){var statearr_31278 = state_31271;
(statearr_31278[(8)] = inst_31257__$1);

return statearr_31278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31271__$1,(8),jobs,inst_31260);
} else {
if((state_val_31272 === (7))){
var inst_31267 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31279_31386 = state_31271__$1;
(statearr_31279_31386[(2)] = inst_31267);

(statearr_31279_31386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (8))){
var inst_31257 = (state_31271[(8)]);
var inst_31262 = (state_31271[(2)]);
var state_31271__$1 = (function (){var statearr_31280 = state_31271;
(statearr_31280[(9)] = inst_31262);

return statearr_31280;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31271__$1,(9),results,inst_31257);
} else {
if((state_val_31272 === (9))){
var inst_31264 = (state_31271[(2)]);
var state_31271__$1 = (function (){var statearr_31281 = state_31271;
(statearr_31281[(10)] = inst_31264);

return statearr_31281;
})();
var statearr_31282_31387 = state_31271__$1;
(statearr_31282_31387[(2)] = null);

(statearr_31282_31387[(1)] = (2));


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
});})(c__31032__auto___31381,jobs,results,process,async))
;
return ((function (switch__30944__auto__,c__31032__auto___31381,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0 = (function (){
var statearr_31283 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__);

(statearr_31283[(1)] = (1));

return statearr_31283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1 = (function (state_31271){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31284){if((e31284 instanceof Object)){
var ex__30948__auto__ = e31284;
var statearr_31285_31388 = state_31271;
(statearr_31285_31388[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31389 = state_31271;
state_31271 = G__31389;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___31381,jobs,results,process,async))
})();
var state__31034__auto__ = (function (){var statearr_31286 = f__31033__auto__.call(null);
(statearr_31286[(6)] = c__31032__auto___31381);

return statearr_31286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___31381,jobs,results,process,async))
);


var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__,jobs,results,process,async){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__,jobs,results,process,async){
return (function (state_31324){
var state_val_31325 = (state_31324[(1)]);
if((state_val_31325 === (7))){
var inst_31320 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31326_31390 = state_31324__$1;
(statearr_31326_31390[(2)] = inst_31320);

(statearr_31326_31390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (20))){
var state_31324__$1 = state_31324;
var statearr_31327_31391 = state_31324__$1;
(statearr_31327_31391[(2)] = null);

(statearr_31327_31391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (1))){
var state_31324__$1 = state_31324;
var statearr_31328_31392 = state_31324__$1;
(statearr_31328_31392[(2)] = null);

(statearr_31328_31392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (4))){
var inst_31289 = (state_31324[(7)]);
var inst_31289__$1 = (state_31324[(2)]);
var inst_31290 = (inst_31289__$1 == null);
var state_31324__$1 = (function (){var statearr_31329 = state_31324;
(statearr_31329[(7)] = inst_31289__$1);

return statearr_31329;
})();
if(cljs.core.truth_(inst_31290)){
var statearr_31330_31393 = state_31324__$1;
(statearr_31330_31393[(1)] = (5));

} else {
var statearr_31331_31394 = state_31324__$1;
(statearr_31331_31394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (15))){
var inst_31302 = (state_31324[(8)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31324__$1,(18),to,inst_31302);
} else {
if((state_val_31325 === (21))){
var inst_31315 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31332_31395 = state_31324__$1;
(statearr_31332_31395[(2)] = inst_31315);

(statearr_31332_31395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (13))){
var inst_31317 = (state_31324[(2)]);
var state_31324__$1 = (function (){var statearr_31333 = state_31324;
(statearr_31333[(9)] = inst_31317);

return statearr_31333;
})();
var statearr_31334_31396 = state_31324__$1;
(statearr_31334_31396[(2)] = null);

(statearr_31334_31396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (6))){
var inst_31289 = (state_31324[(7)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(11),inst_31289);
} else {
if((state_val_31325 === (17))){
var inst_31310 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
if(cljs.core.truth_(inst_31310)){
var statearr_31335_31397 = state_31324__$1;
(statearr_31335_31397[(1)] = (19));

} else {
var statearr_31336_31398 = state_31324__$1;
(statearr_31336_31398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (3))){
var inst_31322 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31324__$1,inst_31322);
} else {
if((state_val_31325 === (12))){
var inst_31299 = (state_31324[(10)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(14),inst_31299);
} else {
if((state_val_31325 === (2))){
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(4),results);
} else {
if((state_val_31325 === (19))){
var state_31324__$1 = state_31324;
var statearr_31337_31399 = state_31324__$1;
(statearr_31337_31399[(2)] = null);

(statearr_31337_31399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (11))){
var inst_31299 = (state_31324[(2)]);
var state_31324__$1 = (function (){var statearr_31338 = state_31324;
(statearr_31338[(10)] = inst_31299);

return statearr_31338;
})();
var statearr_31339_31400 = state_31324__$1;
(statearr_31339_31400[(2)] = null);

(statearr_31339_31400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (9))){
var state_31324__$1 = state_31324;
var statearr_31340_31401 = state_31324__$1;
(statearr_31340_31401[(2)] = null);

(statearr_31340_31401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (5))){
var state_31324__$1 = state_31324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31341_31402 = state_31324__$1;
(statearr_31341_31402[(1)] = (8));

} else {
var statearr_31342_31403 = state_31324__$1;
(statearr_31342_31403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (14))){
var inst_31302 = (state_31324[(8)]);
var inst_31304 = (state_31324[(11)]);
var inst_31302__$1 = (state_31324[(2)]);
var inst_31303 = (inst_31302__$1 == null);
var inst_31304__$1 = cljs.core.not.call(null,inst_31303);
var state_31324__$1 = (function (){var statearr_31343 = state_31324;
(statearr_31343[(8)] = inst_31302__$1);

(statearr_31343[(11)] = inst_31304__$1);

return statearr_31343;
})();
if(inst_31304__$1){
var statearr_31344_31404 = state_31324__$1;
(statearr_31344_31404[(1)] = (15));

} else {
var statearr_31345_31405 = state_31324__$1;
(statearr_31345_31405[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (16))){
var inst_31304 = (state_31324[(11)]);
var state_31324__$1 = state_31324;
var statearr_31346_31406 = state_31324__$1;
(statearr_31346_31406[(2)] = inst_31304);

(statearr_31346_31406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (10))){
var inst_31296 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31347_31407 = state_31324__$1;
(statearr_31347_31407[(2)] = inst_31296);

(statearr_31347_31407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (18))){
var inst_31307 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31348_31408 = state_31324__$1;
(statearr_31348_31408[(2)] = inst_31307);

(statearr_31348_31408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (8))){
var inst_31293 = cljs.core.async.close_BANG_.call(null,to);
var state_31324__$1 = state_31324;
var statearr_31349_31409 = state_31324__$1;
(statearr_31349_31409[(2)] = inst_31293);

(statearr_31349_31409[(1)] = (10));


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
});})(c__31032__auto__,jobs,results,process,async))
;
return ((function (switch__30944__auto__,c__31032__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1 = (function (state_31324){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31351){if((e31351 instanceof Object)){
var ex__30948__auto__ = e31351;
var statearr_31352_31410 = state_31324;
(statearr_31352_31410[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31411 = state_31324;
state_31324 = G__31411;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__ = function(state_31324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1.call(this,state_31324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30945__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__,jobs,results,process,async))
})();
var state__31034__auto__ = (function (){var statearr_31353 = f__31033__auto__.call(null);
(statearr_31353[(6)] = c__31032__auto__);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__,jobs,results,process,async))
);

return c__31032__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31413 = arguments.length;
switch (G__31413) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31416 = arguments.length;
switch (G__31416) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31419 = arguments.length;
switch (G__31419) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31032__auto___31468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___31468,tc,fc){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___31468,tc,fc){
return (function (state_31445){
var state_val_31446 = (state_31445[(1)]);
if((state_val_31446 === (7))){
var inst_31441 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
var statearr_31447_31469 = state_31445__$1;
(statearr_31447_31469[(2)] = inst_31441);

(statearr_31447_31469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (1))){
var state_31445__$1 = state_31445;
var statearr_31448_31470 = state_31445__$1;
(statearr_31448_31470[(2)] = null);

(statearr_31448_31470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (4))){
var inst_31422 = (state_31445[(7)]);
var inst_31422__$1 = (state_31445[(2)]);
var inst_31423 = (inst_31422__$1 == null);
var state_31445__$1 = (function (){var statearr_31449 = state_31445;
(statearr_31449[(7)] = inst_31422__$1);

return statearr_31449;
})();
if(cljs.core.truth_(inst_31423)){
var statearr_31450_31471 = state_31445__$1;
(statearr_31450_31471[(1)] = (5));

} else {
var statearr_31451_31472 = state_31445__$1;
(statearr_31451_31472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (13))){
var state_31445__$1 = state_31445;
var statearr_31452_31473 = state_31445__$1;
(statearr_31452_31473[(2)] = null);

(statearr_31452_31473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (6))){
var inst_31422 = (state_31445[(7)]);
var inst_31428 = p.call(null,inst_31422);
var state_31445__$1 = state_31445;
if(cljs.core.truth_(inst_31428)){
var statearr_31453_31474 = state_31445__$1;
(statearr_31453_31474[(1)] = (9));

} else {
var statearr_31454_31475 = state_31445__$1;
(statearr_31454_31475[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (3))){
var inst_31443 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31445__$1,inst_31443);
} else {
if((state_val_31446 === (12))){
var state_31445__$1 = state_31445;
var statearr_31455_31476 = state_31445__$1;
(statearr_31455_31476[(2)] = null);

(statearr_31455_31476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (2))){
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31445__$1,(4),ch);
} else {
if((state_val_31446 === (11))){
var inst_31422 = (state_31445[(7)]);
var inst_31432 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31445__$1,(8),inst_31432,inst_31422);
} else {
if((state_val_31446 === (9))){
var state_31445__$1 = state_31445;
var statearr_31456_31477 = state_31445__$1;
(statearr_31456_31477[(2)] = tc);

(statearr_31456_31477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (5))){
var inst_31425 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31426 = cljs.core.async.close_BANG_.call(null,fc);
var state_31445__$1 = (function (){var statearr_31457 = state_31445;
(statearr_31457[(8)] = inst_31425);

return statearr_31457;
})();
var statearr_31458_31478 = state_31445__$1;
(statearr_31458_31478[(2)] = inst_31426);

(statearr_31458_31478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (14))){
var inst_31439 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
var statearr_31459_31479 = state_31445__$1;
(statearr_31459_31479[(2)] = inst_31439);

(statearr_31459_31479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (10))){
var state_31445__$1 = state_31445;
var statearr_31460_31480 = state_31445__$1;
(statearr_31460_31480[(2)] = fc);

(statearr_31460_31480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (8))){
var inst_31434 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
if(cljs.core.truth_(inst_31434)){
var statearr_31461_31481 = state_31445__$1;
(statearr_31461_31481[(1)] = (12));

} else {
var statearr_31462_31482 = state_31445__$1;
(statearr_31462_31482[(1)] = (13));

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
});})(c__31032__auto___31468,tc,fc))
;
return ((function (switch__30944__auto__,c__31032__auto___31468,tc,fc){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_31445){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31464){if((e31464 instanceof Object)){
var ex__30948__auto__ = e31464;
var statearr_31465_31483 = state_31445;
(statearr_31465_31483[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31484 = state_31445;
state_31445 = G__31484;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_31445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_31445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___31468,tc,fc))
})();
var state__31034__auto__ = (function (){var statearr_31466 = f__31033__auto__.call(null);
(statearr_31466[(6)] = c__31032__auto___31468);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___31468,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__){
return (function (state_31505){
var state_val_31506 = (state_31505[(1)]);
if((state_val_31506 === (7))){
var inst_31501 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31507_31525 = state_31505__$1;
(statearr_31507_31525[(2)] = inst_31501);

(statearr_31507_31525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (1))){
var inst_31485 = init;
var state_31505__$1 = (function (){var statearr_31508 = state_31505;
(statearr_31508[(7)] = inst_31485);

return statearr_31508;
})();
var statearr_31509_31526 = state_31505__$1;
(statearr_31509_31526[(2)] = null);

(statearr_31509_31526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (4))){
var inst_31488 = (state_31505[(8)]);
var inst_31488__$1 = (state_31505[(2)]);
var inst_31489 = (inst_31488__$1 == null);
var state_31505__$1 = (function (){var statearr_31510 = state_31505;
(statearr_31510[(8)] = inst_31488__$1);

return statearr_31510;
})();
if(cljs.core.truth_(inst_31489)){
var statearr_31511_31527 = state_31505__$1;
(statearr_31511_31527[(1)] = (5));

} else {
var statearr_31512_31528 = state_31505__$1;
(statearr_31512_31528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (6))){
var inst_31485 = (state_31505[(7)]);
var inst_31492 = (state_31505[(9)]);
var inst_31488 = (state_31505[(8)]);
var inst_31492__$1 = f.call(null,inst_31485,inst_31488);
var inst_31493 = cljs.core.reduced_QMARK_.call(null,inst_31492__$1);
var state_31505__$1 = (function (){var statearr_31513 = state_31505;
(statearr_31513[(9)] = inst_31492__$1);

return statearr_31513;
})();
if(inst_31493){
var statearr_31514_31529 = state_31505__$1;
(statearr_31514_31529[(1)] = (8));

} else {
var statearr_31515_31530 = state_31505__$1;
(statearr_31515_31530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (3))){
var inst_31503 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31505__$1,inst_31503);
} else {
if((state_val_31506 === (2))){
var state_31505__$1 = state_31505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31505__$1,(4),ch);
} else {
if((state_val_31506 === (9))){
var inst_31492 = (state_31505[(9)]);
var inst_31485 = inst_31492;
var state_31505__$1 = (function (){var statearr_31516 = state_31505;
(statearr_31516[(7)] = inst_31485);

return statearr_31516;
})();
var statearr_31517_31531 = state_31505__$1;
(statearr_31517_31531[(2)] = null);

(statearr_31517_31531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (5))){
var inst_31485 = (state_31505[(7)]);
var state_31505__$1 = state_31505;
var statearr_31518_31532 = state_31505__$1;
(statearr_31518_31532[(2)] = inst_31485);

(statearr_31518_31532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (10))){
var inst_31499 = (state_31505[(2)]);
var state_31505__$1 = state_31505;
var statearr_31519_31533 = state_31505__$1;
(statearr_31519_31533[(2)] = inst_31499);

(statearr_31519_31533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31506 === (8))){
var inst_31492 = (state_31505[(9)]);
var inst_31495 = cljs.core.deref.call(null,inst_31492);
var state_31505__$1 = state_31505;
var statearr_31520_31534 = state_31505__$1;
(statearr_31520_31534[(2)] = inst_31495);

(statearr_31520_31534[(1)] = (10));


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
});})(c__31032__auto__))
;
return ((function (switch__30944__auto__,c__31032__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30945__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30945__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = cljs$core$async$reduce_$_state_machine__30945__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var cljs$core$async$reduce_$_state_machine__30945__auto____1 = (function (state_31505){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31522){if((e31522 instanceof Object)){
var ex__30948__auto__ = e31522;
var statearr_31523_31535 = state_31505;
(statearr_31523_31535[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31536 = state_31505;
state_31505 = G__31536;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30945__auto__ = function(state_31505){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30945__auto____1.call(this,state_31505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30945__auto____0;
cljs$core$async$reduce_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30945__auto____1;
return cljs$core$async$reduce_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__))
})();
var state__31034__auto__ = (function (){var statearr_31524 = f__31033__auto__.call(null);
(statearr_31524[(6)] = c__31032__auto__);

return statearr_31524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__))
);

return c__31032__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31538 = arguments.length;
switch (G__31538) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__){
return (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (7))){
var inst_31545 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31565_31586 = state_31563__$1;
(statearr_31565_31586[(2)] = inst_31545);

(statearr_31565_31586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (1))){
var inst_31539 = cljs.core.seq.call(null,coll);
var inst_31540 = inst_31539;
var state_31563__$1 = (function (){var statearr_31566 = state_31563;
(statearr_31566[(7)] = inst_31540);

return statearr_31566;
})();
var statearr_31567_31587 = state_31563__$1;
(statearr_31567_31587[(2)] = null);

(statearr_31567_31587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (4))){
var inst_31540 = (state_31563[(7)]);
var inst_31543 = cljs.core.first.call(null,inst_31540);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31563__$1,(7),ch,inst_31543);
} else {
if((state_val_31564 === (13))){
var inst_31557 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31568_31588 = state_31563__$1;
(statearr_31568_31588[(2)] = inst_31557);

(statearr_31568_31588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (6))){
var inst_31548 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31548)){
var statearr_31569_31589 = state_31563__$1;
(statearr_31569_31589[(1)] = (8));

} else {
var statearr_31570_31590 = state_31563__$1;
(statearr_31570_31590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (3))){
var inst_31561 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31563__$1,inst_31561);
} else {
if((state_val_31564 === (12))){
var state_31563__$1 = state_31563;
var statearr_31571_31591 = state_31563__$1;
(statearr_31571_31591[(2)] = null);

(statearr_31571_31591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (2))){
var inst_31540 = (state_31563[(7)]);
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31540)){
var statearr_31572_31592 = state_31563__$1;
(statearr_31572_31592[(1)] = (4));

} else {
var statearr_31573_31593 = state_31563__$1;
(statearr_31573_31593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (11))){
var inst_31554 = cljs.core.async.close_BANG_.call(null,ch);
var state_31563__$1 = state_31563;
var statearr_31574_31594 = state_31563__$1;
(statearr_31574_31594[(2)] = inst_31554);

(statearr_31574_31594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (9))){
var state_31563__$1 = state_31563;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31575_31595 = state_31563__$1;
(statearr_31575_31595[(1)] = (11));

} else {
var statearr_31576_31596 = state_31563__$1;
(statearr_31576_31596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (5))){
var inst_31540 = (state_31563[(7)]);
var state_31563__$1 = state_31563;
var statearr_31577_31597 = state_31563__$1;
(statearr_31577_31597[(2)] = inst_31540);

(statearr_31577_31597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (10))){
var inst_31559 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31578_31598 = state_31563__$1;
(statearr_31578_31598[(2)] = inst_31559);

(statearr_31578_31598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (8))){
var inst_31540 = (state_31563[(7)]);
var inst_31550 = cljs.core.next.call(null,inst_31540);
var inst_31540__$1 = inst_31550;
var state_31563__$1 = (function (){var statearr_31579 = state_31563;
(statearr_31579[(7)] = inst_31540__$1);

return statearr_31579;
})();
var statearr_31580_31599 = state_31563__$1;
(statearr_31580_31599[(2)] = null);

(statearr_31580_31599[(1)] = (2));


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
});})(c__31032__auto__))
;
return ((function (switch__30944__auto__,c__31032__auto__){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_31581 = [null,null,null,null,null,null,null,null];
(statearr_31581[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_31581[(1)] = (1));

return statearr_31581;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_31563){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31582){if((e31582 instanceof Object)){
var ex__30948__auto__ = e31582;
var statearr_31583_31600 = state_31563;
(statearr_31583_31600[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31601 = state_31563;
state_31563 = G__31601;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__))
})();
var state__31034__auto__ = (function (){var statearr_31584 = f__31033__auto__.call(null);
(statearr_31584[(6)] = c__31032__auto__);

return statearr_31584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__))
);

return c__31032__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27145__auto__ = (((_ == null))?null:_);
var m__27146__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,_);
} else {
var m__27146__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27146__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m,ch);
} else {
var m__27146__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m);
} else {
var m__27146__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31602 = (function (ch,cs,meta31603){
this.ch = ch;
this.cs = cs;
this.meta31603 = meta31603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31604,meta31603__$1){
var self__ = this;
var _31604__$1 = this;
return (new cljs.core.async.t_cljs$core$async31602(self__.ch,self__.cs,meta31603__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31604){
var self__ = this;
var _31604__$1 = this;
return self__.meta31603;
});})(cs))
;

cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31602.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31602.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31603","meta31603",1638412549,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31602";

cljs.core.async.t_cljs$core$async31602.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async31602");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31602 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31602(ch__$1,cs__$1,meta31603){
return (new cljs.core.async.t_cljs$core$async31602(ch__$1,cs__$1,meta31603));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31602(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31032__auto___31824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___31824,cs,m,dchan,dctr,done){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___31824,cs,m,dchan,dctr,done){
return (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (7))){
var inst_31735 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31741_31825 = state_31739__$1;
(statearr_31741_31825[(2)] = inst_31735);

(statearr_31741_31825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (20))){
var inst_31638 = (state_31739[(7)]);
var inst_31650 = cljs.core.first.call(null,inst_31638);
var inst_31651 = cljs.core.nth.call(null,inst_31650,(0),null);
var inst_31652 = cljs.core.nth.call(null,inst_31650,(1),null);
var state_31739__$1 = (function (){var statearr_31742 = state_31739;
(statearr_31742[(8)] = inst_31651);

return statearr_31742;
})();
if(cljs.core.truth_(inst_31652)){
var statearr_31743_31826 = state_31739__$1;
(statearr_31743_31826[(1)] = (22));

} else {
var statearr_31744_31827 = state_31739__$1;
(statearr_31744_31827[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (27))){
var inst_31682 = (state_31739[(9)]);
var inst_31687 = (state_31739[(10)]);
var inst_31607 = (state_31739[(11)]);
var inst_31680 = (state_31739[(12)]);
var inst_31687__$1 = cljs.core._nth.call(null,inst_31680,inst_31682);
var inst_31688 = cljs.core.async.put_BANG_.call(null,inst_31687__$1,inst_31607,done);
var state_31739__$1 = (function (){var statearr_31745 = state_31739;
(statearr_31745[(10)] = inst_31687__$1);

return statearr_31745;
})();
if(cljs.core.truth_(inst_31688)){
var statearr_31746_31828 = state_31739__$1;
(statearr_31746_31828[(1)] = (30));

} else {
var statearr_31747_31829 = state_31739__$1;
(statearr_31747_31829[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (1))){
var state_31739__$1 = state_31739;
var statearr_31748_31830 = state_31739__$1;
(statearr_31748_31830[(2)] = null);

(statearr_31748_31830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (24))){
var inst_31638 = (state_31739[(7)]);
var inst_31657 = (state_31739[(2)]);
var inst_31658 = cljs.core.next.call(null,inst_31638);
var inst_31616 = inst_31658;
var inst_31617 = null;
var inst_31618 = (0);
var inst_31619 = (0);
var state_31739__$1 = (function (){var statearr_31749 = state_31739;
(statearr_31749[(13)] = inst_31657);

(statearr_31749[(14)] = inst_31619);

(statearr_31749[(15)] = inst_31618);

(statearr_31749[(16)] = inst_31616);

(statearr_31749[(17)] = inst_31617);

return statearr_31749;
})();
var statearr_31750_31831 = state_31739__$1;
(statearr_31750_31831[(2)] = null);

(statearr_31750_31831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (39))){
var state_31739__$1 = state_31739;
var statearr_31754_31832 = state_31739__$1;
(statearr_31754_31832[(2)] = null);

(statearr_31754_31832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (4))){
var inst_31607 = (state_31739[(11)]);
var inst_31607__$1 = (state_31739[(2)]);
var inst_31608 = (inst_31607__$1 == null);
var state_31739__$1 = (function (){var statearr_31755 = state_31739;
(statearr_31755[(11)] = inst_31607__$1);

return statearr_31755;
})();
if(cljs.core.truth_(inst_31608)){
var statearr_31756_31833 = state_31739__$1;
(statearr_31756_31833[(1)] = (5));

} else {
var statearr_31757_31834 = state_31739__$1;
(statearr_31757_31834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (15))){
var inst_31619 = (state_31739[(14)]);
var inst_31618 = (state_31739[(15)]);
var inst_31616 = (state_31739[(16)]);
var inst_31617 = (state_31739[(17)]);
var inst_31634 = (state_31739[(2)]);
var inst_31635 = (inst_31619 + (1));
var tmp31751 = inst_31618;
var tmp31752 = inst_31616;
var tmp31753 = inst_31617;
var inst_31616__$1 = tmp31752;
var inst_31617__$1 = tmp31753;
var inst_31618__$1 = tmp31751;
var inst_31619__$1 = inst_31635;
var state_31739__$1 = (function (){var statearr_31758 = state_31739;
(statearr_31758[(14)] = inst_31619__$1);

(statearr_31758[(15)] = inst_31618__$1);

(statearr_31758[(18)] = inst_31634);

(statearr_31758[(16)] = inst_31616__$1);

(statearr_31758[(17)] = inst_31617__$1);

return statearr_31758;
})();
var statearr_31759_31835 = state_31739__$1;
(statearr_31759_31835[(2)] = null);

(statearr_31759_31835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (21))){
var inst_31661 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31763_31836 = state_31739__$1;
(statearr_31763_31836[(2)] = inst_31661);

(statearr_31763_31836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (31))){
var inst_31687 = (state_31739[(10)]);
var inst_31691 = done.call(null,null);
var inst_31692 = cljs.core.async.untap_STAR_.call(null,m,inst_31687);
var state_31739__$1 = (function (){var statearr_31764 = state_31739;
(statearr_31764[(19)] = inst_31691);

return statearr_31764;
})();
var statearr_31765_31837 = state_31739__$1;
(statearr_31765_31837[(2)] = inst_31692);

(statearr_31765_31837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (32))){
var inst_31679 = (state_31739[(20)]);
var inst_31682 = (state_31739[(9)]);
var inst_31681 = (state_31739[(21)]);
var inst_31680 = (state_31739[(12)]);
var inst_31694 = (state_31739[(2)]);
var inst_31695 = (inst_31682 + (1));
var tmp31760 = inst_31679;
var tmp31761 = inst_31681;
var tmp31762 = inst_31680;
var inst_31679__$1 = tmp31760;
var inst_31680__$1 = tmp31762;
var inst_31681__$1 = tmp31761;
var inst_31682__$1 = inst_31695;
var state_31739__$1 = (function (){var statearr_31766 = state_31739;
(statearr_31766[(20)] = inst_31679__$1);

(statearr_31766[(9)] = inst_31682__$1);

(statearr_31766[(21)] = inst_31681__$1);

(statearr_31766[(12)] = inst_31680__$1);

(statearr_31766[(22)] = inst_31694);

return statearr_31766;
})();
var statearr_31767_31838 = state_31739__$1;
(statearr_31767_31838[(2)] = null);

(statearr_31767_31838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (40))){
var inst_31707 = (state_31739[(23)]);
var inst_31711 = done.call(null,null);
var inst_31712 = cljs.core.async.untap_STAR_.call(null,m,inst_31707);
var state_31739__$1 = (function (){var statearr_31768 = state_31739;
(statearr_31768[(24)] = inst_31711);

return statearr_31768;
})();
var statearr_31769_31839 = state_31739__$1;
(statearr_31769_31839[(2)] = inst_31712);

(statearr_31769_31839[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (33))){
var inst_31698 = (state_31739[(25)]);
var inst_31700 = cljs.core.chunked_seq_QMARK_.call(null,inst_31698);
var state_31739__$1 = state_31739;
if(inst_31700){
var statearr_31770_31840 = state_31739__$1;
(statearr_31770_31840[(1)] = (36));

} else {
var statearr_31771_31841 = state_31739__$1;
(statearr_31771_31841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (13))){
var inst_31628 = (state_31739[(26)]);
var inst_31631 = cljs.core.async.close_BANG_.call(null,inst_31628);
var state_31739__$1 = state_31739;
var statearr_31772_31842 = state_31739__$1;
(statearr_31772_31842[(2)] = inst_31631);

(statearr_31772_31842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (22))){
var inst_31651 = (state_31739[(8)]);
var inst_31654 = cljs.core.async.close_BANG_.call(null,inst_31651);
var state_31739__$1 = state_31739;
var statearr_31773_31843 = state_31739__$1;
(statearr_31773_31843[(2)] = inst_31654);

(statearr_31773_31843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (36))){
var inst_31698 = (state_31739[(25)]);
var inst_31702 = cljs.core.chunk_first.call(null,inst_31698);
var inst_31703 = cljs.core.chunk_rest.call(null,inst_31698);
var inst_31704 = cljs.core.count.call(null,inst_31702);
var inst_31679 = inst_31703;
var inst_31680 = inst_31702;
var inst_31681 = inst_31704;
var inst_31682 = (0);
var state_31739__$1 = (function (){var statearr_31774 = state_31739;
(statearr_31774[(20)] = inst_31679);

(statearr_31774[(9)] = inst_31682);

(statearr_31774[(21)] = inst_31681);

(statearr_31774[(12)] = inst_31680);

return statearr_31774;
})();
var statearr_31775_31844 = state_31739__$1;
(statearr_31775_31844[(2)] = null);

(statearr_31775_31844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (41))){
var inst_31698 = (state_31739[(25)]);
var inst_31714 = (state_31739[(2)]);
var inst_31715 = cljs.core.next.call(null,inst_31698);
var inst_31679 = inst_31715;
var inst_31680 = null;
var inst_31681 = (0);
var inst_31682 = (0);
var state_31739__$1 = (function (){var statearr_31776 = state_31739;
(statearr_31776[(20)] = inst_31679);

(statearr_31776[(27)] = inst_31714);

(statearr_31776[(9)] = inst_31682);

(statearr_31776[(21)] = inst_31681);

(statearr_31776[(12)] = inst_31680);

return statearr_31776;
})();
var statearr_31777_31845 = state_31739__$1;
(statearr_31777_31845[(2)] = null);

(statearr_31777_31845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (43))){
var state_31739__$1 = state_31739;
var statearr_31778_31846 = state_31739__$1;
(statearr_31778_31846[(2)] = null);

(statearr_31778_31846[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (29))){
var inst_31723 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31779_31847 = state_31739__$1;
(statearr_31779_31847[(2)] = inst_31723);

(statearr_31779_31847[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (44))){
var inst_31732 = (state_31739[(2)]);
var state_31739__$1 = (function (){var statearr_31780 = state_31739;
(statearr_31780[(28)] = inst_31732);

return statearr_31780;
})();
var statearr_31781_31848 = state_31739__$1;
(statearr_31781_31848[(2)] = null);

(statearr_31781_31848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (6))){
var inst_31671 = (state_31739[(29)]);
var inst_31670 = cljs.core.deref.call(null,cs);
var inst_31671__$1 = cljs.core.keys.call(null,inst_31670);
var inst_31672 = cljs.core.count.call(null,inst_31671__$1);
var inst_31673 = cljs.core.reset_BANG_.call(null,dctr,inst_31672);
var inst_31678 = cljs.core.seq.call(null,inst_31671__$1);
var inst_31679 = inst_31678;
var inst_31680 = null;
var inst_31681 = (0);
var inst_31682 = (0);
var state_31739__$1 = (function (){var statearr_31782 = state_31739;
(statearr_31782[(20)] = inst_31679);

(statearr_31782[(9)] = inst_31682);

(statearr_31782[(21)] = inst_31681);

(statearr_31782[(29)] = inst_31671__$1);

(statearr_31782[(12)] = inst_31680);

(statearr_31782[(30)] = inst_31673);

return statearr_31782;
})();
var statearr_31783_31849 = state_31739__$1;
(statearr_31783_31849[(2)] = null);

(statearr_31783_31849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (28))){
var inst_31679 = (state_31739[(20)]);
var inst_31698 = (state_31739[(25)]);
var inst_31698__$1 = cljs.core.seq.call(null,inst_31679);
var state_31739__$1 = (function (){var statearr_31784 = state_31739;
(statearr_31784[(25)] = inst_31698__$1);

return statearr_31784;
})();
if(inst_31698__$1){
var statearr_31785_31850 = state_31739__$1;
(statearr_31785_31850[(1)] = (33));

} else {
var statearr_31786_31851 = state_31739__$1;
(statearr_31786_31851[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (25))){
var inst_31682 = (state_31739[(9)]);
var inst_31681 = (state_31739[(21)]);
var inst_31684 = (inst_31682 < inst_31681);
var inst_31685 = inst_31684;
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31685)){
var statearr_31787_31852 = state_31739__$1;
(statearr_31787_31852[(1)] = (27));

} else {
var statearr_31788_31853 = state_31739__$1;
(statearr_31788_31853[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (34))){
var state_31739__$1 = state_31739;
var statearr_31789_31854 = state_31739__$1;
(statearr_31789_31854[(2)] = null);

(statearr_31789_31854[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (17))){
var state_31739__$1 = state_31739;
var statearr_31790_31855 = state_31739__$1;
(statearr_31790_31855[(2)] = null);

(statearr_31790_31855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (3))){
var inst_31737 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31739__$1,inst_31737);
} else {
if((state_val_31740 === (12))){
var inst_31666 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31791_31856 = state_31739__$1;
(statearr_31791_31856[(2)] = inst_31666);

(statearr_31791_31856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (2))){
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31739__$1,(4),ch);
} else {
if((state_val_31740 === (23))){
var state_31739__$1 = state_31739;
var statearr_31792_31857 = state_31739__$1;
(statearr_31792_31857[(2)] = null);

(statearr_31792_31857[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (35))){
var inst_31721 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31793_31858 = state_31739__$1;
(statearr_31793_31858[(2)] = inst_31721);

(statearr_31793_31858[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (19))){
var inst_31638 = (state_31739[(7)]);
var inst_31642 = cljs.core.chunk_first.call(null,inst_31638);
var inst_31643 = cljs.core.chunk_rest.call(null,inst_31638);
var inst_31644 = cljs.core.count.call(null,inst_31642);
var inst_31616 = inst_31643;
var inst_31617 = inst_31642;
var inst_31618 = inst_31644;
var inst_31619 = (0);
var state_31739__$1 = (function (){var statearr_31794 = state_31739;
(statearr_31794[(14)] = inst_31619);

(statearr_31794[(15)] = inst_31618);

(statearr_31794[(16)] = inst_31616);

(statearr_31794[(17)] = inst_31617);

return statearr_31794;
})();
var statearr_31795_31859 = state_31739__$1;
(statearr_31795_31859[(2)] = null);

(statearr_31795_31859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (11))){
var inst_31638 = (state_31739[(7)]);
var inst_31616 = (state_31739[(16)]);
var inst_31638__$1 = cljs.core.seq.call(null,inst_31616);
var state_31739__$1 = (function (){var statearr_31796 = state_31739;
(statearr_31796[(7)] = inst_31638__$1);

return statearr_31796;
})();
if(inst_31638__$1){
var statearr_31797_31860 = state_31739__$1;
(statearr_31797_31860[(1)] = (16));

} else {
var statearr_31798_31861 = state_31739__$1;
(statearr_31798_31861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (9))){
var inst_31668 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31799_31862 = state_31739__$1;
(statearr_31799_31862[(2)] = inst_31668);

(statearr_31799_31862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (5))){
var inst_31614 = cljs.core.deref.call(null,cs);
var inst_31615 = cljs.core.seq.call(null,inst_31614);
var inst_31616 = inst_31615;
var inst_31617 = null;
var inst_31618 = (0);
var inst_31619 = (0);
var state_31739__$1 = (function (){var statearr_31800 = state_31739;
(statearr_31800[(14)] = inst_31619);

(statearr_31800[(15)] = inst_31618);

(statearr_31800[(16)] = inst_31616);

(statearr_31800[(17)] = inst_31617);

return statearr_31800;
})();
var statearr_31801_31863 = state_31739__$1;
(statearr_31801_31863[(2)] = null);

(statearr_31801_31863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (14))){
var state_31739__$1 = state_31739;
var statearr_31802_31864 = state_31739__$1;
(statearr_31802_31864[(2)] = null);

(statearr_31802_31864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (45))){
var inst_31729 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31803_31865 = state_31739__$1;
(statearr_31803_31865[(2)] = inst_31729);

(statearr_31803_31865[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (26))){
var inst_31671 = (state_31739[(29)]);
var inst_31725 = (state_31739[(2)]);
var inst_31726 = cljs.core.seq.call(null,inst_31671);
var state_31739__$1 = (function (){var statearr_31804 = state_31739;
(statearr_31804[(31)] = inst_31725);

return statearr_31804;
})();
if(inst_31726){
var statearr_31805_31866 = state_31739__$1;
(statearr_31805_31866[(1)] = (42));

} else {
var statearr_31806_31867 = state_31739__$1;
(statearr_31806_31867[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (16))){
var inst_31638 = (state_31739[(7)]);
var inst_31640 = cljs.core.chunked_seq_QMARK_.call(null,inst_31638);
var state_31739__$1 = state_31739;
if(inst_31640){
var statearr_31807_31868 = state_31739__$1;
(statearr_31807_31868[(1)] = (19));

} else {
var statearr_31808_31869 = state_31739__$1;
(statearr_31808_31869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (38))){
var inst_31718 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31809_31870 = state_31739__$1;
(statearr_31809_31870[(2)] = inst_31718);

(statearr_31809_31870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (30))){
var state_31739__$1 = state_31739;
var statearr_31810_31871 = state_31739__$1;
(statearr_31810_31871[(2)] = null);

(statearr_31810_31871[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (10))){
var inst_31619 = (state_31739[(14)]);
var inst_31617 = (state_31739[(17)]);
var inst_31627 = cljs.core._nth.call(null,inst_31617,inst_31619);
var inst_31628 = cljs.core.nth.call(null,inst_31627,(0),null);
var inst_31629 = cljs.core.nth.call(null,inst_31627,(1),null);
var state_31739__$1 = (function (){var statearr_31811 = state_31739;
(statearr_31811[(26)] = inst_31628);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31629)){
var statearr_31812_31872 = state_31739__$1;
(statearr_31812_31872[(1)] = (13));

} else {
var statearr_31813_31873 = state_31739__$1;
(statearr_31813_31873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (18))){
var inst_31664 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31814_31874 = state_31739__$1;
(statearr_31814_31874[(2)] = inst_31664);

(statearr_31814_31874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (42))){
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31739__$1,(45),dchan);
} else {
if((state_val_31740 === (37))){
var inst_31707 = (state_31739[(23)]);
var inst_31607 = (state_31739[(11)]);
var inst_31698 = (state_31739[(25)]);
var inst_31707__$1 = cljs.core.first.call(null,inst_31698);
var inst_31708 = cljs.core.async.put_BANG_.call(null,inst_31707__$1,inst_31607,done);
var state_31739__$1 = (function (){var statearr_31815 = state_31739;
(statearr_31815[(23)] = inst_31707__$1);

return statearr_31815;
})();
if(cljs.core.truth_(inst_31708)){
var statearr_31816_31875 = state_31739__$1;
(statearr_31816_31875[(1)] = (39));

} else {
var statearr_31817_31876 = state_31739__$1;
(statearr_31817_31876[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (8))){
var inst_31619 = (state_31739[(14)]);
var inst_31618 = (state_31739[(15)]);
var inst_31621 = (inst_31619 < inst_31618);
var inst_31622 = inst_31621;
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31622)){
var statearr_31818_31877 = state_31739__$1;
(statearr_31818_31877[(1)] = (10));

} else {
var statearr_31819_31878 = state_31739__$1;
(statearr_31819_31878[(1)] = (11));

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
});})(c__31032__auto___31824,cs,m,dchan,dctr,done))
;
return ((function (switch__30944__auto__,c__31032__auto___31824,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30945__auto__ = null;
var cljs$core$async$mult_$_state_machine__30945__auto____0 = (function (){
var statearr_31820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31820[(0)] = cljs$core$async$mult_$_state_machine__30945__auto__);

(statearr_31820[(1)] = (1));

return statearr_31820;
});
var cljs$core$async$mult_$_state_machine__30945__auto____1 = (function (state_31739){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_31739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e31821){if((e31821 instanceof Object)){
var ex__30948__auto__ = e31821;
var statearr_31822_31879 = state_31739;
(statearr_31822_31879[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31880 = state_31739;
state_31739 = G__31880;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30945__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30945__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30945__auto____0;
cljs$core$async$mult_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30945__auto____1;
return cljs$core$async$mult_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___31824,cs,m,dchan,dctr,done))
})();
var state__31034__auto__ = (function (){var statearr_31823 = f__31033__auto__.call(null);
(statearr_31823[(6)] = c__31032__auto___31824);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___31824,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31882 = arguments.length;
switch (G__31882) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m,ch);
} else {
var m__27146__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m,ch);
} else {
var m__27146__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m);
} else {
var m__27146__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m,state_map);
} else {
var m__27146__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27145__auto__ = (((m == null))?null:m);
var m__27146__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,m,mode);
} else {
var m__27146__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27640__auto__ = [];
var len__27633__auto___31894 = arguments.length;
var i__27634__auto___31895 = (0);
while(true){
if((i__27634__auto___31895 < len__27633__auto___31894)){
args__27640__auto__.push((arguments[i__27634__auto___31895]));

var G__31896 = (i__27634__auto___31895 + (1));
i__27634__auto___31895 = G__31896;
continue;
} else {
}
break;
}

var argseq__27641__auto__ = ((((3) < args__27640__auto__.length))?(new cljs.core.IndexedSeq(args__27640__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27641__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31888){
var map__31889 = p__31888;
var map__31889__$1 = ((((!((map__31889 == null)))?((((map__31889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31889):map__31889);
var opts = map__31889__$1;
var statearr_31891_31897 = state;
(statearr_31891_31897[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31889,map__31889__$1,opts){
return (function (val){
var statearr_31892_31898 = state;
(statearr_31892_31898[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31889,map__31889__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31893_31899 = state;
(statearr_31893_31899[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31884){
var G__31885 = cljs.core.first.call(null,seq31884);
var seq31884__$1 = cljs.core.next.call(null,seq31884);
var G__31886 = cljs.core.first.call(null,seq31884__$1);
var seq31884__$2 = cljs.core.next.call(null,seq31884__$1);
var G__31887 = cljs.core.first.call(null,seq31884__$2);
var seq31884__$3 = cljs.core.next.call(null,seq31884__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31885,G__31886,G__31887,seq31884__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31900 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31901){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31901 = meta31901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31902,meta31901__$1){
var self__ = this;
var _31902__$1 = this;
return (new cljs.core.async.t_cljs$core$async31900(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31901__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31902){
var self__ = this;
var _31902__$1 = this;
return self__.meta31901;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31901","meta31901",-711685164,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31900";

cljs.core.async.t_cljs$core$async31900.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async31900");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31900 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31900(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31901){
return (new cljs.core.async.t_cljs$core$async31900(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31901));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31900(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31032__auto___32064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32004){
var state_val_32005 = (state_32004[(1)]);
if((state_val_32005 === (7))){
var inst_31919 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32006_32065 = state_32004__$1;
(statearr_32006_32065[(2)] = inst_31919);

(statearr_32006_32065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (20))){
var inst_31931 = (state_32004[(7)]);
var state_32004__$1 = state_32004;
var statearr_32007_32066 = state_32004__$1;
(statearr_32007_32066[(2)] = inst_31931);

(statearr_32007_32066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (27))){
var state_32004__$1 = state_32004;
var statearr_32008_32067 = state_32004__$1;
(statearr_32008_32067[(2)] = null);

(statearr_32008_32067[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (1))){
var inst_31906 = (state_32004[(8)]);
var inst_31906__$1 = calc_state.call(null);
var inst_31908 = (inst_31906__$1 == null);
var inst_31909 = cljs.core.not.call(null,inst_31908);
var state_32004__$1 = (function (){var statearr_32009 = state_32004;
(statearr_32009[(8)] = inst_31906__$1);

return statearr_32009;
})();
if(inst_31909){
var statearr_32010_32068 = state_32004__$1;
(statearr_32010_32068[(1)] = (2));

} else {
var statearr_32011_32069 = state_32004__$1;
(statearr_32011_32069[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (24))){
var inst_31955 = (state_32004[(9)]);
var inst_31964 = (state_32004[(10)]);
var inst_31978 = (state_32004[(11)]);
var inst_31978__$1 = inst_31955.call(null,inst_31964);
var state_32004__$1 = (function (){var statearr_32012 = state_32004;
(statearr_32012[(11)] = inst_31978__$1);

return statearr_32012;
})();
if(cljs.core.truth_(inst_31978__$1)){
var statearr_32013_32070 = state_32004__$1;
(statearr_32013_32070[(1)] = (29));

} else {
var statearr_32014_32071 = state_32004__$1;
(statearr_32014_32071[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (4))){
var inst_31922 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31922)){
var statearr_32015_32072 = state_32004__$1;
(statearr_32015_32072[(1)] = (8));

} else {
var statearr_32016_32073 = state_32004__$1;
(statearr_32016_32073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (15))){
var inst_31949 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31949)){
var statearr_32017_32074 = state_32004__$1;
(statearr_32017_32074[(1)] = (19));

} else {
var statearr_32018_32075 = state_32004__$1;
(statearr_32018_32075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (21))){
var inst_31954 = (state_32004[(12)]);
var inst_31954__$1 = (state_32004[(2)]);
var inst_31955 = cljs.core.get.call(null,inst_31954__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31956 = cljs.core.get.call(null,inst_31954__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31957 = cljs.core.get.call(null,inst_31954__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32004__$1 = (function (){var statearr_32019 = state_32004;
(statearr_32019[(12)] = inst_31954__$1);

(statearr_32019[(9)] = inst_31955);

(statearr_32019[(13)] = inst_31956);

return statearr_32019;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32004__$1,(22),inst_31957);
} else {
if((state_val_32005 === (31))){
var inst_31986 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31986)){
var statearr_32020_32076 = state_32004__$1;
(statearr_32020_32076[(1)] = (32));

} else {
var statearr_32021_32077 = state_32004__$1;
(statearr_32021_32077[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (32))){
var inst_31963 = (state_32004[(14)]);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32004__$1,(35),out,inst_31963);
} else {
if((state_val_32005 === (33))){
var inst_31954 = (state_32004[(12)]);
var inst_31931 = inst_31954;
var state_32004__$1 = (function (){var statearr_32022 = state_32004;
(statearr_32022[(7)] = inst_31931);

return statearr_32022;
})();
var statearr_32023_32078 = state_32004__$1;
(statearr_32023_32078[(2)] = null);

(statearr_32023_32078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (13))){
var inst_31931 = (state_32004[(7)]);
var inst_31938 = inst_31931.cljs$lang$protocol_mask$partition0$;
var inst_31939 = (inst_31938 & (64));
var inst_31940 = inst_31931.cljs$core$ISeq$;
var inst_31941 = (cljs.core.PROTOCOL_SENTINEL === inst_31940);
var inst_31942 = (inst_31939) || (inst_31941);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31942)){
var statearr_32024_32079 = state_32004__$1;
(statearr_32024_32079[(1)] = (16));

} else {
var statearr_32025_32080 = state_32004__$1;
(statearr_32025_32080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (22))){
var inst_31963 = (state_32004[(14)]);
var inst_31964 = (state_32004[(10)]);
var inst_31962 = (state_32004[(2)]);
var inst_31963__$1 = cljs.core.nth.call(null,inst_31962,(0),null);
var inst_31964__$1 = cljs.core.nth.call(null,inst_31962,(1),null);
var inst_31965 = (inst_31963__$1 == null);
var inst_31966 = cljs.core._EQ_.call(null,inst_31964__$1,change);
var inst_31967 = (inst_31965) || (inst_31966);
var state_32004__$1 = (function (){var statearr_32026 = state_32004;
(statearr_32026[(14)] = inst_31963__$1);

(statearr_32026[(10)] = inst_31964__$1);

return statearr_32026;
})();
if(cljs.core.truth_(inst_31967)){
var statearr_32027_32081 = state_32004__$1;
(statearr_32027_32081[(1)] = (23));

} else {
var statearr_32028_32082 = state_32004__$1;
(statearr_32028_32082[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (36))){
var inst_31954 = (state_32004[(12)]);
var inst_31931 = inst_31954;
var state_32004__$1 = (function (){var statearr_32029 = state_32004;
(statearr_32029[(7)] = inst_31931);

return statearr_32029;
})();
var statearr_32030_32083 = state_32004__$1;
(statearr_32030_32083[(2)] = null);

(statearr_32030_32083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (29))){
var inst_31978 = (state_32004[(11)]);
var state_32004__$1 = state_32004;
var statearr_32031_32084 = state_32004__$1;
(statearr_32031_32084[(2)] = inst_31978);

(statearr_32031_32084[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (6))){
var state_32004__$1 = state_32004;
var statearr_32032_32085 = state_32004__$1;
(statearr_32032_32085[(2)] = false);

(statearr_32032_32085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (28))){
var inst_31974 = (state_32004[(2)]);
var inst_31975 = calc_state.call(null);
var inst_31931 = inst_31975;
var state_32004__$1 = (function (){var statearr_32033 = state_32004;
(statearr_32033[(15)] = inst_31974);

(statearr_32033[(7)] = inst_31931);

return statearr_32033;
})();
var statearr_32034_32086 = state_32004__$1;
(statearr_32034_32086[(2)] = null);

(statearr_32034_32086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (25))){
var inst_32000 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32035_32087 = state_32004__$1;
(statearr_32035_32087[(2)] = inst_32000);

(statearr_32035_32087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (34))){
var inst_31998 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32036_32088 = state_32004__$1;
(statearr_32036_32088[(2)] = inst_31998);

(statearr_32036_32088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (17))){
var state_32004__$1 = state_32004;
var statearr_32037_32089 = state_32004__$1;
(statearr_32037_32089[(2)] = false);

(statearr_32037_32089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (3))){
var state_32004__$1 = state_32004;
var statearr_32038_32090 = state_32004__$1;
(statearr_32038_32090[(2)] = false);

(statearr_32038_32090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (12))){
var inst_32002 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32004__$1,inst_32002);
} else {
if((state_val_32005 === (2))){
var inst_31906 = (state_32004[(8)]);
var inst_31911 = inst_31906.cljs$lang$protocol_mask$partition0$;
var inst_31912 = (inst_31911 & (64));
var inst_31913 = inst_31906.cljs$core$ISeq$;
var inst_31914 = (cljs.core.PROTOCOL_SENTINEL === inst_31913);
var inst_31915 = (inst_31912) || (inst_31914);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31915)){
var statearr_32039_32091 = state_32004__$1;
(statearr_32039_32091[(1)] = (5));

} else {
var statearr_32040_32092 = state_32004__$1;
(statearr_32040_32092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (23))){
var inst_31963 = (state_32004[(14)]);
var inst_31969 = (inst_31963 == null);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31969)){
var statearr_32041_32093 = state_32004__$1;
(statearr_32041_32093[(1)] = (26));

} else {
var statearr_32042_32094 = state_32004__$1;
(statearr_32042_32094[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (35))){
var inst_31989 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
if(cljs.core.truth_(inst_31989)){
var statearr_32043_32095 = state_32004__$1;
(statearr_32043_32095[(1)] = (36));

} else {
var statearr_32044_32096 = state_32004__$1;
(statearr_32044_32096[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (19))){
var inst_31931 = (state_32004[(7)]);
var inst_31951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31931);
var state_32004__$1 = state_32004;
var statearr_32045_32097 = state_32004__$1;
(statearr_32045_32097[(2)] = inst_31951);

(statearr_32045_32097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (11))){
var inst_31931 = (state_32004[(7)]);
var inst_31935 = (inst_31931 == null);
var inst_31936 = cljs.core.not.call(null,inst_31935);
var state_32004__$1 = state_32004;
if(inst_31936){
var statearr_32046_32098 = state_32004__$1;
(statearr_32046_32098[(1)] = (13));

} else {
var statearr_32047_32099 = state_32004__$1;
(statearr_32047_32099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (9))){
var inst_31906 = (state_32004[(8)]);
var state_32004__$1 = state_32004;
var statearr_32048_32100 = state_32004__$1;
(statearr_32048_32100[(2)] = inst_31906);

(statearr_32048_32100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (5))){
var state_32004__$1 = state_32004;
var statearr_32049_32101 = state_32004__$1;
(statearr_32049_32101[(2)] = true);

(statearr_32049_32101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (14))){
var state_32004__$1 = state_32004;
var statearr_32050_32102 = state_32004__$1;
(statearr_32050_32102[(2)] = false);

(statearr_32050_32102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (26))){
var inst_31964 = (state_32004[(10)]);
var inst_31971 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31964);
var state_32004__$1 = state_32004;
var statearr_32051_32103 = state_32004__$1;
(statearr_32051_32103[(2)] = inst_31971);

(statearr_32051_32103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (16))){
var state_32004__$1 = state_32004;
var statearr_32052_32104 = state_32004__$1;
(statearr_32052_32104[(2)] = true);

(statearr_32052_32104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (38))){
var inst_31994 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32053_32105 = state_32004__$1;
(statearr_32053_32105[(2)] = inst_31994);

(statearr_32053_32105[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (30))){
var inst_31955 = (state_32004[(9)]);
var inst_31956 = (state_32004[(13)]);
var inst_31964 = (state_32004[(10)]);
var inst_31981 = cljs.core.empty_QMARK_.call(null,inst_31955);
var inst_31982 = inst_31956.call(null,inst_31964);
var inst_31983 = cljs.core.not.call(null,inst_31982);
var inst_31984 = (inst_31981) && (inst_31983);
var state_32004__$1 = state_32004;
var statearr_32054_32106 = state_32004__$1;
(statearr_32054_32106[(2)] = inst_31984);

(statearr_32054_32106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (10))){
var inst_31906 = (state_32004[(8)]);
var inst_31927 = (state_32004[(2)]);
var inst_31928 = cljs.core.get.call(null,inst_31927,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31929 = cljs.core.get.call(null,inst_31927,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31930 = cljs.core.get.call(null,inst_31927,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31931 = inst_31906;
var state_32004__$1 = (function (){var statearr_32055 = state_32004;
(statearr_32055[(16)] = inst_31929);

(statearr_32055[(17)] = inst_31928);

(statearr_32055[(7)] = inst_31931);

(statearr_32055[(18)] = inst_31930);

return statearr_32055;
})();
var statearr_32056_32107 = state_32004__$1;
(statearr_32056_32107[(2)] = null);

(statearr_32056_32107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (18))){
var inst_31946 = (state_32004[(2)]);
var state_32004__$1 = state_32004;
var statearr_32057_32108 = state_32004__$1;
(statearr_32057_32108[(2)] = inst_31946);

(statearr_32057_32108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (37))){
var state_32004__$1 = state_32004;
var statearr_32058_32109 = state_32004__$1;
(statearr_32058_32109[(2)] = null);

(statearr_32058_32109[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32005 === (8))){
var inst_31906 = (state_32004[(8)]);
var inst_31924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31906);
var state_32004__$1 = state_32004;
var statearr_32059_32110 = state_32004__$1;
(statearr_32059_32110[(2)] = inst_31924);

(statearr_32059_32110[(1)] = (10));


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
});})(c__31032__auto___32064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30944__auto__,c__31032__auto___32064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30945__auto__ = null;
var cljs$core$async$mix_$_state_machine__30945__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = cljs$core$async$mix_$_state_machine__30945__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var cljs$core$async$mix_$_state_machine__30945__auto____1 = (function (state_32004){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32061){if((e32061 instanceof Object)){
var ex__30948__auto__ = e32061;
var statearr_32062_32111 = state_32004;
(statearr_32062_32111[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32112 = state_32004;
state_32004 = G__32112;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30945__auto__ = function(state_32004){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30945__auto____1.call(this,state_32004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30945__auto____0;
cljs$core$async$mix_$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30945__auto____1;
return cljs$core$async$mix_$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31034__auto__ = (function (){var statearr_32063 = f__31033__auto__.call(null);
(statearr_32063[(6)] = c__31032__auto___32064);

return statearr_32063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32064,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27145__auto__ = (((p == null))?null:p);
var m__27146__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27146__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27145__auto__ = (((p == null))?null:p);
var m__27146__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,p,v,ch);
} else {
var m__27146__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32114 = arguments.length;
switch (G__32114) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27145__auto__ = (((p == null))?null:p);
var m__27146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,p);
} else {
var m__27146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27145__auto__ = (((p == null))?null:p);
var m__27146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27145__auto__)]);
if(!((m__27146__auto__ == null))){
return m__27146__auto__.call(null,p,v);
} else {
var m__27146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27146__auto____$1 == null))){
return m__27146__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32118 = arguments.length;
switch (G__32118) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26462__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26462__auto__)){
return or__26462__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26462__auto__,mults){
return (function (p1__32116_SHARP_){
if(cljs.core.truth_(p1__32116_SHARP_.call(null,topic))){
return p1__32116_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32116_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26462__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32119 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32120){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32120 = meta32120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32121,meta32120__$1){
var self__ = this;
var _32121__$1 = this;
return (new cljs.core.async.t_cljs$core$async32119(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32120__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32121){
var self__ = this;
var _32121__$1 = this;
return self__.meta32120;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32120","meta32120",1638625787,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32119";

cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async32119");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32119 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32119(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32120){
return (new cljs.core.async.t_cljs$core$async32119(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32120));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32119(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31032__auto___32239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32239,mults,ensure_mult,p){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32239,mults,ensure_mult,p){
return (function (state_32193){
var state_val_32194 = (state_32193[(1)]);
if((state_val_32194 === (7))){
var inst_32189 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32195_32240 = state_32193__$1;
(statearr_32195_32240[(2)] = inst_32189);

(statearr_32195_32240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (20))){
var state_32193__$1 = state_32193;
var statearr_32196_32241 = state_32193__$1;
(statearr_32196_32241[(2)] = null);

(statearr_32196_32241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (1))){
var state_32193__$1 = state_32193;
var statearr_32197_32242 = state_32193__$1;
(statearr_32197_32242[(2)] = null);

(statearr_32197_32242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (24))){
var inst_32172 = (state_32193[(7)]);
var inst_32181 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32172);
var state_32193__$1 = state_32193;
var statearr_32198_32243 = state_32193__$1;
(statearr_32198_32243[(2)] = inst_32181);

(statearr_32198_32243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (4))){
var inst_32124 = (state_32193[(8)]);
var inst_32124__$1 = (state_32193[(2)]);
var inst_32125 = (inst_32124__$1 == null);
var state_32193__$1 = (function (){var statearr_32199 = state_32193;
(statearr_32199[(8)] = inst_32124__$1);

return statearr_32199;
})();
if(cljs.core.truth_(inst_32125)){
var statearr_32200_32244 = state_32193__$1;
(statearr_32200_32244[(1)] = (5));

} else {
var statearr_32201_32245 = state_32193__$1;
(statearr_32201_32245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (15))){
var inst_32166 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32202_32246 = state_32193__$1;
(statearr_32202_32246[(2)] = inst_32166);

(statearr_32202_32246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (21))){
var inst_32186 = (state_32193[(2)]);
var state_32193__$1 = (function (){var statearr_32203 = state_32193;
(statearr_32203[(9)] = inst_32186);

return statearr_32203;
})();
var statearr_32204_32247 = state_32193__$1;
(statearr_32204_32247[(2)] = null);

(statearr_32204_32247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (13))){
var inst_32148 = (state_32193[(10)]);
var inst_32150 = cljs.core.chunked_seq_QMARK_.call(null,inst_32148);
var state_32193__$1 = state_32193;
if(inst_32150){
var statearr_32205_32248 = state_32193__$1;
(statearr_32205_32248[(1)] = (16));

} else {
var statearr_32206_32249 = state_32193__$1;
(statearr_32206_32249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (22))){
var inst_32178 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
if(cljs.core.truth_(inst_32178)){
var statearr_32207_32250 = state_32193__$1;
(statearr_32207_32250[(1)] = (23));

} else {
var statearr_32208_32251 = state_32193__$1;
(statearr_32208_32251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (6))){
var inst_32124 = (state_32193[(8)]);
var inst_32174 = (state_32193[(11)]);
var inst_32172 = (state_32193[(7)]);
var inst_32172__$1 = topic_fn.call(null,inst_32124);
var inst_32173 = cljs.core.deref.call(null,mults);
var inst_32174__$1 = cljs.core.get.call(null,inst_32173,inst_32172__$1);
var state_32193__$1 = (function (){var statearr_32209 = state_32193;
(statearr_32209[(11)] = inst_32174__$1);

(statearr_32209[(7)] = inst_32172__$1);

return statearr_32209;
})();
if(cljs.core.truth_(inst_32174__$1)){
var statearr_32210_32252 = state_32193__$1;
(statearr_32210_32252[(1)] = (19));

} else {
var statearr_32211_32253 = state_32193__$1;
(statearr_32211_32253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (25))){
var inst_32183 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32212_32254 = state_32193__$1;
(statearr_32212_32254[(2)] = inst_32183);

(statearr_32212_32254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (17))){
var inst_32148 = (state_32193[(10)]);
var inst_32157 = cljs.core.first.call(null,inst_32148);
var inst_32158 = cljs.core.async.muxch_STAR_.call(null,inst_32157);
var inst_32159 = cljs.core.async.close_BANG_.call(null,inst_32158);
var inst_32160 = cljs.core.next.call(null,inst_32148);
var inst_32134 = inst_32160;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32193__$1 = (function (){var statearr_32213 = state_32193;
(statearr_32213[(12)] = inst_32134);

(statearr_32213[(13)] = inst_32137);

(statearr_32213[(14)] = inst_32135);

(statearr_32213[(15)] = inst_32136);

(statearr_32213[(16)] = inst_32159);

return statearr_32213;
})();
var statearr_32214_32255 = state_32193__$1;
(statearr_32214_32255[(2)] = null);

(statearr_32214_32255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (3))){
var inst_32191 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32193__$1,inst_32191);
} else {
if((state_val_32194 === (12))){
var inst_32168 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32215_32256 = state_32193__$1;
(statearr_32215_32256[(2)] = inst_32168);

(statearr_32215_32256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (2))){
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32193__$1,(4),ch);
} else {
if((state_val_32194 === (23))){
var state_32193__$1 = state_32193;
var statearr_32216_32257 = state_32193__$1;
(statearr_32216_32257[(2)] = null);

(statearr_32216_32257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (19))){
var inst_32124 = (state_32193[(8)]);
var inst_32174 = (state_32193[(11)]);
var inst_32176 = cljs.core.async.muxch_STAR_.call(null,inst_32174);
var state_32193__$1 = state_32193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32193__$1,(22),inst_32176,inst_32124);
} else {
if((state_val_32194 === (11))){
var inst_32134 = (state_32193[(12)]);
var inst_32148 = (state_32193[(10)]);
var inst_32148__$1 = cljs.core.seq.call(null,inst_32134);
var state_32193__$1 = (function (){var statearr_32217 = state_32193;
(statearr_32217[(10)] = inst_32148__$1);

return statearr_32217;
})();
if(inst_32148__$1){
var statearr_32218_32258 = state_32193__$1;
(statearr_32218_32258[(1)] = (13));

} else {
var statearr_32219_32259 = state_32193__$1;
(statearr_32219_32259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (9))){
var inst_32170 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32220_32260 = state_32193__$1;
(statearr_32220_32260[(2)] = inst_32170);

(statearr_32220_32260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (5))){
var inst_32131 = cljs.core.deref.call(null,mults);
var inst_32132 = cljs.core.vals.call(null,inst_32131);
var inst_32133 = cljs.core.seq.call(null,inst_32132);
var inst_32134 = inst_32133;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32193__$1 = (function (){var statearr_32221 = state_32193;
(statearr_32221[(12)] = inst_32134);

(statearr_32221[(13)] = inst_32137);

(statearr_32221[(14)] = inst_32135);

(statearr_32221[(15)] = inst_32136);

return statearr_32221;
})();
var statearr_32222_32261 = state_32193__$1;
(statearr_32222_32261[(2)] = null);

(statearr_32222_32261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (14))){
var state_32193__$1 = state_32193;
var statearr_32226_32262 = state_32193__$1;
(statearr_32226_32262[(2)] = null);

(statearr_32226_32262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (16))){
var inst_32148 = (state_32193[(10)]);
var inst_32152 = cljs.core.chunk_first.call(null,inst_32148);
var inst_32153 = cljs.core.chunk_rest.call(null,inst_32148);
var inst_32154 = cljs.core.count.call(null,inst_32152);
var inst_32134 = inst_32153;
var inst_32135 = inst_32152;
var inst_32136 = inst_32154;
var inst_32137 = (0);
var state_32193__$1 = (function (){var statearr_32227 = state_32193;
(statearr_32227[(12)] = inst_32134);

(statearr_32227[(13)] = inst_32137);

(statearr_32227[(14)] = inst_32135);

(statearr_32227[(15)] = inst_32136);

return statearr_32227;
})();
var statearr_32228_32263 = state_32193__$1;
(statearr_32228_32263[(2)] = null);

(statearr_32228_32263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (10))){
var inst_32134 = (state_32193[(12)]);
var inst_32137 = (state_32193[(13)]);
var inst_32135 = (state_32193[(14)]);
var inst_32136 = (state_32193[(15)]);
var inst_32142 = cljs.core._nth.call(null,inst_32135,inst_32137);
var inst_32143 = cljs.core.async.muxch_STAR_.call(null,inst_32142);
var inst_32144 = cljs.core.async.close_BANG_.call(null,inst_32143);
var inst_32145 = (inst_32137 + (1));
var tmp32223 = inst_32134;
var tmp32224 = inst_32135;
var tmp32225 = inst_32136;
var inst_32134__$1 = tmp32223;
var inst_32135__$1 = tmp32224;
var inst_32136__$1 = tmp32225;
var inst_32137__$1 = inst_32145;
var state_32193__$1 = (function (){var statearr_32229 = state_32193;
(statearr_32229[(12)] = inst_32134__$1);

(statearr_32229[(17)] = inst_32144);

(statearr_32229[(13)] = inst_32137__$1);

(statearr_32229[(14)] = inst_32135__$1);

(statearr_32229[(15)] = inst_32136__$1);

return statearr_32229;
})();
var statearr_32230_32264 = state_32193__$1;
(statearr_32230_32264[(2)] = null);

(statearr_32230_32264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (18))){
var inst_32163 = (state_32193[(2)]);
var state_32193__$1 = state_32193;
var statearr_32231_32265 = state_32193__$1;
(statearr_32231_32265[(2)] = inst_32163);

(statearr_32231_32265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32194 === (8))){
var inst_32137 = (state_32193[(13)]);
var inst_32136 = (state_32193[(15)]);
var inst_32139 = (inst_32137 < inst_32136);
var inst_32140 = inst_32139;
var state_32193__$1 = state_32193;
if(cljs.core.truth_(inst_32140)){
var statearr_32232_32266 = state_32193__$1;
(statearr_32232_32266[(1)] = (10));

} else {
var statearr_32233_32267 = state_32193__$1;
(statearr_32233_32267[(1)] = (11));

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
});})(c__31032__auto___32239,mults,ensure_mult,p))
;
return ((function (switch__30944__auto__,c__31032__auto___32239,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32234[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32234[(1)] = (1));

return statearr_32234;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32193){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32235){if((e32235 instanceof Object)){
var ex__30948__auto__ = e32235;
var statearr_32236_32268 = state_32193;
(statearr_32236_32268[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32269 = state_32193;
state_32193 = G__32269;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32239,mults,ensure_mult,p))
})();
var state__31034__auto__ = (function (){var statearr_32237 = f__31033__auto__.call(null);
(statearr_32237[(6)] = c__31032__auto___32239);

return statearr_32237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32239,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32271 = arguments.length;
switch (G__32271) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32274 = arguments.length;
switch (G__32274) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32277 = arguments.length;
switch (G__32277) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31032__auto___32344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32316){
var state_val_32317 = (state_32316[(1)]);
if((state_val_32317 === (7))){
var state_32316__$1 = state_32316;
var statearr_32318_32345 = state_32316__$1;
(statearr_32318_32345[(2)] = null);

(statearr_32318_32345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (1))){
var state_32316__$1 = state_32316;
var statearr_32319_32346 = state_32316__$1;
(statearr_32319_32346[(2)] = null);

(statearr_32319_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (4))){
var inst_32280 = (state_32316[(7)]);
var inst_32282 = (inst_32280 < cnt);
var state_32316__$1 = state_32316;
if(cljs.core.truth_(inst_32282)){
var statearr_32320_32347 = state_32316__$1;
(statearr_32320_32347[(1)] = (6));

} else {
var statearr_32321_32348 = state_32316__$1;
(statearr_32321_32348[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (15))){
var inst_32312 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
var statearr_32322_32349 = state_32316__$1;
(statearr_32322_32349[(2)] = inst_32312);

(statearr_32322_32349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (13))){
var inst_32305 = cljs.core.async.close_BANG_.call(null,out);
var state_32316__$1 = state_32316;
var statearr_32323_32350 = state_32316__$1;
(statearr_32323_32350[(2)] = inst_32305);

(statearr_32323_32350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (6))){
var state_32316__$1 = state_32316;
var statearr_32324_32351 = state_32316__$1;
(statearr_32324_32351[(2)] = null);

(statearr_32324_32351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (3))){
var inst_32314 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32316__$1,inst_32314);
} else {
if((state_val_32317 === (12))){
var inst_32302 = (state_32316[(8)]);
var inst_32302__$1 = (state_32316[(2)]);
var inst_32303 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32302__$1);
var state_32316__$1 = (function (){var statearr_32325 = state_32316;
(statearr_32325[(8)] = inst_32302__$1);

return statearr_32325;
})();
if(cljs.core.truth_(inst_32303)){
var statearr_32326_32352 = state_32316__$1;
(statearr_32326_32352[(1)] = (13));

} else {
var statearr_32327_32353 = state_32316__$1;
(statearr_32327_32353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (2))){
var inst_32279 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32280 = (0);
var state_32316__$1 = (function (){var statearr_32328 = state_32316;
(statearr_32328[(7)] = inst_32280);

(statearr_32328[(9)] = inst_32279);

return statearr_32328;
})();
var statearr_32329_32354 = state_32316__$1;
(statearr_32329_32354[(2)] = null);

(statearr_32329_32354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (11))){
var inst_32280 = (state_32316[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32316,(10),Object,null,(9));
var inst_32289 = chs__$1.call(null,inst_32280);
var inst_32290 = done.call(null,inst_32280);
var inst_32291 = cljs.core.async.take_BANG_.call(null,inst_32289,inst_32290);
var state_32316__$1 = state_32316;
var statearr_32330_32355 = state_32316__$1;
(statearr_32330_32355[(2)] = inst_32291);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32316__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (9))){
var inst_32280 = (state_32316[(7)]);
var inst_32293 = (state_32316[(2)]);
var inst_32294 = (inst_32280 + (1));
var inst_32280__$1 = inst_32294;
var state_32316__$1 = (function (){var statearr_32331 = state_32316;
(statearr_32331[(7)] = inst_32280__$1);

(statearr_32331[(10)] = inst_32293);

return statearr_32331;
})();
var statearr_32332_32356 = state_32316__$1;
(statearr_32332_32356[(2)] = null);

(statearr_32332_32356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (5))){
var inst_32300 = (state_32316[(2)]);
var state_32316__$1 = (function (){var statearr_32333 = state_32316;
(statearr_32333[(11)] = inst_32300);

return statearr_32333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32316__$1,(12),dchan);
} else {
if((state_val_32317 === (14))){
var inst_32302 = (state_32316[(8)]);
var inst_32307 = cljs.core.apply.call(null,f,inst_32302);
var state_32316__$1 = state_32316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32316__$1,(16),out,inst_32307);
} else {
if((state_val_32317 === (16))){
var inst_32309 = (state_32316[(2)]);
var state_32316__$1 = (function (){var statearr_32334 = state_32316;
(statearr_32334[(12)] = inst_32309);

return statearr_32334;
})();
var statearr_32335_32357 = state_32316__$1;
(statearr_32335_32357[(2)] = null);

(statearr_32335_32357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (10))){
var inst_32284 = (state_32316[(2)]);
var inst_32285 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32316__$1 = (function (){var statearr_32336 = state_32316;
(statearr_32336[(13)] = inst_32284);

return statearr_32336;
})();
var statearr_32337_32358 = state_32316__$1;
(statearr_32337_32358[(2)] = inst_32285);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32316__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (8))){
var inst_32298 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
var statearr_32338_32359 = state_32316__$1;
(statearr_32338_32359[(2)] = inst_32298);

(statearr_32338_32359[(1)] = (5));


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
});})(c__31032__auto___32344,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30944__auto__,c__31032__auto___32344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32339[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32339[(1)] = (1));

return statearr_32339;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32316){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32340){if((e32340 instanceof Object)){
var ex__30948__auto__ = e32340;
var statearr_32341_32360 = state_32316;
(statearr_32341_32360[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32361 = state_32316;
state_32316 = G__32361;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32344,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31034__auto__ = (function (){var statearr_32342 = f__31033__auto__.call(null);
(statearr_32342[(6)] = c__31032__auto___32344);

return statearr_32342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32344,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32364 = arguments.length;
switch (G__32364) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31032__auto___32418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32418,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32418,out){
return (function (state_32396){
var state_val_32397 = (state_32396[(1)]);
if((state_val_32397 === (7))){
var inst_32376 = (state_32396[(7)]);
var inst_32375 = (state_32396[(8)]);
var inst_32375__$1 = (state_32396[(2)]);
var inst_32376__$1 = cljs.core.nth.call(null,inst_32375__$1,(0),null);
var inst_32377 = cljs.core.nth.call(null,inst_32375__$1,(1),null);
var inst_32378 = (inst_32376__$1 == null);
var state_32396__$1 = (function (){var statearr_32398 = state_32396;
(statearr_32398[(9)] = inst_32377);

(statearr_32398[(7)] = inst_32376__$1);

(statearr_32398[(8)] = inst_32375__$1);

return statearr_32398;
})();
if(cljs.core.truth_(inst_32378)){
var statearr_32399_32419 = state_32396__$1;
(statearr_32399_32419[(1)] = (8));

} else {
var statearr_32400_32420 = state_32396__$1;
(statearr_32400_32420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (1))){
var inst_32365 = cljs.core.vec.call(null,chs);
var inst_32366 = inst_32365;
var state_32396__$1 = (function (){var statearr_32401 = state_32396;
(statearr_32401[(10)] = inst_32366);

return statearr_32401;
})();
var statearr_32402_32421 = state_32396__$1;
(statearr_32402_32421[(2)] = null);

(statearr_32402_32421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (4))){
var inst_32366 = (state_32396[(10)]);
var state_32396__$1 = state_32396;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32396__$1,(7),inst_32366);
} else {
if((state_val_32397 === (6))){
var inst_32392 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
var statearr_32403_32422 = state_32396__$1;
(statearr_32403_32422[(2)] = inst_32392);

(statearr_32403_32422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (3))){
var inst_32394 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32396__$1,inst_32394);
} else {
if((state_val_32397 === (2))){
var inst_32366 = (state_32396[(10)]);
var inst_32368 = cljs.core.count.call(null,inst_32366);
var inst_32369 = (inst_32368 > (0));
var state_32396__$1 = state_32396;
if(cljs.core.truth_(inst_32369)){
var statearr_32405_32423 = state_32396__$1;
(statearr_32405_32423[(1)] = (4));

} else {
var statearr_32406_32424 = state_32396__$1;
(statearr_32406_32424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (11))){
var inst_32366 = (state_32396[(10)]);
var inst_32385 = (state_32396[(2)]);
var tmp32404 = inst_32366;
var inst_32366__$1 = tmp32404;
var state_32396__$1 = (function (){var statearr_32407 = state_32396;
(statearr_32407[(11)] = inst_32385);

(statearr_32407[(10)] = inst_32366__$1);

return statearr_32407;
})();
var statearr_32408_32425 = state_32396__$1;
(statearr_32408_32425[(2)] = null);

(statearr_32408_32425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (9))){
var inst_32376 = (state_32396[(7)]);
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32396__$1,(11),out,inst_32376);
} else {
if((state_val_32397 === (5))){
var inst_32390 = cljs.core.async.close_BANG_.call(null,out);
var state_32396__$1 = state_32396;
var statearr_32409_32426 = state_32396__$1;
(statearr_32409_32426[(2)] = inst_32390);

(statearr_32409_32426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (10))){
var inst_32388 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
var statearr_32410_32427 = state_32396__$1;
(statearr_32410_32427[(2)] = inst_32388);

(statearr_32410_32427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (8))){
var inst_32377 = (state_32396[(9)]);
var inst_32366 = (state_32396[(10)]);
var inst_32376 = (state_32396[(7)]);
var inst_32375 = (state_32396[(8)]);
var inst_32380 = (function (){var cs = inst_32366;
var vec__32371 = inst_32375;
var v = inst_32376;
var c = inst_32377;
return ((function (cs,vec__32371,v,c,inst_32377,inst_32366,inst_32376,inst_32375,state_val_32397,c__31032__auto___32418,out){
return (function (p1__32362_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32362_SHARP_);
});
;})(cs,vec__32371,v,c,inst_32377,inst_32366,inst_32376,inst_32375,state_val_32397,c__31032__auto___32418,out))
})();
var inst_32381 = cljs.core.filterv.call(null,inst_32380,inst_32366);
var inst_32366__$1 = inst_32381;
var state_32396__$1 = (function (){var statearr_32411 = state_32396;
(statearr_32411[(10)] = inst_32366__$1);

return statearr_32411;
})();
var statearr_32412_32428 = state_32396__$1;
(statearr_32412_32428[(2)] = null);

(statearr_32412_32428[(1)] = (2));


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
});})(c__31032__auto___32418,out))
;
return ((function (switch__30944__auto__,c__31032__auto___32418,out){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32413[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32413[(1)] = (1));

return statearr_32413;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32396){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32414){if((e32414 instanceof Object)){
var ex__30948__auto__ = e32414;
var statearr_32415_32429 = state_32396;
(statearr_32415_32429[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32430 = state_32396;
state_32396 = G__32430;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32418,out))
})();
var state__31034__auto__ = (function (){var statearr_32416 = f__31033__auto__.call(null);
(statearr_32416[(6)] = c__31032__auto___32418);

return statearr_32416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32418,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32432 = arguments.length;
switch (G__32432) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31032__auto___32477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32477,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32477,out){
return (function (state_32456){
var state_val_32457 = (state_32456[(1)]);
if((state_val_32457 === (7))){
var inst_32438 = (state_32456[(7)]);
var inst_32438__$1 = (state_32456[(2)]);
var inst_32439 = (inst_32438__$1 == null);
var inst_32440 = cljs.core.not.call(null,inst_32439);
var state_32456__$1 = (function (){var statearr_32458 = state_32456;
(statearr_32458[(7)] = inst_32438__$1);

return statearr_32458;
})();
if(inst_32440){
var statearr_32459_32478 = state_32456__$1;
(statearr_32459_32478[(1)] = (8));

} else {
var statearr_32460_32479 = state_32456__$1;
(statearr_32460_32479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (1))){
var inst_32433 = (0);
var state_32456__$1 = (function (){var statearr_32461 = state_32456;
(statearr_32461[(8)] = inst_32433);

return statearr_32461;
})();
var statearr_32462_32480 = state_32456__$1;
(statearr_32462_32480[(2)] = null);

(statearr_32462_32480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (4))){
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32456__$1,(7),ch);
} else {
if((state_val_32457 === (6))){
var inst_32451 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32463_32481 = state_32456__$1;
(statearr_32463_32481[(2)] = inst_32451);

(statearr_32463_32481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (3))){
var inst_32453 = (state_32456[(2)]);
var inst_32454 = cljs.core.async.close_BANG_.call(null,out);
var state_32456__$1 = (function (){var statearr_32464 = state_32456;
(statearr_32464[(9)] = inst_32453);

return statearr_32464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32456__$1,inst_32454);
} else {
if((state_val_32457 === (2))){
var inst_32433 = (state_32456[(8)]);
var inst_32435 = (inst_32433 < n);
var state_32456__$1 = state_32456;
if(cljs.core.truth_(inst_32435)){
var statearr_32465_32482 = state_32456__$1;
(statearr_32465_32482[(1)] = (4));

} else {
var statearr_32466_32483 = state_32456__$1;
(statearr_32466_32483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (11))){
var inst_32433 = (state_32456[(8)]);
var inst_32443 = (state_32456[(2)]);
var inst_32444 = (inst_32433 + (1));
var inst_32433__$1 = inst_32444;
var state_32456__$1 = (function (){var statearr_32467 = state_32456;
(statearr_32467[(8)] = inst_32433__$1);

(statearr_32467[(10)] = inst_32443);

return statearr_32467;
})();
var statearr_32468_32484 = state_32456__$1;
(statearr_32468_32484[(2)] = null);

(statearr_32468_32484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (9))){
var state_32456__$1 = state_32456;
var statearr_32469_32485 = state_32456__$1;
(statearr_32469_32485[(2)] = null);

(statearr_32469_32485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (5))){
var state_32456__$1 = state_32456;
var statearr_32470_32486 = state_32456__$1;
(statearr_32470_32486[(2)] = null);

(statearr_32470_32486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (10))){
var inst_32448 = (state_32456[(2)]);
var state_32456__$1 = state_32456;
var statearr_32471_32487 = state_32456__$1;
(statearr_32471_32487[(2)] = inst_32448);

(statearr_32471_32487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32457 === (8))){
var inst_32438 = (state_32456[(7)]);
var state_32456__$1 = state_32456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32456__$1,(11),out,inst_32438);
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
});})(c__31032__auto___32477,out))
;
return ((function (switch__30944__auto__,c__31032__auto___32477,out){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32472[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32472[(1)] = (1));

return statearr_32472;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32456){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32473){if((e32473 instanceof Object)){
var ex__30948__auto__ = e32473;
var statearr_32474_32488 = state_32456;
(statearr_32474_32488[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32489 = state_32456;
state_32456 = G__32489;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32477,out))
})();
var state__31034__auto__ = (function (){var statearr_32475 = f__31033__auto__.call(null);
(statearr_32475[(6)] = c__31032__auto___32477);

return statearr_32475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32477,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32491 = (function (f,ch,meta32492){
this.f = f;
this.ch = ch;
this.meta32492 = meta32492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32493,meta32492__$1){
var self__ = this;
var _32493__$1 = this;
return (new cljs.core.async.t_cljs$core$async32491(self__.f,self__.ch,meta32492__$1));
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32493){
var self__ = this;
var _32493__$1 = this;
return self__.meta32492;
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32494 = (function (f,ch,meta32492,_,fn1,meta32495){
this.f = f;
this.ch = ch;
this.meta32492 = meta32492;
this._ = _;
this.fn1 = fn1;
this.meta32495 = meta32495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32496,meta32495__$1){
var self__ = this;
var _32496__$1 = this;
return (new cljs.core.async.t_cljs$core$async32494(self__.f,self__.ch,self__.meta32492,self__._,self__.fn1,meta32495__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32496){
var self__ = this;
var _32496__$1 = this;
return self__.meta32495;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32490_SHARP_){
return f1.call(null,(((p1__32490_SHARP_ == null))?null:self__.f.call(null,p1__32490_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32494.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32492","meta32492",-268644252,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32491","cljs.core.async/t_cljs$core$async32491",-117850914,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32495","meta32495",-997977997,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32494";

cljs.core.async.t_cljs$core$async32494.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async32494");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32494 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32494(f__$1,ch__$1,meta32492__$1,___$2,fn1__$1,meta32495){
return (new cljs.core.async.t_cljs$core$async32494(f__$1,ch__$1,meta32492__$1,___$2,fn1__$1,meta32495));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32494(self__.f,self__.ch,self__.meta32492,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26450__auto__ = ret;
if(cljs.core.truth_(and__26450__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26450__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32492","meta32492",-268644252,null)], null);
});

cljs.core.async.t_cljs$core$async32491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32491";

cljs.core.async.t_cljs$core$async32491.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async32491");
});

cljs.core.async.__GT_t_cljs$core$async32491 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32491(f__$1,ch__$1,meta32492){
return (new cljs.core.async.t_cljs$core$async32491(f__$1,ch__$1,meta32492));
});

}

return (new cljs.core.async.t_cljs$core$async32491(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32497 = (function (f,ch,meta32498){
this.f = f;
this.ch = ch;
this.meta32498 = meta32498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32499,meta32498__$1){
var self__ = this;
var _32499__$1 = this;
return (new cljs.core.async.t_cljs$core$async32497(self__.f,self__.ch,meta32498__$1));
});

cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32499){
var self__ = this;
var _32499__$1 = this;
return self__.meta32498;
});

cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32498","meta32498",-1025431465,null)], null);
});

cljs.core.async.t_cljs$core$async32497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32497";

cljs.core.async.t_cljs$core$async32497.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async32497");
});

cljs.core.async.__GT_t_cljs$core$async32497 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32497(f__$1,ch__$1,meta32498){
return (new cljs.core.async.t_cljs$core$async32497(f__$1,ch__$1,meta32498));
});

}

return (new cljs.core.async.t_cljs$core$async32497(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32500 = (function (p,ch,meta32501){
this.p = p;
this.ch = ch;
this.meta32501 = meta32501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32502,meta32501__$1){
var self__ = this;
var _32502__$1 = this;
return (new cljs.core.async.t_cljs$core$async32500(self__.p,self__.ch,meta32501__$1));
});

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32502){
var self__ = this;
var _32502__$1 = this;
return self__.meta32501;
});

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32500.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32501","meta32501",-69656207,null)], null);
});

cljs.core.async.t_cljs$core$async32500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32500";

cljs.core.async.t_cljs$core$async32500.cljs$lang$ctorPrWriter = (function (this__27087__auto__,writer__27088__auto__,opt__27089__auto__){
return cljs.core._write.call(null,writer__27088__auto__,"cljs.core.async/t_cljs$core$async32500");
});

cljs.core.async.__GT_t_cljs$core$async32500 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32500(p__$1,ch__$1,meta32501){
return (new cljs.core.async.t_cljs$core$async32500(p__$1,ch__$1,meta32501));
});

}

return (new cljs.core.async.t_cljs$core$async32500(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32504 = arguments.length;
switch (G__32504) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31032__auto___32544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32544,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32544,out){
return (function (state_32525){
var state_val_32526 = (state_32525[(1)]);
if((state_val_32526 === (7))){
var inst_32521 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32527_32545 = state_32525__$1;
(statearr_32527_32545[(2)] = inst_32521);

(statearr_32527_32545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (1))){
var state_32525__$1 = state_32525;
var statearr_32528_32546 = state_32525__$1;
(statearr_32528_32546[(2)] = null);

(statearr_32528_32546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (4))){
var inst_32507 = (state_32525[(7)]);
var inst_32507__$1 = (state_32525[(2)]);
var inst_32508 = (inst_32507__$1 == null);
var state_32525__$1 = (function (){var statearr_32529 = state_32525;
(statearr_32529[(7)] = inst_32507__$1);

return statearr_32529;
})();
if(cljs.core.truth_(inst_32508)){
var statearr_32530_32547 = state_32525__$1;
(statearr_32530_32547[(1)] = (5));

} else {
var statearr_32531_32548 = state_32525__$1;
(statearr_32531_32548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (6))){
var inst_32507 = (state_32525[(7)]);
var inst_32512 = p.call(null,inst_32507);
var state_32525__$1 = state_32525;
if(cljs.core.truth_(inst_32512)){
var statearr_32532_32549 = state_32525__$1;
(statearr_32532_32549[(1)] = (8));

} else {
var statearr_32533_32550 = state_32525__$1;
(statearr_32533_32550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (3))){
var inst_32523 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32525__$1,inst_32523);
} else {
if((state_val_32526 === (2))){
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32525__$1,(4),ch);
} else {
if((state_val_32526 === (11))){
var inst_32515 = (state_32525[(2)]);
var state_32525__$1 = state_32525;
var statearr_32534_32551 = state_32525__$1;
(statearr_32534_32551[(2)] = inst_32515);

(statearr_32534_32551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (9))){
var state_32525__$1 = state_32525;
var statearr_32535_32552 = state_32525__$1;
(statearr_32535_32552[(2)] = null);

(statearr_32535_32552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (5))){
var inst_32510 = cljs.core.async.close_BANG_.call(null,out);
var state_32525__$1 = state_32525;
var statearr_32536_32553 = state_32525__$1;
(statearr_32536_32553[(2)] = inst_32510);

(statearr_32536_32553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (10))){
var inst_32518 = (state_32525[(2)]);
var state_32525__$1 = (function (){var statearr_32537 = state_32525;
(statearr_32537[(8)] = inst_32518);

return statearr_32537;
})();
var statearr_32538_32554 = state_32525__$1;
(statearr_32538_32554[(2)] = null);

(statearr_32538_32554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32526 === (8))){
var inst_32507 = (state_32525[(7)]);
var state_32525__$1 = state_32525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32525__$1,(11),out,inst_32507);
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
});})(c__31032__auto___32544,out))
;
return ((function (switch__30944__auto__,c__31032__auto___32544,out){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32525){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__30948__auto__ = e32540;
var statearr_32541_32555 = state_32525;
(statearr_32541_32555[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32556 = state_32525;
state_32525 = G__32556;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32544,out))
})();
var state__31034__auto__ = (function (){var statearr_32542 = f__31033__auto__.call(null);
(statearr_32542[(6)] = c__31032__auto___32544);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32544,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32558 = arguments.length;
switch (G__32558) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto__){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto__){
return (function (state_32621){
var state_val_32622 = (state_32621[(1)]);
if((state_val_32622 === (7))){
var inst_32617 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32623_32661 = state_32621__$1;
(statearr_32623_32661[(2)] = inst_32617);

(statearr_32623_32661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (20))){
var inst_32587 = (state_32621[(7)]);
var inst_32598 = (state_32621[(2)]);
var inst_32599 = cljs.core.next.call(null,inst_32587);
var inst_32573 = inst_32599;
var inst_32574 = null;
var inst_32575 = (0);
var inst_32576 = (0);
var state_32621__$1 = (function (){var statearr_32624 = state_32621;
(statearr_32624[(8)] = inst_32598);

(statearr_32624[(9)] = inst_32573);

(statearr_32624[(10)] = inst_32574);

(statearr_32624[(11)] = inst_32575);

(statearr_32624[(12)] = inst_32576);

return statearr_32624;
})();
var statearr_32625_32662 = state_32621__$1;
(statearr_32625_32662[(2)] = null);

(statearr_32625_32662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (1))){
var state_32621__$1 = state_32621;
var statearr_32626_32663 = state_32621__$1;
(statearr_32626_32663[(2)] = null);

(statearr_32626_32663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (4))){
var inst_32562 = (state_32621[(13)]);
var inst_32562__$1 = (state_32621[(2)]);
var inst_32563 = (inst_32562__$1 == null);
var state_32621__$1 = (function (){var statearr_32627 = state_32621;
(statearr_32627[(13)] = inst_32562__$1);

return statearr_32627;
})();
if(cljs.core.truth_(inst_32563)){
var statearr_32628_32664 = state_32621__$1;
(statearr_32628_32664[(1)] = (5));

} else {
var statearr_32629_32665 = state_32621__$1;
(statearr_32629_32665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (15))){
var state_32621__$1 = state_32621;
var statearr_32633_32666 = state_32621__$1;
(statearr_32633_32666[(2)] = null);

(statearr_32633_32666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (21))){
var state_32621__$1 = state_32621;
var statearr_32634_32667 = state_32621__$1;
(statearr_32634_32667[(2)] = null);

(statearr_32634_32667[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (13))){
var inst_32573 = (state_32621[(9)]);
var inst_32574 = (state_32621[(10)]);
var inst_32575 = (state_32621[(11)]);
var inst_32576 = (state_32621[(12)]);
var inst_32583 = (state_32621[(2)]);
var inst_32584 = (inst_32576 + (1));
var tmp32630 = inst_32573;
var tmp32631 = inst_32574;
var tmp32632 = inst_32575;
var inst_32573__$1 = tmp32630;
var inst_32574__$1 = tmp32631;
var inst_32575__$1 = tmp32632;
var inst_32576__$1 = inst_32584;
var state_32621__$1 = (function (){var statearr_32635 = state_32621;
(statearr_32635[(9)] = inst_32573__$1);

(statearr_32635[(14)] = inst_32583);

(statearr_32635[(10)] = inst_32574__$1);

(statearr_32635[(11)] = inst_32575__$1);

(statearr_32635[(12)] = inst_32576__$1);

return statearr_32635;
})();
var statearr_32636_32668 = state_32621__$1;
(statearr_32636_32668[(2)] = null);

(statearr_32636_32668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (22))){
var state_32621__$1 = state_32621;
var statearr_32637_32669 = state_32621__$1;
(statearr_32637_32669[(2)] = null);

(statearr_32637_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (6))){
var inst_32562 = (state_32621[(13)]);
var inst_32571 = f.call(null,inst_32562);
var inst_32572 = cljs.core.seq.call(null,inst_32571);
var inst_32573 = inst_32572;
var inst_32574 = null;
var inst_32575 = (0);
var inst_32576 = (0);
var state_32621__$1 = (function (){var statearr_32638 = state_32621;
(statearr_32638[(9)] = inst_32573);

(statearr_32638[(10)] = inst_32574);

(statearr_32638[(11)] = inst_32575);

(statearr_32638[(12)] = inst_32576);

return statearr_32638;
})();
var statearr_32639_32670 = state_32621__$1;
(statearr_32639_32670[(2)] = null);

(statearr_32639_32670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (17))){
var inst_32587 = (state_32621[(7)]);
var inst_32591 = cljs.core.chunk_first.call(null,inst_32587);
var inst_32592 = cljs.core.chunk_rest.call(null,inst_32587);
var inst_32593 = cljs.core.count.call(null,inst_32591);
var inst_32573 = inst_32592;
var inst_32574 = inst_32591;
var inst_32575 = inst_32593;
var inst_32576 = (0);
var state_32621__$1 = (function (){var statearr_32640 = state_32621;
(statearr_32640[(9)] = inst_32573);

(statearr_32640[(10)] = inst_32574);

(statearr_32640[(11)] = inst_32575);

(statearr_32640[(12)] = inst_32576);

return statearr_32640;
})();
var statearr_32641_32671 = state_32621__$1;
(statearr_32641_32671[(2)] = null);

(statearr_32641_32671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (3))){
var inst_32619 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32621__$1,inst_32619);
} else {
if((state_val_32622 === (12))){
var inst_32607 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32642_32672 = state_32621__$1;
(statearr_32642_32672[(2)] = inst_32607);

(statearr_32642_32672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (2))){
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32621__$1,(4),in$);
} else {
if((state_val_32622 === (23))){
var inst_32615 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32643_32673 = state_32621__$1;
(statearr_32643_32673[(2)] = inst_32615);

(statearr_32643_32673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (19))){
var inst_32602 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32644_32674 = state_32621__$1;
(statearr_32644_32674[(2)] = inst_32602);

(statearr_32644_32674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (11))){
var inst_32573 = (state_32621[(9)]);
var inst_32587 = (state_32621[(7)]);
var inst_32587__$1 = cljs.core.seq.call(null,inst_32573);
var state_32621__$1 = (function (){var statearr_32645 = state_32621;
(statearr_32645[(7)] = inst_32587__$1);

return statearr_32645;
})();
if(inst_32587__$1){
var statearr_32646_32675 = state_32621__$1;
(statearr_32646_32675[(1)] = (14));

} else {
var statearr_32647_32676 = state_32621__$1;
(statearr_32647_32676[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (9))){
var inst_32609 = (state_32621[(2)]);
var inst_32610 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32621__$1 = (function (){var statearr_32648 = state_32621;
(statearr_32648[(15)] = inst_32609);

return statearr_32648;
})();
if(cljs.core.truth_(inst_32610)){
var statearr_32649_32677 = state_32621__$1;
(statearr_32649_32677[(1)] = (21));

} else {
var statearr_32650_32678 = state_32621__$1;
(statearr_32650_32678[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (5))){
var inst_32565 = cljs.core.async.close_BANG_.call(null,out);
var state_32621__$1 = state_32621;
var statearr_32651_32679 = state_32621__$1;
(statearr_32651_32679[(2)] = inst_32565);

(statearr_32651_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (14))){
var inst_32587 = (state_32621[(7)]);
var inst_32589 = cljs.core.chunked_seq_QMARK_.call(null,inst_32587);
var state_32621__$1 = state_32621;
if(inst_32589){
var statearr_32652_32680 = state_32621__$1;
(statearr_32652_32680[(1)] = (17));

} else {
var statearr_32653_32681 = state_32621__$1;
(statearr_32653_32681[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (16))){
var inst_32605 = (state_32621[(2)]);
var state_32621__$1 = state_32621;
var statearr_32654_32682 = state_32621__$1;
(statearr_32654_32682[(2)] = inst_32605);

(statearr_32654_32682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32622 === (10))){
var inst_32574 = (state_32621[(10)]);
var inst_32576 = (state_32621[(12)]);
var inst_32581 = cljs.core._nth.call(null,inst_32574,inst_32576);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32621__$1,(13),out,inst_32581);
} else {
if((state_val_32622 === (18))){
var inst_32587 = (state_32621[(7)]);
var inst_32596 = cljs.core.first.call(null,inst_32587);
var state_32621__$1 = state_32621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32621__$1,(20),out,inst_32596);
} else {
if((state_val_32622 === (8))){
var inst_32575 = (state_32621[(11)]);
var inst_32576 = (state_32621[(12)]);
var inst_32578 = (inst_32576 < inst_32575);
var inst_32579 = inst_32578;
var state_32621__$1 = state_32621;
if(cljs.core.truth_(inst_32579)){
var statearr_32655_32683 = state_32621__$1;
(statearr_32655_32683[(1)] = (10));

} else {
var statearr_32656_32684 = state_32621__$1;
(statearr_32656_32684[(1)] = (11));

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
});})(c__31032__auto__))
;
return ((function (switch__30944__auto__,c__31032__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30945__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30945__auto____0 = (function (){
var statearr_32657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32657[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30945__auto__);

(statearr_32657[(1)] = (1));

return statearr_32657;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30945__auto____1 = (function (state_32621){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32658){if((e32658 instanceof Object)){
var ex__30948__auto__ = e32658;
var statearr_32659_32685 = state_32621;
(statearr_32659_32685[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32686 = state_32621;
state_32621 = G__32686;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30945__auto__ = function(state_32621){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30945__auto____1.call(this,state_32621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30945__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30945__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto__))
})();
var state__31034__auto__ = (function (){var statearr_32660 = f__31033__auto__.call(null);
(statearr_32660[(6)] = c__31032__auto__);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto__))
);

return c__31032__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32688 = arguments.length;
switch (G__32688) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32691 = arguments.length;
switch (G__32691) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32694 = arguments.length;
switch (G__32694) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31032__auto___32741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32741,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32741,out){
return (function (state_32718){
var state_val_32719 = (state_32718[(1)]);
if((state_val_32719 === (7))){
var inst_32713 = (state_32718[(2)]);
var state_32718__$1 = state_32718;
var statearr_32720_32742 = state_32718__$1;
(statearr_32720_32742[(2)] = inst_32713);

(statearr_32720_32742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (1))){
var inst_32695 = null;
var state_32718__$1 = (function (){var statearr_32721 = state_32718;
(statearr_32721[(7)] = inst_32695);

return statearr_32721;
})();
var statearr_32722_32743 = state_32718__$1;
(statearr_32722_32743[(2)] = null);

(statearr_32722_32743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (4))){
var inst_32698 = (state_32718[(8)]);
var inst_32698__$1 = (state_32718[(2)]);
var inst_32699 = (inst_32698__$1 == null);
var inst_32700 = cljs.core.not.call(null,inst_32699);
var state_32718__$1 = (function (){var statearr_32723 = state_32718;
(statearr_32723[(8)] = inst_32698__$1);

return statearr_32723;
})();
if(inst_32700){
var statearr_32724_32744 = state_32718__$1;
(statearr_32724_32744[(1)] = (5));

} else {
var statearr_32725_32745 = state_32718__$1;
(statearr_32725_32745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (6))){
var state_32718__$1 = state_32718;
var statearr_32726_32746 = state_32718__$1;
(statearr_32726_32746[(2)] = null);

(statearr_32726_32746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (3))){
var inst_32715 = (state_32718[(2)]);
var inst_32716 = cljs.core.async.close_BANG_.call(null,out);
var state_32718__$1 = (function (){var statearr_32727 = state_32718;
(statearr_32727[(9)] = inst_32715);

return statearr_32727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32718__$1,inst_32716);
} else {
if((state_val_32719 === (2))){
var state_32718__$1 = state_32718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32718__$1,(4),ch);
} else {
if((state_val_32719 === (11))){
var inst_32698 = (state_32718[(8)]);
var inst_32707 = (state_32718[(2)]);
var inst_32695 = inst_32698;
var state_32718__$1 = (function (){var statearr_32728 = state_32718;
(statearr_32728[(10)] = inst_32707);

(statearr_32728[(7)] = inst_32695);

return statearr_32728;
})();
var statearr_32729_32747 = state_32718__$1;
(statearr_32729_32747[(2)] = null);

(statearr_32729_32747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (9))){
var inst_32698 = (state_32718[(8)]);
var state_32718__$1 = state_32718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32718__$1,(11),out,inst_32698);
} else {
if((state_val_32719 === (5))){
var inst_32695 = (state_32718[(7)]);
var inst_32698 = (state_32718[(8)]);
var inst_32702 = cljs.core._EQ_.call(null,inst_32698,inst_32695);
var state_32718__$1 = state_32718;
if(inst_32702){
var statearr_32731_32748 = state_32718__$1;
(statearr_32731_32748[(1)] = (8));

} else {
var statearr_32732_32749 = state_32718__$1;
(statearr_32732_32749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (10))){
var inst_32710 = (state_32718[(2)]);
var state_32718__$1 = state_32718;
var statearr_32733_32750 = state_32718__$1;
(statearr_32733_32750[(2)] = inst_32710);

(statearr_32733_32750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32719 === (8))){
var inst_32695 = (state_32718[(7)]);
var tmp32730 = inst_32695;
var inst_32695__$1 = tmp32730;
var state_32718__$1 = (function (){var statearr_32734 = state_32718;
(statearr_32734[(7)] = inst_32695__$1);

return statearr_32734;
})();
var statearr_32735_32751 = state_32718__$1;
(statearr_32735_32751[(2)] = null);

(statearr_32735_32751[(1)] = (2));


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
});})(c__31032__auto___32741,out))
;
return ((function (switch__30944__auto__,c__31032__auto___32741,out){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32736[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32736[(1)] = (1));

return statearr_32736;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32718){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32737){if((e32737 instanceof Object)){
var ex__30948__auto__ = e32737;
var statearr_32738_32752 = state_32718;
(statearr_32738_32752[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32753 = state_32718;
state_32718 = G__32753;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32741,out))
})();
var state__31034__auto__ = (function (){var statearr_32739 = f__31033__auto__.call(null);
(statearr_32739[(6)] = c__31032__auto___32741);

return statearr_32739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32741,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32755 = arguments.length;
switch (G__32755) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31032__auto___32821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32821,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32821,out){
return (function (state_32793){
var state_val_32794 = (state_32793[(1)]);
if((state_val_32794 === (7))){
var inst_32789 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
var statearr_32795_32822 = state_32793__$1;
(statearr_32795_32822[(2)] = inst_32789);

(statearr_32795_32822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (1))){
var inst_32756 = (new Array(n));
var inst_32757 = inst_32756;
var inst_32758 = (0);
var state_32793__$1 = (function (){var statearr_32796 = state_32793;
(statearr_32796[(7)] = inst_32757);

(statearr_32796[(8)] = inst_32758);

return statearr_32796;
})();
var statearr_32797_32823 = state_32793__$1;
(statearr_32797_32823[(2)] = null);

(statearr_32797_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (4))){
var inst_32761 = (state_32793[(9)]);
var inst_32761__$1 = (state_32793[(2)]);
var inst_32762 = (inst_32761__$1 == null);
var inst_32763 = cljs.core.not.call(null,inst_32762);
var state_32793__$1 = (function (){var statearr_32798 = state_32793;
(statearr_32798[(9)] = inst_32761__$1);

return statearr_32798;
})();
if(inst_32763){
var statearr_32799_32824 = state_32793__$1;
(statearr_32799_32824[(1)] = (5));

} else {
var statearr_32800_32825 = state_32793__$1;
(statearr_32800_32825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (15))){
var inst_32783 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
var statearr_32801_32826 = state_32793__$1;
(statearr_32801_32826[(2)] = inst_32783);

(statearr_32801_32826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (13))){
var state_32793__$1 = state_32793;
var statearr_32802_32827 = state_32793__$1;
(statearr_32802_32827[(2)] = null);

(statearr_32802_32827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (6))){
var inst_32758 = (state_32793[(8)]);
var inst_32779 = (inst_32758 > (0));
var state_32793__$1 = state_32793;
if(cljs.core.truth_(inst_32779)){
var statearr_32803_32828 = state_32793__$1;
(statearr_32803_32828[(1)] = (12));

} else {
var statearr_32804_32829 = state_32793__$1;
(statearr_32804_32829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (3))){
var inst_32791 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32793__$1,inst_32791);
} else {
if((state_val_32794 === (12))){
var inst_32757 = (state_32793[(7)]);
var inst_32781 = cljs.core.vec.call(null,inst_32757);
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32793__$1,(15),out,inst_32781);
} else {
if((state_val_32794 === (2))){
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32793__$1,(4),ch);
} else {
if((state_val_32794 === (11))){
var inst_32773 = (state_32793[(2)]);
var inst_32774 = (new Array(n));
var inst_32757 = inst_32774;
var inst_32758 = (0);
var state_32793__$1 = (function (){var statearr_32805 = state_32793;
(statearr_32805[(7)] = inst_32757);

(statearr_32805[(10)] = inst_32773);

(statearr_32805[(8)] = inst_32758);

return statearr_32805;
})();
var statearr_32806_32830 = state_32793__$1;
(statearr_32806_32830[(2)] = null);

(statearr_32806_32830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (9))){
var inst_32757 = (state_32793[(7)]);
var inst_32771 = cljs.core.vec.call(null,inst_32757);
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32793__$1,(11),out,inst_32771);
} else {
if((state_val_32794 === (5))){
var inst_32761 = (state_32793[(9)]);
var inst_32766 = (state_32793[(11)]);
var inst_32757 = (state_32793[(7)]);
var inst_32758 = (state_32793[(8)]);
var inst_32765 = (inst_32757[inst_32758] = inst_32761);
var inst_32766__$1 = (inst_32758 + (1));
var inst_32767 = (inst_32766__$1 < n);
var state_32793__$1 = (function (){var statearr_32807 = state_32793;
(statearr_32807[(11)] = inst_32766__$1);

(statearr_32807[(12)] = inst_32765);

return statearr_32807;
})();
if(cljs.core.truth_(inst_32767)){
var statearr_32808_32831 = state_32793__$1;
(statearr_32808_32831[(1)] = (8));

} else {
var statearr_32809_32832 = state_32793__$1;
(statearr_32809_32832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (14))){
var inst_32786 = (state_32793[(2)]);
var inst_32787 = cljs.core.async.close_BANG_.call(null,out);
var state_32793__$1 = (function (){var statearr_32811 = state_32793;
(statearr_32811[(13)] = inst_32786);

return statearr_32811;
})();
var statearr_32812_32833 = state_32793__$1;
(statearr_32812_32833[(2)] = inst_32787);

(statearr_32812_32833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (10))){
var inst_32777 = (state_32793[(2)]);
var state_32793__$1 = state_32793;
var statearr_32813_32834 = state_32793__$1;
(statearr_32813_32834[(2)] = inst_32777);

(statearr_32813_32834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32794 === (8))){
var inst_32766 = (state_32793[(11)]);
var inst_32757 = (state_32793[(7)]);
var tmp32810 = inst_32757;
var inst_32757__$1 = tmp32810;
var inst_32758 = inst_32766;
var state_32793__$1 = (function (){var statearr_32814 = state_32793;
(statearr_32814[(7)] = inst_32757__$1);

(statearr_32814[(8)] = inst_32758);

return statearr_32814;
})();
var statearr_32815_32835 = state_32793__$1;
(statearr_32815_32835[(2)] = null);

(statearr_32815_32835[(1)] = (2));


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
});})(c__31032__auto___32821,out))
;
return ((function (switch__30944__auto__,c__31032__auto___32821,out){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32816[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32816[(1)] = (1));

return statearr_32816;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32793){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32817){if((e32817 instanceof Object)){
var ex__30948__auto__ = e32817;
var statearr_32818_32836 = state_32793;
(statearr_32818_32836[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32837 = state_32793;
state_32793 = G__32837;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32821,out))
})();
var state__31034__auto__ = (function (){var statearr_32819 = f__31033__auto__.call(null);
(statearr_32819[(6)] = c__31032__auto___32821);

return statearr_32819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32821,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32839 = arguments.length;
switch (G__32839) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31032__auto___32909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31032__auto___32909,out){
return (function (){
var f__31033__auto__ = (function (){var switch__30944__auto__ = ((function (c__31032__auto___32909,out){
return (function (state_32881){
var state_val_32882 = (state_32881[(1)]);
if((state_val_32882 === (7))){
var inst_32877 = (state_32881[(2)]);
var state_32881__$1 = state_32881;
var statearr_32883_32910 = state_32881__$1;
(statearr_32883_32910[(2)] = inst_32877);

(statearr_32883_32910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (1))){
var inst_32840 = [];
var inst_32841 = inst_32840;
var inst_32842 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32881__$1 = (function (){var statearr_32884 = state_32881;
(statearr_32884[(7)] = inst_32842);

(statearr_32884[(8)] = inst_32841);

return statearr_32884;
})();
var statearr_32885_32911 = state_32881__$1;
(statearr_32885_32911[(2)] = null);

(statearr_32885_32911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (4))){
var inst_32845 = (state_32881[(9)]);
var inst_32845__$1 = (state_32881[(2)]);
var inst_32846 = (inst_32845__$1 == null);
var inst_32847 = cljs.core.not.call(null,inst_32846);
var state_32881__$1 = (function (){var statearr_32886 = state_32881;
(statearr_32886[(9)] = inst_32845__$1);

return statearr_32886;
})();
if(inst_32847){
var statearr_32887_32912 = state_32881__$1;
(statearr_32887_32912[(1)] = (5));

} else {
var statearr_32888_32913 = state_32881__$1;
(statearr_32888_32913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (15))){
var inst_32871 = (state_32881[(2)]);
var state_32881__$1 = state_32881;
var statearr_32889_32914 = state_32881__$1;
(statearr_32889_32914[(2)] = inst_32871);

(statearr_32889_32914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (13))){
var state_32881__$1 = state_32881;
var statearr_32890_32915 = state_32881__$1;
(statearr_32890_32915[(2)] = null);

(statearr_32890_32915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (6))){
var inst_32841 = (state_32881[(8)]);
var inst_32866 = inst_32841.length;
var inst_32867 = (inst_32866 > (0));
var state_32881__$1 = state_32881;
if(cljs.core.truth_(inst_32867)){
var statearr_32891_32916 = state_32881__$1;
(statearr_32891_32916[(1)] = (12));

} else {
var statearr_32892_32917 = state_32881__$1;
(statearr_32892_32917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (3))){
var inst_32879 = (state_32881[(2)]);
var state_32881__$1 = state_32881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32881__$1,inst_32879);
} else {
if((state_val_32882 === (12))){
var inst_32841 = (state_32881[(8)]);
var inst_32869 = cljs.core.vec.call(null,inst_32841);
var state_32881__$1 = state_32881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32881__$1,(15),out,inst_32869);
} else {
if((state_val_32882 === (2))){
var state_32881__$1 = state_32881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32881__$1,(4),ch);
} else {
if((state_val_32882 === (11))){
var inst_32849 = (state_32881[(10)]);
var inst_32845 = (state_32881[(9)]);
var inst_32859 = (state_32881[(2)]);
var inst_32860 = [];
var inst_32861 = inst_32860.push(inst_32845);
var inst_32841 = inst_32860;
var inst_32842 = inst_32849;
var state_32881__$1 = (function (){var statearr_32893 = state_32881;
(statearr_32893[(11)] = inst_32859);

(statearr_32893[(7)] = inst_32842);

(statearr_32893[(12)] = inst_32861);

(statearr_32893[(8)] = inst_32841);

return statearr_32893;
})();
var statearr_32894_32918 = state_32881__$1;
(statearr_32894_32918[(2)] = null);

(statearr_32894_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (9))){
var inst_32841 = (state_32881[(8)]);
var inst_32857 = cljs.core.vec.call(null,inst_32841);
var state_32881__$1 = state_32881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32881__$1,(11),out,inst_32857);
} else {
if((state_val_32882 === (5))){
var inst_32849 = (state_32881[(10)]);
var inst_32842 = (state_32881[(7)]);
var inst_32845 = (state_32881[(9)]);
var inst_32849__$1 = f.call(null,inst_32845);
var inst_32850 = cljs.core._EQ_.call(null,inst_32849__$1,inst_32842);
var inst_32851 = cljs.core.keyword_identical_QMARK_.call(null,inst_32842,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32852 = (inst_32850) || (inst_32851);
var state_32881__$1 = (function (){var statearr_32895 = state_32881;
(statearr_32895[(10)] = inst_32849__$1);

return statearr_32895;
})();
if(cljs.core.truth_(inst_32852)){
var statearr_32896_32919 = state_32881__$1;
(statearr_32896_32919[(1)] = (8));

} else {
var statearr_32897_32920 = state_32881__$1;
(statearr_32897_32920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (14))){
var inst_32874 = (state_32881[(2)]);
var inst_32875 = cljs.core.async.close_BANG_.call(null,out);
var state_32881__$1 = (function (){var statearr_32899 = state_32881;
(statearr_32899[(13)] = inst_32874);

return statearr_32899;
})();
var statearr_32900_32921 = state_32881__$1;
(statearr_32900_32921[(2)] = inst_32875);

(statearr_32900_32921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (10))){
var inst_32864 = (state_32881[(2)]);
var state_32881__$1 = state_32881;
var statearr_32901_32922 = state_32881__$1;
(statearr_32901_32922[(2)] = inst_32864);

(statearr_32901_32922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (8))){
var inst_32849 = (state_32881[(10)]);
var inst_32845 = (state_32881[(9)]);
var inst_32841 = (state_32881[(8)]);
var inst_32854 = inst_32841.push(inst_32845);
var tmp32898 = inst_32841;
var inst_32841__$1 = tmp32898;
var inst_32842 = inst_32849;
var state_32881__$1 = (function (){var statearr_32902 = state_32881;
(statearr_32902[(14)] = inst_32854);

(statearr_32902[(7)] = inst_32842);

(statearr_32902[(8)] = inst_32841__$1);

return statearr_32902;
})();
var statearr_32903_32923 = state_32881__$1;
(statearr_32903_32923[(2)] = null);

(statearr_32903_32923[(1)] = (2));


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
});})(c__31032__auto___32909,out))
;
return ((function (switch__30944__auto__,c__31032__auto___32909,out){
return (function() {
var cljs$core$async$state_machine__30945__auto__ = null;
var cljs$core$async$state_machine__30945__auto____0 = (function (){
var statearr_32904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32904[(0)] = cljs$core$async$state_machine__30945__auto__);

(statearr_32904[(1)] = (1));

return statearr_32904;
});
var cljs$core$async$state_machine__30945__auto____1 = (function (state_32881){
while(true){
var ret_value__30946__auto__ = (function (){try{while(true){
var result__30947__auto__ = switch__30944__auto__.call(null,state_32881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30947__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30947__auto__;
}
break;
}
}catch (e32905){if((e32905 instanceof Object)){
var ex__30948__auto__ = e32905;
var statearr_32906_32924 = state_32881;
(statearr_32906_32924[(5)] = ex__30948__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32925 = state_32881;
state_32881 = G__32925;
continue;
} else {
return ret_value__30946__auto__;
}
break;
}
});
cljs$core$async$state_machine__30945__auto__ = function(state_32881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30945__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30945__auto____1.call(this,state_32881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30945__auto____0;
cljs$core$async$state_machine__30945__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30945__auto____1;
return cljs$core$async$state_machine__30945__auto__;
})()
;})(switch__30944__auto__,c__31032__auto___32909,out))
})();
var state__31034__auto__ = (function (){var statearr_32907 = f__31033__auto__.call(null);
(statearr_32907[(6)] = c__31032__auto___32909);

return statearr_32907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31034__auto__);
});})(c__31032__auto___32909,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1553724323163
