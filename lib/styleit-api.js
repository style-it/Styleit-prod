/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.44
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
    constructor() {
      super();
    }
    connectedCallback(){
      const createZeroSpace = this.getAttribute('zero-space');
      if(createZeroSpace === "true"){
        this.innerHTML = "&#8203;";

      }
    }
  }
  if(!customElements.get('text-selection')){
    customElements.define('text-selection', TextSelection); 
  }


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
/* harmony import */ var _utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilis/splitHTML */ "./src/StyleIt/utilis/splitHTML.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _textEditor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../textEditor.service */ "./src/StyleIt/services/textEditor.service.js");








class CopyPaste {

  constructor(target, options) {
    this.target = target;
    this.stylesToPaste = typeof options.stylesToPaste === "object" ? options.stylesToPaste : null;
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
              debugger
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
  }
  paste(event) {
    const isShifted = event.shiftKey;
    if (isShifted) {
      this.pastePlainText(event);
    } else {
      this.pasteWithStyles(event);
    }

  };

  pastePlainText(event) {
    const data = event.clipboardData || window.clipboardData;
    event.preventDefault();
    let copied = data.getData('text/plain').trim();
    copied = copied.replace(/\n/g, "<br/>")
    if (!copied.trim()) {
      return;
    }
    const p = document.createElement("p");
    p.innerHTML = copied;

    Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["pasteHtmlAtCaret"])(p);
    Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["setCaretAt"])(p);

    if (p.parentElement !== this.target) {
      p.unwrap();

    }
    Array.from(this.target.children).forEach(child => {
      if (!child.textContent.trim()) {
        this.target.removeChild(child);
      }
    })
  }
  pasteWithStyles(event) {
    event.preventDefault();
    const data = event.clipboardData || window.clipboardData;
    const copied = data.getData('styleit/html').trim();
    //on copied on the editor localy
    if (copied) {
      const pastedContainer = document.createElement("div");
      pastedContainer.innerHTML = copied;
      Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["pasteHtmlAtCaret"])(pastedContainer);
      Array.from(pastedContainer.children).forEach(child => {
        if (!Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_5__["getCleanText"])(child.textContent) && !_constants_void_elms__WEBPACK_IMPORTED_MODULE_1__["void_elements"][child.nodeName]) {
          child.parentElement.removeChild(child);
        }
      });
      Array.from(pastedContainer.children).forEach(child => {
        const sameNode = child.parentElement.closest("h1,h2,h3,h4,h5,h6,p");
        if (sameNode && _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][child.nodeName] && Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_5__["getCleanText"])(sameNode.textContent) === Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_5__["getCleanText"])(pastedContainer.textContent)) {
          sameNode.parentElement.insertBefore(child, sameNode);
        }
        else if (child.nodeType === 1 && _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][child.nodeName] && sameNode) {
          if (pastedContainer.children.length > 1) {
            child.insertAfter(document.createElement("BR"));
          }
          child.unwrap();
        }
        else if (!Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_5__["getCleanText"])(child.textContent)) {
          child.unwrap();
        }
      });
      const block = pastedContainer.closest("h1,h2,h3,h4,h5,h6,p");
      if (block) {
        const parts = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(pastedContainer, block, { tag: block.nodeName });
        if (parts) {
          parts.left.appendChild(parts.center);
          parts.center.appendChild(parts.right);
          parts.right.unwrap();
          parts.center.unwrap();
        }
      }
      Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_5__["normalizeElement"])(this.target);
      Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["setCaretAt"])(pastedContainer);
      pastedContainer.unwrap();
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
/* harmony import */ var _textEditor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../textEditor.service */ "./src/StyleIt/services/textEditor.service.js");




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
                if (Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_3__["getCleanText"])(target.textContent) === "") {
                    e.preventDefault();
                    return;
                }
            }
            else if (e.keyCode === 13) {
                if (e.shiftKey) {
                    Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["pasteHtmlAtCaret"])("<br></br>");
                    e.preventDefault();
                    return;
                }

                const range = document.createRange();
                const selection = window.getSelection();
                var blockElement = Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["GetClosestBlockElement"])(selection.anchorNode);

                if (blockElement === this.target || !blockElement) {
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
/*! exports provided: createInnerWrapperElement, GetClosestBlockElement, wrapRangeWithBlockElement, wrapRangeWithElement, getRanges, getTextNodes, rangesIntersect, createRangeFromNode, getCaretCharacterOffsetWithin, setCaretAt, pasteHtmlAtCaret, rangeIntersectsNode, getRangeTextNodes, isNonEmptyTextNode, removeElement, replaceNode, selectText, insertAfter, createWrapperFunction, querySelectorUnderSelection, getAllNodes, wrapRangeText, setSelectionBetweenTwoNodes, setSelectionFlags, getSelectedHTML, saveSelection, restoreSelection */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectorUnderSelection", function() { return querySelectorUnderSelection; });
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
      // only relatively rece ntly standardized and is not supported in
      // some browsers (IE9, for one)
      let el;
      if (typeof (html) === "string") {
        el = document.createElement("div");
        el.innerHTML = html;
        var frag = document.createDocumentFragment(), node, lastNode;
        while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);
      }
      else if (typeof (html) === "object") {
        range.insertNode(html);

      }

    

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
const querySelectorUnderSelection = (querySelector) => {
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  const elements = range.commonAncestorContainer.querySelectorAll(querySelector);
  const allSelected = [];
  for (var i = 0, el; el = elements[i]; i++) {
    // The second parameter says to include the element 
    // even if it's not fully selected
    if (selection.containsNode(el, true)) {
        allSelected.push(el);
    }
}
return allSelected;
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
/*! exports provided: normalizeElement, removeZeroSpace, getCleanText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeElement", function() { return normalizeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeZeroSpace", function() { return removeZeroSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCleanText", function() { return getCleanText; });
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
function getCleanText(text) {
    return text.replace(/\s/g, "").replace(/[\u200B-\u200D\uFEFF]/g, '') 
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
        // console.error('one of the props is not dom element.., please insert two element to merge..');
        return null;
    }
    if (node.nodeName !== "SPAN" || node.nodeType !== Node.ELEMENT_NODE) {
        // console.error('[mergeNodeContect] node is not a span');
        return null;
    }

    const firstChild = node.firstElementChild;
    if (!firstChild) {
        // console.error('[mergeNodeContect] first child not found');
        return null;
    }
    if (firstChild.nodeName !== "SPAN" || firstChild.nodeType !== Node.ELEMENT_NODE) {
        // console.error('[mergeNodeContect] firstChild is not a span');
        return null;
    }
    if (node.textContent !== firstChild.textContent) {
        // console.error('[mergeNodeContect] text content is different');
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
    if (!_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(elementOne) || !_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(elementTwo)) {
        // console.error('one of the props is not dom element.., please insert two element to merge..');
        return null;
    }
    if (elementOne.nodeName !== "SPAN" || elementTwo.nodeName !== "SPAN") {
        // console.error('one of the props is not dom element.., please insert two element to merge..');
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
        // console.error('wrapper is null')
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



/**
 * Create a new instance of StyleIt
 *
 * @param {HTMLElement} target
  * @param {object} config
 * @public
 */
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
      this.on = this.on.bind(styleIt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2NvbnN0YW50cy9ibG9ja19lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25zdGFudHMvdm9pZF9lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvcnVsZXMvcnVsZXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvYXR0ci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvbGluay5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9Eb21VdGlsaXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9tZXJnZXIuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9zcGxpdEhUTUwuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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QUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCwwQkFBMEIsNEVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic3R5bGVpdC1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYycpLmRlZmF1bHQ7XHJcbiIsIlxyXG5jbGFzcyBUZXh0U2VsZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpe1xyXG4gICAgICBjb25zdCBjcmVhdGVaZXJvU3BhY2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnemVyby1zcGFjZScpO1xyXG4gICAgICBpZihjcmVhdGVaZXJvU3BhY2UgPT09IFwidHJ1ZVwiKXtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpZighY3VzdG9tRWxlbWVudHMuZ2V0KCd0ZXh0LXNlbGVjdGlvbicpKXtcclxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGV4dC1zZWxlY3Rpb24nLCBUZXh0U2VsZWN0aW9uKTsgXHJcbiAgfVxyXG4iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL3V0aWxpcy9Eb21VdGlsaXNcIjtcclxuaW1wb3J0IENvcHlQYXN0ZSBmcm9tIFwiLi9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2VcIjtcclxuaW1wb3J0IElucHNlY3RvciBmcm9tIFwiLi9zZXJ2aWNlcy9JbnNwZWN0b3IvSW5zcGVjdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IEtleVByZXNzIGZyb20gXCIuL3NlcnZpY2VzL2tleVByZXNzL0tleVByZXNzXCI7XHJcblxyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCB3cmFwTmFrZWRUZXh0Tm9kZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkLi5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFJlbmRlcklubmVySFRNTCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5RWxlbWVudCA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2RlcyhlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb25Db250ZW50ID0gZWxlbWVudFRvSnNvbihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkRWxlbWVudCA9IEpzb25Ub0VsZW1lbnQoanNvbkNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgZW1wdHlFbGVtZW50KGVsZW1lbnQpLnRoZW4oKCkgPT4gZWxlbWVudC5pbm5lckhUTUwgPSByZW5kZXJlZEVsZW1lbnQuaW5uZXJIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXNlUGx1Z2lucyA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb3B5UGFzdGU6IG5ldyBDb3B5UGFzdGUoZWxlbWVudCwgb3B0aW9ucyksXHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3I6IG5ldyBJbnBzZWN0b3IoZWxlbWVudCwgb3B0aW9ucy5vbkluc3BlY3QpLFxyXG4gICAgICAgICAgICAgICAga2V5UHJlc3M6IG5ldyBLZXlQcmVzcyhlbGVtZW50LCBvcHRpb25zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFJlbmRlcklubmVySFRNTChlbGVtZW50KTtcclxuICAgICAgICAvLyBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcclxuICAgICAgICB0aGlzLnBsdWdpbnMgPSB1c2VQbHVnaW5zKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgLy9UT0RPOiBkZXN0b3J5IGV2ZW50cy4uXHJcbiAgICAvL3F1ZXN0aW9uOiBob3cgdG8gdXNlIHRoZSBldmVudHMgPyBcclxuXHJcblxyXG4gICAgRGVzdHJveSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbnNba2V5XTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbi5EZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBibG9ja19lbG1lbnRzID0ge1xyXG4gICAgXCJIMVwiOlwiSDFcIixcclxuICAgIFwiSDJcIjpcIkgyXCIsXHJcbiAgICBcIkgzXCI6XCJIM1wiLFxyXG4gICAgXCJINFwiOlwiSDRcIixcclxuICAgIFwiSDVcIjpcIkg1XCIsXHJcbiAgICBcIkg2XCI6XCJINlwiLFxyXG4gICAgXCJQXCI6XCJQXCIsXHJcbiAgICBcIkxJXCI6XCJMSVwiLFxyXG4gICAgXCJPTFwiOlwiT0xcIlxyXG59ICAgIiwiZXhwb3J0IGNvbnN0IHZvaWRfZWxlbWVudHMgPSB7XHJcbiAgICBcIkJSXCI6XCJCUlwiLFxyXG4gICAgXCJIUlwiOlwiSFJcIixcclxuICAgIFwiSU1HXCI6XCJJTUdcIixcclxuICAgIFwiSU5QVVRcIjpcIklOUFVUXCIsXHJcbiAgICBcIkFVRElPXCI6XCJBVURJT1wiLFxyXG4gICAgXCJWSURFT1wiOlwiVklERU9cIixcclxuICAgIFwiUElDVFVSRVwiOlwiUElDVFVSRVwiXHJcbn0iLCJpbXBvcnQge1xyXG4gICAgd3JhcFJhbmdlV2l0aEVsZW1lbnQsXHJcbiAgICBzZXRTZWxlY3Rpb25GbGFncyxcclxuICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyxcclxuICAgIGdldFRleHROb2RlcyxcclxuICAgIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQsXHJcbiAgICBzZXRDYXJldEF0LFxyXG4gICAgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudFxyXG59IGZyb20gXCIuL3NlcnZpY2VzL3JhbmdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IE1vZGVzIGZyb20gJy4vY29uc3RhbnRzL01vZGVzLmpzb24nO1xyXG5pbXBvcnQgeyBzcGxpdEhUTUwgfSBmcm9tIFwiLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IHNldFN0eWxlLCB0b2dnbGVTdHlsZSwgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL3NlcnZpY2VzL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCwgcmVtb3ZlWmVyb1NwYWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3InO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkJztcclxuaW1wb3J0IHsgZWxlbWVudFRvSnNvbiwgSnNvblRvRWxlbWVudCwgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vc2VydmljZXMvZWxlbWVudHMuc2VydmljZVwiO1xyXG5pbXBvcnQge0VWRU5UU30gZnJvbSAnLi9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlVGVtcExpbmtFbGVtZW50LCByZXNldFVSTCxUQVJHRVRTIH0gZnJvbSBcIi4vc2VydmljZXMvbGluay5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHZvaWRfZWxlbWVudHMgfSBmcm9tIFwiLi9jb25zdGFudHMvdm9pZF9lbG1zXCI7XHJcbmltcG9ydCB7IGJsb2NrX2VsbWVudHMgfSBmcm9tIFwiLi9jb25zdGFudHMvYmxvY2tfZWxtc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XHJcblxyXG4gICAgLy8gKnRhcmdldCA9PiBjYW4gYmUgSWQgb2YgRWxlbWVudCB0aGF0IHNob3VsZCBjb250YWluIEVkaXRvciBpbnN0YW5jZSBvciB0aGUgZWxlbWVudCBpdHNlbGYuLlxyXG4gICAgLy8gKmNvbmZpZyA9PiAgY29uZmlndXJhdGlvbiBwYXNzZWQgdCAgIG8gVG9vbCBjb25zdHJ1Y3RvclxyXG4gICAgLy9UT0RPOiBhZGQgdGFyZ2V0IHZhbGlkYXRpb25zLi47XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX19jb25maWcgPSB7XHJcbiAgICAgICAgICAgIG9uSW5zcGVjdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbiA9IChrZXksY2FsbGJhY2spPT57XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihrZXkpICE9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJrZXkgbXVzdCBiZSBhIHN0cmluZy4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRVZFTlRTW2tleV0gID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkNvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IoKTtcclxuICAgICAgICB0aGlzLm1vZGVIYW5kbGVycyA9IHtcclxuICAgICAgICAgICAgW01vZGVzLlRvZ2dsZV06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uVG9nZ2xlKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgICAgICBbTW9kZXMuRXh0ZW5kXTogKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpID0+IHRoaXMub25FeHRlbmQodiwga2V5LCB2YWx1ZSwgb3B0aW9ucyksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gT2JqZWN0LmFzc2lnbih0aGlzLl9fY29uZmlnLCBjb25maWcpIDogdGhpcy5fX2NvbmZpZztcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHtcclxuICAgICAgICAgICAgc3R5bGVDaGFuZ2VkOiB0aGlzLmNvbmZpZy5vbkluc3BlY3QsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRWxlbWVudCA9IHRoaXMuQ29ubmVjdG9yLkNvbm5lY3QodGFyZ2V0LCB0aGlzLmNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50VG9Kc29uKHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBsb2FkKGpzb24pIHtcclxuICAgICAgICByZXR1cm4gSnNvblRvRWxlbWVudChqc29uLCB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rvci5EZXN0cm95KCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZikge1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3LlxyXG4gICAgLy9UT0RPOiBDcmVhdGUgbm9ybWFsaXplLi5cclxuICAgIC8vcXVlc3Rpb246IGlmIHRleHQgd2FzIHNlbGVjdGVkLCBzaG91bGQgd2UgdW53cmFwIHRoZSBzZWxlY3RpaW9uIG9ubHkgPyBcclxuICAgIHVuTGluaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uICYmICFzZWxlY3Rpb24udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvVW53cmFwO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlTm9kZSA9IHNlbGVjdGlvbi5iYXNlTm9kZTtcclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAzICYmIGJhc2VOb2RlLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcCA9IGJhc2VOb2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAgPSBlbGVtZW50VG9VbndyYXAuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1Vud3JhcCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwLnVud3JhcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaW5rRWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIEFycmF5LmZyb20obGlua0VsZW1lbnRzKS5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0QVRhZyA9IHIuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZXN0QVRhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBzcGxpdEhUTUwociwgY2xvc2VzdEFUYWcsIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhLmNlbnRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHIucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhLnVud3JhcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgci51bndyYXAoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGxpbmtFbGVtZW50c1swXSwgbGlua0VsZW1lbnRzW2xpbmtFbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAvL1RPRE86IG1lcmdlIGEgdGFncy4uXHJcbiAgICAvL1RPRE86IHJlbW92ZSBhIGNoaWxkc1xyXG4gICAgLy9UT0RPOiBtb3ZlIGZ1bmN0aW9uIHRvIExpbmsuc2VydmljZS5qc1xyXG4gICAgbGluayhvcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgKG9wdGlvbnMgJiYgIW9wdGlvbnMuaHJlZikgfHwgICF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uICYmICF3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJubyB0ZXh0IHNlbGVjdGVkLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bndyYXBBdGFncyA9IChsaW5rRWxlbWVudHMpID0+IHtcclxuICAgICAgICAgICAgbGlua0VsZW1lbnRzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGxpbmsucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goYVRhZyA9PiBhVGFnLnVud3JhcCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RBVGFnID0gbGluay5wYXJlbnRFbGVtZW50ID8gbGluay5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJhXCIpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0QVRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKGxpbmssIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNlbnRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2VzdEFUYWcudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRUYXJnZXRUb1RhZyA9IChsaW5rRWxlbWVudHMsIHJlbmRlcmVkTGluaywgX3RhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rRWxlbWVudHMuZm9yRWFjaChhVGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGFUYWcuaHJlZiA9IHJlbmRlcmVkTGluaztcclxuICAgICAgICAgICAgICAgIGlmIChfdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgX3RhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRQcm90b2NvbCA9IChfcHJvdG9jb2wsIG5ld1VSTCkgPT4ge1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBfcHJvdG9jb2wucmVwbGFjZSgvOi9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gX3Byb3RvY29sLnJlcGxhY2UoL1xcL1xcLy9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiOlwiO1xyXG4gICAgICAgICAgICBpZiAoX3Byb3RvY29sLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiLy9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdVUkwucHVzaChfcHJvdG9jb2wpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3Byb3RvY29sO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuICAgICAgICBjb25zdCB7IGhyZWYgPSBcIlwiLCBwcm90b2NvbCA9IFwiXCIsIHRhcmdldCA9IFwiXCIgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsZXQgbmV3VVJMID0gW107XHJcbiAgICAgICAgY29uc3QgQXRhZyA9IGNyZWF0ZVRlbXBMaW5rRWxlbWVudChocmVmKTtcclxuICAgICAgICBsZXQgX2hyZWYgPSByZXNldFVSTChocmVmLnRyaW0oKSk7XHJcblxyXG4gICAgICAgIGxldCBfcHJvdG9jb2wgPSBwcm90b2NvbC50cmltKCkgfHwgQXRhZy5wcm90b2NvbDtcclxuICAgICAgICBsZXQgX3RhcmdldCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgdGVzdFRhcmdldCA9IFRBUkdFVFNbdGFyZ2V0LnRyaW0oKS50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZiAodGVzdFRhcmdldCkge1xyXG4gICAgICAgICAgICBfdGFyZ2V0ID0gdGVzdFRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wcm90b2NvbC50cmltKCkpIHtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gc2V0UHJvdG9jb2woX3Byb3RvY29sLCBuZXdVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2hyZWYpIHtcclxuICAgICAgICAgICAgbmV3VVJMLnB1c2goX2hyZWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZW5kZXJlZExpbmsgPSBuZXdVUkwuam9pbihcIlwiKTtcclxuICAgICAgICB1bndyYXBBdGFncyhsaW5rRWxlbWVudHMpO1xyXG4gICAgICAgIHNldFRhcmdldFRvVGFnKGxpbmtFbGVtZW50cywgcmVuZGVyZWRMaW5rLCBfdGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGxpbmtFbGVtZW50c1swXSwgbGlua0VsZW1lbnRzW2xpbmtFbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICBcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uIFxyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXdcclxuICAgIC8vcXVlc3Rpb24gOiB3ZSB3YW50IHRvIGhhbmRsZSBhbmQgdG9nZ2xlIGFueSBhdHRyaWJ1dGUgPyBcclxuICAgIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIC8vaGVyZVxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIChjbGFzc05hbWUpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNsYXNzTmFtZSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLnNlbGVjdGlvbikgIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaXNUb2dnbGVPbiA9ICh0eXBlb2YgKG9wdGlvbnMuaXNPTikgPT09IFwiYm9vbGVhblwiKSA/IG9wdGlvbnMuaXNPTiA6IGVsZW1lbnRzWzBdLmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICBpZiAoIWlzVG9nZ2xlT24pIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Q2xhc3MgPSBlbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdENsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gc3BsaXRIVE1MKGVsLCBjbG9zZXN0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0LmNlbnRlci5yZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gb3B0aW9ucy5zZWxlY3Rpb24gPyBzZXRTZWxlY3Rpb25GbGFncyhlbGVtZW50c1swXSwgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0pIDogeyBmaXJzdEZsYWc6IG51bGwsIGxhc3RGbGFnOiBudWxsIH07IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIGtleSBvZiBjc3MgXHJcbiAgICAqICBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBjc3NcclxuICAgICogIEBwYXJhbSB7KE9iamVjdCB8IFN0cmluZyl9IE1vZGVzIC0gbW9kZSBmcm9tIE1vZGVzID0+IEV4dGVuZCBvciBUb2dnbGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy5FeHRlbmQgLSBvdmVycmlkZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLnRvZ2dsZSAtIHRvZ2dsZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgXHJcbiAgICAqL1xyXG4gICAgZXhlY0NtZChrZXksIHZhbHVlLCBtb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSB8fCAhdGhpcy5pc1ZBbGlkS2V5VmFsdWUoa2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUyA9IFtdO1xyXG4gICAgICAgIG1vZGUgPSBtb2RlID8gbW9kZSA6IE1vZGVzLkV4dGVuZDtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLnNlbGVjdGlvbikgIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNlbGVjdGlvbiA9IHRydWU7XHJcbiAgIFxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09cmV2aWV3PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoIW9wdGlvbnMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gdGhpcy5FTEVNRU5UU1t0aGlzLkVMRU1FTlRTLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAobGFzdE5vZGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyID0gdGhpcy5jcmVhdGVDYXJldFBsYWNlbWVudChsYXN0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy51bldyYXAgJiYgQXJyYXkuaXNBcnJheShvcHRpb25zLnVuV3JhcCkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy51bldyYXAuZm9yRWFjaChzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkVMRU1FTlRTLmZvckVhY2godHh0Tm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcCA9IHR4dE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RFbGVtZW50VG9VbldyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RoaXMgaXMgaG93IGkgbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24sIGkgZG9udCBrbm93IGlmIHRoaXMgaXMgZ29vZCB3YXksIGJ1dCBpdCB3b3Jrcy4uXHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBvcHRpb25zLnNlbGVjdGlvbiA/IHNldFNlbGVjdGlvbkZsYWdzKHRoaXMuRUxFTUVOVFNbMF0sIHRoaXMuRUxFTUVOVFNbdGhpcy5FTEVNRU5UUy5sZW5ndGggLSAxXSkgOiB7IGZpcnN0RmxhZzogbnVsbCwgbGFzdEZsYWc6IG51bGwgfTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICByZW1vdmVaZXJvU3BhY2UoZ2V0VGV4dE5vZGVzKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpO1xyXG5cclxuICAgICAgICBsZXQgVG9nZ2xlTW9kZTsvL0RlY2xhcmUgdG9nZ2xlIG1vZGUsIFRoZSBmaXJzdCBlbGVtZW50IGRldGVybWluZXMgd2hldGhlciBpdCBpcyBvbiBvciBvZmZcclxuXHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBUb2dnbGVNb2RlO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1vZGVIYW5kbGVyc1ttb2RlXShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IE1vZGVzLlRvZ2dsZSAmJiB0eXBlb2YgKFRvZ2dsZU1vZGUpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIFRvZ2dsZU1vZGUgPSByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgICAgICAvL3VzZSB0aGUgZmlyc3QgYW5kIGxhc3QgZmxhZ3MgdG8gbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24gYW5kIHVud3JhcCB0aGVtLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZXRIb2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldENhcmV0QXQodGhpcy5jYXJldEhvbGRlciwgdGhpcy5jYXJldEhvbGRlci50ZXh0Q29udGVudC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlcyA9ICBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgaWYodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdFwiXShjb2xsZWN0ZWRTdHlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3N0eWxlQ2hhbmdlZCcsIGNvbGxlY3RlZFN0eWxlcyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYXJldFBsYWNlbWVudChhdE5vZGUpIHtcclxuICAgICAgICBpZiAoIWF0Tm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgY2FyZXRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gICAgICAgIGNhcmV0SG9sZGVyLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsICd0cnVlJyk7XHJcbiAgICAgICAgYXROb2RlLmFwcGVuZENoaWxkKGNhcmV0SG9sZGVyKTtcclxuICAgICAgICByZXR1cm4gY2FyZXRIb2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XShwYXlsb2FkKTtcclxuICAgIH1cclxuICAgIG9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGV0ZWN0IGlmIHRoZXJlIGlzIGFueSBwYXJlbnQgd2l0aCBzdHlsZSB0byBzcGxpdC5cclxuICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIGNhdGNoIGZyb20gb3B0aW9ucyB0byBkZXRlY3QgbW9yZSB0aGFuIG9uZSBzdHlsZSBvciB0YWcgZWxlbWVudC5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke3ZhbHVlfSddYCk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogdGVzdHNcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0ICYmIGJsb2NrX2VsbWVudHNbZWxlbWVudFRvU3BsaXQubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJTcGFuID0gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlubmVyU3Bhbi5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblRvZ2dsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQgJiYgZWxlbWVudFRvU3BsaXQgIT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL3VuYm9sZFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBzcGxpdCBlbGVtZW50cywgaXRzIGVycm9yIVxyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0RWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NwbGl0SFRNTCByZXR1cm4gbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vbk9mZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25FeHRlbmQoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VG9TcGxpdCA9IGVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0nJHtrZXl9J11gKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEJsb2NrcyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRCbG9ja3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdEJsb2Nrcy5jZW50ZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudGFyZ2V0ICE9PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5uZXJTcGFuID0gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50VG9TcGxpdCwgeyBlbDogJ3NwYW4nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKGlubmVyU3Bhbiwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25FeHRlbmQoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudFRvU3BsaXQgIT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEVsZW1lbnRzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgJiYgb3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgJiYgYmxvY2tFbGVtZW50LmlzY2hpbGRPZih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUocGFyZW50RWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQud3JhcCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZSh3cmFwcGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgICBcclxuICAgICAgICBpZiAob3B0aW9ucy5hcyA9PT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JhcFRleHROb2RlV2l0aEFwcGVuZFN0eWxlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS53cmFwKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgfTsgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlSW5saW5lU3R5bGUgPSAocGFyZW50Tm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogdGVzdHNcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20ocGFyZW50Tm9kZS5jaGlsZE5vZGVzKS5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFRleHROb2RlV2l0aEFwcGVuZFN0eWxlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgIXZvaWRfZWxlbWVudHNbbm9kZS5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmxpbmVTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUoYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIEFycmF5LmZyb20oYmxvY2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKS5mb3JFYWNoKGVsPT5lbC5zdHlsZVtrZXldID0gdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tFbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oYmxvY2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4gZWwuc3R5bGVba2V5XSA9IG51bGwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGFyZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwYXJnaC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgZWxlbWVudC53cmFwKHBhcmdoKTtcclxuICAgIH1cclxuICAgIGlzVkFsaWRLZXlWYWx1ZShrZXksdmFsdWUpe1xyXG4gICAgICAgIHJldHVybiAhISh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIik7IFxyXG4gICAgfVxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdwbGVhc2UgY3JlYXRlIG5ldyBpbnN0YW5jZS4uJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkRWxlbWVudC5jb250ZW50RWRpdGFibGUgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICYmIChzZWxlY3RlZEVsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkgfHwgc2VsZWN0ZWRFbGVtZW50ID09PSB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBzcGxpdEhUTUwgfSBmcm9tIFwiLi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5cclxuLy9UT0RPOnJldmlld1xyXG5leHBvcnQgZnVuY3Rpb24gVXNlUnVsZXMoZGF0YSkge1xyXG4gICAgY29uc3QgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmtleSA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHREZWNvcmF0aW9uID0gZGF0YS5lbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9J3RleHQtZGVjb3JhdGlvbiddYCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0RGVjb3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gc3BsaXRIVE1MKGRhdGEuZWxlbWVudCwgdGV4dERlY29yYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRzLmNlbnRlciwgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsIGAke2RhdGEudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHRleHREZWNvcmF0aW9uLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFJ1bGVzID0gW1xyXG4gICAgICAgIENvbG9yVGV4dERlY29yYXRpb25SdWxlXHJcbiAgICBdXHJcbiAgICBSdWxlcy5mb3JFYWNoKHJ1bGUgPT4gcnVsZShkYXRhKSk7XHJcbn0iLCJcclxuaW1wb3J0IHsgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCB9IGZyb20gJy4uL3N0eWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFVkVOVFMgfSBmcm9tICcuLi9ldmVudHMvZXZlbnRzJztcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IHJlc2V0VVJMIH0gZnJvbSAnLi4vbGluay5zZXJ2aWNlJztcclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBjYW4gd2UgZXhwb3NlIHRoZSBjb2xsZWN0ZWRTdHlsZSA/IFxyXG4vL3F1ZXN0aW9uOiBzaG91bGQgd2UgdXNlIHRoaXMgPyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTXV0YXRpb25PYnNlcnZlclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnBzZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBvbkluc3BlY3QpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dIElucHNlY3RvciA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgIHRoaXMub25JbnNwZWN0ID0gb25JbnNwZWN0O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICBjb25zdCBsYXVuY2hJbnNwZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZSA9IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLm9uSW5zcGVjdCkgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHRoaXMub25JbnNwZWN0KGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoRVZFTlRTW1wiaW5zcGVjdFwiXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdFwiXShjb2xsZWN0ZWRTdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzZWxlY3RlZEVsZW1lbnQgKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFUYWcgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBpZihhVGFnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoRVZFTlRTW1wiaW5zcGVjdExpbmtcIl0pID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDphVGFnLnByb3RvY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpyZXNldFVSTChhVGFnLmhyZWYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OmFUYWcuZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OmFUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgdGhpcy50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoIDw9IDEgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxhdW5jaEluc3BlY3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuLy9jbGFzcyBhbmQgc3R5bGUgbm90IGluY2x1ZGVzIHlldC4uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIHZhciBhdHRycyA9IGN1cnJlY3RFbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYoYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGN1cnJlY3RFbGVtZW50ID0gY3VycmVjdEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhlbGVtZW50LGdldEFsbCl7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGF0dHJzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZihnZXRBbGwgIHx8ICghZ2V0QWxsICYmIGF0dHJzW2ldLm5hbWUgICE9PVwiY2xhc3NcIiAmJiBhdHRyc1tpXS5uYW1lICAhPT0gXCJzdHlsZVwiKSl7XHJcbiAgICAgICAgICAgIGlmKCFhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSl7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQXR0cnMoZWxlbWVudCl7XHJcbiAgICAgIGlmKGVsZW1lbnQgJiYgIWVsZW1lbnQuYXR0cmlidXRlcyl7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZWxlbWVudCBub3QgaGF2ZSBhdHRyaWJ1dGVzLi5cIik7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cj0+ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSkpXHJcbiAgfSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZWlydENsYXNzTmFtZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSBbXTtcclxuICAgIHZhciBfcGFyZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoX3BhcmVudCAmJiBfcGFyZW50LmlzY2hpbGRPZih0b0VsZW1lbnQucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICBsZXQgbWFwID0gX3BhcmVudC5jbGFzc0xpc3Q7XHJcbiAgICAgICAgQXJyYXkuZnJvbShtYXApLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzLmZpbmRJbmRleChjID0+IGMgPT09IG5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBfcGFyZW50ID0gX3BhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzZXMoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpO1xyXG59XHJcblxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBpcyBleHBlbnNpdmUgdG9vIG11Y2g/IFxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpIHtcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtcHR5Q2xhc3MoZWxlbWVudCl7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XHJcbiAgICAgICAgcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KTtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2xhc3NMaXN0KS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2N9J11gKSkuZm9yRWFjaChub2RlID0+e1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgICAgICAgICAgICAgICByZW1vdmVFbXB0eUNsYXNzKG5vZGUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bY2xhc3NdJykpLmNvbmNhdChlbGVtZW50KTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goY2hpbGQgPT4gY2xlYXIoY2hpbGQpKTtcclxufVxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBob3cgYWJvdXQgdGhpcyBuYW1lID8gXHJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSl7XHJcbmNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKSkuY29uY2F0KHRoaXMpO1xyXG5ub2Rlcy5mb3JFYWNoKG5vZGU9Pm5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcclxufSIsImltcG9ydCB7IGJsb2NrX2VsbWVudHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvdm9pZF9lbG1zXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi8uLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q3NzLCBzZXRTdHlsZXMgfSBmcm9tIFwiLi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRDbGVhblRleHQsIG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weVBhc3RlIHtcclxuXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHRoaXMuc3R5bGVzVG9QYXN0ZSA9IHR5cGVvZiBvcHRpb25zLnN0eWxlc1RvUGFzdGUgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLnN0eWxlc1RvUGFzdGUgOiBudWxsO1xyXG4gICAgdGhpcy5wYXN0ZSA9IHRoaXMucGFzdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuY29weS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY29weShldmVudCkge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbC5yYW5nZUNvdW50OyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgIGxldCBjb3BpZWROb2RlID0gc2VsLmdldFJhbmdlQXQoaSkuY2xvbmVDb250ZW50cygpO1xyXG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcGllZE5vZGUpO1xyXG5cclxuICAgICAgICAgIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkTm9kZXMpLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50Q29waWVkTm9kZSA9IHNlbC5nZXRSYW5nZUF0KGkpLnN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGVkQ1NTID0gZ2V0SW5oZWlydENzcyhwYXJlbnRDb3BpZWROb2RlLCB0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb3BpZWROb2RlLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgc2V0U3R5bGVzKHNwYW4sIGNvbGxlY3RlZENTUyk7XHJcbiAgICAgICAgICAgICAgbi53cmFwKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkX2VsZW1lbnRzW24ubm9kZU5hbWVdICYmIG4ubm9kZU5hbWUgIT09IFwiQlJcIikge1xyXG4gICAgICAgICAgICAgIG4ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgPSBjb250YWluZXI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LnNlbGVjdGlvbikge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uLnR5cGUgPT09IFwiVGV4dFwiKSB7XHJcbiAgICAgICAgaHRtbCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLmh0bWxUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCdzdHlsZWl0L2h0bWwnLCBodG1sLmlubmVySFRNTCk7XHJcbiAgICBldmVudC5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQvcGxhaW4nLCBodG1sLnRleHRDb250ZW50KTtcclxuICB9XHJcbiAgcGFzdGUoZXZlbnQpIHtcclxuICAgIGNvbnN0IGlzU2hpZnRlZCA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgaWYgKGlzU2hpZnRlZCkge1xyXG4gICAgICB0aGlzLnBhc3RlUGxhaW5UZXh0KGV2ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFzdGVXaXRoU3R5bGVzKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgcGFzdGVQbGFpblRleHQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjb3BpZWQgPSBkYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKS50cmltKCk7XHJcbiAgICBjb3BpZWQgPSBjb3BpZWQucmVwbGFjZSgvXFxuL2csIFwiPGJyLz5cIilcclxuICAgIGlmICghY29waWVkLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmlubmVySFRNTCA9IGNvcGllZDtcclxuXHJcbiAgICBwYXN0ZUh0bWxBdENhcmV0KHApO1xyXG4gICAgc2V0Q2FyZXRBdChwKTtcclxuXHJcbiAgICBpZiAocC5wYXJlbnRFbGVtZW50ICE9PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICBwLnVud3JhcCgpO1xyXG5cclxuICAgIH1cclxuICAgIEFycmF5LmZyb20odGhpcy50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBpZiAoIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcGFzdGVXaXRoU3R5bGVzKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICBjb25zdCBjb3BpZWQgPSBkYXRhLmdldERhdGEoJ3N0eWxlaXQvaHRtbCcpLnRyaW0oKTtcclxuICAgIC8vb24gY29waWVkIG9uIHRoZSBlZGl0b3IgbG9jYWx5XHJcbiAgICBpZiAoY29waWVkKSB7XHJcbiAgICAgIGNvbnN0IHBhc3RlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHBhc3RlZENvbnRhaW5lci5pbm5lckhUTUwgPSBjb3BpZWQ7XHJcbiAgICAgIHBhc3RlSHRtbEF0Q2FyZXQocGFzdGVkQ29udGFpbmVyKTtcclxuICAgICAgQXJyYXkuZnJvbShwYXN0ZWRDb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGlmICghZ2V0Q2xlYW5UZXh0KGNoaWxkLnRleHRDb250ZW50KSAmJiAhdm9pZF9lbGVtZW50c1tjaGlsZC5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgIGNoaWxkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIEFycmF5LmZyb20ocGFzdGVkQ29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBjb25zdCBzYW1lTm9kZSA9IGNoaWxkLnBhcmVudEVsZW1lbnQuY2xvc2VzdChcImgxLGgyLGgzLGg0LGg1LGg2LHBcIik7XHJcbiAgICAgICAgaWYgKHNhbWVOb2RlICYmIGJsb2NrX2VsbWVudHNbY2hpbGQubm9kZU5hbWVdICYmIGdldENsZWFuVGV4dChzYW1lTm9kZS50ZXh0Q29udGVudCkgPT09IGdldENsZWFuVGV4dChwYXN0ZWRDb250YWluZXIudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgICAgICBzYW1lTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjaGlsZCwgc2FtZU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSAmJiBibG9ja19lbG1lbnRzW2NoaWxkLm5vZGVOYW1lXSAmJiBzYW1lTm9kZSkge1xyXG4gICAgICAgICAgaWYgKHBhc3RlZENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmluc2VydEFmdGVyKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJCUlwiKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGlsZC51bndyYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIWdldENsZWFuVGV4dChjaGlsZC50ZXh0Q29udGVudCkpIHtcclxuICAgICAgICAgIGNoaWxkLnVud3JhcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGJsb2NrID0gcGFzdGVkQ29udGFpbmVyLmNsb3Nlc3QoXCJoMSxoMixoMyxoNCxoNSxoNixwXCIpO1xyXG4gICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHNwbGl0SFRNTChwYXN0ZWRDb250YWluZXIsIGJsb2NrLCB7IHRhZzogYmxvY2subm9kZU5hbWUgfSk7XHJcbiAgICAgICAgaWYgKHBhcnRzKSB7XHJcbiAgICAgICAgICBwYXJ0cy5sZWZ0LmFwcGVuZENoaWxkKHBhcnRzLmNlbnRlcik7XHJcbiAgICAgICAgICBwYXJ0cy5jZW50ZXIuYXBwZW5kQ2hpbGQocGFydHMucmlnaHQpO1xyXG4gICAgICAgICAgcGFydHMucmlnaHQudW53cmFwKCk7XHJcbiAgICAgICAgICBwYXJ0cy5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICBzZXRDYXJldEF0KHBhc3RlZENvbnRhaW5lcik7XHJcbiAgICAgIHBhc3RlZENvbnRhaW5lci51bndyYXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFzdGVQbGFpblRleHQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG4gIH1cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIHRoaXMucGFzdGUpO1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5jb3B5KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXRTdHlsZSwgSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcgfSBmcm9tIFwiLi9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBMZXZlbHMgZnJvbSAnLi4vY29uc3RhbnRzL0xldmVscy5qc29uJztcclxuaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuLi9jb25zdGFudHMvdm9pZF9lbG1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcE5ha2VkVGV4dE5vZGVzKHRhcmdldCl7XHJcbiAgICAvLyB0YXJnZXQgaXMgdGhlIG1haW4gY29udGVudGVkaXRhYmxlIGVsZW1lbnRcclxuICAgIC8vIHNvIFxyXG4gICAgQXJyYXkuZnJvbSh0YXJnZXQuY2hpbGROb2RlcykuZm9yRWFjaChjPT57XHJcbiBcclxuICAgICAgICBpZihjLm5vZGVUeXBlID09PTEgJiYgIWMudGV4dENvbnRlbnQudHJpbSgpICYmIGMuY2hpbGRyZW4ubGVuZ3RoPT09MCAmJiAhdm9pZF9lbGVtZW50c1tjLm5vZGVOYW1lXSl7XHJcbiAgICAgICAgICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYy5ub2RlVHlwZSA9PT0gMyAmJiBjLnBhcmVudEVsZW1lbnQpe1xyXG4gICAgICAgICAgICBjLnBhcmVudEVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCgoYy5ub2RlVHlwZSA9PT0zICYmIGMucGFyZW50RWxlbWVudCA9PT0gdGFyZ2V0KSkgJiYgIWMucGFyZW50RWxlbWVudC5jbG9zZXN0KFwicFwiKSAmJiBjLnRleHRDb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgYy53cmFwKHApO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0ICBmdW5jdGlvbiB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpIHtcclxuICAgIGlmKCFub2RlKSByZXR1cm4gbnVsbDtcclxuICAgIGZ1bmMobm9kZSk7XHJcbiAgICBub2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgd2Fsa1RoZURPTShub2RlLCBmdW5jKTtcclxuICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCAgZnVuY3Rpb24gd2Fsa09uRWxlbWVudChub2RlLCBmdW5jKSB7XHJcbiAgICBpZighbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBjb250aW51ZVdpdGggPSBmdW5jKG5vZGUpO1xyXG4gICAgaWYoY29udGludWVXaXRoKXtcclxuICAgICAgICBub2RlID0gY29udGludWVXaXRoO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgIHdhbGtPbkVsZW1lbnQobm9kZSwgZnVuYyk7XHJcbiAgICAgIG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcclxuICAgIH1cclxuICB9IFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRFbGVtZW50KCkge1xyXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgdmFyIGFuY05vZGUgPSBub2RlLmZvY3VzTm9kZTtcclxuICAgICAgICBpZiAoYW5jTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgYW5jTm9kZSA9IGFuY05vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBlbCA9IChhbmNOb2RlLm5vZGVUeXBlID09PSAzID8gYW5jTm9kZS5wYXJlbnROb2RlIDogbm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmNOb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvblRvRWxlbWVudChqc29uT2JqZWN0LCBwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAvL1RPRE86IGNyZWF0ZSBwYXJlbnRlbGVtZW50IGFuZCBqc29ub2JqZWN0IHZhbGlkYXRpb24gICBcclxuICAgIGNvbnN0IHJlbmRlckF0dHJzID0gKGpzRWxlbWVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gWy4uLmpzRWxlbWVudC5jbGFzc0xpc3RdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNFbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoanNFbGVtZW50LnN0eWxlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbGxlY3RlZFN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IG90aGVyIGF0dHJzLi4uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChqc0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGpzRWxlbWVudC50YWc7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlzU2hvdWxkUmVuZGVyQXR0cnM7XHJcbiAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShqc0VsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmhyZWYgPSBqc0VsZW1lbnQuaHJlZjtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0ID0ganNFbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZW5kZXJBdHRycyhqc0VsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICghcGFyZW50RWxlbWVudCAmJiBqc29uT2JqZWN0LnR5cGUgPT09IExldmVsc1snMCddKSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzb25PYmplY3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdC5jaGlsZHJlbikpIHtcclxuICAgICAgICBqc29uT2JqZWN0LmNoaWxkcmVuLmZvckVhY2goanNDaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoanNDaGlsZCk7XHJcbiAgICAgICAgICAgIGlmIChodG1sRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBKc29uVG9FbGVtZW50KGpzQ2hpbGQsIGh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbnQgY3JlYXRlIGRvbSBlbGVtZW50IGZyb20ganNvbicsIGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFRvSnNvbihub2RlLCBsZXZlbCkge1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIChsZXZlbCkgIT09IFwibnVtYmVyXCIpIGxldmVsID0gMDtcclxuICAgIGNvbnN0IG5vZGVUeXBlID0gbm9kZS5ub2RlTmFtZTtcclxuICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzID0gdHJ1ZTtcclxuICAgIGxldCBqc29uID0ge307XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKExldmVsc1tsZXZlbF0pIHtcclxuICAgICAgICBqc29uLnR5cGUgPSBMZXZlbHNbbGV2ZWxdO1xyXG4gICAgICAgIGxldmVsKys7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCIjdGV4dFwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3F1ZXN0aW9uOiByZXBsYWNlIFxcbiA/XHJcbiAgICAgICAgICAgIGlmICghanNvbi50ZXh0Q29udGVudC50cmltKCkpIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi5ocmVmID0gbm9kZS5ocmVmO1xyXG4gICAgICAgICAgICBqc29uLnRhcmdldCA9IG5vZGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICAvL1RPRE86IHNob3VsZCB3ZSB1bndyYXAgdGhpcyBub2RlID8gXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzKSB7XHJcbiAgICAgICAgLy9UT0RPOiBnZXQgYXR0cnMgXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShub2RlKTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3R5bGUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAganNvbi5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAganNvbi5jbGFzc0xpc3QgPSBbLi4ubm9kZS5jbGFzc0xpc3RdO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNoaWxkcmVuID0gWy4uLm5vZGUuY2hpbGROb2Rlc10ubWFwKChjbikgPT4gZWxlbWVudFRvSnNvbihjbiwgbGV2ZWwpKS5maWx0ZXIodiA9PiB2KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuXHJcbn0iLCJleHBvcnQgY29uc3QgRVZFTlRTID0ge1xyXG4gIFxyXG59IiwiaW1wb3J0IHsgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4uL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCwgaW5zZXJ0QWZ0ZXIsIHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge3ZvaWRfZWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92b2lkX2VsbXMnO1xyXG5pbXBvcnQgeyBnZXRDbGVhblRleHQgfSBmcm9tIFwiLi4vdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVByZXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSBrZXlQcmVzcyA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uS2V5UHJlc3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSBvcHRpb25zLm9uS2V5UHJlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5rZXlwcmVzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldENsZWFuVGV4dCh0YXJnZXQudGV4dENvbnRlbnQpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3RlSHRtbEF0Q2FyZXQoXCI8YnI+PC9icj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChzZWxlY3Rpb24uYW5jaG9yTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCA9PT0gdGhpcy50YXJnZXQgfHwgIWJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UyZXh0cmFjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UyZXh0cmFjdC5leHRyYWN0Q29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHNlbGVjdGlvbi5hbmNob3JOb2RlLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChibG9ja0VsZW1lbnQsIGJsb2NrRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICE9PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5jaGlsZHJlbikuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0gYmxvY2tFbGVtZW50ICYmICFjLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuaW5uZXJIVE1MID0gYmxvY2tFbGVtZW50LmlubmVySFRNTCArIFwiJiM4MjAzO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY0ZyYWdtZW50ID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY0ZyYWdtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEgJiYgIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSAmJiAhdm9pZF9lbGVtZW50c1tjaGlsZC5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGJsb2NrRWxlbWVudC5ub2RlTmFtZSB8fCBcInBcIik7XHJcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2NGcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0QWZ0ZXIoZWwsIGJsb2NrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsLnByZXZpb3VzU2libGluZy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHI9PntcclxuICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLGF0dHIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrRWxlbWVudC5hcHBlbmRDaGlsZChicik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2Rlcyh0aGlzLnRhcmdldCwgeyBleHBlY3Q6IGJsb2NrRWxlbWVudCB9KTtcclxuICAgICAgICAgICAgICAgIHNldENhcmV0QXQoZWwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9uS2V5UHJlc3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbktleVByZXNzKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCAgIGNvbnN0IFRBUkdFVFMgPSB7XHJcbiAgICBfYmxhbms6IFwiX2JsYW5rXCIsXHJcbiAgICBfc2VsZjogXCJfc2VsZlwiLFxyXG4gICAgX3BhcmVudDogXCJfcGFyZW50XCIsXHJcbiAgICBfdG9wOiBcIl90b3BcIlxyXG59XHJcbmV4cG9ydCAgY29uc3QgcmVzZXRVUkwgPSAoc3JjKSA9PiB7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvaHR0cHM6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9odHRwOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvbWFpbHRvOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvdGVsOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFwvL2csICcnKTtcclxuICAgIHJldHVybiBzcmM7XHJcbn1cclxuZXhwb3J0ICAgY29uc3QgY3JlYXRlVGVtcExpbmtFbGVtZW50ID0gKGhyZWYpID0+IHtcclxuICAgIGNvbnN0IEF0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIEF0YWcuaHJlZiA9IGhyZWY7XHJcbiAgICByZXR1cm4gQXRhZztcclxufSIsImltcG9ydCB7IGJsb2NrX2VsbWVudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSBvcHRpb25zID0ge307XHJcbiAgbGV0IGlubmVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy5lbCB8fCBcInNwYW5cIik7XHJcbiAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4gaW5uZXJTcGFuLmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lclNwYW4pO1xyXG4gIHJldHVybiBpbm5lclNwYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCkge1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICBpZiAoYmxvY2tfZWxtZW50c1tlbGVtZW50Lm5vZGVOYW1lXSkgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIHdoaWxlIChwYXJlbnRFbGVtZW50ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZW1lbnQpLmRpc3BsYXkgPT09IFwiaW5saW5lXCIpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihwYXJlbnRFbGVtZW50ICAmJiBibG9ja19lbG1lbnRzW3BhcmVudEVsZW1lbnQubm9kZU5hbWVdKXtcclxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLy9UT0RPOnJldmlld1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEJsb2NrRWxlbWVudChsaW1pdEVsZW1lbnQpIHtcclxuICBjb25zdCB3cmFwRWxlbWVudFdpdGhCbG9jayA9IChlbCkgPT4ge1xyXG4gICAgbGV0IHdFbCA9IFwiZGl2XCI7XHJcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09IFwiU1BBTlwiKSB7XHJcbiAgICAgIHdFbCA9IFwicFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod0VsKTtcclxuICAgIGVsLndyYXAod3JhcHBlcik7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxuICB9XHJcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICBsZXQgbm9kZXMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gIG5vZGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgYmxvY2tFbCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWwpO1xyXG4gICAgaWYgKGJsb2NrRWwpIHtcclxuICAgICAgaWYgKGJsb2NrRWwuaXNjaGlsZE9mKGxpbWl0RWxlbWVudCkpIHtcclxuICAgICAgICBjb25zdCBmb3VuZGVkID0gZWxlbWVudHMuZmluZChibG9jayA9PiBibG9ja0VsLmlzY2hpbGRPZihibG9jaykpO1xyXG4gICAgICAgIGlmICghZm91bmRlZClcclxuICAgICAgICAgIGVsZW1lbnRzLnB1c2goYmxvY2tFbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgX3dyYXBwZXIgPSB3cmFwRWxlbWVudFdpdGhCbG9jayhlbCk7XHJcbiAgICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKF93cmFwcGVyKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5vZGVzOiBub2RlcyxcclxuICAgIGJsb2NrczogZWxlbWVudHNcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VXaXRoRWxlbWVudCh3cmFwVGFnKSB7XHJcbiAgY29uc3QgcmFuZ2VzID0gZ2V0UmFuZ2VzKCk7XHJcbiAgcmV0dXJuIHJhbmdlcy5tYXAociA9PiB7XHJcbiAgICByZXR1cm4gd3JhcFJhbmdlVGV4dCh3cmFwVGFnLCByKTtcclxuICB9KS5mbGF0KCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlcygpIHtcclxuICBsZXQgcmFuZ2VzID0gW107XHJcblxyXG4gIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWwucmFuZ2VDb3VudDsgaSsrKSB7XHJcbiAgICByYW5nZXNbaV0gPSBzZWwuZ2V0UmFuZ2VBdChpKTtcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlcztcclxufVxyXG4vLyByZXR1cm4gYWxsIHRleHQgbm9kZXMgdGhhdCBhcmUgY29udGFpbmVkIHdpdGhpbiBgZWxgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0Tm9kZXMoZWwpIHtcclxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQsXHJcbiAgICB3YWxrZXIgPSBkb2MuY3JlYXRlVHJlZVdhbGtlcihlbCwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKSxcclxuICAgIHRleHROb2RlcyA9IFtdLFxyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG5cclxuICB3aGlsZSAobm9kZSkge1xyXG4gICAgdGV4dE5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgfVxyXG4gIHJldHVybiB0ZXh0Tm9kZXNcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VzSW50ZXJzZWN0KHJhbmdlQSwgcmFuZ2VCKSB7XHJcbiAgcmV0dXJuIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuRU5EX1RPX1NUQVJULCByYW5nZUIpID09PSAtMSAmJlxyXG4gICAgcmFuZ2VBLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhSYW5nZS5TVEFSVF9UT19FTkQsIHJhbmdlQikgPT09IDFcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSB7XHJcbiAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICB0cnkge1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShub2RlKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKVxyXG4gIH1cclxuICByZXR1cm4gcmFuZ2VcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZXRDaGFyYWN0ZXJPZmZzZXRXaXRoaW4oZWxlbWVudCkge1xyXG4gIHZhciBjYXJldE9mZnNldCA9IDA7XHJcbiAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50LmRvY3VtZW50O1xyXG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcclxuICB2YXIgc2VsO1xyXG4gIGlmICh0eXBlb2Ygd2luLmdldFNlbGVjdGlvbiAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBzZWwgPSB3aW4uZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsLnJhbmdlQ291bnQgPiAwKSB7XHJcbiAgICAgIHZhciByYW5nZSA9IHdpbi5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xyXG4gICAgICB2YXIgcHJlQ2FyZXRSYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgcHJlQ2FyZXRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XHJcbiAgICAgIHByZUNhcmV0UmFuZ2Uuc2V0RW5kKHJhbmdlLmVuZENvbnRhaW5lciwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFJhbmdlLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoKHNlbCA9IGRvYy5zZWxlY3Rpb24pICYmIHNlbC50eXBlICE9IFwiQ29udHJvbFwiKSB7XHJcbiAgICB2YXIgdGV4dFJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICB2YXIgcHJlQ2FyZXRUZXh0UmFuZ2UgPSBkb2MuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHByZUNhcmV0VGV4dFJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgcHJlQ2FyZXRUZXh0UmFuZ2Uuc2V0RW5kUG9pbnQoXCJFbmRUb0VuZFwiLCB0ZXh0UmFuZ2UpO1xyXG4gICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFRleHRSYW5nZS50ZXh0Lmxlbmd0aDtcclxuICB9XHJcbiAgcmV0dXJuIGNhcmV0T2Zmc2V0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDYXJldEF0KGVsZW1lbnQsIGNoYXJJbmRleCA9IDApIHtcclxuXHJcbiAgdmFyIG5vZGUgPSBlbGVtZW50O1xyXG4gIG5vZGUuZm9jdXMoKTtcclxuICB2YXIgdGV4dE5vZGUgPSBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSk7XHJcbiAgaWYgKHRleHROb2RlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgdGV4dE5vZGUgPSBlbGVtZW50O1xyXG4gICAgd2hpbGUgKHRleHROb2RlICYmIHRleHROb2RlLmZpcnN0Q2hpbGQgJiYgdGV4dE5vZGUubm9kZVR5cGUgIT09IDMpIHtcclxuICAgICAgdGV4dE5vZGUgPSB0ZXh0Tm9kZS5maXJzdENoaWxkO1xyXG4gICAgfVxyXG4gICAgaWYodGV4dE5vZGUpe1xyXG4gICAgICB0ZXh0Tm9kZSA9IFt0ZXh0Tm9kZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlWzBdLCBjaGFySW5kZXgpO1xyXG4gIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZVswXSwgY2hhckluZGV4KTtcclxuICByYW5nZS5jb2xsYXBzZSh0cnVlKVxyXG4gIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXN0ZUh0bWxBdENhcmV0KGh0bWwpIHtcclxuICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICBjb25zdCBjb250ZW50ZWRpdGFibGUgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpO1xyXG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICBpZiAoY29udGVudGVkaXRhYmxlKSB7XHJcbiAgICBpZiAoIWNvbnRlbnRlZGl0YWJsZS5jb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICghaXNWYWxpZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHZhciBzZWwsIHJhbmdlO1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAvLyBJRTkgYW5kIG5vbi1JRVxyXG4gICAgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XHJcblxyXG4gICAgICAvLyBSYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoKSB3b3VsZCBiZSB1c2VmdWwgaGVyZSBidXQgaXNcclxuICAgICAgLy8gb25seSByZWxhdGl2ZWx5IHJlY2UgbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cclxuICAgICAgLy8gc29tZSBicm93c2VycyAoSUU5LCBmb3Igb25lKVxyXG4gICAgICBsZXQgZWw7XHJcbiAgICAgIGlmICh0eXBlb2YgKGh0bWwpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIG5vZGUsIGxhc3ROb2RlO1xyXG4gICAgICAgIHdoaWxlICgobm9kZSA9IGVsLmZpcnN0Q2hpbGQpKSB7XHJcbiAgICAgICAgICBsYXN0Tm9kZSA9IGZyYWcuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhbmdlLmluc2VydE5vZGUoZnJhZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIChodG1sKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHJhbmdlLmluc2VydE5vZGUoaHRtbCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAvLyBQcmVzZXJ2ZSB0aGUgc2VsZWN0aW9uXHJcbiAgICAgIGlmIChsYXN0Tm9kZSkge1xyXG4gICAgICAgIHJhbmdlID0gcmFuZ2UuY2xvbmVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0QWZ0ZXIobGFzdE5vZGUpO1xyXG4gICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUludGVyc2VjdHNOb2RlKHJhbmdlLCBub2RlKSB7XHJcbiAgaWYgKHJhbmdlLmludGVyc2VjdHNOb2RlKSB7XHJcbiAgICByZXR1cm4gcmFuZ2UuaW50ZXJzZWN0c05vZGUobm9kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJhbmdlc0ludGVyc2VjdChyYW5nZSwgY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSlcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKSB7XHJcbiAgdmFyIGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxyXG4gICAgbm9kZXMgPSBnZXRUZXh0Tm9kZXMoY29udGFpbmVyLnBhcmVudE5vZGUgfHwgY29udGFpbmVyKVxyXG5cclxuICByZXR1cm4gbm9kZXMuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICByZXR1cm4gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkgJiYgaXNOb25FbXB0eVRleHROb2RlKG5vZGUpXHJcbiAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNOb25FbXB0eVRleHROb2RlKG5vZGUpIHtcclxuICByZXR1cm4gbm9kZS50ZXh0Q29udGVudC5sZW5ndGggPiAwXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcclxuICBpZiAoZWwucGFyZW50Tm9kZSkge1xyXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSkge1xyXG4gIGlmICh0eXBlb2Ygbm9kZS5wYXJlbnROb2RlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZW1vdmVFbGVtZW50KHJlcGxhY2VtZW50Tm9kZSk7XHJcbiAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSk7XHJcbiAgICByZW1vdmVFbGVtZW50KG5vZGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0VGV4dChub2RlKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChub2RlKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IHNlbGVjdCB0ZXh0IGluIG5vZGU6IFVuc3VwcG9ydGVkIGJyb3dzZXIuXCIpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xyXG4gIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXJGdW5jdGlvbih3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgdmFyIHN0YXJ0Tm9kZSA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLFxyXG4gICAgZW5kTm9kZSA9IHJhbmdlLmVuZENvbnRhaW5lcixcclxuICAgIHN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQsXHJcbiAgICBlbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXRcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBOb2RlKG5vZGUpIHtcclxuICAgIHZhciBjdXJyZW50UmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICBjdXJyZW50V3JhcHBlciA9IHdyYXBwZXJFbC5jbG9uZU5vZGUoKVxyXG5cclxuICAgIGN1cnJlbnRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICBpZiAobm9kZSA9PT0gc3RhcnROb2RlICYmIHN0YXJ0Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0U3RhcnQobm9kZSwgc3RhcnRPZmZzZXQpXHJcbiAgICAgIHN0YXJ0Tm9kZSA9IGN1cnJlbnRXcmFwcGVyXHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUgPT09IGVuZE5vZGUgJiYgZW5kTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0RW5kKG5vZGUsIGVuZE9mZnNldClcclxuICAgICAgZW5kTm9kZSA9IGN1cnJlbnRXcmFwcGVyO1xyXG4gICAgICBlbmRPZmZzZXQgPSAxXHJcbiAgICB9XHJcbiAgICBjdXJyZW50UmFuZ2Uuc3Vycm91bmRDb250ZW50cyhjdXJyZW50V3JhcHBlcilcclxuICAgIHJldHVybiBjdXJyZW50V3JhcHBlclxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RvclVuZGVyU2VsZWN0aW9uID0gKHF1ZXJ5U2VsZWN0b3IpID0+IHtcclxuICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHZhciByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChxdWVyeVNlbGVjdG9yKTtcclxuICBjb25zdCBhbGxTZWxlY3RlZCA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwLCBlbDsgZWwgPSBlbGVtZW50c1tpXTsgaSsrKSB7XHJcbiAgICAvLyBUaGUgc2Vjb25kIHBhcmFtZXRlciBzYXlzIHRvIGluY2x1ZGUgdGhlIGVsZW1lbnQgXHJcbiAgICAvLyBldmVuIGlmIGl0J3Mgbm90IGZ1bGx5IHNlbGVjdGVkXHJcbiAgICBpZiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShlbCwgdHJ1ZSkpIHtcclxuICAgICAgICBhbGxTZWxlY3RlZC5wdXNoKGVsKTtcclxuICAgIH1cclxufVxyXG5yZXR1cm4gYWxsU2VsZWN0ZWQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE5vZGVzKCkge1xyXG4gIHZhciBub2RlcywgcmFuZ2U7XHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VUZXh0KHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICBpZiAodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICB9XHJcblxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3JhcHBlckVsID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGFzc3VtZSBpdCdzIGEgdGFnbmFtZVxyXG4gICAgd3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gIH1cclxuXHJcbiAgd3JhcE5vZGUgPSBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBub2Rlcy5tYXAod3JhcE5vZGUpO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3QgX29wdGlvbnMgPSB7IHJlbW92ZTogdHJ1ZSB9O1xyXG4gIE9iamVjdC5hc3NpZ24oX29wdGlvbnMsIG9wdGlvbnMpO1xyXG4gIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnNldEJhc2VBbmRFeHRlbnQoZmlyc3RGbGFnLCAwLCBsYXN0RmxhZywgbGFzdEZsYWcuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gIGlmIChfb3B0aW9ucy5yZW1vdmUpIHtcclxuICAgIFtmaXJzdEZsYWcsIGxhc3RGbGFnXS5mb3JFYWNoKGUgPT4gZS51bndyYXAoKSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25GbGFncyhmaXJzdEVsZW1lbnQsIExhc3RFbGVtZW50KSB7XHJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIGNvbnN0IGZpcnN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgZmlyc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIGZpcnN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgY29uc3QgbGFzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGxhc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIExhc3RFbGVtZW50LnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMClcclxuXHJcbiAgZmlyc3RFbGVtZW50LnByZXBlbmQoZmlyc3RGbGFnKTsgLy9TZXQgZmxhZyB0aGUgZmlyc3RcclxuICBMYXN0RWxlbWVudC5hcHBlbmRDaGlsZChsYXN0RmxhZyk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gIHJldHVybiB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRIVE1MKCkge1xyXG4gIHZhciByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgaWYgKHJhbmdlLmNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY29udGVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgcmFuZ2U6IHJhbmdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2VsZWN0aW9uKCkge1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlU2VsZWN0aW9uKHJhbmdlKSB7XHJcbiAgaWYgKHJhbmdlKSB7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiByYW5nZS5zZWxlY3QpIHtcclxuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3NOYW1lIH0gZnJvbSBcIi4vY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlUnVsZXMgfSBmcm9tIFwiLi4vcnVsZXMvcnVsZXNcIjtcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGludGFpbFN0eWxlID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuXHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBnZXRTdHlsZShjdXJyZWN0RWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwW3N0eWxlXTtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbiAgY291bGQgYmUgdHdpY2UgbGlrZSB1bmRlcmxpbmUgYW5kIHN0cmlrZSB0aGVyb3VnaC4uIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRhaWxTdHlsZVtzdHlsZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW50YWlsU3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGludGFpbFN0eWxlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IGVsLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9KVxyXG59XHJcbi8vVE9HR0xFXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBpc09uKSB7XHJcbiAgICBpZiAoaXNPbikge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7dmFsdWV9J11gKSkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGVba2V5XSA9IGNoaWxkLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoY2hpbGQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShjaGlsZCk7XHJcbiAgICB9KVxyXG59XHJcbi8vRVhURU5EXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBqc29uU3R5bGUpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25TdHlsZSkge1xyXG4gICAgICAgIGlmIChqc29uU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGpzb25TdHlsZVtrZXldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9UT0dHTEVcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICBpZihrZXkgPT09IFwiY29sb3JcIil7XHJcbiAgICAgICAgVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6J2NvbG9yJyx2YWx1ZTp2YWx1ZX0pO1xyXG4gICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgIH0pO1xyXG4gICAgLy9leHBlcmltZW50YWw6IHN0eWxlIHRoZSB0ZXh0IGRlY29yYXRpb25zIHdpdGggY29sb3IuLlxyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgLy8gVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6a2V5LHZhbHVlOnZhbHVlfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgPSAoY29ubmVjdGVjRWxlbWVudCkgPT57ICAgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gZ2V0SW5oZWlydENzcyhzZWxlY3RlZEVsZW1lbnQsY29ubmVjdGVjRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShlbGVtZW50KSB7XHJcbiAgICBpZighZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0U3R5bGVzID0gZ2V0U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdFN0eWxlcykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtjb2xsZWN0U3R5bGVzW2tleV19J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKHN0eWxlcykge1xyXG4gICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLnB1c2goYCR7a2V5fToke3N0eWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0U3R5bGVzLmpvaW4oJzsnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcclxuICAgIGlmICghZWwgfHwgIWVsLnN0eWxlKSByZXR1cm4ge307XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBsZXQgc3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsZXQgY29sbGVjdFN0eWxlcyA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdFN0eWxlcykpIHtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVbMV0gJiYga2V5VmFsdWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleVZhbHVlWzBdLnRyaW0oKV0gPSBrZXlWYWx1ZVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZXM7XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWVyZ2VOb2RlQ29udGVjdCwgbWVyZ2VUd29Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXMvbWVyZ2VyXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbCAtIGVsZW1lbnQgdG8gbm9ybWFsaXplXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudChlbCkge1xyXG4gICAgY29uc3QgcmVjdXJzZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICByZWN1cnNlKGNoaWxkKTtcclxuICAgICAgICAgICAgX25vcm1hbGl6ZShjaGlsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBtZXJnZU5vZGVzU3R5bGVzID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAod3JhcHBlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gd3JhcHBlci5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5leHRFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZVR3b05vZGVzKHdyYXBwZXIsIG5leHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNDb250ZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICYmIHdyYXBwZXIubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gbWVyZ2VOb2RlQ29udGVjdCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lcmdlZFN0eWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtZXJnZWRDb250ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gX25vcm1hbGl6ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBtZXJnZWRTdHlsZXMgPSBtZXJnZU5vZGVzU3R5bGVzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbWVyZ2VkQ29udGVudCA9IG1lcmdlTm9kZXNDb250ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSB3aGlsZSAobWVyZ2VkQ29udGVudCAmJiBlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsLm5vcm1hbGl6ZSgpO1xyXG4gICAgcmVjdXJzZShlbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZShlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vICBjb25zdCB0YWdzID0gW1wiU1RSSUtFXCIsIFwiRU1cIiwgXCJJXCIsIFwiQlwiLCBcIlNUUk9OR1wiLCBcIlVcIiwgXCJBXCJdO1xyXG5cclxuICAgICAgICAvL1RPRE86IG5vcm1hbGl6ciBhdHRyaWJ1dGVzIChubzpzdHlsZSxjbGFzc05hbWUpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIgJiYgKCFlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtBcnJheX0gdGV4dE5vZGVzIC0gdGV4dG5vZGUgdG8gcmVtb3ZlIHRoZSB6ZXJvIHNwYWNlIGxpa2UgOiB1MjAwQlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVplcm9TcGFjZSh0ZXh0Tm9kZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXh0Tm9kZXMpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzID0gW3RleHROb2Rlc107XHJcbiAgICB9XHJcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiVEVYVC1TRUxFQ1RJT05cIikge1xyXG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsZWFuVGV4dCh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHMvZywgXCJcIikucmVwbGFjZSgvW1xcdTIwMEItXFx1MjAwRFxcdUZFRkZdL2csICcnKSBcclxufSIsImNsYXNzIERvbVV0aWxpcyB7XHJcblxyXG5cclxuICBpc0VsZW1lbnQob2JqKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKG9iai5ub2RlVHlwZSA9PT0gMSkgJiYgKHR5cGVvZiBvYmouc3R5bGUgPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gXCJvYmplY3RcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHdyYXAoZWwsIHdyYXBwZXIpIHtcclxuICAgIC8vZWwgc2hvdWxkIGJlIGFycmF5XHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xyXG4gICAgICBlbGVtZW50cyA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudHMgPSBbZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhcmVudHMgPSBlbGVtZW50cy5tYXAoZSA9PiBlLnBhcmVudE5vZGUpO1xyXG4gICAgdmFyIHBhcmVudHNEaWZmID0gcGFyZW50cy5maWx0ZXIoKHAsIF8sIHNlbGYpID0+IHsgcmV0dXJuIHNlbGZbMF0gIT09IHAgfSk7XHJcbiAgICBpZiAocGFyZW50c0RpZmYubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbd3JhcF0gZm91bmQgJHtwYXJlbnRzRGlmZi5sZW5ndGh9IGRpZmZlcmVudCBwYXJlbnRzIPCfmIVgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGFyZW50c1swXS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNbMF0pXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKF9lbCA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKF9lbCkpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEb21VdGlsaXMoKTsgXHJcblxyXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7aWYobnVsbCE9PWUpe3ZhciB0PWUuYW5jaG9yTm9kZTtpZihudWxsIT09dCl7Zm9yKDszPT09dC5ub2RlVHlwZTspdD10LnBhcmVudE5vZGU7cmV0dXJuIHR9cmV0dXJuIG51bGx9fVxyXG5FbGVtZW50LnByb3RvdHlwZS53cmFwID0gKCB3cmFwcGVyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKSB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyKTtcclxuICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dCh0aGlzKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IFxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLmlzY2hpbGRPZiA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIGlmICghcGFyZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgbGV0IG5vZGUgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xyXG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5jb25zdCBfd3JhcCA9IGZ1bmN0aW9uKHdyYXBwZXIpIHtcclxuICBpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIGZhbHNlO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5UZXh0LnByb3RvdHlwZS53cmFwID0gX3dyYXA7XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobmV3Tm9kZSkge1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy5uZXh0U2libGluZyk7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZU5vZGUgPSBmdW5jdGlvbihyZXBsYWNlbWVudE5vZGUpIHtcclxuICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgdGhpcylcclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xyXG4gIH1cclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS51bndyYXAgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpXHJcbiAgdmFyIGV4dHJhQ29udGVudHMgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICB0aGlzLnJlcGxhY2VOb2RlKGV4dHJhQ29udGVudHMpXHJcbiAgcmV0dXJuIGV4dHJhQ29udGVudHM7XHJcbn1cclxuIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi9Eb21VdGlsaXNcIlxyXG5pbXBvcnQgeyBnZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRDbGFzc2VzLCBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi9fYXBwLmNvbmZpZy5qc29uJztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICAqIFJldHVybnMgdGhlIG5ldyBtZXJnZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gRG9tRWxlbWVudCAtIGVsZW1lbnQgdG8gbWVyZ2Ugd2l0aCBoaXMgZmlyc3QgY2hpbGRcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZU5vZGVDb250ZWN0ID0gbm9kZSA9PiB7XHJcblxyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KG5vZGUpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gbm9kZSBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBpZiAoIWZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3QgY2hpbGQgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlyc3RDaGlsZC5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3RDaGlsZCBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS50ZXh0Q29udGVudCAhPT0gZmlyc3RDaGlsZC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSB0ZXh0IGNvbnRlbnQgaXMgZGlmZmVyZW50Jyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudFByb3BzID0ge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShub2RlKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKG5vZGUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKG5vZGUpXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIF9lbGVtZW50UHJvcHMuc3R5bGUpIHtcclxuICAgICAgICBjb25zdCBzdHlsZVZhbHVlID0gX2VsZW1lbnRQcm9wcy5zdHlsZVtzdHlsZV07XHJcbiAgICAgICAgZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gPSAoZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gKyBcIiBcIiArIHN0eWxlVmFsdWUpLnRyaW0oKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBfZWxlbWVudFByb3BzLmF0dHJzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gX2VsZW1lbnRQcm9wcy5hdHRyc1thdHRyXTtcclxuICAgICAgICBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKC4uLl9lbGVtZW50UHJvcHMuY2xhc3Nlcyk7XHJcbiAgICBub3JtYWxpemVDbGFzc05hbWUoZmlyc3RDaGlsZCk7XHJcbiAgICBub3JtYWxpemVFbGVtZW50KGZpcnN0Q2hpbGQpO1xyXG4gICAgaWYoZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50KVxyXG4gICAgZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVR3b05vZGVzKGVsZW1lbnRPbmUsIGVsZW1lbnRUd28pIHtcclxuICAgIGlmICghRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50T25lKSB8fCAhRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50VHdvKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ29uZSBvZiB0aGUgcHJvcHMgaXMgbm90IGRvbSBlbGVtZW50Li4sIHBsZWFzZSBpbnNlcnQgdHdvIGVsZW1lbnQgdG8gbWVyZ2UuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnRPbmUubm9kZU5hbWUgIT09IFwiU1BBTlwiIHx8IGVsZW1lbnRUd28ubm9kZU5hbWUgIT09IFwiU1BBTlwiKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudHNEYXRhID0gW3tcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudE9uZSksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50T25lKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50T25lKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudFR3byksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50VHdvKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50VHdvKVxyXG4gICAgfV1cclxuICAgIGNvbnN0IGdldENvbW1vbkNsYXNzZXMgPSAoY2xhc3NlczEsIGNsYXNzZXMyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGFzc2VzMSB8fCAhY2xhc3NlczIpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICBjb25zdCBjMSA9IFsuLi5jbGFzc2VzMV07XHJcbiAgICAgICAgY29uc3QgYzIgPSBbLi4uY2xhc3NlczJdO1xyXG4gICAgICAgIHJldHVybiBjMS5maWx0ZXIoYyA9PiBjMi5pbmNsdWRlcyhjKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb21tb25TdHlsZXMgPSAoc3R5bGUxLCBzdHlsZTIpID0+IHtcclxuICAgICAgICBjb25zdCBjb21tbW9uU3R5bGVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIHN0eWxlMSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0eWxlMltzXSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUxVmFsdWVzID0gc3R5bGUxW3NdO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTJWYWx1ZXMgPSBzdHlsZTJbc107XHJcbiAgICAgICAgICAgIGlmIChzdHlsZTJWYWx1ZXMgPT09IHN0eWxlMVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgY29tbW1vblN0eWxlc1tzXSA9IHN0eWxlMlZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tbW1vblN0eWxlcztcclxuICAgIH07XHJcbiAgICBjb25zdCBjb21tb25jTGFzc2VzID0gZ2V0Q29tbW9uQ2xhc3NlcyhfZWxlbWVudHNEYXRhWzBdLmNsYXNzZXMsIF9lbGVtZW50c0RhdGFbMV0uY2xhc3Nlcyk7XHJcbiAgICBjb25zdCBjb21tb25TdHlsZXMgPSBnZXRDb21tb25TdHlsZXMoX2VsZW1lbnRzRGF0YVswXS5zdHlsZSwgX2VsZW1lbnRzRGF0YVsxXS5zdHlsZSk7XHJcbiAgICBjb25zdCBidWlsZFdyYXBwaW5nRWxlbWVudCA9IChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdHlsZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlW3NdID0gY29tbW9uU3R5bGVzW3NdO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGNsYXNzZXNcclxuICAgICAgICBpZiAoY29tbW9uY0xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdyYXBwZXIuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci51bndyYXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGJ1aWxkV3JhcHBpbmdFbGVtZW50KGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCd3cmFwcGVyIGlzIG51bGwnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudENsYXNzZXMgPSAobm9kZSwgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUobm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRTdHlsZXMgPSAobm9kZSwgY29tbW9uU3R5bGVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgbm9kZS5zdHlsZVtzXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtlbGVtZW50T25lLCBlbGVtZW50VHdvXTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50Q2xhc3NlcyhlLCBjb21tb25jTGFzc2VzKTtcclxuICAgICAgICBjbGVhckVsZW1lbnRTdHlsZXMoZSwgY29tbW9uU3R5bGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgRG9tVXRpbGlzLndyYXAoZWxlbWVudHMsIHdyYXBwZXIpO1xyXG4gICAgWy4uLndyYXBwZXIuY2hpbGRyZW5dLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudChjKVxyXG4gICAgfSlcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vblZhbHVlc09iamVjdChvYmoxLCBvYmoyKSB7XHJcbiAgICBsZXQgY29tbW9uVmFsdWVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcbiAgICAgICAgaWYgKG9iajJba2V5XSAmJiBvYmoyW2tleV0gPT09IG9iajFba2V5XSkge1xyXG4gICAgICAgICAgICBjb21tb25WYWx1ZXNba2V5XSA9IG9iajFba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21tb25WYWx1ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vbkFycmF5cyhhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBtZXJnZUFyciA9IFtdO1xyXG4gICAgQXJyYXkuZnJvbShhcnIxKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChhcnIyLmZpbmRJbmRleChpID0+IGkgPT09IGl0ZW0pID4gMCkge1xyXG4gICAgICAgICAgICBtZXJnZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWVyZ2VBcnI7XHJcbn0iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENsYXNzTmFtZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRIVE1MKGZyb21FbGVtZW50LCB0b0VsZW1lbnQsb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCB7dGFnID0gXCJzcGFuXCJ9ID0gb3B0aW9ucztcclxuICAgIGlmICghZnJvbUVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCBtdXN0IGJlIGNoaWxkIG9mIHRvRWxlbWVudCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQoZnJvbUVsZW1lbnQpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCAmJiB0b0VsZW1lbnQgbXVzdCBiZSBkb20gZWxlbWVudHMuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0QXR0cnMgPSAoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbihcIiBcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIGZyb21FbGVtZW50LmNyZWF0ZVNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgY2VudGVyVGVtcGxhdGUgPSBzZXRBdHRycyhjZW50ZXJFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgLy9jZW50ZXJcclxuICAgIGNlbnRlclRlbXBsYXRlLmFwcGVuZENoaWxkKGZyb21FbGVtZW50KTtcclxuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB2YXIgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIC8vbGVmdFxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodG9FbGVtZW50LCAwKTtcclxuICAgIGNvbnN0IGxlZnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBsZWZ0VGVtcGxhdGUgPSBzZXRBdHRycyhsZWZ0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciBsZWZ0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIGxlZnRUZW1wbGF0ZS5hcHBlbmRDaGlsZChsZWZ0UmFuZ2UpO1xyXG4gICAgLy9yaWdodFxyXG4gICAgcmFuZ2Uuc2V0RW5kKHRvRWxlbWVudCwgdG9FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgcmlnaHRUZW1wbGF0ZSA9IHNldEF0dHJzKHJpZ2h0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciByaWdodFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICByaWdodFRlbXBsYXRlLmFwcGVuZENoaWxkKHJpZ2h0UmFuZ2UpO1xyXG4gICAgY29uc3Qgc3BsaXQgPSB7XHJcbiAgICAgICAgbGVmdDogbGVmdFRlbXBsYXRlLFxyXG4gICAgICAgIGNlbnRlcjogY2VudGVyVGVtcGxhdGUsXHJcbiAgICAgICAgcmlnaHQ6IHJpZ2h0VGVtcGxhdGVcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBlbCBpbiBzcGxpdCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdFtlbF07XHJcbiAgICAgICAgdG9FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIHNwbGl0O1xyXG5cclxufSIsImltcG9ydCBDb3JlIGZyb20gJy4vU3R5bGVJdC9pbmRleCc7XHJcbmltcG9ydCAgTU9ERVMgIGZyb20gJy4vU3R5bGVJdC9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFN0eWxlSXRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlSXQge1xyXG4gIC8vZXhwb3NlIG9ubHkgdGhlIHJlbGV2YW50IG1ldGhvZHMuLlxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAvL1RPRE86IHZhbGlkYXRlIHRhcmdldCAmIGNvbmZpZy4uXHJcbiAgICBjb25zdCBzdHlsZUl0ID0gbmV3IENvcmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgaWYgKHN0eWxlSXQpIHsgIFxyXG4gICAgICB0aGlzLmV4ZWNDbWQgPSBzdHlsZUl0LmV4ZWNDbWQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgPSBzdHlsZUl0LnRvZ2dsZUNsYXNzO1xyXG4gICAgICB0aGlzLmxpbmsgPSBzdHlsZUl0Lmxpbms7XHJcbiAgICAgIHRoaXMudW5MaW5rID0gc3R5bGVJdC51bkxpbms7XHJcbiAgICAgIHRoaXMuc2F2ZSA9IHN0eWxlSXQuc2F2ZTtcclxuICAgICAgdGhpcy5sb2FkID0gc3R5bGVJdC5sb2FkO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSBzdHlsZUl0LmRlc3Ryb3k7XHJcbiAgICAgIHRoaXMub24gPSBzdHlsZUl0Lm9uO1xyXG4gICAgICB0aGlzLk1PREVTID0gTU9ERVM7XHJcbiAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgPSB0aGlzLnRvZ2dsZUNsYXNzLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuZXhlY0NtZCA9IHRoaXMuZXhlY0NtZC5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmxpbmsgPSB0aGlzLmxpbmsuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy51bkxpbmsgPSB0aGlzLnVuTGluay5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5sb2FkID0gdGhpcy5sb2FkLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHN0eWxlSXQpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=