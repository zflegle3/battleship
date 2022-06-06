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
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Main Document Styles */\n/* Main Styled Font */\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\n\nfont-size: 10px;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* Header Styles */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n#comp-board .game-square:hover {\n    background-color: var(--dark-blue2);\n    /* background-color: rgb(70, 70, 70); */\n}\n\n#comp-board .game-square:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: --piece-hp-width;\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles */\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n}\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Main Document Styles */\n/* Main Styled Font */\n@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\n\nfont-size: 10px;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* Header Styles */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n#comp-board .game-square:hover {\n    background-color: var(--dark-blue2);\n    /* background-color: rgb(70, 70, 70); */\n}\n\n#comp-board .game-square:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: --piece-hp-width;\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles */\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n}\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */"],"sourceRoot":""}]);
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

function createShip(lenIn,xIn,yIn,dirIn) {
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
            console.log(this.shipsAll);
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
        checkLocationValid: function(xIndex,yIndex,currentDirection,shipLength) {
            if (currentDirection === "x" && (xIndex+shipLength-1) > 10) {
                console.log("Error, move ship left, or change direction");
                return "error"; //Update with Error Handling 
            } else if (currentDirection === "y" && (yIndex+shipLength-1) > 10) {
                console.log("Error, move ship up, or change direction");
                return "error"; //Update with Error Handling 
            } else {
                return "valid";
            }
        },
        placeShip: function(shipLength,indexStart,direction) {
            //eventually will expect index to come in as a click event (e.target.id = "x,y")
            //expectiing direction as string "x" or "y"
            //let indices = indexStart.split(","); // [Xpos,Ypos]
            let indices = indexStart.split(",").map((string) => Number(string));
            if (direction === "x" && (indices[0]+shipLength-1) > 10) {
                this.shipsAll.push("Error"); //Update with Error Handling 
                // console.log("Error, move ship left, or change direction");
            } else if (direction === "y" && (indices[1]+shipLength-1) > 10) {
                this.shipsAll.push("Error"); //Update with Error Handling 
                // console.log("Error, move ship up, or change direction");
            } else {
                // console.log("placing ship");
                let newShip = createShip(shipLength,indices[0],indices[1],direction);
                this.shipsAll.push(newShip)
            }
        },
        allSunk: function() {
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

const gamePlay = {
    playersAll: [], //[computer, player1]
    shipSizes: [5,4,3,3,2],
    shipDirection: "x",
    setupGame: function() {
        //populate board for both sides
        domInteract.populateBoard("computer");
        domInteract.populateBoard("Player 1");
        //select form element and add event listener
        let playerInForm = document.getElementById("player-in");
        playerInForm.addEventListener("submit",gamePlay.shipPlacement);
    },

    shipPlacement: function(e) {
        e.preventDefault();
        //Update Player Name value and display
        let player1Name =domInteract.nameIn();
        //create players
        gamePlay.playersAll.push(playerNew("computer"));
        gamePlay.playersAll.push(playerNew(`${player1Name}`));
        console.log(gamePlay.playersAll);
        // this.playersAll[1] = playerNew(`${player1Name}`);
        //add Event Listeners to place ships
        let playerSquares = document.querySelectorAll("#player1-board .game-square");
        playerSquares.forEach(square => square.addEventListener("mouseover",domInteract.showLocation));
        playerSquares.forEach(square => square.addEventListener("click",domInteract.placeShips));
        let dirToggleBtn = document.getElementById("direction-tog-btn");
        dirToggleBtn.classList.toggle("hidden");
        dirToggleBtn.addEventListener("click",gamePlay.toggleDirection)

        // for (let square in playerSquares) {
        //     square.addEventListener("click",domInteract.placeShips);
        // }


        //Place Ships Player 1
        //add event listener on all player 1 squares to call dom place function



    },



    gameLoop: function() {
        //Create players
        let player1Name = "Steve" // Update with Prompt in from user
        this.playersAll[0] = playerNew("computer");
        this.playersAll[1] = playerNew(`${player1Name}`);

        //Computer Places ships
        this.playersAll[0].gameBoard.placeShip(newShipSizes[0],"1,1","x");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[1],"1,2","y");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[2],"2,2","y");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[3],"3,2","y");
        this.playersAll[0].gameBoard.placeShip(newShipSizes[4],"2,5","x");
        //Player 1 places ships 
        this.playersAll[1].gameBoard.placeShip(newShipSizes[0],"1,1","x");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[1],"1,2","y");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[2],"2,2","y");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[3],"3,2","y");
        this.playersAll[1].gameBoard.placeShip(newShipSizes[4],"2,5","x");
    },
    toggleDirection: function() {
        if (gamePlay.shipDirection === "x") {
            gamePlay.shipDirection = "y";
        } else {
            gamePlay.shipDirection = "x"; 
        }
        domInteract.toggleDirectionDisplay();
    }



}

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

        //for i 0-10 j 0-10
        //create div
        //add attributes, class & ID
        //append divs to player's board 
        for (let i=1; i<=10;i++) {
            for (let j=1; j<=10; j++) {
                let squareDiv = document.createElement("div");
                squareDiv.id = `${playerId}-${i}-${j}`;
                squareDiv.classList = "game-square"
                gameboardDiv.appendChild(squareDiv)
            }
        }
    },
    nameIn: function() {
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
        return playerName;
    },
    placeShips: function(e) {
        //check player ships number to determine which ship to place 
        console.log(e.target);
    },
    showLocation: function(e) {
        //check player ships number to determine which ship to place 
        console.log(gamePlay.playersAll[1].board.shipsAll.length);
        //pull ship length based on ships placed
        //use ship length & current direction to determine squares to display
        let shipIndex = gamePlay.playersAll[1].board.shipsAll.length;
        console.log(shipIndex);
        let currentLength = gamePlay.shipSizes[shipIndex];
        //get square location info
        let squareId = e.target.id;
        let indices = squareId.split("-");
        let plIndex = indices[0]; //keeping in case need this function for computer placements too
        let xIndex = Number(indices[2]);
        let yIndex = Number(indices[1]);
        let validReport = gamePlay.playersAll[1].board.checkLocationValid(xIndex,yIndex,gamePlay.shipDirection,currentLength);
        console.log("valid?",validReport);
        //unhighlight any cells aready highlighted 
        domInteract.hideLocation("valid");
        domInteract.hideLocation("error");
        //highlight selected ship placement based on valid status 
        for (let i=0;i<currentLength;i++) {
            if (gamePlay.shipDirection === "x") {
                if(xIndex+i < 11) {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`)
                    highlightLocation.classList.toggle(validReport);
                }
            } else {
                if(yIndex+i < 11) {
                    console.log(`${plIndex}-${yIndex+i}-${xIndex}`);
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`)
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




gamePlay.setupGame();

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


//Testing Exports
// module.exports = {createShip, gameBoard, playerNew};








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxlQUFlLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZ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O0FBQ2Q7QUFDQSxtQ0FBbUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxPQUFPO0FBQ2pFLHVFQUF1RSxRQUFRLEdBQUcsU0FBUyxHQUFHLE9BQU87QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1REFBdUQsWUFBWTtBQUNuRTtBQUNBLDBGQUEwRixZQUFZO0FBQ3RHO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvRUFBb0UsTUFBTTtBQUMxRTtBQUNBOzs7OztBQUtBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2RhbStUaG1vcitQcm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDU1MgUmVzZXQgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBNYWluIERvY3VtZW50IFN0eWxlcyAqL1xcbi8qIE1haW4gU3R5bGVkIEZvbnQgKi9cXG4vKiBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjsgKi9cXG4vKiBTdWIgRm9udCAqL1xcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuLS1kaXNwbGF5LXdpZHRoOiAyNXJlbTtcXG4tLXBpZWNlLWhwLXdpZHRoOiAwLjhyZW07XFxuXFxuLS1saWdodC1ibHVlMTogI0E1RDhGRjtcXG4tLWxpZ2h0LWJsdWUyOiAjMTRGRkY3O1xcbi0tZGFyay1ibHVlMTogIzAwODFBNztcXG4tLWRhcmstYmx1ZTI6ICMwQkM5Q0Q7XFxuLS1kYXJrLWJsdWUzOiAjMUQ4QTk5O1xcbi0tZGFyay1ibHVlNDogIzU3NzU5MDtcXG4tLWdyZXktc2hpcDE6ICM3QzdDN0M7XFxuLS1ncmV5LXNoaXAyOiAjQjJCMkIyO1xcbi0tZ3JleS1zaGlwMzogI0MzQkFCQTtcXG4tLWdyZWVuLWdvb2QxOiAjN0RDRDg1O1xcbi0tZ3JlZW4tZ29vZDI6ICNDOUYyOTk7XFxuXFxuLS1ncmVlbi1yYWRhcjE6ICNBREUyNUQ7XFxuLS1ncmVlbi1yYWRhcjI6ICM5OUMyNEQ7XFxuLS1ncmVlbi1yYWRhcjM6ICM1Q0Y2NEE7XFxuXFxuLS1zYW5kMTogI0ZDREVCRTtcXG4tLXNhbmQyOiAjRjNERThBO1xcblxcbi0tcmVkLWJhZDE6ICNBNzFEMzE7XFxuLS1yZWQtYmFkMjogI2YyOTk5OTtcXG4tLW9yYW5nZTE6ICNGN0IyNjc7XFxuLS1vcmFuZ2UyOiAjRjc5RDY1O1xcbi0tb3JhbmdlMzogI0Y0ODQ1RjtcXG5cXG5cXG5mb250LXNpemU6IDEwcHg7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVkaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2dhbWVkaXNwbGF5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3BsYXllcjEtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI2NvbXAtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbiNjb21tcyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI3BsYXllci1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItaW4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbiNwbGF5ZXItaW4gaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDMpIDtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG5cXG4vKiBHYW1lYm9hcmQgU3R5bGVzICovXFxuXFxuLyogTmFtZSBEaXNwbGF5ICovXFxuLnBsYXllci1uYW1lIHtcXG59XFxuXFxuLnBsYXllci1uYW1lIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBHYW1lYm9hcmQgKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLWdhcDogLjFyZW07XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuLXJhZGFyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUyKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgKi9cXG59XFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTsgKi9cXG59XFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTIpO1xcbn1cXG5cXG4vKiBTaGlwIFBsYWNlbWVudCBTdHlsZXMgKi9cXG4uZ2FtZS1zcXVhcmUuZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufVxcblxcbi5nYW1lLXNxdWFyZS52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWdvb2QyKTtcXG59XFxuXFxuXFxuLyogR2FtZSBQaWVjZXMgU3R5bGVzIC0gTm9uIFBsYXllciBvciBQaWVjZSBzcGVjaWZpYyAqL1xcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYge1xcbiAgICAvKiBzaGlwcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBNYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBkaXYge1xcbiAgICAvKiBzaGlwIGhwICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJocC0wXFxcIl0ge1xcbiAgICAvKiBzaGlwIGhwIGRldGFpbCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDEpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgd2lkdGg6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgbWFyZ2luOiAwIDAuMXJlbSAwLjI1cmVtIDAuMXJlbTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDAsMCwwKTsgKi9cXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBwIHtcXG4gICAgLyogc2hpcCBsYWJlbCAqL1xcbiAgICBmb250LXNpemU6IC0tcGllY2UtaHAtd2lkdGg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcblxcblxcblxcbi8qIE1vY2sgU3R5bGVzICovXFxuI2NhcnJpZXItcDEtaHAtMDMsICNjYXJyaWVyLXAxLWhwLTA0LCAjY2Fycmllci1wMS1ocC0wNSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuI2NydWlzZXItY28taHAtMDMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcbi8qICNjby00LTMsICNjby01LTIsICNjby02LTIsICNjby03LTIsICNjby03LTMsICNjby03LTQsICNjby02LTUsICNjby01LTUsICNjby00LTQsICNjby01LTN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQyKTtcXG59XFxuXFxuI2NvLTYtMywgI2NvLTYtNCwgI2NvLTUtNHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tcmFkYXIyKTtcXG59XFxuXFxuI2NvLTktMiwgI2NvLTktMywgI2NvLTktNCwgI2NvLTktNCwgI2NvLTItMiwgI2NvLTMtMiwgI2NvLTMtNSwgI2NvLTMtNiwgI2NvLTMtNywgI2NvLTMtOHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMSk7XFxufVxcblxcbiNjby05LTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdURBQXVEO0FBQ3ZEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFB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QUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixxQ0FBcUM7QUFDekM7Ozs7Ozs7QUFPQSxnQkFBZ0I7QUFDaEI7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIFJlc2V0IGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQgKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwcHg7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogTWFpbiBEb2N1bWVudCBTdHlsZXMgKi9cXG4vKiBNYWluIFN0eWxlZCBGb250ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2RhbStUaG1vcitQcm8mZGlzcGxheT1zd2FwJyk7XFxuLyogZm9udC1mYW1pbHk6ICdLZGFtIFRobW9yIFBybycsIHNhbnMtc2VyaWY7ICovXFxuLyogU3ViIEZvbnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuLS1kaXNwbGF5LXdpZHRoOiAyNXJlbTtcXG4tLXBpZWNlLWhwLXdpZHRoOiAwLjhyZW07XFxuXFxuLS1saWdodC1ibHVlMTogI0E1RDhGRjtcXG4tLWxpZ2h0LWJsdWUyOiAjMTRGRkY3O1xcbi0tZGFyay1ibHVlMTogIzAwODFBNztcXG4tLWRhcmstYmx1ZTI6ICMwQkM5Q0Q7XFxuLS1kYXJrLWJsdWUzOiAjMUQ4QTk5O1xcbi0tZGFyay1ibHVlNDogIzU3NzU5MDtcXG4tLWdyZXktc2hpcDE6ICM3QzdDN0M7XFxuLS1ncmV5LXNoaXAyOiAjQjJCMkIyO1xcbi0tZ3JleS1zaGlwMzogI0MzQkFCQTtcXG4tLWdyZWVuLWdvb2QxOiAjN0RDRDg1O1xcbi0tZ3JlZW4tZ29vZDI6ICNDOUYyOTk7XFxuXFxuLS1ncmVlbi1yYWRhcjE6ICNBREUyNUQ7XFxuLS1ncmVlbi1yYWRhcjI6ICM5OUMyNEQ7XFxuLS1ncmVlbi1yYWRhcjM6ICM1Q0Y2NEE7XFxuXFxuLS1zYW5kMTogI0ZDREVCRTtcXG4tLXNhbmQyOiAjRjNERThBO1xcblxcbi0tcmVkLWJhZDE6ICNBNzFEMzE7XFxuLS1yZWQtYmFkMjogI2YyOTk5OTtcXG4tLW9yYW5nZTE6ICNGN0IyNjc7XFxuLS1vcmFuZ2UyOiAjRjc5RDY1O1xcbi0tb3JhbmdlMzogI0Y0ODQ1RjtcXG5cXG5cXG5mb250LXNpemU6IDEwcHg7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVkaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2dhbWVkaXNwbGF5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3BsYXllcjEtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI2NvbXAtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbiNjb21tcyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI3BsYXllci1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItaW4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbiNwbGF5ZXItaW4gaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDMpIDtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG5cXG4vKiBHYW1lYm9hcmQgU3R5bGVzICovXFxuXFxuLyogTmFtZSBEaXNwbGF5ICovXFxuLnBsYXllci1uYW1lIHtcXG59XFxuXFxuLnBsYXllci1uYW1lIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBHYW1lYm9hcmQgKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLWdhcDogLjFyZW07XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuLXJhZGFyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUyKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgKi9cXG59XFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTsgKi9cXG59XFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTIpO1xcbn1cXG5cXG4vKiBTaGlwIFBsYWNlbWVudCBTdHlsZXMgKi9cXG4uZ2FtZS1zcXVhcmUuZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufVxcblxcbi5nYW1lLXNxdWFyZS52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWdvb2QyKTtcXG59XFxuXFxuXFxuLyogR2FtZSBQaWVjZXMgU3R5bGVzIC0gTm9uIFBsYXllciBvciBQaWVjZSBzcGVjaWZpYyAqL1xcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYge1xcbiAgICAvKiBzaGlwcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBNYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBkaXYge1xcbiAgICAvKiBzaGlwIGhwICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJocC0wXFxcIl0ge1xcbiAgICAvKiBzaGlwIGhwIGRldGFpbCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDEpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgd2lkdGg6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgbWFyZ2luOiAwIDAuMXJlbSAwLjI1cmVtIDAuMXJlbTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDAsMCwwKTsgKi9cXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBwIHtcXG4gICAgLyogc2hpcCBsYWJlbCAqL1xcbiAgICBmb250LXNpemU6IC0tcGllY2UtaHAtd2lkdGg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcblxcblxcblxcbi8qIE1vY2sgU3R5bGVzICovXFxuI2NhcnJpZXItcDEtaHAtMDMsICNjYXJyaWVyLXAxLWhwLTA0LCAjY2Fycmllci1wMS1ocC0wNSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuI2NydWlzZXItY28taHAtMDMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcbi8qICNjby00LTMsICNjby01LTIsICNjby02LTIsICNjby03LTIsICNjby03LTMsICNjby03LTQsICNjby02LTUsICNjby01LTUsICNjby00LTQsICNjby01LTN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQyKTtcXG59XFxuXFxuI2NvLTYtMywgI2NvLTYtNCwgI2NvLTUtNHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tcmFkYXIyKTtcXG59XFxuXFxuI2NvLTktMiwgI2NvLTktMywgI2NvLTktNCwgI2NvLTktNCwgI2NvLTItMiwgI2NvLTMtMiwgI2NvLTMtNSwgI2NvLTMtNiwgI2NvLTMtNywgI2NvLTMtOHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMSk7XFxufVxcblxcbiNjby05LTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGlwKGxlbkluLHhJbix5SW4sZGlySW4pIHtcbiAgICBsZXQgcG9zaXRpb25BcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7aTxsZW5JbjtpKyspIHtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmUgPSB7fTtcbiAgICAgICAgaWYgKGRpckluID09PSBcInhcIikge1xuICAgICAgICAgICAgc2hpcFNxdWFyZSA9IHtcbiAgICAgICAgICAgICAgICBwb3NYOiB4SW4gKyBpLFxuICAgICAgICAgICAgICAgIHBvc1k6IHlJbixcbiAgICAgICAgICAgICAgICBoaXRTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpckluID09PSBcInlcIikge1xuICAgICAgICAgICAgc2hpcFNxdWFyZSA9IHtcbiAgICAgICAgICAgICAgICBwb3NYOiB4SW4sXG4gICAgICAgICAgICAgICAgcG9zWTogeUluICtpLFxuICAgICAgICAgICAgICAgIGhpdFN0YXR1czogZmFsc2UsIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uQXJyLnB1c2goc2hpcFNxdWFyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy9NZXRob2RzICYgcHJvcGVydGllcyBmcm9tIGEgc2hpcFxuICAgICAgICBfc2hpcExlbmd0aDogbGVuSW4sXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbkFyciwvL3JlbmFtZSB0byBzb21laHRpbmcgbW9yZSBmaXR0aW5nXG4gICAgICAgIHN1bmtZTjogZmFsc2UsXG4gICAgICAgIGhpdDogZnVuY3Rpb24oc2hpcEluZGV4KSB7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpPTA7aTx0aGlzLl9zaGlwTGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgIC8vaWYgaGl0IGluZGV4IGlzIG9uIHNoaXBcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbltpXS5wb3NYID09PSBoaXRYICYmIHRoaXMucG9zaXRpb25baV0ucG9zWSA9PT0gaGl0WSkge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIGFscmVhZHkgaGl0XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbltzaGlwSW5kZXhdLmhpdFN0YXR1cykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW52YWxpZCBoaXRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkhpdCFcIilcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uW3NoaXBJbmRleF0uaGl0U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgaGl0Q291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChpPTA7aTx0aGlzLl9zaGlwTGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uW2ldLmhpdFN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoaXRDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoaXRDb3VudCA+IHRoaXMuX3NoaXBMZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vua1lOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rWU47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vua1lOID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1lOO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vTWV0aG9kcyAmIHByb3BlcnRpZXMgZnJvbSBhIHNoaXBcbiAgICAgICAgc2hpcHNBbGw6IFtdLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgbWlzc2VzQWxsOiBbXSwgLy9rZWVwIHRyYWNrIHRvIGRpc3BsYXkgb24gYm9hcmRcbiAgICAgICAgcmVjaWV2ZUF0dGFjazogZnVuY3Rpb24oYXRrWCxhdGtZKSB7XG4gICAgICAgICAgICAvL3Rha2VzIHBhaXIgb2YgY29vcmRpbmF0ZXMgYW5kIGRldGVybWluZXMgaWYgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAgICAgICAgIC8vaWYgeWVzIHNlbmQgaGl0IGZ1bmN0aW9uIHRvIHNoaXAgPj4gcmVjaWV2ZXMgXCJoaXRcIiBvciBcImludmFsaWRcIiBiYWNrXG4gICAgICAgICAgICAvL2lmIG5vdCByZWNvcmRzIGEgbWlzc1xuICAgICAgICAgICAgbGV0IGhpdEZsYWcgPSBmYWxzZTsgLy9vbmx5IHRvIGNoZWNrIGlmIHdhcyBhIGhpdCBvbiBzaGlwLCBub3QgdmFsaWQvaW52YWxpZFxuICAgICAgICAgICAgbGV0IG1pc3NGbGFnID0gZmFsc2U7IC8vc2V0IHRvIHRydWUgd2hlbiBhdHRhY2sgbm90IGEgaGl0IG9yIGludmFsaWRcbiAgICAgICAgICAgIGxldCBhdHRhY2tSZXNwb25zZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIC8vQ2hlY2tzIGZvciBIaXQvSW52YWxpZCBIaXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHNBbGwpO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuc2hpcHNBbGwubGVuZ3RoOyBpKyspIHsgLy9mb3IgYWxsIHNoaXBzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb24ubGVuZ3RoOyBqKyspIHsgIC8vZm9yIGFsbCBzcG90cyBvbiBzaGlwXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgaGl0IGluZGV4IGlzIG9uIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0a1ggPT09IHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb25bal0ucG9zWCAmJiBhdGtZID09PSB0aGlzLnNoaXBzQWxsW2ldLnBvc2l0aW9uW2pdLnBvc1kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IHRoaXMuc2hpcHNBbGxbaV0uaGl0KGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0RmxhZyA9IHRydWU7IC8vd2lsbCBhbHdheXMgYmUgdHJ1ZSBpZiBwb3NpdGlvbiBpcyBvbiBhIHNoaXAgcGVyIGlmIHN0YXRlbWVudCBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgSW52YWxpZCBNaXNzXG4gICAgICAgICAgICBpZiAoIWhpdEZsYWcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGs8dGhpcy5taXNzZXNBbGwubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0a1ggPT09IHRoaXMubWlzc2VzQWxsW2tdLnBvc1ggJiYgYXRrWSA9PT0gdGhpcy5taXNzZXNBbGxba10ucG9zWSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludmFsaWQgbWlzcyFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IFwiaW52YWxpZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgTWlzc1xuICAgICAgICAgICAgaWYgKGF0dGFja1Jlc3BvbnNlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbGlkIG1pc3MhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VzQWxsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NYOiBhdGtYLFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBhdGtZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYXR0YWNrUmVzcG9uc2UgPSBcIm1pc3NcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXNwb25zZTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tMb2NhdGlvblZhbGlkOiBmdW5jdGlvbih4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IFwieFwiICYmICh4SW5kZXgrc2hpcExlbmd0aC0xKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciwgbW92ZSBzaGlwIGxlZnQsIG9yIGNoYW5nZSBkaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjsgLy9VcGRhdGUgd2l0aCBFcnJvciBIYW5kbGluZyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ5XCIgJiYgKHlJbmRleCtzaGlwTGVuZ3RoLTEpID4gMTApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yLCBtb3ZlIHNoaXAgdXAsIG9yIGNoYW5nZSBkaXJlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjsgLy9VcGRhdGUgd2l0aCBFcnJvciBIYW5kbGluZyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidmFsaWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwOiBmdW5jdGlvbihzaGlwTGVuZ3RoLGluZGV4U3RhcnQsZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAvL2V2ZW50dWFsbHkgd2lsbCBleHBlY3QgaW5kZXggdG8gY29tZSBpbiBhcyBhIGNsaWNrIGV2ZW50IChlLnRhcmdldC5pZCA9IFwieCx5XCIpXG4gICAgICAgICAgICAvL2V4cGVjdGlpbmcgZGlyZWN0aW9uIGFzIHN0cmluZyBcInhcIiBvciBcInlcIlxuICAgICAgICAgICAgLy9sZXQgaW5kaWNlcyA9IGluZGV4U3RhcnQuc3BsaXQoXCIsXCIpOyAvLyBbWHBvcyxZcG9zXVxuICAgICAgICAgICAgbGV0IGluZGljZXMgPSBpbmRleFN0YXJ0LnNwbGl0KFwiLFwiKS5tYXAoKHN0cmluZykgPT4gTnVtYmVyKHN0cmluZykpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ4XCIgJiYgKGluZGljZXNbMF0rc2hpcExlbmd0aC0xKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc0FsbC5wdXNoKFwiRXJyb3JcIik7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFcnJvciwgbW92ZSBzaGlwIGxlZnQsIG9yIGNoYW5nZSBkaXJlY3Rpb25cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ5XCIgJiYgKGluZGljZXNbMV0rc2hpcExlbmd0aC0xKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc0FsbC5wdXNoKFwiRXJyb3JcIik7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFcnJvciwgbW92ZSBzaGlwIHVwLCBvciBjaGFuZ2UgZGlyZWN0aW9uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYWNpbmcgc2hpcFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IGNyZWF0ZVNoaXAoc2hpcExlbmd0aCxpbmRpY2VzWzBdLGluZGljZXNbMV0sZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzQWxsLnB1c2gobmV3U2hpcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxsU3VuazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgc3Vua0NvdW50ID0gMDtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuc2hpcHNBbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc0FsbFswXS5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICBzdW5rQ291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW5rQ291bnQgPiB0aGlzLnNoaXBzQWxsLmxlbmd0aCAtMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcGxheWVyTmV3KG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbXB1dGVyXCIsXG4gICAgICAgICAgICBib2FyZDogZ2FtZUJvYXJkKCksXG4gICAgICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKHBsYXllckluKSB7XG4gICAgICAgICAgICAgICAgLy9ldmVudHVhbGx5IHdpbGwgZXhwZWN0IGluZGV4IHRvIGNvbWUgaW4gYXMgYSBjbGljayBldmVudCAoZS50YXJnZXQuaWQgPSBcIngseVwiKVxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFhdHRhY2tTdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkrMSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkrMSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBwbGF5ZXJJbi5ib2FyZC5yZWNpZXZlQXR0YWNrKHJhbmRYLHJhbmRZKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQXR0YWNrIFJlc3VsdCBhdCB4OiR7cmFuZFh9IHk6JHtyYW5kWX1gLGF0dGFja1Jlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYXR0YWNrUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaGl0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtaXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnZhbGlkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnkgYW5vdGhlciBhdHRhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9rZWVwIGF0dGFja2luZyBiL2MgYXR0YWNrIHdhcyBpbnZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBib2FyZDogZ2FtZUJvYXJkKCksXG4gICAgICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKHBsYXllckluLHhJbix5SW4pIHtcbiAgICAgICAgICAgICAgICAvL2V2ZW50dWFsbHkgd2lsbCBleHBlY3QgaW5kZXggdG8gY29tZSBpbiBhcyBhIGNsaWNrIGV2ZW50IChlLnRhcmdldC5pZCA9IFwieCx5XCIpXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdCA9IHBsYXllckluLmJvYXJkLnJlY2lldmVBdHRhY2soeEluLHlJbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGdhbWVQbGF5ID0ge1xuICAgIHBsYXllcnNBbGw6IFtdLCAvL1tjb21wdXRlciwgcGxheWVyMV1cbiAgICBzaGlwU2l6ZXM6IFs1LDQsMywzLDJdLFxuICAgIHNoaXBEaXJlY3Rpb246IFwieFwiLFxuICAgIHNldHVwR2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vcG9wdWxhdGUgYm9hcmQgZm9yIGJvdGggc2lkZXNcbiAgICAgICAgZG9tSW50ZXJhY3QucG9wdWxhdGVCb2FyZChcImNvbXB1dGVyXCIpO1xuICAgICAgICBkb21JbnRlcmFjdC5wb3B1bGF0ZUJvYXJkKFwiUGxheWVyIDFcIik7XG4gICAgICAgIC8vc2VsZWN0IGZvcm0gZWxlbWVudCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGxldCBwbGF5ZXJJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1pblwiKTtcbiAgICAgICAgcGxheWVySW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixnYW1lUGxheS5zaGlwUGxhY2VtZW50KTtcbiAgICB9LFxuXG4gICAgc2hpcFBsYWNlbWVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vVXBkYXRlIFBsYXllciBOYW1lIHZhbHVlIGFuZCBkaXNwbGF5XG4gICAgICAgIGxldCBwbGF5ZXIxTmFtZSA9ZG9tSW50ZXJhY3QubmFtZUluKCk7XG4gICAgICAgIC8vY3JlYXRlIHBsYXllcnNcbiAgICAgICAgZ2FtZVBsYXkucGxheWVyc0FsbC5wdXNoKHBsYXllck5ldyhcImNvbXB1dGVyXCIpKTtcbiAgICAgICAgZ2FtZVBsYXkucGxheWVyc0FsbC5wdXNoKHBsYXllck5ldyhgJHtwbGF5ZXIxTmFtZX1gKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWVQbGF5LnBsYXllcnNBbGwpO1xuICAgICAgICAvLyB0aGlzLnBsYXllcnNBbGxbMV0gPSBwbGF5ZXJOZXcoYCR7cGxheWVyMU5hbWV9YCk7XG4gICAgICAgIC8vYWRkIEV2ZW50IExpc3RlbmVycyB0byBwbGFjZSBzaGlwc1xuICAgICAgICBsZXQgcGxheWVyU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyMS1ib2FyZCAuZ2FtZS1zcXVhcmVcIik7XG4gICAgICAgIHBsYXllclNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIixkb21JbnRlcmFjdC5zaG93TG9jYXRpb24pKTtcbiAgICAgICAgcGxheWVyU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZG9tSW50ZXJhY3QucGxhY2VTaGlwcykpO1xuICAgICAgICBsZXQgZGlyVG9nZ2xlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb24tdG9nLWJ0blwiKTtcbiAgICAgICAgZGlyVG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGRpclRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnYW1lUGxheS50b2dnbGVEaXJlY3Rpb24pXG5cbiAgICAgICAgLy8gZm9yIChsZXQgc3F1YXJlIGluIHBsYXllclNxdWFyZXMpIHtcbiAgICAgICAgLy8gICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixkb21JbnRlcmFjdC5wbGFjZVNoaXBzKTtcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgLy9QbGFjZSBTaGlwcyBQbGF5ZXIgMVxuICAgICAgICAvL2FkZCBldmVudCBsaXN0ZW5lciBvbiBhbGwgcGxheWVyIDEgc3F1YXJlcyB0byBjYWxsIGRvbSBwbGFjZSBmdW5jdGlvblxuXG5cblxuICAgIH0sXG5cblxuXG4gICAgZ2FtZUxvb3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL0NyZWF0ZSBwbGF5ZXJzXG4gICAgICAgIGxldCBwbGF5ZXIxTmFtZSA9IFwiU3RldmVcIiAvLyBVcGRhdGUgd2l0aCBQcm9tcHQgaW4gZnJvbSB1c2VyXG4gICAgICAgIHRoaXMucGxheWVyc0FsbFswXSA9IHBsYXllck5ldyhcImNvbXB1dGVyXCIpO1xuICAgICAgICB0aGlzLnBsYXllcnNBbGxbMV0gPSBwbGF5ZXJOZXcoYCR7cGxheWVyMU5hbWV9YCk7XG5cbiAgICAgICAgLy9Db21wdXRlciBQbGFjZXMgc2hpcHNcbiAgICAgICAgdGhpcy5wbGF5ZXJzQWxsWzBdLmdhbWVCb2FyZC5wbGFjZVNoaXAobmV3U2hpcFNpemVzWzBdLFwiMSwxXCIsXCJ4XCIpO1xuICAgICAgICB0aGlzLnBsYXllcnNBbGxbMF0uZ2FtZUJvYXJkLnBsYWNlU2hpcChuZXdTaGlwU2l6ZXNbMV0sXCIxLDJcIixcInlcIik7XG4gICAgICAgIHRoaXMucGxheWVyc0FsbFswXS5nYW1lQm9hcmQucGxhY2VTaGlwKG5ld1NoaXBTaXplc1syXSxcIjIsMlwiLFwieVwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQWxsWzBdLmdhbWVCb2FyZC5wbGFjZVNoaXAobmV3U2hpcFNpemVzWzNdLFwiMywyXCIsXCJ5XCIpO1xuICAgICAgICB0aGlzLnBsYXllcnNBbGxbMF0uZ2FtZUJvYXJkLnBsYWNlU2hpcChuZXdTaGlwU2l6ZXNbNF0sXCIyLDVcIixcInhcIik7XG4gICAgICAgIC8vUGxheWVyIDEgcGxhY2VzIHNoaXBzIFxuICAgICAgICB0aGlzLnBsYXllcnNBbGxbMV0uZ2FtZUJvYXJkLnBsYWNlU2hpcChuZXdTaGlwU2l6ZXNbMF0sXCIxLDFcIixcInhcIik7XG4gICAgICAgIHRoaXMucGxheWVyc0FsbFsxXS5nYW1lQm9hcmQucGxhY2VTaGlwKG5ld1NoaXBTaXplc1sxXSxcIjEsMlwiLFwieVwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQWxsWzFdLmdhbWVCb2FyZC5wbGFjZVNoaXAobmV3U2hpcFNpemVzWzJdLFwiMiwyXCIsXCJ5XCIpO1xuICAgICAgICB0aGlzLnBsYXllcnNBbGxbMV0uZ2FtZUJvYXJkLnBsYWNlU2hpcChuZXdTaGlwU2l6ZXNbM10sXCIzLDJcIixcInlcIik7XG4gICAgICAgIHRoaXMucGxheWVyc0FsbFsxXS5nYW1lQm9hcmQucGxhY2VTaGlwKG5ld1NoaXBTaXplc1s0XSxcIjIsNVwiLFwieFwiKTtcbiAgICB9LFxuICAgIHRvZ2dsZURpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChnYW1lUGxheS5zaGlwRGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgICAgICAgZ2FtZVBsYXkuc2hpcERpcmVjdGlvbiA9IFwieVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZVBsYXkuc2hpcERpcmVjdGlvbiA9IFwieFwiOyBcbiAgICAgICAgfVxuICAgICAgICBkb21JbnRlcmFjdC50b2dnbGVEaXJlY3Rpb25EaXNwbGF5KCk7XG4gICAgfVxuXG5cblxufVxuXG5jb25zdCBkb21JbnRlcmFjdCA9IHtcbiAgICBwb3B1bGF0ZUJvYXJkOiBmdW5jdGlvbihwbGF5ZXJJbikge1xuICAgICAgICAvL3NlbGVjdCBib2FyZCBiYXNlZCBvbiBwbGF5ZXIgdGhhdCBjb21lcyBpbiB0byBhcHBlbmQgdG9cbiAgICAgICAgbGV0IGdhbWVib2FyZERpdjtcbiAgICAgICAgbGV0IHBsYXllcklkID0gXCJcIjtcbiAgICAgICAgaWYgKHBsYXllckluID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcC1ib2FyZFwiKTtcbiAgICAgICAgICAgIHBsYXllcklkID0gXCJjb1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxLWJvYXJkXCIpO1xuICAgICAgICAgICAgcGxheWVySWQgPSBcInAxXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvL2ZvciBpIDAtMTAgaiAwLTEwXG4gICAgICAgIC8vY3JlYXRlIGRpdlxuICAgICAgICAvL2FkZCBhdHRyaWJ1dGVzLCBjbGFzcyAmIElEXG4gICAgICAgIC8vYXBwZW5kIGRpdnMgdG8gcGxheWVyJ3MgYm9hcmQgXG4gICAgICAgIGZvciAobGV0IGk9MTsgaTw9MTA7aSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTE7IGo8PTEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuaWQgPSBgJHtwbGF5ZXJJZH0tJHtpfS0ke2p9YDtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0ID0gXCJnYW1lLXNxdWFyZVwiXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkRGl2LmFwcGVuZENoaWxkKHNxdWFyZURpdilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmFtZUluOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9dGV4dF0nKVswXTtcbiAgICAgICAgbGV0IHBsYXllck5hbWUgID0gZm9ybUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKHBsYXllck5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllcjEtbmFtZSBoMlwiKTsgXG4gICAgICAgICAgICBwbGF5ZXJOYW1lRGl2LmlubmVySFRNTCA9IHBsYXllck5hbWU7ICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5ZXJOYW1lID0gXCJQbGF5ZXIxXCI7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybUlucHV0LnBhcmVudEVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgZm9ybUlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgcmV0dXJuIHBsYXllck5hbWU7XG4gICAgfSxcbiAgICBwbGFjZVNoaXBzOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vY2hlY2sgcGxheWVyIHNoaXBzIG51bWJlciB0byBkZXRlcm1pbmUgd2hpY2ggc2hpcCB0byBwbGFjZSBcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIH0sXG4gICAgc2hvd0xvY2F0aW9uOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vY2hlY2sgcGxheWVyIHNoaXBzIG51bWJlciB0byBkZXRlcm1pbmUgd2hpY2ggc2hpcCB0byBwbGFjZSBcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5sZW5ndGgpO1xuICAgICAgICAvL3B1bGwgc2hpcCBsZW5ndGggYmFzZWQgb24gc2hpcHMgcGxhY2VkXG4gICAgICAgIC8vdXNlIHNoaXAgbGVuZ3RoICYgY3VycmVudCBkaXJlY3Rpb24gdG8gZGV0ZXJtaW5lIHNxdWFyZXMgdG8gZGlzcGxheVxuICAgICAgICBsZXQgc2hpcEluZGV4ID0gZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5sZW5ndGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXBJbmRleCk7XG4gICAgICAgIGxldCBjdXJyZW50TGVuZ3RoID0gZ2FtZVBsYXkuc2hpcFNpemVzW3NoaXBJbmRleF07XG4gICAgICAgIC8vZ2V0IHNxdWFyZSBsb2NhdGlvbiBpbmZvXG4gICAgICAgIGxldCBzcXVhcmVJZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHNxdWFyZUlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgbGV0IHBsSW5kZXggPSBpbmRpY2VzWzBdOyAvL2tlZXBpbmcgaW4gY2FzZSBuZWVkIHRoaXMgZnVuY3Rpb24gZm9yIGNvbXB1dGVyIHBsYWNlbWVudHMgdG9vXG4gICAgICAgIGxldCB4SW5kZXggPSBOdW1iZXIoaW5kaWNlc1syXSk7XG4gICAgICAgIGxldCB5SW5kZXggPSBOdW1iZXIoaW5kaWNlc1sxXSk7XG4gICAgICAgIGxldCB2YWxpZFJlcG9ydCA9IGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuY2hlY2tMb2NhdGlvblZhbGlkKHhJbmRleCx5SW5kZXgsZ2FtZVBsYXkuc2hpcERpcmVjdGlvbixjdXJyZW50TGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZD9cIix2YWxpZFJlcG9ydCk7XG4gICAgICAgIC8vdW5oaWdobGlnaHQgYW55IGNlbGxzIGFyZWFkeSBoaWdobGlnaHRlZCBcbiAgICAgICAgZG9tSW50ZXJhY3QuaGlkZUxvY2F0aW9uKFwidmFsaWRcIik7XG4gICAgICAgIGRvbUludGVyYWN0LmhpZGVMb2NhdGlvbihcImVycm9yXCIpO1xuICAgICAgICAvL2hpZ2hsaWdodCBzZWxlY3RlZCBzaGlwIHBsYWNlbWVudCBiYXNlZCBvbiB2YWxpZCBzdGF0dXMgXG4gICAgICAgIGZvciAobGV0IGk9MDtpPGN1cnJlbnRMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZVBsYXkuc2hpcERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBpZih4SW5kZXgraSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4fS0ke3hJbmRleCtpfWApXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdC50b2dnbGUodmFsaWRSZXBvcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoeUluZGV4K2kgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwbEluZGV4fS0ke3lJbmRleCtpfS0ke3hJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXgraX0tJHt4SW5kZXh9YClcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0TG9jYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSh2YWxpZFJlcG9ydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoaWRlTG9jYXRpb246IGZ1bmN0aW9uKGNsYXNzVG9IaWRlKSB7XG4gICAgICAgIGxldCBkaXZzVG9IaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NUb0hpZGV9YCk7XG4gICAgICAgIGlmIChkaXZzVG9IaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRpdnNUb0hpZGUuZm9yRWFjaChzcXVhcmVIaWdobGlnaHRlZCA9PiBzcXVhcmVIaWdobGlnaHRlZC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzVG9IaWRlfWApKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlRGlyZWN0aW9uRGlzcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gZ2FtZVBsYXkuc2hpcERpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpcmVjdGlvbi10b2ctYnRuXCIpLmlubmVySFRNTCA9IGAke3RleHR9IERpcmVjdGlvbmA7XG4gICAgfVxufVxuXG5cblxuXG5nYW1lUGxheS5zZXR1cEdhbWUoKTtcblxuLy9EZWJ1Z2dpbmcgQ2FzZXNcblxuLy8gbGV0IHRlc3RCb2FyZCA9IGdhbWVCb2FyZCgpO1xuLy8gdGVzdEJvYXJkLnBsYWNlU2hpcCg1LFwiMywyXCIsXCJ5XCIpO1xuLy8gY29uc29sZS5sb2codGVzdEJvYXJkLnJlY2lldmVBdHRhY2soNCwyKSk7XG4vLyBjb25zb2xlLmxvZyh0ZXN0Qm9hcmQucmVjaWV2ZUF0dGFjayg0LDIpKTtcblxuLy8gbGV0IHBsYXllcjEgPSBwbGF5ZXJOZXcoXCJTdGV2ZVwiKTtcbi8vIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKDEwLFwiMSwxXCIsXCJ4XCIpO1xuLy8gY29uc29sZS5sb2cocGxheWVyMSk7XG4vLyBsZXQgcGxheWVyQ29tcCA9IHBsYXllck5ldyhcImNvbXB1dGVyXCIpO1xuLy8gcGxheWVyQ29tcC5hdHRhY2socGxheWVyMSk7XG5cblxuLy9UZXN0aW5nIEV4cG9ydHNcbi8vIG1vZHVsZS5leHBvcnRzID0ge2NyZWF0ZVNoaXAsIGdhbWVCb2FyZCwgcGxheWVyTmV3fTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9