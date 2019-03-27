(defproject toy-languages "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [reagent "0.7.0"]
                 [secretary "1.2.3"]
                 [org.clojure/tools.trace "0.7.10"]
                 [devcards "0.2.4" :exclusions [cljsjs/react]]
                 [re-frisk "0.5.3"]]
                 
                 

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.1.4"]
            [yogthos/lein-sass "0.1.1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :figwheel {:css-dirs ["resources/public/css"]}
  :sass {:source "src/sass"
         :target  "resources/public/css"}
  :profiles
  {:dev
   {:dependencies [[figwheel-sidecar "0.5.8"]
                   [com.cemerick/piggieback "0.2.1"]]

    :plugins      [[lein-figwheel "0.5.8"]]}}
    

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "toy-languages.core/reload"}
     :compiler     {:main                 toy-languages.core
                    :optimizations        :none
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/dev"
                    :asset-path           "js/compiled/dev"
                    :source-map-timestamp true}}

    {:id           "devcards"
     :source-paths ["src/devcards" "src/cljs"]
     :figwheel     {:devcards true}
     :compiler     {:main                 "toy-languages.core-card"
                    :optimizations        :none
                    :output-to            "resources/public/js/devcards.js"
                    :output-dir           "resources/public/js/devcards"
                    :asset-path           "js/devcards"
                    :source-map-timestamp true}}

    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            toy-languages.core
                    :optimizations   :advanced
                    :output-to       "resources/public/js/compiled/app.js"
                    :output-dir      "resources/public/js/compiled/min"
                    :elide-asserts   true
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    true}}]})

    
