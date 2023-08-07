"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Arvo-Regular.ttf */ "./src/font/Arvo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Arvo-Bold.ttf */ "./src/font/Arvo-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg */ "./src/img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  overflow: visible;
}
@font-face {
  font-family: Arvo, ;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: Arvo;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: bold;
}
:root {
  --main-blue: rgb(0,167,222);
  --main-orange: rgb(227,177,46);
}

body {
  background-color: black;
  color: white;
  text-align: center;
  font-family:Calibri, 'Trebuchet MS', sans-serif
}

img {
  width: 100%;
  height: auto;
}


.hero {
  display: grid;
  grid-template: 1fr/ 1fr 1fr 1fr 1fr;
  background-color: teal;
  height: 75vh;
  box-sizing: border-box;
}

header {
  height: 25vh;
  box-sizing: border-box;
  grid-column: 1 / 5;
  background-color: black;
  position: sticky;
  top: 0;
  padding: 1rem;
}

h1 {
  font-size: 2.4rem;
  margin: 0.5rem;
  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 6rem;
}

header li {
  text-decoration: underline;
  font-weight: 800;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
}

header.small-nav {
  padding: 0.2rem 1rem;
  font-size: 2rem;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header.small-nav ul{
  gap: 2rem;
}
header.small-nav h1{
  margin: 0.2rem;
}

.about {
  padding: 10vh 15vw;
  background: linear-gradient(0.45turn, var(--main-blue), var(--main-orange));
  color: black;
}

.about img {
  width: 50vw;
  height: auto;
  border-radius: 1rem;
  margin: 1.5rem;
}



.about p {
  font-size: 1.25rem;
}

/* Menu */
.menu {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-repeat: repeat;
  padding: 3rem 0rem;
}

.menu > div > div {
  display: grid;
  /* grid-auto-flow: column; */
  grid-template: 1fr / 20vw 20vw 20vw;
  justify-content: center;
  gap: 3rem;
  color: black;
  /* grid-auto-columns: 1fr; */
}

.menu > div {
  margin: 2.5rem 0rem 5rem 0rem;
}

.menu h3 {
  font-size: 1.5rem;
  margin: 0.5rem;
  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
}

.menu > div > div > div {
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.menu > div:nth-child(even) > div > div:nth-child(odd), 
.menu > div:nth-child(odd) > div > div:nth-child(even)  {
  background-color: var(--main-blue);
}

.menu > div:nth-child(even) > div > div:nth-child(even) , 
.menu > div:nth-child(odd) > div > div:nth-child(odd) {
  background-color: var(--main-orange);
}


/* Contact */

.contact {
  padding: 0rem 0rem 2rem 0rem;
}

.contact label, .contact p {
  font-size: 1.5rem;
  margin: 0.5rem 0rem 1.5rem 0rem;
  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
}
.contact > div{
  display: grid;
  grid-template: 1fr / 1fr 0.1fr 1fr;
  justify-items: center;
  padding: 1rem 5vw;
  gap: 5vw;
}

.contact form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: var(--main-blue);
  padding: 1rem 0rem;
  border-radius: 1rem;
}

.contact textarea {
  font-size: 1.2rem;
  padding: 0.5rem;
}

.contact button {
  font-size: 1.2rem;
  width: 25%;
  padding: 0.2rem;
  border-radius: 0.5rem;
}

.contact > div > div:last-child {
  width: 100%;
  display: grid;
  grid-template: 1fr 1.5fr / 1fr;
  background-color: var(--main-orange);
  padding: 1rem 0rem;
  border-radius: 1rem;
}

.contact .line {
  height: 100%;
  width: 0.2rem;
  background-color: white;
}

.socials {
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
}

.socials img {
  width: 4rem;
  height: 4rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,mBAAmB;EACnB,4CAAiC;AACnC;AACA;EACE,iBAAiB;EACjB,4CAA8B;EAC9B,iBAAiB;AACnB;AACA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB;AACF;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,mCAAmC;EACnC,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,MAAM;EACN,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,mEAAmE;AACrE;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,mEAAmE;AACrE;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mEAAmE;AACrE;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,2EAA2E;EAC3E,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;;;AAIA;EACE,kBAAkB;AACpB;;AAEA,SAAS;AACT;EACE,yDAAyE;EACzE,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,mCAAmC;EACnC,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,mEAAmE;AACrE;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;;EAEE,oCAAoC;AACtC;;;AAGA,YAAY;;AAEZ;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,mEAAmE;AACrE;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,oCAAoC;EACpC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: visible;\r\n}\r\n@font-face {\r\n  font-family: Arvo, ;\r\n  src: url(./font/Arvo-Regular.ttf);\r\n}\r\n@font-face {\r\n  font-family: Arvo;\r\n  src: url(./font/Arvo-Bold.ttf);\r\n  font-weight: bold;\r\n}\r\n:root {\r\n  --main-blue: rgb(0,167,222);\r\n  --main-orange: rgb(227,177,46);\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n  font-family:Calibri, 'Trebuchet MS', sans-serif\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n.hero {\r\n  display: grid;\r\n  grid-template: 1fr/ 1fr 1fr 1fr 1fr;\r\n  background-color: teal;\r\n  height: 75vh;\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n  height: 25vh;\r\n  box-sizing: border-box;\r\n  grid-column: 1 / 5;\r\n  background-color: black;\r\n  position: sticky;\r\n  top: 0;\r\n  padding: 1rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.4rem;\r\n  margin: 0.5rem;\r\n  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 6rem;\r\n}\r\n\r\nheader li {\r\n  text-decoration: underline;\r\n  font-weight: 800;\r\n  cursor: pointer;\r\n  font-size: 1.2rem;\r\n  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;\r\n}\r\n\r\nheader.small-nav {\r\n  padding: 0.2rem 1rem;\r\n  font-size: 2rem;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\nheader.small-nav ul{\r\n  gap: 2rem;\r\n}\r\nheader.small-nav h1{\r\n  margin: 0.2rem;\r\n}\r\n\r\n.about {\r\n  padding: 10vh 15vw;\r\n  background: linear-gradient(0.45turn, var(--main-blue), var(--main-orange));\r\n  color: black;\r\n}\r\n\r\n.about img {\r\n  width: 50vw;\r\n  height: auto;\r\n  border-radius: 1rem;\r\n  margin: 1.5rem;\r\n}\r\n\r\n\r\n\r\n.about p {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n/* Menu */\r\n.menu {\r\n  background-image: url(\"./img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg\");\r\n  background-size: cover;\r\n  background-repeat: repeat;\r\n  padding: 3rem 0rem;\r\n}\r\n\r\n.menu > div > div {\r\n  display: grid;\r\n  /* grid-auto-flow: column; */\r\n  grid-template: 1fr / 20vw 20vw 20vw;\r\n  justify-content: center;\r\n  gap: 3rem;\r\n  color: black;\r\n  /* grid-auto-columns: 1fr; */\r\n}\r\n\r\n.menu > div {\r\n  margin: 2.5rem 0rem 5rem 0rem;\r\n}\r\n\r\n.menu h3 {\r\n  font-size: 1.5rem;\r\n  margin: 0.5rem;\r\n  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;\r\n}\r\n\r\n.menu > div > div > div {\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.menu > div:nth-child(even) > div > div:nth-child(odd), \r\n.menu > div:nth-child(odd) > div > div:nth-child(even)  {\r\n  background-color: var(--main-blue);\r\n}\r\n\r\n.menu > div:nth-child(even) > div > div:nth-child(even) , \r\n.menu > div:nth-child(odd) > div > div:nth-child(odd) {\r\n  background-color: var(--main-orange);\r\n}\r\n\r\n\r\n/* Contact */\r\n\r\n.contact {\r\n  padding: 0rem 0rem 2rem 0rem;\r\n}\r\n\r\n.contact label, .contact p {\r\n  font-size: 1.5rem;\r\n  margin: 0.5rem 0rem 1.5rem 0rem;\r\n  font-family: Arvo, 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;\r\n}\r\n.contact > div{\r\n  display: grid;\r\n  grid-template: 1fr / 1fr 0.1fr 1fr;\r\n  justify-items: center;\r\n  padding: 1rem 5vw;\r\n  gap: 5vw;\r\n}\r\n\r\n.contact form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  background-color: var(--main-blue);\r\n  padding: 1rem 0rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.contact textarea {\r\n  font-size: 1.2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.contact button {\r\n  font-size: 1.2rem;\r\n  width: 25%;\r\n  padding: 0.2rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.contact > div > div:last-child {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template: 1fr 1.5fr / 1fr;\r\n  background-color: var(--main-orange);\r\n  padding: 1rem 0rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.contact .line {\r\n  height: 100%;\r\n  width: 0.2rem;\r\n  background-color: white;\r\n}\r\n\r\n.socials {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.socials img {\r\n  width: 4rem;\r\n  height: 4rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _img_food_prep_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/food-prep.jpg */ "./src/img/food-prep.jpg");


function about(){
  let about = document.createElement("div");
  about.classList.add("about");

  let aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About Us";
  
  let aboutImg = document.createElement("img");
  aboutImg.src = _img_food_prep_jpg__WEBPACK_IMPORTED_MODULE_0__;
  
  let motto = document.createElement("strong");
  motto.textContent = '"Fresh Food and Fresher Smiles"';
  let aboutText = document.createElement("p");
  aboutText.textContent = "FreshEats! is more than just about eating healthy,"
                          + " it's about making you fall in love with healthy food."
                          + " Every dish is meticulously prepared so that it is a"
                          + " masterpiece of color, texture and flavour. Whether it be our smoothies, salads, fruitbowls,"
                          + " or our many other healthy snacks, anything you order is sure to be delicious, revitilizing and nourishing."
                          + " Our restaurants promote a friendly atmosphere, with engaging stories, and fun activities."
                          + " At FreshEats! we do our best to bring ";
  
  aboutText.appendChild(motto);
  about.appendChild(aboutTitle);
  about.appendChild(aboutImg);
  about.appendChild(aboutText);
  
  return about;
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _img_social_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/social/github-mark.svg */ "./src/img/social/github-mark.svg");
/* harmony import */ var _img_social_discord_mark_blue_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/social/discord-mark-blue.svg */ "./src/img/social/discord-mark-blue.svg");
/* harmony import */ var _img_social_email_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/social/email.svg */ "./src/img/social/email.svg");




function contact(){
  let contact = document.createElement("div");
  contact.classList.add("contact");
  let contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact";

  let contactMain = document.createElement("div");

  let contactForm = document.createElement("form");
  let formMsg = document.createElement("label");
  formMsg.textContent = "Leave Us A Message"

  let msgContent = document.createElement("textarea");
  msgContent.rows = 5;
  msgContent.cols = 50;

  let formBtn = document.createElement("button");
  formBtn.textContent = "Submit";
  formBtn.type = "submit";

  contactForm.appendChild(formMsg);
  contactForm.appendChild(msgContent);
  contactForm.appendChild(formBtn);

  let dividingLine = document.createElement("div");
  dividingLine.classList.add("line");

  let socials = document.createElement("div");
  let socialsMsg = document.createElement("p");
  socialsMsg.textContent = "Connect To Our Social Media";

  let socialsIcons = document.createElement("div");
  socialsIcons.classList.add("socials");
  let githubIcon = document.createElement("img");
  githubIcon.src = _img_social_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;

  let discordIcon = document.createElement("img");
  discordIcon.src = _img_social_discord_mark_blue_svg__WEBPACK_IMPORTED_MODULE_1__;

  let emailIcon = document.createElement("img");
  emailIcon.src = _img_social_email_svg__WEBPACK_IMPORTED_MODULE_2__;

  socialsIcons.appendChild(githubIcon);
  socialsIcons.appendChild(discordIcon);
  socialsIcons.appendChild(emailIcon);
  socials.appendChild(socialsMsg);
  socials.appendChild(socialsIcons);

  contactMain.appendChild(contactForm);
  contactMain.appendChild(dividingLine);
  contactMain.appendChild(socials);

  contact.appendChild(contactTitle)
  contact.appendChild(contactMain);
  return contact;
}


/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hero: () => (/* binding */ hero),
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_seed_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/seed.jpg */ "./src/img/seed.jpg");
/* harmony import */ var _img_banana_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/banana.jpg */ "./src/img/banana.jpg");
/* harmony import */ var _img_avocado_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/avocado.jpg */ "./src/img/avocado.jpg");
/* harmony import */ var _img_kiwi_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/kiwi.jpg */ "./src/img/kiwi.jpg");





function hero() {
  //Create Hero Banner
  let hero = document.createElement("div");
  hero.classList.add("hero");

  let seed = document.createElement("div");
  let seedImg = document.createElement("img");
  seedImg.src = _img_seed_jpg__WEBPACK_IMPORTED_MODULE_0__;
  seed.appendChild(seedImg);

  let banana = document.createElement("div");
  let bananaImg = document.createElement("img");
  bananaImg.src = _img_banana_jpg__WEBPACK_IMPORTED_MODULE_1__;
  banana.appendChild(bananaImg);

  let avocado = document.createElement("div");
  let avocadoImg = document.createElement("img");
  avocadoImg.src = _img_avocado_jpg__WEBPACK_IMPORTED_MODULE_2__;
  avocado.appendChild(avocadoImg);

  let kiwi = document.createElement("div");
  let kiwiImg = document.createElement("img");
  kiwiImg.src = _img_kiwi_jpg__WEBPACK_IMPORTED_MODULE_3__;
  kiwi.appendChild(kiwiImg);

  hero.appendChild(seed);
  hero.appendChild(banana);
  hero.appendChild(avocado);
  hero.appendChild(kiwi);
  return hero;
}

function menu(){
  let header = document.createElement("header");
  let title = document.createElement("h1");
  title.textContent = "FreshEats!";

  let navBar = document.createElement("nav");
  let navList = document.createElement("ul");

  let about = document.createElement("li");
  about.textContent = "About";

  let menu = document.createElement("li");
  menu.textContent = "Menu";

  let contact = document.createElement("li");
  contact.textContent = "Contact";

  navList.appendChild(about);
  navList.appendChild(menu);
  navList.appendChild(contact);

  navBar.appendChild(navList);

  header.appendChild(title);
  header.appendChild(navBar)
  
  return header;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _hero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.js */ "./src/hero.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






let header = (0,_hero_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
document.body.appendChild((0,_hero_js__WEBPACK_IMPORTED_MODULE_1__.hero)());
document.body.appendChild(header);

let content = document.createElement("div");
document.body.appendChild(content);

window.onscroll = function(){
  if(document.documentElement.scrollTop > 420){
    header.classList.add("small-nav");
    console.log("TEST");
  }else{
    header.classList.remove("small-nav");
    console.log("END TEST");
  }
}

//Menu
let aboutBtn = document.querySelector("li");
let menuBtn = document.querySelector("li:nth-of-type(2)");
let contactBtn = document.querySelector("li:last-of-type");

aboutBtn.addEventListener("click", () => {
  clearTab();
  content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
})

menuBtn.addEventListener("click", () => {
  clearTab();
  content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
})

contactBtn.addEventListener("click", () => {
  clearTab();
  content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
})


function clearTab() {
  content.replaceChildren();
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_menu_salads_greek_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu/salads/greek.jpg */ "./src/img/menu/salads/greek.jpg");
/* harmony import */ var _img_menu_salads_caesar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu/salads/caesar.jpg */ "./src/img/menu/salads/caesar.jpg");
/* harmony import */ var _img_menu_salads_cobb_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu/salads/cobb.jpg */ "./src/img/menu/salads/cobb.jpg");
/* harmony import */ var _img_menu_fruitbowls_strawberry_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu/fruitbowls/strawberry.jpg */ "./src/img/menu/fruitbowls/strawberry.jpg");
/* harmony import */ var _img_menu_fruitbowls_vanilla_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu/fruitbowls/vanilla.jpg */ "./src/img/menu/fruitbowls/vanilla.jpg");
/* harmony import */ var _img_menu_fruitbowls_blueberry_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu/fruitbowls/blueberry.jpg */ "./src/img/menu/fruitbowls/blueberry.jpg");
/* harmony import */ var _img_menu_sides_candy_apple_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/menu/sides/candy-apple.jpg */ "./src/img/menu/sides/candy-apple.jpg");
/* harmony import */ var _img_menu_sides_fruit_cakes_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/menu/sides/fruit-cakes.jpg */ "./src/img/menu/sides/fruit-cakes.jpg");
/* harmony import */ var _img_menu_sides_Vegetable_chips_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/menu/sides/Vegetable-chips.jpg */ "./src/img/menu/sides/Vegetable-chips.jpg");
/* harmony import */ var _img_menu_drinks_smoothies_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/menu/drinks/smoothies.jpg */ "./src/img/menu/drinks/smoothies.jpg");
/* harmony import */ var _img_menu_drinks_milkshakes_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/menu/drinks/milkshakes.jpg */ "./src/img/menu/drinks/milkshakes.jpg");
/* harmony import */ var _img_menu_drinks_lemon_water_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/menu/drinks/lemon-water.jpg */ "./src/img/menu/drinks/lemon-water.jpg");
//Salad Images




//Fruit Bowl Images




//Sides Images




//Drinks Images




function menu(){
  let menu = document.createElement("div");
  menu.classList.add("menu");
  let menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  
  let salads = document.createElement("div")
  let saladsTitle = document.createElement("h3");
  let saladsMenu = document.createElement("div");
  saladsTitle.textContent = "Salads";
  
  let greek = document.createElement("div");
  let greekTitle = document.createElement("h4");
  greekTitle.textContent = "Greek";
  let greekPrice = document.createElement("div");
  greekPrice.textContent = "$10.50";
  let greekImg = document.createElement("img");
  greekImg.src = _img_menu_salads_greek_jpg__WEBPACK_IMPORTED_MODULE_0__;
  
  greek.appendChild(greekImg);
  greek.appendChild(greekTitle);
  greek.appendChild(greekPrice);
  
  let caesar = document.createElement("div");
  let caesarTitle = document.createElement("h4");
  caesarTitle.textContent = "Caesar";
  let caesarPrice = document.createElement("div");
  caesarPrice.textContent = "$9.79";
  let caesarImg = document.createElement("img");
  caesarImg.src = _img_menu_salads_caesar_jpg__WEBPACK_IMPORTED_MODULE_1__;
  
  caesar.appendChild(caesarImg);
  caesar.appendChild(caesarTitle);
  caesar.appendChild(caesarPrice);
  
  let cobb = document.createElement("div");
  let cobbTitle = document.createElement("h4");
  cobbTitle.textContent = "Cobb";
  let cobbPrice = document.createElement("div");
  cobbPrice.textContent = "$11.20";
  let cobbImg = document.createElement("img");
  cobbImg.src = _img_menu_salads_cobb_jpg__WEBPACK_IMPORTED_MODULE_2__;
  
  cobb.appendChild(cobbImg);
  cobb.appendChild(cobbTitle);
  cobb.appendChild(cobbPrice);
  
  saladsMenu.appendChild(greek);
  saladsMenu.appendChild(caesar);
  saladsMenu.appendChild(cobb);
  salads.appendChild(saladsTitle);
  salads.appendChild(saladsMenu);
  
  let fruitBowls = document.createElement("div");
  let fruitBowlsTitle = document.createElement("h3");
  let fruitBowlsMenu = document.createElement("div");
  fruitBowlsTitle.textContent = "Fruit Bowls";
  
  let strawberryBowl = document.createElement("div");
  let strawberryBowlTitle = document.createElement("h4");
  strawberryBowlTitle.textContent = "Strawberry";
  let strawberryBowlPrice = document.createElement("div");
  strawberryBowlPrice.textContent = "$7.50";
  let strawberryBowlImg = document.createElement("img");
  strawberryBowlImg.src = _img_menu_fruitbowls_strawberry_jpg__WEBPACK_IMPORTED_MODULE_3__;
  
  strawberryBowl.appendChild(strawberryBowlImg);
  strawberryBowl.appendChild(strawberryBowlTitle);
  strawberryBowl.appendChild(strawberryBowlPrice);
  
  let vanillaBowl = document.createElement("div");
  let vanillaBowlTitle = document.createElement("h4");
  vanillaBowlTitle.textContent = "Vanilla";
  let vanillaBowlPrice = document.createElement("div");
  vanillaBowlPrice.textContent = "$6.79";
  let vanillaBowlImg = document.createElement("img");
  vanillaBowlImg.src = _img_menu_fruitbowls_vanilla_jpg__WEBPACK_IMPORTED_MODULE_4__;
  
  vanillaBowl.appendChild(vanillaBowlImg);
  vanillaBowl.appendChild(vanillaBowlTitle);
  vanillaBowl.appendChild(vanillaBowlPrice);
  
  let blueberryBowl = document.createElement("div");
  let blueberryBowlTitle = document.createElement("h4");
  blueberryBowlTitle.textContent = "Blueberry";
  let blueberryBowlPrice = document.createElement("div");
  blueberryBowlPrice.textContent = "$7.20";
  let blueberryBowlImg = document.createElement("img");
  blueberryBowlImg.src = _img_menu_fruitbowls_blueberry_jpg__WEBPACK_IMPORTED_MODULE_5__;

  blueberryBowl.appendChild(blueberryBowlImg);
  blueberryBowl.appendChild(blueberryBowlTitle);
  blueberryBowl.appendChild(blueberryBowlPrice);

  fruitBowlsMenu.appendChild(strawberryBowl);
  fruitBowlsMenu.appendChild(vanillaBowl);
  fruitBowlsMenu.appendChild(blueberryBowl);

  fruitBowls.appendChild(fruitBowlsTitle);
  fruitBowls.appendChild(fruitBowlsMenu);
  
  let sides = document.createElement("div");
  let sidesTtitle = document.createElement("h3");
  let sidesMenu = document.createElement("div");
  sidesTtitle.textContent = "Sides";
  
  let candyApple = document.createElement("div");
  let candyAppleTitle = document.createElement("h4");
  candyAppleTitle.textContent = "Candy Apples";
  let candyApplePrice = document.createElement("div");
  candyApplePrice.textContent = "$2.00";
  let candyAppleImg = document.createElement("img");
  candyAppleImg.src = _img_menu_sides_candy_apple_jpg__WEBPACK_IMPORTED_MODULE_6__;

  candyApple.appendChild(candyAppleImg);
  candyApple.appendChild(candyAppleTitle);
  candyApple.appendChild(candyApplePrice);

  let fruitCakes = document.createElement("div");
  let fruitCakesTitle = document.createElement("h4");
  fruitCakesTitle.textContent = "Fruit Cakes";
  let fruitCakesPrice = document.createElement("div");
  fruitCakesPrice.textContent = "$3.50";
  let fruitCakesImg = document.createElement("img");
  fruitCakesImg.src = _img_menu_sides_fruit_cakes_jpg__WEBPACK_IMPORTED_MODULE_7__;

  fruitCakes.appendChild(fruitCakesImg);
  fruitCakes.appendChild(fruitCakesTitle);
  fruitCakes.appendChild(fruitCakesPrice);

  let vegetableChips = document.createElement("div");
  let vegetableChipsTitle = document.createElement("h4");
  vegetableChipsTitle.textContent = "Vegetable Chips";
  let vegetableChipsPrice = document.createElement("div");
  vegetableChipsPrice.textContent = "$4.25";
  let vegetablesChipsImg = document.createElement("img");
  vegetablesChipsImg.src = _img_menu_sides_Vegetable_chips_jpg__WEBPACK_IMPORTED_MODULE_8__;

  vegetableChips.appendChild(vegetablesChipsImg);
  vegetableChips.appendChild(vegetableChipsTitle);
  vegetableChips.appendChild(vegetableChipsPrice);

  sidesMenu.appendChild(candyApple);
  sidesMenu.appendChild(fruitCakes);
  sidesMenu.appendChild(vegetableChips);
  sides.appendChild(sidesTtitle);
  sides.appendChild(sidesMenu);
  
  let drinks = document.createElement("div");
  let drinksTitle = document.createElement("h3");
  let drinksMenu = document.createElement("div");
  drinksTitle.textContent = "Drinks";
  

  let smoothies = document.createElement("div");
  let smoothiesTitle = document.createElement("h4");
  smoothiesTitle.textContent = "Smoothies";
  let smoothiesPrice = document.createElement("div");
  smoothiesPrice.textContent = "$1.99";
  let smoothiesImg = document.createElement("img");
  smoothiesImg.src = _img_menu_drinks_smoothies_jpg__WEBPACK_IMPORTED_MODULE_9__;

  smoothies.appendChild(smoothiesImg);
  smoothies.appendChild(smoothiesTitle);
  smoothies.appendChild(smoothiesPrice);

  let milkshakes = document.createElement("div");
  let milkshakesTitle = document.createElement("h4");
  milkshakesTitle.textContent = "Milkshakes";
  let milkshakesPrice = document.createElement("div");
  milkshakesPrice.textContent = "$2.29";
  let milkshakesImg = document.createElement("img");
  milkshakesImg.src = _img_menu_drinks_milkshakes_jpg__WEBPACK_IMPORTED_MODULE_10__;

  milkshakes.appendChild(milkshakesImg);
  milkshakes.appendChild(milkshakesTitle);
  milkshakes.appendChild(milkshakesPrice);

  let lemonWater = document.createElement("div");
  let lemonWaterTitle = document.createElement("h4");
  lemonWaterTitle.textContent = "Lemon Water";
  let lemonWaterPrice = document.createElement("div");
  lemonWaterPrice.textContent = "$1.00";
  let lemonWaterImg = document.createElement("img");
  lemonWaterImg.src = _img_menu_drinks_lemon_water_jpg__WEBPACK_IMPORTED_MODULE_11__;

  lemonWater.appendChild(lemonWaterImg);
  lemonWater.appendChild(lemonWaterTitle);
  lemonWater.appendChild(lemonWaterPrice);
  
  drinksMenu.appendChild(smoothies);
  drinksMenu.appendChild(milkshakes);
  drinksMenu.appendChild(lemonWater);

  drinks.appendChild(drinksTitle);
  drinks.appendChild(drinksMenu);
  
  menu.appendChild(menuTitle);
  menu.appendChild(salads);
  menu.appendChild(fruitBowls);
  menu.appendChild(sides);
  menu.appendChild(drinks);
  
  return menu
}


/***/ }),

/***/ "./src/font/Arvo-Bold.ttf":
/*!********************************!*\
  !*** ./src/font/Arvo-Bold.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d67f4cedc80f3f5d262.ttf";

/***/ }),

/***/ "./src/font/Arvo-Regular.ttf":
/*!***********************************!*\
  !*** ./src/font/Arvo-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3d3d53c44db025c4592.ttf";

/***/ }),

/***/ "./src/img/avocado.jpg":
/*!*****************************!*\
  !*** ./src/img/avocado.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da72c4ac800e9dd286a4.jpg";

/***/ }),

/***/ "./src/img/banana.jpg":
/*!****************************!*\
  !*** ./src/img/banana.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f69879ee080cce28c40.jpg";

/***/ }),

/***/ "./src/img/food-prep.jpg":
/*!*******************************!*\
  !*** ./src/img/food-prep.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25b32c9ffd0e4feb79db.jpg";

/***/ }),

/***/ "./src/img/kiwi.jpg":
/*!**************************!*\
  !*** ./src/img/kiwi.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f76364da8c9c5d6397a.jpg";

/***/ }),

/***/ "./src/img/menu/drinks/lemon-water.jpg":
/*!*********************************************!*\
  !*** ./src/img/menu/drinks/lemon-water.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b59fffb6f408d4867bda.jpg";

/***/ }),

/***/ "./src/img/menu/drinks/milkshakes.jpg":
/*!********************************************!*\
  !*** ./src/img/menu/drinks/milkshakes.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3f878b4467afbf62cef.jpg";

/***/ }),

/***/ "./src/img/menu/drinks/smoothies.jpg":
/*!*******************************************!*\
  !*** ./src/img/menu/drinks/smoothies.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80f4388525e7070cee09.jpg";

/***/ }),

/***/ "./src/img/menu/fruitbowls/blueberry.jpg":
/*!***********************************************!*\
  !*** ./src/img/menu/fruitbowls/blueberry.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc4fc15fc0ac037447b3.jpg";

/***/ }),

/***/ "./src/img/menu/fruitbowls/strawberry.jpg":
/*!************************************************!*\
  !*** ./src/img/menu/fruitbowls/strawberry.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e84aef1023d3f3977d2.jpg";

/***/ }),

/***/ "./src/img/menu/fruitbowls/vanilla.jpg":
/*!*********************************************!*\
  !*** ./src/img/menu/fruitbowls/vanilla.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63621934a00b577a0a31.jpg";

/***/ }),

/***/ "./src/img/menu/salads/caesar.jpg":
/*!****************************************!*\
  !*** ./src/img/menu/salads/caesar.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36212fa4ea18960ae7dc.jpg";

/***/ }),

/***/ "./src/img/menu/salads/cobb.jpg":
/*!**************************************!*\
  !*** ./src/img/menu/salads/cobb.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa46ea515f1e1cf1e880.jpg";

/***/ }),

/***/ "./src/img/menu/salads/greek.jpg":
/*!***************************************!*\
  !*** ./src/img/menu/salads/greek.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "181ecfe1e4967714fbc3.jpg";

/***/ }),

/***/ "./src/img/menu/sides/Vegetable-chips.jpg":
/*!************************************************!*\
  !*** ./src/img/menu/sides/Vegetable-chips.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48c8fb546d2cc866d89f.jpg";

/***/ }),

/***/ "./src/img/menu/sides/candy-apple.jpg":
/*!********************************************!*\
  !*** ./src/img/menu/sides/candy-apple.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "209349334b4f59500cff.jpg";

/***/ }),

/***/ "./src/img/menu/sides/fruit-cakes.jpg":
/*!********************************************!*\
  !*** ./src/img/menu/sides/fruit-cakes.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f932815b8627d9101a1d.jpg";

/***/ }),

/***/ "./src/img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7051842f56c4b8703a1e.jpg";

/***/ }),

/***/ "./src/img/seed.jpg":
/*!**************************!*\
  !*** ./src/img/seed.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a29bd6c4766ebb4aa1cc.jpg";

/***/ }),

/***/ "./src/img/social/discord-mark-blue.svg":
/*!**********************************************!*\
  !*** ./src/img/social/discord-mark-blue.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "472d4a510cf2e950c9fc.svg";

/***/ }),

/***/ "./src/img/social/email.svg":
/*!**********************************!*\
  !*** ./src/img/social/email.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bd861d756829b0d3db1.svg";

/***/ }),

/***/ "./src/img/social/github-mark.svg":
/*!****************************************!*\
  !*** ./src/img/social/github-mark.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa18895f6e6c7772cab.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0QyxxSEFBdUM7QUFDbkYsNENBQTRDLDZLQUFtRTtBQUMvRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdFQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvQXJ2by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9BcnZvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS92YWRpbS1rYWlwb3YtX3ZsdnlidWNTZXctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBBcnZvLCA7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IEFydm87XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuOnJvb3Qge1xyXG4gIC0tbWFpbi1ibHVlOiByZ2IoMCwxNjcsMjIyKTtcclxuICAtLW1haW4tb3JhbmdlOiByZ2IoMjI3LDE3Nyw0Nik7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6Q2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4uaGVybyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnIgMWZyIDFmcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gIGhlaWdodDogNzV2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGhlaWdodDogMjV2aDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IEFydm8sICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBBcnZvLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDZyZW07XHJcbn1cclxuXHJcbmhlYWRlciBsaSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC1mYW1pbHk6IEFydm8sICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaGVhZGVyLnNtYWxsLW5hdiB7XHJcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmhlYWRlci5zbWFsbC1uYXYgdWx7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcbmhlYWRlci5zbWFsbC1uYXYgaDF7XHJcbiAgbWFyZ2luOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgcGFkZGluZzogMTB2aCAxNXZ3O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLjQ1dHVybiwgdmFyKC0tbWFpbi1ibHVlKSwgdmFyKC0tbWFpbi1vcmFuZ2UpKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5hYm91dCBpbWcge1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5hYm91dCBwIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi8qIE1lbnUgKi9cclxuLm1lbnUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgcGFkZGluZzogM3JlbSAwcmVtO1xyXG59XHJcblxyXG4ubWVudSA+IGRpdiA+IGRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xyXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDIwdncgMjB2dyAyMHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogM3JlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjsgKi9cclxufVxyXG5cclxuLm1lbnUgPiBkaXYge1xyXG4gIG1hcmdpbjogMi41cmVtIDByZW0gNXJlbSAwcmVtO1xyXG59XHJcblxyXG4ubWVudSBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IEFydm8sICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1lbnUgPiBkaXYgPiBkaXYgPiBkaXYge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tZW51ID4gZGl2Om50aC1jaGlsZChldmVuKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQob2RkKSwgXHJcbi5tZW51ID4gZGl2Om50aC1jaGlsZChvZGQpID4gZGl2ID4gZGl2Om50aC1jaGlsZChldmVuKSAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XHJcbn1cclxuXHJcbi5tZW51ID4gZGl2Om50aC1jaGlsZChldmVuKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoZXZlbikgLCBcclxuLm1lbnUgPiBkaXY6bnRoLWNoaWxkKG9kZCkgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuXHJcbi8qIENvbnRhY3QgKi9cclxuXHJcbi5jb250YWN0IHtcclxuICBwYWRkaW5nOiAwcmVtIDByZW0gMnJlbSAwcmVtO1xyXG59XHJcblxyXG4uY29udGFjdCBsYWJlbCwgLmNvbnRhY3QgcCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW0gMHJlbSAxLjVyZW0gMHJlbTtcclxuICBmb250LWZhbWlseTogQXJ2bywgJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWN0ID4gZGl2e1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDAuMWZyIDFmcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbSA1dnc7XHJcbiAgZ2FwOiA1dnc7XHJcbn1cclxuXHJcbi5jb250YWN0IGZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uY29udGFjdCB0ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdCBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QgPiBkaXYgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAxZnIgMS41ZnIgLyAxZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uY29udGFjdCAubGluZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwLjJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zb2NpYWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uc29jaWFscyBpbWcge1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNENBQWlDO0FBQ25DO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsNENBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyRUFBMkU7RUFDM0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7OztBQUlBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFNBQVM7QUFDVDtFQUNFLHlEQUF5RTtFQUN6RSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOzs7QUFHQSxZQUFZOztBQUVaO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixtRUFBbUU7QUFDckU7QUFDQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcnZvLCA7XFxyXFxuICBzcmM6IHVybCguL2ZvbnQvQXJ2by1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEFydm87XFxyXFxuICBzcmM6IHVybCguL2ZvbnQvQXJ2by1Cb2xkLnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1tYWluLWJsdWU6IHJnYigwLDE2NywyMjIpO1xcclxcbiAgLS1tYWluLW9yYW5nZTogcmdiKDIyNywxNzcsNDYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6Q2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWZcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcclxcbiAgaGVpZ2h0OiA3NXZoO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMjV2aDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IEFydm8sICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcnZvLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDZyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBsaSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcnZvLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlci5zbWFsbC1uYXYge1xcclxcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaGVhZGVyLnNtYWxsLW5hdiB1bHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuaGVhZGVyLnNtYWxsLW5hdiBoMXtcXHJcXG4gIG1hcmdpbjogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgcGFkZGluZzogMTB2aCAxNXZ3O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAuNDV0dXJuLCB2YXIoLS1tYWluLWJsdWUpLCB2YXIoLS1tYWluLW9yYW5nZSkpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgaW1nIHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIG1hcmdpbjogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYWJvdXQgcCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgKi9cXHJcXG4ubWVudSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1nL21lbnUvdmFkaW0ta2FpcG92LV92bHZ5YnVjU2V3LXVuc3BsYXNoLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2ID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMjB2dyAyMHZ3IDIwdnc7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIC8qIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7ICovXFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMi41cmVtIDByZW0gNXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IEFydm8sICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYgPiBkaXYgPiBkaXYge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IGRpdjpudGgtY2hpbGQoZXZlbikgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKG9kZCksIFxcclxcbi5tZW51ID4gZGl2Om50aC1jaGlsZChvZGQpID4gZGl2ID4gZGl2Om50aC1jaGlsZChldmVuKSAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pID4gZGl2ID4gZGl2Om50aC1jaGlsZChldmVuKSAsIFxcclxcbi5tZW51ID4gZGl2Om50aC1jaGlsZChvZGQpID4gZGl2ID4gZGl2Om50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQ29udGFjdCAqL1xcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIHBhZGRpbmc6IDByZW0gMHJlbSAycmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IGxhYmVsLCAuY29udGFjdCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMHJlbSAxLjVyZW0gMHJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcnZvLCAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5jb250YWN0ID4gZGl2e1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAwLjFmciAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDV2dztcXHJcXG4gIGdhcDogNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibHVlKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCA+IGRpdiA+IGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxLjVmciAvIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IC5saW5lIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAwLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWxzIGltZyB7XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRm9vZFByZXAgZnJvbSAnLi9pbWcvZm9vZC1wcmVwLmpwZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpe1xyXG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xyXG5cclxuICBsZXQgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xyXG4gIFxyXG4gIGxldCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYWJvdXRJbWcuc3JjID0gRm9vZFByZXA7XHJcbiAgXHJcbiAgbGV0IG1vdHRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcclxuICBtb3R0by50ZXh0Q29udGVudCA9ICdcIkZyZXNoIEZvb2QgYW5kIEZyZXNoZXIgU21pbGVzXCInO1xyXG4gIGxldCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhYm91dFRleHQudGV4dENvbnRlbnQgPSBcIkZyZXNoRWF0cyEgaXMgbW9yZSB0aGFuIGp1c3QgYWJvdXQgZWF0aW5nIGhlYWx0aHksXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIGl0J3MgYWJvdXQgbWFraW5nIHlvdSBmYWxsIGluIGxvdmUgd2l0aCBoZWFsdGh5IGZvb2QuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIEV2ZXJ5IGRpc2ggaXMgbWV0aWN1bG91c2x5IHByZXBhcmVkIHNvIHRoYXQgaXQgaXMgYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBtYXN0ZXJwaWVjZSBvZiBjb2xvciwgdGV4dHVyZSBhbmQgZmxhdm91ci4gV2hldGhlciBpdCBiZSBvdXIgc21vb3RoaWVzLCBzYWxhZHMsIGZydWl0Ym93bHMsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIG9yIG91ciBtYW55IG90aGVyIGhlYWx0aHkgc25hY2tzLCBhbnl0aGluZyB5b3Ugb3JkZXIgaXMgc3VyZSB0byBiZSBkZWxpY2lvdXMsIHJldml0aWxpemluZyBhbmQgbm91cmlzaGluZy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgT3VyIHJlc3RhdXJhbnRzIHByb21vdGUgYSBmcmllbmRseSBhdG1vc3BoZXJlLCB3aXRoIGVuZ2FnaW5nIHN0b3JpZXMsIGFuZCBmdW4gYWN0aXZpdGllcy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgQXQgRnJlc2hFYXRzISB3ZSBkbyBvdXIgYmVzdCB0byBicmluZyBcIjtcclxuICBcclxuICBhYm91dFRleHQuYXBwZW5kQ2hpbGQobW90dG8pO1xyXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcclxuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xyXG4gIFxyXG4gIHJldHVybiBhYm91dDtcclxufVxyXG4iLCJpbXBvcnQgR2l0aHViIGZyb20gJy4vaW1nL3NvY2lhbC9naXRodWItbWFyay5zdmcnO1xyXG5pbXBvcnQgRGlzY29yZCBmcm9tICcuL2ltZy9zb2NpYWwvZGlzY29yZC1tYXJrLWJsdWUuc3ZnJztcclxuaW1wb3J0IEVtYWlsIGZyb20gJy4vaW1nL3NvY2lhbC9lbWFpbC5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpe1xyXG4gIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gIGxldCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gIGxldCBjb250YWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGxldCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGxldCBmb3JtTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gIGZvcm1Nc2cudGV4dENvbnRlbnQgPSBcIkxlYXZlIFVzIEEgTWVzc2FnZVwiXHJcblxyXG4gIGxldCBtc2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIG1zZ0NvbnRlbnQucm93cyA9IDU7XHJcbiAgbXNnQ29udGVudC5jb2xzID0gNTA7XHJcblxyXG4gIGxldCBmb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBmb3JtQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuICBmb3JtQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG5cclxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtTXNnKTtcclxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtc2dDb250ZW50KTtcclxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtQnRuKTtcclxuXHJcbiAgbGV0IGRpdmlkaW5nTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2aWRpbmdMaW5lLmNsYXNzTGlzdC5hZGQoXCJsaW5lXCIpO1xyXG5cclxuICBsZXQgc29jaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHNvY2lhbHNNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBzb2NpYWxzTXNnLnRleHRDb250ZW50ID0gXCJDb25uZWN0IFRvIE91ciBTb2NpYWwgTWVkaWFcIjtcclxuXHJcbiAgbGV0IHNvY2lhbHNJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc29jaWFsc0ljb25zLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWxzXCIpO1xyXG4gIGxldCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBnaXRodWJJY29uLnNyYyA9IEdpdGh1YjtcclxuXHJcbiAgbGV0IGRpc2NvcmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBkaXNjb3JkSWNvbi5zcmMgPSBEaXNjb3JkO1xyXG5cclxuICBsZXQgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBlbWFpbEljb24uc3JjID0gRW1haWw7XHJcblxyXG4gIHNvY2lhbHNJY29ucy5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcclxuICBzb2NpYWxzSWNvbnMuYXBwZW5kQ2hpbGQoZGlzY29yZEljb24pO1xyXG4gIHNvY2lhbHNJY29ucy5hcHBlbmRDaGlsZChlbWFpbEljb24pO1xyXG4gIHNvY2lhbHMuYXBwZW5kQ2hpbGQoc29jaWFsc01zZyk7XHJcbiAgc29jaWFscy5hcHBlbmRDaGlsZChzb2NpYWxzSWNvbnMpO1xyXG5cclxuICBjb250YWN0TWFpbi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XHJcbiAgY29udGFjdE1haW4uYXBwZW5kQ2hpbGQoZGl2aWRpbmdMaW5lKTtcclxuICBjb250YWN0TWFpbi5hcHBlbmRDaGlsZChzb2NpYWxzKTtcclxuXHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpXHJcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0TWFpbik7XHJcbiAgcmV0dXJuIGNvbnRhY3Q7XHJcbn1cclxuIiwiaW1wb3J0IFNlZWQgZnJvbSAnLi9pbWcvc2VlZC5qcGcnO1xyXG5pbXBvcnQgQmFuYW5hIGZyb20gJy4vaW1nL2JhbmFuYS5qcGcnO1xyXG5pbXBvcnQgQXZvY2FkbyBmcm9tICcuL2ltZy9hdm9jYWRvLmpwZyc7XHJcbmltcG9ydCBLaXdpIGZyb20gJy4vaW1nL2tpd2kuanBnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoZXJvKCkge1xyXG4gIC8vQ3JlYXRlIEhlcm8gQmFubmVyXHJcbiAgbGV0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XHJcblxyXG4gIGxldCBzZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgc2VlZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgc2VlZEltZy5zcmMgPSBTZWVkO1xyXG4gIHNlZWQuYXBwZW5kQ2hpbGQoc2VlZEltZyk7XHJcblxyXG4gIGxldCBiYW5hbmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBiYW5hbmFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGJhbmFuYUltZy5zcmMgPSBCYW5hbmE7XHJcbiAgYmFuYW5hLmFwcGVuZENoaWxkKGJhbmFuYUltZyk7XHJcblxyXG4gIGxldCBhdm9jYWRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgYXZvY2Fkb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYXZvY2Fkb0ltZy5zcmMgPSBBdm9jYWRvO1xyXG4gIGF2b2NhZG8uYXBwZW5kQ2hpbGQoYXZvY2Fkb0ltZyk7XHJcblxyXG4gIGxldCBraXdpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQga2l3aUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAga2l3aUltZy5zcmMgPSBLaXdpO1xyXG4gIGtpd2kuYXBwZW5kQ2hpbGQoa2l3aUltZyk7XHJcblxyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoc2VlZCk7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChiYW5hbmEpO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoYXZvY2Fkbyk7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChraXdpKTtcclxuICByZXR1cm4gaGVybztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnUoKXtcclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkZyZXNoRWF0cyFcIjtcclxuXHJcbiAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgbGV0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcclxuXHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpXHJcbiAgXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge2hlcm8sIG1lbnUgYXMgbmF2fSBmcm9tICcuL2hlcm8uanMnO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5sZXQgaGVhZGVyID0gbmF2KCk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVybygpKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKXtcclxuICBpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNDIwKXtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwic21hbGwtbmF2XCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJURVNUXCIpO1xyXG4gIH1lbHNle1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzbWFsbC1uYXZcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVORCBURVNUXCIpO1xyXG4gIH1cclxufVxyXG5cclxuLy9NZW51XHJcbmxldCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKTtcclxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGk6bnRoLW9mLXR5cGUoMilcIik7XHJcbmxldCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpOmxhc3Qtb2YtdHlwZVwiKTtcclxuXHJcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJUYWIoKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KCkpO1xyXG59KVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyVGFiKCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xyXG59KVxyXG5cclxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyVGFiKCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyVGFiKCkge1xyXG4gIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn0iLCIvL1NhbGFkIEltYWdlc1xyXG5pbXBvcnQgR3JlZWsgZnJvbSAnLi9pbWcvbWVudS9zYWxhZHMvZ3JlZWsuanBnJztcclxuaW1wb3J0IENhZXNhciBmcm9tICcuL2ltZy9tZW51L3NhbGFkcy9jYWVzYXIuanBnJztcclxuaW1wb3J0IENvYmIgZnJvbSAnLi9pbWcvbWVudS9zYWxhZHMvY29iYi5qcGcnO1xyXG5cclxuLy9GcnVpdCBCb3dsIEltYWdlc1xyXG5pbXBvcnQgU3RyYXdiZXJyeVNhbGFkIGZyb20gJy4vaW1nL21lbnUvZnJ1aXRib3dscy9zdHJhd2JlcnJ5LmpwZyc7XHJcbmltcG9ydCBWYW5pbGxhU2FsYWQgZnJvbSAnLi9pbWcvbWVudS9mcnVpdGJvd2xzL3ZhbmlsbGEuanBnJztcclxuaW1wb3J0IEJsdWViZXJyeVNhbGFkIGZyb20gJy4vaW1nL21lbnUvZnJ1aXRib3dscy9ibHVlYmVycnkuanBnJztcclxuXHJcbi8vU2lkZXMgSW1hZ2VzXHJcbmltcG9ydCBDYW5keUFwcGxlcyBmcm9tICcuL2ltZy9tZW51L3NpZGVzL2NhbmR5LWFwcGxlLmpwZyc7XHJcbmltcG9ydCBGcnVpdENha2VzIGZyb20gJy4vaW1nL21lbnUvc2lkZXMvZnJ1aXQtY2FrZXMuanBnJztcclxuaW1wb3J0IFZlZ2V0YWJsZUNoaXBzIGZyb20gJy4vaW1nL21lbnUvc2lkZXMvVmVnZXRhYmxlLWNoaXBzLmpwZyc7XHJcblxyXG4vL0RyaW5rcyBJbWFnZXNcclxuaW1wb3J0IFNtb290aGllcyBmcm9tICcuL2ltZy9tZW51L2RyaW5rcy9zbW9vdGhpZXMuanBnJztcclxuaW1wb3J0IE1pbGtzaGFrZXMgZnJvbSAnLi9pbWcvbWVudS9kcmlua3MvbWlsa3NoYWtlcy5qcGcnO1xyXG5pbXBvcnQgTGVtb25XYXRlciBmcm9tICcuL2ltZy9tZW51L2RyaW5rcy9sZW1vbi13YXRlci5qcGcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpe1xyXG4gIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gIGxldCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgXHJcbiAgbGV0IHNhbGFkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBsZXQgc2FsYWRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbGV0IHNhbGFkc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNhbGFkc1RpdGxlLnRleHRDb250ZW50ID0gXCJTYWxhZHNcIjtcclxuICBcclxuICBsZXQgZ3JlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBncmVla1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGdyZWVrVGl0bGUudGV4dENvbnRlbnQgPSBcIkdyZWVrXCI7XHJcbiAgbGV0IGdyZWVrUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyZWVrUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxMC41MFwiO1xyXG4gIGxldCBncmVla0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZ3JlZWtJbWcuc3JjID0gR3JlZWs7XHJcbiAgXHJcbiAgZ3JlZWsuYXBwZW5kQ2hpbGQoZ3JlZWtJbWcpO1xyXG4gIGdyZWVrLmFwcGVuZENoaWxkKGdyZWVrVGl0bGUpO1xyXG4gIGdyZWVrLmFwcGVuZENoaWxkKGdyZWVrUHJpY2UpO1xyXG4gIFxyXG4gIGxldCBjYWVzYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBjYWVzYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBjYWVzYXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2Flc2FyXCI7XHJcbiAgbGV0IGNhZXNhclByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYWVzYXJQcmljZS50ZXh0Q29udGVudCA9IFwiJDkuNzlcIjtcclxuICBsZXQgY2Flc2FySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjYWVzYXJJbWcuc3JjID0gQ2Flc2FyO1xyXG4gIFxyXG4gIGNhZXNhci5hcHBlbmRDaGlsZChjYWVzYXJJbWcpO1xyXG4gIGNhZXNhci5hcHBlbmRDaGlsZChjYWVzYXJUaXRsZSk7XHJcbiAgY2Flc2FyLmFwcGVuZENoaWxkKGNhZXNhclByaWNlKTtcclxuICBcclxuICBsZXQgY29iYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGNvYmJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBjb2JiVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvYmJcIjtcclxuICBsZXQgY29iYlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb2JiUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxMS4yMFwiO1xyXG4gIGxldCBjb2JiSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb2JiSW1nLnNyYyA9IENvYmI7XHJcbiAgXHJcbiAgY29iYi5hcHBlbmRDaGlsZChjb2JiSW1nKTtcclxuICBjb2JiLmFwcGVuZENoaWxkKGNvYmJUaXRsZSk7XHJcbiAgY29iYi5hcHBlbmRDaGlsZChjb2JiUHJpY2UpO1xyXG4gIFxyXG4gIHNhbGFkc01lbnUuYXBwZW5kQ2hpbGQoZ3JlZWspO1xyXG4gIHNhbGFkc01lbnUuYXBwZW5kQ2hpbGQoY2Flc2FyKTtcclxuICBzYWxhZHNNZW51LmFwcGVuZENoaWxkKGNvYmIpO1xyXG4gIHNhbGFkcy5hcHBlbmRDaGlsZChzYWxhZHNUaXRsZSk7XHJcbiAgc2FsYWRzLmFwcGVuZENoaWxkKHNhbGFkc01lbnUpO1xyXG4gIFxyXG4gIGxldCBmcnVpdEJvd2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgZnJ1aXRCb3dsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGxldCBmcnVpdEJvd2xzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZnJ1aXRCb3dsc1RpdGxlLnRleHRDb250ZW50ID0gXCJGcnVpdCBCb3dsc1wiO1xyXG4gIFxyXG4gIGxldCBzdHJhd2JlcnJ5Qm93bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHN0cmF3YmVycnlCb3dsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgc3RyYXdiZXJyeUJvd2xUaXRsZS50ZXh0Q29udGVudCA9IFwiU3RyYXdiZXJyeVwiO1xyXG4gIGxldCBzdHJhd2JlcnJ5Qm93bFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzdHJhd2JlcnJ5Qm93bFByaWNlLnRleHRDb250ZW50ID0gXCIkNy41MFwiO1xyXG4gIGxldCBzdHJhd2JlcnJ5Qm93bEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgc3RyYXdiZXJyeUJvd2xJbWcuc3JjID0gU3RyYXdiZXJyeVNhbGFkO1xyXG4gIFxyXG4gIHN0cmF3YmVycnlCb3dsLmFwcGVuZENoaWxkKHN0cmF3YmVycnlCb3dsSW1nKTtcclxuICBzdHJhd2JlcnJ5Qm93bC5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5Qm93bFRpdGxlKTtcclxuICBzdHJhd2JlcnJ5Qm93bC5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5Qm93bFByaWNlKTtcclxuICBcclxuICBsZXQgdmFuaWxsYUJvd2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCB2YW5pbGxhQm93bFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHZhbmlsbGFCb3dsVGl0bGUudGV4dENvbnRlbnQgPSBcIlZhbmlsbGFcIjtcclxuICBsZXQgdmFuaWxsYUJvd2xQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdmFuaWxsYUJvd2xQcmljZS50ZXh0Q29udGVudCA9IFwiJDYuNzlcIjtcclxuICBsZXQgdmFuaWxsYUJvd2xJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIHZhbmlsbGFCb3dsSW1nLnNyYyA9IFZhbmlsbGFTYWxhZDtcclxuICBcclxuICB2YW5pbGxhQm93bC5hcHBlbmRDaGlsZCh2YW5pbGxhQm93bEltZyk7XHJcbiAgdmFuaWxsYUJvd2wuYXBwZW5kQ2hpbGQodmFuaWxsYUJvd2xUaXRsZSk7XHJcbiAgdmFuaWxsYUJvd2wuYXBwZW5kQ2hpbGQodmFuaWxsYUJvd2xQcmljZSk7XHJcbiAgXHJcbiAgbGV0IGJsdWViZXJyeUJvd2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBibHVlYmVycnlCb3dsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgYmx1ZWJlcnJ5Qm93bFRpdGxlLnRleHRDb250ZW50ID0gXCJCbHVlYmVycnlcIjtcclxuICBsZXQgYmx1ZWJlcnJ5Qm93bFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBibHVlYmVycnlCb3dsUHJpY2UudGV4dENvbnRlbnQgPSBcIiQ3LjIwXCI7XHJcbiAgbGV0IGJsdWViZXJyeUJvd2xJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGJsdWViZXJyeUJvd2xJbWcuc3JjID0gQmx1ZWJlcnJ5U2FsYWQ7XHJcblxyXG4gIGJsdWViZXJyeUJvd2wuYXBwZW5kQ2hpbGQoYmx1ZWJlcnJ5Qm93bEltZyk7XHJcbiAgYmx1ZWJlcnJ5Qm93bC5hcHBlbmRDaGlsZChibHVlYmVycnlCb3dsVGl0bGUpO1xyXG4gIGJsdWViZXJyeUJvd2wuYXBwZW5kQ2hpbGQoYmx1ZWJlcnJ5Qm93bFByaWNlKTtcclxuXHJcbiAgZnJ1aXRCb3dsc01lbnUuYXBwZW5kQ2hpbGQoc3RyYXdiZXJyeUJvd2wpO1xyXG4gIGZydWl0Qm93bHNNZW51LmFwcGVuZENoaWxkKHZhbmlsbGFCb3dsKTtcclxuICBmcnVpdEJvd2xzTWVudS5hcHBlbmRDaGlsZChibHVlYmVycnlCb3dsKTtcclxuXHJcbiAgZnJ1aXRCb3dscy5hcHBlbmRDaGlsZChmcnVpdEJvd2xzVGl0bGUpO1xyXG4gIGZydWl0Qm93bHMuYXBwZW5kQ2hpbGQoZnJ1aXRCb3dsc01lbnUpO1xyXG4gIFxyXG4gIGxldCBzaWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHNpZGVzVHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGxldCBzaWRlc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNpZGVzVHRpdGxlLnRleHRDb250ZW50ID0gXCJTaWRlc1wiO1xyXG4gIFxyXG4gIGxldCBjYW5keUFwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgY2FuZHlBcHBsZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGNhbmR5QXBwbGVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2FuZHkgQXBwbGVzXCI7XHJcbiAgbGV0IGNhbmR5QXBwbGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FuZHlBcHBsZVByaWNlLnRleHRDb250ZW50ID0gXCIkMi4wMFwiO1xyXG4gIGxldCBjYW5keUFwcGxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjYW5keUFwcGxlSW1nLnNyYyA9IENhbmR5QXBwbGVzO1xyXG5cclxuICBjYW5keUFwcGxlLmFwcGVuZENoaWxkKGNhbmR5QXBwbGVJbWcpO1xyXG4gIGNhbmR5QXBwbGUuYXBwZW5kQ2hpbGQoY2FuZHlBcHBsZVRpdGxlKTtcclxuICBjYW5keUFwcGxlLmFwcGVuZENoaWxkKGNhbmR5QXBwbGVQcmljZSk7XHJcblxyXG4gIGxldCBmcnVpdENha2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgZnJ1aXRDYWtlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGZydWl0Q2FrZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiRnJ1aXQgQ2FrZXNcIjtcclxuICBsZXQgZnJ1aXRDYWtlc1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmcnVpdENha2VzUHJpY2UudGV4dENvbnRlbnQgPSBcIiQzLjUwXCI7XHJcbiAgbGV0IGZydWl0Q2FrZXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGZydWl0Q2FrZXNJbWcuc3JjID0gRnJ1aXRDYWtlcztcclxuXHJcbiAgZnJ1aXRDYWtlcy5hcHBlbmRDaGlsZChmcnVpdENha2VzSW1nKTtcclxuICBmcnVpdENha2VzLmFwcGVuZENoaWxkKGZydWl0Q2FrZXNUaXRsZSk7XHJcbiAgZnJ1aXRDYWtlcy5hcHBlbmRDaGlsZChmcnVpdENha2VzUHJpY2UpO1xyXG5cclxuICBsZXQgdmVnZXRhYmxlQ2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCB2ZWdldGFibGVDaGlwc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHZlZ2V0YWJsZUNoaXBzVGl0bGUudGV4dENvbnRlbnQgPSBcIlZlZ2V0YWJsZSBDaGlwc1wiO1xyXG4gIGxldCB2ZWdldGFibGVDaGlwc1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB2ZWdldGFibGVDaGlwc1ByaWNlLnRleHRDb250ZW50ID0gXCIkNC4yNVwiO1xyXG4gIGxldCB2ZWdldGFibGVzQ2hpcHNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIHZlZ2V0YWJsZXNDaGlwc0ltZy5zcmMgPSBWZWdldGFibGVDaGlwcztcclxuXHJcbiAgdmVnZXRhYmxlQ2hpcHMuYXBwZW5kQ2hpbGQodmVnZXRhYmxlc0NoaXBzSW1nKTtcclxuICB2ZWdldGFibGVDaGlwcy5hcHBlbmRDaGlsZCh2ZWdldGFibGVDaGlwc1RpdGxlKTtcclxuICB2ZWdldGFibGVDaGlwcy5hcHBlbmRDaGlsZCh2ZWdldGFibGVDaGlwc1ByaWNlKTtcclxuXHJcbiAgc2lkZXNNZW51LmFwcGVuZENoaWxkKGNhbmR5QXBwbGUpO1xyXG4gIHNpZGVzTWVudS5hcHBlbmRDaGlsZChmcnVpdENha2VzKTtcclxuICBzaWRlc01lbnUuYXBwZW5kQ2hpbGQodmVnZXRhYmxlQ2hpcHMpO1xyXG4gIHNpZGVzLmFwcGVuZENoaWxkKHNpZGVzVHRpdGxlKTtcclxuICBzaWRlcy5hcHBlbmRDaGlsZChzaWRlc01lbnUpO1xyXG4gIFxyXG4gIGxldCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBkcmlua3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBsZXQgZHJpbmtzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZHJpbmtzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xyXG4gIFxyXG5cclxuICBsZXQgc21vb3RoaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgc21vb3RoaWVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgc21vb3RoaWVzVGl0bGUudGV4dENvbnRlbnQgPSBcIlNtb290aGllc1wiO1xyXG4gIGxldCBzbW9vdGhpZXNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc21vb3RoaWVzUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxLjk5XCI7XHJcbiAgbGV0IHNtb290aGllc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgc21vb3RoaWVzSW1nLnNyYyA9IFNtb290aGllcztcclxuXHJcbiAgc21vb3RoaWVzLmFwcGVuZENoaWxkKHNtb290aGllc0ltZyk7XHJcbiAgc21vb3RoaWVzLmFwcGVuZENoaWxkKHNtb290aGllc1RpdGxlKTtcclxuICBzbW9vdGhpZXMuYXBwZW5kQ2hpbGQoc21vb3RoaWVzUHJpY2UpO1xyXG5cclxuICBsZXQgbWlsa3NoYWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IG1pbGtzaGFrZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBtaWxrc2hha2VzVGl0bGUudGV4dENvbnRlbnQgPSBcIk1pbGtzaGFrZXNcIjtcclxuICBsZXQgbWlsa3NoYWtlc1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtaWxrc2hha2VzUHJpY2UudGV4dENvbnRlbnQgPSBcIiQyLjI5XCI7XHJcbiAgbGV0IG1pbGtzaGFrZXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1pbGtzaGFrZXNJbWcuc3JjID0gTWlsa3NoYWtlcztcclxuXHJcbiAgbWlsa3NoYWtlcy5hcHBlbmRDaGlsZChtaWxrc2hha2VzSW1nKTtcclxuICBtaWxrc2hha2VzLmFwcGVuZENoaWxkKG1pbGtzaGFrZXNUaXRsZSk7XHJcbiAgbWlsa3NoYWtlcy5hcHBlbmRDaGlsZChtaWxrc2hha2VzUHJpY2UpO1xyXG5cclxuICBsZXQgbGVtb25XYXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGxlbW9uV2F0ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBsZW1vbldhdGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkxlbW9uIFdhdGVyXCI7XHJcbiAgbGV0IGxlbW9uV2F0ZXJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGVtb25XYXRlclByaWNlLnRleHRDb250ZW50ID0gXCIkMS4wMFwiO1xyXG4gIGxldCBsZW1vbldhdGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBsZW1vbldhdGVySW1nLnNyYyA9IExlbW9uV2F0ZXI7XHJcblxyXG4gIGxlbW9uV2F0ZXIuYXBwZW5kQ2hpbGQobGVtb25XYXRlckltZyk7XHJcbiAgbGVtb25XYXRlci5hcHBlbmRDaGlsZChsZW1vbldhdGVyVGl0bGUpO1xyXG4gIGxlbW9uV2F0ZXIuYXBwZW5kQ2hpbGQobGVtb25XYXRlclByaWNlKTtcclxuICBcclxuICBkcmlua3NNZW51LmFwcGVuZENoaWxkKHNtb290aGllcyk7XHJcbiAgZHJpbmtzTWVudS5hcHBlbmRDaGlsZChtaWxrc2hha2VzKTtcclxuICBkcmlua3NNZW51LmFwcGVuZENoaWxkKGxlbW9uV2F0ZXIpO1xyXG5cclxuICBkcmlua3MuYXBwZW5kQ2hpbGQoZHJpbmtzVGl0bGUpO1xyXG4gIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NNZW51KTtcclxuICBcclxuICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChzYWxhZHMpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZnJ1aXRCb3dscyk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChzaWRlcyk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChkcmlua3MpO1xyXG4gIFxyXG4gIHJldHVybiBtZW51XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9