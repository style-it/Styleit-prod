/*!
 * styleit
 * StyleIt.js is a text editor API 
 * 
 * @version v1.0.0
 * @author Adi L, jonathan C
 * @homepage 
 * @repository git+https://github.com/style-it/StyleIt-dev.git
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src */ "./src/index.js").default;

/***/ }),

/***/ "./src/StyleIt/_app.config.json":
/*!**************************************!*\
  !*** ./src/StyleIt/_app.config.json ***!
  \**************************************/
/*! exports provided: Authors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Authors\":[\"Adi L\",\"jhonatan C\"]}");

/***/ }),

/***/ "./src/StyleIt/components/custom/textSelected.js":
/*!*******************************************************!*\
  !*** ./src/StyleIt/components/custom/textSelected.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function (Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if (typeof Proxy === "function") return !0; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return !0; } catch (e) { return !1; } }

function _construct() { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function (Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextSelection = function (_HTMLElement) {
  _inherits(TextSelection, _HTMLElement);

  function TextSelection() {
    _classCallCheck(this, TextSelection);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextSelection).call(this));
  }

  _createClass(TextSelection, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "&#8203;";
    }
  }]);

  return TextSelection;
}(_wrapNativeSuper(HTMLElement));

customElements.define('text-selection', TextSelection);

/***/ }),

/***/ "./src/StyleIt/connector.js":
/*!**********************************!*\
  !*** ./src/StyleIt/connector.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Connector; });
/* harmony import */ var _utilis_DomUtilis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilis/DomUtilis */ "./src/StyleIt/utilis/DomUtilis.js");
/* harmony import */ var _services_copyPaste_copyPaste_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/copyPaste/copyPaste.service */ "./src/StyleIt/services/copyPaste/copyPaste.service.js");
/* harmony import */ var _services_Inspector_Inspector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/Inspector/Inspector.service */ "./src/StyleIt/services/Inspector/Inspector.service.js");
/* harmony import */ var _services_elements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/elements.service */ "./src/StyleIt/services/elements.service.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Connector = function () {
  function Connector() {
    _classCallCheck(this, Connector);
  }

  _createClass(Connector, [{
    key: "Connect",
    value: function Connect(element, options) {
      if (typeof element === "string") {
        element = document.getElementById(element);

        if (!element) {
          return null;
        }
      } else if (!_utilis_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(element)) {
        return null;
      }

      this.RenderInnerHTML(element);
      this.plugins = this.usePlugins(element, options);
      return element;
    }
  }, {
    key: "usePlugins",
    value: function usePlugins(element, options) {
      return {
        copyPaste: new _services_copyPaste_copyPaste_service__WEBPACK_IMPORTED_MODULE_1__["default"](element),
        inspector: new _services_Inspector_Inspector_service__WEBPACK_IMPORTED_MODULE_2__["default"](element, options.onInspect)
      };
    }
  }, {
    key: "RenderInnerHTML",
    value: function RenderInnerHTML(element) {
      var jsonContent = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_3__["elementToJson"])(element);
      var renderedElement = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_3__["JsonToElement"])(jsonContent);
      (function emptyElement(node) {
        return new Promise(function (resolve) {
          while (node.firstElementChild) {
            node.firstElementChild.remove();
          }

          resolve();
        });
      })(element).then(function () {
        return element.innerHTML = renderedElement.innerHTML;
      });
    }
  }, {
    key: "Destroy",
    value: function Destroy() {
      for (var key in this.plugins) {
        if (this.plugins.hasOwnProperty(key)) {
          var plugin = this.plugins[key];
          plugin.Destroy();
        }
      }
    }
  }]);

  return Connector;
}();



/***/ }),

/***/ "./src/StyleIt/constants/Levels.json":
/*!*******************************************!*\
  !*** ./src/StyleIt/constants/Levels.json ***!
  \*******************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"holder\",\"1\":\"block\"}");

/***/ }),

/***/ "./src/StyleIt/constants/Modes.js":
/*!****************************************!*\
  !*** ./src/StyleIt/constants/Modes.js ***!
  \****************************************/
/*! exports provided: Modes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modes", function() { return Modes; });
var Modes = {
  "Toggle": "toggle",
  "Extend": "extend",
  "Tag": "Tag"
};

/***/ }),

/***/ "./src/StyleIt/constants/elementTypes.js":
/*!***********************************************!*\
  !*** ./src/StyleIt/constants/elementTypes.js ***!
  \***********************************************/
/*! exports provided: Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Types", function() { return Types; });
var Types = {
  '#text': '#text',
  'P': 'P',
  'SPAN': 'SPAN',
  'A': 'A',
  'DIV': 'DIV',
  'BR': 'BR'
};

/***/ }),

/***/ "./src/StyleIt/index.js":
/*!******************************!*\
  !*** ./src/StyleIt/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Core; });
/* harmony import */ var _services_range_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _constants_Modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/Modes */ "./src/StyleIt/constants/Modes.js");
/* harmony import */ var _utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilis/splitHTML */ "./src/StyleIt/utilis/splitHTML.js");
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/textEditor.service */ "./src/StyleIt/services/textEditor.service.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connector */ "./src/StyleIt/connector.js");
/* harmony import */ var _components_custom_textSelected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom/textSelected */ "./src/StyleIt/components/custom/textSelected.js");
/* harmony import */ var _components_custom_textSelected__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_custom_textSelected__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/elements.service */ "./src/StyleIt/services/elements.service.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Core = function () {
  function Core(target, config) {
    var _this = this,
        _this$modeHandlers;

    _classCallCheck(this, Core);

    this.__config = {
      onInspect: undefined
    };
    this.Connector = new _connector__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.modeHandlers = (_this$modeHandlers = {}, _defineProperty(_this$modeHandlers, _constants_Modes__WEBPACK_IMPORTED_MODULE_1__["Modes"].Toggle, function (v, key, value, OnOff) {
      return _this.onToggle(v, key, value, OnOff);
    }), _defineProperty(_this$modeHandlers, _constants_Modes__WEBPACK_IMPORTED_MODULE_1__["Modes"].Extend, function (v, key, value) {
      return _this.onExtend(v, key, value);
    }), _this$modeHandlers);
    this.config = config ? Object.assign(this.__config, config) : this.__config;
    this.events = {
      styleChanged: this.config.onInspect
    };
    this.connectedElement = this.Connector.Connect(target, this.config);
  }

  _createClass(Core, [{
    key: "Save",
    value: function Save() {
      return Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["elementToJson"])(this.connectedElement);
    }
  }, {
    key: "Load",
    value: function Load(json) {
      return Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["JsonToElement"])(json, this.connectedElement);
    }
  }, {
    key: "Destroy",
    value: function Destroy() {
      this.Connector.Destroy();
      var self = this;

      for (var key in self) {
        this[key];
      }

      this.connectedElement = null;
    }
  }, {
    key: "ToggleClass",
    value: function ToggleClass(className, isON) {
      if (typeof className !== "string") {
        return null;
      }

      var elements = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();

      if (elements.length === 0) {
        return;
      }

      var isToggleOn = typeof isON === "boolean" ? isON : elements[0].closest("[class='".concat(className, "']"));

      if (!isToggleOn) {
        elements.forEach(function (el) {
          return el.classList.add(className);
        });
      } else {
        elements.forEach(function (el) {
          if (el.parentElement) {
            var closestClass = el.parentElement.closest("[class='".concat(className, "']"));

            if (closestClass) {
              var split = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(el, closestClass);

              if (split) {
                split.center.removeClassName(className);
              }
            }
          } else {
            el.removeClassName(className);
          }
        });
      }

      var _setSelectionFlags = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(elements[0], elements[elements.length - 1]),
          firstFlag = _setSelectionFlags.firstFlag,
          lastFlag = _setSelectionFlags.lastFlag;

      Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(this.connectedElement);
      Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);
    }
  }, {
    key: "execCmd",
    value: function execCmd(key, value, mode, options) {
      var _this2 = this;

      this.connectedElement.normalize();
      Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["getTextNodes"])(this.connectedElement);
      mode = mode ? mode : _constants_Modes__WEBPACK_IMPORTED_MODULE_1__["Modes"].Extend;
      this.options = _typeof(options) === 'object' ? options : {};

      if (!this.isValid(key, value)) {
        return;
      }

      this.ELEMENTS = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();

      var _setSelectionFlags2 = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(this.ELEMENTS[0], this.ELEMENTS[this.ELEMENTS.length - 1]),
          firstFlag = _setSelectionFlags2.firstFlag,
          lastFlag = _setSelectionFlags2.lastFlag;

      Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["removeZeroSpace"])(Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["getTextNodes"])(this.connectedElement));
      var ToggleMode;
      this.ELEMENTS.forEach(function (element) {
        var result = _this2.modeHandlers[mode](element, key, value, ToggleMode);

        if (mode === _constants_Modes__WEBPACK_IMPORTED_MODULE_1__["Modes"].Toggle && typeof ToggleMode === 'undefined') ToggleMode = result;
      });
      Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(this.connectedElement);
      Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);
      this.dispatchEvent('styleChanged', Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["collectStyleFromSelectedElement"])(this.connectedElement));
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event, payload) {
      if (this.events[event]) this.events[event](payload);
    }
  }, {
    key: "onToggle",
    value: function onToggle(element, key, value, OnOff) {
      var elementToSplit = element.closest("[style*='".concat(value, "']"));

      if (elementToSplit) {
        if (typeof OnOff === 'undefined') OnOff = !1;
        var splitElements = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(element, elementToSplit);

        if (splitElements) {
          Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["toggleStyle"])(splitElements.center, key, value, OnOff);

          if (this.ELEMENTS.length === 1 && !this.ELEMENTS[0].textContent.trim()) {
            splitElements.center.innerHTML += "&#8203;";
            var s = document.createElement("span");
            s.innerHTML = "&#8203;";
            splitElements.center.appendChild(s);
            Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setCaretAt"])(s);
          }
        }
      } else {
        if (typeof OnOff === 'undefined') OnOff = !0;
        Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["toggleStyle"])(element, key, value, OnOff);
        Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(element);
      }

      return OnOff;
    }
  }, {
    key: "onExtend",
    value: function onExtend(element, key, value) {
      var elementToSplit = element.closest("[style*='".concat(key, "']"));

      if (elementToSplit) {
        var splitElements = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(element, elementToSplit);

        if (splitElements) {
          Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(splitElements.center, key, value);
        }
      } else {
        Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(element, key, value);
      }
    }
  }, {
    key: "isValid",
    value: function isValid(key, value) {
      if (!this.connectedElement) {
        return !1;
      }

      if (this.connectedElement.contentEditable !== "true") {
        return !1;
      }

      if (typeof key !== "string" && typeof value !== "string") {
        return !1;
      }

      var selectedElement = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["getSelectedElement"])();

      if (selectedElement && (selectedElement.ischildOf(this.connectedElement) || selectedElement === this.connectedElement)) {
        return !0;
      }
    }
  }]);

  return Core;
}();



/***/ }),

/***/ "./src/StyleIt/rules/rules.js":
/*!************************************!*\
  !*** ./src/StyleIt/rules/rules.js ***!
  \************************************/
/*! exports provided: UseRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseRules", function() { return UseRules; });
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _utilis_splitHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilis/splitHTML */ "./src/StyleIt/utilis/splitHTML.js");
/* harmony import */ var _services_textEditor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/textEditor.service */ "./src/StyleIt/services/textEditor.service.js");



function UseRules(data) {
  [function ColorTextDecorationRule(data) {
    if (data.key === "color") {
      var textDecoration = data.element.closest("[style*='text-decoration']");

      if (textDecoration) {
        var splits = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_1__["splitHTML"])(data.element, textDecoration);

        if (splits) {
          Object(_services_style_service__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])();
          Object(_services_style_service__WEBPACK_IMPORTED_MODULE_0__["setStyle"])(splits.center, 'text-decoration-color', "".concat(data.value));

          for (var key in splits) {
            var element = splits[key];
            Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_2__["normalizeElement"])(element);
          }
        } else {
          Object(_services_style_service__WEBPACK_IMPORTED_MODULE_0__["setStyle"])(textDecoration, 'text-decoration-color', "".concat(data.value));
        }
      }
    }
  }].forEach(function (rule) {
    return rule(data);
  });
}

/***/ }),

/***/ "./src/StyleIt/services/Inspector/Inspector.service.js":
/*!*************************************************************!*\
  !*** ./src/StyleIt/services/Inspector/Inspector.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inpsector; });
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Inpsector = function Inpsector(target, onInspect) {
  var _this = this;

  _classCallCheck(this, Inpsector);

  if (!target) {
    return null;
  }

  this.onInspect = onInspect;
  this.target = target;

  var launchInspect = function () {
    var collectedStyle = Object(_style_service__WEBPACK_IMPORTED_MODULE_0__["collectStyleFromSelectedElement"])(_this.target);
    if (typeof _this.onInspect === "function") _this.onInspect(collectedStyle);
  };

  this.onKeyDown = function (e) {
    if (e.keyCode === 8 && _this.target.children.length <= 1 && !_this.target.textContent) {
      e.preventDefault();
      return !1;
    }

    launchInspect();
  };

  this.onClick = function () {
    launchInspect();
  };

  this.target.addEventListener('click', this.onClick);
  this.target.addEventListener('keydown', this.onKeyDown);

  this.Destroy = function () {
    _this.target.removeEventListener('click', _this.onClick);

    _this.target.removeEventListener('keydown', _this.onKeyDown);

    _this.target = null;
  };
};



/***/ }),

/***/ "./src/StyleIt/services/attr.service.js":
/*!**********************************************!*\
  !*** ./src/StyleIt/services/attr.service.js ***!
  \**********************************************/
/*! exports provided: getInheirtAttributes, getAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInheirtAttributes", function() { return getInheirtAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributes", function() { return getAttributes; });
function getInheirtAttributes(fromElement, toElement) {
  var attributes = {};
  var currectElement = fromElement;

  while (currectElement && currectElement.ischildOf(toElement.parentElement)) {
    var attrs = currectElement.attributes;

    for (var i = attrs.length - 1; i >= 0; i--) {
      if (attrs[i].name !== "class" && attrs[i].name !== "style") {
        if (!attributes[attrs[i].name]) {
          attributes[attrs[i].name] = attrs[i].value;
        }
      }
    }

    currectElement = currectElement.parentElement;
  }

  return attributes;
}
function getAttributes(element, getAll) {
  var attributes = {};
  var attrs = element.attributes;

  for (var i = attrs.length - 1; i >= 0; i--) {
    if (getAll || !getAll && attrs[i].name !== "class" && attrs[i].name !== "style") {
      if (!attributes[attrs[i].name]) {
        attributes[attrs[i].name] = attrs[i].value;
      }
    }
  }

  return attributes;
}

/***/ }),

/***/ "./src/StyleIt/services/className.service.js":
/*!***************************************************!*\
  !*** ./src/StyleIt/services/className.service.js ***!
  \***************************************************/
/*! exports provided: getInheirtClassNames, getClasses, normalizeClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInheirtClassNames", function() { return getInheirtClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClasses", function() { return getClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeClassName", function() { return normalizeClassName; });
function getInheirtClassNames(fromElement, toElement) {
  var classes = [];
  var _parent = fromElement;

  while (_parent && _parent.ischildOf(toElement.parentElement)) {
    var map = _parent.classList;
    Array.from(map).forEach(function (name) {
      if (classes.findIndex(function (c) {
        return c === name;
      }) < 0) {
        classes.push(name);
      }
    });
    _parent = _parent.parentElement;
  }

  return classes;
}
function getClasses(element) {
  return Array.from(element.classList);
}
function normalizeClassName(element) {
  function removeEmptyClass(element) {
    if (!element.className) {
      element.removeAttribute('class');
    }
  }

  function clear(element) {
    removeEmptyClass(element);
    Array.from(element.classList).forEach(function (c) {
      Array.from(element.querySelectorAll("[class='".concat(c, "']"))).forEach(function (node) {
        node.classList.remove(c);
        removeEmptyClass(node);
      });
    });
  }

  var elements = Array.from(element.querySelectorAll('span[class]')).concat(element);
  elements.forEach(function (child) {
    return clear(child);
  });
}

Element.prototype.removeClassName = function (className) {
  var nodes = Array.from(this.querySelectorAll("[class='".concat(className, "']"))).concat(this);
  nodes.forEach(function (node) {
    return node.classList.remove(className);
  });
};

/***/ }),

/***/ "./src/StyleIt/services/copyPaste/copyPaste.service.js":
/*!*************************************************************!*\
  !*** ./src/StyleIt/services/copyPaste/copyPaste.service.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CopyPaste; });
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _textEditor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../textEditor.service */ "./src/StyleIt/services/textEditor.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _utilis_splitHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilis/splitHTML */ "./src/StyleIt/utilis/splitHTML.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var CopyPaste = function () {
  function CopyPaste(target) {
    var _this = this;

    _classCallCheck(this, CopyPaste);

    this.uniqeID = 'styleit-copy-paste-on-action';

    if (!target) {
      return null;
    }

    this.target = target;

    this.onPaste = function (e) {
      var clip = e.clipboardData.getData('text/html');

      var markup = function stringToHTML(str) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
      }(clip);

      var isLocalElement = markup.querySelector(".".concat(_this.uniqeID));

      if (isLocalElement) {
        Object(_range_service__WEBPACK_IMPORTED_MODULE_0__["pasteHtmlAtCaret"])(isLocalElement.outerHTML);

        var pastedElement = _this.target.querySelector(".".concat(_this.uniqeID));

        if (pastedElement) {
          Array.from(pastedElement.querySelectorAll('span')).forEach(function (child) {
            var style = Object(_style_service__WEBPACK_IMPORTED_MODULE_2__["getStyle"])(child);
            Object(_style_service__WEBPACK_IMPORTED_MODULE_2__["normalizeStyle"])(child);

            for (var key in style) {
              if (style.hasOwnProperty(key)) {
                var foundedEl = child.parentElement.closest("[style*='".concat(key, "']"));

                if (foundedEl) {
                  Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_3__["splitHTML"])(child, foundedEl);
                }
              }
            }
          });
          Array.from(_this.target.querySelectorAll(".".concat(_this.uniqeID))).forEach(function (flag) {
            return flag.classList.remove(_this.uniqeID);
          });
          Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_1__["normalizeElement"])(_this.target);
        }
      } else {
        var paste = (e.clipboardData || window.clipboardData).getData('text');
        var selection = window.getSelection();
        if (!selection.rangeCount) return !1;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(paste));
      }

      e.preventDefault();
    };

    this.onCopy = function (e) {
      var ranges = Object(_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();

      if (ranges.length === 0) {}

      var nodes = ranges.map(function (el) {
        var collectStyle = Object(_style_service__WEBPACK_IMPORTED_MODULE_2__["getInheirtCss"])(el, _this.target);
        Object(_style_service__WEBPACK_IMPORTED_MODULE_2__["setStyles"])(el, collectStyle);
        return el.cloneNode(!0);
      });

      var _setSelectionFlags = Object(_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(ranges[0], ranges[ranges.length - 1]),
          firstFlag = _setSelectionFlags.firstFlag,
          lastFlag = _setSelectionFlags.lastFlag;

      ranges.forEach(function (we) {
        return we.unwrap();
      });
      Object(_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);

      _this.target.normalize();

      var element = document.createElement('span');
      nodes = nodes.reduce(function (filtered, node) {
        if (node.nodeName === "SPAN") {
          filtered.push(node.outerHTML);
        }

        return filtered;
      }, []);
      element.innerHTML = nodes.join("");
      element.className = _this.uniqeID;
      e.clipboardData.setData('text/html', element.outerHTML);
      e.preventDefault();
    };

    this.target.addEventListener('paste', this.onPaste);
    this.target.addEventListener('copy', this.onCopy);
  }

  _createClass(CopyPaste, [{
    key: "Destroy",
    value: function Destroy() {
      this.target.removeEventListener('paste', this.onPaste);
      this.target.removeEventListener('copy', this.onCopy);
      this.target = null;
    }
  }]);

  return CopyPaste;
}();



/***/ }),

/***/ "./src/StyleIt/services/elements.service.js":
/*!**************************************************!*\
  !*** ./src/StyleIt/services/elements.service.js ***!
  \**************************************************/
/*! exports provided: getSelectedElement, JsonToElement, elementToJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedElement", function() { return getSelectedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToElement", function() { return JsonToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementToJson", function() { return elementToJson; });
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/elementTypes */ "./src/StyleIt/constants/elementTypes.js");
/* harmony import */ var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json");
var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json", 1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function getSelectedElement() {
  var node = document.getSelection();

  if (node !== null) {
    var ancNode = node.anchorNode;

    if (ancNode !== null) {
      while (ancNode.nodeType === 3) {
        ancNode = ancNode.parentNode;
      }

      return ancNode;
    }

    return null;
  }
}
function JsonToElement(jsonObject, parentElement) {
  var renderAttrs = function (jsElement, element) {
    if (jsElement.classList) {
      element.classList = _toConsumableArray(jsElement.classList);
    }

    if (jsElement.style) {
      var collectedStyle = Object(_style_service__WEBPACK_IMPORTED_MODULE_0__["JsonObjectToStyleString"])(jsElement.style);
      element.style = collectedStyle;
    }
  };

  var createHtmlElement = function (jsElement) {
    var nodeType = _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"][jsElement.tag];
    var element;
    var isShouldRenderAttrs;

    switch (nodeType) {
      case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"]["#text"]:
        element = document.createTextNode(jsElement.textContent);
        break;

      case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].A:
        element = document.createElement(nodeType);
        element.href = jsElement.href;
        element.target = jsElement.target;
        break;

      case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].SPAN:
      case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].DIV:
      case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].P:
        element = document.createElement(nodeType);
        isShouldRenderAttrs = !0;
        break;

      case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].BR:
        element = document.createElement(nodeType);
        break;

      default:
        break;
    }

    if (isShouldRenderAttrs && element) {
      renderAttrs(jsElement, element);
    }

    return element;
  };

  if (!parentElement && jsonObject.type === _constants_Levels_json__WEBPACK_IMPORTED_MODULE_2__['0']) {
    parentElement = createHtmlElement(jsonObject);
  }

  if (Array.isArray(jsonObject.children)) {
    jsonObject.children.forEach(function (jsChild) {
      var htmlElement = createHtmlElement(jsChild);

      if (htmlElement) {
        parentElement.appendChild(htmlElement);
        JsonToElement(jsChild, htmlElement);
      }
    });
  }

  return parentElement;
}
function elementToJson(node, level) {
  if (typeof level !== "number") level = 0;
  var nodeType = _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"][node.nodeName];
  var json = {};
  var isValid = !0;

  if (_constants_Levels_json__WEBPACK_IMPORTED_MODULE_2__[level]) {
    json.type = _constants_Levels_json__WEBPACK_IMPORTED_MODULE_2__[level];
    level++;
  }

  switch (nodeType) {
    case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"]["#text"]:
      json.tag = nodeType;
      json.textContent = node.textContent.replace(/\u200B/g, '');
      if (!json.textContent.trim()) isValid = !1;
      break;

    case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].A:
      json.tag = nodeType;
      json.href = node.href;
      json.target = node.target;
      break;

    case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].DIV:
    case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].SPAN:
    case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].BR:
    case _constants_elementTypes__WEBPACK_IMPORTED_MODULE_1__["Types"].P:
      json.tag = nodeType;
      break;

    default:
      break;
  }

  if (!isValid) return null;
  var style = Object(_style_service__WEBPACK_IMPORTED_MODULE_0__["getStyle"])(node);

  if (Object.keys(style).length > 0) {
    json.style = style;
  }

  if (node.classList && node.classList.length > 0) json.classList = _toConsumableArray(node.classList);
  if (node.childNodes && node.childNodes.length > 0) json.children = _toConsumableArray(node.childNodes).map(function (cn) {
    return elementToJson(cn, level);
  }).filter(function (v) {
    return v;
  });
  return json;
}

/***/ }),

/***/ "./src/StyleIt/services/range.service.js":
/*!***********************************************!*\
  !*** ./src/StyleIt/services/range.service.js ***!
  \***********************************************/
/*! exports provided: wrapRangeWithElement, getRanges, getTextNodes, rangesIntersect, createRangeFromNode, setCaretAt, pasteHtmlAtCaret, rangeIntersectsNode, getRangeTextNodes, isNonEmptyTextNode, removeElement, replaceNode, selectText, insertAfter, createWrapperFunction, getAllNodes, wrapRangeText, setSelectionBetweenTwoNodes, setSelectionFlags, getSelectedHTML, saveSelection, restoreSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapRangeWithElement", function() { return wrapRangeWithElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRanges", function() { return getRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextNodes", function() { return getTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesIntersect", function() { return rangesIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRangeFromNode", function() { return createRangeFromNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCaretAt", function() { return setCaretAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pasteHtmlAtCaret", function() { return pasteHtmlAtCaret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeIntersectsNode", function() { return rangeIntersectsNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeTextNodes", function() { return getRangeTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyTextNode", function() { return isNonEmptyTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return replaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectText", function() { return selectText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWrapperFunction", function() { return createWrapperFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllNodes", function() { return getAllNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapRangeText", function() { return wrapRangeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectionBetweenTwoNodes", function() { return setSelectionBetweenTwoNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectionFlags", function() { return setSelectionFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedHTML", function() { return getSelectedHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSelection", function() { return saveSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreSelection", function() { return restoreSelection; });
function wrapRangeWithElement() {
  var ranges = getRanges();
  return ranges.map(function (r) {
    return wrapRangeText(undefined, r);
  }).flat();
}
function getRanges() {
  var ranges = [];
  var sel = window.getSelection();

  for (var i = 0; i < sel.rangeCount; i++) {
    ranges[i] = sel.getRangeAt(i);
  }

  return ranges;
}
function getTextNodes(el) {
  el = el || document.body;
  var doc = el.ownerDocument || document,
      walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, !1),
      textNodes = [],
      node = walker.nextNode();

  while (node) {
    textNodes.push(node);
    node = walker.nextNode();
  }

  return textNodes;
}
function rangesIntersect(rangeA, rangeB) {
  return rangeA.compareBoundaryPoints(Range.END_TO_START, rangeB) === -1 && rangeA.compareBoundaryPoints(Range.START_TO_END, rangeB) === 1;
}
function createRangeFromNode(node) {
  var range = node.ownerDocument.createRange();

  try {
    range.selectNode(node);
  } catch (e) {
    range.selectNodeContents(node);
  }

  return range;
}
function setCaretAt(element, charIndex) {
  var node = element;
  node.focus();
  var textNode = Array.from(node.childNodes).filter(function (child) {
    return child.nodeType === Node.TEXT_NODE;
  });
  var caret = charIndex;
  var range = document.createRange();
  range.setStart(textNode[0], caret);
  range.setEnd(textNode[0], caret);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}
function pasteHtmlAtCaret(html) {
  var sel, range;

  if (window.getSelection) {
    sel = window.getSelection();

    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      var el = document.createElement("div");
      el.innerHTML = html;
      var frag = document.createDocumentFragment(),
          node,
          lastNode;

      while (node = el.firstChild) {
        lastNode = frag.appendChild(node);
      }

      range.insertNode(frag);

      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(!0);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }
}
function rangeIntersectsNode(range, node) {
  if (range.intersectsNode) {
    return range.intersectsNode(node);
  } else {
    return rangesIntersect(range, createRangeFromNode(node));
  }
}
function getRangeTextNodes(range) {
  var container = range.commonAncestorContainer,
      nodes = getTextNodes(container.parentNode || container);
  return nodes.filter(function (node) {
    return rangeIntersectsNode(range, node) && isNonEmptyTextNode(node);
  });
}
function isNonEmptyTextNode(node) {
  return node.textContent.length > 0;
}
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
function replaceNode(replacementNode, node) {
  if (typeof node.parentNode !== "undefined") {
    removeElement(replacementNode);
    node.parentNode.insertBefore(replacementNode, node);
    removeElement(node);
  }
}
function selectText(node) {
  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();

    var _range = document.createRange();

    _range.selectNodeContents(node);

    selection.removeAllRanges();
    selection.addRange(_range);
  }
}
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function createWrapperFunction(wrapperEl, range) {
  var startNode = range.startContainer,
      endNode = range.endContainer,
      startOffset = range.startOffset,
      endOffset = range.endOffset;
  return function (node) {
    var currentRange = document.createRange(),
        currentWrapper = wrapperEl.cloneNode();
    currentRange.selectNodeContents(node);

    if (node === startNode && startNode.nodeType === 3) {
      currentRange.setStart(node, startOffset);
      startNode = currentWrapper;
      startOffset = 0;
    }

    if (node === endNode && endNode.nodeType === 3) {
      currentRange.setEnd(node, endOffset);
      endNode = currentWrapper;
      endOffset = 1;
    }

    currentRange.surroundContents(currentWrapper);
    return currentWrapper;
  };
}
function getAllNodes() {
  var nodes, range;

  if (typeof range === 'undefined') {
    range = window.getSelection().getRangeAt(0);
  }

  if (range.isCollapsed) {
    return [];
  }

  nodes = getRangeTextNodes(range);
  nodes = nodes.map(function (node) {
    if (node !== null) {
      while (node.nodeType === 3) {
        node = node.parentNode;
      }

      return node;
    }

    return null;
  });
  return nodes;
}
function wrapRangeText(wrapperEl, range) {
  var nodes, wrapNode;

  if (typeof range === 'undefined') {
    range = window.getSelection().getRangeAt(0);
  }

  if (range.isCollapsed) {
    return [];
  }

  if (typeof wrapperEl === 'undefined') {
    wrapperEl = 'span';
  }

  if (typeof wrapperEl === 'string') {
    wrapperEl = document.createElement(wrapperEl);
  }

  wrapNode = createWrapperFunction(wrapperEl, range);
  nodes = getRangeTextNodes(range);
  nodes = nodes.map(wrapNode);
  return nodes;
}
function setSelectionBetweenTwoNodes(firstFlag, lastFlag) {
  document.getSelection().setBaseAndExtent(firstFlag, 0, lastFlag, lastFlag.childNodes.length);
  [firstFlag, lastFlag].forEach(function (e) {
    return e.unwrap();
  });
}
function setSelectionFlags(firstElement, LastElement) {
  var firstFlag = document.createElement('text-selection');
  var lastFlag = document.createElement('text-selection');
  firstElement.prepend(firstFlag);
  LastElement.appendChild(lastFlag);
  return {
    firstFlag: firstFlag,
    lastFlag: lastFlag
  };
}
function getSelectedHTML() {
  var range;

  if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.focusNode === null) return;
    range = selection.getRangeAt(0);

    if (range.collapsed) {
      return;
    }

    var content = range.extractContents();
    return {
      content: content,
      range: range
    };
  }
}
function saveSelection() {
  if (window.getSelection) {
    var sel = window.getSelection();

    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }

  return null;
}
function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

/***/ }),

/***/ "./src/StyleIt/services/style.service.js":
/*!***********************************************!*\
  !*** ./src/StyleIt/services/style.service.js ***!
  \***********************************************/
/*! exports provided: getInheirtCss, removeStyle, toggleStyle, setStyles, setStyle, collectStyleFromSelectedElement, normalizeStyle, JsonObjectToStyleString, getStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInheirtCss", function() { return getInheirtCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyle", function() { return removeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleStyle", function() { return toggleStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyles", function() { return setStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStyle", function() { return setStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectStyleFromSelectedElement", function() { return collectStyleFromSelectedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeStyle", function() { return normalizeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonObjectToStyleString", function() { return JsonObjectToStyleString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony import */ var _className_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./className.service */ "./src/StyleIt/services/className.service.js");
/* harmony import */ var _rules_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/rules */ "./src/StyleIt/rules/rules.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.service */ "./src/StyleIt/services/elements.service.js");



function getInheirtCss(fromElement, toElement) {
  var intailStyle = {};
  var currectElement = fromElement;

  while (currectElement && currectElement.ischildOf(toElement.parentElement)) {
    var map = getStyle(currectElement);

    for (var style in map) {
      if (map.hasOwnProperty(style)) {
        var value = map[style];
        if (!intailStyle[style]) intailStyle[style] = value;
      }
    }

    currectElement = currectElement.parentElement;
  }

  return intailStyle;
}
function removeStyle(element, key, value) {
  element.style[key] = element.style[key].replace(value, "");
  Array.from(element.querySelectorAll("[style*='".concat(key, "']"))).forEach(function (el) {
    el.style[key] = el.style[key].replace(value, "");
  });
}
function toggleStyle(element, key, value, isOn) {
  if (isOn) {
    element.style[key] = element.style[key] + " " + value;
  } else {
    element.style[key] = element.style[key].replace(value, "");
  }

  normalizeStyle(element);
  Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(element);
  Array.from(element.querySelectorAll("[style*='".concat(value, "']"))).forEach(function (child) {
    child.style[key] = child.style[key].replace(value, "");
    normalizeStyle(child);
    Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(child);
  });
}
function setStyles(element, jsonStyle) {
  for (var key in jsonStyle) {
    if (jsonStyle.hasOwnProperty(key)) {
      var style = jsonStyle[key];
      element.style[key] = style;
    }
  }
}
function setStyle(element, key, value) {
  element.style[key] = value;

  if (key === "color") {
    Object(_rules_rules__WEBPACK_IMPORTED_MODULE_1__["UseRules"])({
      element: element,
      key: 'color',
      value: value
    });
  }

  Array.from(element.querySelectorAll("[style*='".concat(key, "']"))).forEach(function (el) {
    el.style[key] = null;
    normalizeStyle(el);
  });
}
var collectStyleFromSelectedElement = function (connectecElement) {
  var selectedElement = Object(_elements_service__WEBPACK_IMPORTED_MODULE_2__["getSelectedElement"])();
  return getInheirtCss(selectedElement, connectecElement);
};
function normalizeStyle(element) {
  if (!element) return null;
  var style = element.getAttribute('style');

  if (!style) {
    element.removeAttribute('style');
  } else {
    var collectStyles = getStyle(element);

    var _loop = function (key) {
      if (collectStyles.hasOwnProperty(key)) {
        Array.from(element.querySelectorAll("[style*='".concat(collectStyles[key], "']"))).forEach(function (el) {
          el.style[key] = null;
          normalizeStyle(el);
        });
      }
    };

    for (var key in collectStyles) {
      _loop(key);
    }
  }
}
function JsonObjectToStyleString(styles) {
  var collectStyles = [];

  for (var key in styles) {
    if (styles.hasOwnProperty(key)) {
      var style = styles[key];
      collectStyles.push("".concat(key, ":").concat(style));
    }
  }

  return collectStyles.join(';');
}
function getStyle(el) {
  if (!el || !el.style) return {};
  var styles = {};
  var style = el.getAttribute('style');

  if (style) {
    var collectStyles = style.split(';');

    if (Array.isArray(collectStyles)) {
      collectStyles.forEach(function (style) {
        var keyValue = style.split(':');
        if (keyValue[1] && keyValue[0]) styles[keyValue[0].trim()] = keyValue[1].trim();
      });
    }
  }

  return styles;
}

/***/ }),

/***/ "./src/StyleIt/services/textEditor.service.js":
/*!****************************************************!*\
  !*** ./src/StyleIt/services/textEditor.service.js ***!
  \****************************************************/
/*! exports provided: normalizeElement, removeZeroSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeElement", function() { return normalizeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeZeroSpace", function() { return removeZeroSpace; });
/* harmony import */ var _className_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./className.service */ "./src/StyleIt/services/className.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _utilis_merger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilis/merger */ "./src/StyleIt/utilis/merger.js");



function normalizeElement(el) {
  var recurse = function (element) {
    Array.from(element.children).forEach(function (child) {
      recurse(child);

      _normalize(child);
    });

    var mergeNodesStyles = function (element) {
      var merged = !1;
      Array.from(element.children).forEach(function (element) {
        var wrapper = element;

        while (wrapper !== null) {
          var nextElement = wrapper.nextSibling;
          if (!nextElement) break;
          wrapper = Object(_utilis_merger__WEBPACK_IMPORTED_MODULE_2__["mergeTwoNodes"])(wrapper, nextElement);
          merged = merged || wrapper !== null;
        }
      });
      return merged;
    };

    var mergeNodesContent = function (element) {
      var merged = !1;
      Array.from(element.children).forEach(function (child) {
        var wrapper = child;

        while (wrapper !== null) {
          wrapper = Object(_utilis_merger__WEBPACK_IMPORTED_MODULE_2__["mergeNodeContect"])(wrapper);
          merged = merged || wrapper !== null;
        }
      });
      return merged;
    };

    var mergedContent = !1;

    do {
      _normalize(element);

      mergeNodesStyles(element);
      mergedContent = mergeNodesContent(element);
    } while (mergedContent);
  };

  el.normalize();
  recurse(el);

  function _normalize(element) {
    element.normalize();
    Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(element);
    Object(_style_service__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])(element);

    if (element && element.nodeName === "SPAN" && (!element.textContent.trim() || element.attributes.length === 0)) {
      var unwrapped = element.unwrap();
      unwrapped.normalize();
      return unwrapped.parentElement;
    }
  }
}
function removeZeroSpace(textNodes) {
  if (!Array.isArray(textNodes)) {
    textNodes = [textNodes];
  }

  textNodes.forEach(function (el) {
    if (el.nodeType === Node.TEXT_NODE && el.parentElement && el.parentElement.nodeName !== "TEXT-SELECTION") {
      el.textContent = el.textContent.replace(/\u200B/g, '');
    }
  });
}

/***/ }),

/***/ "./src/StyleIt/utilis/DomUtilis.js":
/*!*****************************************!*\
  !*** ./src/StyleIt/utilis/DomUtilis.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _this = undefined;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomUtilis = function () {
  function DomUtilis() {
    _classCallCheck(this, DomUtilis);
  }

  _createClass(DomUtilis, [{
    key: "isElement",
    value: function isElement(obj) {
      try {
        return obj instanceof HTMLElement;
      } catch (e) {
        return _typeof(obj) === "object" && obj.nodeType === 1 && _typeof(obj.style) === "object" && _typeof(obj.ownerDocument) === "object";
      }
    }
  }, {
    key: "wrap",
    value: function wrap(el, wrapper) {
      var elements = [];

      if (Array.isArray(el)) {
        elements = el;
      } else {
        elements = [el];
      }

      var parents = elements.map(function (e) {
        return e.parentNode;
      });
      var parentsDiff = parents.filter(function (p, _, self) {
        return self[0] !== p;
      });

      if (parentsDiff.length !== 0) {
        return;
      }

      parents[0].insertBefore(wrapper, elements[0]);
      elements.forEach(function (_el) {
        return wrapper.appendChild(_el);
      });
      return !0;
    }
  }]);

  return DomUtilis;
}();

/* harmony default export */ __webpack_exports__["default"] = (new DomUtilis());

Document.prototype.getSelectedElement = function () {
  var e = document.getSelection();

  if (null !== e) {
    var t = e.anchorNode;

    if (null !== t) {
      for (; 3 === t.nodeType;) {
        t = t.parentNode;
      }

      return t;
    }

    return null;
  }
};

Element.prototype.wrap = function (wrapper) {
  if (typeof wrapper === "string") wrapper = document.createElement(wrapper);

  _this.parentNode.insertBefore(wrapper, _this);

  wrapper.appendChild(_this);
  return wrapper;
};

Element.prototype.createSelection = function () {
  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(this);
    range.select();
  } else if (window.getSelection) {
    var selection = window.getSelection();

    var _range = document.createRange();

    _range.selectNodeContents(this);

    selection.removeAllRanges();
    selection.addRange(_range);
  }
};

Element.prototype.ischildOf = function (parent) {
  if (!parent) return !1;
  var node = this.parentNode;

  while (node != null) {
    if (node === parent) {
      return !0;
    }

    node = node.parentNode;
  }

  return !1;
};

Element.prototype.wrap = function (wrapper) {
  if (!this.parentNode) return !1;
  this.parentNode.insertBefore(wrapper, this);
  wrapper.appendChild(this);
  return !0;
};

Element.prototype.insertAfter = function (newNode) {
  this.parentNode.insertBefore(newNode, this.nextSibling);
};

Element.prototype.replaceNode = function (replacementNode) {
  if (this.parentNode) {
    this.parentNode.insertBefore(replacementNode, this);
    this.remove();
    return replacementNode;
  }
};

Element.prototype.unwrap = function () {
  var range = document.createRange();
  range.selectNodeContents(this);
  var extraContents = range.extractContents();
  this.replaceNode(extraContents);
  return extraContents;
};

/***/ }),

/***/ "./src/StyleIt/utilis/merger.js":
/*!**************************************!*\
  !*** ./src/StyleIt/utilis/merger.js ***!
  \**************************************/
/*! exports provided: mergeNodeContect, mergeTwoNodes, mergeCommonValuesObject, mergeCommonArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeNodeContect", function() { return mergeNodeContect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeTwoNodes", function() { return mergeTwoNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCommonValuesObject", function() { return mergeCommonValuesObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCommonArrays", function() { return mergeCommonArrays; });
/* harmony import */ var _DomUtilis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomUtilis */ "./src/StyleIt/utilis/DomUtilis.js");
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _services_className_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/className.service */ "./src/StyleIt/services/className.service.js");
/* harmony import */ var _services_attr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/attr.service */ "./src/StyleIt/services/attr.service.js");
/* harmony import */ var _services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/textEditor.service */ "./src/StyleIt/services/textEditor.service.js");
/* harmony import */ var _app_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_app.config.json */ "./src/StyleIt/_app.config.json");
var _app_config_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../_app.config.json */ "./src/StyleIt/_app.config.json", 1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







var mergeNodeContect = function (node) {
  var _firstChild$classList;

  if (!_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(node)) {
    return null;
  }

  if (node.nodeName !== "SPAN" || node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  var firstChild = node.firstElementChild;

  if (!firstChild) {
    return null;
  }

  if (firstChild.nodeName !== "SPAN" || firstChild.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  if (node.textContent !== firstChild.textContent) {
    return null;
  }

  var _elementProps = {
    style: Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getStyle"])(node),
    classes: Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["getClasses"])(node),
    attrs: Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_3__["getAttributes"])(node)
  };

  for (var style in _elementProps.style) {
    var styleValue = _elementProps.style[style];
    firstChild.style[style] = (firstChild.style[style] + " " + styleValue).trim();
  }

  Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])(firstChild);

  for (var attr in _elementProps.attrs) {
    var attrValue = _elementProps.attrs[attr];
    firstChild.setAttribute(attr, attrValue);
  }

  (_firstChild$classList = firstChild.classList).add.apply(_firstChild$classList, _toConsumableArray(_elementProps.classes));

  Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["normalizeClassName"])(firstChild);
  Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(firstChild);
  if (firstChild.parentElement) firstChild.parentElement.unwrap();
  return firstChild;
};
function mergeTwoNodes(elementOne, elementTwo) {
  if (!_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(elementOne) || !_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(elementTwo)) {
    return null;
  }

  if (elementOne.nodeName !== "SPAN" || elementTwo.nodeName !== "SPAN") {
    return null;
  }

  var _elementsData = [{
    style: Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getStyle"])(elementOne),
    classes: Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["getClasses"])(elementOne),
    attrs: Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_3__["getAttributes"])(elementOne)
  }, {
    style: Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getStyle"])(elementTwo),
    classes: Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["getClasses"])(elementTwo),
    attrs: Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_3__["getAttributes"])(elementTwo)
  }];

  var commoncLasses = function getCommonClasses(classes1, classes2) {
    if (!classes1 || !classes2) return [];

    var c1 = _toConsumableArray(classes1);

    var c2 = _toConsumableArray(classes2);

    return c1.filter(function (c) {
      return c2.includes(c);
    });
  }(_elementsData[0].classes, _elementsData[1].classes);

  var commonStyles = function getCommonStyles(style1, style2) {
    var commmonStyles = {};

    for (var s in style1) {
      if (!style2[s]) continue;
      var style1Values = style1[s];
      var style2Values = style2[s];

      if (style2Values === style1Values) {
        commmonStyles[s] = style2Values;
      }
    }

    return commmonStyles;
  }(_elementsData[0].style, _elementsData[1].style);

  var wrapper = function buildWrappingElement(commonStyles, commoncLasses) {
    var wrapper = document.createElement('span');

    for (var s in commonStyles) {
      wrapper.style[s] = commonStyles[s];
    }

    if (commoncLasses.length > 0) {
      var _wrapper$classList;

      (_wrapper$classList = wrapper.classList).add.apply(_wrapper$classList, _toConsumableArray(commoncLasses));
    }

    if (wrapper.attributes.length === 0) {
      wrapper.unwrap();
      return null;
    }

    return wrapper;
  }(commonStyles, commoncLasses);

  if (!wrapper) {
    return null;
  }

  var clearElementClasses = function (node, commoncLasses) {
    var _node$classList;

    (_node$classList = node.classList).remove.apply(_node$classList, _toConsumableArray(commoncLasses));

    Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["normalizeClassName"])(node);
  };

  var clearElementStyles = function (node, commonStyles) {
    for (var s in commonStyles) {
      node.style[s] = null;
    }
  };

  var elements = [elementOne, elementTwo];
  elements.forEach(function (e) {
    clearElementClasses(e, commoncLasses);
    clearElementStyles(e, commonStyles);
  });
  _DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].wrap(elements, wrapper);

  _toConsumableArray(wrapper.children).forEach(function (c) {
    Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(c);
  });

  return wrapper;
}
function mergeCommonValuesObject(obj1, obj2) {
  var commonValues = {};

  for (var key in obj1) {
    if (obj2[key] && obj2[key] === obj1[key]) {
      commonValues[key] = obj1[key];
    }
  }

  return commonValues;
}
function mergeCommonArrays(arr1, arr2) {
  var mergeArr = [];
  Array.from(arr1).forEach(function (item) {
    if (arr2.findIndex(function (i) {
      return i === item;
    }) > 0) {
      mergeArr.push(item);
    }
  });
  return mergeArr;
}

/***/ }),

/***/ "./src/StyleIt/utilis/splitHTML.js":
/*!*****************************************!*\
  !*** ./src/StyleIt/utilis/splitHTML.js ***!
  \*****************************************/
/*! exports provided: splitHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitHTML", function() { return splitHTML; });
/* harmony import */ var _DomUtilis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomUtilis */ "./src/StyleIt/utilis/DomUtilis.js");
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _services_attr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/attr.service */ "./src/StyleIt/services/attr.service.js");
/* harmony import */ var _services_className_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/className.service */ "./src/StyleIt/services/className.service.js");




function splitHTML(fromElement, toElement) {
  if (!fromElement.ischildOf(toElement)) {
    return null;
  }

  if (!_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(fromElement) || !_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(toElement)) {
    return null;
  }

  var setAttrs = function (fromElement, toElement) {
    var styles = Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getInheirtCss"])(fromElement, toElement);
    var attrs = Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_2__["getInheirtAttributes"])(fromElement, toElement);
    var className = Object(_services_className_service__WEBPACK_IMPORTED_MODULE_3__["getInheirtClassNames"])(fromElement, toElement);
    var template = document.createElement('span');
    template.className = className.join(" ");

    for (var style in styles) {
      var value = styles[style];
      template.style[style] = value;
    }

    for (var attr in attrs) {
      var _value = attrs[attr];
      template.setAttribute(attr, _value);
    }

    return template;
  };

  fromElement.createSelection();
  var centerElement = document.getSelectedElement();
  var centerTemplate = setAttrs(centerElement, toElement);
  centerTemplate.appendChild(fromElement);
  var sel = window.getSelection();
  var range = sel.getRangeAt(0);
  range.setStart(toElement, 0);
  var leftElement = document.getSelectedElement();
  var leftTemplate = setAttrs(leftElement, toElement);
  var leftRange = range.extractContents();
  leftTemplate.appendChild(leftRange);
  range.setEnd(toElement, toElement.childNodes.length);
  var rightElement = document.getSelectedElement();
  var rightTemplate = setAttrs(rightElement, toElement);
  var rightRange = range.extractContents();
  rightTemplate.appendChild(rightRange);
  var split = {
    left: leftTemplate,
    center: centerTemplate,
    right: rightTemplate
  };
  toElement.innerHTML = "";

  for (var el in split) {
    var element = split[el];
    toElement.appendChild(element);
  }

  toElement.unwrap();
  return split;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StyleIt; });
/* harmony import */ var _StyleIt_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleIt/index */ "./src/StyleIt/index.js");
/* harmony import */ var _StyleIt_constants_Modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleIt/constants/Modes */ "./src/StyleIt/constants/Modes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var StyleIt = function StyleIt(target, config) {
  _classCallCheck(this, StyleIt);

  var styleIt = new _StyleIt_index__WEBPACK_IMPORTED_MODULE_0__["default"](target, config);

  if (styleIt) {
    this.ExecCmd = styleIt.execCmd;
    this.ToggleClass = styleIt.ToggleClass;
    this.Save = styleIt.Save;
    this.Load = styleIt.Load;
    this.Destroy = styleIt.Destroy;
    this.Modes = _StyleIt_constants_Modes__WEBPACK_IMPORTED_MODULE_1__["Modes"];
    this.ToggleClass = this.ToggleClass.bind(styleIt);
    this.ExecCmd = this.ExecCmd.bind(styleIt);
    this.Save = this.Save.bind(styleIt);
    this.Load = this.Load.bind(styleIt);
    this.Destroy = this.Destroy.bind(styleIt);
  }
};



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2NvbnN0YW50cy9Nb2Rlcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29uc3RhbnRzL2VsZW1lbnRUeXBlcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3J1bGVzL3J1bGVzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9JbnNwZWN0b3IvSW5zcGVjdG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2F0dHIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2NvcHlQYXN0ZS9jb3B5UGFzdGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvZWxlbWVudHMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvcmFuZ2Uuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvc3R5bGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC91dGlsaXMvRG9tVXRpbGlzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC91dGlsaXMvbWVyZ2VyLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC91dGlsaXMvc3BsaXRIVE1MLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiVGV4dFNlbGVjdGlvbiIsImlubmVySFRNTCIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJDb25uZWN0b3IiLCJlbGVtZW50Iiwib3B0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJEb21VdGlsaXMiLCJpc0VsZW1lbnQiLCJSZW5kZXJJbm5lckhUTUwiLCJwbHVnaW5zIiwidXNlUGx1Z2lucyIsImNvcHlQYXN0ZSIsIkNvcHlQYXN0ZSIsImluc3BlY3RvciIsIklucHNlY3RvciIsIm9uSW5zcGVjdCIsImpzb25Db250ZW50IiwiZWxlbWVudFRvSnNvbiIsInJlbmRlcmVkRWxlbWVudCIsIkpzb25Ub0VsZW1lbnQiLCJlbXB0eUVsZW1lbnQiLCJub2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlbW92ZSIsInRoZW4iLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInBsdWdpbiIsIkRlc3Ryb3kiLCJNb2RlcyIsIlR5cGVzIiwiQ29yZSIsInRhcmdldCIsImNvbmZpZyIsIl9fY29uZmlnIiwidW5kZWZpbmVkIiwibW9kZUhhbmRsZXJzIiwiVG9nZ2xlIiwidiIsInZhbHVlIiwiT25PZmYiLCJvblRvZ2dsZSIsIkV4dGVuZCIsIm9uRXh0ZW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiZXZlbnRzIiwic3R5bGVDaGFuZ2VkIiwiY29ubmVjdGVkRWxlbWVudCIsIkNvbm5lY3QiLCJqc29uIiwic2VsZiIsImNsYXNzTmFtZSIsImlzT04iLCJlbGVtZW50cyIsIndyYXBSYW5nZVdpdGhFbGVtZW50IiwibGVuZ3RoIiwiaXNUb2dnbGVPbiIsImNsb3Nlc3QiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJwYXJlbnRFbGVtZW50IiwiY2xvc2VzdENsYXNzIiwic3BsaXQiLCJzcGxpdEhUTUwiLCJjZW50ZXIiLCJyZW1vdmVDbGFzc05hbWUiLCJzZXRTZWxlY3Rpb25GbGFncyIsImZpcnN0RmxhZyIsImxhc3RGbGFnIiwibm9ybWFsaXplRWxlbWVudCIsInNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyIsIm1vZGUiLCJub3JtYWxpemUiLCJnZXRUZXh0Tm9kZXMiLCJpc1ZhbGlkIiwiRUxFTUVOVFMiLCJyZW1vdmVaZXJvU3BhY2UiLCJUb2dnbGVNb2RlIiwicmVzdWx0IiwiZGlzcGF0Y2hFdmVudCIsImNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQiLCJldmVudCIsInBheWxvYWQiLCJlbGVtZW50VG9TcGxpdCIsInNwbGl0RWxlbWVudHMiLCJ0b2dnbGVTdHlsZSIsInRleHRDb250ZW50IiwidHJpbSIsInMiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzZXRDYXJldEF0Iiwic2V0U3R5bGUiLCJjb250ZW50RWRpdGFibGUiLCJzZWxlY3RlZEVsZW1lbnQiLCJnZXRTZWxlY3RlZEVsZW1lbnQiLCJpc2NoaWxkT2YiLCJVc2VSdWxlcyIsImRhdGEiLCJDb2xvclRleHREZWNvcmF0aW9uUnVsZSIsInRleHREZWNvcmF0aW9uIiwic3BsaXRzIiwibm9ybWFsaXplU3R5bGUiLCJydWxlIiwibGF1bmNoSW5zcGVjdCIsImNvbGxlY3RlZFN0eWxlIiwib25LZXlEb3duIiwiZSIsImtleUNvZGUiLCJjaGlsZHJlbiIsInByZXZlbnREZWZhdWx0Iiwib25DbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0SW5oZWlydEF0dHJpYnV0ZXMiLCJmcm9tRWxlbWVudCIsInRvRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJjdXJyZWN0RWxlbWVudCIsImF0dHJzIiwiaSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGVzIiwiZ2V0QWxsIiwiZ2V0SW5oZWlydENsYXNzTmFtZXMiLCJjbGFzc2VzIiwiX3BhcmVudCIsIm1hcCIsIkFycmF5IiwiZnJvbSIsImZpbmRJbmRleCIsImMiLCJwdXNoIiwiZ2V0Q2xhc3NlcyIsIm5vcm1hbGl6ZUNsYXNzTmFtZSIsInJlbW92ZUVtcHR5Q2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25jYXQiLCJjaGlsZCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJub2RlcyIsInVuaXFlSUQiLCJvblBhc3RlIiwiY2xpcCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwibWFya3VwIiwic3RyaW5nVG9IVE1MIiwic3RyIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImlzTG9jYWxFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInBhc3RlSHRtbEF0Q2FyZXQiLCJvdXRlckhUTUwiLCJwYXN0ZWRFbGVtZW50Iiwic3R5bGUiLCJnZXRTdHlsZSIsImZvdW5kZWRFbCIsImZsYWciLCJwYXN0ZSIsIndpbmRvdyIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJkZWxldGVGcm9tRG9jdW1lbnQiLCJnZXRSYW5nZUF0IiwiaW5zZXJ0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwib25Db3B5IiwicmFuZ2VzIiwiY29sbGVjdFN0eWxlIiwiZ2V0SW5oZWlydENzcyIsInNldFN0eWxlcyIsImNsb25lTm9kZSIsIndlIiwidW53cmFwIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJub2RlTmFtZSIsImpvaW4iLCJzZXREYXRhIiwiYW5jTm9kZSIsImFuY2hvck5vZGUiLCJub2RlVHlwZSIsInBhcmVudE5vZGUiLCJqc29uT2JqZWN0IiwicmVuZGVyQXR0cnMiLCJqc0VsZW1lbnQiLCJKc29uT2JqZWN0VG9TdHlsZVN0cmluZyIsImNyZWF0ZUh0bWxFbGVtZW50IiwidGFnIiwiaXNTaG91bGRSZW5kZXJBdHRycyIsIkEiLCJocmVmIiwiU1BBTiIsIkRJViIsIlAiLCJCUiIsInR5cGUiLCJMZXZlbHMiLCJpc0FycmF5IiwianNDaGlsZCIsImh0bWxFbGVtZW50IiwibGV2ZWwiLCJyZXBsYWNlIiwia2V5cyIsImNoaWxkTm9kZXMiLCJjbiIsImZpbHRlciIsImdldFJhbmdlcyIsInIiLCJ3cmFwUmFuZ2VUZXh0IiwiZmxhdCIsInNlbCIsIm93bmVyRG9jdW1lbnQiLCJ3YWxrZXIiLCJjcmVhdGVUcmVlV2Fsa2VyIiwiTm9kZUZpbHRlciIsIlNIT1dfVEVYVCIsInRleHROb2RlcyIsIm5leHROb2RlIiwicmFuZ2VzSW50ZXJzZWN0IiwicmFuZ2VBIiwicmFuZ2VCIiwiY29tcGFyZUJvdW5kYXJ5UG9pbnRzIiwiUmFuZ2UiLCJFTkRfVE9fU1RBUlQiLCJTVEFSVF9UT19FTkQiLCJjcmVhdGVSYW5nZUZyb21Ob2RlIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGUiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjaGFySW5kZXgiLCJmb2N1cyIsInRleHROb2RlIiwiTm9kZSIsIlRFWFRfTk9ERSIsImNhcmV0Iiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImh0bWwiLCJkZWxldGVDb250ZW50cyIsImZyYWciLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibGFzdE5vZGUiLCJmaXJzdENoaWxkIiwiY2xvbmVSYW5nZSIsInNldFN0YXJ0QWZ0ZXIiLCJjb2xsYXBzZSIsInJhbmdlSW50ZXJzZWN0c05vZGUiLCJpbnRlcnNlY3RzTm9kZSIsImdldFJhbmdlVGV4dE5vZGVzIiwiY29udGFpbmVyIiwiY29tbW9uQW5jZXN0b3JDb250YWluZXIiLCJpc05vbkVtcHR5VGV4dE5vZGUiLCJyZW1vdmVFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInNlbGVjdFRleHQiLCJjcmVhdGVUZXh0UmFuZ2UiLCJtb3ZlVG9FbGVtZW50VGV4dCIsInNlbGVjdCIsImluc2VydEFmdGVyIiwibmV3Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJuZXh0U2libGluZyIsImNyZWF0ZVdyYXBwZXJGdW5jdGlvbiIsIndyYXBwZXJFbCIsInN0YXJ0Tm9kZSIsInN0YXJ0Q29udGFpbmVyIiwiZW5kTm9kZSIsImVuZENvbnRhaW5lciIsInN0YXJ0T2Zmc2V0IiwiZW5kT2Zmc2V0IiwiY3VycmVudFJhbmdlIiwiY3VycmVudFdyYXBwZXIiLCJzdXJyb3VuZENvbnRlbnRzIiwiZ2V0QWxsTm9kZXMiLCJpc0NvbGxhcHNlZCIsIndyYXBOb2RlIiwic2V0QmFzZUFuZEV4dGVudCIsImZpcnN0RWxlbWVudCIsIkxhc3RFbGVtZW50IiwicHJlcGVuZCIsImdldFNlbGVjdGVkSFRNTCIsImZvY3VzTm9kZSIsImNvbGxhcHNlZCIsImNvbnRlbnQiLCJleHRyYWN0Q29udGVudHMiLCJzYXZlU2VsZWN0aW9uIiwicmVzdG9yZVNlbGVjdGlvbiIsImludGFpbFN0eWxlIiwicmVtb3ZlU3R5bGUiLCJpc09uIiwianNvblN0eWxlIiwiY29ubmVjdGVjRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImNvbGxlY3RTdHlsZXMiLCJzdHlsZXMiLCJrZXlWYWx1ZSIsInJlY3Vyc2UiLCJfbm9ybWFsaXplIiwibWVyZ2VOb2Rlc1N0eWxlcyIsIm1lcmdlZCIsIndyYXBwZXIiLCJuZXh0RWxlbWVudCIsIm1lcmdlVHdvTm9kZXMiLCJtZXJnZU5vZGVzQ29udGVudCIsIm1lcmdlTm9kZUNvbnRlY3QiLCJtZXJnZWRDb250ZW50IiwidW53cmFwcGVkIiwib2JqIiwicGFyZW50cyIsInBhcmVudHNEaWZmIiwicCIsIl8iLCJfZWwiLCJEb2N1bWVudCIsInQiLCJ3cmFwIiwiY3JlYXRlU2VsZWN0aW9uIiwicGFyZW50IiwiZXh0cmFDb250ZW50cyIsIkVMRU1FTlRfTk9ERSIsIl9lbGVtZW50UHJvcHMiLCJzdHlsZVZhbHVlIiwiYXR0ciIsImF0dHJWYWx1ZSIsInNldEF0dHJpYnV0ZSIsImVsZW1lbnRPbmUiLCJlbGVtZW50VHdvIiwiX2VsZW1lbnRzRGF0YSIsImNvbW1vbmNMYXNzZXMiLCJnZXRDb21tb25DbGFzc2VzIiwiY2xhc3NlczEiLCJjbGFzc2VzMiIsImMxIiwiYzIiLCJpbmNsdWRlcyIsImNvbW1vblN0eWxlcyIsImdldENvbW1vblN0eWxlcyIsInN0eWxlMSIsInN0eWxlMiIsImNvbW1tb25TdHlsZXMiLCJzdHlsZTFWYWx1ZXMiLCJzdHlsZTJWYWx1ZXMiLCJidWlsZFdyYXBwaW5nRWxlbWVudCIsImNsZWFyRWxlbWVudENsYXNzZXMiLCJjbGVhckVsZW1lbnRTdHlsZXMiLCJtZXJnZUNvbW1vblZhbHVlc09iamVjdCIsIm9iajEiLCJvYmoyIiwiY29tbW9uVmFsdWVzIiwibWVyZ2VDb21tb25BcnJheXMiLCJhcnIxIiwiYXJyMiIsIm1lcmdlQXJyIiwiaXRlbSIsInNldEF0dHJzIiwidGVtcGxhdGUiLCJjZW50ZXJFbGVtZW50IiwiY2VudGVyVGVtcGxhdGUiLCJsZWZ0RWxlbWVudCIsImxlZnRUZW1wbGF0ZSIsImxlZnRSYW5nZSIsInJpZ2h0RWxlbWVudCIsInJpZ2h0VGVtcGxhdGUiLCJyaWdodFJhbmdlIiwibGVmdCIsInJpZ2h0IiwiU3R5bGVJdCIsInN0eWxlSXQiLCJFeGVjQ21kIiwiZXhlY0NtZCIsIlRvZ2dsZUNsYXNzIiwiU2F2ZSIsIkxvYWQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QUFMLEdBQVlKLE9BQU8sQ0FBQ0ksSUFBcEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlMLE9BQU8sQ0FBQ0ssSUFBcEI7QUFDQSxTQUFLM1csT0FBTCxHQUFlc1csT0FBTyxDQUFDdFcsT0FBdkI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLDhEQUFiO0FBRUEsU0FBS3dXLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkcsSUFBakIsQ0FBc0JOLE9BQXRCLENBQW5CO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUssSUFBYixDQUFrQk4sT0FBbEIsQ0FBZjtBQUNBLFNBQUtJLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVFLElBQVYsQ0FBZU4sT0FBZixDQUFaO0FBQ0EsU0FBS0ssSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlTixPQUFmLENBQVo7QUFDQSxTQUFLdFcsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYTRXLElBQWIsQ0FBa0JOLE9BQWxCLENBQWY7QUFDRDtBQUNGLEMiLCJmaWxlIjoic3R5bGVpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjJykuZGVmYXVsdDtcclxuIiwiXHJcbmNsYXNzIFRleHRTZWxlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcclxuICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIiYjODIwMztcIjtcclxuICAgIH1cclxuICB9XHJcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0ZXh0LXNlbGVjdGlvbicsIFRleHRTZWxlY3Rpb24pOyAiLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL3V0aWxpcy9Eb21VdGlsaXNcIjtcclxuaW1wb3J0IENvcHlQYXN0ZSBmcm9tIFwiLi9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2VcIjtcclxuaW1wb3J0IElucHNlY3RvciBmcm9tIFwiLi9zZXJ2aWNlcy9JbnNwZWN0b3IvSW5zcGVjdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZWxlbWVudFRvSnNvbiwgSnNvblRvRWxlbWVudCB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIENvbm5lY3QoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKERvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgLy8gdmFsaWQuLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5SZW5kZXJJbm5lckhUTUwoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gdGhpcy51c2VQbHVnaW5zKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgLy9UT0RPOiBkZXN0b3J5IGV2ZW50cy4uXHJcbiAgICAvL3F1ZXN0aW9uOiBob3cgdG8gdXNlIHRoZSBldmVudHMgPyBcclxuICAgIHVzZVBsdWdpbnMoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvcHlQYXN0ZTogbmV3IENvcHlQYXN0ZShlbGVtZW50KSxcclxuICAgICAgICAgICAgaW5zcGVjdG9yOiBuZXcgSW5wc2VjdG9yKGVsZW1lbnQsIG9wdGlvbnMub25JbnNwZWN0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJlbmRlcklubmVySFRNTChlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlFbGVtZW50ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGpzb25Db250ZW50ID0gZWxlbWVudFRvSnNvbihlbGVtZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSBKc29uVG9FbGVtZW50KGpzb25Db250ZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBlbXB0eUVsZW1lbnQoZWxlbWVudCkudGhlbigoKSA9PiBlbGVtZW50LmlubmVySFRNTCA9IHJlbmRlcmVkRWxlbWVudC5pbm5lckhUTUwpO1xyXG4gICAgfVxyXG4gICAgRGVzdHJveSgpe1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBsdWdpbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1trZXldO1xyXG4gICAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgcGx1Z2luLkRlc3Ryb3koKTsgICBcclxuICAgICAgICAgIH1cclxuICAgICAgfSAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBNb2RlcyA9e1xyXG4gICAgXCJUb2dnbGVcIjpcInRvZ2dsZVwiLFxyXG4gICAgXCJFeHRlbmRcIjpcImV4dGVuZFwiLFxyXG4gICAgXCJUYWdcIjpcIlRhZ1wiXHJcbn0gICAgICAgIiwiZXhwb3J0IGNvbnN0IFR5cGVzID0ge1xyXG4gICAgJyN0ZXh0JzogJyN0ZXh0JyxcclxuICAgICdQJzogJ1AnLFxyXG4gICAgJ1NQQU4nOiAnU1BBTicsXHJcbiAgICAnQSc6ICdBJyxcclxuICAgICdESVYnOidESVYnLFxyXG4gICAgJ0JSJzogJ0JSJyAgXHJcbn0iLCJpbXBvcnQgeyBSYW5nZXIsIHdyYXBSYW5nZVdpdGhFbGVtZW50LCBzZXRTZWxlY3Rpb25GbGFncywgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzLCBzZXRDYXJldEF0LCBnZXRUZXh0Tm9kZXMsIGdldFJhbmdlcyB9IGZyb20gXCIuL3NlcnZpY2VzL3JhbmdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTW9kZXMgfSBmcm9tICcuL2NvbnN0YW50cy9Nb2Rlcyc7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgc2V0U3R5bGUsIHRvZ2dsZVN0eWxlLCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50LCByZW1vdmVaZXJvU3BhY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2N1c3RvbS90ZXh0U2VsZWN0ZWQnO1xyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xyXG5cclxuICAgIC8vICp0YXJnZXQgPT4gY2FuIGJlIElkIG9mIEVsZW1lbnQgdGhhdCBzaG91bGQgY29udGFpbiBFZGl0b3IgaW5zdGFuY2Ugb3IgdGhlIGVsZW1lbnQgaXRzZWxmLi5cclxuICAgIC8vICpjb25maWcgPT4gIGNvbmZpZ3VyYXRpb24gcGFzc2VkIHQgICBvIFRvb2wgY29uc3RydWN0b3JcclxuICAgIC8vVE9ETzogYWRkIHRhcmdldCB2YWxpZGF0aW9ucy4uO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLl9fY29uZmlnID0ge1xyXG4gICAgICAgICAgICBvbkluc3BlY3Q6IHVuZGVmaW5lZFxyXG4gICAgICAgIH07XHJcbiAgIFxyXG4gICAgICAgIHRoaXMuQ29ubmVjdG9yID0gbmV3IENvbm5lY3RvcigpO1xyXG4gICAgICAgIHRoaXMubW9kZUhhbmRsZXJzID0ge1xyXG4gICAgICAgICAgICBbTW9kZXMuVG9nZ2xlXTogKHYsIGtleSwgdmFsdWUsIE9uT2ZmKSA9PiB0aGlzLm9uVG9nZ2xlKHYsIGtleSwgdmFsdWUsIE9uT2ZmKSxcclxuICAgICAgICAgICAgW01vZGVzLkV4dGVuZF06ICh2LCBrZXksIHZhbHVlKSA9PiB0aGlzLm9uRXh0ZW5kKHYsIGtleSwgdmFsdWUpLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyA/IE9iamVjdC5hc3NpZ24odGhpcy5fX2NvbmZpZywgY29uZmlnKSA6IHRoaXMuX19jb25maWc7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlZDogIHRoaXMuY29uZmlnLm9uSW5zcGVjdCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50ID0gdGhpcy5Db25uZWN0b3IuQ29ubmVjdCh0YXJnZXQsIHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgU2F2ZSgpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFRvSnNvbih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgTG9hZChqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIEpzb25Ub0VsZW1lbnQoanNvbiwgdGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIERlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IuRGVzdHJveSgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGYpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzW2tleV07XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAvL3F1ZXN0aW9uIDogd2Ugd2FudCB0byBoYW5kbGUgYW5kIHRvZ2dsZSBhbnkgYXR0cmlidXRlID8gXHJcbiAgICBUb2dnbGVDbGFzcyhjbGFzc05hbWUsIGlzT04pIHtcclxuICAgICAgICAvL2hlcmVcclxuICAgICAgICBpZiAodHlwZW9mIChjbGFzc05hbWUpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNsYXNzTmFtZSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc1RvZ2dsZU9uID0gKHR5cGVvZiAoaXNPTikgPT09IFwiYm9vbGVhblwiKSA/IGlzT04gOiBlbGVtZW50c1swXS5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgaWYgKCFpc1RvZ2dsZU9uKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdENsYXNzID0gZWwucGFyZW50RWxlbWVudC5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IHNwbGl0SFRNTChlbCwgY2xvc2VzdENsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdC5jZW50ZXIucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9UaGlzIGlzIGhvdyBpIG1ha2UgdGhlIHRleHQgc2VsZWN0aW9uLCBpIGRvbnQga25vdyBpZiB0aGlzIGlzIGdvb2Qgd2F5LCBidXQgaXQgd29ya3MuLlxyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gc2V0U2VsZWN0aW9uRmxhZ3MoZWxlbWVudHNbMF0sIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcblxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi5cclxuXHJcbiAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0ga2V5IG9mIGNzcyBcclxuICAgICAgICAqICBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBjc3NcclxuICAgICAgICAqICBAcGFyYW0geyhPYmplY3QgfCBTdHJpbmcpfSBNb2RlcyAtIG1vZGUgZnJvbSBNb2RlcyA9PiBFeHRlbmQgb3IgVG9nZ2xlXHJcbiAgICAgICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLkV4dGVuZCAtIG92ZXJyaWRlIHN0eWxlXHJcbiAgICAgICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLnRvZ2dsZSAtIHRvZ2dsZSBzdHlsZVxyXG4gICAgICAgICogIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIFxyXG4gICAgICAgICovXHJcbiAgICBleGVjQ21kKGtleSwgdmFsdWUsIG1vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgdHh0Tm9kZXMgPSBnZXRUZXh0Tm9kZXModGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgbW9kZSA9IG1vZGUgPyBtb2RlIDogTW9kZXMuRXh0ZW5kO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyA/IG9wdGlvbnMgOiB7fTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChrZXksIHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgLy9UaGlzIGlzIGhvdyBpIG1ha2UgdGhlIHRleHQgc2VsZWN0aW9uLCBpIGRvbnQga25vdyBpZiB0aGlzIGlzIGdvb2Qgd2F5LCBidXQgaXQgd29ya3MuLlxyXG5cclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKHRoaXMuRUxFTUVOVFNbMF0sIHRoaXMuRUxFTUVOVFNbdGhpcy5FTEVNRU5UUy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgcmVtb3ZlWmVyb1NwYWNlKGdldFRleHROb2Rlcyh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgbGV0IFRvZ2dsZU1vZGU7Ly9EZWNsYXJlIHRvZ2dsZSBtb2RlLCBUaGUgZmlyc3QgZWxlbWVudCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgaXMgb24gb3Igb2ZmXHJcblxyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1vZGVIYW5kbGVyc1ttb2RlXShlbGVtZW50LCBrZXksIHZhbHVlLCBUb2dnbGVNb2RlKTtcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IE1vZGVzLlRvZ2dsZSAmJiB0eXBlb2YgKFRvZ2dsZU1vZGUpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIFRvZ2dsZU1vZGUgPSByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgICAgICAvL3VzZSB0aGUgZmlyc3QgYW5kIGxhc3QgZmxhZ3MgdG8gbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24gYW5kIHVud3JhcCB0aGVtLi5cclxuXHJcbiAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc3R5bGVDaGFuZ2VkJywgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIHBheWxvYWQpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ocGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgICBvblRvZ2dsZShlbGVtZW50LCBrZXksIHZhbHVlLCBPbk9mZikge1xyXG4gICAgICAgIC8vIGRldGVjdCBpZiB0aGVyZSBpcyBhbnkgcGFyZW50IHdpdGggc3R5bGUgdG8gc3BsaXQuXHJcbiAgICAgICAgLy9UT0RPOiB1c2UgdGhlIGNhdGNoIGZyb20gb3B0aW9ucyB0byBkZXRlY3QgbW9yZSB0aGFuIG9uZSBzdHlsZSBvciB0YWcgZWxlbWVudC5cclxuICAgICAgICBjb25zdCBlbGVtZW50VG9TcGxpdCA9IGVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0nJHt2YWx1ZX0nXWApO1xyXG4gICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChPbk9mZikgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgT25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy91bmJvbGRcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHNwbGl0IGVsZW1lbnRzLCBpdHMgZXJyb3IhXHJcbiAgICAgICAgICAgIGlmIChzcGxpdEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSwgT25PZmYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuRUxFTUVOVFMubGVuZ3RoID09PSAxICYmICF0aGlzLkVMRU1FTlRTWzBdLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0RWxlbWVudHMuY2VudGVyLmlubmVySFRNTCArPSBcIiYjODIwMztcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRFbGVtZW50cy5jZW50ZXIuYXBwZW5kQ2hpbGQocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzcGxpdEhUTUwgcmV0dXJuIG51bGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoT25PZmYpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIE9uT2ZmID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9ib2xkXHJcbiAgICAgICAgICAgIHRvZ2dsZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUsIE9uT2ZmKTtcclxuICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPbk9mZjtcclxuICAgIH1cclxuICAgIG9uRXh0ZW5kKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50VG9TcGxpdCA9IGVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0nJHtrZXl9J11gKTs7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0RWxlbWVudHMgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRFbGVtZW50cy5jZW50ZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBpc1ZhbGlkKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwbGVhc2UgdXNlIGNvbm5lY3RXaXRoIG1ldGhvZCcpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZEVsZW1lbnQuY29udGVudEVkaXRhYmxlICE9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICYmIChzZWxlY3RlZEVsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkgfHwgc2VsZWN0ZWRFbGVtZW50ID09PSB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBzcGxpdEhUTUwgfSBmcm9tIFwiLi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5cclxuLy9UT0RPOnJldmlld1xyXG4vL3F1ZXN0aW9uOiBzaG91bGQgaSBhZGQgYWxsIHRoZSBydWxlcyBpbiBvbmUgYXJyYXkgb3IgZGlzcGF0Y2ggYnkgY3NzIGtleXMuLlxyXG5leHBvcnQgZnVuY3Rpb24gVXNlUnVsZXMoZGF0YSkge1xyXG4gICAgY29uc3QgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmtleSA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHREZWNvcmF0aW9uID0gZGF0YS5lbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9J3RleHQtZGVjb3JhdGlvbiddYCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0RGVjb3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gc3BsaXRIVE1MKGRhdGEuZWxlbWVudCwgdGV4dERlY29yYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRzLmNlbnRlciwgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsIGAke2RhdGEudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHRleHREZWNvcmF0aW9uLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFJ1bGVzID0gW1xyXG4gICAgICAgIENvbG9yVGV4dERlY29yYXRpb25SdWxlXHJcbiAgICBdXHJcbiAgICBSdWxlcy5mb3JFYWNoKHJ1bGUgPT4gcnVsZShkYXRhKSk7XHJcbn0iLCJcclxuaW1wb3J0IHsgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCB9IGZyb20gJy4uL3N0eWxlLnNlcnZpY2UnO1xyXG5cclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBjYW4gd2UgZXhwb3NlIHRoZSBjb2xsZWN0ZWRTdHlsZSA/IFxyXG4vL3F1ZXN0aW9uOiBzaG91bGQgd2UgdXNlIHRoaXMgPyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTXV0YXRpb25PYnNlcnZlclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnBzZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBvbkluc3BlY3QpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dIElucHNlY3RvciA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgIHRoaXMub25JbnNwZWN0ID0gb25JbnNwZWN0O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICBjb25zdCBsYXVuY2hJbnNwZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZSA9IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLm9uSW5zcGVjdCkgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHRoaXMub25JbnNwZWN0KGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL1RPRE86IHJldmlld1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmIHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aCA8PSAxICYmICF0aGlzLnRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhdW5jaEluc3BlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsYXVuY2hJbnNwZWN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuXHJcbiAgICAgICAgdGhpcy5EZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbi8vY2xhc3MgYW5kIHN0eWxlIG5vdCBpbmNsdWRlcyB5ZXQuLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZWlydEF0dHJpYnV0ZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIHZhciBjdXJyZWN0RWxlbWVudCA9IGZyb21FbGVtZW50O1xyXG4gICAgd2hpbGUgKGN1cnJlY3RFbGVtZW50ICYmIGN1cnJlY3RFbGVtZW50LmlzY2hpbGRPZih0b0VsZW1lbnQucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICB2YXIgYXR0cnMgPSBjdXJyZWN0RWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGF0dHJzW2ldLm5hbWUgICE9PVwiY2xhc3NcIiAmJiBhdHRyc1tpXS5uYW1lICAhPT0gXCJzdHlsZVwiKXtcclxuICAgICAgICAgICAgICAgIGlmKCFhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0gPSBhdHRyc1tpXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICBjdXJyZWN0RWxlbWVudCA9IGN1cnJlY3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXR0cmlidXRlcztcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXMoZWxlbWVudCxnZXRBbGwpe1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIHZhciBhdHRycyA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgIGZvcih2YXIgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYoZ2V0QWxsICB8fCAoIWdldEFsbCAmJiBhdHRyc1tpXS5uYW1lICAhPT1cImNsYXNzXCIgJiYgYXR0cnNbaV0ubmFtZSAgIT09IFwic3R5bGVcIikpe1xyXG4gICAgICAgICAgICBpZighYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0pe1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0gPSBhdHRyc1tpXS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXR0cmlidXRlcztcclxuICB9IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIF9wYXJlbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChfcGFyZW50ICYmIF9wYXJlbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBfcGFyZW50LmNsYXNzTGlzdDtcclxuICAgICAgICBBcnJheS5mcm9tKG1hcCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMuZmluZEluZGV4KGMgPT4gYyA9PT0gbmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbn1cclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGlzIGV4cGVuc2l2ZSB0b28gbXVjaD8gXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCkge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcclxuICAgICAgICByZW1vdmVFbXB0eUNsYXNzKGVsZW1lbnQpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY2xhc3M9JyR7Y30nXWApKS5mb3JFYWNoKG5vZGUgPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5Q2xhc3Mobm9kZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbltjbGFzc10nKSkuY29uY2F0KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChjaGlsZCA9PiBjbGVhcihjaGlsZCkpO1xyXG59XHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBhYm91dCB0aGlzIG5hbWUgPyBcclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApKS5jb25jYXQodGhpcyk7XHJcbm5vZGVzLmZvckVhY2gobm9kZT0+bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xyXG59IiwiXHJcbmltcG9ydCB7IHdyYXBSYW5nZVdpdGhFbGVtZW50LCBzZXRTZWxlY3Rpb25GbGFncywgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzLCBwYXN0ZUh0bWxBdENhcmV0fSBmcm9tICcuLi9yYW5nZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gJy4uL3RleHRFZGl0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MsIHNldFN0eWxlcywgZ2V0U3R5bGUsIG5vcm1hbGl6ZVN0eWxlIH0gZnJvbSAnLi4vc3R5bGUuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IGVsZW1lbnRUb0pzb24gfSBmcm9tICcuLi9lbGVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgc3BsaXRIVE1MIH0gZnJvbSAnLi4vLi4vdXRpbGlzL3NwbGl0SFRNTCc7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbi8vc2hvdWxkIHdlIHVzZSB0aGUgY2xpcGJvYXJkIGFzIHN0cmluZyA/IG9yIHBhc3MgaW4gb3RoZXIgd2F5IGFzIGpzb24gPyBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weVBhc3RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMudW5pcWVJRCA9ICdzdHlsZWl0LWNvcHktcGFzdGUtb24tYWN0aW9uJztcclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSBDb3B5IFBhc3RlID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLm9uUGFzdGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpbmdUb0hUTUwgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvYy5ib2R5O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBjbGlwID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJrdXAgPSBzdHJpbmdUb0hUTUwoY2xpcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTG9jYWxFbGVtZW50ID0gbWFya3VwLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMudW5pcWVJRH1gKTtcclxuICAgICAgICAgICAgaWYgKGlzTG9jYWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXZpZXc6IHNob3VsZCB3ZSBjcmVhdGUgbmV3IG9uIGV2ZXJ5IHBhc3RlID9cclxuICAgICAgICAgICAgICAgIHBhc3RlSHRtbEF0Q2FyZXQoaXNMb2NhbEVsZW1lbnQub3V0ZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXN0ZWRFbGVtZW50ID0gdGhpcy50YXJnZXQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy51bmlxZUlEfWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhc3RlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHBhc3RlZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRlZEVsID0gY2hpbGQucGFyZW50RWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke2tleX0nXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZGVkRWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRIVE1MKGNoaWxkLCBmb3VuZGVkRWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy50YXJnZXQucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy51bmlxZUlEfWApKS5mb3JFYWNoKGZsYWcgPT4gZmxhZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudW5pcWVJRCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXN0ZSA9IChlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5kZWxldGVGcm9tRG9jdW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmluc2VydE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFzdGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Db3B5ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9yZXZpZXc6IHdoYXQgc2hvdWxkIHdlIGNhbiBkbyBoZXJlLi4uIGl0IGFsd2F5cyBhcnJheSBvZiBvbmUgZWxlbWVudC4uXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmKHJhbmdlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdubyBzZWxlY3RlZCBlbGVtZW50cy4uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc2V0IGZsYWdzIHRvIGtlZXAgdGV4dCBzZWxlY3Rpb24uLlxyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSByYW5nZXMubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY2xvbmUgdGhlIG5vZGVzIGFuZCB1bndyYXAgdGhlIHdyYXBwZWQgdGV4dG5vZGVzIG9uIHRoZSBkb20uLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sbGVjdFN0eWxlID0gZ2V0SW5oZWlydENzcyhlbCwgdGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGVzKGVsLCBjb2xsZWN0U3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKHJhbmdlc1swXSwgcmFuZ2VzW3Jhbmdlcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIHJhbmdlcy5mb3JFYWNoKHdlID0+IHdlLnVud3JhcCgpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5yZWR1Y2UoZnVuY3Rpb24oZmlsdGVyZWQsIG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogZmlsdGVyZWQgYnkgdGhlIHZhbGlkIHRhZ3MuLlxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IFwiU1BBTlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKG5vZGUub3V0ZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZDtcclxuICAgICAgICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBub2Rlcy5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMudW5pcWVJRDtcclxuICAgICAgICAgICAgLy8gdGhpcy5zYXZlZEpzb24gPSBlbGVtZW50VG9Kc29uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9odG1sJywgZWxlbWVudC5vdXRlckhUTUwpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMub25QYXN0ZSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIHRoaXMub25Db3B5KTtcclxuICAgIH1cclxuICAgIERlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLm9uUGFzdGUpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvcHknLCB0aGlzLm9uQ29weSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0U3R5bGUsIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gJy4uL2NvbnN0YW50cy9lbGVtZW50VHlwZXMnO1xyXG5pbXBvcnQgTGV2ZWxzIGZyb20gJy4uL2NvbnN0YW50cy9MZXZlbHMuanNvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gIGdldFNlbGVjdGVkRWxlbWVudCgpe1xyXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHZhciBhbmNOb2RlID0gbm9kZS5hbmNob3JOb2RlO1xyXG4gICAgICBpZiAoYW5jTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHdoaWxlIChhbmNOb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICBhbmNOb2RlID0gYW5jTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zdCBlbCA9IChhbmNOb2RlLm5vZGVUeXBlID09PSAzID8gYW5jTm9kZS5wYXJlbnROb2RlIDogbm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIGFuY05vZGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvblRvRWxlbWVudChqc29uT2JqZWN0LCBwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAvL1RPRE86IGNyZWF0ZSBwYXJlbnRlbGVtZW50IGFuZCBqc29ub2JqZWN0IHZhbGlkYXRpb24gICBcclxuICAgIGNvbnN0IHJlbmRlckF0dHJzID0gKGpzRWxlbWVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gWy4uLmpzRWxlbWVudC5jbGFzc0xpc3RdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNFbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoanNFbGVtZW50LnN0eWxlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbGxlY3RlZFN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IG90aGVyIGF0dHJzLi4uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChqc0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlVHlwZSA9IFR5cGVzW2pzRWxlbWVudC50YWddO1xyXG4gICAgICAgIGxldCBlbGVtZW50O1xyXG4gICAgICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzO1xyXG4gICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUeXBlc1tcIiN0ZXh0XCJdOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGpzRWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUeXBlcy5BOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5ocmVmID0ganNFbGVtZW50LmhyZWY7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRhcmdldCA9IGpzRWxlbWVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUeXBlcy5TUEFOOlxyXG4gICAgICAgICAgICBjYXNlIFR5cGVzLkRJVjpcclxuICAgICAgICAgICAgY2FzZSBUeXBlcy5QOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUeXBlcy5CUjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIHRhZyBlbGVtZW50IGlzIG5vdCBvbiB0aGUgdmFsaWRzIGVsZW1lbnRzXCIsIG5vZGVUeXBlKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVuZGVyQXR0cnMoanNFbGVtZW50LCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZighcGFyZW50RWxlbWVudCAmJiBqc29uT2JqZWN0LnR5cGUgPT09IExldmVsc1snMCddKSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzb25PYmplY3QpO1xyXG4gICAgfVxyXG4gICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAganNvbk9iamVjdC5jaGlsZHJlbi5mb3JFYWNoKGpzQ2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICBpZiAoaHRtbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgSnNvblRvRWxlbWVudChqc0NoaWxkLCBodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IGNyZWF0ZSBkb20gZWxlbWVudCBmcm9tIGpzb24nLCBqc0NoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb0pzb24obm9kZSwgbGV2ZWwpIHtcclxuICAgIGlmICh0eXBlb2YgKGxldmVsKSAhPT0gXCJudW1iZXJcIikgbGV2ZWwgPSAwO1xyXG4gICAgY29uc3Qgbm9kZVR5cGUgPSBUeXBlc1tub2RlLm5vZGVOYW1lXTtcclxuXHJcbiAgICBsZXQganNvbiA9IHt9O1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChMZXZlbHNbbGV2ZWxdKSB7XHJcbiAgICAgICAganNvbi50eXBlID0gTGV2ZWxzW2xldmVsXTtcclxuICAgICAgICBsZXZlbCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFR5cGVzW1wiI3RleHRcIl06XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGpzb24udGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywnJyk7XHJcbiAgICAgICAgICAgIC8vcXVlc3Rpb246IHJlcGxhY2UgXFxuID9cclxuICAgICAgICAgICAgaWYoIWpzb24udGV4dENvbnRlbnQudHJpbSgpKSBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVHlwZXMuQTpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi5ocmVmID0gbm9kZS5ocmVmO1xyXG4gICAgICAgICAgICBqc29uLnRhcmdldCA9IG5vZGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFR5cGVzLkRJVjpcclxuICAgICAgICBjYXNlIFR5cGVzLlNQQU46XHJcbiAgICAgICAgY2FzZSBUeXBlcy5CUjpcclxuICAgICAgICBjYXNlIFR5cGVzLlA6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyB0YWcgZWxlbWVudCBpcyBub3Qgb24gdGhlIHZhbGlkcyBlbGVtZW50c1wiLCBub2RlLm5vZGVOYW1lKVxyXG4gICAgICAgICAgICAvL1RPRE86IHNob3VsZCB3ZSB1bndyYXAgdGhpcyBub2RlID8gXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYoIWlzVmFsaWQpIHJldHVybiBudWxsO1xyXG4gICAgLy9UT0RPOiBnZXQgYXR0cnMgXHJcbiAgICBjb25zdCBzdHlsZSA9IGdldFN0eWxlKG5vZGUpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHN0eWxlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAganNvbi5zdHlsZSA9IHN0eWxlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0ICYmIG5vZGUuY2xhc3NMaXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAganNvbi5jbGFzc0xpc3QgPSBbLi4ubm9kZS5jbGFzc0xpc3RdO1xyXG5cclxuICAgIGlmIChub2RlLmNoaWxkTm9kZXMgJiYgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAganNvbi5jaGlsZHJlbiA9IFsuLi5ub2RlLmNoaWxkTm9kZXNdLm1hcCgoY24pID0+IGVsZW1lbnRUb0pzb24oY24sIGxldmVsKSkuZmlsdGVyKHY9PnYpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcblxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpIHtcclxuICBjb25zdCByYW5nZXMgPSBnZXRSYW5nZXMoKTtcclxuICByZXR1cm4gcmFuZ2VzLm1hcChyID0+IHtcclxuICAgIHJldHVybiB3cmFwUmFuZ2VUZXh0KHVuZGVmaW5lZCwgcik7XHJcbiAgfSkuZmxhdCgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZXMoKSB7XHJcbiAgbGV0IHJhbmdlcyA9IFtdO1xyXG5cclxuICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsLnJhbmdlQ291bnQ7IGkrKykge1xyXG4gICAgcmFuZ2VzW2ldID0gc2VsLmdldFJhbmdlQXQoaSk7XHJcbiAgfVxyXG4gIHJldHVybiByYW5nZXM7XHJcbn1cclxuLy8gcmV0dXJuIGFsbCB0ZXh0IG5vZGVzIHRoYXQgYXJlIGNvbnRhaW5lZCB3aXRoaW4gYGVsYFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dE5vZGVzKGVsKSB7XHJcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XHJcblxyXG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50LFxyXG4gICAgd2Fsa2VyID0gZG9jLmNyZWF0ZVRyZWVXYWxrZXIoZWwsIE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSksXHJcbiAgICB0ZXh0Tm9kZXMgPSBbXSxcclxuICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcclxuXHJcbiAgd2hpbGUgKG5vZGUpIHtcclxuICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gIH1cclxuICByZXR1cm4gdGV4dE5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlc0ludGVyc2VjdChyYW5nZUEsIHJhbmdlQikge1xyXG4gIHJldHVybiByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19TVEFSVCwgcmFuZ2VCKSA9PT0gLTEgJiZcclxuICAgIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuU1RBUlRfVE9fRU5ELCByYW5nZUIpID09PSAxXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkge1xyXG4gIHZhciByYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgdHJ5IHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSlcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENhcmV0QXQoZWxlbWVudCwgY2hhckluZGV4KSB7XHJcbiAgdmFyIG5vZGUgPSBlbGVtZW50O1xyXG4gIG5vZGUuZm9jdXMoKTtcclxuICB2YXIgdGV4dE5vZGUgPSBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSk7XHJcbiAgdmFyIGNhcmV0ID0gY2hhckluZGV4O1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGVbMF0sIGNhcmV0KTtcclxuICByYW5nZS5zZXRFbmQodGV4dE5vZGVbMF0sIGNhcmV0KTtcclxuICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXN0ZUh0bWxBdENhcmV0KGh0bWwpIHtcclxuICB2YXIgc2VsLCByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgLy8gSUU5IGFuZCBub24tSUVcclxuICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xyXG5cclxuICAgICAgLy8gUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgd291bGQgYmUgdXNlZnVsIGhlcmUgYnV0IGlzXHJcbiAgICAgIC8vIG9ubHkgcmVsYXRpdmVseSByZWNlbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cclxuICAgICAgLy8gc29tZSBicm93c2VycyAoSUU5LCBmb3Igb25lKVxyXG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbm9kZSwgbGFzdE5vZGU7XHJcbiAgICAgIHdoaWxlICgobm9kZSA9IGVsLmZpcnN0Q2hpbGQpKSB7XHJcbiAgICAgICAgbGFzdE5vZGUgPSBmcmFnLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJhbmdlLmluc2VydE5vZGUoZnJhZyk7XHJcblxyXG4gICAgICAvLyBQcmVzZXJ2ZSB0aGUgc2VsZWN0aW9uXHJcbiAgICAgIGlmIChsYXN0Tm9kZSkge1xyXG4gICAgICAgIHJhbmdlID0gcmFuZ2UuY2xvbmVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0QWZ0ZXIobGFzdE5vZGUpO1xyXG4gICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUludGVyc2VjdHNOb2RlKHJhbmdlLCBub2RlKSB7XHJcbiAgaWYgKHJhbmdlLmludGVyc2VjdHNOb2RlKSB7XHJcbiAgICByZXR1cm4gcmFuZ2UuaW50ZXJzZWN0c05vZGUobm9kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJhbmdlc0ludGVyc2VjdChyYW5nZSwgY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSlcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKSB7XHJcbiAgdmFyIGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxyXG4gICAgbm9kZXMgPSBnZXRUZXh0Tm9kZXMoY29udGFpbmVyLnBhcmVudE5vZGUgfHwgY29udGFpbmVyKVxyXG5cclxuICByZXR1cm4gbm9kZXMuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICByZXR1cm4gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkgJiYgaXNOb25FbXB0eVRleHROb2RlKG5vZGUpXHJcbiAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNOb25FbXB0eVRleHROb2RlKG5vZGUpIHtcclxuICByZXR1cm4gbm9kZS50ZXh0Q29udGVudC5sZW5ndGggPiAwXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcclxuICBpZiAoZWwucGFyZW50Tm9kZSkge1xyXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSkge1xyXG4gIGlmICh0eXBlb2Ygbm9kZS5wYXJlbnROb2RlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZW1vdmVFbGVtZW50KHJlcGxhY2VtZW50Tm9kZSk7XHJcbiAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSk7XHJcbiAgICByZW1vdmVFbGVtZW50KG5vZGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0VGV4dChub2RlKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChub2RlKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IHNlbGVjdCB0ZXh0IGluIG5vZGU6IFVuc3VwcG9ydGVkIGJyb3dzZXIuXCIpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xyXG4gIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXJGdW5jdGlvbih3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgdmFyIHN0YXJ0Tm9kZSA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLFxyXG4gICAgZW5kTm9kZSA9IHJhbmdlLmVuZENvbnRhaW5lcixcclxuICAgIHN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQsXHJcbiAgICBlbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXRcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBOb2RlKG5vZGUpIHtcclxuICAgIHZhciBjdXJyZW50UmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICBjdXJyZW50V3JhcHBlciA9IHdyYXBwZXJFbC5jbG9uZU5vZGUoKVxyXG5cclxuICAgIGN1cnJlbnRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICBpZiAobm9kZSA9PT0gc3RhcnROb2RlICYmIHN0YXJ0Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0U3RhcnQobm9kZSwgc3RhcnRPZmZzZXQpXHJcbiAgICAgIHN0YXJ0Tm9kZSA9IGN1cnJlbnRXcmFwcGVyXHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUgPT09IGVuZE5vZGUgJiYgZW5kTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0RW5kKG5vZGUsIGVuZE9mZnNldClcclxuICAgICAgZW5kTm9kZSA9IGN1cnJlbnRXcmFwcGVyO1xyXG4gICAgICBlbmRPZmZzZXQgPSAxXHJcbiAgICB9XHJcbiAgICBjdXJyZW50UmFuZ2Uuc3Vycm91bmRDb250ZW50cyhjdXJyZW50V3JhcHBlcikgICAgXHJcbiAgICByZXR1cm4gY3VycmVudFdyYXBwZXJcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE5vZGVzKCkge1xyXG4gIHZhciBub2RlcywgcmFuZ2U7XHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VUZXh0KHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICBpZiAodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICB9XHJcblxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3JhcHBlckVsID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGFzc3VtZSBpdCdzIGEgdGFnbmFtZVxyXG4gICAgd3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gIH1cclxuXHJcbiAgd3JhcE5vZGUgPSBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuICBcclxuICBub2RlcyA9IG5vZGVzLm1hcCh3cmFwTm9kZSk7XHJcbiAgcmV0dXJuIG5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKSB7XHJcbiAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuc2V0QmFzZUFuZEV4dGVudChmaXJzdEZsYWcsIDAsIGxhc3RGbGFnLCBsYXN0RmxhZy5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgW2ZpcnN0RmxhZywgbGFzdEZsYWddLmZvckVhY2goZSA9PiBlLnVud3JhcCgpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uRmxhZ3MoZmlyc3RFbGVtZW50LCBMYXN0RWxlbWVudCkge1xyXG4gIGNvbnN0IGZpcnN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgY29uc3QgbGFzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGZpcnN0RWxlbWVudC5wcmVwZW5kKGZpcnN0RmxhZyk7IC8vU2V0IGZsYWcgdGhlIGZpcnN0XHJcbiAgTGFzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFzdEZsYWcpOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICByZXR1cm4geyBmaXJzdEZsYWcsIGxhc3RGbGFnIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkSFRNTCgpIHtcclxuICB2YXIgcmFuZ2U7XHJcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIGlmIChyYW5nZS5jb2xsYXBzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRlbnQgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIHJhbmdlOiByYW5nZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNlbGVjdGlvbigpIHtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICByZXR1cm4gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVNlbGVjdGlvbihyYW5nZSkge1xyXG4gIGlmIChyYW5nZSkge1xyXG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgcmFuZ2Uuc2VsZWN0KSB7XHJcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZVJ1bGVzIH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzXCI7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBpbnRhaWxTdHlsZSA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBnZXRTdHlsZShjdXJyZWN0RWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwW3N0eWxlXTtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbiAgY291bGQgYmUgdHdpY2UgbGlrZSB1bmRlcmxpbmUgYW5kIHN0cmlrZSB0aGVyb3VnaC4uIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRhaWxTdHlsZVtzdHlsZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW50YWlsU3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGludGFpbFN0eWxlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IGVsLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9KVxyXG59XHJcbi8vVE9HR0xFXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBpc09uKSB7XHJcbiAgICBpZiAoaXNPbikge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7dmFsdWV9J11gKSkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGVba2V5XSA9IGNoaWxkLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoY2hpbGQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShjaGlsZCk7XHJcbiAgICB9KVxyXG59XHJcbi8vRVhURU5EXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBqc29uU3R5bGUpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25TdHlsZSkge1xyXG4gICAgICAgIGlmIChqc29uU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGpzb25TdHlsZVtrZXldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9UT0dHTEVcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICBpZihrZXkgPT09IFwiY29sb3JcIil7XHJcbiAgICAgICAgVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6J2NvbG9yJyx2YWx1ZTp2YWx1ZX0pO1xyXG4gICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgIH0pO1xyXG4gICAgLy9leHBlcmltZW50YWw6IHN0eWxlIHRoZSB0ZXh0IGRlY29yYXRpb25zIHdpdGggY29sb3IuLlxyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgLy8gVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6a2V5LHZhbHVlOnZhbHVlfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgPSAoY29ubmVjdGVjRWxlbWVudCkgPT57ICAgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gZ2V0SW5oZWlydENzcyhzZWxlY3RlZEVsZW1lbnQsY29ubmVjdGVjRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShlbGVtZW50KSB7XHJcbiAgICBpZighZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0U3R5bGVzID0gZ2V0U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdFN0eWxlcykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtjb2xsZWN0U3R5bGVzW2tleV19J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKHN0eWxlcykge1xyXG4gICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLnB1c2goYCR7a2V5fToke3N0eWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0U3R5bGVzLmpvaW4oJzsnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcclxuICAgIGlmICghZWwgfHwgIWVsLnN0eWxlKSByZXR1cm4ge307XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBsZXQgc3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsZXQgY29sbGVjdFN0eWxlcyA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdFN0eWxlcykpIHtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVbMV0gJiYga2V5VmFsdWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleVZhbHVlWzBdLnRyaW0oKV0gPSBrZXlWYWx1ZVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZXM7XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWVyZ2VOb2RlQ29udGVjdCwgbWVyZ2VUd29Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXMvbWVyZ2VyXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBub3JtYWxpemVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVFbGVtZW50KGVsKSB7XHJcbiAgICBjb25zdCByZWN1cnNlID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJlY3Vyc2UoY2hpbGQpO1xyXG4gICAgICAgICAgICBfbm9ybWFsaXplKGNoaWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNTdHlsZXMgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSB3cmFwcGVyLm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZVR3b05vZGVzKHdyYXBwZXIsIG5leHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNDb250ZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlTm9kZUNvbnRlY3Qod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VkIHx8IHdyYXBwZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZXJnZWRTdHlsZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWVyZ2VkQ29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgX25vcm1hbGl6ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgbWVyZ2VkU3R5bGVzID0gbWVyZ2VOb2Rlc1N0eWxlcyhlbGVtZW50KTtcclxuICAgICAgICAgICAgbWVyZ2VkQ29udGVudCA9IG1lcmdlTm9kZXNDb250ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIH0gd2hpbGUgKG1lcmdlZENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWwubm9ybWFsaXplKCk7XHJcbiAgICByZWN1cnNlKGVsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfbm9ybWFsaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShlbGVtZW50KTtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShlbGVtZW50KTtcclxuICAgICAgICAvL1RPRE86IG5vcm1hbGl6ciBhdHRyaWJ1dGVzIChubzpzdHlsZSxjbGFzc05hbWUpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIgJiYgKCFlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCB1bndyYXBwZWQgPSBlbGVtZW50LnVud3JhcCgpO1xyXG4gICAgICAgICAgICB1bndyYXBwZWQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogY2hlY2sgdGhlIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHVud3JhcHBlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0FycmF5fSB0ZXh0Tm9kZXMgLSB0ZXh0bm9kZSB0byByZW1vdmUgdGhlIHplcm8gc3BhY2UgbGlrZSA6IHUyMDBCXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlWmVyb1NwYWNlKHRleHROb2Rlcykge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRleHROb2RlcykpIHtcclxuICAgICAgICB0ZXh0Tm9kZXMgPSBbdGV4dE5vZGVzXTtcclxuICAgIH1cclxuICAgIHRleHROb2Rlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBpZiAoZWwubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFICYmIGVsLnBhcmVudEVsZW1lbnQgJiYgZWwucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJURVhULVNFTEVDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQucmVwbGFjZSgvXFx1MjAwQi9nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4iLCJjbGFzcyBEb21VdGlsaXMge1xyXG5cclxuXHJcbiAgaXNFbGVtZW50KG9iaikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgIChvYmoubm9kZVR5cGUgPT09IDEpICYmICh0eXBlb2Ygb2JqLnN0eWxlID09PSBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgICh0eXBlb2Ygb2JqLm93bmVyRG9jdW1lbnQgPT09IFwib2JqZWN0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB3cmFwKGVsLCB3cmFwcGVyKSB7XHJcbiAgICAvL2VsIHNob3VsZCBiZSBhcnJheVxyXG4gICAgbGV0IGVsZW1lbnRzID0gW107XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcclxuICAgICAgZWxlbWVudHMgPSBlbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnRzID0gW2VsXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXJlbnRzID0gZWxlbWVudHMubWFwKGUgPT4gZS5wYXJlbnROb2RlKTtcclxuICAgIHZhciBwYXJlbnRzRGlmZiA9IHBhcmVudHMuZmlsdGVyKChwLCBfLCBzZWxmKSA9PiB7IHJldHVybiBzZWxmWzBdICE9PSBwIH0pO1xyXG4gICAgaWYgKHBhcmVudHNEaWZmLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgW3dyYXBdIGZvdW5kICR7cGFyZW50c0RpZmYubGVuZ3RofSBkaWZmZXJlbnQgcGFyZW50cyDwn5iFYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBhcmVudHNbMF0uaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnRzWzBdKVxyXG4gICAgZWxlbWVudHMuZm9yRWFjaChfZWwgPT4gd3JhcHBlci5hcHBlbmRDaGlsZChfZWwpKVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRG9tVXRpbGlzKCk7IFxyXG5cclxuRG9jdW1lbnQucHJvdG90eXBlLmdldFNlbGVjdGVkRWxlbWVudD1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmdldFNlbGVjdGlvbigpO2lmKG51bGwhPT1lKXt2YXIgdD1lLmFuY2hvck5vZGU7aWYobnVsbCE9PXQpe2Zvcig7Mz09PXQubm9kZVR5cGU7KXQ9dC5wYXJlbnROb2RlO3JldHVybiB0fXJldHVybiBudWxsfX1cclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9ICggd3JhcHBlcikgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd3JhcHBlciA9PT0gXCJzdHJpbmdcIikgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlcik7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gIHJldHVybiB3cmFwcGVyO1xyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgcmFuZ2UubW92ZVRvRWxlbWVudFRleHQodGhpcyk7XHJcbiAgICByYW5nZS5zZWxlY3QoKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzKTtcclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgfSBcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5pc2NoaWxkT2YgPSBmdW5jdGlvbihwYXJlbnQpIHtcclxuICBpZiAoIXBhcmVudCkgcmV0dXJuIGZhbHNlO1xyXG4gIGxldCBub2RlID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gIHdoaWxlIChub2RlICE9IG51bGwpIHtcclxuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uKHdyYXBwZXIpIHtcclxuICBpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIGZhbHNlO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlKSB7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlTm9kZSA9IGZ1bmN0aW9uKHJlcGxhY2VtZW50Tm9kZSkge1xyXG4gIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCB0aGlzKVxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XHJcbiAgfVxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcylcclxuICB2YXIgZXh0cmFDb250ZW50cyA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gIHRoaXMucmVwbGFjZU5vZGUoZXh0cmFDb250ZW50cylcclxuICByZXR1cm4gZXh0cmFDb250ZW50cztcclxufVxyXG4iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldENsYXNzZXMsIG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uL19hcHAuY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogICogUmV0dXJucyB0aGUgbmV3IG1lcmdlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBtZXJnZSB3aXRoIGhpcyBmaXJzdCBjaGlsZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlTm9kZUNvbnRlY3QgPSBub2RlID0+IHtcclxuXHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQobm9kZSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBub2RlIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENoaWxkID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlmICghZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdCBjaGlsZCBub3QgZm91bmQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChmaXJzdENoaWxkLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdENoaWxkIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnRleHRDb250ZW50ICE9PSBmaXJzdENoaWxkLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIHRleHQgY29udGVudCBpcyBkaWZmZXJlbnQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50UHJvcHMgPSB7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKG5vZGUpLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMobm9kZSksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMobm9kZSlcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gX2VsZW1lbnRQcm9wcy5zdHlsZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBfZWxlbWVudFByb3BzLnN0eWxlW3N0eWxlXTtcclxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSA9IChmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSArIFwiIFwiICsgc3R5bGVWYWx1ZSkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIF9lbGVtZW50UHJvcHMuYXR0cnMpIHtcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBfZWxlbWVudFByb3BzLmF0dHJzW2F0dHJdO1xyXG4gICAgICAgIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmaXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoLi4uX2VsZW1lbnRQcm9wcy5jbGFzc2VzKTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShmaXJzdENoaWxkKTtcclxuICAgIG5vcm1hbGl6ZUVsZW1lbnQoZmlyc3RDaGlsZCk7XHJcbiAgICBpZihmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQpXHJcbiAgICBmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTm9kZXMoZWxlbWVudE9uZSwgZWxlbWVudFR3bykge1xyXG4gICAgY29uc29sZS5sb2coJ1ttZXJnZVR3b05vZGVzXSBTVEFSVCcpO1xyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRPbmUpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRUd28pKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudE9uZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZWxlbWVudFR3by5ub2RlTmFtZSAhPT0gXCJTUEFOXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50c0RhdGEgPSBbe1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50T25lKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRPbmUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRPbmUpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50VHdvKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRUd28pLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRUd28pXHJcbiAgICB9XVxyXG4gICAgY29uc3QgZ2V0Q29tbW9uQ2xhc3NlcyA9IChjbGFzc2VzMSwgY2xhc3NlczIpID0+IHtcclxuICAgICAgICBpZiAoIWNsYXNzZXMxIHx8ICFjbGFzc2VzMilcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGNvbnN0IGMxID0gWy4uLmNsYXNzZXMxXTtcclxuICAgICAgICBjb25zdCBjMiA9IFsuLi5jbGFzc2VzMl07XHJcbiAgICAgICAgcmV0dXJuIGMxLmZpbHRlcihjID0+IGMyLmluY2x1ZGVzKGMpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvbW1vblN0eWxlcyA9IChzdHlsZTEsIHN0eWxlMikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1tb25TdHlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gc3R5bGUxKSB7XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUyW3NdKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTFWYWx1ZXMgPSBzdHlsZTFbc107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlMlZhbHVlcyA9IHN0eWxlMltzXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlMlZhbHVlcyA9PT0gc3R5bGUxVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tbW9uU3R5bGVzW3NdID0gc3R5bGUyVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21tbW9uU3R5bGVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbW1vbmNMYXNzZXMgPSBnZXRDb21tb25DbGFzc2VzKF9lbGVtZW50c0RhdGFbMF0uY2xhc3NlcywgX2VsZW1lbnRzRGF0YVsxXS5jbGFzc2VzKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb21tb25DbGFzc3NlcycsY29tbW9uY0xhc3NlcyxlbGVtZW50T25lLGVsZW1lbnRUd28sX2VsZW1lbnRzRGF0YSlcclxuXHJcbiAgICBjb25zdCBjb21tb25TdHlsZXMgPSBnZXRDb21tb25TdHlsZXMoX2VsZW1lbnRzRGF0YVswXS5zdHlsZSwgX2VsZW1lbnRzRGF0YVsxXS5zdHlsZSk7XHJcbiAgICBjb25zdCBidWlsZFdyYXBwaW5nRWxlbWVudCA9IChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdHlsZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlW3NdID0gY29tbW9uU3R5bGVzW3NdO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGNsYXNzZXNcclxuICAgICAgICBpZiAoY29tbW9uY0xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdyYXBwZXIuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci51bndyYXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGJ1aWxkV3JhcHBpbmdFbGVtZW50KGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCd3cmFwcGVyIGlzIG51bGwnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudENsYXNzZXMgPSAobm9kZSwgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUobm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRTdHlsZXMgPSAobm9kZSwgY29tbW9uU3R5bGVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgbm9kZS5zdHlsZVtzXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtlbGVtZW50T25lLCBlbGVtZW50VHdvXTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50Q2xhc3NlcyhlLCBjb21tb25jTGFzc2VzKTtcclxuICAgICAgICBjbGVhckVsZW1lbnRTdHlsZXMoZSwgY29tbW9uU3R5bGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgRG9tVXRpbGlzLndyYXAoZWxlbWVudHMsIHdyYXBwZXIpO1xyXG4gICAgWy4uLndyYXBwZXIuY2hpbGRyZW5dLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudChjKVxyXG4gICAgfSlcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vblZhbHVlc09iamVjdChvYmoxLCBvYmoyKSB7XHJcbiAgICBsZXQgY29tbW9uVmFsdWVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcbiAgICAgICAgaWYgKG9iajJba2V5XSAmJiBvYmoyW2tleV0gPT09IG9iajFba2V5XSkge1xyXG4gICAgICAgICAgICBjb21tb25WYWx1ZXNba2V5XSA9IG9iajFba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21tb25WYWx1ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vbkFycmF5cyhhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBtZXJnZUFyciA9IFtdO1xyXG4gICAgQXJyYXkuZnJvbShhcnIxKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChhcnIyLmZpbmRJbmRleChpID0+IGkgPT09IGl0ZW0pID4gMCkge1xyXG4gICAgICAgICAgICBtZXJnZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWVyZ2VBcnI7XHJcbn0iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENsYXNzTmFtZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRIVE1MKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIWZyb21FbGVtZW50LmlzY2hpbGRPZih0b0VsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZnJvbUVsZW1lbnQgbXVzdCBiZSBjaGlsZCBvZiB0b0VsZW1lbnQnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGZyb21FbGVtZW50KSB8fCAhRG9tVXRpbGlzLmlzRWxlbWVudCh0b0VsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZnJvbUVsZW1lbnQgJiYgdG9FbGVtZW50IG11c3QgYmUgZG9tIGVsZW1lbnRzLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEF0dHJzID0gKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gZ2V0SW5oZWlydEF0dHJpYnV0ZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0SW5oZWlydENsYXNzTmFtZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW3N0eWxlXTtcclxuICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2F0dHJdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBmcm9tRWxlbWVudC5jcmVhdGVTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IGNlbnRlclRlbXBsYXRlID0gc2V0QXR0cnMoY2VudGVyRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIC8vY2VudGVyXHJcbiAgICBjZW50ZXJUZW1wbGF0ZS5hcHBlbmRDaGlsZChmcm9tRWxlbWVudCk7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAvL2xlZnRcclxuICAgIHJhbmdlLnNldFN0YXJ0KHRvRWxlbWVudCwgMCk7XHJcbiAgICBjb25zdCBsZWZ0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgbGVmdFRlbXBsYXRlID0gc2V0QXR0cnMobGVmdEVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICB2YXIgbGVmdFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICBsZWZ0VGVtcGxhdGUuYXBwZW5kQ2hpbGQobGVmdFJhbmdlKTtcclxuICAgIC8vcmlnaHRcclxuICAgIHJhbmdlLnNldEVuZCh0b0VsZW1lbnQsIHRvRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICBjb25zdCByaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHJpZ2h0VGVtcGxhdGUgPSBzZXRBdHRycyhyaWdodEVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICB2YXIgcmlnaHRSYW5nZSA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmlnaHRUZW1wbGF0ZS5hcHBlbmRDaGlsZChyaWdodFJhbmdlKTtcclxuICAgIGNvbnN0IHNwbGl0ID0ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnRUZW1wbGF0ZSxcclxuICAgICAgICBjZW50ZXI6IGNlbnRlclRlbXBsYXRlLFxyXG4gICAgICAgIHJpZ2h0OiByaWdodFRlbXBsYXRlXHJcbiAgICB9XHJcbiAgICB0b0VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgZWwgaW4gc3BsaXQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3BsaXRbZWxdO1xyXG4gICAgICAgIHRvRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC51bndyYXAoKTtcclxuICAgIHJldHVybiBzcGxpdDtcclxuXHJcbn0iLCJpbXBvcnQgQ29yZSBmcm9tICcuL1N0eWxlSXQvaW5kZXgnO1xyXG5pbXBvcnQgeyBNb2RlcyB9IGZyb20gJy4vU3R5bGVJdC9jb25zdGFudHMvTW9kZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVJdCB7XHJcbiAgLy9leHBvc2Ugb25seSB0aGUgcmVsZXZhbnQgbWV0aG9kcy4uXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgIC8vVE9ETzogdmFsaWRhdGUgdGFyZ2V0ICYgY29uZmlnLi5cclxuICAgIGNvbnN0IHN0eWxlSXQgPSBuZXcgQ29yZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICBpZiAoc3R5bGVJdCkgeyAgXHJcbiAgICAgIHRoaXMuRXhlY0NtZCA9IHN0eWxlSXQuZXhlY0NtZDtcclxuICAgICAgdGhpcy5Ub2dnbGVDbGFzcyA9IHN0eWxlSXQuVG9nZ2xlQ2xhc3M7XHJcbiAgICAgIHRoaXMuU2F2ZSA9IHN0eWxlSXQuU2F2ZTtcclxuICAgICAgdGhpcy5Mb2FkID0gc3R5bGVJdC5Mb2FkO1xyXG4gICAgICB0aGlzLkRlc3Ryb3kgPSBzdHlsZUl0LkRlc3Ryb3k7XHJcbiAgICAgIHRoaXMuTW9kZXMgPSBNb2RlcztcclxuICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgdGhpcy5Ub2dnbGVDbGFzcyA9IHRoaXMuVG9nZ2xlQ2xhc3MuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5FeGVjQ21kID0gdGhpcy5FeGVjQ21kLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuU2F2ZSA9IHRoaXMuU2F2ZS5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLkxvYWQgPSB0aGlzLkxvYWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5EZXN0cm95ID0gdGhpcy5EZXN0cm95LmJpbmQoc3R5bGVJdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==