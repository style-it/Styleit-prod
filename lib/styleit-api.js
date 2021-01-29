/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.26
 * @author Adi L, Jonathan C
 * @homepage 
 * @repository git+https://github.com/style-it/StyleIt-prod.git
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


class TextSelection extends HTMLElement {
    constructor(props) {
      super();
    }
    connectedCallback(){
      const createZeroSpace = this.getAttribute('zero-space');
      if(createZeroSpace === "true"){
        this.innerHTML = "&#8203;";

      }
    }
  }
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
/* harmony import */ var _services_keyPress_KeyPress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/keyPress/KeyPress */ "./src/StyleIt/services/keyPress/KeyPress.js");
/* harmony import */ var _services_elements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/elements.service */ "./src/StyleIt/services/elements.service.js");







//TODO:review
class Connector {
    constructor() {
    }

    Connect(element, options) {
        if (typeof element === "string") {
            element = document.getElementById(element);
            if (!element) {
                //TODO: use the validator
                console.error('[-] =>connectWith should be element id or dom element..');
                return null;
            }
        } else if (_utilis_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(element)) {
            // valid..
        } else {
            //TODO: use the validator
            console.error('[-] =>connectWith should be element id or dom element..');
            return null;
        }
        const RenderInnerHTML = (element) => {
            const emptyElement = (node) => {
                return new Promise((resolve) => {
                    while (node.firstElementChild) {
                        node.firstElementChild.remove();
                    }
                    resolve();
                })
            }
            Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_4__["wrapNakedTextNodes"])(element);

            const jsonContent = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_4__["elementToJson"])(element);

            const renderedElement = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_4__["JsonToElement"])(jsonContent);

            emptyElement(element).then(() => element.innerHTML = renderedElement.innerHTML);
        }
        const usePlugins = (element, options) => {
            return {
                copyPaste: new _services_copyPaste_copyPaste_service__WEBPACK_IMPORTED_MODULE_1__["default"](element, options),
                inspector: new _services_Inspector_Inspector_service__WEBPACK_IMPORTED_MODULE_2__["default"](element, options.onInspect),
                keyPress: new _services_keyPress_KeyPress__WEBPACK_IMPORTED_MODULE_3__["default"](element, options)
            }
        }
        RenderInnerHTML(element);
        // element.contentEditable = 'true';
        this.plugins = usePlugins(element, options);
        return element;
    }
    //TODO: destory events..
    //question: how to use the events ? 


    Destroy() {
        for (const key in this.plugins) {
            if (this.plugins.hasOwnProperty(key)) {
                const plugin = this.plugins[key];
                plugin.Destroy();
            }
        }
    }
}



/***/ }),

/***/ "./src/StyleIt/constants/Levels.json":
/*!*******************************************!*\
  !*** ./src/StyleIt/constants/Levels.json ***!
  \*******************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"holder\",\"1\":\"block\"}");

/***/ }),

/***/ "./src/StyleIt/constants/Modes.json":
/*!******************************************!*\
  !*** ./src/StyleIt/constants/Modes.json ***!
  \******************************************/
/*! exports provided: Toggle, Extend, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Toggle\":\"toggle\",\"Extend\":\"extend\"}");

/***/ }),

/***/ "./src/StyleIt/constants/void_elms.js":
/*!********************************************!*\
  !*** ./src/StyleIt/constants/void_elms.js ***!
  \********************************************/
/*! exports provided: void_elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "void_elements", function() { return void_elements; });
const void_elements = {
    "BR":"BR",
    "HR":"HR",
    "IMG":"IMG",
    "INPUT":"INPUT",
    "AUDIO":"AUDIO",
    "VIDEO":"VIDEO",
    "PICTURE":"PICTURE"
}

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
/* harmony import */ var _constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/Modes.json */ "./src/StyleIt/constants/Modes.json");
var _constants_Modes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./constants/Modes.json */ "./src/StyleIt/constants/Modes.json", 1);
/* harmony import */ var _utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilis/splitHTML */ "./src/StyleIt/utilis/splitHTML.js");
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/textEditor.service */ "./src/StyleIt/services/textEditor.service.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connector */ "./src/StyleIt/connector.js");
/* harmony import */ var _components_custom_textSelected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom/textSelected */ "./src/StyleIt/components/custom/textSelected.js");
/* harmony import */ var _components_custom_textSelected__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_custom_textSelected__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_elements_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/elements.service */ "./src/StyleIt/services/elements.service.js");
/* harmony import */ var _services_events_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/events/events */ "./src/StyleIt/services/events/events.js");
/* harmony import */ var _services_link_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/link.service */ "./src/StyleIt/services/link.service.js");
/* harmony import */ var _constants_void_elms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/void_elms */ "./src/StyleIt/constants/void_elms.js");












class Core {

    // *target => can be Id of Element that should contain Editor instance or the element itself..
    // *config =>  configuration passed t   o Tool constructor
    //TODO: add target validations..;
    constructor(target, config) {
        this.__config = {
            onInspect: undefined,
        };
        
        this.on = (key,callback)=>{
            if(typeof(key) !== "string"){
                console.error("key must be a string..");
            }
            if(typeof(callback) !== "function"){
                console.error("callback must be a function..");
            }
            _services_events_events__WEBPACK_IMPORTED_MODULE_8__["EVENTS"][key]  = callback;
        };
        this.Connector = new _connector__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.modeHandlers = {
            [_constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__.Toggle]: (v, key, value, options) => this.onToggle(v, key, value, options),
            [_constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__.Extend]: (v, key, value, options) => this.onExtend(v, key, value, options),
        }
        this.config = config ? Object.assign(this.__config, config) : this.__config;
        this.events = {
            styleChanged: this.config.onInspect,
        }
        this.connectedElement = this.Connector.Connect(target, this.config);
    }
    save() {
        return Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["elementToJson"])(this.connectedElement);
    }
    load(json) {
        return Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["JsonToElement"])(json, this.connectedElement);
    }
    destroy() {
        this.Connector.Destroy();
        const self = this;
        for (const key in self) {
            this[key] = null;
            delete this[key];
        }
    }
    //TODO: review.
    //TODO: Create normalize..
    //question: if text was selected, should we unwrap the selectiion only ? 
    unLink() {
        if (!this.isValid()) {
            return;
        }
        const selection = window.getSelection();

        if (selection && !selection.toString()) {
            let elementToUnwrap;
            const baseNode = selection.baseNode;
            if (baseNode && baseNode.nodeType === 3 && baseNode.parentElement) {
                elementToUnwrap = baseNode.parentElement;
            }
            if (baseNode && baseNode.nodeType === 1) {
                elementToUnwrap = elementToUnwrap.closest("a");
            }
            if (elementToUnwrap) {
                elementToUnwrap.unwrap();
            }
            return null;
        }
        const linkElements = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();
        Array.from(linkElements).forEach(r => {
            const closestATag = r.closest("a");
            if (closestATag) {
                var a = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(r, closestATag, {
                    tag: "a"
                })
                if (a) {
                    a.center.unwrap();
                }
            }
            Array.from(r.querySelectorAll("a")).forEach(a => {
                a.unwrap();
            });
            r.unwrap();
        });
        const { firstFlag, lastFlag } = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(linkElements[0], linkElements[linkElements.length - 1]); //Set Flag at last
        Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);
    }
    //TODO: review
    //TODO: merge a tags..
    //TODO: remove a childs
    //TODO: move function to Link.service.js
    link(options = {}) {
        if (!options || (options && !options.href) ||  !this.isValid()) {
            return;
        }
     
        if (window.getSelection && !window.getSelection().toString()) {
            console.warn("no text selected..");
            return null;
        }
        const unwrapAtags = (linkElements) => {
            linkElements.forEach(link => {
                Array.from(link.querySelectorAll("a")).forEach(aTag => aTag.unwrap());
                const closestATag = link.parentElement ? link.parentElement.closest("a") : null;
                if (closestATag) {
                    var a = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(link, closestATag, {
                        tag: "a"
                    });
                    if (a) {
                        a.center.unwrap();
                    }
                    // closestATag.unwrap();
                }
            });
        }
        const setTargetToTag = (linkElements, renderedLink, _target) => {
            linkElements.forEach(aTag => {
                aTag.href = renderedLink;
                if (_target) {
                    aTag.setAttribute("target", _target);
                }
            });
        }
        const setProtocol = (_protocol, newURL) => {
            _protocol = _protocol.replace(/:/g, "");
            _protocol = _protocol.replace(/\/\//g, "");
            _protocol += ":";
            if (_protocol.includes("http")) {
                _protocol += "//";
            } else {
            }
            newURL.push(_protocol);
            return _protocol;
        }
    

        const { href = "", protocol = "", target = "" } = options;

        const linkElements = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])("a");
        let newURL = [];
        const Atag = Object(_services_link_service__WEBPACK_IMPORTED_MODULE_9__["createTempLinkElement"])(href);
        let _href = Object(_services_link_service__WEBPACK_IMPORTED_MODULE_9__["resetURL"])(href.trim());

        let _protocol = protocol.trim() || Atag.protocol;
        let _target = null;
        const testTarget = _services_link_service__WEBPACK_IMPORTED_MODULE_9__["TARGETS"][target.trim().toLowerCase()];
        if (testTarget) {
            _target = testTarget;
        }
        if (_protocol.trim()) {
            _protocol = setProtocol(_protocol, newURL);
        }
        if (_href) {
            newURL.push(_href);
        }
        const renderedLink = newURL.join("");
        unwrapAtags(linkElements);
        setTargetToTag(linkElements, renderedLink, _target);
        const { firstFlag, lastFlag } = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(linkElements[0], linkElements[linkElements.length - 1]); //Set Flag at last
        Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);
        
        Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(this.connectedElement);// merge siblings and parents with child as possible.. 
    }
    //TODO: review
    //question : we want to handle and toggle any attribute ? 
    toggleClass(className, options) {
        //here
        if (!this.isValid()) {
            return;
        }
        if (typeof (className) !== "string") {
            console.warn("className must be a string..");
            return null;
        }

        const elements = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();
        if (elements.length === 0) {
            return;
        }
        if (!options) options = {};
        if (typeof (options.selection) !== "boolean") options.selection = true;
        const isToggleOn = (typeof (options.isON) === "boolean") ? options.isON : elements[0].closest(`[class='${className}']`);
        if (!isToggleOn) {
            elements.forEach(el => el.classList.add(className));
        } else {
            elements.forEach(el => {
                if (el.parentElement) {
                    const closestClass = el.parentElement.closest(`[class='${className}']`);
                    if (closestClass) {
                        const split = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(el, closestClass);
                        if (split) {
                            split.center.removeClassName(className);
                        }
                    }
                } else {
                    el.removeClassName(className);
                }
            })
        }
        const { firstFlag, lastFlag } = options.selection ? Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(elements[0], elements[elements.length - 1]) : { firstFlag: null, lastFlag: null }; //Set Flag at last
        Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(this.connectedElement);// merge siblings and parents with child as possible..
        if (firstFlag && lastFlag) {
            Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);
        } else {
            const sel = window.getSelection();
            if (sel.removeAllRanges) {
                sel.removeAllRanges();
            }
        }
    }
    /**
    * @param {String} key - key of css 
    *  @param {String} value - value of css
    *  @param {(Object | String)} Modes - mode from Modes => Extend or Toggle
    *  @param {string} Modes.Extend - override style
    *  @param {string} Modes.toggle - toggle style
    *  @param {Object} [options] - options 
    */
    execCmd(key, value, mode, options) {
        if (!this.isValid() || !this.isVAlidKeyValue(key, value)) {
            return;
        }
        this.connectedElement.normalize();
        this.ELEMENTS = [];
        mode = mode ? mode : _constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__.Extend;
        if (!options) options = {};
        if (typeof (options.selection) !== "boolean") options.selection = true;
   

        //==============review===============//
        this.ELEMENTS = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();
        if (!options.selection) {
            const lastNode = this.ELEMENTS[this.ELEMENTS.length - 1];
            if (lastNode)
                this.caretHolder = this.createCaretPlacement(lastNode);
        }

        if (options.unWrap && Array.isArray(options.unWrap)) {
            options.unWrap.forEach(selector => {
                this.ELEMENTS.forEach(txtNode => {
                    const closestElementToUnWrap = txtNode.closest(selector);
                    if (closestElementToUnWrap) {
                        closestElementToUnWrap.unwrap();
                    }
                })
            })
        }
        //This is how i make the text selection, i dont know if this is good way, but it works..
        const { firstFlag, lastFlag } = options.selection ? Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(this.ELEMENTS[0], this.ELEMENTS[this.ELEMENTS.length - 1]) : { firstFlag: null, lastFlag: null }; //Set Flag at last
        //======================================================================//
        Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["removeZeroSpace"])(Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["getTextNodes"])(this.connectedElement));

        let ToggleMode;//Declare toggle mode, The first element determines whether it is on or off

        this.ELEMENTS.forEach((element, i) => {
            options.onOff = ToggleMode;
            const result = this.modeHandlers[mode](element, key, value, options);
            if (mode === _constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__.Toggle && typeof (ToggleMode) === 'undefined')
                ToggleMode = result;
        });
        Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(this.connectedElement);// merge siblings and parents with child as possible.. 
        //use the first and last flags to make the text selection and unwrap them..
        if (firstFlag && lastFlag) {
            Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);
        } else {
            const sel = window.getSelection();
            if (sel.removeAllRanges) {
                sel.removeAllRanges();
            }
            if (this.caretHolder) {
                Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setCaretAt"])(this.caretHolder, this.caretHolder.textContent.length);
                this.caretHolder.unwrap();
                this.caretHolder = null;
            }
        }
        const collectedStyles =  Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["collectStyleFromSelectedElement"])(this.connectedElement);
        if(typeof (_services_events_events__WEBPACK_IMPORTED_MODULE_8__["EVENTS"]["inspect"]) === "function"){
            _services_events_events__WEBPACK_IMPORTED_MODULE_8__["EVENTS"]["inspect"](collectedStyles);
        }
        this.dispatchEvent('styleChanged', collectedStyles);
    }
    createCaretPlacement(atNode) {
        if (!atNode) return null;
        const caretHolder = document.createElement('text-selection');
        caretHolder.setAttribute('zero-space', 'true');
        atNode.appendChild(caretHolder);
        return caretHolder;
    }

    dispatchEvent(event, payload) {
        if (this.events[event])
            this.events[event](payload);
    }
    onToggle(element, key, value, options) {
        if (options.target === "block") {
            this.createBlockStyle(options, element, key, value);
        } else {
            // detect if there is any parent with style to split.
            //TODO: use the catch from options to detect more than one style or tag element.
            let elementToSplit = element.closest(`[style*='${value}']`);
            if (elementToSplit && window.getComputedStyle(elementToSplit).display !== "inline") {
                let innerSpan = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["createInnerWrapperElement"])(elementToSplit);
                elementToSplit.style[key] = null;
                innerSpan.style[key] = value;
                options.onOff = false;
                return this.onToggle(element, key, value, options);
            }
            if (elementToSplit && elementToSplit !== element) {
                if (typeof (options.onOff) === 'undefined')
                    options.onOff = false;
                //unbold
                const splitElements = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(element, elementToSplit);
                // if there is no split elements, its error!
                if (splitElements) {
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["toggleStyle"])(splitElements.center, key, value, options.onOff);
                } else {
                    console.error('splitHTML return null');
                }
            }
            else {
                if (typeof (options.onOff) === 'undefined' && elementToSplit) {
                    options.onOff = false;
                } else if (typeof (options.onOff) === 'undefined') {
                    options.onOff = true;
                }
                Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["toggleStyle"])(element, key, value, options.onOff);
                Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(element);
            }

            return options.onOff;
        }

    }
    onExtend(element, key, value, options) {
        if (options.target === "block") {
            this.createBlockStyle(options, element, key, value);
        } else {
            const elementToSplit = element.closest(`[style*='${key}']`);
            if (elementToSplit) {
                const splitBlocks = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(element, elementToSplit);
                if (splitBlocks) {
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(splitBlocks.center, key, value);
                }
                else if (options.target === "block") {
                    elementToSplit.style[key] = value;
                }
                else if (options.target !== "block") {
                    let innerSpan = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["createInnerWrapperElement"])(elementToSplit, { el: 'span' });
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(innerSpan, key, value);
                    elementToSplit.style[key] = null;
                    return this.onExtend(element, key, value);

                }
                else if (elementToSplit !== element) {
                    const splitElements = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(element, elementToSplit);
                    if (splitElements) {
                        Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(splitElements.center, key, value);
                    } else {
                        console.error('splitHTML return null');
                    }
                }

            } else if (window.getComputedStyle(element).display !== "block" && options.target === "block") {
                const blockElement = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["GetClosestBlockElement"])(element);
                if (blockElement && blockElement.ischildOf(this.connectedElement)) {
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(parentElement, key, value);
                } else {
                    const wrapper = document.createElement("div");
                    parentElement.wrap(wrapper);
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(wrapper, key, value);
                }
            } else {
                Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyle"])(element, key, value);
            }
        }

    }
    createBlockStyle(options, element, key, value) {
        const findBlock = (element) => {
            const computed = window.getComputedStyle(element);
            if (computed && computed.display !== "inline") {
                return element;
            } else if (element.parentNode && element.parentNode !== this.connectedElement) {
                return findBlock(element.parentNode);
            }
        };
        if (options.as === "inline") {
            let blockElement = findBlock(element);
            if (blockElement) {
                const wrapTextNodeWithAppendStyle = (node) => {
                    const span = document.createElement("span");
                    span.style[key] = value;
                    node.wrap(span);
                };
                const createInlineStyle = (parentNode) => {
                    parentNode.style[key] = null;
                    Array.from(parentNode.childNodes).forEach(node => {
                        if (node.nodeType === 3) {
                            wrapTextNodeWithAppendStyle(node);
                        } else if (node.nodeType === 1 && !_constants_void_elms__WEBPACK_IMPORTED_MODULE_10__["void_elements"][node.nodeName]) {
                            const computed = window.getComputedStyle(node);
                            if (computed.display !== "inline") {
                                createInlineStyle(node);
                            } else {
                                node.style[key] = value;
                            }
                        }
                    });
                };
                createInlineStyle(blockElement);
                // Array.from(blockElement.querySelectorAll("span")).forEach(el=>el.style[key] = value);
            } else {
                this.createBlockElAndStyleIt(key, value, element);
            }

        } else {
            let blockElement = findBlock(element);
            if (blockElement) {
                blockElement.style[key] = value;
                Array.from(blockElement.querySelectorAll(`[style*='${key}']`)).forEach(el => el.style[key] = null);
            } else {
                this.createBlockElAndStyleIt(key, value, element);
            }
        }
    }

    createBlockElAndStyleIt(key, value, element) {
        const pargh = document.createElement("p");
        pargh.style[key] = value;
        element.wrap(pargh);
    }
    isVAlidKeyValue(key,value){
        return !!(typeof key === "string" && typeof value === "string"); 
    }
    isValid() {
        if (!this.connectedElement) {
            console.error('please create new instance..')
            return false;
        };
        if (this.connectedElement.contentEditable === "false") {
            return false;
        }
        var selectedElement = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["getSelectedElement"])();
        if (selectedElement && (selectedElement.ischildOf(this.connectedElement) || selectedElement === this.connectedElement)) {
            return true;
        }
        ;
    }
}

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




//TODO:review
function UseRules(data) {
    const ColorTextDecorationRule = (data) => {
        if (data.key === "color") {
            const textDecoration = data.element.closest(`[style*='text-decoration']`);
            if (textDecoration) {
                const splits = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_1__["splitHTML"])(data.element, textDecoration);
                if (splits) {
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])();
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_0__["setStyle"])(splits.center, 'text-decoration-color', `${data.value}`);
                    for (const key in splits) {
                        const element = splits[key];
                        Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_2__["normalizeElement"])(element);
                    }
                } else {
                    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_0__["setStyle"])(textDecoration, 'text-decoration-color', `${data.value}`);
                }
            }
        }
    }
    const Rules = [
        ColorTextDecorationRule
    ]
    Rules.forEach(rule => rule(data));
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
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/events */ "./src/StyleIt/services/events/events.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements.service */ "./src/StyleIt/services/elements.service.js");
/* harmony import */ var _link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link.service */ "./src/StyleIt/services/link.service.js");






//TODO: review
//question: how can we expose the collectedStyle ? 
//question: should we use this ? https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
class Inpsector {
    constructor(target, onInspect) {

        if (!target) {
            console.error('[-] Inpsector => target is null');
            return null;
        }
        //TODO: use the validator
        this.onInspect = onInspect;
        this.target = target;

        const launchInspect = () => {
            const collectedStyle = Object(_style_service__WEBPACK_IMPORTED_MODULE_0__["collectStyleFromSelectedElement"])(this.target);
            if (typeof (this.onInspect) === "function")
                this.onInspect(collectedStyle);
            if (typeof (_events_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"]["inspect"]) === "function") {
                _events_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"]["inspect"](collectedStyle);
            }
            const selectedElement = Object(_elements_service__WEBPACK_IMPORTED_MODULE_2__["getSelectedElement"])();
            
            if(selectedElement ){
                const aTag = selectedElement.closest("a");
                if(aTag){
                    if(typeof(_events_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"]["inspectLink"]) === "function"){
                        _events_events__WEBPACK_IMPORTED_MODULE_1__["EVENTS"]["inspectLink"]({
                            protocol:aTag.protocol,
                            href:Object(_link_service__WEBPACK_IMPORTED_MODULE_3__["resetURL"])(aTag.href),
                            target:aTag.getAttribute("target") || "",
                            element:aTag
                        });
                    }
                }
            }

        }
        this.onKeyDown = (e) => {
            //TODO: review
            if (e.keyCode === 8 && this.target.children.length <= 1 && !this.target.textContent) {
                e.preventDefault();
                return false;
            }
            launchInspect();
        }
        this.onClick = () => {
            launchInspect();
        }

        this.target.addEventListener('click', this.onClick);
        this.target.addEventListener('keydown', this.onKeyDown);

        this.Destroy = () => {
            this.target.removeEventListener('click', this.onClick);
            this.target.removeEventListener('keydown', this.onKeyDown);
            this.target = null;
        }
    }
}

/***/ }),

/***/ "./src/StyleIt/services/attr.service.js":
/*!**********************************************!*\
  !*** ./src/StyleIt/services/attr.service.js ***!
  \**********************************************/
/*! exports provided: getInheirtAttributes, getAttributes, removeAllAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInheirtAttributes", function() { return getInheirtAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributes", function() { return getAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllAttrs", function() { return removeAllAttrs; });


//class and style not includes yet..
function getInheirtAttributes(fromElement, toElement) {
    var attributes = {};
    var currectElement = fromElement;
    while (currectElement && currectElement.ischildOf(toElement.parentElement)) {
        var attrs = currectElement.attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(attrs[i].name  !=="class" && attrs[i].name  !== "style"){
                if(!attributes[attrs[i].name ]){
                    attributes[attrs[i].name ] = attrs[i].value;
                }
            }
          }
      currectElement = currectElement.parentElement;
    }
    return attributes;
  }
  function getAttributes(element,getAll){
    var attributes = {};
    var attrs = element.attributes;
    for(var i = attrs.length - 1; i >= 0; i--) {
        if(getAll  || (!getAll && attrs[i].name  !=="class" && attrs[i].name  !== "style")){
            if(!attributes[attrs[i].name ]){
                attributes[attrs[i].name ] = attrs[i].value;
            }
        }
      }
      return attributes;
  }
  function removeAllAttrs(element){
      if(element && !element.attributes){
          console.error("element not have attributes..");
          return null;
      }
    Array.from(element.attributes).forEach(attr=>element.removeAttribute(attr.nodeName))
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
        let map = _parent.classList;
        Array.from(map).forEach(name => {
            if (classes.findIndex(c => c === name) < 0) {
                classes.push(name);
            }
        })
        _parent = _parent.parentElement;
    }
    return classes;
}
function getClasses(element) {
    return Array.from(element.classList);
}

//TODO: review
//question: is expensive too much? 
function normalizeClassName(element) {
    function removeEmptyClass(element){
        if (!element.className) {
            element.removeAttribute('class');
        }
    }
    function clear(element) {
        removeEmptyClass(element);
        Array.from(element.classList).forEach(c => {
            Array.from(element.querySelectorAll(`[class='${c}']`)).forEach(node =>{
                node.classList.remove(c)
                removeEmptyClass(node)
            });
        })
    }
    
    const elements = Array.from(element.querySelectorAll('span[class]')).concat(element);
    elements.forEach(child => clear(child));
}
//TODO: review
//question: how about this name ? 
Element.prototype.removeClassName = function(className){
const nodes = Array.from(this.querySelectorAll(`[class='${className}']`)).concat(this);
nodes.forEach(node=>node.classList.remove(className));
}

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
/* harmony import */ var _constants_void_elms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/void_elms */ "./src/StyleIt/constants/void_elms.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements.service */ "./src/StyleIt/services/elements.service.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");





const normalizePasedElement = (target) => {

  Object(_elements_service__WEBPACK_IMPORTED_MODULE_1__["walkOnElement"])(target, (node) => {
    if (node !== target && node.parentElement && node.style.diaplay !== "inline") {
      const samePArent = node.parentElement.closest(node.nodeName);
      if (samePArent && samePArent !== target) {
        node.unwrap();
        return samePArent;
      }
    }
  })

}

class CopyPaste {

  constructor(target, options) {
    this.target = target;
    this.stylesToPaste = typeof options.stylesToPaste === "object" ? options.stylesToPaste : null;
    this.onCopy = typeof options.onCopy === "function" ? options.onCopy : null;
    this.onPaste = typeof options.onPaste === "function" ? options.onPaste : null;
    this.paste = this.paste.bind(this);
    this.copy = this.copy.bind(this);
    this.start();
  }
  copy(event) {
    let html = "";
    if (typeof window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
        const container = document.createElement("div");
        // document.body.appendChild(container)
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          let copiedNode = sel.getRangeAt(i).cloneContents();
          container.appendChild(copiedNode);

          Array.from(container.childNodes).forEach(n => {
            if (n.nodeType === 3) {
              const parentCopiedNode = sel.getRangeAt(i).startContainer.parentNode;
              const collectedCSS = Object(_style_service__WEBPACK_IMPORTED_MODULE_3__["getInheirtCss"])(parentCopiedNode, this.target);
              const span = document.createElement("span");
              span.textContent = copiedNode.textContent;
              span.style = collectedCSS;
              Object(_style_service__WEBPACK_IMPORTED_MODULE_3__["setStyles"])(span, collectedCSS);
              n.wrap(span);
              debugger
            }else if(_constants_void_elms__WEBPACK_IMPORTED_MODULE_0__["void_elements"][n.nodeName] && n.nodeName !== "BR"){
              n.parentElement.removeChild(n);
            }
          })

        }
        html = container;
      }
    } else if (typeof document.selection) {
      if (document.selection.type === "Text") {
        html = document.selection.createRange().htmlText;
      }
    }
    event.preventDefault();
    event.clipboardData.setData('styleit/html', html.innerHTML);
    event.clipboardData.setData('text/plain', html.textContent);
  }
  paste(event) {
    this.pasteWithStyles(event);
  };
  pasteWithStyleExp(event) {
    function removePostionsStylesFromElement(HtmlContainer) {
      Array.from(HtmlContainer.querySelectorAll(`[style*='position']`)).forEach(el => {
        el.style.position = "";
      });
    }

    function createTempPastedElement() {
      let HtmlContainer = document.createElement("div");
      HtmlContainer.style.opacity = 0;
      HtmlContainer.style.position = "fixed";
      HtmlContainer.style.left = "-9999px";
      return HtmlContainer;
    }

    let HtmlContainer = null;
    try {
      HtmlContainer = createTempPastedElement();
      const data = event.clipboardData || window.clipboardData;
      HtmlContainer.innerHTML = data.getData('text/html').trim();
      removePostionsStylesFromElement(HtmlContainer);
      if (!HtmlContainer.innerHTML) {
        HtmlContainer.innerHTML = data.getData('text/plain').trim();
        document.execCommand("inserttext", false, HtmlContainer.innerHTML);
        //todo: stop here..
        return null;
      }
      document.body.appendChild(HtmlContainer);
      let htmlNodes = [];
      const recurse = (el, callback) => {
        el.childNodes.forEach(node => {
          callback(node);
          if (node.nodeType === 1) {
            recurse(node, callback);
          }
        });

      };

      recurse(HtmlContainer, (node) => {
        if (node.nodeType === 3 && node.textContent.trim()) {
          const span = document.createElement("span");
          for (const key in this.stylesToPaste) {
            if (Object.hasOwnProperty.call(this.stylesToPaste, key)) {
              span.style[key] = "inherit";
            }
          }
          node.wrap(span);
          htmlNodes.push(span);
        }
      });
      htmlNodes.forEach(s => {

        if (!s.textContent.trim())
          return;
        const collectedStyles = window.getComputedStyle(s);
        for (const key in this.stylesToPaste) {
          if (Object.hasOwnProperty.call(collectedStyles, key)) {
            const value = collectedStyles[key];
            if (value) {
              if (value === "inherit") {
                s.style[key] = "";
              } else if (value.includes("none")) {
                s.style[key] = "";
              } else if (value.replace(/ /gm, "").includes("(0,0,0")) {
                s.style[key] = "";
              } else if (value === "normal") {
                s.style[key] = "";
              } else {
                s.style[key] = value;

              }
            }

          }
        }
      });
      const newNodes = []
      htmlNodes.forEach((span, index) => {
        if (index > 0) {
          let firstRect = htmlNodes[index - 1].getBoundingClientRect();
          let currentRect = span.getBoundingClientRect();

          if (!(firstRect.top <= currentRect.bottom && currentRect.top <= firstRect.bottom)) {
            // newNodes.push(document.createElement("br"));
            let spaceHeight = 17;

            const sumBR = Math.floor((currentRect.top - firstRect.bottom) / spaceHeight);
            if (sumBR <= 0) {
              newNodes.push(document.createElement("br"));
            } else {
              for (let i = 0; i < sumBR; i++) {
                newNodes.push(document.createElement("br"));
              }
            }
          }
          span.innerHTML = " " + span.innerHTML
          newNodes.push(span);

        } else {
          newNodes.push(span);
        }
      });
      document.execCommand("inserthtml", false, newNodes.map(n => n.outerHTML).join(""))
      Object(_elements_service__WEBPACK_IMPORTED_MODULE_1__["wrapNakedTextNodes"])(this.target);
    }
    catch (err) {
      throw Error(err);
    }
    finally {
      if (HtmlContainer && HtmlContainer.parentNode) {
        HtmlContainer.parentNode.removeChild(HtmlContainer);
      }
    }
  }
  pastePlainText(event) {
    const data = event.clipboardData || window.clipboardData;
    event.preventDefault();
    let content = data.getData('text/plain').trim();
    content = content.replace(/\n/g,"<br/>")
    const id = "this-is-temp-container-for-plain-text";
    debugger
    // document.execCommand('inserttext', false, content);
    Object(_range_service__WEBPACK_IMPORTED_MODULE_2__["pasteHtmlAtCaret"])(`<p id="${id}">${content}</p>`);
    const copiedElement = this.target.querySelector(`#${id}`);
    if (copiedElement) {
      Object(_range_service__WEBPACK_IMPORTED_MODULE_2__["setCaretAt"])(copiedElement);
      if(copiedElement.parentElement !== this.target && copiedElement.parentElement.nodeName !== "SPAN"){
        copiedElement.unwrap();
      }else{
        copiedElement.removeAttribute("id");
      }
      Array.from(this.target.children).forEach(child=>{
        if(!child.textContent.trim()){
          this.target.removeChild(child);
        }
      })
    }

    if (this.onPaste) {
      content = this.onPaste(content)
    }
  }
  pasteWithStyles(event) {
    event.preventDefault();
debugger
    const data = event.clipboardData || window.clipboardData;
    const copied = data.getData('styleit/html').trim();
    //on copied on the editor localy
    if (copied) {
      const id = "this-is-temp-id-for-paste-content-into-the-dom";
      Object(_range_service__WEBPACK_IMPORTED_MODULE_2__["pasteHtmlAtCaret"])(`<div id="${id}">${copied}</div>`);
      const copiedElement = this.target.querySelector(`#${id}`);
      if (copiedElement) {
        normalizePasedElement(copiedElement);
        Object(_range_service__WEBPACK_IMPORTED_MODULE_2__["setCaretAt"])(copiedElement);
        copiedElement.unwrap();
      }

      Object(_elements_service__WEBPACK_IMPORTED_MODULE_1__["wrapNakedTextNodes"])(this.target);
    } else {
      // if copied not from the local editor
      // check if experimental paste was activate
      if (this.stylesToPaste) {
        this.pasteWithStyleExp(event);
      } else {

        this.pastePlainText(event);
      }
    }
  }

  start() {
    this.target.addEventListener("paste", this.paste);
    this.target.addEventListener("copy", this.copy);
  }
  destroy() {
    this.target.removeEventListener("paste", this.paste);
    this.target.removeEventListener("copy", this.copy);

  }
}



/***/ }),

/***/ "./src/StyleIt/services/elements.service.js":
/*!**************************************************!*\
  !*** ./src/StyleIt/services/elements.service.js ***!
  \**************************************************/
/*! exports provided: wrapNakedTextNodes, walkTheDOM, walkOnElement, getSelectedElement, JsonToElement, elementToJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapNakedTextNodes", function() { return wrapNakedTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkTheDOM", function() { return walkTheDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkOnElement", function() { return walkOnElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedElement", function() { return getSelectedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToElement", function() { return JsonToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementToJson", function() { return elementToJson; });
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json");
var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json", 1);
/* harmony import */ var _constants_void_elms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/void_elms */ "./src/StyleIt/constants/void_elms.js");




function wrapNakedTextNodes(target){
    // target is the main contenteditable element
    // so 
    Array.from(target.childNodes).forEach(c=>{
 
        if(c.nodeType ===1 && !c.textContent.trim() && c.children.length===0 && !_constants_void_elms__WEBPACK_IMPORTED_MODULE_2__["void_elements"][c.nodeName]){
            c.parentNode.removeChild(c);
        }
        if(c.nodeType === 3 && c.parentElement){
            c.parentElement.normalize();
        }
        if(((c.nodeType ===3 && c.parentElement === target)) && !c.parentElement.closest("p") && c.textContent.trim()){
            const p = document.createElement("p");
            c.wrap(p);
        }
    })
}
function walkTheDOM(node, func) {
    if(!node) return null;
    func(node);
    node = node.firstChild;
    while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
    }
  }
  function walkOnElement(node, func) {
    if(!node) return null;
    const continueWith = func(node);
    if(continueWith){
        node = continueWith;
    }
    node = node.firstElementChild;
    while (node) {
        walkOnElement(node, func);
      node = node.nextElementSibling;
    }
  } 
function getSelectedElement() {
    var node = document.getSelection();
    if (node) {
        var ancNode = node.focusNode;
        if (ancNode !== null) {
            while (ancNode.nodeType === 3) {
                ancNode = ancNode.parentNode;
            }
            // const el = (ancNode.nodeType === 3 ? ancNode.parentNode : node);
            return ancNode;
        }
        return null;
    }
}
function JsonToElement(jsonObject, parentElement) {
    //TODO: create parentelement and jsonobject validation   
    const renderAttrs = (jsElement, element) => {
        if (jsElement.classList) {
            element.classList = [...jsElement.classList];
        }
        if (jsElement.style) {
            const collectedStyle = Object(_style_service__WEBPACK_IMPORTED_MODULE_0__["JsonObjectToStyleString"])(jsElement.style);
            element.style = collectedStyle;
        }
        //TODO: other attrs...
    }
    const createHtmlElement = (jsElement) => {
        const nodeType = jsElement.tag;
        let element;
        let isShouldRenderAttrs;
        switch (nodeType) {
            case "#text":
                element = document.createTextNode(jsElement.textContent);
                break;
            case "A":
                element = document.createElement(nodeType);
                element.href = jsElement.href;
                element.target = jsElement.target;
                break;
            default:
                element = document.createElement(nodeType);
                isShouldRenderAttrs = true;
                break;
        }
        if (isShouldRenderAttrs && element) {
            renderAttrs(jsElement, element);
        }
        return element;
    }
    if (!parentElement && jsonObject.type === _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1__['0']) {
        parentElement = createHtmlElement(jsonObject);
    }
    if (Array.isArray(jsonObject.children)) {
        jsonObject.children.forEach(jsChild => {
            const htmlElement = createHtmlElement(jsChild);
            if (htmlElement) {
                parentElement.appendChild(htmlElement);
                JsonToElement(jsChild, htmlElement);
            } else {
                console.error('cant create dom element from json', jsChild);
            }
        });
    }
    return parentElement;
}
function elementToJson(node, level) {
    
    if (typeof (level) !== "number") level = 0;
    const nodeType = node.nodeName;
    let isShouldRenderAttrs = true;
    let json = {};
    let isValid = true;

    if (_constants_Levels_json__WEBPACK_IMPORTED_MODULE_1__[level]) {
        json.type = _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1__[level];
        level++;
    }

    switch (nodeType) {
        case "#text":
            json.tag = nodeType;
            json.textContent = node.textContent.replace(/\u200B/g, '');
            isShouldRenderAttrs = false;
            //question: replace \n ?
            if (!json.textContent.trim()) isValid = false;
            break;
        case "A":
            json.tag = nodeType;
            json.href = node.href;
            json.target = node.target;
            break;
        default:
            json.tag = nodeType;
            //TODO: should we unwrap this node ? 
            break;
    }
    if (!isValid) return null;
    if (isShouldRenderAttrs) {
        //TODO: get attrs 
        const style = Object(_style_service__WEBPACK_IMPORTED_MODULE_0__["getStyle"])(node);
        if (Object.keys(style).length > 0) {
            json.style = style;
        }
        if (node.classList && node.classList.length > 0)
            json.classList = [...node.classList];

        if (node.childNodes && node.childNodes.length > 0)
            json.children = [...node.childNodes].map((cn) => elementToJson(cn, level)).filter(v => v);
    }

    return json;

}

/***/ }),

/***/ "./src/StyleIt/services/events/events.js":
/*!***********************************************!*\
  !*** ./src/StyleIt/services/events/events.js ***!
  \***********************************************/
/*! exports provided: EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
const EVENTS = {
  
}

/***/ }),

/***/ "./src/StyleIt/services/keyPress/KeyPress.js":
/*!***************************************************!*\
  !*** ./src/StyleIt/services/keyPress/KeyPress.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyPress; });
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements.service */ "./src/StyleIt/services/elements.service.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _constants_void_elms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/void_elms */ "./src/StyleIt/constants/void_elms.js");



class KeyPress {

    constructor(target, options = {}) {
        if (!target) {
            console.error('[-] keyPress => target is null');
            return null;
        }
        if (typeof options.onKeyPress === "function") {
            this.onKeyPress = options.onKeyPress;
        }
        this.target = target;


        this.keypress = (e) => {
            if (e.keyCode === 8) {
                const target = e.target;
                if (target.textContent.replace(/\s/g, "").replace(/[\u200B-\u200D\uFEFF]/g, '') === "") {
                    e.preventDefault();
                    return false;
                }

                // if(!target.textContent){
                //     e.preventDefault();
                //     pasteHtmlAtCaret(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
                //     debugger
                //     wrapNakedTextNodes(this.target);
                //     return false;
                // }
            }
            else if (e.keyCode === 13) {
                if (e.shiftKey) {
                    Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["pasteHtmlAtCaret"])("<br/>");
                    e.preventDefault();
                    return false;
                }

                const range = document.createRange();
                const selection = window.getSelection();
                var blockElement = Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["GetClosestBlockElement"])(selection.anchorNode);

                if (blockElement === this.target) {
                    return false
                }
                const range2extract = selection.getRangeAt(0);
                range2extract.extractContents();
                range.setStart(selection.anchorNode, selection.anchorOffset);
                range.setEnd(blockElement, blockElement.childNodes.length);
                selection.removeAllRanges();
                selection.addRange(range);
                if (selection.isCollapsed) {
                    if (blockElement && !this.target.textContent.trim()) {
                        if (blockElement !== this.target) {
                            Array.from(this.target.children).forEach(c => {
                                if (c !== blockElement && !c.textContent.trim()) {
                                    c.unwrap();
                                }
                            })
                            blockElement.innerHTML = blockElement.innerHTML + "&#8203;";
                            Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["setCaretAt"])(blockElement);
                            e.preventDefault();
                        }
                    }
                    return false;
                } else {
                    e.preventDefault();
                }

                const docFragment = range.extractContents();
                Array.from(docFragment.children).forEach(child => {
                    if (child.nodeType === 1 && !child.textContent.trim() && !_constants_void_elms__WEBPACK_IMPORTED_MODULE_2__["void_elements"][child.nodeName]) {
                        child.unwrap();
                    }
                });

                const el = document.createElement(blockElement.nodeName || "p");
                el.appendChild(docFragment);
                if (!el.textContent.trim()) {
                    el.innerHTML = "&#8203;";
                }
                Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["insertAfter"])(el, blockElement);
                const br = document.createElement("br");
                blockElement.appendChild(br);


                selection.removeAllRanges();
                Object(_elements_service__WEBPACK_IMPORTED_MODULE_0__["wrapNakedTextNodes"])(this.target, { expect: blockElement });
                Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["setCaretAt"])(el, 0);
            }
            else if (typeof this.onKeyPress === "function") {
                this.onKeyPress(e);
            }
        }


        this.target.addEventListener('keydown', this.keypress);

        this.Destroy = () => {
            this.target.removeEventListener('keydown', this.keypress);
            this.target = null;
        }
    }
}

/***/ }),

/***/ "./src/StyleIt/services/link.service.js":
/*!**********************************************!*\
  !*** ./src/StyleIt/services/link.service.js ***!
  \**********************************************/
/*! exports provided: TARGETS, resetURL, createTempLinkElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGETS", function() { return TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetURL", function() { return resetURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTempLinkElement", function() { return createTempLinkElement; });
const TARGETS = {
    _blank: "_blank",
    _self: "_self",
    _parent: "_parent",
    _top: "_top"
}
const resetURL = (src) => {
    src = src.replace(/https:/g, '');
    src = src.replace(/http:/g, '');
    src = src.replace(/mailto:/g, '');
    src = src.replace(/tel:/g, '');
    src = src.replace(/\//g, '');
    return src;
}
const createTempLinkElement = (href) => {
    const Atag = document.createElement("a");
    Atag.href = href;
    return Atag;
}

/***/ }),

/***/ "./src/StyleIt/services/range.service.js":
/*!***********************************************!*\
  !*** ./src/StyleIt/services/range.service.js ***!
  \***********************************************/
/*! exports provided: createInnerWrapperElement, GetClosestBlockElement, wrapRangeWithBlockElement, wrapRangeWithElement, getRanges, getTextNodes, rangesIntersect, createRangeFromNode, getCaretCharacterOffsetWithin, setCaretAt, pasteHtmlAtCaret, rangeIntersectsNode, getRangeTextNodes, isNonEmptyTextNode, removeElement, replaceNode, selectText, insertAfter, createWrapperFunction, getAllNodes, wrapRangeText, setSelectionBetweenTwoNodes, setSelectionFlags, getSelectedHTML, saveSelection, restoreSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInnerWrapperElement", function() { return createInnerWrapperElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetClosestBlockElement", function() { return GetClosestBlockElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapRangeWithBlockElement", function() { return wrapRangeWithBlockElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapRangeWithElement", function() { return wrapRangeWithElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRanges", function() { return getRanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextNodes", function() { return getTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesIntersect", function() { return rangesIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRangeFromNode", function() { return createRangeFromNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaretCharacterOffsetWithin", function() { return getCaretCharacterOffsetWithin; });
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
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.service */ "./src/StyleIt/services/elements.service.js");


function createInnerWrapperElement(element, options) {
  if (typeof (options) !== "object") options = {};
  let innerSpan = document.createElement(options.el || "span");
  Array.from(element.childNodes).forEach(child => innerSpan.appendChild(child));
  element.appendChild(innerSpan);
  return innerSpan;
}
function GetClosestBlockElement(element) {
  if (!element) {
    return null;
  }
  if (element.nodeType !== 1) {
    element = element.parentElement;
  }
  if (window.getComputedStyle(element).display !== "inline") return element;
  let parentElement = element.parentElement;
  while (parentElement && window.getComputedStyle(parentElement).display === "inline") {
    if (parentElement.parentElement) {
      parentElement = parentElement.parentElement;
    } else {
      break;
    }
  }
  return parentElement;
}
//TODO:review
function wrapRangeWithBlockElement(limitElement) {
  const wrapElementWithBlock = (el) => {
    let wEl = "div";
    if (el.nodeName === "SPAN") {
      wEl = "p";
    }
    const wrapper = document.createElement(wEl);
    el.wrap(wrapper);
    return wrapper;
  }
  const elements = [];
  let nodes = wrapRangeWithElement();
  nodes.forEach(el => {
    const blockEl = GetClosestBlockElement(el);
    if (blockEl) {
      if (blockEl.ischildOf(limitElement)) {
        const founded = elements.find(block => blockEl.ischildOf(block));
        if (!founded)
          elements.push(blockEl);
      } else {
        const _wrapper = wrapElementWithBlock(el);
        elements.push(_wrapper);
      }
    } else {
      const _wrapper = wrapElementWithBlock(el);
      elements.push(_wrapper);

    }
  });
  return {
    nodes: nodes,
    blocks: elements
  }
  return elements;
}
function wrapRangeWithElement(wrapTag) {
  const ranges = getRanges();
  return ranges.map(r => {
    return wrapRangeText(wrapTag, r);
  }).flat();
}
function getRanges() {
  let ranges = [];

  const sel = window.getSelection();

  for (let i = 0; i < sel.rangeCount; i++) {
    ranges[i] = sel.getRangeAt(i);
  }
  return ranges;
}
// return all text nodes that are contained within `el`
function getTextNodes(el) {
  el = el || document.body

  var doc = el.ownerDocument || document,
    walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false),
    textNodes = [],
    node = walker.nextNode();

  while (node) {
    textNodes.push(node);
    node = walker.nextNode();
  }
  return textNodes
}
function rangesIntersect(rangeA, rangeB) {
  return rangeA.compareBoundaryPoints(Range.END_TO_START, rangeB) === -1 &&
    rangeA.compareBoundaryPoints(Range.START_TO_END, rangeB) === 1
}
function createRangeFromNode(node) {
  var range = node.ownerDocument.createRange()
  try {
    range.selectNode(node)
  } catch (e) {
    range.selectNodeContents(node)
  }
  return range
}
function getCaretCharacterOffsetWithin(element) {
  var caretOffset = 0;
  var doc = element.ownerDocument || element.document;
  var win = doc.defaultView || doc.parentWindow;
  var sel;
  if (typeof win.getSelection != "undefined") {
    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretOffset = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type != "Control") {
    var textRange = sel.createRange();
    var preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    caretOffset = preCaretTextRange.text.length;
  }
  return caretOffset;
}
function setCaretAt(element, charIndex = 0) {

  var node = element;
  node.focus();
  var textNode = Array.from(node.childNodes).filter(child => child.nodeType === Node.TEXT_NODE);
  if (textNode.length === 0) {
    textNode = element;
    while (textNode && textNode.firstChild && textNode.nodeType !== 3) {
      textNode = textNode.firstChild;
    }
    if(textNode){
      textNode = [textNode];
    }
  }

  var range = document.createRange();
  range.setStart(textNode[0], charIndex);
  range.setEnd(textNode[0], charIndex);
  range.collapse(true)
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

}
function pasteHtmlAtCaret(html) {
  const selectedElement = Object(_elements_service__WEBPACK_IMPORTED_MODULE_0__["getSelectedElement"])();
  const contenteditable = selectedElement.closest("[contenteditable]");
  let isValid = true;
  if (contenteditable) {
    if (!contenteditable.contentEditable) {
      isValid = false;
    }
  } else {
    isValid = false;
  }
  if (!isValid) {
    return null;
  }
  var sel, range;
  if (window.getSelection) {
    // IE9 and non-IE
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();

      // Range.createContextualFragment() would be useful here but is
      // only relatively recently standardized and is not supported in
      // some browsers (IE9, for one)
      let el;
      if (typeof (html) === "string") {
        el = document.createElement("div");
        el.innerHTML = html;
      }
      else if (typeof (html) === "object") {
        el = html;
      }

      var frag = document.createDocumentFragment(), node, lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);

      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }
}
function rangeIntersectsNode(range, node) {
  if (range.intersectsNode) {
    return range.intersectsNode(node)
  } else {
    return rangesIntersect(range, createRangeFromNode(node))
  }
}
function getRangeTextNodes(range) {
  var container = range.commonAncestorContainer,
    nodes = getTextNodes(container.parentNode || container)

  return nodes.filter((node) => {
    return rangeIntersectsNode(range, node) && isNonEmptyTextNode(node)
  })
}
function isNonEmptyTextNode(node) {
  return node.textContent.length > 0
}
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el)
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
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
}
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function createWrapperFunction(wrapperEl, range) {
  var startNode = range.startContainer,
    endNode = range.endContainer,
    startOffset = range.startOffset,
    endOffset = range.endOffset

  return function wrapNode(node) {
    var currentRange = document.createRange(),
      currentWrapper = wrapperEl.cloneNode()

    currentRange.selectNodeContents(node);
    if (node === startNode && startNode.nodeType === 3) {
      currentRange.setStart(node, startOffset)
      startNode = currentWrapper
      startOffset = 0
    }
    if (node === endNode && endNode.nodeType === 3) {
      currentRange.setEnd(node, endOffset)
      endNode = currentWrapper;
      endOffset = 1
    }
    currentRange.surroundContents(currentWrapper)
    return currentWrapper
  }
}
function getAllNodes() {
  var nodes, range;
  if (typeof range === 'undefined') {
    // get the current selection if no range is specified
    range = window.getSelection().getRangeAt(0)
  }
  if (range.isCollapsed) {
    // nothing to wrap
    return []
  }
  nodes = getRangeTextNodes(range)
  nodes = nodes.map(node => {
    if (node !== null) {
      while (node.nodeType === 3) {
        node = node.parentNode;
      }
      return node;
    }
    return null;
  });
  return nodes
}
function wrapRangeText(wrapperEl, range) {
  var nodes, wrapNode;

  if (typeof range === 'undefined') {
    // get the current selection if no range is specified
    range = window.getSelection().getRangeAt(0)
  }

  if (range.isCollapsed) {
    // nothing to wrap
    return []
  }

  if (typeof wrapperEl === 'undefined') {
    wrapperEl = 'span'
  }

  if (typeof wrapperEl === 'string') {
    // assume it's a tagname
    wrapperEl = document.createElement(wrapperEl);
  }

  wrapNode = createWrapperFunction(wrapperEl, range)

  nodes = getRangeTextNodes(range)

  nodes = nodes.map(wrapNode);
  return nodes
}
function setSelectionBetweenTwoNodes(firstFlag, lastFlag, options = {}) {
  const _options = { remove: true };
  Object.assign(_options, options);
  document.getSelection().setBaseAndExtent(firstFlag, 0, lastFlag, lastFlag.childNodes.length);
  if (_options.remove) {
    [firstFlag, lastFlag].forEach(e => e.unwrap());
  }
}
function setSelectionFlags(firstElement, LastElement) {
  const selection = window.getSelection();
  const firstFlag = document.createElement('text-selection');
  firstFlag.setAttribute('zero-space', firstElement.textContent.length === 0)
  const lastFlag = document.createElement('text-selection');
  lastFlag.setAttribute('zero-space', LastElement.textContent.length === 0)

  firstElement.prepend(firstFlag); //Set flag the first
  LastElement.appendChild(lastFlag); //Set Flag at last
  return { firstFlag, lastFlag };
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
    }
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
};
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
        let map = getStyle(currectElement);
        for (const style in map) {
            if (map.hasOwnProperty(style)) {
                const value = map[style];
                // text-decoration  could be twice like underline and strike therough.. 
                if (!intailStyle[style])
                    intailStyle[style] = value;
            }
        }
        currectElement = currectElement.parentElement;
    }
    return intailStyle;
}
function removeStyle(element, key, value) {
    element.style[key] = element.style[key].replace(value, "");
    Array.from(element.querySelectorAll(`[style*='${key}']`)).forEach(el => {
        el.style[key] = el.style[key].replace(value, "");
    })
}
//TOGGLE
function toggleStyle(element, key, value, isOn) {
    if (isOn) {
        element.style[key] = element.style[key] + " " + value;
    } else {
        element.style[key] = element.style[key].replace(value, "");
    }
    normalizeStyle(element);
    Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(element);
    Array.from(element.querySelectorAll(`[style*='${value}']`)).forEach(child => {
        child.style[key] = child.style[key].replace(value, "");
        normalizeStyle(child);
        Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(child);
    })
}
//EXTEND
//TODO: fix name
function setStyles(element, jsonStyle) {
    for (const key in jsonStyle) {
        if (jsonStyle.hasOwnProperty(key)) {
            const style = jsonStyle[key];
            element.style[key] = style;
        }
    }
}
//TOGGLE
//TODO: fix name
function setStyle(element, key, value) {
    element.style[key] = value;
    if(key === "color"){
        Object(_rules_rules__WEBPACK_IMPORTED_MODULE_1__["UseRules"])({element:element,key:'color',value:value});
    }
    Array.from(element.querySelectorAll(`[style*='${key}']`)).forEach(el => {
        el.style[key] = null;
        normalizeStyle(el);
    });
    //experimental: style the text decorations with color..
    //TODO:review
    // UseRules({element:element,key:key,value:value});
}
const collectStyleFromSelectedElement = (connectecElement) =>{   
    const selectedElement = Object(_elements_service__WEBPACK_IMPORTED_MODULE_2__["getSelectedElement"])();                
    return getInheirtCss(selectedElement,connectecElement);
}

function normalizeStyle(element) {
    if(!element) return null;
    //TODO:review
    const style = element.getAttribute('style');
    if (!style) {
        element.removeAttribute('style');
    } else {
        const collectStyles = getStyle(element);
        for (const key in collectStyles) {
            if (collectStyles.hasOwnProperty(key)) {
                Array.from(element.querySelectorAll(`[style*='${collectStyles[key]}']`)).forEach(el => {
                    el.style[key] = null;
                    normalizeStyle(el);
                });
            }
        }
    }
}
function JsonObjectToStyleString(styles) {
    let collectStyles = [];
    for (const key in styles) {
        if (styles.hasOwnProperty(key)) {
            const style = styles[key];
            collectStyles.push(`${key}:${style}`);
        }
    }
    return collectStyles.join(';');
}
function getStyle(el) {
    if (!el || !el.style) return {};
    let styles = {};
    let style = el.getAttribute('style');
    if (style) {
        let collectStyles = style.split(';');
        if (Array.isArray(collectStyles)) {
            collectStyles.forEach(style => {

                const keyValue = style.split(':');
                if (keyValue[1] && keyValue[0])
                    styles[keyValue[0].trim()] = keyValue[1].trim();
            })
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




/**
 * @param {Element} el - element to normalize
 */
function normalizeElement(el) {
    const recurse = (element) => {
        Array.from(element.children).forEach((child) => {
            recurse(child);
            _normalize(child);
        })
        const mergeNodesStyles = element => {
            let merged = false;
            Array.from(element.children).forEach((element) => {
                let wrapper = element;
                while (wrapper !== null) {
                    const nextElement = wrapper.nextSibling;
                    if (!nextElement){
                        break;
                    }
                    wrapper = Object(_utilis_merger__WEBPACK_IMPORTED_MODULE_2__["mergeTwoNodes"])(wrapper, nextElement);
                    merged = merged || wrapper !== null;
                }
            })
            return merged;
        }

        const mergeNodesContent = element => {
            let merged = false;
            Array.from(element.children).forEach((child) => {
                let wrapper = child;
                while (wrapper && wrapper.nodeType === 1) {
                    wrapper = Object(_utilis_merger__WEBPACK_IMPORTED_MODULE_2__["mergeNodeContect"])(wrapper);
                    merged = merged || wrapper !== null;
                }
            })
            return merged;
        }
        let mergedStyles = false;
        let mergedContent = false;
        do {
            element = _normalize(element);
            if(element){
                mergedStyles = mergeNodesStyles(element);
                mergedContent = mergeNodesContent(element);
            }
           
        } while (mergedContent && element);
    }
    el.normalize();
    recurse(el);

    function _normalize(element) {
        element.normalize();
        Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(element);
        Object(_style_service__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])(element);
        // 
            //  const tags = ["STRIKE", "EM", "I", "B", "STRONG", "U", "A"];

        //TODO: normalizr attributes (no:style,className)
        if (element && element.nodeName === "SPAN" && (!element.textContent.trim() || element.attributes.length === 0)) {
            const unwrapped = element.unwrap();
            return null;
        }
        return element;
    }
}


/**
 * @param {Array} textNodes - textnode to remove the zero space like : u200B
 */
function removeZeroSpace(textNodes) {
    if (!Array.isArray(textNodes)) {
        textNodes = [textNodes];
    }
    textNodes.forEach(el => {
        if (el.nodeType === Node.TEXT_NODE && el.parentElement && el.parentElement.nodeName !== "TEXT-SELECTION") {
            el.textContent = el.textContent.replace(/\u200B/g, '');
        }
    })
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
class DomUtilis {


  isElement(obj) {
    try {
      return obj instanceof HTMLElement;
    }
    catch (e) {
      return (typeof obj === "object") &&
        (obj.nodeType === 1) && (typeof obj.style === "object") &&
        (typeof obj.ownerDocument === "object");
    }
  }
  
  wrap(el, wrapper) {
    //el should be array
    let elements = [];
    if (Array.isArray(el)) {
      elements = el;
    } else {
      elements = [el];
    }

    const parents = elements.map(e => e.parentNode);
    var parentsDiff = parents.filter((p, _, self) => { return self[0] !== p });
    if (parentsDiff.length !== 0) {
      console.log(`[wrap] found ${parentsDiff.length} different parents 😅`);
      return;
    }
    parents[0].insertBefore(wrapper, elements[0])
    elements.forEach(_el => wrapper.appendChild(_el))

    return true;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new DomUtilis()); 

Document.prototype.getSelectedElement=function(){var e=document.getSelection();if(null!==e){var t=e.anchorNode;if(null!==t){for(;3===t.nodeType;)t=t.parentNode;return t}return null}}
Element.prototype.wrap = ( wrapper) => {
  if (typeof wrapper === "string") wrapper = document.createElement(wrapper);
  undefined.parentNode.insertBefore(wrapper, undefined);
  wrapper.appendChild(undefined);
  return wrapper;
}
Element.prototype.createSelection = function() {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(this);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  } 
}
Element.prototype.ischildOf = function(parent) {
  if (!parent) return false;
  let node = this.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
const _wrap = function(wrapper) {
  if (!this.parentNode) return false;
  this.parentNode.insertBefore(wrapper, this);
  wrapper.appendChild(this);
  return wrapper;
}
Text.prototype.wrap = _wrap;
Element.prototype.wrap = _wrap;
Element.prototype.insertAfter = function (newNode) {
  this.parentNode.insertBefore(newNode, this.nextSibling);
}
Element.prototype.replaceNode = function(replacementNode) {
  if (this.parentNode) {
    this.parentNode.insertBefore(replacementNode, this)
    this.remove();
    return replacementNode;
  }
}
Element.prototype.unwrap = function() {
  var range = document.createRange()
  range.selectNodeContents(this)
  var extraContents = range.extractContents();
  this.replaceNode(extraContents)
  return extraContents;
}


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









/**
 *  * Returns the new merge element
 * @param {Element} DomElement - element to merge with his first child
 */
const mergeNodeContect = node => {

    if (!_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(node)) {
        console.error('one of the props is not dom element.., please insert two element to merge..');
        return null;
    }
    if (node.nodeName !== "SPAN" || node.nodeType !== Node.ELEMENT_NODE) {
        console.error('[mergeNodeContect] node is not a span');
        return null;
    }

    const firstChild = node.firstElementChild;
    if (!firstChild) {
        console.error('[mergeNodeContect] first child not found');
        return null;
    }
    if (firstChild.nodeName !== "SPAN" || firstChild.nodeType !== Node.ELEMENT_NODE) {
        console.error('[mergeNodeContect] firstChild is not a span');
        return null;
    }
    if (node.textContent !== firstChild.textContent) {
        console.error('[mergeNodeContect] text content is different');
        return null;
    }
    const _elementProps = {
        style: Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getStyle"])(node),
        classes: Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["getClasses"])(node),
        attrs: Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_3__["getAttributes"])(node)
    }
    for (const style in _elementProps.style) {
        const styleValue = _elementProps.style[style];
        firstChild.style[style] = (firstChild.style[style] + " " + styleValue).trim();
    }
    Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])(firstChild);

    for (const attr in _elementProps.attrs) {
        const attrValue = _elementProps.attrs[attr];
        firstChild.setAttribute(attr, attrValue);
    }
    firstChild.classList.add(..._elementProps.classes);
    Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["normalizeClassName"])(firstChild);
    Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(firstChild);
    if(firstChild.parentElement)
    firstChild.parentElement.unwrap();
    return firstChild;
};
function mergeTwoNodes(elementOne, elementTwo) {
    console.log('[mergeTwoNodes] START');
    if (!_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(elementOne) || !_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(elementTwo)) {
        console.error('one of the props is not dom element.., please insert two element to merge..');
        return null;
    }
    if (elementOne.nodeName !== "SPAN" || elementTwo.nodeName !== "SPAN") {
        console.error('one of the props is not dom element.., please insert two element to merge..');
        return null;
    }
    const _elementsData = [{
        style: Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getStyle"])(elementOne),
        classes: Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["getClasses"])(elementOne),
        attrs: Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_3__["getAttributes"])(elementOne)
    },
    {
        style: Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getStyle"])(elementTwo),
        classes: Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["getClasses"])(elementTwo),
        attrs: Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_3__["getAttributes"])(elementTwo)
    }]
    const getCommonClasses = (classes1, classes2) => {
        if (!classes1 || !classes2)
            return [];
        const c1 = [...classes1];
        const c2 = [...classes2];
        return c1.filter(c => c2.includes(c));
    }
    const getCommonStyles = (style1, style2) => {
        const commmonStyles = {};
        for (const s in style1) {
            if (!style2[s])
                continue;

            const style1Values = style1[s];
            const style2Values = style2[s];
            if (style2Values === style1Values) {
                commmonStyles[s] = style2Values;
            }
        }
        return commmonStyles;
    };
    const commoncLasses = getCommonClasses(_elementsData[0].classes, _elementsData[1].classes);
    console.log('commonClassses',commoncLasses,elementOne,elementTwo,_elementsData)

    const commonStyles = getCommonStyles(_elementsData[0].style, _elementsData[1].style);
    const buildWrappingElement = (commonStyles, commoncLasses) => {
        const wrapper = document.createElement('span');
        // handle styles
        for (const s in commonStyles)
            wrapper.style[s] = commonStyles[s];
            

        // handle classes
        if (commoncLasses.length > 0) {
            wrapper.classList.add(...commoncLasses);
        }
        if (wrapper.attributes.length === 0) {
            wrapper.unwrap();
            return null;
        }
        return wrapper;
    }
    const wrapper = buildWrappingElement(commonStyles, commoncLasses);
    if (!wrapper) {
        console.error('wrapper is null')
        return null;
    }

    const clearElementClasses = (node, commoncLasses) => {
        node.classList.remove(...commoncLasses);
        Object(_services_className_service__WEBPACK_IMPORTED_MODULE_2__["normalizeClassName"])(node);
    }
    const clearElementStyles = (node, commonStyles) => {
        for (const s in commonStyles)
            node.style[s] = null;
    }
    const elements = [elementOne, elementTwo];
    elements.forEach(e => {
        clearElementClasses(e, commoncLasses);
        clearElementStyles(e, commonStyles);
    })

    _DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].wrap(elements, wrapper);
    [...wrapper.children].forEach(c => {
        Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(c)
    })
    return wrapper;
};


function mergeCommonValuesObject(obj1, obj2) {
    let commonValues = {};
    for (const key in obj1) {
        if (obj2[key] && obj2[key] === obj1[key]) {
            commonValues[key] = obj1[key]
        }
    }
    return commonValues;
}

function mergeCommonArrays(arr1, arr2) {
    const mergeArr = [];
    Array.from(arr1).forEach(item => {
        if (arr2.findIndex(i => i === item) > 0) {
            mergeArr.push(item);
        }
    })
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






function splitHTML(fromElement, toElement,options = {}) {
    const {tag = "span"} = options;
    if (!fromElement.ischildOf(toElement)) {
        console.error('fromElement must be child of toElement')
        return null;
    }
    if (!_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(fromElement) || !_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(toElement)) {
        console.error('fromElement && toElement must be dom elements..');
        return null;
    }
    const setAttrs = (fromElement, toElement) => {
        const styles = Object(_services_style_service__WEBPACK_IMPORTED_MODULE_1__["getInheirtCss"])(fromElement, toElement);
        const attrs = Object(_services_attr_service__WEBPACK_IMPORTED_MODULE_2__["getInheirtAttributes"])(fromElement, toElement);
        const className = Object(_services_className_service__WEBPACK_IMPORTED_MODULE_3__["getInheirtClassNames"])(fromElement, toElement);
        const template = document.createElement(tag);
        template.className = className.join(" ");
        for (const style in styles) {
            const value = styles[style];
            template.style[style] = value;
        }
        for (const attr in attrs) {
            const value = attrs[attr];
            template.setAttribute(attr, value);
        }
        return template;
    }
    fromElement.createSelection();
    const centerElement = document.getSelectedElement();
    const centerTemplate = setAttrs(centerElement, toElement);
    //center
    centerTemplate.appendChild(fromElement);
    var sel = window.getSelection();
    var range = sel.getRangeAt(0);
    //left
    range.setStart(toElement, 0);
    const leftElement = document.getSelectedElement();
    const leftTemplate = setAttrs(leftElement, toElement);
    var leftRange = range.extractContents();
    leftTemplate.appendChild(leftRange);
    //right
    range.setEnd(toElement, toElement.childNodes.length);
    const rightElement = document.getSelectedElement();
    const rightTemplate = setAttrs(rightElement, toElement);
    var rightRange = range.extractContents();
    rightTemplate.appendChild(rightRange);
    const split = {
        left: leftTemplate,
        center: centerTemplate,
        right: rightTemplate
    }
    toElement.innerHTML = "";
    for (const el in split) {
        const element = split[el];
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
/* harmony import */ var _StyleIt_constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleIt/constants/Modes.json */ "./src/StyleIt/constants/Modes.json");
var _StyleIt_constants_Modes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./StyleIt/constants/Modes.json */ "./src/StyleIt/constants/Modes.json", 1);



class StyleIt {
  //expose only the relevant methods..
  constructor(target, config) {
    //TODO: validate target & config..
    const styleIt = new _StyleIt_index__WEBPACK_IMPORTED_MODULE_0__["default"](target, config);
    if (styleIt) {  
      this.execCmd = styleIt.execCmd;
      this.toggleClass = styleIt.toggleClass;
      this.link = styleIt.link;
      this.unLink = styleIt.unLink;
      this.save = styleIt.save;
      this.load = styleIt.load;
      this.destroy = styleIt.destroy;
      this.on = styleIt.on;
      this.MODES = _StyleIt_constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__;
      //========================================//
      this.toggleClass = this.toggleClass.bind(styleIt);
      this.execCmd = this.execCmd.bind(styleIt);
      this.on = this.on.bind(this);
      this.link = this.link.bind(styleIt);
      this.unLink = this.unLink.bind(styleIt);
      this.save = this.save.bind(styleIt);
      this.load = this.load.bind(styleIt);
      this.destroy = this.destroy.bind(styleIt);
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2NvbnN0YW50cy92b2lkX2VsbXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2luZGV4LmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9ydWxlcy9ydWxlcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9hdHRyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2tleVByZXNzL0tleVByZXNzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9saW5rLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3JhbmdlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3N0eWxlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL0RvbVV0aWxpcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL21lcmdlci5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL3NwbGl0SFRNTC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNPO0FBQ1A7O0FBRUE7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCwwQkFBMEIsNEVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNPLHNFQUFzRTtBQUM3RSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ2tCOztBQUV0QztBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBSTtBQUM1QixrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic3R5bGVpdC1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYycpLmRlZmF1bHQ7XHJcbiIsIlxyXG5jbGFzcyBUZXh0U2VsZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZVplcm9TcGFjZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJyk7XHJcbiAgICAgIGlmKGNyZWF0ZVplcm9TcGFjZSA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCImIzgyMDM7XCI7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGV4dC1zZWxlY3Rpb24nLCBUZXh0U2VsZWN0aW9uKTsgIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi91dGlsaXMvRG9tVXRpbGlzXCI7XHJcbmltcG9ydCBDb3B5UGFzdGUgZnJvbSBcIi4vc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBJbnBzZWN0b3IgZnJvbSBcIi4vc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBLZXlQcmVzcyBmcm9tIFwiLi9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzc1wiO1xyXG5cclxuaW1wb3J0IHsgZWxlbWVudFRvSnNvbiwgSnNvblRvRWxlbWVudCwgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4vc2VydmljZXMvZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuLy9UT0RPOnJldmlld1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQ29ubmVjdChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gPT5jb25uZWN0V2l0aCBzaG91bGQgYmUgZWxlbWVudCBpZCBvciBkb20gZWxlbWVudC4uJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAvLyB2YWxpZC4uXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gPT5jb25uZWN0V2l0aCBzaG91bGQgYmUgZWxlbWVudCBpZCBvciBkb20gZWxlbWVudC4uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBSZW5kZXJJbm5lckhUTUwgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbXB0eUVsZW1lbnQgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3cmFwTmFrZWRUZXh0Tm9kZXMoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBqc29uQ29udGVudCA9IGVsZW1lbnRUb0pzb24oZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlZEVsZW1lbnQgPSBKc29uVG9FbGVtZW50KGpzb25Db250ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGVtcHR5RWxlbWVudChlbGVtZW50KS50aGVuKCgpID0+IGVsZW1lbnQuaW5uZXJIVE1MID0gcmVuZGVyZWRFbGVtZW50LmlubmVySFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZVBsdWdpbnMgPSAoZWxlbWVudCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY29weVBhc3RlOiBuZXcgQ29weVBhc3RlKGVsZW1lbnQsIG9wdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yOiBuZXcgSW5wc2VjdG9yKGVsZW1lbnQsIG9wdGlvbnMub25JbnNwZWN0KSxcclxuICAgICAgICAgICAgICAgIGtleVByZXNzOiBuZXcgS2V5UHJlc3MoZWxlbWVudCwgb3B0aW9ucylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBSZW5kZXJJbm5lckhUTUwoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gdXNlUGx1Z2lucyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIC8vVE9ETzogZGVzdG9yeSBldmVudHMuLlxyXG4gICAgLy9xdWVzdGlvbjogaG93IHRvIHVzZSB0aGUgZXZlbnRzID8gXHJcblxyXG5cclxuICAgIERlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wbHVnaW5zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW5zW2tleV07XHJcbiAgICAgICAgICAgICAgICBwbHVnaW4uRGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgY29uc3Qgdm9pZF9lbGVtZW50cyA9IHtcclxuICAgIFwiQlJcIjpcIkJSXCIsXHJcbiAgICBcIkhSXCI6XCJIUlwiLFxyXG4gICAgXCJJTUdcIjpcIklNR1wiLFxyXG4gICAgXCJJTlBVVFwiOlwiSU5QVVRcIixcclxuICAgIFwiQVVESU9cIjpcIkFVRElPXCIsXHJcbiAgICBcIlZJREVPXCI6XCJWSURFT1wiLFxyXG4gICAgXCJQSUNUVVJFXCI6XCJQSUNUVVJFXCJcclxufSIsImltcG9ydCB7XHJcbiAgICB3cmFwUmFuZ2VXaXRoRWxlbWVudCxcclxuICAgIHNldFNlbGVjdGlvbkZsYWdzLFxyXG4gICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzLFxyXG4gICAgZ2V0VGV4dE5vZGVzLFxyXG4gICAgY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudCxcclxuICAgIHNldENhcmV0QXQsXHJcbiAgICBHZXRDbG9zZXN0QmxvY2tFbGVtZW50XHJcbn0gZnJvbSBcIi4vc2VydmljZXMvcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgTW9kZXMgZnJvbSAnLi9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgc2V0U3R5bGUsIHRvZ2dsZVN0eWxlLCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50LCByZW1vdmVaZXJvU3BhY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2N1c3RvbS90ZXh0U2VsZWN0ZWQnO1xyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RVZFTlRTfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUZW1wTGlua0VsZW1lbnQsIHJlc2V0VVJMLFRBUkdFVFMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9saW5rLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuL2NvbnN0YW50cy92b2lkX2VsbXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xyXG5cclxuICAgIC8vICp0YXJnZXQgPT4gY2FuIGJlIElkIG9mIEVsZW1lbnQgdGhhdCBzaG91bGQgY29udGFpbiBFZGl0b3IgaW5zdGFuY2Ugb3IgdGhlIGVsZW1lbnQgaXRzZWxmLi5cclxuICAgIC8vICpjb25maWcgPT4gIGNvbmZpZ3VyYXRpb24gcGFzc2VkIHQgICBvIFRvb2wgY29uc3RydWN0b3JcclxuICAgIC8vVE9ETzogYWRkIHRhcmdldCB2YWxpZGF0aW9ucy4uO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLl9fY29uZmlnID0ge1xyXG4gICAgICAgICAgICBvbkluc3BlY3Q6IHVuZGVmaW5lZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub24gPSAoa2V5LGNhbGxiYWNrKT0+e1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoa2V5KSAhPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwia2V5IG11c3QgYmUgYSBzdHJpbmcuLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEVWRU5UU1trZXldICA9IGNhbGxiYWNrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlSGFuZGxlcnMgPSB7XHJcbiAgICAgICAgICAgIFtNb2Rlcy5Ub2dnbGVdOiAodiwga2V5LCB2YWx1ZSwgb3B0aW9ucykgPT4gdGhpcy5vblRvZ2dsZSh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSxcclxuICAgICAgICAgICAgW01vZGVzLkV4dGVuZF06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uRXh0ZW5kKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyA/IE9iamVjdC5hc3NpZ24odGhpcy5fX2NvbmZpZywgY29uZmlnKSA6IHRoaXMuX19jb25maWc7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlZDogdGhpcy5jb25maWcub25JbnNwZWN0LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQgPSB0aGlzLkNvbm5lY3Rvci5Db25uZWN0KHRhcmdldCwgdGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFRvSnNvbih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgbG9hZChqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIEpzb25Ub0VsZW1lbnQoanNvbiwgdGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IuRGVzdHJveSgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGYpIHtcclxuICAgICAgICAgICAgdGhpc1trZXldID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlldy5cclxuICAgIC8vVE9ETzogQ3JlYXRlIG5vcm1hbGl6ZS4uXHJcbiAgICAvL3F1ZXN0aW9uOiBpZiB0ZXh0IHdhcyBzZWxlY3RlZCwgc2hvdWxkIHdlIHVud3JhcCB0aGUgc2VsZWN0aWlvbiBvbmx5ID8gXHJcbiAgICB1bkxpbmsoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiAhc2VsZWN0aW9uLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1Vud3JhcDtcclxuICAgICAgICAgICAgY29uc3QgYmFzZU5vZGUgPSBzZWxlY3Rpb24uYmFzZU5vZGU7XHJcbiAgICAgICAgICAgIGlmIChiYXNlTm9kZSAmJiBiYXNlTm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBiYXNlTm9kZS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAgPSBiYXNlTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiYXNlTm9kZSAmJiBiYXNlTm9kZS5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwID0gZWxlbWVudFRvVW53cmFwLmNsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9VbndyYXApIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGlua0VsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBBcnJheS5mcm9tKGxpbmtFbGVtZW50cykuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdEFUYWcgPSByLmNsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VzdEFUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKHIsIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYS51bndyYXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHIudW53cmFwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyhsaW5rRWxlbWVudHNbMF0sIGxpbmtFbGVtZW50c1tsaW5rRWxlbWVudHMubGVuZ3RoIC0gMV0pOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlld1xyXG4gICAgLy9UT0RPOiBtZXJnZSBhIHRhZ3MuLlxyXG4gICAgLy9UT0RPOiByZW1vdmUgYSBjaGlsZHNcclxuICAgIC8vVE9ETzogbW92ZSBmdW5jdGlvbiB0byBMaW5rLnNlcnZpY2UuanNcclxuICAgIGxpbmsob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8IChvcHRpb25zICYmICFvcHRpb25zLmhyZWYpIHx8ICAhdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbiAmJiAhd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gdGV4dCBzZWxlY3RlZC4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW53cmFwQXRhZ3MgPSAobGlua0VsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtFbGVtZW50cy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShsaW5rLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGFUYWcgPT4gYVRhZy51bndyYXAoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0QVRhZyA9IGxpbmsucGFyZW50RWxlbWVudCA/IGxpbmsucGFyZW50RWxlbWVudC5jbG9zZXN0KFwiYVwiKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEFUYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHNwbGl0SFRNTChsaW5rLCBjbG9zZXN0QVRhZywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3Nlc3RBVGFnLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0VGFyZ2V0VG9UYWcgPSAobGlua0VsZW1lbnRzLCByZW5kZXJlZExpbmssIF90YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgbGlua0VsZW1lbnRzLmZvckVhY2goYVRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhVGFnLmhyZWYgPSByZW5kZXJlZExpbms7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIF90YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0UHJvdG9jb2wgPSAoX3Byb3RvY29sLCBuZXdVUkwpID0+IHtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gX3Byb3RvY29sLnJlcGxhY2UoLzovZywgXCJcIik7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCA9IF9wcm90b2NvbC5yZXBsYWNlKC9cXC9cXC8vZywgXCJcIik7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCArPSBcIjpcIjtcclxuICAgICAgICAgICAgaWYgKF9wcm90b2NvbC5pbmNsdWRlcyhcImh0dHBcIikpIHtcclxuICAgICAgICAgICAgICAgIF9wcm90b2NvbCArPSBcIi8vXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3VVJMLnB1c2goX3Byb3RvY29sKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9wcm90b2NvbDtcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICAgICAgY29uc3QgeyBocmVmID0gXCJcIiwgcHJvdG9jb2wgPSBcIlwiLCB0YXJnZXQgPSBcIlwiIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rRWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGV0IG5ld1VSTCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IEF0YWcgPSBjcmVhdGVUZW1wTGlua0VsZW1lbnQoaHJlZik7XHJcbiAgICAgICAgbGV0IF9ocmVmID0gcmVzZXRVUkwoaHJlZi50cmltKCkpO1xyXG5cclxuICAgICAgICBsZXQgX3Byb3RvY29sID0gcHJvdG9jb2wudHJpbSgpIHx8IEF0YWcucHJvdG9jb2w7XHJcbiAgICAgICAgbGV0IF90YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHRlc3RUYXJnZXQgPSBUQVJHRVRTW3RhcmdldC50cmltKCkudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgaWYgKHRlc3RUYXJnZXQpIHtcclxuICAgICAgICAgICAgX3RhcmdldCA9IHRlc3RUYXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfcHJvdG9jb2wudHJpbSgpKSB7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCA9IHNldFByb3RvY29sKF9wcm90b2NvbCwgbmV3VVJMKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9ocmVmKSB7XHJcbiAgICAgICAgICAgIG5ld1VSTC5wdXNoKF9ocmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWRMaW5rID0gbmV3VVJMLmpvaW4oXCJcIik7XHJcbiAgICAgICAgdW53cmFwQXRhZ3MobGlua0VsZW1lbnRzKTtcclxuICAgICAgICBzZXRUYXJnZXRUb1RhZyhsaW5rRWxlbWVudHMsIHJlbmRlcmVkTGluaywgX3RhcmdldCk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyhsaW5rRWxlbWVudHNbMF0sIGxpbmtFbGVtZW50c1tsaW5rRWxlbWVudHMubGVuZ3RoIC0gMV0pOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAvL3F1ZXN0aW9uIDogd2Ugd2FudCB0byBoYW5kbGUgYW5kIHRvZ2dsZSBhbnkgYXR0cmlidXRlID8gXHJcbiAgICB0b2dnbGVDbGFzcyhjbGFzc05hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAvL2hlcmVcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoY2xhc3NOYW1lKSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJjbGFzc05hbWUgbXVzdCBiZSBhIHN0cmluZy4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcbiAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5zZWxlY3Rpb24pICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGlzVG9nZ2xlT24gPSAodHlwZW9mIChvcHRpb25zLmlzT04pID09PSBcImJvb2xlYW5cIikgPyBvcHRpb25zLmlzT04gOiBlbGVtZW50c1swXS5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgaWYgKCFpc1RvZ2dsZU9uKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdENsYXNzID0gZWwucGFyZW50RWxlbWVudC5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IHNwbGl0SFRNTChlbCwgY2xvc2VzdENsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdC5jZW50ZXIucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IG9wdGlvbnMuc2VsZWN0aW9uID8gc2V0U2VsZWN0aW9uRmxhZ3MoZWxlbWVudHNbMF0sIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdKSA6IHsgZmlyc3RGbGFnOiBudWxsLCBsYXN0RmxhZzogbnVsbCB9OyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uXHJcbiAgICAgICAgaWYgKGZpcnN0RmxhZyAmJiBsYXN0RmxhZykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsLnJlbW92ZUFsbFJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBrZXkgb2YgY3NzIFxyXG4gICAgKiAgQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdmFsdWUgb2YgY3NzXHJcbiAgICAqICBAcGFyYW0geyhPYmplY3QgfCBTdHJpbmcpfSBNb2RlcyAtIG1vZGUgZnJvbSBNb2RlcyA9PiBFeHRlbmQgb3IgVG9nZ2xlXHJcbiAgICAqICBAcGFyYW0ge3N0cmluZ30gTW9kZXMuRXh0ZW5kIC0gb3ZlcnJpZGUgc3R5bGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy50b2dnbGUgLSB0b2dnbGUgc3R5bGVcclxuICAgICogIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIFxyXG4gICAgKi9cclxuICAgIGV4ZWNDbWQoa2V5LCB2YWx1ZSwgbW9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkgfHwgIXRoaXMuaXNWQWxpZEtleVZhbHVlKGtleSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMgPSBbXTtcclxuICAgICAgICBtb2RlID0gbW9kZSA/IG1vZGUgOiBNb2Rlcy5FeHRlbmQ7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcbiAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5zZWxlY3Rpb24pICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zZWxlY3Rpb24gPSB0cnVlO1xyXG4gICBcclxuXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PXJldmlldz09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLnNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0Tm9kZSA9IHRoaXMuRUxFTUVOVFNbdGhpcy5FTEVNRU5UUy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgaWYgKGxhc3ROb2RlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlciA9IHRoaXMuY3JlYXRlQ2FyZXRQbGFjZW1lbnQobGFzdE5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMudW5XcmFwICYmIEFycmF5LmlzQXJyYXkob3B0aW9ucy51bldyYXApKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudW5XcmFwLmZvckVhY2goc2VsZWN0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKHR4dE5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RFbGVtZW50VG9VbldyYXAgPSB0eHROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0RWxlbWVudFRvVW5XcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RFbGVtZW50VG9VbldyYXAudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UaGlzIGlzIGhvdyBpIG1ha2UgdGhlIHRleHQgc2VsZWN0aW9uLCBpIGRvbnQga25vdyBpZiB0aGlzIGlzIGdvb2Qgd2F5LCBidXQgaXQgd29ya3MuLlxyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gb3B0aW9ucy5zZWxlY3Rpb24gPyBzZXRTZWxlY3Rpb25GbGFncyh0aGlzLkVMRU1FTlRTWzBdLCB0aGlzLkVMRU1FTlRTW3RoaXMuRUxFTUVOVFMubGVuZ3RoIC0gMV0pIDogeyBmaXJzdEZsYWc6IG51bGwsIGxhc3RGbGFnOiBudWxsIH07IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgcmVtb3ZlWmVyb1NwYWNlKGdldFRleHROb2Rlcyh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgbGV0IFRvZ2dsZU1vZGU7Ly9EZWNsYXJlIHRvZ2dsZSBtb2RlLCBUaGUgZmlyc3QgZWxlbWVudCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgaXMgb24gb3Igb2ZmXHJcblxyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gVG9nZ2xlTW9kZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5tb2RlSGFuZGxlcnNbbW9kZV0oZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBNb2Rlcy5Ub2dnbGUgJiYgdHlwZW9mIChUb2dnbGVNb2RlKSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBUb2dnbGVNb2RlID0gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi4gXHJcbiAgICAgICAgLy91c2UgdGhlIGZpcnN0IGFuZCBsYXN0IGZsYWdzIHRvIG1ha2UgdGhlIHRleHQgc2VsZWN0aW9uIGFuZCB1bndyYXAgdGhlbS4uXHJcbiAgICAgICAgaWYgKGZpcnN0RmxhZyAmJiBsYXN0RmxhZykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsLnJlbW92ZUFsbFJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmV0SG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJldEF0KHRoaXMuY2FyZXRIb2xkZXIsIHRoaXMuY2FyZXRIb2xkZXIudGV4dENvbnRlbnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZXMgPSAgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgICAgIGlmKHR5cGVvZiAoRVZFTlRTW1wiaW5zcGVjdFwiXSkgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RcIl0oY29sbGVjdGVkU3R5bGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzdHlsZUNoYW5nZWQnLCBjb2xsZWN0ZWRTdHlsZXMpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FyZXRQbGFjZW1lbnQoYXROb2RlKSB7XHJcbiAgICAgICAgaWYgKCFhdE5vZGUpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGNhcmV0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dC1zZWxlY3Rpb24nKTtcclxuICAgICAgICBjYXJldEhvbGRlci5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCAndHJ1ZScpO1xyXG4gICAgICAgIGF0Tm9kZS5hcHBlbmRDaGlsZChjYXJldEhvbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIGNhcmV0SG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIHBheWxvYWQpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ocGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgICBvblRvZ2dsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRldGVjdCBpZiB0aGVyZSBpcyBhbnkgcGFyZW50IHdpdGggc3R5bGUgdG8gc3BsaXQuXHJcbiAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSBjYXRjaCBmcm9tIG9wdGlvbnMgdG8gZGV0ZWN0IG1vcmUgdGhhbiBvbmUgc3R5bGUgb3IgdGFnIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50VG9TcGxpdCA9IGVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0nJHt2YWx1ZX0nXWApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudFRvU3BsaXQpLmRpc3BsYXkgIT09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaW5uZXJTcGFuLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCAmJiBlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vdW5ib2xkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEVsZW1lbnRzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHNwbGl0IGVsZW1lbnRzLCBpdHMgZXJyb3IhXHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uT2ZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke2tleX0nXWApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0QmxvY2tzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdEJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0QmxvY2tzLmNlbnRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50YXJnZXQgIT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0LCB7IGVsOiAnc3BhbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoaW5uZXJTcGFuLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RWxlbWVudHMgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzcGxpdEhUTUwgcmV0dXJuIG51bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgIT09IFwiYmxvY2tcIiAmJiBvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCAmJiBibG9ja0VsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShwYXJlbnRFbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC53cmFwKHdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHdyYXBwZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZmluZEJsb2NrID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGNvbXB1dGVkICYmIGNvbXB1dGVkLmRpc3BsYXkgIT09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUgIT09IHRoaXMuY29ubmVjdGVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmRCbG9jayhlbGVtZW50LnBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucy5hcyA9PT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gZmluZEJsb2NrKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwVGV4dE5vZGVXaXRoQXBwZW5kU3R5bGUgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLndyYXAoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlSW5saW5lU3R5bGUgPSAocGFyZW50Tm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJlbnROb2RlLmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dE5vZGVXaXRoQXBwZW5kU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhdm9pZF9lbGVtZW50c1tub2RlLm5vZGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wdXRlZC5kaXNwbGF5ICE9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUoYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIEFycmF5LmZyb20oYmxvY2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKS5mb3JFYWNoKGVsPT5lbC5zdHlsZVtrZXldID0gdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gZmluZEJsb2NrKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShibG9ja0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZVtrZXldID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwYXJnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBhcmdoLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBlbGVtZW50LndyYXAocGFyZ2gpO1xyXG4gICAgfVxyXG4gICAgaXNWQWxpZEtleVZhbHVlKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuICEhKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKTsgXHJcbiAgICB9XHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BsZWFzZSBjcmVhdGUgbmV3IGluc3RhbmNlLi4nKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWRFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgKHNlbGVjdGVkRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSB8fCBzZWxlY3RlZEVsZW1lbnQgPT09IHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VSdWxlcyhkYXRhKSB7XHJcbiAgICBjb25zdCBDb2xvclRleHREZWNvcmF0aW9uUnVsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEua2V5ID09PSBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBkYXRhLmVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0ndGV4dC1kZWNvcmF0aW9uJ11gKTtcclxuICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdHMgPSBzcGxpdEhUTUwoZGF0YS5lbGVtZW50LCB0ZXh0RGVjb3JhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdHMuY2VudGVyLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzcGxpdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUodGV4dERlY29yYXRpb24sICd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBgJHtkYXRhLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgUnVsZXMgPSBbXHJcbiAgICAgICAgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGVcclxuICAgIF1cclxuICAgIFJ1bGVzLmZvckVhY2gocnVsZSA9PiBydWxlKGRhdGEpKTtcclxufSIsIlxyXG5pbXBvcnQgeyBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vc3R5bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4uL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcmVzZXRVUkwgfSBmcm9tICcuLi9saW5rLnNlcnZpY2UnO1xyXG5cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaG93IGNhbiB3ZSBleHBvc2UgdGhlIGNvbGxlY3RlZFN0eWxlID8gXHJcbi8vcXVlc3Rpb246IHNob3VsZCB3ZSB1c2UgdGhpcyA/IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NdXRhdGlvbk9ic2VydmVyXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHNlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9uSW5zcGVjdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gSW5wc2VjdG9yID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5vbkluc3BlY3QgPSBvbkluc3BlY3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhdW5jaEluc3BlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub25JbnNwZWN0KSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluc3BlY3QoY29sbGVjdGVkU3R5bGUpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkRWxlbWVudCApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVRhZyA9IHNlbGVjdGVkRWxlbWVudC5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKGFUYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSkgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RMaW5rXCJdKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOmFUYWcucHJvdG9jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOnJlc2V0VVJMKGFUYWcuaHJlZiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6YVRhZy5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIikgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6YVRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXZpZXdcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGggPD0gMSAmJiAhdGhpcy50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXVuY2hJbnNwZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG4gICAgICAgIHRoaXMuRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG4vL2NsYXNzIGFuZCBzdHlsZSBub3QgaW5jbHVkZXMgeWV0Li5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRBdHRyaWJ1dGVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gY3VycmVjdEVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZihhdHRyc1tpXS5uYW1lICAhPT1cImNsYXNzXCIgJiYgYXR0cnNbaV0ubmFtZSAgIT09IFwic3R5bGVcIil7XHJcbiAgICAgICAgICAgICAgICBpZighYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQsZ2V0QWxsKXtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmKGdldEFsbCAgfHwgKCFnZXRBbGwgJiYgYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpKXtcclxuICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxBdHRycyhlbGVtZW50KXtcclxuICAgICAgaWYoZWxlbWVudCAmJiAhZWxlbWVudC5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlbGVtZW50IG5vdCBoYXZlIGF0dHJpYnV0ZXMuLlwiKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyPT5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKSlcclxuICB9IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIF9wYXJlbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChfcGFyZW50ICYmIF9wYXJlbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBfcGFyZW50LmNsYXNzTGlzdDtcclxuICAgICAgICBBcnJheS5mcm9tKG1hcCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMuZmluZEluZGV4KGMgPT4gYyA9PT0gbmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbn1cclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGlzIGV4cGVuc2l2ZSB0b28gbXVjaD8gXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCkge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcclxuICAgICAgICByZW1vdmVFbXB0eUNsYXNzKGVsZW1lbnQpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY2xhc3M9JyR7Y30nXWApKS5mb3JFYWNoKG5vZGUgPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5Q2xhc3Mobm9kZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbltjbGFzc10nKSkuY29uY2F0KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChjaGlsZCA9PiBjbGVhcihjaGlsZCkpO1xyXG59XHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBhYm91dCB0aGlzIG5hbWUgPyBcclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApKS5jb25jYXQodGhpcyk7XHJcbm5vZGVzLmZvckVhY2gobm9kZT0+bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xyXG59IiwiaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvdm9pZF9lbG1zXCI7XHJcbmltcG9ydCB7IHdhbGtPbkVsZW1lbnQsIHdyYXBOYWtlZFRleHROb2RlcyB9IGZyb20gXCIuLi9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q3NzLCBzZXRTdHlsZXMgfSBmcm9tIFwiLi4vc3R5bGUuc2VydmljZVwiO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplUGFzZWRFbGVtZW50ID0gKHRhcmdldCkgPT4ge1xyXG5cclxuICB3YWxrT25FbGVtZW50KHRhcmdldCwgKG5vZGUpID0+IHtcclxuICAgIGlmIChub2RlICE9PSB0YXJnZXQgJiYgbm9kZS5wYXJlbnRFbGVtZW50ICYmIG5vZGUuc3R5bGUuZGlhcGxheSAhPT0gXCJpbmxpbmVcIikge1xyXG4gICAgICBjb25zdCBzYW1lUEFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50LmNsb3Nlc3Qobm9kZS5ub2RlTmFtZSk7XHJcbiAgICAgIGlmIChzYW1lUEFyZW50ICYmIHNhbWVQQXJlbnQgIT09IHRhcmdldCkge1xyXG4gICAgICAgIG5vZGUudW53cmFwKCk7XHJcbiAgICAgICAgcmV0dXJuIHNhbWVQQXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weVBhc3RlIHtcclxuXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHRoaXMuc3R5bGVzVG9QYXN0ZSA9IHR5cGVvZiBvcHRpb25zLnN0eWxlc1RvUGFzdGUgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLnN0eWxlc1RvUGFzdGUgOiBudWxsO1xyXG4gICAgdGhpcy5vbkNvcHkgPSB0eXBlb2Ygb3B0aW9ucy5vbkNvcHkgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMub25Db3B5IDogbnVsbDtcclxuICAgIHRoaXMub25QYXN0ZSA9IHR5cGVvZiBvcHRpb25zLm9uUGFzdGUgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMub25QYXN0ZSA6IG51bGw7XHJcbiAgICB0aGlzLnBhc3RlID0gdGhpcy5wYXN0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb3B5ID0gdGhpcy5jb3B5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgfVxyXG4gIGNvcHkoZXZlbnQpIHtcclxuICAgIGxldCBodG1sID0gXCJcIjtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBpZiAoc2VsLnJhbmdlQ291bnQpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWwucmFuZ2VDb3VudDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICBsZXQgY29waWVkTm9kZSA9IHNlbC5nZXRSYW5nZUF0KGkpLmNsb25lQ29udGVudHMoKTtcclxuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3BpZWROb2RlKTtcclxuXHJcbiAgICAgICAgICBBcnJheS5mcm9tKGNvbnRhaW5lci5jaGlsZE5vZGVzKS5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgICAgICBpZiAobi5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhcmVudENvcGllZE5vZGUgPSBzZWwuZ2V0UmFuZ2VBdChpKS5zdGFydENvbnRhaW5lci5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZENTUyA9IGdldEluaGVpcnRDc3MocGFyZW50Q29waWVkTm9kZSwgdGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gY29waWVkTm9kZS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICBzcGFuLnN0eWxlID0gY29sbGVjdGVkQ1NTO1xyXG4gICAgICAgICAgICAgIHNldFN0eWxlcyhzcGFuLCBjb2xsZWN0ZWRDU1MpO1xyXG4gICAgICAgICAgICAgIG4ud3JhcChzcGFuKTtcclxuICAgICAgICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgICAgICB9ZWxzZSBpZih2b2lkX2VsZW1lbnRzW24ubm9kZU5hbWVdICYmIG4ubm9kZU5hbWUgIT09IFwiQlJcIil7XHJcbiAgICAgICAgICAgICAgbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCA9IGNvbnRhaW5lcjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuc2VsZWN0aW9uKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24udHlwZSA9PT0gXCJUZXh0XCIpIHtcclxuICAgICAgICBodG1sID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkuaHRtbFRleHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3N0eWxlaXQvaHRtbCcsIGh0bWwuaW5uZXJIVE1MKTtcclxuICAgIGV2ZW50LmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIGh0bWwudGV4dENvbnRlbnQpO1xyXG4gIH1cclxuICBwYXN0ZShldmVudCkge1xyXG4gICAgdGhpcy5wYXN0ZVdpdGhTdHlsZXMoZXZlbnQpO1xyXG4gIH07XHJcbiAgcGFzdGVXaXRoU3R5bGVFeHAoZXZlbnQpIHtcclxuICAgIGZ1bmN0aW9uIHJlbW92ZVBvc3Rpb25zU3R5bGVzRnJvbUVsZW1lbnQoSHRtbENvbnRhaW5lcikge1xyXG4gICAgICBBcnJheS5mcm9tKEh0bWxDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0ncG9zaXRpb24nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRlbXBQYXN0ZWRFbGVtZW50KCkge1xyXG4gICAgICBsZXQgSHRtbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIEh0bWxDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIEh0bWxDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgIEh0bWxDb250YWluZXIuc3R5bGUubGVmdCA9IFwiLTk5OTlweFwiO1xyXG4gICAgICByZXR1cm4gSHRtbENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgSHRtbENvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBIdG1sQ29udGFpbmVyID0gY3JlYXRlVGVtcFBhc3RlZEVsZW1lbnQoKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICAgIEh0bWxDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YS5nZXREYXRhKCd0ZXh0L2h0bWwnKS50cmltKCk7XHJcbiAgICAgIHJlbW92ZVBvc3Rpb25zU3R5bGVzRnJvbUVsZW1lbnQoSHRtbENvbnRhaW5lcik7XHJcbiAgICAgIGlmICghSHRtbENvbnRhaW5lci5pbm5lckhUTUwpIHtcclxuICAgICAgICBIdG1sQ29udGFpbmVyLmlubmVySFRNTCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnRyaW0oKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImluc2VydHRleHRcIiwgZmFsc2UsIEh0bWxDb250YWluZXIuaW5uZXJIVE1MKTtcclxuICAgICAgICAvL3RvZG86IHN0b3AgaGVyZS4uXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIdG1sQ29udGFpbmVyKTtcclxuICAgICAgbGV0IGh0bWxOb2RlcyA9IFtdO1xyXG4gICAgICBjb25zdCByZWN1cnNlID0gKGVsLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIGVsLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xyXG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgcmVjdXJzZShub2RlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVjdXJzZShIdG1sQ29udGFpbmVyLCAobm9kZSkgPT4ge1xyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzICYmIG5vZGUudGV4dENvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnN0eWxlc1RvUGFzdGUpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc3R5bGVzVG9QYXN0ZSwga2V5KSkge1xyXG4gICAgICAgICAgICAgIHNwYW4uc3R5bGVba2V5XSA9IFwiaW5oZXJpdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBub2RlLndyYXAoc3Bhbik7XHJcbiAgICAgICAgICBodG1sTm9kZXMucHVzaChzcGFuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBodG1sTm9kZXMuZm9yRWFjaChzID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFzLnRleHRDb250ZW50LnRyaW0oKSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnN0eWxlc1RvUGFzdGUpIHtcclxuICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChjb2xsZWN0ZWRTdHlsZXMsIGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb2xsZWN0ZWRTdHlsZXNba2V5XTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcImluaGVyaXRcIikge1xyXG4gICAgICAgICAgICAgICAgcy5zdHlsZVtrZXldID0gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluY2x1ZGVzKFwibm9uZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgcy5zdHlsZVtrZXldID0gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnJlcGxhY2UoLyAvZ20sIFwiXCIpLmluY2x1ZGVzKFwiKDAsMCwwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBzLnN0eWxlW2tleV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgIHMuc3R5bGVba2V5XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHMuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgbmV3Tm9kZXMgPSBbXVxyXG4gICAgICBodG1sTm9kZXMuZm9yRWFjaCgoc3BhbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgZmlyc3RSZWN0ID0gaHRtbE5vZGVzW2luZGV4IC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICBsZXQgY3VycmVudFJlY3QgPSBzcGFuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAgIGlmICghKGZpcnN0UmVjdC50b3AgPD0gY3VycmVudFJlY3QuYm90dG9tICYmIGN1cnJlbnRSZWN0LnRvcCA8PSBmaXJzdFJlY3QuYm90dG9tKSkge1xyXG4gICAgICAgICAgICAvLyBuZXdOb2Rlcy5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgICAgIGxldCBzcGFjZUhlaWdodCA9IDE3O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VtQlIgPSBNYXRoLmZsb29yKChjdXJyZW50UmVjdC50b3AgLSBmaXJzdFJlY3QuYm90dG9tKSAvIHNwYWNlSGVpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKHN1bUJSIDw9IDApIHtcclxuICAgICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW1CUjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IFwiIFwiICsgc3Bhbi5pbm5lckhUTUxcclxuICAgICAgICAgIG5ld05vZGVzLnB1c2goc3Bhbik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdOb2Rlcy5wdXNoKHNwYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0aHRtbFwiLCBmYWxzZSwgbmV3Tm9kZXMubWFwKG4gPT4gbi5vdXRlckhUTUwpLmpvaW4oXCJcIikpXHJcbiAgICAgIHdyYXBOYWtlZFRleHROb2Rlcyh0aGlzLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRocm93IEVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgaWYgKEh0bWxDb250YWluZXIgJiYgSHRtbENvbnRhaW5lci5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgSHRtbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKEh0bWxDb250YWluZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhc3RlUGxhaW5UZXh0KGV2ZW50KSB7XHJcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY29udGVudCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnRyaW0oKTtcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcbi9nLFwiPGJyLz5cIilcclxuICAgIGNvbnN0IGlkID0gXCJ0aGlzLWlzLXRlbXAtY29udGFpbmVyLWZvci1wbGFpbi10ZXh0XCI7XHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgLy8gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydHRleHQnLCBmYWxzZSwgY29udGVudCk7XHJcbiAgICBwYXN0ZUh0bWxBdENhcmV0KGA8cCBpZD1cIiR7aWR9XCI+JHtjb250ZW50fTwvcD5gKTtcclxuICAgIGNvbnN0IGNvcGllZEVsZW1lbnQgPSB0aGlzLnRhcmdldC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICAgIGlmIChjb3BpZWRFbGVtZW50KSB7XHJcbiAgICAgIHNldENhcmV0QXQoY29waWVkRWxlbWVudCk7XHJcbiAgICAgIGlmKGNvcGllZEVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gdGhpcy50YXJnZXQgJiYgY29waWVkRWxlbWVudC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIlNQQU5cIil7XHJcbiAgICAgICAgY29waWVkRWxlbWVudC51bndyYXAoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29waWVkRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgfVxyXG4gICAgICBBcnJheS5mcm9tKHRoaXMudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkPT57XHJcbiAgICAgICAgaWYoIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9uUGFzdGUpIHtcclxuICAgICAgY29udGVudCA9IHRoaXMub25QYXN0ZShjb250ZW50KVxyXG4gICAgfVxyXG4gIH1cclxuICBwYXN0ZVdpdGhTdHlsZXMoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbmRlYnVnZ2VyXHJcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgIGNvbnN0IGNvcGllZCA9IGRhdGEuZ2V0RGF0YSgnc3R5bGVpdC9odG1sJykudHJpbSgpO1xyXG4gICAgLy9vbiBjb3BpZWQgb24gdGhlIGVkaXRvciBsb2NhbHlcclxuICAgIGlmIChjb3BpZWQpIHtcclxuICAgICAgY29uc3QgaWQgPSBcInRoaXMtaXMtdGVtcC1pZC1mb3ItcGFzdGUtY29udGVudC1pbnRvLXRoZS1kb21cIjtcclxuICAgICAgcGFzdGVIdG1sQXRDYXJldChgPGRpdiBpZD1cIiR7aWR9XCI+JHtjb3BpZWR9PC9kaXY+YCk7XHJcbiAgICAgIGNvbnN0IGNvcGllZEVsZW1lbnQgPSB0aGlzLnRhcmdldC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcclxuICAgICAgaWYgKGNvcGllZEVsZW1lbnQpIHtcclxuICAgICAgICBub3JtYWxpemVQYXNlZEVsZW1lbnQoY29waWVkRWxlbWVudCk7XHJcbiAgICAgICAgc2V0Q2FyZXRBdChjb3BpZWRFbGVtZW50KTtcclxuICAgICAgICBjb3BpZWRFbGVtZW50LnVud3JhcCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3cmFwTmFrZWRUZXh0Tm9kZXModGhpcy50YXJnZXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaWYgY29waWVkIG5vdCBmcm9tIHRoZSBsb2NhbCBlZGl0b3JcclxuICAgICAgLy8gY2hlY2sgaWYgZXhwZXJpbWVudGFsIHBhc3RlIHdhcyBhY3RpdmF0ZVxyXG4gICAgICBpZiAodGhpcy5zdHlsZXNUb1Bhc3RlKSB7XHJcbiAgICAgICAgdGhpcy5wYXN0ZVdpdGhTdHlsZUV4cChldmVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHRoaXMucGFzdGVQbGFpblRleHQoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCB0aGlzLnBhc3RlKTtcclxuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuY29weSk7XHJcbiAgfVxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdldFN0eWxlLCBKc29uT2JqZWN0VG9TdHlsZVN0cmluZyB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IExldmVscyBmcm9tICcuLi9jb25zdGFudHMvTGV2ZWxzLmpzb24nO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy92b2lkX2VsbXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwTmFrZWRUZXh0Tm9kZXModGFyZ2V0KXtcclxuICAgIC8vIHRhcmdldCBpcyB0aGUgbWFpbiBjb250ZW50ZWRpdGFibGUgZWxlbWVudFxyXG4gICAgLy8gc28gXHJcbiAgICBBcnJheS5mcm9tKHRhcmdldC5jaGlsZE5vZGVzKS5mb3JFYWNoKGM9PntcclxuIFxyXG4gICAgICAgIGlmKGMubm9kZVR5cGUgPT09MSAmJiAhYy50ZXh0Q29udGVudC50cmltKCkgJiYgYy5jaGlsZHJlbi5sZW5ndGg9PT0wICYmICF2b2lkX2VsZW1lbnRzW2Mubm9kZU5hbWVdKXtcclxuICAgICAgICAgICAgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjLm5vZGVUeXBlID09PSAzICYmIGMucGFyZW50RWxlbWVudCl7XHJcbiAgICAgICAgICAgIGMucGFyZW50RWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoKChjLm5vZGVUeXBlID09PTMgJiYgYy5wYXJlbnRFbGVtZW50ID09PSB0YXJnZXQpKSAmJiAhYy5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJwXCIpICYmIGMudGV4dENvbnRlbnQudHJpbSgpKXtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICBjLndyYXAocCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgIGZ1bmN0aW9uIHdhbGtUaGVET00obm9kZSwgZnVuYykge1xyXG4gICAgaWYoIW5vZGUpIHJldHVybiBudWxsO1xyXG4gICAgZnVuYyhub2RlKTtcclxuICAgIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpO1xyXG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0ICBmdW5jdGlvbiB3YWxrT25FbGVtZW50KG5vZGUsIGZ1bmMpIHtcclxuICAgIGlmKCFub2RlKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IGNvbnRpbnVlV2l0aCA9IGZ1bmMobm9kZSk7XHJcbiAgICBpZihjb250aW51ZVdpdGgpe1xyXG4gICAgICAgIG5vZGUgPSBjb250aW51ZVdpdGg7XHJcbiAgICB9XHJcbiAgICBub2RlID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgd2Fsa09uRWxlbWVudChub2RlLCBmdW5jKTtcclxuICAgICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgfVxyXG4gIH0gXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEVsZW1lbnQoKSB7XHJcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgICB2YXIgYW5jTm9kZSA9IG5vZGUuZm9jdXNOb2RlO1xyXG4gICAgICAgIGlmIChhbmNOb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChhbmNOb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBhbmNOb2RlID0gYW5jTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGVsID0gKGFuY05vZGUubm9kZVR5cGUgPT09IDMgPyBhbmNOb2RlLnBhcmVudE5vZGUgOiBub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFuY05vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBKc29uVG9FbGVtZW50KGpzb25PYmplY3QsIHBhcmVudEVsZW1lbnQpIHtcclxuICAgIC8vVE9ETzogY3JlYXRlIHBhcmVudGVsZW1lbnQgYW5kIGpzb25vYmplY3QgdmFsaWRhdGlvbiAgIFxyXG4gICAgY29uc3QgcmVuZGVyQXR0cnMgPSAoanNFbGVtZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGpzRWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgPSBbLi4uanNFbGVtZW50LmNsYXNzTGlzdF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuc3R5bGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdGVkU3R5bGUgPSBKc29uT2JqZWN0VG9TdHlsZVN0cmluZyhqc0VsZW1lbnQuc3R5bGUpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlID0gY29sbGVjdGVkU3R5bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogb3RoZXIgYXR0cnMuLi5cclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZUh0bWxFbGVtZW50ID0gKGpzRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vZGVUeXBlID0ganNFbGVtZW50LnRhZztcclxuICAgICAgICBsZXQgZWxlbWVudDtcclxuICAgICAgICBsZXQgaXNTaG91bGRSZW5kZXJBdHRycztcclxuICAgICAgICBzd2l0Y2ggKG5vZGVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIjdGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGpzRWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaHJlZiA9IGpzRWxlbWVudC5ocmVmO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC50YXJnZXQgPSBqc0VsZW1lbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpc1Nob3VsZFJlbmRlckF0dHJzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTaG91bGRSZW5kZXJBdHRycyAmJiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJlbmRlckF0dHJzKGpzRWxlbWVudCwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXJlbnRFbGVtZW50ICYmIGpzb25PYmplY3QudHlwZSA9PT0gTGV2ZWxzWycwJ10pIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoanNvbk9iamVjdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0LmNoaWxkcmVuKSkge1xyXG4gICAgICAgIGpzb25PYmplY3QuY2hpbGRyZW4uZm9yRWFjaChqc0NoaWxkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudChqc0NoaWxkKTtcclxuICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIEpzb25Ub0VsZW1lbnQoanNDaGlsZCwgaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FudCBjcmVhdGUgZG9tIGVsZW1lbnQgZnJvbSBqc29uJywganNDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50VG9Kc29uKG5vZGUsIGxldmVsKSB7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgKGxldmVsKSAhPT0gXCJudW1iZXJcIikgbGV2ZWwgPSAwO1xyXG4gICAgY29uc3Qgbm9kZVR5cGUgPSBub2RlLm5vZGVOYW1lO1xyXG4gICAgbGV0IGlzU2hvdWxkUmVuZGVyQXR0cnMgPSB0cnVlO1xyXG4gICAgbGV0IGpzb24gPSB7fTtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoTGV2ZWxzW2xldmVsXSkge1xyXG4gICAgICAgIGpzb24udHlwZSA9IExldmVsc1tsZXZlbF07XHJcbiAgICAgICAgbGV2ZWwrKztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKG5vZGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIiN0ZXh0XCI6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGpzb24udGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgICAgICBpc1Nob3VsZFJlbmRlckF0dHJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcXVlc3Rpb246IHJlcGxhY2UgXFxuID9cclxuICAgICAgICAgICAgaWYgKCFqc29uLnRleHRDb250ZW50LnRyaW0oKSkgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQVwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLmhyZWYgPSBub2RlLmhyZWY7XHJcbiAgICAgICAgICAgIGpzb24udGFyZ2V0ID0gbm9kZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIC8vVE9ETzogc2hvdWxkIHdlIHVud3JhcCB0aGlzIG5vZGUgPyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVmFsaWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMpIHtcclxuICAgICAgICAvL1RPRE86IGdldCBhdHRycyBcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldFN0eWxlKG5vZGUpO1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzdHlsZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBqc29uLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChub2RlLmNsYXNzTGlzdCAmJiBub2RlLmNsYXNzTGlzdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNsYXNzTGlzdCA9IFsuLi5ub2RlLmNsYXNzTGlzdF07XHJcblxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkTm9kZXMgJiYgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIGpzb24uY2hpbGRyZW4gPSBbLi4ubm9kZS5jaGlsZE5vZGVzXS5tYXAoKGNuKSA9PiBlbGVtZW50VG9Kc29uKGNuLCBsZXZlbCkpLmZpbHRlcih2ID0+IHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBqc29uO1xyXG5cclxufSIsImV4cG9ydCBjb25zdCBFVkVOVFMgPSB7XHJcbiAgXHJcbn0iLCJpbXBvcnQgeyB3cmFwTmFrZWRUZXh0Tm9kZXMgfSBmcm9tIFwiLi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRDbG9zZXN0QmxvY2tFbGVtZW50LCBpbnNlcnRBZnRlciwgcGFzdGVIdG1sQXRDYXJldCwgc2V0Q2FyZXRBdCB9IGZyb20gXCIuLi9yYW5nZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7dm9pZF9lbGVtZW50c30gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3ZvaWRfZWxtcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVByZXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSBrZXlQcmVzcyA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uS2V5UHJlc3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSBvcHRpb25zLm9uS2V5UHJlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5rZXlwcmVzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHMvZywgXCJcIikucmVwbGFjZSgvW1xcdTIwMEItXFx1MjAwRFxcdUZFRkZdL2csICcnKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYoIXRhcmdldC50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhc3RlSHRtbEF0Q2FyZXQoXCIgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGVidWdnZXJcclxuICAgICAgICAgICAgICAgIC8vICAgICB3cmFwTmFrZWRUZXh0Tm9kZXModGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3RlSHRtbEF0Q2FyZXQoXCI8YnIvPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KHNlbGVjdGlvbi5hbmNob3JOb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ID09PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UyZXh0cmFjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UyZXh0cmFjdC5leHRyYWN0Q29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHNlbGVjdGlvbi5hbmNob3JOb2RlLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChibG9ja0VsZW1lbnQsIGJsb2NrRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICE9PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5jaGlsZHJlbikuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0gYmxvY2tFbGVtZW50ICYmICFjLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuaW5uZXJIVE1MID0gYmxvY2tFbGVtZW50LmlubmVySFRNTCArIFwiJiM4MjAzO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY0ZyYWdtZW50ID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY0ZyYWdtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEgJiYgIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSAmJiAhdm9pZF9lbGVtZW50c1tjaGlsZC5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGJsb2NrRWxlbWVudC5ub2RlTmFtZSB8fCBcInBcIik7XHJcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2NGcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0QWZ0ZXIoZWwsIGJsb2NrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrRWxlbWVudC5hcHBlbmRDaGlsZChicik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2Rlcyh0aGlzLnRhcmdldCwgeyBleHBlY3Q6IGJsb2NrRWxlbWVudCB9KTtcclxuICAgICAgICAgICAgICAgIHNldENhcmV0QXQoZWwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9uS2V5UHJlc3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbktleVByZXNzKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCAgIGNvbnN0IFRBUkdFVFMgPSB7XHJcbiAgICBfYmxhbms6IFwiX2JsYW5rXCIsXHJcbiAgICBfc2VsZjogXCJfc2VsZlwiLFxyXG4gICAgX3BhcmVudDogXCJfcGFyZW50XCIsXHJcbiAgICBfdG9wOiBcIl90b3BcIlxyXG59XHJcbmV4cG9ydCAgY29uc3QgcmVzZXRVUkwgPSAoc3JjKSA9PiB7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvaHR0cHM6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9odHRwOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvbWFpbHRvOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvdGVsOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFwvL2csICcnKTtcclxuICAgIHJldHVybiBzcmM7XHJcbn1cclxuZXhwb3J0ICAgY29uc3QgY3JlYXRlVGVtcExpbmtFbGVtZW50ID0gKGhyZWYpID0+IHtcclxuICAgIGNvbnN0IEF0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIEF0YWcuaHJlZiA9IGhyZWY7XHJcbiAgICByZXR1cm4gQXRhZztcclxufSIsImltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIChvcHRpb25zKSAhPT0gXCJvYmplY3RcIikgb3B0aW9ucyA9IHt9O1xyXG4gIGxldCBpbm5lclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbnMuZWwgfHwgXCJzcGFuXCIpO1xyXG4gIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKS5mb3JFYWNoKGNoaWxkID0+IGlubmVyU3Bhbi5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXJTcGFuKTtcclxuICByZXR1cm4gaW5uZXJTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpIHtcclxuICBpZiAoIWVsZW1lbnQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICB9XHJcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgIT09IFwiaW5saW5lXCIpIHJldHVybiBlbGVtZW50O1xyXG4gIGxldCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIHdoaWxlIChwYXJlbnRFbGVtZW50ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZW1lbnQpLmRpc3BsYXkgPT09IFwiaW5saW5lXCIpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcclxufVxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VXaXRoQmxvY2tFbGVtZW50KGxpbWl0RWxlbWVudCkge1xyXG4gIGNvbnN0IHdyYXBFbGVtZW50V2l0aEJsb2NrID0gKGVsKSA9PiB7XHJcbiAgICBsZXQgd0VsID0gXCJkaXZcIjtcclxuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIpIHtcclxuICAgICAgd0VsID0gXCJwXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3RWwpO1xyXG4gICAgZWwud3JhcCh3cmFwcGVyKTtcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG4gIH1cclxuICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gIGxldCBub2RlcyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgbm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBjb25zdCBibG9ja0VsID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbCk7XHJcbiAgICBpZiAoYmxvY2tFbCkge1xyXG4gICAgICBpZiAoYmxvY2tFbC5pc2NoaWxkT2YobGltaXRFbGVtZW50KSkge1xyXG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBlbGVtZW50cy5maW5kKGJsb2NrID0+IGJsb2NrRWwuaXNjaGlsZE9mKGJsb2NrKSk7XHJcbiAgICAgICAgaWYgKCFmb3VuZGVkKVxyXG4gICAgICAgICAgZWxlbWVudHMucHVzaChibG9ja0VsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBfd3JhcHBlciA9IHdyYXBFbGVtZW50V2l0aEJsb2NrKGVsKTtcclxuICAgICAgICBlbGVtZW50cy5wdXNoKF93cmFwcGVyKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgX3dyYXBwZXIgPSB3cmFwRWxlbWVudFdpdGhCbG9jayhlbCk7XHJcbiAgICAgIGVsZW1lbnRzLnB1c2goX3dyYXBwZXIpO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgbm9kZXM6IG5vZGVzLFxyXG4gICAgYmxvY2tzOiBlbGVtZW50c1xyXG4gIH1cclxuICByZXR1cm4gZWxlbWVudHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSYW5nZVdpdGhFbGVtZW50KHdyYXBUYWcpIHtcclxuICBjb25zdCByYW5nZXMgPSBnZXRSYW5nZXMoKTtcclxuICByZXR1cm4gcmFuZ2VzLm1hcChyID0+IHtcclxuICAgIHJldHVybiB3cmFwUmFuZ2VUZXh0KHdyYXBUYWcsIHIpO1xyXG4gIH0pLmZsYXQoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2VzKCkge1xyXG4gIGxldCByYW5nZXMgPSBbXTtcclxuXHJcbiAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbC5yYW5nZUNvdW50OyBpKyspIHtcclxuICAgIHJhbmdlc1tpXSA9IHNlbC5nZXRSYW5nZUF0KGkpO1xyXG4gIH1cclxuICByZXR1cm4gcmFuZ2VzO1xyXG59XHJcbi8vIHJldHVybiBhbGwgdGV4dCBub2RlcyB0aGF0IGFyZSBjb250YWluZWQgd2l0aGluIGBlbGBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHROb2RlcyhlbCkge1xyXG4gIGVsID0gZWwgfHwgZG9jdW1lbnQuYm9keVxyXG5cclxuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCxcclxuICAgIHdhbGtlciA9IGRvYy5jcmVhdGVUcmVlV2Fsa2VyKGVsLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpLFxyXG4gICAgdGV4dE5vZGVzID0gW10sXHJcbiAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XHJcblxyXG4gIHdoaWxlIChub2RlKSB7XHJcbiAgICB0ZXh0Tm9kZXMucHVzaChub2RlKTtcclxuICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcclxuICB9XHJcbiAgcmV0dXJuIHRleHROb2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZXNJbnRlcnNlY3QocmFuZ2VBLCByYW5nZUIpIHtcclxuICByZXR1cm4gcmFuZ2VBLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhSYW5nZS5FTkRfVE9fU1RBUlQsIHJhbmdlQikgPT09IC0xICYmXHJcbiAgICByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLlNUQVJUX1RPX0VORCwgcmFuZ2VCKSA9PT0gMVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSYW5nZUZyb21Ob2RlKG5vZGUpIHtcclxuICB2YXIgcmFuZ2UgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gIHRyeSB7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlKG5vZGUpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpXHJcbiAgfVxyXG4gIHJldHVybiByYW5nZVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJldENoYXJhY3Rlck9mZnNldFdpdGhpbihlbGVtZW50KSB7XHJcbiAgdmFyIGNhcmV0T2Zmc2V0ID0gMDtcclxuICB2YXIgZG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQ7XHJcbiAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xyXG4gIHZhciBzZWw7XHJcbiAgaWYgKHR5cGVvZiB3aW4uZ2V0U2VsZWN0aW9uICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHNlbCA9IHdpbi5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwucmFuZ2VDb3VudCA+IDApIHtcclxuICAgICAgdmFyIHJhbmdlID0gd2luLmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgIHZhciBwcmVDYXJldFJhbmdlID0gcmFuZ2UuY2xvbmVSYW5nZSgpO1xyXG4gICAgICBwcmVDYXJldFJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbGVtZW50KTtcclxuICAgICAgcHJlQ2FyZXRSYW5nZS5zZXRFbmQocmFuZ2UuZW5kQ29udGFpbmVyLCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICBjYXJldE9mZnNldCA9IHByZUNhcmV0UmFuZ2UudG9TdHJpbmcoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICgoc2VsID0gZG9jLnNlbGVjdGlvbikgJiYgc2VsLnR5cGUgIT0gXCJDb250cm9sXCIpIHtcclxuICAgIHZhciB0ZXh0UmFuZ2UgPSBzZWwuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHZhciBwcmVDYXJldFRleHRSYW5nZSA9IGRvYy5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgcHJlQ2FyZXRUZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQoZWxlbWVudCk7XHJcbiAgICBwcmVDYXJldFRleHRSYW5nZS5zZXRFbmRQb2ludChcIkVuZFRvRW5kXCIsIHRleHRSYW5nZSk7XHJcbiAgICBjYXJldE9mZnNldCA9IHByZUNhcmV0VGV4dFJhbmdlLnRleHQubGVuZ3RoO1xyXG4gIH1cclxuICByZXR1cm4gY2FyZXRPZmZzZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENhcmV0QXQoZWxlbWVudCwgY2hhckluZGV4ID0gMCkge1xyXG5cclxuICB2YXIgbm9kZSA9IGVsZW1lbnQ7XHJcbiAgbm9kZS5mb2N1cygpO1xyXG4gIHZhciB0ZXh0Tm9kZSA9IEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKTtcclxuICBpZiAodGV4dE5vZGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICB0ZXh0Tm9kZSA9IGVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodGV4dE5vZGUgJiYgdGV4dE5vZGUuZmlyc3RDaGlsZCAmJiB0ZXh0Tm9kZS5ub2RlVHlwZSAhPT0gMykge1xyXG4gICAgICB0ZXh0Tm9kZSA9IHRleHROb2RlLmZpcnN0Q2hpbGQ7XHJcbiAgICB9XHJcbiAgICBpZih0ZXh0Tm9kZSl7XHJcbiAgICAgIHRleHROb2RlID0gW3RleHROb2RlXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGVbMF0sIGNoYXJJbmRleCk7XHJcbiAgcmFuZ2Uuc2V0RW5kKHRleHROb2RlWzBdLCBjaGFySW5kZXgpO1xyXG4gIHJhbmdlLmNvbGxhcHNlKHRydWUpXHJcbiAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhc3RlSHRtbEF0Q2FyZXQoaHRtbCkge1xyXG4gIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gIGNvbnN0IGNvbnRlbnRlZGl0YWJsZSA9IHNlbGVjdGVkRWxlbWVudC5jbG9zZXN0KFwiW2NvbnRlbnRlZGl0YWJsZV1cIik7XHJcbiAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gIGlmIChjb250ZW50ZWRpdGFibGUpIHtcclxuICAgIGlmICghY29udGVudGVkaXRhYmxlLmNvbnRlbnRFZGl0YWJsZSkge1xyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICB9XHJcbiAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgdmFyIHNlbCwgcmFuZ2U7XHJcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIC8vIElFOSBhbmQgbm9uLUlFXHJcbiAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsLmdldFJhbmdlQXQgJiYgc2VsLnJhbmdlQ291bnQpIHtcclxuICAgICAgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcclxuXHJcbiAgICAgIC8vIFJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCgpIHdvdWxkIGJlIHVzZWZ1bCBoZXJlIGJ1dCBpc1xyXG4gICAgICAvLyBvbmx5IHJlbGF0aXZlbHkgcmVjZW50bHkgc3RhbmRhcmRpemVkIGFuZCBpcyBub3Qgc3VwcG9ydGVkIGluXHJcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgKElFOSwgZm9yIG9uZSlcclxuICAgICAgbGV0IGVsO1xyXG4gICAgICBpZiAodHlwZW9mIChodG1sKSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiAoaHRtbCkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBlbCA9IGh0bWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBub2RlLCBsYXN0Tm9kZTtcclxuICAgICAgd2hpbGUgKChub2RlID0gZWwuZmlyc3RDaGlsZCkpIHtcclxuICAgICAgICBsYXN0Tm9kZSA9IGZyYWcuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZShmcmFnKTtcclxuXHJcbiAgICAgIC8vIFByZXNlcnZlIHRoZSBzZWxlY3Rpb25cclxuICAgICAgaWYgKGxhc3ROb2RlKSB7XHJcbiAgICAgICAgcmFuZ2UgPSByYW5nZS5jbG9uZVJhbmdlKCk7XHJcbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnRBZnRlcihsYXN0Tm9kZSk7XHJcbiAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlSW50ZXJzZWN0c05vZGUocmFuZ2UsIG5vZGUpIHtcclxuICBpZiAocmFuZ2UuaW50ZXJzZWN0c05vZGUpIHtcclxuICAgIHJldHVybiByYW5nZS5pbnRlcnNlY3RzTm9kZShub2RlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcmFuZ2VzSW50ZXJzZWN0KHJhbmdlLCBjcmVhdGVSYW5nZUZyb21Ob2RlKG5vZGUpKVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpIHtcclxuICB2YXIgY29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIsXHJcbiAgICBub2RlcyA9IGdldFRleHROb2Rlcyhjb250YWluZXIucGFyZW50Tm9kZSB8fCBjb250YWluZXIpXHJcblxyXG4gIHJldHVybiBub2Rlcy5maWx0ZXIoKG5vZGUpID0+IHtcclxuICAgIHJldHVybiByYW5nZUludGVyc2VjdHNOb2RlKHJhbmdlLCBub2RlKSAmJiBpc05vbkVtcHR5VGV4dE5vZGUobm9kZSlcclxuICB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vbkVtcHR5VGV4dE5vZGUobm9kZSkge1xyXG4gIHJldHVybiBub2RlLnRleHRDb250ZW50Lmxlbmd0aCA+IDBcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xyXG4gIGlmIChlbC5wYXJlbnROb2RlKSB7XHJcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVwbGFjZW1lbnROb2RlLCBub2RlKSB7XHJcbiAgaWYgKHR5cGVvZiBub2RlLnBhcmVudE5vZGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJlbW92ZUVsZW1lbnQocmVwbGFjZW1lbnROb2RlKTtcclxuICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCBub2RlKTtcclxuICAgIHJlbW92ZUVsZW1lbnQobm9kZSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RUZXh0KG5vZGUpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KG5vZGUpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3Qgc2VsZWN0IHRleHQgaW4gbm9kZTogVW5zdXBwb3J0ZWQgYnJvd3Nlci5cIik7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XHJcbiAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV3JhcHBlckZ1bmN0aW9uKHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgc3RhcnROb2RlID0gcmFuZ2Uuc3RhcnRDb250YWluZXIsXHJcbiAgICBlbmROb2RlID0gcmFuZ2UuZW5kQ29udGFpbmVyLFxyXG4gICAgc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldCxcclxuICAgIGVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldFxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gd3JhcE5vZGUobm9kZSkge1xyXG4gICAgdmFyIGN1cnJlbnRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgIGN1cnJlbnRXcmFwcGVyID0gd3JhcHBlckVsLmNsb25lTm9kZSgpXHJcblxyXG4gICAgY3VycmVudFJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgIGlmIChub2RlID09PSBzdGFydE5vZGUgJiYgc3RhcnROb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIGN1cnJlbnRSYW5nZS5zZXRTdGFydChub2RlLCBzdGFydE9mZnNldClcclxuICAgICAgc3RhcnROb2RlID0gY3VycmVudFdyYXBwZXJcclxuICAgICAgc3RhcnRPZmZzZXQgPSAwXHJcbiAgICB9XHJcbiAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSAmJiBlbmROb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIGN1cnJlbnRSYW5nZS5zZXRFbmQobm9kZSwgZW5kT2Zmc2V0KVxyXG4gICAgICBlbmROb2RlID0gY3VycmVudFdyYXBwZXI7XHJcbiAgICAgIGVuZE9mZnNldCA9IDFcclxuICAgIH1cclxuICAgIGN1cnJlbnRSYW5nZS5zdXJyb3VuZENvbnRlbnRzKGN1cnJlbnRXcmFwcGVyKVxyXG4gICAgcmV0dXJuIGN1cnJlbnRXcmFwcGVyXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxOb2RlcygpIHtcclxuICB2YXIgbm9kZXMsIHJhbmdlO1xyXG4gIGlmICh0eXBlb2YgcmFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGlmIG5vIHJhbmdlIGlzIHNwZWNpZmllZFxyXG4gICAgcmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKVxyXG4gIH1cclxuICBpZiAocmFuZ2UuaXNDb2xsYXBzZWQpIHtcclxuICAgIC8vIG5vdGhpbmcgdG8gd3JhcFxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG4gIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcbiAgbm9kZXMgPSBub2Rlcy5tYXAobm9kZSA9PiB7XHJcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9KTtcclxuICByZXR1cm4gbm9kZXNcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlVGV4dCh3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgdmFyIG5vZGVzLCB3cmFwTm9kZTtcclxuXHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG5cclxuICBpZiAocmFuZ2UuaXNDb2xsYXBzZWQpIHtcclxuICAgIC8vIG5vdGhpbmcgdG8gd3JhcFxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdyYXBwZXJFbCA9ICdzcGFuJ1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3cmFwcGVyRWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAvLyBhc3N1bWUgaXQncyBhIHRhZ25hbWVcclxuICAgIHdyYXBwZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlckVsKTtcclxuICB9XHJcblxyXG4gIHdyYXBOb2RlID0gY3JlYXRlV3JhcHBlckZ1bmN0aW9uKHdyYXBwZXJFbCwgcmFuZ2UpXHJcblxyXG4gIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcblxyXG4gIG5vZGVzID0gbm9kZXMubWFwKHdyYXBOb2RlKTtcclxuICByZXR1cm4gbm9kZXNcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IF9vcHRpb25zID0geyByZW1vdmU6IHRydWUgfTtcclxuICBPYmplY3QuYXNzaWduKF9vcHRpb25zLCBvcHRpb25zKTtcclxuICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5zZXRCYXNlQW5kRXh0ZW50KGZpcnN0RmxhZywgMCwgbGFzdEZsYWcsIGxhc3RGbGFnLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICBpZiAoX29wdGlvbnMucmVtb3ZlKSB7XHJcbiAgICBbZmlyc3RGbGFnLCBsYXN0RmxhZ10uZm9yRWFjaChlID0+IGUudW53cmFwKCkpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uRmxhZ3MoZmlyc3RFbGVtZW50LCBMYXN0RWxlbWVudCkge1xyXG4gIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICBjb25zdCBmaXJzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGZpcnN0RmxhZy5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCBmaXJzdEVsZW1lbnQudGV4dENvbnRlbnQubGVuZ3RoID09PSAwKVxyXG4gIGNvbnN0IGxhc3RGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dC1zZWxlY3Rpb24nKTtcclxuICBsYXN0RmxhZy5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCBMYXN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcblxyXG4gIGZpcnN0RWxlbWVudC5wcmVwZW5kKGZpcnN0RmxhZyk7IC8vU2V0IGZsYWcgdGhlIGZpcnN0XHJcbiAgTGFzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFzdEZsYWcpOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICByZXR1cm4geyBmaXJzdEZsYWcsIGxhc3RGbGFnIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkSFRNTCgpIHtcclxuICB2YXIgcmFuZ2U7XHJcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIGlmIChyYW5nZS5jb2xsYXBzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRlbnQgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIHJhbmdlOiByYW5nZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNlbGVjdGlvbigpIHtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICByZXR1cm4gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVNlbGVjdGlvbihyYW5nZSkge1xyXG4gIGlmIChyYW5nZSkge1xyXG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgcmFuZ2Uuc2VsZWN0KSB7XHJcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZVJ1bGVzIH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzXCI7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBpbnRhaWxTdHlsZSA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBnZXRTdHlsZShjdXJyZWN0RWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwW3N0eWxlXTtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbiAgY291bGQgYmUgdHdpY2UgbGlrZSB1bmRlcmxpbmUgYW5kIHN0cmlrZSB0aGVyb3VnaC4uIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRhaWxTdHlsZVtzdHlsZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW50YWlsU3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGludGFpbFN0eWxlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IGVsLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9KVxyXG59XHJcbi8vVE9HR0xFXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBpc09uKSB7XHJcbiAgICBpZiAoaXNPbikge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7dmFsdWV9J11gKSkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGVba2V5XSA9IGNoaWxkLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoY2hpbGQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShjaGlsZCk7XHJcbiAgICB9KVxyXG59XHJcbi8vRVhURU5EXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBqc29uU3R5bGUpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25TdHlsZSkge1xyXG4gICAgICAgIGlmIChqc29uU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGpzb25TdHlsZVtrZXldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9UT0dHTEVcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICBpZihrZXkgPT09IFwiY29sb3JcIil7XHJcbiAgICAgICAgVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6J2NvbG9yJyx2YWx1ZTp2YWx1ZX0pO1xyXG4gICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgIH0pO1xyXG4gICAgLy9leHBlcmltZW50YWw6IHN0eWxlIHRoZSB0ZXh0IGRlY29yYXRpb25zIHdpdGggY29sb3IuLlxyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgLy8gVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6a2V5LHZhbHVlOnZhbHVlfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgPSAoY29ubmVjdGVjRWxlbWVudCkgPT57ICAgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gZ2V0SW5oZWlydENzcyhzZWxlY3RlZEVsZW1lbnQsY29ubmVjdGVjRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShlbGVtZW50KSB7XHJcbiAgICBpZighZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0U3R5bGVzID0gZ2V0U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdFN0eWxlcykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtjb2xsZWN0U3R5bGVzW2tleV19J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKHN0eWxlcykge1xyXG4gICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLnB1c2goYCR7a2V5fToke3N0eWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0U3R5bGVzLmpvaW4oJzsnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcclxuICAgIGlmICghZWwgfHwgIWVsLnN0eWxlKSByZXR1cm4ge307XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBsZXQgc3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsZXQgY29sbGVjdFN0eWxlcyA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdFN0eWxlcykpIHtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVbMV0gJiYga2V5VmFsdWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleVZhbHVlWzBdLnRyaW0oKV0gPSBrZXlWYWx1ZVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZXM7XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWVyZ2VOb2RlQ29udGVjdCwgbWVyZ2VUd29Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXMvbWVyZ2VyXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbCAtIGVsZW1lbnQgdG8gbm9ybWFsaXplXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudChlbCkge1xyXG4gICAgY29uc3QgcmVjdXJzZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICByZWN1cnNlKGNoaWxkKTtcclxuICAgICAgICAgICAgX25vcm1hbGl6ZShjaGlsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBtZXJnZU5vZGVzU3R5bGVzID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAod3JhcHBlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gd3JhcHBlci5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5leHRFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZVR3b05vZGVzKHdyYXBwZXIsIG5leHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNDb250ZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICYmIHdyYXBwZXIubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gbWVyZ2VOb2RlQ29udGVjdCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lcmdlZFN0eWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtZXJnZWRDb250ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gX25vcm1hbGl6ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBtZXJnZWRTdHlsZXMgPSBtZXJnZU5vZGVzU3R5bGVzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbWVyZ2VkQ29udGVudCA9IG1lcmdlTm9kZXNDb250ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSB3aGlsZSAobWVyZ2VkQ29udGVudCAmJiBlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsLm5vcm1hbGl6ZSgpO1xyXG4gICAgcmVjdXJzZShlbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZShlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vICBjb25zdCB0YWdzID0gW1wiU1RSSUtFXCIsIFwiRU1cIiwgXCJJXCIsIFwiQlwiLCBcIlNUUk9OR1wiLCBcIlVcIiwgXCJBXCJdO1xyXG5cclxuICAgICAgICAvL1RPRE86IG5vcm1hbGl6ciBhdHRyaWJ1dGVzIChubzpzdHlsZSxjbGFzc05hbWUpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIgJiYgKCFlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCB1bndyYXBwZWQgPSBlbGVtZW50LnVud3JhcCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtBcnJheX0gdGV4dE5vZGVzIC0gdGV4dG5vZGUgdG8gcmVtb3ZlIHRoZSB6ZXJvIHNwYWNlIGxpa2UgOiB1MjAwQlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVplcm9TcGFjZSh0ZXh0Tm9kZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXh0Tm9kZXMpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzID0gW3RleHROb2Rlc107XHJcbiAgICB9XHJcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiVEVYVC1TRUxFQ1RJT05cIikge1xyXG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIiwiY2xhc3MgRG9tVXRpbGlzIHtcclxuXHJcblxyXG4gIGlzRWxlbWVudChvYmopIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAob2JqLm5vZGVUeXBlID09PSAxKSAmJiAodHlwZW9mIG9iai5zdHlsZSA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAodHlwZW9mIG9iai5vd25lckRvY3VtZW50ID09PSBcIm9iamVjdFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgd3JhcChlbCwgd3JhcHBlcikge1xyXG4gICAgLy9lbCBzaG91bGQgYmUgYXJyYXlcclxuICAgIGxldCBlbGVtZW50cyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50cyA9IFtlbF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFyZW50cyA9IGVsZW1lbnRzLm1hcChlID0+IGUucGFyZW50Tm9kZSk7XHJcbiAgICB2YXIgcGFyZW50c0RpZmYgPSBwYXJlbnRzLmZpbHRlcigocCwgXywgc2VsZikgPT4geyByZXR1cm4gc2VsZlswXSAhPT0gcCB9KTtcclxuICAgIGlmIChwYXJlbnRzRGlmZi5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coYFt3cmFwXSBmb3VuZCAke3BhcmVudHNEaWZmLmxlbmd0aH0gZGlmZmVyZW50IHBhcmVudHMg8J+YhWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYXJlbnRzWzBdLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50c1swXSlcclxuICAgIGVsZW1lbnRzLmZvckVhY2goX2VsID0+IHdyYXBwZXIuYXBwZW5kQ2hpbGQoX2VsKSlcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IERvbVV0aWxpcygpOyBcclxuXHJcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRTZWxlY3RlZEVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtpZihudWxsIT09ZSl7dmFyIHQ9ZS5hbmNob3JOb2RlO2lmKG51bGwhPT10KXtmb3IoOzM9PT10Lm5vZGVUeXBlOyl0PXQucGFyZW50Tm9kZTtyZXR1cm4gdH1yZXR1cm4gbnVsbH19XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSAoIHdyYXBwZXIpID0+IHtcclxuICBpZiAodHlwZW9mIHdyYXBwZXIgPT09IFwic3RyaW5nXCIpIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdyYXBwZXIpO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KHRoaXMpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gIH0gXHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuaXNjaGlsZE9mID0gZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgaWYgKCFwYXJlbnQpIHJldHVybiBmYWxzZTtcclxuICBsZXQgbm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcclxuICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmNvbnN0IF93cmFwID0gZnVuY3Rpb24od3JhcHBlcikge1xyXG4gIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gIHJldHVybiB3cmFwcGVyO1xyXG59XHJcblRleHQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9IF93cmFwO1xyXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlKSB7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlTm9kZSA9IGZ1bmN0aW9uKHJlcGxhY2VtZW50Tm9kZSkge1xyXG4gIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCB0aGlzKVxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XHJcbiAgfVxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcylcclxuICB2YXIgZXh0cmFDb250ZW50cyA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gIHRoaXMucmVwbGFjZU5vZGUoZXh0cmFDb250ZW50cylcclxuICByZXR1cm4gZXh0cmFDb250ZW50cztcclxufVxyXG4iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldENsYXNzZXMsIG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uL19hcHAuY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogICogUmV0dXJucyB0aGUgbmV3IG1lcmdlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBtZXJnZSB3aXRoIGhpcyBmaXJzdCBjaGlsZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlTm9kZUNvbnRlY3QgPSBub2RlID0+IHtcclxuXHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQobm9kZSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBub2RlIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENoaWxkID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlmICghZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdCBjaGlsZCBub3QgZm91bmQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChmaXJzdENoaWxkLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdENoaWxkIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnRleHRDb250ZW50ICE9PSBmaXJzdENoaWxkLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIHRleHQgY29udGVudCBpcyBkaWZmZXJlbnQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50UHJvcHMgPSB7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKG5vZGUpLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMobm9kZSksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMobm9kZSlcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gX2VsZW1lbnRQcm9wcy5zdHlsZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBfZWxlbWVudFByb3BzLnN0eWxlW3N0eWxlXTtcclxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSA9IChmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSArIFwiIFwiICsgc3R5bGVWYWx1ZSkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIF9lbGVtZW50UHJvcHMuYXR0cnMpIHtcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBfZWxlbWVudFByb3BzLmF0dHJzW2F0dHJdO1xyXG4gICAgICAgIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmaXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoLi4uX2VsZW1lbnRQcm9wcy5jbGFzc2VzKTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShmaXJzdENoaWxkKTtcclxuICAgIG5vcm1hbGl6ZUVsZW1lbnQoZmlyc3RDaGlsZCk7XHJcbiAgICBpZihmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQpXHJcbiAgICBmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTm9kZXMoZWxlbWVudE9uZSwgZWxlbWVudFR3bykge1xyXG4gICAgY29uc29sZS5sb2coJ1ttZXJnZVR3b05vZGVzXSBTVEFSVCcpO1xyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRPbmUpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRUd28pKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudE9uZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZWxlbWVudFR3by5ub2RlTmFtZSAhPT0gXCJTUEFOXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50c0RhdGEgPSBbe1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50T25lKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRPbmUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRPbmUpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50VHdvKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRUd28pLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRUd28pXHJcbiAgICB9XVxyXG4gICAgY29uc3QgZ2V0Q29tbW9uQ2xhc3NlcyA9IChjbGFzc2VzMSwgY2xhc3NlczIpID0+IHtcclxuICAgICAgICBpZiAoIWNsYXNzZXMxIHx8ICFjbGFzc2VzMilcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGNvbnN0IGMxID0gWy4uLmNsYXNzZXMxXTtcclxuICAgICAgICBjb25zdCBjMiA9IFsuLi5jbGFzc2VzMl07XHJcbiAgICAgICAgcmV0dXJuIGMxLmZpbHRlcihjID0+IGMyLmluY2x1ZGVzKGMpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvbW1vblN0eWxlcyA9IChzdHlsZTEsIHN0eWxlMikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1tb25TdHlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gc3R5bGUxKSB7XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUyW3NdKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTFWYWx1ZXMgPSBzdHlsZTFbc107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlMlZhbHVlcyA9IHN0eWxlMltzXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlMlZhbHVlcyA9PT0gc3R5bGUxVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tbW9uU3R5bGVzW3NdID0gc3R5bGUyVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21tbW9uU3R5bGVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbW1vbmNMYXNzZXMgPSBnZXRDb21tb25DbGFzc2VzKF9lbGVtZW50c0RhdGFbMF0uY2xhc3NlcywgX2VsZW1lbnRzRGF0YVsxXS5jbGFzc2VzKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb21tb25DbGFzc3NlcycsY29tbW9uY0xhc3NlcyxlbGVtZW50T25lLGVsZW1lbnRUd28sX2VsZW1lbnRzRGF0YSlcclxuXHJcbiAgICBjb25zdCBjb21tb25TdHlsZXMgPSBnZXRDb21tb25TdHlsZXMoX2VsZW1lbnRzRGF0YVswXS5zdHlsZSwgX2VsZW1lbnRzRGF0YVsxXS5zdHlsZSk7XHJcbiAgICBjb25zdCBidWlsZFdyYXBwaW5nRWxlbWVudCA9IChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdHlsZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlW3NdID0gY29tbW9uU3R5bGVzW3NdO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGNsYXNzZXNcclxuICAgICAgICBpZiAoY29tbW9uY0xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdyYXBwZXIuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci51bndyYXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGJ1aWxkV3JhcHBpbmdFbGVtZW50KGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCd3cmFwcGVyIGlzIG51bGwnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudENsYXNzZXMgPSAobm9kZSwgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUobm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRTdHlsZXMgPSAobm9kZSwgY29tbW9uU3R5bGVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgbm9kZS5zdHlsZVtzXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtlbGVtZW50T25lLCBlbGVtZW50VHdvXTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50Q2xhc3NlcyhlLCBjb21tb25jTGFzc2VzKTtcclxuICAgICAgICBjbGVhckVsZW1lbnRTdHlsZXMoZSwgY29tbW9uU3R5bGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgRG9tVXRpbGlzLndyYXAoZWxlbWVudHMsIHdyYXBwZXIpO1xyXG4gICAgWy4uLndyYXBwZXIuY2hpbGRyZW5dLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudChjKVxyXG4gICAgfSlcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vblZhbHVlc09iamVjdChvYmoxLCBvYmoyKSB7XHJcbiAgICBsZXQgY29tbW9uVmFsdWVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcbiAgICAgICAgaWYgKG9iajJba2V5XSAmJiBvYmoyW2tleV0gPT09IG9iajFba2V5XSkge1xyXG4gICAgICAgICAgICBjb21tb25WYWx1ZXNba2V5XSA9IG9iajFba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21tb25WYWx1ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vbkFycmF5cyhhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBtZXJnZUFyciA9IFtdO1xyXG4gICAgQXJyYXkuZnJvbShhcnIxKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChhcnIyLmZpbmRJbmRleChpID0+IGkgPT09IGl0ZW0pID4gMCkge1xyXG4gICAgICAgICAgICBtZXJnZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWVyZ2VBcnI7XHJcbn0iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENsYXNzTmFtZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRIVE1MKGZyb21FbGVtZW50LCB0b0VsZW1lbnQsb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCB7dGFnID0gXCJzcGFuXCJ9ID0gb3B0aW9ucztcclxuICAgIGlmICghZnJvbUVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCBtdXN0IGJlIGNoaWxkIG9mIHRvRWxlbWVudCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQoZnJvbUVsZW1lbnQpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCAmJiB0b0VsZW1lbnQgbXVzdCBiZSBkb20gZWxlbWVudHMuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0QXR0cnMgPSAoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbihcIiBcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIGZyb21FbGVtZW50LmNyZWF0ZVNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgY2VudGVyVGVtcGxhdGUgPSBzZXRBdHRycyhjZW50ZXJFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgLy9jZW50ZXJcclxuICAgIGNlbnRlclRlbXBsYXRlLmFwcGVuZENoaWxkKGZyb21FbGVtZW50KTtcclxuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB2YXIgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIC8vbGVmdFxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodG9FbGVtZW50LCAwKTtcclxuICAgIGNvbnN0IGxlZnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBsZWZ0VGVtcGxhdGUgPSBzZXRBdHRycyhsZWZ0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciBsZWZ0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIGxlZnRUZW1wbGF0ZS5hcHBlbmRDaGlsZChsZWZ0UmFuZ2UpO1xyXG4gICAgLy9yaWdodFxyXG4gICAgcmFuZ2Uuc2V0RW5kKHRvRWxlbWVudCwgdG9FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgcmlnaHRUZW1wbGF0ZSA9IHNldEF0dHJzKHJpZ2h0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciByaWdodFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICByaWdodFRlbXBsYXRlLmFwcGVuZENoaWxkKHJpZ2h0UmFuZ2UpO1xyXG4gICAgY29uc3Qgc3BsaXQgPSB7XHJcbiAgICAgICAgbGVmdDogbGVmdFRlbXBsYXRlLFxyXG4gICAgICAgIGNlbnRlcjogY2VudGVyVGVtcGxhdGUsXHJcbiAgICAgICAgcmlnaHQ6IHJpZ2h0VGVtcGxhdGVcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBlbCBpbiBzcGxpdCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdFtlbF07XHJcbiAgICAgICAgdG9FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIHNwbGl0O1xyXG5cclxufSIsImltcG9ydCBDb3JlIGZyb20gJy4vU3R5bGVJdC9pbmRleCc7XHJcbmltcG9ydCAgTU9ERVMgIGZyb20gJy4vU3R5bGVJdC9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUl0IHtcclxuICAvL2V4cG9zZSBvbmx5IHRoZSByZWxldmFudCBtZXRob2RzLi5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgLy9UT0RPOiB2YWxpZGF0ZSB0YXJnZXQgJiBjb25maWcuLlxyXG4gICAgY29uc3Qgc3R5bGVJdCA9IG5ldyBDb3JlKHRhcmdldCwgY29uZmlnKTtcclxuICAgIGlmIChzdHlsZUl0KSB7ICBcclxuICAgICAgdGhpcy5leGVjQ21kID0gc3R5bGVJdC5leGVjQ21kO1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gc3R5bGVJdC50b2dnbGVDbGFzcztcclxuICAgICAgdGhpcy5saW5rID0gc3R5bGVJdC5saW5rO1xyXG4gICAgICB0aGlzLnVuTGluayA9IHN0eWxlSXQudW5MaW5rO1xyXG4gICAgICB0aGlzLnNhdmUgPSBzdHlsZUl0LnNhdmU7XHJcbiAgICAgIHRoaXMubG9hZCA9IHN0eWxlSXQubG9hZDtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gc3R5bGVJdC5kZXN0cm95O1xyXG4gICAgICB0aGlzLm9uID0gc3R5bGVJdC5vbjtcclxuICAgICAgdGhpcy5NT0RFUyA9IE1PREVTO1xyXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gdGhpcy50b2dnbGVDbGFzcy5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmV4ZWNDbWQgPSB0aGlzLmV4ZWNDbWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5vbiA9IHRoaXMub24uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMudW5MaW5rID0gdGhpcy51bkxpbmsuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMubG9hZCA9IHRoaXMubG9hZC5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZChzdHlsZUl0KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9