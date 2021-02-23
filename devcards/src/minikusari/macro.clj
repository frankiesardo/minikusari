(ns minikusari.macro)

(defmacro file [path]
  (slurp path))