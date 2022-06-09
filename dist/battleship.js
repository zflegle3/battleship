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
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Main Document Styles */\n/* Main Styled Font */\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\n\nfont-size: 10px;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* Header Styles */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.75rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n/* #comp-board .game-square-playing:hover { */\n#comp-board .game-square.none:hover {\n    background-color: var(--dark-blue2);\n    background-color: rgb(70, 70, 70);\n}\n\n\n#comp-board .game-square.none-playing:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n.game-square.ship-active.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.miss {\n    background-color: var(--dark-blue3);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles */\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n}\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Main Document Styles */\n/* Main Styled Font */\n@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\n\nfont-size: 10px;\n}\n\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* Header Styles */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.75rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n/* #comp-board .game-square-playing:hover { */\n#comp-board .game-square.none:hover {\n    background-color: var(--dark-blue2);\n    background-color: rgb(70, 70, 70);\n}\n\n\n#comp-board .game-square.none-playing:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n.game-square.ship-active.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.miss {\n    background-color: var(--dark-blue3);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles */\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n}\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */"],"sourceRoot":""}]);
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
        _shipLength: lenIn,
        shipType: nameIn,
        position: positionArr,//rename to somehting more fitting
        sunkYN: false,
        hit: function(shipIndex) {
            //called by board.recieve attack()
            if (this.position[shipIndex].hitStatus) {
                // console.log("invalid hit");
                return "invalid";
            } else {
                // console.log("Hit!")
                this.position[shipIndex].hitStatus = true;
                return "hit";
            }
        },
        isSunk: function() {
            let hitCount = 0;
            for (let i=0;i<this._shipLength;i++) {
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
            //Checks for Invalid Miss (Miss already selected)
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
            //Checks for valid Miss (not selected)
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
            for(let i=0; i<5; i++) {
                if (this.shipsAll[i].isSunk())
                sunkCount += 1;
            }
            // console.log("Ships Sunk:", sunkCount);
            // console.log(this.shipsAll);
            if (sunkCount === 5){
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
            name: "computer",
            board: gameBoard(),
            attack: function() {
                //eventually will expect index to come in as a click event (e.target.id = "x,y")
                let attackStop = false;
                while (!attackStop) {
                    let randX = Math.floor((Math.random() * 10)+1);
                    let randY = Math.floor((Math.random() * 10)+1);
                    let attackResult = gamePlay.playersAll[1].board.recieveAttack(randX,randY)
                    console.log(`Computer attack result at x:${randX} y:${randY}`,attackResult);
                    if (attackResult === "hit" || attackResult === "miss")  {
                        attackStop = true;
                        domInteract.addAttack(attackResult,randX,randY,"p1");
                        gamePlay.startTurn();
                    }
                }
            },
        }
    } else {
        return {
            name: name,
            board: gameBoard(),
            attack: function(e) {
                // e.preventDefault(); //needed??
                console.log(e.target);
                //handle event in
                let attackIn = e.target.id.split("-");
                let xAtk = Number(attackIn[2]);
                let yAtk = Number(attackIn[1]);
                // console.log("x",xAtk,"y",yAtk);

                //attack board 
                //if successful call next player turn 
                let attackResult = gamePlay.playersAll[0].board.recieveAttack(xAtk,yAtk);
                console.log("P1 attack resulted in:",attackResult);
                if (attackResult === "hit" || attackResult === "miss")  {
                    domInteract.addAttack(attackResult,xAtk,yAtk,"co");
                    gamePlay.startTurn();
                } 
            },
        }
    }
}








// ~~~~~~~~~~~~~~~~~~~~~
// GAMEPLAY LOGIC MODULE
// ~~~~~~~~~~~~~~~~~~~~~
const gamePlay = {
    playersAll: [], //[computer, player1]
    turn: 0,
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

            this.startTurn();
            //call Start to game
            //add event listeners for attacking
            //call switching turns function?
        }
    },
    startTurn: function() {
        //Switch turn every time
        this._switchTurn(); //logging turn each time called
        console.log(this.playersAll);

        //Check for sinking & intialize vars
        console.log (this.playersAll[0].board.allSunk());
        console.log (this.playersAll[1].board.allSunk());
        let currentPlayer = this.playersAll[this.turn];
        let p1Sunk = this.playersAll[0].board.allSunk();
        let compSunk = this.playersAll[0].board.allSunk();
        //NEED TO UPDATE DOM ON INDIVIDUAL SHIP SINKING
        console.log (!this.playersAll[0].board);
        console.log (!this.playersAll[1].board);

        if (p1Sunk || compSunk) { //if either player sunk end game
            if (compSunk) { //if p1 wins
                console.log("Player 1 wins");
                //end game with p1 as winner
            } else { //comp wins
                //end game with comp as winner
                console.log("Computer wins");
            }
        } else {
            if (this.turn === 1) {
                //player 1 turn
                domInteract.domUiUpdate("player1-attack","start");
            } else {
                //computer turn
                domInteract.domUiUpdate("player1-attack","stop"); //need to finish in dom interact
                // this.playersAll[0].attack();
                setTimeout(this.playersAll[0].attack,2000);
            }
        }
    },




    _switchTurn: function() {
        if (this.turn === 0) {
            this.turn = 1;
        } else {
            this.turn = 0;
        }
        console.log(this.turn);
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
                if (checkedLocation.classList.contains("ship-active")) {
                    return false
                }
            } else {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                if (checkedLocation.classList.contains("ship-active")) {
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
                squareDiv.classList = "game-square";
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
            case "player1-attack start":
                console.log("player 1 attacking:");
                //add event listeners on attack
                let attackSquaresStart = document.querySelectorAll("#comp-board .game-square");
                attackSquaresStart.forEach(square => square.addEventListener("click",gamePlay.playersAll[1].attack));
                break;
            case "player1-attack stop":
                console.log("player 1 stop attacking:");
                //remove event listeners on attack
                let attackSquaresStop = document.querySelectorAll("#comp-board .game-square");
                attackSquaresStop.forEach(square => square.removeEventListener("click",gamePlay.playersAll[1].attack));
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
    },
    addAttack: function(attackResult,xIn,yIn,plIndex) {
        let attackSquare = document.getElementById(`${plIndex}-${yIn}-${xIn}`);
        console.log(attackSquare);
        console.log(attackSquare.classList);
        // let classesCurrent = attackSquare.classList;
        // classesCurrent.push(attackResult);
        attackSquare.classList.add(attackResult);
        console.log(attackSquare.classList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsZUFBZSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsVUFBVSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFP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QUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0EsdUVBQXVFLFFBQVEsR0FBRyxPQUFPLEdBQUcsU0FBUztBQUNyRyw2RUFBNkUsUUFBUSxHQUFHLFNBQVM7QUFDakcsY0FBYztBQUNkLHVFQUF1RSxRQUFRLEdBQUcsU0FBUyxHQUFHLE9BQU87QUFDckcsNkVBQTZFLFFBQVEsR0FBRyxTQUFTO0FBQ2pHO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQSx1RUFBdUUsUUFBUSxHQUFHLE9BQU8sR0FBRyxTQUFTO0FBQ3JHO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSx1RUFBdUUsUUFBUSxHQUFHLFNBQVMsR0FBRyxPQUFPO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdURBQXVELFlBQVk7QUFDbkU7QUFDQSwwRkFBMEYsWUFBWTtBQUN0RztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0VBQW9FLE1BQU07QUFDMUUsS0FBSztBQUNMO0FBQ0Esc0RBQXNELFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxxQkFBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LZGFtK1RobW9yK1BybyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENTUyBSZXNldCBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0ICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1haW4gRG9jdW1lbnQgU3R5bGVzICovXFxuLyogTWFpbiBTdHlsZWQgRm9udCAqL1xcbi8qIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmOyAqL1xcbi8qIFN1YiBGb250ICovXFxuLyogZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgKi9cXG5cXG4qIHtcXG4tLWRpc3BsYXktd2lkdGg6IDI1cmVtO1xcbi0tcGllY2UtaHAtd2lkdGg6IDAuOHJlbTtcXG5cXG4tLWxpZ2h0LWJsdWUxOiAjQTVEOEZGO1xcbi0tbGlnaHQtYmx1ZTI6ICMxNEZGRjc7XFxuLS1kYXJrLWJsdWUxOiAjMDA4MUE3O1xcbi0tZGFyay1ibHVlMjogIzBCQzlDRDtcXG4tLWRhcmstYmx1ZTM6ICMxRDhBOTk7XFxuLS1kYXJrLWJsdWU0OiAjNTc3NTkwO1xcbi0tZ3JleS1zaGlwMTogIzdDN0M3QztcXG4tLWdyZXktc2hpcDI6ICNCMkIyQjI7XFxuLS1ncmV5LXNoaXAzOiAjQzNCQUJBO1xcbi0tZ3JlZW4tZ29vZDE6ICM3RENEODU7XFxuLS1ncmVlbi1nb29kMjogI0M5RjI5OTtcXG5cXG4tLWdyZWVuLXJhZGFyMTogI0FERTI1RDtcXG4tLWdyZWVuLXJhZGFyMjogIzk5QzI0RDtcXG4tLWdyZWVuLXJhZGFyMzogIzVDRjY0QTtcXG5cXG4tLXNhbmQxOiAjRkNERUJFO1xcbi0tc2FuZDI6ICNGM0RFOEE7XFxuXFxuLS1yZWQtYmFkMTogI0E3MUQzMTtcXG4tLXJlZC1iYWQyOiAjZjI5OTk5O1xcbi0tb3JhbmdlMTogI0Y3QjI2NztcXG4tLW9yYW5nZTI6ICNGNzlENjU7XFxuLS1vcmFuZ2UzOiAjRjQ4NDVGO1xcblxcblxcbmZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZ2FtZWRpc3BsYXkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jcGxheWVyMS1nYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4jY29tcC1nYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuXFxuI2NvbW1zIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1pbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuI3BsYXllci1pbiBpbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbiNwbGF5ZXItaW4gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtIDAuM3JlbSAwLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbiNwbGF5ZXItaW4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UxKSA7XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAzKSA7XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UxKSA7XFxufVxcblxcbiNwbGFjaW5nLWVycm9yIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBHYW1lYm9hcmQgU3R5bGVzICovXFxuXFxuLyogTmFtZSBEaXNwbGF5ICovXFxuLnBsYXllci1uYW1lIHtcXG59XFxuXFxuLnBsYXllci1uYW1lIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBHYW1lYm9hcmQgKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLWdhcDogLjFyZW07XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuLXJhZGFyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUyKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgKi9cXG59XFxuXFxuLyogI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlLXBsYXlpbmc6aG92ZXIgeyAqL1xcbiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZS5ub25lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG59XFxuXFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlLm5vbmUtcGxheWluZzphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcXG59XFxuXFxuLyogU2hpcCBQbGFjZW1lbnQgU3R5bGVzICovXFxuLmdhbWUtc3F1YXJlLmVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUudmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1nb29kMik7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5zaGlwLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1hY3RpdmUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTMpO1xcbn1cXG5cXG5cXG4vKiBHYW1lIFBpZWNlcyBTdHlsZXMgLSBOb24gUGxheWVyIG9yIFBpZWNlIHNwZWNpZmljICovXFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0ge1xcbiAgICB3aWR0aDogdmFyKC0tZGlzcGxheS13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiB7XFxuICAgIC8qIHNoaXBzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIE1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiA+IGRpdiB7XFxuICAgIC8qIHNoaXAgaHAgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdltpZCo9XFxcImhwLTBcXFwiXSB7XFxuICAgIC8qIHNoaXAgaHAgZGV0YWlsICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1nb29kMSk7XFxuICAgIGhlaWdodDogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICB3aWR0aDogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICBtYXJnaW46IDAgMC4xcmVtIDAuMjVyZW0gMC4xcmVtO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwwLDApOyAqL1xcblxcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiA+IHAge1xcbiAgICAvKiBzaGlwIGxhYmVsICovXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBNb2NrIFN0eWxlcyAqL1xcbiNjYXJyaWVyLXAxLWhwLTAzLCAjY2Fycmllci1wMS1ocC0wNCwgI2NhcnJpZXItcDEtaHAtMDUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcbiNjcnVpc2VyLWNvLWhwLTAzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4vKiAjY28tNC0zLCAjY28tNS0yLCAjY28tNi0yLCAjY28tNy0yLCAjY28tNy0zLCAjY28tNy00LCAjY28tNi01LCAjY28tNS01LCAjY28tNC00LCAjY28tNS0ze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYW5kMik7XFxufVxcblxcbiNjby02LTMsICNjby02LTQsICNjby01LTR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLXJhZGFyMik7XFxufVxcblxcbiNjby05LTIsICNjby05LTMsICNjby05LTQsICNjby05LTQsICNjby0yLTIsICNjby0zLTIsICNjby0zLTUsICNjby0zLTYsICNjby0zLTcsICNjby0zLTh7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDEpO1xcbn1cXG5cXG4jY28tOS00IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDIpO1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVEQUF1RDtBQUN2RDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUVyQiwrQ0FBK0M7QUFDL0MsYUFBYTtBQUViLDJDQUEy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O0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isa0NBQWtDOztBQUV0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMscUNBQXFDO0FBQ3pDOzs7Ozs7O0FBT0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBOzs7Ozs7Ozs7Ozs7OztHQWNHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBSZXNldCBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0ICovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMHB4O1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1haW4gRG9jdW1lbnQgU3R5bGVzICovXFxuLyogTWFpbiBTdHlsZWQgRm9udCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtkYW0rVGhtb3IrUHJvJmRpc3BsYXk9c3dhcCcpO1xcbi8qIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmOyAqL1xcbi8qIFN1YiBGb250ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG4vKiBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAqL1xcblxcbioge1xcbi0tZGlzcGxheS13aWR0aDogMjVyZW07XFxuLS1waWVjZS1ocC13aWR0aDogMC44cmVtO1xcblxcbi0tbGlnaHQtYmx1ZTE6ICNBNUQ4RkY7XFxuLS1saWdodC1ibHVlMjogIzE0RkZGNztcXG4tLWRhcmstYmx1ZTE6ICMwMDgxQTc7XFxuLS1kYXJrLWJsdWUyOiAjMEJDOUNEO1xcbi0tZGFyay1ibHVlMzogIzFEOEE5OTtcXG4tLWRhcmstYmx1ZTQ6ICM1Nzc1OTA7XFxuLS1ncmV5LXNoaXAxOiAjN0M3QzdDO1xcbi0tZ3JleS1zaGlwMjogI0IyQjJCMjtcXG4tLWdyZXktc2hpcDM6ICNDM0JBQkE7XFxuLS1ncmVlbi1nb29kMTogIzdEQ0Q4NTtcXG4tLWdyZWVuLWdvb2QyOiAjQzlGMjk5O1xcblxcbi0tZ3JlZW4tcmFkYXIxOiAjQURFMjVEO1xcbi0tZ3JlZW4tcmFkYXIyOiAjOTlDMjREO1xcbi0tZ3JlZW4tcmFkYXIzOiAjNUNGNjRBO1xcblxcbi0tc2FuZDE6ICNGQ0RFQkU7XFxuLS1zYW5kMjogI0YzREU4QTtcXG5cXG4tLXJlZC1iYWQxOiAjQTcxRDMxO1xcbi0tcmVkLWJhZDI6ICNmMjk5OTk7XFxuLS1vcmFuZ2UxOiAjRjdCMjY3O1xcbi0tb3JhbmdlMjogI0Y3OUQ2NTtcXG4tLW9yYW5nZTM6ICNGNDg0NUY7XFxuXFxuXFxuZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdLZGFtIFRobW9yIFBybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lZGlzcGxheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNnYW1lZGlzcGxheSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbiNwbGF5ZXIxLWdhbWUge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbiNjb21wLWdhbWUge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5cXG4jY29tbXMgaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XFxufVxcblxcbiNwbGF5ZXItaW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWluLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4jcGxheWVyLWluIGlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAzKSA7XFxufVxcblxcbiNwbGF5ZXItaW4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTEpIDtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtIDAuM3JlbSAwLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0bi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDMpIDtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTEpIDtcXG59XFxuXFxuI3BsYWNpbmctZXJyb3Ige1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcblxcblxcblxcbi8qIEdhbWVib2FyZCBTdHlsZXMgKi9cXG5cXG4vKiBOYW1lIERpc3BsYXkgKi9cXG4ucGxheWVyLW5hbWUge1xcbn1cXG5cXG4ucGxheWVyLW5hbWUgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi8qIEdhbWVib2FyZCAqL1xcbi5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogdmFyKC0tZGlzcGxheS13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tZGlzcGxheS13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDFmcik7XFxuICAgIGdyaWQtZ2FwOiAuMXJlbTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JlZW4tcmFkYXIzKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZTIpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAqL1xcbn1cXG5cXG4vKiAjY29tcC1ib2FyZCAuZ2FtZS1zcXVhcmUtcGxheWluZzpob3ZlciB7ICovXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlLm5vbmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbn1cXG5cXG5cXG4jY29tcC1ib2FyZCAuZ2FtZS1zcXVhcmUubm9uZS1wbGF5aW5nOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTIpO1xcbn1cXG5cXG4vKiBTaGlwIFBsYWNlbWVudCBTdHlsZXMgKi9cXG4uZ2FtZS1zcXVhcmUuZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufVxcblxcbi5nYW1lLXNxdWFyZS52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWdvb2QyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLnNoaXAtYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMSk7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5zaGlwLWFjdGl2ZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMyk7XFxufVxcblxcblxcbi8qIEdhbWUgUGllY2VzIFN0eWxlcyAtIE5vbiBQbGF5ZXIgb3IgUGllY2Ugc3BlY2lmaWMgKi9cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSB7XFxuICAgIHdpZHRoOiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdID4gZGl2IHtcXG4gICAgLyogc2hpcHMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgTWFyZ2luOiAwLjVyZW07XFxufVxcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdID4gZGl2ID4gZGl2IHtcXG4gICAgLyogc2hpcCBocCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2W2lkKj1cXFwiaHAtMFxcXCJdIHtcXG4gICAgLyogc2hpcCBocCBkZXRhaWwgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWdvb2QxKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1waWVjZS1ocC13aWR0aCk7XFxuICAgIHdpZHRoOiB2YXIoLS1waWVjZS1ocC13aWR0aCk7XFxuICAgIG1hcmdpbjogMCAwLjFyZW0gMC4yNXJlbSAwLjFyZW07XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLDAsMCk7ICovXFxuXFxufVxcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdID4gZGl2ID4gcCB7XFxuICAgIC8qIHNoaXAgbGFiZWwgKi9cXG4gICAgZm9udC1zaXplOiB2YXIoLS1waWVjZS1ocC13aWR0aCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcblxcblxcblxcbi8qIE1vY2sgU3R5bGVzICovXFxuI2NhcnJpZXItcDEtaHAtMDMsICNjYXJyaWVyLXAxLWhwLTA0LCAjY2Fycmllci1wMS1ocC0wNSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuI2NydWlzZXItY28taHAtMDMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcbi8qICNjby00LTMsICNjby01LTIsICNjby02LTIsICNjby03LTIsICNjby03LTMsICNjby03LTQsICNjby02LTUsICNjby01LTUsICNjby00LTQsICNjby01LTN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQyKTtcXG59XFxuXFxuI2NvLTYtMywgI2NvLTYtNCwgI2NvLTUtNHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tcmFkYXIyKTtcXG59XFxuXFxuI2NvLTktMiwgI2NvLTktMywgI2NvLTktNCwgI2NvLTktNCwgI2NvLTItMiwgI2NvLTMtMiwgI2NvLTMtNSwgI2NvLTMtNiwgI2NvLTMtNywgI2NvLTMtOHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMSk7XFxufVxcblxcbiNjby05LTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG4vLyBTSElQIEZBQ1RPUlkgRlVOQ1RJT05cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5mdW5jdGlvbiBjcmVhdGVTaGlwKHhJbix5SW4sZGlySW4sbGVuSW4sbmFtZUluKSB7XG4gICAgbGV0IHBvc2l0aW9uQXJyID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8bGVuSW47aSsrKSB7XG4gICAgICAgIGxldCBzaGlwU3F1YXJlID0ge307XG4gICAgICAgIGlmIChkaXJJbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmUgPSB7XG4gICAgICAgICAgICAgICAgcG9zWDogeEluICsgaSxcbiAgICAgICAgICAgICAgICBwb3NZOiB5SW4sXG4gICAgICAgICAgICAgICAgaGl0U3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJJbiA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmUgPSB7XG4gICAgICAgICAgICAgICAgcG9zWDogeEluLFxuICAgICAgICAgICAgICAgIHBvc1k6IHlJbiAraSxcbiAgICAgICAgICAgICAgICBoaXRTdGF0dXM6IGZhbHNlLCBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbkFyci5wdXNoKHNoaXBTcXVhcmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIF9zaGlwTGVuZ3RoOiBsZW5JbixcbiAgICAgICAgc2hpcFR5cGU6IG5hbWVJbixcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uQXJyLC8vcmVuYW1lIHRvIHNvbWVodGluZyBtb3JlIGZpdHRpbmdcbiAgICAgICAgc3Vua1lOOiBmYWxzZSxcbiAgICAgICAgaGl0OiBmdW5jdGlvbihzaGlwSW5kZXgpIHtcbiAgICAgICAgICAgIC8vY2FsbGVkIGJ5IGJvYXJkLnJlY2lldmUgYXR0YWNrKClcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uW3NoaXBJbmRleF0uaGl0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnZhbGlkIGhpdFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGl0IVwiKVxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25bc2hpcEluZGV4XS5oaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpc1N1bms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX3NoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25baV0uaGl0U3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpdENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhpdENvdW50ID4gdGhpcy5fc2hpcExlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rWU4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmtZTjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rWU4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rWU47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG4vLyBCT0FSRCBGQUNUT1JZIEZVTkNUSU9OXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vTWV0aG9kcyAmIHByb3BlcnRpZXMgZnJvbSBhIHNoaXBcbiAgICAgICAgc2hpcHNBbGw6IFtdLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgbWlzc2VzQWxsOiBbXSwgLy9rZWVwIHRyYWNrIHRvIGRpc3BsYXkgb24gYm9hcmRcbiAgICAgICAgcmVjaWV2ZUF0dGFjazogZnVuY3Rpb24oYXRrWCxhdGtZKSB7XG4gICAgICAgICAgICAvL3Rha2VzIHBhaXIgb2YgY29vcmRpbmF0ZXMgYW5kIGRldGVybWluZXMgaWYgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAgICAgICAgIC8vaWYgeWVzIHNlbmQgaGl0IGZ1bmN0aW9uIHRvIHNoaXAgPj4gcmVjaWV2ZXMgXCJoaXRcIiBvciBcImludmFsaWRcIiBiYWNrXG4gICAgICAgICAgICAvL2lmIG5vdCByZWNvcmRzIGEgbWlzc1xuICAgICAgICAgICAgbGV0IGhpdEZsYWcgPSBmYWxzZTsgLy9vbmx5IHRvIGNoZWNrIGlmIHdhcyBhIGhpdCBvbiBzaGlwLCBub3QgdmFsaWQvaW52YWxpZFxuICAgICAgICAgICAgbGV0IG1pc3NGbGFnID0gZmFsc2U7IC8vc2V0IHRvIHRydWUgd2hlbiBhdHRhY2sgbm90IGEgaGl0IG9yIGludmFsaWRcbiAgICAgICAgICAgIGxldCBhdHRhY2tSZXNwb25zZSA9IFwiXCI7XG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgSGl0L0ludmFsaWQgSGl0XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5zaGlwc0FsbC5sZW5ndGg7IGkrKykgeyAvL2ZvciBhbGwgc2hpcHNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dGhpcy5zaGlwc0FsbFtpXS5wb3NpdGlvbi5sZW5ndGg7IGorKykgeyAgLy9mb3IgYWxsIHNwb3RzIG9uIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBoaXQgaW5kZXggaXMgb24gc2hpcFxuICAgICAgICAgICAgICAgICAgICBpZiAoYXRrWCA9PT0gdGhpcy5zaGlwc0FsbFtpXS5wb3NpdGlvbltqXS5wb3NYICYmIGF0a1kgPT09IHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb25bal0ucG9zWSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1Jlc3BvbnNlID0gdGhpcy5zaGlwc0FsbFtpXS5oaXQoaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRGbGFnID0gdHJ1ZTsgLy93aWxsIGFsd2F5cyBiZSB0cnVlIGlmIHBvc2l0aW9uIGlzIG9uIGEgc2hpcCBwZXIgaWYgc3RhdGVtZW50IGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQ2hlY2tzIGZvciBJbnZhbGlkIE1pc3MgKE1pc3MgYWxyZWFkeSBzZWxlY3RlZClcbiAgICAgICAgICAgIGlmICghaGl0RmxhZykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLm1pc3Nlc0FsbC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXRrWCA9PT0gdGhpcy5taXNzZXNBbGxba10ucG9zWCAmJiBhdGtZID09PSB0aGlzLm1pc3Nlc0FsbFtrXS5wb3NZKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW52YWxpZCBtaXNzIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1Jlc3BvbnNlID0gXCJpbnZhbGlkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQ2hlY2tzIGZvciB2YWxpZCBNaXNzIChub3Qgc2VsZWN0ZWQpXG4gICAgICAgICAgICBpZiAoYXR0YWNrUmVzcG9uc2UubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidmFsaWQgbWlzcyFcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzZXNBbGwucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IGF0a1gsXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IGF0a1ksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IFwibWlzc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3BvbnNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBsYWNlU2hpcDogZnVuY3Rpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCxzaGlwTmFtZSkge1xuICAgICAgICAgICAgbGV0IHZhbGlkQ2hlY2sgPSBnYW1lUGxheS5jaGVja0xvY2F0aW9uVmFsaWQocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCk7XG4gICAgICAgICAgICAvL0RPVUJMRSBDSEVDSyBXSFkgRE8gSSBWQUxJRCBDSEVDSyBBR0FJTj8/XG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkQ2hlY2spIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW50IHBsYWNlIHNoaXAgaGVyZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInZhbGlkXCI6XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gY3JlYXRlU2hpcCh4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCxzaGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNBbGwucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QucGxhY2VTaGlwRG9tKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGF1dG9QbGFjZVNoaXBzQWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHRoaXMucGxhY2VTaGlwKFwiY29cIiwxLDEsXCJ4XCIsNSxcIlRlc3QgU2hpcFwiKTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IFtcInhcIixcInlcIl07XG4gICAgICAgICAgICAvLyB3aGlsZSAoY291bnQgPiAxKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zaGlwc0FsbC5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgbGV0IHhJbmRleCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxKTtcbiAgICAgICAgICAgICAgICBsZXQgeUluZGV4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEpO1xuICAgICAgICAgICAgICAgIGxldCByYW5kRGlySW50ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZERpcmVjdGlvbiA9IGRpcmVjdGlvbnNbcmFuZERpckludF07XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBnYW1lUGxheS5zaGlwU2l6ZXNbdGhpcy5zaGlwc0FsbC5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IGdhbWVQbGF5LnNoaXBOYW1lc1t0aGlzLnNoaXBzQWxsLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBzaGlwXCIsc2hpcE5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKFwiY29cIix4SW5kZXgseUluZGV4LHJhbmREaXJlY3Rpb24sc2hpcExlbmd0aCxzaGlwTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWxsU3VuazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHN1bmtDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTw1OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc0FsbFtpXS5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICBzdW5rQ291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2hpcHMgU3VuazpcIiwgc3Vua0NvdW50KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2hpcHNBbGwpO1xuICAgICAgICAgICAgaWYgKHN1bmtDb3VudCA9PT0gNSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIFBMQVlFUiBGQUNUT1JZIEZVTkNUSU9OXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuZnVuY3Rpb24gcGxheWVyTmV3KG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBcImNvbXB1dGVyXCIsXG4gICAgICAgICAgICBib2FyZDogZ2FtZUJvYXJkKCksXG4gICAgICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vZXZlbnR1YWxseSB3aWxsIGV4cGVjdCBpbmRleCB0byBjb21lIGluIGFzIGEgY2xpY2sgZXZlbnQgKGUudGFyZ2V0LmlkID0gXCJ4LHlcIilcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlICghYXR0YWNrU3RvcCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApKzEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApKzEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0ID0gZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5yZWNpZXZlQXR0YWNrKHJhbmRYLHJhbmRZKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ29tcHV0ZXIgYXR0YWNrIHJlc3VsdCBhdCB4OiR7cmFuZFh9IHk6JHtyYW5kWX1gLGF0dGFja1Jlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIgfHwgYXR0YWNrUmVzdWx0ID09PSBcIm1pc3NcIikgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QuYWRkQXR0YWNrKGF0dGFja1Jlc3VsdCxyYW5kWCxyYW5kWSxcInAxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVBsYXkuc3RhcnRUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBib2FyZDogZ2FtZUJvYXJkKCksXG4gICAgICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7IC8vbmVlZGVkPz9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgZXZlbnQgaW5cbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrSW4gPSBlLnRhcmdldC5pZC5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICAgICAgbGV0IHhBdGsgPSBOdW1iZXIoYXR0YWNrSW5bMl0pO1xuICAgICAgICAgICAgICAgIGxldCB5QXRrID0gTnVtYmVyKGF0dGFja0luWzFdKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhcIix4QXRrLFwieVwiLHlBdGspO1xuXG4gICAgICAgICAgICAgICAgLy9hdHRhY2sgYm9hcmQgXG4gICAgICAgICAgICAgICAgLy9pZiBzdWNjZXNzZnVsIGNhbGwgbmV4dCBwbGF5ZXIgdHVybiBcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0ID0gZ2FtZVBsYXkucGxheWVyc0FsbFswXS5ib2FyZC5yZWNpZXZlQXR0YWNrKHhBdGsseUF0ayk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQMSBhdHRhY2sgcmVzdWx0ZWQgaW46XCIsYXR0YWNrUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiIHx8IGF0dGFja1Jlc3VsdCA9PT0gXCJtaXNzXCIpICB7XG4gICAgICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LmFkZEF0dGFjayhhdHRhY2tSZXN1bHQseEF0ayx5QXRrLFwiY29cIik7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVQbGF5LnN0YXJ0VHVybigpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+flxuLy8gR0FNRVBMQVkgTE9HSUMgTU9EVUxFXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbmNvbnN0IGdhbWVQbGF5ID0ge1xuICAgIHBsYXllcnNBbGw6IFtdLCAvL1tjb21wdXRlciwgcGxheWVyMV1cbiAgICB0dXJuOiAwLFxuICAgIHNoaXBTaXplczogWzUsNCwzLDMsMl0sXG4gICAgc2hpcE5hbWVzOiBbXCJjYXJyaWVyXCIsXCJiYXR0bGVzaGlwXCIsXCJjcnVpc2VyXCIsXCJzdWJtYXJpbmVcIixcImRlc3Ryb3llclwiXSxcbiAgICBzaGlwRGlyZWN0aW9uOiBcInhcIixcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9wb3B1bGF0ZSBib2FyZCBmb3IgYm90aCBzaWRlc1xuICAgICAgICBkb21JbnRlcmFjdC5wb3B1bGF0ZUJvYXJkKFwiY29tcHV0ZXJcIik7XG4gICAgICAgIGRvbUludGVyYWN0LnBvcHVsYXRlQm9hcmQoXCJQbGF5ZXIgMVwiKTtcbiAgICAgICAgLy9zZWxlY3QgZm9ybSBlbGVtZW50IGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgbGV0IHBsYXllckluRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWluXCIpO1xuICAgICAgICBwbGF5ZXJJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLGRvbUludGVyYWN0Lm5hbWVJbik7XG4gICAgfSxcblxuICAgIC8vUGxheWVyIDEgc2V0dXBcbiAgICBzZXRVcEdhbWU6IGZ1bmN0aW9uKHBsYXllcjFOYW1lKSB7XG4gICAgICAgIC8vQWRkIHBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXJzQWxsLnB1c2gocGxheWVyTmV3KFwiY29tcHV0ZXJcIikpO1xuICAgICAgICB0aGlzLnBsYXllcnNBbGwucHVzaChwbGF5ZXJOZXcoYCR7cGxheWVyMU5hbWV9YCkpO1xuICAgICAgICAvL2FkZCBFdmVudCBMaXN0ZW5lcnMgb24gcDEgYm9hcmQgc3F1YXJlcyB0byBwbGFjZSBzaGlwc1xuICAgICAgICBkb21JbnRlcmFjdC5kb21VaVVwZGF0ZShcInBsYWNpbmctc2hpcHNcIiwgXCJzdGFydFwiKTtcbiAgICB9LFxuXG4gICAgLy9SZXN0IG9mIEdhbWUgU2V0dXBcbiAgICBjaGVja0FsbFNoaXBzUGxhY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBwbGF5ZXIgYm9hcmRcbiAgICAgICAgICAgIC8vaGlkZSBkaXJlY3Rpb24gYnV0dG9uXG4gICAgICAgICAgICBkb21JbnRlcmFjdC5kb21VaVVwZGF0ZShcInBsYWNpbmctc2hpcHNcIiwgXCJzdG9wXCIpO1xuICAgICAgICAgICAgLy9wb3B1bGF0ZSBjb21wdXRlciBib2FyZFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBBdXRvLVBsYWNlXCIpO1xuICAgICAgICAgICAgZ2FtZVBsYXkucGxheWVyc0FsbFswXS5ib2FyZC5hdXRvUGxhY2VTaGlwc0FsbCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybigpO1xuICAgICAgICAgICAgLy9jYWxsIFN0YXJ0IHRvIGdhbWVcbiAgICAgICAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgYXR0YWNraW5nXG4gICAgICAgICAgICAvL2NhbGwgc3dpdGNoaW5nIHR1cm5zIGZ1bmN0aW9uP1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFydFR1cm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL1N3aXRjaCB0dXJuIGV2ZXJ5IHRpbWVcbiAgICAgICAgdGhpcy5fc3dpdGNoVHVybigpOyAvL2xvZ2dpbmcgdHVybiBlYWNoIHRpbWUgY2FsbGVkXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyc0FsbCk7XG5cbiAgICAgICAgLy9DaGVjayBmb3Igc2lua2luZyAmIGludGlhbGl6ZSB2YXJzXG4gICAgICAgIGNvbnNvbGUubG9nICh0aGlzLnBsYXllcnNBbGxbMF0uYm9hcmQuYWxsU3VuaygpKTtcbiAgICAgICAgY29uc29sZS5sb2cgKHRoaXMucGxheWVyc0FsbFsxXS5ib2FyZC5hbGxTdW5rKCkpO1xuICAgICAgICBsZXQgY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc0FsbFt0aGlzLnR1cm5dO1xuICAgICAgICBsZXQgcDFTdW5rID0gdGhpcy5wbGF5ZXJzQWxsWzBdLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgbGV0IGNvbXBTdW5rID0gdGhpcy5wbGF5ZXJzQWxsWzBdLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgLy9ORUVEIFRPIFVQREFURSBET00gT04gSU5ESVZJRFVBTCBTSElQIFNJTktJTkdcbiAgICAgICAgY29uc29sZS5sb2cgKCF0aGlzLnBsYXllcnNBbGxbMF0uYm9hcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyAoIXRoaXMucGxheWVyc0FsbFsxXS5ib2FyZCk7XG5cbiAgICAgICAgaWYgKHAxU3VuayB8fCBjb21wU3VuaykgeyAvL2lmIGVpdGhlciBwbGF5ZXIgc3VuayBlbmQgZ2FtZVxuICAgICAgICAgICAgaWYgKGNvbXBTdW5rKSB7IC8vaWYgcDEgd2luc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIDEgd2luc1wiKTtcbiAgICAgICAgICAgICAgICAvL2VuZCBnYW1lIHdpdGggcDEgYXMgd2lubmVyXG4gICAgICAgICAgICB9IGVsc2UgeyAvL2NvbXAgd2luc1xuICAgICAgICAgICAgICAgIC8vZW5kIGdhbWUgd2l0aCBjb21wIGFzIHdpbm5lclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgd2luc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR1cm4gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvL3BsYXllciAxIHR1cm5cbiAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5kb21VaVVwZGF0ZShcInBsYXllcjEtYXR0YWNrXCIsXCJzdGFydFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9jb21wdXRlciB0dXJuXG4gICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QuZG9tVWlVcGRhdGUoXCJwbGF5ZXIxLWF0dGFja1wiLFwic3RvcFwiKTsgLy9uZWVkIHRvIGZpbmlzaCBpbiBkb20gaW50ZXJhY3RcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllcnNBbGxbMF0uYXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnBsYXllcnNBbGxbMF0uYXR0YWNrLDIwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuXG5cblxuICAgIF9zd2l0Y2hUdXJuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudHVybiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy50dXJuID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy50dXJuKTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlRGlyZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGdhbWVQbGF5LnNoaXBEaXJlY3Rpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICBnYW1lUGxheS5zaGlwRGlyZWN0aW9uID0gXCJ5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnYW1lUGxheS5zaGlwRGlyZWN0aW9uID0gXCJ4XCI7IFxuICAgICAgICB9XG4gICAgICAgIGRvbUludGVyYWN0LnRvZ2dsZURpcmVjdGlvbkRpc3BsYXkoKTtcbiAgICB9LFxuICAgIGNoZWNrTG9jYXRpb25WYWxpZDogZnVuY3Rpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCkge1xuICAgICAgICBsZXQgZXJyb3JNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNpbmctZXJyb3JcIik7XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInhcIiAmJiAoeEluZGV4K3NoaXBMZW5ndGgtMSkgPiAxMCkge1xuICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJFcnJvciwgbW92ZSBzaGlwIGxlZnQsIG9yIGNoYW5nZSBkaXJlY3Rpb25cIjtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ5XCIgJiYgKHlJbmRleCtzaGlwTGVuZ3RoLTEpID4gMTApIHtcbiAgICAgICAgICAgIGVycm9yTXNnLmlubmVySFRNTCA9IFwiRXJyb3IsIG1vdmUgc2hpcCB1cCwgb3IgY2hhbmdlIGRpcmVjdGlvblwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjsgLy9VcGRhdGUgd2l0aCBFcnJvciBIYW5kbGluZyBcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5jaGVja1Nwb3RUYWtlbihwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJFcnJvciwgY29uZmxpY3Qgd2l0aCBhbm90aGVyIHNoaXBcIjtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXJyb3JNc2cuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwidmFsaWRcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tTcG90VGFrZW46IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpIHtcbiAgICAgICAgLy91c2VzIGNsYXNzbGlzdCBsZW5ndGggb2Ygc3F1YXJlIHRvIGRldGVybWluZSBpZiBhIHNoaXAgaXMgYWxyZWFkeSB0aGVyZVxuICAgICAgICBmb3IgKGxldCBpPTA7aTxzaGlwTGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrZWRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4fS0ke3hJbmRleCtpfWApO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXgraX0tJHt4SW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMb2NhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLWFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIERPTSBJTlRFUkFDVCBNT0RVTEVcbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+flxuY29uc3QgZG9tSW50ZXJhY3QgPSB7XG4gICAgcG9wdWxhdGVCb2FyZDogZnVuY3Rpb24ocGxheWVySW4pIHtcbiAgICAgICAgLy9zZWxlY3QgYm9hcmQgYmFzZWQgb24gcGxheWVyIHRoYXQgY29tZXMgaW4gdG8gYXBwZW5kIHRvXG4gICAgICAgIGxldCBnYW1lYm9hcmREaXY7XG4gICAgICAgIGxldCBwbGF5ZXJJZCA9IFwiXCI7XG4gICAgICAgIGlmIChwbGF5ZXJJbiA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXAtYm9hcmRcIik7XG4gICAgICAgICAgICBwbGF5ZXJJZCA9IFwiY29cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1ib2FyZFwiKTtcbiAgICAgICAgICAgIHBsYXllcklkID0gXCJwMVwiO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaTw9MTA7aSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTE7IGo8PTEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuaWQgPSBgJHtwbGF5ZXJJZH0tJHtpfS0ke2p9YDtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0ID0gXCJnYW1lLXNxdWFyZVwiO1xuICAgICAgICAgICAgICAgIGdhbWVib2FyZERpdi5hcHBlbmRDaGlsZChzcXVhcmVEaXYpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5hbWVJbjogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPXRleHRdJylbMF07XG4gICAgICAgIGxldCBwbGF5ZXJOYW1lICA9IGZvcm1JbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGlmIChwbGF5ZXJOYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxLW5hbWUgaDJcIik7IFxuICAgICAgICAgICAgcGxheWVyTmFtZURpdi5pbm5lckhUTUwgPSBwbGF5ZXJOYW1lOyAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyTmFtZSA9IFwiUGxheWVyMVwiO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1JbnB1dC5wYXJlbnRFbGVtZW50LnJlc2V0KCk7XG4gICAgICAgIGZvcm1JbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGdhbWVQbGF5LnNldFVwR2FtZShwbGF5ZXJOYW1lKTtcbiAgICB9LFxuICAgIGRvbVVpVXBkYXRlOiBmdW5jdGlvbihyZWFzb24sY2hhbmdlVHlwZSkge1xuICAgICAgICAvL3VwZGF0ZXMgVUkgaW50ZXJhY3Rpb24gaW5jbHVkaW5nIGV2ZW50IGxpc3RlbmVycywgYnV0dG9ucywgXG4gICAgICAgIGxldCBjYXNlSW4gPSBgJHtyZWFzb259ICR7Y2hhbmdlVHlwZX1gO1xuICAgICAgICBzd2l0Y2ggKGNhc2VJbikge1xuICAgICAgICAgICAgY2FzZSBcInBsYWNpbmctc2hpcHMgc3RhcnRcIjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJvblwiKTtcbiAgICAgICAgICAgICAgICAvL3BsYXllciAxIGJvYXJkIHNxdWFyZXNcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyU3F1YXJlc1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIxLWJvYXJkIC5nYW1lLXNxdWFyZVwiKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcXVhcmVzU3RhcnQuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIixkb21JbnRlcmFjdC5sb2NhdGlvbkRhdGEpKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcXVhcmVzU3RhcnQuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRvbUludGVyYWN0LmxvY2F0aW9uRGF0YSkpO1xuICAgICAgICAgICAgICAgIC8vZGlyZWN0aW9uIGJ1dHRvblxuICAgICAgICAgICAgICAgIGxldCBkaXJUb2dnbGVCdG5TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyZWN0aW9uLXRvZy1idG5cIik7XG4gICAgICAgICAgICAgICAgZGlyVG9nZ2xlQnRuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkaXJUb2dnbGVCdG5TdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnYW1lUGxheS50b2dnbGVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBsYWNpbmctc2hpcHMgc3RvcFwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIm9mZlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyU3F1YXJlc1N0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllcjEtYm9hcmQgLmdhbWUtc3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZXNTdG9wLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsZG9tSW50ZXJhY3QubG9jYXRpb25EYXRhKSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlc1N0b3AuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRvbUludGVyYWN0LmxvY2F0aW9uRGF0YSkpO1xuICAgICAgICAgICAgICAgIGxldCBkaXJUb2dnbGVCdG5TdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb24tdG9nLWJ0blwiKTtcbiAgICAgICAgICAgICAgICBkaXJUb2dnbGVCdG5TdG9wLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZGlyVG9nZ2xlQnRuU3RvcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnYW1lUGxheS50b2dnbGVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBsYXllcjEtYXR0YWNrIHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgMSBhdHRhY2tpbmc6XCIpO1xuICAgICAgICAgICAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBhdHRhY2tcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3F1YXJlc1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZVwiKTtcbiAgICAgICAgICAgICAgICBhdHRhY2tTcXVhcmVzU3RhcnQuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYXR0YWNrKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGxheWVyMS1hdHRhY2sgc3RvcFwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIDEgc3RvcCBhdHRhY2tpbmc6XCIpO1xuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBhdHRhY2tcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3F1YXJlc1N0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIGF0dGFja1NxdWFyZXNTdG9wLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnYW1lUGxheS5wbGF5ZXJzQWxsWzFdLmF0dGFjaykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2NhdGlvbkRhdGE6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY3VycmVudERpcmVjdGlvbiA9IGdhbWVQbGF5LnNoaXBEaXJlY3Rpb247XG4gICAgICAgIC8vQ3VycmVudCBTaGlwIExlbmd0aCBiZWluZyBwbGFjZWRcbiAgICAgICAgbGV0IHNoaXBJbmRleCA9IGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuc2hpcHNBbGwubGVuZ3RoO1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGdhbWVQbGF5LnNoaXBTaXplc1tzaGlwSW5kZXhdO1xuICAgICAgICBsZXQgc2hpcE5hbWUgPSBnYW1lUGxheS5zaGlwTmFtZXNbc2hpcEluZGV4XTtcbiAgICAgICAgLy9nZXQgZXZlbnQgJiBzcXVhcmUgbG9jYXRpb24gaW5mb1xuICAgICAgICBsZXQgZXZlbnRUeXBlID0gZS50eXBlO1xuICAgICAgICBsZXQgc3F1YXJlSWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgbGV0IGluZGljZXMgPSBzcXVhcmVJZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBwbEluZGV4ID0gaW5kaWNlc1swXTsgLy9rZWVwaW5nIGluIGNhc2UgbmVlZCB0aGlzIGZ1bmN0aW9uIGZvciBjb21wdXRlciBwbGFjZW1lbnRzIHRvb1xuICAgICAgICBsZXQgeEluZGV4ID0gTnVtYmVyKGluZGljZXNbMl0pO1xuICAgICAgICBsZXQgeUluZGV4ID0gTnVtYmVyKGluZGljZXNbMV0pO1xuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgIGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQucGxhY2VTaGlwKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgaWYgKGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuc2hpcHNBbGwubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgZ2FtZVBsYXkuY2hlY2tBbGxTaGlwc1BsYWNlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gXCJtb3VzZW92ZXJcIikge1xuICAgICAgICAgICAgZG9tSW50ZXJhY3Quc2hvd0xvY2F0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGFjZVNoaXBEb206IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpIHtcbiAgICAgICAgLy91cGRhdGVzIHNxdWFyZXMgY2xhc3Mgdy8gc2hpcCBpbmZvXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHNoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdCA9IGBnYW1lLXNxdWFyZSBzaGlwLWFjdGl2ZSAke3BsSW5kZXh9LSR7c2hpcE5hbWV9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4K2l9LSR7eEluZGV4fWApO1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMb2NhdGlvbi5jbGFzc0xpc3QgPSBgZ2FtZS1zcXVhcmUgc2hpcC1hY3RpdmUgJHtwbEluZGV4fS0ke3NoaXBOYW1lfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvd0xvY2F0aW9uOiBmdW5jdGlvbihwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGxldCB2YWxpZFJlcG9ydCA9IGdhbWVQbGF5LmNoZWNrTG9jYXRpb25WYWxpZChwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKTtcbiAgICAgICAgLy9DbGVhciBhbnkgY2VsbHMgYXJlYWR5IGhpZ2hsaWdodGVkIFxuICAgICAgICBkb21JbnRlcmFjdC5oaWRlTG9jYXRpb24oXCJ2YWxpZFwiKTtcbiAgICAgICAgZG9tSW50ZXJhY3QuaGlkZUxvY2F0aW9uKFwiZXJyb3JcIik7XG4gICAgICAgIC8vaGlnaGxpZ2h0IHNlbGVjdGVkIHNoaXAgcGxhY2VtZW50IGJhc2VkIG9uIHZhbGlkIHN0YXR1cyBcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8c2hpcExlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIGlmKHhJbmRleCtpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdC50b2dnbGUodmFsaWRSZXBvcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoeUluZGV4K2kgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaGxpZ2h0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbEluZGV4fS0ke3lJbmRleCtpfS0ke3hJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0TG9jYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSh2YWxpZFJlcG9ydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoaWRlTG9jYXRpb246IGZ1bmN0aW9uKGNsYXNzVG9IaWRlKSB7XG4gICAgICAgIGxldCBkaXZzVG9IaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NUb0hpZGV9YCk7XG4gICAgICAgIGlmIChkaXZzVG9IaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRpdnNUb0hpZGUuZm9yRWFjaChzcXVhcmVIaWdobGlnaHRlZCA9PiBzcXVhcmVIaWdobGlnaHRlZC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzVG9IaWRlfWApKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlRGlyZWN0aW9uRGlzcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gZ2FtZVBsYXkuc2hpcERpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpcmVjdGlvbi10b2ctYnRuXCIpLmlubmVySFRNTCA9IGAke3RleHR9IERpcmVjdGlvbmA7XG4gICAgfSxcbiAgICBhZGRBdHRhY2s6IGZ1bmN0aW9uKGF0dGFja1Jlc3VsdCx4SW4seUluLHBsSW5kZXgpIHtcbiAgICAgICAgbGV0IGF0dGFja1NxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUlufS0ke3hJbn1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYXR0YWNrU3F1YXJlKTtcbiAgICAgICAgY29uc29sZS5sb2coYXR0YWNrU3F1YXJlLmNsYXNzTGlzdCk7XG4gICAgICAgIC8vIGxldCBjbGFzc2VzQ3VycmVudCA9IGF0dGFja1NxdWFyZS5jbGFzc0xpc3Q7XG4gICAgICAgIC8vIGNsYXNzZXNDdXJyZW50LnB1c2goYXR0YWNrUmVzdWx0KTtcbiAgICAgICAgYXR0YWNrU3F1YXJlLmNsYXNzTGlzdC5hZGQoYXR0YWNrUmVzdWx0KTtcbiAgICAgICAgY29uc29sZS5sb2coYXR0YWNrU3F1YXJlLmNsYXNzTGlzdCk7XG4gICAgfVxufVxuXG5nYW1lUGxheS5pbml0KCk7XG5cblxuXG5cblxuXG4vL0RlYnVnZ2luZyBDYXNlc1xuXG4vLyBsZXQgdGVzdEJvYXJkID0gZ2FtZUJvYXJkKCk7XG4vLyB0ZXN0Qm9hcmQucGxhY2VTaGlwKDUsXCIzLDJcIixcInlcIik7XG4vLyBjb25zb2xlLmxvZyh0ZXN0Qm9hcmQucmVjaWV2ZUF0dGFjayg0LDIpKTtcbi8vIGNvbnNvbGUubG9nKHRlc3RCb2FyZC5yZWNpZXZlQXR0YWNrKDQsMikpO1xuXG4vLyBsZXQgcGxheWVyMSA9IHBsYXllck5ldyhcIlN0ZXZlXCIpO1xuLy8gcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoMTAsXCIxLDFcIixcInhcIik7XG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIxKTtcbi8vIGxldCBwbGF5ZXJDb21wID0gcGxheWVyTmV3KFwiY29tcHV0ZXJcIik7XG4vLyBwbGF5ZXJDb21wLmF0dGFjayhwbGF5ZXIxKTtcblxuXG4vLyAvLyBUZXN0aW5nIEV4cG9ydHNcbi8vIG1vZHVsZS5leHBvcnRzID0ge2NyZWF0ZVNoaXAsIGdhbWVCb2FyZCwgcGxheWVyTmV3fTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9