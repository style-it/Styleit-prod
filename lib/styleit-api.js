/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.27
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

/***/ "./src/StyleIt/constants/block_elms.js":
/*!*********************************************!*\
  !*** ./src/StyleIt/constants/block_elms.js ***!
  \*********************************************/
/*! exports provided: block_elments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block_elments", function() { return block_elments; });
const block_elments = {
    "H1":"H1",
    "H2":"H2",
    "H3":"H3",
    "H4":"H4",
    "H5":"H5",
    "H6":"H6",
    "P":"P",
    "LI":"LI",
    "OL":"OL"
}   

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
/* harmony import */ var _constants_block_elms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/block_elms */ "./src/StyleIt/constants/block_elms.js");













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
            //TODO: tests
            if (elementToSplit && _constants_block_elms__WEBPACK_IMPORTED_MODULE_11__["block_elments"][elementToSplit.nodeName]) {
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
      
        if (options.as === "inline") {
            let blockElement = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["GetClosestBlockElement"])(element);
            if (blockElement) {
                const wrapTextNodeWithAppendStyle = (node) => {
                    const span = document.createElement("span");
                    span.style[key] = value;
                    node.wrap(span);
                };  
                const createInlineStyle = (parentNode) => {
                    //TODO: tests
                    parentNode.style[key] = null;
                    Array.from(parentNode.childNodes).forEach(node => {
                        if (node.nodeType === 3) {
                            wrapTextNodeWithAppendStyle(node);
                        } else if (node.nodeType === 1 && !_constants_void_elms__WEBPACK_IMPORTED_MODULE_10__["void_elements"][node.nodeName]) {
                                createInlineStyle(node);
                        }
                        else {
                            node.style[key] = value;
                        }
                    });
                };
                createInlineStyle(blockElement);
                // Array.from(blockElement.querySelectorAll("span")).forEach(el=>el.style[key] = value);
            } else {
                this.createBlockElAndStyleIt(key, value, element);
            }

        } else {
            let blockElement = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["GetClosestBlockElement"])(element);
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
/* harmony import */ var _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/block_elms */ "./src/StyleIt/constants/block_elms.js");
/* harmony import */ var _constants_void_elms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/void_elms */ "./src/StyleIt/constants/void_elms.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements.service */ "./src/StyleIt/services/elements.service.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");







const normalizePasedElement = (target) => {

  Object(_elements_service__WEBPACK_IMPORTED_MODULE_2__["walkOnElement"])(target, (node) => {
    if (node !== target && node.parentElement && _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][node.nodeName]) {
      const blockParent = node.parentElement.closest(node.nodeName);
      if (blockParent && blockParent !== target) {
        node.unwrap();
        return blockParent;
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
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          let copiedNode = sel.getRangeAt(i).cloneContents();
          container.appendChild(copiedNode);

          Array.from(container.childNodes).forEach(n => {
            if (n.nodeType === 3) {
              const parentCopiedNode = sel.getRangeAt(i).startContainer.parentNode;
              const collectedCSS = Object(_style_service__WEBPACK_IMPORTED_MODULE_4__["getInheirtCss"])(parentCopiedNode, this.target);
              const span = document.createElement("span");
              span.textContent = copiedNode.textContent;
              span.style = collectedCSS;
              Object(_style_service__WEBPACK_IMPORTED_MODULE_4__["setStyles"])(span, collectedCSS);
              n.wrap(span);

            } else if (_constants_void_elms__WEBPACK_IMPORTED_MODULE_1__["void_elements"][n.nodeName] && n.nodeName !== "BR") {
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
    if(this.onCopy){
      this.onCopy(event);

    }
  }
  paste(event) {
    this.pasteWithStyles(event);
  };
  
  pastePlainText(event) {
    const data = event.clipboardData || window.clipboardData;
    event.preventDefault();
    let content = data.getData('text/plain').trim();
    content = content.replace(/\n/g, "<br/>")
    if(!content.trim()){
      return;
    }
    const id = "this-is-temp-container-for-plain-text";

    // document.execCommand('inserttext', false, content);
    Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["pasteHtmlAtCaret"])(`<p id="${id}">${content}</p>`);
    const copiedElement = this.target.querySelector(`#${id}`);
    if (copiedElement) {
      Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["setCaretAt"])(copiedElement);

      if (copiedElement.parentElement === this.target) {
        copiedElement.removeAttribute("id");
      } else {
        copiedElement.parentNode.removeChild(copiedElement);
      }
      Array.from(this.target.children).forEach(child => {
        if (!child.textContent.trim()) {
          this.target.removeChild(child);
        }
      })
    }

    if (this.onPaste) {
      this.onPaste(event,"plainText");
    }
  }
  pasteWithStyles(event) {
    event.preventDefault();
    const data = event.clipboardData || window.clipboardData;
    const copied = data.getData('styleit/html').trim();
    //on copied on the editor localy
    if (copied) {
      const id = "this-is-temp-id-for-paste-content-into-the-dom";
      Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["pasteHtmlAtCaret"])(`<div id="${id}">${copied}</div>`);
      const copiedElement = this.target.querySelector(`#${id}`);
      let parentBlock = Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["GetClosestBlockElement"])(copiedElement);
      if (parentBlock && copiedElement.children.length === 1) {
        if (_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][copiedElement.children[0].nodeName]) {
          copiedElement.children[0].unwrap();
        }
        Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["setCaretAt"])(copiedElement);
        normalizePasedElement(parentBlock);

      } else if (parentBlock && copiedElement.children.length > 1) {
        const firstChild = copiedElement.firstChild;
        copiedElement.parentElement.insertBefore(firstChild, copiedElement);
        const sameNode = firstChild.closest(firstChild.nodeName);
        if (sameNode) {
          firstChild.unwrap();
        }
        parentBlock.insertAfter(copiedElement);
      }
      normalizePasedElement(copiedElement);
      Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["setCaretAt"])(copiedElement);
      copiedElement.unwrap();

      Object(_elements_service__WEBPACK_IMPORTED_MODULE_2__["wrapNakedTextNodes"])(this.target);
      if (this.onPaste) {
        this.onPaste(event,"formattedText");
      }
    } else {
        this.pastePlainText(event);
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
                Array.from(el.previousSibling.attributes).forEach(attr=>{
                    el.setAttribute(attr.name,attr.value);
                })
               
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
/* harmony import */ var _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/block_elms */ "./src/StyleIt/constants/block_elms.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.service */ "./src/StyleIt/services/elements.service.js");



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
  if (_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][element.nodeName]) return element;
  let parentElement = element;
  while (parentElement && window.getComputedStyle(parentElement).display === "inline") {
    if (parentElement.parentElement) {
      parentElement = parentElement.parentElement;
    } else {
      break;
    }
  }
  if(parentElement  && _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][parentElement.nodeName]){
    return parentElement;
  }
  return false;
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
  const selectedElement = Object(_elements_service__WEBPACK_IMPORTED_MODULE_1__["getSelectedElement"])();
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

    while (currectElement && currectElement.ischildOf(toElement)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2NvbnN0YW50cy9ibG9ja19lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25zdGFudHMvdm9pZF9lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvcnVsZXMvcnVsZXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvYXR0ci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvbGluay5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9Eb21VdGlsaXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9tZXJnZXIuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9zcGxpdEhUTUwuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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QWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCwwQkFBMEIsNEVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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ZSI6InN0eWxlaXQtYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMnKS5kZWZhdWx0O1xyXG4iLCJcclxuY2xhc3MgVGV4dFNlbGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpe1xyXG4gICAgICBjb25zdCBjcmVhdGVaZXJvU3BhY2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnemVyby1zcGFjZScpO1xyXG4gICAgICBpZihjcmVhdGVaZXJvU3BhY2UgPT09IFwidHJ1ZVwiKXtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RleHQtc2VsZWN0aW9uJywgVGV4dFNlbGVjdGlvbik7ICIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vdXRpbGlzL0RvbVV0aWxpc1wiO1xyXG5pbXBvcnQgQ29weVBhc3RlIGZyb20gXCIuL3NlcnZpY2VzL2NvcHlQYXN0ZS9jb3B5UGFzdGUuc2VydmljZVwiO1xyXG5pbXBvcnQgSW5wc2VjdG9yIGZyb20gXCIuL3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgS2V5UHJlc3MgZnJvbSBcIi4vc2VydmljZXMva2V5UHJlc3MvS2V5UHJlc3NcIjtcclxuXHJcbmltcG9ydCB7IGVsZW1lbnRUb0pzb24sIEpzb25Ub0VsZW1lbnQsIHdyYXBOYWtlZFRleHROb2RlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIENvbm5lY3QoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKERvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgLy8gdmFsaWQuLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgUmVuZGVySW5uZXJIVE1MID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlFbGVtZW50ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3JhcE5ha2VkVGV4dE5vZGVzKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QganNvbkNvbnRlbnQgPSBlbGVtZW50VG9Kc29uKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gSnNvblRvRWxlbWVudChqc29uQ29udGVudCk7XHJcblxyXG4gICAgICAgICAgICBlbXB0eUVsZW1lbnQoZWxlbWVudCkudGhlbigoKSA9PiBlbGVtZW50LmlubmVySFRNTCA9IHJlbmRlcmVkRWxlbWVudC5pbm5lckhUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VQbHVnaW5zID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcHlQYXN0ZTogbmV3IENvcHlQYXN0ZShlbGVtZW50LCBvcHRpb25zKSxcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvcjogbmV3IElucHNlY3RvcihlbGVtZW50LCBvcHRpb25zLm9uSW5zcGVjdCksXHJcbiAgICAgICAgICAgICAgICBrZXlQcmVzczogbmV3IEtleVByZXNzKGVsZW1lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgUmVuZGVySW5uZXJIVE1MKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHVzZVBsdWdpbnMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IGRlc3RvcnkgZXZlbnRzLi5cclxuICAgIC8vcXVlc3Rpb246IGhvdyB0byB1c2UgdGhlIGV2ZW50cyA/IFxyXG5cclxuXHJcbiAgICBEZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGx1Z2lucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luLkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IGJsb2NrX2VsbWVudHMgPSB7XHJcbiAgICBcIkgxXCI6XCJIMVwiLFxyXG4gICAgXCJIMlwiOlwiSDJcIixcclxuICAgIFwiSDNcIjpcIkgzXCIsXHJcbiAgICBcIkg0XCI6XCJINFwiLFxyXG4gICAgXCJINVwiOlwiSDVcIixcclxuICAgIFwiSDZcIjpcIkg2XCIsXHJcbiAgICBcIlBcIjpcIlBcIixcclxuICAgIFwiTElcIjpcIkxJXCIsXHJcbiAgICBcIk9MXCI6XCJPTFwiXHJcbn0gICAiLCJleHBvcnQgY29uc3Qgdm9pZF9lbGVtZW50cyA9IHtcclxuICAgIFwiQlJcIjpcIkJSXCIsXHJcbiAgICBcIkhSXCI6XCJIUlwiLFxyXG4gICAgXCJJTUdcIjpcIklNR1wiLFxyXG4gICAgXCJJTlBVVFwiOlwiSU5QVVRcIixcclxuICAgIFwiQVVESU9cIjpcIkFVRElPXCIsXHJcbiAgICBcIlZJREVPXCI6XCJWSURFT1wiLFxyXG4gICAgXCJQSUNUVVJFXCI6XCJQSUNUVVJFXCJcclxufSIsImltcG9ydCB7XHJcbiAgICB3cmFwUmFuZ2VXaXRoRWxlbWVudCxcclxuICAgIHNldFNlbGVjdGlvbkZsYWdzLFxyXG4gICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzLFxyXG4gICAgZ2V0VGV4dE5vZGVzLFxyXG4gICAgY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudCxcclxuICAgIHNldENhcmV0QXQsXHJcbiAgICBHZXRDbG9zZXN0QmxvY2tFbGVtZW50XHJcbn0gZnJvbSBcIi4vc2VydmljZXMvcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgTW9kZXMgZnJvbSAnLi9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgc2V0U3R5bGUsIHRvZ2dsZVN0eWxlLCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50LCByZW1vdmVaZXJvU3BhY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2N1c3RvbS90ZXh0U2VsZWN0ZWQnO1xyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RVZFTlRTfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUZW1wTGlua0VsZW1lbnQsIHJlc2V0VVJMLFRBUkdFVFMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9saW5rLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuL2NvbnN0YW50cy92b2lkX2VsbXNcIjtcclxuaW1wb3J0IHsgYmxvY2tfZWxtZW50cyB9IGZyb20gXCIuL2NvbnN0YW50cy9ibG9ja19lbG1zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcclxuXHJcbiAgICAvLyAqdGFyZ2V0ID0+IGNhbiBiZSBJZCBvZiBFbGVtZW50IHRoYXQgc2hvdWxkIGNvbnRhaW4gRWRpdG9yIGluc3RhbmNlIG9yIHRoZSBlbGVtZW50IGl0c2VsZi4uXHJcbiAgICAvLyAqY29uZmlnID0+ICBjb25maWd1cmF0aW9uIHBhc3NlZCB0ICAgbyBUb29sIGNvbnN0cnVjdG9yXHJcbiAgICAvL1RPRE86IGFkZCB0YXJnZXQgdmFsaWRhdGlvbnMuLjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fX2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgb25JbnNwZWN0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9uID0gKGtleSxjYWxsYmFjayk9PntcclxuICAgICAgICAgICAgaWYodHlwZW9mKGtleSkgIT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImtleSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mKGNhbGxiYWNrKSAhPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFVkVOVFNba2V5XSAgPSBjYWxsYmFjaztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdG9yID0gbmV3IENvbm5lY3RvcigpO1xyXG4gICAgICAgIHRoaXMubW9kZUhhbmRsZXJzID0ge1xyXG4gICAgICAgICAgICBbTW9kZXMuVG9nZ2xlXTogKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpID0+IHRoaXMub25Ub2dnbGUodiwga2V5LCB2YWx1ZSwgb3B0aW9ucyksXHJcbiAgICAgICAgICAgIFtNb2Rlcy5FeHRlbmRdOiAodiwga2V5LCB2YWx1ZSwgb3B0aW9ucykgPT4gdGhpcy5vbkV4dGVuZCh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgPyBPYmplY3QuYXNzaWduKHRoaXMuX19jb25maWcsIGNvbmZpZykgOiB0aGlzLl9fY29uZmlnO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge1xyXG4gICAgICAgICAgICBzdHlsZUNoYW5nZWQ6IHRoaXMuY29uZmlnLm9uSW5zcGVjdCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50ID0gdGhpcy5Db25uZWN0b3IuQ29ubmVjdCh0YXJnZXQsIHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRUb0pzb24odGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGxvYWQoanNvbikge1xyXG4gICAgICAgIHJldHVybiBKc29uVG9FbGVtZW50KGpzb24sIHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuQ29ubmVjdG9yLkRlc3Ryb3koKTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzZWxmKSB7XHJcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXcuXHJcbiAgICAvL1RPRE86IENyZWF0ZSBub3JtYWxpemUuLlxyXG4gICAgLy9xdWVzdGlvbjogaWYgdGV4dCB3YXMgc2VsZWN0ZWQsIHNob3VsZCB3ZSB1bndyYXAgdGhlIHNlbGVjdGlpb24gb25seSA/IFxyXG4gICAgdW5MaW5rKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3Rpb24gJiYgIXNlbGVjdGlvbi50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50VG9VbndyYXA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VOb2RlID0gc2VsZWN0aW9uLmJhc2VOb2RlO1xyXG4gICAgICAgICAgICBpZiAoYmFzZU5vZGUgJiYgYmFzZU5vZGUubm9kZVR5cGUgPT09IDMgJiYgYmFzZU5vZGUucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwID0gYmFzZU5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFzZU5vZGUgJiYgYmFzZU5vZGUubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcCA9IGVsZW1lbnRUb1Vud3JhcC5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvVW53cmFwKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAudW53cmFwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShsaW5rRWxlbWVudHMpLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RBVGFnID0gci5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3RBVGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHNwbGl0SFRNTChyLCBjbG9zZXN0QVRhZywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGEuY2VudGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgICAgIGEudW53cmFwKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByLnVud3JhcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gc2V0U2VsZWN0aW9uRmxhZ3MobGlua0VsZW1lbnRzWzBdLCBsaW5rRWxlbWVudHNbbGlua0VsZW1lbnRzLmxlbmd0aCAtIDFdKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXdcclxuICAgIC8vVE9ETzogbWVyZ2UgYSB0YWdzLi5cclxuICAgIC8vVE9ETzogcmVtb3ZlIGEgY2hpbGRzXHJcbiAgICAvL1RPRE86IG1vdmUgZnVuY3Rpb24gdG8gTGluay5zZXJ2aWNlLmpzXHJcbiAgICBsaW5rKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAob3B0aW9ucyAmJiAhb3B0aW9ucy5ocmVmKSB8fCAgIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24gJiYgIXdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5vIHRleHQgc2VsZWN0ZWQuLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVud3JhcEF0YWdzID0gKGxpbmtFbGVtZW50cykgPT4ge1xyXG4gICAgICAgICAgICBsaW5rRWxlbWVudHMuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20obGluay5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZm9yRWFjaChhVGFnID0+IGFUYWcudW53cmFwKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEFUYWcgPSBsaW5rLnBhcmVudEVsZW1lbnQgPyBsaW5rLnBhcmVudEVsZW1lbnQuY2xvc2VzdChcImFcIikgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RBVGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzcGxpdEhUTUwobGluaywgY2xvc2VzdEFUYWcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuY2VudGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZXN0QVRhZy51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFRhcmdldFRvVGFnID0gKGxpbmtFbGVtZW50cywgcmVuZGVyZWRMaW5rLCBfdGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtFbGVtZW50cy5mb3JFYWNoKGFUYWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgYVRhZy5ocmVmID0gcmVuZGVyZWRMaW5rO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhVGFnLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBfdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNldFByb3RvY29sID0gKF9wcm90b2NvbCwgbmV3VVJMKSA9PiB7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCA9IF9wcm90b2NvbC5yZXBsYWNlKC86L2csIFwiXCIpO1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBfcHJvdG9jb2wucmVwbGFjZSgvXFwvXFwvL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgKz0gXCI6XCI7XHJcbiAgICAgICAgICAgIGlmIChfcHJvdG9jb2wuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBfcHJvdG9jb2wgKz0gXCIvL1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1VSTC5wdXNoKF9wcm90b2NvbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfcHJvdG9jb2w7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHsgaHJlZiA9IFwiXCIsIHByb3RvY29sID0gXCJcIiwgdGFyZ2V0ID0gXCJcIiB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxldCBuZXdVUkwgPSBbXTtcclxuICAgICAgICBjb25zdCBBdGFnID0gY3JlYXRlVGVtcExpbmtFbGVtZW50KGhyZWYpO1xyXG4gICAgICAgIGxldCBfaHJlZiA9IHJlc2V0VVJMKGhyZWYudHJpbSgpKTtcclxuXHJcbiAgICAgICAgbGV0IF9wcm90b2NvbCA9IHByb3RvY29sLnRyaW0oKSB8fCBBdGFnLnByb3RvY29sO1xyXG4gICAgICAgIGxldCBfdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCB0ZXN0VGFyZ2V0ID0gVEFSR0VUU1t0YXJnZXQudHJpbSgpLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIGlmICh0ZXN0VGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIF90YXJnZXQgPSB0ZXN0VGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3Byb3RvY29sLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBzZXRQcm90b2NvbChfcHJvdG9jb2wsIG5ld1VSTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfaHJlZikge1xyXG4gICAgICAgICAgICBuZXdVUkwucHVzaChfaHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkTGluayA9IG5ld1VSTC5qb2luKFwiXCIpO1xyXG4gICAgICAgIHVud3JhcEF0YWdzKGxpbmtFbGVtZW50cyk7XHJcbiAgICAgICAgc2V0VGFyZ2V0VG9UYWcobGlua0VsZW1lbnRzLCByZW5kZXJlZExpbmssIF90YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gc2V0U2VsZWN0aW9uRmxhZ3MobGlua0VsZW1lbnRzWzBdLCBsaW5rRWxlbWVudHNbbGlua0VsZW1lbnRzLmxlbmd0aCAtIDFdKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi4gXHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlld1xyXG4gICAgLy9xdWVzdGlvbiA6IHdlIHdhbnQgdG8gaGFuZGxlIGFuZCB0b2dnbGUgYW55IGF0dHJpYnV0ZSA/IFxyXG4gICAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgLy9oZXJlXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKGNsYXNzTmFtZSkgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiY2xhc3NOYW1lIG11c3QgYmUgYSBzdHJpbmcuLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMuc2VsZWN0aW9uKSAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBpc1RvZ2dsZU9uID0gKHR5cGVvZiAob3B0aW9ucy5pc09OKSA9PT0gXCJib29sZWFuXCIpID8gb3B0aW9ucy5pc09OIDogZWxlbWVudHNbMF0uY2xvc2VzdChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApO1xyXG4gICAgICAgIGlmICghaXNUb2dnbGVPbikge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RDbGFzcyA9IGVsLnBhcmVudEVsZW1lbnQuY2xvc2VzdChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0Q2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBzcGxpdEhUTUwoZWwsIGNsb3Nlc3RDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXQuY2VudGVyLnJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBvcHRpb25zLnNlbGVjdGlvbiA/IHNldFNlbGVjdGlvbkZsYWdzKGVsZW1lbnRzWzBdLCBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXSkgOiB7IGZpcnN0RmxhZzogbnVsbCwgbGFzdEZsYWc6IG51bGwgfTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLlxyXG4gICAgICAgIGlmIChmaXJzdEZsYWcgJiYgbGFzdEZsYWcpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKHNlbC5yZW1vdmVBbGxSYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0ga2V5IG9mIGNzcyBcclxuICAgICogIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHZhbHVlIG9mIGNzc1xyXG4gICAgKiAgQHBhcmFtIHsoT2JqZWN0IHwgU3RyaW5nKX0gTW9kZXMgLSBtb2RlIGZyb20gTW9kZXMgPT4gRXh0ZW5kIG9yIFRvZ2dsZVxyXG4gICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLkV4dGVuZCAtIG92ZXJyaWRlIHN0eWxlXHJcbiAgICAqICBAcGFyYW0ge3N0cmluZ30gTW9kZXMudG9nZ2xlIC0gdG9nZ2xlIHN0eWxlXHJcbiAgICAqICBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gb3B0aW9ucyBcclxuICAgICovXHJcbiAgICBleGVjQ21kKGtleSwgdmFsdWUsIG1vZGUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpIHx8ICF0aGlzLmlzVkFsaWRLZXlWYWx1ZShrZXksIHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gW107XHJcbiAgICAgICAgbW9kZSA9IG1vZGUgPyBtb2RlIDogTW9kZXMuRXh0ZW5kO1xyXG4gICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMuc2VsZWN0aW9uKSAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgXHJcblxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT1yZXZpZXc9PT09PT09PT09PT09PT0vL1xyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmICghb3B0aW9ucy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5vZGUgPSB0aGlzLkVMRU1FTlRTW3RoaXMuRUxFTUVOVFMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGlmIChsYXN0Tm9kZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIgPSB0aGlzLmNyZWF0ZUNhcmV0UGxhY2VtZW50KGxhc3ROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnVuV3JhcCAmJiBBcnJheS5pc0FycmF5KG9wdGlvbnMudW5XcmFwKSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnVuV3JhcC5mb3JFYWNoKHNlbGVjdG9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRUxFTUVOVFMuZm9yRWFjaCh0eHROb2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0RWxlbWVudFRvVW5XcmFwID0gdHh0Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEVsZW1lbnRUb1VuV3JhcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RWxlbWVudFRvVW5XcmFwLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVGhpcyBpcyBob3cgaSBtYWtlIHRoZSB0ZXh0IHNlbGVjdGlvbiwgaSBkb250IGtub3cgaWYgdGhpcyBpcyBnb29kIHdheSwgYnV0IGl0IHdvcmtzLi5cclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IG9wdGlvbnMuc2VsZWN0aW9uID8gc2V0U2VsZWN0aW9uRmxhZ3ModGhpcy5FTEVNRU5UU1swXSwgdGhpcy5FTEVNRU5UU1t0aGlzLkVMRU1FTlRTLmxlbmd0aCAtIDFdKSA6IHsgZmlyc3RGbGFnOiBudWxsLCBsYXN0RmxhZzogbnVsbCB9OyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG4gICAgICAgIHJlbW92ZVplcm9TcGFjZShnZXRUZXh0Tm9kZXModGhpcy5jb25uZWN0ZWRFbGVtZW50KSk7XHJcblxyXG4gICAgICAgIGxldCBUb2dnbGVNb2RlOy8vRGVjbGFyZSB0b2dnbGUgbW9kZSwgVGhlIGZpcnN0IGVsZW1lbnQgZGV0ZXJtaW5lcyB3aGV0aGVyIGl0IGlzIG9uIG9yIG9mZlxyXG5cclxuICAgICAgICB0aGlzLkVMRU1FTlRTLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IFRvZ2dsZU1vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubW9kZUhhbmRsZXJzW21vZGVdKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gTW9kZXMuVG9nZ2xlICYmIHR5cGVvZiAoVG9nZ2xlTW9kZSkgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgVG9nZ2xlTW9kZSA9IHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uIFxyXG4gICAgICAgIC8vdXNlIHRoZSBmaXJzdCBhbmQgbGFzdCBmbGFncyB0byBtYWtlIHRoZSB0ZXh0IHNlbGVjdGlvbiBhbmQgdW53cmFwIHRoZW0uLlxyXG4gICAgICAgIGlmIChmaXJzdEZsYWcgJiYgbGFzdEZsYWcpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKHNlbC5yZW1vdmVBbGxSYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJldEhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZXRBdCh0aGlzLmNhcmV0SG9sZGVyLCB0aGlzLmNhcmV0SG9sZGVyLnRleHRDb250ZW50Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sbGVjdGVkU3R5bGVzID0gIGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgICAgICBpZih0eXBlb2YgKEVWRU5UU1tcImluc3BlY3RcIl0pID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc3R5bGVDaGFuZ2VkJywgY29sbGVjdGVkU3R5bGVzKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhcmV0UGxhY2VtZW50KGF0Tm9kZSkge1xyXG4gICAgICAgIGlmICghYXROb2RlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBjYXJldEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgICAgICAgY2FyZXRIb2xkZXIuc2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJywgJ3RydWUnKTtcclxuICAgICAgICBhdE5vZGUuYXBwZW5kQ2hpbGQoY2FyZXRIb2xkZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJldEhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSlcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdKHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgb25Ub2dnbGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZXRlY3QgaWYgdGhlcmUgaXMgYW55IHBhcmVudCB3aXRoIHN0eWxlIHRvIHNwbGl0LlxyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgY2F0Y2ggZnJvbSBvcHRpb25zIHRvIGRldGVjdCBtb3JlIHRoYW4gb25lIHN0eWxlIG9yIHRhZyBlbGVtZW50LlxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvU3BsaXQgPSBlbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9JyR7dmFsdWV9J11gKTtcclxuICAgICAgICAgICAgLy9UT0RPOiB0ZXN0c1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQgJiYgYmxvY2tfZWxtZW50c1tlbGVtZW50VG9TcGxpdC5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaW5uZXJTcGFuLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCAmJiBlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vdW5ib2xkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEVsZW1lbnRzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHNwbGl0IGVsZW1lbnRzLCBpdHMgZXJyb3IhXHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uT2ZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke2tleX0nXWApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0QmxvY2tzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdEJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0QmxvY2tzLmNlbnRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50YXJnZXQgIT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0LCB7IGVsOiAnc3BhbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoaW5uZXJTcGFuLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RWxlbWVudHMgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzcGxpdEhUTUwgcmV0dXJuIG51bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgIT09IFwiYmxvY2tcIiAmJiBvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCAmJiBibG9ja0VsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShwYXJlbnRFbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC53cmFwKHdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHdyYXBwZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmIChvcHRpb25zLmFzID09PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwVGV4dE5vZGVXaXRoQXBwZW5kU3R5bGUgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLndyYXAoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICB9OyAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVJbmxpbmVTdHlsZSA9IChwYXJlbnROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiB0ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJlbnROb2RlLmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dE5vZGVXaXRoQXBwZW5kU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhdm9pZF9lbGVtZW50c1tub2RlLm5vZGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUlubGluZVN0eWxlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVJbmxpbmVTdHlsZShibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgLy8gQXJyYXkuZnJvbShibG9ja0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpLmZvckVhY2goZWw9PmVsLnN0eWxlW2tleV0gPSB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShibG9ja0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZVtrZXldID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwYXJnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBhcmdoLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBlbGVtZW50LndyYXAocGFyZ2gpO1xyXG4gICAgfVxyXG4gICAgaXNWQWxpZEtleVZhbHVlKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuICEhKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKTsgXHJcbiAgICB9XHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BsZWFzZSBjcmVhdGUgbmV3IGluc3RhbmNlLi4nKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWRFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgKHNlbGVjdGVkRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSB8fCBzZWxlY3RlZEVsZW1lbnQgPT09IHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VSdWxlcyhkYXRhKSB7XHJcbiAgICBjb25zdCBDb2xvclRleHREZWNvcmF0aW9uUnVsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEua2V5ID09PSBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBkYXRhLmVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0ndGV4dC1kZWNvcmF0aW9uJ11gKTtcclxuICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdHMgPSBzcGxpdEhUTUwoZGF0YS5lbGVtZW50LCB0ZXh0RGVjb3JhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdHMuY2VudGVyLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzcGxpdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUodGV4dERlY29yYXRpb24sICd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBgJHtkYXRhLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgUnVsZXMgPSBbXHJcbiAgICAgICAgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGVcclxuICAgIF1cclxuICAgIFJ1bGVzLmZvckVhY2gocnVsZSA9PiBydWxlKGRhdGEpKTtcclxufSIsIlxyXG5pbXBvcnQgeyBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vc3R5bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4uL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcmVzZXRVUkwgfSBmcm9tICcuLi9saW5rLnNlcnZpY2UnO1xyXG5cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaG93IGNhbiB3ZSBleHBvc2UgdGhlIGNvbGxlY3RlZFN0eWxlID8gXHJcbi8vcXVlc3Rpb246IHNob3VsZCB3ZSB1c2UgdGhpcyA/IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NdXRhdGlvbk9ic2VydmVyXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHNlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9uSW5zcGVjdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gSW5wc2VjdG9yID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5vbkluc3BlY3QgPSBvbkluc3BlY3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhdW5jaEluc3BlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub25JbnNwZWN0KSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluc3BlY3QoY29sbGVjdGVkU3R5bGUpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkRWxlbWVudCApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVRhZyA9IHNlbGVjdGVkRWxlbWVudC5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKGFUYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSkgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RMaW5rXCJdKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOmFUYWcucHJvdG9jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOnJlc2V0VVJMKGFUYWcuaHJlZiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6YVRhZy5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIikgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6YVRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXZpZXdcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGggPD0gMSAmJiAhdGhpcy50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXVuY2hJbnNwZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG4gICAgICAgIHRoaXMuRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG4vL2NsYXNzIGFuZCBzdHlsZSBub3QgaW5jbHVkZXMgeWV0Li5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRBdHRyaWJ1dGVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gY3VycmVjdEVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZihhdHRyc1tpXS5uYW1lICAhPT1cImNsYXNzXCIgJiYgYXR0cnNbaV0ubmFtZSAgIT09IFwic3R5bGVcIil7XHJcbiAgICAgICAgICAgICAgICBpZighYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQsZ2V0QWxsKXtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmKGdldEFsbCAgfHwgKCFnZXRBbGwgJiYgYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpKXtcclxuICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxBdHRycyhlbGVtZW50KXtcclxuICAgICAgaWYoZWxlbWVudCAmJiAhZWxlbWVudC5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlbGVtZW50IG5vdCBoYXZlIGF0dHJpYnV0ZXMuLlwiKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyPT5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKSlcclxuICB9IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIF9wYXJlbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChfcGFyZW50ICYmIF9wYXJlbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBfcGFyZW50LmNsYXNzTGlzdDtcclxuICAgICAgICBBcnJheS5mcm9tKG1hcCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMuZmluZEluZGV4KGMgPT4gYyA9PT0gbmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbn1cclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGlzIGV4cGVuc2l2ZSB0b28gbXVjaD8gXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCkge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcclxuICAgICAgICByZW1vdmVFbXB0eUNsYXNzKGVsZW1lbnQpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY2xhc3M9JyR7Y30nXWApKS5mb3JFYWNoKG5vZGUgPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5Q2xhc3Mobm9kZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbltjbGFzc10nKSkuY29uY2F0KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChjaGlsZCA9PiBjbGVhcihjaGlsZCkpO1xyXG59XHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBhYm91dCB0aGlzIG5hbWUgPyBcclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApKS5jb25jYXQodGhpcyk7XHJcbm5vZGVzLmZvckVhY2gobm9kZT0+bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xyXG59IiwiaW1wb3J0IHsgYmxvY2tfZWxtZW50cyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvYmxvY2tfZWxtc1wiO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy92b2lkX2VsbXNcIjtcclxuaW1wb3J0IHsgd2Fsa09uRWxlbWVudCwgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4uL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgcGFzdGVIdG1sQXRDYXJldCwgc2V0Q2FyZXRBdCxHZXRDbG9zZXN0QmxvY2tFbGVtZW50IH0gZnJvbSBcIi4uL3JhbmdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENzcywgc2V0U3R5bGVzIH0gZnJvbSBcIi4uL3N0eWxlLnNlcnZpY2VcIjtcclxuXHJcblxyXG5jb25zdCBub3JtYWxpemVQYXNlZEVsZW1lbnQgPSAodGFyZ2V0KSA9PiB7XHJcblxyXG4gIHdhbGtPbkVsZW1lbnQodGFyZ2V0LCAobm9kZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUgIT09IHRhcmdldCAmJiBub2RlLnBhcmVudEVsZW1lbnQgJiYgYmxvY2tfZWxtZW50c1tub2RlLm5vZGVOYW1lXSkge1xyXG4gICAgICBjb25zdCBibG9ja1BhcmVudCA9IG5vZGUucGFyZW50RWxlbWVudC5jbG9zZXN0KG5vZGUubm9kZU5hbWUpO1xyXG4gICAgICBpZiAoYmxvY2tQYXJlbnQgJiYgYmxvY2tQYXJlbnQgIT09IHRhcmdldCkge1xyXG4gICAgICAgIG5vZGUudW53cmFwKCk7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrUGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcHlQYXN0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgb3B0aW9ucykge1xyXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLnN0eWxlc1RvUGFzdGUgPSB0eXBlb2Ygb3B0aW9ucy5zdHlsZXNUb1Bhc3RlID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5zdHlsZXNUb1Bhc3RlIDogbnVsbDtcclxuICAgIHRoaXMub25Db3B5ID0gdHlwZW9mIG9wdGlvbnMub25Db3B5ID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLm9uQ29weSA6IG51bGw7XHJcbiAgICB0aGlzLm9uUGFzdGUgPSB0eXBlb2Ygb3B0aW9ucy5vblBhc3RlID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLm9uUGFzdGUgOiBudWxsO1xyXG4gICAgdGhpcy5wYXN0ZSA9IHRoaXMucGFzdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuY29weS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY29weShldmVudCkge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbC5yYW5nZUNvdW50OyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgIGxldCBjb3BpZWROb2RlID0gc2VsLmdldFJhbmdlQXQoaSkuY2xvbmVDb250ZW50cygpO1xyXG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcGllZE5vZGUpO1xyXG5cclxuICAgICAgICAgIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkTm9kZXMpLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50Q29waWVkTm9kZSA9IHNlbC5nZXRSYW5nZUF0KGkpLnN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGVkQ1NTID0gZ2V0SW5oZWlydENzcyhwYXJlbnRDb3BpZWROb2RlLCB0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb3BpZWROb2RlLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgIHNwYW4uc3R5bGUgPSBjb2xsZWN0ZWRDU1M7XHJcbiAgICAgICAgICAgICAgc2V0U3R5bGVzKHNwYW4sIGNvbGxlY3RlZENTUyk7XHJcbiAgICAgICAgICAgICAgbi53cmFwKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkX2VsZW1lbnRzW24ubm9kZU5hbWVdICYmIG4ubm9kZU5hbWUgIT09IFwiQlJcIikge1xyXG4gICAgICAgICAgICAgIG4ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgPSBjb250YWluZXI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LnNlbGVjdGlvbikge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uLnR5cGUgPT09IFwiVGV4dFwiKSB7XHJcbiAgICAgICAgaHRtbCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLmh0bWxUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCdzdHlsZWl0L2h0bWwnLCBodG1sLmlubmVySFRNTCk7XHJcbiAgICBldmVudC5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQvcGxhaW4nLCBodG1sLnRleHRDb250ZW50KTtcclxuICAgIGlmKHRoaXMub25Db3B5KXtcclxuICAgICAgdGhpcy5vbkNvcHkoZXZlbnQpO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcGFzdGUoZXZlbnQpIHtcclxuICAgIHRoaXMucGFzdGVXaXRoU3R5bGVzKGV2ZW50KTtcclxuICB9O1xyXG4gIFxyXG4gIHBhc3RlUGxhaW5UZXh0KGV2ZW50KSB7XHJcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY29udGVudCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnRyaW0oKTtcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL1xcbi9nLCBcIjxici8+XCIpXHJcbiAgICBpZighY29udGVudC50cmltKCkpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpZCA9IFwidGhpcy1pcy10ZW1wLWNvbnRhaW5lci1mb3ItcGxhaW4tdGV4dFwiO1xyXG5cclxuICAgIC8vIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnR0ZXh0JywgZmFsc2UsIGNvbnRlbnQpO1xyXG4gICAgcGFzdGVIdG1sQXRDYXJldChgPHAgaWQ9XCIke2lkfVwiPiR7Y29udGVudH08L3A+YCk7XHJcbiAgICBjb25zdCBjb3BpZWRFbGVtZW50ID0gdGhpcy50YXJnZXQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgICBpZiAoY29waWVkRWxlbWVudCkge1xyXG4gICAgICBzZXRDYXJldEF0KGNvcGllZEVsZW1lbnQpO1xyXG5cclxuICAgICAgaWYgKGNvcGllZEVsZW1lbnQucGFyZW50RWxlbWVudCA9PT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICBjb3BpZWRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvcGllZEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb3BpZWRFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBBcnJheS5mcm9tKHRoaXMudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBpZiAoIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vblBhc3RlKSB7XHJcbiAgICAgIHRoaXMub25QYXN0ZShldmVudCxcInBsYWluVGV4dFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgcGFzdGVXaXRoU3R5bGVzKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICBjb25zdCBjb3BpZWQgPSBkYXRhLmdldERhdGEoJ3N0eWxlaXQvaHRtbCcpLnRyaW0oKTtcclxuICAgIC8vb24gY29waWVkIG9uIHRoZSBlZGl0b3IgbG9jYWx5XHJcbiAgICBpZiAoY29waWVkKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gXCJ0aGlzLWlzLXRlbXAtaWQtZm9yLXBhc3RlLWNvbnRlbnQtaW50by10aGUtZG9tXCI7XHJcbiAgICAgIHBhc3RlSHRtbEF0Q2FyZXQoYDxkaXYgaWQ9XCIke2lkfVwiPiR7Y29waWVkfTwvZGl2PmApO1xyXG4gICAgICBjb25zdCBjb3BpZWRFbGVtZW50ID0gdGhpcy50YXJnZXQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XHJcbiAgICAgIGxldCBwYXJlbnRCbG9jayA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoY29waWVkRWxlbWVudCk7XHJcbiAgICAgIGlmIChwYXJlbnRCbG9jayAmJiBjb3BpZWRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGlmIChibG9ja19lbG1lbnRzW2NvcGllZEVsZW1lbnQuY2hpbGRyZW5bMF0ubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICBjb3BpZWRFbGVtZW50LmNoaWxkcmVuWzBdLnVud3JhcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDYXJldEF0KGNvcGllZEVsZW1lbnQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZVBhc2VkRWxlbWVudChwYXJlbnRCbG9jayk7XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudEJsb2NrICYmIGNvcGllZEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBjb3BpZWRFbGVtZW50LmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgY29waWVkRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShmaXJzdENoaWxkLCBjb3BpZWRFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBzYW1lTm9kZSA9IGZpcnN0Q2hpbGQuY2xvc2VzdChmaXJzdENoaWxkLm5vZGVOYW1lKTtcclxuICAgICAgICBpZiAoc2FtZU5vZGUpIHtcclxuICAgICAgICAgIGZpcnN0Q2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudEJsb2NrLmluc2VydEFmdGVyKGNvcGllZEVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIG5vcm1hbGl6ZVBhc2VkRWxlbWVudChjb3BpZWRFbGVtZW50KTtcclxuICAgICAgc2V0Q2FyZXRBdChjb3BpZWRFbGVtZW50KTtcclxuICAgICAgY29waWVkRWxlbWVudC51bndyYXAoKTtcclxuXHJcbiAgICAgIHdyYXBOYWtlZFRleHROb2Rlcyh0aGlzLnRhcmdldCk7XHJcbiAgICAgIGlmICh0aGlzLm9uUGFzdGUpIHtcclxuICAgICAgICB0aGlzLm9uUGFzdGUoZXZlbnQsXCJmb3JtYXR0ZWRUZXh0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGFzdGVQbGFpblRleHQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG4gIH1cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIHRoaXMucGFzdGUpO1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5jb3B5KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXRTdHlsZSwgSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcgfSBmcm9tIFwiLi9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBMZXZlbHMgZnJvbSAnLi4vY29uc3RhbnRzL0xldmVscy5qc29uJztcclxuaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuLi9jb25zdGFudHMvdm9pZF9lbG1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcE5ha2VkVGV4dE5vZGVzKHRhcmdldCl7XHJcbiAgICAvLyB0YXJnZXQgaXMgdGhlIG1haW4gY29udGVudGVkaXRhYmxlIGVsZW1lbnRcclxuICAgIC8vIHNvIFxyXG4gICAgQXJyYXkuZnJvbSh0YXJnZXQuY2hpbGROb2RlcykuZm9yRWFjaChjPT57XHJcbiBcclxuICAgICAgICBpZihjLm5vZGVUeXBlID09PTEgJiYgIWMudGV4dENvbnRlbnQudHJpbSgpICYmIGMuY2hpbGRyZW4ubGVuZ3RoPT09MCAmJiAhdm9pZF9lbGVtZW50c1tjLm5vZGVOYW1lXSl7XHJcbiAgICAgICAgICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYy5ub2RlVHlwZSA9PT0gMyAmJiBjLnBhcmVudEVsZW1lbnQpe1xyXG4gICAgICAgICAgICBjLnBhcmVudEVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCgoYy5ub2RlVHlwZSA9PT0zICYmIGMucGFyZW50RWxlbWVudCA9PT0gdGFyZ2V0KSkgJiYgIWMucGFyZW50RWxlbWVudC5jbG9zZXN0KFwicFwiKSAmJiBjLnRleHRDb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgYy53cmFwKHApO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0ICBmdW5jdGlvbiB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpIHtcclxuICAgIGlmKCFub2RlKSByZXR1cm4gbnVsbDtcclxuICAgIGZ1bmMobm9kZSk7XHJcbiAgICBub2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgd2Fsa1RoZURPTShub2RlLCBmdW5jKTtcclxuICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCAgZnVuY3Rpb24gd2Fsa09uRWxlbWVudChub2RlLCBmdW5jKSB7XHJcbiAgICBpZighbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBjb250aW51ZVdpdGggPSBmdW5jKG5vZGUpO1xyXG4gICAgaWYoY29udGludWVXaXRoKXtcclxuICAgICAgICBub2RlID0gY29udGludWVXaXRoO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgIHdhbGtPbkVsZW1lbnQobm9kZSwgZnVuYyk7XHJcbiAgICAgIG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcclxuICAgIH1cclxuICB9IFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRFbGVtZW50KCkge1xyXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgdmFyIGFuY05vZGUgPSBub2RlLmZvY3VzTm9kZTtcclxuICAgICAgICBpZiAoYW5jTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgYW5jTm9kZSA9IGFuY05vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBlbCA9IChhbmNOb2RlLm5vZGVUeXBlID09PSAzID8gYW5jTm9kZS5wYXJlbnROb2RlIDogbm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmNOb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvblRvRWxlbWVudChqc29uT2JqZWN0LCBwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAvL1RPRE86IGNyZWF0ZSBwYXJlbnRlbGVtZW50IGFuZCBqc29ub2JqZWN0IHZhbGlkYXRpb24gICBcclxuICAgIGNvbnN0IHJlbmRlckF0dHJzID0gKGpzRWxlbWVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gWy4uLmpzRWxlbWVudC5jbGFzc0xpc3RdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNFbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoanNFbGVtZW50LnN0eWxlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbGxlY3RlZFN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IG90aGVyIGF0dHJzLi4uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChqc0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGpzRWxlbWVudC50YWc7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlzU2hvdWxkUmVuZGVyQXR0cnM7XHJcbiAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShqc0VsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmhyZWYgPSBqc0VsZW1lbnQuaHJlZjtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0ID0ganNFbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZW5kZXJBdHRycyhqc0VsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICghcGFyZW50RWxlbWVudCAmJiBqc29uT2JqZWN0LnR5cGUgPT09IExldmVsc1snMCddKSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzb25PYmplY3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdC5jaGlsZHJlbikpIHtcclxuICAgICAgICBqc29uT2JqZWN0LmNoaWxkcmVuLmZvckVhY2goanNDaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoanNDaGlsZCk7XHJcbiAgICAgICAgICAgIGlmIChodG1sRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBKc29uVG9FbGVtZW50KGpzQ2hpbGQsIGh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbnQgY3JlYXRlIGRvbSBlbGVtZW50IGZyb20ganNvbicsIGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFRvSnNvbihub2RlLCBsZXZlbCkge1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIChsZXZlbCkgIT09IFwibnVtYmVyXCIpIGxldmVsID0gMDtcclxuICAgIGNvbnN0IG5vZGVUeXBlID0gbm9kZS5ub2RlTmFtZTtcclxuICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzID0gdHJ1ZTtcclxuICAgIGxldCBqc29uID0ge307XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKExldmVsc1tsZXZlbF0pIHtcclxuICAgICAgICBqc29uLnR5cGUgPSBMZXZlbHNbbGV2ZWxdO1xyXG4gICAgICAgIGxldmVsKys7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCIjdGV4dFwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3F1ZXN0aW9uOiByZXBsYWNlIFxcbiA/XHJcbiAgICAgICAgICAgIGlmICghanNvbi50ZXh0Q29udGVudC50cmltKCkpIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi5ocmVmID0gbm9kZS5ocmVmO1xyXG4gICAgICAgICAgICBqc29uLnRhcmdldCA9IG5vZGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICAvL1RPRE86IHNob3VsZCB3ZSB1bndyYXAgdGhpcyBub2RlID8gXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzKSB7XHJcbiAgICAgICAgLy9UT0RPOiBnZXQgYXR0cnMgXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShub2RlKTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3R5bGUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAganNvbi5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAganNvbi5jbGFzc0xpc3QgPSBbLi4ubm9kZS5jbGFzc0xpc3RdO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNoaWxkcmVuID0gWy4uLm5vZGUuY2hpbGROb2Rlc10ubWFwKChjbikgPT4gZWxlbWVudFRvSnNvbihjbiwgbGV2ZWwpKS5maWx0ZXIodiA9PiB2KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuXHJcbn0iLCJleHBvcnQgY29uc3QgRVZFTlRTID0ge1xyXG4gIFxyXG59IiwiaW1wb3J0IHsgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4uL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCwgaW5zZXJ0QWZ0ZXIsIHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge3ZvaWRfZWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92b2lkX2VsbXMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlQcmVzcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0ga2V5UHJlc3MgPT4gdGFyZ2V0IGlzIG51bGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbktleVByZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbktleVByZXNzID0gb3B0aW9ucy5vbktleVByZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMua2V5cHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csIFwiXCIpLnJlcGxhY2UoL1tcXHUyMDBCLVxcdTIwMERcXHVGRUZGXS9nLCAnJykgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmKCF0YXJnZXQudGV4dENvbnRlbnQpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwYXN0ZUh0bWxBdENhcmV0KFwiICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgd3JhcE5ha2VkVGV4dE5vZGVzKHRoaXMudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXN0ZUh0bWxBdENhcmV0KFwiPGJyLz5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChzZWxlY3Rpb24uYW5jaG9yTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCA9PT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlMmV4dHJhY3QgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlMmV4dHJhY3QuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5zZXRTdGFydChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmQoYmxvY2tFbGVtZW50LCBibG9ja0VsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICYmICF0aGlzLnRhcmdldC50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCAhPT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGJsb2NrRWxlbWVudCAmJiAhYy50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tFbGVtZW50LmlubmVySFRNTCA9IGJsb2NrRWxlbWVudC5pbm5lckhUTUwgKyBcIiYjODIwMztcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhcmV0QXQoYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2NGcmFnbWVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2NGcmFnbWVudC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxICYmICFjaGlsZC50ZXh0Q29udGVudC50cmltKCkgJiYgIXZvaWRfZWxlbWVudHNbY2hpbGQubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChibG9ja0VsZW1lbnQubm9kZU5hbWUgfHwgXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jRnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbC50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIiYjODIwMztcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGluc2VydEFmdGVyKGVsLCBibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbC5wcmV2aW91c1NpYmxpbmcuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIubmFtZSxhdHRyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuYXBwZW5kQ2hpbGQoYnIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICB3cmFwTmFrZWRUZXh0Tm9kZXModGhpcy50YXJnZXQsIHsgZXhwZWN0OiBibG9ja0VsZW1lbnQgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJldEF0KGVsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5vbktleVByZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlQcmVzcyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5EZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlwcmVzcyk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgICBjb25zdCBUQVJHRVRTID0ge1xyXG4gICAgX2JsYW5rOiBcIl9ibGFua1wiLFxyXG4gICAgX3NlbGY6IFwiX3NlbGZcIixcclxuICAgIF9wYXJlbnQ6IFwiX3BhcmVudFwiLFxyXG4gICAgX3RvcDogXCJfdG9wXCJcclxufVxyXG5leHBvcnQgIGNvbnN0IHJlc2V0VVJMID0gKHNyYykgPT4ge1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL2h0dHBzOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvaHR0cDovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL21haWx0bzovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL3RlbDovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL1xcLy9nLCAnJyk7XHJcbiAgICByZXR1cm4gc3JjO1xyXG59XHJcbmV4cG9ydCAgIGNvbnN0IGNyZWF0ZVRlbXBMaW5rRWxlbWVudCA9IChocmVmKSA9PiB7XHJcbiAgICBjb25zdCBBdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBBdGFnLmhyZWYgPSBocmVmO1xyXG4gICAgcmV0dXJuIEF0YWc7XHJcbn0iLCJpbXBvcnQgeyBibG9ja19lbG1lbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9ibG9ja19lbG1zXCI7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIChvcHRpb25zKSAhPT0gXCJvYmplY3RcIikgb3B0aW9ucyA9IHt9O1xyXG4gIGxldCBpbm5lclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbnMuZWwgfHwgXCJzcGFuXCIpO1xyXG4gIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKS5mb3JFYWNoKGNoaWxkID0+IGlubmVyU3Bhbi5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXJTcGFuKTtcclxuICByZXR1cm4gaW5uZXJTcGFuO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpIHtcclxuICBpZiAoIWVsZW1lbnQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICB9XHJcbiAgaWYgKGJsb2NrX2VsbWVudHNbZWxlbWVudC5ub2RlTmFtZV0pIHJldHVybiBlbGVtZW50O1xyXG4gIGxldCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICB3aGlsZSAocGFyZW50RWxlbWVudCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnRFbGVtZW50KS5kaXNwbGF5ID09PSBcImlubGluZVwiKSB7XHJcbiAgICBpZiAocGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgaWYocGFyZW50RWxlbWVudCAgJiYgYmxvY2tfZWxtZW50c1twYXJlbnRFbGVtZW50Lm5vZGVOYW1lXSl7XHJcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSYW5nZVdpdGhCbG9ja0VsZW1lbnQobGltaXRFbGVtZW50KSB7XHJcbiAgY29uc3Qgd3JhcEVsZW1lbnRXaXRoQmxvY2sgPSAoZWwpID0+IHtcclxuICAgIGxldCB3RWwgPSBcImRpdlwiO1xyXG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSBcIlNQQU5cIikge1xyXG4gICAgICB3RWwgPSBcInBcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdFbCk7XHJcbiAgICBlbC53cmFwKHdyYXBwZXIpO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgfVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgbGV0IG5vZGVzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICBub2Rlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IGJsb2NrRWwgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsKTtcclxuICAgIGlmIChibG9ja0VsKSB7XHJcbiAgICAgIGlmIChibG9ja0VsLmlzY2hpbGRPZihsaW1pdEVsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmRlZCA9IGVsZW1lbnRzLmZpbmQoYmxvY2sgPT4gYmxvY2tFbC5pc2NoaWxkT2YoYmxvY2spKTtcclxuICAgICAgICBpZiAoIWZvdW5kZWQpXHJcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGJsb2NrRWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICAgIGVsZW1lbnRzLnB1c2goX3dyYXBwZXIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBfd3JhcHBlciA9IHdyYXBFbGVtZW50V2l0aEJsb2NrKGVsKTtcclxuICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcblxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBub2Rlczogbm9kZXMsXHJcbiAgICBibG9ja3M6IGVsZW1lbnRzXHJcbiAgfVxyXG4gIHJldHVybiBlbGVtZW50cztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEVsZW1lbnQod3JhcFRhZykge1xyXG4gIGNvbnN0IHJhbmdlcyA9IGdldFJhbmdlcygpO1xyXG4gIHJldHVybiByYW5nZXMubWFwKHIgPT4ge1xyXG4gICAgcmV0dXJuIHdyYXBSYW5nZVRleHQod3JhcFRhZywgcik7XHJcbiAgfSkuZmxhdCgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZXMoKSB7XHJcbiAgbGV0IHJhbmdlcyA9IFtdO1xyXG5cclxuICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsLnJhbmdlQ291bnQ7IGkrKykge1xyXG4gICAgcmFuZ2VzW2ldID0gc2VsLmdldFJhbmdlQXQoaSk7XHJcbiAgfVxyXG4gIHJldHVybiByYW5nZXM7XHJcbn1cclxuLy8gcmV0dXJuIGFsbCB0ZXh0IG5vZGVzIHRoYXQgYXJlIGNvbnRhaW5lZCB3aXRoaW4gYGVsYFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dE5vZGVzKGVsKSB7XHJcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XHJcblxyXG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50LFxyXG4gICAgd2Fsa2VyID0gZG9jLmNyZWF0ZVRyZWVXYWxrZXIoZWwsIE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSksXHJcbiAgICB0ZXh0Tm9kZXMgPSBbXSxcclxuICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcclxuXHJcbiAgd2hpbGUgKG5vZGUpIHtcclxuICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gIH1cclxuICByZXR1cm4gdGV4dE5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlc0ludGVyc2VjdChyYW5nZUEsIHJhbmdlQikge1xyXG4gIHJldHVybiByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19TVEFSVCwgcmFuZ2VCKSA9PT0gLTEgJiZcclxuICAgIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuU1RBUlRfVE9fRU5ELCByYW5nZUIpID09PSAxXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkge1xyXG4gIHZhciByYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgdHJ5IHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSlcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q2hhcmFjdGVyT2Zmc2V0V2l0aGluKGVsZW1lbnQpIHtcclxuICB2YXIgY2FyZXRPZmZzZXQgPSAwO1xyXG4gIHZhciBkb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudDtcclxuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XHJcbiAgdmFyIHNlbDtcclxuICBpZiAodHlwZW9mIHdpbi5nZXRTZWxlY3Rpb24gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgc2VsID0gd2luLmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5yYW5nZUNvdW50ID4gMCkge1xyXG4gICAgICB2YXIgcmFuZ2UgPSB3aW4uZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgdmFyIHByZUNhcmV0UmFuZ2UgPSByYW5nZS5jbG9uZVJhbmdlKCk7XHJcbiAgICAgIHByZUNhcmV0UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBwcmVDYXJldFJhbmdlLnNldEVuZChyYW5nZS5lbmRDb250YWluZXIsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKChzZWwgPSBkb2Muc2VsZWN0aW9uKSAmJiBzZWwudHlwZSAhPSBcIkNvbnRyb2xcIikge1xyXG4gICAgdmFyIHRleHRSYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgdmFyIHByZUNhcmV0VGV4dFJhbmdlID0gZG9jLmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICBwcmVDYXJldFRleHRSYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgIHByZUNhcmV0VGV4dFJhbmdlLnNldEVuZFBvaW50KFwiRW5kVG9FbmRcIiwgdGV4dFJhbmdlKTtcclxuICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRUZXh0UmFuZ2UudGV4dC5sZW5ndGg7XHJcbiAgfVxyXG4gIHJldHVybiBjYXJldE9mZnNldDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FyZXRBdChlbGVtZW50LCBjaGFySW5kZXggPSAwKSB7XHJcblxyXG4gIHZhciBub2RlID0gZWxlbWVudDtcclxuICBub2RlLmZvY3VzKCk7XHJcbiAgdmFyIHRleHROb2RlID0gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpO1xyXG4gIGlmICh0ZXh0Tm9kZS5sZW5ndGggPT09IDApIHtcclxuICAgIHRleHROb2RlID0gZWxlbWVudDtcclxuICAgIHdoaWxlICh0ZXh0Tm9kZSAmJiB0ZXh0Tm9kZS5maXJzdENoaWxkICYmIHRleHROb2RlLm5vZGVUeXBlICE9PSAzKSB7XHJcbiAgICAgIHRleHROb2RlID0gdGV4dE5vZGUuZmlyc3RDaGlsZDtcclxuICAgIH1cclxuICAgIGlmKHRleHROb2RlKXtcclxuICAgICAgdGV4dE5vZGUgPSBbdGV4dE5vZGVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICByYW5nZS5zZXRTdGFydCh0ZXh0Tm9kZVswXSwgY2hhckluZGV4KTtcclxuICByYW5nZS5zZXRFbmQodGV4dE5vZGVbMF0sIGNoYXJJbmRleCk7XHJcbiAgcmFuZ2UuY29sbGFwc2UodHJ1ZSlcclxuICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFzdGVIdG1sQXRDYXJldChodG1sKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgY29uc3QgY29udGVudGVkaXRhYmxlID0gc2VsZWN0ZWRFbGVtZW50LmNsb3Nlc3QoXCJbY29udGVudGVkaXRhYmxlXVwiKTtcclxuICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgaWYgKGNvbnRlbnRlZGl0YWJsZSkge1xyXG4gICAgaWYgKCFjb250ZW50ZWRpdGFibGUuY29udGVudEVkaXRhYmxlKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gIH1cclxuICBpZiAoIWlzVmFsaWQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICB2YXIgc2VsLCByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgLy8gSUU5IGFuZCBub24tSUVcclxuICAgIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xyXG5cclxuICAgICAgLy8gUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgd291bGQgYmUgdXNlZnVsIGhlcmUgYnV0IGlzXHJcbiAgICAgIC8vIG9ubHkgcmVsYXRpdmVseSByZWNlbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cclxuICAgICAgLy8gc29tZSBicm93c2VycyAoSUU5LCBmb3Igb25lKVxyXG4gICAgICBsZXQgZWw7XHJcbiAgICAgIGlmICh0eXBlb2YgKGh0bWwpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIChodG1sKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGVsID0gaHRtbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIG5vZGUsIGxhc3ROb2RlO1xyXG4gICAgICB3aGlsZSAoKG5vZGUgPSBlbC5maXJzdENoaWxkKSkge1xyXG4gICAgICAgIGxhc3ROb2RlID0gZnJhZy5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgfVxyXG4gICAgICByYW5nZS5pbnNlcnROb2RlKGZyYWcpO1xyXG5cclxuICAgICAgLy8gUHJlc2VydmUgdGhlIHNlbGVjdGlvblxyXG4gICAgICBpZiAobGFzdE5vZGUpIHtcclxuICAgICAgICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZXRTdGFydEFmdGVyKGxhc3ROb2RlKTtcclxuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkge1xyXG4gIGlmIChyYW5nZS5pbnRlcnNlY3RzTm9kZSkge1xyXG4gICAgcmV0dXJuIHJhbmdlLmludGVyc2VjdHNOb2RlKG5vZGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByYW5nZXNJbnRlcnNlY3QocmFuZ2UsIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSkge1xyXG4gIHZhciBjb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcclxuICAgIG5vZGVzID0gZ2V0VGV4dE5vZGVzKGNvbnRhaW5lci5wYXJlbnROb2RlIHx8IGNvbnRhaW5lcilcclxuXHJcbiAgcmV0dXJuIG5vZGVzLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJhbmdlSW50ZXJzZWN0c05vZGUocmFuZ2UsIG5vZGUpICYmIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKVxyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKSB7XHJcbiAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoID4gMFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XHJcbiAgaWYgKGVsLnBhcmVudE5vZGUpIHtcclxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIG5vZGUpIHtcclxuICBpZiAodHlwZW9mIG5vZGUucGFyZW50Tm9kZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmVtb3ZlRWxlbWVudChyZXBsYWNlbWVudE5vZGUpO1xyXG4gICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXBsYWNlbWVudE5vZGUsIG5vZGUpO1xyXG4gICAgcmVtb3ZlRWxlbWVudChub2RlKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFRleHQobm9kZSkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgcmFuZ2UubW92ZVRvRWxlbWVudFRleHQobm9kZSk7XHJcbiAgICByYW5nZS5zZWxlY3QoKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBzZWxlY3QgdGV4dCBpbiBub2RlOiBVbnN1cHBvcnRlZCBicm93c2VyLlwiKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcclxuICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSkge1xyXG4gIHZhciBzdGFydE5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcixcclxuICAgIGVuZE5vZGUgPSByYW5nZS5lbmRDb250YWluZXIsXHJcbiAgICBzdGFydE9mZnNldCA9IHJhbmdlLnN0YXJ0T2Zmc2V0LFxyXG4gICAgZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwTm9kZShub2RlKSB7XHJcbiAgICB2YXIgY3VycmVudFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSxcclxuICAgICAgY3VycmVudFdyYXBwZXIgPSB3cmFwcGVyRWwuY2xvbmVOb2RlKClcclxuXHJcbiAgICBjdXJyZW50UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgaWYgKG5vZGUgPT09IHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgY3VycmVudFJhbmdlLnNldFN0YXJ0KG5vZGUsIHN0YXJ0T2Zmc2V0KVxyXG4gICAgICBzdGFydE5vZGUgPSBjdXJyZW50V3JhcHBlclxyXG4gICAgICBzdGFydE9mZnNldCA9IDBcclxuICAgIH1cclxuICAgIGlmIChub2RlID09PSBlbmROb2RlICYmIGVuZE5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgY3VycmVudFJhbmdlLnNldEVuZChub2RlLCBlbmRPZmZzZXQpXHJcbiAgICAgIGVuZE5vZGUgPSBjdXJyZW50V3JhcHBlcjtcclxuICAgICAgZW5kT2Zmc2V0ID0gMVxyXG4gICAgfVxyXG4gICAgY3VycmVudFJhbmdlLnN1cnJvdW5kQ29udGVudHMoY3VycmVudFdyYXBwZXIpXHJcbiAgICByZXR1cm4gY3VycmVudFdyYXBwZXJcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE5vZGVzKCkge1xyXG4gIHZhciBub2RlcywgcmFuZ2U7XHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VUZXh0KHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICBpZiAodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICB9XHJcblxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3JhcHBlckVsID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGFzc3VtZSBpdCdzIGEgdGFnbmFtZVxyXG4gICAgd3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gIH1cclxuXHJcbiAgd3JhcE5vZGUgPSBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBub2Rlcy5tYXAod3JhcE5vZGUpO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3QgX29wdGlvbnMgPSB7IHJlbW92ZTogdHJ1ZSB9O1xyXG4gIE9iamVjdC5hc3NpZ24oX29wdGlvbnMsIG9wdGlvbnMpO1xyXG4gIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnNldEJhc2VBbmRFeHRlbnQoZmlyc3RGbGFnLCAwLCBsYXN0RmxhZywgbGFzdEZsYWcuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gIGlmIChfb3B0aW9ucy5yZW1vdmUpIHtcclxuICAgIFtmaXJzdEZsYWcsIGxhc3RGbGFnXS5mb3JFYWNoKGUgPT4gZS51bndyYXAoKSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25GbGFncyhmaXJzdEVsZW1lbnQsIExhc3RFbGVtZW50KSB7XHJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIGNvbnN0IGZpcnN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgZmlyc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIGZpcnN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgY29uc3QgbGFzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGxhc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIExhc3RFbGVtZW50LnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMClcclxuXHJcbiAgZmlyc3RFbGVtZW50LnByZXBlbmQoZmlyc3RGbGFnKTsgLy9TZXQgZmxhZyB0aGUgZmlyc3RcclxuICBMYXN0RWxlbWVudC5hcHBlbmRDaGlsZChsYXN0RmxhZyk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gIHJldHVybiB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRIVE1MKCkge1xyXG4gIHZhciByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgaWYgKHJhbmdlLmNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY29udGVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgcmFuZ2U6IHJhbmdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2VsZWN0aW9uKCkge1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlU2VsZWN0aW9uKHJhbmdlKSB7XHJcbiAgaWYgKHJhbmdlKSB7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiByYW5nZS5zZWxlY3QpIHtcclxuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3NOYW1lIH0gZnJvbSBcIi4vY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlUnVsZXMgfSBmcm9tIFwiLi4vcnVsZXMvcnVsZXNcIjtcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGludGFpbFN0eWxlID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuXHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudCkpIHtcclxuICAgICAgICBsZXQgbWFwID0gZ2V0U3R5bGUoY3VycmVjdEVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gbWFwKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcFtzdHlsZV07XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb24gIGNvdWxkIGJlIHR3aWNlIGxpa2UgdW5kZXJsaW5lIGFuZCBzdHJpa2UgdGhlcm91Z2guLiBcclxuICAgICAgICAgICAgICAgIGlmICghaW50YWlsU3R5bGVbc3R5bGVdKVxyXG4gICAgICAgICAgICAgICAgICAgIGludGFpbFN0eWxlW3N0eWxlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlY3RFbGVtZW50ID0gY3VycmVjdEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnRhaWxTdHlsZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBlbC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgfSlcclxufVxyXG4vL1RPR0dMRVxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgaXNPbikge1xyXG4gICAgaWYgKGlzT24pIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0gKyBcIiBcIiArIHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBub3JtYWxpemVTdHlsZShlbGVtZW50KTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShlbGVtZW50KTtcclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke3ZhbHVlfSddYCkpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnN0eWxlW2tleV0gPSBjaGlsZC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGNoaWxkKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUoY2hpbGQpO1xyXG4gICAgfSlcclxufVxyXG4vL0VYVEVORFxyXG4vL1RPRE86IGZpeCBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwganNvblN0eWxlKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uU3R5bGUpIHtcclxuICAgICAgICBpZiAoanNvblN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBqc29uU3R5bGVba2V5XTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vVE9HR0xFXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgaWYoa2V5ID09PSBcImNvbG9yXCIpe1xyXG4gICAgICAgIFVzZVJ1bGVzKHtlbGVtZW50OmVsZW1lbnQsa2V5Oidjb2xvcicsdmFsdWU6dmFsdWV9KTtcclxuICAgIH1cclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShlbCk7XHJcbiAgICB9KTtcclxuICAgIC8vZXhwZXJpbWVudGFsOiBzdHlsZSB0aGUgdGV4dCBkZWNvcmF0aW9ucyB3aXRoIGNvbG9yLi5cclxuICAgIC8vVE9ETzpyZXZpZXdcclxuICAgIC8vIFVzZVJ1bGVzKHtlbGVtZW50OmVsZW1lbnQsa2V5OmtleSx2YWx1ZTp2YWx1ZX0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50ID0gKGNvbm5lY3RlY0VsZW1lbnQpID0+eyAgIFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0U2VsZWN0ZWRFbGVtZW50KCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgcmV0dXJuIGdldEluaGVpcnRDc3Moc2VsZWN0ZWRFbGVtZW50LGNvbm5lY3RlY0VsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplU3R5bGUoZWxlbWVudCkge1xyXG4gICAgaWYoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGlmICghc3R5bGUpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY29sbGVjdFN0eWxlcyA9IGdldFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbGxlY3RTdHlsZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbGxlY3RTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7Y29sbGVjdFN0eWxlc1trZXldfSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBKc29uT2JqZWN0VG9TdHlsZVN0cmluZyhzdHlsZXMpIHtcclxuICAgIGxldCBjb2xsZWN0U3R5bGVzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcclxuICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXNba2V5XTtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5wdXNoKGAke2tleX06JHtzdHlsZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sbGVjdFN0eWxlcy5qb2luKCc7Jyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlKGVsKSB7XHJcbiAgICBpZiAoIWVsIHx8ICFlbC5zdHlsZSkgcmV0dXJuIHt9O1xyXG4gICAgbGV0IHN0eWxlcyA9IHt9O1xyXG4gICAgbGV0IHN0eWxlID0gZWwuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBzdHlsZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbGxlY3RTdHlsZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3RTdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBzdHlsZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleVZhbHVlWzFdICYmIGtleVZhbHVlWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXlWYWx1ZVswXS50cmltKCldID0ga2V5VmFsdWVbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG59IiwiaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3NOYW1lIH0gZnJvbSBcIi4vY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1lcmdlTm9kZUNvbnRlY3QsIG1lcmdlVHdvTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGlzL21lcmdlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgLSBlbGVtZW50IHRvIG5vcm1hbGl6ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQoZWwpIHtcclxuICAgIGNvbnN0IHJlY3Vyc2UgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgcmVjdXJzZShjaGlsZCk7XHJcbiAgICAgICAgICAgIF9ub3JtYWxpemUoY2hpbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgbWVyZ2VOb2Rlc1N0eWxlcyA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudCA9IHdyYXBwZXIubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXh0RWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gbWVyZ2VUd29Ob2Rlcyh3cmFwcGVyLCBuZXh0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VkIHx8IHdyYXBwZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXJnZU5vZGVzQ29udGVudCA9IGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAod3JhcHBlciAmJiB3cmFwcGVyLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlTm9kZUNvbnRlY3Qod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VkIHx8IHdyYXBwZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZXJnZWRTdHlsZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWVyZ2VkQ29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IF9ub3JtYWxpemUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgbWVyZ2VkU3R5bGVzID0gbWVyZ2VOb2Rlc1N0eWxlcyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIG1lcmdlZENvbnRlbnQgPSBtZXJnZU5vZGVzQ29udGVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0gd2hpbGUgKG1lcmdlZENvbnRlbnQgJiYgZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBlbC5ub3JtYWxpemUoKTtcclxuICAgIHJlY3Vyc2UoZWwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemUoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyAgY29uc3QgdGFncyA9IFtcIlNUUklLRVwiLCBcIkVNXCIsIFwiSVwiLCBcIkJcIiwgXCJTVFJPTkdcIiwgXCJVXCIsIFwiQVwiXTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiBub3JtYWxpenIgYXR0cmlidXRlcyAobm86c3R5bGUsY2xhc3NOYW1lKVxyXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgPT09IFwiU1BBTlwiICYmICghZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgfHwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgY29uc3QgdW53cmFwcGVkID0gZWxlbWVudC51bndyYXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRleHROb2RlcyAtIHRleHRub2RlIHRvIHJlbW92ZSB0aGUgemVybyBzcGFjZSBsaWtlIDogdTIwMEJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVaZXJvU3BhY2UodGV4dE5vZGVzKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGV4dE5vZGVzKSkge1xyXG4gICAgICAgIHRleHROb2RlcyA9IFt0ZXh0Tm9kZXNdO1xyXG4gICAgfVxyXG4gICAgdGV4dE5vZGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgZWwucGFyZW50RWxlbWVudCAmJiBlbC5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIlRFWFQtU0VMRUNUSU9OXCIpIHtcclxuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbiIsImNsYXNzIERvbVV0aWxpcyB7XHJcblxyXG5cclxuICBpc0VsZW1lbnQob2JqKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKG9iai5ub2RlVHlwZSA9PT0gMSkgJiYgKHR5cGVvZiBvYmouc3R5bGUgPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gXCJvYmplY3RcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHdyYXAoZWwsIHdyYXBwZXIpIHtcclxuICAgIC8vZWwgc2hvdWxkIGJlIGFycmF5XHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xyXG4gICAgICBlbGVtZW50cyA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudHMgPSBbZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhcmVudHMgPSBlbGVtZW50cy5tYXAoZSA9PiBlLnBhcmVudE5vZGUpO1xyXG4gICAgdmFyIHBhcmVudHNEaWZmID0gcGFyZW50cy5maWx0ZXIoKHAsIF8sIHNlbGYpID0+IHsgcmV0dXJuIHNlbGZbMF0gIT09IHAgfSk7XHJcbiAgICBpZiAocGFyZW50c0RpZmYubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbd3JhcF0gZm91bmQgJHtwYXJlbnRzRGlmZi5sZW5ndGh9IGRpZmZlcmVudCBwYXJlbnRzIPCfmIVgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGFyZW50c1swXS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNbMF0pXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKF9lbCA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKF9lbCkpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEb21VdGlsaXMoKTsgXHJcblxyXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7aWYobnVsbCE9PWUpe3ZhciB0PWUuYW5jaG9yTm9kZTtpZihudWxsIT09dCl7Zm9yKDszPT09dC5ub2RlVHlwZTspdD10LnBhcmVudE5vZGU7cmV0dXJuIHR9cmV0dXJuIG51bGx9fVxyXG5FbGVtZW50LnByb3RvdHlwZS53cmFwID0gKCB3cmFwcGVyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKSB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyKTtcclxuICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dCh0aGlzKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IFxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLmlzY2hpbGRPZiA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIGlmICghcGFyZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgbGV0IG5vZGUgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xyXG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5jb25zdCBfd3JhcCA9IGZ1bmN0aW9uKHdyYXBwZXIpIHtcclxuICBpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIGZhbHNlO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5UZXh0LnByb3RvdHlwZS53cmFwID0gX3dyYXA7XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobmV3Tm9kZSkge1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy5uZXh0U2libGluZyk7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZU5vZGUgPSBmdW5jdGlvbihyZXBsYWNlbWVudE5vZGUpIHtcclxuICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgdGhpcylcclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xyXG4gIH1cclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS51bndyYXAgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpXHJcbiAgdmFyIGV4dHJhQ29udGVudHMgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICB0aGlzLnJlcGxhY2VOb2RlKGV4dHJhQ29udGVudHMpXHJcbiAgcmV0dXJuIGV4dHJhQ29udGVudHM7XHJcbn1cclxuIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi9Eb21VdGlsaXNcIlxyXG5pbXBvcnQgeyBnZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRDbGFzc2VzLCBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi9fYXBwLmNvbmZpZy5qc29uJztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICAqIFJldHVybnMgdGhlIG5ldyBtZXJnZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gRG9tRWxlbWVudCAtIGVsZW1lbnQgdG8gbWVyZ2Ugd2l0aCBoaXMgZmlyc3QgY2hpbGRcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZU5vZGVDb250ZWN0ID0gbm9kZSA9PiB7XHJcblxyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KG5vZGUpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gbm9kZSBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBpZiAoIWZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3QgY2hpbGQgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlyc3RDaGlsZC5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3RDaGlsZCBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS50ZXh0Q29udGVudCAhPT0gZmlyc3RDaGlsZC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSB0ZXh0IGNvbnRlbnQgaXMgZGlmZmVyZW50Jyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudFByb3BzID0ge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShub2RlKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKG5vZGUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKG5vZGUpXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIF9lbGVtZW50UHJvcHMuc3R5bGUpIHtcclxuICAgICAgICBjb25zdCBzdHlsZVZhbHVlID0gX2VsZW1lbnRQcm9wcy5zdHlsZVtzdHlsZV07XHJcbiAgICAgICAgZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gPSAoZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gKyBcIiBcIiArIHN0eWxlVmFsdWUpLnRyaW0oKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBfZWxlbWVudFByb3BzLmF0dHJzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gX2VsZW1lbnRQcm9wcy5hdHRyc1thdHRyXTtcclxuICAgICAgICBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKC4uLl9lbGVtZW50UHJvcHMuY2xhc3Nlcyk7XHJcbiAgICBub3JtYWxpemVDbGFzc05hbWUoZmlyc3RDaGlsZCk7XHJcbiAgICBub3JtYWxpemVFbGVtZW50KGZpcnN0Q2hpbGQpO1xyXG4gICAgaWYoZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50KVxyXG4gICAgZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVR3b05vZGVzKGVsZW1lbnRPbmUsIGVsZW1lbnRUd28pIHtcclxuICAgIGNvbnNvbGUubG9nKCdbbWVyZ2VUd29Ob2Rlc10gU1RBUlQnKTtcclxuICAgIGlmICghRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50T25lKSB8fCAhRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50VHdvKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uZSBvZiB0aGUgcHJvcHMgaXMgbm90IGRvbSBlbGVtZW50Li4sIHBsZWFzZSBpbnNlcnQgdHdvIGVsZW1lbnQgdG8gbWVyZ2UuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnRPbmUubm9kZU5hbWUgIT09IFwiU1BBTlwiIHx8IGVsZW1lbnRUd28ubm9kZU5hbWUgIT09IFwiU1BBTlwiKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudHNEYXRhID0gW3tcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudE9uZSksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50T25lKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50T25lKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudFR3byksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50VHdvKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50VHdvKVxyXG4gICAgfV1cclxuICAgIGNvbnN0IGdldENvbW1vbkNsYXNzZXMgPSAoY2xhc3NlczEsIGNsYXNzZXMyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGFzc2VzMSB8fCAhY2xhc3NlczIpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICBjb25zdCBjMSA9IFsuLi5jbGFzc2VzMV07XHJcbiAgICAgICAgY29uc3QgYzIgPSBbLi4uY2xhc3NlczJdO1xyXG4gICAgICAgIHJldHVybiBjMS5maWx0ZXIoYyA9PiBjMi5pbmNsdWRlcyhjKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb21tb25TdHlsZXMgPSAoc3R5bGUxLCBzdHlsZTIpID0+IHtcclxuICAgICAgICBjb25zdCBjb21tbW9uU3R5bGVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIHN0eWxlMSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0eWxlMltzXSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUxVmFsdWVzID0gc3R5bGUxW3NdO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTJWYWx1ZXMgPSBzdHlsZTJbc107XHJcbiAgICAgICAgICAgIGlmIChzdHlsZTJWYWx1ZXMgPT09IHN0eWxlMVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgY29tbW1vblN0eWxlc1tzXSA9IHN0eWxlMlZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tbW1vblN0eWxlcztcclxuICAgIH07XHJcbiAgICBjb25zdCBjb21tb25jTGFzc2VzID0gZ2V0Q29tbW9uQ2xhc3NlcyhfZWxlbWVudHNEYXRhWzBdLmNsYXNzZXMsIF9lbGVtZW50c0RhdGFbMV0uY2xhc3Nlcyk7XHJcbiAgICBjb25zb2xlLmxvZygnY29tbW9uQ2xhc3NzZXMnLGNvbW1vbmNMYXNzZXMsZWxlbWVudE9uZSxlbGVtZW50VHdvLF9lbGVtZW50c0RhdGEpXHJcblxyXG4gICAgY29uc3QgY29tbW9uU3R5bGVzID0gZ2V0Q29tbW9uU3R5bGVzKF9lbGVtZW50c0RhdGFbMF0uc3R5bGUsIF9lbGVtZW50c0RhdGFbMV0uc3R5bGUpO1xyXG4gICAgY29uc3QgYnVpbGRXcmFwcGluZ0VsZW1lbnQgPSAoY29tbW9uU3R5bGVzLCBjb21tb25jTGFzc2VzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAvLyBoYW5kbGUgc3R5bGVzXHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZVtzXSA9IGNvbW1vblN0eWxlc1tzXTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBjbGFzc2VzXHJcbiAgICAgICAgaWYgKGNvbW1vbmNMYXNzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoLi4uY29tbW9uY0xhc3Nlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3cmFwcGVyLmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBidWlsZFdyYXBwaW5nRWxlbWVudChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpO1xyXG4gICAgaWYgKCF3cmFwcGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignd3JhcHBlciBpcyBudWxsJylcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRDbGFzc2VzID0gKG5vZGUsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tbW9uY0xhc3Nlcyk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJFbGVtZW50U3R5bGVzID0gKG5vZGUsIGNvbW1vblN0eWxlcykgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBpbiBjb21tb25TdHlsZXMpXHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGVbc10gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBbZWxlbWVudE9uZSwgZWxlbWVudFR3b107XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGNsZWFyRWxlbWVudENsYXNzZXMoZSwgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50U3R5bGVzKGUsIGNvbW1vblN0eWxlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIERvbVV0aWxpcy53cmFwKGVsZW1lbnRzLCB3cmFwcGVyKTtcclxuICAgIFsuLi53cmFwcGVyLmNoaWxkcmVuXS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQoYylcclxuICAgIH0pXHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb21tb25WYWx1ZXNPYmplY3Qob2JqMSwgb2JqMikge1xyXG4gICAgbGV0IGNvbW1vblZhbHVlcyA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqMSkge1xyXG4gICAgICAgIGlmIChvYmoyW2tleV0gJiYgb2JqMltrZXldID09PSBvYmoxW2tleV0pIHtcclxuICAgICAgICAgICAgY29tbW9uVmFsdWVzW2tleV0gPSBvYmoxW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tbW9uVmFsdWVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb21tb25BcnJheXMoYXJyMSwgYXJyMikge1xyXG4gICAgY29uc3QgbWVyZ2VBcnIgPSBbXTtcclxuICAgIEFycmF5LmZyb20oYXJyMSkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoYXJyMi5maW5kSW5kZXgoaSA9PiBpID09PSBpdGVtKSA+IDApIHtcclxuICAgICAgICAgICAgbWVyZ2VBcnIucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG1lcmdlQXJyO1xyXG59IiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi9Eb21VdGlsaXNcIlxyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q3NzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXR0ci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEluaGVpcnRDbGFzc05hbWVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0SFRNTChmcm9tRWxlbWVudCwgdG9FbGVtZW50LG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29uc3Qge3RhZyA9IFwic3BhblwifSA9IG9wdGlvbnM7XHJcbiAgICBpZiAoIWZyb21FbGVtZW50LmlzY2hpbGRPZih0b0VsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZnJvbUVsZW1lbnQgbXVzdCBiZSBjaGlsZCBvZiB0b0VsZW1lbnQnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGZyb21FbGVtZW50KSB8fCAhRG9tVXRpbGlzLmlzRWxlbWVudCh0b0VsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZnJvbUVsZW1lbnQgJiYgdG9FbGVtZW50IG11c3QgYmUgZG9tIGVsZW1lbnRzLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEF0dHJzID0gKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGF0dHJzID0gZ2V0SW5oZWlydEF0dHJpYnV0ZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0SW5oZWlydENsYXNzTmFtZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW3N0eWxlXTtcclxuICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRycykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJzW2F0dHJdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBmcm9tRWxlbWVudC5jcmVhdGVTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IGNlbnRlclRlbXBsYXRlID0gc2V0QXR0cnMoY2VudGVyRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIC8vY2VudGVyXHJcbiAgICBjZW50ZXJUZW1wbGF0ZS5hcHBlbmRDaGlsZChmcm9tRWxlbWVudCk7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdmFyIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAvL2xlZnRcclxuICAgIHJhbmdlLnNldFN0YXJ0KHRvRWxlbWVudCwgMCk7XHJcbiAgICBjb25zdCBsZWZ0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgbGVmdFRlbXBsYXRlID0gc2V0QXR0cnMobGVmdEVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICB2YXIgbGVmdFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICBsZWZ0VGVtcGxhdGUuYXBwZW5kQ2hpbGQobGVmdFJhbmdlKTtcclxuICAgIC8vcmlnaHRcclxuICAgIHJhbmdlLnNldEVuZCh0b0VsZW1lbnQsIHRvRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICBjb25zdCByaWdodEVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IHJpZ2h0VGVtcGxhdGUgPSBzZXRBdHRycyhyaWdodEVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICB2YXIgcmlnaHRSYW5nZSA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmlnaHRUZW1wbGF0ZS5hcHBlbmRDaGlsZChyaWdodFJhbmdlKTtcclxuICAgIGNvbnN0IHNwbGl0ID0ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnRUZW1wbGF0ZSxcclxuICAgICAgICBjZW50ZXI6IGNlbnRlclRlbXBsYXRlLFxyXG4gICAgICAgIHJpZ2h0OiByaWdodFRlbXBsYXRlXHJcbiAgICB9XHJcbiAgICB0b0VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgZWwgaW4gc3BsaXQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3BsaXRbZWxdO1xyXG4gICAgICAgIHRvRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC51bndyYXAoKTtcclxuICAgIHJldHVybiBzcGxpdDtcclxuXHJcbn0iLCJpbXBvcnQgQ29yZSBmcm9tICcuL1N0eWxlSXQvaW5kZXgnO1xyXG5pbXBvcnQgIE1PREVTICBmcm9tICcuL1N0eWxlSXQvY29uc3RhbnRzL01vZGVzLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVJdCB7XHJcbiAgLy9leHBvc2Ugb25seSB0aGUgcmVsZXZhbnQgbWV0aG9kcy4uXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgIC8vVE9ETzogdmFsaWRhdGUgdGFyZ2V0ICYgY29uZmlnLi5cclxuICAgIGNvbnN0IHN0eWxlSXQgPSBuZXcgQ29yZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICBpZiAoc3R5bGVJdCkgeyAgXHJcbiAgICAgIHRoaXMuZXhlY0NtZCA9IHN0eWxlSXQuZXhlY0NtZDtcclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyA9IHN0eWxlSXQudG9nZ2xlQ2xhc3M7XHJcbiAgICAgIHRoaXMubGluayA9IHN0eWxlSXQubGluaztcclxuICAgICAgdGhpcy51bkxpbmsgPSBzdHlsZUl0LnVuTGluaztcclxuICAgICAgdGhpcy5zYXZlID0gc3R5bGVJdC5zYXZlO1xyXG4gICAgICB0aGlzLmxvYWQgPSBzdHlsZUl0LmxvYWQ7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHN0eWxlSXQuZGVzdHJveTtcclxuICAgICAgdGhpcy5vbiA9IHN0eWxlSXQub247XHJcbiAgICAgIHRoaXMuTU9ERVMgPSBNT0RFUztcclxuICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyA9IHRoaXMudG9nZ2xlQ2xhc3MuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5leGVjQ21kID0gdGhpcy5leGVjQ21kLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMub24gPSB0aGlzLm9uLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMubGluayA9IHRoaXMubGluay5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLnVuTGluayA9IHRoaXMudW5MaW5rLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmxvYWQgPSB0aGlzLmxvYWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQoc3R5bGVJdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==