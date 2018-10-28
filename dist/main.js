/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_game_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/game-controller */ \"./src/services/game-controller.js\");\n/* harmony import */ var _models_game_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/game/classic */ \"./src/models/game/classic.js\");\n\n\n\n\n(function () {\n    new _services_game_controller__WEBPACK_IMPORTED_MODULE_0__[\"GameController\"](new _models_game_classic__WEBPACK_IMPORTED_MODULE_1__[\"Classic\"](), _services_game_controller__WEBPACK_IMPORTED_MODULE_0__[\"MODE\"].PlayerVsComputer).init();\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/game/classic.js":
/*!************************************!*\
  !*** ./src/models/game/classic.js ***!
  \************************************/
/*! exports provided: Classic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Classic\", function() { return Classic; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/models/game/game.js\");\n/* harmony import */ var _hand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hand */ \"./src/models/hand.js\");\n\n\n\nclass Classic extends _game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"] {\n    constructor() {\n        const rock = new _hand__WEBPACK_IMPORTED_MODULE_1__[\"Hand\"]('rock', 'far fa-hand-rock');\n        const paper = new _hand__WEBPACK_IMPORTED_MODULE_1__[\"Hand\"]('paper', 'far fa-hand-paper');\n        const scissors = new _hand__WEBPACK_IMPORTED_MODULE_1__[\"Hand\"]('scissors', 'far fa-hand-scissors');\n        const rules = { 'rock': ['scissors'], 'paper': ['rock'], 'scissors': ['paper'] };\n        super([rock, paper, scissors], rules);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/models/game/classic.js?");

/***/ }),

/***/ "./src/models/game/game.js":
/*!*********************************!*\
  !*** ./src/models/game/game.js ***!
  \*********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n// Concrete Game object\n// Holds available choices and rules\nclass Game {\n    constructor(hands, rules) {\n        this.hands = hands;\n        this.rules = rules;\n    }\n\n    getHandByShape(shape) {\n        return this.hands.find((hand) => hand.shape === shape);\n    }\n\n    // Naive function that plays on behalf of computer by choosing a random hand\n    playComputer() {\n        return this.hands[Math.floor(Math.random() * Math.floor(this.hands.length))];\n    }\n\n    compare(hand1, hand2) {\n        if (hand1.shape === hand2.shape) {\n            return 0;\n        } else if (this.rules[hand1.shape].includes(hand2.shape)) {\n            return 1;\n        } else {\n            return -1;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/models/game/game.js?");

/***/ }),

/***/ "./src/models/hand.js":
/*!****************************!*\
  !*** ./src/models/hand.js ***!
  \****************************/
/*! exports provided: Hand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hand\", function() { return Hand; });\nclass Hand {\n    constructor(shape, avatarClass) {\n        this.shape = shape;\n        this.avatarClass = avatarClass;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/models/hand.js?");

/***/ }),

/***/ "./src/services/game-controller.js":
/*!*****************************************!*\
  !*** ./src/services/game-controller.js ***!
  \*****************************************/
/*! exports provided: MODE, GameController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODE\", function() { return MODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameController\", function() { return GameController; });\nconst MODE = {\n    PlayerVsComputer: 1,\n    ComputerVsComputer: 2,\n}\n\nclass GameController {\n    constructor(game, mode) {\n        this.game = game;\n        this.mode = mode;\n    }\n\n    init() {\n        if (this.mode === MODE.PlayerVsComputer) {\n            this.initPlayerVsComputer();\n        } else if (this.mode === 2) {\n            this.initComputerVsComputer();\n        }\n    }\n\n    initPlayerVsComputer() {\n        const ctrl = this;\n        const playerOneSection = document.querySelector('#playerOne .container-body__shapes');\n        const playerTwoSection = document.querySelector('#playerTwo .container__body');\n\n        this.game.hands.forEach(hand => {\n            const iEl = this.createElementForHand(hand);\n            playerOneSection.appendChild(iEl);\n\n            iEl.addEventListener('click', function () {\n                const playerOneHand = ctrl.game.getHandByShape(this.dataset.hand);\n                const playerTwoHand = ctrl.game.playComputer();\n                const playerTwoHandIcon = ctrl.createElementForHand(playerTwoHand);\n                const res = ctrl.game.compare(playerOneHand, playerTwoHand);\n\n                // update player 2 hand icon\n                playerTwoSection.innerHTML = '';\n                playerTwoSection.appendChild(playerTwoHandIcon);\n\n                ctrl.handleResolution(res, this, playerTwoHandIcon);\n            });\n        });\n    }\n\n    initComputerVsComputer() {\n\n    }\n\n    createElementForHand(hand) {\n        let i = document.createElement('i');\n        i.className = `${hand.avatarClass} btn`;\n        i.dataset.hand = hand.shape;\n        return i;\n    }\n\n    handleResolution(resolution, p1, p2) {\n        let resolutionMsg = '';\n\n        switch (resolution) {\n            case 1:\n                resolutionMsg = 'Player 1 wins';\n                break;\n            case 0:\n                resolutionMsg = 'It is a tie!'\n                break;\n            case -1:\n                resolutionMsg = 'Player 2 wins';\n                break;\n        }\n\n        document.getElementById('resolution').innerText = resolutionMsg;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/services/game-controller.js?");

/***/ })

/******/ });