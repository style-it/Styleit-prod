/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.17
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
                copyPaste: new _services_copyPaste_copyPaste_service__WEBPACK_IMPORTED_MODULE_1__["default"](element),
                inspector: new _services_Inspector_Inspector_service__WEBPACK_IMPORTED_MODULE_2__["default"](element, options.onInspect),
                keyPress: new _services_keyPress_KeyPress__WEBPACK_IMPORTED_MODULE_3__["default"](element, options.onKeyPress)
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
            if (elementToSplit && window.getComputedStyle(elementToSplit).display === "block") {
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
            if (computed && computed.display === "block") {
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
                            target:aTag.getAttribute("target") || ""
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
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/events */ "./src/StyleIt/services/events/events.js");


//TODO:review
//should we use the clipboard as string ? or pass in other way as json ? 
class CopyPaste {
  constructor(target) {
    this.uniqeID = 'styleit-copy-paste-on-action';
    if (!target) {
      //TODO: use the validator
      console.error('[-] Copy Paste => target is null');
      return null;
    }
    this.target = target;
    this.onPaste = (event) => {
      document.execCommand("defaultParagraphSeparator", false, "p");
      function walkTheDOM(node, func) {
        func(node);
        node = node.firstChild;
        while (node) {
          walkTheDOM(node, func);
          node = node.nextSibling;
        }
      }

      const target = event.target;
      const block = target.closest(`#${this.target.id}`);
      if (block) {
        const data = event.clipboardData || window.clipboardData;
        let clip = data.getData('text/html').trim();
        if (!clip) {
          clip = data.getData('text/plain').trim();
          clip = clip.replace(/\n/g, "<br/>")
        }
        //TODO: regex all togheter!
        let markup = clip;
        ["<html>", "<body>", "<!--StartFragment-->", "<!--EndFragment-->", "</body>", "</html>"].
          forEach(rep => markup = markup.replace(rep, ""));
        const temp = document.createElement("div");
        temp.innerHTML = markup.replace(/<!--([\s\S]*?)-->/g, "");

        const nodes = [];
        // Example usage: Process all Text nodes on the page
        const notValid = ["META", "LINK", "SCRIPT", "TCXSPAN", "O:P", "STYLE"];

        walkTheDOM(temp, function (node) {
          if (!notValid.includes(node.nodeName)) {
            nodes.push(node);
          }
        });

        const rendered = document.createElement("div");
        document.body.appendChild(rendered);

        nodes.forEach((newEl, index) => {
          rendered.appendChild(newEl);
          if (newEl.textContent && newEl.nodeType === 1 && newEl.nodeName !== "br") {
            const computed = window.getComputedStyle(newEl);
            if (computed.display === "block") {
              const br = document.createElement("br");
              newEl.insertAfter(br);
            }
          }
          if (newEl.nodeType !== 3 && newEl.nodeName !== "BR") {
            newEl.remove();
          }
        });
        const arr = Array.from(rendered.childNodes);
        for (let index = 0; index < arr.length; index++) {
          const element = arr[index];
          if (!element.textContent.trim()) {
            element.remove();
          } else {
            if (!arr[arr.length - 1].textContent.trim()) {
              arr[arr.length - 1].remove();
            }
            break;
          }
        }
        event.preventDefault();

        document.execCommand("insertHTML", false, rendered.innerHTML);
        // pasteHtmlAtCaret(rendered);
        rendered.remove();
        if (typeof (_events_events__WEBPACK_IMPORTED_MODULE_0__["EVENTS"]["paste"]) === "function") {
          _events_events__WEBPACK_IMPORTED_MODULE_0__["EVENTS"]["paste"](rendered.innerHTML);
        }
      }
    }
    this.target.addEventListener('paste', this.onPaste);
    this.target.addEventListener('copy', this.onCopy);
  }
  Destroy() {
    this.target.removeEventListener('paste', this.onPaste);
    this.target.removeEventListener('copy', this.onCopy);
    this.target = null;
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
    if (node !== null) {
        var ancNode = node.extentNode;
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


class KeyPress {
    constructor(target, keys) {

        if (!target) {
            console.error('[-] keyPress => target is null');
            return null;
        }
        if (!Array.isArray(keys)) {
            console.error("[-] keyPress => keys must be an array");
            return null;
        }
        this.keys = keys;
        this.target = target;


        this.keypress = (e) => {
            if (e.ctrlKey) {
                this.keys.forEach(key => {
                    if (Array.isArray(key) && key.length === 2 && key[0] === e.keyCode && typeof(key[1]) === "function") {
                        e.preventDefault();
                        key[1]();
                    }
                })
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

function createInnerWrapperElement(element, options) {
  if (typeof (options) !== "object") options = {};
  let innerSpan = document.createElement(options.el || "span");
  Array.from(element.childNodes).forEach(child => innerSpan.appendChild(child));
  element.appendChild(innerSpan);
  return innerSpan;
}
function GetClosestBlockElement(element) {
  if (window.getComputedStyle(element).display === "block") return element;
  let parentElement = element.parentElement;
  while (parentElement && window.getComputedStyle(parentElement).display !== "block") {
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
    const wrapElementWithBlock = (el) =>{
      let wEl = "div";
      if(el.nodeName === "SPAN"){
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
        if( blockEl.ischildOf(limitElement)){
          const founded = elements.find(block=>blockEl.ischildOf(block));
          if(!founded)
          elements.push(blockEl);
        }else{
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
  function setSelectionBetweenTwoNodes(firstFlag, lastFlag,options = {}) {
     const _options = {remove:true};
     Object.assign(_options,options);
        document.getSelection().setBaseAndExtent(firstFlag, 0, lastFlag, lastFlag.childNodes.length);
        if(_options.remove){
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
        const tags = ["STRIKE", "EM", "I", "B", "STRONG", "U", "A","SPAN"];
        
        //TODO: normalizr attributes (no:style,className)
        if (element && tags.includes(element.nodeName) && (!element.textContent.trim())) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2luZGV4LmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9ydWxlcy9ydWxlcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9hdHRyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2tleVByZXNzL0tleVByZXNzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9saW5rLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3JhbmdlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3N0eWxlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL0RvbVV0aWxpcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL21lcmdlci5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL3NwbGl0SFRNTC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsNkJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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SztBQUNMO0FBQ0EsRUFBUztBQUNUOztBQUVBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7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cGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYycpLmRlZmF1bHQ7XHJcbiIsIlxyXG5jbGFzcyBUZXh0U2VsZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZVplcm9TcGFjZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJyk7XHJcbiAgICAgIGlmKGNyZWF0ZVplcm9TcGFjZSA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCImIzgyMDM7XCI7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGV4dC1zZWxlY3Rpb24nLCBUZXh0U2VsZWN0aW9uKTsgIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi91dGlsaXMvRG9tVXRpbGlzXCI7XHJcbmltcG9ydCBDb3B5UGFzdGUgZnJvbSBcIi4vc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBJbnBzZWN0b3IgZnJvbSBcIi4vc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBLZXlQcmVzcyBmcm9tIFwiLi9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzc1wiO1xyXG5cclxuaW1wb3J0IHsgZWxlbWVudFRvSnNvbiwgSnNvblRvRWxlbWVudCB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIENvbm5lY3QoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKERvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgLy8gdmFsaWQuLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICBjb25zdCBSZW5kZXJJbm5lckhUTUwgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbXB0eUVsZW1lbnQgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBqc29uQ29udGVudCA9IGVsZW1lbnRUb0pzb24oZWxlbWVudCk7XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gSnNvblRvRWxlbWVudChqc29uQ29udGVudCk7XHJcbiAgICBcclxuICAgICAgICAgICAgZW1wdHlFbGVtZW50KGVsZW1lbnQpLnRoZW4oKCkgPT4gZWxlbWVudC5pbm5lckhUTUwgPSByZW5kZXJlZEVsZW1lbnQuaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlUGx1Z2lucyA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb3B5UGFzdGU6IG5ldyBDb3B5UGFzdGUoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3I6IG5ldyBJbnBzZWN0b3IoZWxlbWVudCwgb3B0aW9ucy5vbkluc3BlY3QpLFxyXG4gICAgICAgICAgICAgICAga2V5UHJlc3M6IG5ldyBLZXlQcmVzcyhlbGVtZW50LCBvcHRpb25zLm9uS2V5UHJlc3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgUmVuZGVySW5uZXJIVE1MKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHVzZVBsdWdpbnMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IGRlc3RvcnkgZXZlbnRzLi5cclxuICAgIC8vcXVlc3Rpb246IGhvdyB0byB1c2UgdGhlIGV2ZW50cyA/IFxyXG4gICAgXHJcblxyXG4gICAgRGVzdHJveSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbnNba2V5XTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbi5EZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7XHJcbiAgICB3cmFwUmFuZ2VXaXRoRWxlbWVudCxcclxuICAgIHNldFNlbGVjdGlvbkZsYWdzLFxyXG4gICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzLFxyXG4gICAgZ2V0VGV4dE5vZGVzLFxyXG4gICAgY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudCxcclxuICAgIHNldENhcmV0QXQsXHJcbiAgICBHZXRDbG9zZXN0QmxvY2tFbGVtZW50XHJcbn0gZnJvbSBcIi4vc2VydmljZXMvcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgTW9kZXMgZnJvbSAnLi9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgc2V0U3R5bGUsIHRvZ2dsZVN0eWxlLCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50LCByZW1vdmVaZXJvU3BhY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2N1c3RvbS90ZXh0U2VsZWN0ZWQnO1xyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RVZFTlRTfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUZW1wTGlua0VsZW1lbnQsIHJlc2V0VVJMLFRBUkdFVFMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9saW5rLnNlcnZpY2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XHJcblxyXG4gICAgLy8gKnRhcmdldCA9PiBjYW4gYmUgSWQgb2YgRWxlbWVudCB0aGF0IHNob3VsZCBjb250YWluIEVkaXRvciBpbnN0YW5jZSBvciB0aGUgZWxlbWVudCBpdHNlbGYuLlxyXG4gICAgLy8gKmNvbmZpZyA9PiAgY29uZmlndXJhdGlvbiBwYXNzZWQgdCAgIG8gVG9vbCBjb25zdHJ1Y3RvclxyXG4gICAgLy9UT0RPOiBhZGQgdGFyZ2V0IHZhbGlkYXRpb25zLi47XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX19jb25maWcgPSB7XHJcbiAgICAgICAgICAgIG9uSW5zcGVjdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbiA9IChrZXksY2FsbGJhY2spPT57XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihrZXkpICE9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJrZXkgbXVzdCBiZSBhIHN0cmluZy4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRVZFTlRTW2tleV0gID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkNvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IoKTtcclxuICAgICAgICB0aGlzLm1vZGVIYW5kbGVycyA9IHtcclxuICAgICAgICAgICAgW01vZGVzLlRvZ2dsZV06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uVG9nZ2xlKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgICAgICBbTW9kZXMuRXh0ZW5kXTogKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpID0+IHRoaXMub25FeHRlbmQodiwga2V5LCB2YWx1ZSwgb3B0aW9ucyksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gT2JqZWN0LmFzc2lnbih0aGlzLl9fY29uZmlnLCBjb25maWcpIDogdGhpcy5fX2NvbmZpZztcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHtcclxuICAgICAgICAgICAgc3R5bGVDaGFuZ2VkOiB0aGlzLmNvbmZpZy5vbkluc3BlY3QsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRWxlbWVudCA9IHRoaXMuQ29ubmVjdG9yLkNvbm5lY3QodGFyZ2V0LCB0aGlzLmNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50VG9Kc29uKHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBsb2FkKGpzb24pIHtcclxuICAgICAgICByZXR1cm4gSnNvblRvRWxlbWVudChqc29uLCB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rvci5EZXN0cm95KCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZikge1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3LlxyXG4gICAgLy9UT0RPOiBDcmVhdGUgbm9ybWFsaXplLi5cclxuICAgIC8vcXVlc3Rpb246IGlmIHRleHQgd2FzIHNlbGVjdGVkLCBzaG91bGQgd2UgdW53cmFwIHRoZSBzZWxlY3RpaW9uIG9ubHkgPyBcclxuICAgIHVuTGluaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uICYmICFzZWxlY3Rpb24udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvVW53cmFwO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlTm9kZSA9IHNlbGVjdGlvbi5iYXNlTm9kZTtcclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAzICYmIGJhc2VOb2RlLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcCA9IGJhc2VOb2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAgPSBlbGVtZW50VG9VbndyYXAuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1Vud3JhcCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwLnVud3JhcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaW5rRWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIEFycmF5LmZyb20obGlua0VsZW1lbnRzKS5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0QVRhZyA9IHIuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZXN0QVRhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzcGxpdEhUTUwociwgY2xvc2VzdEFUYWcsIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhLmNlbnRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhLnVud3JhcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgci51bndyYXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGxpbmtFbGVtZW50c1swXSwgbGlua0VsZW1lbnRzW2xpbmtFbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAvL1RPRE86IG1lcmdlIGEgdGFncy4uXHJcbiAgICAvL1RPRE86IHJlbW92ZSBhIGNoaWxkc1xyXG4gICAgLy9UT0RPOiBtb3ZlIGZ1bmN0aW9uIHRvIExpbmsuc2VydmljZS5qc1xyXG4gICAgbGluayhvcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKG9wdGlvbnMgJiYgIW9wdGlvbnMuaHJlZikgfHwgICF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uICYmICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJubyB0ZXh0IHNlbGVjdGVkLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bndyYXBBdGFncyA9IChsaW5rRWxlbWVudHMpID0+IHtcclxuICAgICAgICAgICAgbGlua0VsZW1lbnRzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGxpbmsucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goYVRhZyA9PiBhVGFnLnVud3JhcCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RBVGFnID0gbGluay5wYXJlbnRFbGVtZW50ID8gbGluay5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJhXCIpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0QVRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKGxpbmssIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNlbnRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2VzdEFUYWcudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRUYXJnZXRUb1RhZyA9IChsaW5rRWxlbWVudHMsIHJlbmRlcmVkTGluaywgX3RhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rRWxlbWVudHMuZm9yRWFjaChhVGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGFUYWcuaHJlZiA9IHJlbmRlcmVkTGluaztcclxuICAgICAgICAgICAgICAgIGlmIChfdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgX3RhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRQcm90b2NvbCA9IChfcHJvdG9jb2wsIG5ld1VSTCkgPT4ge1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBfcHJvdG9jb2wucmVwbGFjZSgvOi9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gX3Byb3RvY29sLnJlcGxhY2UoL1xcL1xcLy9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiOlwiO1xyXG4gICAgICAgICAgICBpZiAoX3Byb3RvY29sLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiLy9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdVUkwucHVzaChfcHJvdG9jb2wpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3Byb3RvY29sO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgICAgICBjb25zdCB7IGhyZWYgPSBcIlwiLCBwcm90b2NvbCA9IFwiXCIsIHRhcmdldCA9IFwiXCIgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsZXQgbmV3VVJMID0gW107XHJcbiAgICAgICAgY29uc3QgQXRhZyA9IGNyZWF0ZVRlbXBMaW5rRWxlbWVudChocmVmKTtcclxuICAgICAgICBsZXQgX2hyZWYgPSByZXNldFVSTChocmVmLnRyaW0oKSk7XHJcblxyXG4gICAgICAgIGxldCBfcHJvdG9jb2wgPSBwcm90b2NvbC50cmltKCkgfHwgQXRhZy5wcm90b2NvbDtcclxuICAgICAgICBsZXQgX3RhcmdldCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgdGVzdFRhcmdldCA9IFRBUkdFVFNbdGFyZ2V0LnRyaW0oKS50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZiAodGVzdFRhcmdldCkge1xyXG4gICAgICAgICAgICBfdGFyZ2V0ID0gdGVzdFRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wcm90b2NvbC50cmltKCkpIHtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gc2V0UHJvdG9jb2woX3Byb3RvY29sLCBuZXdVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2hyZWYpIHtcclxuICAgICAgICAgICAgbmV3VVJMLnB1c2goX2hyZWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZW5kZXJlZExpbmsgPSBuZXdVUkwuam9pbihcIlwiKTtcclxuICAgICAgICB1bndyYXBBdGFncyhsaW5rRWxlbWVudHMpO1xyXG4gICAgICAgIHNldFRhcmdldFRvVGFnKGxpbmtFbGVtZW50cywgcmVuZGVyZWRMaW5rLCBfdGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGxpbmtFbGVtZW50c1swXSwgbGlua0VsZW1lbnRzW2xpbmtFbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICBcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uIFxyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXdcclxuICAgIC8vcXVlc3Rpb24gOiB3ZSB3YW50IHRvIGhhbmRsZSBhbmQgdG9nZ2xlIGFueSBhdHRyaWJ1dGUgPyBcclxuICAgIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIC8vaGVyZVxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIChjbGFzc05hbWUpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNsYXNzTmFtZSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLnNlbGVjdGlvbikgIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaXNUb2dnbGVPbiA9ICh0eXBlb2YgKG9wdGlvbnMuaXNPTikgPT09IFwiYm9vbGVhblwiKSA/IG9wdGlvbnMuaXNPTiA6IGVsZW1lbnRzWzBdLmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICBpZiAoIWlzVG9nZ2xlT24pIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Q2xhc3MgPSBlbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdENsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gc3BsaXRIVE1MKGVsLCBjbG9zZXN0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0LmNlbnRlci5yZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gb3B0aW9ucy5zZWxlY3Rpb24gPyBzZXRTZWxlY3Rpb25GbGFncyhlbGVtZW50c1swXSwgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0pIDogeyBmaXJzdEZsYWc6IG51bGwsIGxhc3RGbGFnOiBudWxsIH07IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIGtleSBvZiBjc3MgXHJcbiAgICAqICBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBjc3NcclxuICAgICogIEBwYXJhbSB7KE9iamVjdCB8IFN0cmluZyl9IE1vZGVzIC0gbW9kZSBmcm9tIE1vZGVzID0+IEV4dGVuZCBvciBUb2dnbGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy5FeHRlbmQgLSBvdmVycmlkZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLnRvZ2dsZSAtIHRvZ2dsZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgXHJcbiAgICAqL1xyXG4gICAgZXhlY0NtZChrZXksIHZhbHVlLCBtb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSB8fCAhdGhpcy5pc1ZBbGlkS2V5VmFsdWUoa2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUyA9IFtdO1xyXG4gICAgICAgIG1vZGUgPSBtb2RlID8gbW9kZSA6IE1vZGVzLkV4dGVuZDtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLnNlbGVjdGlvbikgIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNlbGVjdGlvbiA9IHRydWU7XHJcbiAgIFxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09cmV2aWV3PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoIW9wdGlvbnMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gdGhpcy5FTEVNRU5UU1t0aGlzLkVMRU1FTlRTLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAobGFzdE5vZGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyID0gdGhpcy5jcmVhdGVDYXJldFBsYWNlbWVudChsYXN0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy51bldyYXAgJiYgQXJyYXkuaXNBcnJheShvcHRpb25zLnVuV3JhcCkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy51bldyYXAuZm9yRWFjaChzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkVMRU1FTlRTLmZvckVhY2godHh0Tm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcCA9IHR4dE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RFbGVtZW50VG9VbldyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RoaXMgaXMgaG93IGkgbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24sIGkgZG9udCBrbm93IGlmIHRoaXMgaXMgZ29vZCB3YXksIGJ1dCBpdCB3b3Jrcy4uXHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBvcHRpb25zLnNlbGVjdGlvbiA/IHNldFNlbGVjdGlvbkZsYWdzKHRoaXMuRUxFTUVOVFNbMF0sIHRoaXMuRUxFTUVOVFNbdGhpcy5FTEVNRU5UUy5sZW5ndGggLSAxXSkgOiB7IGZpcnN0RmxhZzogbnVsbCwgbGFzdEZsYWc6IG51bGwgfTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICByZW1vdmVaZXJvU3BhY2UoZ2V0VGV4dE5vZGVzKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpO1xyXG5cclxuICAgICAgICBsZXQgVG9nZ2xlTW9kZTsvL0RlY2xhcmUgdG9nZ2xlIG1vZGUsIFRoZSBmaXJzdCBlbGVtZW50IGRldGVybWluZXMgd2hldGhlciBpdCBpcyBvbiBvciBvZmZcclxuXHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBUb2dnbGVNb2RlO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1vZGVIYW5kbGVyc1ttb2RlXShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IE1vZGVzLlRvZ2dsZSAmJiB0eXBlb2YgKFRvZ2dsZU1vZGUpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIFRvZ2dsZU1vZGUgPSByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgICAgICAvL3VzZSB0aGUgZmlyc3QgYW5kIGxhc3QgZmxhZ3MgdG8gbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24gYW5kIHVud3JhcCB0aGVtLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZXRIb2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldENhcmV0QXQodGhpcy5jYXJldEhvbGRlciwgdGhpcy5jYXJldEhvbGRlci50ZXh0Q29udGVudC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlcyA9ICBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgaWYodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdFwiXShjb2xsZWN0ZWRTdHlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3N0eWxlQ2hhbmdlZCcsIGNvbGxlY3RlZFN0eWxlcyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYXJldFBsYWNlbWVudChhdE5vZGUpIHtcclxuICAgICAgICBpZiAoIWF0Tm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgY2FyZXRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gICAgICAgIGNhcmV0SG9sZGVyLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsICd0cnVlJyk7XHJcbiAgICAgICAgYXROb2RlLmFwcGVuZENoaWxkKGNhcmV0SG9sZGVyKTtcclxuICAgICAgICByZXR1cm4gY2FyZXRIb2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XShwYXlsb2FkKTtcclxuICAgIH1cclxuICAgIG9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGV0ZWN0IGlmIHRoZXJlIGlzIGFueSBwYXJlbnQgd2l0aCBzdHlsZSB0byBzcGxpdC5cclxuICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIGNhdGNoIGZyb20gb3B0aW9ucyB0byBkZXRlY3QgbW9yZSB0aGFuIG9uZSBzdHlsZSBvciB0YWcgZWxlbWVudC5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke3ZhbHVlfSddYCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50VG9TcGxpdCkuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJTcGFuID0gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlubmVyU3Bhbi5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblRvZ2dsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQgJiYgZWxlbWVudFRvU3BsaXQgIT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL3VuYm9sZFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBzcGxpdCBlbGVtZW50cywgaXRzIGVycm9yIVxyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0RWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NwbGl0SFRNTCByZXR1cm4gbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vbk9mZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25FeHRlbmQoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VG9TcGxpdCA9IGVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0nJHtrZXl9J11gKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEJsb2NrcyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRCbG9ja3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdEJsb2Nrcy5jZW50ZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudGFyZ2V0ICE9PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5uZXJTcGFuID0gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50VG9TcGxpdCwgeyBlbDogJ3NwYW4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKGlubmVyU3Bhbiwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FeHRlbmQoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudFRvU3BsaXQgIT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEVsZW1lbnRzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgJiYgb3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgJiYgYmxvY2tFbGVtZW50LmlzY2hpbGRPZih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUocGFyZW50RWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQud3JhcCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZSh3cmFwcGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbmRCbG9jayA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wdXRlZCAmJiBjb21wdXRlZC5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUgIT09IHRoaXMuY29ubmVjdGVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbmRCbG9jayhlbGVtZW50LnBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucy5hcyA9PT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gZmluZEJsb2NrKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwVGV4dE5vZGVXaXRoQXBwZW5kU3R5bGUgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLndyYXAoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlSW5saW5lU3R5bGUgPSAocGFyZW50Tm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJlbnROb2RlLmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dE5vZGVXaXRoQXBwZW5kU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBub2RlLm5vZGVOYW1lICE9PSBcIkJSXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcHV0ZWQuZGlzcGxheSAhPT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUlubGluZVN0eWxlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUlubGluZVN0eWxlKGJsb2NrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAvLyBBcnJheS5mcm9tKGJsb2NrRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKSkuZm9yRWFjaChlbD0+ZWwuc3R5bGVba2V5XSA9IHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tFbEFuZFN0eWxlSXQoa2V5LCB2YWx1ZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrRWxlbWVudCA9IGZpbmRCbG9jayhlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tFbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYmxvY2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4gZWwuc3R5bGVba2V5XSA9IG51bGwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGFyZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwYXJnaC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgZWxlbWVudC53cmFwKHBhcmdoKTtcclxuICAgIH1cclxuICAgIGlzVkFsaWRLZXlWYWx1ZShrZXksdmFsdWUpe1xyXG4gICAgICAgIHJldHVybiAhISh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIik7IFxyXG4gICAgfVxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwbGVhc2UgY3JlYXRlIG5ldyBpbnN0YW5jZS4uJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkRWxlbWVudC5jb250ZW50RWRpdGFibGUgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgKHNlbGVjdGVkRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSB8fCBzZWxlY3RlZEVsZW1lbnQgPT09IHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VSdWxlcyhkYXRhKSB7XHJcbiAgICBjb25zdCBDb2xvclRleHREZWNvcmF0aW9uUnVsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEua2V5ID09PSBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBkYXRhLmVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0ndGV4dC1kZWNvcmF0aW9uJ11gKTtcclxuICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdHMgPSBzcGxpdEhUTUwoZGF0YS5lbGVtZW50LCB0ZXh0RGVjb3JhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdHMuY2VudGVyLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzcGxpdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUodGV4dERlY29yYXRpb24sICd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBgJHtkYXRhLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgUnVsZXMgPSBbXHJcbiAgICAgICAgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGVcclxuICAgIF1cclxuICAgIFJ1bGVzLmZvckVhY2gocnVsZSA9PiBydWxlKGRhdGEpKTtcclxufSIsIlxyXG5pbXBvcnQgeyBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vc3R5bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4uL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcmVzZXRVUkwgfSBmcm9tICcuLi9saW5rLnNlcnZpY2UnO1xyXG5cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaG93IGNhbiB3ZSBleHBvc2UgdGhlIGNvbGxlY3RlZFN0eWxlID8gXHJcbi8vcXVlc3Rpb246IHNob3VsZCB3ZSB1c2UgdGhpcyA/IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NdXRhdGlvbk9ic2VydmVyXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHNlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9uSW5zcGVjdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gSW5wc2VjdG9yID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5vbkluc3BlY3QgPSBvbkluc3BlY3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhdW5jaEluc3BlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub25JbnNwZWN0KSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluc3BlY3QoY29sbGVjdGVkU3R5bGUpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkRWxlbWVudCApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVRhZyA9IHNlbGVjdGVkRWxlbWVudC5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKGFUYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSkgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RMaW5rXCJdKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOmFUYWcucHJvdG9jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOnJlc2V0VVJMKGFUYWcuaHJlZiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6YVRhZy5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIikgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXZpZXdcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGggPD0gMSAmJiAhdGhpcy50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXVuY2hJbnNwZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG4gICAgICAgIHRoaXMuRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG4vL2NsYXNzIGFuZCBzdHlsZSBub3QgaW5jbHVkZXMgeWV0Li5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRBdHRyaWJ1dGVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gY3VycmVjdEVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZihhdHRyc1tpXS5uYW1lICAhPT1cImNsYXNzXCIgJiYgYXR0cnNbaV0ubmFtZSAgIT09IFwic3R5bGVcIil7XHJcbiAgICAgICAgICAgICAgICBpZighYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQsZ2V0QWxsKXtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmKGdldEFsbCAgfHwgKCFnZXRBbGwgJiYgYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpKXtcclxuICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxBdHRycyhlbGVtZW50KXtcclxuICAgICAgaWYoZWxlbWVudCAmJiAhZWxlbWVudC5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlbGVtZW50IG5vdCBoYXZlIGF0dHJpYnV0ZXMuLlwiKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyPT5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKSlcclxuICB9IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIF9wYXJlbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChfcGFyZW50ICYmIF9wYXJlbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBfcGFyZW50LmNsYXNzTGlzdDtcclxuICAgICAgICBBcnJheS5mcm9tKG1hcCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMuZmluZEluZGV4KGMgPT4gYyA9PT0gbmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbn1cclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGlzIGV4cGVuc2l2ZSB0b28gbXVjaD8gXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCkge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcclxuICAgICAgICByZW1vdmVFbXB0eUNsYXNzKGVsZW1lbnQpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY2xhc3M9JyR7Y30nXWApKS5mb3JFYWNoKG5vZGUgPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5Q2xhc3Mobm9kZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbltjbGFzc10nKSkuY29uY2F0KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChjaGlsZCA9PiBjbGVhcihjaGlsZCkpO1xyXG59XHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBhYm91dCB0aGlzIG5hbWUgPyBcclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApKS5jb25jYXQodGhpcyk7XHJcbm5vZGVzLmZvckVhY2gobm9kZT0+bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xyXG59IiwiXHJcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4uL2V2ZW50cy9ldmVudHMnO1xyXG4vL1RPRE86cmV2aWV3XHJcbi8vc2hvdWxkIHdlIHVzZSB0aGUgY2xpcGJvYXJkIGFzIHN0cmluZyA/IG9yIHBhc3MgaW4gb3RoZXIgd2F5IGFzIGpzb24gPyBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weVBhc3RlIHtcclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgIHRoaXMudW5pcWVJRCA9ICdzdHlsZWl0LWNvcHktcGFzdGUtb24tYWN0aW9uJztcclxuICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgY29uc29sZS5lcnJvcignWy1dIENvcHkgUGFzdGUgPT4gdGFyZ2V0IGlzIG51bGwnKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHRoaXMub25QYXN0ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImRlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3JcIiwgZmFsc2UsIFwicFwiKTtcclxuICAgICAgZnVuY3Rpb24gd2Fsa1RoZURPTShub2RlLCBmdW5jKSB7XHJcbiAgICAgICAgZnVuYyhub2RlKTtcclxuICAgICAgICBub2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG4gICAgICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgICB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpO1xyXG4gICAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IGJsb2NrID0gdGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudGFyZ2V0LmlkfWApO1xyXG4gICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgICAgICBsZXQgY2xpcCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9odG1sJykudHJpbSgpO1xyXG4gICAgICAgIGlmICghY2xpcCkge1xyXG4gICAgICAgICAgY2xpcCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnRyaW0oKTtcclxuICAgICAgICAgIGNsaXAgPSBjbGlwLnJlcGxhY2UoL1xcbi9nLCBcIjxici8+XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogcmVnZXggYWxsIHRvZ2hldGVyIVxyXG4gICAgICAgIGxldCBtYXJrdXAgPSBjbGlwO1xyXG4gICAgICAgIFtcIjxodG1sPlwiLCBcIjxib2R5PlwiLCBcIjwhLS1TdGFydEZyYWdtZW50LS0+XCIsIFwiPCEtLUVuZEZyYWdtZW50LS0+XCIsIFwiPC9ib2R5PlwiLCBcIjwvaHRtbD5cIl0uXHJcbiAgICAgICAgICBmb3JFYWNoKHJlcCA9PiBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShyZXAsIFwiXCIpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0ZW1wLmlubmVySFRNTCA9IG1hcmt1cC5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L2csIFwiXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xyXG4gICAgICAgIC8vIEV4YW1wbGUgdXNhZ2U6IFByb2Nlc3MgYWxsIFRleHQgbm9kZXMgb24gdGhlIHBhZ2VcclxuICAgICAgICBjb25zdCBub3RWYWxpZCA9IFtcIk1FVEFcIiwgXCJMSU5LXCIsIFwiU0NSSVBUXCIsIFwiVENYU1BBTlwiLCBcIk86UFwiLCBcIlNUWUxFXCJdO1xyXG5cclxuICAgICAgICB3YWxrVGhlRE9NKHRlbXAsIGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICBpZiAoIW5vdFZhbGlkLmluY2x1ZGVzKG5vZGUubm9kZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVkKTtcclxuXHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobmV3RWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZW5kZXJlZC5hcHBlbmRDaGlsZChuZXdFbCk7XHJcbiAgICAgICAgICBpZiAobmV3RWwudGV4dENvbnRlbnQgJiYgbmV3RWwubm9kZVR5cGUgPT09IDEgJiYgbmV3RWwubm9kZU5hbWUgIT09IFwiYnJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5ld0VsKTtcclxuICAgICAgICAgICAgaWYgKGNvbXB1dGVkLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xyXG4gICAgICAgICAgICAgIG5ld0VsLmluc2VydEFmdGVyKGJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG5ld0VsLm5vZGVUeXBlICE9PSAzICYmIG5ld0VsLm5vZGVOYW1lICE9PSBcIkJSXCIpIHtcclxuICAgICAgICAgICAgbmV3RWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYXJyID0gQXJyYXkuZnJvbShyZW5kZXJlZC5jaGlsZE5vZGVzKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycltpbmRleF07XHJcbiAgICAgICAgICBpZiAoIWVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWFyclthcnIubGVuZ3RoIC0gMV0udGV4dENvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgYXJyW2Fyci5sZW5ndGggLSAxXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJpbnNlcnRIVE1MXCIsIGZhbHNlLCByZW5kZXJlZC5pbm5lckhUTUwpO1xyXG4gICAgICAgIC8vIHBhc3RlSHRtbEF0Q2FyZXQocmVuZGVyZWQpO1xyXG4gICAgICAgIHJlbmRlcmVkLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEVWRU5UU1tcInBhc3RlXCJdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICBFVkVOVFNbXCJwYXN0ZVwiXShyZW5kZXJlZC5pbm5lckhUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLm9uUGFzdGUpO1xyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIHRoaXMub25Db3B5KTtcclxuICB9XHJcbiAgRGVzdHJveSgpIHtcclxuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgdGhpcy5vblBhc3RlKTtcclxuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvcHknLCB0aGlzLm9uQ29weSk7XHJcbiAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0U3R5bGUsIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgTGV2ZWxzIGZyb20gJy4uL2NvbnN0YW50cy9MZXZlbHMuanNvbic7XHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIHdhbGtUaGVET00obm9kZSwgZnVuYykge1xyXG4gICAgaWYoIW5vZGUpIHJldHVybiBudWxsO1xyXG4gICAgZnVuYyhub2RlKTtcclxuICAgIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpO1xyXG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEVsZW1lbnQoKSB7XHJcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICB2YXIgYW5jTm9kZSA9IG5vZGUuZXh0ZW50Tm9kZTtcclxuICAgICAgICBpZiAoYW5jTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgYW5jTm9kZSA9IGFuY05vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBlbCA9IChhbmNOb2RlLm5vZGVUeXBlID09PSAzID8gYW5jTm9kZS5wYXJlbnROb2RlIDogbm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmNOb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvblRvRWxlbWVudChqc29uT2JqZWN0LCBwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAvL1RPRE86IGNyZWF0ZSBwYXJlbnRlbGVtZW50IGFuZCBqc29ub2JqZWN0IHZhbGlkYXRpb24gICBcclxuICAgIGNvbnN0IHJlbmRlckF0dHJzID0gKGpzRWxlbWVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gWy4uLmpzRWxlbWVudC5jbGFzc0xpc3RdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNFbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoanNFbGVtZW50LnN0eWxlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbGxlY3RlZFN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IG90aGVyIGF0dHJzLi4uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChqc0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGpzRWxlbWVudC50YWc7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlzU2hvdWxkUmVuZGVyQXR0cnM7XHJcbiAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShqc0VsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmhyZWYgPSBqc0VsZW1lbnQuaHJlZjtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0ID0ganNFbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZW5kZXJBdHRycyhqc0VsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICghcGFyZW50RWxlbWVudCAmJiBqc29uT2JqZWN0LnR5cGUgPT09IExldmVsc1snMCddKSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzb25PYmplY3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdC5jaGlsZHJlbikpIHtcclxuICAgICAgICBqc29uT2JqZWN0LmNoaWxkcmVuLmZvckVhY2goanNDaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoanNDaGlsZCk7XHJcbiAgICAgICAgICAgIGlmIChodG1sRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBKc29uVG9FbGVtZW50KGpzQ2hpbGQsIGh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbnQgY3JlYXRlIGRvbSBlbGVtZW50IGZyb20ganNvbicsIGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFRvSnNvbihub2RlLCBsZXZlbCkge1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIChsZXZlbCkgIT09IFwibnVtYmVyXCIpIGxldmVsID0gMDtcclxuICAgIGNvbnN0IG5vZGVUeXBlID0gbm9kZS5ub2RlTmFtZTtcclxuICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzID0gdHJ1ZTtcclxuICAgIGxldCBqc29uID0ge307XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKExldmVsc1tsZXZlbF0pIHtcclxuICAgICAgICBqc29uLnR5cGUgPSBMZXZlbHNbbGV2ZWxdO1xyXG4gICAgICAgIGxldmVsKys7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCIjdGV4dFwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3F1ZXN0aW9uOiByZXBsYWNlIFxcbiA/XHJcbiAgICAgICAgICAgIGlmICghanNvbi50ZXh0Q29udGVudC50cmltKCkpIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi5ocmVmID0gbm9kZS5ocmVmO1xyXG4gICAgICAgICAgICBqc29uLnRhcmdldCA9IG5vZGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICAvL1RPRE86IHNob3VsZCB3ZSB1bndyYXAgdGhpcyBub2RlID8gXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzKSB7XHJcbiAgICAgICAgLy9UT0RPOiBnZXQgYXR0cnMgXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShub2RlKTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3R5bGUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAganNvbi5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAganNvbi5jbGFzc0xpc3QgPSBbLi4ubm9kZS5jbGFzc0xpc3RdO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNoaWxkcmVuID0gWy4uLm5vZGUuY2hpbGROb2Rlc10ubWFwKChjbikgPT4gZWxlbWVudFRvSnNvbihjbiwgbGV2ZWwpKS5maWx0ZXIodiA9PiB2KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuXHJcbn0iLCJleHBvcnQgY29uc3QgRVZFTlRTID0ge1xyXG4gIFxyXG59IiwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlQcmVzcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGtleXMpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dIGtleVByZXNzID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlstXSBrZXlQcmVzcyA9PiBrZXlzIG11c3QgYmUgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5rZXlwcmVzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSAmJiBrZXkubGVuZ3RoID09PSAyICYmIGtleVswXSA9PT0gZS5rZXlDb2RlICYmIHR5cGVvZihrZXlbMV0pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlbMV0oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5EZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlwcmVzcyk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgICBjb25zdCBUQVJHRVRTID0ge1xyXG4gICAgX2JsYW5rOiBcIl9ibGFua1wiLFxyXG4gICAgX3NlbGY6IFwiX3NlbGZcIixcclxuICAgIF9wYXJlbnQ6IFwiX3BhcmVudFwiLFxyXG4gICAgX3RvcDogXCJfdG9wXCJcclxufVxyXG5leHBvcnQgIGNvbnN0IHJlc2V0VVJMID0gKHNyYykgPT4ge1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL2h0dHBzOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvaHR0cDovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL21haWx0bzovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL3RlbDovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL1xcLy9nLCAnJyk7XHJcbiAgICByZXR1cm4gc3JjO1xyXG59XHJcbmV4cG9ydCAgIGNvbnN0IGNyZWF0ZVRlbXBMaW5rRWxlbWVudCA9IChocmVmKSA9PiB7XHJcbiAgICBjb25zdCBBdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBBdGFnLmhyZWYgPSBocmVmO1xyXG4gICAgcmV0dXJuIEF0YWc7XHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSBvcHRpb25zID0ge307XHJcbiAgbGV0IGlubmVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy5lbCB8fCBcInNwYW5cIik7XHJcbiAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4gaW5uZXJTcGFuLmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lclNwYW4pO1xyXG4gIHJldHVybiBpbm5lclNwYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCkge1xyXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHJldHVybiBlbGVtZW50O1xyXG4gIGxldCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIHdoaWxlIChwYXJlbnRFbGVtZW50ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZW1lbnQpLmRpc3BsYXkgIT09IFwiYmxvY2tcIikge1xyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG59XHJcbi8vVE9ETzpyZXZpZXdcclxuICBleHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEJsb2NrRWxlbWVudChsaW1pdEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHdyYXBFbGVtZW50V2l0aEJsb2NrID0gKGVsKSA9PntcclxuICAgICAgbGV0IHdFbCA9IFwiZGl2XCI7XHJcbiAgICAgIGlmKGVsLm5vZGVOYW1lID09PSBcIlNQQU5cIil7XHJcbiAgICAgICAgd0VsID0gXCJwXCI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod0VsKTtcclxuICAgICAgZWwud3JhcCh3cmFwcGVyKTtcclxuICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vZGVzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgIG5vZGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBjb25zdCBibG9ja0VsID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbCk7XHJcbiAgICAgIGlmIChibG9ja0VsKSB7XHJcbiAgICAgICAgaWYoIGJsb2NrRWwuaXNjaGlsZE9mKGxpbWl0RWxlbWVudCkpe1xyXG4gICAgICAgICAgY29uc3QgZm91bmRlZCA9IGVsZW1lbnRzLmZpbmQoYmxvY2s9PmJsb2NrRWwuaXNjaGlsZE9mKGJsb2NrKSk7XHJcbiAgICAgICAgICBpZighZm91bmRlZClcclxuICAgICAgICAgIGVsZW1lbnRzLnB1c2goYmxvY2tFbCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zdCBfd3JhcHBlciA9IHdyYXBFbGVtZW50V2l0aEJsb2NrKGVsKTtcclxuICAgICAgICAgIGVsZW1lbnRzLnB1c2goX3dyYXBwZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICAgIGVsZW1lbnRzLnB1c2goX3dyYXBwZXIpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub2Rlczogbm9kZXMsXHJcbiAgICAgIGJsb2NrczogZWxlbWVudHNcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50cztcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHdyYXBSYW5nZVdpdGhFbGVtZW50KHdyYXBUYWcpIHtcclxuICAgIGNvbnN0IHJhbmdlcyA9IGdldFJhbmdlcygpO1xyXG4gICAgcmV0dXJuIHJhbmdlcy5tYXAociA9PiB7XHJcbiAgICAgIHJldHVybiB3cmFwUmFuZ2VUZXh0KHdyYXBUYWcsIHIpO1xyXG4gICAgfSkuZmxhdCgpO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbC5yYW5nZUNvdW50OyBpKyspIHtcclxuICAgICAgcmFuZ2VzW2ldID0gc2VsLmdldFJhbmdlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmFuZ2VzO1xyXG4gIH1cclxuICAvLyByZXR1cm4gYWxsIHRleHQgbm9kZXMgdGhhdCBhcmUgY29udGFpbmVkIHdpdGhpbiBgZWxgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFRleHROb2RlcyhlbCkge1xyXG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQsXHJcbiAgICAgIHdhbGtlciA9IGRvYy5jcmVhdGVUcmVlV2Fsa2VyKGVsLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpLFxyXG4gICAgICB0ZXh0Tm9kZXMgPSBbXSxcclxuICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG5cclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dE5vZGVzXHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByYW5nZXNJbnRlcnNlY3QocmFuZ2VBLCByYW5nZUIpIHtcclxuICAgIHJldHVybiByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19TVEFSVCwgcmFuZ2VCKSA9PT0gLTEgJiZcclxuICAgICAgcmFuZ2VBLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhSYW5nZS5TVEFSVF9UT19FTkQsIHJhbmdlQikgPT09IDFcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICAgIHRyeSB7XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmFuZ2VcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q2hhcmFjdGVyT2Zmc2V0V2l0aGluKGVsZW1lbnQpIHtcclxuICAgIHZhciBjYXJldE9mZnNldCA9IDA7XHJcbiAgICB2YXIgZG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQ7XHJcbiAgICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XHJcbiAgICB2YXIgc2VsO1xyXG4gICAgaWYgKHR5cGVvZiB3aW4uZ2V0U2VsZWN0aW9uICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgc2VsID0gd2luLmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBpZiAoc2VsLnJhbmdlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gd2luLmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgICAgdmFyIHByZUNhcmV0UmFuZ2UgPSByYW5nZS5jbG9uZVJhbmdlKCk7XHJcbiAgICAgICAgcHJlQ2FyZXRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XHJcbiAgICAgICAgcHJlQ2FyZXRSYW5nZS5zZXRFbmQocmFuZ2UuZW5kQ29udGFpbmVyLCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jLnNlbGVjdGlvbikgJiYgc2VsLnR5cGUgIT0gXCJDb250cm9sXCIpIHtcclxuICAgICAgdmFyIHRleHRSYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICB2YXIgcHJlQ2FyZXRUZXh0UmFuZ2UgPSBkb2MuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgICAgcHJlQ2FyZXRUZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQoZWxlbWVudCk7XHJcbiAgICAgIHByZUNhcmV0VGV4dFJhbmdlLnNldEVuZFBvaW50KFwiRW5kVG9FbmRcIiwgdGV4dFJhbmdlKTtcclxuICAgICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFRleHRSYW5nZS50ZXh0Lmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYXJldE9mZnNldDtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNldENhcmV0QXQoZWxlbWVudCwgY2hhckluZGV4KSB7XHJcbiAgICB2YXIgbm9kZSA9IGVsZW1lbnQ7XHJcbiAgICBub2RlLmZvY3VzKCk7XHJcbiAgICB2YXIgdGV4dE5vZGUgPSBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSk7XHJcbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGVbMF0sIGNoYXJJbmRleCk7XHJcbiAgICByYW5nZS5zZXRFbmQodGV4dE5vZGVbMF0sIGNoYXJJbmRleCk7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHBhc3RlSHRtbEF0Q2FyZXQoaHRtbCkge1xyXG4gICAgdmFyIHNlbCwgcmFuZ2U7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAvLyBJRTkgYW5kIG5vbi1JRVxyXG4gICAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgd291bGQgYmUgdXNlZnVsIGhlcmUgYnV0IGlzXHJcbiAgICAgICAgLy8gb25seSByZWxhdGl2ZWx5IHJlY2VudGx5IHN0YW5kYXJkaXplZCBhbmQgaXMgbm90IHN1cHBvcnRlZCBpblxyXG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgKElFOSwgZm9yIG9uZSlcclxuICAgICAgICBsZXQgZWw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoaHRtbCkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiAoaHRtbCkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIGVsID0gaHRtbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBub2RlLCBsYXN0Tm9kZTtcclxuICAgICAgICB3aGlsZSAoKG5vZGUgPSBlbC5maXJzdENoaWxkKSkge1xyXG4gICAgICAgICAgbGFzdE5vZGUgPSBmcmFnLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByYW5nZS5pbnNlcnROb2RlKGZyYWcpO1xyXG5cclxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGUgc2VsZWN0aW9uXHJcbiAgICAgICAgaWYgKGxhc3ROb2RlKSB7XHJcbiAgICAgICAgICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0QWZ0ZXIobGFzdE5vZGUpO1xyXG4gICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkge1xyXG4gICAgaWYgKHJhbmdlLmludGVyc2VjdHNOb2RlKSB7XHJcbiAgICAgIHJldHVybiByYW5nZS5pbnRlcnNlY3RzTm9kZShub2RlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJhbmdlc0ludGVyc2VjdChyYW5nZSwgY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSlcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIsXHJcbiAgICAgIG5vZGVzID0gZ2V0VGV4dE5vZGVzKGNvbnRhaW5lci5wYXJlbnROb2RlIHx8IGNvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gbm9kZXMuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiByYW5nZUludGVyc2VjdHNOb2RlKHJhbmdlLCBub2RlKSAmJiBpc05vbkVtcHR5VGV4dE5vZGUobm9kZSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpc05vbkVtcHR5VGV4dE5vZGUobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoID4gMFxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xyXG4gICAgaWYgKGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSkge1xyXG4gICAgaWYgKHR5cGVvZiBub2RlLnBhcmVudE5vZGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcmVtb3ZlRWxlbWVudChyZXBsYWNlbWVudE5vZGUpO1xyXG4gICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSk7XHJcbiAgICAgIHJlbW92ZUVsZW1lbnQobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3RUZXh0KG5vZGUpIHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KG5vZGUpO1xyXG4gICAgICByYW5nZS5zZWxlY3QoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3Qgc2VsZWN0IHRleHQgaW4gbm9kZTogVW5zdXBwb3J0ZWQgYnJvd3Nlci5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XHJcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlV3JhcHBlckZ1bmN0aW9uKHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICAgIHZhciBzdGFydE5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcixcclxuICAgICAgZW5kTm9kZSA9IHJhbmdlLmVuZENvbnRhaW5lcixcclxuICAgICAgc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldCxcclxuICAgICAgZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBOb2RlKG5vZGUpIHtcclxuICAgICAgdmFyIGN1cnJlbnRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgY3VycmVudFdyYXBwZXIgPSB3cmFwcGVyRWwuY2xvbmVOb2RlKClcclxuXHJcbiAgICAgIGN1cnJlbnRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmIChub2RlID09PSBzdGFydE5vZGUgJiYgc3RhcnROb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgY3VycmVudFJhbmdlLnNldFN0YXJ0KG5vZGUsIHN0YXJ0T2Zmc2V0KVxyXG4gICAgICAgIHN0YXJ0Tm9kZSA9IGN1cnJlbnRXcmFwcGVyXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSAwXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGUgPT09IGVuZE5vZGUgJiYgZW5kTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgIGN1cnJlbnRSYW5nZS5zZXRFbmQobm9kZSwgZW5kT2Zmc2V0KVxyXG4gICAgICAgIGVuZE5vZGUgPSBjdXJyZW50V3JhcHBlcjtcclxuICAgICAgICBlbmRPZmZzZXQgPSAxXHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudFJhbmdlLnN1cnJvdW5kQ29udGVudHMoY3VycmVudFdyYXBwZXIpXHJcbiAgICAgIHJldHVybiBjdXJyZW50V3JhcHBlclxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QWxsTm9kZXMoKSB7XHJcbiAgICB2YXIgbm9kZXMsIHJhbmdlO1xyXG4gICAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgICAgcmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKVxyXG4gICAgfVxyXG4gICAgaWYgKHJhbmdlLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIC8vIG5vdGhpbmcgdG8gd3JhcFxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcbiAgICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICB3aGlsZSAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBub2Rlc1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlVGV4dCh3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcmFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmFuZ2UuaXNDb2xsYXBzZWQpIHtcclxuICAgICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3cmFwcGVyRWwgPSAnc3BhbidcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gYXNzdW1lIGl0J3MgYSB0YWduYW1lXHJcbiAgICAgIHdyYXBwZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlckVsKTtcclxuICAgIH1cclxuXHJcbiAgICB3cmFwTm9kZSA9IGNyZWF0ZVdyYXBwZXJGdW5jdGlvbih3cmFwcGVyRWwsIHJhbmdlKVxyXG5cclxuICAgIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5tYXAod3JhcE5vZGUpO1xyXG4gICAgcmV0dXJuIG5vZGVzXHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyxvcHRpb25zID0ge30pIHtcclxuICAgICBjb25zdCBfb3B0aW9ucyA9IHtyZW1vdmU6dHJ1ZX07XHJcbiAgICAgT2JqZWN0LmFzc2lnbihfb3B0aW9ucyxvcHRpb25zKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5zZXRCYXNlQW5kRXh0ZW50KGZpcnN0RmxhZywgMCwgbGFzdEZsYWcsIGxhc3RGbGFnLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgICAgICBpZihfb3B0aW9ucy5yZW1vdmUpe1xyXG4gICAgICAgICAgW2ZpcnN0RmxhZywgbGFzdEZsYWddLmZvckVhY2goZSA9PiBlLnVud3JhcCgpKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25GbGFncyhmaXJzdEVsZW1lbnQsIExhc3RFbGVtZW50KSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCBmaXJzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gICAgZmlyc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIGZpcnN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgICBjb25zdCBsYXN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgICBsYXN0RmxhZy5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCBMYXN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcblxyXG4gICAgZmlyc3RFbGVtZW50LnByZXBlbmQoZmlyc3RGbGFnKTsgLy9TZXQgZmxhZyB0aGUgZmlyc3RcclxuICAgIExhc3RFbGVtZW50LmFwcGVuZENoaWxkKGxhc3RGbGFnKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICByZXR1cm4geyBmaXJzdEZsYWcsIGxhc3RGbGFnIH07XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEhUTUwoKSB7XHJcbiAgICB2YXIgcmFuZ2U7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICBpZiAocmFuZ2UuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb250ZW50ID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICByYW5nZTogcmFuZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gc2F2ZVNlbGVjdGlvbigpIHtcclxuICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVTZWxlY3Rpb24ocmFuZ2UpIHtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIHJhbmdlLnNlbGVjdCkge1xyXG4gICAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZVJ1bGVzIH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzXCI7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBpbnRhaWxTdHlsZSA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBnZXRTdHlsZShjdXJyZWN0RWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwW3N0eWxlXTtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbiAgY291bGQgYmUgdHdpY2UgbGlrZSB1bmRlcmxpbmUgYW5kIHN0cmlrZSB0aGVyb3VnaC4uIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRhaWxTdHlsZVtzdHlsZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW50YWlsU3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGludGFpbFN0eWxlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IGVsLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9KVxyXG59XHJcbi8vVE9HR0xFXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBpc09uKSB7XHJcbiAgICBpZiAoaXNPbikge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7dmFsdWV9J11gKSkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGVba2V5XSA9IGNoaWxkLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoY2hpbGQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShjaGlsZCk7XHJcbiAgICB9KVxyXG59XHJcbi8vRVhURU5EXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBqc29uU3R5bGUpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25TdHlsZSkge1xyXG4gICAgICAgIGlmIChqc29uU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGpzb25TdHlsZVtrZXldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9UT0dHTEVcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICBpZihrZXkgPT09IFwiY29sb3JcIil7XHJcbiAgICAgICAgVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6J2NvbG9yJyx2YWx1ZTp2YWx1ZX0pO1xyXG4gICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgIH0pO1xyXG4gICAgLy9leHBlcmltZW50YWw6IHN0eWxlIHRoZSB0ZXh0IGRlY29yYXRpb25zIHdpdGggY29sb3IuLlxyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgLy8gVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6a2V5LHZhbHVlOnZhbHVlfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgPSAoY29ubmVjdGVjRWxlbWVudCkgPT57ICAgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gZ2V0SW5oZWlydENzcyhzZWxlY3RlZEVsZW1lbnQsY29ubmVjdGVjRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShlbGVtZW50KSB7XHJcbiAgICBpZighZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0U3R5bGVzID0gZ2V0U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdFN0eWxlcykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtjb2xsZWN0U3R5bGVzW2tleV19J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKHN0eWxlcykge1xyXG4gICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLnB1c2goYCR7a2V5fToke3N0eWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0U3R5bGVzLmpvaW4oJzsnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcclxuICAgIGlmICghZWwgfHwgIWVsLnN0eWxlKSByZXR1cm4ge307XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBsZXQgc3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsZXQgY29sbGVjdFN0eWxlcyA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdFN0eWxlcykpIHtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVbMV0gJiYga2V5VmFsdWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleVZhbHVlWzBdLnRyaW0oKV0gPSBrZXlWYWx1ZVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZXM7XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWVyZ2VOb2RlQ29udGVjdCwgbWVyZ2VUd29Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXMvbWVyZ2VyXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBub3JtYWxpemVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVFbGVtZW50KGVsKSB7XHJcbiAgICBjb25zdCByZWN1cnNlID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJlY3Vyc2UoY2hpbGQpO1xyXG4gICAgICAgICAgICBfbm9ybWFsaXplKGNoaWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNTdHlsZXMgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSB3cmFwcGVyLm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZVR3b05vZGVzKHdyYXBwZXIsIG5leHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNDb250ZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlTm9kZUNvbnRlY3Qod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VkIHx8IHdyYXBwZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZXJnZWRTdHlsZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWVyZ2VkQ29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgX25vcm1hbGl6ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgbWVyZ2VkU3R5bGVzID0gbWVyZ2VOb2Rlc1N0eWxlcyhlbGVtZW50KTtcclxuICAgICAgICAgICAgbWVyZ2VkQ29udGVudCA9IG1lcmdlTm9kZXNDb250ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIH0gd2hpbGUgKG1lcmdlZENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWwubm9ybWFsaXplKCk7XHJcbiAgICByZWN1cnNlKGVsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfbm9ybWFsaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShlbGVtZW50KTtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShlbGVtZW50KTtcclxuICAgICAgICBjb25zdCB0YWdzID0gW1wiU1RSSUtFXCIsIFwiRU1cIiwgXCJJXCIsIFwiQlwiLCBcIlNUUk9OR1wiLCBcIlVcIiwgXCJBXCIsXCJTUEFOXCJdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVE9ETzogbm9ybWFsaXpyIGF0dHJpYnV0ZXMgKG5vOnN0eWxlLGNsYXNzTmFtZSlcclxuICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWdzLmluY2x1ZGVzKGVsZW1lbnQubm9kZU5hbWUpICYmICghZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVud3JhcHBlZCA9IGVsZW1lbnQudW53cmFwKCk7XHJcbiAgICAgICAgICAgIHVud3JhcHBlZC5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgLy9UT0RPOiBjaGVjayB0aGUgcmV0dXJuO1xyXG4gICAgICAgICAgICByZXR1cm4gdW53cmFwcGVkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRleHROb2RlcyAtIHRleHRub2RlIHRvIHJlbW92ZSB0aGUgemVybyBzcGFjZSBsaWtlIDogdTIwMEJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVaZXJvU3BhY2UodGV4dE5vZGVzKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGV4dE5vZGVzKSkge1xyXG4gICAgICAgIHRleHROb2RlcyA9IFt0ZXh0Tm9kZXNdO1xyXG4gICAgfVxyXG4gICAgdGV4dE5vZGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgZWwucGFyZW50RWxlbWVudCAmJiBlbC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIlRFWFQtU0VMRUNUSU9OXCIpIHtcclxuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbiIsImNsYXNzIERvbVV0aWxpcyB7XHJcblxyXG5cclxuICBpc0VsZW1lbnQob2JqKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKG9iai5ub2RlVHlwZSA9PT0gMSkgJiYgKHR5cGVvZiBvYmouc3R5bGUgPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gXCJvYmplY3RcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHdyYXAoZWwsIHdyYXBwZXIpIHtcclxuICAgIC8vZWwgc2hvdWxkIGJlIGFycmF5XHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xyXG4gICAgICBlbGVtZW50cyA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudHMgPSBbZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhcmVudHMgPSBlbGVtZW50cy5tYXAoZSA9PiBlLnBhcmVudE5vZGUpO1xyXG4gICAgdmFyIHBhcmVudHNEaWZmID0gcGFyZW50cy5maWx0ZXIoKHAsIF8sIHNlbGYpID0+IHsgcmV0dXJuIHNlbGZbMF0gIT09IHAgfSk7XHJcbiAgICBpZiAocGFyZW50c0RpZmYubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbd3JhcF0gZm91bmQgJHtwYXJlbnRzRGlmZi5sZW5ndGh9IGRpZmZlcmVudCBwYXJlbnRzIPCfmIVgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGFyZW50c1swXS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNbMF0pXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKF9lbCA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKF9lbCkpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEb21VdGlsaXMoKTsgXHJcblxyXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7aWYobnVsbCE9PWUpe3ZhciB0PWUuYW5jaG9yTm9kZTtpZihudWxsIT09dCl7Zm9yKDszPT09dC5ub2RlVHlwZTspdD10LnBhcmVudE5vZGU7cmV0dXJuIHR9cmV0dXJuIG51bGx9fVxyXG5FbGVtZW50LnByb3RvdHlwZS53cmFwID0gKCB3cmFwcGVyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKSB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyKTtcclxuICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dCh0aGlzKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IFxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLmlzY2hpbGRPZiA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIGlmICghcGFyZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgbGV0IG5vZGUgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xyXG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5jb25zdCBfd3JhcCA9IGZ1bmN0aW9uKHdyYXBwZXIpIHtcclxuICBpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIGZhbHNlO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5UZXh0LnByb3RvdHlwZS53cmFwID0gX3dyYXA7XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobmV3Tm9kZSkge1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy5uZXh0U2libGluZyk7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZU5vZGUgPSBmdW5jdGlvbihyZXBsYWNlbWVudE5vZGUpIHtcclxuICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgdGhpcylcclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xyXG4gIH1cclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS51bndyYXAgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpXHJcbiAgdmFyIGV4dHJhQ29udGVudHMgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICB0aGlzLnJlcGxhY2VOb2RlKGV4dHJhQ29udGVudHMpXHJcbiAgcmV0dXJuIGV4dHJhQ29udGVudHM7XHJcbn1cclxuIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi9Eb21VdGlsaXNcIlxyXG5pbXBvcnQgeyBnZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRDbGFzc2VzLCBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi9fYXBwLmNvbmZpZy5qc29uJztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICAqIFJldHVybnMgdGhlIG5ldyBtZXJnZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gRG9tRWxlbWVudCAtIGVsZW1lbnQgdG8gbWVyZ2Ugd2l0aCBoaXMgZmlyc3QgY2hpbGRcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZU5vZGVDb250ZWN0ID0gbm9kZSA9PiB7XHJcblxyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KG5vZGUpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gbm9kZSBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBpZiAoIWZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3QgY2hpbGQgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlyc3RDaGlsZC5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3RDaGlsZCBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS50ZXh0Q29udGVudCAhPT0gZmlyc3RDaGlsZC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSB0ZXh0IGNvbnRlbnQgaXMgZGlmZmVyZW50Jyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudFByb3BzID0ge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShub2RlKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKG5vZGUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKG5vZGUpXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIF9lbGVtZW50UHJvcHMuc3R5bGUpIHtcclxuICAgICAgICBjb25zdCBzdHlsZVZhbHVlID0gX2VsZW1lbnRQcm9wcy5zdHlsZVtzdHlsZV07XHJcbiAgICAgICAgZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gPSAoZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gKyBcIiBcIiArIHN0eWxlVmFsdWUpLnRyaW0oKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBfZWxlbWVudFByb3BzLmF0dHJzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gX2VsZW1lbnRQcm9wcy5hdHRyc1thdHRyXTtcclxuICAgICAgICBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKC4uLl9lbGVtZW50UHJvcHMuY2xhc3Nlcyk7XHJcbiAgICBub3JtYWxpemVDbGFzc05hbWUoZmlyc3RDaGlsZCk7XHJcbiAgICBub3JtYWxpemVFbGVtZW50KGZpcnN0Q2hpbGQpO1xyXG4gICAgaWYoZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50KVxyXG4gICAgZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVR3b05vZGVzKGVsZW1lbnRPbmUsIGVsZW1lbnRUd28pIHtcclxuICAgIGNvbnNvbGUubG9nKCdbbWVyZ2VUd29Ob2Rlc10gU1RBUlQnKTtcclxuICAgIGlmICghRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50T25lKSB8fCAhRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50VHdvKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uZSBvZiB0aGUgcHJvcHMgaXMgbm90IGRvbSBlbGVtZW50Li4sIHBsZWFzZSBpbnNlcnQgdHdvIGVsZW1lbnQgdG8gbWVyZ2UuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnRPbmUubm9kZU5hbWUgIT09IFwiU1BBTlwiIHx8IGVsZW1lbnRUd28ubm9kZU5hbWUgIT09IFwiU1BBTlwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudHNEYXRhID0gW3tcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudE9uZSksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50T25lKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50T25lKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudFR3byksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50VHdvKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50VHdvKVxyXG4gICAgfV1cclxuICAgIGNvbnN0IGdldENvbW1vbkNsYXNzZXMgPSAoY2xhc3NlczEsIGNsYXNzZXMyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGFzc2VzMSB8fCAhY2xhc3NlczIpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICBjb25zdCBjMSA9IFsuLi5jbGFzc2VzMV07XHJcbiAgICAgICAgY29uc3QgYzIgPSBbLi4uY2xhc3NlczJdO1xyXG4gICAgICAgIHJldHVybiBjMS5maWx0ZXIoYyA9PiBjMi5pbmNsdWRlcyhjKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb21tb25TdHlsZXMgPSAoc3R5bGUxLCBzdHlsZTIpID0+IHtcclxuICAgICAgICBjb25zdCBjb21tbW9uU3R5bGVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIHN0eWxlMSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0eWxlMltzXSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUxVmFsdWVzID0gc3R5bGUxW3NdO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTJWYWx1ZXMgPSBzdHlsZTJbc107XHJcbiAgICAgICAgICAgIGlmIChzdHlsZTJWYWx1ZXMgPT09IHN0eWxlMVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgY29tbW1vblN0eWxlc1tzXSA9IHN0eWxlMlZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tbW1vblN0eWxlcztcclxuICAgIH07XHJcbiAgICBjb25zdCBjb21tb25jTGFzc2VzID0gZ2V0Q29tbW9uQ2xhc3NlcyhfZWxlbWVudHNEYXRhWzBdLmNsYXNzZXMsIF9lbGVtZW50c0RhdGFbMV0uY2xhc3Nlcyk7XHJcbiAgICBjb25zb2xlLmxvZygnY29tbW9uQ2xhc3NzZXMnLGNvbW1vbmNMYXNzZXMsZWxlbWVudE9uZSxlbGVtZW50VHdvLF9lbGVtZW50c0RhdGEpXHJcblxyXG4gICAgY29uc3QgY29tbW9uU3R5bGVzID0gZ2V0Q29tbW9uU3R5bGVzKF9lbGVtZW50c0RhdGFbMF0uc3R5bGUsIF9lbGVtZW50c0RhdGFbMV0uc3R5bGUpO1xyXG4gICAgY29uc3QgYnVpbGRXcmFwcGluZ0VsZW1lbnQgPSAoY29tbW9uU3R5bGVzLCBjb21tb25jTGFzc2VzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAvLyBoYW5kbGUgc3R5bGVzXHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZVtzXSA9IGNvbW1vblN0eWxlc1tzXTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBjbGFzc2VzXHJcbiAgICAgICAgaWYgKGNvbW1vbmNMYXNzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uY29tbW9uY0xhc3Nlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3cmFwcGVyLmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBidWlsZFdyYXBwaW5nRWxlbWVudChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpO1xyXG4gICAgaWYgKCF3cmFwcGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignd3JhcHBlciBpcyBudWxsJylcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRDbGFzc2VzID0gKG5vZGUsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tbW9uY0xhc3Nlcyk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJFbGVtZW50U3R5bGVzID0gKG5vZGUsIGNvbW1vblN0eWxlcykgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBpbiBjb21tb25TdHlsZXMpXHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbc10gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBbZWxlbWVudE9uZSwgZWxlbWVudFR3b107XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGNsZWFyRWxlbWVudENsYXNzZXMoZSwgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50U3R5bGVzKGUsIGNvbW1vblN0eWxlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIERvbVV0aWxpcy53cmFwKGVsZW1lbnRzLCB3cmFwcGVyKTtcclxuICAgIFsuLi53cmFwcGVyLmNoaWxkcmVuXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQoYylcclxuICAgIH0pXHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb21tb25WYWx1ZXNPYmplY3Qob2JqMSwgb2JqMikge1xyXG4gICAgbGV0IGNvbW1vblZhbHVlcyA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqMSkge1xyXG4gICAgICAgIGlmIChvYmoyW2tleV0gJiYgb2JqMltrZXldID09PSBvYmoxW2tleV0pIHtcclxuICAgICAgICAgICAgY29tbW9uVmFsdWVzW2tleV0gPSBvYmoxW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tbW9uVmFsdWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb21tb25BcnJheXMoYXJyMSwgYXJyMikge1xyXG4gICAgY29uc3QgbWVyZ2VBcnIgPSBbXTtcclxuICAgIEFycmF5LmZyb20oYXJyMSkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoYXJyMi5maW5kSW5kZXgoaSA9PiBpID09PSBpdGVtKSA+IDApIHtcclxuICAgICAgICAgICAgbWVyZ2VBcnIucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG1lcmdlQXJyO1xyXG59IiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi9Eb21VdGlsaXNcIlxyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q3NzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXR0ci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEluaGVpcnRDbGFzc05hbWVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0SFRNTChmcm9tRWxlbWVudCwgdG9FbGVtZW50LG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3Qge3RhZyA9IFwic3BhblwifSA9IG9wdGlvbnM7XHJcbiAgICBpZiAoIWZyb21FbGVtZW50LmlzY2hpbGRPZih0b0VsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZnJvbUVsZW1lbnQgbXVzdCBiZSBjaGlsZCBvZiB0b0VsZW1lbnQnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGZyb21FbGVtZW50KSB8fCAhRG9tVXRpbGlzLmlzRWxlbWVudCh0b0VsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZnJvbUVsZW1lbnQgJiYgdG9FbGVtZW50IG11c3QgYmUgZG9tIGVsZW1lbnRzLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEF0dHJzID0gKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gZ2V0SW5oZWlydEF0dHJpYnV0ZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0SW5oZWlydENsYXNzTmFtZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW3N0eWxlXTtcclxuICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2F0dHJdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBmcm9tRWxlbWVudC5jcmVhdGVTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IGNlbnRlclRlbXBsYXRlID0gc2V0QXR0cnMoY2VudGVyRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIC8vY2VudGVyXHJcbiAgICBjZW50ZXJUZW1wbGF0ZS5hcHBlbmRDaGlsZChmcm9tRWxlbWVudCk7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAvL2xlZnRcclxuICAgIHJhbmdlLnNldFN0YXJ0KHRvRWxlbWVudCwgMCk7XHJcbiAgICBjb25zdCBsZWZ0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgbGVmdFRlbXBsYXRlID0gc2V0QXR0cnMobGVmdEVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICB2YXIgbGVmdFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICBsZWZ0VGVtcGxhdGUuYXBwZW5kQ2hpbGQobGVmdFJhbmdlKTtcclxuICAgIC8vcmlnaHRcclxuICAgIHJhbmdlLnNldEVuZCh0b0VsZW1lbnQsIHRvRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICBjb25zdCByaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHJpZ2h0VGVtcGxhdGUgPSBzZXRBdHRycyhyaWdodEVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICB2YXIgcmlnaHRSYW5nZSA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmlnaHRUZW1wbGF0ZS5hcHBlbmRDaGlsZChyaWdodFJhbmdlKTtcclxuICAgIGNvbnN0IHNwbGl0ID0ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnRUZW1wbGF0ZSxcclxuICAgICAgICBjZW50ZXI6IGNlbnRlclRlbXBsYXRlLFxyXG4gICAgICAgIHJpZ2h0OiByaWdodFRlbXBsYXRlXHJcbiAgICB9XHJcbiAgICB0b0VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgZWwgaW4gc3BsaXQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3BsaXRbZWxdO1xyXG4gICAgICAgIHRvRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC51bndyYXAoKTtcclxuICAgIHJldHVybiBzcGxpdDtcclxuXHJcbn0iLCJpbXBvcnQgQ29yZSBmcm9tICcuL1N0eWxlSXQvaW5kZXgnO1xyXG5pbXBvcnQgIE1PREVTICBmcm9tICcuL1N0eWxlSXQvY29uc3RhbnRzL01vZGVzLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVJdCB7XHJcbiAgLy9leHBvc2Ugb25seSB0aGUgcmVsZXZhbnQgbWV0aG9kcy4uXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgIC8vVE9ETzogdmFsaWRhdGUgdGFyZ2V0ICYgY29uZmlnLi5cclxuICAgIGNvbnN0IHN0eWxlSXQgPSBuZXcgQ29yZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICBpZiAoc3R5bGVJdCkgeyAgXHJcbiAgICAgIHRoaXMuZXhlY0NtZCA9IHN0eWxlSXQuZXhlY0NtZDtcclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyA9IHN0eWxlSXQudG9nZ2xlQ2xhc3M7XHJcbiAgICAgIHRoaXMubGluayA9IHN0eWxlSXQubGluaztcclxuICAgICAgdGhpcy51bkxpbmsgPSBzdHlsZUl0LnVuTGluaztcclxuICAgICAgdGhpcy5zYXZlID0gc3R5bGVJdC5zYXZlO1xyXG4gICAgICB0aGlzLmxvYWQgPSBzdHlsZUl0LmxvYWQ7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHN0eWxlSXQuZGVzdHJveTtcclxuICAgICAgdGhpcy5vbiA9IHN0eWxlSXQub247XHJcbiAgICAgIHRoaXMuTU9ERVMgPSBNT0RFUztcclxuICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyA9IHRoaXMudG9nZ2xlQ2xhc3MuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5leGVjQ21kID0gdGhpcy5leGVjQ21kLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMub24gPSB0aGlzLm9uLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMubGluayA9IHRoaXMubGluay5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLnVuTGluayA9IHRoaXMudW5MaW5rLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmxvYWQgPSB0aGlzLmxvYWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQoc3R5bGVJdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==