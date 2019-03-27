// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.date');
goog.require('goog.date.duration');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function cljs_time$format$abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of 'y' is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 *   colon, 'ZZZ' or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 *   ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 *   '.', ' ', '#' and '?' will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.date_formatters = (function (){var d = (function (p1__21484_SHARP_){
return p1__21484_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__21485_SHARP_){
return (p1__21485_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__21486_SHARP_){
return p1__21486_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__21487_SHARP_){
var hr = cljs.core.mod(p1__21487_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__21488_SHARP_){
if((p1__21488_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__21489_SHARP_){
if((p1__21489_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__21490_SHARP_){
return p1__21490_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__21491_SHARP_){
return p1__21491_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__21492_SHARP_){
return p1__21492_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__21493_SHARP_){
return p1__21493_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__21494_SHARP_){
return p1__21494_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__21495_SHARP_){
return p1__21495_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__21496_SHARP_){
return p1__21496_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21508_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__21508_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21512_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(p1__21512_SHARP_.getWeekNumber());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21503_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__21513 = (M(p1__21503_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__21513) : cljs_time.format.months.call(null,G__21513));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21510_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__21510_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21511_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__21511_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21499_SHARP_){
var G__21514 = dow(p1__21499_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__21514) : cljs_time.format.days.call(null,G__21514));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21506_SHARP_){
return cljs.core.mod(y(p1__21506_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21509_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__21509_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21502_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__21502_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21500_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__21515 = dow(p1__21500_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__21515) : cljs_time.format.days.call(null,G__21515));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21497_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__21497_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21507_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__21507_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21498_SHARP_){
var d__$1 = d(p1__21498_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21516 = d__$1;
switch (G__21516) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21501_SHARP_){
var G__21517 = dow(p1__21501_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__21517) : cljs_time.format.days.call(null,G__21517));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21505_SHARP_){
return cljs.core.mod(y(p1__21505_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__21504_SHARP_){
var G__21518 = (M(p1__21504_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__21518) : cljs_time.format.months.call(null,G__21518));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function cljs_time$format$timezone_adjustment(d,timezone_string){
var vec__21521 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21521,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21521,(1),null);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21521,(2),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21521,(3),null);
if(cljs.core.truth_((function (){var and__10909__auto__ = sign;
if(cljs.core.truth_(and__10909__auto__)){
var and__10909__auto____$1 = hh;
if(cljs.core.truth_(and__10909__auto____$1)){
return mm;
} else {
return and__10909__auto____$1;
}
} else {
return and__10909__auto__;
}
})())){
var sign_21531__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));
var vec__21524_21532 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_21531__$1,vec__21521,_,sign,hh,mm){
return (function (p1__21520_SHARP_){
return parseInt(p1__21520_SHARP_,(10));
});})(sign_21531__$1,vec__21521,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_21533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21524_21532,(0),null);
var mm_21534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21524_21532,(1),null);
var adjusted_21535 = (function (){var G__21527 = (function (){var G__21529 = d;
var G__21530 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_21533__$1);
return (sign_21531__$1.cljs$core$IFn$_invoke$arity$2 ? sign_21531__$1.cljs$core$IFn$_invoke$arity$2(G__21529,G__21530) : sign_21531__$1.call(null,G__21529,G__21530));
})();
var G__21528 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_21534__$1);
return (sign_21531__$1.cljs$core$IFn$_invoke$arity$2 ? sign_21531__$1.cljs$core$IFn$_invoke$arity$2(G__21527,G__21528) : sign_21531__$1.call(null,G__21527,G__21528));
})();
d.setTime(adjusted_21535.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__21536_SHARP_){
return parseInt(p1__21536_SHARP_,(10));
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__21537_SHARP_,p2__21538_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21537_SHARP_,kw,parse_int(p2__21538_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn(cljs.core.cst$kw$years);
var d = assoc_fn(cljs.core.cst$kw$days);
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__21539_SHARP_,p2__21540_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21539_SHARP_,cljs.core.cst$kw$months,(parse_int(p2__21540_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__21541_SHARP_,p2__21542_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21541_SHARP_,cljs.core.cst$kw$hours,cljs.core.mod(parse_int(p2__21542_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__21549,x){
var map__21550 = p__21549;
var map__21550__$1 = ((((!((map__21550 == null)))?((((map__21550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21550):map__21550);
var date = map__21550__$1;
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21550__$1,cljs.core.cst$kw$hours);
if(cljs.core.truth_((function (){var G__21553 = clojure.string.lower_case(x);
var fexpr__21552 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null);
return (fexpr__21552.cljs$core$IFn$_invoke$arity$1 ? fexpr__21552.cljs$core$IFn$_invoke$arity$1(G__21553) : fexpr__21552.call(null,G__21553));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.cst$kw$hours,(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn(cljs.core.cst$kw$hours);
var m = assoc_fn(cljs.core.cst$kw$minutes);
var s = assoc_fn(cljs.core.cst$kw$seconds);
var S = assoc_fn(cljs.core.cst$kw$millis);
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__21544_SHARP_,p2__21543_SHARP_){
var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21543_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M(p1__21544_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__21545_SHARP_,p2__21546_SHARP_){
return M(p1__21545_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__21546_SHARP_) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__21554__delegate = function (x,args){
return x;
};
var G__21554 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__21555__i = 0, G__21555__a = new Array(arguments.length -  1);
while (G__21555__i < G__21555__a.length) {G__21555__a[G__21555__i] = arguments[G__21555__i + 1]; ++G__21555__i;}
  args = new cljs.core.IndexedSeq(G__21555__a,0,null);
} 
return G__21554__delegate.call(this,x,args);};
G__21554.cljs$lang$maxFixedArity = 1;
G__21554.cljs$lang$applyTo = (function (arglist__21556){
var x = cljs.core.first(arglist__21556);
var args = cljs.core.rest(arglist__21556);
return G__21554__delegate(x,args);
});
G__21554.cljs$core$IFn$_invoke$arity$variadic = G__21554__delegate;
return G__21554;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__21547_SHARP_,p2__21548_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21547_SHARP_,cljs.core.cst$kw$time_DASH_zone,p2__21548_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(function (p1__21557_SHARP_,p2__21558_SHARP_){
return p1__21557_SHARP_.setYear(p2__21558_SHARP_);
}),cljs.core.cst$kw$months,(function (p1__21559_SHARP_,p2__21560_SHARP_){
return p1__21559_SHARP_.setMonth(p2__21560_SHARP_);
}),cljs.core.cst$kw$days,(function (p1__21561_SHARP_,p2__21562_SHARP_){
return p1__21561_SHARP_.setDate(p2__21562_SHARP_);
}),cljs.core.cst$kw$hours,(function (p1__21563_SHARP_,p2__21564_SHARP_){
return p1__21563_SHARP_.setHours(p2__21564_SHARP_);
}),cljs.core.cst$kw$minutes,(function (p1__21565_SHARP_,p2__21566_SHARP_){
return p1__21565_SHARP_.setMinutes(p2__21566_SHARP_);
}),cljs.core.cst$kw$seconds,(function (p1__21567_SHARP_,p2__21568_SHARP_){
return p1__21567_SHARP_.setSeconds(p2__21568_SHARP_);
}),cljs.core.cst$kw$millis,(function (p1__21569_SHARP_,p2__21570_SHARP_){
return p1__21569_SHARP_.setMilliseconds(p2__21570_SHARP_);
}),cljs.core.cst$kw$time_DASH_zone,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function cljs_time$format$parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","A","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters))))),")"].join(''));
cljs_time.format.old_string_replace = (function cljs_time$format$old_string_replace(s,match,replacement){
return s.replace((new RegExp(match.source,"g")),replacement);
});
cljs_time.format.date_parse_pattern = (function cljs_time$format$date_parse_pattern(formatter){
return cljs.core.re_pattern(cljs_time.format.old_string_replace(cljs_time.format.old_string_replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__21571_SHARP_){
return cljs.core.first((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(p1__21571_SHARP_) : cljs_time.format.date_parsers.call(null,p1__21571_SHARP_)));
})));
});
cljs_time.format.parser_fn = (function cljs_time$format$parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function cljs_time$format$formatter_fn(fmts,formatters){
return (function() { 
var G__21583__delegate = function (date,p__21573){
var vec__21574 = p__21573;
var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21574,(0),null);
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$c,(0)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.format.old_string_replace(fmts,/'([^']+)'/,((function (a,vec__21574,formatter_overrides){
return (function (x,s){
if((cljs.core.seq(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.last(x)))){
var map__21577 = cljs.core.deref(a);
var map__21577__$1 = ((((!((map__21577 == null)))?((((map__21577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21577):map__21577);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21577__$1,cljs.core.cst$kw$c);
var k = ["&&&&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace,k], null),cljs.core.constantly(s));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c], null),cljs.core.inc);

return k;
} else {
return x;
}
});})(a,vec__21574,formatter_overrides))
),cljs.core.re_pattern((function (){var G__21579 = cljs_time.format.date_format_pattern.source;
if(cljs.core.truth_(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)))){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.keys(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))))),")|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21579)].join('');
} else {
return G__21579;
}
})()),((function (a,vec__21574,formatter_overrides){
return (function (p1__21572_SHARP_){
var fexpr__21581 = (function (){var fexpr__21582 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([formatters,formatter_overrides,cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))], 0));
return (fexpr__21582.cljs$core$IFn$_invoke$arity$1 ? fexpr__21582.cljs$core$IFn$_invoke$arity$1(p1__21572_SHARP_) : fexpr__21582.call(null,p1__21572_SHARP_));
})();
return (fexpr__21581.cljs$core$IFn$_invoke$arity$1 ? fexpr__21581.cljs$core$IFn$_invoke$arity$1(date) : fexpr__21581.call(null,date));
});})(a,vec__21574,formatter_overrides))
], null);
};
var G__21583 = function (date,var_args){
var p__21573 = null;
if (arguments.length > 1) {
var G__21584__i = 0, G__21584__a = new Array(arguments.length -  1);
while (G__21584__i < G__21584__a.length) {G__21584__a[G__21584__i] = arguments[G__21584__i + 1]; ++G__21584__i;}
  p__21573 = new cljs.core.IndexedSeq(G__21584__a,0,null);
} 
return G__21583__delegate.call(this,date,p__21573);};
G__21583.cljs$lang$maxFixedArity = 1;
G__21583.cljs$lang$applyTo = (function (arglist__21585){
var date = cljs.core.first(arglist__21585);
var p__21573 = cljs.core.rest(arglist__21585);
return G__21583__delegate(date,p__21573);
});
G__21583.cljs$core$IFn$_invoke$arity$variadic = G__21583__delegate;
return G__21583;
})()
;
});
cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var G__21587 = arguments.length;
switch (G__21587) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$not_DASH_implemented,cljs.core.cst$kw$message,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0))], null));
});
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$default_DASH_year,default_year);
});
/**
 * Map of ISO 8601 and a single RFC 822 formatters that can be used
 * for parsing and, in most cases, printing.
 * 
 * Note: due to current implementation limitations, timezone information
 * cannot be kept. Although the correct offset will be applied to UTC
 * time if supplied.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_element_DASH_parser,cljs.core.cst$kw$hour_DASH_minute,cljs.core.cst$kw$t_DASH_time,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date,cljs.core.cst$kw$date,cljs.core.cst$kw$hour,cljs.core.cst$kw$time_DASH_no_DASH_ms,cljs.core.cst$kw$weekyear_DASH_week_DASH_day,cljs.core.cst$kw$week_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$basic_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_time,cljs.core.cst$kw$basic_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$date_DASH_parser,cljs.core.cst$kw$basic_DASH_week_DASH_date,cljs.core.cst$kw$basic_DASH_t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$local_DASH_time,cljs.core.cst$kw$date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month_DASH_day,cljs.core.cst$kw$date_DASH_opt_DASH_time,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$date_DASH_hour_DASH_minute,cljs.core.cst$kw$time,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time,cljs.core.cst$kw$weekyear,cljs.core.cst$kw$basic_DASH_time,cljs.core.cst$kw$hour_DASH_minute_DASH_second,cljs.core.cst$kw$ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$time_DASH_parser,cljs.core.cst$kw$date_DASH_time_DASH_parser,cljs.core.cst$kw$year,cljs.core.cst$kw$t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date,cljs.core.cst$kw$weekyear_DASH_week,cljs.core.cst$kw$local_DASH_date,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,cljs.core.cst$kw$week_DASH_date,cljs.core.cst$kw$date_DASH_hour,cljs.core.cst$kw$time_DASH_element_DASH_parser,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second,cljs.core.cst$kw$week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$mysql,cljs.core.cst$kw$basic_DASH_t_DASH_time],[cljs_time.format.not_implemented(cljs.core.cst$sym$dateElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$localTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$timeParser),cljs_time.format.not_implemented(cljs.core.cst$sym$dateTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(cljs.core.cst$sym$timeElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$date_DASH_element_DASH_parser,null,cljs.core.cst$kw$date_DASH_parser,null,cljs.core.cst$kw$local_DASH_time,null,cljs.core.cst$kw$date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_parser,null,cljs.core.cst$kw$date_DASH_time_DASH_parser,null,cljs.core.cst$kw$local_DASH_date,null,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_element_DASH_parser,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;

/**
 * @interface
 */
cljs_time.format.IDateMap = function(){};

cljs_time.format.date_map = (function cljs_time$format$date_map(date){
if((!((date == null))) && (!((date.cljs_time$format$IDateMap$date_map$arity$1 == null)))){
return date.cljs_time$format$IDateMap$date_map$arity$1(date);
} else {
var x__11604__auto__ = (((date == null))?null:date);
var m__11605__auto__ = (cljs_time.format.date_map[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$1(date) : m__11605__auto__.call(null,date));
} else {
var m__11605__auto____$1 = (cljs_time.format.date_map["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1(date) : m__11605__auto____$1.call(null,date));
} else {
throw cljs.core.missing_protocol("IDateMap.date-map",date);
}
}
}
});

goog.date.Date.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1)], null);
});

goog.date.DateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0)], null);
});

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0),cljs.core.cst$kw$time_DASH_zone,null], null);
});
cljs_time.format.parse_STAR_ = (function cljs_time$format$parse_STAR_(constructor$,p__21591,s){
var map__21592 = p__21591;
var map__21592__$1 = ((((!((map__21592 == null)))?((((map__21592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21592):map__21592);
var fmt = map__21592__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,cljs.core.cst$kw$format_DASH_str);
var default_year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,cljs.core.cst$kw$default_DASH_year);

var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn(format_str);
var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parse_fn,min_parts,map__21592,map__21592__$1,fmt,format_str,default_year){
return (function (p__21594){
var vec__21595 = p__21594;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21595,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21595,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(b) : cljs_time.format.date_parsers.call(null,b)))], null);
});})(parse_fn,min_parts,map__21592,map__21592__$1,fmt,format_str,default_year))
,(parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(s) : parse_fn.call(null,s))));
if((cljs.core.count(parse_seq) >= min_parts)){
var d = (new constructor$((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs_time.format.date_map(d),cljs.core.cst$kw$years,(function (){var or__10921__auto__ = default_year;
if(cljs.core.truth_(or__10921__auto__)){
return or__10921__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__21592,map__21592__$1,fmt,format_str,default_year){
return (function (p1__21589_SHARP_,p2__21590_SHARP_){
return (p1__21589_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__21589_SHARP_.cljs$core$IFn$_invoke$arity$2(d,p2__21590_SHARP_) : p1__21589_SHARP_.call(null,d,p2__21590_SHARP_));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__21592,map__21592__$1,fmt,format_str,default_year))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__21592,map__21592__$1,fmt,format_str,default_year){
return (function (date,p__21598){
var vec__21599 = p__21598;
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21599,(0),null);
var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21599,(1),null);
return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(date,part) : do_parse.call(null,date,part));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__21592,map__21592__$1,fmt,format_str,default_year))
,empty,parse_seq))], 0));

return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$parser_DASH_no_DASH_match], null));
}
});
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var G__21603 = arguments.length;
switch (G__21603) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__11729__auto__ = (function cljs_time$format$iter__21604(s__21605){
return (new cljs.core.LazySeq(null,(function (){
var s__21605__$1 = s__21605;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21605__$1);
if(temp__4657__auto__){
var s__21605__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21605__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__21605__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__21607 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__21606 = (0);
while(true){
if((i__21606 < size__11728__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__21606);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21608){var _ = e21608;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__21607,d);

var G__21611 = (i__21606 + (1));
i__21606 = G__21611;
continue;
} else {
var G__21612 = (i__21606 + (1));
i__21606 = G__21612;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21607),cljs_time$format$iter__21604(cljs.core.chunk_rest(s__21605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21607),null);
}
} else {
var f = cljs.core.first(s__21605__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21609){var _ = e21609;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__21604(cljs.core.rest(s__21605__$2)));
} else {
var G__21613 = cljs.core.rest(s__21605__$2);
s__21605__$1 = G__21613;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var G__21615 = arguments.length;
switch (G__21615) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__11729__auto__ = (function cljs_time$format$iter__21616(s__21617){
return (new cljs.core.LazySeq(null,(function (){
var s__21617__$1 = s__21617;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21617__$1);
if(temp__4657__auto__){
var s__21617__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21617__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__21617__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__21619 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__21618 = (0);
while(true){
if((i__21618 < size__11728__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__21618);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21620){if((e21620 instanceof Error)){
var _ = e21620;
return null;
} else {
throw e21620;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__21619,d);

var G__21623 = (i__21618 + (1));
i__21618 = G__21623;
continue;
} else {
var G__21624 = (i__21618 + (1));
i__21618 = G__21624;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21619),cljs_time$format$iter__21616(cljs.core.chunk_rest(s__21617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21619),null);
}
} else {
var f = cljs.core.first(s__21617__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21621){if((e21621 instanceof Error)){
var _ = e21621;
return null;
} else {
throw e21621;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__21616(cljs.core.rest(s__21617__$2)));
} else {
var G__21625 = cljs.core.rest(s__21617__$2);
s__21617__$1 = G__21625;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var G__21627 = arguments.length;
switch (G__21627) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__11729__auto__ = (function cljs_time$format$iter__21628(s__21629){
return (new cljs.core.LazySeq(null,(function (){
var s__21629__$1 = s__21629;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21629__$1);
if(temp__4657__auto__){
var s__21629__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21629__$2)){
var c__11727__auto__ = cljs.core.chunk_first(s__21629__$2);
var size__11728__auto__ = cljs.core.count(c__11727__auto__);
var b__21631 = cljs.core.chunk_buffer(size__11728__auto__);
if((function (){var i__21630 = (0);
while(true){
if((i__21630 < size__11728__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11727__auto__,i__21630);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21632){if((e21632 instanceof Error)){
var _ = e21632;
return null;
} else {
throw e21632;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__21631,d);

var G__21635 = (i__21630 + (1));
i__21630 = G__21635;
continue;
} else {
var G__21636 = (i__21630 + (1));
i__21630 = G__21636;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21631),cljs_time$format$iter__21628(cljs.core.chunk_rest(s__21629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21631),null);
}
} else {
var f = cljs.core.first(s__21629__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21633){if((e21633 instanceof Error)){
var _ = e21633;
return null;
} else {
throw e21633;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__21628(cljs.core.rest(s__21629__$2)));
} else {
var G__21637 = cljs.core.rest(s__21629__$2);
s__21629__$1 = G__21637;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11729__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__21638,dt){
var map__21639 = p__21638;
var map__21639__$1 = ((((!((map__21639 == null)))?((((map__21639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21639):map__21639);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21639__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21639__$1,cljs.core.cst$kw$formatters);


return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var fexpr__21641 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__21641.cljs$core$IFn$_invoke$arity$1 ? fexpr__21641.cljs$core$IFn$_invoke$arity$1(dt) : fexpr__21641.call(null,dt));
})());
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__21642,dt){
var map__21643 = p__21642;
var map__21643__$1 = ((((!((map__21643 == null)))?((((map__21643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21643):map__21643);
var fmt = map__21643__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21643__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21643__$1,cljs.core.cst$kw$formatters);


return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__21646 = dt;
var G__21647 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__21645 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__21645.cljs$core$IFn$_invoke$arity$2 ? fexpr__21645.cljs$core$IFn$_invoke$arity$2(G__21646,G__21647) : fexpr__21645.call(null,G__21646,G__21647));
})());
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__21648,dt){
var map__21649 = p__21648;
var map__21649__$1 = ((((!((map__21649 == null)))?((((map__21649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21649):map__21649);
var fmt = map__21649__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$formatters);


return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__21652 = dt;
var G__21653 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__21651 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__21651.cljs$core$IFn$_invoke$arity$2 ? fexpr__21651.cljs$core$IFn$_invoke$arity$2(G__21652,G__21653) : fexpr__21651.call(null,G__21652,G__21653));
})());
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var G__21655 = arguments.length;
switch (G__21655) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__21656 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__21657 = null;
var count__21658 = (0);
var i__21659 = (0);
while(true){
if((i__21659 < count__21658)){
var p = chunk__21657.cljs$core$IIndexed$_nth$arity$2(null,i__21659);
var fmt_21661 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_21661,dt)], 0))], 0));

var G__21662 = seq__21656;
var G__21663 = chunk__21657;
var G__21664 = count__21658;
var G__21665 = (i__21659 + (1));
seq__21656 = G__21662;
chunk__21657 = G__21663;
count__21658 = G__21664;
i__21659 = G__21665;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__21656);
if(temp__4657__auto__){
var seq__21656__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21656__$1)){
var c__11760__auto__ = cljs.core.chunk_first(seq__21656__$1);
var G__21666 = cljs.core.chunk_rest(seq__21656__$1);
var G__21667 = c__11760__auto__;
var G__21668 = cljs.core.count(c__11760__auto__);
var G__21669 = (0);
seq__21656 = G__21666;
chunk__21657 = G__21667;
count__21658 = G__21668;
i__21659 = G__21669;
continue;
} else {
var p = cljs.core.first(seq__21656__$1);
var fmt_21670 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_21670,dt)], 0))], 0));

var G__21671 = cljs.core.next(seq__21656__$1);
var G__21672 = null;
var G__21673 = (0);
var G__21674 = (0);
seq__21656 = G__21671;
chunk__21657 = G__21672;
count__21658 = G__21673;
i__21659 = G__21674;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((!((instant == null))) && (!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__11604__auto__ = (((instant == null))?null:instant);
var m__11605__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__11604__auto__)]);
if(!((m__11605__auto__ == null))){
return (m__11605__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__11605__auto__.call(null,instant));
} else {
var m__11605__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(!((m__11605__auto____$1 == null))){
return (m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11605__auto____$1.cljs$core$IFn$_invoke$arity$1(instant) : m__11605__auto____$1.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__21675 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__21675);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,years,cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__21676 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1));
var G__21676__$1 = (((G__21676 instanceof cljs.core.Keyword))?G__21676.fqn:null);
switch (G__21676__$1) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21676__$1)].join('')));

}
});
