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
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS Reset via http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n/* Main Styled Font */\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n/* font-family: 'Montserrat', sans-serif; */\n\n\n/* General Document Styles */\n* {\n    --display-width: 35rem;\n    --piece-hp-width: 0.8rem;\n\n    /* --light-blue1: #A5D8FF; */\n    --light-blue2: #14FFF7; \n    /* --dark-blue1: #0081A7; */\n    --dark-blue2: #0BC9CD;\n    --dark-blue3: #1D8A99;\n    /* --dark-blue4: #577590; */\n    --grey-ship1: #7C7C7C;\n    /* --grey-ship2: #B2B2B2; */\n    --grey-ship3: #C3BABA;\n    --green-good1: #7DCD85;\n    --green-good2: #C9F299;\n\n    --red-bad1: #A71D31;\n    --red-bad2: #f29999;\n    --orange1: #F7B267;\n    --orange2: #F79D65;\n\n    font-size: 10px;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\n Main Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\nHeader Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n\n#comms h1 {\n    font-size: 3.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.5rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.5rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#ui-output {\n}\n\n#ui-output-text {\n    font-size: 1.5rem;\n    font-family: 'Montserrat', sans-serif;\n    margin-bottom: 1rem;\n}\n\n#ui-output-text.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.2rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n/* #comp-board .game-square-playing:hover { */\n#comp-board .game-square:hover {\n    background-color: var(--dark-blue2);\n    background-color: rgb(70, 70, 70);\n}\n\n\n#comp-board .game-square:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n.game-square.ship-active.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.ship-hidden.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.miss {\n    background-color: var(--dark-blue3);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\n\ndiv[id*=\"pieces\"] > div.hidden {\n    /* ships hidden */\n    visibility: hidden;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"hp-0\"].hit {\n    /* ship hp detail hit */\n    background-color: var(--red-bad1);\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS Reset via http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n/* Main Styled Font */\n@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n\n/* General Document Styles */\n* {\n    --display-width: 35rem;\n    --piece-hp-width: 0.8rem;\n\n    /* --light-blue1: #A5D8FF; */\n    --light-blue2: #14FFF7; \n    /* --dark-blue1: #0081A7; */\n    --dark-blue2: #0BC9CD;\n    --dark-blue3: #1D8A99;\n    /* --dark-blue4: #577590; */\n    --grey-ship1: #7C7C7C;\n    /* --grey-ship2: #B2B2B2; */\n    --grey-ship3: #C3BABA;\n    --green-good1: #7DCD85;\n    --green-good2: #C9F299;\n\n    --red-bad1: #A71D31;\n    --red-bad2: #f29999;\n    --orange1: #F7B267;\n    --orange2: #F79D65;\n\n    font-size: 10px;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\n Main Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\nHeader Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n\n#comms h1 {\n    font-size: 3.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.5rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.5rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#ui-output {\n}\n\n#ui-output-text {\n    font-size: 1.5rem;\n    font-family: 'Montserrat', sans-serif;\n    margin-bottom: 1rem;\n}\n\n#ui-output-text.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1.2rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n/* #comp-board .game-square-playing:hover { */\n#comp-board .game-square:hover {\n    background-color: var(--dark-blue2);\n    background-color: rgb(70, 70, 70);\n}\n\n\n#comp-board .game-square:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n.game-square.ship-active.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.ship-hidden.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.miss {\n    background-color: var(--dark-blue3);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\n\ndiv[id*=\"pieces\"] > div.hidden {\n    /* ships hidden */\n    visibility: hidden;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"hp-0\"].hit {\n    /* ship hp detail hit */\n    background-color: var(--red-bad1);\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n"],"sourceRoot":""}]);
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




// ~~~~~~~~~~~~~~~~~~~~~~~
// SHIP FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function createShip(xIn,yIn,dirIn,lenIn,nameIn) {
    let positionArr = [];
    for (let i=0;i<lenIn;i++) {
        let shipSquare = {};
        if (dirIn === "x") {
            shipSquare = {
                shipIndex: i+1,
                posX: xIn + i,
                posY: yIn,
                hitStatus: false,
            }
        } else if (dirIn === "y") {
            shipSquare = {
                shipIndex: i+1,
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
        position: positionArr,
        sunkYN: false,
        hit: function(shipIndex) {
            //called by board.recieve attack()
            if (this.position[shipIndex].hitStatus) {
                return "invalid";
            } else {
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
        beenHit: function() {
            let hitOut = false;
            for (let i=0; i<this.position.length; i++) {
                if (this.position[i].hitStatus) {
                    hitOut = true;
                }
            }
            return hitOut;
        }
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~
// BOARD FACTORY FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~
function gameBoard() {
    return {

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
                        attackResponse = "invalid";
                        missFlag = true;
                        break;
                    }
                }
                if ( atkX > 10 || atkX < 1 || atkY > 10 || atkY < 1) {
                    attackResponse = "invalid";
                    missFlag = true;
                }
            }
            //Checks for valid Miss (not selected)
            if (attackResponse.length < 1) {
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
            switch (validCheck) {
                case "error":
                    // console.log("Cant place ship here");
                    break;
                case "valid":
                    let newShip = createShip(xIndex,yIndex,currentDirection,shipLength,shipName);
                    this.shipsAll.push(newShip);
                    domInteract.placeShipDom(plIndex,xIndex,yIndex,currentDirection,shipLength,shipName);
                    domInteract.showHp(shipName,plIndex);
            }
        },

        autoPlaceShipsAll: function() {
            let directions = ["x","y"];
            while (this.shipsAll.length < 5) {
                let xIndex = Math.floor((Math.random() * 10) + 1);
                let yIndex = Math.floor((Math.random() * 10) + 1);
                let randDirInt = Math.round(Math.random());
                let randDirection = directions[randDirInt];
                let shipLength = gamePlay.shipSizes[this.shipsAll.length];
                let shipName = gamePlay.shipNames[this.shipsAll.length];
                this.placeShip("co",xIndex,yIndex,randDirection,shipLength,shipName);
            }
        },

        allSunk: function () {
            let sunkCount = 0;
            for(let i=0; i<5; i++) {
                if (this.shipsAll[i].isSunk())
                sunkCount += 1;
            }
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
            smartHits: [],
            autoAttack: function() {
                //check opponents ships 
                let guessX = 0;
                let guessY = 0;
                let allOppShips = gamePlay.playersAll[1].board.shipsAll;
                //if some ships hit but not sunk
                let attackingShips =  allOppShips.filter(ship => ship.beenHit() === true && ship.isSunk() === false);
                let attackStop = false;
                while (!attackStop) {
                    //check first ship thats not sunk but has been hit
                    if (attackingShips.length > 0) {
                        let selectedShip = attackingShips[0];
                        let hitsAll = selectedShip.position.filter(square => square.hitStatus === true)
                        let randArr = [-1,1];
                        let randFactor = randArr[Math.floor(Math.random()*2)];
                        let randFactorB = randArr[Math.floor(Math.random()*2)];
                        //pull first hit
                        let hitFirst = hitsAll[0];
                        //if more than 1 hit guess based on axis
                        if (hitsAll.length > 1) {
                            //pull last hit
                            let hitLast = hitsAll[hitsAll.length-1];
                            //check hit axis
                            if (hitFirst.posX === hitLast.posX) {
                                //y axis is correct
                                if (randFactor > 0) {
                                    guessY = hitLast.posY + 1;
                                } else {
                                    guessY = hitFirst.posY - 1;
                                }
                                guessX = hitFirst.posX;
                            } else if (hitFirst.posY === hitLast.posY) {
                                //x axis is correct
                                if (randFactor > 0) {
                                    guessX = hitLast.posX + 1;
                                } else {
                                    guessX = hitFirst.posX - 1;
                                }
                                guessY = hitFirst.posY;
                            }
                        } else {
                            //if only one hit 
                            //check one of the 4 squares randomly, continues while invalud 
                            if (randFactorB > 0) {
                                guessY = hitFirst.posY;
                                guessX = hitFirst.posX + randFactor;
                            } else {
                                guessY = hitFirst.posY + randFactor;
                                guessX = hitFirst.posX;
                            }
                        }
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(guessX,guessY);
                        if (attackResult === "hit" || attackResult === "miss") {
                            domInteract.addAttack(attackResult,guessX,guessY,"p1");
                            attackStop = true;
                        }
                    } else {
                    //if all hit are sunk
                        let randX = Math.floor((Math.random() * 10)+1);
                        let randY = Math.floor((Math.random() * 10)+1);
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(randX,randY);
                        if (attackResult === "hit" || attackResult === "miss")  {
                            if (attackResult === "hit") {
                                let hitElement = document.getElementById(`p1-${randY}-${randX}`);
                                let shipNameHit = hitElement.classList[2].split("-")[1];
                                gamePlay.playersAll[0].smartHits.push({xPos: randX, yPos: randY, shipName: shipNameHit});
                            }
                            attackStop = true;
                            domInteract.addAttack(attackResult,randX,randY,"p1");
                        }
                    }
                }
                gamePlay.startTurn();
            }
        }
    } else {
        return {
            name: name,
            board: gameBoard(),
            attack: function(e) {
                let attackIn = e.target.id.split("-");
                let xAtk = Number(attackIn[2]);
                let yAtk = Number(attackIn[1]);
                //if successful call next player turn 
                let attackResult = gamePlay.playersAll[0].board.recieveAttack(xAtk,yAtk);
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
        domInteract.uiTextUpdate(`${player1Name} place all of your ships on your board.`);
    },

    //Rest of Game Setup
    checkAllShipsPlaces: function() {
        if (this.playersAll[1].board.shipsAll.length === 5) {
            //remove event listeners on player board & hide direction button
            domInteract.domUiUpdate("placing-ships", "stop");
            //populate computer board
            gamePlay.playersAll[0].board.autoPlaceShipsAll();
            this.startTurn();
        }
    },
    startTurn: function() {
        //Switch turn every time
        this._switchTurn(); //logging turn each time called
        //Check for sinking & intialize vars
        let p1Sunk = this.playersAll[1].board.allSunk();
        let compSunk = this.playersAll[0].board.allSunk();

        if (p1Sunk || compSunk) { //if either player sunk end game
            if (compSunk) { //if p1 wins
                // console.log("Player 1 wins");
                domInteract.uiTextUpdate(`${this.playersAll[1].name} Wins!`);
                //end game with p1 as winner
            } else { //comp wins
                // console.log("Computer wins");
                domInteract.uiTextUpdate(`Computer Wins!`);
            }
            domInteract.domUiUpdate("player1-attack","stop");

        } else {
            if (this.turn === 1) {
                //player 1 turn
                domInteract.uiTextUpdate(`${this.playersAll[this.turn].name}, it is your turn. Choose a square on your opponent's board to attack.`);
                domInteract.domUiUpdate("player1-attack","start");
            } else {
                //computer turn
                domInteract.domUiUpdate("player1-attack","stop"); //need to finish in dom interact
                domInteract.uiTextUpdate(`Computer's turn, player attacking...`);
                setTimeout(this.playersAll[0].autoAttack,2000);
            }
        }
    },

    _switchTurn: function() {
        if (this.turn === 0) {
            this.turn = 1;
        } else {
            this.turn = 0;
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
        let errorCheck = true;
        for (let i=0;i<shipLength;i++) {
            if (currentDirection === "x") {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                if (checkedLocation.classList.contains("ship-active") || checkedLocation.classList.contains("ship-hidden")) {
                    errorCheck = false;
                }
            } else {
                let checkedLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                if (checkedLocation.classList.contains("ship-active") || checkedLocation.classList.contains("ship-hidden")) {
                    errorCheck = false;
                }
            }
        }
        return errorCheck;
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
                // console.log ("off");
                let playerSquaresStop = document.querySelectorAll("#player1-board .game-square");
                playerSquaresStop.forEach(square => square.removeEventListener("mouseover",domInteract.locationData));
                playerSquaresStop.forEach(square => square.removeEventListener("click",domInteract.locationData));
                let dirToggleBtnStop = document.getElementById("direction-tog-btn");
                dirToggleBtnStop.classList.toggle("hidden");
                dirToggleBtnStop.removeEventListener("click",gamePlay.toggleDirection);
                break;
            case "player1-attack start":
                // console.log("player 1 attacking:");
                //add event listeners on attack
                let attackSquaresStart = document.querySelectorAll("#comp-board .game-square");
                attackSquaresStart.forEach(square => square.addEventListener("click",gamePlay.playersAll[1].attack));
                break;
            case "player1-attack stop":
                // console.log("player 1 stop attacking:");
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
            if (plIndex === "p1") {
                if (currentDirection === "x") {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
                } else {
                    let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                    highlightLocation.classList = `game-square ship-active ${plIndex}-${shipName}`;
                }
            } else {
                if (currentDirection === "x") {
                        let highlightLocation = document.getElementById(`${plIndex}-${yIndex}-${xIndex+i}`);
                        highlightLocation.classList = `game-square ship-hidden ${plIndex}-${shipName}`;
                } else {
                        let highlightLocation = document.getElementById(`${plIndex}-${yIndex+i}-${xIndex}`);
                        highlightLocation.classList = `game-square ship-hidden ${plIndex}-${shipName}`;
                }
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
        //Display of square hit
        let attackSquare = document.getElementById(`${plIndex}-${yIn}-${xIn}`);
        attackSquare.classList.add(attackResult);
        //HP Display of ship if hit
        if (attackResult === "hit") {
            let playerIndexNum = 1;
            if (plIndex === "co") {
                playerIndexNum = 0; 
            }
            let shipName = attackSquare.classList[2].split("-")[1];
            let selectedShip = gamePlay.playersAll[playerIndexNum].board.shipsAll.filter(ship => {
                return ship.shipType === shipName;
            })
            let selectedShipIndex = 0;
            for (let i=0; i<selectedShip[0].position.length; i++) {
                if (selectedShip[0].position[i].hitStatus) {
                    selectedShipIndex++;
                }
            }
            let hpDivUpdating = document.getElementById(`${shipName}-${plIndex}-hp-0${selectedShipIndex}`);
            hpDivUpdating.classList.add("hit");
        }
    },
    showHp: function(shipName,plIndex) {
        let shipHpDiv = document.getElementById(`${shipName}-${plIndex}`);
        shipHpDiv.classList.toggle("hidden");
    },
    uiTextUpdate: function(textIn) {
        let uiTextElement = document.getElementById("ui-output-text");
        // console.log(uiTextElement);
        if (textIn === "clear" ) {
            uiTextElement.innerHTML = "";
            uiTextElement.classList = "hidden";
        } else {
            uiTextElement.innerHTML = textIn;
            uiTextElement.classList = "";
        }
    }
}

gamePlay.init();







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxRQUFRLFlBQVksYUFBYSxXQUFXLGNBQWMsYUFBYSxNQUFNLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxVQUFVLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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S0FBSztBQUNMO0FBQ0E7QUFDQSxvRUFBb0UsTUFBTTtBQUMxRSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNEQUFzRCxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFNBQVMsR0FBRyxRQUFRLE9BQU8sa0JBQWtCO0FBQ3hHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtREFBbUQsU0FBUyxHQUFHLFFBQVE7QUFDdkU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LZGFtK1RobW9yK1BybyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENTUyBSZXNldCB2aWEgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuXFxuLyogTWFpbiBTdHlsZWQgRm9udCAqL1xcbi8qIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmOyAqL1xcbi8qIFN1YiBGb250ICovXFxuLyogZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgKi9cXG5cXG5cXG4vKiBHZW5lcmFsIERvY3VtZW50IFN0eWxlcyAqL1xcbioge1xcbiAgICAtLWRpc3BsYXktd2lkdGg6IDM1cmVtO1xcbiAgICAtLXBpZWNlLWhwLXdpZHRoOiAwLjhyZW07XFxuXFxuICAgIC8qIC0tbGlnaHQtYmx1ZTE6ICNBNUQ4RkY7ICovXFxuICAgIC0tbGlnaHQtYmx1ZTI6ICMxNEZGRjc7IFxcbiAgICAvKiAtLWRhcmstYmx1ZTE6ICMwMDgxQTc7ICovXFxuICAgIC0tZGFyay1ibHVlMjogIzBCQzlDRDtcXG4gICAgLS1kYXJrLWJsdWUzOiAjMUQ4QTk5O1xcbiAgICAvKiAtLWRhcmstYmx1ZTQ6ICM1Nzc1OTA7ICovXFxuICAgIC0tZ3JleS1zaGlwMTogIzdDN0M3QztcXG4gICAgLyogLS1ncmV5LXNoaXAyOiAjQjJCMkIyOyAqL1xcbiAgICAtLWdyZXktc2hpcDM6ICNDM0JBQkE7XFxuICAgIC0tZ3JlZW4tZ29vZDE6ICM3RENEODU7XFxuICAgIC0tZ3JlZW4tZ29vZDI6ICNDOUYyOTk7XFxuXFxuICAgIC0tcmVkLWJhZDE6ICNBNzFEMzE7XFxuICAgIC0tcmVkLWJhZDI6ICNmMjk5OTk7XFxuICAgIC0tb3JhbmdlMTogI0Y3QjI2NztcXG4gICAgLS1vcmFuZ2UyOiAjRjc5RDY1O1xcblxcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogfn5+fn5+fn5+fn5+fn5+fn5+XFxuIE1haW4gRG9jdW1lbnQgU3R5bGVzXFxufn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVkaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2dhbWVkaXNwbGF5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3BsYXllcjEtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI2NvbXAtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuXFxuLyogfn5+fn5+fn5+fn5+fn5+fn5+XFxuSGVhZGVyIERvY3VtZW50IFN0eWxlc1xcbn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xcblxcbiNjb21tcyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI3BsYXllci1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItaW4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbiNwbGF5ZXItaW4gaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbiNwbGF5ZXItaW4gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAzKSA7XFxufVxcblxcbiNwbGF5ZXItaW4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTEpIDtcXG59XFxuXFxuI3VpLW91dHB1dCB7XFxufVxcblxcbiN1aS1vdXRwdXQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jdWktb3V0cHV0LXRleHQuaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jcGxhY2luZy1lcnJvciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBHYW1lYm9hcmQgU3R5bGVzICovXFxuXFxuLyogTmFtZSBEaXNwbGF5ICovXFxuLnBsYXllci1uYW1lIHtcXG59XFxuXFxuLnBsYXllci1uYW1lIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBHYW1lYm9hcmQgKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLWdhcDogLjFyZW07XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUyKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgKi9cXG59XFxuXFxuLyogI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlLXBsYXlpbmc6aG92ZXIgeyAqL1xcbiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxufVxcblxcblxcbiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcXG59XFxuXFxuLyogU2hpcCBQbGFjZW1lbnQgU3R5bGVzICovXFxuLmdhbWUtc3F1YXJlLmVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUudmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1nb29kMik7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5zaGlwLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1hY3RpdmUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1oaWRkZW4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTMpO1xcbn1cXG5cXG5cXG4vKiBHYW1lIFBpZWNlcyBTdHlsZXMgLSBOb24gUGxheWVyIG9yIFBpZWNlIHNwZWNpZmljICovXFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0ge1xcbiAgICB3aWR0aDogdmFyKC0tZGlzcGxheS13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiB7XFxuICAgIC8qIHNoaXBzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIE1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdi5oaWRkZW4ge1xcbiAgICAvKiBzaGlwcyBoaWRkZW4gKi9cXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiA+IGRpdiB7XFxuICAgIC8qIHNoaXAgaHAgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdltpZCo9XFxcImhwLTBcXFwiXSB7XFxuICAgIC8qIHNoaXAgaHAgZGV0YWlsICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1nb29kMSk7XFxuICAgIGhlaWdodDogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICB3aWR0aDogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICBtYXJnaW46IDAgMC4xcmVtIDAuMjVyZW0gMC4xcmVtO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwwLDApOyAqL1xcblxcbn1cXG5cXG5kaXZbaWQqPVxcXCJocC0wXFxcIl0uaGl0IHtcXG4gICAgLyogc2hpcCBocCBkZXRhaWwgaGl0ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBwIHtcXG4gICAgLyogc2hpcCBsYWJlbCAqL1xcbiAgICBmb250LXNpemU6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyREFBMkQ7QUFDM0Q7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2Ysd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7OztBQUdBLHFCQUFxQjtBQUVyQiwrQ0FBK0M7QUFDL0MsYUFBYTtBQUViLDJDQUEyQzs7O0FBRzNDLDRCQUE0QjtBQUM1QjtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7O0lBRXhCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0lBRXRCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUNBQXlDO0FBQzdDOztBQUVBOzt1QkFFdUI7QUFDdkI7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzt1QkFFdUI7O0FBRXZCO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7Ozs7O0FBS0EscUJBQXFCOztBQUVyQixpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUEsY0FBYztBQUNkO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtDQUFrQztBQUN0Qzs7QUFFQSw2Q0FBNkM7QUFDN0M7SUFDSSxtQ0FBbUM7SUFDbkMsaUNBQWlDO0FBQ3JDOzs7QUFHQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7OztBQUdBLHNEQUFzRDs7QUFFdEQ7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMscUNBQXFDO0FBQ3pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBSZXNldCB2aWEgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuXFxuLyogTWFpbiBTdHlsZWQgRm9udCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtkYW0rVGhtb3IrUHJvJmRpc3BsYXk9c3dhcCcpO1xcbi8qIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmOyAqL1xcbi8qIFN1YiBGb250ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG4vKiBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAqL1xcblxcblxcbi8qIEdlbmVyYWwgRG9jdW1lbnQgU3R5bGVzICovXFxuKiB7XFxuICAgIC0tZGlzcGxheS13aWR0aDogMzVyZW07XFxuICAgIC0tcGllY2UtaHAtd2lkdGg6IDAuOHJlbTtcXG5cXG4gICAgLyogLS1saWdodC1ibHVlMTogI0E1RDhGRjsgKi9cXG4gICAgLS1saWdodC1ibHVlMjogIzE0RkZGNzsgXFxuICAgIC8qIC0tZGFyay1ibHVlMTogIzAwODFBNzsgKi9cXG4gICAgLS1kYXJrLWJsdWUyOiAjMEJDOUNEO1xcbiAgICAtLWRhcmstYmx1ZTM6ICMxRDhBOTk7XFxuICAgIC8qIC0tZGFyay1ibHVlNDogIzU3NzU5MDsgKi9cXG4gICAgLS1ncmV5LXNoaXAxOiAjN0M3QzdDO1xcbiAgICAvKiAtLWdyZXktc2hpcDI6ICNCMkIyQjI7ICovXFxuICAgIC0tZ3JleS1zaGlwMzogI0MzQkFCQTtcXG4gICAgLS1ncmVlbi1nb29kMTogIzdEQ0Q4NTtcXG4gICAgLS1ncmVlbi1nb29kMjogI0M5RjI5OTtcXG5cXG4gICAgLS1yZWQtYmFkMTogI0E3MUQzMTtcXG4gICAgLS1yZWQtYmFkMjogI2YyOTk5OTtcXG4gICAgLS1vcmFuZ2UxOiAjRjdCMjY3O1xcbiAgICAtLW9yYW5nZTI6ICNGNzlENjU7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiB+fn5+fn5+fn5+fn5+fn5+fn5cXG4gTWFpbiBEb2N1bWVudCBTdHlsZXNcXG5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZ2FtZWRpc3BsYXkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jcGxheWVyMS1nYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4jY29tcC1nYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG5cXG4vKiB+fn5+fn5+fn5+fn5+fn5+fn5cXG5IZWFkZXIgRG9jdW1lbnQgU3R5bGVzXFxufn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXFxuXFxuI2NvbW1zIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1pbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuI3BsYXllci1pbiBpbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDMpIDtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jdWktb3V0cHV0IHtcXG59XFxuXFxuI3VpLW91dHB1dC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiN1aS1vdXRwdXQtdGV4dC5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAzKSA7XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UxKSA7XFxufVxcblxcbiNwbGFjaW5nLWVycm9yIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcblxcblxcblxcbi8qIEdhbWVib2FyZCBTdHlsZXMgKi9cXG5cXG4vKiBOYW1lIERpc3BsYXkgKi9cXG4ucGxheWVyLW5hbWUge1xcbn1cXG5cXG4ucGxheWVyLW5hbWUgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbi8qIEdhbWVib2FyZCAqL1xcbi5nYW1lYm9hcmQge1xcbiAgICB3aWR0aDogdmFyKC0tZGlzcGxheS13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tZGlzcGxheS13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDFmcik7XFxuICAgIGdyaWQtZ2FwOiAuMXJlbTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZTIpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAqL1xcbn1cXG5cXG4vKiAjY29tcC1ib2FyZCAuZ2FtZS1zcXVhcmUtcGxheWluZzpob3ZlciB7ICovXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG59XFxuXFxuXFxuI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZTIpO1xcbn1cXG5cXG4vKiBTaGlwIFBsYWNlbWVudCBTdHlsZXMgKi9cXG4uZ2FtZS1zcXVhcmUuZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufVxcblxcbi5nYW1lLXNxdWFyZS52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWdvb2QyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLnNoaXAtYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMSk7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5zaGlwLWFjdGl2ZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5zaGlwLWhpZGRlbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlMyk7XFxufVxcblxcblxcbi8qIEdhbWUgUGllY2VzIFN0eWxlcyAtIE5vbiBQbGF5ZXIgb3IgUGllY2Ugc3BlY2lmaWMgKi9cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSB7XFxuICAgIHdpZHRoOiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdID4gZGl2IHtcXG4gICAgLyogc2hpcHMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgTWFyZ2luOiAwLjVyZW07XFxufVxcblxcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdID4gZGl2LmhpZGRlbiB7XFxuICAgIC8qIHNoaXBzIGhpZGRlbiAqL1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdID4gZGl2ID4gZGl2IHtcXG4gICAgLyogc2hpcCBocCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2W2lkKj1cXFwiaHAtMFxcXCJdIHtcXG4gICAgLyogc2hpcCBocCBkZXRhaWwgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWdvb2QxKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1waWVjZS1ocC13aWR0aCk7XFxuICAgIHdpZHRoOiB2YXIoLS1waWVjZS1ocC13aWR0aCk7XFxuICAgIG1hcmdpbjogMCAwLjFyZW0gMC4yNXJlbSAwLjFyZW07XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLDAsMCk7ICovXFxuXFxufVxcblxcbmRpdltpZCo9XFxcImhwLTBcXFwiXS5oaXQge1xcbiAgICAvKiBzaGlwIGhwIGRldGFpbCBoaXQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcblxcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiA+IHAge1xcbiAgICAvKiBzaGlwIGxhYmVsICovXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG4vLyBTSElQIEZBQ1RPUlkgRlVOQ1RJT05cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5mdW5jdGlvbiBjcmVhdGVTaGlwKHhJbix5SW4sZGlySW4sbGVuSW4sbmFtZUluKSB7XG4gICAgbGV0IHBvc2l0aW9uQXJyID0gW107XG4gICAgZm9yIChsZXQgaT0wO2k8bGVuSW47aSsrKSB7XG4gICAgICAgIGxldCBzaGlwU3F1YXJlID0ge307XG4gICAgICAgIGlmIChkaXJJbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmUgPSB7XG4gICAgICAgICAgICAgICAgc2hpcEluZGV4OiBpKzEsXG4gICAgICAgICAgICAgICAgcG9zWDogeEluICsgaSxcbiAgICAgICAgICAgICAgICBwb3NZOiB5SW4sXG4gICAgICAgICAgICAgICAgaGl0U3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJJbiA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmUgPSB7XG4gICAgICAgICAgICAgICAgc2hpcEluZGV4OiBpKzEsXG4gICAgICAgICAgICAgICAgcG9zWDogeEluLFxuICAgICAgICAgICAgICAgIHBvc1k6IHlJbiAraSxcbiAgICAgICAgICAgICAgICBoaXRTdGF0dXM6IGZhbHNlLCBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbkFyci5wdXNoKHNoaXBTcXVhcmUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIF9zaGlwTGVuZ3RoOiBsZW5JbixcbiAgICAgICAgc2hpcFR5cGU6IG5hbWVJbixcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uQXJyLFxuICAgICAgICBzdW5rWU46IGZhbHNlLFxuICAgICAgICBoaXQ6IGZ1bmN0aW9uKHNoaXBJbmRleCkge1xuICAgICAgICAgICAgLy9jYWxsZWQgYnkgYm9hcmQucmVjaWV2ZSBhdHRhY2soKVxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25bc2hpcEluZGV4XS5oaXRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25bc2hpcEluZGV4XS5oaXRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpc1N1bms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMuX3NoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25baV0uaGl0U3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpdENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhpdENvdW50ID4gdGhpcy5fc2hpcExlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rWU4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bmtZTjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rWU4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rWU47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJlZW5IaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGhpdE91dCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbltpXS5oaXRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaGl0T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGl0T3V0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG4vLyBCT0FSRCBGQUNUT1JZIEZVTkNUSU9OXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgICAgc2hpcHNBbGw6IFtdLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgbWlzc2VzQWxsOiBbXSwgLy9rZWVwIHRyYWNrIHRvIGRpc3BsYXkgb24gYm9hcmRcbiAgICAgICAgcmVjaWV2ZUF0dGFjazogZnVuY3Rpb24oYXRrWCxhdGtZKSB7XG4gICAgICAgICAgICAvL3Rha2VzIHBhaXIgb2YgY29vcmRpbmF0ZXMgYW5kIGRldGVybWluZXMgaWYgYXR0YWNrIGhpdCBhIHNoaXBcbiAgICAgICAgICAgIC8vaWYgeWVzIHNlbmQgaGl0IGZ1bmN0aW9uIHRvIHNoaXAgPj4gcmVjaWV2ZXMgXCJoaXRcIiBvciBcImludmFsaWRcIiBiYWNrXG4gICAgICAgICAgICAvL2lmIG5vdCByZWNvcmRzIGEgbWlzc1xuICAgICAgICAgICAgbGV0IGhpdEZsYWcgPSBmYWxzZTsgLy9vbmx5IHRvIGNoZWNrIGlmIHdhcyBhIGhpdCBvbiBzaGlwLCBub3QgdmFsaWQvaW52YWxpZFxuICAgICAgICAgICAgbGV0IG1pc3NGbGFnID0gZmFsc2U7IC8vc2V0IHRvIHRydWUgd2hlbiBhdHRhY2sgbm90IGEgaGl0IG9yIGludmFsaWRcbiAgICAgICAgICAgIGxldCBhdHRhY2tSZXNwb25zZSA9IFwiXCI7XG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgSGl0L0ludmFsaWQgSGl0XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5zaGlwc0FsbC5sZW5ndGg7IGkrKykgeyAvL2ZvciBhbGwgc2hpcHNcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dGhpcy5zaGlwc0FsbFtpXS5wb3NpdGlvbi5sZW5ndGg7IGorKykgeyAgLy9mb3IgYWxsIHNwb3RzIG9uIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBoaXQgaW5kZXggaXMgb24gc2hpcFxuICAgICAgICAgICAgICAgICAgICBpZiAoYXRrWCA9PT0gdGhpcy5zaGlwc0FsbFtpXS5wb3NpdGlvbltqXS5wb3NYICYmIGF0a1kgPT09IHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb25bal0ucG9zWSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1Jlc3BvbnNlID0gdGhpcy5zaGlwc0FsbFtpXS5oaXQoaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXRGbGFnID0gdHJ1ZTsgLy93aWxsIGFsd2F5cyBiZSB0cnVlIGlmIHBvc2l0aW9uIGlzIG9uIGEgc2hpcCBwZXIgaWYgc3RhdGVtZW50IGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQ2hlY2tzIGZvciBJbnZhbGlkIE1pc3MgKE1pc3MgYWxyZWFkeSBzZWxlY3RlZClcbiAgICAgICAgICAgIGlmICghaGl0RmxhZykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGs9MDsgazx0aGlzLm1pc3Nlc0FsbC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXRrWCA9PT0gdGhpcy5taXNzZXNBbGxba10ucG9zWCAmJiBhdGtZID09PSB0aGlzLm1pc3Nlc0FsbFtrXS5wb3NZKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja1Jlc3BvbnNlID0gXCJpbnZhbGlkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIGF0a1ggPiAxMCB8fCBhdGtYIDwgMSB8fCBhdGtZID4gMTAgfHwgYXRrWSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrUmVzcG9uc2UgPSBcImludmFsaWRcIjtcbiAgICAgICAgICAgICAgICAgICAgbWlzc0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQ2hlY2tzIGZvciB2YWxpZCBNaXNzIChub3Qgc2VsZWN0ZWQpXG4gICAgICAgICAgICBpZiAoYXR0YWNrUmVzcG9uc2UubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VzQWxsLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwb3NYOiBhdGtYLFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBhdGtZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYXR0YWNrUmVzcG9uc2UgPSBcIm1pc3NcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXNwb25zZTtcbiAgICAgICAgfSxcblxuICAgICAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpIHtcbiAgICAgICAgICAgIGxldCB2YWxpZENoZWNrID0gZ2FtZVBsYXkuY2hlY2tMb2NhdGlvblZhbGlkKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgc3dpdGNoICh2YWxpZENoZWNrKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ2FudCBwbGFjZSBzaGlwIGhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZFwiOlxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IGNyZWF0ZVNoaXAoeEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzQWxsLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LnBsYWNlU2hpcERvbShwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoLHNoaXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tSW50ZXJhY3Quc2hvd0hwKHNoaXBOYW1lLHBsSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGF1dG9QbGFjZVNoaXBzQWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gW1wieFwiLFwieVwiXTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnNoaXBzQWxsLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICBsZXQgeEluZGV4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEpO1xuICAgICAgICAgICAgICAgIGxldCB5SW5kZXggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmREaXJJbnQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgICAgIGxldCByYW5kRGlyZWN0aW9uID0gZGlyZWN0aW9uc1tyYW5kRGlySW50XTtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGdhbWVQbGF5LnNoaXBTaXplc1t0aGlzLnNoaXBzQWxsLmxlbmd0aF07XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBOYW1lID0gZ2FtZVBsYXkuc2hpcE5hbWVzW3RoaXMuc2hpcHNBbGwubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChcImNvXCIseEluZGV4LHlJbmRleCxyYW5kRGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFsbFN1bms6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzdW5rQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNBbGxbaV0uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgc3Vua0NvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3Vua0NvdW50ID09PSA1KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuLy8gUExBWUVSIEZBQ1RPUlkgRlVOQ1RJT05cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5mdW5jdGlvbiBwbGF5ZXJOZXcobmFtZSkge1xuICAgIGlmIChuYW1lID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IFwiY29tcHV0ZXJcIixcbiAgICAgICAgICAgIGJvYXJkOiBnYW1lQm9hcmQoKSxcbiAgICAgICAgICAgIHNtYXJ0SGl0czogW10sXG4gICAgICAgICAgICBhdXRvQXR0YWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2NoZWNrIG9wcG9uZW50cyBzaGlwcyBcbiAgICAgICAgICAgICAgICBsZXQgZ3Vlc3NYID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgZ3Vlc3NZID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgYWxsT3BwU2hpcHMgPSBnYW1lUGxheS5wbGF5ZXJzQWxsWzFdLmJvYXJkLnNoaXBzQWxsO1xuICAgICAgICAgICAgICAgIC8vaWYgc29tZSBzaGlwcyBoaXQgYnV0IG5vdCBzdW5rXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja2luZ1NoaXBzID0gIGFsbE9wcFNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAuYmVlbkhpdCgpID09PSB0cnVlICYmIHNoaXAuaXNTdW5rKCkgPT09IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlICghYXR0YWNrU3RvcCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZpcnN0IHNoaXAgdGhhdHMgbm90IHN1bmsgYnV0IGhhcyBiZWVuIGhpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNraW5nU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkU2hpcCA9IGF0dGFja2luZ1NoaXBzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpdHNBbGwgPSBzZWxlY3RlZFNoaXAucG9zaXRpb24uZmlsdGVyKHNxdWFyZSA9PiBzcXVhcmUuaGl0U3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRBcnIgPSBbLTEsMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZEZhY3RvciA9IHJhbmRBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kRmFjdG9yQiA9IHJhbmRBcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcHVsbCBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaXRGaXJzdCA9IGhpdHNBbGxbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmIG1vcmUgdGhhbiAxIGhpdCBndWVzcyBiYXNlZCBvbiBheGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGl0c0FsbC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wdWxsIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpdExhc3QgPSBoaXRzQWxsW2hpdHNBbGwubGVuZ3RoLTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaGl0IGF4aXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGl0Rmlyc3QucG9zWCA9PT0gaGl0TGFzdC5wb3NYKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veSBheGlzIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRGYWN0b3IgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1kgPSBoaXRMYXN0LnBvc1kgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NZID0gaGl0Rmlyc3QucG9zWSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NYID0gaGl0Rmlyc3QucG9zWDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhpdEZpcnN0LnBvc1kgPT09IGhpdExhc3QucG9zWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ggYXhpcyBpcyBjb3JyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5kRmFjdG9yID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NYID0gaGl0TGFzdC5wb3NYICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWCA9IGhpdEZpcnN0LnBvc1ggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWSA9IGhpdEZpcnN0LnBvc1k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIG9ubHkgb25lIGhpdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIG9uZSBvZiB0aGUgNCBzcXVhcmVzIHJhbmRvbWx5LCBjb250aW51ZXMgd2hpbGUgaW52YWx1ZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZEZhY3RvckIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWSA9IGhpdEZpcnN0LnBvc1k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWCA9IGhpdEZpcnN0LnBvc1ggKyByYW5kRmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWSA9IGhpdEZpcnN0LnBvc1kgKyByYW5kRmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1ggPSBoaXRGaXJzdC5wb3NYO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBnYW1lUGxheS5wbGF5ZXJzQWxsWzFdLmJvYXJkLnJlY2lldmVBdHRhY2soZ3Vlc3NYLGd1ZXNzWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiIHx8IGF0dGFja1Jlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5hZGRBdHRhY2soYXR0YWNrUmVzdWx0LGd1ZXNzWCxndWVzc1ksXCJwMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBhbGwgaGl0IGFyZSBzdW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApKzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSsxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBnYW1lUGxheS5wbGF5ZXJzQWxsWzFdLmJvYXJkLnJlY2lldmVBdHRhY2socmFuZFgscmFuZFkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJoaXRcIiB8fCBhdHRhY2tSZXN1bHQgPT09IFwibWlzc1wiKSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcDEtJHtyYW5kWX0tJHtyYW5kWH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBOYW1lSGl0ID0gaGl0RWxlbWVudC5jbGFzc0xpc3RbMl0uc3BsaXQoXCItXCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLnNtYXJ0SGl0cy5wdXNoKHt4UG9zOiByYW5kWCwgeVBvczogcmFuZFksIHNoaXBOYW1lOiBzaGlwTmFtZUhpdH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5hZGRBdHRhY2soYXR0YWNrUmVzdWx0LHJhbmRYLHJhbmRZLFwicDFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2FtZVBsYXkuc3RhcnRUdXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGJvYXJkOiBnYW1lQm9hcmQoKSxcbiAgICAgICAgICAgIGF0dGFjazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tJbiA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgeEF0ayA9IE51bWJlcihhdHRhY2tJblsyXSk7XG4gICAgICAgICAgICAgICAgbGV0IHlBdGsgPSBOdW1iZXIoYXR0YWNrSW5bMV0pO1xuICAgICAgICAgICAgICAgIC8vaWYgc3VjY2Vzc2Z1bCBjYWxsIG5leHQgcGxheWVyIHR1cm4gXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdCA9IGdhbWVQbGF5LnBsYXllcnNBbGxbMF0uYm9hcmQucmVjaWV2ZUF0dGFjayh4QXRrLHlBdGspO1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIgfHwgYXR0YWNrUmVzdWx0ID09PSBcIm1pc3NcIikgIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QuYWRkQXR0YWNrKGF0dGFja1Jlc3VsdCx4QXRrLHlBdGssXCJjb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVBsYXkuc3RhcnRUdXJuKCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIEdBTUVQTEFZIExPR0lDIE1PRFVMRVxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5jb25zdCBnYW1lUGxheSA9IHtcbiAgICBwbGF5ZXJzQWxsOiBbXSwgLy9bY29tcHV0ZXIsIHBsYXllcjFdXG4gICAgdHVybjogMCxcbiAgICBzaGlwU2l6ZXM6IFs1LDQsMywzLDJdLFxuICAgIHNoaXBOYW1lczogW1wiY2FycmllclwiLFwiYmF0dGxlc2hpcFwiLFwiY3J1aXNlclwiLFwic3VibWFyaW5lXCIsXCJkZXN0cm95ZXJcIl0sXG4gICAgc2hpcERpcmVjdGlvbjogXCJ4XCIsXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vcG9wdWxhdGUgYm9hcmQgZm9yIGJvdGggc2lkZXNcbiAgICAgICAgZG9tSW50ZXJhY3QucG9wdWxhdGVCb2FyZChcImNvbXB1dGVyXCIpO1xuICAgICAgICBkb21JbnRlcmFjdC5wb3B1bGF0ZUJvYXJkKFwiUGxheWVyIDFcIik7XG4gICAgICAgIC8vc2VsZWN0IGZvcm0gZWxlbWVudCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGxldCBwbGF5ZXJJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1pblwiKTtcbiAgICAgICAgcGxheWVySW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixkb21JbnRlcmFjdC5uYW1lSW4pO1xuICAgIH0sXG5cbiAgICAvL1BsYXllciAxIHNldHVwXG4gICAgc2V0VXBHYW1lOiBmdW5jdGlvbihwbGF5ZXIxTmFtZSkge1xuICAgICAgICAvL0FkZCBwbGF5ZXJzXG4gICAgICAgIHRoaXMucGxheWVyc0FsbC5wdXNoKHBsYXllck5ldyhcImNvbXB1dGVyXCIpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQWxsLnB1c2gocGxheWVyTmV3KGAke3BsYXllcjFOYW1lfWApKTtcbiAgICAgICAgLy9hZGQgRXZlbnQgTGlzdGVuZXJzIG9uIHAxIGJvYXJkIHNxdWFyZXMgdG8gcGxhY2Ugc2hpcHNcbiAgICAgICAgZG9tSW50ZXJhY3QuZG9tVWlVcGRhdGUoXCJwbGFjaW5nLXNoaXBzXCIsIFwic3RhcnRcIik7XG4gICAgICAgIGRvbUludGVyYWN0LnVpVGV4dFVwZGF0ZShgJHtwbGF5ZXIxTmFtZX0gcGxhY2UgYWxsIG9mIHlvdXIgc2hpcHMgb24geW91ciBib2FyZC5gKTtcbiAgICB9LFxuXG4gICAgLy9SZXN0IG9mIEdhbWUgU2V0dXBcbiAgICBjaGVja0FsbFNoaXBzUGxhY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBwbGF5ZXIgYm9hcmQgJiBoaWRlIGRpcmVjdGlvbiBidXR0b25cbiAgICAgICAgICAgIGRvbUludGVyYWN0LmRvbVVpVXBkYXRlKFwicGxhY2luZy1zaGlwc1wiLCBcInN0b3BcIik7XG4gICAgICAgICAgICAvL3BvcHVsYXRlIGNvbXB1dGVyIGJvYXJkXG4gICAgICAgICAgICBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLmJvYXJkLmF1dG9QbGFjZVNoaXBzQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFydFR1cm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL1N3aXRjaCB0dXJuIGV2ZXJ5IHRpbWVcbiAgICAgICAgdGhpcy5fc3dpdGNoVHVybigpOyAvL2xvZ2dpbmcgdHVybiBlYWNoIHRpbWUgY2FsbGVkXG4gICAgICAgIC8vQ2hlY2sgZm9yIHNpbmtpbmcgJiBpbnRpYWxpemUgdmFyc1xuICAgICAgICBsZXQgcDFTdW5rID0gdGhpcy5wbGF5ZXJzQWxsWzFdLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgbGV0IGNvbXBTdW5rID0gdGhpcy5wbGF5ZXJzQWxsWzBdLmJvYXJkLmFsbFN1bmsoKTtcblxuICAgICAgICBpZiAocDFTdW5rIHx8IGNvbXBTdW5rKSB7IC8vaWYgZWl0aGVyIHBsYXllciBzdW5rIGVuZCBnYW1lXG4gICAgICAgICAgICBpZiAoY29tcFN1bmspIHsgLy9pZiBwMSB3aW5zXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5ZXIgMSB3aW5zXCIpO1xuICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LnVpVGV4dFVwZGF0ZShgJHt0aGlzLnBsYXllcnNBbGxbMV0ubmFtZX0gV2lucyFgKTtcbiAgICAgICAgICAgICAgICAvL2VuZCBnYW1lIHdpdGggcDEgYXMgd2lubmVyXG4gICAgICAgICAgICB9IGVsc2UgeyAvL2NvbXAgd2luc1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgd2luc1wiKTtcbiAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC51aVRleHRVcGRhdGUoYENvbXB1dGVyIFdpbnMhYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21JbnRlcmFjdC5kb21VaVVwZGF0ZShcInBsYXllcjEtYXR0YWNrXCIsXCJzdG9wXCIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy50dXJuID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9wbGF5ZXIgMSB0dXJuXG4gICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QudWlUZXh0VXBkYXRlKGAke3RoaXMucGxheWVyc0FsbFt0aGlzLnR1cm5dLm5hbWV9LCBpdCBpcyB5b3VyIHR1cm4uIENob29zZSBhIHNxdWFyZSBvbiB5b3VyIG9wcG9uZW50J3MgYm9hcmQgdG8gYXR0YWNrLmApO1xuICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LmRvbVVpVXBkYXRlKFwicGxheWVyMS1hdHRhY2tcIixcInN0YXJ0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2NvbXB1dGVyIHR1cm5cbiAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5kb21VaVVwZGF0ZShcInBsYXllcjEtYXR0YWNrXCIsXCJzdG9wXCIpOyAvL25lZWQgdG8gZmluaXNoIGluIGRvbSBpbnRlcmFjdFxuICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LnVpVGV4dFVwZGF0ZShgQ29tcHV0ZXIncyB0dXJuLCBwbGF5ZXIgYXR0YWNraW5nLi4uYCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnBsYXllcnNBbGxbMF0uYXV0b0F0dGFjaywyMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfc3dpdGNoVHVybjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR1cm4gPSAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRvZ2dsZURpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChnYW1lUGxheS5zaGlwRGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgICAgICAgZ2FtZVBsYXkuc2hpcERpcmVjdGlvbiA9IFwieVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZVBsYXkuc2hpcERpcmVjdGlvbiA9IFwieFwiOyBcbiAgICAgICAgfVxuICAgICAgICBkb21JbnRlcmFjdC50b2dnbGVEaXJlY3Rpb25EaXNwbGF5KCk7XG4gICAgfSxcblxuICAgIGNoZWNrTG9jYXRpb25WYWxpZDogZnVuY3Rpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCkge1xuICAgICAgICBsZXQgZXJyb3JNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNpbmctZXJyb3JcIik7XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInhcIiAmJiAoeEluZGV4K3NoaXBMZW5ndGgtMSkgPiAxMCkge1xuICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJFcnJvciwgbW92ZSBzaGlwIGxlZnQsIG9yIGNoYW5nZSBkaXJlY3Rpb25cIjtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ5XCIgJiYgKHlJbmRleCtzaGlwTGVuZ3RoLTEpID4gMTApIHtcbiAgICAgICAgICAgIGVycm9yTXNnLmlubmVySFRNTCA9IFwiRXJyb3IsIG1vdmUgc2hpcCB1cCwgb3IgY2hhbmdlIGRpcmVjdGlvblwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjsgLy9VcGRhdGUgd2l0aCBFcnJvciBIYW5kbGluZyBcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5jaGVja1Nwb3RUYWtlbihwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJFcnJvciwgY29uZmxpY3Qgd2l0aCBhbm90aGVyIHNoaXBcIjtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXJyb3JNc2cuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwidmFsaWRcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgY2hlY2tTcG90VGFrZW46IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpIHtcbiAgICAgICAgLy91c2VzIGNsYXNzbGlzdCBsZW5ndGggb2Ygc3F1YXJlIHRvIGRldGVybWluZSBpZiBhIHNoaXAgaXMgYWxyZWFkeSB0aGVyZVxuICAgICAgICBsZXQgZXJyb3JDaGVjayA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGk9MDtpPHNoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMb2NhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLWFjdGl2ZVwiKSB8fCBjaGVja2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1oaWRkZW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrZWRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4K2l9LSR7eEluZGV4fWApO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1hY3RpdmVcIikgfHwgY2hlY2tlZExvY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yQ2hlY2s7XG4gICAgfVxufVxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIERPTSBJTlRFUkFDVCBNT0RVTEVcbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+flxuY29uc3QgZG9tSW50ZXJhY3QgPSB7XG4gICAgcG9wdWxhdGVCb2FyZDogZnVuY3Rpb24ocGxheWVySW4pIHtcbiAgICAgICAgLy9zZWxlY3QgYm9hcmQgYmFzZWQgb24gcGxheWVyIHRoYXQgY29tZXMgaW4gdG8gYXBwZW5kIHRvXG4gICAgICAgIGxldCBnYW1lYm9hcmREaXY7XG4gICAgICAgIGxldCBwbGF5ZXJJZCA9IFwiXCI7XG4gICAgICAgIGlmIChwbGF5ZXJJbiA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXAtYm9hcmRcIik7XG4gICAgICAgICAgICBwbGF5ZXJJZCA9IFwiY29cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1ib2FyZFwiKTtcbiAgICAgICAgICAgIHBsYXllcklkID0gXCJwMVwiO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaTw9MTA7aSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTE7IGo8PTEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuaWQgPSBgJHtwbGF5ZXJJZH0tJHtpfS0ke2p9YDtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0ID0gXCJnYW1lLXNxdWFyZVwiO1xuICAgICAgICAgICAgICAgIGdhbWVib2FyZERpdi5hcHBlbmRDaGlsZChzcXVhcmVEaXYpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIG5hbWVJbjogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPXRleHRdJylbMF07XG4gICAgICAgIGxldCBwbGF5ZXJOYW1lICA9IGZvcm1JbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGlmIChwbGF5ZXJOYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxLW5hbWUgaDJcIik7IFxuICAgICAgICAgICAgcGxheWVyTmFtZURpdi5pbm5lckhUTUwgPSBwbGF5ZXJOYW1lOyAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyTmFtZSA9IFwiUGxheWVyMVwiO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1JbnB1dC5wYXJlbnRFbGVtZW50LnJlc2V0KCk7XG4gICAgICAgIGZvcm1JbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGdhbWVQbGF5LnNldFVwR2FtZShwbGF5ZXJOYW1lKTtcbiAgICB9LFxuXG4gICAgZG9tVWlVcGRhdGU6IGZ1bmN0aW9uKHJlYXNvbixjaGFuZ2VUeXBlKSB7XG4gICAgICAgIC8vdXBkYXRlcyBVSSBpbnRlcmFjdGlvbiBpbmNsdWRpbmcgZXZlbnQgbGlzdGVuZXJzLCBidXR0b25zLCBcbiAgICAgICAgbGV0IGNhc2VJbiA9IGAke3JlYXNvbn0gJHtjaGFuZ2VUeXBlfWA7XG4gICAgICAgIHN3aXRjaCAoY2FzZUluKSB7XG4gICAgICAgICAgICBjYXNlIFwicGxhY2luZy1zaGlwcyBzdGFydFwiOlxuICAgICAgICAgICAgICAgIC8vcGxheWVyIDEgYm9hcmQgc3F1YXJlc1xuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJTcXVhcmVzU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllcjEtYm9hcmQgLmdhbWUtc3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZXNTdGFydC5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLGRvbUludGVyYWN0LmxvY2F0aW9uRGF0YSkpO1xuICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZXNTdGFydC5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZG9tSW50ZXJhY3QubG9jYXRpb25EYXRhKSk7XG4gICAgICAgICAgICAgICAgLy9kaXJlY3Rpb24gYnV0dG9uXG4gICAgICAgICAgICAgICAgbGV0IGRpclRvZ2dsZUJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb24tdG9nLWJ0blwiKTtcbiAgICAgICAgICAgICAgICBkaXJUb2dnbGVCdG5TdGFydC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRpclRvZ2dsZUJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdhbWVQbGF5LnRvZ2dsZURpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGxhY2luZy1zaGlwcyBzdG9wXCI6XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cgKFwib2ZmXCIpO1xuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJTcXVhcmVzU3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyMS1ib2FyZCAuZ2FtZS1zcXVhcmVcIik7XG4gICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlc1N0b3AuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIixkb21JbnRlcmFjdC5sb2NhdGlvbkRhdGEpKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcXVhcmVzU3RvcC5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZG9tSW50ZXJhY3QubG9jYXRpb25EYXRhKSk7XG4gICAgICAgICAgICAgICAgbGV0IGRpclRvZ2dsZUJ0blN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpcmVjdGlvbi10b2ctYnRuXCIpO1xuICAgICAgICAgICAgICAgIGRpclRvZ2dsZUJ0blN0b3AuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkaXJUb2dnbGVCdG5TdG9wLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdhbWVQbGF5LnRvZ2dsZURpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGxheWVyMS1hdHRhY2sgc3RhcnRcIjpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllciAxIGF0dGFja2luZzpcIik7XG4gICAgICAgICAgICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzIG9uIGF0dGFja1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tTcXVhcmVzU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIGF0dGFja1NxdWFyZXNTdGFydC5mb3JFYWNoKHNxdWFyZSA9PiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5hdHRhY2spKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwbGF5ZXIxLWF0dGFjayBzdG9wXCI6XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGF5ZXIgMSBzdG9wIGF0dGFja2luZzpcIik7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGF0dGFja1xuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tTcXVhcmVzU3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY29tcC1ib2FyZCAuZ2FtZS1zcXVhcmVcIik7XG4gICAgICAgICAgICAgICAgYXR0YWNrU3F1YXJlc1N0b3AuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYXR0YWNrKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGxvY2F0aW9uRGF0YTogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBjdXJyZW50RGlyZWN0aW9uID0gZ2FtZVBsYXkuc2hpcERpcmVjdGlvbjtcbiAgICAgICAgLy9DdXJyZW50IFNoaXAgTGVuZ3RoIGJlaW5nIHBsYWNlZFxuICAgICAgICBsZXQgc2hpcEluZGV4ID0gZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5sZW5ndGg7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gZ2FtZVBsYXkuc2hpcFNpemVzW3NoaXBJbmRleF07XG4gICAgICAgIGxldCBzaGlwTmFtZSA9IGdhbWVQbGF5LnNoaXBOYW1lc1tzaGlwSW5kZXhdO1xuICAgICAgICAvL2dldCBldmVudCAmIHNxdWFyZSBsb2NhdGlvbiBpbmZvXG4gICAgICAgIGxldCBldmVudFR5cGUgPSBlLnR5cGU7XG4gICAgICAgIGxldCBzcXVhcmVJZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHNxdWFyZUlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgbGV0IHBsSW5kZXggPSBpbmRpY2VzWzBdOyAvL2tlZXBpbmcgaW4gY2FzZSBuZWVkIHRoaXMgZnVuY3Rpb24gZm9yIGNvbXB1dGVyIHBsYWNlbWVudHMgdG9vXG4gICAgICAgIGxldCB4SW5kZXggPSBOdW1iZXIoaW5kaWNlc1syXSk7XG4gICAgICAgIGxldCB5SW5kZXggPSBOdW1iZXIoaW5kaWNlc1sxXSk7XG4gICAgICAgIGlmIChldmVudFR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5wbGFjZVNoaXAocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCxzaGlwTmFtZSk7XG4gICAgICAgICAgICBpZiAoZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICBnYW1lUGxheS5jaGVja0FsbFNoaXBzUGxhY2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSBcIm1vdXNlb3ZlclwiKSB7XG4gICAgICAgICAgICBkb21JbnRlcmFjdC5zaG93TG9jYXRpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlU2hpcERvbTogZnVuY3Rpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCxzaGlwTmFtZSkge1xuICAgICAgICAvL3VwZGF0ZXMgc3F1YXJlcyBjbGFzcyB3LyBzaGlwIGluZm9cbiAgICAgICAgZm9yIChsZXQgaT0wO2k8c2hpcExlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmIChwbEluZGV4ID09PSBcInAxXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdCA9IGBnYW1lLXNxdWFyZSBzaGlwLWFjdGl2ZSAke3BsSW5kZXh9LSR7c2hpcE5hbWV9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaGxpZ2h0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbEluZGV4fS0ke3lJbmRleCtpfS0ke3hJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0TG9jYXRpb24uY2xhc3NMaXN0ID0gYGdhbWUtc3F1YXJlIHNoaXAtYWN0aXZlICR7cGxJbmRleH0tJHtzaGlwTmFtZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaGxpZ2h0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbEluZGV4fS0ke3lJbmRleH0tJHt4SW5kZXgraX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdCA9IGBnYW1lLXNxdWFyZSBzaGlwLWhpZGRlbiAke3BsSW5kZXh9LSR7c2hpcE5hbWV9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXgraX0tJHt4SW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMb2NhdGlvbi5jbGFzc0xpc3QgPSBgZ2FtZS1zcXVhcmUgc2hpcC1oaWRkZW4gJHtwbEluZGV4fS0ke3NoaXBOYW1lfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3dMb2NhdGlvbjogZnVuY3Rpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCkge1xuICAgICAgICBsZXQgdmFsaWRSZXBvcnQgPSBnYW1lUGxheS5jaGVja0xvY2F0aW9uVmFsaWQocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCk7XG4gICAgICAgIC8vQ2xlYXIgYW55IGNlbGxzIGFyZWFkeSBoaWdobGlnaHRlZCBcbiAgICAgICAgZG9tSW50ZXJhY3QuaGlkZUxvY2F0aW9uKFwidmFsaWRcIik7XG4gICAgICAgIGRvbUludGVyYWN0LmhpZGVMb2NhdGlvbihcImVycm9yXCIpO1xuICAgICAgICAvL2hpZ2hsaWdodCBzZWxlY3RlZCBzaGlwIHBsYWNlbWVudCBiYXNlZCBvbiB2YWxpZCBzdGF0dXMgXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHNoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBpZih4SW5kZXgraSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4fS0ke3hJbmRleCtpfWApO1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMb2NhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKHZhbGlkUmVwb3J0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHlJbmRleCtpIDwgMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXgraX0tJHt4SW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdC50b2dnbGUodmFsaWRSZXBvcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlkZUxvY2F0aW9uOiBmdW5jdGlvbihjbGFzc1RvSGlkZSkge1xuICAgICAgICBsZXQgZGl2c1RvSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzVG9IaWRlfWApO1xuICAgICAgICBpZiAoZGl2c1RvSGlkZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkaXZzVG9IaWRlLmZvckVhY2goc3F1YXJlSGlnaGxpZ2h0ZWQgPT4gc3F1YXJlSGlnaGxpZ2h0ZWQuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc1RvSGlkZX1gKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRvZ2dsZURpcmVjdGlvbkRpc3BsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgdGV4dCA9IGdhbWVQbGF5LnNoaXBEaXJlY3Rpb24udG9VcHBlckNhc2UoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb24tdG9nLWJ0blwiKS5pbm5lckhUTUwgPSBgJHt0ZXh0fSBEaXJlY3Rpb25gO1xuICAgIH0sXG4gICAgYWRkQXR0YWNrOiBmdW5jdGlvbihhdHRhY2tSZXN1bHQseEluLHlJbixwbEluZGV4KSB7XG4gICAgICAgIC8vRGlzcGxheSBvZiBzcXVhcmUgaGl0XG4gICAgICAgIGxldCBhdHRhY2tTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbEluZGV4fS0ke3lJbn0tJHt4SW59YCk7XG4gICAgICAgIGF0dGFja1NxdWFyZS5jbGFzc0xpc3QuYWRkKGF0dGFja1Jlc3VsdCk7XG4gICAgICAgIC8vSFAgRGlzcGxheSBvZiBzaGlwIGlmIGhpdFxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVySW5kZXhOdW0gPSAxO1xuICAgICAgICAgICAgaWYgKHBsSW5kZXggPT09IFwiY29cIikge1xuICAgICAgICAgICAgICAgIHBsYXllckluZGV4TnVtID0gMDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2hpcE5hbWUgPSBhdHRhY2tTcXVhcmUuY2xhc3NMaXN0WzJdLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFNoaXAgPSBnYW1lUGxheS5wbGF5ZXJzQWxsW3BsYXllckluZGV4TnVtXS5ib2FyZC5zaGlwc0FsbC5maWx0ZXIoc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXAuc2hpcFR5cGUgPT09IHNoaXBOYW1lO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFNoaXBJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2VsZWN0ZWRTaGlwWzBdLnBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkU2hpcFswXS5wb3NpdGlvbltpXS5oaXRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTaGlwSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaHBEaXZVcGRhdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NoaXBOYW1lfS0ke3BsSW5kZXh9LWhwLTAke3NlbGVjdGVkU2hpcEluZGV4fWApO1xuICAgICAgICAgICAgaHBEaXZVcGRhdGluZy5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93SHA6IGZ1bmN0aW9uKHNoaXBOYW1lLHBsSW5kZXgpIHtcbiAgICAgICAgbGV0IHNoaXBIcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NoaXBOYW1lfS0ke3BsSW5kZXh9YCk7XG4gICAgICAgIHNoaXBIcERpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0sXG4gICAgdWlUZXh0VXBkYXRlOiBmdW5jdGlvbih0ZXh0SW4pIHtcbiAgICAgICAgbGV0IHVpVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpLW91dHB1dC10ZXh0XCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1aVRleHRFbGVtZW50KTtcbiAgICAgICAgaWYgKHRleHRJbiA9PT0gXCJjbGVhclwiICkge1xuICAgICAgICAgICAgdWlUZXh0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgdWlUZXh0RWxlbWVudC5jbGFzc0xpc3QgPSBcImhpZGRlblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdWlUZXh0RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0SW47XG4gICAgICAgICAgICB1aVRleHRFbGVtZW50LmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmdhbWVQbGF5LmluaXQoKTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==