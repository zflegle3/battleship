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
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* General Document Styles */\n/* Main Styled Font */\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\nfont-size: 10px;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\n Main Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\nHeader Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#ui-output {\n\n}\n\n#ui-output-text {\n    font-size: 1rem;\n    font-family: 'Montserrat', sans-serif;\n    margin-bottom: 1rem;\n}\n\n#ui-output-text.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.75rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n/* #comp-board .game-square-playing:hover { */\n#comp-board .game-square:hover {\n    background-color: var(--dark-blue2);\n    background-color: rgb(70, 70, 70);\n}\n\n\n#comp-board .game-square:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n.game-square.ship-active.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.ship-hidden.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.miss {\n    background-color: var(--dark-blue3);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\n\ndiv[id*=\"pieces\"] > div.hidden {\n    /* ships hidden */\n    visibility: hidden;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"hp-0\"].hit {\n    /* ship hp detail hit */\n    background-color: var(--red-bad1);\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n} */\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS Reset http://meyerweb.com/eric/tools/css/reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 10px;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* General Document Styles */\n/* Main Styled Font */\n@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');\n/* font-family: 'Kdam Thmor Pro', sans-serif; */\n/* Sub Font */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n--display-width: 25rem;\n--piece-hp-width: 0.8rem;\n\n--light-blue1: #A5D8FF;\n--light-blue2: #14FFF7;\n--dark-blue1: #0081A7;\n--dark-blue2: #0BC9CD;\n--dark-blue3: #1D8A99;\n--dark-blue4: #577590;\n--grey-ship1: #7C7C7C;\n--grey-ship2: #B2B2B2;\n--grey-ship3: #C3BABA;\n--green-good1: #7DCD85;\n--green-good2: #C9F299;\n\n--green-radar1: #ADE25D;\n--green-radar2: #99C24D;\n--green-radar3: #5CF64A;\n\n--sand1: #FCDEBE;\n--sand2: #F3DE8A;\n\n--red-bad1: #A71D31;\n--red-bad2: #f29999;\n--orange1: #F7B267;\n--orange2: #F79D65;\n--orange3: #F4845F;\n\nfont-size: 10px;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    font-family: 'Kdam Thmor Pro', sans-serif;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\n Main Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n#header {\n    height: 20vh;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#gamedisplay {\n    width: 100%;\n    height: 80vh;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n\n#gamedisplay > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n}\n\n#player1-game {\n    grid-area: 1/1/2/2;\n}\n\n#comp-game {\n    grid-area: 1/2/2/3;\n}\n\n/* ~~~~~~~~~~~~~~~~~~\nHeader Document Styles\n~~~~~~~~~~~~~~~~~~~~~ */\n\n#comms h1 {\n    font-size: 2.5rem;\n    padding: 1rem;\n    margin: 1rem;\n    border: 0.1rem solid var(--grey-ship1);\n    border-radius: .4rem;\n}\n\n#player-in {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#player-in.hidden {\n    visibility: hidden;\n    height: 0;\n}\n\n#player-in input {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n    text-align: center;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#player-in button:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#player-in button:active {\n    background-color: var(--orange1) ;\n}\n\n#ui-output {\n\n}\n\n#ui-output-text {\n    font-size: 1rem;\n    font-family: 'Montserrat', sans-serif;\n    margin-bottom: 1rem;\n}\n\n#ui-output-text.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 1rem;\n    padding: 0.3rem 0.5rem 0.3rem 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid var(--grey-ship1);\n    border-radius: 0.3rem;\n}\n\n#direction-tog-btn.hidden {\n    visibility: hidden;\n}\n\n#direction-tog-btn:hover {\n    background-color: var(--grey-ship3) ;\n}\n\n#direction-tog-btn:active {\n    background-color: var(--orange1) ;\n}\n\n#placing-error {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 0.75rem;\n    color: var(--red-bad1);\n}\n\n\n\n\n/* Gameboard Styles */\n\n/* Name Display */\n.player-name {\n}\n\n.player-name h2 {\n    font-size: 2rem;\n    padding: 1rem 1rem 1rem 1rem;\n}\n\n/* Gameboard */\n.gameboard {\n    width: var(--display-width);\n    height: var(--display-width);\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(10,1fr);\n    grid-gap: .1rem;\n}\n\n.game-square {\n    /* border: 1px solid var(--green-radar3); */\n    background-color: var(--light-blue2);\n    /* background-color: rgb(0,0,0); */\n}\n\n/* #comp-board .game-square-playing:hover { */\n#comp-board .game-square:hover {\n    background-color: var(--dark-blue2);\n    background-color: rgb(70, 70, 70);\n}\n\n\n#comp-board .game-square:active {\n    background-color: var(--orange2);\n}\n\n/* Ship Placement Styles */\n.game-square.error {\n    background-color: var(--red-bad2);\n}\n\n.game-square.valid {\n    background-color: var(--green-good2);\n}\n\n.game-square.ship-active {\n    background-color: var(--grey-ship1);\n}\n\n.game-square.ship-active.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.ship-hidden.hit {\n    background-color: var(--red-bad1);\n}\n\n.game-square.miss {\n    background-color: var(--dark-blue3);\n}\n\n\n/* Game Pieces Styles - Non Player or Piece specific */\n\ndiv[id*=\"pieces\"] {\n    width: var(--display-width);\n    display: flex;\n    justify-content: center;\n\n}\n\ndiv[id*=\"pieces\"] > div {\n    /* ships */\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    Margin: 0.5rem;\n}\n\n\ndiv[id*=\"pieces\"] > div.hidden {\n    /* ships hidden */\n    visibility: hidden;\n}\n\ndiv[id*=\"pieces\"] > div > div {\n    /* ship hp */\n    display: flex;\n    justify-content: center;\n}\n\ndiv[id*=\"hp-0\"] {\n    /* ship hp detail */\n    display: flex;\n    justify-content: center;\n    background-color: var(--green-good1);\n    height: var(--piece-hp-width);\n    width: var(--piece-hp-width);\n    margin: 0 0.1rem 0.25rem 0.1rem;\n    /* border: 1px solid rgb(0,0,0); */\n\n}\n\ndiv[id*=\"hp-0\"].hit {\n    /* ship hp detail hit */\n    background-color: var(--red-bad1);\n\n}\n\ndiv[id*=\"pieces\"] > div > p {\n    /* ship label */\n    font-size: var(--piece-hp-width);\n    font-family: 'Montserrat', sans-serif;\n}\n\n\n\n\n\n\n/* Mock Styles\n#carrier-p1-hp-03, #carrier-p1-hp-04, #carrier-p1-hp-05 {\n    background-color: var(--red-bad1);\n}\n\n#cruiser-co-hp-03 {\n    background-color: var(--red-bad1);\n} */\n\n/* #co-4-3, #co-5-2, #co-6-2, #co-7-2, #co-7-3, #co-7-4, #co-6-5, #co-5-5, #co-4-4, #co-5-3{\n    background-color: var(--sand2);\n}\n\n#co-6-3, #co-6-4, #co-5-4{\n    background-color: var(--green-radar2);\n}\n\n#co-9-2, #co-9-3, #co-9-4, #co-9-4, #co-2-2, #co-3-2, #co-3-5, #co-3-6, #co-3-7, #co-3-8{\n    background-color: var(--grey-ship1);\n}\n\n#co-9-4 {\n    background-color: var(--red-bad2);\n} */"],"sourceRoot":""}]);
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
                // this.position[shipIndex].updateHitStatus(this.shipType);
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
                    console.log("Spot has been Hit!")
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
                if ( atkX > 10 || atkX < 1 || atkY > 10 || atkY < 1) {
                    console.log("Guess out of index");
                    attackResponse = "invalid";
                    missFlag = true;
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
                    domInteract.showHp(shipName,plIndex);
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
                // console.log("creating ship",shipName);
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
            smartHits: [],
            //AUTO ATTACK FOR COMPUTER
            attack: function() {
                console.log(gamePlay.playersAll[0].smartHits);
                console.log(this);
                //eventually will expect index to come in as a click event (e.target.id = "x,y")
                let attackStop = false;
                let currentHits = gamePlay.playersAll[0].smartHits;
                let guessY;
                let guessX;

                while (!attackStop) {
                    console.log(currentHits);
                    if (currentHits.length > 0) {//if hits recently 
                        let xLast = currentHits[currentHits.length-1].xPos;
                        let yLast = currentHits[currentHits.length-1].yPos;
                        let xFirst = currentHits[0].xPos;
                        let yFirst = currentHits[0].yPos;
                        let shipName = currentHits[currentHits.length-1].shipName;

                        //call all sunk on ship//if all subk reset smarthits
                        //try and set direction x=x or y=y whit hitlengths >2
                        let randArr = [-1,1];
                        let randFactorX = randArr[Math.floor(Math.random()*2)];
                        let randFactorY = randArr[Math.floor(Math.random()*2)];
                        let randFactorZ = randArr[Math.floor(Math.random()*2)];
                        console.log("rand X",randFactorX,"randY", randFactorY);
                        //try and set direction x=x or y=y whit hitlengths >2
                        if (currentHits.length>1) { //Guess based on X or Y axis

                            if (xLast === currentHits[currentHits.length-2].xPos) {
                                //y axis is correct
                                //randomly guess either side along axis
                                if (randFactorZ > 0) {
                                    guessY = yLast + 1;
                                } else {
                                    guessY = yFirst - 1;
                                }
                                guessX = xLast;
                            } else if (yLast === currentHits[currentHits.length-2].yPos) {
                                //x axis is correct
                                if (randFactorZ > 0) {
                                    guessX = xLast + 1;
                                } else {
                                    guessX = xFirst - 1;
                                }
                                guessY = yLast;
                            }
                            console.log("Axis Guess At:",guessX, guessY);
                        } else { //if not 2 hits so cant get an axis
                            if (randFactorZ >0) {
                                guessY = yLast;
                                guessX = xLast + randFactorX;
                            } else {
                                guessY = yLast + randFactorY;
                                guessX = xLast;
                            }
                            //Need to pick 
                            console.log("Educated Guess At:",guessX, guessY);
                            //attack one of 4 possible squares around the last hit
                        }
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(guessX,guessY);
                        console.log(`Computer attack result at x:${guessX} y:${guessY}`,attackResult);
                        //if direction set
                            //try -1or+1 to direction axis, cand be 50/50 chance and repeat
                            //until set !attack stop to false for a valid miss/hit
                        //if not 2 try a random hit
                            //if hit set direction 
                            //if miss 
                        if (attackResult === "hit" || attackResult === "miss") {
                            //if a hit push on smartHits array
                            if (attackResult === "hit") { 
                                let hitElement = document.getElementById(`p1-${guessY}-${guessX}`);
                                console.log(hitElement);
                                let shipNameHit = hitElement.classList[2].split("-")[1];
                                if (guessX < xFirst || guessY <yFirst) {
                                    // add to start 
                                    gamePlay.playersAll[0].smartHits.unshift({xPos: guessX, yPos: guessY, shipName: shipNameHit});
                                } else {
                                    gamePlay.playersAll[0].smartHits.push({xPos: guessX, yPos: guessY, shipName: shipNameHit});
                                }
                            }
                            domInteract.addAttack(attackResult,guessX,guessY,"p1");
                            attackStop = true;
                            console.log(gamePlay.playersAll[0].smartHits);
                            // gamePlay.startTurn();
                        }
                        //reset hits if sunk ship
                        let shipSelected = gamePlay.playersAll[1].board.shipsAll.filter(ship => ship.shipType === shipName);
                        console.log(shipSelected[0].shipType,"Sunk:",shipSelected[0].isSunk());
                        if (shipSelected[0].isSunk()) { //if sunk already reset hits and call random attack
                            //clear hits 
                            console.log("Ship Is Sunk");
                            gamePlay.playersAll[0].smartHits = [];   
                            console.log(gamePlay.playersAll[0].smartHits);
                        } 
                    } else { //if no hits recently random attack
                        // let randX = currentHits.length+2; //REMOVE FULL RANDOM
                        // let randY = 2; //REMOVE FULL RANDOM
                        let randX = Math.floor((Math.random() * 10)+1);
                        let randY = Math.floor((Math.random() * 10)+1);
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(randX,randY)
                        console.log(`Random Computer attack result at x:${randX} y:${randY}`,attackResult);
                        if (attackResult === "hit" || attackResult === "miss")  {
                            if (attackResult === "hit") {
                                // randX ++; //REMOVE FULL RANDOM
                                let hitElement = document.getElementById(`p1-${randY}-${randX}`);
                                console.log(hitElement);
                                let shipNameHit = hitElement.classList[2].split("-")[1];
                                console.log(shipNameHit);
                                gamePlay.playersAll[0].smartHits.push({xPos: randX, yPos: randY, shipName: shipNameHit});
                            }
                            attackStop = true;
                            domInteract.addAttack(attackResult,randX,randY,"p1");
                            // gamePlay.startTurn();
                        }
                    }
                }
                gamePlay.startTurn();
            },
            autoAttack: function() {
                //check opponents ships 
                let guessX = 0;
                let guessY = 0;
                let allOppShips = gamePlay.playersAll[1].board.shipsAll;
                //if some ships hit but not sunk
                let attackingShips =  allOppShips.filter(ship => ship.beenHit() === true && ship.isSunk() === false);
                console.log(attackingShips);
                let attackStop = false;
                while (!attackStop) {
                    //check first ship thats not sunk but has been hit
                    if (attackingShips.length > 0) {
                        console.log("Ship has been attacked ");
                        let selectedShip = attackingShips[0];
                        let hitsAll = selectedShip.position.filter(square => square.hitStatus === true)
                        let randArr = [-1,1];
                        let randFactor = randArr[Math.floor(Math.random()*2)];
                        let randFactorB = randArr[Math.floor(Math.random()*2)];
                        console.log(hitsAll);
                        //pull first hit
                        let hitFirst = hitsAll[0];
                        console.log(hitFirst);
                        //if more than 1 hit guess based on axis
                        if (hitsAll.length > 1) {
                            //pull last hit
                            let hitLast = hitsAll[hitsAll.length-1];
                            console.log(hitFirst,hitLast);
                            //check axis
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
                            console.log("Axis Guess At:",guessX, guessY);
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
                            console.log("Educated Guess At:",guessX, guessY);
                        }
                        //add guess to front or end accordingly 
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(guessX,guessY);
                        console.log(`Random Computer attack result at x:${guessX} y:${guessY}`,attackResult);
                        // attackStop = true;
                        if (attackResult === "hit" || attackResult === "miss") {
                            domInteract.addAttack(attackResult,guessX,guessY,"p1");
                            attackStop = true;
                            console.log(gamePlay.playersAll[0].smartHits);
                        }

                    } else {
                    //if all hit are sunk
                        let randX = Math.floor((Math.random() * 10)+1);
                        let randY = Math.floor((Math.random() * 10)+1);
                        let attackResult = gamePlay.playersAll[1].board.recieveAttack(randX,randY)
                        console.log(`Random Computer attack result at x:${randX} y:${randY}`,attackResult);
                        if (attackResult === "hit" || attackResult === "miss")  {
                            if (attackResult === "hit") {
                                let hitElement = document.getElementById(`p1-${randY}-${randX}`);
                                console.log(hitElement);
                                let shipNameHit = hitElement.classList[2].split("-")[1];
                                console.log(shipNameHit);
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
                // console.log(this);
                // e.preventDefault(); //needed??
                // console.log(e.target);
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
        console.log(this.playersAll[0]);
        console.log(this.playersAll[1]);
        //Switch turn every time
        this._switchTurn(); //logging turn each time called
        //Check for sinking & intialize vars
        let p1Sunk = this.playersAll[1].board.allSunk();
        let compSunk = this.playersAll[0].board.allSunk();
        //NEED TO UPDATE DOM ON INDIVIDUAL SHIP SINKING

        if (p1Sunk || compSunk) { //if either player sunk end game
            console.log("Game Over");
            if (compSunk) { //if p1 wins
                console.log("Player 1 wins");
                domInteract.uiTextUpdate(`${this.playersAll[1].name} Wins!`);
                //end game with p1 as winner
            } else { //comp wins
                console.log("Computer wins");
                domInteract.uiTextUpdate(`Computer Wins!`);
            }
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
        // console.log(this.turn);
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
                // console.log ("on");
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
        // console.log(attackSquare.classList);
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
            // console.log(selectedShip[0].position.length);
            let selectedShipIndex = 0;
            for (let i=0; i<selectedShip[0].position.length; i++) {
                // console.log(selectedShip[0].position[i])
                if (selectedShip[0].position[i].hitStatus) {
                    selectedShipIndex++;
                }
            }
            // console.log(`${shipName}-${plIndex}-hp-0${selectedShipIndex}`);

            let hpDivUpdating = document.getElementById(`${shipName}-${plIndex}-hp-0${selectedShipIndex}`);
            // console.log(hpDivUpdating);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEMsR0FBRyxhQUFhLHdDQUF3QyxJQUFJLFNBQVMsdUZBQXVGLGtCQUFrQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFFBQVEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxVQUFVLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxV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QWtCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1EQUFtRCxTQUFTLEdBQUcsUUFBUTtBQUN2RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2RhbStUaG1vcitQcm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDU1MgUmVzZXQgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBHZW5lcmFsIERvY3VtZW50IFN0eWxlcyAqL1xcbi8qIE1haW4gU3R5bGVkIEZvbnQgKi9cXG4vKiBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjsgKi9cXG4vKiBTdWIgRm9udCAqL1xcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuLS1kaXNwbGF5LXdpZHRoOiAyNXJlbTtcXG4tLXBpZWNlLWhwLXdpZHRoOiAwLjhyZW07XFxuXFxuLS1saWdodC1ibHVlMTogI0E1RDhGRjtcXG4tLWxpZ2h0LWJsdWUyOiAjMTRGRkY3O1xcbi0tZGFyay1ibHVlMTogIzAwODFBNztcXG4tLWRhcmstYmx1ZTI6ICMwQkM5Q0Q7XFxuLS1kYXJrLWJsdWUzOiAjMUQ4QTk5O1xcbi0tZGFyay1ibHVlNDogIzU3NzU5MDtcXG4tLWdyZXktc2hpcDE6ICM3QzdDN0M7XFxuLS1ncmV5LXNoaXAyOiAjQjJCMkIyO1xcbi0tZ3JleS1zaGlwMzogI0MzQkFCQTtcXG4tLWdyZWVuLWdvb2QxOiAjN0RDRDg1O1xcbi0tZ3JlZW4tZ29vZDI6ICNDOUYyOTk7XFxuXFxuLS1ncmVlbi1yYWRhcjE6ICNBREUyNUQ7XFxuLS1ncmVlbi1yYWRhcjI6ICM5OUMyNEQ7XFxuLS1ncmVlbi1yYWRhcjM6ICM1Q0Y2NEE7XFxuXFxuLS1zYW5kMTogI0ZDREVCRTtcXG4tLXNhbmQyOiAjRjNERThBO1xcblxcbi0tcmVkLWJhZDE6ICNBNzFEMzE7XFxuLS1yZWQtYmFkMjogI2YyOTk5OTtcXG4tLW9yYW5nZTE6ICNGN0IyNjc7XFxuLS1vcmFuZ2UyOiAjRjc5RDY1O1xcbi0tb3JhbmdlMzogI0Y0ODQ1RjtcXG5cXG5mb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogfn5+fn5+fn5+fn5+fn5+fn5+XFxuIE1haW4gRG9jdW1lbnQgU3R5bGVzXFxufn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVkaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLWdhcDogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI2dhbWVkaXNwbGF5ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI3BsYXllcjEtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuI2NvbXAtZ2FtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG59XFxuXFxuLyogfn5+fn5+fn5+fn5+fn5+fn5+XFxuSGVhZGVyIERvY3VtZW50IFN0eWxlc1xcbn5+fn5+fn5+fn5+fn5+fn5+fn5+fiAqL1xcblxcbiNjb21tcyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXG59XFxuXFxuI3BsYXllci1pbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItaW4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbiNwbGF5ZXItaW4gaW5wdXQge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDMpIDtcXG59XFxuXFxuI3BsYXllci1pbiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jdWktb3V0cHV0IHtcXG5cXG59XFxuXFxuI3VpLW91dHB1dC10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jdWktb3V0cHV0LXRleHQuaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4ge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW0gMC4zcmVtIDAuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2RpcmVjdGlvbi10b2ctYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMSkgO1xcbn1cXG5cXG4jcGxhY2luZy1lcnJvciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogR2FtZWJvYXJkIFN0eWxlcyAqL1xcblxcbi8qIE5hbWUgRGlzcGxheSAqL1xcbi5wbGF5ZXItbmFtZSB7XFxufVxcblxcbi5wbGF5ZXItbmFtZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLyogR2FtZWJvYXJkICovXFxuLmdhbWVib2FyZCB7XFxuICAgIHdpZHRoOiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1kaXNwbGF5LXdpZHRoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC1nYXA6IC4xcmVtO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbi1yYWRhcjMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlMik7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7ICovXFxufVxcblxcbi8qICNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZS1wbGF5aW5nOmhvdmVyIHsgKi9cXG4jY29tcC1ib2FyZCAuZ2FtZS1zcXVhcmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbn1cXG5cXG5cXG4jY29tcC1ib2FyZCAuZ2FtZS1zcXVhcmU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlMik7XFxufVxcblxcbi8qIFNoaXAgUGxhY2VtZW50IFN0eWxlcyAqL1xcbi5nYW1lLXNxdWFyZS5lcnJvciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAxKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLnNoaXAtYWN0aXZlLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLnNoaXAtaGlkZGVuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUzKTtcXG59XFxuXFxuXFxuLyogR2FtZSBQaWVjZXMgU3R5bGVzIC0gTm9uIFBsYXllciBvciBQaWVjZSBzcGVjaWZpYyAqL1xcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYge1xcbiAgICAvKiBzaGlwcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBNYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYuaGlkZGVuIHtcXG4gICAgLyogc2hpcHMgaGlkZGVuICovXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBkaXYge1xcbiAgICAvKiBzaGlwIGhwICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJocC0wXFxcIl0ge1xcbiAgICAvKiBzaGlwIGhwIGRldGFpbCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tZ29vZDEpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgd2lkdGg6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgbWFyZ2luOiAwIDAuMXJlbSAwLjI1cmVtIDAuMXJlbTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDAsMCwwKTsgKi9cXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwiaHAtMFxcXCJdLmhpdCB7XFxuICAgIC8qIHNoaXAgaHAgZGV0YWlsIGhpdCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxuXFxufVxcblxcbmRpdltpZCo9XFxcInBpZWNlc1xcXCJdID4gZGl2ID4gcCB7XFxuICAgIC8qIHNoaXAgbGFiZWwgKi9cXG4gICAgZm9udC1zaXplOiB2YXIoLS1waWVjZS1ocC13aWR0aCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcblxcblxcblxcbi8qIE1vY2sgU3R5bGVzXFxuI2NhcnJpZXItcDEtaHAtMDMsICNjYXJyaWVyLXAxLWhwLTA0LCAjY2Fycmllci1wMS1ocC0wNSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59XFxuXFxuI2NydWlzZXItY28taHAtMDMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMSk7XFxufSAqL1xcblxcbi8qICNjby00LTMsICNjby01LTIsICNjby02LTIsICNjby03LTIsICNjby03LTMsICNjby03LTQsICNjby02LTUsICNjby01LTUsICNjby00LTQsICNjby01LTN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhbmQyKTtcXG59XFxuXFxuI2NvLTYtMywgI2NvLTYtNCwgI2NvLTUtNHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tcmFkYXIyKTtcXG59XFxuXFxuI2NvLTktMiwgI2NvLTktMywgI2NvLTktNCwgI2NvLTktNCwgI2NvLTItMiwgI2NvLTMtMiwgI2NvLTMtNSwgI2NvLTMtNiwgI2NvLTMtNywgI2NvLTMtOHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMSk7XFxufVxcblxcbiNjby05LTQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmFkMik7XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdURBQXVEO0FBQ3ZEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FD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QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7OztBQUdBLHNEQUFzRDs7QUFFdEQ7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMscUNBQXFDO0FBQ3pDOzs7Ozs7O0FBT0E7Ozs7Ozs7R0FPRzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7R0FjR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgUmVzZXQgaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldCAqL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTBweDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBHZW5lcmFsIERvY3VtZW50IFN0eWxlcyAqL1xcbi8qIE1haW4gU3R5bGVkIEZvbnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LZGFtK1RobW9yK1BybyZkaXNwbGF5PXN3YXAnKTtcXG4vKiBmb250LWZhbWlseTogJ0tkYW0gVGhtb3IgUHJvJywgc2Fucy1zZXJpZjsgKi9cXG4vKiBTdWIgRm9udCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuLyogZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgKi9cXG5cXG4qIHtcXG4tLWRpc3BsYXktd2lkdGg6IDI1cmVtO1xcbi0tcGllY2UtaHAtd2lkdGg6IDAuOHJlbTtcXG5cXG4tLWxpZ2h0LWJsdWUxOiAjQTVEOEZGO1xcbi0tbGlnaHQtYmx1ZTI6ICMxNEZGRjc7XFxuLS1kYXJrLWJsdWUxOiAjMDA4MUE3O1xcbi0tZGFyay1ibHVlMjogIzBCQzlDRDtcXG4tLWRhcmstYmx1ZTM6ICMxRDhBOTk7XFxuLS1kYXJrLWJsdWU0OiAjNTc3NTkwO1xcbi0tZ3JleS1zaGlwMTogIzdDN0M3QztcXG4tLWdyZXktc2hpcDI6ICNCMkIyQjI7XFxuLS1ncmV5LXNoaXAzOiAjQzNCQUJBO1xcbi0tZ3JlZW4tZ29vZDE6ICM3RENEODU7XFxuLS1ncmVlbi1nb29kMjogI0M5RjI5OTtcXG5cXG4tLWdyZWVuLXJhZGFyMTogI0FERTI1RDtcXG4tLWdyZWVuLXJhZGFyMjogIzk5QzI0RDtcXG4tLWdyZWVuLXJhZGFyMzogIzVDRjY0QTtcXG5cXG4tLXNhbmQxOiAjRkNERUJFO1xcbi0tc2FuZDI6ICNGM0RFOEE7XFxuXFxuLS1yZWQtYmFkMTogI0E3MUQzMTtcXG4tLXJlZC1iYWQyOiAjZjI5OTk5O1xcbi0tb3JhbmdlMTogI0Y3QjI2NztcXG4tLW9yYW5nZTI6ICNGNzlENjU7XFxuLS1vcmFuZ2UzOiAjRjQ4NDVGO1xcblxcbmZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiB+fn5+fn5+fn5+fn5+fn5+fn5cXG4gTWFpbiBEb2N1bWVudCBTdHlsZXNcXG5+fn5+fn5+fn5+fn5+fn5+fn5+fn4gKi9cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZ2FtZWRpc3BsYXkgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jcGxheWVyMS1nYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4jY29tcC1nYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG5cXG4vKiB+fn5+fn5+fn5+fn5+fn5+fn5cXG5IZWFkZXIgRG9jdW1lbnQgU3R5bGVzXFxufn5+fn5+fn5+fn5+fn5+fn5+fn5+ICovXFxuXFxuI2NvbW1zIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleS1zaGlwMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcbn1cXG5cXG4jcGxheWVyLWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1pbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuI3BsYXllci1pbiBpbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbiNwbGF5ZXItaW4gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtIDAuM3JlbSAwLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktc2hpcDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbiNwbGF5ZXItaW4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1zaGlwMykgO1xcbn1cXG5cXG4jcGxheWVyLWluIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UxKSA7XFxufVxcblxcbiN1aS1vdXRwdXQge1xcblxcbn1cXG5cXG4jdWktb3V0cHV0LXRleHQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiN1aS1vdXRwdXQtdGV4dC5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbSAwLjNyZW0gMC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5LXNoaXAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG4uaGlkZGVuIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jZGlyZWN0aW9uLXRvZy1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAzKSA7XFxufVxcblxcbiNkaXJlY3Rpb24tdG9nLWJ0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UxKSA7XFxufVxcblxcbiNwbGFjaW5nLWVycm9yIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBHYW1lYm9hcmQgU3R5bGVzICovXFxuXFxuLyogTmFtZSBEaXNwbGF5ICovXFxuLnBsYXllci1uYW1lIHtcXG59XFxuXFxuLnBsYXllci1uYW1lIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4vKiBHYW1lYm9hcmQgKi9cXG4uZ2FtZWJvYXJkIHtcXG4gICAgd2lkdGg6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWRpc3BsYXktd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLWdhcDogLjFyZW07XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuLXJhZGFyMyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUyKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgKi9cXG59XFxuXFxuLyogI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlLXBsYXlpbmc6aG92ZXIgeyAqL1xcbiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxufVxcblxcblxcbiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UyKTtcXG59XFxuXFxuLyogU2hpcCBQbGFjZW1lbnQgU3R5bGVzICovXFxuLmdhbWUtc3F1YXJlLmVycm9yIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUudmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1nb29kMik7XFxufVxcblxcbi5nYW1lLXNxdWFyZS5zaGlwLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktc2hpcDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1hY3RpdmUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUuc2hpcC1oaWRkZW4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZTMpO1xcbn1cXG5cXG5cXG4vKiBHYW1lIFBpZWNlcyBTdHlsZXMgLSBOb24gUGxheWVyIG9yIFBpZWNlIHNwZWNpZmljICovXFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0ge1xcbiAgICB3aWR0aDogdmFyKC0tZGlzcGxheS13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiB7XFxuICAgIC8qIHNoaXBzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIE1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdi5oaWRkZW4ge1xcbiAgICAvKiBzaGlwcyBoaWRkZW4gKi9cXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5kaXZbaWQqPVxcXCJwaWVjZXNcXFwiXSA+IGRpdiA+IGRpdiB7XFxuICAgIC8qIHNoaXAgaHAgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpdltpZCo9XFxcImhwLTBcXFwiXSB7XFxuICAgIC8qIHNoaXAgaHAgZGV0YWlsICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1nb29kMSk7XFxuICAgIGhlaWdodDogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICB3aWR0aDogdmFyKC0tcGllY2UtaHAtd2lkdGgpO1xcbiAgICBtYXJnaW46IDAgMC4xcmVtIDAuMjVyZW0gMC4xcmVtO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwwLDApOyAqL1xcblxcbn1cXG5cXG5kaXZbaWQqPVxcXCJocC0wXFxcIl0uaGl0IHtcXG4gICAgLyogc2hpcCBocCBkZXRhaWwgaGl0ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG5cXG59XFxuXFxuZGl2W2lkKj1cXFwicGllY2VzXFxcIl0gPiBkaXYgPiBwIHtcXG4gICAgLyogc2hpcCBsYWJlbCAqL1xcbiAgICBmb250LXNpemU6IHZhcigtLXBpZWNlLWhwLXdpZHRoKTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogTW9jayBTdHlsZXNcXG4jY2Fycmllci1wMS1ocC0wMywgI2NhcnJpZXItcDEtaHAtMDQsICNjYXJyaWVyLXAxLWhwLTA1IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJhZDEpO1xcbn1cXG5cXG4jY3J1aXNlci1jby1ocC0wMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQxKTtcXG59ICovXFxuXFxuLyogI2NvLTQtMywgI2NvLTUtMiwgI2NvLTYtMiwgI2NvLTctMiwgI2NvLTctMywgI2NvLTctNCwgI2NvLTYtNSwgI2NvLTUtNSwgI2NvLTQtNCwgI2NvLTUtM3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2FuZDIpO1xcbn1cXG5cXG4jY28tNi0zLCAjY28tNi00LCAjY28tNS00e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1yYWRhcjIpO1xcbn1cXG5cXG4jY28tOS0yLCAjY28tOS0zLCAjY28tOS00LCAjY28tOS00LCAjY28tMi0yLCAjY28tMy0yLCAjY28tMy01LCAjY28tMy02LCAjY28tMy03LCAjY28tMy04e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LXNoaXAxKTtcXG59XFxuXFxuI2NvLTktNCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1iYWQyKTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cblxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIFNISVAgRkFDVE9SWSBGVU5DVElPTlxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXAoeEluLHlJbixkaXJJbixsZW5JbixuYW1lSW4pIHtcbiAgICBsZXQgcG9zaXRpb25BcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7aTxsZW5JbjtpKyspIHtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmUgPSB7fTtcbiAgICAgICAgaWYgKGRpckluID09PSBcInhcIikge1xuICAgICAgICAgICAgc2hpcFNxdWFyZSA9IHtcbiAgICAgICAgICAgICAgICBzaGlwSW5kZXg6IGkrMSxcbiAgICAgICAgICAgICAgICBwb3NYOiB4SW4gKyBpLFxuICAgICAgICAgICAgICAgIHBvc1k6IHlJbixcbiAgICAgICAgICAgICAgICBoaXRTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpckluID09PSBcInlcIikge1xuICAgICAgICAgICAgc2hpcFNxdWFyZSA9IHtcbiAgICAgICAgICAgICAgICBzaGlwSW5kZXg6IGkrMSxcbiAgICAgICAgICAgICAgICBwb3NYOiB4SW4sXG4gICAgICAgICAgICAgICAgcG9zWTogeUluICtpLFxuICAgICAgICAgICAgICAgIGhpdFN0YXR1czogZmFsc2UsIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uQXJyLnB1c2goc2hpcFNxdWFyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgX3NoaXBMZW5ndGg6IGxlbkluLFxuICAgICAgICBzaGlwVHlwZTogbmFtZUluLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25BcnIsLy9yZW5hbWUgdG8gc29tZWh0aW5nIG1vcmUgZml0dGluZ1xuICAgICAgICBzdW5rWU46IGZhbHNlLFxuICAgICAgICBoaXQ6IGZ1bmN0aW9uKHNoaXBJbmRleCkge1xuICAgICAgICAgICAgLy9jYWxsZWQgYnkgYm9hcmQucmVjaWV2ZSBhdHRhY2soKVxuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25bc2hpcEluZGV4XS5oaXRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludmFsaWQgaGl0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJIaXQhXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbltzaGlwSW5kZXhdLmhpdFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb3NpdGlvbltzaGlwSW5kZXhdLnVwZGF0ZUhpdFN0YXR1cyh0aGlzLnNoaXBUeXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBoaXRDb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aTx0aGlzLl9zaGlwTGVuZ3RoO2krKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uW2ldLmhpdFN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoaXRDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoaXRDb3VudCA+IHRoaXMuX3NoaXBMZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vua1lOID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rWU47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vua1lOID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vua1lOO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBiZWVuSGl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBoaXRPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25baV0uaGl0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BvdCBoYXMgYmVlbiBIaXQhXCIpXG4gICAgICAgICAgICAgICAgICAgIGhpdE91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhpdE91dDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuLy8gQk9BUkQgRkFDVE9SWSBGVU5DVElPTlxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbmZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvL01ldGhvZHMgJiBwcm9wZXJ0aWVzIGZyb20gYSBzaGlwXG4gICAgICAgIHNoaXBzQWxsOiBbXSxcbiAgICAgICAgaGl0czogW10sXG4gICAgICAgIG1pc3Nlc0FsbDogW10sIC8va2VlcCB0cmFjayB0byBkaXNwbGF5IG9uIGJvYXJkXG4gICAgICAgIHJlY2lldmVBdHRhY2s6IGZ1bmN0aW9uKGF0a1gsYXRrWSkge1xuICAgICAgICAgICAgLy90YWtlcyBwYWlyIG9mIGNvb3JkaW5hdGVzIGFuZCBkZXRlcm1pbmVzIGlmIGF0dGFjayBoaXQgYSBzaGlwXG4gICAgICAgICAgICAvL2lmIHllcyBzZW5kIGhpdCBmdW5jdGlvbiB0byBzaGlwID4+IHJlY2lldmVzIFwiaGl0XCIgb3IgXCJpbnZhbGlkXCIgYmFja1xuICAgICAgICAgICAgLy9pZiBub3QgcmVjb3JkcyBhIG1pc3NcbiAgICAgICAgICAgIGxldCBoaXRGbGFnID0gZmFsc2U7IC8vb25seSB0byBjaGVjayBpZiB3YXMgYSBoaXQgb24gc2hpcCwgbm90IHZhbGlkL2ludmFsaWRcbiAgICAgICAgICAgIGxldCBtaXNzRmxhZyA9IGZhbHNlOyAvL3NldCB0byB0cnVlIHdoZW4gYXR0YWNrIG5vdCBhIGhpdCBvciBpbnZhbGlkXG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzcG9uc2UgPSBcIlwiO1xuICAgICAgICAgICAgLy9DaGVja3MgZm9yIEhpdC9JbnZhbGlkIEhpdFxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuc2hpcHNBbGwubGVuZ3RoOyBpKyspIHsgLy9mb3IgYWxsIHNoaXBzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb24ubGVuZ3RoOyBqKyspIHsgIC8vZm9yIGFsbCBzcG90cyBvbiBzaGlwXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgaGl0IGluZGV4IGlzIG9uIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0a1ggPT09IHRoaXMuc2hpcHNBbGxbaV0ucG9zaXRpb25bal0ucG9zWCAmJiBhdGtZID09PSB0aGlzLnNoaXBzQWxsW2ldLnBvc2l0aW9uW2pdLnBvc1kgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IHRoaXMuc2hpcHNBbGxbaV0uaGl0KGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGl0RmxhZyA9IHRydWU7IC8vd2lsbCBhbHdheXMgYmUgdHJ1ZSBpZiBwb3NpdGlvbiBpcyBvbiBhIHNoaXAgcGVyIGlmIHN0YXRlbWVudCBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0NoZWNrcyBmb3IgSW52YWxpZCBNaXNzIChNaXNzIGFscmVhZHkgc2VsZWN0ZWQpXG4gICAgICAgICAgICBpZiAoIWhpdEZsYWcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGs8dGhpcy5taXNzZXNBbGwubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0a1ggPT09IHRoaXMubWlzc2VzQWxsW2tdLnBvc1ggJiYgYXRrWSA9PT0gdGhpcy5taXNzZXNBbGxba10ucG9zWSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludmFsaWQgbWlzcyFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IFwiaW52YWxpZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCBhdGtYID4gMTAgfHwgYXRrWCA8IDEgfHwgYXRrWSA+IDEwIHx8IGF0a1kgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR3Vlc3Mgb3V0IG9mIGluZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2tSZXNwb25zZSA9IFwiaW52YWxpZFwiO1xuICAgICAgICAgICAgICAgICAgICBtaXNzRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DaGVja3MgZm9yIHZhbGlkIE1pc3MgKG5vdCBzZWxlY3RlZClcbiAgICAgICAgICAgIGlmIChhdHRhY2tSZXNwb25zZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2YWxpZCBtaXNzIVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3Nlc0FsbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogYXRrWCxcbiAgICAgICAgICAgICAgICAgICAgcG9zWTogYXRrWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGF0dGFja1Jlc3BvbnNlID0gXCJtaXNzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzcG9uc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGxhY2VTaGlwOiBmdW5jdGlvbihwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoLHNoaXBOYW1lKSB7XG4gICAgICAgICAgICBsZXQgdmFsaWRDaGVjayA9IGdhbWVQbGF5LmNoZWNrTG9jYXRpb25WYWxpZChwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIC8vRE9VQkxFIENIRUNLIFdIWSBETyBJIFZBTElEIENIRUNLIEFHQUlOPz9cbiAgICAgICAgICAgIHN3aXRjaCAodmFsaWRDaGVjaykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbnQgcGxhY2Ugc2hpcCBoZXJlXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidmFsaWRcIjpcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBjcmVhdGVTaGlwKHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoLHNoaXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc0FsbC5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5wbGFjZVNoaXBEb20ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCxzaGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LnNob3dIcChzaGlwTmFtZSxwbEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhdXRvUGxhY2VTaGlwc0FsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnBsYWNlU2hpcChcImNvXCIsMSwxLFwieFwiLDUsXCJUZXN0IFNoaXBcIik7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbXCJ4XCIsXCJ5XCJdO1xuICAgICAgICAgICAgLy8gd2hpbGUgKGNvdW50ID4gMSkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc2hpcHNBbGwubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIGxldCB4SW5kZXggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSk7XG4gICAgICAgICAgICAgICAgbGV0IHlJbmRleCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxKTtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZERpckludCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmREaXJlY3Rpb24gPSBkaXJlY3Rpb25zW3JhbmREaXJJbnRdO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwTGVuZ3RoID0gZ2FtZVBsYXkuc2hpcFNpemVzW3RoaXMuc2hpcHNBbGwubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcE5hbWUgPSBnYW1lUGxheS5zaGlwTmFtZXNbdGhpcy5zaGlwc0FsbC5sZW5ndGhdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgc2hpcFwiLHNoaXBOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChcImNvXCIseEluZGV4LHlJbmRleCxyYW5kRGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFsbFN1bms6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBzdW5rQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8NTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNBbGxbaV0uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgc3Vua0NvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNoaXBzIFN1bms6XCIsIHN1bmtDb3VudCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNoaXBzQWxsKTtcbiAgICAgICAgICAgIGlmIChzdW5rQ291bnQgPT09IDUpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG4vLyBQTEFZRVIgRkFDVE9SWSBGVU5DVElPTlxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbmZ1bmN0aW9uIHBsYXllck5ldyhuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09IFwiY29tcHV0ZXJcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogXCJjb21wdXRlclwiLFxuICAgICAgICAgICAgYm9hcmQ6IGdhbWVCb2FyZCgpLFxuICAgICAgICAgICAgc21hcnRIaXRzOiBbXSxcbiAgICAgICAgICAgIC8vQVVUTyBBVFRBQ0sgRk9SIENPTVBVVEVSXG4gICAgICAgICAgICBhdHRhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdhbWVQbGF5LnBsYXllcnNBbGxbMF0uc21hcnRIaXRzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICAgICAgICAvL2V2ZW50dWFsbHkgd2lsbCBleHBlY3QgaW5kZXggdG8gY29tZSBpbiBhcyBhIGNsaWNrIGV2ZW50IChlLnRhcmdldC5pZCA9IFwieCx5XCIpXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFja1N0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEhpdHMgPSBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLnNtYXJ0SGl0cztcbiAgICAgICAgICAgICAgICBsZXQgZ3Vlc3NZO1xuICAgICAgICAgICAgICAgIGxldCBndWVzc1g7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoIWF0dGFja1N0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEhpdHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEhpdHMubGVuZ3RoID4gMCkgey8vaWYgaGl0cyByZWNlbnRseSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4TGFzdCA9IGN1cnJlbnRIaXRzW2N1cnJlbnRIaXRzLmxlbmd0aC0xXS54UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlMYXN0ID0gY3VycmVudEhpdHNbY3VycmVudEhpdHMubGVuZ3RoLTFdLnlQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeEZpcnN0ID0gY3VycmVudEhpdHNbMF0ueFBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5Rmlyc3QgPSBjdXJyZW50SGl0c1swXS55UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBOYW1lID0gY3VycmVudEhpdHNbY3VycmVudEhpdHMubGVuZ3RoLTFdLnNoaXBOYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NhbGwgYWxsIHN1bmsgb24gc2hpcC8vaWYgYWxsIHN1YmsgcmVzZXQgc21hcnRoaXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RyeSBhbmQgc2V0IGRpcmVjdGlvbiB4PXggb3IgeT15IHdoaXQgaGl0bGVuZ3RocyA+MlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRBcnIgPSBbLTEsMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZEZhY3RvclggPSByYW5kQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZEZhY3RvclkgPSByYW5kQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZEZhY3RvclogPSByYW5kQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJhbmQgWFwiLHJhbmRGYWN0b3JYLFwicmFuZFlcIiwgcmFuZEZhY3RvclkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90cnkgYW5kIHNldCBkaXJlY3Rpb24geD14IG9yIHk9eSB3aGl0IGhpdGxlbmd0aHMgPjJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SGl0cy5sZW5ndGg+MSkgeyAvL0d1ZXNzIGJhc2VkIG9uIFggb3IgWSBheGlzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeExhc3QgPT09IGN1cnJlbnRIaXRzW2N1cnJlbnRIaXRzLmxlbmd0aC0yXS54UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veSBheGlzIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yYW5kb21seSBndWVzcyBlaXRoZXIgc2lkZSBhbG9uZyBheGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5kRmFjdG9yWiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWSA9IHlMYXN0ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWSA9IHlGaXJzdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NYID0geExhc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5TGFzdCA9PT0gY3VycmVudEhpdHNbY3VycmVudEhpdHMubGVuZ3RoLTJdLnlQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy94IGF4aXMgaXMgY29ycmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZEZhY3RvclogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1ggPSB4TGFzdCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1ggPSB4Rmlyc3QgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWSA9IHlMYXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF4aXMgR3Vlc3MgQXQ6XCIsZ3Vlc3NYLCBndWVzc1kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy9pZiBub3QgMiBoaXRzIHNvIGNhbnQgZ2V0IGFuIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZEZhY3RvclogPjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NZID0geUxhc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWCA9IHhMYXN0ICsgcmFuZEZhY3Rvclg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NZID0geUxhc3QgKyByYW5kRmFjdG9yWTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NYID0geExhc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTmVlZCB0byBwaWNrIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWR1Y2F0ZWQgR3Vlc3MgQXQ6XCIsZ3Vlc3NYLCBndWVzc1kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXR0YWNrIG9uZSBvZiA0IHBvc3NpYmxlIHNxdWFyZXMgYXJvdW5kIHRoZSBsYXN0IGhpdFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdCA9IGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQucmVjaWV2ZUF0dGFjayhndWVzc1gsZ3Vlc3NZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb21wdXRlciBhdHRhY2sgcmVzdWx0IGF0IHg6JHtndWVzc1h9IHk6JHtndWVzc1l9YCxhdHRhY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBkaXJlY3Rpb24gc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90cnkgLTFvcisxIHRvIGRpcmVjdGlvbiBheGlzLCBjYW5kIGJlIDUwLzUwIGNoYW5jZSBhbmQgcmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91bnRpbCBzZXQgIWF0dGFjayBzdG9wIHRvIGZhbHNlIGZvciBhIHZhbGlkIG1pc3MvaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmIG5vdCAyIHRyeSBhIHJhbmRvbSBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGhpdCBzZXQgZGlyZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgbWlzcyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIgfHwgYXR0YWNrUmVzdWx0ID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgYSBoaXQgcHVzaCBvbiBzbWFydEhpdHMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGl0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwMS0ke2d1ZXNzWX0tJHtndWVzc1h9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcE5hbWVIaXQgPSBoaXRFbGVtZW50LmNsYXNzTGlzdFsyXS5zcGxpdChcIi1cIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChndWVzc1ggPCB4Rmlyc3QgfHwgZ3Vlc3NZIDx5Rmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBzdGFydCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQbGF5LnBsYXllcnNBbGxbMF0uc21hcnRIaXRzLnVuc2hpZnQoe3hQb3M6IGd1ZXNzWCwgeVBvczogZ3Vlc3NZLCBzaGlwTmFtZTogc2hpcE5hbWVIaXR9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVQbGF5LnBsYXllcnNBbGxbMF0uc21hcnRIaXRzLnB1c2goe3hQb3M6IGd1ZXNzWCwgeVBvczogZ3Vlc3NZLCBzaGlwTmFtZTogc2hpcE5hbWVIaXR9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5hZGRBdHRhY2soYXR0YWNrUmVzdWx0LGd1ZXNzWCxndWVzc1ksXCJwMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLnNtYXJ0SGl0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2FtZVBsYXkuc3RhcnRUdXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Jlc2V0IGhpdHMgaWYgc3VuayBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFNlbGVjdGVkID0gZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5maWx0ZXIoc2hpcCA9PiBzaGlwLnNoaXBUeXBlID09PSBzaGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwU2VsZWN0ZWRbMF0uc2hpcFR5cGUsXCJTdW5rOlwiLHNoaXBTZWxlY3RlZFswXS5pc1N1bmsoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNlbGVjdGVkWzBdLmlzU3VuaygpKSB7IC8vaWYgc3VuayBhbHJlYWR5IHJlc2V0IGhpdHMgYW5kIGNhbGwgcmFuZG9tIGF0dGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2xlYXIgaGl0cyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaXAgSXMgU3Vua1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLnNtYXJ0SGl0cyA9IFtdOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdhbWVQbGF5LnBsYXllcnNBbGxbMF0uc21hcnRIaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vaWYgbm8gaGl0cyByZWNlbnRseSByYW5kb20gYXR0YWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcmFuZFggPSBjdXJyZW50SGl0cy5sZW5ndGgrMjsgLy9SRU1PVkUgRlVMTCBSQU5ET01cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCByYW5kWSA9IDI7IC8vUkVNT1ZFIEZVTEwgUkFORE9NXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApKzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSsxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBnYW1lUGxheS5wbGF5ZXJzQWxsWzFdLmJvYXJkLnJlY2lldmVBdHRhY2socmFuZFgscmFuZFkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmFuZG9tIENvbXB1dGVyIGF0dGFjayByZXN1bHQgYXQgeDoke3JhbmRYfSB5OiR7cmFuZFl9YCxhdHRhY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJoaXRcIiB8fCBhdHRhY2tSZXN1bHQgPT09IFwibWlzc1wiKSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmFuZFggKys7IC8vUkVNT1ZFIEZVTEwgUkFORE9NXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAxLSR7cmFuZFl9LSR7cmFuZFh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcE5hbWVIaXQgPSBoaXRFbGVtZW50LmNsYXNzTGlzdFsyXS5zcGxpdChcIi1cIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBOYW1lSGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVBsYXkucGxheWVyc0FsbFswXS5zbWFydEhpdHMucHVzaCh7eFBvczogcmFuZFgsIHlQb3M6IHJhbmRZLCBzaGlwTmFtZTogc2hpcE5hbWVIaXR9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QuYWRkQXR0YWNrKGF0dGFja1Jlc3VsdCxyYW5kWCxyYW5kWSxcInAxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdhbWVQbGF5LnN0YXJ0VHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdhbWVQbGF5LnN0YXJ0VHVybigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9BdHRhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vY2hlY2sgb3Bwb25lbnRzIHNoaXBzIFxuICAgICAgICAgICAgICAgIGxldCBndWVzc1ggPSAwO1xuICAgICAgICAgICAgICAgIGxldCBndWVzc1kgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBhbGxPcHBTaGlwcyA9IGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuc2hpcHNBbGw7XG4gICAgICAgICAgICAgICAgLy9pZiBzb21lIHNoaXBzIGhpdCBidXQgbm90IHN1bmtcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNraW5nU2hpcHMgPSAgYWxsT3BwU2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5iZWVuSGl0KCkgPT09IHRydWUgJiYgc2hpcC5pc1N1bmsoKSA9PT0gZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dGFja2luZ1NoaXBzKTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlICghYXR0YWNrU3RvcCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGZpcnN0IHNoaXAgdGhhdHMgbm90IHN1bmsgYnV0IGhhcyBiZWVuIGhpdFxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNraW5nU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGlwIGhhcyBiZWVuIGF0dGFja2VkIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFNoaXAgPSBhdHRhY2tpbmdTaGlwc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaXRzQWxsID0gc2VsZWN0ZWRTaGlwLnBvc2l0aW9uLmZpbHRlcihzcXVhcmUgPT4gc3F1YXJlLmhpdFN0YXR1cyA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kQXJyID0gWy0xLDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRGYWN0b3IgPSByYW5kQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZEZhY3RvckIgPSByYW5kQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoaXRzQWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcHVsbCBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaXRGaXJzdCA9IGhpdHNBbGxbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoaXRGaXJzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmIG1vcmUgdGhhbiAxIGhpdCBndWVzcyBiYXNlZCBvbiBheGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGl0c0FsbC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wdWxsIGxhc3QgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpdExhc3QgPSBoaXRzQWxsW2hpdHNBbGwubGVuZ3RoLTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhpdEZpcnN0LGhpdExhc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgYXhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaXRGaXJzdC5wb3NYID09PSBoaXRMYXN0LnBvc1gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy95IGF4aXMgaXMgY29ycmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZEZhY3RvciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1ZXNzWSA9IGhpdExhc3QucG9zWSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1kgPSBoaXRGaXJzdC5wb3NZIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1ggPSBoaXRGaXJzdC5wb3NYO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGl0Rmlyc3QucG9zWSA9PT0gaGl0TGFzdC5wb3NZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veCBheGlzIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRGYWN0b3IgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1ggPSBoaXRMYXN0LnBvc1ggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NYID0gaGl0Rmlyc3QucG9zWCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NZID0gaGl0Rmlyc3QucG9zWTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBeGlzIEd1ZXNzIEF0OlwiLGd1ZXNzWCwgZ3Vlc3NZKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBvbmx5IG9uZSBoaXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBvbmUgb2YgdGhlIDQgc3F1YXJlcyByYW5kb21seSwgY29udGludWVzIHdoaWxlIGludmFsdWQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRGYWN0b3JCID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1kgPSBoaXRGaXJzdC5wb3NZO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1ggPSBoaXRGaXJzdC5wb3NYICsgcmFuZEZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWVzc1kgPSBoaXRGaXJzdC5wb3NZICsgcmFuZEZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Vlc3NYID0gaGl0Rmlyc3QucG9zWDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFZHVjYXRlZCBHdWVzcyBBdDpcIixndWVzc1gsIGd1ZXNzWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZCBndWVzcyB0byBmcm9udCBvciBlbmQgYWNjb3JkaW5nbHkgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0ID0gZ2FtZVBsYXkucGxheWVyc0FsbFsxXS5ib2FyZC5yZWNpZXZlQXR0YWNrKGd1ZXNzWCxndWVzc1kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJhbmRvbSBDb21wdXRlciBhdHRhY2sgcmVzdWx0IGF0IHg6JHtndWVzc1h9IHk6JHtndWVzc1l9YCxhdHRhY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0YWNrU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBcImhpdFwiIHx8IGF0dGFja1Jlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5hZGRBdHRhY2soYXR0YWNrUmVzdWx0LGd1ZXNzWCxndWVzc1ksXCJwMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLnNtYXJ0SGl0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBhbGwgaGl0IGFyZSBzdW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApKzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSsxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBnYW1lUGxheS5wbGF5ZXJzQWxsWzFdLmJvYXJkLnJlY2lldmVBdHRhY2socmFuZFgscmFuZFkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmFuZG9tIENvbXB1dGVyIGF0dGFjayByZXN1bHQgYXQgeDoke3JhbmRYfSB5OiR7cmFuZFl9YCxhdHRhY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJoaXRcIiB8fCBhdHRhY2tSZXN1bHQgPT09IFwibWlzc1wiKSAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcDEtJHtyYW5kWX0tJHtyYW5kWH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaGl0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwTmFtZUhpdCA9IGhpdEVsZW1lbnQuY2xhc3NMaXN0WzJdLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hpcE5hbWVIaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLnNtYXJ0SGl0cy5wdXNoKHt4UG9zOiByYW5kWCwgeVBvczogcmFuZFksIHNoaXBOYW1lOiBzaGlwTmFtZUhpdH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC5hZGRBdHRhY2soYXR0YWNrUmVzdWx0LHJhbmRYLHJhbmRZLFwicDFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2FtZVBsYXkuc3RhcnRUdXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGJvYXJkOiBnYW1lQm9hcmQoKSxcbiAgICAgICAgICAgIGF0dGFjazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTsgLy9uZWVkZWQ/P1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvL2hhbmRsZSBldmVudCBpblxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tJbiA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgeEF0ayA9IE51bWJlcihhdHRhY2tJblsyXSk7XG4gICAgICAgICAgICAgICAgbGV0IHlBdGsgPSBOdW1iZXIoYXR0YWNrSW5bMV0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieFwiLHhBdGssXCJ5XCIseUF0ayk7XG5cbiAgICAgICAgICAgICAgICAvL2F0dGFjayBib2FyZCBcbiAgICAgICAgICAgICAgICAvL2lmIHN1Y2Nlc3NmdWwgY2FsbCBuZXh0IHBsYXllciB0dXJuIFxuICAgICAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLmJvYXJkLnJlY2lldmVBdHRhY2soeEF0ayx5QXRrKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlAxIGF0dGFjayByZXN1bHRlZCBpbjpcIixhdHRhY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIgfHwgYXR0YWNrUmVzdWx0ID09PSBcIm1pc3NcIikgIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QuYWRkQXR0YWNrKGF0dGFja1Jlc3VsdCx4QXRrLHlBdGssXCJjb1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVBsYXkuc3RhcnRUdXJuKCk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cblxuXG5cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIEdBTUVQTEFZIExPR0lDIE1PRFVMRVxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5jb25zdCBnYW1lUGxheSA9IHtcbiAgICBwbGF5ZXJzQWxsOiBbXSwgLy9bY29tcHV0ZXIsIHBsYXllcjFdXG4gICAgdHVybjogMCxcbiAgICBzaGlwU2l6ZXM6IFs1LDQsMywzLDJdLFxuICAgIHNoaXBOYW1lczogW1wiY2FycmllclwiLFwiYmF0dGxlc2hpcFwiLFwiY3J1aXNlclwiLFwic3VibWFyaW5lXCIsXCJkZXN0cm95ZXJcIl0sXG4gICAgc2hpcERpcmVjdGlvbjogXCJ4XCIsXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vcG9wdWxhdGUgYm9hcmQgZm9yIGJvdGggc2lkZXNcbiAgICAgICAgZG9tSW50ZXJhY3QucG9wdWxhdGVCb2FyZChcImNvbXB1dGVyXCIpO1xuICAgICAgICBkb21JbnRlcmFjdC5wb3B1bGF0ZUJvYXJkKFwiUGxheWVyIDFcIik7XG4gICAgICAgIC8vc2VsZWN0IGZvcm0gZWxlbWVudCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGxldCBwbGF5ZXJJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1pblwiKTtcbiAgICAgICAgcGxheWVySW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixkb21JbnRlcmFjdC5uYW1lSW4pO1xuICAgIH0sXG5cbiAgICAvL1BsYXllciAxIHNldHVwXG4gICAgc2V0VXBHYW1lOiBmdW5jdGlvbihwbGF5ZXIxTmFtZSkge1xuICAgICAgICAvL0FkZCBwbGF5ZXJzXG4gICAgICAgIHRoaXMucGxheWVyc0FsbC5wdXNoKHBsYXllck5ldyhcImNvbXB1dGVyXCIpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQWxsLnB1c2gocGxheWVyTmV3KGAke3BsYXllcjFOYW1lfWApKTtcbiAgICAgICAgLy9hZGQgRXZlbnQgTGlzdGVuZXJzIG9uIHAxIGJvYXJkIHNxdWFyZXMgdG8gcGxhY2Ugc2hpcHNcbiAgICAgICAgZG9tSW50ZXJhY3QuZG9tVWlVcGRhdGUoXCJwbGFjaW5nLXNoaXBzXCIsIFwic3RhcnRcIik7XG4gICAgICAgIGRvbUludGVyYWN0LnVpVGV4dFVwZGF0ZShgJHtwbGF5ZXIxTmFtZX0gcGxhY2UgYWxsIG9mIHlvdXIgc2hpcHMgb24geW91ciBib2FyZC5gKTtcbiAgICB9LFxuXG4gICAgLy9SZXN0IG9mIEdhbWUgU2V0dXBcbiAgICBjaGVja0FsbFNoaXBzUGxhY2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FsbFsxXS5ib2FyZC5zaGlwc0FsbC5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBwbGF5ZXIgYm9hcmQgJiBoaWRlIGRpcmVjdGlvbiBidXR0b25cbiAgICAgICAgICAgIGRvbUludGVyYWN0LmRvbVVpVXBkYXRlKFwicGxhY2luZy1zaGlwc1wiLCBcInN0b3BcIik7XG4gICAgICAgICAgICAvL3BvcHVsYXRlIGNvbXB1dGVyIGJvYXJkXG4gICAgICAgICAgICBnYW1lUGxheS5wbGF5ZXJzQWxsWzBdLmJvYXJkLmF1dG9QbGFjZVNoaXBzQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VHVybigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGFydFR1cm46IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcnNBbGxbMF0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcnNBbGxbMV0pO1xuICAgICAgICAvL1N3aXRjaCB0dXJuIGV2ZXJ5IHRpbWVcbiAgICAgICAgdGhpcy5fc3dpdGNoVHVybigpOyAvL2xvZ2dpbmcgdHVybiBlYWNoIHRpbWUgY2FsbGVkXG4gICAgICAgIC8vQ2hlY2sgZm9yIHNpbmtpbmcgJiBpbnRpYWxpemUgdmFyc1xuICAgICAgICBsZXQgcDFTdW5rID0gdGhpcy5wbGF5ZXJzQWxsWzFdLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgbGV0IGNvbXBTdW5rID0gdGhpcy5wbGF5ZXJzQWxsWzBdLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgLy9ORUVEIFRPIFVQREFURSBET00gT04gSU5ESVZJRFVBTCBTSElQIFNJTktJTkdcblxuICAgICAgICBpZiAocDFTdW5rIHx8IGNvbXBTdW5rKSB7IC8vaWYgZWl0aGVyIHBsYXllciBzdW5rIGVuZCBnYW1lXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgT3ZlclwiKTtcbiAgICAgICAgICAgIGlmIChjb21wU3VuaykgeyAvL2lmIHAxIHdpbnNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciAxIHdpbnNcIik7XG4gICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QudWlUZXh0VXBkYXRlKGAke3RoaXMucGxheWVyc0FsbFsxXS5uYW1lfSBXaW5zIWApO1xuICAgICAgICAgICAgICAgIC8vZW5kIGdhbWUgd2l0aCBwMSBhcyB3aW5uZXJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vY29tcCB3aW5zXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21wdXRlciB3aW5zXCIpO1xuICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LnVpVGV4dFVwZGF0ZShgQ29tcHV0ZXIgV2lucyFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR1cm4gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvL3BsYXllciAxIHR1cm5cbiAgICAgICAgICAgICAgICBkb21JbnRlcmFjdC51aVRleHRVcGRhdGUoYCR7dGhpcy5wbGF5ZXJzQWxsW3RoaXMudHVybl0ubmFtZX0sIGl0IGlzIHlvdXIgdHVybi4gQ2hvb3NlIGEgc3F1YXJlIG9uIHlvdXIgb3Bwb25lbnQncyBib2FyZCB0byBhdHRhY2suYCk7XG4gICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QuZG9tVWlVcGRhdGUoXCJwbGF5ZXIxLWF0dGFja1wiLFwic3RhcnRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY29tcHV0ZXIgdHVyblxuICAgICAgICAgICAgICAgIGRvbUludGVyYWN0LmRvbVVpVXBkYXRlKFwicGxheWVyMS1hdHRhY2tcIixcInN0b3BcIik7IC8vbmVlZCB0byBmaW5pc2ggaW4gZG9tIGludGVyYWN0XG4gICAgICAgICAgICAgICAgZG9tSW50ZXJhY3QudWlUZXh0VXBkYXRlKGBDb21wdXRlcidzIHR1cm4sIHBsYXllciBhdHRhY2tpbmcuLi5gKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMucGxheWVyc0FsbFswXS5hdXRvQXR0YWNrLDIwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9zd2l0Y2hUdXJuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudHVybiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy50dXJuID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50dXJuKTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlRGlyZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGdhbWVQbGF5LnNoaXBEaXJlY3Rpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICBnYW1lUGxheS5zaGlwRGlyZWN0aW9uID0gXCJ5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnYW1lUGxheS5zaGlwRGlyZWN0aW9uID0gXCJ4XCI7IFxuICAgICAgICB9XG4gICAgICAgIGRvbUludGVyYWN0LnRvZ2dsZURpcmVjdGlvbkRpc3BsYXkoKTtcbiAgICB9LFxuICAgIGNoZWNrTG9jYXRpb25WYWxpZDogZnVuY3Rpb24ocGxJbmRleCx4SW5kZXgseUluZGV4LGN1cnJlbnREaXJlY3Rpb24sc2hpcExlbmd0aCkge1xuICAgICAgICBsZXQgZXJyb3JNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNpbmctZXJyb3JcIik7XG4gICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInhcIiAmJiAoeEluZGV4K3NoaXBMZW5ndGgtMSkgPiAxMCkge1xuICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJFcnJvciwgbW92ZSBzaGlwIGxlZnQsIG9yIGNoYW5nZSBkaXJlY3Rpb25cIjtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ5XCIgJiYgKHlJbmRleCtzaGlwTGVuZ3RoLTEpID4gMTApIHtcbiAgICAgICAgICAgIGVycm9yTXNnLmlubmVySFRNTCA9IFwiRXJyb3IsIG1vdmUgc2hpcCB1cCwgb3IgY2hhbmdlIGRpcmVjdGlvblwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjsgLy9VcGRhdGUgd2l0aCBFcnJvciBIYW5kbGluZyBcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5jaGVja1Nwb3RUYWtlbihwbEluZGV4LHhJbmRleCx5SW5kZXgsY3VycmVudERpcmVjdGlvbixzaGlwTGVuZ3RoKSkge1xuICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJFcnJvciwgY29uZmxpY3Qgd2l0aCBhbm90aGVyIHNoaXBcIjtcbiAgICAgICAgICAgIHJldHVybiBcImVycm9yXCI7IC8vVXBkYXRlIHdpdGggRXJyb3IgSGFuZGxpbmcgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXJyb3JNc2cuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwidmFsaWRcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tTcG90VGFrZW46IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpIHtcbiAgICAgICAgLy91c2VzIGNsYXNzbGlzdCBsZW5ndGggb2Ygc3F1YXJlIHRvIGRldGVybWluZSBpZiBhIHNoaXAgaXMgYWxyZWFkeSB0aGVyZVxuICAgICAgICBsZXQgZXJyb3JDaGVjayA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGk9MDtpPHNoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudERpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMb2NhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLWFjdGl2ZVwiKSB8fCBjaGVja2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1oaWRkZW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrZWRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4K2l9LSR7eEluZGV4fWApO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTG9jYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1hY3RpdmVcIikgfHwgY2hlY2tlZExvY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yQ2hlY2s7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5cbi8vIERPTSBJTlRFUkFDVCBNT0RVTEVcbi8vIH5+fn5+fn5+fn5+fn5+fn5+fn5+flxuY29uc3QgZG9tSW50ZXJhY3QgPSB7XG4gICAgcG9wdWxhdGVCb2FyZDogZnVuY3Rpb24ocGxheWVySW4pIHtcbiAgICAgICAgLy9zZWxlY3QgYm9hcmQgYmFzZWQgb24gcGxheWVyIHRoYXQgY29tZXMgaW4gdG8gYXBwZW5kIHRvXG4gICAgICAgIGxldCBnYW1lYm9hcmREaXY7XG4gICAgICAgIGxldCBwbGF5ZXJJZCA9IFwiXCI7XG4gICAgICAgIGlmIChwbGF5ZXJJbiA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXAtYm9hcmRcIik7XG4gICAgICAgICAgICBwbGF5ZXJJZCA9IFwiY29cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMS1ib2FyZFwiKTtcbiAgICAgICAgICAgIHBsYXllcklkID0gXCJwMVwiO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MTsgaTw9MTA7aSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTE7IGo8PTEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuaWQgPSBgJHtwbGF5ZXJJZH0tJHtpfS0ke2p9YDtcbiAgICAgICAgICAgICAgICBzcXVhcmVEaXYuY2xhc3NMaXN0ID0gXCJnYW1lLXNxdWFyZVwiO1xuICAgICAgICAgICAgICAgIGdhbWVib2FyZERpdi5hcHBlbmRDaGlsZChzcXVhcmVEaXYpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5hbWVJbjogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPXRleHRdJylbMF07XG4gICAgICAgIGxldCBwbGF5ZXJOYW1lICA9IGZvcm1JbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGlmIChwbGF5ZXJOYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIxLW5hbWUgaDJcIik7IFxuICAgICAgICAgICAgcGxheWVyTmFtZURpdi5pbm5lckhUTUwgPSBwbGF5ZXJOYW1lOyAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyTmFtZSA9IFwiUGxheWVyMVwiO1xuICAgICAgICB9XG4gICAgICAgIGZvcm1JbnB1dC5wYXJlbnRFbGVtZW50LnJlc2V0KCk7XG4gICAgICAgIGZvcm1JbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGdhbWVQbGF5LnNldFVwR2FtZShwbGF5ZXJOYW1lKTtcbiAgICB9LFxuICAgIGRvbVVpVXBkYXRlOiBmdW5jdGlvbihyZWFzb24sY2hhbmdlVHlwZSkge1xuICAgICAgICAvL3VwZGF0ZXMgVUkgaW50ZXJhY3Rpb24gaW5jbHVkaW5nIGV2ZW50IGxpc3RlbmVycywgYnV0dG9ucywgXG4gICAgICAgIGxldCBjYXNlSW4gPSBgJHtyZWFzb259ICR7Y2hhbmdlVHlwZX1gO1xuICAgICAgICBzd2l0Y2ggKGNhc2VJbikge1xuICAgICAgICAgICAgY2FzZSBcInBsYWNpbmctc2hpcHMgc3RhcnRcIjpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoXCJvblwiKTtcbiAgICAgICAgICAgICAgICAvL3BsYXllciAxIGJvYXJkIHNxdWFyZXNcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyU3F1YXJlc1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIxLWJvYXJkIC5nYW1lLXNxdWFyZVwiKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcXVhcmVzU3RhcnQuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIixkb21JbnRlcmFjdC5sb2NhdGlvbkRhdGEpKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcXVhcmVzU3RhcnQuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRvbUludGVyYWN0LmxvY2F0aW9uRGF0YSkpO1xuICAgICAgICAgICAgICAgIC8vZGlyZWN0aW9uIGJ1dHRvblxuICAgICAgICAgICAgICAgIGxldCBkaXJUb2dnbGVCdG5TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyZWN0aW9uLXRvZy1idG5cIik7XG4gICAgICAgICAgICAgICAgZGlyVG9nZ2xlQnRuU3RhcnQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkaXJUb2dnbGVCdG5TdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnYW1lUGxheS50b2dnbGVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBsYWNpbmctc2hpcHMgc3RvcFwiOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChcIm9mZlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyU3F1YXJlc1N0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllcjEtYm9hcmQgLmdhbWUtc3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIHBsYXllclNxdWFyZXNTdG9wLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsZG9tSW50ZXJhY3QubG9jYXRpb25EYXRhKSk7XG4gICAgICAgICAgICAgICAgcGxheWVyU3F1YXJlc1N0b3AuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRvbUludGVyYWN0LmxvY2F0aW9uRGF0YSkpO1xuICAgICAgICAgICAgICAgIGxldCBkaXJUb2dnbGVCdG5TdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXJlY3Rpb24tdG9nLWJ0blwiKTtcbiAgICAgICAgICAgICAgICBkaXJUb2dnbGVCdG5TdG9wLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZGlyVG9nZ2xlQnRuU3RvcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnYW1lUGxheS50b2dnbGVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBsYXllcjEtYXR0YWNrIHN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgMSBhdHRhY2tpbmc6XCIpO1xuICAgICAgICAgICAgICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyBvbiBhdHRhY2tcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3F1YXJlc1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb21wLWJvYXJkIC5nYW1lLXNxdWFyZVwiKTtcbiAgICAgICAgICAgICAgICBhdHRhY2tTcXVhcmVzU3RhcnQuZm9yRWFjaChzcXVhcmUgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYXR0YWNrKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGxheWVyMS1hdHRhY2sgc3RvcFwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIDEgc3RvcCBhdHRhY2tpbmc6XCIpO1xuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBhdHRhY2tcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNrU3F1YXJlc1N0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbXAtYm9hcmQgLmdhbWUtc3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIGF0dGFja1NxdWFyZXNTdG9wLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixnYW1lUGxheS5wbGF5ZXJzQWxsWzFdLmF0dGFjaykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2NhdGlvbkRhdGE6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY3VycmVudERpcmVjdGlvbiA9IGdhbWVQbGF5LnNoaXBEaXJlY3Rpb247XG4gICAgICAgIC8vQ3VycmVudCBTaGlwIExlbmd0aCBiZWluZyBwbGFjZWRcbiAgICAgICAgbGV0IHNoaXBJbmRleCA9IGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuc2hpcHNBbGwubGVuZ3RoO1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IGdhbWVQbGF5LnNoaXBTaXplc1tzaGlwSW5kZXhdO1xuICAgICAgICBsZXQgc2hpcE5hbWUgPSBnYW1lUGxheS5zaGlwTmFtZXNbc2hpcEluZGV4XTtcbiAgICAgICAgLy9nZXQgZXZlbnQgJiBzcXVhcmUgbG9jYXRpb24gaW5mb1xuICAgICAgICBsZXQgZXZlbnRUeXBlID0gZS50eXBlO1xuICAgICAgICBsZXQgc3F1YXJlSWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgbGV0IGluZGljZXMgPSBzcXVhcmVJZC5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCBwbEluZGV4ID0gaW5kaWNlc1swXTsgLy9rZWVwaW5nIGluIGNhc2UgbmVlZCB0aGlzIGZ1bmN0aW9uIGZvciBjb21wdXRlciBwbGFjZW1lbnRzIHRvb1xuICAgICAgICBsZXQgeEluZGV4ID0gTnVtYmVyKGluZGljZXNbMl0pO1xuICAgICAgICBsZXQgeUluZGV4ID0gTnVtYmVyKGluZGljZXNbMV0pO1xuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgIGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQucGxhY2VTaGlwKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpO1xuICAgICAgICAgICAgaWYgKGdhbWVQbGF5LnBsYXllcnNBbGxbMV0uYm9hcmQuc2hpcHNBbGwubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgZ2FtZVBsYXkuY2hlY2tBbGxTaGlwc1BsYWNlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gXCJtb3VzZW92ZXJcIikge1xuICAgICAgICAgICAgZG9tSW50ZXJhY3Quc2hvd0xvY2F0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGFjZVNoaXBEb206IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgsc2hpcE5hbWUpIHtcbiAgICAgICAgLy91cGRhdGVzIHNxdWFyZXMgY2xhc3Mgdy8gc2hpcCBpbmZvXG4gICAgICAgIGZvciAobGV0IGk9MDtpPHNoaXBMZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBpZiAocGxJbmRleCA9PT0gXCJwMVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4fS0ke3hJbmRleCtpfWApO1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMb2NhdGlvbi5jbGFzc0xpc3QgPSBgZ2FtZS1zcXVhcmUgc2hpcC1hY3RpdmUgJHtwbEluZGV4fS0ke3NoaXBOYW1lfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXgraX0tJHt4SW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodExvY2F0aW9uLmNsYXNzTGlzdCA9IGBnYW1lLXNxdWFyZSBzaGlwLWFjdGl2ZSAke3BsSW5kZXh9LSR7c2hpcE5hbWV9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZ2hsaWdodExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW5kZXh9LSR7eEluZGV4K2l9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMb2NhdGlvbi5jbGFzc0xpc3QgPSBgZ2FtZS1zcXVhcmUgc2hpcC1oaWRkZW4gJHtwbEluZGV4fS0ke3NoaXBOYW1lfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4K2l9LSR7eEluZGV4fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0TG9jYXRpb24uY2xhc3NMaXN0ID0gYGdhbWUtc3F1YXJlIHNoaXAtaGlkZGVuICR7cGxJbmRleH0tJHtzaGlwTmFtZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzaG93TG9jYXRpb246IGZ1bmN0aW9uKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpIHtcbiAgICAgICAgbGV0IHZhbGlkUmVwb3J0ID0gZ2FtZVBsYXkuY2hlY2tMb2NhdGlvblZhbGlkKHBsSW5kZXgseEluZGV4LHlJbmRleCxjdXJyZW50RGlyZWN0aW9uLHNoaXBMZW5ndGgpO1xuICAgICAgICAvL0NsZWFyIGFueSBjZWxscyBhcmVhZHkgaGlnaGxpZ2h0ZWQgXG4gICAgICAgIGRvbUludGVyYWN0LmhpZGVMb2NhdGlvbihcInZhbGlkXCIpO1xuICAgICAgICBkb21JbnRlcmFjdC5oaWRlTG9jYXRpb24oXCJlcnJvclwiKTtcbiAgICAgICAgLy9oaWdobGlnaHQgc2VsZWN0ZWQgc2hpcCBwbGFjZW1lbnQgYmFzZWQgb24gdmFsaWQgc3RhdHVzIFxuICAgICAgICBmb3IgKGxldCBpPTA7aTxzaGlwTGVuZ3RoO2krKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgaWYoeEluZGV4K2kgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaGxpZ2h0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbEluZGV4fS0ke3lJbmRleH0tJHt4SW5kZXgraX1gKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0TG9jYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSh2YWxpZFJlcG9ydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZih5SW5kZXgraSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsSW5kZXh9LSR7eUluZGV4K2l9LSR7eEluZGV4fWApO1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRMb2NhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKHZhbGlkUmVwb3J0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZGVMb2NhdGlvbjogZnVuY3Rpb24oY2xhc3NUb0hpZGUpIHtcbiAgICAgICAgbGV0IGRpdnNUb0hpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc1RvSGlkZX1gKTtcbiAgICAgICAgaWYgKGRpdnNUb0hpZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGl2c1RvSGlkZS5mb3JFYWNoKHNxdWFyZUhpZ2hsaWdodGVkID0+IHNxdWFyZUhpZ2hsaWdodGVkLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NUb0hpZGV9YCkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGVEaXJlY3Rpb25EaXNwbGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHRleHQgPSBnYW1lUGxheS5zaGlwRGlyZWN0aW9uLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyZWN0aW9uLXRvZy1idG5cIikuaW5uZXJIVE1MID0gYCR7dGV4dH0gRGlyZWN0aW9uYDtcbiAgICB9LFxuICAgIGFkZEF0dGFjazogZnVuY3Rpb24oYXR0YWNrUmVzdWx0LHhJbix5SW4scGxJbmRleCkge1xuICAgICAgICAvL0Rpc3BsYXkgb2Ygc3F1YXJlIGhpdFxuICAgICAgICBsZXQgYXR0YWNrU3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxJbmRleH0tJHt5SW59LSR7eElufWApO1xuICAgICAgICBhdHRhY2tTcXVhcmUuY2xhc3NMaXN0LmFkZChhdHRhY2tSZXN1bHQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRhY2tTcXVhcmUuY2xhc3NMaXN0KTtcbiAgICAgICAgLy9IUCBEaXNwbGF5IG9mIHNoaXAgaWYgaGl0XG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXJJbmRleE51bSA9IDE7XG4gICAgICAgICAgICBpZiAocGxJbmRleCA9PT0gXCJjb1wiKSB7XG4gICAgICAgICAgICAgICAgcGxheWVySW5kZXhOdW0gPSAwOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IGF0dGFja1NxdWFyZS5jbGFzc0xpc3RbMl0uc3BsaXQoXCItXCIpWzFdO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkU2hpcCA9IGdhbWVQbGF5LnBsYXllcnNBbGxbcGxheWVySW5kZXhOdW1dLmJvYXJkLnNoaXBzQWxsLmZpbHRlcihzaGlwID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcC5zaGlwVHlwZSA9PT0gc2hpcE5hbWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRTaGlwWzBdLnBvc2l0aW9uLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRTaGlwSW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNlbGVjdGVkU2hpcFswXS5wb3NpdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkU2hpcFswXS5wb3NpdGlvbltpXSlcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwWzBdLnBvc2l0aW9uW2ldLmhpdFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXBJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3NoaXBOYW1lfS0ke3BsSW5kZXh9LWhwLTAke3NlbGVjdGVkU2hpcEluZGV4fWApO1xuXG4gICAgICAgICAgICBsZXQgaHBEaXZVcGRhdGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NoaXBOYW1lfS0ke3BsSW5kZXh9LWhwLTAke3NlbGVjdGVkU2hpcEluZGV4fWApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaHBEaXZVcGRhdGluZyk7XG4gICAgICAgICAgICBocERpdlVwZGF0aW5nLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dIcDogZnVuY3Rpb24oc2hpcE5hbWUscGxJbmRleCkge1xuICAgICAgICBsZXQgc2hpcEhwRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2hpcE5hbWV9LSR7cGxJbmRleH1gKTtcbiAgICAgICAgc2hpcEhwRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSxcbiAgICB1aVRleHRVcGRhdGU6IGZ1bmN0aW9uKHRleHRJbikge1xuICAgICAgICBsZXQgdWlUZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWktb3V0cHV0LXRleHRcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVpVGV4dEVsZW1lbnQpO1xuICAgICAgICBpZiAodGV4dEluID09PSBcImNsZWFyXCIgKSB7XG4gICAgICAgICAgICB1aVRleHRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICB1aVRleHRFbGVtZW50LmNsYXNzTGlzdCA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1aVRleHRFbGVtZW50LmlubmVySFRNTCA9IHRleHRJbjtcbiAgICAgICAgICAgIHVpVGV4dEVsZW1lbnQuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZ2FtZVBsYXkuaW5pdCgpO1xuXG5cblxuXG5cblxuLy9EZWJ1Z2dpbmcgQ2FzZXNcblxuLy8gbGV0IHRlc3RCb2FyZCA9IGdhbWVCb2FyZCgpO1xuLy8gdGVzdEJvYXJkLnBsYWNlU2hpcCg1LFwiMywyXCIsXCJ5XCIpO1xuLy8gY29uc29sZS5sb2codGVzdEJvYXJkLnJlY2lldmVBdHRhY2soNCwyKSk7XG4vLyBjb25zb2xlLmxvZyh0ZXN0Qm9hcmQucmVjaWV2ZUF0dGFjayg0LDIpKTtcblxuLy8gbGV0IHBsYXllcjEgPSBwbGF5ZXJOZXcoXCJTdGV2ZVwiKTtcbi8vIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKDEwLFwiMSwxXCIsXCJ4XCIpO1xuLy8gY29uc29sZS5sb2cocGxheWVyMSk7XG4vLyBsZXQgcGxheWVyQ29tcCA9IHBsYXllck5ldyhcImNvbXB1dGVyXCIpO1xuLy8gcGxheWVyQ29tcC5hdHRhY2socGxheWVyMSk7XG5cblxuLy8gLy8gVGVzdGluZyBFeHBvcnRzXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtjcmVhdGVTaGlwLCBnYW1lQm9hcmQsIHBsYXllck5ld307XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==