# toy-languages

A single page application designed to demonstrate a few toy langauges.

* Micro-scheme from Concrete Abstractions by Max Hairpelin
* Dream Language from The Schematics of Computation by Vincent Manis
* Nightmare Langauge from The Schematics of Computation

The app is now live at http://kesava.github.io/toy-languages

## Workflow

1. Write code
```
lein figwheel dev
```
Browse to [http://localhost:3449](http://localhost:3449).

2. Build code
```
lein clean
lein cljsbuild once min
```

3. Commit code
```
git add resources
git commit -m
```

4. Ship it
```
git subtree push --prefix resources/public/ origin gh-pages
```
Your app is now live at `http://*your-gh-username*.github.io/*repository-name*`

## Moar Tools
### Sass
```
;; compile sass once
lein sass
;; compile sass and watch for changes
lein sass watch
```
