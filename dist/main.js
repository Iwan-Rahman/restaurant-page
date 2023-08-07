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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg */ "./src/img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  overflow: visible;
}

:root {
  --main-blue: rgb(0,167,222);
  --main-orange: rgb(227,177,46);
}

body {
  background-color: black;
  color: white;
  text-align: center;
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
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
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
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,mCAAmC;EACnC,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,MAAM;EACN,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,2EAA2E;EAC3E,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;;;AAIA;EACE,kBAAkB;AACpB;;AAEA,SAAS;AACT;EACE,yDAAyE;EACzE,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,mCAAmC;EACnC,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;;EAEE,oCAAoC;AACtC;;;AAGA,YAAY;;AAEZ;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,iBAAiB;EACjB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,oCAAoC;EACpC,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: visible;\r\n}\r\n\r\n:root {\r\n  --main-blue: rgb(0,167,222);\r\n  --main-orange: rgb(227,177,46);\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n.hero {\r\n  display: grid;\r\n  grid-template: 1fr/ 1fr 1fr 1fr 1fr;\r\n  background-color: teal;\r\n  height: 75vh;\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n  height: 25vh;\r\n  box-sizing: border-box;\r\n  grid-column: 1 / 5;\r\n  background-color: black;\r\n  position: sticky;\r\n  top: 0;\r\n  padding: 1rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.4rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 6rem;\r\n}\r\n\r\nheader li {\r\n  text-decoration: underline;\r\n  font-weight: 800;\r\n  cursor: pointer;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nheader.small-nav {\r\n  padding: 0.2rem 1rem;\r\n  font-size: 2rem;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\nheader.small-nav ul{\r\n  gap: 2rem;\r\n}\r\nheader.small-nav h1{\r\n  margin: 0.2rem;\r\n}\r\n\r\n.about {\r\n  padding: 10vh 15vw;\r\n  background: linear-gradient(0.45turn, var(--main-blue), var(--main-orange));\r\n  color: black;\r\n}\r\n\r\n.about img {\r\n  width: 50vw;\r\n  height: auto;\r\n  border-radius: 1rem;\r\n  margin: 1.5rem;\r\n}\r\n\r\n\r\n\r\n.about p {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n/* Menu */\r\n.menu {\r\n  background-image: url(\"./img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg\");\r\n  background-size: cover;\r\n  background-repeat: repeat;\r\n  padding: 3rem 0rem;\r\n}\r\n\r\n.menu > div > div {\r\n  display: grid;\r\n  /* grid-auto-flow: column; */\r\n  grid-template: 1fr / 20vw 20vw 20vw;\r\n  justify-content: center;\r\n  gap: 3rem;\r\n  color: black;\r\n  /* grid-auto-columns: 1fr; */\r\n}\r\n\r\n.menu > div {\r\n  margin: 2.5rem 0rem 5rem 0rem;\r\n}\r\n\r\n.menu h3 {\r\n  font-size: 1.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.menu > div > div > div {\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.menu > div:nth-child(even) > div > div:nth-child(odd), \r\n.menu > div:nth-child(odd) > div > div:nth-child(even)  {\r\n  background-color: var(--main-blue);\r\n}\r\n\r\n.menu > div:nth-child(even) > div > div:nth-child(even) , \r\n.menu > div:nth-child(odd) > div > div:nth-child(odd) {\r\n  background-color: var(--main-orange);\r\n}\r\n\r\n\r\n/* Contact */\r\n\r\n.contact {\r\n  padding: 0rem 0rem 2rem 0rem;\r\n}\r\n\r\n.contact label, .contact p {\r\n  font-size: 1.5rem;\r\n  margin: 0.5rem 0rem 1.5rem 0rem;\r\n}\r\n.contact > div{\r\n  display: grid;\r\n  grid-template: 1fr / 1fr 0.1fr 1fr;\r\n  justify-items: center;\r\n  padding: 1rem 5vw;\r\n  gap: 5vw;\r\n}\r\n\r\n.contact form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  background-color: var(--main-blue);\r\n  padding: 1rem 0rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.contact textarea {\r\n  font-size: 1.2rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.contact button {\r\n  font-size: 1.2rem;\r\n  width: 25%;\r\n  padding: 0.2rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.contact > div > div:last-child {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template: 1fr 1.5fr / 1fr;\r\n  background-color: var(--main-orange);\r\n  padding: 1rem 0rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.contact .line {\r\n  height: 100%;\r\n  width: 0.2rem;\r\n  background-color: white;\r\n}\r\n\r\n.socials {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.socials img {\r\n  width: 4rem;\r\n  height: 4rem;\r\n}"],"sourceRoot":""}]);
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
                          + " At EatFresh! we do our best to bring ";
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNktBQW1FO0FBQy9HLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFNBQVMsS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZ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aEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZXJvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS92YWRpbS1rYWlwb3YtX3ZsdnlidWNTZXctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tbWFpbi1ibHVlOiByZ2IoMCwxNjcsMjIyKTtcclxuICAtLW1haW4tb3JhbmdlOiByZ2IoMjI3LDE3Nyw0Nik7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmhlcm8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyIDFmciAxZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBoZWlnaHQ6IDI1dmg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBncmlkLWNvbHVtbjogMSAvIDU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDZyZW07XHJcbn1cclxuXHJcbmhlYWRlciBsaSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbmhlYWRlci5zbWFsbC1uYXYge1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5oZWFkZXIuc21hbGwtbmF2IHVse1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5oZWFkZXIuc21hbGwtbmF2IGgxe1xyXG4gIG1hcmdpbjogMC4ycmVtO1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gIHBhZGRpbmc6IDEwdmggMTV2dztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC40NXR1cm4sIHZhcigtLW1haW4tYmx1ZSksIHZhcigtLW1haW4tb3JhbmdlKSk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYWJvdXQgaW1nIHtcclxuICB3aWR0aDogNTB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBtYXJnaW46IDEuNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4uYWJvdXQgcCB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4vKiBNZW51ICovXHJcbi5tZW51IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDNyZW0gMHJlbTtcclxufVxyXG5cclxuLm1lbnUgPiBkaXYgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyogZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgKi9cclxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAyMHZ3IDIwdncgMjB2dztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDNyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC8qIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7ICovXHJcbn1cclxuXHJcbi5tZW51ID4gZGl2IHtcclxuICBtYXJnaW46IDIuNXJlbSAwcmVtIDVyZW0gMHJlbTtcclxufVxyXG5cclxuLm1lbnUgaDMge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG59XHJcblxyXG4ubWVudSA+IGRpdiA+IGRpdiA+IGRpdiB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLm1lbnUgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pID4gZGl2ID4gZGl2Om50aC1jaGlsZChvZGQpLCBcclxuLm1lbnUgPiBkaXY6bnRoLWNoaWxkKG9kZCkgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibHVlKTtcclxufVxyXG5cclxuLm1lbnUgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pID4gZGl2ID4gZGl2Om50aC1jaGlsZChldmVuKSAsIFxyXG4ubWVudSA+IGRpdjpudGgtY2hpbGQob2RkKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG5cclxuLyogQ29udGFjdCAqL1xyXG5cclxuLmNvbnRhY3Qge1xyXG4gIHBhZGRpbmc6IDByZW0gMHJlbSAycmVtIDByZW07XHJcbn1cclxuXHJcbi5jb250YWN0IGxhYmVsLCAuY29udGFjdCBwIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW46IDAuNXJlbSAwcmVtIDEuNXJlbSAwcmVtO1xyXG59XHJcbi5jb250YWN0ID4gZGl2e1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDAuMWZyIDFmcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbSA1dnc7XHJcbiAgZ2FwOiA1dnc7XHJcbn1cclxuXHJcbi5jb250YWN0IGZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uY29udGFjdCB0ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4uY29udGFjdCBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QgPiBkaXYgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAxZnIgMS41ZnIgLyAxZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uY29udGFjdCAubGluZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwLjJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zb2NpYWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uc29jaWFscyBpbWcge1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJFQUEyRTtFQUMzRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOzs7O0FBSUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UseURBQXlFO0VBQ3pFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7OztBQUdBLFlBQVk7O0FBRVo7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1tYWluLWJsdWU6IHJnYigwLDE2NywyMjIpO1xcclxcbiAgLS1tYWluLW9yYW5nZTogcmdiKDIyNywxNzcsNDYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxyXFxuICBoZWlnaHQ6IDc1dmg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDZyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBsaSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLnNtYWxsLW5hdiB7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5oZWFkZXIuc21hbGwtbmF2IHVse1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5oZWFkZXIuc21hbGwtbmF2IGgxe1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICBwYWRkaW5nOiAxMHZoIDE1dnc7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC40NXR1cm4sIHZhcigtLW1haW4tYmx1ZSksIHZhcigtLW1haW4tb3JhbmdlKSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBpbWcge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5hYm91dCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSAqL1xcclxcbi5tZW51IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcvbWVudS92YWRpbS1rYWlwb3YtX3ZsdnlidWNTZXctdW5zcGxhc2guanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIC8qIGdyaWQtYXV0by1mbG93OiBjb2x1bW47ICovXFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAyMHZ3IDIwdncgMjB2dztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYge1xcclxcbiAgbWFyZ2luOiAyLjVyZW0gMHJlbSA1cmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2ID4gZGl2ID4gZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pID4gZGl2ID4gZGl2Om50aC1jaGlsZChvZGQpLCBcXHJcXG4ubWVudSA+IGRpdjpudGgtY2hpbGQob2RkKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoZXZlbikgIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2Om50aC1jaGlsZChldmVuKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoZXZlbikgLCBcXHJcXG4ubWVudSA+IGRpdjpudGgtY2hpbGQob2RkKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIENvbnRhY3QgKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBwYWRkaW5nOiAwcmVtIDByZW0gMnJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBsYWJlbCwgLmNvbnRhY3QgcCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDByZW0gMS41cmVtIDByZW07XFxyXFxufVxcclxcbi5jb250YWN0ID4gZGl2e1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAwLjFmciAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDV2dztcXHJcXG4gIGdhcDogNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ibHVlKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCA+IGRpdiA+IGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxLjVmciAvIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IC5saW5lIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAwLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWxzIGltZyB7XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRm9vZFByZXAgZnJvbSAnLi9pbWcvZm9vZC1wcmVwLmpwZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpe1xyXG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xyXG5cclxuICBsZXQgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xyXG4gIFxyXG4gIGxldCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYWJvdXRJbWcuc3JjID0gRm9vZFByZXA7XHJcbiAgXHJcbiAgbGV0IG1vdHRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcclxuICBtb3R0by50ZXh0Q29udGVudCA9ICdcIkZyZXNoIEZvb2QgYW5kIEZyZXNoZXIgU21pbGVzXCInO1xyXG4gIGxldCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhYm91dFRleHQudGV4dENvbnRlbnQgPSBcIkZyZXNoRWF0cyEgaXMgbW9yZSB0aGFuIGp1c3QgYWJvdXQgZWF0aW5nIGhlYWx0aHksXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIGl0J3MgYWJvdXQgbWFraW5nIHlvdSBmYWxsIGluIGxvdmUgd2l0aCBoZWFsdGh5IGZvb2QuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIEV2ZXJ5IGRpc2ggaXMgbWV0aWN1bG91c2x5IHByZXBhcmVkIHNvIHRoYXQgaXQgaXMgYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBtYXN0ZXJwaWVjZSBvZiBjb2xvciwgdGV4dHVyZSBhbmQgZmxhdm91ci4gV2hldGhlciBpdCBiZSBvdXIgc21vb3RoaWVzLCBzYWxhZHMsIGZydWl0Ym93bHMsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIG9yIG91ciBtYW55IG90aGVyIGhlYWx0aHkgc25hY2tzLCBhbnl0aGluZyB5b3Ugb3JkZXIgaXMgc3VyZSB0byBiZSBkZWxpY2lvdXMsIHJldml0aWxpemluZyBhbmQgbm91cmlzaGluZy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgT3VyIHJlc3RhdXJhbnRzIHByb21vdGUgYSBmcmllbmRseSBhdG1vc3BoZXJlLCB3aXRoIGVuZ2FnaW5nIHN0b3JpZXMsIGFuZCBmdW4gYWN0aXZpdGllcy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgQXQgRWF0RnJlc2ghIHdlIGRvIG91ciBiZXN0IHRvIGJyaW5nIFwiO1xyXG4gIFxyXG4gIGFib3V0VGV4dC5hcHBlbmRDaGlsZChtb3R0byk7XHJcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRUaXRsZSk7XHJcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpO1xyXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XHJcbiAgXHJcbiAgcmV0dXJuIGFib3V0O1xyXG59XHJcbiIsImltcG9ydCBHaXRodWIgZnJvbSAnLi9pbWcvc29jaWFsL2dpdGh1Yi1tYXJrLnN2Zyc7XHJcbmltcG9ydCBEaXNjb3JkIGZyb20gJy4vaW1nL3NvY2lhbC9kaXNjb3JkLW1hcmstYmx1ZS5zdmcnO1xyXG5pbXBvcnQgRW1haWwgZnJvbSAnLi9pbWcvc29jaWFsL2VtYWlsLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCl7XHJcbiAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcbiAgbGV0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgbGV0IGNvbnRhY3RNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgbGV0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgbGV0IGZvcm1Nc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgZm9ybU1zZy50ZXh0Q29udGVudCA9IFwiTGVhdmUgVXMgQSBNZXNzYWdlXCJcclxuXHJcbiAgbGV0IG1zZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgbXNnQ29udGVudC5yb3dzID0gNTtcclxuICBtc2dDb250ZW50LmNvbHMgPSA1MDtcclxuXHJcbiAgbGV0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGZvcm1CdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gIGZvcm1CdG4udHlwZSA9IFwic3VibWl0XCI7XHJcblxyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Nc2cpO1xyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1zZ0NvbnRlbnQpO1xyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1CdG4pO1xyXG5cclxuICBsZXQgZGl2aWRpbmdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXZpZGluZ0xpbmUuY2xhc3NMaXN0LmFkZChcImxpbmVcIik7XHJcblxyXG4gIGxldCBzb2NpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgc29jaWFsc01zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHNvY2lhbHNNc2cudGV4dENvbnRlbnQgPSBcIkNvbm5lY3QgVG8gT3VyIFNvY2lhbCBNZWRpYVwiO1xyXG5cclxuICBsZXQgc29jaWFsc0ljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzb2NpYWxzSWNvbnMuY2xhc3NMaXN0LmFkZChcInNvY2lhbHNcIik7XHJcbiAgbGV0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGdpdGh1Ykljb24uc3JjID0gR2l0aHViO1xyXG5cclxuICBsZXQgZGlzY29yZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGRpc2NvcmRJY29uLnNyYyA9IERpc2NvcmQ7XHJcblxyXG4gIGxldCBlbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGVtYWlsSWNvbi5zcmMgPSBFbWFpbDtcclxuXHJcbiAgc29jaWFsc0ljb25zLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xyXG4gIHNvY2lhbHNJY29ucy5hcHBlbmRDaGlsZChkaXNjb3JkSWNvbik7XHJcbiAgc29jaWFsc0ljb25zLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcbiAgc29jaWFscy5hcHBlbmRDaGlsZChzb2NpYWxzTXNnKTtcclxuICBzb2NpYWxzLmFwcGVuZENoaWxkKHNvY2lhbHNJY29ucyk7XHJcblxyXG4gIGNvbnRhY3RNYWluLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcclxuICBjb250YWN0TWFpbi5hcHBlbmRDaGlsZChkaXZpZGluZ0xpbmUpO1xyXG4gIGNvbnRhY3RNYWluLmFwcGVuZENoaWxkKHNvY2lhbHMpO1xyXG5cclxuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSlcclxuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RNYWluKTtcclxuICByZXR1cm4gY29udGFjdDtcclxufVxyXG4iLCJpbXBvcnQgU2VlZCBmcm9tICcuL2ltZy9zZWVkLmpwZyc7XHJcbmltcG9ydCBCYW5hbmEgZnJvbSAnLi9pbWcvYmFuYW5hLmpwZyc7XHJcbmltcG9ydCBBdm9jYWRvIGZyb20gJy4vaW1nL2F2b2NhZG8uanBnJztcclxuaW1wb3J0IEtpd2kgZnJvbSAnLi9pbWcva2l3aS5qcGcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhlcm8oKSB7XHJcbiAgLy9DcmVhdGUgSGVybyBCYW5uZXJcclxuICBsZXQgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcclxuXHJcbiAgbGV0IHNlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBzZWVkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBzZWVkSW1nLnNyYyA9IFNlZWQ7XHJcbiAgc2VlZC5hcHBlbmRDaGlsZChzZWVkSW1nKTtcclxuXHJcbiAgbGV0IGJhbmFuYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGJhbmFuYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYmFuYW5hSW1nLnNyYyA9IEJhbmFuYTtcclxuICBiYW5hbmEuYXBwZW5kQ2hpbGQoYmFuYW5hSW1nKTtcclxuXHJcbiAgbGV0IGF2b2NhZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBhdm9jYWRvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBhdm9jYWRvSW1nLnNyYyA9IEF2b2NhZG87XHJcbiAgYXZvY2Fkby5hcHBlbmRDaGlsZChhdm9jYWRvSW1nKTtcclxuXHJcbiAgbGV0IGtpd2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBraXdpSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBraXdpSW1nLnNyYyA9IEtpd2k7XHJcbiAga2l3aS5hcHBlbmRDaGlsZChraXdpSW1nKTtcclxuXHJcbiAgaGVyby5hcHBlbmRDaGlsZChzZWVkKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGJhbmFuYSk7XHJcbiAgaGVyby5hcHBlbmRDaGlsZChhdm9jYWRvKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGtpd2kpO1xyXG4gIHJldHVybiBoZXJvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVudSgpe1xyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiRnJlc2hFYXRzIVwiO1xyXG5cclxuICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBsZXQgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG5cclxuICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblxyXG4gIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChhYm91dCk7XHJcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChtZW51KTtcclxuICBuYXZMaXN0LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5cclxuICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcilcclxuICBcclxuICByZXR1cm4gaGVhZGVyO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7aGVybywgbWVudSBhcyBuYXZ9IGZyb20gJy4vaGVyby5qcyc7XHJcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcclxuXHJcbmxldCBoZWFkZXIgPSBuYXYoKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZXJvKCkpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpe1xyXG4gIGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA0MjApe1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC1uYXZcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRFU1RcIik7XHJcbiAgfWVsc2V7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInNtYWxsLW5hdlwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRU5EIFRFU1RcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vL01lbnVcclxubGV0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpXCIpO1xyXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaTpudGgtb2YtdHlwZSgyKVwiKTtcclxubGV0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGk6bGFzdC1vZi10eXBlXCIpO1xyXG5cclxuYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhclRhYigpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XHJcbn0pXHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJUYWIoKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XHJcbn0pXHJcblxyXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJUYWIoKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJUYWIoKSB7XHJcbiAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcclxufSIsIi8vU2FsYWQgSW1hZ2VzXHJcbmltcG9ydCBHcmVlayBmcm9tICcuL2ltZy9tZW51L3NhbGFkcy9ncmVlay5qcGcnO1xyXG5pbXBvcnQgQ2Flc2FyIGZyb20gJy4vaW1nL21lbnUvc2FsYWRzL2NhZXNhci5qcGcnO1xyXG5pbXBvcnQgQ29iYiBmcm9tICcuL2ltZy9tZW51L3NhbGFkcy9jb2JiLmpwZyc7XHJcblxyXG4vL0ZydWl0IEJvd2wgSW1hZ2VzXHJcbmltcG9ydCBTdHJhd2JlcnJ5U2FsYWQgZnJvbSAnLi9pbWcvbWVudS9mcnVpdGJvd2xzL3N0cmF3YmVycnkuanBnJztcclxuaW1wb3J0IFZhbmlsbGFTYWxhZCBmcm9tICcuL2ltZy9tZW51L2ZydWl0Ym93bHMvdmFuaWxsYS5qcGcnO1xyXG5pbXBvcnQgQmx1ZWJlcnJ5U2FsYWQgZnJvbSAnLi9pbWcvbWVudS9mcnVpdGJvd2xzL2JsdWViZXJyeS5qcGcnO1xyXG5cclxuLy9TaWRlcyBJbWFnZXNcclxuaW1wb3J0IENhbmR5QXBwbGVzIGZyb20gJy4vaW1nL21lbnUvc2lkZXMvY2FuZHktYXBwbGUuanBnJztcclxuaW1wb3J0IEZydWl0Q2FrZXMgZnJvbSAnLi9pbWcvbWVudS9zaWRlcy9mcnVpdC1jYWtlcy5qcGcnO1xyXG5pbXBvcnQgVmVnZXRhYmxlQ2hpcHMgZnJvbSAnLi9pbWcvbWVudS9zaWRlcy9WZWdldGFibGUtY2hpcHMuanBnJztcclxuXHJcbi8vRHJpbmtzIEltYWdlc1xyXG5pbXBvcnQgU21vb3RoaWVzIGZyb20gJy4vaW1nL21lbnUvZHJpbmtzL3Ntb290aGllcy5qcGcnO1xyXG5pbXBvcnQgTWlsa3NoYWtlcyBmcm9tICcuL2ltZy9tZW51L2RyaW5rcy9taWxrc2hha2VzLmpwZyc7XHJcbmltcG9ydCBMZW1vbldhdGVyIGZyb20gJy4vaW1nL21lbnUvZHJpbmtzL2xlbW9uLXdhdGVyLmpwZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgbGV0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBcclxuICBsZXQgc2FsYWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGxldCBzYWxhZHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBsZXQgc2FsYWRzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2FsYWRzVGl0bGUudGV4dENvbnRlbnQgPSBcIlNhbGFkc1wiO1xyXG4gIFxyXG4gIGxldCBncmVlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGdyZWVrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgZ3JlZWtUaXRsZS50ZXh0Q29udGVudCA9IFwiR3JlZWtcIjtcclxuICBsZXQgZ3JlZWtQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZ3JlZWtQcmljZS50ZXh0Q29udGVudCA9IFwiJDEwLjUwXCI7XHJcbiAgbGV0IGdyZWVrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBncmVla0ltZy5zcmMgPSBHcmVlaztcclxuICBcclxuICBncmVlay5hcHBlbmRDaGlsZChncmVla0ltZyk7XHJcbiAgZ3JlZWsuYXBwZW5kQ2hpbGQoZ3JlZWtUaXRsZSk7XHJcbiAgZ3JlZWsuYXBwZW5kQ2hpbGQoZ3JlZWtQcmljZSk7XHJcbiAgXHJcbiAgbGV0IGNhZXNhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGNhZXNhclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGNhZXNhclRpdGxlLnRleHRDb250ZW50ID0gXCJDYWVzYXJcIjtcclxuICBsZXQgY2Flc2FyUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhZXNhclByaWNlLnRleHRDb250ZW50ID0gXCIkOS43OVwiO1xyXG4gIGxldCBjYWVzYXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNhZXNhckltZy5zcmMgPSBDYWVzYXI7XHJcbiAgXHJcbiAgY2Flc2FyLmFwcGVuZENoaWxkKGNhZXNhckltZyk7XHJcbiAgY2Flc2FyLmFwcGVuZENoaWxkKGNhZXNhclRpdGxlKTtcclxuICBjYWVzYXIuYXBwZW5kQ2hpbGQoY2Flc2FyUHJpY2UpO1xyXG4gIFxyXG4gIGxldCBjb2JiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgY29iYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGNvYmJUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29iYlwiO1xyXG4gIGxldCBjb2JiUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvYmJQcmljZS50ZXh0Q29udGVudCA9IFwiJDExLjIwXCI7XHJcbiAgbGV0IGNvYmJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvYmJJbWcuc3JjID0gQ29iYjtcclxuICBcclxuICBjb2JiLmFwcGVuZENoaWxkKGNvYmJJbWcpO1xyXG4gIGNvYmIuYXBwZW5kQ2hpbGQoY29iYlRpdGxlKTtcclxuICBjb2JiLmFwcGVuZENoaWxkKGNvYmJQcmljZSk7XHJcbiAgXHJcbiAgc2FsYWRzTWVudS5hcHBlbmRDaGlsZChncmVlayk7XHJcbiAgc2FsYWRzTWVudS5hcHBlbmRDaGlsZChjYWVzYXIpO1xyXG4gIHNhbGFkc01lbnUuYXBwZW5kQ2hpbGQoY29iYik7XHJcbiAgc2FsYWRzLmFwcGVuZENoaWxkKHNhbGFkc1RpdGxlKTtcclxuICBzYWxhZHMuYXBwZW5kQ2hpbGQoc2FsYWRzTWVudSk7XHJcbiAgXHJcbiAgbGV0IGZydWl0Qm93bHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBmcnVpdEJvd2xzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbGV0IGZydWl0Qm93bHNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmcnVpdEJvd2xzVGl0bGUudGV4dENvbnRlbnQgPSBcIkZydWl0IEJvd2xzXCI7XHJcbiAgXHJcbiAgbGV0IHN0cmF3YmVycnlCb3dsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgc3RyYXdiZXJyeUJvd2xUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBzdHJhd2JlcnJ5Qm93bFRpdGxlLnRleHRDb250ZW50ID0gXCJTdHJhd2JlcnJ5XCI7XHJcbiAgbGV0IHN0cmF3YmVycnlCb3dsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHN0cmF3YmVycnlCb3dsUHJpY2UudGV4dENvbnRlbnQgPSBcIiQ3LjUwXCI7XHJcbiAgbGV0IHN0cmF3YmVycnlCb3dsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBzdHJhd2JlcnJ5Qm93bEltZy5zcmMgPSBTdHJhd2JlcnJ5U2FsYWQ7XHJcbiAgXHJcbiAgc3RyYXdiZXJyeUJvd2wuYXBwZW5kQ2hpbGQoc3RyYXdiZXJyeUJvd2xJbWcpO1xyXG4gIHN0cmF3YmVycnlCb3dsLmFwcGVuZENoaWxkKHN0cmF3YmVycnlCb3dsVGl0bGUpO1xyXG4gIHN0cmF3YmVycnlCb3dsLmFwcGVuZENoaWxkKHN0cmF3YmVycnlCb3dsUHJpY2UpO1xyXG4gIFxyXG4gIGxldCB2YW5pbGxhQm93bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHZhbmlsbGFCb3dsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgdmFuaWxsYUJvd2xUaXRsZS50ZXh0Q29udGVudCA9IFwiVmFuaWxsYVwiO1xyXG4gIGxldCB2YW5pbGxhQm93bFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB2YW5pbGxhQm93bFByaWNlLnRleHRDb250ZW50ID0gXCIkNi43OVwiO1xyXG4gIGxldCB2YW5pbGxhQm93bEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgdmFuaWxsYUJvd2xJbWcuc3JjID0gVmFuaWxsYVNhbGFkO1xyXG4gIFxyXG4gIHZhbmlsbGFCb3dsLmFwcGVuZENoaWxkKHZhbmlsbGFCb3dsSW1nKTtcclxuICB2YW5pbGxhQm93bC5hcHBlbmRDaGlsZCh2YW5pbGxhQm93bFRpdGxlKTtcclxuICB2YW5pbGxhQm93bC5hcHBlbmRDaGlsZCh2YW5pbGxhQm93bFByaWNlKTtcclxuICBcclxuICBsZXQgYmx1ZWJlcnJ5Qm93bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGJsdWViZXJyeUJvd2xUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBibHVlYmVycnlCb3dsVGl0bGUudGV4dENvbnRlbnQgPSBcIkJsdWViZXJyeVwiO1xyXG4gIGxldCBibHVlYmVycnlCb3dsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJsdWViZXJyeUJvd2xQcmljZS50ZXh0Q29udGVudCA9IFwiJDcuMjBcIjtcclxuICBsZXQgYmx1ZWJlcnJ5Qm93bEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgYmx1ZWJlcnJ5Qm93bEltZy5zcmMgPSBCbHVlYmVycnlTYWxhZDtcclxuXHJcbiAgYmx1ZWJlcnJ5Qm93bC5hcHBlbmRDaGlsZChibHVlYmVycnlCb3dsSW1nKTtcclxuICBibHVlYmVycnlCb3dsLmFwcGVuZENoaWxkKGJsdWViZXJyeUJvd2xUaXRsZSk7XHJcbiAgYmx1ZWJlcnJ5Qm93bC5hcHBlbmRDaGlsZChibHVlYmVycnlCb3dsUHJpY2UpO1xyXG5cclxuICBmcnVpdEJvd2xzTWVudS5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5Qm93bCk7XHJcbiAgZnJ1aXRCb3dsc01lbnUuYXBwZW5kQ2hpbGQodmFuaWxsYUJvd2wpO1xyXG4gIGZydWl0Qm93bHNNZW51LmFwcGVuZENoaWxkKGJsdWViZXJyeUJvd2wpO1xyXG5cclxuICBmcnVpdEJvd2xzLmFwcGVuZENoaWxkKGZydWl0Qm93bHNUaXRsZSk7XHJcbiAgZnJ1aXRCb3dscy5hcHBlbmRDaGlsZChmcnVpdEJvd2xzTWVudSk7XHJcbiAgXHJcbiAgbGV0IHNpZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgc2lkZXNUdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbGV0IHNpZGVzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2lkZXNUdGl0bGUudGV4dENvbnRlbnQgPSBcIlNpZGVzXCI7XHJcbiAgXHJcbiAgbGV0IGNhbmR5QXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBjYW5keUFwcGxlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgY2FuZHlBcHBsZVRpdGxlLnRleHRDb250ZW50ID0gXCJDYW5keSBBcHBsZXNcIjtcclxuICBsZXQgY2FuZHlBcHBsZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYW5keUFwcGxlUHJpY2UudGV4dENvbnRlbnQgPSBcIiQyLjAwXCI7XHJcbiAgbGV0IGNhbmR5QXBwbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNhbmR5QXBwbGVJbWcuc3JjID0gQ2FuZHlBcHBsZXM7XHJcblxyXG4gIGNhbmR5QXBwbGUuYXBwZW5kQ2hpbGQoY2FuZHlBcHBsZUltZyk7XHJcbiAgY2FuZHlBcHBsZS5hcHBlbmRDaGlsZChjYW5keUFwcGxlVGl0bGUpO1xyXG4gIGNhbmR5QXBwbGUuYXBwZW5kQ2hpbGQoY2FuZHlBcHBsZVByaWNlKTtcclxuXHJcbiAgbGV0IGZydWl0Q2FrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBmcnVpdENha2VzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgZnJ1aXRDYWtlc1RpdGxlLnRleHRDb250ZW50ID0gXCJGcnVpdCBDYWtlc1wiO1xyXG4gIGxldCBmcnVpdENha2VzUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZydWl0Q2FrZXNQcmljZS50ZXh0Q29udGVudCA9IFwiJDMuNTBcIjtcclxuICBsZXQgZnJ1aXRDYWtlc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgZnJ1aXRDYWtlc0ltZy5zcmMgPSBGcnVpdENha2VzO1xyXG5cclxuICBmcnVpdENha2VzLmFwcGVuZENoaWxkKGZydWl0Q2FrZXNJbWcpO1xyXG4gIGZydWl0Q2FrZXMuYXBwZW5kQ2hpbGQoZnJ1aXRDYWtlc1RpdGxlKTtcclxuICBmcnVpdENha2VzLmFwcGVuZENoaWxkKGZydWl0Q2FrZXNQcmljZSk7XHJcblxyXG4gIGxldCB2ZWdldGFibGVDaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHZlZ2V0YWJsZUNoaXBzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgdmVnZXRhYmxlQ2hpcHNUaXRsZS50ZXh0Q29udGVudCA9IFwiVmVnZXRhYmxlIENoaXBzXCI7XHJcbiAgbGV0IHZlZ2V0YWJsZUNoaXBzUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHZlZ2V0YWJsZUNoaXBzUHJpY2UudGV4dENvbnRlbnQgPSBcIiQ0LjI1XCI7XHJcbiAgbGV0IHZlZ2V0YWJsZXNDaGlwc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgdmVnZXRhYmxlc0NoaXBzSW1nLnNyYyA9IFZlZ2V0YWJsZUNoaXBzO1xyXG5cclxuICB2ZWdldGFibGVDaGlwcy5hcHBlbmRDaGlsZCh2ZWdldGFibGVzQ2hpcHNJbWcpO1xyXG4gIHZlZ2V0YWJsZUNoaXBzLmFwcGVuZENoaWxkKHZlZ2V0YWJsZUNoaXBzVGl0bGUpO1xyXG4gIHZlZ2V0YWJsZUNoaXBzLmFwcGVuZENoaWxkKHZlZ2V0YWJsZUNoaXBzUHJpY2UpO1xyXG5cclxuICBzaWRlc01lbnUuYXBwZW5kQ2hpbGQoY2FuZHlBcHBsZSk7XHJcbiAgc2lkZXNNZW51LmFwcGVuZENoaWxkKGZydWl0Q2FrZXMpO1xyXG4gIHNpZGVzTWVudS5hcHBlbmRDaGlsZCh2ZWdldGFibGVDaGlwcyk7XHJcbiAgc2lkZXMuYXBwZW5kQ2hpbGQoc2lkZXNUdGl0bGUpO1xyXG4gIHNpZGVzLmFwcGVuZENoaWxkKHNpZGVzTWVudSk7XHJcbiAgXHJcbiAgbGV0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGRyaW5rc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGxldCBkcmlua3NNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkcmlua3NUaXRsZS50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XHJcbiAgXHJcblxyXG4gIGxldCBzbW9vdGhpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBzbW9vdGhpZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBzbW9vdGhpZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiU21vb3RoaWVzXCI7XHJcbiAgbGV0IHNtb290aGllc1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbW9vdGhpZXNQcmljZS50ZXh0Q29udGVudCA9IFwiJDEuOTlcIjtcclxuICBsZXQgc21vb3RoaWVzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBzbW9vdGhpZXNJbWcuc3JjID0gU21vb3RoaWVzO1xyXG5cclxuICBzbW9vdGhpZXMuYXBwZW5kQ2hpbGQoc21vb3RoaWVzSW1nKTtcclxuICBzbW9vdGhpZXMuYXBwZW5kQ2hpbGQoc21vb3RoaWVzVGl0bGUpO1xyXG4gIHNtb290aGllcy5hcHBlbmRDaGlsZChzbW9vdGhpZXNQcmljZSk7XHJcblxyXG4gIGxldCBtaWxrc2hha2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgbWlsa3NoYWtlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIG1pbGtzaGFrZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiTWlsa3NoYWtlc1wiO1xyXG4gIGxldCBtaWxrc2hha2VzUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1pbGtzaGFrZXNQcmljZS50ZXh0Q29udGVudCA9IFwiJDIuMjlcIjtcclxuICBsZXQgbWlsa3NoYWtlc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbWlsa3NoYWtlc0ltZy5zcmMgPSBNaWxrc2hha2VzO1xyXG5cclxuICBtaWxrc2hha2VzLmFwcGVuZENoaWxkKG1pbGtzaGFrZXNJbWcpO1xyXG4gIG1pbGtzaGFrZXMuYXBwZW5kQ2hpbGQobWlsa3NoYWtlc1RpdGxlKTtcclxuICBtaWxrc2hha2VzLmFwcGVuZENoaWxkKG1pbGtzaGFrZXNQcmljZSk7XHJcblxyXG4gIGxldCBsZW1vbldhdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgbGVtb25XYXRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGxlbW9uV2F0ZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTGVtb24gV2F0ZXJcIjtcclxuICBsZXQgbGVtb25XYXRlclByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZW1vbldhdGVyUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxLjAwXCI7XHJcbiAgbGV0IGxlbW9uV2F0ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxlbW9uV2F0ZXJJbWcuc3JjID0gTGVtb25XYXRlcjtcclxuXHJcbiAgbGVtb25XYXRlci5hcHBlbmRDaGlsZChsZW1vbldhdGVySW1nKTtcclxuICBsZW1vbldhdGVyLmFwcGVuZENoaWxkKGxlbW9uV2F0ZXJUaXRsZSk7XHJcbiAgbGVtb25XYXRlci5hcHBlbmRDaGlsZChsZW1vbldhdGVyUHJpY2UpO1xyXG4gIFxyXG4gIGRyaW5rc01lbnUuYXBwZW5kQ2hpbGQoc21vb3RoaWVzKTtcclxuICBkcmlua3NNZW51LmFwcGVuZENoaWxkKG1pbGtzaGFrZXMpO1xyXG4gIGRyaW5rc01lbnUuYXBwZW5kQ2hpbGQobGVtb25XYXRlcik7XHJcblxyXG4gIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NUaXRsZSk7XHJcbiAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc01lbnUpO1xyXG4gIFxyXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICBtZW51LmFwcGVuZENoaWxkKHNhbGFkcyk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChmcnVpdEJvd2xzKTtcclxuICBtZW51LmFwcGVuZENoaWxkKHNpZGVzKTtcclxuICBtZW51LmFwcGVuZENoaWxkKGRyaW5rcyk7XHJcbiAgXHJcbiAgcmV0dXJuIG1lbnVcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=