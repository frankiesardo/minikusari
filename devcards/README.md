To get an interactive development environment change into the project root (the directory just created) and execute:

clojure -A:fig:build
After the compilation process is complete, and a browser has popped open the compiled project in your browser, you will get a ClojureScript REPL prompt that is connected to the browser.

An easy way to verify this is:

cljs.user=> (js/alert "Am I connected?")
and you should see an alert in the browser window.

You can also supply arguments to figwheel.main like so:

clojure -A:fig -b dev -r
To clean all compiled files:

rm -rf target/public
To create a production build:

rm -rf target/public
clojure -A:fig:min