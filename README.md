# justgage-npm-sample

A sample webpage built with [Browserify](https://www.npmjs.com/package/browserify) to incorporate the
[JustGage](https://www.npmjs.com/package/justgage) npm package.

**JustGage** is described as:
> A handy JavaScript plugin for generating and animating nice & clean dashboard gauges. It is based on Raphaël library
> for vector drawing.

**Browserify** is described as:
> Browserify is a development tool that allows us to write node.js-style modules that compile for use in the browser.
> Just like node, we write our modules in separate files, exporting external methods and properties using the
> module.exports and exports variables. We can even require other modules using the require function, and if we omit
> the relative path it’ll resolve to the module in the node_modules directory.

## The Basics

This repository is a reference on how to set up a basic dashboard webpage that includes a demonstration gage created
using the JustGage library.
- See `main.js` for the JustGage demonstration javascrpt code as described on their repository
page. 
- `bundle.js` is generated with
```shell script
browserify main.js -o bundle.js
```
This results in a single Javascript file that includes all the packages defined in `package.json` that were installed
with  `npm`. For example the JustGage library:
```javascript
  "dependencies": {
    "justgage": "^1.3.2"
  },
```
- See `index.html` loading the `bundle.js` file after the target html elemet is define:
```html
<div id="gauge"></div>
```

---

**References**:
- [JustGage - npm package](https://www.npmjs.com/package/justgage)
- [JUSTGAGE SVG JAVASCRIPT ANIMATED GAUGES](https://www.queness.com/post/12248/justgage-svg-javascript-animated-gauges)
- [A Beginner’s Guide to npm — the Node Package Manager](https://www.sitepoint.com/beginners-guide-node-package-manager/)
- [Downloading and installing packages locally](https://docs.npmjs.com/downloading-and-installing-packages-locally)
- [Getting Started with Browserify](https://scotch.io/tutorials/getting-started-with-browserify)
- [A Beginners Guide to Browserify](https://medium.com/@christopherphillips_88739/a-beginners-guide-to-browserify-1170a724ceb2)
- [Introduction to Browserify](http://blakeembrey.com/articles/2013/09/introduction-to-browserify/)
- [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)
