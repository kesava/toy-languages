(ns toy-languages.dream)
;(use 'clojure.tools.trace)

(defn expr-constant? [expr]
 (or (number? expr) (string? expr)))

(def lookup-table (atom {}))

(defn expr-variable? [expr]
 (symbol? expr))

(defn expr-op [expr]
 (let [op (first expr)]
   (cond
     (= op 'plus) #(apply + %)
     (= op 'minus) #(apply - %)
     (= op 'times) #(apply * %)
     (= op 'divide) #(apply / %)
     :else #(identity %))))

(defn expr-args [expr]
 (rest expr))

(defn variable-value [expr]
 (if-let [value ((symbol expr) @lookup-table)] value 0))

(defn expr-eval [expr]
 (cond
   (expr-constant? expr) expr
   (expr-variable? expr) (variable-value expr)
   (= (first expr) 'define) (let [variable (first (rest expr)) value (expr-eval (first (rest (rest expr))))]
                              (swap! lookup-table assoc (symbol variable) value))
   :else (let [op (expr-op expr) operands (map expr-eval (expr-args expr))]
           (op operands))))


;(dream-expr-eval '(define x 5))
;(dream-expr-eval '(define y (plus (times x 3) 4)))
;(dream-expr-eval '(plus y 10))