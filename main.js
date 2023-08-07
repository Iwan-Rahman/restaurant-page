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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;;AAGA;EACE,aAAa;EACb,mCAAmC;EACnC,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,MAAM;EACN,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,2EAA2E;EAC3E,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;;;AAIA;EACE,kBAAkB;AACpB;;AAEA,SAAS;AACT;EACE,yDAAyE;EACzE,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,mCAAmC;EACnC,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA;;EAEE,oCAAoC;AACtC","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: visible;\r\n}\r\n\r\n:root {\r\n  --main-blue: rgb(0,167,222);\r\n  --main-orange: rgb(227,177,46);\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n.hero {\r\n  display: grid;\r\n  grid-template: 1fr/ 1fr 1fr 1fr 1fr;\r\n  background-color: teal;\r\n  height: 75vh;\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n  height: 25vh;\r\n  box-sizing: border-box;\r\n  grid-column: 1 / 5;\r\n  background-color: black;\r\n  position: sticky;\r\n  top: 0;\r\n  padding: 1rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.4rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 6rem;\r\n}\r\n\r\nheader li {\r\n  text-decoration: underline;\r\n  font-weight: 800;\r\n  cursor: pointer;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nheader.small-nav {\r\n  padding: 0.2rem 1rem;\r\n  font-size: 2rem;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\nheader.small-nav ul{\r\n  gap: 2rem;\r\n}\r\nheader.small-nav h1{\r\n  margin: 0.2rem;\r\n}\r\n\r\n.about {\r\n  padding: 10vh 15vw;\r\n  background: linear-gradient(0.45turn, var(--main-blue), var(--main-orange));\r\n  color: black;\r\n}\r\n\r\n.about img {\r\n  width: 50vw;\r\n  height: auto;\r\n  border-radius: 1rem;\r\n  margin: 1.5rem;\r\n}\r\n\r\n\r\n\r\n.about p {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n/* Menu */\r\n.menu {\r\n  background-image: url(\"./img/menu/vadim-kaipov-_vlvybucSew-unsplash.jpg\");\r\n  background-size: cover;\r\n  background-repeat: repeat;\r\n  padding: 3rem 0rem;\r\n}\r\n\r\n.menu > div > div {\r\n  display: grid;\r\n  /* grid-auto-flow: column; */\r\n  grid-template: 1fr / 20vw 20vw 20vw;\r\n  justify-content: center;\r\n  gap: 3rem;\r\n  color: black;\r\n  /* grid-auto-columns: 1fr; */\r\n}\r\n\r\n.menu > div {\r\n  margin: 2.5rem 0rem 5rem 0rem;\r\n}\r\n\r\n.menu h3 {\r\n  font-size: 1.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.menu > div > div > div {\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.menu > div:nth-child(even) > div > div:nth-child(odd), \r\n.menu > div:nth-child(odd) > div > div:nth-child(even)  {\r\n  background-color: var(--main-blue);\r\n}\r\n\r\n.menu > div:nth-child(even) > div > div:nth-child(even) , \r\n.menu > div:nth-child(odd) > div > div:nth-child(odd) {\r\n  background-color: var(--main-orange);\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _img_social_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/social/github-mark.svg */ "./src/img/social/github-mark.svg");
/* harmony import */ var _img_social_email_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/social/email.svg */ "./src/img/social/email.svg");




function contact(){
    let contact = document.createElement("div");

  let contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact";

  let contactMain = document.createElement("div");

  let contactForm = document.createElement("form");
  let formMsg = document.createElement("label");
  formMsg.textContent = "Leave Us A Message"

  let msgTitle = document.createElement("input[type='text']");
  let msgContent = document.createElement("textarea");
  msgContent.rows = 10;
  msgContent.cols = 80;

  let formBtn = document.createElement("button[type='submit']");

  contactForm.appendChild(formMsg);
  contactForm.appendChild(msgTitle);
  contactForm.appendChild(msgContent);
  contactForm.appendChild(formBtn);

  let socials = document.createElement("div");
  let socialsMsg = document.createElement("p");
  socialsMsg.textContent = "Connect To Our Social Media";

  let githubIcon = document.createElement("img");
  githubIcon.src = _img_social_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;

  let discordIcon = document.createElement("img");
  discordIcon.src = _img_social_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__;

  let emailIcon = document.createElement("img");
  emailIcon.src = _img_social_email_svg__WEBPACK_IMPORTED_MODULE_1__;

  socials.appendChild(socialsMsg);
  socials.appendChild(githubIcon);
  socials.appendChild(discordIcon);
  socials.appendChild(emailIcon);

  contact.appendChild(contactForm);
  contact.appendChild(socials);

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

window.onscroll = function(){
  if(document.documentElement.scrollTop > 420){
    header.classList.add("small-nav");
    console.log("TEST");
  }else{
    header.classList.remove("small-nav");
    console.log("END TEST");
  }
}

// document.body.appendChild(about());
// document.body.appendChild(menu());
document.body.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
alert("Hello Webpack");

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

/***/ "./src/img/social/email.svg":
/*!**********************************!*\
  !*** ./src/img/social/email.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7a364af28c1fc7cbb30.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsdUJBQXVCLDZEQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0VBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL21lbnUvdmFkaW0ta2FpcG92LV92bHZ5YnVjU2V3LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLW1haW4tYmx1ZTogcmdiKDAsMTY3LDIyMik7XHJcbiAgLS1tYWluLW9yYW5nZTogcmdiKDIyNywxNzcsNDYpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcbi5oZXJvIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDFmciAxZnIgMWZyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIuNHJlbTtcclxuICBtYXJnaW46IDAuNXJlbTtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNnJlbTtcclxufVxyXG5cclxuaGVhZGVyIGxpIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuaGVhZGVyLnNtYWxsLW5hdiB7XHJcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmhlYWRlci5zbWFsbC1uYXYgdWx7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcbmhlYWRlci5zbWFsbC1uYXYgaDF7XHJcbiAgbWFyZ2luOiAwLjJyZW07XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgcGFkZGluZzogMTB2aCAxNXZ3O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLjQ1dHVybiwgdmFyKC0tbWFpbi1ibHVlKSwgdmFyKC0tbWFpbi1vcmFuZ2UpKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5hYm91dCBpbWcge1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIG1hcmdpbjogMS41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5hYm91dCBwIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbi8qIE1lbnUgKi9cclxuLm1lbnUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgcGFkZGluZzogM3JlbSAwcmVtO1xyXG59XHJcblxyXG4ubWVudSA+IGRpdiA+IGRpdiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICAvKiBncmlkLWF1dG8tZmxvdzogY29sdW1uOyAqL1xyXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDIwdncgMjB2dyAyMHZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogM3JlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjsgKi9cclxufVxyXG5cclxuLm1lbnUgPiBkaXYge1xyXG4gIG1hcmdpbjogMi41cmVtIDByZW0gNXJlbSAwcmVtO1xyXG59XHJcblxyXG4ubWVudSBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tZW51ID4gZGl2ID4gZGl2ID4gZGl2IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4ubWVudSA+IGRpdjpudGgtY2hpbGQoZXZlbikgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKG9kZCksIFxyXG4ubWVudSA+IGRpdjpudGgtY2hpbGQob2RkKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoZXZlbikgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJsdWUpO1xyXG59XHJcblxyXG4ubWVudSA+IGRpdjpudGgtY2hpbGQoZXZlbikgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pICwgXHJcbi5tZW51ID4gZGl2Om50aC1jaGlsZChvZGQpID4gZGl2ID4gZGl2Om50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbn1cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJFQUEyRTtFQUMzRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOzs7O0FBSUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UseURBQXlFO0VBQ3pFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWFpbi1ibHVlOiByZ2IoMCwxNjcsMjIyKTtcXHJcXG4gIC0tbWFpbi1vcmFuZ2U6IHJnYigyMjcsMTc3LDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xcclxcbiAgaGVpZ2h0OiA3NXZoO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogMjV2aDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDZyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBsaSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLnNtYWxsLW5hdiB7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5oZWFkZXIuc21hbGwtbmF2IHVse1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5oZWFkZXIuc21hbGwtbmF2IGgxe1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICBwYWRkaW5nOiAxMHZoIDE1dnc7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMC40NXR1cm4sIHZhcigtLW1haW4tYmx1ZSksIHZhcigtLW1haW4tb3JhbmdlKSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBpbWcge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5hYm91dCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSAqL1xcclxcbi5tZW51IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcvbWVudS92YWRpbS1rYWlwb3YtX3ZsdnlidWNTZXctdW5zcGxhc2guanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIC8qIGdyaWQtYXV0by1mbG93OiBjb2x1bW47ICovXFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAyMHZ3IDIwdncgMjB2dztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgLyogZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYge1xcclxcbiAgbWFyZ2luOiAyLjVyZW0gMHJlbSA1cmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2ID4gZGl2ID4gZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXY6bnRoLWNoaWxkKGV2ZW4pID4gZGl2ID4gZGl2Om50aC1jaGlsZChvZGQpLCBcXHJcXG4ubWVudSA+IGRpdjpudGgtY2hpbGQob2RkKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoZXZlbikgIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2Om50aC1jaGlsZChldmVuKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQoZXZlbikgLCBcXHJcXG4ubWVudSA+IGRpdjpudGgtY2hpbGQob2RkKSA+IGRpdiA+IGRpdjpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEZvb2RQcmVwIGZyb20gJy4vaW1nL2Zvb2QtcHJlcC5qcGcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKXtcclxuICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcclxuXHJcbiAgbGV0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcclxuICBcclxuICBsZXQgYWJvdXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGFib3V0SW1nLnNyYyA9IEZvb2RQcmVwO1xyXG4gIFxyXG4gIGxldCBtb3R0byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XHJcbiAgbW90dG8udGV4dENvbnRlbnQgPSAnXCJGcmVzaCBGb29kIGFuZCBGcmVzaGVyIFNtaWxlc1wiJztcclxuICBsZXQgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWJvdXRUZXh0LnRleHRDb250ZW50ID0gXCJGcmVzaEVhdHMhIGlzIG1vcmUgdGhhbiBqdXN0IGFib3V0IGVhdGluZyBoZWFsdGh5LFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBpdCdzIGFib3V0IG1ha2luZyB5b3UgZmFsbCBpbiBsb3ZlIHdpdGggaGVhbHRoeSBmb29kLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBFdmVyeSBkaXNoIGlzIG1ldGljdWxvdXNseSBwcmVwYXJlZCBzbyB0aGF0IGl0IGlzIGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgbWFzdGVycGllY2Ugb2YgY29sb3IsIHRleHR1cmUgYW5kIGZsYXZvdXIuIFdoZXRoZXIgaXQgYmUgb3VyIHNtb290aGllcywgc2FsYWRzLCBmcnVpdGJvd2xzLFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBvciBvdXIgbWFueSBvdGhlciBoZWFsdGh5IHNuYWNrcywgYW55dGhpbmcgeW91IG9yZGVyIGlzIHN1cmUgdG8gYmUgZGVsaWNpb3VzLCByZXZpdGlsaXppbmcgYW5kIG5vdXJpc2hpbmcuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIE91ciByZXN0YXVyYW50cyBwcm9tb3RlIGEgZnJpZW5kbHkgYXRtb3NwaGVyZSwgd2l0aCBlbmdhZ2luZyBzdG9yaWVzLCBhbmQgZnVuIGFjdGl2aXRpZXMuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIEF0IEVhdEZyZXNoISB3ZSBkbyBvdXIgYmVzdCB0byBicmluZyBcIjtcclxuICBcclxuICBhYm91dFRleHQuYXBwZW5kQ2hpbGQobW90dG8pO1xyXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcclxuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xyXG4gIFxyXG4gIHJldHVybiBhYm91dDtcclxufVxyXG4iLCJpbXBvcnQgR2l0aHViIGZyb20gJy4vaW1nL3NvY2lhbC9naXRodWItbWFyay5zdmcnO1xyXG5pbXBvcnQgRGlzY29yZCBmcm9tICcuL2ltZy9zb2NpYWwvZ2l0aHViLW1hcmsuc3ZnJztcclxuaW1wb3J0IEVtYWlsIGZyb20gJy4vaW1nL3NvY2lhbC9lbWFpbC5zdmcnO1xyXG5cclxuZnVuY3Rpb24gY29udGFjdCgpe1xyXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBsZXQgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICBsZXQgY29udGFjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBsZXQgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICBsZXQgZm9ybU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBmb3JtTXNnLnRleHRDb250ZW50ID0gXCJMZWF2ZSBVcyBBIE1lc3NhZ2VcIlxyXG5cclxuICBsZXQgbXNnVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xyXG4gIGxldCBtc2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIG1zZ0NvbnRlbnQucm93cyA9IDEwO1xyXG4gIG1zZ0NvbnRlbnQuY29scyA9IDgwO1xyXG5cclxuICBsZXQgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25bdHlwZT0nc3VibWl0J11cIik7XHJcblxyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Nc2cpO1xyXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1zZ1RpdGxlKTtcclxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChtc2dDb250ZW50KTtcclxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtQnRuKTtcclxuXHJcbiAgbGV0IHNvY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBzb2NpYWxzTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgc29jaWFsc01zZy50ZXh0Q29udGVudCA9IFwiQ29ubmVjdCBUbyBPdXIgU29jaWFsIE1lZGlhXCI7XHJcblxyXG4gIGxldCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBnaXRodWJJY29uLnNyYyA9IEdpdGh1YjtcclxuXHJcbiAgbGV0IGRpc2NvcmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBkaXNjb3JkSWNvbi5zcmMgPSBEaXNjb3JkO1xyXG5cclxuICBsZXQgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBlbWFpbEljb24uc3JjID0gRW1haWw7XHJcblxyXG4gIHNvY2lhbHMuYXBwZW5kQ2hpbGQoc29jaWFsc01zZyk7XHJcbiAgc29jaWFscy5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcclxuICBzb2NpYWxzLmFwcGVuZENoaWxkKGRpc2NvcmRJY29uKTtcclxuICBzb2NpYWxzLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcblxyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoc29jaWFscyk7XHJcblxyXG4gIHJldHVybiBjb250YWN0O1xyXG59XHJcbiIsImltcG9ydCBTZWVkIGZyb20gJy4vaW1nL3NlZWQuanBnJztcclxuaW1wb3J0IEJhbmFuYSBmcm9tICcuL2ltZy9iYW5hbmEuanBnJztcclxuaW1wb3J0IEF2b2NhZG8gZnJvbSAnLi9pbWcvYXZvY2Fkby5qcGcnO1xyXG5pbXBvcnQgS2l3aSBmcm9tICcuL2ltZy9raXdpLmpwZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGVybygpIHtcclxuICAvL0NyZWF0ZSBIZXJvIEJhbm5lclxyXG4gIGxldCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xyXG5cclxuICBsZXQgc2VlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHNlZWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIHNlZWRJbWcuc3JjID0gU2VlZDtcclxuICBzZWVkLmFwcGVuZENoaWxkKHNlZWRJbWcpO1xyXG5cclxuICBsZXQgYmFuYW5hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgYmFuYW5hSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBiYW5hbmFJbWcuc3JjID0gQmFuYW5hO1xyXG4gIGJhbmFuYS5hcHBlbmRDaGlsZChiYW5hbmFJbWcpO1xyXG5cclxuICBsZXQgYXZvY2FkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGF2b2NhZG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGF2b2NhZG9JbWcuc3JjID0gQXZvY2FkbztcclxuICBhdm9jYWRvLmFwcGVuZENoaWxkKGF2b2NhZG9JbWcpO1xyXG5cclxuICBsZXQga2l3aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGtpd2lJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGtpd2lJbWcuc3JjID0gS2l3aTtcclxuICBraXdpLmFwcGVuZENoaWxkKGtpd2lJbWcpO1xyXG5cclxuICBoZXJvLmFwcGVuZENoaWxkKHNlZWQpO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoYmFuYW5hKTtcclxuICBoZXJvLmFwcGVuZENoaWxkKGF2b2NhZG8pO1xyXG4gIGhlcm8uYXBwZW5kQ2hpbGQoa2l3aSk7XHJcbiAgcmV0dXJuIGhlcm87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJGcmVzaEVhdHMhXCI7XHJcblxyXG4gIGxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGxldCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XHJcblxyXG4gIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHJcbiAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICBuYXZMaXN0LmFwcGVuZENoaWxkKGFib3V0KTtcclxuICBuYXZMaXN0LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxyXG4gIFxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHtoZXJvLCBtZW51IGFzIG5hdn0gZnJvbSAnLi9oZXJvLmpzJztcclxuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQuanMnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xyXG5cclxubGV0IGhlYWRlciA9IG5hdigpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlcm8oKSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCl7XHJcbiAgaWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDQyMCl7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInNtYWxsLW5hdlwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVEVTVFwiKTtcclxuICB9ZWxzZXtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic21hbGwtbmF2XCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJFTkQgVEVTVFwiKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudSgpKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xyXG5hbGVydChcIkhlbGxvIFdlYnBhY2tcIik7IiwiLy9TYWxhZCBJbWFnZXNcclxuaW1wb3J0IEdyZWVrIGZyb20gJy4vaW1nL21lbnUvc2FsYWRzL2dyZWVrLmpwZyc7XHJcbmltcG9ydCBDYWVzYXIgZnJvbSAnLi9pbWcvbWVudS9zYWxhZHMvY2Flc2FyLmpwZyc7XHJcbmltcG9ydCBDb2JiIGZyb20gJy4vaW1nL21lbnUvc2FsYWRzL2NvYmIuanBnJztcclxuXHJcbi8vRnJ1aXQgQm93bCBJbWFnZXNcclxuaW1wb3J0IFN0cmF3YmVycnlTYWxhZCBmcm9tICcuL2ltZy9tZW51L2ZydWl0Ym93bHMvc3RyYXdiZXJyeS5qcGcnO1xyXG5pbXBvcnQgVmFuaWxsYVNhbGFkIGZyb20gJy4vaW1nL21lbnUvZnJ1aXRib3dscy92YW5pbGxhLmpwZyc7XHJcbmltcG9ydCBCbHVlYmVycnlTYWxhZCBmcm9tICcuL2ltZy9tZW51L2ZydWl0Ym93bHMvYmx1ZWJlcnJ5LmpwZyc7XHJcblxyXG4vL1NpZGVzIEltYWdlc1xyXG5pbXBvcnQgQ2FuZHlBcHBsZXMgZnJvbSAnLi9pbWcvbWVudS9zaWRlcy9jYW5keS1hcHBsZS5qcGcnO1xyXG5pbXBvcnQgRnJ1aXRDYWtlcyBmcm9tICcuL2ltZy9tZW51L3NpZGVzL2ZydWl0LWNha2VzLmpwZyc7XHJcbmltcG9ydCBWZWdldGFibGVDaGlwcyBmcm9tICcuL2ltZy9tZW51L3NpZGVzL1ZlZ2V0YWJsZS1jaGlwcy5qcGcnO1xyXG5cclxuLy9Ecmlua3MgSW1hZ2VzXHJcbmltcG9ydCBTbW9vdGhpZXMgZnJvbSAnLi9pbWcvbWVudS9kcmlua3Mvc21vb3RoaWVzLmpwZyc7XHJcbmltcG9ydCBNaWxrc2hha2VzIGZyb20gJy4vaW1nL21lbnUvZHJpbmtzL21pbGtzaGFrZXMuanBnJztcclxuaW1wb3J0IExlbW9uV2F0ZXIgZnJvbSAnLi9pbWcvbWVudS9kcmlua3MvbGVtb24td2F0ZXIuanBnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKXtcclxuICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcclxuICBsZXQgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIFxyXG4gIGxldCBzYWxhZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgbGV0IHNhbGFkc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGxldCBzYWxhZHNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzYWxhZHNUaXRsZS50ZXh0Q29udGVudCA9IFwiU2FsYWRzXCI7XHJcbiAgXHJcbiAgbGV0IGdyZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgZ3JlZWtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBncmVla1RpdGxlLnRleHRDb250ZW50ID0gXCJHcmVla1wiO1xyXG4gIGxldCBncmVla1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBncmVla1ByaWNlLnRleHRDb250ZW50ID0gXCIkMTAuNTBcIjtcclxuICBsZXQgZ3JlZWtJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGdyZWVrSW1nLnNyYyA9IEdyZWVrO1xyXG4gIFxyXG4gIGdyZWVrLmFwcGVuZENoaWxkKGdyZWVrSW1nKTtcclxuICBncmVlay5hcHBlbmRDaGlsZChncmVla1RpdGxlKTtcclxuICBncmVlay5hcHBlbmRDaGlsZChncmVla1ByaWNlKTtcclxuICBcclxuICBsZXQgY2Flc2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgY2Flc2FyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgY2Flc2FyVGl0bGUudGV4dENvbnRlbnQgPSBcIkNhZXNhclwiO1xyXG4gIGxldCBjYWVzYXJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2Flc2FyUHJpY2UudGV4dENvbnRlbnQgPSBcIiQ5Ljc5XCI7XHJcbiAgbGV0IGNhZXNhckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2Flc2FySW1nLnNyYyA9IENhZXNhcjtcclxuICBcclxuICBjYWVzYXIuYXBwZW5kQ2hpbGQoY2Flc2FySW1nKTtcclxuICBjYWVzYXIuYXBwZW5kQ2hpbGQoY2Flc2FyVGl0bGUpO1xyXG4gIGNhZXNhci5hcHBlbmRDaGlsZChjYWVzYXJQcmljZSk7XHJcbiAgXHJcbiAgbGV0IGNvYmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBjb2JiVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgY29iYlRpdGxlLnRleHRDb250ZW50ID0gXCJDb2JiXCI7XHJcbiAgbGV0IGNvYmJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29iYlByaWNlLnRleHRDb250ZW50ID0gXCIkMTEuMjBcIjtcclxuICBsZXQgY29iYkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29iYkltZy5zcmMgPSBDb2JiO1xyXG4gIFxyXG4gIGNvYmIuYXBwZW5kQ2hpbGQoY29iYkltZyk7XHJcbiAgY29iYi5hcHBlbmRDaGlsZChjb2JiVGl0bGUpO1xyXG4gIGNvYmIuYXBwZW5kQ2hpbGQoY29iYlByaWNlKTtcclxuICBcclxuICBzYWxhZHNNZW51LmFwcGVuZENoaWxkKGdyZWVrKTtcclxuICBzYWxhZHNNZW51LmFwcGVuZENoaWxkKGNhZXNhcik7XHJcbiAgc2FsYWRzTWVudS5hcHBlbmRDaGlsZChjb2JiKTtcclxuICBzYWxhZHMuYXBwZW5kQ2hpbGQoc2FsYWRzVGl0bGUpO1xyXG4gIHNhbGFkcy5hcHBlbmRDaGlsZChzYWxhZHNNZW51KTtcclxuICBcclxuICBsZXQgZnJ1aXRCb3dscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGZydWl0Qm93bHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBsZXQgZnJ1aXRCb3dsc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZydWl0Qm93bHNUaXRsZS50ZXh0Q29udGVudCA9IFwiRnJ1aXQgQm93bHNcIjtcclxuICBcclxuICBsZXQgc3RyYXdiZXJyeUJvd2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBzdHJhd2JlcnJ5Qm93bFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHN0cmF3YmVycnlCb3dsVGl0bGUudGV4dENvbnRlbnQgPSBcIlN0cmF3YmVycnlcIjtcclxuICBsZXQgc3RyYXdiZXJyeUJvd2xQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc3RyYXdiZXJyeUJvd2xQcmljZS50ZXh0Q29udGVudCA9IFwiJDcuNTBcIjtcclxuICBsZXQgc3RyYXdiZXJyeUJvd2xJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIHN0cmF3YmVycnlCb3dsSW1nLnNyYyA9IFN0cmF3YmVycnlTYWxhZDtcclxuICBcclxuICBzdHJhd2JlcnJ5Qm93bC5hcHBlbmRDaGlsZChzdHJhd2JlcnJ5Qm93bEltZyk7XHJcbiAgc3RyYXdiZXJyeUJvd2wuYXBwZW5kQ2hpbGQoc3RyYXdiZXJyeUJvd2xUaXRsZSk7XHJcbiAgc3RyYXdiZXJyeUJvd2wuYXBwZW5kQ2hpbGQoc3RyYXdiZXJyeUJvd2xQcmljZSk7XHJcbiAgXHJcbiAgbGV0IHZhbmlsbGFCb3dsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgdmFuaWxsYUJvd2xUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICB2YW5pbGxhQm93bFRpdGxlLnRleHRDb250ZW50ID0gXCJWYW5pbGxhXCI7XHJcbiAgbGV0IHZhbmlsbGFCb3dsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHZhbmlsbGFCb3dsUHJpY2UudGV4dENvbnRlbnQgPSBcIiQ2Ljc5XCI7XHJcbiAgbGV0IHZhbmlsbGFCb3dsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB2YW5pbGxhQm93bEltZy5zcmMgPSBWYW5pbGxhU2FsYWQ7XHJcbiAgXHJcbiAgdmFuaWxsYUJvd2wuYXBwZW5kQ2hpbGQodmFuaWxsYUJvd2xJbWcpO1xyXG4gIHZhbmlsbGFCb3dsLmFwcGVuZENoaWxkKHZhbmlsbGFCb3dsVGl0bGUpO1xyXG4gIHZhbmlsbGFCb3dsLmFwcGVuZENoaWxkKHZhbmlsbGFCb3dsUHJpY2UpO1xyXG4gIFxyXG4gIGxldCBibHVlYmVycnlCb3dsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgYmx1ZWJlcnJ5Qm93bFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGJsdWViZXJyeUJvd2xUaXRsZS50ZXh0Q29udGVudCA9IFwiQmx1ZWJlcnJ5XCI7XHJcbiAgbGV0IGJsdWViZXJyeUJvd2xQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYmx1ZWJlcnJ5Qm93bFByaWNlLnRleHRDb250ZW50ID0gXCIkNy4yMFwiO1xyXG4gIGxldCBibHVlYmVycnlCb3dsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBibHVlYmVycnlCb3dsSW1nLnNyYyA9IEJsdWViZXJyeVNhbGFkO1xyXG5cclxuICBibHVlYmVycnlCb3dsLmFwcGVuZENoaWxkKGJsdWViZXJyeUJvd2xJbWcpO1xyXG4gIGJsdWViZXJyeUJvd2wuYXBwZW5kQ2hpbGQoYmx1ZWJlcnJ5Qm93bFRpdGxlKTtcclxuICBibHVlYmVycnlCb3dsLmFwcGVuZENoaWxkKGJsdWViZXJyeUJvd2xQcmljZSk7XHJcblxyXG4gIGZydWl0Qm93bHNNZW51LmFwcGVuZENoaWxkKHN0cmF3YmVycnlCb3dsKTtcclxuICBmcnVpdEJvd2xzTWVudS5hcHBlbmRDaGlsZCh2YW5pbGxhQm93bCk7XHJcbiAgZnJ1aXRCb3dsc01lbnUuYXBwZW5kQ2hpbGQoYmx1ZWJlcnJ5Qm93bCk7XHJcblxyXG4gIGZydWl0Qm93bHMuYXBwZW5kQ2hpbGQoZnJ1aXRCb3dsc1RpdGxlKTtcclxuICBmcnVpdEJvd2xzLmFwcGVuZENoaWxkKGZydWl0Qm93bHNNZW51KTtcclxuICBcclxuICBsZXQgc2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBzaWRlc1R0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBsZXQgc2lkZXNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaWRlc1R0aXRsZS50ZXh0Q29udGVudCA9IFwiU2lkZXNcIjtcclxuICBcclxuICBsZXQgY2FuZHlBcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGNhbmR5QXBwbGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBjYW5keUFwcGxlVGl0bGUudGV4dENvbnRlbnQgPSBcIkNhbmR5IEFwcGxlc1wiO1xyXG4gIGxldCBjYW5keUFwcGxlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNhbmR5QXBwbGVQcmljZS50ZXh0Q29udGVudCA9IFwiJDIuMDBcIjtcclxuICBsZXQgY2FuZHlBcHBsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2FuZHlBcHBsZUltZy5zcmMgPSBDYW5keUFwcGxlcztcclxuXHJcbiAgY2FuZHlBcHBsZS5hcHBlbmRDaGlsZChjYW5keUFwcGxlSW1nKTtcclxuICBjYW5keUFwcGxlLmFwcGVuZENoaWxkKGNhbmR5QXBwbGVUaXRsZSk7XHJcbiAgY2FuZHlBcHBsZS5hcHBlbmRDaGlsZChjYW5keUFwcGxlUHJpY2UpO1xyXG5cclxuICBsZXQgZnJ1aXRDYWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGZydWl0Q2FrZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBmcnVpdENha2VzVGl0bGUudGV4dENvbnRlbnQgPSBcIkZydWl0IENha2VzXCI7XHJcbiAgbGV0IGZydWl0Q2FrZXNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZnJ1aXRDYWtlc1ByaWNlLnRleHRDb250ZW50ID0gXCIkMy41MFwiO1xyXG4gIGxldCBmcnVpdENha2VzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBmcnVpdENha2VzSW1nLnNyYyA9IEZydWl0Q2FrZXM7XHJcblxyXG4gIGZydWl0Q2FrZXMuYXBwZW5kQ2hpbGQoZnJ1aXRDYWtlc0ltZyk7XHJcbiAgZnJ1aXRDYWtlcy5hcHBlbmRDaGlsZChmcnVpdENha2VzVGl0bGUpO1xyXG4gIGZydWl0Q2FrZXMuYXBwZW5kQ2hpbGQoZnJ1aXRDYWtlc1ByaWNlKTtcclxuXHJcbiAgbGV0IHZlZ2V0YWJsZUNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgdmVnZXRhYmxlQ2hpcHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICB2ZWdldGFibGVDaGlwc1RpdGxlLnRleHRDb250ZW50ID0gXCJWZWdldGFibGUgQ2hpcHNcIjtcclxuICBsZXQgdmVnZXRhYmxlQ2hpcHNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdmVnZXRhYmxlQ2hpcHNQcmljZS50ZXh0Q29udGVudCA9IFwiJDQuMjVcIjtcclxuICBsZXQgdmVnZXRhYmxlc0NoaXBzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICB2ZWdldGFibGVzQ2hpcHNJbWcuc3JjID0gVmVnZXRhYmxlQ2hpcHM7XHJcblxyXG4gIHZlZ2V0YWJsZUNoaXBzLmFwcGVuZENoaWxkKHZlZ2V0YWJsZXNDaGlwc0ltZyk7XHJcbiAgdmVnZXRhYmxlQ2hpcHMuYXBwZW5kQ2hpbGQodmVnZXRhYmxlQ2hpcHNUaXRsZSk7XHJcbiAgdmVnZXRhYmxlQ2hpcHMuYXBwZW5kQ2hpbGQodmVnZXRhYmxlQ2hpcHNQcmljZSk7XHJcblxyXG4gIHNpZGVzTWVudS5hcHBlbmRDaGlsZChjYW5keUFwcGxlKTtcclxuICBzaWRlc01lbnUuYXBwZW5kQ2hpbGQoZnJ1aXRDYWtlcyk7XHJcbiAgc2lkZXNNZW51LmFwcGVuZENoaWxkKHZlZ2V0YWJsZUNoaXBzKTtcclxuICBzaWRlcy5hcHBlbmRDaGlsZChzaWRlc1R0aXRsZSk7XHJcbiAgc2lkZXMuYXBwZW5kQ2hpbGQoc2lkZXNNZW51KTtcclxuICBcclxuICBsZXQgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgZHJpbmtzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgbGV0IGRyaW5rc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRyaW5rc1RpdGxlLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcclxuICBcclxuXHJcbiAgbGV0IHNtb290aGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHNtb290aGllc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIHNtb290aGllc1RpdGxlLnRleHRDb250ZW50ID0gXCJTbW9vdGhpZXNcIjtcclxuICBsZXQgc21vb3RoaWVzUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNtb290aGllc1ByaWNlLnRleHRDb250ZW50ID0gXCIkMS45OVwiO1xyXG4gIGxldCBzbW9vdGhpZXNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIHNtb290aGllc0ltZy5zcmMgPSBTbW9vdGhpZXM7XHJcblxyXG4gIHNtb290aGllcy5hcHBlbmRDaGlsZChzbW9vdGhpZXNJbWcpO1xyXG4gIHNtb290aGllcy5hcHBlbmRDaGlsZChzbW9vdGhpZXNUaXRsZSk7XHJcbiAgc21vb3RoaWVzLmFwcGVuZENoaWxkKHNtb290aGllc1ByaWNlKTtcclxuXHJcbiAgbGV0IG1pbGtzaGFrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBtaWxrc2hha2VzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgbWlsa3NoYWtlc1RpdGxlLnRleHRDb250ZW50ID0gXCJNaWxrc2hha2VzXCI7XHJcbiAgbGV0IG1pbGtzaGFrZXNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWlsa3NoYWtlc1ByaWNlLnRleHRDb250ZW50ID0gXCIkMi4yOVwiO1xyXG4gIGxldCBtaWxrc2hha2VzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBtaWxrc2hha2VzSW1nLnNyYyA9IE1pbGtzaGFrZXM7XHJcblxyXG4gIG1pbGtzaGFrZXMuYXBwZW5kQ2hpbGQobWlsa3NoYWtlc0ltZyk7XHJcbiAgbWlsa3NoYWtlcy5hcHBlbmRDaGlsZChtaWxrc2hha2VzVGl0bGUpO1xyXG4gIG1pbGtzaGFrZXMuYXBwZW5kQ2hpbGQobWlsa3NoYWtlc1ByaWNlKTtcclxuXHJcbiAgbGV0IGxlbW9uV2F0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBsZW1vbldhdGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgbGVtb25XYXRlclRpdGxlLnRleHRDb250ZW50ID0gXCJMZW1vbiBXYXRlclwiO1xyXG4gIGxldCBsZW1vbldhdGVyUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxlbW9uV2F0ZXJQcmljZS50ZXh0Q29udGVudCA9IFwiJDEuMDBcIjtcclxuICBsZXQgbGVtb25XYXRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbGVtb25XYXRlckltZy5zcmMgPSBMZW1vbldhdGVyO1xyXG5cclxuICBsZW1vbldhdGVyLmFwcGVuZENoaWxkKGxlbW9uV2F0ZXJJbWcpO1xyXG4gIGxlbW9uV2F0ZXIuYXBwZW5kQ2hpbGQobGVtb25XYXRlclRpdGxlKTtcclxuICBsZW1vbldhdGVyLmFwcGVuZENoaWxkKGxlbW9uV2F0ZXJQcmljZSk7XHJcbiAgXHJcbiAgZHJpbmtzTWVudS5hcHBlbmRDaGlsZChzbW9vdGhpZXMpO1xyXG4gIGRyaW5rc01lbnUuYXBwZW5kQ2hpbGQobWlsa3NoYWtlcyk7XHJcbiAgZHJpbmtzTWVudS5hcHBlbmRDaGlsZChsZW1vbldhdGVyKTtcclxuXHJcbiAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc1RpdGxlKTtcclxuICBkcmlua3MuYXBwZW5kQ2hpbGQoZHJpbmtzTWVudSk7XHJcbiAgXHJcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoc2FsYWRzKTtcclxuICBtZW51LmFwcGVuZENoaWxkKGZydWl0Qm93bHMpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoc2lkZXMpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcclxuICBcclxuICByZXR1cm4gbWVudVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==