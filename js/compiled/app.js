var CLOSURE_UNCOMPILED_DEFINES = {};
var CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="js/compiled/dev/goog/base.js"></script>');
document.write('<script src="js/compiled/dev/goog/deps.js"></script>');
document.write('<script src="js/compiled/dev/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("process.env");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.dev\"); }</script>");
document.write('<script>goog.require("toy_languages.core");</script>');