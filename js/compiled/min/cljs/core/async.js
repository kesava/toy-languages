// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18905 = arguments.length;
switch (G__18905) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18906 = (function (f,blockable,meta18907){
this.f = f;
this.blockable = blockable;
this.meta18907 = meta18907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18908,meta18907__$1){
var self__ = this;
var _18908__$1 = this;
return (new cljs.core.async.t_cljs$core$async18906(self__.f,self__.blockable,meta18907__$1));
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18908){
var self__ = this;
var _18908__$1 = this;
return self__.meta18907;
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta18907], null);
});

cljs.core.async.t_cljs$core$async18906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18906";

cljs.core.async.t_cljs$core$async18906.cljs$lang$ctorPrWriter = (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async18906");
});

cljs.core.async.__GT_t_cljs$core$async18906 = (function cljs$core$async$__GT_t_cljs$core$async18906(f__$1,blockable__$1,meta18907){
return (new cljs.core.async.t_cljs$core$async18906(f__$1,blockable__$1,meta18907));
});

}

return (new cljs.core.async.t_cljs$core$async18906(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__18912 = arguments.length;
switch (G__18912) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__18915 = arguments.length;
switch (G__18915) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__18918 = arguments.length;
switch (G__18918) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18920 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18920) : fn1.call(null,val_18920));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18920,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18920) : fn1.call(null,val_18920));
});})(val_18920,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__18922 = arguments.length;
switch (G__18922) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__11868__auto___18924 = n;
var x_18925 = (0);
while(true){
if((x_18925 < n__11868__auto___18924)){
(a[x_18925] = (0));

var G__18926 = (x_18925 + (1));
x_18925 = G__18926;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18927 = (i + (1));
i = G__18927;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async18928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18928 = (function (flag,meta18929){
this.flag = flag;
this.meta18929 = meta18929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18930,meta18929__$1){
var self__ = this;
var _18930__$1 = this;
return (new cljs.core.async.t_cljs$core$async18928(self__.flag,meta18929__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18930){
var self__ = this;
var _18930__$1 = this;
return self__.meta18929;
});})(flag))
;

cljs.core.async.t_cljs$core$async18928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18928.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta18929], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18928";

cljs.core.async.t_cljs$core$async18928.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async18928");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18928 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18928(flag__$1,meta18929){
return (new cljs.core.async.t_cljs$core$async18928(flag__$1,meta18929));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18928(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18931 = (function (flag,cb,meta18932){
this.flag = flag;
this.cb = cb;
this.meta18932 = meta18932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18933,meta18932__$1){
var self__ = this;
var _18933__$1 = this;
return (new cljs.core.async.t_cljs$core$async18931(self__.flag,self__.cb,meta18932__$1));
});

cljs.core.async.t_cljs$core$async18931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18933){
var self__ = this;
var _18933__$1 = this;
return self__.meta18932;
});

cljs.core.async.t_cljs$core$async18931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async18931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta18932], null);
});

cljs.core.async.t_cljs$core$async18931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18931";

cljs.core.async.t_cljs$core$async18931.cljs$lang$ctorPrWriter = (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async18931");
});

cljs.core.async.__GT_t_cljs$core$async18931 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18931(flag__$1,cb__$1,meta18932){
return (new cljs.core.async.t_cljs$core$async18931(flag__$1,cb__$1,meta18932));
});

}

return (new cljs.core.async.t_cljs$core$async18931(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18934_SHARP_){
var G__18936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18934_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18936) : fret.call(null,G__18936));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18935_SHARP_){
var G__18937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18935_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18937) : fret.call(null,G__18937));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__10921__auto__ = wport;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18938 = (i + (1));
i = G__18938;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10921__auto__ = ret;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__10909__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__10909__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__10909__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__12088__auto__ = [];
var len__12081__auto___18944 = arguments.length;
var i__12082__auto___18945 = (0);
while(true){
if((i__12082__auto___18945 < len__12081__auto___18944)){
args__12088__auto__.push((arguments[i__12082__auto___18945]));

var G__18946 = (i__12082__auto___18945 + (1));
i__12082__auto___18945 = G__18946;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((1) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12089__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18941){
var map__18942 = p__18941;
var map__18942__$1 = ((((!((map__18942 == null)))?((((map__18942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18942):map__18942);
var opts = map__18942__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18939){
var G__18940 = cljs.core.first(seq18939);
var seq18939__$1 = cljs.core.next(seq18939);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18940,seq18939__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__18948 = arguments.length;
switch (G__18948) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18859__auto___18994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___18994){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___18994){
return (function (state_18972){
var state_val_18973 = (state_18972[(1)]);
if((state_val_18973 === (7))){
var inst_18968 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_18974_18995 = state_18972__$1;
(statearr_18974_18995[(2)] = inst_18968);

(statearr_18974_18995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (1))){
var state_18972__$1 = state_18972;
var statearr_18975_18996 = state_18972__$1;
(statearr_18975_18996[(2)] = null);

(statearr_18975_18996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (4))){
var inst_18951 = (state_18972[(7)]);
var inst_18951__$1 = (state_18972[(2)]);
var inst_18952 = (inst_18951__$1 == null);
var state_18972__$1 = (function (){var statearr_18976 = state_18972;
(statearr_18976[(7)] = inst_18951__$1);

return statearr_18976;
})();
if(cljs.core.truth_(inst_18952)){
var statearr_18977_18997 = state_18972__$1;
(statearr_18977_18997[(1)] = (5));

} else {
var statearr_18978_18998 = state_18972__$1;
(statearr_18978_18998[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (13))){
var state_18972__$1 = state_18972;
var statearr_18979_18999 = state_18972__$1;
(statearr_18979_18999[(2)] = null);

(statearr_18979_18999[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (6))){
var inst_18951 = (state_18972[(7)]);
var state_18972__$1 = state_18972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18972__$1,(11),to,inst_18951);
} else {
if((state_val_18973 === (3))){
var inst_18970 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18972__$1,inst_18970);
} else {
if((state_val_18973 === (12))){
var state_18972__$1 = state_18972;
var statearr_18980_19000 = state_18972__$1;
(statearr_18980_19000[(2)] = null);

(statearr_18980_19000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (2))){
var state_18972__$1 = state_18972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18972__$1,(4),from);
} else {
if((state_val_18973 === (11))){
var inst_18961 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
if(cljs.core.truth_(inst_18961)){
var statearr_18981_19001 = state_18972__$1;
(statearr_18981_19001[(1)] = (12));

} else {
var statearr_18982_19002 = state_18972__$1;
(statearr_18982_19002[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (9))){
var state_18972__$1 = state_18972;
var statearr_18983_19003 = state_18972__$1;
(statearr_18983_19003[(2)] = null);

(statearr_18983_19003[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (5))){
var state_18972__$1 = state_18972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18984_19004 = state_18972__$1;
(statearr_18984_19004[(1)] = (8));

} else {
var statearr_18985_19005 = state_18972__$1;
(statearr_18985_19005[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (14))){
var inst_18966 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_18986_19006 = state_18972__$1;
(statearr_18986_19006[(2)] = inst_18966);

(statearr_18986_19006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (10))){
var inst_18958 = (state_18972[(2)]);
var state_18972__$1 = state_18972;
var statearr_18987_19007 = state_18972__$1;
(statearr_18987_19007[(2)] = inst_18958);

(statearr_18987_19007[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18973 === (8))){
var inst_18955 = cljs.core.async.close_BANG_(to);
var state_18972__$1 = state_18972;
var statearr_18988_19008 = state_18972__$1;
(statearr_18988_19008[(2)] = inst_18955);

(statearr_18988_19008[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___18994))
;
return ((function (switch__18759__auto__,c__18859__auto___18994){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_18989 = [null,null,null,null,null,null,null,null];
(statearr_18989[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_18989[(1)] = (1));

return statearr_18989;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_18972){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_18972);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e18990){if((e18990 instanceof Object)){
var ex__18763__auto__ = e18990;
var statearr_18991_19009 = state_18972;
(statearr_18991_19009[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18972);

return cljs.core.cst$kw$recur;
} else {
throw e18990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19010 = state_18972;
state_18972 = G__19010;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_18972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_18972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___18994))
})();
var state__18861__auto__ = (function (){var statearr_18992 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_18992[(6)] = c__18859__auto___18994);

return statearr_18992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___18994))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__19011){
var vec__19012 = p__19011;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19012,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19012,(1),null);
var job = vec__19012;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18859__auto___19183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___19183,res,vec__19012,v,p,job,jobs,results){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___19183,res,vec__19012,v,p,job,jobs,results){
return (function (state_19019){
var state_val_19020 = (state_19019[(1)]);
if((state_val_19020 === (1))){
var state_19019__$1 = state_19019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19019__$1,(2),res,v);
} else {
if((state_val_19020 === (2))){
var inst_19016 = (state_19019[(2)]);
var inst_19017 = cljs.core.async.close_BANG_(res);
var state_19019__$1 = (function (){var statearr_19021 = state_19019;
(statearr_19021[(7)] = inst_19016);

return statearr_19021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19019__$1,inst_19017);
} else {
return null;
}
}
});})(c__18859__auto___19183,res,vec__19012,v,p,job,jobs,results))
;
return ((function (switch__18759__auto__,c__18859__auto___19183,res,vec__19012,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0 = (function (){
var statearr_19022 = [null,null,null,null,null,null,null,null];
(statearr_19022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__);

(statearr_19022[(1)] = (1));

return statearr_19022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1 = (function (state_19019){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19019);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19023){if((e19023 instanceof Object)){
var ex__18763__auto__ = e19023;
var statearr_19024_19184 = state_19019;
(statearr_19024_19184[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19019);

return cljs.core.cst$kw$recur;
} else {
throw e19023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19185 = state_19019;
state_19019 = G__19185;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = function(state_19019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1.call(this,state_19019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___19183,res,vec__19012,v,p,job,jobs,results))
})();
var state__18861__auto__ = (function (){var statearr_19025 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19025[(6)] = c__18859__auto___19183);

return statearr_19025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___19183,res,vec__19012,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19026){
var vec__19027 = p__19026;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(1),null);
var job = vec__19027;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__11868__auto___19186 = n;
var __19187 = (0);
while(true){
if((__19187 < n__11868__auto___19186)){
var G__19030_19188 = type;
var G__19030_19189__$1 = (((G__19030_19188 instanceof cljs.core.Keyword))?G__19030_19188.fqn:null);
switch (G__19030_19189__$1) {
case "compute":
var c__18859__auto___19191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19187,c__18859__auto___19191,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (__19187,c__18859__auto___19191,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async){
return (function (state_19043){
var state_val_19044 = (state_19043[(1)]);
if((state_val_19044 === (1))){
var state_19043__$1 = state_19043;
var statearr_19045_19192 = state_19043__$1;
(statearr_19045_19192[(2)] = null);

(statearr_19045_19192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19044 === (2))){
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19043__$1,(4),jobs);
} else {
if((state_val_19044 === (3))){
var inst_19041 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19043__$1,inst_19041);
} else {
if((state_val_19044 === (4))){
var inst_19033 = (state_19043[(2)]);
var inst_19034 = process(inst_19033);
var state_19043__$1 = state_19043;
if(cljs.core.truth_(inst_19034)){
var statearr_19046_19193 = state_19043__$1;
(statearr_19046_19193[(1)] = (5));

} else {
var statearr_19047_19194 = state_19043__$1;
(statearr_19047_19194[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19044 === (5))){
var state_19043__$1 = state_19043;
var statearr_19048_19195 = state_19043__$1;
(statearr_19048_19195[(2)] = null);

(statearr_19048_19195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19044 === (6))){
var state_19043__$1 = state_19043;
var statearr_19049_19196 = state_19043__$1;
(statearr_19049_19196[(2)] = null);

(statearr_19049_19196[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19044 === (7))){
var inst_19039 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
var statearr_19050_19197 = state_19043__$1;
(statearr_19050_19197[(2)] = inst_19039);

(statearr_19050_19197[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__19187,c__18859__auto___19191,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async))
;
return ((function (__19187,switch__18759__auto__,c__18859__auto___19191,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0 = (function (){
var statearr_19051 = [null,null,null,null,null,null,null];
(statearr_19051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__);

(statearr_19051[(1)] = (1));

return statearr_19051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1 = (function (state_19043){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19043);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19052){if((e19052 instanceof Object)){
var ex__18763__auto__ = e19052;
var statearr_19053_19198 = state_19043;
(statearr_19053_19198[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19043);

return cljs.core.cst$kw$recur;
} else {
throw e19052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19199 = state_19043;
state_19043 = G__19199;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = function(state_19043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1.call(this,state_19043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__;
})()
;})(__19187,switch__18759__auto__,c__18859__auto___19191,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async))
})();
var state__18861__auto__ = (function (){var statearr_19054 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19054[(6)] = c__18859__auto___19191);

return statearr_19054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(__19187,c__18859__auto___19191,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async))
);


break;
case "async":
var c__18859__auto___19200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19187,c__18859__auto___19200,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (__19187,c__18859__auto___19200,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async){
return (function (state_19067){
var state_val_19068 = (state_19067[(1)]);
if((state_val_19068 === (1))){
var state_19067__$1 = state_19067;
var statearr_19069_19201 = state_19067__$1;
(statearr_19069_19201[(2)] = null);

(statearr_19069_19201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19068 === (2))){
var state_19067__$1 = state_19067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19067__$1,(4),jobs);
} else {
if((state_val_19068 === (3))){
var inst_19065 = (state_19067[(2)]);
var state_19067__$1 = state_19067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19067__$1,inst_19065);
} else {
if((state_val_19068 === (4))){
var inst_19057 = (state_19067[(2)]);
var inst_19058 = async(inst_19057);
var state_19067__$1 = state_19067;
if(cljs.core.truth_(inst_19058)){
var statearr_19070_19202 = state_19067__$1;
(statearr_19070_19202[(1)] = (5));

} else {
var statearr_19071_19203 = state_19067__$1;
(statearr_19071_19203[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19068 === (5))){
var state_19067__$1 = state_19067;
var statearr_19072_19204 = state_19067__$1;
(statearr_19072_19204[(2)] = null);

(statearr_19072_19204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19068 === (6))){
var state_19067__$1 = state_19067;
var statearr_19073_19205 = state_19067__$1;
(statearr_19073_19205[(2)] = null);

(statearr_19073_19205[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19068 === (7))){
var inst_19063 = (state_19067[(2)]);
var state_19067__$1 = state_19067;
var statearr_19074_19206 = state_19067__$1;
(statearr_19074_19206[(2)] = inst_19063);

(statearr_19074_19206[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__19187,c__18859__auto___19200,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async))
;
return ((function (__19187,switch__18759__auto__,c__18859__auto___19200,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0 = (function (){
var statearr_19075 = [null,null,null,null,null,null,null];
(statearr_19075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__);

(statearr_19075[(1)] = (1));

return statearr_19075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1 = (function (state_19067){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19067);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19076){if((e19076 instanceof Object)){
var ex__18763__auto__ = e19076;
var statearr_19077_19207 = state_19067;
(statearr_19077_19207[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19067);

return cljs.core.cst$kw$recur;
} else {
throw e19076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19208 = state_19067;
state_19067 = G__19208;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = function(state_19067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1.call(this,state_19067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__;
})()
;})(__19187,switch__18759__auto__,c__18859__auto___19200,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async))
})();
var state__18861__auto__ = (function (){var statearr_19078 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19078[(6)] = c__18859__auto___19200);

return statearr_19078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(__19187,c__18859__auto___19200,G__19030_19188,G__19030_19189__$1,n__11868__auto___19186,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19030_19189__$1)].join('')));

}

var G__19209 = (__19187 + (1));
__19187 = G__19209;
continue;
} else {
}
break;
}

var c__18859__auto___19210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___19210,jobs,results,process,async){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___19210,jobs,results,process,async){
return (function (state_19100){
var state_val_19101 = (state_19100[(1)]);
if((state_val_19101 === (1))){
var state_19100__$1 = state_19100;
var statearr_19102_19211 = state_19100__$1;
(statearr_19102_19211[(2)] = null);

(statearr_19102_19211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19101 === (2))){
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19100__$1,(4),from);
} else {
if((state_val_19101 === (3))){
var inst_19098 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19100__$1,inst_19098);
} else {
if((state_val_19101 === (4))){
var inst_19081 = (state_19100[(7)]);
var inst_19081__$1 = (state_19100[(2)]);
var inst_19082 = (inst_19081__$1 == null);
var state_19100__$1 = (function (){var statearr_19103 = state_19100;
(statearr_19103[(7)] = inst_19081__$1);

return statearr_19103;
})();
if(cljs.core.truth_(inst_19082)){
var statearr_19104_19212 = state_19100__$1;
(statearr_19104_19212[(1)] = (5));

} else {
var statearr_19105_19213 = state_19100__$1;
(statearr_19105_19213[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19101 === (5))){
var inst_19084 = cljs.core.async.close_BANG_(jobs);
var state_19100__$1 = state_19100;
var statearr_19106_19214 = state_19100__$1;
(statearr_19106_19214[(2)] = inst_19084);

(statearr_19106_19214[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19101 === (6))){
var inst_19081 = (state_19100[(7)]);
var inst_19086 = (state_19100[(8)]);
var inst_19086__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19088 = [inst_19081,inst_19086__$1];
var inst_19089 = (new cljs.core.PersistentVector(null,2,(5),inst_19087,inst_19088,null));
var state_19100__$1 = (function (){var statearr_19107 = state_19100;
(statearr_19107[(8)] = inst_19086__$1);

return statearr_19107;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19100__$1,(8),jobs,inst_19089);
} else {
if((state_val_19101 === (7))){
var inst_19096 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19108_19215 = state_19100__$1;
(statearr_19108_19215[(2)] = inst_19096);

(statearr_19108_19215[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19101 === (8))){
var inst_19086 = (state_19100[(8)]);
var inst_19091 = (state_19100[(2)]);
var state_19100__$1 = (function (){var statearr_19109 = state_19100;
(statearr_19109[(9)] = inst_19091);

return statearr_19109;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19100__$1,(9),results,inst_19086);
} else {
if((state_val_19101 === (9))){
var inst_19093 = (state_19100[(2)]);
var state_19100__$1 = (function (){var statearr_19110 = state_19100;
(statearr_19110[(10)] = inst_19093);

return statearr_19110;
})();
var statearr_19111_19216 = state_19100__$1;
(statearr_19111_19216[(2)] = null);

(statearr_19111_19216[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___19210,jobs,results,process,async))
;
return ((function (switch__18759__auto__,c__18859__auto___19210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0 = (function (){
var statearr_19112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__);

(statearr_19112[(1)] = (1));

return statearr_19112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1 = (function (state_19100){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19100);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19113){if((e19113 instanceof Object)){
var ex__18763__auto__ = e19113;
var statearr_19114_19217 = state_19100;
(statearr_19114_19217[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19100);

return cljs.core.cst$kw$recur;
} else {
throw e19113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19218 = state_19100;
state_19100 = G__19218;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = function(state_19100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1.call(this,state_19100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___19210,jobs,results,process,async))
})();
var state__18861__auto__ = (function (){var statearr_19115 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19115[(6)] = c__18859__auto___19210);

return statearr_19115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___19210,jobs,results,process,async))
);


var c__18859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto__,jobs,results,process,async){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto__,jobs,results,process,async){
return (function (state_19153){
var state_val_19154 = (state_19153[(1)]);
if((state_val_19154 === (7))){
var inst_19149 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
var statearr_19155_19219 = state_19153__$1;
(statearr_19155_19219[(2)] = inst_19149);

(statearr_19155_19219[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (20))){
var state_19153__$1 = state_19153;
var statearr_19156_19220 = state_19153__$1;
(statearr_19156_19220[(2)] = null);

(statearr_19156_19220[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (1))){
var state_19153__$1 = state_19153;
var statearr_19157_19221 = state_19153__$1;
(statearr_19157_19221[(2)] = null);

(statearr_19157_19221[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (4))){
var inst_19118 = (state_19153[(7)]);
var inst_19118__$1 = (state_19153[(2)]);
var inst_19119 = (inst_19118__$1 == null);
var state_19153__$1 = (function (){var statearr_19158 = state_19153;
(statearr_19158[(7)] = inst_19118__$1);

return statearr_19158;
})();
if(cljs.core.truth_(inst_19119)){
var statearr_19159_19222 = state_19153__$1;
(statearr_19159_19222[(1)] = (5));

} else {
var statearr_19160_19223 = state_19153__$1;
(statearr_19160_19223[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (15))){
var inst_19131 = (state_19153[(8)]);
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19153__$1,(18),to,inst_19131);
} else {
if((state_val_19154 === (21))){
var inst_19144 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
var statearr_19161_19224 = state_19153__$1;
(statearr_19161_19224[(2)] = inst_19144);

(statearr_19161_19224[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (13))){
var inst_19146 = (state_19153[(2)]);
var state_19153__$1 = (function (){var statearr_19162 = state_19153;
(statearr_19162[(9)] = inst_19146);

return statearr_19162;
})();
var statearr_19163_19225 = state_19153__$1;
(statearr_19163_19225[(2)] = null);

(statearr_19163_19225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (6))){
var inst_19118 = (state_19153[(7)]);
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19153__$1,(11),inst_19118);
} else {
if((state_val_19154 === (17))){
var inst_19139 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
if(cljs.core.truth_(inst_19139)){
var statearr_19164_19226 = state_19153__$1;
(statearr_19164_19226[(1)] = (19));

} else {
var statearr_19165_19227 = state_19153__$1;
(statearr_19165_19227[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (3))){
var inst_19151 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19153__$1,inst_19151);
} else {
if((state_val_19154 === (12))){
var inst_19128 = (state_19153[(10)]);
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19153__$1,(14),inst_19128);
} else {
if((state_val_19154 === (2))){
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19153__$1,(4),results);
} else {
if((state_val_19154 === (19))){
var state_19153__$1 = state_19153;
var statearr_19166_19228 = state_19153__$1;
(statearr_19166_19228[(2)] = null);

(statearr_19166_19228[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (11))){
var inst_19128 = (state_19153[(2)]);
var state_19153__$1 = (function (){var statearr_19167 = state_19153;
(statearr_19167[(10)] = inst_19128);

return statearr_19167;
})();
var statearr_19168_19229 = state_19153__$1;
(statearr_19168_19229[(2)] = null);

(statearr_19168_19229[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (9))){
var state_19153__$1 = state_19153;
var statearr_19169_19230 = state_19153__$1;
(statearr_19169_19230[(2)] = null);

(statearr_19169_19230[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (5))){
var state_19153__$1 = state_19153;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19170_19231 = state_19153__$1;
(statearr_19170_19231[(1)] = (8));

} else {
var statearr_19171_19232 = state_19153__$1;
(statearr_19171_19232[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (14))){
var inst_19133 = (state_19153[(11)]);
var inst_19131 = (state_19153[(8)]);
var inst_19131__$1 = (state_19153[(2)]);
var inst_19132 = (inst_19131__$1 == null);
var inst_19133__$1 = cljs.core.not(inst_19132);
var state_19153__$1 = (function (){var statearr_19172 = state_19153;
(statearr_19172[(11)] = inst_19133__$1);

(statearr_19172[(8)] = inst_19131__$1);

return statearr_19172;
})();
if(inst_19133__$1){
var statearr_19173_19233 = state_19153__$1;
(statearr_19173_19233[(1)] = (15));

} else {
var statearr_19174_19234 = state_19153__$1;
(statearr_19174_19234[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (16))){
var inst_19133 = (state_19153[(11)]);
var state_19153__$1 = state_19153;
var statearr_19175_19235 = state_19153__$1;
(statearr_19175_19235[(2)] = inst_19133);

(statearr_19175_19235[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (10))){
var inst_19125 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
var statearr_19176_19236 = state_19153__$1;
(statearr_19176_19236[(2)] = inst_19125);

(statearr_19176_19236[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (18))){
var inst_19136 = (state_19153[(2)]);
var state_19153__$1 = state_19153;
var statearr_19177_19237 = state_19153__$1;
(statearr_19177_19237[(2)] = inst_19136);

(statearr_19177_19237[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19154 === (8))){
var inst_19122 = cljs.core.async.close_BANG_(to);
var state_19153__$1 = state_19153;
var statearr_19178_19238 = state_19153__$1;
(statearr_19178_19238[(2)] = inst_19122);

(statearr_19178_19238[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto__,jobs,results,process,async))
;
return ((function (switch__18759__auto__,c__18859__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0 = (function (){
var statearr_19179 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__);

(statearr_19179[(1)] = (1));

return statearr_19179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1 = (function (state_19153){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19153);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19180){if((e19180 instanceof Object)){
var ex__18763__auto__ = e19180;
var statearr_19181_19239 = state_19153;
(statearr_19181_19239[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19153);

return cljs.core.cst$kw$recur;
} else {
throw e19180;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19240 = state_19153;
state_19153 = G__19240;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__ = function(state_19153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1.call(this,state_19153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18760__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto__,jobs,results,process,async))
})();
var state__18861__auto__ = (function (){var statearr_19182 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19182[(6)] = c__18859__auto__);

return statearr_19182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto__,jobs,results,process,async))
);

return c__18859__auto__;
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
var G__19242 = arguments.length;
switch (G__19242) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__19245 = arguments.length;
switch (G__19245) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__19248 = arguments.length;
switch (G__19248) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18859__auto___19297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___19297,tc,fc){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___19297,tc,fc){
return (function (state_19274){
var state_val_19275 = (state_19274[(1)]);
if((state_val_19275 === (7))){
var inst_19270 = (state_19274[(2)]);
var state_19274__$1 = state_19274;
var statearr_19276_19298 = state_19274__$1;
(statearr_19276_19298[(2)] = inst_19270);

(statearr_19276_19298[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (1))){
var state_19274__$1 = state_19274;
var statearr_19277_19299 = state_19274__$1;
(statearr_19277_19299[(2)] = null);

(statearr_19277_19299[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (4))){
var inst_19251 = (state_19274[(7)]);
var inst_19251__$1 = (state_19274[(2)]);
var inst_19252 = (inst_19251__$1 == null);
var state_19274__$1 = (function (){var statearr_19278 = state_19274;
(statearr_19278[(7)] = inst_19251__$1);

return statearr_19278;
})();
if(cljs.core.truth_(inst_19252)){
var statearr_19279_19300 = state_19274__$1;
(statearr_19279_19300[(1)] = (5));

} else {
var statearr_19280_19301 = state_19274__$1;
(statearr_19280_19301[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (13))){
var state_19274__$1 = state_19274;
var statearr_19281_19302 = state_19274__$1;
(statearr_19281_19302[(2)] = null);

(statearr_19281_19302[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (6))){
var inst_19251 = (state_19274[(7)]);
var inst_19257 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19251) : p.call(null,inst_19251));
var state_19274__$1 = state_19274;
if(cljs.core.truth_(inst_19257)){
var statearr_19282_19303 = state_19274__$1;
(statearr_19282_19303[(1)] = (9));

} else {
var statearr_19283_19304 = state_19274__$1;
(statearr_19283_19304[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (3))){
var inst_19272 = (state_19274[(2)]);
var state_19274__$1 = state_19274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19274__$1,inst_19272);
} else {
if((state_val_19275 === (12))){
var state_19274__$1 = state_19274;
var statearr_19284_19305 = state_19274__$1;
(statearr_19284_19305[(2)] = null);

(statearr_19284_19305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (2))){
var state_19274__$1 = state_19274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19274__$1,(4),ch);
} else {
if((state_val_19275 === (11))){
var inst_19251 = (state_19274[(7)]);
var inst_19261 = (state_19274[(2)]);
var state_19274__$1 = state_19274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19274__$1,(8),inst_19261,inst_19251);
} else {
if((state_val_19275 === (9))){
var state_19274__$1 = state_19274;
var statearr_19285_19306 = state_19274__$1;
(statearr_19285_19306[(2)] = tc);

(statearr_19285_19306[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (5))){
var inst_19254 = cljs.core.async.close_BANG_(tc);
var inst_19255 = cljs.core.async.close_BANG_(fc);
var state_19274__$1 = (function (){var statearr_19286 = state_19274;
(statearr_19286[(8)] = inst_19254);

return statearr_19286;
})();
var statearr_19287_19307 = state_19274__$1;
(statearr_19287_19307[(2)] = inst_19255);

(statearr_19287_19307[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (14))){
var inst_19268 = (state_19274[(2)]);
var state_19274__$1 = state_19274;
var statearr_19288_19308 = state_19274__$1;
(statearr_19288_19308[(2)] = inst_19268);

(statearr_19288_19308[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (10))){
var state_19274__$1 = state_19274;
var statearr_19289_19309 = state_19274__$1;
(statearr_19289_19309[(2)] = fc);

(statearr_19289_19309[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19275 === (8))){
var inst_19263 = (state_19274[(2)]);
var state_19274__$1 = state_19274;
if(cljs.core.truth_(inst_19263)){
var statearr_19290_19310 = state_19274__$1;
(statearr_19290_19310[(1)] = (12));

} else {
var statearr_19291_19311 = state_19274__$1;
(statearr_19291_19311[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___19297,tc,fc))
;
return ((function (switch__18759__auto__,c__18859__auto___19297,tc,fc){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_19292 = [null,null,null,null,null,null,null,null,null];
(statearr_19292[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_19292[(1)] = (1));

return statearr_19292;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_19274){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19274);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19293){if((e19293 instanceof Object)){
var ex__18763__auto__ = e19293;
var statearr_19294_19312 = state_19274;
(statearr_19294_19312[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19274);

return cljs.core.cst$kw$recur;
} else {
throw e19293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19313 = state_19274;
state_19274 = G__19313;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_19274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_19274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___19297,tc,fc))
})();
var state__18861__auto__ = (function (){var statearr_19295 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19295[(6)] = c__18859__auto___19297);

return statearr_19295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___19297,tc,fc))
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
var c__18859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto__){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto__){
return (function (state_19334){
var state_val_19335 = (state_19334[(1)]);
if((state_val_19335 === (7))){
var inst_19330 = (state_19334[(2)]);
var state_19334__$1 = state_19334;
var statearr_19336_19354 = state_19334__$1;
(statearr_19336_19354[(2)] = inst_19330);

(statearr_19336_19354[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19335 === (1))){
var inst_19314 = init;
var state_19334__$1 = (function (){var statearr_19337 = state_19334;
(statearr_19337[(7)] = inst_19314);

return statearr_19337;
})();
var statearr_19338_19355 = state_19334__$1;
(statearr_19338_19355[(2)] = null);

(statearr_19338_19355[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19335 === (4))){
var inst_19317 = (state_19334[(8)]);
var inst_19317__$1 = (state_19334[(2)]);
var inst_19318 = (inst_19317__$1 == null);
var state_19334__$1 = (function (){var statearr_19339 = state_19334;
(statearr_19339[(8)] = inst_19317__$1);

return statearr_19339;
})();
if(cljs.core.truth_(inst_19318)){
var statearr_19340_19356 = state_19334__$1;
(statearr_19340_19356[(1)] = (5));

} else {
var statearr_19341_19357 = state_19334__$1;
(statearr_19341_19357[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19335 === (6))){
var inst_19321 = (state_19334[(9)]);
var inst_19314 = (state_19334[(7)]);
var inst_19317 = (state_19334[(8)]);
var inst_19321__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19314,inst_19317) : f.call(null,inst_19314,inst_19317));
var inst_19322 = cljs.core.reduced_QMARK_(inst_19321__$1);
var state_19334__$1 = (function (){var statearr_19342 = state_19334;
(statearr_19342[(9)] = inst_19321__$1);

return statearr_19342;
})();
if(inst_19322){
var statearr_19343_19358 = state_19334__$1;
(statearr_19343_19358[(1)] = (8));

} else {
var statearr_19344_19359 = state_19334__$1;
(statearr_19344_19359[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19335 === (3))){
var inst_19332 = (state_19334[(2)]);
var state_19334__$1 = state_19334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19334__$1,inst_19332);
} else {
if((state_val_19335 === (2))){
var state_19334__$1 = state_19334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19334__$1,(4),ch);
} else {
if((state_val_19335 === (9))){
var inst_19321 = (state_19334[(9)]);
var inst_19314 = inst_19321;
var state_19334__$1 = (function (){var statearr_19345 = state_19334;
(statearr_19345[(7)] = inst_19314);

return statearr_19345;
})();
var statearr_19346_19360 = state_19334__$1;
(statearr_19346_19360[(2)] = null);

(statearr_19346_19360[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19335 === (5))){
var inst_19314 = (state_19334[(7)]);
var state_19334__$1 = state_19334;
var statearr_19347_19361 = state_19334__$1;
(statearr_19347_19361[(2)] = inst_19314);

(statearr_19347_19361[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19335 === (10))){
var inst_19328 = (state_19334[(2)]);
var state_19334__$1 = state_19334;
var statearr_19348_19362 = state_19334__$1;
(statearr_19348_19362[(2)] = inst_19328);

(statearr_19348_19362[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19335 === (8))){
var inst_19321 = (state_19334[(9)]);
var inst_19324 = cljs.core.deref(inst_19321);
var state_19334__$1 = state_19334;
var statearr_19349_19363 = state_19334__$1;
(statearr_19349_19363[(2)] = inst_19324);

(statearr_19349_19363[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto__))
;
return ((function (switch__18759__auto__,c__18859__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18760__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18760__auto____0 = (function (){
var statearr_19350 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19350[(0)] = cljs$core$async$reduce_$_state_machine__18760__auto__);

(statearr_19350[(1)] = (1));

return statearr_19350;
});
var cljs$core$async$reduce_$_state_machine__18760__auto____1 = (function (state_19334){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19334);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19351){if((e19351 instanceof Object)){
var ex__18763__auto__ = e19351;
var statearr_19352_19364 = state_19334;
(statearr_19352_19364[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19334);

return cljs.core.cst$kw$recur;
} else {
throw e19351;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19365 = state_19334;
state_19334 = G__19365;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18760__auto__ = function(state_19334){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18760__auto____1.call(this,state_19334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18760__auto____0;
cljs$core$async$reduce_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18760__auto____1;
return cljs$core$async$reduce_$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto__))
})();
var state__18861__auto__ = (function (){var statearr_19353 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19353[(6)] = c__18859__auto__);

return statearr_19353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto__))
);

return c__18859__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto__,f__$1){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto__,f__$1){
return (function (state_19371){
var state_val_19372 = (state_19371[(1)]);
if((state_val_19372 === (1))){
var inst_19366 = cljs.core.async.reduce(f__$1,init,ch);
var state_19371__$1 = state_19371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19371__$1,(2),inst_19366);
} else {
if((state_val_19372 === (2))){
var inst_19368 = (state_19371[(2)]);
var inst_19369 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19368) : f__$1.call(null,inst_19368));
var state_19371__$1 = state_19371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19371__$1,inst_19369);
} else {
return null;
}
}
});})(c__18859__auto__,f__$1))
;
return ((function (switch__18759__auto__,c__18859__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__18760__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18760__auto____0 = (function (){
var statearr_19373 = [null,null,null,null,null,null,null];
(statearr_19373[(0)] = cljs$core$async$transduce_$_state_machine__18760__auto__);

(statearr_19373[(1)] = (1));

return statearr_19373;
});
var cljs$core$async$transduce_$_state_machine__18760__auto____1 = (function (state_19371){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19371);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19374){if((e19374 instanceof Object)){
var ex__18763__auto__ = e19374;
var statearr_19375_19377 = state_19371;
(statearr_19375_19377[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19371);

return cljs.core.cst$kw$recur;
} else {
throw e19374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19378 = state_19371;
state_19371 = G__19378;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18760__auto__ = function(state_19371){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18760__auto____1.call(this,state_19371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18760__auto____0;
cljs$core$async$transduce_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18760__auto____1;
return cljs$core$async$transduce_$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto__,f__$1))
})();
var state__18861__auto__ = (function (){var statearr_19376 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19376[(6)] = c__18859__auto__);

return statearr_19376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto__,f__$1))
);

return c__18859__auto__;
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
var G__19380 = arguments.length;
switch (G__19380) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto__){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto__){
return (function (state_19405){
var state_val_19406 = (state_19405[(1)]);
if((state_val_19406 === (7))){
var inst_19387 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19407_19428 = state_19405__$1;
(statearr_19407_19428[(2)] = inst_19387);

(statearr_19407_19428[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (1))){
var inst_19381 = cljs.core.seq(coll);
var inst_19382 = inst_19381;
var state_19405__$1 = (function (){var statearr_19408 = state_19405;
(statearr_19408[(7)] = inst_19382);

return statearr_19408;
})();
var statearr_19409_19429 = state_19405__$1;
(statearr_19409_19429[(2)] = null);

(statearr_19409_19429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (4))){
var inst_19382 = (state_19405[(7)]);
var inst_19385 = cljs.core.first(inst_19382);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19405__$1,(7),ch,inst_19385);
} else {
if((state_val_19406 === (13))){
var inst_19399 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19410_19430 = state_19405__$1;
(statearr_19410_19430[(2)] = inst_19399);

(statearr_19410_19430[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (6))){
var inst_19390 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
if(cljs.core.truth_(inst_19390)){
var statearr_19411_19431 = state_19405__$1;
(statearr_19411_19431[(1)] = (8));

} else {
var statearr_19412_19432 = state_19405__$1;
(statearr_19412_19432[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (3))){
var inst_19403 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19405__$1,inst_19403);
} else {
if((state_val_19406 === (12))){
var state_19405__$1 = state_19405;
var statearr_19413_19433 = state_19405__$1;
(statearr_19413_19433[(2)] = null);

(statearr_19413_19433[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (2))){
var inst_19382 = (state_19405[(7)]);
var state_19405__$1 = state_19405;
if(cljs.core.truth_(inst_19382)){
var statearr_19414_19434 = state_19405__$1;
(statearr_19414_19434[(1)] = (4));

} else {
var statearr_19415_19435 = state_19405__$1;
(statearr_19415_19435[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (11))){
var inst_19396 = cljs.core.async.close_BANG_(ch);
var state_19405__$1 = state_19405;
var statearr_19416_19436 = state_19405__$1;
(statearr_19416_19436[(2)] = inst_19396);

(statearr_19416_19436[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (9))){
var state_19405__$1 = state_19405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19417_19437 = state_19405__$1;
(statearr_19417_19437[(1)] = (11));

} else {
var statearr_19418_19438 = state_19405__$1;
(statearr_19418_19438[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (5))){
var inst_19382 = (state_19405[(7)]);
var state_19405__$1 = state_19405;
var statearr_19419_19439 = state_19405__$1;
(statearr_19419_19439[(2)] = inst_19382);

(statearr_19419_19439[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (10))){
var inst_19401 = (state_19405[(2)]);
var state_19405__$1 = state_19405;
var statearr_19420_19440 = state_19405__$1;
(statearr_19420_19440[(2)] = inst_19401);

(statearr_19420_19440[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19406 === (8))){
var inst_19382 = (state_19405[(7)]);
var inst_19392 = cljs.core.next(inst_19382);
var inst_19382__$1 = inst_19392;
var state_19405__$1 = (function (){var statearr_19421 = state_19405;
(statearr_19421[(7)] = inst_19382__$1);

return statearr_19421;
})();
var statearr_19422_19441 = state_19405__$1;
(statearr_19422_19441[(2)] = null);

(statearr_19422_19441[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto__))
;
return ((function (switch__18759__auto__,c__18859__auto__){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_19423 = [null,null,null,null,null,null,null,null];
(statearr_19423[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_19423[(1)] = (1));

return statearr_19423;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_19405){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19405);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19424){if((e19424 instanceof Object)){
var ex__18763__auto__ = e19424;
var statearr_19425_19442 = state_19405;
(statearr_19425_19442[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19405);

return cljs.core.cst$kw$recur;
} else {
throw e19424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19443 = state_19405;
state_19405 = G__19443;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_19405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_19405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto__))
})();
var state__18861__auto__ = (function (){var statearr_19426 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19426[(6)] = c__18859__auto__);

return statearr_19426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto__))
);

return c__18859__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__11604__auto__ = (((_ == null))?null:_);
var m__11605__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__11605__auto__.call(null,_));
} else {
var m__11605__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__11605__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__11605__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__11605__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__11605__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11605__auto__.call(null,m,ch));
} else {
var m__11605__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11605__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__11605__auto__.call(null,m));
} else {
var m__11605__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__11605__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19444 = (function (ch,cs,meta19445){
this.ch = ch;
this.cs = cs;
this.meta19445 = meta19445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19446,meta19445__$1){
var self__ = this;
var _19446__$1 = this;
return (new cljs.core.async.t_cljs$core$async19444(self__.ch,self__.cs,meta19445__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19446){
var self__ = this;
var _19446__$1 = this;
return self__.meta19445;
});})(cs))
;

cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19444.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19444.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta19445], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19444";

cljs.core.async.t_cljs$core$async19444.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async19444");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19444 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19444(ch__$1,cs__$1,meta19445){
return (new cljs.core.async.t_cljs$core$async19444(ch__$1,cs__$1,meta19445));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19444(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18859__auto___19666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___19666,cs,m,dchan,dctr,done){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___19666,cs,m,dchan,dctr,done){
return (function (state_19581){
var state_val_19582 = (state_19581[(1)]);
if((state_val_19582 === (7))){
var inst_19577 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19583_19667 = state_19581__$1;
(statearr_19583_19667[(2)] = inst_19577);

(statearr_19583_19667[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (20))){
var inst_19480 = (state_19581[(7)]);
var inst_19492 = cljs.core.first(inst_19480);
var inst_19493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19492,(0),null);
var inst_19494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19492,(1),null);
var state_19581__$1 = (function (){var statearr_19584 = state_19581;
(statearr_19584[(8)] = inst_19493);

return statearr_19584;
})();
if(cljs.core.truth_(inst_19494)){
var statearr_19585_19668 = state_19581__$1;
(statearr_19585_19668[(1)] = (22));

} else {
var statearr_19586_19669 = state_19581__$1;
(statearr_19586_19669[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (27))){
var inst_19449 = (state_19581[(9)]);
var inst_19522 = (state_19581[(10)]);
var inst_19529 = (state_19581[(11)]);
var inst_19524 = (state_19581[(12)]);
var inst_19529__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19522,inst_19524);
var inst_19530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19529__$1,inst_19449,done);
var state_19581__$1 = (function (){var statearr_19587 = state_19581;
(statearr_19587[(11)] = inst_19529__$1);

return statearr_19587;
})();
if(cljs.core.truth_(inst_19530)){
var statearr_19588_19670 = state_19581__$1;
(statearr_19588_19670[(1)] = (30));

} else {
var statearr_19589_19671 = state_19581__$1;
(statearr_19589_19671[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (1))){
var state_19581__$1 = state_19581;
var statearr_19590_19672 = state_19581__$1;
(statearr_19590_19672[(2)] = null);

(statearr_19590_19672[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (24))){
var inst_19480 = (state_19581[(7)]);
var inst_19499 = (state_19581[(2)]);
var inst_19500 = cljs.core.next(inst_19480);
var inst_19458 = inst_19500;
var inst_19459 = null;
var inst_19460 = (0);
var inst_19461 = (0);
var state_19581__$1 = (function (){var statearr_19591 = state_19581;
(statearr_19591[(13)] = inst_19459);

(statearr_19591[(14)] = inst_19499);

(statearr_19591[(15)] = inst_19458);

(statearr_19591[(16)] = inst_19461);

(statearr_19591[(17)] = inst_19460);

return statearr_19591;
})();
var statearr_19592_19673 = state_19581__$1;
(statearr_19592_19673[(2)] = null);

(statearr_19592_19673[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (39))){
var state_19581__$1 = state_19581;
var statearr_19596_19674 = state_19581__$1;
(statearr_19596_19674[(2)] = null);

(statearr_19596_19674[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (4))){
var inst_19449 = (state_19581[(9)]);
var inst_19449__$1 = (state_19581[(2)]);
var inst_19450 = (inst_19449__$1 == null);
var state_19581__$1 = (function (){var statearr_19597 = state_19581;
(statearr_19597[(9)] = inst_19449__$1);

return statearr_19597;
})();
if(cljs.core.truth_(inst_19450)){
var statearr_19598_19675 = state_19581__$1;
(statearr_19598_19675[(1)] = (5));

} else {
var statearr_19599_19676 = state_19581__$1;
(statearr_19599_19676[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (15))){
var inst_19459 = (state_19581[(13)]);
var inst_19458 = (state_19581[(15)]);
var inst_19461 = (state_19581[(16)]);
var inst_19460 = (state_19581[(17)]);
var inst_19476 = (state_19581[(2)]);
var inst_19477 = (inst_19461 + (1));
var tmp19593 = inst_19459;
var tmp19594 = inst_19458;
var tmp19595 = inst_19460;
var inst_19458__$1 = tmp19594;
var inst_19459__$1 = tmp19593;
var inst_19460__$1 = tmp19595;
var inst_19461__$1 = inst_19477;
var state_19581__$1 = (function (){var statearr_19600 = state_19581;
(statearr_19600[(18)] = inst_19476);

(statearr_19600[(13)] = inst_19459__$1);

(statearr_19600[(15)] = inst_19458__$1);

(statearr_19600[(16)] = inst_19461__$1);

(statearr_19600[(17)] = inst_19460__$1);

return statearr_19600;
})();
var statearr_19601_19677 = state_19581__$1;
(statearr_19601_19677[(2)] = null);

(statearr_19601_19677[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (21))){
var inst_19503 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19605_19678 = state_19581__$1;
(statearr_19605_19678[(2)] = inst_19503);

(statearr_19605_19678[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (31))){
var inst_19529 = (state_19581[(11)]);
var inst_19533 = done(null);
var inst_19534 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19529);
var state_19581__$1 = (function (){var statearr_19606 = state_19581;
(statearr_19606[(19)] = inst_19533);

return statearr_19606;
})();
var statearr_19607_19679 = state_19581__$1;
(statearr_19607_19679[(2)] = inst_19534);

(statearr_19607_19679[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (32))){
var inst_19523 = (state_19581[(20)]);
var inst_19522 = (state_19581[(10)]);
var inst_19524 = (state_19581[(12)]);
var inst_19521 = (state_19581[(21)]);
var inst_19536 = (state_19581[(2)]);
var inst_19537 = (inst_19524 + (1));
var tmp19602 = inst_19523;
var tmp19603 = inst_19522;
var tmp19604 = inst_19521;
var inst_19521__$1 = tmp19604;
var inst_19522__$1 = tmp19603;
var inst_19523__$1 = tmp19602;
var inst_19524__$1 = inst_19537;
var state_19581__$1 = (function (){var statearr_19608 = state_19581;
(statearr_19608[(20)] = inst_19523__$1);

(statearr_19608[(10)] = inst_19522__$1);

(statearr_19608[(12)] = inst_19524__$1);

(statearr_19608[(21)] = inst_19521__$1);

(statearr_19608[(22)] = inst_19536);

return statearr_19608;
})();
var statearr_19609_19680 = state_19581__$1;
(statearr_19609_19680[(2)] = null);

(statearr_19609_19680[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (40))){
var inst_19549 = (state_19581[(23)]);
var inst_19553 = done(null);
var inst_19554 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19549);
var state_19581__$1 = (function (){var statearr_19610 = state_19581;
(statearr_19610[(24)] = inst_19553);

return statearr_19610;
})();
var statearr_19611_19681 = state_19581__$1;
(statearr_19611_19681[(2)] = inst_19554);

(statearr_19611_19681[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (33))){
var inst_19540 = (state_19581[(25)]);
var inst_19542 = cljs.core.chunked_seq_QMARK_(inst_19540);
var state_19581__$1 = state_19581;
if(inst_19542){
var statearr_19612_19682 = state_19581__$1;
(statearr_19612_19682[(1)] = (36));

} else {
var statearr_19613_19683 = state_19581__$1;
(statearr_19613_19683[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (13))){
var inst_19470 = (state_19581[(26)]);
var inst_19473 = cljs.core.async.close_BANG_(inst_19470);
var state_19581__$1 = state_19581;
var statearr_19614_19684 = state_19581__$1;
(statearr_19614_19684[(2)] = inst_19473);

(statearr_19614_19684[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (22))){
var inst_19493 = (state_19581[(8)]);
var inst_19496 = cljs.core.async.close_BANG_(inst_19493);
var state_19581__$1 = state_19581;
var statearr_19615_19685 = state_19581__$1;
(statearr_19615_19685[(2)] = inst_19496);

(statearr_19615_19685[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (36))){
var inst_19540 = (state_19581[(25)]);
var inst_19544 = cljs.core.chunk_first(inst_19540);
var inst_19545 = cljs.core.chunk_rest(inst_19540);
var inst_19546 = cljs.core.count(inst_19544);
var inst_19521 = inst_19545;
var inst_19522 = inst_19544;
var inst_19523 = inst_19546;
var inst_19524 = (0);
var state_19581__$1 = (function (){var statearr_19616 = state_19581;
(statearr_19616[(20)] = inst_19523);

(statearr_19616[(10)] = inst_19522);

(statearr_19616[(12)] = inst_19524);

(statearr_19616[(21)] = inst_19521);

return statearr_19616;
})();
var statearr_19617_19686 = state_19581__$1;
(statearr_19617_19686[(2)] = null);

(statearr_19617_19686[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (41))){
var inst_19540 = (state_19581[(25)]);
var inst_19556 = (state_19581[(2)]);
var inst_19557 = cljs.core.next(inst_19540);
var inst_19521 = inst_19557;
var inst_19522 = null;
var inst_19523 = (0);
var inst_19524 = (0);
var state_19581__$1 = (function (){var statearr_19618 = state_19581;
(statearr_19618[(27)] = inst_19556);

(statearr_19618[(20)] = inst_19523);

(statearr_19618[(10)] = inst_19522);

(statearr_19618[(12)] = inst_19524);

(statearr_19618[(21)] = inst_19521);

return statearr_19618;
})();
var statearr_19619_19687 = state_19581__$1;
(statearr_19619_19687[(2)] = null);

(statearr_19619_19687[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (43))){
var state_19581__$1 = state_19581;
var statearr_19620_19688 = state_19581__$1;
(statearr_19620_19688[(2)] = null);

(statearr_19620_19688[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (29))){
var inst_19565 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19621_19689 = state_19581__$1;
(statearr_19621_19689[(2)] = inst_19565);

(statearr_19621_19689[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (44))){
var inst_19574 = (state_19581[(2)]);
var state_19581__$1 = (function (){var statearr_19622 = state_19581;
(statearr_19622[(28)] = inst_19574);

return statearr_19622;
})();
var statearr_19623_19690 = state_19581__$1;
(statearr_19623_19690[(2)] = null);

(statearr_19623_19690[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (6))){
var inst_19513 = (state_19581[(29)]);
var inst_19512 = cljs.core.deref(cs);
var inst_19513__$1 = cljs.core.keys(inst_19512);
var inst_19514 = cljs.core.count(inst_19513__$1);
var inst_19515 = cljs.core.reset_BANG_(dctr,inst_19514);
var inst_19520 = cljs.core.seq(inst_19513__$1);
var inst_19521 = inst_19520;
var inst_19522 = null;
var inst_19523 = (0);
var inst_19524 = (0);
var state_19581__$1 = (function (){var statearr_19624 = state_19581;
(statearr_19624[(20)] = inst_19523);

(statearr_19624[(10)] = inst_19522);

(statearr_19624[(12)] = inst_19524);

(statearr_19624[(29)] = inst_19513__$1);

(statearr_19624[(30)] = inst_19515);

(statearr_19624[(21)] = inst_19521);

return statearr_19624;
})();
var statearr_19625_19691 = state_19581__$1;
(statearr_19625_19691[(2)] = null);

(statearr_19625_19691[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (28))){
var inst_19540 = (state_19581[(25)]);
var inst_19521 = (state_19581[(21)]);
var inst_19540__$1 = cljs.core.seq(inst_19521);
var state_19581__$1 = (function (){var statearr_19626 = state_19581;
(statearr_19626[(25)] = inst_19540__$1);

return statearr_19626;
})();
if(inst_19540__$1){
var statearr_19627_19692 = state_19581__$1;
(statearr_19627_19692[(1)] = (33));

} else {
var statearr_19628_19693 = state_19581__$1;
(statearr_19628_19693[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (25))){
var inst_19523 = (state_19581[(20)]);
var inst_19524 = (state_19581[(12)]);
var inst_19526 = (inst_19524 < inst_19523);
var inst_19527 = inst_19526;
var state_19581__$1 = state_19581;
if(cljs.core.truth_(inst_19527)){
var statearr_19629_19694 = state_19581__$1;
(statearr_19629_19694[(1)] = (27));

} else {
var statearr_19630_19695 = state_19581__$1;
(statearr_19630_19695[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (34))){
var state_19581__$1 = state_19581;
var statearr_19631_19696 = state_19581__$1;
(statearr_19631_19696[(2)] = null);

(statearr_19631_19696[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (17))){
var state_19581__$1 = state_19581;
var statearr_19632_19697 = state_19581__$1;
(statearr_19632_19697[(2)] = null);

(statearr_19632_19697[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (3))){
var inst_19579 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19581__$1,inst_19579);
} else {
if((state_val_19582 === (12))){
var inst_19508 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19633_19698 = state_19581__$1;
(statearr_19633_19698[(2)] = inst_19508);

(statearr_19633_19698[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (2))){
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19581__$1,(4),ch);
} else {
if((state_val_19582 === (23))){
var state_19581__$1 = state_19581;
var statearr_19634_19699 = state_19581__$1;
(statearr_19634_19699[(2)] = null);

(statearr_19634_19699[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (35))){
var inst_19563 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19635_19700 = state_19581__$1;
(statearr_19635_19700[(2)] = inst_19563);

(statearr_19635_19700[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (19))){
var inst_19480 = (state_19581[(7)]);
var inst_19484 = cljs.core.chunk_first(inst_19480);
var inst_19485 = cljs.core.chunk_rest(inst_19480);
var inst_19486 = cljs.core.count(inst_19484);
var inst_19458 = inst_19485;
var inst_19459 = inst_19484;
var inst_19460 = inst_19486;
var inst_19461 = (0);
var state_19581__$1 = (function (){var statearr_19636 = state_19581;
(statearr_19636[(13)] = inst_19459);

(statearr_19636[(15)] = inst_19458);

(statearr_19636[(16)] = inst_19461);

(statearr_19636[(17)] = inst_19460);

return statearr_19636;
})();
var statearr_19637_19701 = state_19581__$1;
(statearr_19637_19701[(2)] = null);

(statearr_19637_19701[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (11))){
var inst_19480 = (state_19581[(7)]);
var inst_19458 = (state_19581[(15)]);
var inst_19480__$1 = cljs.core.seq(inst_19458);
var state_19581__$1 = (function (){var statearr_19638 = state_19581;
(statearr_19638[(7)] = inst_19480__$1);

return statearr_19638;
})();
if(inst_19480__$1){
var statearr_19639_19702 = state_19581__$1;
(statearr_19639_19702[(1)] = (16));

} else {
var statearr_19640_19703 = state_19581__$1;
(statearr_19640_19703[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (9))){
var inst_19510 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19641_19704 = state_19581__$1;
(statearr_19641_19704[(2)] = inst_19510);

(statearr_19641_19704[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (5))){
var inst_19456 = cljs.core.deref(cs);
var inst_19457 = cljs.core.seq(inst_19456);
var inst_19458 = inst_19457;
var inst_19459 = null;
var inst_19460 = (0);
var inst_19461 = (0);
var state_19581__$1 = (function (){var statearr_19642 = state_19581;
(statearr_19642[(13)] = inst_19459);

(statearr_19642[(15)] = inst_19458);

(statearr_19642[(16)] = inst_19461);

(statearr_19642[(17)] = inst_19460);

return statearr_19642;
})();
var statearr_19643_19705 = state_19581__$1;
(statearr_19643_19705[(2)] = null);

(statearr_19643_19705[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (14))){
var state_19581__$1 = state_19581;
var statearr_19644_19706 = state_19581__$1;
(statearr_19644_19706[(2)] = null);

(statearr_19644_19706[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (45))){
var inst_19571 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19645_19707 = state_19581__$1;
(statearr_19645_19707[(2)] = inst_19571);

(statearr_19645_19707[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (26))){
var inst_19513 = (state_19581[(29)]);
var inst_19567 = (state_19581[(2)]);
var inst_19568 = cljs.core.seq(inst_19513);
var state_19581__$1 = (function (){var statearr_19646 = state_19581;
(statearr_19646[(31)] = inst_19567);

return statearr_19646;
})();
if(inst_19568){
var statearr_19647_19708 = state_19581__$1;
(statearr_19647_19708[(1)] = (42));

} else {
var statearr_19648_19709 = state_19581__$1;
(statearr_19648_19709[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (16))){
var inst_19480 = (state_19581[(7)]);
var inst_19482 = cljs.core.chunked_seq_QMARK_(inst_19480);
var state_19581__$1 = state_19581;
if(inst_19482){
var statearr_19649_19710 = state_19581__$1;
(statearr_19649_19710[(1)] = (19));

} else {
var statearr_19650_19711 = state_19581__$1;
(statearr_19650_19711[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (38))){
var inst_19560 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19651_19712 = state_19581__$1;
(statearr_19651_19712[(2)] = inst_19560);

(statearr_19651_19712[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (30))){
var state_19581__$1 = state_19581;
var statearr_19652_19713 = state_19581__$1;
(statearr_19652_19713[(2)] = null);

(statearr_19652_19713[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (10))){
var inst_19459 = (state_19581[(13)]);
var inst_19461 = (state_19581[(16)]);
var inst_19469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19459,inst_19461);
var inst_19470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19469,(0),null);
var inst_19471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19469,(1),null);
var state_19581__$1 = (function (){var statearr_19653 = state_19581;
(statearr_19653[(26)] = inst_19470);

return statearr_19653;
})();
if(cljs.core.truth_(inst_19471)){
var statearr_19654_19714 = state_19581__$1;
(statearr_19654_19714[(1)] = (13));

} else {
var statearr_19655_19715 = state_19581__$1;
(statearr_19655_19715[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (18))){
var inst_19506 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19656_19716 = state_19581__$1;
(statearr_19656_19716[(2)] = inst_19506);

(statearr_19656_19716[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (42))){
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19581__$1,(45),dchan);
} else {
if((state_val_19582 === (37))){
var inst_19449 = (state_19581[(9)]);
var inst_19540 = (state_19581[(25)]);
var inst_19549 = (state_19581[(23)]);
var inst_19549__$1 = cljs.core.first(inst_19540);
var inst_19550 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19549__$1,inst_19449,done);
var state_19581__$1 = (function (){var statearr_19657 = state_19581;
(statearr_19657[(23)] = inst_19549__$1);

return statearr_19657;
})();
if(cljs.core.truth_(inst_19550)){
var statearr_19658_19717 = state_19581__$1;
(statearr_19658_19717[(1)] = (39));

} else {
var statearr_19659_19718 = state_19581__$1;
(statearr_19659_19718[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19582 === (8))){
var inst_19461 = (state_19581[(16)]);
var inst_19460 = (state_19581[(17)]);
var inst_19463 = (inst_19461 < inst_19460);
var inst_19464 = inst_19463;
var state_19581__$1 = state_19581;
if(cljs.core.truth_(inst_19464)){
var statearr_19660_19719 = state_19581__$1;
(statearr_19660_19719[(1)] = (10));

} else {
var statearr_19661_19720 = state_19581__$1;
(statearr_19661_19720[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___19666,cs,m,dchan,dctr,done))
;
return ((function (switch__18759__auto__,c__18859__auto___19666,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18760__auto__ = null;
var cljs$core$async$mult_$_state_machine__18760__auto____0 = (function (){
var statearr_19662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19662[(0)] = cljs$core$async$mult_$_state_machine__18760__auto__);

(statearr_19662[(1)] = (1));

return statearr_19662;
});
var cljs$core$async$mult_$_state_machine__18760__auto____1 = (function (state_19581){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19581);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19663){if((e19663 instanceof Object)){
var ex__18763__auto__ = e19663;
var statearr_19664_19721 = state_19581;
(statearr_19664_19721[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19581);

return cljs.core.cst$kw$recur;
} else {
throw e19663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19722 = state_19581;
state_19581 = G__19722;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18760__auto__ = function(state_19581){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18760__auto____1.call(this,state_19581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18760__auto____0;
cljs$core$async$mult_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18760__auto____1;
return cljs$core$async$mult_$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___19666,cs,m,dchan,dctr,done))
})();
var state__18861__auto__ = (function (){var statearr_19665 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19665[(6)] = c__18859__auto___19666);

return statearr_19665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___19666,cs,m,dchan,dctr,done))
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
var G__19724 = arguments.length;
switch (G__19724) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11605__auto__.call(null,m,ch));
} else {
var m__11605__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11605__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11605__auto__.call(null,m,ch));
} else {
var m__11605__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11605__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__11605__auto__.call(null,m));
} else {
var m__11605__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__11605__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__11605__auto__.call(null,m,state_map));
} else {
var m__11605__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__11605__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__11604__auto__ = (((m == null))?null:m);
var m__11605__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__11605__auto__.call(null,m,mode));
} else {
var m__11605__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__11605__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__12088__auto__ = [];
var len__12081__auto___19736 = arguments.length;
var i__12082__auto___19737 = (0);
while(true){
if((i__12082__auto___19737 < len__12081__auto___19736)){
args__12088__auto__.push((arguments[i__12082__auto___19737]));

var G__19738 = (i__12082__auto___19737 + (1));
i__12082__auto___19737 = G__19738;
continue;
} else {
}
break;
}

var argseq__12089__auto__ = ((((3) < args__12088__auto__.length))?(new cljs.core.IndexedSeq(args__12088__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12089__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19730){
var map__19731 = p__19730;
var map__19731__$1 = ((((!((map__19731 == null)))?((((map__19731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19731):map__19731);
var opts = map__19731__$1;
var statearr_19733_19739 = state;
(statearr_19733_19739[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__19731,map__19731__$1,opts){
return (function (val){
var statearr_19734_19740 = state;
(statearr_19734_19740[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19731,map__19731__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_19735_19741 = state;
(statearr_19735_19741[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19726){
var G__19727 = cljs.core.first(seq19726);
var seq19726__$1 = cljs.core.next(seq19726);
var G__19728 = cljs.core.first(seq19726__$1);
var seq19726__$2 = cljs.core.next(seq19726__$1);
var G__19729 = cljs.core.first(seq19726__$2);
var seq19726__$3 = cljs.core.next(seq19726__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19727,G__19728,G__19729,seq19726__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19742 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19743){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19743 = meta19743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19744,meta19743__$1){
var self__ = this;
var _19744__$1 = this;
return (new cljs.core.async.t_cljs$core$async19742(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19743__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19744){
var self__ = this;
var _19744__$1 = this;
return self__.meta19743;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta19743], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19742";

cljs.core.async.t_cljs$core$async19742.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async19742");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19742 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19742(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19743){
return (new cljs.core.async.t_cljs$core$async19742(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19743));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19742(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18859__auto___19906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19846){
var state_val_19847 = (state_19846[(1)]);
if((state_val_19847 === (7))){
var inst_19761 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19848_19907 = state_19846__$1;
(statearr_19848_19907[(2)] = inst_19761);

(statearr_19848_19907[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (20))){
var inst_19773 = (state_19846[(7)]);
var state_19846__$1 = state_19846;
var statearr_19849_19908 = state_19846__$1;
(statearr_19849_19908[(2)] = inst_19773);

(statearr_19849_19908[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (27))){
var state_19846__$1 = state_19846;
var statearr_19850_19909 = state_19846__$1;
(statearr_19850_19909[(2)] = null);

(statearr_19850_19909[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (1))){
var inst_19748 = (state_19846[(8)]);
var inst_19748__$1 = calc_state();
var inst_19750 = (inst_19748__$1 == null);
var inst_19751 = cljs.core.not(inst_19750);
var state_19846__$1 = (function (){var statearr_19851 = state_19846;
(statearr_19851[(8)] = inst_19748__$1);

return statearr_19851;
})();
if(inst_19751){
var statearr_19852_19910 = state_19846__$1;
(statearr_19852_19910[(1)] = (2));

} else {
var statearr_19853_19911 = state_19846__$1;
(statearr_19853_19911[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (24))){
var inst_19820 = (state_19846[(9)]);
var inst_19797 = (state_19846[(10)]);
var inst_19806 = (state_19846[(11)]);
var inst_19820__$1 = (inst_19797.cljs$core$IFn$_invoke$arity$1 ? inst_19797.cljs$core$IFn$_invoke$arity$1(inst_19806) : inst_19797.call(null,inst_19806));
var state_19846__$1 = (function (){var statearr_19854 = state_19846;
(statearr_19854[(9)] = inst_19820__$1);

return statearr_19854;
})();
if(cljs.core.truth_(inst_19820__$1)){
var statearr_19855_19912 = state_19846__$1;
(statearr_19855_19912[(1)] = (29));

} else {
var statearr_19856_19913 = state_19846__$1;
(statearr_19856_19913[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (4))){
var inst_19764 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19764)){
var statearr_19857_19914 = state_19846__$1;
(statearr_19857_19914[(1)] = (8));

} else {
var statearr_19858_19915 = state_19846__$1;
(statearr_19858_19915[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (15))){
var inst_19791 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19791)){
var statearr_19859_19916 = state_19846__$1;
(statearr_19859_19916[(1)] = (19));

} else {
var statearr_19860_19917 = state_19846__$1;
(statearr_19860_19917[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (21))){
var inst_19796 = (state_19846[(12)]);
var inst_19796__$1 = (state_19846[(2)]);
var inst_19797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19796__$1,cljs.core.cst$kw$solos);
var inst_19798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19796__$1,cljs.core.cst$kw$mutes);
var inst_19799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19796__$1,cljs.core.cst$kw$reads);
var state_19846__$1 = (function (){var statearr_19861 = state_19846;
(statearr_19861[(12)] = inst_19796__$1);

(statearr_19861[(10)] = inst_19797);

(statearr_19861[(13)] = inst_19798);

return statearr_19861;
})();
return cljs.core.async.ioc_alts_BANG_(state_19846__$1,(22),inst_19799);
} else {
if((state_val_19847 === (31))){
var inst_19828 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19828)){
var statearr_19862_19918 = state_19846__$1;
(statearr_19862_19918[(1)] = (32));

} else {
var statearr_19863_19919 = state_19846__$1;
(statearr_19863_19919[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (32))){
var inst_19805 = (state_19846[(14)]);
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19846__$1,(35),out,inst_19805);
} else {
if((state_val_19847 === (33))){
var inst_19796 = (state_19846[(12)]);
var inst_19773 = inst_19796;
var state_19846__$1 = (function (){var statearr_19864 = state_19846;
(statearr_19864[(7)] = inst_19773);

return statearr_19864;
})();
var statearr_19865_19920 = state_19846__$1;
(statearr_19865_19920[(2)] = null);

(statearr_19865_19920[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (13))){
var inst_19773 = (state_19846[(7)]);
var inst_19780 = inst_19773.cljs$lang$protocol_mask$partition0$;
var inst_19781 = (inst_19780 & (64));
var inst_19782 = inst_19773.cljs$core$ISeq$;
var inst_19783 = (cljs.core.PROTOCOL_SENTINEL === inst_19782);
var inst_19784 = (inst_19781) || (inst_19783);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19784)){
var statearr_19866_19921 = state_19846__$1;
(statearr_19866_19921[(1)] = (16));

} else {
var statearr_19867_19922 = state_19846__$1;
(statearr_19867_19922[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (22))){
var inst_19805 = (state_19846[(14)]);
var inst_19806 = (state_19846[(11)]);
var inst_19804 = (state_19846[(2)]);
var inst_19805__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19804,(0),null);
var inst_19806__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19804,(1),null);
var inst_19807 = (inst_19805__$1 == null);
var inst_19808 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19806__$1,change);
var inst_19809 = (inst_19807) || (inst_19808);
var state_19846__$1 = (function (){var statearr_19868 = state_19846;
(statearr_19868[(14)] = inst_19805__$1);

(statearr_19868[(11)] = inst_19806__$1);

return statearr_19868;
})();
if(cljs.core.truth_(inst_19809)){
var statearr_19869_19923 = state_19846__$1;
(statearr_19869_19923[(1)] = (23));

} else {
var statearr_19870_19924 = state_19846__$1;
(statearr_19870_19924[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (36))){
var inst_19796 = (state_19846[(12)]);
var inst_19773 = inst_19796;
var state_19846__$1 = (function (){var statearr_19871 = state_19846;
(statearr_19871[(7)] = inst_19773);

return statearr_19871;
})();
var statearr_19872_19925 = state_19846__$1;
(statearr_19872_19925[(2)] = null);

(statearr_19872_19925[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (29))){
var inst_19820 = (state_19846[(9)]);
var state_19846__$1 = state_19846;
var statearr_19873_19926 = state_19846__$1;
(statearr_19873_19926[(2)] = inst_19820);

(statearr_19873_19926[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (6))){
var state_19846__$1 = state_19846;
var statearr_19874_19927 = state_19846__$1;
(statearr_19874_19927[(2)] = false);

(statearr_19874_19927[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (28))){
var inst_19816 = (state_19846[(2)]);
var inst_19817 = calc_state();
var inst_19773 = inst_19817;
var state_19846__$1 = (function (){var statearr_19875 = state_19846;
(statearr_19875[(15)] = inst_19816);

(statearr_19875[(7)] = inst_19773);

return statearr_19875;
})();
var statearr_19876_19928 = state_19846__$1;
(statearr_19876_19928[(2)] = null);

(statearr_19876_19928[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (25))){
var inst_19842 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19877_19929 = state_19846__$1;
(statearr_19877_19929[(2)] = inst_19842);

(statearr_19877_19929[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (34))){
var inst_19840 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19878_19930 = state_19846__$1;
(statearr_19878_19930[(2)] = inst_19840);

(statearr_19878_19930[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (17))){
var state_19846__$1 = state_19846;
var statearr_19879_19931 = state_19846__$1;
(statearr_19879_19931[(2)] = false);

(statearr_19879_19931[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (3))){
var state_19846__$1 = state_19846;
var statearr_19880_19932 = state_19846__$1;
(statearr_19880_19932[(2)] = false);

(statearr_19880_19932[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (12))){
var inst_19844 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19846__$1,inst_19844);
} else {
if((state_val_19847 === (2))){
var inst_19748 = (state_19846[(8)]);
var inst_19753 = inst_19748.cljs$lang$protocol_mask$partition0$;
var inst_19754 = (inst_19753 & (64));
var inst_19755 = inst_19748.cljs$core$ISeq$;
var inst_19756 = (cljs.core.PROTOCOL_SENTINEL === inst_19755);
var inst_19757 = (inst_19754) || (inst_19756);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19757)){
var statearr_19881_19933 = state_19846__$1;
(statearr_19881_19933[(1)] = (5));

} else {
var statearr_19882_19934 = state_19846__$1;
(statearr_19882_19934[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (23))){
var inst_19805 = (state_19846[(14)]);
var inst_19811 = (inst_19805 == null);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19811)){
var statearr_19883_19935 = state_19846__$1;
(statearr_19883_19935[(1)] = (26));

} else {
var statearr_19884_19936 = state_19846__$1;
(statearr_19884_19936[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (35))){
var inst_19831 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
if(cljs.core.truth_(inst_19831)){
var statearr_19885_19937 = state_19846__$1;
(statearr_19885_19937[(1)] = (36));

} else {
var statearr_19886_19938 = state_19846__$1;
(statearr_19886_19938[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (19))){
var inst_19773 = (state_19846[(7)]);
var inst_19793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19773);
var state_19846__$1 = state_19846;
var statearr_19887_19939 = state_19846__$1;
(statearr_19887_19939[(2)] = inst_19793);

(statearr_19887_19939[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (11))){
var inst_19773 = (state_19846[(7)]);
var inst_19777 = (inst_19773 == null);
var inst_19778 = cljs.core.not(inst_19777);
var state_19846__$1 = state_19846;
if(inst_19778){
var statearr_19888_19940 = state_19846__$1;
(statearr_19888_19940[(1)] = (13));

} else {
var statearr_19889_19941 = state_19846__$1;
(statearr_19889_19941[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (9))){
var inst_19748 = (state_19846[(8)]);
var state_19846__$1 = state_19846;
var statearr_19890_19942 = state_19846__$1;
(statearr_19890_19942[(2)] = inst_19748);

(statearr_19890_19942[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (5))){
var state_19846__$1 = state_19846;
var statearr_19891_19943 = state_19846__$1;
(statearr_19891_19943[(2)] = true);

(statearr_19891_19943[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (14))){
var state_19846__$1 = state_19846;
var statearr_19892_19944 = state_19846__$1;
(statearr_19892_19944[(2)] = false);

(statearr_19892_19944[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (26))){
var inst_19806 = (state_19846[(11)]);
var inst_19813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19806);
var state_19846__$1 = state_19846;
var statearr_19893_19945 = state_19846__$1;
(statearr_19893_19945[(2)] = inst_19813);

(statearr_19893_19945[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (16))){
var state_19846__$1 = state_19846;
var statearr_19894_19946 = state_19846__$1;
(statearr_19894_19946[(2)] = true);

(statearr_19894_19946[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (38))){
var inst_19836 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19895_19947 = state_19846__$1;
(statearr_19895_19947[(2)] = inst_19836);

(statearr_19895_19947[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (30))){
var inst_19797 = (state_19846[(10)]);
var inst_19798 = (state_19846[(13)]);
var inst_19806 = (state_19846[(11)]);
var inst_19823 = cljs.core.empty_QMARK_(inst_19797);
var inst_19824 = (inst_19798.cljs$core$IFn$_invoke$arity$1 ? inst_19798.cljs$core$IFn$_invoke$arity$1(inst_19806) : inst_19798.call(null,inst_19806));
var inst_19825 = cljs.core.not(inst_19824);
var inst_19826 = (inst_19823) && (inst_19825);
var state_19846__$1 = state_19846;
var statearr_19896_19948 = state_19846__$1;
(statearr_19896_19948[(2)] = inst_19826);

(statearr_19896_19948[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (10))){
var inst_19748 = (state_19846[(8)]);
var inst_19769 = (state_19846[(2)]);
var inst_19770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19769,cljs.core.cst$kw$solos);
var inst_19771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19769,cljs.core.cst$kw$mutes);
var inst_19772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19769,cljs.core.cst$kw$reads);
var inst_19773 = inst_19748;
var state_19846__$1 = (function (){var statearr_19897 = state_19846;
(statearr_19897[(16)] = inst_19771);

(statearr_19897[(17)] = inst_19772);

(statearr_19897[(7)] = inst_19773);

(statearr_19897[(18)] = inst_19770);

return statearr_19897;
})();
var statearr_19898_19949 = state_19846__$1;
(statearr_19898_19949[(2)] = null);

(statearr_19898_19949[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (18))){
var inst_19788 = (state_19846[(2)]);
var state_19846__$1 = state_19846;
var statearr_19899_19950 = state_19846__$1;
(statearr_19899_19950[(2)] = inst_19788);

(statearr_19899_19950[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (37))){
var state_19846__$1 = state_19846;
var statearr_19900_19951 = state_19846__$1;
(statearr_19900_19951[(2)] = null);

(statearr_19900_19951[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19847 === (8))){
var inst_19748 = (state_19846[(8)]);
var inst_19766 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19748);
var state_19846__$1 = state_19846;
var statearr_19901_19952 = state_19846__$1;
(statearr_19901_19952[(2)] = inst_19766);

(statearr_19901_19952[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18759__auto__,c__18859__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18760__auto__ = null;
var cljs$core$async$mix_$_state_machine__18760__auto____0 = (function (){
var statearr_19902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19902[(0)] = cljs$core$async$mix_$_state_machine__18760__auto__);

(statearr_19902[(1)] = (1));

return statearr_19902;
});
var cljs$core$async$mix_$_state_machine__18760__auto____1 = (function (state_19846){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_19846);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e19903){if((e19903 instanceof Object)){
var ex__18763__auto__ = e19903;
var statearr_19904_19953 = state_19846;
(statearr_19904_19953[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19846);

return cljs.core.cst$kw$recur;
} else {
throw e19903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__19954 = state_19846;
state_19846 = G__19954;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18760__auto__ = function(state_19846){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18760__auto____1.call(this,state_19846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18760__auto____0;
cljs$core$async$mix_$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18760__auto____1;
return cljs$core$async$mix_$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18861__auto__ = (function (){var statearr_19905 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_19905[(6)] = c__18859__auto___19906);

return statearr_19905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___19906,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__11604__auto__ = (((p == null))?null:p);
var m__11605__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$4 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__11605__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__11605__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__11605__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__11604__auto__ = (((p == null))?null:p);
var m__11605__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__11605__auto__.call(null,p,v,ch));
} else {
var m__11605__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__11605__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19956 = arguments.length;
switch (G__19956) {
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
var x__11604__auto__ = (((p == null))?null:p);
var m__11605__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__11605__auto__.call(null,p));
} else {
var m__11605__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__11605__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__11604__auto__ = (((p == null))?null:p);
var m__11605__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__11605__auto__.call(null,p,v));
} else {
var m__11605__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__11605__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__19960 = arguments.length;
switch (G__19960) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__10921__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__10921__auto__,mults){
return (function (p1__19958_SHARP_){
if(cljs.core.truth_((p1__19958_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19958_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19958_SHARP_.call(null,topic)))){
return p1__19958_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19958_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__10921__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19961 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19962){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19962 = meta19962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19963,meta19962__$1){
var self__ = this;
var _19963__$1 = this;
return (new cljs.core.async.t_cljs$core$async19961(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19962__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19963){
var self__ = this;
var _19963__$1 = this;
return self__.meta19962;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19962], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19961";

cljs.core.async.t_cljs$core$async19961.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async19961");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19961 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19961(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19962){
return (new cljs.core.async.t_cljs$core$async19961(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19962));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19961(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18859__auto___20081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20081,mults,ensure_mult,p){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20081,mults,ensure_mult,p){
return (function (state_20035){
var state_val_20036 = (state_20035[(1)]);
if((state_val_20036 === (7))){
var inst_20031 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20037_20082 = state_20035__$1;
(statearr_20037_20082[(2)] = inst_20031);

(statearr_20037_20082[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (20))){
var state_20035__$1 = state_20035;
var statearr_20038_20083 = state_20035__$1;
(statearr_20038_20083[(2)] = null);

(statearr_20038_20083[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (1))){
var state_20035__$1 = state_20035;
var statearr_20039_20084 = state_20035__$1;
(statearr_20039_20084[(2)] = null);

(statearr_20039_20084[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (24))){
var inst_20014 = (state_20035[(7)]);
var inst_20023 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20014);
var state_20035__$1 = state_20035;
var statearr_20040_20085 = state_20035__$1;
(statearr_20040_20085[(2)] = inst_20023);

(statearr_20040_20085[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (4))){
var inst_19966 = (state_20035[(8)]);
var inst_19966__$1 = (state_20035[(2)]);
var inst_19967 = (inst_19966__$1 == null);
var state_20035__$1 = (function (){var statearr_20041 = state_20035;
(statearr_20041[(8)] = inst_19966__$1);

return statearr_20041;
})();
if(cljs.core.truth_(inst_19967)){
var statearr_20042_20086 = state_20035__$1;
(statearr_20042_20086[(1)] = (5));

} else {
var statearr_20043_20087 = state_20035__$1;
(statearr_20043_20087[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (15))){
var inst_20008 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20044_20088 = state_20035__$1;
(statearr_20044_20088[(2)] = inst_20008);

(statearr_20044_20088[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (21))){
var inst_20028 = (state_20035[(2)]);
var state_20035__$1 = (function (){var statearr_20045 = state_20035;
(statearr_20045[(9)] = inst_20028);

return statearr_20045;
})();
var statearr_20046_20089 = state_20035__$1;
(statearr_20046_20089[(2)] = null);

(statearr_20046_20089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (13))){
var inst_19990 = (state_20035[(10)]);
var inst_19992 = cljs.core.chunked_seq_QMARK_(inst_19990);
var state_20035__$1 = state_20035;
if(inst_19992){
var statearr_20047_20090 = state_20035__$1;
(statearr_20047_20090[(1)] = (16));

} else {
var statearr_20048_20091 = state_20035__$1;
(statearr_20048_20091[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (22))){
var inst_20020 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
if(cljs.core.truth_(inst_20020)){
var statearr_20049_20092 = state_20035__$1;
(statearr_20049_20092[(1)] = (23));

} else {
var statearr_20050_20093 = state_20035__$1;
(statearr_20050_20093[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (6))){
var inst_19966 = (state_20035[(8)]);
var inst_20016 = (state_20035[(11)]);
var inst_20014 = (state_20035[(7)]);
var inst_20014__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19966) : topic_fn.call(null,inst_19966));
var inst_20015 = cljs.core.deref(mults);
var inst_20016__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20015,inst_20014__$1);
var state_20035__$1 = (function (){var statearr_20051 = state_20035;
(statearr_20051[(11)] = inst_20016__$1);

(statearr_20051[(7)] = inst_20014__$1);

return statearr_20051;
})();
if(cljs.core.truth_(inst_20016__$1)){
var statearr_20052_20094 = state_20035__$1;
(statearr_20052_20094[(1)] = (19));

} else {
var statearr_20053_20095 = state_20035__$1;
(statearr_20053_20095[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (25))){
var inst_20025 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20054_20096 = state_20035__$1;
(statearr_20054_20096[(2)] = inst_20025);

(statearr_20054_20096[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (17))){
var inst_19990 = (state_20035[(10)]);
var inst_19999 = cljs.core.first(inst_19990);
var inst_20000 = cljs.core.async.muxch_STAR_(inst_19999);
var inst_20001 = cljs.core.async.close_BANG_(inst_20000);
var inst_20002 = cljs.core.next(inst_19990);
var inst_19976 = inst_20002;
var inst_19977 = null;
var inst_19978 = (0);
var inst_19979 = (0);
var state_20035__$1 = (function (){var statearr_20055 = state_20035;
(statearr_20055[(12)] = inst_19979);

(statearr_20055[(13)] = inst_19978);

(statearr_20055[(14)] = inst_20001);

(statearr_20055[(15)] = inst_19976);

(statearr_20055[(16)] = inst_19977);

return statearr_20055;
})();
var statearr_20056_20097 = state_20035__$1;
(statearr_20056_20097[(2)] = null);

(statearr_20056_20097[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (3))){
var inst_20033 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20035__$1,inst_20033);
} else {
if((state_val_20036 === (12))){
var inst_20010 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20057_20098 = state_20035__$1;
(statearr_20057_20098[(2)] = inst_20010);

(statearr_20057_20098[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (2))){
var state_20035__$1 = state_20035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20035__$1,(4),ch);
} else {
if((state_val_20036 === (23))){
var state_20035__$1 = state_20035;
var statearr_20058_20099 = state_20035__$1;
(statearr_20058_20099[(2)] = null);

(statearr_20058_20099[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (19))){
var inst_19966 = (state_20035[(8)]);
var inst_20016 = (state_20035[(11)]);
var inst_20018 = cljs.core.async.muxch_STAR_(inst_20016);
var state_20035__$1 = state_20035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20035__$1,(22),inst_20018,inst_19966);
} else {
if((state_val_20036 === (11))){
var inst_19990 = (state_20035[(10)]);
var inst_19976 = (state_20035[(15)]);
var inst_19990__$1 = cljs.core.seq(inst_19976);
var state_20035__$1 = (function (){var statearr_20059 = state_20035;
(statearr_20059[(10)] = inst_19990__$1);

return statearr_20059;
})();
if(inst_19990__$1){
var statearr_20060_20100 = state_20035__$1;
(statearr_20060_20100[(1)] = (13));

} else {
var statearr_20061_20101 = state_20035__$1;
(statearr_20061_20101[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (9))){
var inst_20012 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20062_20102 = state_20035__$1;
(statearr_20062_20102[(2)] = inst_20012);

(statearr_20062_20102[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (5))){
var inst_19973 = cljs.core.deref(mults);
var inst_19974 = cljs.core.vals(inst_19973);
var inst_19975 = cljs.core.seq(inst_19974);
var inst_19976 = inst_19975;
var inst_19977 = null;
var inst_19978 = (0);
var inst_19979 = (0);
var state_20035__$1 = (function (){var statearr_20063 = state_20035;
(statearr_20063[(12)] = inst_19979);

(statearr_20063[(13)] = inst_19978);

(statearr_20063[(15)] = inst_19976);

(statearr_20063[(16)] = inst_19977);

return statearr_20063;
})();
var statearr_20064_20103 = state_20035__$1;
(statearr_20064_20103[(2)] = null);

(statearr_20064_20103[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (14))){
var state_20035__$1 = state_20035;
var statearr_20068_20104 = state_20035__$1;
(statearr_20068_20104[(2)] = null);

(statearr_20068_20104[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (16))){
var inst_19990 = (state_20035[(10)]);
var inst_19994 = cljs.core.chunk_first(inst_19990);
var inst_19995 = cljs.core.chunk_rest(inst_19990);
var inst_19996 = cljs.core.count(inst_19994);
var inst_19976 = inst_19995;
var inst_19977 = inst_19994;
var inst_19978 = inst_19996;
var inst_19979 = (0);
var state_20035__$1 = (function (){var statearr_20069 = state_20035;
(statearr_20069[(12)] = inst_19979);

(statearr_20069[(13)] = inst_19978);

(statearr_20069[(15)] = inst_19976);

(statearr_20069[(16)] = inst_19977);

return statearr_20069;
})();
var statearr_20070_20105 = state_20035__$1;
(statearr_20070_20105[(2)] = null);

(statearr_20070_20105[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (10))){
var inst_19979 = (state_20035[(12)]);
var inst_19978 = (state_20035[(13)]);
var inst_19976 = (state_20035[(15)]);
var inst_19977 = (state_20035[(16)]);
var inst_19984 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19977,inst_19979);
var inst_19985 = cljs.core.async.muxch_STAR_(inst_19984);
var inst_19986 = cljs.core.async.close_BANG_(inst_19985);
var inst_19987 = (inst_19979 + (1));
var tmp20065 = inst_19978;
var tmp20066 = inst_19976;
var tmp20067 = inst_19977;
var inst_19976__$1 = tmp20066;
var inst_19977__$1 = tmp20067;
var inst_19978__$1 = tmp20065;
var inst_19979__$1 = inst_19987;
var state_20035__$1 = (function (){var statearr_20071 = state_20035;
(statearr_20071[(12)] = inst_19979__$1);

(statearr_20071[(13)] = inst_19978__$1);

(statearr_20071[(17)] = inst_19986);

(statearr_20071[(15)] = inst_19976__$1);

(statearr_20071[(16)] = inst_19977__$1);

return statearr_20071;
})();
var statearr_20072_20106 = state_20035__$1;
(statearr_20072_20106[(2)] = null);

(statearr_20072_20106[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (18))){
var inst_20005 = (state_20035[(2)]);
var state_20035__$1 = state_20035;
var statearr_20073_20107 = state_20035__$1;
(statearr_20073_20107[(2)] = inst_20005);

(statearr_20073_20107[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20036 === (8))){
var inst_19979 = (state_20035[(12)]);
var inst_19978 = (state_20035[(13)]);
var inst_19981 = (inst_19979 < inst_19978);
var inst_19982 = inst_19981;
var state_20035__$1 = state_20035;
if(cljs.core.truth_(inst_19982)){
var statearr_20074_20108 = state_20035__$1;
(statearr_20074_20108[(1)] = (10));

} else {
var statearr_20075_20109 = state_20035__$1;
(statearr_20075_20109[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___20081,mults,ensure_mult,p))
;
return ((function (switch__18759__auto__,c__18859__auto___20081,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20076[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20076[(1)] = (1));

return statearr_20076;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20035){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20035);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20077){if((e20077 instanceof Object)){
var ex__18763__auto__ = e20077;
var statearr_20078_20110 = state_20035;
(statearr_20078_20110[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20035);

return cljs.core.cst$kw$recur;
} else {
throw e20077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20111 = state_20035;
state_20035 = G__20111;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20081,mults,ensure_mult,p))
})();
var state__18861__auto__ = (function (){var statearr_20079 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20079[(6)] = c__18859__auto___20081);

return statearr_20079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20081,mults,ensure_mult,p))
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
var G__20113 = arguments.length;
switch (G__20113) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20116 = arguments.length;
switch (G__20116) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__20119 = arguments.length;
switch (G__20119) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__18859__auto___20186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20158){
var state_val_20159 = (state_20158[(1)]);
if((state_val_20159 === (7))){
var state_20158__$1 = state_20158;
var statearr_20160_20187 = state_20158__$1;
(statearr_20160_20187[(2)] = null);

(statearr_20160_20187[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (1))){
var state_20158__$1 = state_20158;
var statearr_20161_20188 = state_20158__$1;
(statearr_20161_20188[(2)] = null);

(statearr_20161_20188[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (4))){
var inst_20122 = (state_20158[(7)]);
var inst_20124 = (inst_20122 < cnt);
var state_20158__$1 = state_20158;
if(cljs.core.truth_(inst_20124)){
var statearr_20162_20189 = state_20158__$1;
(statearr_20162_20189[(1)] = (6));

} else {
var statearr_20163_20190 = state_20158__$1;
(statearr_20163_20190[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (15))){
var inst_20154 = (state_20158[(2)]);
var state_20158__$1 = state_20158;
var statearr_20164_20191 = state_20158__$1;
(statearr_20164_20191[(2)] = inst_20154);

(statearr_20164_20191[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (13))){
var inst_20147 = cljs.core.async.close_BANG_(out);
var state_20158__$1 = state_20158;
var statearr_20165_20192 = state_20158__$1;
(statearr_20165_20192[(2)] = inst_20147);

(statearr_20165_20192[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (6))){
var state_20158__$1 = state_20158;
var statearr_20166_20193 = state_20158__$1;
(statearr_20166_20193[(2)] = null);

(statearr_20166_20193[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (3))){
var inst_20156 = (state_20158[(2)]);
var state_20158__$1 = state_20158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20158__$1,inst_20156);
} else {
if((state_val_20159 === (12))){
var inst_20144 = (state_20158[(8)]);
var inst_20144__$1 = (state_20158[(2)]);
var inst_20145 = cljs.core.some(cljs.core.nil_QMARK_,inst_20144__$1);
var state_20158__$1 = (function (){var statearr_20167 = state_20158;
(statearr_20167[(8)] = inst_20144__$1);

return statearr_20167;
})();
if(cljs.core.truth_(inst_20145)){
var statearr_20168_20194 = state_20158__$1;
(statearr_20168_20194[(1)] = (13));

} else {
var statearr_20169_20195 = state_20158__$1;
(statearr_20169_20195[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (2))){
var inst_20121 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20122 = (0);
var state_20158__$1 = (function (){var statearr_20170 = state_20158;
(statearr_20170[(7)] = inst_20122);

(statearr_20170[(9)] = inst_20121);

return statearr_20170;
})();
var statearr_20171_20196 = state_20158__$1;
(statearr_20171_20196[(2)] = null);

(statearr_20171_20196[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (11))){
var inst_20122 = (state_20158[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20158,(10),Object,null,(9));
var inst_20131 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20122) : chs__$1.call(null,inst_20122));
var inst_20132 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20122) : done.call(null,inst_20122));
var inst_20133 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20131,inst_20132);
var state_20158__$1 = state_20158;
var statearr_20172_20197 = state_20158__$1;
(statearr_20172_20197[(2)] = inst_20133);


cljs.core.async.impl.ioc_helpers.process_exception(state_20158__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (9))){
var inst_20122 = (state_20158[(7)]);
var inst_20135 = (state_20158[(2)]);
var inst_20136 = (inst_20122 + (1));
var inst_20122__$1 = inst_20136;
var state_20158__$1 = (function (){var statearr_20173 = state_20158;
(statearr_20173[(7)] = inst_20122__$1);

(statearr_20173[(10)] = inst_20135);

return statearr_20173;
})();
var statearr_20174_20198 = state_20158__$1;
(statearr_20174_20198[(2)] = null);

(statearr_20174_20198[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (5))){
var inst_20142 = (state_20158[(2)]);
var state_20158__$1 = (function (){var statearr_20175 = state_20158;
(statearr_20175[(11)] = inst_20142);

return statearr_20175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20158__$1,(12),dchan);
} else {
if((state_val_20159 === (14))){
var inst_20144 = (state_20158[(8)]);
var inst_20149 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20144);
var state_20158__$1 = state_20158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20158__$1,(16),out,inst_20149);
} else {
if((state_val_20159 === (16))){
var inst_20151 = (state_20158[(2)]);
var state_20158__$1 = (function (){var statearr_20176 = state_20158;
(statearr_20176[(12)] = inst_20151);

return statearr_20176;
})();
var statearr_20177_20199 = state_20158__$1;
(statearr_20177_20199[(2)] = null);

(statearr_20177_20199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (10))){
var inst_20126 = (state_20158[(2)]);
var inst_20127 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20158__$1 = (function (){var statearr_20178 = state_20158;
(statearr_20178[(13)] = inst_20126);

return statearr_20178;
})();
var statearr_20179_20200 = state_20158__$1;
(statearr_20179_20200[(2)] = inst_20127);


cljs.core.async.impl.ioc_helpers.process_exception(state_20158__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20159 === (8))){
var inst_20140 = (state_20158[(2)]);
var state_20158__$1 = state_20158;
var statearr_20180_20201 = state_20158__$1;
(statearr_20180_20201[(2)] = inst_20140);

(statearr_20180_20201[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___20186,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18759__auto__,c__18859__auto___20186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20181[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20181[(1)] = (1));

return statearr_20181;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20158){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20158);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20182){if((e20182 instanceof Object)){
var ex__18763__auto__ = e20182;
var statearr_20183_20202 = state_20158;
(statearr_20183_20202[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20158);

return cljs.core.cst$kw$recur;
} else {
throw e20182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20203 = state_20158;
state_20158 = G__20203;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20186,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18861__auto__ = (function (){var statearr_20184 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20184[(6)] = c__18859__auto___20186);

return statearr_20184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20186,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__20206 = arguments.length;
switch (G__20206) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18859__auto___20260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20260,out){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20260,out){
return (function (state_20238){
var state_val_20239 = (state_20238[(1)]);
if((state_val_20239 === (7))){
var inst_20218 = (state_20238[(7)]);
var inst_20217 = (state_20238[(8)]);
var inst_20217__$1 = (state_20238[(2)]);
var inst_20218__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20217__$1,(0),null);
var inst_20219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20217__$1,(1),null);
var inst_20220 = (inst_20218__$1 == null);
var state_20238__$1 = (function (){var statearr_20240 = state_20238;
(statearr_20240[(7)] = inst_20218__$1);

(statearr_20240[(9)] = inst_20219);

(statearr_20240[(8)] = inst_20217__$1);

return statearr_20240;
})();
if(cljs.core.truth_(inst_20220)){
var statearr_20241_20261 = state_20238__$1;
(statearr_20241_20261[(1)] = (8));

} else {
var statearr_20242_20262 = state_20238__$1;
(statearr_20242_20262[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20239 === (1))){
var inst_20207 = cljs.core.vec(chs);
var inst_20208 = inst_20207;
var state_20238__$1 = (function (){var statearr_20243 = state_20238;
(statearr_20243[(10)] = inst_20208);

return statearr_20243;
})();
var statearr_20244_20263 = state_20238__$1;
(statearr_20244_20263[(2)] = null);

(statearr_20244_20263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20239 === (4))){
var inst_20208 = (state_20238[(10)]);
var state_20238__$1 = state_20238;
return cljs.core.async.ioc_alts_BANG_(state_20238__$1,(7),inst_20208);
} else {
if((state_val_20239 === (6))){
var inst_20234 = (state_20238[(2)]);
var state_20238__$1 = state_20238;
var statearr_20245_20264 = state_20238__$1;
(statearr_20245_20264[(2)] = inst_20234);

(statearr_20245_20264[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20239 === (3))){
var inst_20236 = (state_20238[(2)]);
var state_20238__$1 = state_20238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20238__$1,inst_20236);
} else {
if((state_val_20239 === (2))){
var inst_20208 = (state_20238[(10)]);
var inst_20210 = cljs.core.count(inst_20208);
var inst_20211 = (inst_20210 > (0));
var state_20238__$1 = state_20238;
if(cljs.core.truth_(inst_20211)){
var statearr_20247_20265 = state_20238__$1;
(statearr_20247_20265[(1)] = (4));

} else {
var statearr_20248_20266 = state_20238__$1;
(statearr_20248_20266[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20239 === (11))){
var inst_20208 = (state_20238[(10)]);
var inst_20227 = (state_20238[(2)]);
var tmp20246 = inst_20208;
var inst_20208__$1 = tmp20246;
var state_20238__$1 = (function (){var statearr_20249 = state_20238;
(statearr_20249[(10)] = inst_20208__$1);

(statearr_20249[(11)] = inst_20227);

return statearr_20249;
})();
var statearr_20250_20267 = state_20238__$1;
(statearr_20250_20267[(2)] = null);

(statearr_20250_20267[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20239 === (9))){
var inst_20218 = (state_20238[(7)]);
var state_20238__$1 = state_20238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20238__$1,(11),out,inst_20218);
} else {
if((state_val_20239 === (5))){
var inst_20232 = cljs.core.async.close_BANG_(out);
var state_20238__$1 = state_20238;
var statearr_20251_20268 = state_20238__$1;
(statearr_20251_20268[(2)] = inst_20232);

(statearr_20251_20268[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20239 === (10))){
var inst_20230 = (state_20238[(2)]);
var state_20238__$1 = state_20238;
var statearr_20252_20269 = state_20238__$1;
(statearr_20252_20269[(2)] = inst_20230);

(statearr_20252_20269[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20239 === (8))){
var inst_20218 = (state_20238[(7)]);
var inst_20208 = (state_20238[(10)]);
var inst_20219 = (state_20238[(9)]);
var inst_20217 = (state_20238[(8)]);
var inst_20222 = (function (){var cs = inst_20208;
var vec__20213 = inst_20217;
var v = inst_20218;
var c = inst_20219;
return ((function (cs,vec__20213,v,c,inst_20218,inst_20208,inst_20219,inst_20217,state_val_20239,c__18859__auto___20260,out){
return (function (p1__20204_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20204_SHARP_);
});
;})(cs,vec__20213,v,c,inst_20218,inst_20208,inst_20219,inst_20217,state_val_20239,c__18859__auto___20260,out))
})();
var inst_20223 = cljs.core.filterv(inst_20222,inst_20208);
var inst_20208__$1 = inst_20223;
var state_20238__$1 = (function (){var statearr_20253 = state_20238;
(statearr_20253[(10)] = inst_20208__$1);

return statearr_20253;
})();
var statearr_20254_20270 = state_20238__$1;
(statearr_20254_20270[(2)] = null);

(statearr_20254_20270[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___20260,out))
;
return ((function (switch__18759__auto__,c__18859__auto___20260,out){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20255 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20255[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20255[(1)] = (1));

return statearr_20255;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20238){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20238);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20256){if((e20256 instanceof Object)){
var ex__18763__auto__ = e20256;
var statearr_20257_20271 = state_20238;
(statearr_20257_20271[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20238);

return cljs.core.cst$kw$recur;
} else {
throw e20256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20272 = state_20238;
state_20238 = G__20272;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20260,out))
})();
var state__18861__auto__ = (function (){var statearr_20258 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20258[(6)] = c__18859__auto___20260);

return statearr_20258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20260,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20274 = arguments.length;
switch (G__20274) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18859__auto___20319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20319,out){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20319,out){
return (function (state_20298){
var state_val_20299 = (state_20298[(1)]);
if((state_val_20299 === (7))){
var inst_20280 = (state_20298[(7)]);
var inst_20280__$1 = (state_20298[(2)]);
var inst_20281 = (inst_20280__$1 == null);
var inst_20282 = cljs.core.not(inst_20281);
var state_20298__$1 = (function (){var statearr_20300 = state_20298;
(statearr_20300[(7)] = inst_20280__$1);

return statearr_20300;
})();
if(inst_20282){
var statearr_20301_20320 = state_20298__$1;
(statearr_20301_20320[(1)] = (8));

} else {
var statearr_20302_20321 = state_20298__$1;
(statearr_20302_20321[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (1))){
var inst_20275 = (0);
var state_20298__$1 = (function (){var statearr_20303 = state_20298;
(statearr_20303[(8)] = inst_20275);

return statearr_20303;
})();
var statearr_20304_20322 = state_20298__$1;
(statearr_20304_20322[(2)] = null);

(statearr_20304_20322[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (4))){
var state_20298__$1 = state_20298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20298__$1,(7),ch);
} else {
if((state_val_20299 === (6))){
var inst_20293 = (state_20298[(2)]);
var state_20298__$1 = state_20298;
var statearr_20305_20323 = state_20298__$1;
(statearr_20305_20323[(2)] = inst_20293);

(statearr_20305_20323[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (3))){
var inst_20295 = (state_20298[(2)]);
var inst_20296 = cljs.core.async.close_BANG_(out);
var state_20298__$1 = (function (){var statearr_20306 = state_20298;
(statearr_20306[(9)] = inst_20295);

return statearr_20306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20298__$1,inst_20296);
} else {
if((state_val_20299 === (2))){
var inst_20275 = (state_20298[(8)]);
var inst_20277 = (inst_20275 < n);
var state_20298__$1 = state_20298;
if(cljs.core.truth_(inst_20277)){
var statearr_20307_20324 = state_20298__$1;
(statearr_20307_20324[(1)] = (4));

} else {
var statearr_20308_20325 = state_20298__$1;
(statearr_20308_20325[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (11))){
var inst_20275 = (state_20298[(8)]);
var inst_20285 = (state_20298[(2)]);
var inst_20286 = (inst_20275 + (1));
var inst_20275__$1 = inst_20286;
var state_20298__$1 = (function (){var statearr_20309 = state_20298;
(statearr_20309[(10)] = inst_20285);

(statearr_20309[(8)] = inst_20275__$1);

return statearr_20309;
})();
var statearr_20310_20326 = state_20298__$1;
(statearr_20310_20326[(2)] = null);

(statearr_20310_20326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (9))){
var state_20298__$1 = state_20298;
var statearr_20311_20327 = state_20298__$1;
(statearr_20311_20327[(2)] = null);

(statearr_20311_20327[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (5))){
var state_20298__$1 = state_20298;
var statearr_20312_20328 = state_20298__$1;
(statearr_20312_20328[(2)] = null);

(statearr_20312_20328[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (10))){
var inst_20290 = (state_20298[(2)]);
var state_20298__$1 = state_20298;
var statearr_20313_20329 = state_20298__$1;
(statearr_20313_20329[(2)] = inst_20290);

(statearr_20313_20329[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20299 === (8))){
var inst_20280 = (state_20298[(7)]);
var state_20298__$1 = state_20298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20298__$1,(11),out,inst_20280);
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
});})(c__18859__auto___20319,out))
;
return ((function (switch__18759__auto__,c__18859__auto___20319,out){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20314[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20314[(1)] = (1));

return statearr_20314;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20298){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20298);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20315){if((e20315 instanceof Object)){
var ex__18763__auto__ = e20315;
var statearr_20316_20330 = state_20298;
(statearr_20316_20330[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20298);

return cljs.core.cst$kw$recur;
} else {
throw e20315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20331 = state_20298;
state_20298 = G__20331;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20319,out))
})();
var state__18861__auto__ = (function (){var statearr_20317 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20317[(6)] = c__18859__auto___20319);

return statearr_20317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20319,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20333 = (function (f,ch,meta20334){
this.f = f;
this.ch = ch;
this.meta20334 = meta20334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20335,meta20334__$1){
var self__ = this;
var _20335__$1 = this;
return (new cljs.core.async.t_cljs$core$async20333(self__.f,self__.ch,meta20334__$1));
});

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20335){
var self__ = this;
var _20335__$1 = this;
return self__.meta20334;
});

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20336 = (function (f,ch,meta20334,_,fn1,meta20337){
this.f = f;
this.ch = ch;
this.meta20334 = meta20334;
this._ = _;
this.fn1 = fn1;
this.meta20337 = meta20337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20338,meta20337__$1){
var self__ = this;
var _20338__$1 = this;
return (new cljs.core.async.t_cljs$core$async20336(self__.f,self__.ch,self__.meta20334,self__._,self__.fn1,meta20337__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20338){
var self__ = this;
var _20338__$1 = this;
return self__.meta20337;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20332_SHARP_){
var G__20339 = (((p1__20332_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20332_SHARP_) : self__.f.call(null,p1__20332_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20339) : f1.call(null,G__20339));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20336.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20334,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async20333], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta20337], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20336";

cljs.core.async.t_cljs$core$async20336.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async20336");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20336 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20336(f__$1,ch__$1,meta20334__$1,___$2,fn1__$1,meta20337){
return (new cljs.core.async.t_cljs$core$async20336(f__$1,ch__$1,meta20334__$1,___$2,fn1__$1,meta20337));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20336(self__.f,self__.ch,self__.meta20334,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10909__auto__ = ret;
if(cljs.core.truth_(and__10909__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__10909__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20340 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20340) : self__.f.call(null,G__20340));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20334], null);
});

cljs.core.async.t_cljs$core$async20333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20333";

cljs.core.async.t_cljs$core$async20333.cljs$lang$ctorPrWriter = (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async20333");
});

cljs.core.async.__GT_t_cljs$core$async20333 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20333(f__$1,ch__$1,meta20334){
return (new cljs.core.async.t_cljs$core$async20333(f__$1,ch__$1,meta20334));
});

}

return (new cljs.core.async.t_cljs$core$async20333(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20341 = (function (f,ch,meta20342){
this.f = f;
this.ch = ch;
this.meta20342 = meta20342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20343,meta20342__$1){
var self__ = this;
var _20343__$1 = this;
return (new cljs.core.async.t_cljs$core$async20341(self__.f,self__.ch,meta20342__$1));
});

cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20343){
var self__ = this;
var _20343__$1 = this;
return self__.meta20342;
});

cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async20341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20342], null);
});

cljs.core.async.t_cljs$core$async20341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20341";

cljs.core.async.t_cljs$core$async20341.cljs$lang$ctorPrWriter = (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async20341");
});

cljs.core.async.__GT_t_cljs$core$async20341 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20341(f__$1,ch__$1,meta20342){
return (new cljs.core.async.t_cljs$core$async20341(f__$1,ch__$1,meta20342));
});

}

return (new cljs.core.async.t_cljs$core$async20341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20344 = (function (p,ch,meta20345){
this.p = p;
this.ch = ch;
this.meta20345 = meta20345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20346,meta20345__$1){
var self__ = this;
var _20346__$1 = this;
return (new cljs.core.async.t_cljs$core$async20344(self__.p,self__.ch,meta20345__$1));
});

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20346){
var self__ = this;
var _20346__$1 = this;
return self__.meta20345;
});

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20345], null);
});

cljs.core.async.t_cljs$core$async20344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20344";

cljs.core.async.t_cljs$core$async20344.cljs$lang$ctorPrWriter = (function (this__11546__auto__,writer__11547__auto__,opt__11548__auto__){
return cljs.core._write(writer__11547__auto__,"cljs.core.async/t_cljs$core$async20344");
});

cljs.core.async.__GT_t_cljs$core$async20344 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20344(p__$1,ch__$1,meta20345){
return (new cljs.core.async.t_cljs$core$async20344(p__$1,ch__$1,meta20345));
});

}

return (new cljs.core.async.t_cljs$core$async20344(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20348 = arguments.length;
switch (G__20348) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18859__auto___20388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20388,out){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20388,out){
return (function (state_20369){
var state_val_20370 = (state_20369[(1)]);
if((state_val_20370 === (7))){
var inst_20365 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
var statearr_20371_20389 = state_20369__$1;
(statearr_20371_20389[(2)] = inst_20365);

(statearr_20371_20389[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (1))){
var state_20369__$1 = state_20369;
var statearr_20372_20390 = state_20369__$1;
(statearr_20372_20390[(2)] = null);

(statearr_20372_20390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (4))){
var inst_20351 = (state_20369[(7)]);
var inst_20351__$1 = (state_20369[(2)]);
var inst_20352 = (inst_20351__$1 == null);
var state_20369__$1 = (function (){var statearr_20373 = state_20369;
(statearr_20373[(7)] = inst_20351__$1);

return statearr_20373;
})();
if(cljs.core.truth_(inst_20352)){
var statearr_20374_20391 = state_20369__$1;
(statearr_20374_20391[(1)] = (5));

} else {
var statearr_20375_20392 = state_20369__$1;
(statearr_20375_20392[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (6))){
var inst_20351 = (state_20369[(7)]);
var inst_20356 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20351) : p.call(null,inst_20351));
var state_20369__$1 = state_20369;
if(cljs.core.truth_(inst_20356)){
var statearr_20376_20393 = state_20369__$1;
(statearr_20376_20393[(1)] = (8));

} else {
var statearr_20377_20394 = state_20369__$1;
(statearr_20377_20394[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (3))){
var inst_20367 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20369__$1,inst_20367);
} else {
if((state_val_20370 === (2))){
var state_20369__$1 = state_20369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20369__$1,(4),ch);
} else {
if((state_val_20370 === (11))){
var inst_20359 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
var statearr_20378_20395 = state_20369__$1;
(statearr_20378_20395[(2)] = inst_20359);

(statearr_20378_20395[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (9))){
var state_20369__$1 = state_20369;
var statearr_20379_20396 = state_20369__$1;
(statearr_20379_20396[(2)] = null);

(statearr_20379_20396[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (5))){
var inst_20354 = cljs.core.async.close_BANG_(out);
var state_20369__$1 = state_20369;
var statearr_20380_20397 = state_20369__$1;
(statearr_20380_20397[(2)] = inst_20354);

(statearr_20380_20397[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (10))){
var inst_20362 = (state_20369[(2)]);
var state_20369__$1 = (function (){var statearr_20381 = state_20369;
(statearr_20381[(8)] = inst_20362);

return statearr_20381;
})();
var statearr_20382_20398 = state_20369__$1;
(statearr_20382_20398[(2)] = null);

(statearr_20382_20398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20370 === (8))){
var inst_20351 = (state_20369[(7)]);
var state_20369__$1 = state_20369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20369__$1,(11),out,inst_20351);
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
});})(c__18859__auto___20388,out))
;
return ((function (switch__18759__auto__,c__18859__auto___20388,out){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20383 = [null,null,null,null,null,null,null,null,null];
(statearr_20383[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20383[(1)] = (1));

return statearr_20383;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20369){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20369);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20384){if((e20384 instanceof Object)){
var ex__18763__auto__ = e20384;
var statearr_20385_20399 = state_20369;
(statearr_20385_20399[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20369);

return cljs.core.cst$kw$recur;
} else {
throw e20384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20400 = state_20369;
state_20369 = G__20400;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20388,out))
})();
var state__18861__auto__ = (function (){var statearr_20386 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20386[(6)] = c__18859__auto___20388);

return statearr_20386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20388,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20402 = arguments.length;
switch (G__20402) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto__){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto__){
return (function (state_20465){
var state_val_20466 = (state_20465[(1)]);
if((state_val_20466 === (7))){
var inst_20461 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
var statearr_20467_20505 = state_20465__$1;
(statearr_20467_20505[(2)] = inst_20461);

(statearr_20467_20505[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (20))){
var inst_20431 = (state_20465[(7)]);
var inst_20442 = (state_20465[(2)]);
var inst_20443 = cljs.core.next(inst_20431);
var inst_20417 = inst_20443;
var inst_20418 = null;
var inst_20419 = (0);
var inst_20420 = (0);
var state_20465__$1 = (function (){var statearr_20468 = state_20465;
(statearr_20468[(8)] = inst_20420);

(statearr_20468[(9)] = inst_20417);

(statearr_20468[(10)] = inst_20418);

(statearr_20468[(11)] = inst_20419);

(statearr_20468[(12)] = inst_20442);

return statearr_20468;
})();
var statearr_20469_20506 = state_20465__$1;
(statearr_20469_20506[(2)] = null);

(statearr_20469_20506[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (1))){
var state_20465__$1 = state_20465;
var statearr_20470_20507 = state_20465__$1;
(statearr_20470_20507[(2)] = null);

(statearr_20470_20507[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (4))){
var inst_20406 = (state_20465[(13)]);
var inst_20406__$1 = (state_20465[(2)]);
var inst_20407 = (inst_20406__$1 == null);
var state_20465__$1 = (function (){var statearr_20471 = state_20465;
(statearr_20471[(13)] = inst_20406__$1);

return statearr_20471;
})();
if(cljs.core.truth_(inst_20407)){
var statearr_20472_20508 = state_20465__$1;
(statearr_20472_20508[(1)] = (5));

} else {
var statearr_20473_20509 = state_20465__$1;
(statearr_20473_20509[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (15))){
var state_20465__$1 = state_20465;
var statearr_20477_20510 = state_20465__$1;
(statearr_20477_20510[(2)] = null);

(statearr_20477_20510[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (21))){
var state_20465__$1 = state_20465;
var statearr_20478_20511 = state_20465__$1;
(statearr_20478_20511[(2)] = null);

(statearr_20478_20511[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (13))){
var inst_20420 = (state_20465[(8)]);
var inst_20417 = (state_20465[(9)]);
var inst_20418 = (state_20465[(10)]);
var inst_20419 = (state_20465[(11)]);
var inst_20427 = (state_20465[(2)]);
var inst_20428 = (inst_20420 + (1));
var tmp20474 = inst_20417;
var tmp20475 = inst_20418;
var tmp20476 = inst_20419;
var inst_20417__$1 = tmp20474;
var inst_20418__$1 = tmp20475;
var inst_20419__$1 = tmp20476;
var inst_20420__$1 = inst_20428;
var state_20465__$1 = (function (){var statearr_20479 = state_20465;
(statearr_20479[(8)] = inst_20420__$1);

(statearr_20479[(9)] = inst_20417__$1);

(statearr_20479[(10)] = inst_20418__$1);

(statearr_20479[(14)] = inst_20427);

(statearr_20479[(11)] = inst_20419__$1);

return statearr_20479;
})();
var statearr_20480_20512 = state_20465__$1;
(statearr_20480_20512[(2)] = null);

(statearr_20480_20512[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (22))){
var state_20465__$1 = state_20465;
var statearr_20481_20513 = state_20465__$1;
(statearr_20481_20513[(2)] = null);

(statearr_20481_20513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (6))){
var inst_20406 = (state_20465[(13)]);
var inst_20415 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20406) : f.call(null,inst_20406));
var inst_20416 = cljs.core.seq(inst_20415);
var inst_20417 = inst_20416;
var inst_20418 = null;
var inst_20419 = (0);
var inst_20420 = (0);
var state_20465__$1 = (function (){var statearr_20482 = state_20465;
(statearr_20482[(8)] = inst_20420);

(statearr_20482[(9)] = inst_20417);

(statearr_20482[(10)] = inst_20418);

(statearr_20482[(11)] = inst_20419);

return statearr_20482;
})();
var statearr_20483_20514 = state_20465__$1;
(statearr_20483_20514[(2)] = null);

(statearr_20483_20514[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (17))){
var inst_20431 = (state_20465[(7)]);
var inst_20435 = cljs.core.chunk_first(inst_20431);
var inst_20436 = cljs.core.chunk_rest(inst_20431);
var inst_20437 = cljs.core.count(inst_20435);
var inst_20417 = inst_20436;
var inst_20418 = inst_20435;
var inst_20419 = inst_20437;
var inst_20420 = (0);
var state_20465__$1 = (function (){var statearr_20484 = state_20465;
(statearr_20484[(8)] = inst_20420);

(statearr_20484[(9)] = inst_20417);

(statearr_20484[(10)] = inst_20418);

(statearr_20484[(11)] = inst_20419);

return statearr_20484;
})();
var statearr_20485_20515 = state_20465__$1;
(statearr_20485_20515[(2)] = null);

(statearr_20485_20515[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (3))){
var inst_20463 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20465__$1,inst_20463);
} else {
if((state_val_20466 === (12))){
var inst_20451 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
var statearr_20486_20516 = state_20465__$1;
(statearr_20486_20516[(2)] = inst_20451);

(statearr_20486_20516[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (2))){
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20465__$1,(4),in$);
} else {
if((state_val_20466 === (23))){
var inst_20459 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
var statearr_20487_20517 = state_20465__$1;
(statearr_20487_20517[(2)] = inst_20459);

(statearr_20487_20517[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (19))){
var inst_20446 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
var statearr_20488_20518 = state_20465__$1;
(statearr_20488_20518[(2)] = inst_20446);

(statearr_20488_20518[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (11))){
var inst_20417 = (state_20465[(9)]);
var inst_20431 = (state_20465[(7)]);
var inst_20431__$1 = cljs.core.seq(inst_20417);
var state_20465__$1 = (function (){var statearr_20489 = state_20465;
(statearr_20489[(7)] = inst_20431__$1);

return statearr_20489;
})();
if(inst_20431__$1){
var statearr_20490_20519 = state_20465__$1;
(statearr_20490_20519[(1)] = (14));

} else {
var statearr_20491_20520 = state_20465__$1;
(statearr_20491_20520[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (9))){
var inst_20453 = (state_20465[(2)]);
var inst_20454 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20465__$1 = (function (){var statearr_20492 = state_20465;
(statearr_20492[(15)] = inst_20453);

return statearr_20492;
})();
if(cljs.core.truth_(inst_20454)){
var statearr_20493_20521 = state_20465__$1;
(statearr_20493_20521[(1)] = (21));

} else {
var statearr_20494_20522 = state_20465__$1;
(statearr_20494_20522[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (5))){
var inst_20409 = cljs.core.async.close_BANG_(out);
var state_20465__$1 = state_20465;
var statearr_20495_20523 = state_20465__$1;
(statearr_20495_20523[(2)] = inst_20409);

(statearr_20495_20523[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (14))){
var inst_20431 = (state_20465[(7)]);
var inst_20433 = cljs.core.chunked_seq_QMARK_(inst_20431);
var state_20465__$1 = state_20465;
if(inst_20433){
var statearr_20496_20524 = state_20465__$1;
(statearr_20496_20524[(1)] = (17));

} else {
var statearr_20497_20525 = state_20465__$1;
(statearr_20497_20525[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (16))){
var inst_20449 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
var statearr_20498_20526 = state_20465__$1;
(statearr_20498_20526[(2)] = inst_20449);

(statearr_20498_20526[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20466 === (10))){
var inst_20420 = (state_20465[(8)]);
var inst_20418 = (state_20465[(10)]);
var inst_20425 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20418,inst_20420);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20465__$1,(13),out,inst_20425);
} else {
if((state_val_20466 === (18))){
var inst_20431 = (state_20465[(7)]);
var inst_20440 = cljs.core.first(inst_20431);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20465__$1,(20),out,inst_20440);
} else {
if((state_val_20466 === (8))){
var inst_20420 = (state_20465[(8)]);
var inst_20419 = (state_20465[(11)]);
var inst_20422 = (inst_20420 < inst_20419);
var inst_20423 = inst_20422;
var state_20465__$1 = state_20465;
if(cljs.core.truth_(inst_20423)){
var statearr_20499_20527 = state_20465__$1;
(statearr_20499_20527[(1)] = (10));

} else {
var statearr_20500_20528 = state_20465__$1;
(statearr_20500_20528[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__18859__auto__))
;
return ((function (switch__18759__auto__,c__18859__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18760__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18760__auto____0 = (function (){
var statearr_20501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20501[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18760__auto__);

(statearr_20501[(1)] = (1));

return statearr_20501;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18760__auto____1 = (function (state_20465){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20465);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20502){if((e20502 instanceof Object)){
var ex__18763__auto__ = e20502;
var statearr_20503_20529 = state_20465;
(statearr_20503_20529[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20465);

return cljs.core.cst$kw$recur;
} else {
throw e20502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20530 = state_20465;
state_20465 = G__20530;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18760__auto__ = function(state_20465){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18760__auto____1.call(this,state_20465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18760__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18760__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto__))
})();
var state__18861__auto__ = (function (){var statearr_20504 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20504[(6)] = c__18859__auto__);

return statearr_20504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto__))
);

return c__18859__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20532 = arguments.length;
switch (G__20532) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20535 = arguments.length;
switch (G__20535) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20538 = arguments.length;
switch (G__20538) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18859__auto___20585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20585,out){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20585,out){
return (function (state_20562){
var state_val_20563 = (state_20562[(1)]);
if((state_val_20563 === (7))){
var inst_20557 = (state_20562[(2)]);
var state_20562__$1 = state_20562;
var statearr_20564_20586 = state_20562__$1;
(statearr_20564_20586[(2)] = inst_20557);

(statearr_20564_20586[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20563 === (1))){
var inst_20539 = null;
var state_20562__$1 = (function (){var statearr_20565 = state_20562;
(statearr_20565[(7)] = inst_20539);

return statearr_20565;
})();
var statearr_20566_20587 = state_20562__$1;
(statearr_20566_20587[(2)] = null);

(statearr_20566_20587[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20563 === (4))){
var inst_20542 = (state_20562[(8)]);
var inst_20542__$1 = (state_20562[(2)]);
var inst_20543 = (inst_20542__$1 == null);
var inst_20544 = cljs.core.not(inst_20543);
var state_20562__$1 = (function (){var statearr_20567 = state_20562;
(statearr_20567[(8)] = inst_20542__$1);

return statearr_20567;
})();
if(inst_20544){
var statearr_20568_20588 = state_20562__$1;
(statearr_20568_20588[(1)] = (5));

} else {
var statearr_20569_20589 = state_20562__$1;
(statearr_20569_20589[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20563 === (6))){
var state_20562__$1 = state_20562;
var statearr_20570_20590 = state_20562__$1;
(statearr_20570_20590[(2)] = null);

(statearr_20570_20590[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20563 === (3))){
var inst_20559 = (state_20562[(2)]);
var inst_20560 = cljs.core.async.close_BANG_(out);
var state_20562__$1 = (function (){var statearr_20571 = state_20562;
(statearr_20571[(9)] = inst_20559);

return statearr_20571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20562__$1,inst_20560);
} else {
if((state_val_20563 === (2))){
var state_20562__$1 = state_20562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20562__$1,(4),ch);
} else {
if((state_val_20563 === (11))){
var inst_20542 = (state_20562[(8)]);
var inst_20551 = (state_20562[(2)]);
var inst_20539 = inst_20542;
var state_20562__$1 = (function (){var statearr_20572 = state_20562;
(statearr_20572[(7)] = inst_20539);

(statearr_20572[(10)] = inst_20551);

return statearr_20572;
})();
var statearr_20573_20591 = state_20562__$1;
(statearr_20573_20591[(2)] = null);

(statearr_20573_20591[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20563 === (9))){
var inst_20542 = (state_20562[(8)]);
var state_20562__$1 = state_20562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20562__$1,(11),out,inst_20542);
} else {
if((state_val_20563 === (5))){
var inst_20542 = (state_20562[(8)]);
var inst_20539 = (state_20562[(7)]);
var inst_20546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20542,inst_20539);
var state_20562__$1 = state_20562;
if(inst_20546){
var statearr_20575_20592 = state_20562__$1;
(statearr_20575_20592[(1)] = (8));

} else {
var statearr_20576_20593 = state_20562__$1;
(statearr_20576_20593[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20563 === (10))){
var inst_20554 = (state_20562[(2)]);
var state_20562__$1 = state_20562;
var statearr_20577_20594 = state_20562__$1;
(statearr_20577_20594[(2)] = inst_20554);

(statearr_20577_20594[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20563 === (8))){
var inst_20539 = (state_20562[(7)]);
var tmp20574 = inst_20539;
var inst_20539__$1 = tmp20574;
var state_20562__$1 = (function (){var statearr_20578 = state_20562;
(statearr_20578[(7)] = inst_20539__$1);

return statearr_20578;
})();
var statearr_20579_20595 = state_20562__$1;
(statearr_20579_20595[(2)] = null);

(statearr_20579_20595[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___20585,out))
;
return ((function (switch__18759__auto__,c__18859__auto___20585,out){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20580[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20580[(1)] = (1));

return statearr_20580;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20562){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20562);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20581){if((e20581 instanceof Object)){
var ex__18763__auto__ = e20581;
var statearr_20582_20596 = state_20562;
(statearr_20582_20596[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20562);

return cljs.core.cst$kw$recur;
} else {
throw e20581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20597 = state_20562;
state_20562 = G__20597;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20585,out))
})();
var state__18861__auto__ = (function (){var statearr_20583 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20583[(6)] = c__18859__auto___20585);

return statearr_20583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20585,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20599 = arguments.length;
switch (G__20599) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18859__auto___20665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20665,out){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20665,out){
return (function (state_20637){
var state_val_20638 = (state_20637[(1)]);
if((state_val_20638 === (7))){
var inst_20633 = (state_20637[(2)]);
var state_20637__$1 = state_20637;
var statearr_20639_20666 = state_20637__$1;
(statearr_20639_20666[(2)] = inst_20633);

(statearr_20639_20666[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (1))){
var inst_20600 = (new Array(n));
var inst_20601 = inst_20600;
var inst_20602 = (0);
var state_20637__$1 = (function (){var statearr_20640 = state_20637;
(statearr_20640[(7)] = inst_20601);

(statearr_20640[(8)] = inst_20602);

return statearr_20640;
})();
var statearr_20641_20667 = state_20637__$1;
(statearr_20641_20667[(2)] = null);

(statearr_20641_20667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (4))){
var inst_20605 = (state_20637[(9)]);
var inst_20605__$1 = (state_20637[(2)]);
var inst_20606 = (inst_20605__$1 == null);
var inst_20607 = cljs.core.not(inst_20606);
var state_20637__$1 = (function (){var statearr_20642 = state_20637;
(statearr_20642[(9)] = inst_20605__$1);

return statearr_20642;
})();
if(inst_20607){
var statearr_20643_20668 = state_20637__$1;
(statearr_20643_20668[(1)] = (5));

} else {
var statearr_20644_20669 = state_20637__$1;
(statearr_20644_20669[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (15))){
var inst_20627 = (state_20637[(2)]);
var state_20637__$1 = state_20637;
var statearr_20645_20670 = state_20637__$1;
(statearr_20645_20670[(2)] = inst_20627);

(statearr_20645_20670[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (13))){
var state_20637__$1 = state_20637;
var statearr_20646_20671 = state_20637__$1;
(statearr_20646_20671[(2)] = null);

(statearr_20646_20671[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (6))){
var inst_20602 = (state_20637[(8)]);
var inst_20623 = (inst_20602 > (0));
var state_20637__$1 = state_20637;
if(cljs.core.truth_(inst_20623)){
var statearr_20647_20672 = state_20637__$1;
(statearr_20647_20672[(1)] = (12));

} else {
var statearr_20648_20673 = state_20637__$1;
(statearr_20648_20673[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (3))){
var inst_20635 = (state_20637[(2)]);
var state_20637__$1 = state_20637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20637__$1,inst_20635);
} else {
if((state_val_20638 === (12))){
var inst_20601 = (state_20637[(7)]);
var inst_20625 = cljs.core.vec(inst_20601);
var state_20637__$1 = state_20637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20637__$1,(15),out,inst_20625);
} else {
if((state_val_20638 === (2))){
var state_20637__$1 = state_20637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20637__$1,(4),ch);
} else {
if((state_val_20638 === (11))){
var inst_20617 = (state_20637[(2)]);
var inst_20618 = (new Array(n));
var inst_20601 = inst_20618;
var inst_20602 = (0);
var state_20637__$1 = (function (){var statearr_20649 = state_20637;
(statearr_20649[(10)] = inst_20617);

(statearr_20649[(7)] = inst_20601);

(statearr_20649[(8)] = inst_20602);

return statearr_20649;
})();
var statearr_20650_20674 = state_20637__$1;
(statearr_20650_20674[(2)] = null);

(statearr_20650_20674[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (9))){
var inst_20601 = (state_20637[(7)]);
var inst_20615 = cljs.core.vec(inst_20601);
var state_20637__$1 = state_20637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20637__$1,(11),out,inst_20615);
} else {
if((state_val_20638 === (5))){
var inst_20605 = (state_20637[(9)]);
var inst_20610 = (state_20637[(11)]);
var inst_20601 = (state_20637[(7)]);
var inst_20602 = (state_20637[(8)]);
var inst_20609 = (inst_20601[inst_20602] = inst_20605);
var inst_20610__$1 = (inst_20602 + (1));
var inst_20611 = (inst_20610__$1 < n);
var state_20637__$1 = (function (){var statearr_20651 = state_20637;
(statearr_20651[(11)] = inst_20610__$1);

(statearr_20651[(12)] = inst_20609);

return statearr_20651;
})();
if(cljs.core.truth_(inst_20611)){
var statearr_20652_20675 = state_20637__$1;
(statearr_20652_20675[(1)] = (8));

} else {
var statearr_20653_20676 = state_20637__$1;
(statearr_20653_20676[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (14))){
var inst_20630 = (state_20637[(2)]);
var inst_20631 = cljs.core.async.close_BANG_(out);
var state_20637__$1 = (function (){var statearr_20655 = state_20637;
(statearr_20655[(13)] = inst_20630);

return statearr_20655;
})();
var statearr_20656_20677 = state_20637__$1;
(statearr_20656_20677[(2)] = inst_20631);

(statearr_20656_20677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (10))){
var inst_20621 = (state_20637[(2)]);
var state_20637__$1 = state_20637;
var statearr_20657_20678 = state_20637__$1;
(statearr_20657_20678[(2)] = inst_20621);

(statearr_20657_20678[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20638 === (8))){
var inst_20610 = (state_20637[(11)]);
var inst_20601 = (state_20637[(7)]);
var tmp20654 = inst_20601;
var inst_20601__$1 = tmp20654;
var inst_20602 = inst_20610;
var state_20637__$1 = (function (){var statearr_20658 = state_20637;
(statearr_20658[(7)] = inst_20601__$1);

(statearr_20658[(8)] = inst_20602);

return statearr_20658;
})();
var statearr_20659_20679 = state_20637__$1;
(statearr_20659_20679[(2)] = null);

(statearr_20659_20679[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___20665,out))
;
return ((function (switch__18759__auto__,c__18859__auto___20665,out){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20660[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20660[(1)] = (1));

return statearr_20660;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20637){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20637);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20661){if((e20661 instanceof Object)){
var ex__18763__auto__ = e20661;
var statearr_20662_20680 = state_20637;
(statearr_20662_20680[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20637);

return cljs.core.cst$kw$recur;
} else {
throw e20661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20681 = state_20637;
state_20637 = G__20681;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20665,out))
})();
var state__18861__auto__ = (function (){var statearr_20663 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20663[(6)] = c__18859__auto___20665);

return statearr_20663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20665,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20683 = arguments.length;
switch (G__20683) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18859__auto___20753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18859__auto___20753,out){
return (function (){
var f__18860__auto__ = (function (){var switch__18759__auto__ = ((function (c__18859__auto___20753,out){
return (function (state_20725){
var state_val_20726 = (state_20725[(1)]);
if((state_val_20726 === (7))){
var inst_20721 = (state_20725[(2)]);
var state_20725__$1 = state_20725;
var statearr_20727_20754 = state_20725__$1;
(statearr_20727_20754[(2)] = inst_20721);

(statearr_20727_20754[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (1))){
var inst_20684 = [];
var inst_20685 = inst_20684;
var inst_20686 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_20725__$1 = (function (){var statearr_20728 = state_20725;
(statearr_20728[(7)] = inst_20685);

(statearr_20728[(8)] = inst_20686);

return statearr_20728;
})();
var statearr_20729_20755 = state_20725__$1;
(statearr_20729_20755[(2)] = null);

(statearr_20729_20755[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (4))){
var inst_20689 = (state_20725[(9)]);
var inst_20689__$1 = (state_20725[(2)]);
var inst_20690 = (inst_20689__$1 == null);
var inst_20691 = cljs.core.not(inst_20690);
var state_20725__$1 = (function (){var statearr_20730 = state_20725;
(statearr_20730[(9)] = inst_20689__$1);

return statearr_20730;
})();
if(inst_20691){
var statearr_20731_20756 = state_20725__$1;
(statearr_20731_20756[(1)] = (5));

} else {
var statearr_20732_20757 = state_20725__$1;
(statearr_20732_20757[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (15))){
var inst_20715 = (state_20725[(2)]);
var state_20725__$1 = state_20725;
var statearr_20733_20758 = state_20725__$1;
(statearr_20733_20758[(2)] = inst_20715);

(statearr_20733_20758[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (13))){
var state_20725__$1 = state_20725;
var statearr_20734_20759 = state_20725__$1;
(statearr_20734_20759[(2)] = null);

(statearr_20734_20759[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (6))){
var inst_20685 = (state_20725[(7)]);
var inst_20710 = inst_20685.length;
var inst_20711 = (inst_20710 > (0));
var state_20725__$1 = state_20725;
if(cljs.core.truth_(inst_20711)){
var statearr_20735_20760 = state_20725__$1;
(statearr_20735_20760[(1)] = (12));

} else {
var statearr_20736_20761 = state_20725__$1;
(statearr_20736_20761[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (3))){
var inst_20723 = (state_20725[(2)]);
var state_20725__$1 = state_20725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20725__$1,inst_20723);
} else {
if((state_val_20726 === (12))){
var inst_20685 = (state_20725[(7)]);
var inst_20713 = cljs.core.vec(inst_20685);
var state_20725__$1 = state_20725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20725__$1,(15),out,inst_20713);
} else {
if((state_val_20726 === (2))){
var state_20725__$1 = state_20725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20725__$1,(4),ch);
} else {
if((state_val_20726 === (11))){
var inst_20689 = (state_20725[(9)]);
var inst_20693 = (state_20725[(10)]);
var inst_20703 = (state_20725[(2)]);
var inst_20704 = [];
var inst_20705 = inst_20704.push(inst_20689);
var inst_20685 = inst_20704;
var inst_20686 = inst_20693;
var state_20725__$1 = (function (){var statearr_20737 = state_20725;
(statearr_20737[(7)] = inst_20685);

(statearr_20737[(8)] = inst_20686);

(statearr_20737[(11)] = inst_20705);

(statearr_20737[(12)] = inst_20703);

return statearr_20737;
})();
var statearr_20738_20762 = state_20725__$1;
(statearr_20738_20762[(2)] = null);

(statearr_20738_20762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (9))){
var inst_20685 = (state_20725[(7)]);
var inst_20701 = cljs.core.vec(inst_20685);
var state_20725__$1 = state_20725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20725__$1,(11),out,inst_20701);
} else {
if((state_val_20726 === (5))){
var inst_20689 = (state_20725[(9)]);
var inst_20693 = (state_20725[(10)]);
var inst_20686 = (state_20725[(8)]);
var inst_20693__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20689) : f.call(null,inst_20689));
var inst_20694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20693__$1,inst_20686);
var inst_20695 = cljs.core.keyword_identical_QMARK_(inst_20686,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_20696 = (inst_20694) || (inst_20695);
var state_20725__$1 = (function (){var statearr_20739 = state_20725;
(statearr_20739[(10)] = inst_20693__$1);

return statearr_20739;
})();
if(cljs.core.truth_(inst_20696)){
var statearr_20740_20763 = state_20725__$1;
(statearr_20740_20763[(1)] = (8));

} else {
var statearr_20741_20764 = state_20725__$1;
(statearr_20741_20764[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (14))){
var inst_20718 = (state_20725[(2)]);
var inst_20719 = cljs.core.async.close_BANG_(out);
var state_20725__$1 = (function (){var statearr_20743 = state_20725;
(statearr_20743[(13)] = inst_20718);

return statearr_20743;
})();
var statearr_20744_20765 = state_20725__$1;
(statearr_20744_20765[(2)] = inst_20719);

(statearr_20744_20765[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (10))){
var inst_20708 = (state_20725[(2)]);
var state_20725__$1 = state_20725;
var statearr_20745_20766 = state_20725__$1;
(statearr_20745_20766[(2)] = inst_20708);

(statearr_20745_20766[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20726 === (8))){
var inst_20689 = (state_20725[(9)]);
var inst_20685 = (state_20725[(7)]);
var inst_20693 = (state_20725[(10)]);
var inst_20698 = inst_20685.push(inst_20689);
var tmp20742 = inst_20685;
var inst_20685__$1 = tmp20742;
var inst_20686 = inst_20693;
var state_20725__$1 = (function (){var statearr_20746 = state_20725;
(statearr_20746[(14)] = inst_20698);

(statearr_20746[(7)] = inst_20685__$1);

(statearr_20746[(8)] = inst_20686);

return statearr_20746;
})();
var statearr_20747_20767 = state_20725__$1;
(statearr_20747_20767[(2)] = null);

(statearr_20747_20767[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__18859__auto___20753,out))
;
return ((function (switch__18759__auto__,c__18859__auto___20753,out){
return (function() {
var cljs$core$async$state_machine__18760__auto__ = null;
var cljs$core$async$state_machine__18760__auto____0 = (function (){
var statearr_20748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20748[(0)] = cljs$core$async$state_machine__18760__auto__);

(statearr_20748[(1)] = (1));

return statearr_20748;
});
var cljs$core$async$state_machine__18760__auto____1 = (function (state_20725){
while(true){
var ret_value__18761__auto__ = (function (){try{while(true){
var result__18762__auto__ = switch__18759__auto__(state_20725);
if(cljs.core.keyword_identical_QMARK_(result__18762__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18762__auto__;
}
break;
}
}catch (e20749){if((e20749 instanceof Object)){
var ex__18763__auto__ = e20749;
var statearr_20750_20768 = state_20725;
(statearr_20750_20768[(5)] = ex__18763__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20725);

return cljs.core.cst$kw$recur;
} else {
throw e20749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18761__auto__,cljs.core.cst$kw$recur)){
var G__20769 = state_20725;
state_20725 = G__20769;
continue;
} else {
return ret_value__18761__auto__;
}
break;
}
});
cljs$core$async$state_machine__18760__auto__ = function(state_20725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18760__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18760__auto____1.call(this,state_20725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18760__auto____0;
cljs$core$async$state_machine__18760__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18760__auto____1;
return cljs$core$async$state_machine__18760__auto__;
})()
;})(switch__18759__auto__,c__18859__auto___20753,out))
})();
var state__18861__auto__ = (function (){var statearr_20751 = (f__18860__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18860__auto__.cljs$core$IFn$_invoke$arity$0() : f__18860__auto__.call(null));
(statearr_20751[(6)] = c__18859__auto___20753);

return statearr_20751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18861__auto__);
});})(c__18859__auto___20753,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

