(ns toy-languages.microscheme-syntax-ok)
;(use 'clojure.tools.trace)

(def car first)
(def cdr rest)

(defn keyword? [keyw]
          (cond
            (= keyw 'lambda) true
            (= keyw 'quote) true
            (= keyw 'if) true
            :else false))

(defn name? [arg]
          (cond
            (keyword? arg) false
            (symbol? arg) true
            :else false))

(declare syntax-ok?)

(defn matches?
          [pattern pmse]
          (cond
            (= (car pattern) (car pmse)) (= (count (cdr pattern)) (count (cdr pmse)))
            (and (= pattern '(...)) (list? pmse)) true
            :else false))

(defn substitutions-in-to-match
          [pattern [operator & rst :as pmse]]
          (cond
            (= (car pattern) operator) rst
            :else (cons pmse '())))
(defn parse-loop [pmse pa]
  (loop [[[pattern action] & rst :as p-a-list] pa]
    (cond
      (empty? p-a-list) false
      (matches? pattern pmse) (apply action (substitutions-in-to-match pattern pmse))
      :else (recur rst))))

(defn parse
  [expression]
  (cond
    (name? expression) (make-name-ast expression)
    (or (number? expression)
        (string? expression)
        (boolean? expression)) (make-constant-ast expression)
    (list? expression) (parse-loop expression)
    :else (str "Not a valid expression")))


(def micro-scheme-syntax-ok?-p-a-list
  [
   ['(if _ _ _)
    (fn [test if-true if-false]
      (and (syntax-ok? test)
           (syntax-ok? if-true)
           (syntax-ok? if-false)))]
   ['(lambda _ _)
    (fn [params body]
      (and (list? params)
           ((every? name? params))
           (syntax-ok? body)))]
   ['(quote _)
    (fn [datum] true)]
   ['(...)
    (fn [pmses]
      (every? syntax-ok? pmses))]])


;; convert to reduce / fold



(defn syntax-ok? [pmse]
          (cond
            (or (number? pmse)
                (string? pmse)
                ;(boolean? pmse)
                (empty? pmse)) true
            (name? pmse) true
            (list? pmse) (parse-loop pmse micro-scheme-syntax-ok?-p-a-list)
            :else false))


;(syntax-ok? '(if ('< 2 3) 2 3))
;(syntax-ok? '('+ 2 3))
;(every? syntax-ok? '('+ 2 3))

;(name? '+)


;(substitutions-in-to-match '(if _ _ _) '(if 2 3 4))
;(every? syntax-ok? '(2 3 +))
;(every? name? '(+ 2 3))