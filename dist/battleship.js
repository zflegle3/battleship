/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Main Document Styles */\n/* Main Styled Font */\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\n\nfont-size: 10px;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* Header Styles */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.75rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n#comp-board .game-square-playing:hover {\n    background-color: var(--dark-blue2);\n    /* background-color: rgb(70, 70, 70); */\n}\n\n#comp-board .game-square-playing:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles */\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n}\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Main Document Styles */\n/* Main Styled Font */\n@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\n\nfont-size: 10px;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* Header Styles */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.75rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n#comp-board .game-square-playing:hover {\n    background-color: var(--dark-blue2);\n    /* background-color: rgb(70, 70, 70); */\n}\n\n#comp-board .game-square-playing:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles */\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n}\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


console.log("hello");


// ~~~~~~~~~~~~~~~~~~~~~~~
// SHIP FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function createShip(xIn,yIn,dirIn,lenIn,nameIn) {
    let positionArr = [];
    for (let i=0;i<lenIn;i++) {
        let shipSquare = {};
        if (dirIn === "x") {
            shipSquare = {
                posX: xIn + i,
                posY: yIn,
                hitStatus: false,
            }
        } else if (dirIn === "y") {
            shipSquare = {
                posX: xIn,
                posY: yIn +i,
                hitStatus: false, 
            }
        }
        positionArr.push(shipSquare);
    }

    return {
        //Methods & properties from a ship
        _shipLength: lenIn,
        shipType: nameIn,
        position: positionArr,//rename to somehting more fitting
        sunkYN: false,
        hit: function(shipIndex) {
            // for (let i=0;i<this._shipLength;i++) {
                //if hit index is on ship
                // if (this.position[i].posX === hitX && this.position[i].posY === hitY) {
                    //if already hit
            if (this.position[shipIndex].hitStatus) {
                // console.log("invalid hit");
                return "invalid";
            } else {
                // console.log("Hit!")
                this.position[shipIndex].hitStatus = true;
                return "hit";
            }
                // }
            // }
        },
        isSunk: function() {
            let hitCount = 0;
            for (i=0;i<this._shipLength;i++) {
                if (this.position[i].hitStatus === true) {
                    hitCount += 1;
                }
            }
            if (hitCount > this._shipLength-1) {
                this.sunkYN = true;
                return this.sunkYN;
            } else {
                this.sunkYN = false;
                return this.sunkYN;
            }
        },
    }
}








// ~~~~~~~~~~~~~~~~~~~~~~~
// BOARD FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function gameBoard() {
    return {
        //Methods & properties from a ship
        shipsAll: [],
        hits: [],
        missesAll: [], //keep track to display on board
        recieveAttack: function(atkX,atkY) {
            //takes pair of coordinates and determines if attack hit a ship
            //if yes send hit function to ship >> recieves "hit" or "invalid" back
            //if not records a miss
            let hitFlag = false; //only to check if was a hit on ship, not valid/invalid
            let missFlag = false; //set to true when attack not a hit or invalid
            let attackResponse = "";
            //Checks for Hit/Invalid Hit
            for (let i=0; i<this.shipsAll.length; i++) { //for all ships
                for (let j=0; j<this.shipsAll[i].position.length; j++) {  //for all spots on ship
                    //if hit index is on ship
                    if (atkX === this.shipsAll[i].position[j].posX && atkY === this.shipsAll[i].position[j].posY ) {
                        attackResponse = this.shipsAll[i].hit(j);
                        hitFlag = true; //will always be true if position is on a ship per if statement above
                        break;
                    }
                }
            }
            //Checks for Invalid Miss
            if (!hitFlag) {
                for (let k=0; k<this.missesAll.length; k++) {
                    if (atkX === this.missesAll[k].posX && atkY === this.missesAll[k].posY){
                        // console.log("invalid miss!");
                        attackResponse = "invalid";
                        missFlag = true;
                        break;
                    }
                }
            }
            //Checks for Miss
            if (attackResponse.length < 1) {
                // console.log("valid miss!");
                this.missesAll.push({
                    posX: atkX,
                    posY: atkY,
                })
                attackResponse = "miss";
            }
            return attackResponse;
        },

        placeShip: function(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName) {
            let validCheck = gamePlay.checkLocationValid(plIndex,xIndex,yIndex,currentDirection,shipLength);
            //DOUBLE CHECK WHY DO I VALID CHECK AGAIN??
            switch (validCheck) {
                case "error":
                    console.log("Cant place ship here");
                    break;
                case "valid":
                    let newShip = createShip(xIndex,yIndex,currentDirection,shipLength,shipName);
                    this.shipsAll.push(newShip);
                    domInteract.placeShipDom(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName);
            }
        },

        autoPlaceShipsAll: function() {
            // this.placeShip("co",1,1,"x",5,"Test Ship");

            let count = 0;
            let directions = ["x","y"];
            // while (count > 1) {
            while (this.shipsAll.length < 5) {
                let xIndex = Math.floor((Math.random() * 10) + 1);
                let yIndex = Math.floor((Math.random() * 10) + 1);
                let randDirInt = Math.round(Math.random());
                let randDirection = directions[randDirInt];
                let shipLength = gamePlay.shipSizes[this.shipsAll.length];
                let shipName = gamePlay.shipNames[this.shipsAll.length];
                console.log("creating ship",shipName);
                this.placeShip("co",xIndex,yIndex,randDirection,shipLength,shipName);
            }
        },
        allSunk: function () {
            let sunkCount = 0;
            for(let i=0; i<this.shipsAll.length; i++) {
                if (this.shipsAll[0].isSunk())
                sunkCount += 1;
            }
            if (sunkCount > this.shipsAll.length -1){
                return true
            } else {
                return false
            }
        }
    }
}








// ~~~~~~~~~~~~~~~~~~~~~~~
// PLAYER FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function playerNew(name) {
    if (name === "computer") {
        return {
            name: "Computer",
            board: gameBoard(),
            attack: function(playerIn) {
                //eventually will expect index to come in as a click event (e.target.id = "x,y")
                let attackStop = false;
                while (!attackStop) {
                    let randX = Math.floor((Math.random() * 10)+1);
                    let randY = Math.floor((Math.random() * 10)+1);
                    let attackResult = playerIn.board.recieveAttack(randX,randY)
                    console.log(`Attack Result at x:${randX} y:${randY}`,attackResult);
                    switch (attackResult) {
                        case "hit":
                            attackStop = true;
                            return attackResult;
                        case "miss":
                            attackStop = true;
                            return attackResult;
                        case "invalid":
                            console.log("try another attack");
                            //keep attacking b/c attack was invalid
                            break;
                    }
                    return attackResult;
                }
            },
        }
    } else {
        return {
            name: name,
            board: gameBoard(),
            attack: function(playerIn,xIn,yIn) {
                //eventually will expect index to come in as a click event (e.target.id = "x,y")
                let attackResult = playerIn.board.recieveAttack(xIn,yIn);
                return attackResult;
            },
        }
    }
}








// ~~~~~~~~~~~~~~~~~~~~~
// GAMEPLAY LOGIC MODULE
// ~~~~~~~~~~~~~~~~~~~~~
const gamePlay = {
    playersAll: [], //[computer, player1]
    shipSizes: [5,4,3,3,2],
    shipNames: ["carrier","battleship","cruiser","submarine","destroyer"],
    shipDirection: "x",
    init: function() {
        //populate board for both sides
        domInteract.populateBoard("computer");
        domInteract.populateBoard("Player 1");
        //select form element and add event listener
        let playerInForm = document.getElementById("player-in");
        playerInForm.addEventListener("submit",domInteract.nameIn);
    },

    //Player 1 setup
    setUpGame: function(player1Name) {
        //Add players
        this.playersAll.push(playerNew("computer"));
        this.playersAll.push(playerNew(`${player1Name}`));
        //add Event Listeners on p1 board squares to place ships
        domInteract.domUiUpdate("placing-ships", "start");
    },

    //Rest of Game Setup
    checkAllShipsPlaces: function() {
        if (this.playersAll[1].board.shipsAll.length === 5) {
            //remove event listeners on player board
            //hide direction button
            domInteract.domUiUpdate("placing-ships", "stop");
            //populate computer board
            console.log("Starting Auto-Place");
            gamePlay.playersAll[0].board.autoPlaceShipsAll();

            //add event listeners for attacking
            //call switching turns function?
        }
    },
    toggleDirection: function() {
        if (gamePlay.shipDirection === "x") {
            gamePlay.shipDirection = "y";
        } else {
            gamePlay.shipDirection = "x"; 
        }
        domInteract.toggleDirectionDisplay();
    },
    checkLocationValid: function(plIndex,xIndex,yIndex,currentDirection,shipLength) {
        let errorMsg = document.getElementById("placing-error");
        if (currentDirection === "x" && (xIndex+shipLength-1) > 10) {
            errorMsg.innerHTML = "Error, move ship left, or change direction";
            return "error"; //Update with Error Handling 
        } else if (currentDirection === "y" && (yIndex+shipLength-1) > 10) {
            errorMsg.innerHTML = "Error, move ship up, or change direction";
            return "error"; //Update with Error Handling 
        } else if (!this.checkSpotTaken(plIndex,xIndex,yIndex,currentDirection,shipLength)) {
            errorMsg.innerHTML = "Error, conflict with another ship";
            return "error"; //Update with Error Handling 
        } else {
            if (errorMsg.innerHTML.length > 0) {
                errorMsg.innerHTML = "";
            }
            return "valid";
        }
    },
    checkSpotTaken: function(plIndex,xIndex,yIndex,currentDirection,shipLength) {
        //uses classlist length of square to determine if a ship is already there
        for (let i=0;i<shipLength;i++) {
            if (currentDirection === "x") {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                if (checkedLocation.classList.length > 2) {
                    return false
                }
            } else {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                if (checkedLocation.classList.length > 2) {
                    return false
                }
            }
        }
        return true;
    }
}










// ~~~~~~~~~~~~~~~~~~~~~
// DOM INTERACT MODULE
// ~~~~~~~~~~~~~~~~~~~~~
const domInteract = {
    populateBoard: function(playerIn) {
        //select board based on player that comes in to append to
        let gameboardDiv;
        let playerId = "";
        if (playerIn === "computer") {
            gameboardDiv = document.getElementById("comp-board");
            playerId = "co";
        } else {
            gameboardDiv = document.getElementById("player1-board");
            playerId = "p1";
        }
        for (let i=1; i<=10;i++) {
            for (let j=1; j<=10; j++) {
                let squareDiv = document.createElement("div");
                squareDiv.id = `${playerId}-${i}-${j}`;
                squareDiv.classList = "game-square"
                gameboardDiv.appendChild(squareDiv)
            }
        }
    },
    nameIn: function(e) {
        e.preventDefault();
        let formInput = document.querySelectorAll('input[type=text]')[0];
        let playerName  = formInput.value.trim();
        if (playerName.length > 0) {
            let playerNameDiv = document.querySelector("#player1-name h2"); 
            playerNameDiv.innerHTML = playerName;      
        } else {
            playerName = "Player1";
        }
        formInput.parentElement.reset();
        formInput.parentElement.classList = "hidden";
        gamePlay.setUpGame(playerName);
    },
    domUiUpdate: function(reason,changeType) {
        //updates UI interaction including event listeners, buttons, 
        let caseIn = `${reason} ${changeType}`;
        switch (caseIn) {
            case "placing-ships start":
                console.log ("on");
                //player 1 board squares
                let playerSquaresStart = document.querySelectorAll("#player1-board .game-square");
                playerSquaresStart.forEach(square => square.addEventListener("mouseover",domInteract.locationData));
                playerSquaresStart.forEach(square => square.addEventListener("click",domInteract.locationData));
                //direction button
                let dirToggleBtnStart = document.getElementById("direction-tog-btn");
                dirToggleBtnStart.classList.toggle("hidden");
                dirToggleBtnStart.addEventListener("click",gamePlay.toggleDirection);
                break;
            case "placing-ships stop":
                console.log ("off");
                let playerSquaresStop = document.querySelectorAll("#player1-board .game-square");
                playerSquaresStop.forEach(square => square.removeEventListener("mouseover",domInteract.locationData));
                playerSquaresStop.forEach(square => square.removeEventListener("click",domInteract.locationData));
                let dirToggleBtnStop = document.getElementById("direction-tog-btn");
                dirToggleBtnStop.classList.toggle("hidden");
                dirToggleBtnStop.removeEventListener("click",gamePlay.toggleDirection);
                break;
        }

    },
    locationData: function(e) {
        e.preventDefault();
        let currentDirection = gamePlay.shipDirection;
        //Current Ship Length being placed
        let shipIndex = gamePlay.playersAll[1].board.shipsAll.length;
        let shipLength = gamePlay.shipSizes[shipIndex];
        let shipName = gamePlay.shipNames[shipIndex];
        //get event & square location info
        let eventType = e.type;
        let squareId = e.target.id;
        let indices = squareId.split("-");
        let plIndex = indices[0]; //keeping in case need this function for computer placements too
        let xIndex = Number(indices[2]);
        let yIndex = Number(indices[1]);
        if (eventType === "click") {
            gamePlay.playersAll[1].board.placeShip(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName);
            if (gamePlay.playersAll[1].board.shipsAll.length === 5) {
                gamePlay.checkAllShipsPlaces();
            }
        } else if (eventType === "mouseover") {
            domInteract.showLocation(plIndex,xIndex,yIndex,currentDirection,shipLength);
        }
    },
    placeShipDom: function(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName) {
        //updates squares class w/ ship info
        for (let i=0;i<shipLength;i++) {
            if (currentDirection === "x") {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
            } else {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
            }
        }
    },

    showLocation: function(plIndex,xIndex,yIndex,currentDirection,shipLength) {
        let validReport = gamePlay.checkLocationValid(plIndex,xIndex,yIndex,currentDirection,shipLength);
        //Clear any cells aready highlighted 
        domInteract.hideLocation("valid");
        domInteract.hideLocation("error");
        //highlight selected ship placement based on valid status 
        for (let i=0;i<shipLength;i++) {
            if (currentDirection === "x") {
                if(xIndex+i < 11) {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                    highlightLocation.classList.toggle(validReport);
                }
            } else {
                if(yIndex+i < 11) {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                    highlightLocation.classList.toggle(validReport);
                }
            }
        }
    },
    hideLocation: function(classToHide) {
        let divsToHide = document.querySelectorAll(`.${classToHide}`);
        if (divsToHide.length > 0) {
            divsToHide.forEach(squareHighlighted => squareHighlighted.classList.toggle(`${classToHide}`));
        }
    },
    toggleDirectionDisplay: function() {
        let text = gamePlay.shipDirection.toUpperCase();
        document.getElementById("direction-tog-btn").innerHTML = `${text} Direction`;
    }
}

gamePlay.init();






//Debugging Cases

// let testBoard = gameBoard();
// testBoard.placeShip(5,"3,2","y");
// console.log(testBoard.recieveAttack(4,2));
// console.log(testBoard.recieveAttack(4,2));

// let player1 = playerNew("Steve");
// player1.board.placeShip(10,"1,1","x");
// console.log(player1);
// let playerComp = playerNew("computer");
// playerComp.attack(player1);


// // Testing Exports
// module.exports = {createShip, gameBoard, playerNew};








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsZUFBZSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsVUFBVSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFX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LE1BQU07QUFDMUU7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2RhbStUaG1vcitQcm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDU1MgUmVzZXQgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBNYWluIERvY3VtZW50IFN0eWxlcyAqL1xcbi8qIE1haW4gU3R5bGVkIEZvbnQgKi9cXG4vKiBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjsgKi9cXG4vKiBTdWIgRm9udCAqL1xcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuLS1kaXNwbGF5LXdpZHRoOiAyNXJlbTtcXG4tLXBpZWNlLWhwLXdpZHRoOiAwLjhyZW07XFxuXFxuLS1saWdodC1ibHVlMTogI0E1RDhGRjtcXG4tLWxpZ2h0LWJsdWUyOiAjMTRGRkY3O1xcbi0tZGFyay1ibHVlMTogIzAwODFBNztcXG4tLWRhcmstYmx1ZTI6ICMwQkM5Q0Q7XFxuLS1kYXJrLWJsdWUzOiAjMUQ4QTk5O1xcbi0tZGFyay1ibHVlNDogIzU3NzU5MDtcXG4tLWdyZXktc2hpcDE6ICM3QzdDN0M7XFxuLS1ncmV5LXNoaXAyOiAjQjJCMkIyO1xcbi0tZ3JleS1zaGlwMzogI0MzQkFCQTtcXG4tLWdyZWVuLWdvb2QxOiAjN0RDRDg1O1xcbi0tZ3JlZW4tZ29vZDI6ICNDOUYyOTk7XFxuXFxuLS1ncmVlbi1yYWRhcjE6ICNBREUyNUQ7XFxuLS1ncmVlbi1yYWRhcjI6ICM5OUMyNEQ7XFxuLS1ncmVlbi1yYWRhcjM6ICM1Q0Y2NEE7XFxuXFxuLS1zYW5kMTogI0ZDREVCRTtcXG4tLXNhbmQyOiAjRjNERThBO1xcblxcbi0tcmVkLWJhZDE6ICNBNzFEMzE7XFxuLS1yZWQtYmFkMjogI2YyOTk5OTtcXG4tLW9yYW5nZTE6ICNGN0IyNjc7XFxuLS1vcmFuZ2UyOiAjRjc5RDY1O1xcbi0tb3JhbmdlMzogI0Y0ODQ1RjtcXG5cXG5cXG5mb250LXNpemU6IDEwcHg7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVkaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2dhbWVkaXNwbGF5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3BsYXllcjEtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI2NvbXAtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbiNjb21tcyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI3BsYXllci1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItaW4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbiNwbGF5ZXItaW4gaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDMpIDtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jcGxhY2luZy1lcnJvciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogR2FtZWJvYXJkIFN0eWxlcyAqL1xcblxcbi8qIE5hbWUgRGlzcGxheSAqL1xcbi5wbGF5ZXItbmFtZSB7XFxufVxcblxcbi5wbGF5ZXItbmFtZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLyogR2FtZWJvYXJkICovXFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC1nYXA6IC4xcmVtO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbi1yYWRhcjMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlMik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7ICovXFxufVxcblxcbiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZS1wbGF5aW5nOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTsgKi9cXG59XFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlLXBsYXlpbmc6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMik7XFxufVxcblxcbi8qIFNoaXAgUGxhY2VtZW50IFN0eWxlcyAqL1xcbi5nYW1lLXNxdWFyZS5lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAxKTtcXG59XFxuXFxuXFxuLyogR2FtZSBQaWVjZXMgU3R5bGVzIC0gTm9uIFBsYXllciBvciBQaWVjZSBzcGVjaWZpYyAqL1xcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYge1xcbiAgICAvKiBzaGlwcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBNYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBkaXYge1xcbiAgICAvKiBzaGlwIGhwICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJocC0wXFxcIl0ge1xcbiAgICAvKiBzaGlwIGhwIGRldGFpbCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDEpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgd2lkdGg6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgbWFyZ2luOiAwIDAuMXJlbSAwLjI1cmVtIDAuMXJlbTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDAsMCwwKTsgKi9cXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBwIHtcXG4gICAgLyogc2hpcCBsYWJlbCAqL1xcbiAgICBmb250LXNpemU6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogTW9jayBTdHlsZXMgKi9cXG4jY2Fycmllci1wMS1ocC0wMywgI2NhcnJpZXItcDEtaHAtMDQsICNjYXJyaWVyLXAxLWhwLTA1IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4jY3J1aXNlci1jby1ocC0wMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuLyogI2NvLTQtMywgI2NvLTUtMiwgI2NvLTYtMiwgI2NvLTctMiwgI2NvLTctMywgI2NvLTctNCwgI2NvLTYtNSwgI2NvLTUtNSwgI2NvLTQtNCwgI2NvLTUtM3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZDIpO1xcbn1cXG5cXG4jY28tNi0zLCAjY28tNi00LCAjY28tNS00e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1yYWRhcjIpO1xcbn1cXG5cXG4jY28tOS0yLCAjY28tOS0zLCAjY28tOS00LCAjY28tOS00LCAjY28tMi0yLCAjY28tMy0yLCAjY28tMy01LCAjY28tMy02LCAjY28tMy03LCAjY28tMy04e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAxKTtcXG59XFxuXFxuI2NvLTktNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQyKTtcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1REFBdUQ7QUFDdkQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FB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O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxxQ0FBcUM7QUFDekM7Ozs7Ozs7QUFPQSxnQkFBZ0I7QUFDaEI7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIFJlc2V0IGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwcHg7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogTWFpbiBEb2N1bWVudCBTdHlsZXMgKi9cXG4vKiBNYWluIFN0eWxlZCBGb250ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2RhbStUaG1vcitQcm8mZGlzcGxheT1zd2FwJyk7XFxuLyogZm9udC1mYW1pbHk6ICdLZGFtIFRobW9yIFBybycsIHNhbnMtc2VyaWY7ICovXFxuLyogU3ViIEZvbnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuLS1kaXNwbGF5LXdpZHRoOiAyNXJlbTtcXG4tLXBpZWNlLWhwLXdpZHRoOiAwLjhyZW07XFxuXFxuLS1saWdodC1ibHVlMTogI0E1RDhGRjtcXG4tLWxpZ2h0LWJsdWUyOiAjMTRGRkY3O1xcbi0tZGFyay1ibHVlMTogIzAwODFBNztcXG4tLWRhcmstYmx1ZTI6ICMwQkM5Q0Q7XFxuLS1kYXJrLWJsdWUzOiAjMUQ4QTk5O1xcbi0tZGFyay1ibHVlNDogIzU3NzU5MDtcXG4tLWdyZXktc2hpcDE6ICM3QzdDN0M7XFxuLS1ncmV5LXNoaXAyOiAjQjJCMkIyO1xcbi0tZ3JleS1zaGlwMzogI0MzQkFCQTtcXG4tLWdyZWVuLWdvb2QxOiAjN0RDRDg1O1xcbi0tZ3JlZW4tZ29vZDI6ICNDOUYyOTk7XFxuXFxuLS1ncmVlbi1yYWRhcjE6ICNBREUyNUQ7XFxuLS1ncmVlbi1yYWRhcjI6ICM5OUMyNEQ7XFxuLS1ncmVlbi1yYWRhcjM6ICM1Q0Y2NEE7XFxuXFxuLS1zYW5kMTogI0ZDREVCRTtcXG4tLXNhbmQyOiAjRjNERThBO1xcblxcbi0tcmVkLWJhZDE6ICNBNzFEMzE7XFxuLS1yZWQtYmFkMjogI2YyOTk5OTtcXG4tLW9yYW5nZTE6ICNGN0IyNjc7XFxuLS1vcmFuZ2UyOiAjRjc5RDY1O1xcbi0tb3JhbmdlMzogI0Y0ODQ1RjtcXG5cXG5cXG5mb250LXNpemU6IDEwcHg7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVkaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2dhbWVkaXNwbGF5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3BsYXllcjEtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI2NvbXAtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbiNjb21tcyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI3BsYXllci1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItaW4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbiNwbGF5ZXItaW4gaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDMpIDtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jcGxhY2luZy1lcnJvciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogR2FtZWJvYXJkIFN0eWxlcyAqL1xcblxcbi8qIE5hbWUgRGlzcGxheSAqL1xcbi5wbGF5ZXItbmFtZSB7XFxufVxcblxcbi5wbGF5ZXItbmFtZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLyogR2FtZWJvYXJkICovXFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC1nYXA6IC4xcmVtO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbi1yYWRhcjMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlMik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7ICovXFxufVxcblxcbiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZS1wbGF5aW5nOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTsgKi9cXG59XFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlLXBsYXlpbmc6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMik7XFxufVxcblxcbi8qIFNoaXAgUGxhY2VtZW50IFN0eWxlcyAqL1xcbi5nYW1lLXNxdWFyZS5lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAxKTtcXG59XFxuXFxuXFxuLyogR2FtZSBQaWVjZXMgU3R5bGVzIC0gTm9uIFBsYXllciBvciBQaWVjZSBzcGVjaWZpYyAqL1xcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYge1xcbiAgICAvKiBzaGlwcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBNYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBkaXYge1xcbiAgICAvKiBzaGlwIGhwICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJocC0wXFxcIl0ge1xcbiAgICAvKiBzaGlwIGhwIGRldGFpbCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDEpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgd2lkdGg6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgbWFyZ2luOiAwIDAuMXJlbSAwLjI1cmVtIDAuMXJlbTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDAsMCwwKTsgKi9cXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBwIHtcXG4gICAgLyogc2hpcCBsYWJlbCAqL1xcbiAgICBmb250LXNpemU6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogTW9jayBTdHlsZXMgKi9cXG4jY2Fycmllci1wMS1ocC0wMywgI2NhcnJpZXItcDEtaHAtMDQsICNjYXJyaWVyLXAxLWhwLTA1IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4jY3J1aXNlci1jby1ocC0wMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuLyogI2NvLTQtMywgI2NvLTUtMiwgI2NvLTYtMiwgI2NvLTctMiwgI2NvLTctMywgI2NvLTctNCwgI2NvLTYtNSwgI2NvLTUtNSwgI2NvLTQtNCwgI2NvLTUtM3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZDIpO1xcbn1cXG5cXG4jY28tNi0zLCAjY28tNi00LCAjY28tNS00e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1yYWRhcjIpO1xcbn1cXG5cXG4jY28tOS0yLCAjY28tOS0zLCAjY28tOS00LCAjY28tOS00LCAjY28tMi0yLCAjY28tMy0yLCAjY28tMy01LCAjY28tMy02LCAjY28tMy03LCAjY28tMy04e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAxKTtcXG59XFxuXFxuI2NvLTktNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQyKTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cblxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIFNISVAgRkFDVE9SWSBGVU5DVElPTlxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXAoeEluLHlJbixkaXJJbixsZW5JbixuYW1lSW4pIHtcbiAgICBsZXQgcG9zaXRpb25BcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7aTxsZW5JbjtpKyspIHtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmUgPSB7fTtcbiAgICAgICAgaWYgKGRpckluID09PSBcInhcIikge1xuICAgICAgICAgICAgc2hpcFNxdWFyZSA9IHtcbiAgICAgICAgICAgICAgICBwb3NYOiB4SW4gKyBpLFxuICAgICAgICAgICAgICAgIHBvc1k6IHlJbixcbiAgICAgICAgICAgICAgICBoaXRTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpckluID09PSBcInlcIikge1xuICAgICAgICAgICAgc2hpcFNxdWFyZSA9IHtcbiAgICAgICAgICAgICAgICBwb3NYOiB4SW4sXG4gICAgICAgICAgICAgICAgcG9zWTogeUluICtpLFxuICAgICAgICAgICAgICAgIGhpdFN0YXR1czogZmFsc2UsIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uQXJyLnB1c2goc2hpcFNxdWFyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy9NZXRob2RzICYgcHJvcGVydGllcyBmcm9tIGEgc2hpcFxuICAgICAgICBfc2hpcExlbmd0aDogbGVuSW4sXG4gICAgICAgIHNoaXBUeXBlOiBuYW1lSW4sXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbkFyciwvL3JlbmFtZSB0byBzb21laHRpbmcgbW9yZSBmaXR0aW5nXG4gICAgICAgIHN1bmtZTjogZmFsc2UsXG4gICAgICAgIGhpdDogZnVuY3Rpb24oc2hpcEluZGV4KSB7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpPTA7aTx0aGlzLl9zaGlwTGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgIC8vaWYgaGl0IGluZGV4IGlzIG9uIHNoaXBcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbltpXS5wb3NYID09PSBoaXRYICYmIHRoaXMucG9zaXRpb25baV0ucG9zWSA9PT0gaGl0WSkge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIGFscmVhZHkgaGl0XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbltzaGlwSW5kZXhdLmhpdFN0YXR1cykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW52YWxpZCBoaXRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkhpdCFcIilcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uW3NoaXBJbmRleF0uaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgaGl0Q291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChpPTA7aTx0aGlzLl9zaGlwTGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uW2ldLmhpdFN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoaXRDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoaXRDb3VudCA+IHRoaXMuX3NoaXBMZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vua1lOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rWU47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vua1lOID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1lOO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuLy8gQk9BUkQgRkFDVE9SWSBGVU5DVElPTlxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvL01ldGhvZHMgJiBwcm9wZXJ0aWVzIGZyb20gYSBzaGlwXG4gICAgICAgIHNoaXBzQWxsOiBbXSxcbiAgICAgICAgaGl0czogW10sXG4gICAgICAgIG1pc3Nlc0FsbDogW10sIC8va2VlcCB0cmFjayB0byBkaXNwbGF5IG9uIGJvYXJkXG4gICAgICAgIHJlY2lldmVBdHRhY2s6IGZ1bmN0aW9uKGF0a1gsYXRrWSkge1xuICAgICAgICAgICAgLy90YWtlcyBwYWlyIG9mIGNvb3JkaW5hdGVzIGFuZCBkZXRlcm1pbmVzIGlmIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgICAgICAgICAvL2lmIHllcyBzZW5kIGhpdCBmdW5jdGlvbiB0byBzaGlwID4+IHJlY2lldmVzIFwiaGl0XCIgb3IgXCJpbnZhbGlkXCIgYmFja1xuICAgICAgICAgICAgLy9pZiBub3QgcmVjb3JkcyBhIG1pc3NcbiAgICAgICAgICAgIGxldCBoaXRGbGFnID0gZmFsc2U7IC8vb25seSB0byBjaGVjayBpZiB3YXMgYSBoaXQgb24gc2hpcCwgbm90IHZhbGlkL2ludmFsaWRcbiAgICAgICAgICAgIGxldCBtaXNzRmxhZyA9IGZhbHNlOyAvL3NldCB0byB0cnVlIHdoZW4gYXR0YWNrIG5vdCBhIGhpdCBvciBpbnZhbGlkXG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzcG9uc2UgPSBcIlwiO1xuICAgICAgICAgICAgLy9DaGVja3MgZm9yIEhpdC9JbnZhbGlkIEhpdFxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuc2hpcHNBbGwubGVuZ3RoOyBpKyspIHsgLy9mb3IgYWxsIHNoaXBzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb24ubGVuZ3RoOyBqKyspIHsgIC8vZm9yIGFsbCBzcG90cyBvbiBzaGlwXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgaGl0IGluZGV4IGlzIG9uIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0a1ggPT09IHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb25bal0ucG9zWCAmJiBhdGtZID09PSB0aGlzLnNoaXBzQWxsW2ldLnBvc2l0aW9uW2pdLnBvc1kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IHRoaXMuc2hpcHNBbGxbaV0uaGl0KGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0RmxhZyA9IHRydWU7IC8vd2lsbCBhbHdheXMgYmUgdHJ1ZSBpZiBwb3NpdGlvbiBpcyBvbiBhIHNoaXAgcGVyIGlmIHN0YXRlbWVudCBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgSW52YWxpZCBNaXNzXG4gICAgICAgICAgICBpZiAoIWhpdEZsYWcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGs8dGhpcy5taXNzZXNBbGwubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0a1ggPT09IHRoaXMubWlzc2VzQWxsW2tdLnBvc1ggJiYgYXRrWSA9PT0gdGhpcy5taXNzZXNBbGxba10ucG9zWSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludmFsaWQgbWlzcyFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IFwiaW52YWxpZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgTWlzc1xuICAgICAgICAgICAgaWYgKGF0dGFja1Jlc3BvbnNlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbGlkIG1pc3MhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VzQWxsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NYOiBhdGtYLFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBhdGtZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYXR0YWNrUmVzcG9uc2UgPSBcIm1pc3NcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXNwb25zZTtcbiAgICAgICAgfSxcblxuICAgICAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpIHtcbiAgICAgICAgICAgIGxldCB2YWxpZENoZWNrID0gZ2FtZVBsYXkuY2hlY2tMb2NhdGlvblZhbGlkKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgLy9ET1VCTEUgQ0hFQ0sgV0hZIERPIEkgVkFMSUQgQ0hFQ0sgQUdBSU4/P1xuICAgICAgICAgICAgc3dpdGNoICh2YWxpZENoZWNrKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FudCBwbGFjZSBzaGlwIGhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZFwiOlxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IGNyZWF0ZVNoaXAoeEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzQWxsLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LnBsYWNlU2hpcERvbShwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoLHNoaXBOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhdXRvUGxhY2VTaGlwc0FsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnBsYWNlU2hpcChcImNvXCIsMSwxLFwieFwiLDUsXCJUZXN0IFNoaXBcIik7XG5cbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IFtcInhcIixcInlcIl07XG4gICAgICAgICAgICAvLyB3aGlsZSAoY291bnQgPiAxKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zaGlwc0FsbC5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgbGV0IHhJbmRleCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxKTtcbiAgICAgICAgICAgICAgICBsZXQgeUluZGV4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEpO1xuICAgICAgICAgICAgICAgIGxldCByYW5kRGlySW50ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZERpcmVjdGlvbiA9IGRpcmVjdGlvbnNbcmFuZERpckludF07XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBnYW1lUGxheS5zaGlwU2l6ZXNbdGhpcy5zaGlwc0FsbC5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IGdhbWVQbGF5LnNoaXBOYW1lc1t0aGlzLnNoaXBzQWxsLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBzaGlwXCIsc2hpcE5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKFwiY29cIix4SW5kZXgseUluZGV4LHJhbmREaXJlY3Rpb24sc2hpcExlbmd0aCxzaGlwTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsbFN1bms6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzdW5rQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5zaGlwc0FsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzQWxsWzBdLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgIHN1bmtDb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bmtDb3VudCA+IHRoaXMuc2hpcHNBbGwubGVuZ3RoIC0xKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuLy8gUExBWUVSIEZBQ1RPUlkgRlVOQ1RJT05cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5mdW5jdGlvbiBwbGF5ZXJOZXcobmFtZSkge1xuICAgIGlmIChuYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29tcHV0ZXJcIixcbiAgICAgICAgICAgIGJvYXJkOiBnYW1lQm9hcmQoKSxcbiAgICAgICAgICAgIGF0dGFjazogZnVuY3Rpb24ocGxheWVySW4pIHtcbiAgICAgICAgICAgICAgICAvL2V2ZW50dWFsbHkgd2lsbCBleHBlY3QgaW5kZXggdG8gY29tZSBpbiBhcyBhIGNsaWNrIGV2ZW50IChlLnRhcmdldC5pZCA9IFwieCx5XCIpXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1N0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoIWF0dGFja1N0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSsxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSsxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdCA9IHBsYXllckluLmJvYXJkLnJlY2lldmVBdHRhY2socmFuZFgscmFuZFkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2sgUmVzdWx0IGF0IHg6JHtyYW5kWH0geToke3JhbmRZfWAsYXR0YWNrUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhdHRhY2tSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoaXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1pc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImludmFsaWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyeSBhbm90aGVyIGF0dGFja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2tlZXAgYXR0YWNraW5nIGIvYyBhdHRhY2sgd2FzIGludmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGJvYXJkOiBnYW1lQm9hcmQoKSxcbiAgICAgICAgICAgIGF0dGFjazogZnVuY3Rpb24ocGxheWVySW4seEluLHlJbikge1xuICAgICAgICAgICAgICAgIC8vZXZlbnR1YWxseSB3aWxsIGV4cGVjdCBpbmRleCB0byBjb21lIGluIGFzIGEgY2xpY2sgZXZlbnQgKGUudGFyZ2V0LmlkID0gXCJ4LHlcIilcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0ID0gcGxheWVySW4uYm9hcmQucmVjaWV2ZUF0dGFjayh4SW4seUluKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIEdBTUVQTEFZIExPR0lDIE1PRFVMRVxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5jb25zdCBnYW1lUGxheSA9IHtcbiAgICBwbGF5ZXJzQWxsOiBbXSwgLy9bY29tcHV0ZXIsIHBsYXllcjFdXG4gICAgc2hpcFNpemVzOiBbNSw0LDMsMywyXSxcbiAgICBzaGlwTmFtZXM6IFtcImNhcnJpZXJcIixcImJhdHRsZXNoaXBcIixcImNydWlzZXJcIixcInN1Ym1hcmluZVwiLFwiZGVzdHJveWVyXCJdLFxuICAgIHNoaXBEaXJlY3Rpb246IFwieFwiLFxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL3BvcHVsYXRlIGJvYXJkIGZvciBib3RoIHNpZGVzXG4gICAgICAgIGRvbUludGVyYWN0LnBvcHVsYXRlQm9hcmQoXCJjb21wdXRlclwiKTtcbiAgICAgICAgZG9tSW50ZXJhY3QucG9wdWxhdGVCb2FyZChcIlBsYXllciAxXCIpO1xuICAgICAgICAvL3NlbGVjdCBmb3JtIGVsZW1lbnQgYW5kIGFkZCBldmVudCBsaXN0ZW5lclxuICAgICAgICBsZXQgcGxheWVySW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItaW5cIik7XG4gICAgICAgIHBsYXllckluRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsZG9tSW50ZXJhY3QubmFtZUluKTtcbiAgICB9LFxuXG4gICAgLy9QbGF5ZXIgMSBzZXR1cFxuICAgIHNldFVwR2FtZTogZnVuY3Rpb24ocGxheWVyMU5hbWUpIHtcbiAgICAgICAgLy9BZGQgcGxheWVyc1xuICAgICAgICB0aGlzLnBsYXllcnNBbGwucHVzaChwbGF5ZXJOZXcoXCJjb21wdXRlclwiKSk7XG4gICAgICAgIHRoaXMucGxheWVyc0FsbC5wdXNoKHBsYXllck5ldyhgJHtwbGF5ZXIxTmFtZX1gKSk7XG4gICAgICAgIC8vYWRkIEV2ZW50IExpc3RlbmVycyBvbiBwMSBib2FyZCBzcXVhcmVzIHRvIHBsYWNlIHNoaXBzXG4gICAgICAgIGRvbUludGVyYWN0LmRvbVVpVXBkYXRlKFwicGxhY2luZy1zaGlwc1wiLCBcInN0YXJ0XCIpO1xuICAgIH0sXG5cbiAgICAvL1Jlc3Qgb2YgR2FtZSBTZXR1cFxuICAgIGNoZWNrQWxsU2hpcHNQbGFjZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQWxsWzFdLmJvYXJkLnNoaXBzQWxsLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgLy9yZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIHBsYXllciBib2FyZFxuICAgICAgICAgICAgLy9oaWRlIGRpcmVjdGlvbiBidXR0b25cbiAgICAgICAgICAgIGRvbUludGVyYWN0LmRvbVVpVXBkYXRlKFwicGxhY2luZy1zaGlwc1wiLCBcInN0b3BcIik7XG4gICAgICAgICAgICAvL3BvcHVsYXRlIGNvbXB1dGVyIGJvYXJkXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIEF1dG8tUGxhY2VcIik7XG4gICAgICAgICAgICBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLmJvYXJkLmF1dG9QbGFjZVNoaXBzQWxsKCk7XG5cbiAgICAgICAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgYXR0YWNraW5nXG4gICAgICAgICAgICAvL2NhbGwgc3dpdGNoaW5nIHR1cm5zIGZ1bmN0aW9uP1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVEaXJlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZ2FtZVBsYXkuc2hpcERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGdhbWVQbGF5LnNoaXBEaXJlY3Rpb24gPSBcInlcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVQbGF5LnNoaXBEaXJlY3Rpb24gPSBcInhcIjsgXG4gICAgICAgIH1cbiAgICAgICAgZG9tSW50ZXJhY3QudG9nZ2xlRGlyZWN0aW9uRGlzcGxheSgpO1xuICAgIH0sXG4gICAgY2hlY2tMb2NhdGlvblZhbGlkOiBmdW5jdGlvbihwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGxldCBlcnJvck1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhY2luZy1lcnJvclwiKTtcbiAgICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IFwieFwiICYmICh4SW5kZXgrc2hpcExlbmd0aC0xKSA+IDEwKSB7XG4gICAgICAgICAgICBlcnJvck1zZy5pbm5lckhUTUwgPSBcIkVycm9yLCBtb3ZlIHNoaXAgbGVmdCwgb3IgY2hhbmdlIGRpcmVjdGlvblwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjsgLy9VcGRhdGUgd2l0aCBFcnJvciBIYW5kbGluZyBcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInlcIiAmJiAoeUluZGV4K3NoaXBMZW5ndGgtMSkgPiAxMCkge1xuICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJFcnJvciwgbW92ZSBzaGlwIHVwLCBvciBjaGFuZ2UgZGlyZWN0aW9uXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJlcnJvclwiOyAvL1VwZGF0ZSB3aXRoIEVycm9yIEhhbmRsaW5nIFxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmNoZWNrU3BvdFRha2VuKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpKSB7XG4gICAgICAgICAgICBlcnJvck1zZy5pbm5lckhUTUwgPSBcIkVycm9yLCBjb25mbGljdCB3aXRoIGFub3RoZXIgc2hpcFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjsgLy9VcGRhdGUgd2l0aCBFcnJvciBIYW5kbGluZyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlcnJvck1zZy5pbm5lckhUTUwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGVycm9yTXNnLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJ2YWxpZFwiO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjaGVja1Nwb3RUYWtlbjogZnVuY3Rpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCkge1xuICAgICAgICAvL3VzZXMgY2xhc3NsaXN0IGxlbmd0aCBvZiBzcXVhcmUgdG8gZGV0ZXJtaW5lIGlmIGEgc2hpcCBpcyBhbHJlYWR5IHRoZXJlXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHNoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMb2NhdGlvbi5jbGFzc0xpc3QubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbEluZGV4fS0ke3lJbmRleCtpfS0ke3hJbmRleH1gKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExvY2F0aW9uLmNsYXNzTGlzdC5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+flxuLy8gRE9NIElOVEVSQUNUIE1PRFVMRVxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5jb25zdCBkb21JbnRlcmFjdCA9IHtcbiAgICBwb3B1bGF0ZUJvYXJkOiBmdW5jdGlvbihwbGF5ZXJJbikge1xuICAgICAgICAvL3NlbGVjdCBib2FyZCBiYXNlZCBvbiBwbGF5ZXIgdGhhdCBjb21lcyBpbiB0byBhcHBlbmQgdG9cbiAgICAgICAgbGV0IGdhbWVib2FyZERpdjtcbiAgICAgICAgbGV0IHBsYXllcklkID0gXCJcIjtcbiAgICAgICAgaWYgKHBsYXllckluID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcC1ib2FyZFwiKTtcbiAgICAgICAgICAgIHBsYXllcklkID0gXCJjb1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLWJvYXJkXCIpO1xuICAgICAgICAgICAgcGxheWVySWQgPSBcInAxXCI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0xOyBpPD0xMDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MTsgajw9MTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZURpdi5pZCA9IGAke3BsYXllcklkfS0ke2l9LSR7an1gO1xuICAgICAgICAgICAgICAgIHNxdWFyZURpdi5jbGFzc0xpc3QgPSBcImdhbWUtc3F1YXJlXCJcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmREaXYuYXBwZW5kQ2hpbGQoc3F1YXJlRGl2KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBuYW1lSW46IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT10ZXh0XScpWzBdO1xuICAgICAgICBsZXQgcGxheWVyTmFtZSAgPSBmb3JtSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICBpZiAocGxheWVyTmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyTmFtZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyMS1uYW1lIGgyXCIpOyBcbiAgICAgICAgICAgIHBsYXllck5hbWVEaXYuaW5uZXJIVE1MID0gcGxheWVyTmFtZTsgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllck5hbWUgPSBcIlBsYXllcjFcIjtcbiAgICAgICAgfVxuICAgICAgICBmb3JtSW5wdXQucGFyZW50RWxlbWVudC5yZXNldCgpO1xuICAgICAgICBmb3JtSW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgICAgICBnYW1lUGxheS5zZXRVcEdhbWUocGxheWVyTmFtZSk7XG4gICAgfSxcbiAgICBkb21VaVVwZGF0ZTogZnVuY3Rpb24ocmVhc29uLGNoYW5nZVR5cGUpIHtcbiAgICAgICAgLy91cGRhdGVzIFVJIGludGVyYWN0aW9uIGluY2x1ZGluZyBldmVudCBsaXN0ZW5lcnMsIGJ1dHRvbnMsIFxuICAgICAgICBsZXQgY2FzZUluID0gYCR7cmVhc29ufSAke2NoYW5nZVR5cGV9YDtcbiAgICAgICAgc3dpdGNoIChjYXNlSW4pIHtcbiAgICAgICAgICAgIGNhc2UgXCJwbGFjaW5nLXNoaXBzIHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKFwib25cIik7XG4gICAgICAgICAgICAgICAgLy9wbGF5ZXIgMSBib2FyZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgbGV0IHBsYXllclNxdWFyZXNTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyMS1ib2FyZCAuZ2FtZS1zcXVhcmVcIik7XG4gICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlc1N0YXJ0LmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsZG9tSW50ZXJhY3QubG9jYXRpb25EYXRhKSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlc1N0YXJ0LmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkb21JbnRlcmFjdC5sb2NhdGlvbkRhdGEpKTtcbiAgICAgICAgICAgICAgICAvL2RpcmVjdGlvbiBidXR0b25cbiAgICAgICAgICAgICAgICBsZXQgZGlyVG9nZ2xlQnRuU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpcmVjdGlvbi10b2ctYnRuXCIpO1xuICAgICAgICAgICAgICAgIGRpclRvZ2dsZUJ0blN0YXJ0LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZGlyVG9nZ2xlQnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZ2FtZVBsYXkudG9nZ2xlRGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwbGFjaW5nLXNoaXBzIHN0b3BcIjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJvZmZcIik7XG4gICAgICAgICAgICAgICAgbGV0IHBsYXllclNxdWFyZXNTdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIxLWJvYXJkIC5nYW1lLXNxdWFyZVwiKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcXVhcmVzU3RvcC5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLGRvbUludGVyYWN0LmxvY2F0aW9uRGF0YSkpO1xuICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZXNTdG9wLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkb21JbnRlcmFjdC5sb2NhdGlvbkRhdGEpKTtcbiAgICAgICAgICAgICAgICBsZXQgZGlyVG9nZ2xlQnRuU3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyZWN0aW9uLXRvZy1idG5cIik7XG4gICAgICAgICAgICAgICAgZGlyVG9nZ2xlQnRuU3RvcC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRpclRvZ2dsZUJ0blN0b3AucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZ2FtZVBsYXkudG9nZ2xlRGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBsb2NhdGlvbkRhdGE6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY3VycmVudERpcmVjdGlvbiA9IGdhbWVQbGF5LnNoaXBEaXJlY3Rpb247XG4gICAgICAgIC8vQ3VycmVudCBTaGlwIExlbmd0aCBiZWluZyBwbGFjZWRcbiAgICAgICAgbGV0IHNoaXBJbmRleCA9IGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuc2hpcHNBbGwubGVuZ3RoO1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGdhbWVQbGF5LnNoaXBTaXplc1tzaGlwSW5kZXhdO1xuICAgICAgICBsZXQgc2hpcE5hbWUgPSBnYW1lUGxheS5zaGlwTmFtZXNbc2hpcEluZGV4XTtcbiAgICAgICAgLy9nZXQgZXZlbnQgJiBzcXVhcmUgbG9jYXRpb24gaW5mb1xuICAgICAgICBsZXQgZXZlbnRUeXBlID0gZS50eXBlO1xuICAgICAgICBsZXQgc3F1YXJlSWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgbGV0IGluZGljZXMgPSBzcXVhcmVJZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBwbEluZGV4ID0gaW5kaWNlc1swXTsgLy9rZWVwaW5nIGluIGNhc2UgbmVlZCB0aGlzIGZ1bmN0aW9uIGZvciBjb21wdXRlciBwbGFjZW1lbnRzIHRvb1xuICAgICAgICBsZXQgeEluZGV4ID0gTnVtYmVyKGluZGljZXNbMl0pO1xuICAgICAgICBsZXQgeUluZGV4ID0gTnVtYmVyKGluZGljZXNbMV0pO1xuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgIGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQucGxhY2VTaGlwKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgaWYgKGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuc2hpcHNBbGwubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgZ2FtZVBsYXkuY2hlY2tBbGxTaGlwc1BsYWNlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gXCJtb3VzZW92ZXJcIikge1xuICAgICAgICAgICAgZG9tSW50ZXJhY3Quc2hvd0xvY2F0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGFjZVNoaXBEb206IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpIHtcbiAgICAgICAgLy91cGRhdGVzIHNxdWFyZXMgY2xhc3Mgdy8gc2hpcCBpbmZvXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHNoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdCA9IGBnYW1lLXNxdWFyZSBzaGlwLWFjdGl2ZSAke3BsSW5kZXh9LSR7c2hpcE5hbWV9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4K2l9LSR7eEluZGV4fWApO1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMb2NhdGlvbi5jbGFzc0xpc3QgPSBgZ2FtZS1zcXVhcmUgc2hpcC1hY3RpdmUgJHtwbEluZGV4fS0ke3NoaXBOYW1lfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvd0xvY2F0aW9uOiBmdW5jdGlvbihwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGxldCB2YWxpZFJlcG9ydCA9IGdhbWVQbGF5LmNoZWNrTG9jYXRpb25WYWxpZChwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKTtcbiAgICAgICAgLy9DbGVhciBhbnkgY2VsbHMgYXJlYWR5IGhpZ2hsaWdodGVkIFxuICAgICAgICBkb21JbnRlcmFjdC5oaWRlTG9jYXRpb24oXCJ2YWxpZFwiKTtcbiAgICAgICAgZG9tSW50ZXJhY3QuaGlkZUxvY2F0aW9uKFwiZXJyb3JcIik7XG4gICAgICAgIC8vaGlnaGxpZ2h0IHNlbGVjdGVkIHNoaXAgcGxhY2VtZW50IGJhc2VkIG9uIHZhbGlkIHN0YXR1cyBcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8c2hpcExlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIGlmKHhJbmRleCtpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdC50b2dnbGUodmFsaWRSZXBvcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoeUluZGV4K2kgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaGxpZ2h0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbEluZGV4fS0ke3lJbmRleCtpfS0ke3hJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0TG9jYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSh2YWxpZFJlcG9ydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoaWRlTG9jYXRpb246IGZ1bmN0aW9uKGNsYXNzVG9IaWRlKSB7XG4gICAgICAgIGxldCBkaXZzVG9IaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NUb0hpZGV9YCk7XG4gICAgICAgIGlmIChkaXZzVG9IaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRpdnNUb0hpZGUuZm9yRWFjaChzcXVhcmVIaWdobGlnaHRlZCA9PiBzcXVhcmVIaWdobGlnaHRlZC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzVG9IaWRlfWApKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlRGlyZWN0aW9uRGlzcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gZ2FtZVBsYXkuc2hpcERpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpcmVjdGlvbi10b2ctYnRuXCIpLmlubmVySFRNTCA9IGAke3RleHR9IERpcmVjdGlvbmA7XG4gICAgfVxufVxuXG5nYW1lUGxheS5pbml0KCk7XG5cblxuXG5cblxuXG4vL0RlYnVnZ2luZyBDYXNlc1xuXG4vLyBsZXQgdGVzdEJvYXJkID0gZ2FtZUJvYXJkKCk7XG4vLyB0ZXN0Qm9hcmQucGxhY2VTaGlwKDUsXCIzLDJcIixcInlcIik7XG4vLyBjb25zb2xlLmxvZyh0ZXN0Qm9hcmQucmVjaWV2ZUF0dGFjayg0LDIpKTtcbi8vIGNvbnNvbGUubG9nKHRlc3RCb2FyZC5yZWNpZXZlQXR0YWNrKDQsMikpO1xuXG4vLyBsZXQgcGxheWVyMSA9IHBsYXllck5ldyhcIlN0ZXZlXCIpO1xuLy8gcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoMTAsXCIxLDFcIixcInhcIik7XG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIxKTtcbi8vIGxldCBwbGF5ZXJDb21wID0gcGxheWVyTmV3KFwiY29tcHV0ZXJcIik7XG4vLyBwbGF5ZXJDb21wLmF0dGFjayhwbGF5ZXIxKTtcblxuXG4vLyAvLyBUZXN0aW5nIEV4cG9ydHNcbi8vIG1vZHVsZS5leHBvcnRzID0ge2NyZWF0ZVNoaXAsIGdhbWVCb2FyZCwgcGxheWVyTmV3fTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9