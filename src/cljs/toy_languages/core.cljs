(ns toy-languages.core
 (:require-macros [secretary.core :refer [defroute]])
 (:import goog.History)
 (:require
  [secretary.core :as secretary]
  [clojure.core :as clj]
  [toy-languages.dream :as dream]
  [goog.events :as events]
  [goog.history.EventType :as EventType]
  [reagent.core :as reagent]
  [re-frisk.core :as rf]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Vars

(defonce app-state
 (reagent/atom {}))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Routes

(defn hook-browser-navigation! []
 (doto (History.)
   (events/listen
    EventType/NAVIGATE
    (fn [event]
      (secretary/dispatch! (.-token event))))
   (.setEnabled true)))

(defn app-routes []
 (secretary/set-config! :prefix "#")

 (defroute "/" []
   (swap! app-state assoc :page :home))

 (defroute "/about" []
   (swap! app-state assoc :page :about))

;; add routes here


 (hook-browser-navigation!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Components

(defn atom-input [value]
 [:textarea {:type "text"
             :class "likeQuora"
             :value @value
             :rows 9
             :cols 50
             :on-change #(reset! value (-> % .-target .-value))}])

(def editor-vector (reagent/atom (into ["(define x 3)" "(plus x 8)"] (doall (map #(str "") (range 8))))))
(def result-vector (reagent/atom (into [] (doall (map #(str "") (range 10))))))

(defn editor-table
 []
 [:table {:class "code"}
  [:thead
   [:tr { :class "thead"}
    [:th "#"]
    [:th "Code"]
    [:th "Result"]]]
  [:tbody
   (for [i (range (count @editor-vector))]
    [:tr
     [:td (+ i 1)]
     [:td {
           :content-editable "true"
           :class "likeQuora code-col"
           :on-input #(do
                        (js/console.log (-> % .-target .-innerHTML))
                        (swap! editor-vector assoc i (-> % .-target .-innerHTML))
                        (swap! result-vector assoc i (dream/expr-eval (cljs.reader/read-string (get @editor-vector i))))
                        (js/console.log @result-vector))}]
     [:td { :class "res-col" } (get @result-vector i)]])]])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Pages

(defn home [ratom]
 (let [val (reagent/atom "()") result (reagent/atom "??")]
   (fn []
     [:div [:h1 "Dream Language Interpreter"]
      [:h6 "(From The Schematics of Computation by Vincent Manis)"]
     ;[:a {:href "#/about"} "about page"]
      [:div
       [:div [editor-table]]]])))


(defn about [ratom]
 [:div [:h1 "About Page"]
  [:h3 "Hello world"]
  [:a {:href "#/"} "home page"]])



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Initialize App

(defmulti page identity)
(defmethod page :home [] home)
(defmethod page :about [] about)
(defmethod page :default [] (fn [_] [:div]))

(defn current-page [ratom]
 (let [page-key (:page @ratom)]
   [(page page-key) ratom]))

(defn dev-setup []
 (when ^boolean js/goog.DEBUG
   (enable-console-print!)
   (println "dev mode")
   (rf/enable-frisk!)
   (rf/add-data :app-state app-state)))


(defn reload []
 (reagent/render [current-page app-state]
                 (.getElementById js/document "app")))

(defn ^:export main []
 (dev-setup)
 (app-routes)
 (reload))
