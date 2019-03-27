// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('toy_languages.dream');
goog.require('cljs.core');
goog.require('cljs.core.constants');
toy_languages.dream.expr_constant_QMARK_ = (function toy_languages$dream$expr_constant_QMARK_(expr){
return (typeof expr === 'number') || (typeof expr === 'string');
});
toy_languages.dream.lookup_table = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
toy_languages.dream.expr_variable_QMARK_ = (function toy_languages$dream$expr_variable_QMARK_(expr){
return (expr instanceof cljs.core.Symbol);
});
toy_languages.dream.expr_op = (function toy_languages$dream$expr_op(expr){
var op = cljs.core.first(expr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$sym$plus)){
return ((function (op){
return (function (p1__23782_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__23782_SHARP_);
});
;})(op))
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$sym$minus)){
return ((function (op){
return (function (p1__23783_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,p1__23783_SHARP_);
});
;})(op))
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$sym$times)){
return ((function (op){
return (function (p1__23784_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,p1__23784_SHARP_);
});
;})(op))
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$sym$divide)){
return ((function (op){
return (function (p1__23785_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._SLASH_,p1__23785_SHARP_);
});
;})(op))
} else {
return ((function (op){
return (function (p1__23786_SHARP_){
return cljs.core.identity(p1__23786_SHARP_);
});
;})(op))

}
}
}
}
});
toy_languages.dream.expr_args = (function toy_languages$dream$expr_args(expr){
return cljs.core.rest(expr);
});
toy_languages.dream.variable_value = (function toy_languages$dream$variable_value(expr){
var temp__4655__auto__ = (function (){var G__23788 = cljs.core.deref(toy_languages.dream.lookup_table);
var fexpr__23787 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(expr);
return (fexpr__23787.cljs$core$IFn$_invoke$arity$1 ? fexpr__23787.cljs$core$IFn$_invoke$arity$1(G__23788) : fexpr__23787.call(null,G__23788));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return value;
} else {
return (0);
}
});
toy_languages.dream.expr_eval = (function toy_languages$dream$expr_eval(expr){
if(cljs.core.truth_(toy_languages.dream.expr_constant_QMARK_(expr))){
return expr;
} else {
if(cljs.core.truth_(toy_languages.dream.expr_variable_QMARK_(expr))){
return toy_languages.dream.variable_value(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(expr),cljs.core.cst$sym$define)){
var variable = cljs.core.first(cljs.core.rest(expr));
var value = (function (){var G__23789 = cljs.core.first(cljs.core.rest(cljs.core.rest(expr)));
return (toy_languages.dream.expr_eval.cljs$core$IFn$_invoke$arity$1 ? toy_languages.dream.expr_eval.cljs$core$IFn$_invoke$arity$1(G__23789) : toy_languages.dream.expr_eval.call(null,G__23789));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toy_languages.dream.lookup_table,cljs.core.assoc,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(variable),value);
} else {
var op = toy_languages.dream.expr_op(expr);
var operands = cljs.core.map.cljs$core$IFn$_invoke$arity$2(toy_languages.dream.expr_eval,toy_languages.dream.expr_args(expr));
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(operands) : op.call(null,operands));

}
}
}
});
