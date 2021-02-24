(ns ^:figwheel-hooks minikusari.intro
  (:require
    [devcards.core :as dc]
    [minikusari.tutorial1]
    [minikusari.tutorial2]
    [minikusari.tutorial3]
    [minikusari.tutorial4])
  (:require-macros
    [minikusari.macro :refer [file]]
    [devcards.core :refer [defcard-doc]]))

(defcard-doc (file "../README.md"))

(dc/start-devcard-ui!)