/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.24
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
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements.service */ "./src/StyleIt/services/elements.service.js");


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
      const p = document.createElement("p");
      p.classList.add("p-copy-paste-content");
      p.innerHTML = content;
      if (this.onPaste) {
        this.onPaste(event)
      }
      document.execCommand('inserthtml', false, p.outerHTML);
      Object(_elements_service__WEBPACK_IMPORTED_MODULE_0__["wrapNakedTextNodes"])(this.target);
      const copyPasteContentHolder = this.target.querySelector(".p-copy-paste-content");
      if(copyPasteContentHolder){
        const closestP = copyPasteContentHolder.closest("p");
        if(closestP && closestP.classList.contains("p-copy-paste-content")){
          closestP.classList.remove("p-copy-paste-content")
        }else{
          closestP.unwrap();
        }
      }
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
/*! exports provided: wrapNakedTextNodes, walkTheDOM, getSelectedElement, JsonToElement, elementToJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapNakedTextNodes", function() { return wrapNakedTextNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkTheDOM", function() { return walkTheDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedElement", function() { return getSelectedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToElement", function() { return JsonToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementToJson", function() { return elementToJson; });
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json");
var _constants_Levels_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../constants/Levels.json */ "./src/StyleIt/constants/Levels.json", 1);



function wrapNakedTextNodes(target){
    Array.from(target.childNodes).forEach(c=>{
 
        if(c.nodeType ===1 && !c.textContent.trim() && c.children.length===0 && c.nodeName !=="BR"){
            c.parentNode.removeChild(c);
        }
        if(((c.nodeType ===3 && c.parentElement === target)) && !c.parentElement.closest("p")){
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
                    if (child.nodeType === 1 && !child.textContent.trim()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2luZGV4LmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9ydWxlcy9ydWxlcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9hdHRyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2tleVByZXNzL0tleVByZXNzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9saW5rLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3JhbmdlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3N0eWxlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL0RvbVV0aWxpcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL21lcmdlci5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvdXRpbGlzL3NwbGl0SFRNTC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLG1CQUFPLENBQUMsNkJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0RUFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9FO0FBQ3RCOztBQUV2QztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ1E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVP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RztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxzRUFBc0U7QUFDN0Usb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7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QTtBQUFBO0FBQUE7QUFBbUM7QUFDa0I7O0FBRXRDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFJO0FBQzVCLGtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdHlsZWl0LWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjJykuZGVmYXVsdDtcclxuIiwiXHJcbmNsYXNzIFRleHRTZWxlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcclxuICAgICAgY29uc3QgY3JlYXRlWmVyb1NwYWNlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnKTtcclxuICAgICAgaWYoY3JlYXRlWmVyb1NwYWNlID09PSBcInRydWVcIil7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIiYjODIwMztcIjtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0ZXh0LXNlbGVjdGlvbicsIFRleHRTZWxlY3Rpb24pOyAiLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL3V0aWxpcy9Eb21VdGlsaXNcIjtcclxuaW1wb3J0IENvcHlQYXN0ZSBmcm9tIFwiLi9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2VcIjtcclxuaW1wb3J0IElucHNlY3RvciBmcm9tIFwiLi9zZXJ2aWNlcy9JbnNwZWN0b3IvSW5zcGVjdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IEtleVByZXNzIGZyb20gXCIuL3NlcnZpY2VzL2tleVByZXNzL0tleVByZXNzXCI7XHJcblxyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCB3cmFwTmFrZWRUZXh0Tm9kZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkLi5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFJlbmRlcklubmVySFRNTCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5RWxlbWVudCA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2RlcyhlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25Db250ZW50ID0gZWxlbWVudFRvSnNvbihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IEpzb25Ub0VsZW1lbnQoanNvbkNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgZW1wdHlFbGVtZW50KGVsZW1lbnQpLnRoZW4oKCkgPT4gZWxlbWVudC5pbm5lckhUTUwgPSByZW5kZXJlZEVsZW1lbnQuaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlUGx1Z2lucyA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb3B5UGFzdGU6IG5ldyBDb3B5UGFzdGUoZWxlbWVudCwgb3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3I6IG5ldyBJbnBzZWN0b3IoZWxlbWVudCwgb3B0aW9ucy5vbkluc3BlY3QpLFxyXG4gICAgICAgICAgICAgICAga2V5UHJlc3M6IG5ldyBLZXlQcmVzcyhlbGVtZW50LCBvcHRpb25zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFJlbmRlcklubmVySFRNTChlbGVtZW50KTtcclxuICAgICAgICAvLyBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcclxuICAgICAgICB0aGlzLnBsdWdpbnMgPSB1c2VQbHVnaW5zKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgLy9UT0RPOiBkZXN0b3J5IGV2ZW50cy4uXHJcbiAgICAvL3F1ZXN0aW9uOiBob3cgdG8gdXNlIHRoZSBldmVudHMgPyBcclxuXHJcblxyXG4gICAgRGVzdHJveSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbnNba2V5XTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbi5EZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7XHJcbiAgICB3cmFwUmFuZ2VXaXRoRWxlbWVudCxcclxuICAgIHNldFNlbGVjdGlvbkZsYWdzLFxyXG4gICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzLFxyXG4gICAgZ2V0VGV4dE5vZGVzLFxyXG4gICAgY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudCxcclxuICAgIHNldENhcmV0QXQsXHJcbiAgICBHZXRDbG9zZXN0QmxvY2tFbGVtZW50XHJcbn0gZnJvbSBcIi4vc2VydmljZXMvcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgTW9kZXMgZnJvbSAnLi9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgc2V0U3R5bGUsIHRvZ2dsZVN0eWxlLCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50LCByZW1vdmVaZXJvU3BhY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2N1c3RvbS90ZXh0U2VsZWN0ZWQnO1xyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RVZFTlRTfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUZW1wTGlua0VsZW1lbnQsIHJlc2V0VVJMLFRBUkdFVFMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9saW5rLnNlcnZpY2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XHJcblxyXG4gICAgLy8gKnRhcmdldCA9PiBjYW4gYmUgSWQgb2YgRWxlbWVudCB0aGF0IHNob3VsZCBjb250YWluIEVkaXRvciBpbnN0YW5jZSBvciB0aGUgZWxlbWVudCBpdHNlbGYuLlxyXG4gICAgLy8gKmNvbmZpZyA9PiAgY29uZmlndXJhdGlvbiBwYXNzZWQgdCAgIG8gVG9vbCBjb25zdHJ1Y3RvclxyXG4gICAgLy9UT0RPOiBhZGQgdGFyZ2V0IHZhbGlkYXRpb25zLi47XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX19jb25maWcgPSB7XHJcbiAgICAgICAgICAgIG9uSW5zcGVjdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbiA9IChrZXksY2FsbGJhY2spPT57XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihrZXkpICE9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJrZXkgbXVzdCBiZSBhIHN0cmluZy4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRVZFTlRTW2tleV0gID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkNvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IoKTtcclxuICAgICAgICB0aGlzLm1vZGVIYW5kbGVycyA9IHtcclxuICAgICAgICAgICAgW01vZGVzLlRvZ2dsZV06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uVG9nZ2xlKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgICAgICBbTW9kZXMuRXh0ZW5kXTogKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpID0+IHRoaXMub25FeHRlbmQodiwga2V5LCB2YWx1ZSwgb3B0aW9ucyksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gT2JqZWN0LmFzc2lnbih0aGlzLl9fY29uZmlnLCBjb25maWcpIDogdGhpcy5fX2NvbmZpZztcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHtcclxuICAgICAgICAgICAgc3R5bGVDaGFuZ2VkOiB0aGlzLmNvbmZpZy5vbkluc3BlY3QsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRWxlbWVudCA9IHRoaXMuQ29ubmVjdG9yLkNvbm5lY3QodGFyZ2V0LCB0aGlzLmNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50VG9Kc29uKHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBsb2FkKGpzb24pIHtcclxuICAgICAgICByZXR1cm4gSnNvblRvRWxlbWVudChqc29uLCB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rvci5EZXN0cm95KCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZikge1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3LlxyXG4gICAgLy9UT0RPOiBDcmVhdGUgbm9ybWFsaXplLi5cclxuICAgIC8vcXVlc3Rpb246IGlmIHRleHQgd2FzIHNlbGVjdGVkLCBzaG91bGQgd2UgdW53cmFwIHRoZSBzZWxlY3RpaW9uIG9ubHkgPyBcclxuICAgIHVuTGluaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uICYmICFzZWxlY3Rpb24udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvVW53cmFwO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlTm9kZSA9IHNlbGVjdGlvbi5iYXNlTm9kZTtcclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAzICYmIGJhc2VOb2RlLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcCA9IGJhc2VOb2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAgPSBlbGVtZW50VG9VbndyYXAuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1Vud3JhcCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwLnVud3JhcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaW5rRWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIEFycmF5LmZyb20obGlua0VsZW1lbnRzKS5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0QVRhZyA9IHIuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZXN0QVRhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzcGxpdEhUTUwociwgY2xvc2VzdEFUYWcsIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhLmNlbnRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhLnVud3JhcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgci51bndyYXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGxpbmtFbGVtZW50c1swXSwgbGlua0VsZW1lbnRzW2xpbmtFbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAvL1RPRE86IG1lcmdlIGEgdGFncy4uXHJcbiAgICAvL1RPRE86IHJlbW92ZSBhIGNoaWxkc1xyXG4gICAgLy9UT0RPOiBtb3ZlIGZ1bmN0aW9uIHRvIExpbmsuc2VydmljZS5qc1xyXG4gICAgbGluayhvcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKG9wdGlvbnMgJiYgIW9wdGlvbnMuaHJlZikgfHwgICF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uICYmICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJubyB0ZXh0IHNlbGVjdGVkLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bndyYXBBdGFncyA9IChsaW5rRWxlbWVudHMpID0+IHtcclxuICAgICAgICAgICAgbGlua0VsZW1lbnRzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGxpbmsucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goYVRhZyA9PiBhVGFnLnVud3JhcCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RBVGFnID0gbGluay5wYXJlbnRFbGVtZW50ID8gbGluay5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJhXCIpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0QVRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKGxpbmssIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNlbnRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2VzdEFUYWcudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRUYXJnZXRUb1RhZyA9IChsaW5rRWxlbWVudHMsIHJlbmRlcmVkTGluaywgX3RhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rRWxlbWVudHMuZm9yRWFjaChhVGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGFUYWcuaHJlZiA9IHJlbmRlcmVkTGluaztcclxuICAgICAgICAgICAgICAgIGlmIChfdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgX3RhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRQcm90b2NvbCA9IChfcHJvdG9jb2wsIG5ld1VSTCkgPT4ge1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBfcHJvdG9jb2wucmVwbGFjZSgvOi9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gX3Byb3RvY29sLnJlcGxhY2UoL1xcL1xcLy9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiOlwiO1xyXG4gICAgICAgICAgICBpZiAoX3Byb3RvY29sLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiLy9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdVUkwucHVzaChfcHJvdG9jb2wpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3Byb3RvY29sO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgICAgICBjb25zdCB7IGhyZWYgPSBcIlwiLCBwcm90b2NvbCA9IFwiXCIsIHRhcmdldCA9IFwiXCIgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsZXQgbmV3VVJMID0gW107XHJcbiAgICAgICAgY29uc3QgQXRhZyA9IGNyZWF0ZVRlbXBMaW5rRWxlbWVudChocmVmKTtcclxuICAgICAgICBsZXQgX2hyZWYgPSByZXNldFVSTChocmVmLnRyaW0oKSk7XHJcblxyXG4gICAgICAgIGxldCBfcHJvdG9jb2wgPSBwcm90b2NvbC50cmltKCkgfHwgQXRhZy5wcm90b2NvbDtcclxuICAgICAgICBsZXQgX3RhcmdldCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgdGVzdFRhcmdldCA9IFRBUkdFVFNbdGFyZ2V0LnRyaW0oKS50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZiAodGVzdFRhcmdldCkge1xyXG4gICAgICAgICAgICBfdGFyZ2V0ID0gdGVzdFRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wcm90b2NvbC50cmltKCkpIHtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gc2V0UHJvdG9jb2woX3Byb3RvY29sLCBuZXdVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2hyZWYpIHtcclxuICAgICAgICAgICAgbmV3VVJMLnB1c2goX2hyZWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZW5kZXJlZExpbmsgPSBuZXdVUkwuam9pbihcIlwiKTtcclxuICAgICAgICB1bndyYXBBdGFncyhsaW5rRWxlbWVudHMpO1xyXG4gICAgICAgIHNldFRhcmdldFRvVGFnKGxpbmtFbGVtZW50cywgcmVuZGVyZWRMaW5rLCBfdGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGxpbmtFbGVtZW50c1swXSwgbGlua0VsZW1lbnRzW2xpbmtFbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICBcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uIFxyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXdcclxuICAgIC8vcXVlc3Rpb24gOiB3ZSB3YW50IHRvIGhhbmRsZSBhbmQgdG9nZ2xlIGFueSBhdHRyaWJ1dGUgPyBcclxuICAgIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIC8vaGVyZVxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIChjbGFzc05hbWUpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNsYXNzTmFtZSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLnNlbGVjdGlvbikgIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaXNUb2dnbGVPbiA9ICh0eXBlb2YgKG9wdGlvbnMuaXNPTikgPT09IFwiYm9vbGVhblwiKSA/IG9wdGlvbnMuaXNPTiA6IGVsZW1lbnRzWzBdLmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICBpZiAoIWlzVG9nZ2xlT24pIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Q2xhc3MgPSBlbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdENsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gc3BsaXRIVE1MKGVsLCBjbG9zZXN0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0LmNlbnRlci5yZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gb3B0aW9ucy5zZWxlY3Rpb24gPyBzZXRTZWxlY3Rpb25GbGFncyhlbGVtZW50c1swXSwgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0pIDogeyBmaXJzdEZsYWc6IG51bGwsIGxhc3RGbGFnOiBudWxsIH07IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIGtleSBvZiBjc3MgXHJcbiAgICAqICBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBjc3NcclxuICAgICogIEBwYXJhbSB7KE9iamVjdCB8IFN0cmluZyl9IE1vZGVzIC0gbW9kZSBmcm9tIE1vZGVzID0+IEV4dGVuZCBvciBUb2dnbGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy5FeHRlbmQgLSBvdmVycmlkZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLnRvZ2dsZSAtIHRvZ2dsZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgXHJcbiAgICAqL1xyXG4gICAgZXhlY0NtZChrZXksIHZhbHVlLCBtb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSB8fCAhdGhpcy5pc1ZBbGlkS2V5VmFsdWUoa2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUyA9IFtdO1xyXG4gICAgICAgIG1vZGUgPSBtb2RlID8gbW9kZSA6IE1vZGVzLkV4dGVuZDtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLnNlbGVjdGlvbikgIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNlbGVjdGlvbiA9IHRydWU7XHJcbiAgIFxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09cmV2aWV3PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoIW9wdGlvbnMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gdGhpcy5FTEVNRU5UU1t0aGlzLkVMRU1FTlRTLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAobGFzdE5vZGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyID0gdGhpcy5jcmVhdGVDYXJldFBsYWNlbWVudChsYXN0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy51bldyYXAgJiYgQXJyYXkuaXNBcnJheShvcHRpb25zLnVuV3JhcCkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy51bldyYXAuZm9yRWFjaChzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkVMRU1FTlRTLmZvckVhY2godHh0Tm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcCA9IHR4dE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RFbGVtZW50VG9VbldyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RoaXMgaXMgaG93IGkgbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24sIGkgZG9udCBrbm93IGlmIHRoaXMgaXMgZ29vZCB3YXksIGJ1dCBpdCB3b3Jrcy4uXHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBvcHRpb25zLnNlbGVjdGlvbiA/IHNldFNlbGVjdGlvbkZsYWdzKHRoaXMuRUxFTUVOVFNbMF0sIHRoaXMuRUxFTUVOVFNbdGhpcy5FTEVNRU5UUy5sZW5ndGggLSAxXSkgOiB7IGZpcnN0RmxhZzogbnVsbCwgbGFzdEZsYWc6IG51bGwgfTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICByZW1vdmVaZXJvU3BhY2UoZ2V0VGV4dE5vZGVzKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpO1xyXG5cclxuICAgICAgICBsZXQgVG9nZ2xlTW9kZTsvL0RlY2xhcmUgdG9nZ2xlIG1vZGUsIFRoZSBmaXJzdCBlbGVtZW50IGRldGVybWluZXMgd2hldGhlciBpdCBpcyBvbiBvciBvZmZcclxuXHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBUb2dnbGVNb2RlO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1vZGVIYW5kbGVyc1ttb2RlXShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IE1vZGVzLlRvZ2dsZSAmJiB0eXBlb2YgKFRvZ2dsZU1vZGUpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIFRvZ2dsZU1vZGUgPSByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgICAgICAvL3VzZSB0aGUgZmlyc3QgYW5kIGxhc3QgZmxhZ3MgdG8gbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24gYW5kIHVud3JhcCB0aGVtLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZXRIb2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldENhcmV0QXQodGhpcy5jYXJldEhvbGRlciwgdGhpcy5jYXJldEhvbGRlci50ZXh0Q29udGVudC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlcyA9ICBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgaWYodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdFwiXShjb2xsZWN0ZWRTdHlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3N0eWxlQ2hhbmdlZCcsIGNvbGxlY3RlZFN0eWxlcyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYXJldFBsYWNlbWVudChhdE5vZGUpIHtcclxuICAgICAgICBpZiAoIWF0Tm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgY2FyZXRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gICAgICAgIGNhcmV0SG9sZGVyLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsICd0cnVlJyk7XHJcbiAgICAgICAgYXROb2RlLmFwcGVuZENoaWxkKGNhcmV0SG9sZGVyKTtcclxuICAgICAgICByZXR1cm4gY2FyZXRIb2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XShwYXlsb2FkKTtcclxuICAgIH1cclxuICAgIG9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGV0ZWN0IGlmIHRoZXJlIGlzIGFueSBwYXJlbnQgd2l0aCBzdHlsZSB0byBzcGxpdC5cclxuICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIGNhdGNoIGZyb20gb3B0aW9ucyB0byBkZXRlY3QgbW9yZSB0aGFuIG9uZSBzdHlsZSBvciB0YWcgZWxlbWVudC5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke3ZhbHVlfSddYCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50VG9TcGxpdCkuZGlzcGxheSAhPT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlubmVyU3BhbiA9IGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpbm5lclNwYW4uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25Ub2dnbGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0ICYmIGVsZW1lbnRUb1NwbGl0ICE9PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy91bmJvbGRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RWxlbWVudHMgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gc3BsaXQgZWxlbWVudHMsIGl0cyBlcnJvciFcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGUoc3BsaXRFbGVtZW50cy5jZW50ZXIsIGtleSwgdmFsdWUsIG9wdGlvbnMub25PZmYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzcGxpdEhUTUwgcmV0dXJuIG51bGwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50VG9TcGxpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMub25PZmYpO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25PZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uRXh0ZW5kKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvU3BsaXQgPSBlbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9JyR7a2V5fSddYCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRCbG9ja3MgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0QmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRCbG9ja3MuY2VudGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRhcmdldCAhPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlubmVyU3BhbiA9IGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudFRvU3BsaXQsIHsgZWw6ICdzcGFuJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShpbm5lclNwYW4sIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXh0ZW5kKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnRUb1NwbGl0ICE9PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0RWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRFbGVtZW50cy5jZW50ZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NwbGl0SFRNTCByZXR1cm4gbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSAhPT0gXCJibG9ja1wiICYmIG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICYmIGJsb2NrRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHBhcmVudEVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LndyYXAod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUod3JhcHBlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICBjb25zdCBmaW5kQmxvY2sgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoY29tcHV0ZWQgJiYgY29tcHV0ZWQuZGlzcGxheSAhPT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gdGhpcy5jb25uZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZEJsb2NrKGVsZW1lbnQucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zLmFzID09PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja0VsZW1lbnQgPSBmaW5kQmxvY2soZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZSA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUud3JhcChzcGFuKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVJbmxpbmVTdHlsZSA9IChwYXJlbnROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHBhcmVudE5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIG5vZGUubm9kZU5hbWUgIT09IFwiQlJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wdXRlZC5kaXNwbGF5ICE9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUoYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIEFycmF5LmZyb20oYmxvY2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKS5mb3JFYWNoKGVsPT5lbC5zdHlsZVtrZXldID0gdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gZmluZEJsb2NrKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShibG9ja0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZVtrZXldID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwYXJnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBhcmdoLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBlbGVtZW50LndyYXAocGFyZ2gpO1xyXG4gICAgfVxyXG4gICAgaXNWQWxpZEtleVZhbHVlKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuICEhKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKTsgXHJcbiAgICB9XHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BsZWFzZSBjcmVhdGUgbmV3IGluc3RhbmNlLi4nKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWRFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgKHNlbGVjdGVkRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSB8fCBzZWxlY3RlZEVsZW1lbnQgPT09IHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VSdWxlcyhkYXRhKSB7XHJcbiAgICBjb25zdCBDb2xvclRleHREZWNvcmF0aW9uUnVsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEua2V5ID09PSBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBkYXRhLmVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0ndGV4dC1kZWNvcmF0aW9uJ11gKTtcclxuICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdHMgPSBzcGxpdEhUTUwoZGF0YS5lbGVtZW50LCB0ZXh0RGVjb3JhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdHMuY2VudGVyLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzcGxpdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUodGV4dERlY29yYXRpb24sICd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBgJHtkYXRhLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgUnVsZXMgPSBbXHJcbiAgICAgICAgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGVcclxuICAgIF1cclxuICAgIFJ1bGVzLmZvckVhY2gocnVsZSA9PiBydWxlKGRhdGEpKTtcclxufSIsIlxyXG5pbXBvcnQgeyBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vc3R5bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4uL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcmVzZXRVUkwgfSBmcm9tICcuLi9saW5rLnNlcnZpY2UnO1xyXG5cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaG93IGNhbiB3ZSBleHBvc2UgdGhlIGNvbGxlY3RlZFN0eWxlID8gXHJcbi8vcXVlc3Rpb246IHNob3VsZCB3ZSB1c2UgdGhpcyA/IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NdXRhdGlvbk9ic2VydmVyXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHNlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9uSW5zcGVjdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gSW5wc2VjdG9yID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5vbkluc3BlY3QgPSBvbkluc3BlY3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhdW5jaEluc3BlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub25JbnNwZWN0KSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluc3BlY3QoY29sbGVjdGVkU3R5bGUpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkRWxlbWVudCApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVRhZyA9IHNlbGVjdGVkRWxlbWVudC5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKGFUYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSkgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RMaW5rXCJdKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOmFUYWcucHJvdG9jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOnJlc2V0VVJMKGFUYWcuaHJlZiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6YVRhZy5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIikgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6YVRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXZpZXdcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGggPD0gMSAmJiAhdGhpcy50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXVuY2hJbnNwZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG4gICAgICAgIHRoaXMuRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG4vL2NsYXNzIGFuZCBzdHlsZSBub3QgaW5jbHVkZXMgeWV0Li5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRBdHRyaWJ1dGVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gY3VycmVjdEVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZihhdHRyc1tpXS5uYW1lICAhPT1cImNsYXNzXCIgJiYgYXR0cnNbaV0ubmFtZSAgIT09IFwic3R5bGVcIil7XHJcbiAgICAgICAgICAgICAgICBpZighYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQsZ2V0QWxsKXtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmKGdldEFsbCAgfHwgKCFnZXRBbGwgJiYgYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpKXtcclxuICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxBdHRycyhlbGVtZW50KXtcclxuICAgICAgaWYoZWxlbWVudCAmJiAhZWxlbWVudC5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlbGVtZW50IG5vdCBoYXZlIGF0dHJpYnV0ZXMuLlwiKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyPT5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKSlcclxuICB9IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIF9wYXJlbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChfcGFyZW50ICYmIF9wYXJlbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBfcGFyZW50LmNsYXNzTGlzdDtcclxuICAgICAgICBBcnJheS5mcm9tKG1hcCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMuZmluZEluZGV4KGMgPT4gYyA9PT0gbmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbn1cclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGlzIGV4cGVuc2l2ZSB0b28gbXVjaD8gXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCkge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcclxuICAgICAgICByZW1vdmVFbXB0eUNsYXNzKGVsZW1lbnQpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY2xhc3M9JyR7Y30nXWApKS5mb3JFYWNoKG5vZGUgPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5Q2xhc3Mobm9kZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbltjbGFzc10nKSkuY29uY2F0KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChjaGlsZCA9PiBjbGVhcihjaGlsZCkpO1xyXG59XHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBhYm91dCB0aGlzIG5hbWUgPyBcclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApKS5jb25jYXQodGhpcyk7XHJcbm5vZGVzLmZvckVhY2gobm9kZT0+bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xyXG59IiwiaW1wb3J0IHsgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4uL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcHlQYXN0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgb3B0aW9ucykge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLnN0eWxlc1RvUGFzdGUgPSB0eXBlb2Ygb3B0aW9ucy5zdHlsZXNUb1Bhc3RlID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5zdHlsZXNUb1Bhc3RlIDogbnVsbDtcclxuICAgIHRoaXMub25Db3B5ID0gdHlwZW9mIG9wdGlvbnMub25Db3B5ID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLm9uQ29weSA6IG51bGw7XHJcbiAgICB0aGlzLm9uUGFzdGUgPSB0eXBlb2Ygb3B0aW9ucy5vblBhc3RlID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLm9uUGFzdGUgOiBudWxsO1xyXG4gICAgdGhpcy5wYXN0ZSA9IHRoaXMucGFzdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuY29weS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuICBjb3B5KGV2ZW50KSB7XHJcbiAgICBsZXQgaHRtbCA9IFwiXCI7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgaWYgKHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsLnJhbmdlQ291bnQ7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbC5nZXRSYW5nZUF0KGkpLmNsb25lQ29udGVudHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgPSBjb250YWluZXIuaW5uZXJIVE1MO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5zZWxlY3Rpb24pIHtcclxuICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbi50eXBlID09PSBcIlRleHRcIikge1xyXG4gICAgICAgIGh0bWwgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS5odG1sVGV4dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoaHRtbCk7XHJcblxyXG4gICAgZXZlbnQuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCd0ZXh0L2h0bWwnLCBodG1sKTtcclxuXHJcblxyXG4gIH1cclxuICBwYXN0ZShldmVudCkge1xyXG4gICAgLy8gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJEZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yXCIsIGZhbHNlLCBcImgyXCIpO1xyXG4gICAgaWYgKHRoaXMuc3R5bGVzVG9QYXN0ZSkge1xyXG4gICAgICB0aGlzLnBhc3RlV2l0aFN0eWxlcyhldmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhc3RlUGxhaW5UZXh0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuICBwYXN0ZVBsYWluVGV4dChldmVudCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKS50cmltKCk7XHJcbiAgICBpZiAodGhpcy5vblBhc3RlKSB7XHJcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm9uUGFzdGUoY29udGVudClcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnR0ZXh0JywgZmFsc2UsIGNvbnRlbnQpO1xyXG4gIH1cclxuICBwYXN0ZVdpdGhTdHlsZXMoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGV4dENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGV4dENvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbGV0IEh0bWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgSHRtbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgICAgdGV4dENvbnRlbnRDb250YWluZXIuaW5uZXJUZXh0ID0gZGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykudHJpbSgpOztcclxuICAgICAgSHRtbENvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhLmdldERhdGEoJ3RleHQvaHRtbCcpLnRyaW0oKTtcclxuICAgICAgaWYgKCFIdG1sQ29udGFpbmVyLmlubmVySFRNTCkge1xyXG4gICAgICAgIEh0bWxDb250YWluZXIuaW5uZXJIVE1MID0gZGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykudHJpbSgpOztcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRDb250ZW50Q29udGFpbmVyKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIdG1sQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IGh0bWxOb2RlcyA9IFtdO1xyXG4gICAgICBjb25zdCByZWN1cnNlID0gKGVsLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIGVsLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xyXG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgcmVjdXJzZShub2RlLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICByZWN1cnNlKEh0bWxDb250YWluZXIsIChub2RlKSA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuc3R5bGVzVG9QYXN0ZSkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5zdHlsZXNUb1Bhc3RlLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgc3Bhbi5zdHlsZVtrZXldID0gXCJpbmhlcml0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5vZGUud3JhcChzcGFuKTtcclxuICAgICAgICAgIGh0bWxOb2Rlcy5wdXNoKHNwYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGh0bWxOb2Rlcy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGlmICghcy50ZXh0Q29udGVudC50cmltKCkpXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29uc3QgY29sbGVjdGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdGVkU3R5bGVzKSB7XHJcbiAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoY29sbGVjdGVkU3R5bGVzLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29sbGVjdGVkU3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlc1RvUGFzdGVba2V5XSkge1xyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJpbmhlcml0XCIpIHtcclxuICAgICAgICAgICAgICAgIHMuc3R5bGVba2V5XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcyhcIm5vbmVcIikpIHtcclxuICAgICAgICAgICAgICAgIHMuc3R5bGVba2V5XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5yZXBsYWNlKC8gL2dtLCBcIlwiKS5pbmNsdWRlcyhcIigwLDAsMFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcy5zdHlsZVtrZXldID0gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBzLnN0eWxlW2tleV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHRleHROb2RlcyA9IFtdO1xyXG4gICAgICByZWN1cnNlKHRleHRDb250ZW50Q29udGFpbmVyLCAobm9kZSA9PiB7XHJcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIH0pKTtcclxuICAgICAgaHRtbE5vZGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkID0gdGV4dENvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MLnJlcGxhY2UoZWwudGV4dENvbnRlbnQsIGVsLm91dGVySFRNTCk7O1xyXG4gICAgICAgIHRleHRDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IHJlcGxhY2VkO1xyXG4gICAgICB9KTtcclxuICAgICAgbGV0IGNvbnRlbnQgPSB0ZXh0Q29udGVudENvbnRhaW5lci5pbm5lckhUTUw7XHJcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgcC5jbGFzc0xpc3QuYWRkKFwicC1jb3B5LXBhc3RlLWNvbnRlbnRcIik7XHJcbiAgICAgIHAuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgaWYgKHRoaXMub25QYXN0ZSkge1xyXG4gICAgICAgIHRoaXMub25QYXN0ZShldmVudClcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0aHRtbCcsIGZhbHNlLCBwLm91dGVySFRNTCk7XHJcbiAgICAgIHdyYXBOYWtlZFRleHROb2Rlcyh0aGlzLnRhcmdldCk7XHJcbiAgICAgIGNvbnN0IGNvcHlQYXN0ZUNvbnRlbnRIb2xkZXIgPSB0aGlzLnRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnAtY29weS1wYXN0ZS1jb250ZW50XCIpO1xyXG4gICAgICBpZihjb3B5UGFzdGVDb250ZW50SG9sZGVyKXtcclxuICAgICAgICBjb25zdCBjbG9zZXN0UCA9IGNvcHlQYXN0ZUNvbnRlbnRIb2xkZXIuY2xvc2VzdChcInBcIik7XHJcbiAgICAgICAgaWYoY2xvc2VzdFAgJiYgY2xvc2VzdFAuY2xhc3NMaXN0LmNvbnRhaW5zKFwicC1jb3B5LXBhc3RlLWNvbnRlbnRcIikpe1xyXG4gICAgICAgICAgY2xvc2VzdFAuY2xhc3NMaXN0LnJlbW92ZShcInAtY29weS1wYXN0ZS1jb250ZW50XCIpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjbG9zZXN0UC51bndyYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICB0ZXh0Q29udGVudENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRleHRDb250ZW50Q29udGFpbmVyKTtcclxuICAgICAgSHRtbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKEh0bWxDb250YWluZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG4gIH1cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIHRoaXMucGFzdGUpO1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5jb3B5KTtcclxuXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0U3R5bGUsIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgTGV2ZWxzIGZyb20gJy4uL2NvbnN0YW50cy9MZXZlbHMuanNvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcE5ha2VkVGV4dE5vZGVzKHRhcmdldCl7XHJcbiAgICBBcnJheS5mcm9tKHRhcmdldC5jaGlsZE5vZGVzKS5mb3JFYWNoKGM9PntcclxuIFxyXG4gICAgICAgIGlmKGMubm9kZVR5cGUgPT09MSAmJiAhYy50ZXh0Q29udGVudC50cmltKCkgJiYgYy5jaGlsZHJlbi5sZW5ndGg9PT0wICYmIGMubm9kZU5hbWUgIT09XCJCUlwiKXtcclxuICAgICAgICAgICAgYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoKGMubm9kZVR5cGUgPT09MyAmJiBjLnBhcmVudEVsZW1lbnQgPT09IHRhcmdldCkpICYmICFjLnBhcmVudEVsZW1lbnQuY2xvc2VzdChcInBcIikpe1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIGMud3JhcChwKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCAgZnVuY3Rpb24gd2Fsa1RoZURPTShub2RlLCBmdW5jKSB7XHJcbiAgICBpZighbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBmdW5jKG5vZGUpO1xyXG4gICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIHdhbGtUaGVET00obm9kZSwgZnVuYyk7XHJcbiAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkRWxlbWVudCgpIHtcclxuICAgIHZhciBub2RlID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHZhciBhbmNOb2RlID0gbm9kZS5mb2N1c05vZGU7XHJcbiAgICAgICAgaWYgKGFuY05vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGFuY05vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGFuY05vZGUgPSBhbmNOb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc3QgZWwgPSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMyA/IGFuY05vZGUucGFyZW50Tm9kZSA6IG5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYW5jTm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25Ub0VsZW1lbnQoanNvbk9iamVjdCwgcGFyZW50RWxlbWVudCkge1xyXG4gICAgLy9UT0RPOiBjcmVhdGUgcGFyZW50ZWxlbWVudCBhbmQganNvbm9iamVjdCB2YWxpZGF0aW9uICAgXHJcbiAgICBjb25zdCByZW5kZXJBdHRycyA9IChqc0VsZW1lbnQsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoanNFbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdCA9IFsuLi5qc0VsZW1lbnQuY2xhc3NMaXN0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGpzRWxlbWVudC5zdHlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZSA9IEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKGpzRWxlbWVudC5zdHlsZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUgPSBjb2xsZWN0ZWRTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBvdGhlciBhdHRycy4uLlxyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAoanNFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBqc0VsZW1lbnQudGFnO1xyXG4gICAgICAgIGxldCBlbGVtZW50O1xyXG4gICAgICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzO1xyXG4gICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIiN0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoanNFbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5ocmVmID0ganNFbGVtZW50LmhyZWY7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRhcmdldCA9IGpzRWxlbWVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcclxuICAgICAgICAgICAgICAgIGlzU2hvdWxkUmVuZGVyQXR0cnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVuZGVyQXR0cnMoanNFbGVtZW50LCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIXBhcmVudEVsZW1lbnQgJiYganNvbk9iamVjdC50eXBlID09PSBMZXZlbHNbJzAnXSkge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudChqc29uT2JqZWN0KTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAganNvbk9iamVjdC5jaGlsZHJlbi5mb3JFYWNoKGpzQ2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICBpZiAoaHRtbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgSnNvblRvRWxlbWVudChqc0NoaWxkLCBodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IGNyZWF0ZSBkb20gZWxlbWVudCBmcm9tIGpzb24nLCBqc0NoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb0pzb24obm9kZSwgbGV2ZWwpIHtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiAobGV2ZWwpICE9PSBcIm51bWJlclwiKSBsZXZlbCA9IDA7XHJcbiAgICBjb25zdCBub2RlVHlwZSA9IG5vZGUubm9kZU5hbWU7XHJcbiAgICBsZXQgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICBsZXQganNvbiA9IHt9O1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChMZXZlbHNbbGV2ZWxdKSB7XHJcbiAgICAgICAganNvbi50eXBlID0gTGV2ZWxzW2xldmVsXTtcclxuICAgICAgICBsZXZlbCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFx1MjAwQi9nLCAnJyk7XHJcbiAgICAgICAgICAgIGlzU2hvdWxkUmVuZGVyQXR0cnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9xdWVzdGlvbjogcmVwbGFjZSBcXG4gP1xyXG4gICAgICAgICAgICBpZiAoIWpzb24udGV4dENvbnRlbnQudHJpbSgpKSBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGpzb24uaHJlZiA9IG5vZGUuaHJlZjtcclxuICAgICAgICAgICAganNvbi50YXJnZXQgPSBub2RlLnRhcmdldDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAgLy9UT0RPOiBzaG91bGQgd2UgdW53cmFwIHRoaXMgbm9kZSA/IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmICghaXNWYWxpZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoaXNTaG91bGRSZW5kZXJBdHRycykge1xyXG4gICAgICAgIC8vVE9ETzogZ2V0IGF0dHJzIFxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0U3R5bGUobm9kZSk7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0eWxlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGpzb24uc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0ICYmIG5vZGUuY2xhc3NMaXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIGpzb24uY2xhc3NMaXN0ID0gWy4uLm5vZGUuY2xhc3NMaXN0XTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGROb2RlcyAmJiBub2RlLmNoaWxkTm9kZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAganNvbi5jaGlsZHJlbiA9IFsuLi5ub2RlLmNoaWxkTm9kZXNdLm1hcCgoY24pID0+IGVsZW1lbnRUb0pzb24oY24sIGxldmVsKSkuZmlsdGVyKHYgPT4gdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGpzb247XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IEVWRU5UUyA9IHtcclxuICBcclxufSIsImltcG9ydCB7IHdyYXBOYWtlZFRleHROb2RlcyB9IGZyb20gXCIuLi9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQsIGluc2VydEFmdGVyLCBwYXN0ZUh0bWxBdENhcmV0LCBzZXRDYXJldEF0IH0gZnJvbSBcIi4uL3JhbmdlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVByZXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSBrZXlQcmVzcyA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uS2V5UHJlc3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSBvcHRpb25zLm9uS2V5UHJlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5rZXlwcmVzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHMvZywgXCJcIikucmVwbGFjZSgvW1xcdTIwMEItXFx1MjAwRFxcdUZFRkZdL2csICcnKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYoIXRhcmdldC50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHBhc3RlSHRtbEF0Q2FyZXQoXCIgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZGVidWdnZXJcclxuICAgICAgICAgICAgICAgIC8vICAgICB3cmFwTmFrZWRUZXh0Tm9kZXModGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3RlSHRtbEF0Q2FyZXQoXCI8YnIvPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KHNlbGVjdGlvbi5hbmNob3JOb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ID09PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UyZXh0cmFjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UyZXh0cmFjdC5leHRyYWN0Q29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHNlbGVjdGlvbi5hbmNob3JOb2RlLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChibG9ja0VsZW1lbnQsIGJsb2NrRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICE9PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5jaGlsZHJlbikuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0gYmxvY2tFbGVtZW50ICYmICFjLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuaW5uZXJIVE1MID0gYmxvY2tFbGVtZW50LmlubmVySFRNTCArIFwiJiM4MjAzO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY0ZyYWdtZW50ID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY0ZyYWdtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEgJiYgIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYmxvY2tFbGVtZW50Lm5vZGVOYW1lIHx8IFwicFwiKTtcclxuICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY0ZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghZWwudGV4dENvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCImIzgyMDM7XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRBZnRlcihlbCwgYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tFbGVtZW50LmFwcGVuZENoaWxkKGJyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgd3JhcE5ha2VkVGV4dE5vZGVzKHRoaXMudGFyZ2V0LCB7IGV4cGVjdDogYmxvY2tFbGVtZW50IH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChlbCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXMub25LZXlQcmVzcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlwcmVzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICAgY29uc3QgVEFSR0VUUyA9IHtcclxuICAgIF9ibGFuazogXCJfYmxhbmtcIixcclxuICAgIF9zZWxmOiBcIl9zZWxmXCIsXHJcbiAgICBfcGFyZW50OiBcIl9wYXJlbnRcIixcclxuICAgIF90b3A6IFwiX3RvcFwiXHJcbn1cclxuZXhwb3J0ICBjb25zdCByZXNldFVSTCA9IChzcmMpID0+IHtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9odHRwczovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL2h0dHA6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9tYWlsdG86L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC90ZWw6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXC8vZywgJycpO1xyXG4gICAgcmV0dXJuIHNyYztcclxufVxyXG5leHBvcnQgICBjb25zdCBjcmVhdGVUZW1wTGlua0VsZW1lbnQgPSAoaHJlZikgPT4ge1xyXG4gICAgY29uc3QgQXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgQXRhZy5ocmVmID0gaHJlZjtcclxuICAgIHJldHVybiBBdGFnO1xyXG59IiwiaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSBvcHRpb25zID0ge307XHJcbiAgbGV0IGlubmVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy5lbCB8fCBcInNwYW5cIik7XHJcbiAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4gaW5uZXJTcGFuLmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lclNwYW4pO1xyXG4gIHJldHVybiBpbm5lclNwYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCkge1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSAhPT0gXCJpbmxpbmVcIikgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50RWxlbWVudCkuZGlzcGxheSA9PT0gXCJpbmxpbmVcIikge1xyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG59XHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSYW5nZVdpdGhCbG9ja0VsZW1lbnQobGltaXRFbGVtZW50KSB7XHJcbiAgY29uc3Qgd3JhcEVsZW1lbnRXaXRoQmxvY2sgPSAoZWwpID0+IHtcclxuICAgIGxldCB3RWwgPSBcImRpdlwiO1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSBcIlNQQU5cIikge1xyXG4gICAgICB3RWwgPSBcInBcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdFbCk7XHJcbiAgICBlbC53cmFwKHdyYXBwZXIpO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgfVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgbGV0IG5vZGVzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICBub2Rlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IGJsb2NrRWwgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsKTtcclxuICAgIGlmIChibG9ja0VsKSB7XHJcbiAgICAgIGlmIChibG9ja0VsLmlzY2hpbGRPZihsaW1pdEVsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmRlZCA9IGVsZW1lbnRzLmZpbmQoYmxvY2sgPT4gYmxvY2tFbC5pc2NoaWxkT2YoYmxvY2spKTtcclxuICAgICAgICBpZiAoIWZvdW5kZWQpXHJcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGJsb2NrRWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICAgIGVsZW1lbnRzLnB1c2goX3dyYXBwZXIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBfd3JhcHBlciA9IHdyYXBFbGVtZW50V2l0aEJsb2NrKGVsKTtcclxuICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBub2Rlczogbm9kZXMsXHJcbiAgICBibG9ja3M6IGVsZW1lbnRzXHJcbiAgfVxyXG4gIHJldHVybiBlbGVtZW50cztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEVsZW1lbnQod3JhcFRhZykge1xyXG4gIGNvbnN0IHJhbmdlcyA9IGdldFJhbmdlcygpO1xyXG4gIHJldHVybiByYW5nZXMubWFwKHIgPT4ge1xyXG4gICAgcmV0dXJuIHdyYXBSYW5nZVRleHQod3JhcFRhZywgcik7XHJcbiAgfSkuZmxhdCgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZXMoKSB7XHJcbiAgbGV0IHJhbmdlcyA9IFtdO1xyXG5cclxuICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsLnJhbmdlQ291bnQ7IGkrKykge1xyXG4gICAgcmFuZ2VzW2ldID0gc2VsLmdldFJhbmdlQXQoaSk7XHJcbiAgfVxyXG4gIHJldHVybiByYW5nZXM7XHJcbn1cclxuLy8gcmV0dXJuIGFsbCB0ZXh0IG5vZGVzIHRoYXQgYXJlIGNvbnRhaW5lZCB3aXRoaW4gYGVsYFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dE5vZGVzKGVsKSB7XHJcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XHJcblxyXG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50LFxyXG4gICAgd2Fsa2VyID0gZG9jLmNyZWF0ZVRyZWVXYWxrZXIoZWwsIE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSksXHJcbiAgICB0ZXh0Tm9kZXMgPSBbXSxcclxuICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcclxuXHJcbiAgd2hpbGUgKG5vZGUpIHtcclxuICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gIH1cclxuICByZXR1cm4gdGV4dE5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlc0ludGVyc2VjdChyYW5nZUEsIHJhbmdlQikge1xyXG4gIHJldHVybiByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19TVEFSVCwgcmFuZ2VCKSA9PT0gLTEgJiZcclxuICAgIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuU1RBUlRfVE9fRU5ELCByYW5nZUIpID09PSAxXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkge1xyXG4gIHZhciByYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgdHJ5IHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSlcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q2hhcmFjdGVyT2Zmc2V0V2l0aGluKGVsZW1lbnQpIHtcclxuICB2YXIgY2FyZXRPZmZzZXQgPSAwO1xyXG4gIHZhciBkb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudDtcclxuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XHJcbiAgdmFyIHNlbDtcclxuICBpZiAodHlwZW9mIHdpbi5nZXRTZWxlY3Rpb24gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgc2VsID0gd2luLmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5yYW5nZUNvdW50ID4gMCkge1xyXG4gICAgICB2YXIgcmFuZ2UgPSB3aW4uZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgdmFyIHByZUNhcmV0UmFuZ2UgPSByYW5nZS5jbG9uZVJhbmdlKCk7XHJcbiAgICAgIHByZUNhcmV0UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBwcmVDYXJldFJhbmdlLnNldEVuZChyYW5nZS5lbmRDb250YWluZXIsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKChzZWwgPSBkb2Muc2VsZWN0aW9uKSAmJiBzZWwudHlwZSAhPSBcIkNvbnRyb2xcIikge1xyXG4gICAgdmFyIHRleHRSYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgdmFyIHByZUNhcmV0VGV4dFJhbmdlID0gZG9jLmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICBwcmVDYXJldFRleHRSYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgIHByZUNhcmV0VGV4dFJhbmdlLnNldEVuZFBvaW50KFwiRW5kVG9FbmRcIiwgdGV4dFJhbmdlKTtcclxuICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRUZXh0UmFuZ2UudGV4dC5sZW5ndGg7XHJcbiAgfVxyXG4gIHJldHVybiBjYXJldE9mZnNldDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FyZXRBdChlbGVtZW50LCBjaGFySW5kZXggPSAwKSB7XHJcblxyXG4gIHZhciBub2RlID0gZWxlbWVudDtcclxuICBub2RlLmZvY3VzKCk7XHJcbiAgdmFyIHRleHROb2RlID0gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpO1xyXG4gIGlmICh0ZXh0Tm9kZS5sZW5ndGggPT09IDApIHtcclxuICAgIHRleHROb2RlID0gZWxlbWVudDtcclxuICAgIHdoaWxlICh0ZXh0Tm9kZSAmJiB0ZXh0Tm9kZS5maXJzdENoaWxkICYmIHRleHROb2RlLm5vZGVUeXBlICE9PSAzKSB7XHJcbiAgICAgIHRleHROb2RlID0gdGV4dE5vZGUuZmlyc3RDaGlsZDtcclxuICAgIH1cclxuICAgIGlmKHRleHROb2RlKXtcclxuICAgICAgdGV4dE5vZGUgPSBbdGV4dE5vZGVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICByYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZVswXSwgY2hhckluZGV4KTtcclxuICByYW5nZS5zZXRFbmQodGV4dE5vZGVbMF0sIGNoYXJJbmRleCk7XHJcbiAgcmFuZ2UuY29sbGFwc2UodHJ1ZSlcclxuICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFzdGVIdG1sQXRDYXJldChodG1sKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgY29uc3QgY29udGVudGVkaXRhYmxlID0gc2VsZWN0ZWRFbGVtZW50LmNsb3Nlc3QoXCJbY29udGVudGVkaXRhYmxlXVwiKTtcclxuICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgaWYgKGNvbnRlbnRlZGl0YWJsZSkge1xyXG4gICAgaWYgKCFjb250ZW50ZWRpdGFibGUuY29udGVudEVkaXRhYmxlKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gIH1cclxuICBpZiAoIWlzVmFsaWQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICB2YXIgc2VsLCByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgLy8gSUU5IGFuZCBub24tSUVcclxuICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xyXG5cclxuICAgICAgLy8gUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgd291bGQgYmUgdXNlZnVsIGhlcmUgYnV0IGlzXHJcbiAgICAgIC8vIG9ubHkgcmVsYXRpdmVseSByZWNlbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cclxuICAgICAgLy8gc29tZSBicm93c2VycyAoSUU5LCBmb3Igb25lKVxyXG4gICAgICBsZXQgZWw7XHJcbiAgICAgIGlmICh0eXBlb2YgKGh0bWwpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIChodG1sKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGVsID0gaHRtbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIG5vZGUsIGxhc3ROb2RlO1xyXG4gICAgICB3aGlsZSAoKG5vZGUgPSBlbC5maXJzdENoaWxkKSkge1xyXG4gICAgICAgIGxhc3ROb2RlID0gZnJhZy5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgfVxyXG4gICAgICByYW5nZS5pbnNlcnROb2RlKGZyYWcpO1xyXG5cclxuICAgICAgLy8gUHJlc2VydmUgdGhlIHNlbGVjdGlvblxyXG4gICAgICBpZiAobGFzdE5vZGUpIHtcclxuICAgICAgICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZXRTdGFydEFmdGVyKGxhc3ROb2RlKTtcclxuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkge1xyXG4gIGlmIChyYW5nZS5pbnRlcnNlY3RzTm9kZSkge1xyXG4gICAgcmV0dXJuIHJhbmdlLmludGVyc2VjdHNOb2RlKG5vZGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByYW5nZXNJbnRlcnNlY3QocmFuZ2UsIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSkge1xyXG4gIHZhciBjb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcclxuICAgIG5vZGVzID0gZ2V0VGV4dE5vZGVzKGNvbnRhaW5lci5wYXJlbnROb2RlIHx8IGNvbnRhaW5lcilcclxuXHJcbiAgcmV0dXJuIG5vZGVzLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJhbmdlSW50ZXJzZWN0c05vZGUocmFuZ2UsIG5vZGUpICYmIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKVxyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKSB7XHJcbiAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoID4gMFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XHJcbiAgaWYgKGVsLnBhcmVudE5vZGUpIHtcclxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIG5vZGUpIHtcclxuICBpZiAodHlwZW9mIG5vZGUucGFyZW50Tm9kZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmVtb3ZlRWxlbWVudChyZXBsYWNlbWVudE5vZGUpO1xyXG4gICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXBsYWNlbWVudE5vZGUsIG5vZGUpO1xyXG4gICAgcmVtb3ZlRWxlbWVudChub2RlKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFRleHQobm9kZSkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgcmFuZ2UubW92ZVRvRWxlbWVudFRleHQobm9kZSk7XHJcbiAgICByYW5nZS5zZWxlY3QoKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBzZWxlY3QgdGV4dCBpbiBub2RlOiBVbnN1cHBvcnRlZCBicm93c2VyLlwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcclxuICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSkge1xyXG4gIHZhciBzdGFydE5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcixcclxuICAgIGVuZE5vZGUgPSByYW5nZS5lbmRDb250YWluZXIsXHJcbiAgICBzdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0LFxyXG4gICAgZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwTm9kZShub2RlKSB7XHJcbiAgICB2YXIgY3VycmVudFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgY3VycmVudFdyYXBwZXIgPSB3cmFwcGVyRWwuY2xvbmVOb2RlKClcclxuXHJcbiAgICBjdXJyZW50UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgaWYgKG5vZGUgPT09IHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgY3VycmVudFJhbmdlLnNldFN0YXJ0KG5vZGUsIHN0YXJ0T2Zmc2V0KVxyXG4gICAgICBzdGFydE5vZGUgPSBjdXJyZW50V3JhcHBlclxyXG4gICAgICBzdGFydE9mZnNldCA9IDBcclxuICAgIH1cclxuICAgIGlmIChub2RlID09PSBlbmROb2RlICYmIGVuZE5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgY3VycmVudFJhbmdlLnNldEVuZChub2RlLCBlbmRPZmZzZXQpXHJcbiAgICAgIGVuZE5vZGUgPSBjdXJyZW50V3JhcHBlcjtcclxuICAgICAgZW5kT2Zmc2V0ID0gMVxyXG4gICAgfVxyXG4gICAgY3VycmVudFJhbmdlLnN1cnJvdW5kQ29udGVudHMoY3VycmVudFdyYXBwZXIpXHJcbiAgICByZXR1cm4gY3VycmVudFdyYXBwZXJcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE5vZGVzKCkge1xyXG4gIHZhciBub2RlcywgcmFuZ2U7XHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VUZXh0KHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICBpZiAodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICB9XHJcblxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3JhcHBlckVsID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGFzc3VtZSBpdCdzIGEgdGFnbmFtZVxyXG4gICAgd3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gIH1cclxuXHJcbiAgd3JhcE5vZGUgPSBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBub2Rlcy5tYXAod3JhcE5vZGUpO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3QgX29wdGlvbnMgPSB7IHJlbW92ZTogdHJ1ZSB9O1xyXG4gIE9iamVjdC5hc3NpZ24oX29wdGlvbnMsIG9wdGlvbnMpO1xyXG4gIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnNldEJhc2VBbmRFeHRlbnQoZmlyc3RGbGFnLCAwLCBsYXN0RmxhZywgbGFzdEZsYWcuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gIGlmIChfb3B0aW9ucy5yZW1vdmUpIHtcclxuICAgIFtmaXJzdEZsYWcsIGxhc3RGbGFnXS5mb3JFYWNoKGUgPT4gZS51bndyYXAoKSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25GbGFncyhmaXJzdEVsZW1lbnQsIExhc3RFbGVtZW50KSB7XHJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIGNvbnN0IGZpcnN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgZmlyc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIGZpcnN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgY29uc3QgbGFzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGxhc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIExhc3RFbGVtZW50LnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMClcclxuXHJcbiAgZmlyc3RFbGVtZW50LnByZXBlbmQoZmlyc3RGbGFnKTsgLy9TZXQgZmxhZyB0aGUgZmlyc3RcclxuICBMYXN0RWxlbWVudC5hcHBlbmRDaGlsZChsYXN0RmxhZyk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gIHJldHVybiB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRIVE1MKCkge1xyXG4gIHZhciByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgaWYgKHJhbmdlLmNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY29udGVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgcmFuZ2U6IHJhbmdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2VsZWN0aW9uKCkge1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlU2VsZWN0aW9uKHJhbmdlKSB7XHJcbiAgaWYgKHJhbmdlKSB7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiByYW5nZS5zZWxlY3QpIHtcclxuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3NOYW1lIH0gZnJvbSBcIi4vY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlUnVsZXMgfSBmcm9tIFwiLi4vcnVsZXMvcnVsZXNcIjtcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGludGFpbFN0eWxlID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGdldFN0eWxlKGN1cnJlY3RFbGVtZW50KTtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIGluIG1hcCkge1xyXG4gICAgICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXBbc3R5bGVdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uICBjb3VsZCBiZSB0d2ljZSBsaWtlIHVuZGVybGluZSBhbmQgc3RyaWtlIHRoZXJvdWdoLi4gXHJcbiAgICAgICAgICAgICAgICBpZiAoIWludGFpbFN0eWxlW3N0eWxlXSlcclxuICAgICAgICAgICAgICAgICAgICBpbnRhaWxTdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZWN0RWxlbWVudCA9IGN1cnJlY3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW50YWlsU3R5bGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZVtrZXldID0gZWwuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH0pXHJcbn1cclxuLy9UT0dHTEVcclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUsIGlzT24pIHtcclxuICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldICsgXCIgXCIgKyB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHt2YWx1ZX0nXWApKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBjaGlsZC5zdHlsZVtrZXldID0gY2hpbGQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShjaGlsZCk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKGNoaWxkKTtcclxuICAgIH0pXHJcbn1cclxuLy9FWFRFTkRcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIGpzb25TdHlsZSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4ganNvblN0eWxlKSB7XHJcbiAgICAgICAgaWYgKGpzb25TdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ganNvblN0eWxlW2tleV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL1RPR0dMRVxyXG4vL1RPRE86IGZpeCBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgIGlmKGtleSA9PT0gXCJjb2xvclwiKXtcclxuICAgICAgICBVc2VSdWxlcyh7ZWxlbWVudDplbGVtZW50LGtleTonY29sb3InLHZhbHVlOnZhbHVlfSk7XHJcbiAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgfSk7XHJcbiAgICAvL2V4cGVyaW1lbnRhbDogc3R5bGUgdGhlIHRleHQgZGVjb3JhdGlvbnMgd2l0aCBjb2xvci4uXHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICAvLyBVc2VSdWxlcyh7ZWxlbWVudDplbGVtZW50LGtleTprZXksdmFsdWU6dmFsdWV9KTtcclxufVxyXG5leHBvcnQgY29uc3QgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCA9IChjb25uZWN0ZWNFbGVtZW50KSA9PnsgICBcclxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpOyAgICAgICAgICAgICAgICBcclxuICAgIHJldHVybiBnZXRJbmhlaXJ0Q3NzKHNlbGVjdGVkRWxlbWVudCxjb25uZWN0ZWNFbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpIHtcclxuICAgIGlmKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuICAgIC8vVE9ETzpyZXZpZXdcclxuICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoIXN0eWxlKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RTdHlsZXMgPSBnZXRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb2xsZWN0U3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsZWN0U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2NvbGxlY3RTdHlsZXNba2V5XX0nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVTdHlsZShlbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoc3R5bGVzKSB7XHJcbiAgICBsZXQgY29sbGVjdFN0eWxlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGNvbGxlY3RTdHlsZXMucHVzaChgJHtrZXl9OiR7c3R5bGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxlY3RTdHlsZXMuam9pbignOycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShlbCkge1xyXG4gICAgaWYgKCFlbCB8fCAhZWwuc3R5bGUpIHJldHVybiB7fTtcclxuICAgIGxldCBzdHlsZXMgPSB7fTtcclxuICAgIGxldCBzdHlsZSA9IGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgIGxldCBjb2xsZWN0U3R5bGVzID0gc3R5bGUuc3BsaXQoJzsnKTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xsZWN0U3R5bGVzKSkge1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gc3R5bGUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlWYWx1ZVsxXSAmJiBrZXlWYWx1ZVswXSlcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNba2V5VmFsdWVbMF0udHJpbSgpXSA9IGtleVZhbHVlWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0eWxlcztcclxufSIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtZXJnZU5vZGVDb250ZWN0LCBtZXJnZVR3b05vZGVzIH0gZnJvbSBcIi4uL3V0aWxpcy9tZXJnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IERvbUVsZW1lbnQgLSBlbGVtZW50IHRvIG5vcm1hbGl6ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQoZWwpIHtcclxuICAgIGNvbnN0IHJlY3Vyc2UgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgcmVjdXJzZShjaGlsZCk7XHJcbiAgICAgICAgICAgIF9ub3JtYWxpemUoY2hpbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgbWVyZ2VOb2Rlc1N0eWxlcyA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudCA9IHdyYXBwZXIubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXh0RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlVHdvTm9kZXMod3JhcHBlciwgbmV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlZCB8fCB3cmFwcGVyICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVyZ2VOb2Rlc0NvbnRlbnQgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gbWVyZ2VOb2RlQ29udGVjdCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lcmdlZFN0eWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtZXJnZWRDb250ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBfbm9ybWFsaXplKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBtZXJnZWRTdHlsZXMgPSBtZXJnZU5vZGVzU3R5bGVzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBtZXJnZWRDb250ZW50ID0gbWVyZ2VOb2Rlc0NvbnRlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgfSB3aGlsZSAobWVyZ2VkQ29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbC5ub3JtYWxpemUoKTtcclxuICAgIHJlY3Vyc2UoZWwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemUoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIGNvbnN0IHRhZ3MgPSBbXCJTVFJJS0VcIiwgXCJFTVwiLCBcIklcIiwgXCJCXCIsIFwiU1RST05HXCIsIFwiVVwiLCBcIkFcIixcIlNQQU5cIl07XHJcbiAgICAgICAgLy9UT0RPOiBub3JtYWxpenIgYXR0cmlidXRlcyAobm86c3R5bGUsY2xhc3NOYW1lKVxyXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgPT09IFwiU1BBTlwiICYmICghZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgfHwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdW53cmFwcGVkID0gZWxlbWVudC51bndyYXAoKTtcclxuICAgICAgICAgICAgdW53cmFwcGVkLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAvL1RPRE86IGNoZWNrIHRoZSByZXR1cm47XHJcbiAgICAgICAgICAgIHJldHVybiB1bndyYXBwZWQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtBcnJheX0gdGV4dE5vZGVzIC0gdGV4dG5vZGUgdG8gcmVtb3ZlIHRoZSB6ZXJvIHNwYWNlIGxpa2UgOiB1MjAwQlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVplcm9TcGFjZSh0ZXh0Tm9kZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXh0Tm9kZXMpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzID0gW3RleHROb2Rlc107XHJcbiAgICB9XHJcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiVEVYVC1TRUxFQ1RJT05cIikge1xyXG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIiwiY2xhc3MgRG9tVXRpbGlzIHtcclxuXHJcblxyXG4gIGlzRWxlbWVudChvYmopIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAob2JqLm5vZGVUeXBlID09PSAxKSAmJiAodHlwZW9mIG9iai5zdHlsZSA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAodHlwZW9mIG9iai5vd25lckRvY3VtZW50ID09PSBcIm9iamVjdFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgd3JhcChlbCwgd3JhcHBlcikge1xyXG4gICAgLy9lbCBzaG91bGQgYmUgYXJyYXlcclxuICAgIGxldCBlbGVtZW50cyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50cyA9IFtlbF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFyZW50cyA9IGVsZW1lbnRzLm1hcChlID0+IGUucGFyZW50Tm9kZSk7XHJcbiAgICB2YXIgcGFyZW50c0RpZmYgPSBwYXJlbnRzLmZpbHRlcigocCwgXywgc2VsZikgPT4geyByZXR1cm4gc2VsZlswXSAhPT0gcCB9KTtcclxuICAgIGlmIChwYXJlbnRzRGlmZi5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coYFt3cmFwXSBmb3VuZCAke3BhcmVudHNEaWZmLmxlbmd0aH0gZGlmZmVyZW50IHBhcmVudHMg8J+YhWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYXJlbnRzWzBdLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50c1swXSlcclxuICAgIGVsZW1lbnRzLmZvckVhY2goX2VsID0+IHdyYXBwZXIuYXBwZW5kQ2hpbGQoX2VsKSlcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IERvbVV0aWxpcygpOyBcclxuXHJcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRTZWxlY3RlZEVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtpZihudWxsIT09ZSl7dmFyIHQ9ZS5hbmNob3JOb2RlO2lmKG51bGwhPT10KXtmb3IoOzM9PT10Lm5vZGVUeXBlOyl0PXQucGFyZW50Tm9kZTtyZXR1cm4gdH1yZXR1cm4gbnVsbH19XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSAoIHdyYXBwZXIpID0+IHtcclxuICBpZiAodHlwZW9mIHdyYXBwZXIgPT09IFwic3RyaW5nXCIpIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdyYXBwZXIpO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KHRoaXMpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gIH0gXHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuaXNjaGlsZE9mID0gZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgaWYgKCFwYXJlbnQpIHJldHVybiBmYWxzZTtcclxuICBsZXQgbm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcclxuICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmNvbnN0IF93cmFwID0gZnVuY3Rpb24od3JhcHBlcikge1xyXG4gIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gIHJldHVybiB3cmFwcGVyO1xyXG59XHJcblRleHQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9IF93cmFwO1xyXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlKSB7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlTm9kZSA9IGZ1bmN0aW9uKHJlcGxhY2VtZW50Tm9kZSkge1xyXG4gIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCB0aGlzKVxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XHJcbiAgfVxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcylcclxuICB2YXIgZXh0cmFDb250ZW50cyA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gIHRoaXMucmVwbGFjZU5vZGUoZXh0cmFDb250ZW50cylcclxuICByZXR1cm4gZXh0cmFDb250ZW50cztcclxufVxyXG4iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldENsYXNzZXMsIG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uL19hcHAuY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogICogUmV0dXJucyB0aGUgbmV3IG1lcmdlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBtZXJnZSB3aXRoIGhpcyBmaXJzdCBjaGlsZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlTm9kZUNvbnRlY3QgPSBub2RlID0+IHtcclxuXHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQobm9kZSkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBub2RlIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENoaWxkID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlmICghZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdCBjaGlsZCBub3QgZm91bmQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChmaXJzdENoaWxkLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdENoaWxkIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnRleHRDb250ZW50ICE9PSBmaXJzdENoaWxkLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIHRleHQgY29udGVudCBpcyBkaWZmZXJlbnQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50UHJvcHMgPSB7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKG5vZGUpLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMobm9kZSksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMobm9kZSlcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gX2VsZW1lbnRQcm9wcy5zdHlsZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBfZWxlbWVudFByb3BzLnN0eWxlW3N0eWxlXTtcclxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSA9IChmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSArIFwiIFwiICsgc3R5bGVWYWx1ZSkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIF9lbGVtZW50UHJvcHMuYXR0cnMpIHtcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBfZWxlbWVudFByb3BzLmF0dHJzW2F0dHJdO1xyXG4gICAgICAgIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmaXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoLi4uX2VsZW1lbnRQcm9wcy5jbGFzc2VzKTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShmaXJzdENoaWxkKTtcclxuICAgIG5vcm1hbGl6ZUVsZW1lbnQoZmlyc3RDaGlsZCk7XHJcbiAgICBpZihmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQpXHJcbiAgICBmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTm9kZXMoZWxlbWVudE9uZSwgZWxlbWVudFR3bykge1xyXG4gICAgY29uc29sZS5sb2coJ1ttZXJnZVR3b05vZGVzXSBTVEFSVCcpO1xyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRPbmUpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRUd28pKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudE9uZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZWxlbWVudFR3by5ub2RlTmFtZSAhPT0gXCJTUEFOXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50c0RhdGEgPSBbe1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50T25lKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRPbmUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRPbmUpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50VHdvKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRUd28pLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRUd28pXHJcbiAgICB9XVxyXG4gICAgY29uc3QgZ2V0Q29tbW9uQ2xhc3NlcyA9IChjbGFzc2VzMSwgY2xhc3NlczIpID0+IHtcclxuICAgICAgICBpZiAoIWNsYXNzZXMxIHx8ICFjbGFzc2VzMilcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGNvbnN0IGMxID0gWy4uLmNsYXNzZXMxXTtcclxuICAgICAgICBjb25zdCBjMiA9IFsuLi5jbGFzc2VzMl07XHJcbiAgICAgICAgcmV0dXJuIGMxLmZpbHRlcihjID0+IGMyLmluY2x1ZGVzKGMpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvbW1vblN0eWxlcyA9IChzdHlsZTEsIHN0eWxlMikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1tb25TdHlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gc3R5bGUxKSB7XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUyW3NdKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTFWYWx1ZXMgPSBzdHlsZTFbc107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlMlZhbHVlcyA9IHN0eWxlMltzXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlMlZhbHVlcyA9PT0gc3R5bGUxVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tbW9uU3R5bGVzW3NdID0gc3R5bGUyVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21tbW9uU3R5bGVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbW1vbmNMYXNzZXMgPSBnZXRDb21tb25DbGFzc2VzKF9lbGVtZW50c0RhdGFbMF0uY2xhc3NlcywgX2VsZW1lbnRzRGF0YVsxXS5jbGFzc2VzKTtcclxuICAgIGNvbnNvbGUubG9nKCdjb21tb25DbGFzc3NlcycsY29tbW9uY0xhc3NlcyxlbGVtZW50T25lLGVsZW1lbnRUd28sX2VsZW1lbnRzRGF0YSlcclxuXHJcbiAgICBjb25zdCBjb21tb25TdHlsZXMgPSBnZXRDb21tb25TdHlsZXMoX2VsZW1lbnRzRGF0YVswXS5zdHlsZSwgX2VsZW1lbnRzRGF0YVsxXS5zdHlsZSk7XHJcbiAgICBjb25zdCBidWlsZFdyYXBwaW5nRWxlbWVudCA9IChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdHlsZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlW3NdID0gY29tbW9uU3R5bGVzW3NdO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGNsYXNzZXNcclxuICAgICAgICBpZiAoY29tbW9uY0xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdyYXBwZXIuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci51bndyYXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGJ1aWxkV3JhcHBpbmdFbGVtZW50KGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCd3cmFwcGVyIGlzIG51bGwnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudENsYXNzZXMgPSAobm9kZSwgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUobm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRTdHlsZXMgPSAobm9kZSwgY29tbW9uU3R5bGVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgbm9kZS5zdHlsZVtzXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtlbGVtZW50T25lLCBlbGVtZW50VHdvXTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50Q2xhc3NlcyhlLCBjb21tb25jTGFzc2VzKTtcclxuICAgICAgICBjbGVhckVsZW1lbnRTdHlsZXMoZSwgY29tbW9uU3R5bGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgRG9tVXRpbGlzLndyYXAoZWxlbWVudHMsIHdyYXBwZXIpO1xyXG4gICAgWy4uLndyYXBwZXIuY2hpbGRyZW5dLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudChjKVxyXG4gICAgfSlcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vblZhbHVlc09iamVjdChvYmoxLCBvYmoyKSB7XHJcbiAgICBsZXQgY29tbW9uVmFsdWVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcbiAgICAgICAgaWYgKG9iajJba2V5XSAmJiBvYmoyW2tleV0gPT09IG9iajFba2V5XSkge1xyXG4gICAgICAgICAgICBjb21tb25WYWx1ZXNba2V5XSA9IG9iajFba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21tb25WYWx1ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vbkFycmF5cyhhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBtZXJnZUFyciA9IFtdO1xyXG4gICAgQXJyYXkuZnJvbShhcnIxKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChhcnIyLmZpbmRJbmRleChpID0+IGkgPT09IGl0ZW0pID4gMCkge1xyXG4gICAgICAgICAgICBtZXJnZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWVyZ2VBcnI7XHJcbn0iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENsYXNzTmFtZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRIVE1MKGZyb21FbGVtZW50LCB0b0VsZW1lbnQsb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCB7dGFnID0gXCJzcGFuXCJ9ID0gb3B0aW9ucztcclxuICAgIGlmICghZnJvbUVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCBtdXN0IGJlIGNoaWxkIG9mIHRvRWxlbWVudCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQoZnJvbUVsZW1lbnQpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCAmJiB0b0VsZW1lbnQgbXVzdCBiZSBkb20gZWxlbWVudHMuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0QXR0cnMgPSAoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbihcIiBcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIGZyb21FbGVtZW50LmNyZWF0ZVNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgY2VudGVyVGVtcGxhdGUgPSBzZXRBdHRycyhjZW50ZXJFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgLy9jZW50ZXJcclxuICAgIGNlbnRlclRlbXBsYXRlLmFwcGVuZENoaWxkKGZyb21FbGVtZW50KTtcclxuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB2YXIgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIC8vbGVmdFxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodG9FbGVtZW50LCAwKTtcclxuICAgIGNvbnN0IGxlZnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBsZWZ0VGVtcGxhdGUgPSBzZXRBdHRycyhsZWZ0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciBsZWZ0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIGxlZnRUZW1wbGF0ZS5hcHBlbmRDaGlsZChsZWZ0UmFuZ2UpO1xyXG4gICAgLy9yaWdodFxyXG4gICAgcmFuZ2Uuc2V0RW5kKHRvRWxlbWVudCwgdG9FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgcmlnaHRUZW1wbGF0ZSA9IHNldEF0dHJzKHJpZ2h0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciByaWdodFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICByaWdodFRlbXBsYXRlLmFwcGVuZENoaWxkKHJpZ2h0UmFuZ2UpO1xyXG4gICAgY29uc3Qgc3BsaXQgPSB7XHJcbiAgICAgICAgbGVmdDogbGVmdFRlbXBsYXRlLFxyXG4gICAgICAgIGNlbnRlcjogY2VudGVyVGVtcGxhdGUsXHJcbiAgICAgICAgcmlnaHQ6IHJpZ2h0VGVtcGxhdGVcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBlbCBpbiBzcGxpdCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdFtlbF07XHJcbiAgICAgICAgdG9FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIHNwbGl0O1xyXG5cclxufSIsImltcG9ydCBDb3JlIGZyb20gJy4vU3R5bGVJdC9pbmRleCc7XHJcbmltcG9ydCAgTU9ERVMgIGZyb20gJy4vU3R5bGVJdC9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUl0IHtcclxuICAvL2V4cG9zZSBvbmx5IHRoZSByZWxldmFudCBtZXRob2RzLi5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgLy9UT0RPOiB2YWxpZGF0ZSB0YXJnZXQgJiBjb25maWcuLlxyXG4gICAgY29uc3Qgc3R5bGVJdCA9IG5ldyBDb3JlKHRhcmdldCwgY29uZmlnKTtcclxuICAgIGlmIChzdHlsZUl0KSB7ICBcclxuICAgICAgdGhpcy5leGVjQ21kID0gc3R5bGVJdC5leGVjQ21kO1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gc3R5bGVJdC50b2dnbGVDbGFzcztcclxuICAgICAgdGhpcy5saW5rID0gc3R5bGVJdC5saW5rO1xyXG4gICAgICB0aGlzLnVuTGluayA9IHN0eWxlSXQudW5MaW5rO1xyXG4gICAgICB0aGlzLnNhdmUgPSBzdHlsZUl0LnNhdmU7XHJcbiAgICAgIHRoaXMubG9hZCA9IHN0eWxlSXQubG9hZDtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gc3R5bGVJdC5kZXN0cm95O1xyXG4gICAgICB0aGlzLm9uID0gc3R5bGVJdC5vbjtcclxuICAgICAgdGhpcy5NT0RFUyA9IE1PREVTO1xyXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gdGhpcy50b2dnbGVDbGFzcy5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmV4ZWNDbWQgPSB0aGlzLmV4ZWNDbWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5vbiA9IHRoaXMub24uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMudW5MaW5rID0gdGhpcy51bkxpbmsuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMubG9hZCA9IHRoaXMubG9hZC5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZChzdHlsZUl0KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9