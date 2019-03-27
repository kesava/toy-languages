// Compiled by ClojureScript 1.9.946 {}
goog.provide('toy_languages.dream');
goog.require('cljs.core');
toy_languages.dream.expr_constant_QMARK_ = (function toy_languages$dream$expr_constant_QMARK_(expr){
return (typeof expr === 'number') || (typeof expr === 'string');
});
toy_languages.dream.lookup_table = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
toy_languages.dream.expr_variable_QMARK_ = (function toy_languages$dream$expr_variable_QMARK_(expr){
return (expr instanceof cljs.core.Symbol);
});
toy_languages.dream.expr_op = (function toy_languages$dream$expr_op(expr){
var op = cljs.core.first.call(null,expr);
if(cljs.core._EQ_.call(null,op,new cljs.core.Symbol(null,"plus","plus",1852072188,null))){
return ((function (op){
return (function (p1__35434_SHARP_){
return cljs.core.apply.call(null,cljs.core._PLUS_,p1__35434_SHARP_);
});
;})(op))
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Symbol(null,"minus","minus",-43029965,null))){
return ((function (op){
return (function (p1__35435_SHARP_){
return cljs.core.apply.call(null,cljs.core._,p1__35435_SHARP_);
});
;})(op))
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Symbol(null,"times","times",-982864302,null))){
return ((function (op){
return (function (p1__35436_SHARP_){
return cljs.core.apply.call(null,cljs.core._STAR_,p1__35436_SHARP_);
});
;})(op))
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Symbol(null,"divide","divide",-545489112,null))){
return ((function (op){
return (function (p1__35437_SHARP_){
return cljs.core.apply.call(null,cljs.core._SLASH_,p1__35437_SHARP_);
});
;})(op))
} else {
return ((function (op){
return (function (p1__35438_SHARP_){
return cljs.core.identity.call(null,p1__35438_SHARP_);
});
;})(op))

}
}
}
}
});
toy_languages.dream.expr_args = (function toy_languages$dream$expr_args(expr){
return cljs.core.rest.call(null,expr);
});
toy_languages.dream.variable_value = (function toy_languages$dream$variable_value(expr){
var temp__4655__auto__ = cljs.core.symbol.call(null,expr).call(null,cljs.core.deref.call(null,toy_languages.dream.lookup_table));
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return value;
} else {
return (0);
}
});
toy_languages.dream.expr_eval = (function toy_languages$dream$expr_eval(expr){
if(cljs.core.truth_(toy_languages.dream.expr_constant_QMARK_.call(null,expr))){
return expr;
} else {
if(cljs.core.truth_(toy_languages.dream.expr_variable_QMARK_.call(null,expr))){
return toy_languages.dream.variable_value.call(null,expr);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,expr),new cljs.core.Symbol(null,"define","define",-366059178,null))){
var variable = cljs.core.first.call(null,cljs.core.rest.call(null,expr));
var value = toy_languages.dream.expr_eval.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,expr))));
return cljs.core.swap_BANG_.call(null,toy_languages.dream.lookup_table,cljs.core.assoc,cljs.core.symbol.call(null,variable),value);
} else {
var op = toy_languages.dream.expr_op.call(null,expr);
var operands = cljs.core.map.call(null,toy_languages.dream.expr_eval,toy_languages.dream.expr_args.call(null,expr));
return op.call(null,operands);

}
}
}
});

//# sourceMappingURL=dream.js.map?rel=1553721083928
