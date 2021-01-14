/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.20
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
            const jsonContent = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_4__["elementToJson"])(element);
    
            const renderedElement = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_4__["JsonToElement"])(jsonContent);
    
            emptyElement(element).then(() => element.innerHTML = renderedElement.innerHTML);
        }
        const usePlugins = (element, options) => {
            return {
                copyPaste: new _services_copyPaste_copyPaste_service__WEBPACK_IMPORTED_MODULE_1__["default"](element,options),
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
                        } else if (node.nodeType === 1 && node.nodeName !== "BR") {
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
        if (this.connectedElement.contentEditable !== "true") {
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
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          container.appendChild(sel.getRangeAt(i).cloneContents());
        }
        html = container.innerHTML;
      }
    } else if (typeof document.selection) {
      if (document.selection.type === "Text") {
        html = document.selection.createRange().htmlText;
      }
    }
    // navigator.clipboard.writeText(html);

    event.clipboardData.setData('text/html', html);


  }
  paste(event) {
    // document.execCommand("DefaultParagraphSeparator", false, "h2");
    if (this.stylesToPaste) {
      this.pasteWithStyles(event);
    } else {
      this.pastePlainText(event);
    }

  };
  pastePlainText(event) {
    const data = event.clipboardData || window.clipboardData;
    event.preventDefault();
    let content = data.getData('text/plain').trim();
    if (this.onPaste) {
      content = this.onPaste(content)
    }
    document.execCommand('inserttext', false, content);
  }
  pasteWithStyles(event) {
    event.preventDefault();
    let textContentContainer = document.createElement("div");
    textContentContainer.style.display = "none";
    let HtmlContainer = document.createElement("div");
    HtmlContainer.style.display = "none";
    try {
      const data = event.clipboardData || window.clipboardData;
      textContentContainer.innerText = data.getData('text/plain').trim();;
      HtmlContainer.innerHTML = data.getData('text/html').trim();
      if (!HtmlContainer.innerHTML) {
        HtmlContainer.innerHTML = data.getData('text/plain').trim();;
      }
      document.body.appendChild(textContentContainer);
      document.body.appendChild(HtmlContainer);

      const htmlNodes = [];
      const recurse = (el, callback) => {
        el.childNodes.forEach(node => {
          callback(node);
          if (node.nodeType === 1) {
            recurse(node, callback);
          }
        });

      };



      recurse(HtmlContainer, (node) => {
        if (node.nodeType === 3) {
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
        for (const key in collectedStyles) {
          if (Object.hasOwnProperty.call(collectedStyles, key)) {
            const value = collectedStyles[key];
            if (this.stylesToPaste[key]) {
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
      const textNodes = [];
      recurse(textContentContainer, (node => {
        textNodes.push(node);
      }));
      htmlNodes.forEach(el => {
        const replaced = textContentContainer.innerHTML.replace(el.textContent, el.outerHTML);;
        textContentContainer.innerHTML = replaced;
      });
      let content = textContentContainer.innerHTML;
      if (this.onPaste) {
        this.onPaste(event)
      }
      document.execCommand('inserthtml', false, content);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      textContentContainer.parentNode.removeChild(textContentContainer);
      HtmlContainer.parentNode.removeChild(HtmlContainer);
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
/*! exports provided: walkTheDOM, getSelectedElement, JsonToElement, elementToJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkTheDOM", function() { return walkTheDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedElement", function() { return getSelectedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToElement", function() { return JsonToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementToJson", function() { return elementToJson; });
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json");
var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json", 1);



function walkTheDOM(node, func) {
    if(!node) return null;
    func(node);
    node = node.firstChild;
    while (node) {
      walkTheDOM(node, func);
      node = node.nextSibling;
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
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");



class KeyPress {

    constructor(target, options) {
        if (!target) {
            console.error('[-] keyPress => target is null');
            return null;
        }
        this.target = target;


        this.keypress = (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                if(e.shiftKey){
                    Object(_range_service__WEBPACK_IMPORTED_MODULE_0__["pasteHtmlAtCaret"])("<br/>")
                    // document.execCommand('inserthtml', false, );
                    return false;
                }
                document.execCommand('inserttext', false, "\n");
                return false;
                // const range = document.createRange();
                // const selection = window.getSelection();
                // e.preventDefault();
                // var blockElement = GetClosestBlockElement(selection.anchorNode);
                // range.setStart(selection.focusNode, selection.baseOffset);
                // range.setEnd(blockElement,blockElement.childNodes.length);
                // selection.removeAllRanges();
                // selection.addRange(range);
                // const docFragment = range.extractContents();
                // Array.from(docFragment.children).forEach(child => {
                //     if (child.nodeType === 1 && !child.textContent.trim()) {
                //         child.unwrap();
                //     }
                // });
              
                // const el = document.createElement(blockElement.nodeName);
                // el.appendChild(docFragment);
                // insertAfter(el, blockElement);
                // selection.removeAllRanges();

            }

            // const ctrl = "^";
            // const alt = "!";
            // const shift  = "+";

            // /*
            // ["^+66",() => {}];
            // */
            // if (e.ctrlKey) {
            //     this.keys.forEach(key => {
            //         if (Array.isArray(key) && key.length === 2 && key[0] === e.keyCode && typeof(key[1]) === "function") {
            //             e.preventDefault();
            //             key[1]();
            //         }
            //     })
            // }

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
function setCaretAt(element, charIndex) {
  var node = element;
  node.focus();
  var textNode = Array.from(node.childNodes).filter(child => child.nodeType === Node.TEXT_NODE);
  var range = document.createRange();
  range.setStart(textNode[0], charIndex);
  range.setEnd(textNode[0], charIndex);
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
  if(!isValid){
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
 * @param {Element} DomElement - element to normalize
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
                    if (!nextElement)
                        break;
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
                while (wrapper !== null) {
                    wrapper = Object(_utilis_merger__WEBPACK_IMPORTED_MODULE_2__["mergeNodeContect"])(wrapper);
                    merged = merged || wrapper !== null;
                }
            })
            return merged;
        }
        let mergedStyles = false;
        let mergedContent = false;
        do {
            _normalize(element);
            mergedStyles = mergeNodesStyles(element);
            mergedContent = mergeNodesContent(element);
        } while (mergedContent);
    }
    el.normalize();
    recurse(el);

    function _normalize(element) {
        element.normalize();
        Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(element);
        Object(_style_service__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])(element);
        // const tags = ["STRIKE", "EM", "I", "B", "STRONG", "U", "A","SPAN"];
        //TODO: normalizr attributes (no:style,className)
        if (element && element.nodeName === "SPAN" && (!element.textContent.trim() || element.attributes.length === 0)) {
            const unwrapped = element.unwrap();
            unwrapped.normalize();
            //TODO: check the return;
            return unwrapped.parentElement;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2luZGV4LmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9ydWxlcy9ydWxlcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9hdHRyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2tleVByZXNzL0tleVByZXNzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9saW5rLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3JhbmdlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3N0eWxlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL0RvbVV0aWxpcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL21lcmdlci5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL3NwbGl0SFRNTC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsNkJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0U7QUFDdEI7O0FBRXRDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsOEVBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtREFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLG1EQUFNO0FBQ2Qsb0JBQW9CLG1EQUFNO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQzdIQTtBQUFBO0FBQU87O0FBRVAsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQXlGOzs7QUFHMUU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1RUFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQUE7QUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1M7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Q7O0FBRWpEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUDs7QUFFQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCwwQkFBMEIsNEVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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NEJBQTRCLGtEQUFTO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZFQUFhO0FBQ3BDLHNCQUFzQixtRkFBb0I7QUFDMUMsMEJBQTBCLHdGQUFvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNrQjs7QUFFdEM7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQUk7QUFDNUIsa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InN0eWxlaXQtYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMnKS5kZWZhdWx0O1xyXG4iLCJcclxuY2xhc3MgVGV4dFNlbGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpe1xyXG4gICAgICBjb25zdCBjcmVhdGVaZXJvU3BhY2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnemVyby1zcGFjZScpO1xyXG4gICAgICBpZihjcmVhdGVaZXJvU3BhY2UgPT09IFwidHJ1ZVwiKXtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RleHQtc2VsZWN0aW9uJywgVGV4dFNlbGVjdGlvbik7ICIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vdXRpbGlzL0RvbVV0aWxpc1wiO1xyXG5pbXBvcnQgQ29weVBhc3RlIGZyb20gXCIuL3NlcnZpY2VzL2NvcHlQYXN0ZS9jb3B5UGFzdGUuc2VydmljZVwiO1xyXG5pbXBvcnQgSW5wc2VjdG9yIGZyb20gXCIuL3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgS2V5UHJlc3MgZnJvbSBcIi4vc2VydmljZXMva2V5UHJlc3MvS2V5UHJlc3NcIjtcclxuXHJcbmltcG9ydCB7IGVsZW1lbnRUb0pzb24sIEpzb25Ub0VsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkLi5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgY29uc3QgUmVuZGVySW5uZXJIVE1MID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlFbGVtZW50ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QganNvbkNvbnRlbnQgPSBlbGVtZW50VG9Kc29uKGVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IEpzb25Ub0VsZW1lbnQoanNvbkNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGVtcHR5RWxlbWVudChlbGVtZW50KS50aGVuKCgpID0+IGVsZW1lbnQuaW5uZXJIVE1MID0gcmVuZGVyZWRFbGVtZW50LmlubmVySFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZVBsdWdpbnMgPSAoZWxlbWVudCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY29weVBhc3RlOiBuZXcgQ29weVBhc3RlKGVsZW1lbnQsb3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3I6IG5ldyBJbnBzZWN0b3IoZWxlbWVudCwgb3B0aW9ucy5vbkluc3BlY3QpLFxyXG4gICAgICAgICAgICAgICAgIGtleVByZXNzOiBuZXcgS2V5UHJlc3MoZWxlbWVudCwgb3B0aW9ucylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBSZW5kZXJJbm5lckhUTUwoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gdXNlUGx1Z2lucyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIC8vVE9ETzogZGVzdG9yeSBldmVudHMuLlxyXG4gICAgLy9xdWVzdGlvbjogaG93IHRvIHVzZSB0aGUgZXZlbnRzID8gXHJcbiAgICBcclxuXHJcbiAgICBEZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGx1Z2lucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luLkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIHdyYXBSYW5nZVdpdGhFbGVtZW50LFxyXG4gICAgc2V0U2VsZWN0aW9uRmxhZ3MsXHJcbiAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMsXHJcbiAgICBnZXRUZXh0Tm9kZXMsXHJcbiAgICBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50LFxyXG4gICAgc2V0Q2FyZXRBdCxcclxuICAgIEdldENsb3Nlc3RCbG9ja0VsZW1lbnRcclxufSBmcm9tIFwiLi9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RlcyBmcm9tICcuL2NvbnN0YW50cy9Nb2Rlcy5qc29uJztcclxuaW1wb3J0IHsgc3BsaXRIVE1MIH0gZnJvbSBcIi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBzZXRTdHlsZSwgdG9nZ2xlU3R5bGUsIGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQsIHJlbW92ZVplcm9TcGFjZSB9IGZyb20gXCIuL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29ubmVjdG9yIGZyb20gJy4vY29ubmVjdG9yJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY3VzdG9tL3RleHRTZWxlY3RlZCc7XHJcbmltcG9ydCB7IGVsZW1lbnRUb0pzb24sIEpzb25Ub0VsZW1lbnQsIGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFVkVOVFN9IGZyb20gJy4vc2VydmljZXMvZXZlbnRzL2V2ZW50cyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRlbXBMaW5rRWxlbWVudCwgcmVzZXRVUkwsVEFSR0VUUyB9IGZyb20gXCIuL3NlcnZpY2VzL2xpbmsuc2VydmljZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcclxuXHJcbiAgICAvLyAqdGFyZ2V0ID0+IGNhbiBiZSBJZCBvZiBFbGVtZW50IHRoYXQgc2hvdWxkIGNvbnRhaW4gRWRpdG9yIGluc3RhbmNlIG9yIHRoZSBlbGVtZW50IGl0c2VsZi4uXHJcbiAgICAvLyAqY29uZmlnID0+ICBjb25maWd1cmF0aW9uIHBhc3NlZCB0ICAgbyBUb29sIGNvbnN0cnVjdG9yXHJcbiAgICAvL1RPRE86IGFkZCB0YXJnZXQgdmFsaWRhdGlvbnMuLjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fX2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgb25JbnNwZWN0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9uID0gKGtleSxjYWxsYmFjayk9PntcclxuICAgICAgICAgICAgaWYodHlwZW9mKGtleSkgIT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImtleSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrKSAhPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFVkVOVFNba2V5XSAgPSBjYWxsYmFjaztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdG9yID0gbmV3IENvbm5lY3RvcigpO1xyXG4gICAgICAgIHRoaXMubW9kZUhhbmRsZXJzID0ge1xyXG4gICAgICAgICAgICBbTW9kZXMuVG9nZ2xlXTogKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpID0+IHRoaXMub25Ub2dnbGUodiwga2V5LCB2YWx1ZSwgb3B0aW9ucyksXHJcbiAgICAgICAgICAgIFtNb2Rlcy5FeHRlbmRdOiAodiwga2V5LCB2YWx1ZSwgb3B0aW9ucykgPT4gdGhpcy5vbkV4dGVuZCh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgPyBPYmplY3QuYXNzaWduKHRoaXMuX19jb25maWcsIGNvbmZpZykgOiB0aGlzLl9fY29uZmlnO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge1xyXG4gICAgICAgICAgICBzdHlsZUNoYW5nZWQ6IHRoaXMuY29uZmlnLm9uSW5zcGVjdCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50ID0gdGhpcy5Db25uZWN0b3IuQ29ubmVjdCh0YXJnZXQsIHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRUb0pzb24odGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGxvYWQoanNvbikge1xyXG4gICAgICAgIHJldHVybiBKc29uVG9FbGVtZW50KGpzb24sIHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdG9yLkRlc3Ryb3koKTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzZWxmKSB7XHJcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXcuXHJcbiAgICAvL1RPRE86IENyZWF0ZSBub3JtYWxpemUuLlxyXG4gICAgLy9xdWVzdGlvbjogaWYgdGV4dCB3YXMgc2VsZWN0ZWQsIHNob3VsZCB3ZSB1bndyYXAgdGhlIHNlbGVjdGlpb24gb25seSA/IFxyXG4gICAgdW5MaW5rKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24gJiYgIXNlbGVjdGlvbi50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50VG9VbndyYXA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VOb2RlID0gc2VsZWN0aW9uLmJhc2VOb2RlO1xyXG4gICAgICAgICAgICBpZiAoYmFzZU5vZGUgJiYgYmFzZU5vZGUubm9kZVR5cGUgPT09IDMgJiYgYmFzZU5vZGUucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwID0gYmFzZU5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFzZU5vZGUgJiYgYmFzZU5vZGUubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcCA9IGVsZW1lbnRUb1Vud3JhcC5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvVW53cmFwKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAudW53cmFwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShsaW5rRWxlbWVudHMpLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RBVGFnID0gci5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3RBVGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNwbGl0SFRNTChyLCBjbG9zZXN0QVRhZywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGEuY2VudGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGEudW53cmFwKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByLnVud3JhcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gc2V0U2VsZWN0aW9uRmxhZ3MobGlua0VsZW1lbnRzWzBdLCBsaW5rRWxlbWVudHNbbGlua0VsZW1lbnRzLmxlbmd0aCAtIDFdKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXdcclxuICAgIC8vVE9ETzogbWVyZ2UgYSB0YWdzLi5cclxuICAgIC8vVE9ETzogcmVtb3ZlIGEgY2hpbGRzXHJcbiAgICAvL1RPRE86IG1vdmUgZnVuY3Rpb24gdG8gTGluay5zZXJ2aWNlLmpzXHJcbiAgICBsaW5rKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAob3B0aW9ucyAmJiAhb3B0aW9ucy5ocmVmKSB8fCAgIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24gJiYgIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5vIHRleHQgc2VsZWN0ZWQuLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVud3JhcEF0YWdzID0gKGxpbmtFbGVtZW50cykgPT4ge1xyXG4gICAgICAgICAgICBsaW5rRWxlbWVudHMuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20obGluay5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZm9yRWFjaChhVGFnID0+IGFUYWcudW53cmFwKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEFUYWcgPSBsaW5rLnBhcmVudEVsZW1lbnQgPyBsaW5rLnBhcmVudEVsZW1lbnQuY2xvc2VzdChcImFcIikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RBVGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzcGxpdEhUTUwobGluaywgY2xvc2VzdEFUYWcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuY2VudGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZXN0QVRhZy51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFRhcmdldFRvVGFnID0gKGxpbmtFbGVtZW50cywgcmVuZGVyZWRMaW5rLCBfdGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtFbGVtZW50cy5mb3JFYWNoKGFUYWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgYVRhZy5ocmVmID0gcmVuZGVyZWRMaW5rO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhVGFnLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBfdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFByb3RvY29sID0gKF9wcm90b2NvbCwgbmV3VVJMKSA9PiB7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCA9IF9wcm90b2NvbC5yZXBsYWNlKC86L2csIFwiXCIpO1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBfcHJvdG9jb2wucmVwbGFjZSgvXFwvXFwvL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgKz0gXCI6XCI7XHJcbiAgICAgICAgICAgIGlmIChfcHJvdG9jb2wuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBfcHJvdG9jb2wgKz0gXCIvL1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1VSTC5wdXNoKF9wcm90b2NvbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfcHJvdG9jb2w7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHsgaHJlZiA9IFwiXCIsIHByb3RvY29sID0gXCJcIiwgdGFyZ2V0ID0gXCJcIiB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxldCBuZXdVUkwgPSBbXTtcclxuICAgICAgICBjb25zdCBBdGFnID0gY3JlYXRlVGVtcExpbmtFbGVtZW50KGhyZWYpO1xyXG4gICAgICAgIGxldCBfaHJlZiA9IHJlc2V0VVJMKGhyZWYudHJpbSgpKTtcclxuXHJcbiAgICAgICAgbGV0IF9wcm90b2NvbCA9IHByb3RvY29sLnRyaW0oKSB8fCBBdGFnLnByb3RvY29sO1xyXG4gICAgICAgIGxldCBfdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCB0ZXN0VGFyZ2V0ID0gVEFSR0VUU1t0YXJnZXQudHJpbSgpLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIGlmICh0ZXN0VGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIF90YXJnZXQgPSB0ZXN0VGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3Byb3RvY29sLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBzZXRQcm90b2NvbChfcHJvdG9jb2wsIG5ld1VSTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfaHJlZikge1xyXG4gICAgICAgICAgICBuZXdVUkwucHVzaChfaHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkTGluayA9IG5ld1VSTC5qb2luKFwiXCIpO1xyXG4gICAgICAgIHVud3JhcEF0YWdzKGxpbmtFbGVtZW50cyk7XHJcbiAgICAgICAgc2V0VGFyZ2V0VG9UYWcobGlua0VsZW1lbnRzLCByZW5kZXJlZExpbmssIF90YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gc2V0U2VsZWN0aW9uRmxhZ3MobGlua0VsZW1lbnRzWzBdLCBsaW5rRWxlbWVudHNbbGlua0VsZW1lbnRzLmxlbmd0aCAtIDFdKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi4gXHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlld1xyXG4gICAgLy9xdWVzdGlvbiA6IHdlIHdhbnQgdG8gaGFuZGxlIGFuZCB0b2dnbGUgYW55IGF0dHJpYnV0ZSA/IFxyXG4gICAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgLy9oZXJlXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKGNsYXNzTmFtZSkgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiY2xhc3NOYW1lIG11c3QgYmUgYSBzdHJpbmcuLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMuc2VsZWN0aW9uKSAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBpc1RvZ2dsZU9uID0gKHR5cGVvZiAob3B0aW9ucy5pc09OKSA9PT0gXCJib29sZWFuXCIpID8gb3B0aW9ucy5pc09OIDogZWxlbWVudHNbMF0uY2xvc2VzdChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApO1xyXG4gICAgICAgIGlmICghaXNUb2dnbGVPbikge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RDbGFzcyA9IGVsLnBhcmVudEVsZW1lbnQuY2xvc2VzdChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0Q2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBzcGxpdEhUTUwoZWwsIGNsb3Nlc3RDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXQuY2VudGVyLnJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBvcHRpb25zLnNlbGVjdGlvbiA/IHNldFNlbGVjdGlvbkZsYWdzKGVsZW1lbnRzWzBdLCBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXSkgOiB7IGZpcnN0RmxhZzogbnVsbCwgbGFzdEZsYWc6IG51bGwgfTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLlxyXG4gICAgICAgIGlmIChmaXJzdEZsYWcgJiYgbGFzdEZsYWcpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKHNlbC5yZW1vdmVBbGxSYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0ga2V5IG9mIGNzcyBcclxuICAgICogIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHZhbHVlIG9mIGNzc1xyXG4gICAgKiAgQHBhcmFtIHsoT2JqZWN0IHwgU3RyaW5nKX0gTW9kZXMgLSBtb2RlIGZyb20gTW9kZXMgPT4gRXh0ZW5kIG9yIFRvZ2dsZVxyXG4gICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLkV4dGVuZCAtIG92ZXJyaWRlIHN0eWxlXHJcbiAgICAqICBAcGFyYW0ge3N0cmluZ30gTW9kZXMudG9nZ2xlIC0gdG9nZ2xlIHN0eWxlXHJcbiAgICAqICBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gb3B0aW9ucyBcclxuICAgICovXHJcbiAgICBleGVjQ21kKGtleSwgdmFsdWUsIG1vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpIHx8ICF0aGlzLmlzVkFsaWRLZXlWYWx1ZShrZXksIHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gW107XHJcbiAgICAgICAgbW9kZSA9IG1vZGUgPyBtb2RlIDogTW9kZXMuRXh0ZW5kO1xyXG4gICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMuc2VsZWN0aW9uKSAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgXHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT1yZXZpZXc9PT09PT09PT09PT09PT0vL1xyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmICghb3B0aW9ucy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5vZGUgPSB0aGlzLkVMRU1FTlRTW3RoaXMuRUxFTUVOVFMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGlmIChsYXN0Tm9kZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIgPSB0aGlzLmNyZWF0ZUNhcmV0UGxhY2VtZW50KGxhc3ROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnVuV3JhcCAmJiBBcnJheS5pc0FycmF5KG9wdGlvbnMudW5XcmFwKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnVuV3JhcC5mb3JFYWNoKHNlbGVjdG9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRUxFTUVOVFMuZm9yRWFjaCh0eHROb2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0RWxlbWVudFRvVW5XcmFwID0gdHh0Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEVsZW1lbnRUb1VuV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RWxlbWVudFRvVW5XcmFwLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVGhpcyBpcyBob3cgaSBtYWtlIHRoZSB0ZXh0IHNlbGVjdGlvbiwgaSBkb250IGtub3cgaWYgdGhpcyBpcyBnb29kIHdheSwgYnV0IGl0IHdvcmtzLi5cclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IG9wdGlvbnMuc2VsZWN0aW9uID8gc2V0U2VsZWN0aW9uRmxhZ3ModGhpcy5FTEVNRU5UU1swXSwgdGhpcy5FTEVNRU5UU1t0aGlzLkVMRU1FTlRTLmxlbmd0aCAtIDFdKSA6IHsgZmlyc3RGbGFnOiBudWxsLCBsYXN0RmxhZzogbnVsbCB9OyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG4gICAgICAgIHJlbW92ZVplcm9TcGFjZShnZXRUZXh0Tm9kZXModGhpcy5jb25uZWN0ZWRFbGVtZW50KSk7XHJcblxyXG4gICAgICAgIGxldCBUb2dnbGVNb2RlOy8vRGVjbGFyZSB0b2dnbGUgbW9kZSwgVGhlIGZpcnN0IGVsZW1lbnQgZGV0ZXJtaW5lcyB3aGV0aGVyIGl0IGlzIG9uIG9yIG9mZlxyXG5cclxuICAgICAgICB0aGlzLkVMRU1FTlRTLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IFRvZ2dsZU1vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubW9kZUhhbmRsZXJzW21vZGVdKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gTW9kZXMuVG9nZ2xlICYmIHR5cGVvZiAoVG9nZ2xlTW9kZSkgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgVG9nZ2xlTW9kZSA9IHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uIFxyXG4gICAgICAgIC8vdXNlIHRoZSBmaXJzdCBhbmQgbGFzdCBmbGFncyB0byBtYWtlIHRoZSB0ZXh0IHNlbGVjdGlvbiBhbmQgdW53cmFwIHRoZW0uLlxyXG4gICAgICAgIGlmIChmaXJzdEZsYWcgJiYgbGFzdEZsYWcpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKHNlbC5yZW1vdmVBbGxSYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJldEhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZXRBdCh0aGlzLmNhcmV0SG9sZGVyLCB0aGlzLmNhcmV0SG9sZGVyLnRleHRDb250ZW50Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sbGVjdGVkU3R5bGVzID0gIGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgICAgICBpZih0eXBlb2YgKEVWRU5UU1tcImluc3BlY3RcIl0pID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc3R5bGVDaGFuZ2VkJywgY29sbGVjdGVkU3R5bGVzKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhcmV0UGxhY2VtZW50KGF0Tm9kZSkge1xyXG4gICAgICAgIGlmICghYXROb2RlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBjYXJldEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgICAgICAgY2FyZXRIb2xkZXIuc2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJywgJ3RydWUnKTtcclxuICAgICAgICBhdE5vZGUuYXBwZW5kQ2hpbGQoY2FyZXRIb2xkZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJldEhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSlcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdKHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgb25Ub2dnbGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZXRlY3QgaWYgdGhlcmUgaXMgYW55IHBhcmVudCB3aXRoIHN0eWxlIHRvIHNwbGl0LlxyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgY2F0Y2ggZnJvbSBvcHRpb25zIHRvIGRldGVjdCBtb3JlIHRoYW4gb25lIHN0eWxlIG9yIHRhZyBlbGVtZW50LlxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvU3BsaXQgPSBlbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9JyR7dmFsdWV9J11gKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnRUb1NwbGl0KS5kaXNwbGF5ICE9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJTcGFuID0gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlubmVyU3Bhbi5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblRvZ2dsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQgJiYgZWxlbWVudFRvU3BsaXQgIT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL3VuYm9sZFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBzcGxpdCBlbGVtZW50cywgaXRzIGVycm9yIVxyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0RWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NwbGl0SFRNTCByZXR1cm4gbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vbk9mZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25FeHRlbmQoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VG9TcGxpdCA9IGVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0nJHtrZXl9J11gKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEJsb2NrcyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRCbG9ja3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdEJsb2Nrcy5jZW50ZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudGFyZ2V0ICE9PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5uZXJTcGFuID0gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50VG9TcGxpdCwgeyBlbDogJ3NwYW4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKGlubmVyU3Bhbiwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FeHRlbmQoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudFRvU3BsaXQgIT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEVsZW1lbnRzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgJiYgb3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgJiYgYmxvY2tFbGVtZW50LmlzY2hpbGRPZih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUocGFyZW50RWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQud3JhcCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZSh3cmFwcGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbmRCbG9jayA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wdXRlZCAmJiBjb21wdXRlZC5kaXNwbGF5ICE9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlICE9PSB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kQmxvY2soZWxlbWVudC5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYXMgPT09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrRWxlbWVudCA9IGZpbmRCbG9jayhlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JhcFRleHROb2RlV2l0aEFwcGVuZFN0eWxlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS53cmFwKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUlubGluZVN0eWxlID0gKHBhcmVudE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20ocGFyZW50Tm9kZS5jaGlsZE5vZGVzKS5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFRleHROb2RlV2l0aEFwcGVuZFN0eWxlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS5ub2RlTmFtZSAhPT0gXCJCUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVkLmRpc3BsYXkgIT09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmxpbmVTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVJbmxpbmVTdHlsZShibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gQXJyYXkuZnJvbShibG9ja0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpLmZvckVhY2goZWw9PmVsLnN0eWxlW2tleV0gPSB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja0VsZW1lbnQgPSBmaW5kQmxvY2soZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGJsb2NrRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlW2tleV0gPSBudWxsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tFbEFuZFN0eWxlSXQoa2V5LCB2YWx1ZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmxvY2tFbEFuZFN0eWxlSXQoa2V5LCB2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcGFyZ2guc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGVsZW1lbnQud3JhcChwYXJnaCk7XHJcbiAgICB9XHJcbiAgICBpc1ZBbGlkS2V5VmFsdWUoa2V5LHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gISEodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpOyBcclxuICAgIH1cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGxlYXNlIGNyZWF0ZSBuZXcgaW5zdGFuY2UuLicpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZEVsZW1lbnQuY29udGVudEVkaXRhYmxlICE9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICYmIChzZWxlY3RlZEVsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkgfHwgc2VsZWN0ZWRFbGVtZW50ID09PSB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBzcGxpdEhUTUwgfSBmcm9tIFwiLi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5cclxuLy9UT0RPOnJldmlld1xyXG5leHBvcnQgZnVuY3Rpb24gVXNlUnVsZXMoZGF0YSkge1xyXG4gICAgY29uc3QgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmtleSA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHREZWNvcmF0aW9uID0gZGF0YS5lbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9J3RleHQtZGVjb3JhdGlvbiddYCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0RGVjb3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gc3BsaXRIVE1MKGRhdGEuZWxlbWVudCwgdGV4dERlY29yYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRzLmNlbnRlciwgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsIGAke2RhdGEudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHRleHREZWNvcmF0aW9uLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFJ1bGVzID0gW1xyXG4gICAgICAgIENvbG9yVGV4dERlY29yYXRpb25SdWxlXHJcbiAgICBdXHJcbiAgICBSdWxlcy5mb3JFYWNoKHJ1bGUgPT4gcnVsZShkYXRhKSk7XHJcbn0iLCJcclxuaW1wb3J0IHsgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCB9IGZyb20gJy4uL3N0eWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFVkVOVFMgfSBmcm9tICcuLi9ldmVudHMvZXZlbnRzJztcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IHJlc2V0VVJMIH0gZnJvbSAnLi4vbGluay5zZXJ2aWNlJztcclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBjYW4gd2UgZXhwb3NlIHRoZSBjb2xsZWN0ZWRTdHlsZSA/IFxyXG4vL3F1ZXN0aW9uOiBzaG91bGQgd2UgdXNlIHRoaXMgPyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTXV0YXRpb25PYnNlcnZlclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnBzZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBvbkluc3BlY3QpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dIElucHNlY3RvciA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgIHRoaXMub25JbnNwZWN0ID0gb25JbnNwZWN0O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICBjb25zdCBsYXVuY2hJbnNwZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZSA9IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLm9uSW5zcGVjdCkgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHRoaXMub25JbnNwZWN0KGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoRVZFTlRTW1wiaW5zcGVjdFwiXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdFwiXShjb2xsZWN0ZWRTdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzZWxlY3RlZEVsZW1lbnQgKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFUYWcgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBpZihhVGFnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoRVZFTlRTW1wiaW5zcGVjdExpbmtcIl0pID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDphVGFnLnByb3RvY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpyZXNldFVSTChhVGFnLmhyZWYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OmFUYWcuZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OmFUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgdGhpcy50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoIDw9IDEgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxhdW5jaEluc3BlY3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuLy9jbGFzcyBhbmQgc3R5bGUgbm90IGluY2x1ZGVzIHlldC4uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIHZhciBhdHRycyA9IGN1cnJlY3RFbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYoYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGN1cnJlY3RFbGVtZW50ID0gY3VycmVjdEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhlbGVtZW50LGdldEFsbCl7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGF0dHJzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZihnZXRBbGwgIHx8ICghZ2V0QWxsICYmIGF0dHJzW2ldLm5hbWUgICE9PVwiY2xhc3NcIiAmJiBhdHRyc1tpXS5uYW1lICAhPT0gXCJzdHlsZVwiKSl7XHJcbiAgICAgICAgICAgIGlmKCFhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSl7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQXR0cnMoZWxlbWVudCl7XHJcbiAgICAgIGlmKGVsZW1lbnQgJiYgIWVsZW1lbnQuYXR0cmlidXRlcyl7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZWxlbWVudCBub3QgaGF2ZSBhdHRyaWJ1dGVzLi5cIik7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cj0+ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSkpXHJcbiAgfSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZWlydENsYXNzTmFtZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSBbXTtcclxuICAgIHZhciBfcGFyZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoX3BhcmVudCAmJiBfcGFyZW50LmlzY2hpbGRPZih0b0VsZW1lbnQucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICBsZXQgbWFwID0gX3BhcmVudC5jbGFzc0xpc3Q7XHJcbiAgICAgICAgQXJyYXkuZnJvbShtYXApLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzLmZpbmRJbmRleChjID0+IGMgPT09IG5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBfcGFyZW50ID0gX3BhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzZXMoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpO1xyXG59XHJcblxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBpcyBleHBlbnNpdmUgdG9vIG11Y2g/IFxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpIHtcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtcHR5Q2xhc3MoZWxlbWVudCl7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XHJcbiAgICAgICAgcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KTtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2xhc3NMaXN0KS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2N9J11gKSkuZm9yRWFjaChub2RlID0+e1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgICAgICAgICAgICAgICByZW1vdmVFbXB0eUNsYXNzKG5vZGUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bY2xhc3NdJykpLmNvbmNhdChlbGVtZW50KTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goY2hpbGQgPT4gY2xlYXIoY2hpbGQpKTtcclxufVxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBob3cgYWJvdXQgdGhpcyBuYW1lID8gXHJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSl7XHJcbmNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKSkuY29uY2F0KHRoaXMpO1xyXG5ub2Rlcy5mb3JFYWNoKG5vZGU9Pm5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3B5UGFzdGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5zdHlsZXNUb1Bhc3RlID0gdHlwZW9mIG9wdGlvbnMuc3R5bGVzVG9QYXN0ZSA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuc3R5bGVzVG9QYXN0ZSA6IG51bGw7XHJcbiAgICB0aGlzLm9uQ29weSA9IHR5cGVvZiBvcHRpb25zLm9uQ29weSA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5vbkNvcHkgOiBudWxsO1xyXG4gICAgdGhpcy5vblBhc3RlID0gdHlwZW9mIG9wdGlvbnMub25QYXN0ZSA9PT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5vblBhc3RlIDogbnVsbDtcclxuICAgIHRoaXMucGFzdGUgPSB0aGlzLnBhc3RlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvcHkgPSB0aGlzLmNvcHkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhcnQoKTtcclxuICB9XHJcbiAgY29weShldmVudCkge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbC5yYW5nZUNvdW50OyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWwuZ2V0UmFuZ2VBdChpKS5jbG9uZUNvbnRlbnRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sID0gY29udGFpbmVyLmlubmVySFRNTDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuc2VsZWN0aW9uKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24udHlwZSA9PT0gXCJUZXh0XCIpIHtcclxuICAgICAgICBodG1sID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkuaHRtbFRleHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGh0bWwpO1xyXG5cclxuICAgIGV2ZW50LmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9odG1sJywgaHRtbCk7XHJcblxyXG5cclxuICB9XHJcbiAgcGFzdGUoZXZlbnQpIHtcclxuICAgIC8vIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiRGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvclwiLCBmYWxzZSwgXCJoMlwiKTtcclxuICAgIGlmICh0aGlzLnN0eWxlc1RvUGFzdGUpIHtcclxuICAgICAgdGhpcy5wYXN0ZVdpdGhTdHlsZXMoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXN0ZVBsYWluVGV4dChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbiAgcGFzdGVQbGFpblRleHQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjb250ZW50ID0gZGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykudHJpbSgpO1xyXG4gICAgaWYgKHRoaXMub25QYXN0ZSkge1xyXG4gICAgICBjb250ZW50ID0gdGhpcy5vblBhc3RlKGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0dGV4dCcsIGZhbHNlLCBjb250ZW50KTtcclxuICB9XHJcbiAgcGFzdGVXaXRoU3R5bGVzKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRleHRDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHRDb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGxldCBIdG1sQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIEh0bWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICAgIHRleHRDb250ZW50Q29udGFpbmVyLmlubmVyVGV4dCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnRyaW0oKTs7XHJcbiAgICAgIEh0bWxDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YS5nZXREYXRhKCd0ZXh0L2h0bWwnKS50cmltKCk7XHJcbiAgICAgIGlmICghSHRtbENvbnRhaW5lci5pbm5lckhUTUwpIHtcclxuICAgICAgICBIdG1sQ29udGFpbmVyLmlubmVySFRNTCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnRyaW0oKTs7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudENvbnRhaW5lcik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSHRtbENvbnRhaW5lcik7XHJcblxyXG4gICAgICBjb25zdCBodG1sTm9kZXMgPSBbXTtcclxuICAgICAgY29uc3QgcmVjdXJzZSA9IChlbCwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICBlbC5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICBjYWxsYmFjayhub2RlKTtcclxuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJlY3Vyc2Uobm9kZSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgcmVjdXJzZShIdG1sQ29udGFpbmVyLCAobm9kZSkgPT4ge1xyXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnN0eWxlc1RvUGFzdGUpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuc3R5bGVzVG9QYXN0ZSwga2V5KSkge1xyXG4gICAgICAgICAgICAgIHNwYW4uc3R5bGVba2V5XSA9IFwiaW5oZXJpdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBub2RlLndyYXAoc3Bhbik7XHJcbiAgICAgICAgICBodG1sTm9kZXMucHVzaChzcGFuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBodG1sTm9kZXMuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBpZiAoIXMudGV4dENvbnRlbnQudHJpbSgpKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHMpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbGxlY3RlZFN0eWxlcykge1xyXG4gICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbGxlY3RlZFN0eWxlcywga2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbGxlY3RlZFN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdHlsZXNUb1Bhc3RlW2tleV0pIHtcclxuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiaW5oZXJpdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzLnN0eWxlW2tleV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoXCJub25lXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBzLnN0eWxlW2tleV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUucmVwbGFjZSgvIC9nbSwgXCJcIikuaW5jbHVkZXMoXCIoMCwwLDBcIikpIHtcclxuICAgICAgICAgICAgICAgIHMuc3R5bGVba2V5XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgcy5zdHlsZVtrZXldID0gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcy5zdHlsZVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB0ZXh0Tm9kZXMgPSBbXTtcclxuICAgICAgcmVjdXJzZSh0ZXh0Q29udGVudENvbnRhaW5lciwgKG5vZGUgPT4ge1xyXG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICB9KSk7XHJcbiAgICAgIGh0bWxOb2Rlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBjb25zdCByZXBsYWNlZCA9IHRleHRDb250ZW50Q29udGFpbmVyLmlubmVySFRNTC5yZXBsYWNlKGVsLnRleHRDb250ZW50LCBlbC5vdXRlckhUTUwpOztcclxuICAgICAgICB0ZXh0Q29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSByZXBsYWNlZDtcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBjb250ZW50ID0gdGV4dENvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MO1xyXG4gICAgICBpZiAodGhpcy5vblBhc3RlKSB7XHJcbiAgICAgICAgdGhpcy5vblBhc3RlKGV2ZW50KVxyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRodG1sJywgZmFsc2UsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgIHRleHRDb250ZW50Q29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGV4dENvbnRlbnRDb250YWluZXIpO1xyXG4gICAgICBIdG1sQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoSHRtbENvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCB0aGlzLnBhc3RlKTtcclxuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuY29weSk7XHJcbiAgfVxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG5cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBnZXRTdHlsZSwgSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcgfSBmcm9tIFwiLi9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBMZXZlbHMgZnJvbSAnLi4vY29uc3RhbnRzL0xldmVscy5qc29uJztcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gd2Fsa1RoZURPTShub2RlLCBmdW5jKSB7XHJcbiAgICBpZighbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBmdW5jKG5vZGUpO1xyXG4gICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIHdhbGtUaGVET00obm9kZSwgZnVuYyk7XHJcbiAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkRWxlbWVudCgpIHtcclxuICAgIHZhciBub2RlID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHZhciBhbmNOb2RlID0gbm9kZS5mb2N1c05vZGU7XHJcbiAgICAgICAgaWYgKGFuY05vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGFuY05vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGFuY05vZGUgPSBhbmNOb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc3QgZWwgPSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMyA/IGFuY05vZGUucGFyZW50Tm9kZSA6IG5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYW5jTm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25Ub0VsZW1lbnQoanNvbk9iamVjdCwgcGFyZW50RWxlbWVudCkge1xyXG4gICAgLy9UT0RPOiBjcmVhdGUgcGFyZW50ZWxlbWVudCBhbmQganNvbm9iamVjdCB2YWxpZGF0aW9uICAgXHJcbiAgICBjb25zdCByZW5kZXJBdHRycyA9IChqc0VsZW1lbnQsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoanNFbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdCA9IFsuLi5qc0VsZW1lbnQuY2xhc3NMaXN0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGpzRWxlbWVudC5zdHlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZSA9IEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKGpzRWxlbWVudC5zdHlsZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUgPSBjb2xsZWN0ZWRTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBvdGhlciBhdHRycy4uLlxyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAoanNFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBqc0VsZW1lbnQudGFnO1xyXG4gICAgICAgIGxldCBlbGVtZW50O1xyXG4gICAgICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzO1xyXG4gICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIiN0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoanNFbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5ocmVmID0ganNFbGVtZW50LmhyZWY7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRhcmdldCA9IGpzRWxlbWVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcclxuICAgICAgICAgICAgICAgIGlzU2hvdWxkUmVuZGVyQXR0cnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVuZGVyQXR0cnMoanNFbGVtZW50LCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIXBhcmVudEVsZW1lbnQgJiYganNvbk9iamVjdC50eXBlID09PSBMZXZlbHNbJzAnXSkge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudChqc29uT2JqZWN0KTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAganNvbk9iamVjdC5jaGlsZHJlbi5mb3JFYWNoKGpzQ2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICBpZiAoaHRtbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgSnNvblRvRWxlbWVudChqc0NoaWxkLCBodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IGNyZWF0ZSBkb20gZWxlbWVudCBmcm9tIGpzb24nLCBqc0NoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb0pzb24obm9kZSwgbGV2ZWwpIHtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiAobGV2ZWwpICE9PSBcIm51bWJlclwiKSBsZXZlbCA9IDA7XHJcbiAgICBjb25zdCBub2RlVHlwZSA9IG5vZGUubm9kZU5hbWU7XHJcbiAgICBsZXQgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICBsZXQganNvbiA9IHt9O1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChMZXZlbHNbbGV2ZWxdKSB7XHJcbiAgICAgICAganNvbi50eXBlID0gTGV2ZWxzW2xldmVsXTtcclxuICAgICAgICBsZXZlbCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFx1MjAwQi9nLCAnJyk7XHJcbiAgICAgICAgICAgIGlzU2hvdWxkUmVuZGVyQXR0cnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9xdWVzdGlvbjogcmVwbGFjZSBcXG4gP1xyXG4gICAgICAgICAgICBpZiAoIWpzb24udGV4dENvbnRlbnQudHJpbSgpKSBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGpzb24uaHJlZiA9IG5vZGUuaHJlZjtcclxuICAgICAgICAgICAganNvbi50YXJnZXQgPSBub2RlLnRhcmdldDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAgLy9UT0RPOiBzaG91bGQgd2UgdW53cmFwIHRoaXMgbm9kZSA/IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmICghaXNWYWxpZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoaXNTaG91bGRSZW5kZXJBdHRycykge1xyXG4gICAgICAgIC8vVE9ETzogZ2V0IGF0dHJzIFxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0U3R5bGUobm9kZSk7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0eWxlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGpzb24uc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0ICYmIG5vZGUuY2xhc3NMaXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIGpzb24uY2xhc3NMaXN0ID0gWy4uLm5vZGUuY2xhc3NMaXN0XTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2RlcyAmJiBub2RlLmNoaWxkTm9kZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAganNvbi5jaGlsZHJlbiA9IFsuLi5ub2RlLmNoaWxkTm9kZXNdLm1hcCgoY24pID0+IGVsZW1lbnRUb0pzb24oY24sIGxldmVsKSkuZmlsdGVyKHYgPT4gdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGpzb247XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IEVWRU5UUyA9IHtcclxuICBcclxufSIsImltcG9ydCB7IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQsIGluc2VydEFmdGVyLCBwYXN0ZUh0bWxBdENhcmV0IH0gZnJvbSBcIi4uL3JhbmdlLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlQcmVzcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dIGtleVByZXNzID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMua2V5cHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoZS5zaGlmdEtleSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzdGVIdG1sQXRDYXJldChcIjxici8+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydGh0bWwnLCBmYWxzZSwgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0dGV4dCcsIGZhbHNlLCBcIlxcblwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KHNlbGVjdGlvbi5hbmNob3JOb2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIHJhbmdlLnNldFN0YXJ0KHNlbGVjdGlvbi5mb2N1c05vZGUsIHNlbGVjdGlvbi5iYXNlT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIC8vIHJhbmdlLnNldEVuZChibG9ja0VsZW1lbnQsYmxvY2tFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBkb2NGcmFnbWVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgLy8gQXJyYXkuZnJvbShkb2NGcmFnbWVudC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxICYmICFjaGlsZC50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYmxvY2tFbGVtZW50Lm5vZGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIGVsLmFwcGVuZENoaWxkKGRvY0ZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIGluc2VydEFmdGVyKGVsLCBibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgY3RybCA9IFwiXlwiO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBhbHQgPSBcIiFcIjtcclxuICAgICAgICAgICAgLy8gY29uc3Qgc2hpZnQgID0gXCIrXCI7XHJcblxyXG4gICAgICAgICAgICAvLyAvKlxyXG4gICAgICAgICAgICAvLyBbXCJeKzY2XCIsKCkgPT4ge31dO1xyXG4gICAgICAgICAgICAvLyAqL1xyXG4gICAgICAgICAgICAvLyBpZiAoZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCA9PT0gMiAmJiBrZXlbMF0gPT09IGUua2V5Q29kZSAmJiB0eXBlb2Yoa2V5WzFdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAga2V5WzFdKCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlwcmVzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICAgY29uc3QgVEFSR0VUUyA9IHtcclxuICAgIF9ibGFuazogXCJfYmxhbmtcIixcclxuICAgIF9zZWxmOiBcIl9zZWxmXCIsXHJcbiAgICBfcGFyZW50OiBcIl9wYXJlbnRcIixcclxuICAgIF90b3A6IFwiX3RvcFwiXHJcbn1cclxuZXhwb3J0ICBjb25zdCByZXNldFVSTCA9IChzcmMpID0+IHtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9odHRwczovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL2h0dHA6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9tYWlsdG86L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC90ZWw6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXC8vZywgJycpO1xyXG4gICAgcmV0dXJuIHNyYztcclxufVxyXG5leHBvcnQgICBjb25zdCBjcmVhdGVUZW1wTGlua0VsZW1lbnQgPSAoaHJlZikgPT4ge1xyXG4gICAgY29uc3QgQXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgQXRhZy5ocmVmID0gaHJlZjtcclxuICAgIHJldHVybiBBdGFnO1xyXG59IiwiaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSBvcHRpb25zID0ge307XHJcbiAgbGV0IGlubmVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy5lbCB8fCBcInNwYW5cIik7XHJcbiAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4gaW5uZXJTcGFuLmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lclNwYW4pO1xyXG4gIHJldHVybiBpbm5lclNwYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCkge1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSAhPT0gXCJpbmxpbmVcIikgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50RWxlbWVudCkuZGlzcGxheSA9PT0gXCJpbmxpbmVcIikge1xyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG59XHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSYW5nZVdpdGhCbG9ja0VsZW1lbnQobGltaXRFbGVtZW50KSB7XHJcbiAgY29uc3Qgd3JhcEVsZW1lbnRXaXRoQmxvY2sgPSAoZWwpID0+IHtcclxuICAgIGxldCB3RWwgPSBcImRpdlwiO1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSBcIlNQQU5cIikge1xyXG4gICAgICB3RWwgPSBcInBcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdFbCk7XHJcbiAgICBlbC53cmFwKHdyYXBwZXIpO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgfVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgbGV0IG5vZGVzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICBub2Rlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IGJsb2NrRWwgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsKTtcclxuICAgIGlmIChibG9ja0VsKSB7XHJcbiAgICAgIGlmIChibG9ja0VsLmlzY2hpbGRPZihsaW1pdEVsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmRlZCA9IGVsZW1lbnRzLmZpbmQoYmxvY2sgPT4gYmxvY2tFbC5pc2NoaWxkT2YoYmxvY2spKTtcclxuICAgICAgICBpZiAoIWZvdW5kZWQpXHJcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGJsb2NrRWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICAgIGVsZW1lbnRzLnB1c2goX3dyYXBwZXIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBfd3JhcHBlciA9IHdyYXBFbGVtZW50V2l0aEJsb2NrKGVsKTtcclxuICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBub2Rlczogbm9kZXMsXHJcbiAgICBibG9ja3M6IGVsZW1lbnRzXHJcbiAgfVxyXG4gIHJldHVybiBlbGVtZW50cztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEVsZW1lbnQod3JhcFRhZykge1xyXG4gIGNvbnN0IHJhbmdlcyA9IGdldFJhbmdlcygpO1xyXG4gIHJldHVybiByYW5nZXMubWFwKHIgPT4ge1xyXG4gICAgcmV0dXJuIHdyYXBSYW5nZVRleHQod3JhcFRhZywgcik7XHJcbiAgfSkuZmxhdCgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZXMoKSB7XHJcbiAgbGV0IHJhbmdlcyA9IFtdO1xyXG5cclxuICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsLnJhbmdlQ291bnQ7IGkrKykge1xyXG4gICAgcmFuZ2VzW2ldID0gc2VsLmdldFJhbmdlQXQoaSk7XHJcbiAgfVxyXG4gIHJldHVybiByYW5nZXM7XHJcbn1cclxuLy8gcmV0dXJuIGFsbCB0ZXh0IG5vZGVzIHRoYXQgYXJlIGNvbnRhaW5lZCB3aXRoaW4gYGVsYFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dE5vZGVzKGVsKSB7XHJcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XHJcblxyXG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50LFxyXG4gICAgd2Fsa2VyID0gZG9jLmNyZWF0ZVRyZWVXYWxrZXIoZWwsIE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSksXHJcbiAgICB0ZXh0Tm9kZXMgPSBbXSxcclxuICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcclxuXHJcbiAgd2hpbGUgKG5vZGUpIHtcclxuICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gIH1cclxuICByZXR1cm4gdGV4dE5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlc0ludGVyc2VjdChyYW5nZUEsIHJhbmdlQikge1xyXG4gIHJldHVybiByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19TVEFSVCwgcmFuZ2VCKSA9PT0gLTEgJiZcclxuICAgIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuU1RBUlRfVE9fRU5ELCByYW5nZUIpID09PSAxXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkge1xyXG4gIHZhciByYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgdHJ5IHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSlcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q2hhcmFjdGVyT2Zmc2V0V2l0aGluKGVsZW1lbnQpIHtcclxuICB2YXIgY2FyZXRPZmZzZXQgPSAwO1xyXG4gIHZhciBkb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudDtcclxuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XHJcbiAgdmFyIHNlbDtcclxuICBpZiAodHlwZW9mIHdpbi5nZXRTZWxlY3Rpb24gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgc2VsID0gd2luLmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5yYW5nZUNvdW50ID4gMCkge1xyXG4gICAgICB2YXIgcmFuZ2UgPSB3aW4uZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgdmFyIHByZUNhcmV0UmFuZ2UgPSByYW5nZS5jbG9uZVJhbmdlKCk7XHJcbiAgICAgIHByZUNhcmV0UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBwcmVDYXJldFJhbmdlLnNldEVuZChyYW5nZS5lbmRDb250YWluZXIsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKChzZWwgPSBkb2Muc2VsZWN0aW9uKSAmJiBzZWwudHlwZSAhPSBcIkNvbnRyb2xcIikge1xyXG4gICAgdmFyIHRleHRSYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgdmFyIHByZUNhcmV0VGV4dFJhbmdlID0gZG9jLmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICBwcmVDYXJldFRleHRSYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgIHByZUNhcmV0VGV4dFJhbmdlLnNldEVuZFBvaW50KFwiRW5kVG9FbmRcIiwgdGV4dFJhbmdlKTtcclxuICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRUZXh0UmFuZ2UudGV4dC5sZW5ndGg7XHJcbiAgfVxyXG4gIHJldHVybiBjYXJldE9mZnNldDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FyZXRBdChlbGVtZW50LCBjaGFySW5kZXgpIHtcclxuICB2YXIgbm9kZSA9IGVsZW1lbnQ7XHJcbiAgbm9kZS5mb2N1cygpO1xyXG4gIHZhciB0ZXh0Tm9kZSA9IEFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKTtcclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlWzBdLCBjaGFySW5kZXgpO1xyXG4gIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZVswXSwgY2hhckluZGV4KTtcclxuICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXN0ZUh0bWxBdENhcmV0KGh0bWwpIHtcclxuICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICBjb25zdCBjb250ZW50ZWRpdGFibGUgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpO1xyXG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICBpZiAoY29udGVudGVkaXRhYmxlKSB7XHJcbiAgICBpZiAoIWNvbnRlbnRlZGl0YWJsZS5jb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGlmKCFpc1ZhbGlkKXtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICB2YXIgc2VsLCByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgLy8gSUU5IGFuZCBub24tSUVcclxuICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xyXG5cclxuICAgICAgLy8gUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgd291bGQgYmUgdXNlZnVsIGhlcmUgYnV0IGlzXHJcbiAgICAgIC8vIG9ubHkgcmVsYXRpdmVseSByZWNlbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cclxuICAgICAgLy8gc29tZSBicm93c2VycyAoSUU5LCBmb3Igb25lKVxyXG4gICAgICBsZXQgZWw7XHJcbiAgICAgIGlmICh0eXBlb2YgKGh0bWwpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIChodG1sKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGVsID0gaHRtbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIG5vZGUsIGxhc3ROb2RlO1xyXG4gICAgICB3aGlsZSAoKG5vZGUgPSBlbC5maXJzdENoaWxkKSkge1xyXG4gICAgICAgIGxhc3ROb2RlID0gZnJhZy5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgfVxyXG4gICAgICByYW5nZS5pbnNlcnROb2RlKGZyYWcpO1xyXG5cclxuICAgICAgLy8gUHJlc2VydmUgdGhlIHNlbGVjdGlvblxyXG4gICAgICBpZiAobGFzdE5vZGUpIHtcclxuICAgICAgICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZXRTdGFydEFmdGVyKGxhc3ROb2RlKTtcclxuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkge1xyXG4gIGlmIChyYW5nZS5pbnRlcnNlY3RzTm9kZSkge1xyXG4gICAgcmV0dXJuIHJhbmdlLmludGVyc2VjdHNOb2RlKG5vZGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByYW5nZXNJbnRlcnNlY3QocmFuZ2UsIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSkge1xyXG4gIHZhciBjb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcclxuICAgIG5vZGVzID0gZ2V0VGV4dE5vZGVzKGNvbnRhaW5lci5wYXJlbnROb2RlIHx8IGNvbnRhaW5lcilcclxuXHJcbiAgcmV0dXJuIG5vZGVzLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJhbmdlSW50ZXJzZWN0c05vZGUocmFuZ2UsIG5vZGUpICYmIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKVxyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKSB7XHJcbiAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoID4gMFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XHJcbiAgaWYgKGVsLnBhcmVudE5vZGUpIHtcclxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIG5vZGUpIHtcclxuICBpZiAodHlwZW9mIG5vZGUucGFyZW50Tm9kZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmVtb3ZlRWxlbWVudChyZXBsYWNlbWVudE5vZGUpO1xyXG4gICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXBsYWNlbWVudE5vZGUsIG5vZGUpO1xyXG4gICAgcmVtb3ZlRWxlbWVudChub2RlKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFRleHQobm9kZSkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgcmFuZ2UubW92ZVRvRWxlbWVudFRleHQobm9kZSk7XHJcbiAgICByYW5nZS5zZWxlY3QoKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBzZWxlY3QgdGV4dCBpbiBub2RlOiBVbnN1cHBvcnRlZCBicm93c2VyLlwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcclxuICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSkge1xyXG4gIHZhciBzdGFydE5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcixcclxuICAgIGVuZE5vZGUgPSByYW5nZS5lbmRDb250YWluZXIsXHJcbiAgICBzdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0LFxyXG4gICAgZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwTm9kZShub2RlKSB7XHJcbiAgICB2YXIgY3VycmVudFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgY3VycmVudFdyYXBwZXIgPSB3cmFwcGVyRWwuY2xvbmVOb2RlKClcclxuXHJcbiAgICBjdXJyZW50UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgaWYgKG5vZGUgPT09IHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgY3VycmVudFJhbmdlLnNldFN0YXJ0KG5vZGUsIHN0YXJ0T2Zmc2V0KVxyXG4gICAgICBzdGFydE5vZGUgPSBjdXJyZW50V3JhcHBlclxyXG4gICAgICBzdGFydE9mZnNldCA9IDBcclxuICAgIH1cclxuICAgIGlmIChub2RlID09PSBlbmROb2RlICYmIGVuZE5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgY3VycmVudFJhbmdlLnNldEVuZChub2RlLCBlbmRPZmZzZXQpXHJcbiAgICAgIGVuZE5vZGUgPSBjdXJyZW50V3JhcHBlcjtcclxuICAgICAgZW5kT2Zmc2V0ID0gMVxyXG4gICAgfVxyXG4gICAgY3VycmVudFJhbmdlLnN1cnJvdW5kQ29udGVudHMoY3VycmVudFdyYXBwZXIpXHJcbiAgICByZXR1cm4gY3VycmVudFdyYXBwZXJcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE5vZGVzKCkge1xyXG4gIHZhciBub2RlcywgcmFuZ2U7XHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VUZXh0KHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICBpZiAodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICB9XHJcblxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3JhcHBlckVsID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGFzc3VtZSBpdCdzIGEgdGFnbmFtZVxyXG4gICAgd3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gIH1cclxuXHJcbiAgd3JhcE5vZGUgPSBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBub2Rlcy5tYXAod3JhcE5vZGUpO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3QgX29wdGlvbnMgPSB7IHJlbW92ZTogdHJ1ZSB9O1xyXG4gIE9iamVjdC5hc3NpZ24oX29wdGlvbnMsIG9wdGlvbnMpO1xyXG4gIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnNldEJhc2VBbmRFeHRlbnQoZmlyc3RGbGFnLCAwLCBsYXN0RmxhZywgbGFzdEZsYWcuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gIGlmIChfb3B0aW9ucy5yZW1vdmUpIHtcclxuICAgIFtmaXJzdEZsYWcsIGxhc3RGbGFnXS5mb3JFYWNoKGUgPT4gZS51bndyYXAoKSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25GbGFncyhmaXJzdEVsZW1lbnQsIExhc3RFbGVtZW50KSB7XHJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIGNvbnN0IGZpcnN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgZmlyc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIGZpcnN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgY29uc3QgbGFzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGxhc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIExhc3RFbGVtZW50LnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMClcclxuXHJcbiAgZmlyc3RFbGVtZW50LnByZXBlbmQoZmlyc3RGbGFnKTsgLy9TZXQgZmxhZyB0aGUgZmlyc3RcclxuICBMYXN0RWxlbWVudC5hcHBlbmRDaGlsZChsYXN0RmxhZyk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gIHJldHVybiB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRIVE1MKCkge1xyXG4gIHZhciByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgaWYgKHJhbmdlLmNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY29udGVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgcmFuZ2U6IHJhbmdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2VsZWN0aW9uKCkge1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlU2VsZWN0aW9uKHJhbmdlKSB7XHJcbiAgaWYgKHJhbmdlKSB7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiByYW5nZS5zZWxlY3QpIHtcclxuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3NOYW1lIH0gZnJvbSBcIi4vY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlUnVsZXMgfSBmcm9tIFwiLi4vcnVsZXMvcnVsZXNcIjtcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGludGFpbFN0eWxlID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGdldFN0eWxlKGN1cnJlY3RFbGVtZW50KTtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIGluIG1hcCkge1xyXG4gICAgICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXBbc3R5bGVdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uICBjb3VsZCBiZSB0d2ljZSBsaWtlIHVuZGVybGluZSBhbmQgc3RyaWtlIHRoZXJvdWdoLi4gXHJcbiAgICAgICAgICAgICAgICBpZiAoIWludGFpbFN0eWxlW3N0eWxlXSlcclxuICAgICAgICAgICAgICAgICAgICBpbnRhaWxTdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZWN0RWxlbWVudCA9IGN1cnJlY3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW50YWlsU3R5bGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZVtrZXldID0gZWwuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH0pXHJcbn1cclxuLy9UT0dHTEVcclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUsIGlzT24pIHtcclxuICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldICsgXCIgXCIgKyB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHt2YWx1ZX0nXWApKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBjaGlsZC5zdHlsZVtrZXldID0gY2hpbGQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShjaGlsZCk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKGNoaWxkKTtcclxuICAgIH0pXHJcbn1cclxuLy9FWFRFTkRcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIGpzb25TdHlsZSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4ganNvblN0eWxlKSB7XHJcbiAgICAgICAgaWYgKGpzb25TdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ganNvblN0eWxlW2tleV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL1RPR0dMRVxyXG4vL1RPRE86IGZpeCBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgIGlmKGtleSA9PT0gXCJjb2xvclwiKXtcclxuICAgICAgICBVc2VSdWxlcyh7ZWxlbWVudDplbGVtZW50LGtleTonY29sb3InLHZhbHVlOnZhbHVlfSk7XHJcbiAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgfSk7XHJcbiAgICAvL2V4cGVyaW1lbnRhbDogc3R5bGUgdGhlIHRleHQgZGVjb3JhdGlvbnMgd2l0aCBjb2xvci4uXHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICAvLyBVc2VSdWxlcyh7ZWxlbWVudDplbGVtZW50LGtleTprZXksdmFsdWU6dmFsdWV9KTtcclxufVxyXG5leHBvcnQgY29uc3QgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCA9IChjb25uZWN0ZWNFbGVtZW50KSA9PnsgICBcclxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpOyAgICAgICAgICAgICAgICBcclxuICAgIHJldHVybiBnZXRJbmhlaXJ0Q3NzKHNlbGVjdGVkRWxlbWVudCxjb25uZWN0ZWNFbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpIHtcclxuICAgIGlmKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuICAgIC8vVE9ETzpyZXZpZXdcclxuICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoIXN0eWxlKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RTdHlsZXMgPSBnZXRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb2xsZWN0U3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsZWN0U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2NvbGxlY3RTdHlsZXNba2V5XX0nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVTdHlsZShlbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoc3R5bGVzKSB7XHJcbiAgICBsZXQgY29sbGVjdFN0eWxlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGNvbGxlY3RTdHlsZXMucHVzaChgJHtrZXl9OiR7c3R5bGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxlY3RTdHlsZXMuam9pbignOycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShlbCkge1xyXG4gICAgaWYgKCFlbCB8fCAhZWwuc3R5bGUpIHJldHVybiB7fTtcclxuICAgIGxldCBzdHlsZXMgPSB7fTtcclxuICAgIGxldCBzdHlsZSA9IGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgIGxldCBjb2xsZWN0U3R5bGVzID0gc3R5bGUuc3BsaXQoJzsnKTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xsZWN0U3R5bGVzKSkge1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlWYWx1ZVsxXSAmJiBrZXlWYWx1ZVswXSlcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNba2V5VmFsdWVbMF0udHJpbSgpXSA9IGtleVZhbHVlWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0eWxlcztcclxufSIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtZXJnZU5vZGVDb250ZWN0LCBtZXJnZVR3b05vZGVzIH0gZnJvbSBcIi4uL3V0aWxpcy9tZXJnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IERvbUVsZW1lbnQgLSBlbGVtZW50IHRvIG5vcm1hbGl6ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQoZWwpIHtcclxuICAgIGNvbnN0IHJlY3Vyc2UgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgcmVjdXJzZShjaGlsZCk7XHJcbiAgICAgICAgICAgIF9ub3JtYWxpemUoY2hpbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgbWVyZ2VOb2Rlc1N0eWxlcyA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudCA9IHdyYXBwZXIubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXh0RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlVHdvTm9kZXMod3JhcHBlciwgbmV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlZCB8fCB3cmFwcGVyICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVyZ2VOb2Rlc0NvbnRlbnQgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gbWVyZ2VOb2RlQ29udGVjdCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lcmdlZFN0eWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtZXJnZWRDb250ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBfbm9ybWFsaXplKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBtZXJnZWRTdHlsZXMgPSBtZXJnZU5vZGVzU3R5bGVzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBtZXJnZWRDb250ZW50ID0gbWVyZ2VOb2Rlc0NvbnRlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgfSB3aGlsZSAobWVyZ2VkQ29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbC5ub3JtYWxpemUoKTtcclxuICAgIHJlY3Vyc2UoZWwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemUoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIGNvbnN0IHRhZ3MgPSBbXCJTVFJJS0VcIiwgXCJFTVwiLCBcIklcIiwgXCJCXCIsIFwiU1RST05HXCIsIFwiVVwiLCBcIkFcIixcIlNQQU5cIl07XHJcbiAgICAgICAgLy9UT0RPOiBub3JtYWxpenIgYXR0cmlidXRlcyAobm86c3R5bGUsY2xhc3NOYW1lKVxyXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgPT09IFwiU1BBTlwiICYmICghZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgfHwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdW53cmFwcGVkID0gZWxlbWVudC51bndyYXAoKTtcclxuICAgICAgICAgICAgdW53cmFwcGVkLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAvL1RPRE86IGNoZWNrIHRoZSByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB1bndyYXBwZWQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtBcnJheX0gdGV4dE5vZGVzIC0gdGV4dG5vZGUgdG8gcmVtb3ZlIHRoZSB6ZXJvIHNwYWNlIGxpa2UgOiB1MjAwQlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVplcm9TcGFjZSh0ZXh0Tm9kZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXh0Tm9kZXMpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzID0gW3RleHROb2Rlc107XHJcbiAgICB9XHJcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiVEVYVC1TRUxFQ1RJT05cIikge1xyXG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIiwiY2xhc3MgRG9tVXRpbGlzIHtcclxuXHJcblxyXG4gIGlzRWxlbWVudChvYmopIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAob2JqLm5vZGVUeXBlID09PSAxKSAmJiAodHlwZW9mIG9iai5zdHlsZSA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAodHlwZW9mIG9iai5vd25lckRvY3VtZW50ID09PSBcIm9iamVjdFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgd3JhcChlbCwgd3JhcHBlcikge1xyXG4gICAgLy9lbCBzaG91bGQgYmUgYXJyYXlcclxuICAgIGxldCBlbGVtZW50cyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50cyA9IFtlbF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFyZW50cyA9IGVsZW1lbnRzLm1hcChlID0+IGUucGFyZW50Tm9kZSk7XHJcbiAgICB2YXIgcGFyZW50c0RpZmYgPSBwYXJlbnRzLmZpbHRlcigocCwgXywgc2VsZikgPT4geyByZXR1cm4gc2VsZlswXSAhPT0gcCB9KTtcclxuICAgIGlmIChwYXJlbnRzRGlmZi5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coYFt3cmFwXSBmb3VuZCAke3BhcmVudHNEaWZmLmxlbmd0aH0gZGlmZmVyZW50IHBhcmVudHMg8J+YhWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYXJlbnRzWzBdLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50c1swXSlcclxuICAgIGVsZW1lbnRzLmZvckVhY2goX2VsID0+IHdyYXBwZXIuYXBwZW5kQ2hpbGQoX2VsKSlcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IERvbVV0aWxpcygpOyBcclxuXHJcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRTZWxlY3RlZEVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtpZihudWxsIT09ZSl7dmFyIHQ9ZS5hbmNob3JOb2RlO2lmKG51bGwhPT10KXtmb3IoOzM9PT10Lm5vZGVUeXBlOyl0PXQucGFyZW50Tm9kZTtyZXR1cm4gdH1yZXR1cm4gbnVsbH19XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSAoIHdyYXBwZXIpID0+IHtcclxuICBpZiAodHlwZW9mIHdyYXBwZXIgPT09IFwic3RyaW5nXCIpIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdyYXBwZXIpO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KHRoaXMpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gIH0gXHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuaXNjaGlsZE9mID0gZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgaWYgKCFwYXJlbnQpIHJldHVybiBmYWxzZTtcclxuICBsZXQgbm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcclxuICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmNvbnN0IF93cmFwID0gZnVuY3Rpb24od3JhcHBlcikge1xyXG4gIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gIHJldHVybiB3cmFwcGVyO1xyXG59XHJcblRleHQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9IF93cmFwO1xyXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlKSB7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlTm9kZSA9IGZ1bmN0aW9uKHJlcGxhY2VtZW50Tm9kZSkge1xyXG4gIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCB0aGlzKVxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XHJcbiAgfVxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcylcclxuICB2YXIgZXh0cmFDb250ZW50cyA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gIHRoaXMucmVwbGFjZU5vZGUoZXh0cmFDb250ZW50cylcclxuICByZXR1cm4gZXh0cmFDb250ZW50cztcclxufVxyXG4iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldENsYXNzZXMsIG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uL19hcHAuY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogICogUmV0dXJucyB0aGUgbmV3IG1lcmdlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBtZXJnZSB3aXRoIGhpcyBmaXJzdCBjaGlsZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlTm9kZUNvbnRlY3QgPSBub2RlID0+IHtcclxuXHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQobm9kZSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBub2RlIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENoaWxkID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlmICghZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdCBjaGlsZCBub3QgZm91bmQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChmaXJzdENoaWxkLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdENoaWxkIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnRleHRDb250ZW50ICE9PSBmaXJzdENoaWxkLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIHRleHQgY29udGVudCBpcyBkaWZmZXJlbnQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50UHJvcHMgPSB7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKG5vZGUpLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMobm9kZSksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMobm9kZSlcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gX2VsZW1lbnRQcm9wcy5zdHlsZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBfZWxlbWVudFByb3BzLnN0eWxlW3N0eWxlXTtcclxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSA9IChmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSArIFwiIFwiICsgc3R5bGVWYWx1ZSkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIF9lbGVtZW50UHJvcHMuYXR0cnMpIHtcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBfZWxlbWVudFByb3BzLmF0dHJzW2F0dHJdO1xyXG4gICAgICAgIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmaXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoLi4uX2VsZW1lbnRQcm9wcy5jbGFzc2VzKTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShmaXJzdENoaWxkKTtcclxuICAgIG5vcm1hbGl6ZUVsZW1lbnQoZmlyc3RDaGlsZCk7XHJcbiAgICBpZihmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQpXHJcbiAgICBmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTm9kZXMoZWxlbWVudE9uZSwgZWxlbWVudFR3bykge1xyXG4gICAgY29uc29sZS5sb2coJ1ttZXJnZVR3b05vZGVzXSBTVEFSVCcpO1xyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRPbmUpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRUd28pKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudE9uZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZWxlbWVudFR3by5ub2RlTmFtZSAhPT0gXCJTUEFOXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50c0RhdGEgPSBbe1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50T25lKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRPbmUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRPbmUpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50VHdvKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRUd28pLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRUd28pXHJcbiAgICB9XVxyXG4gICAgY29uc3QgZ2V0Q29tbW9uQ2xhc3NlcyA9IChjbGFzc2VzMSwgY2xhc3NlczIpID0+IHtcclxuICAgICAgICBpZiAoIWNsYXNzZXMxIHx8ICFjbGFzc2VzMilcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGNvbnN0IGMxID0gWy4uLmNsYXNzZXMxXTtcclxuICAgICAgICBjb25zdCBjMiA9IFsuLi5jbGFzc2VzMl07XHJcbiAgICAgICAgcmV0dXJuIGMxLmZpbHRlcihjID0+IGMyLmluY2x1ZGVzKGMpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvbW1vblN0eWxlcyA9IChzdHlsZTEsIHN0eWxlMikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1tb25TdHlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gc3R5bGUxKSB7XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUyW3NdKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTFWYWx1ZXMgPSBzdHlsZTFbc107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlMlZhbHVlcyA9IHN0eWxlMltzXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlMlZhbHVlcyA9PT0gc3R5bGUxVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tbW9uU3R5bGVzW3NdID0gc3R5bGUyVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21tbW9uU3R5bGVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbW1vbmNMYXNzZXMgPSBnZXRDb21tb25DbGFzc2VzKF9lbGVtZW50c0RhdGFbMF0uY2xhc3NlcywgX2VsZW1lbnRzRGF0YVsxXS5jbGFzc2VzKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb21tb25DbGFzc3NlcycsY29tbW9uY0xhc3NlcyxlbGVtZW50T25lLGVsZW1lbnRUd28sX2VsZW1lbnRzRGF0YSlcclxuXHJcbiAgICBjb25zdCBjb21tb25TdHlsZXMgPSBnZXRDb21tb25TdHlsZXMoX2VsZW1lbnRzRGF0YVswXS5zdHlsZSwgX2VsZW1lbnRzRGF0YVsxXS5zdHlsZSk7XHJcbiAgICBjb25zdCBidWlsZFdyYXBwaW5nRWxlbWVudCA9IChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdHlsZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlW3NdID0gY29tbW9uU3R5bGVzW3NdO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGNsYXNzZXNcclxuICAgICAgICBpZiAoY29tbW9uY0xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdyYXBwZXIuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci51bndyYXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGJ1aWxkV3JhcHBpbmdFbGVtZW50KGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCd3cmFwcGVyIGlzIG51bGwnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudENsYXNzZXMgPSAobm9kZSwgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUobm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRTdHlsZXMgPSAobm9kZSwgY29tbW9uU3R5bGVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgbm9kZS5zdHlsZVtzXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtlbGVtZW50T25lLCBlbGVtZW50VHdvXTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50Q2xhc3NlcyhlLCBjb21tb25jTGFzc2VzKTtcclxuICAgICAgICBjbGVhckVsZW1lbnRTdHlsZXMoZSwgY29tbW9uU3R5bGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgRG9tVXRpbGlzLndyYXAoZWxlbWVudHMsIHdyYXBwZXIpO1xyXG4gICAgWy4uLndyYXBwZXIuY2hpbGRyZW5dLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudChjKVxyXG4gICAgfSlcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vblZhbHVlc09iamVjdChvYmoxLCBvYmoyKSB7XHJcbiAgICBsZXQgY29tbW9uVmFsdWVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcbiAgICAgICAgaWYgKG9iajJba2V5XSAmJiBvYmoyW2tleV0gPT09IG9iajFba2V5XSkge1xyXG4gICAgICAgICAgICBjb21tb25WYWx1ZXNba2V5XSA9IG9iajFba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21tb25WYWx1ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vbkFycmF5cyhhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBtZXJnZUFyciA9IFtdO1xyXG4gICAgQXJyYXkuZnJvbShhcnIxKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChhcnIyLmZpbmRJbmRleChpID0+IGkgPT09IGl0ZW0pID4gMCkge1xyXG4gICAgICAgICAgICBtZXJnZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWVyZ2VBcnI7XHJcbn0iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENsYXNzTmFtZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRIVE1MKGZyb21FbGVtZW50LCB0b0VsZW1lbnQsb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCB7dGFnID0gXCJzcGFuXCJ9ID0gb3B0aW9ucztcclxuICAgIGlmICghZnJvbUVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCBtdXN0IGJlIGNoaWxkIG9mIHRvRWxlbWVudCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQoZnJvbUVsZW1lbnQpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCAmJiB0b0VsZW1lbnQgbXVzdCBiZSBkb20gZWxlbWVudHMuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0QXR0cnMgPSAoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbihcIiBcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIGZyb21FbGVtZW50LmNyZWF0ZVNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgY2VudGVyVGVtcGxhdGUgPSBzZXRBdHRycyhjZW50ZXJFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgLy9jZW50ZXJcclxuICAgIGNlbnRlclRlbXBsYXRlLmFwcGVuZENoaWxkKGZyb21FbGVtZW50KTtcclxuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB2YXIgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIC8vbGVmdFxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodG9FbGVtZW50LCAwKTtcclxuICAgIGNvbnN0IGxlZnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBsZWZ0VGVtcGxhdGUgPSBzZXRBdHRycyhsZWZ0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciBsZWZ0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIGxlZnRUZW1wbGF0ZS5hcHBlbmRDaGlsZChsZWZ0UmFuZ2UpO1xyXG4gICAgLy9yaWdodFxyXG4gICAgcmFuZ2Uuc2V0RW5kKHRvRWxlbWVudCwgdG9FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgcmlnaHRUZW1wbGF0ZSA9IHNldEF0dHJzKHJpZ2h0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciByaWdodFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICByaWdodFRlbXBsYXRlLmFwcGVuZENoaWxkKHJpZ2h0UmFuZ2UpO1xyXG4gICAgY29uc3Qgc3BsaXQgPSB7XHJcbiAgICAgICAgbGVmdDogbGVmdFRlbXBsYXRlLFxyXG4gICAgICAgIGNlbnRlcjogY2VudGVyVGVtcGxhdGUsXHJcbiAgICAgICAgcmlnaHQ6IHJpZ2h0VGVtcGxhdGVcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBlbCBpbiBzcGxpdCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdFtlbF07XHJcbiAgICAgICAgdG9FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIHNwbGl0O1xyXG5cclxufSIsImltcG9ydCBDb3JlIGZyb20gJy4vU3R5bGVJdC9pbmRleCc7XHJcbmltcG9ydCAgTU9ERVMgIGZyb20gJy4vU3R5bGVJdC9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUl0IHtcclxuICAvL2V4cG9zZSBvbmx5IHRoZSByZWxldmFudCBtZXRob2RzLi5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgLy9UT0RPOiB2YWxpZGF0ZSB0YXJnZXQgJiBjb25maWcuLlxyXG4gICAgY29uc3Qgc3R5bGVJdCA9IG5ldyBDb3JlKHRhcmdldCwgY29uZmlnKTtcclxuICAgIGlmIChzdHlsZUl0KSB7ICBcclxuICAgICAgdGhpcy5leGVjQ21kID0gc3R5bGVJdC5leGVjQ21kO1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gc3R5bGVJdC50b2dnbGVDbGFzcztcclxuICAgICAgdGhpcy5saW5rID0gc3R5bGVJdC5saW5rO1xyXG4gICAgICB0aGlzLnVuTGluayA9IHN0eWxlSXQudW5MaW5rO1xyXG4gICAgICB0aGlzLnNhdmUgPSBzdHlsZUl0LnNhdmU7XHJcbiAgICAgIHRoaXMubG9hZCA9IHN0eWxlSXQubG9hZDtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gc3R5bGVJdC5kZXN0cm95O1xyXG4gICAgICB0aGlzLm9uID0gc3R5bGVJdC5vbjtcclxuICAgICAgdGhpcy5NT0RFUyA9IE1PREVTO1xyXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gdGhpcy50b2dnbGVDbGFzcy5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmV4ZWNDbWQgPSB0aGlzLmV4ZWNDbWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5vbiA9IHRoaXMub24uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMudW5MaW5rID0gdGhpcy51bkxpbmsuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMubG9hZCA9IHRoaXMubG9hZC5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZChzdHlsZUl0KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9