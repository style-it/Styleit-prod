/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.43
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
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements.service */ "./src/StyleIt/services/elements.service.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _textEditor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textEditor.service */ "./src/StyleIt/services/textEditor.service.js");









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
              const collectedCSS = Object(_style_service__WEBPACK_IMPORTED_MODULE_5__["getInheirtCss"])(parentCopiedNode, this.target);
              const span = document.createElement("span");
              span.textContent = copiedNode.textContent;
              debugger
              Object(_style_service__WEBPACK_IMPORTED_MODULE_5__["setStyles"])(span, collectedCSS);
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

    // document.execCommand('inserttext', false, content);
    Object(_range_service__WEBPACK_IMPORTED_MODULE_4__["pasteHtmlAtCaret"])(p);
    Object(_range_service__WEBPACK_IMPORTED_MODULE_4__["setCaretAt"])(p);

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
      debugger
      pastedContainer.innerHTML = copied;
      Object(_range_service__WEBPACK_IMPORTED_MODULE_4__["pasteHtmlAtCaret"])(pastedContainer);
      Array.from(this.target.children).forEach(child=>{
        if(!child.textContent.trim()){
          child.parentElement.removeChild(child);
        }
      });
      Array.from(pastedContainer.children).forEach(child=>{
        const sameNode = child.parentElement.closest("h1,h2,h3,h4,h5,h6,p");
        if(child.nodeType === 1 && child.nodeName !== "SPAN" && sameNode){
          child.unwrap();

        }
        if(!child.textContent.trim()){
          child.unwrap();
        }
      });
      debugger
      const block = pastedContainer.closest("h1,h2,h3,h4,h5,h6,p");
      if(block){
        const parts = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_2__["splitHTML"])(pastedContainer,block,{tag:block.nodeName});
        if(parts) {
          parts.left.appendChild(parts.center);
          parts.center.appendChild(parts.right);
          parts.right.unwrap();
          parts.center.unwrap();
        }
      }
      Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_6__["normalizeElement"])(this.target);
      Object(_range_service__WEBPACK_IMPORTED_MODULE_4__["setCaretAt"])(pastedContainer);
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
    console.log('[mergeTwoNodes] START');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2NvbnN0YW50cy9ibG9ja19lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25zdGFudHMvdm9pZF9lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvcnVsZXMvcnVsZXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvYXR0ci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvbGluay5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9Eb21VdGlsaXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9tZXJnZXIuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9zcGxpdEhUTUwuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsMEJBQTBCLDRFQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0EsQyIsImZpbGUiOiJzdHlsZWl0LWFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjJykuZGVmYXVsdDtcclxuIiwiXHJcbmNsYXNzIFRleHRTZWxlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7XHJcbiAgICAgIGNvbnN0IGNyZWF0ZVplcm9TcGFjZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJyk7XHJcbiAgICAgIGlmKGNyZWF0ZVplcm9TcGFjZSA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gXCImIzgyMDM7XCI7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKCFjdXN0b21FbGVtZW50cy5nZXQoJ3RleHQtc2VsZWN0aW9uJykpe1xyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0ZXh0LXNlbGVjdGlvbicsIFRleHRTZWxlY3Rpb24pOyBcclxuICB9XHJcbiIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vdXRpbGlzL0RvbVV0aWxpc1wiO1xyXG5pbXBvcnQgQ29weVBhc3RlIGZyb20gXCIuL3NlcnZpY2VzL2NvcHlQYXN0ZS9jb3B5UGFzdGUuc2VydmljZVwiO1xyXG5pbXBvcnQgSW5wc2VjdG9yIGZyb20gXCIuL3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgS2V5UHJlc3MgZnJvbSBcIi4vc2VydmljZXMva2V5UHJlc3MvS2V5UHJlc3NcIjtcclxuXHJcbmltcG9ydCB7IGVsZW1lbnRUb0pzb24sIEpzb25Ub0VsZW1lbnQsIHdyYXBOYWtlZFRleHROb2RlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIENvbm5lY3QoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKERvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgLy8gdmFsaWQuLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dID0+Y29ubmVjdFdpdGggc2hvdWxkIGJlIGVsZW1lbnQgaWQgb3IgZG9tIGVsZW1lbnQuLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgUmVuZGVySW5uZXJIVE1MID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlFbGVtZW50ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3JhcE5ha2VkVGV4dE5vZGVzKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QganNvbkNvbnRlbnQgPSBlbGVtZW50VG9Kc29uKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gSnNvblRvRWxlbWVudChqc29uQ29udGVudCk7XHJcblxyXG4gICAgICAgICAgICBlbXB0eUVsZW1lbnQoZWxlbWVudCkudGhlbigoKSA9PiBlbGVtZW50LmlubmVySFRNTCA9IHJlbmRlcmVkRWxlbWVudC5pbm5lckhUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VQbHVnaW5zID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcHlQYXN0ZTogbmV3IENvcHlQYXN0ZShlbGVtZW50LCBvcHRpb25zKSxcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvcjogbmV3IElucHNlY3RvcihlbGVtZW50LCBvcHRpb25zLm9uSW5zcGVjdCksXHJcbiAgICAgICAgICAgICAgICBrZXlQcmVzczogbmV3IEtleVByZXNzKGVsZW1lbnQsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgUmVuZGVySW5uZXJIVE1MKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHVzZVBsdWdpbnMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IGRlc3RvcnkgZXZlbnRzLi5cclxuICAgIC8vcXVlc3Rpb246IGhvdyB0byB1c2UgdGhlIGV2ZW50cyA/IFxyXG5cclxuXHJcbiAgICBEZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGx1Z2lucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luLkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IGJsb2NrX2VsbWVudHMgPSB7XHJcbiAgICBcIkgxXCI6XCJIMVwiLFxyXG4gICAgXCJIMlwiOlwiSDJcIixcclxuICAgIFwiSDNcIjpcIkgzXCIsXHJcbiAgICBcIkg0XCI6XCJINFwiLFxyXG4gICAgXCJINVwiOlwiSDVcIixcclxuICAgIFwiSDZcIjpcIkg2XCIsXHJcbiAgICBcIlBcIjpcIlBcIixcclxuICAgIFwiTElcIjpcIkxJXCIsXHJcbiAgICBcIk9MXCI6XCJPTFwiXHJcbn0gICAgICAgICAgICIsImV4cG9ydCBjb25zdCB2b2lkX2VsZW1lbnRzID0ge1xyXG4gICAgXCJCUlwiOlwiQlJcIixcclxuICAgIFwiSFJcIjpcIkhSXCIsXHJcbiAgICBcIklNR1wiOlwiSU1HXCIsXHJcbiAgICBcIklOUFVUXCI6XCJJTlBVVFwiLFxyXG4gICAgXCJBVURJT1wiOlwiQVVESU9cIixcclxuICAgIFwiVklERU9cIjpcIlZJREVPXCIsXHJcbiAgICBcIlBJQ1RVUkVcIjpcIlBJQ1RVUkVcIlxyXG59IiwiaW1wb3J0IHtcclxuICAgIHdyYXBSYW5nZVdpdGhFbGVtZW50LFxyXG4gICAgc2V0U2VsZWN0aW9uRmxhZ3MsXHJcbiAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMsXHJcbiAgICBnZXRUZXh0Tm9kZXMsXHJcbiAgICBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50LFxyXG4gICAgc2V0Q2FyZXRBdCxcclxuICAgIEdldENsb3Nlc3RCbG9ja0VsZW1lbnRcclxufSBmcm9tIFwiLi9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RlcyBmcm9tICcuL2NvbnN0YW50cy9Nb2Rlcy5qc29uJztcclxuaW1wb3J0IHsgc3BsaXRIVE1MIH0gZnJvbSBcIi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBzZXRTdHlsZSwgdG9nZ2xlU3R5bGUsIGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQsIHJlbW92ZVplcm9TcGFjZSB9IGZyb20gXCIuL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29ubmVjdG9yIGZyb20gJy4vY29ubmVjdG9yJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY3VzdG9tL3RleHRTZWxlY3RlZCc7XHJcbmltcG9ydCB7IGVsZW1lbnRUb0pzb24sIEpzb25Ub0VsZW1lbnQsIGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFVkVOVFN9IGZyb20gJy4vc2VydmljZXMvZXZlbnRzL2V2ZW50cyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRlbXBMaW5rRWxlbWVudCwgcmVzZXRVUkwsVEFSR0VUUyB9IGZyb20gXCIuL3NlcnZpY2VzL2xpbmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzL3ZvaWRfZWxtc1wiO1xyXG5pbXBvcnQgeyBibG9ja19lbG1lbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xyXG5cclxuICAgIC8vICp0YXJnZXQgPT4gY2FuIGJlIElkIG9mIEVsZW1lbnQgdGhhdCBzaG91bGQgY29udGFpbiBFZGl0b3IgaW5zdGFuY2Ugb3IgdGhlIGVsZW1lbnQgaXRzZWxmLi5cclxuICAgIC8vICpjb25maWcgPT4gIGNvbmZpZ3VyYXRpb24gcGFzc2VkIHQgICBvIFRvb2wgY29uc3RydWN0b3JcclxuICAgIC8vVE9ETzogYWRkIHRhcmdldCB2YWxpZGF0aW9ucy4uO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLl9fY29uZmlnID0ge1xyXG4gICAgICAgICAgICBvbkluc3BlY3Q6IHVuZGVmaW5lZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub24gPSAoa2V5LGNhbGxiYWNrKT0+e1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoa2V5KSAhPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwia2V5IG11c3QgYmUgYSBzdHJpbmcuLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEVWRU5UU1trZXldICA9IGNhbGxiYWNrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlSGFuZGxlcnMgPSB7XHJcbiAgICAgICAgICAgIFtNb2Rlcy5Ub2dnbGVdOiAodiwga2V5LCB2YWx1ZSwgb3B0aW9ucykgPT4gdGhpcy5vblRvZ2dsZSh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSxcclxuICAgICAgICAgICAgW01vZGVzLkV4dGVuZF06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uRXh0ZW5kKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyA/IE9iamVjdC5hc3NpZ24odGhpcy5fX2NvbmZpZywgY29uZmlnKSA6IHRoaXMuX19jb25maWc7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlZDogdGhpcy5jb25maWcub25JbnNwZWN0LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQgPSB0aGlzLkNvbm5lY3Rvci5Db25uZWN0KHRhcmdldCwgdGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFRvSnNvbih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgbG9hZChqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIEpzb25Ub0VsZW1lbnQoanNvbiwgdGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IuRGVzdHJveSgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGYpIHtcclxuICAgICAgICAgICAgdGhpc1trZXldID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlldy5cclxuICAgIC8vVE9ETzogQ3JlYXRlIG5vcm1hbGl6ZS4uXHJcbiAgICAvL3F1ZXN0aW9uOiBpZiB0ZXh0IHdhcyBzZWxlY3RlZCwgc2hvdWxkIHdlIHVud3JhcCB0aGUgc2VsZWN0aWlvbiBvbmx5ID8gXHJcbiAgICB1bkxpbmsoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiAhc2VsZWN0aW9uLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1Vud3JhcDtcclxuICAgICAgICAgICAgY29uc3QgYmFzZU5vZGUgPSBzZWxlY3Rpb24uYmFzZU5vZGU7XHJcbiAgICAgICAgICAgIGlmIChiYXNlTm9kZSAmJiBiYXNlTm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBiYXNlTm9kZS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAgPSBiYXNlTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiYXNlTm9kZSAmJiBiYXNlTm9kZS5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwID0gZWxlbWVudFRvVW53cmFwLmNsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9VbndyYXApIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGlua0VsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBBcnJheS5mcm9tKGxpbmtFbGVtZW50cykuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdEFUYWcgPSByLmNsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VzdEFUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKHIsIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYS51bndyYXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHIudW53cmFwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyhsaW5rRWxlbWVudHNbMF0sIGxpbmtFbGVtZW50c1tsaW5rRWxlbWVudHMubGVuZ3RoIC0gMV0pOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlld1xyXG4gICAgLy9UT0RPOiBtZXJnZSBhIHRhZ3MuLlxyXG4gICAgLy9UT0RPOiByZW1vdmUgYSBjaGlsZHNcclxuICAgIC8vVE9ETzogbW92ZSBmdW5jdGlvbiB0byBMaW5rLnNlcnZpY2UuanNcclxuICAgIGxpbmsob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8IChvcHRpb25zICYmICFvcHRpb25zLmhyZWYpIHx8ICAhdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbiAmJiAhd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gdGV4dCBzZWxlY3RlZC4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW53cmFwQXRhZ3MgPSAobGlua0VsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtFbGVtZW50cy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShsaW5rLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGFUYWcgPT4gYVRhZy51bndyYXAoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0QVRhZyA9IGxpbmsucGFyZW50RWxlbWVudCA/IGxpbmsucGFyZW50RWxlbWVudC5jbG9zZXN0KFwiYVwiKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEFUYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHNwbGl0SFRNTChsaW5rLCBjbG9zZXN0QVRhZywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3Nlc3RBVGFnLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0VGFyZ2V0VG9UYWcgPSAobGlua0VsZW1lbnRzLCByZW5kZXJlZExpbmssIF90YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgbGlua0VsZW1lbnRzLmZvckVhY2goYVRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhVGFnLmhyZWYgPSByZW5kZXJlZExpbms7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIF90YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0UHJvdG9jb2wgPSAoX3Byb3RvY29sLCBuZXdVUkwpID0+IHtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gX3Byb3RvY29sLnJlcGxhY2UoLzovZywgXCJcIik7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCA9IF9wcm90b2NvbC5yZXBsYWNlKC9cXC9cXC8vZywgXCJcIik7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCArPSBcIjpcIjtcclxuICAgICAgICAgICAgaWYgKF9wcm90b2NvbC5pbmNsdWRlcyhcImh0dHBcIikpIHtcclxuICAgICAgICAgICAgICAgIF9wcm90b2NvbCArPSBcIi8vXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3VVJMLnB1c2goX3Byb3RvY29sKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9wcm90b2NvbDtcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbiAgICAgICAgY29uc3QgeyBocmVmID0gXCJcIiwgcHJvdG9jb2wgPSBcIlwiLCB0YXJnZXQgPSBcIlwiIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rRWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbGV0IG5ld1VSTCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IEF0YWcgPSBjcmVhdGVUZW1wTGlua0VsZW1lbnQoaHJlZik7XHJcbiAgICAgICAgbGV0IF9ocmVmID0gcmVzZXRVUkwoaHJlZi50cmltKCkpO1xyXG5cclxuICAgICAgICBsZXQgX3Byb3RvY29sID0gcHJvdG9jb2wudHJpbSgpIHx8IEF0YWcucHJvdG9jb2w7XHJcbiAgICAgICAgbGV0IF90YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHRlc3RUYXJnZXQgPSBUQVJHRVRTW3RhcmdldC50cmltKCkudG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgaWYgKHRlc3RUYXJnZXQpIHtcclxuICAgICAgICAgICAgX3RhcmdldCA9IHRlc3RUYXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfcHJvdG9jb2wudHJpbSgpKSB7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCA9IHNldFByb3RvY29sKF9wcm90b2NvbCwgbmV3VVJMKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9ocmVmKSB7XHJcbiAgICAgICAgICAgIG5ld1VSTC5wdXNoKF9ocmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWRMaW5rID0gbmV3VVJMLmpvaW4oXCJcIik7XHJcbiAgICAgICAgdW53cmFwQXRhZ3MobGlua0VsZW1lbnRzKTtcclxuICAgICAgICBzZXRUYXJnZXRUb1RhZyhsaW5rRWxlbWVudHMsIHJlbmRlcmVkTGluaywgX3RhcmdldCk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyhsaW5rRWxlbWVudHNbMF0sIGxpbmtFbGVtZW50c1tsaW5rRWxlbWVudHMubGVuZ3RoIC0gMV0pOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAvL3F1ZXN0aW9uIDogd2Ugd2FudCB0byBoYW5kbGUgYW5kIHRvZ2dsZSBhbnkgYXR0cmlidXRlID8gXHJcbiAgICB0b2dnbGVDbGFzcyhjbGFzc05hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAvL2hlcmVcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoY2xhc3NOYW1lKSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJjbGFzc05hbWUgbXVzdCBiZSBhIHN0cmluZy4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcbiAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5zZWxlY3Rpb24pICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGlzVG9nZ2xlT24gPSAodHlwZW9mIChvcHRpb25zLmlzT04pID09PSBcImJvb2xlYW5cIikgPyBvcHRpb25zLmlzT04gOiBlbGVtZW50c1swXS5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgaWYgKCFpc1RvZ2dsZU9uKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdENsYXNzID0gZWwucGFyZW50RWxlbWVudC5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IHNwbGl0SFRNTChlbCwgY2xvc2VzdENsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdC5jZW50ZXIucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IG9wdGlvbnMuc2VsZWN0aW9uID8gc2V0U2VsZWN0aW9uRmxhZ3MoZWxlbWVudHNbMF0sIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdKSA6IHsgZmlyc3RGbGFnOiBudWxsLCBsYXN0RmxhZzogbnVsbCB9OyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uXHJcbiAgICAgICAgaWYgKGZpcnN0RmxhZyAmJiBsYXN0RmxhZykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsLnJlbW92ZUFsbFJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBrZXkgb2YgY3NzIFxyXG4gICAgKiAgQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdmFsdWUgb2YgY3NzXHJcbiAgICAqICBAcGFyYW0geyhPYmplY3QgfCBTdHJpbmcpfSBNb2RlcyAtIG1vZGUgZnJvbSBNb2RlcyA9PiBFeHRlbmQgb3IgVG9nZ2xlXHJcbiAgICAqICBAcGFyYW0ge3N0cmluZ30gTW9kZXMuRXh0ZW5kIC0gb3ZlcnJpZGUgc3R5bGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy50b2dnbGUgLSB0b2dnbGUgc3R5bGVcclxuICAgICogIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIFxyXG4gICAgKi9cclxuICAgIGV4ZWNDbWQoa2V5LCB2YWx1ZSwgbW9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkgfHwgIXRoaXMuaXNWQWxpZEtleVZhbHVlKGtleSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMgPSBbXTtcclxuICAgICAgICBtb2RlID0gbW9kZSA/IG1vZGUgOiBNb2Rlcy5FeHRlbmQ7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcbiAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5zZWxlY3Rpb24pICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zZWxlY3Rpb24gPSB0cnVlO1xyXG4gICBcclxuXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PXJldmlldz09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLnNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0Tm9kZSA9IHRoaXMuRUxFTUVOVFNbdGhpcy5FTEVNRU5UUy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgaWYgKGxhc3ROb2RlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlciA9IHRoaXMuY3JlYXRlQ2FyZXRQbGFjZW1lbnQobGFzdE5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMudW5XcmFwICYmIEFycmF5LmlzQXJyYXkob3B0aW9ucy51bldyYXApKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudW5XcmFwLmZvckVhY2goc2VsZWN0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKHR4dE5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RFbGVtZW50VG9VbldyYXAgPSB0eHROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0RWxlbWVudFRvVW5XcmFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RFbGVtZW50VG9VbldyYXAudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UaGlzIGlzIGhvdyBpIG1ha2UgdGhlIHRleHQgc2VsZWN0aW9uLCBpIGRvbnQga25vdyBpZiB0aGlzIGlzIGdvb2Qgd2F5LCBidXQgaXQgd29ya3MuLlxyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gb3B0aW9ucy5zZWxlY3Rpb24gPyBzZXRTZWxlY3Rpb25GbGFncyh0aGlzLkVMRU1FTlRTWzBdLCB0aGlzLkVMRU1FTlRTW3RoaXMuRUxFTUVOVFMubGVuZ3RoIC0gMV0pIDogeyBmaXJzdEZsYWc6IG51bGwsIGxhc3RGbGFnOiBudWxsIH07IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgcmVtb3ZlWmVyb1NwYWNlKGdldFRleHROb2Rlcyh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgbGV0IFRvZ2dsZU1vZGU7Ly9EZWNsYXJlIHRvZ2dsZSBtb2RlLCBUaGUgZmlyc3QgZWxlbWVudCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgaXMgb24gb3Igb2ZmXHJcblxyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gVG9nZ2xlTW9kZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5tb2RlSGFuZGxlcnNbbW9kZV0oZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBNb2Rlcy5Ub2dnbGUgJiYgdHlwZW9mIChUb2dnbGVNb2RlKSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBUb2dnbGVNb2RlID0gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi4gXHJcbiAgICAgICAgLy91c2UgdGhlIGZpcnN0IGFuZCBsYXN0IGZsYWdzIHRvIG1ha2UgdGhlIHRleHQgc2VsZWN0aW9uIGFuZCB1bndyYXAgdGhlbS4uXHJcbiAgICAgICAgaWYgKGZpcnN0RmxhZyAmJiBsYXN0RmxhZykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsLnJlbW92ZUFsbFJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmV0SG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJldEF0KHRoaXMuY2FyZXRIb2xkZXIsIHRoaXMuY2FyZXRIb2xkZXIudGV4dENvbnRlbnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZXMgPSAgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgICAgIGlmKHR5cGVvZiAoRVZFTlRTW1wiaW5zcGVjdFwiXSkgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RcIl0oY29sbGVjdGVkU3R5bGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdzdHlsZUNoYW5nZWQnLCBjb2xsZWN0ZWRTdHlsZXMpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ2FyZXRQbGFjZW1lbnQoYXROb2RlKSB7XHJcbiAgICAgICAgaWYgKCFhdE5vZGUpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGNhcmV0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dC1zZWxlY3Rpb24nKTtcclxuICAgICAgICBjYXJldEhvbGRlci5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCAndHJ1ZScpO1xyXG4gICAgICAgIGF0Tm9kZS5hcHBlbmRDaGlsZChjYXJldEhvbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIGNhcmV0SG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIHBheWxvYWQpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ocGF5bG9hZCk7XHJcbiAgICB9XHJcbiAgICBvblRvZ2dsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRldGVjdCBpZiB0aGVyZSBpcyBhbnkgcGFyZW50IHdpdGggc3R5bGUgdG8gc3BsaXQuXHJcbiAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSBjYXRjaCBmcm9tIG9wdGlvbnMgdG8gZGV0ZWN0IG1vcmUgdGhhbiBvbmUgc3R5bGUgb3IgdGFnIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50VG9TcGxpdCA9IGVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0nJHt2YWx1ZX0nXWApO1xyXG4gICAgICAgICAgICAvL1RPRE86IHRlc3RzXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCAmJiBibG9ja19lbG1lbnRzW2VsZW1lbnRUb1NwbGl0Lm5vZGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlubmVyU3BhbiA9IGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpbm5lclNwYW4uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25Ub2dnbGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0ICYmIGVsZW1lbnRUb1NwbGl0ICE9PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy91bmJvbGRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RWxlbWVudHMgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gc3BsaXQgZWxlbWVudHMsIGl0cyBlcnJvciFcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGUoc3BsaXRFbGVtZW50cy5jZW50ZXIsIGtleSwgdmFsdWUsIG9wdGlvbnMub25PZmYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzcGxpdEhUTUwgcmV0dXJuIG51bGwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50VG9TcGxpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMub25PZmYpO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25PZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uRXh0ZW5kKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy50YXJnZXQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvU3BsaXQgPSBlbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9JyR7a2V5fSddYCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRCbG9ja3MgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0QmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRCbG9ja3MuY2VudGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRhcmdldCAhPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlubmVyU3BhbiA9IGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudFRvU3BsaXQsIHsgZWw6ICdzcGFuJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShpbm5lclNwYW4sIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXh0ZW5kKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnRUb1NwbGl0ICE9PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0RWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRFbGVtZW50cy5jZW50ZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NwbGl0SFRNTCByZXR1cm4gbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSAhPT0gXCJibG9ja1wiICYmIG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICYmIGJsb2NrRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHBhcmVudEVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LndyYXAod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUod3JhcHBlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYXMgPT09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZSA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUud3JhcChzcGFuKTtcclxuICAgICAgICAgICAgICAgIH07ICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUlubGluZVN0eWxlID0gKHBhcmVudE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IHRlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHBhcmVudE5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmICF2b2lkX2VsZW1lbnRzW25vZGUubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUlubGluZVN0eWxlKGJsb2NrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAvLyBBcnJheS5mcm9tKGJsb2NrRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKSkuZm9yRWFjaChlbD0+ZWwuc3R5bGVba2V5XSA9IHZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tFbEFuZFN0eWxlSXQoa2V5LCB2YWx1ZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGJsb2NrRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlW2tleV0gPSBudWxsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tFbEFuZFN0eWxlSXQoa2V5LCB2YWx1ZSwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmxvY2tFbEFuZFN0eWxlSXQoa2V5LCB2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcGFyZ2guc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGVsZW1lbnQud3JhcChwYXJnaCk7XHJcbiAgICB9XHJcbiAgICBpc1ZBbGlkS2V5VmFsdWUoa2V5LHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gISEodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpOyBcclxuICAgIH1cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGxlYXNlIGNyZWF0ZSBuZXcgaW5zdGFuY2UuLicpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZEVsZW1lbnQuY29udGVudEVkaXRhYmxlID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCAmJiAoc2VsZWN0ZWRFbGVtZW50LmlzY2hpbGRPZih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpIHx8IHNlbGVjdGVkRWxlbWVudCA9PT0gdGhpcy5jb25uZWN0ZWRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2V0U3R5bGUsIG5vcm1hbGl6ZVN0eWxlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgc3BsaXRIVE1MIH0gZnJvbSBcIi4uL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuXHJcbi8vVE9ETzpyZXZpZXdcclxuZXhwb3J0IGZ1bmN0aW9uIFVzZVJ1bGVzKGRhdGEpIHtcclxuICAgIGNvbnN0IENvbG9yVGV4dERlY29yYXRpb25SdWxlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5rZXkgPT09IFwiY29sb3JcIikge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0RGVjb3JhdGlvbiA9IGRhdGEuZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPSd0ZXh0LWRlY29yYXRpb24nXWApO1xyXG4gICAgICAgICAgICBpZiAodGV4dERlY29yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0cyA9IHNwbGl0SFRNTChkYXRhLmVsZW1lbnQsIHRleHREZWNvcmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0cy5jZW50ZXIsICd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBgJHtkYXRhLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNwbGl0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gc3BsaXRzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZSh0ZXh0RGVjb3JhdGlvbiwgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsIGAke2RhdGEudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBSdWxlcyA9IFtcclxuICAgICAgICBDb2xvclRleHREZWNvcmF0aW9uUnVsZVxyXG4gICAgXVxyXG4gICAgUnVsZXMuZm9yRWFjaChydWxlID0+IHJ1bGUoZGF0YSkpO1xyXG59IiwiXHJcbmltcG9ydCB7IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgfSBmcm9tICcuLi9zdHlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRVZFTlRTIH0gZnJvbSAnLi4vZXZlbnRzL2V2ZW50cyc7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyByZXNldFVSTCB9IGZyb20gJy4uL2xpbmsuc2VydmljZSc7XHJcblxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBob3cgY2FuIHdlIGV4cG9zZSB0aGUgY29sbGVjdGVkU3R5bGUgPyBcclxuLy9xdWVzdGlvbjogc2hvdWxkIHdlIHVzZSB0aGlzID8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL011dGF0aW9uT2JzZXJ2ZXJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wc2VjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgb25JbnNwZWN0KSB7XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSBJbnBzZWN0b3IgPT4gdGFyZ2V0IGlzIG51bGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICB0aGlzLm9uSW5zcGVjdCA9IG9uSW5zcGVjdDtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuXHJcbiAgICAgICAgY29uc3QgbGF1bmNoSW5zcGVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdGVkU3R5bGUgPSBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5vbkluc3BlY3QpID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSW5zcGVjdChjb2xsZWN0ZWRTdHlsZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKEVWRU5UU1tcImluc3BlY3RcIl0pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RcIl0oY29sbGVjdGVkU3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoc2VsZWN0ZWRFbGVtZW50ICl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhVGFnID0gc2VsZWN0ZWRFbGVtZW50LmNsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYoYVRhZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKEVWRU5UU1tcImluc3BlY3RMaW5rXCJdKSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdExpbmtcIl0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6YVRhZy5wcm90b2NvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6cmVzZXRVUkwoYVRhZy5ocmVmKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDphVGFnLmdldEF0dHJpYnV0ZShcInRhcmdldFwiKSB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDphVGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAvL1RPRE86IHJldmlld1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4ICYmIHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aCA8PSAxICYmICF0aGlzLnRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhdW5jaEluc3BlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsYXVuY2hJbnNwZWN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuXHJcbiAgICAgICAgdGhpcy5EZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbi8vY2xhc3MgYW5kIHN0eWxlIG5vdCBpbmNsdWRlcyB5ZXQuLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZWlydEF0dHJpYnV0ZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIHZhciBjdXJyZWN0RWxlbWVudCA9IGZyb21FbGVtZW50O1xyXG4gICAgd2hpbGUgKGN1cnJlY3RFbGVtZW50ICYmIGN1cnJlY3RFbGVtZW50LmlzY2hpbGRPZih0b0VsZW1lbnQucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICB2YXIgYXR0cnMgPSBjdXJyZWN0RWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmKGF0dHJzW2ldLm5hbWUgICE9PVwiY2xhc3NcIiAmJiBhdHRyc1tpXS5uYW1lICAhPT0gXCJzdHlsZVwiKXtcclxuICAgICAgICAgICAgICAgIGlmKCFhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0gPSBhdHRyc1tpXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICBjdXJyZWN0RWxlbWVudCA9IGN1cnJlY3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXR0cmlidXRlcztcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZXMoZWxlbWVudCxnZXRBbGwpe1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIHZhciBhdHRycyA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgIGZvcih2YXIgaSA9IGF0dHJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYoZ2V0QWxsICB8fCAoIWdldEFsbCAmJiBhdHRyc1tpXS5uYW1lICAhPT1cImNsYXNzXCIgJiYgYXR0cnNbaV0ubmFtZSAgIT09IFwic3R5bGVcIikpe1xyXG4gICAgICAgICAgICBpZighYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0pe1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0gPSBhdHRyc1tpXS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXR0cmlidXRlcztcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEF0dHJzKGVsZW1lbnQpe1xyXG4gICAgICBpZihlbGVtZW50ICYmICFlbGVtZW50LmF0dHJpYnV0ZXMpe1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcImVsZW1lbnQgbm90IGhhdmUgYXR0cmlidXRlcy4uXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHI9PmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpKVxyXG4gIH0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRDbGFzc05hbWVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBjbGFzc2VzID0gW107XHJcbiAgICB2YXIgX3BhcmVudCA9IGZyb21FbGVtZW50O1xyXG4gICAgd2hpbGUgKF9wYXJlbnQgJiYgX3BhcmVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgbGV0IG1hcCA9IF9wYXJlbnQuY2xhc3NMaXN0O1xyXG4gICAgICAgIEFycmF5LmZyb20obWFwKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xhc3Nlcy5maW5kSW5kZXgoYyA9PiBjID09PSBuYW1lKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgX3BhcmVudCA9IF9wYXJlbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc2VzKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2xhc3NMaXN0KTtcclxufVxyXG5cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaXMgZXhwZW5zaXZlIHRvbyBtdWNoPyBcclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNsYXNzTmFtZShlbGVtZW50KSB7XHJcbiAgICBmdW5jdGlvbiByZW1vdmVFbXB0eUNsYXNzKGVsZW1lbnQpe1xyXG4gICAgICAgIGlmICghZWxlbWVudC5jbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYXIoZWxlbWVudCkge1xyXG4gICAgICAgIHJlbW92ZUVtcHR5Q2xhc3MoZWxlbWVudCk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCkuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtjbGFzcz0nJHtjfSddYCkpLmZvckVhY2gobm9kZSA9PntcclxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjKVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRW1wdHlDbGFzcyhub2RlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2NsYXNzXScpKS5jb25jYXQoZWxlbWVudCk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGNoaWxkID0+IGNsZWFyKGNoaWxkKSk7XHJcbn1cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaG93IGFib3V0IHRoaXMgbmFtZSA/IFxyXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDbGFzc05hbWUgPSBmdW5jdGlvbihjbGFzc05hbWUpe1xyXG5jb25zdCBub2RlcyA9IEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCkpLmNvbmNhdCh0aGlzKTtcclxubm9kZXMuZm9yRWFjaChub2RlPT5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSk7XHJcbn0iLCJpbXBvcnQgeyBibG9ja19lbG1lbnRzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9ibG9ja19lbG1zXCI7XHJcbmltcG9ydCB7IHZvaWRfZWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL3ZvaWRfZWxtc1wiO1xyXG5pbXBvcnQgeyBzcGxpdEhUTUwgfSBmcm9tIFwiLi4vLi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyB3YWxrT25FbGVtZW50LCB3YWxrVGhlRE9NLCB3cmFwTmFrZWRUZXh0Tm9kZXMgfSBmcm9tIFwiLi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBwYXN0ZUh0bWxBdENhcmV0LCBzZXRDYXJldEF0LCBHZXRDbG9zZXN0QmxvY2tFbGVtZW50IH0gZnJvbSBcIi4uL3JhbmdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENzcywgc2V0U3R5bGVzIH0gZnJvbSBcIi4uL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gXCIuLi90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3B5UGFzdGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMpIHtcclxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5zdHlsZXNUb1Bhc3RlID0gdHlwZW9mIG9wdGlvbnMuc3R5bGVzVG9QYXN0ZSA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuc3R5bGVzVG9QYXN0ZSA6IG51bGw7XHJcbiAgICB0aGlzLnBhc3RlID0gdGhpcy5wYXN0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb3B5ID0gdGhpcy5jb3B5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBjb3B5KGV2ZW50KSB7XHJcbiAgICBsZXQgaHRtbCA9IFwiXCI7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgaWYgKHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsLnJhbmdlQ291bnQ7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgICAgbGV0IGNvcGllZE5vZGUgPSBzZWwuZ2V0UmFuZ2VBdChpKS5jbG9uZUNvbnRlbnRzKCk7XHJcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29waWVkTm9kZSk7XHJcblxyXG4gICAgICAgICAgQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGROb2RlcykuZm9yRWFjaChuID0+IHtcclxuICAgICAgICAgICAgaWYgKG4ubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICBjb25zdCBwYXJlbnRDb3BpZWROb2RlID0gc2VsLmdldFJhbmdlQXQoaSkuc3RhcnRDb250YWluZXIucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRDU1MgPSBnZXRJbmhlaXJ0Q3NzKHBhcmVudENvcGllZE5vZGUsIHRoaXMudGFyZ2V0KTtcclxuICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvcGllZE5vZGUudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgZGVidWdnZXJcclxuICAgICAgICAgICAgICBzZXRTdHlsZXMoc3BhbiwgY29sbGVjdGVkQ1NTKTtcclxuICAgICAgICAgICAgICBuLndyYXAoc3Bhbik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZvaWRfZWxlbWVudHNbbi5ub2RlTmFtZV0gJiYgbi5ub2RlTmFtZSAhPT0gXCJCUlwiKSB7XHJcbiAgICAgICAgICAgICAgbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCA9IGNvbnRhaW5lcjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQuc2VsZWN0aW9uKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24udHlwZSA9PT0gXCJUZXh0XCIpIHtcclxuICAgICAgICBodG1sID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkuaHRtbFRleHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3N0eWxlaXQvaHRtbCcsIGh0bWwuaW5uZXJIVE1MKTtcclxuICAgIGV2ZW50LmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIGh0bWwudGV4dENvbnRlbnQpO1xyXG4gIH1cclxuICBwYXN0ZShldmVudCkge1xyXG4gICAgY29uc3QgaXNTaGlmdGVkID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICBpZiAoaXNTaGlmdGVkKSB7XHJcbiAgICAgIHRoaXMucGFzdGVQbGFpblRleHQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXN0ZVdpdGhTdHlsZXMoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBwYXN0ZVBsYWluVGV4dChldmVudCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNvcGllZCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpLnRyaW0oKTtcclxuICAgIGNvcGllZCA9IGNvcGllZC5yZXBsYWNlKC9cXG4vZywgXCI8YnIvPlwiKVxyXG4gICAgaWYgKCFjb3BpZWQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuaW5uZXJIVE1MID0gY29waWVkO1xyXG5cclxuICAgIC8vIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnR0ZXh0JywgZmFsc2UsIGNvbnRlbnQpO1xyXG4gICAgcGFzdGVIdG1sQXRDYXJldChwKTtcclxuICAgIHNldENhcmV0QXQocCk7XHJcblxyXG4gICAgaWYgKHAucGFyZW50RWxlbWVudCAhPT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgcC51bndyYXAoKTtcclxuXHJcbiAgICB9XHJcbiAgICBBcnJheS5mcm9tKHRoaXMudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgaWYgKCFjaGlsZC50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHBhc3RlV2l0aFN0eWxlcyhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhO1xyXG4gICAgY29uc3QgY29waWVkID0gZGF0YS5nZXREYXRhKCdzdHlsZWl0L2h0bWwnKS50cmltKCk7XHJcbiAgICAvL29uIGNvcGllZCBvbiB0aGUgZWRpdG9yIGxvY2FseVxyXG4gICAgaWYgKGNvcGllZCkge1xyXG4gICAgICBjb25zdCBwYXN0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkZWJ1Z2dlclxyXG4gICAgICBwYXN0ZWRDb250YWluZXIuaW5uZXJIVE1MID0gY29waWVkO1xyXG4gICAgICBwYXN0ZUh0bWxBdENhcmV0KHBhc3RlZENvbnRhaW5lcik7XHJcbiAgICAgIEFycmF5LmZyb20odGhpcy50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQ9PntcclxuICAgICAgICBpZighY2hpbGQudGV4dENvbnRlbnQudHJpbSgpKXtcclxuICAgICAgICAgIGNoaWxkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIEFycmF5LmZyb20ocGFzdGVkQ29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkPT57XHJcbiAgICAgICAgY29uc3Qgc2FtZU5vZGUgPSBjaGlsZC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJoMSxoMixoMyxoNCxoNSxoNixwXCIpO1xyXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09PSAxICYmIGNoaWxkLm5vZGVOYW1lICE9PSBcIlNQQU5cIiAmJiBzYW1lTm9kZSl7XHJcbiAgICAgICAgICBjaGlsZC51bndyYXAoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFjaGlsZC50ZXh0Q29udGVudC50cmltKCkpe1xyXG4gICAgICAgICAgY2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZGVidWdnZXJcclxuICAgICAgY29uc3QgYmxvY2sgPSBwYXN0ZWRDb250YWluZXIuY2xvc2VzdChcImgxLGgyLGgzLGg0LGg1LGg2LHBcIik7XHJcbiAgICAgIGlmKGJsb2NrKXtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHNwbGl0SFRNTChwYXN0ZWRDb250YWluZXIsYmxvY2sse3RhZzpibG9jay5ub2RlTmFtZX0pO1xyXG4gICAgICAgIGlmKHBhcnRzKSB7XHJcbiAgICAgICAgICBwYXJ0cy5sZWZ0LmFwcGVuZENoaWxkKHBhcnRzLmNlbnRlcik7XHJcbiAgICAgICAgICBwYXJ0cy5jZW50ZXIuYXBwZW5kQ2hpbGQocGFydHMucmlnaHQpO1xyXG4gICAgICAgICAgcGFydHMucmlnaHQudW53cmFwKCk7XHJcbiAgICAgICAgICBwYXJ0cy5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICBzZXRDYXJldEF0KHBhc3RlZENvbnRhaW5lcik7XHJcbiAgICAgIHBhc3RlZENvbnRhaW5lci51bndyYXAoKTtcclxuXHJcbiAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFzdGVQbGFpblRleHQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG4gIH1cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIHRoaXMucGFzdGUpO1xyXG4gICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5jb3B5KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXRTdHlsZSwgSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcgfSBmcm9tIFwiLi9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBMZXZlbHMgZnJvbSAnLi4vY29uc3RhbnRzL0xldmVscy5qc29uJztcclxuaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuLi9jb25zdGFudHMvdm9pZF9lbG1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcE5ha2VkVGV4dE5vZGVzKHRhcmdldCl7XHJcbiAgICAvLyB0YXJnZXQgaXMgdGhlIG1haW4gY29udGVudGVkaXRhYmxlIGVsZW1lbnRcclxuICAgIC8vIHNvIFxyXG4gICAgQXJyYXkuZnJvbSh0YXJnZXQuY2hpbGROb2RlcykuZm9yRWFjaChjPT57XHJcbiBcclxuICAgICAgICBpZihjLm5vZGVUeXBlID09PTEgJiYgIWMudGV4dENvbnRlbnQudHJpbSgpICYmIGMuY2hpbGRyZW4ubGVuZ3RoPT09MCAmJiAhdm9pZF9lbGVtZW50c1tjLm5vZGVOYW1lXSl7XHJcbiAgICAgICAgICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYy5ub2RlVHlwZSA9PT0gMyAmJiBjLnBhcmVudEVsZW1lbnQpe1xyXG4gICAgICAgICAgICBjLnBhcmVudEVsZW1lbnQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCgoYy5ub2RlVHlwZSA9PT0zICYmIGMucGFyZW50RWxlbWVudCA9PT0gdGFyZ2V0KSkgJiYgIWMucGFyZW50RWxlbWVudC5jbG9zZXN0KFwicFwiKSAmJiBjLnRleHRDb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICAgICAgYy53cmFwKHApO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0ICBmdW5jdGlvbiB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpIHtcclxuICAgIGlmKCFub2RlKSByZXR1cm4gbnVsbDtcclxuICAgIGZ1bmMobm9kZSk7XHJcbiAgICBub2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgd2Fsa1RoZURPTShub2RlLCBmdW5jKTtcclxuICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCAgZnVuY3Rpb24gd2Fsa09uRWxlbWVudChub2RlLCBmdW5jKSB7XHJcbiAgICBpZighbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBjb250aW51ZVdpdGggPSBmdW5jKG5vZGUpO1xyXG4gICAgaWYoY29udGludWVXaXRoKXtcclxuICAgICAgICBub2RlID0gY29udGludWVXaXRoO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgIHdhbGtPbkVsZW1lbnQobm9kZSwgZnVuYyk7XHJcbiAgICAgIG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcclxuICAgIH1cclxuICB9IFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRFbGVtZW50KCkge1xyXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgdmFyIGFuY05vZGUgPSBub2RlLmZvY3VzTm9kZTtcclxuICAgICAgICBpZiAoYW5jTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgYW5jTm9kZSA9IGFuY05vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBlbCA9IChhbmNOb2RlLm5vZGVUeXBlID09PSAzID8gYW5jTm9kZS5wYXJlbnROb2RlIDogbm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmNOb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvblRvRWxlbWVudChqc29uT2JqZWN0LCBwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAvL1RPRE86IGNyZWF0ZSBwYXJlbnRlbGVtZW50IGFuZCBqc29ub2JqZWN0IHZhbGlkYXRpb24gICBcclxuICAgIGNvbnN0IHJlbmRlckF0dHJzID0gKGpzRWxlbWVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gWy4uLmpzRWxlbWVudC5jbGFzc0xpc3RdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNFbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoanNFbGVtZW50LnN0eWxlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbGxlY3RlZFN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IG90aGVyIGF0dHJzLi4uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChqc0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGpzRWxlbWVudC50YWc7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlzU2hvdWxkUmVuZGVyQXR0cnM7XHJcbiAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShqc0VsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmhyZWYgPSBqc0VsZW1lbnQuaHJlZjtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0ID0ganNFbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZW5kZXJBdHRycyhqc0VsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICghcGFyZW50RWxlbWVudCAmJiBqc29uT2JqZWN0LnR5cGUgPT09IExldmVsc1snMCddKSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzb25PYmplY3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdC5jaGlsZHJlbikpIHtcclxuICAgICAgICBqc29uT2JqZWN0LmNoaWxkcmVuLmZvckVhY2goanNDaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoanNDaGlsZCk7XHJcbiAgICAgICAgICAgIGlmIChodG1sRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBKc29uVG9FbGVtZW50KGpzQ2hpbGQsIGh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbnQgY3JlYXRlIGRvbSBlbGVtZW50IGZyb20ganNvbicsIGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFRvSnNvbihub2RlLCBsZXZlbCkge1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIChsZXZlbCkgIT09IFwibnVtYmVyXCIpIGxldmVsID0gMDtcclxuICAgIGNvbnN0IG5vZGVUeXBlID0gbm9kZS5ub2RlTmFtZTtcclxuICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzID0gdHJ1ZTtcclxuICAgIGxldCBqc29uID0ge307XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKExldmVsc1tsZXZlbF0pIHtcclxuICAgICAgICBqc29uLnR5cGUgPSBMZXZlbHNbbGV2ZWxdO1xyXG4gICAgICAgIGxldmVsKys7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCIjdGV4dFwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3F1ZXN0aW9uOiByZXBsYWNlIFxcbiA/XHJcbiAgICAgICAgICAgIGlmICghanNvbi50ZXh0Q29udGVudC50cmltKCkpIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi5ocmVmID0gbm9kZS5ocmVmO1xyXG4gICAgICAgICAgICBqc29uLnRhcmdldCA9IG5vZGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICAvL1RPRE86IHNob3VsZCB3ZSB1bndyYXAgdGhpcyBub2RlID8gXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzKSB7XHJcbiAgICAgICAgLy9UT0RPOiBnZXQgYXR0cnMgXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShub2RlKTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3R5bGUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAganNvbi5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAganNvbi5jbGFzc0xpc3QgPSBbLi4ubm9kZS5jbGFzc0xpc3RdO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNoaWxkcmVuID0gWy4uLm5vZGUuY2hpbGROb2Rlc10ubWFwKChjbikgPT4gZWxlbWVudFRvSnNvbihjbiwgbGV2ZWwpKS5maWx0ZXIodiA9PiB2KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuXHJcbn0iLCJleHBvcnQgY29uc3QgRVZFTlRTID0ge1xyXG4gIFxyXG59IiwiaW1wb3J0IHsgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4uL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCwgaW5zZXJ0QWZ0ZXIsIHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge3ZvaWRfZWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92b2lkX2VsbXMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlQcmVzcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0ga2V5UHJlc3MgPT4gdGFyZ2V0IGlzIG51bGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbktleVByZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbktleVByZXNzID0gb3B0aW9ucy5vbktleVByZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMua2V5cHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csIFwiXCIpLnJlcGxhY2UoL1tcXHUyMDBCLVxcdTIwMERcXHVGRUZGXS9nLCAnJykgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmKCF0YXJnZXQudGV4dENvbnRlbnQpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwYXN0ZUh0bWxBdENhcmV0KFwiICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgd3JhcE5ha2VkVGV4dE5vZGVzKHRoaXMudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXN0ZUh0bWxBdENhcmV0KFwiPGJyLz5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChzZWxlY3Rpb24uYW5jaG9yTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCA9PT0gdGhpcy50YXJnZXQgfHwgIWJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UyZXh0cmFjdCA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UyZXh0cmFjdC5leHRyYWN0Q29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHNlbGVjdGlvbi5hbmNob3JOb2RlLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChibG9ja0VsZW1lbnQsIGJsb2NrRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICE9PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5jaGlsZHJlbikuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0gYmxvY2tFbGVtZW50ICYmICFjLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuaW5uZXJIVE1MID0gYmxvY2tFbGVtZW50LmlubmVySFRNTCArIFwiJiM4MjAzO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY0ZyYWdtZW50ID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY0ZyYWdtZW50LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEgJiYgIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSAmJiAhdm9pZF9lbGVtZW50c1tjaGlsZC5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGJsb2NrRWxlbWVudC5ub2RlTmFtZSB8fCBcInBcIik7XHJcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2NGcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0QWZ0ZXIoZWwsIGJsb2NrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsLnByZXZpb3VzU2libGluZy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHI9PntcclxuICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLGF0dHIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrRWxlbWVudC5hcHBlbmRDaGlsZChicik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2Rlcyh0aGlzLnRhcmdldCwgeyBleHBlY3Q6IGJsb2NrRWxlbWVudCB9KTtcclxuICAgICAgICAgICAgICAgIHNldENhcmV0QXQoZWwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9uS2V5UHJlc3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbktleVByZXNzKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCAgIGNvbnN0IFRBUkdFVFMgPSB7XHJcbiAgICBfYmxhbms6IFwiX2JsYW5rXCIsXHJcbiAgICBfc2VsZjogXCJfc2VsZlwiLFxyXG4gICAgX3BhcmVudDogXCJfcGFyZW50XCIsXHJcbiAgICBfdG9wOiBcIl90b3BcIlxyXG59XHJcbmV4cG9ydCAgY29uc3QgcmVzZXRVUkwgPSAoc3JjKSA9PiB7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvaHR0cHM6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9odHRwOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvbWFpbHRvOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvdGVsOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFwvL2csICcnKTtcclxuICAgIHJldHVybiBzcmM7XHJcbn1cclxuZXhwb3J0ICAgY29uc3QgY3JlYXRlVGVtcExpbmtFbGVtZW50ID0gKGhyZWYpID0+IHtcclxuICAgIGNvbnN0IEF0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIEF0YWcuaHJlZiA9IGhyZWY7XHJcbiAgICByZXR1cm4gQXRhZztcclxufSIsImltcG9ydCB7IGJsb2NrX2VsbWVudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSBvcHRpb25zID0ge307XHJcbiAgbGV0IGlubmVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy5lbCB8fCBcInNwYW5cIik7XHJcbiAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLmZvckVhY2goY2hpbGQgPT4gaW5uZXJTcGFuLmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lclNwYW4pO1xyXG4gIHJldHVybiBpbm5lclNwYW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCkge1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICBpZiAoYmxvY2tfZWxtZW50c1tlbGVtZW50Lm5vZGVOYW1lXSkgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIHdoaWxlIChwYXJlbnRFbGVtZW50ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZW1lbnQpLmRpc3BsYXkgPT09IFwiaW5saW5lXCIpIHtcclxuICAgIGlmIChwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihwYXJlbnRFbGVtZW50ICAmJiBibG9ja19lbG1lbnRzW3BhcmVudEVsZW1lbnQubm9kZU5hbWVdKXtcclxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLy9UT0RPOnJldmlld1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEJsb2NrRWxlbWVudChsaW1pdEVsZW1lbnQpIHtcclxuICBjb25zdCB3cmFwRWxlbWVudFdpdGhCbG9jayA9IChlbCkgPT4ge1xyXG4gICAgbGV0IHdFbCA9IFwiZGl2XCI7XHJcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09IFwiU1BBTlwiKSB7XHJcbiAgICAgIHdFbCA9IFwicFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod0VsKTtcclxuICAgIGVsLndyYXAod3JhcHBlcik7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxuICB9XHJcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICBsZXQgbm9kZXMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gIG5vZGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgYmxvY2tFbCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWwpO1xyXG4gICAgaWYgKGJsb2NrRWwpIHtcclxuICAgICAgaWYgKGJsb2NrRWwuaXNjaGlsZE9mKGxpbWl0RWxlbWVudCkpIHtcclxuICAgICAgICBjb25zdCBmb3VuZGVkID0gZWxlbWVudHMuZmluZChibG9jayA9PiBibG9ja0VsLmlzY2hpbGRPZihibG9jaykpO1xyXG4gICAgICAgIGlmICghZm91bmRlZClcclxuICAgICAgICAgIGVsZW1lbnRzLnB1c2goYmxvY2tFbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgX3dyYXBwZXIgPSB3cmFwRWxlbWVudFdpdGhCbG9jayhlbCk7XHJcbiAgICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKF93cmFwcGVyKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5vZGVzOiBub2RlcyxcclxuICAgIGJsb2NrczogZWxlbWVudHNcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VXaXRoRWxlbWVudCh3cmFwVGFnKSB7XHJcbiAgY29uc3QgcmFuZ2VzID0gZ2V0UmFuZ2VzKCk7XHJcbiAgcmV0dXJuIHJhbmdlcy5tYXAociA9PiB7XHJcbiAgICByZXR1cm4gd3JhcFJhbmdlVGV4dCh3cmFwVGFnLCByKTtcclxuICB9KS5mbGF0KCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlcygpIHtcclxuICBsZXQgcmFuZ2VzID0gW107XHJcblxyXG4gIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWwucmFuZ2VDb3VudDsgaSsrKSB7XHJcbiAgICByYW5nZXNbaV0gPSBzZWwuZ2V0UmFuZ2VBdChpKTtcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlcztcclxufVxyXG4vLyByZXR1cm4gYWxsIHRleHQgbm9kZXMgdGhhdCBhcmUgY29udGFpbmVkIHdpdGhpbiBgZWxgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0Tm9kZXMoZWwpIHtcclxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQsXHJcbiAgICB3YWxrZXIgPSBkb2MuY3JlYXRlVHJlZVdhbGtlcihlbCwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKSxcclxuICAgIHRleHROb2RlcyA9IFtdLFxyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG5cclxuICB3aGlsZSAobm9kZSkge1xyXG4gICAgdGV4dE5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgfVxyXG4gIHJldHVybiB0ZXh0Tm9kZXNcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VzSW50ZXJzZWN0KHJhbmdlQSwgcmFuZ2VCKSB7XHJcbiAgcmV0dXJuIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuRU5EX1RPX1NUQVJULCByYW5nZUIpID09PSAtMSAmJlxyXG4gICAgcmFuZ2VBLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhSYW5nZS5TVEFSVF9UT19FTkQsIHJhbmdlQikgPT09IDFcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSB7XHJcbiAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICB0cnkge1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShub2RlKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKVxyXG4gIH1cclxuICByZXR1cm4gcmFuZ2VcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZXRDaGFyYWN0ZXJPZmZzZXRXaXRoaW4oZWxlbWVudCkge1xyXG4gIHZhciBjYXJldE9mZnNldCA9IDA7XHJcbiAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50LmRvY3VtZW50O1xyXG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcclxuICB2YXIgc2VsO1xyXG4gIGlmICh0eXBlb2Ygd2luLmdldFNlbGVjdGlvbiAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBzZWwgPSB3aW4uZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsLnJhbmdlQ291bnQgPiAwKSB7XHJcbiAgICAgIHZhciByYW5nZSA9IHdpbi5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xyXG4gICAgICB2YXIgcHJlQ2FyZXRSYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgcHJlQ2FyZXRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XHJcbiAgICAgIHByZUNhcmV0UmFuZ2Uuc2V0RW5kKHJhbmdlLmVuZENvbnRhaW5lciwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFJhbmdlLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoKHNlbCA9IGRvYy5zZWxlY3Rpb24pICYmIHNlbC50eXBlICE9IFwiQ29udHJvbFwiKSB7XHJcbiAgICB2YXIgdGV4dFJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICB2YXIgcHJlQ2FyZXRUZXh0UmFuZ2UgPSBkb2MuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHByZUNhcmV0VGV4dFJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgcHJlQ2FyZXRUZXh0UmFuZ2Uuc2V0RW5kUG9pbnQoXCJFbmRUb0VuZFwiLCB0ZXh0UmFuZ2UpO1xyXG4gICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFRleHRSYW5nZS50ZXh0Lmxlbmd0aDtcclxuICB9XHJcbiAgcmV0dXJuIGNhcmV0T2Zmc2V0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDYXJldEF0KGVsZW1lbnQsIGNoYXJJbmRleCA9IDApIHtcclxuXHJcbiAgdmFyIG5vZGUgPSBlbGVtZW50O1xyXG4gIG5vZGUuZm9jdXMoKTtcclxuICB2YXIgdGV4dE5vZGUgPSBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSk7XHJcbiAgaWYgKHRleHROb2RlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgdGV4dE5vZGUgPSBlbGVtZW50O1xyXG4gICAgd2hpbGUgKHRleHROb2RlICYmIHRleHROb2RlLmZpcnN0Q2hpbGQgJiYgdGV4dE5vZGUubm9kZVR5cGUgIT09IDMpIHtcclxuICAgICAgdGV4dE5vZGUgPSB0ZXh0Tm9kZS5maXJzdENoaWxkO1xyXG4gICAgfVxyXG4gICAgaWYodGV4dE5vZGUpe1xyXG4gICAgICB0ZXh0Tm9kZSA9IFt0ZXh0Tm9kZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlWzBdLCBjaGFySW5kZXgpO1xyXG4gIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZVswXSwgY2hhckluZGV4KTtcclxuICByYW5nZS5jb2xsYXBzZSh0cnVlKVxyXG4gIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXN0ZUh0bWxBdENhcmV0KGh0bWwpIHtcclxuICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICBjb25zdCBjb250ZW50ZWRpdGFibGUgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpO1xyXG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICBpZiAoY29udGVudGVkaXRhYmxlKSB7XHJcbiAgICBpZiAoIWNvbnRlbnRlZGl0YWJsZS5jb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICghaXNWYWxpZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHZhciBzZWwsIHJhbmdlO1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAvLyBJRTkgYW5kIG5vbi1JRVxyXG4gICAgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XHJcblxyXG4gICAgICAvLyBSYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoKSB3b3VsZCBiZSB1c2VmdWwgaGVyZSBidXQgaXNcclxuICAgICAgLy8gb25seSByZWxhdGl2ZWx5IHJlY2UgbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cclxuICAgICAgLy8gc29tZSBicm93c2VycyAoSUU5LCBmb3Igb25lKVxyXG4gICAgICBsZXQgZWw7XHJcbiAgICAgIGlmICh0eXBlb2YgKGh0bWwpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIG5vZGUsIGxhc3ROb2RlO1xyXG4gICAgICAgIHdoaWxlICgobm9kZSA9IGVsLmZpcnN0Q2hpbGQpKSB7XHJcbiAgICAgICAgICBsYXN0Tm9kZSA9IGZyYWcuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhbmdlLmluc2VydE5vZGUoZnJhZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIChodG1sKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHJhbmdlLmluc2VydE5vZGUoaHRtbCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAvLyBQcmVzZXJ2ZSB0aGUgc2VsZWN0aW9uXHJcbiAgICAgIGlmIChsYXN0Tm9kZSkge1xyXG4gICAgICAgIHJhbmdlID0gcmFuZ2UuY2xvbmVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0QWZ0ZXIobGFzdE5vZGUpO1xyXG4gICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUludGVyc2VjdHNOb2RlKHJhbmdlLCBub2RlKSB7XHJcbiAgaWYgKHJhbmdlLmludGVyc2VjdHNOb2RlKSB7XHJcbiAgICByZXR1cm4gcmFuZ2UuaW50ZXJzZWN0c05vZGUobm9kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJhbmdlc0ludGVyc2VjdChyYW5nZSwgY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSlcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKSB7XHJcbiAgdmFyIGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxyXG4gICAgbm9kZXMgPSBnZXRUZXh0Tm9kZXMoY29udGFpbmVyLnBhcmVudE5vZGUgfHwgY29udGFpbmVyKVxyXG5cclxuICByZXR1cm4gbm9kZXMuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICByZXR1cm4gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkgJiYgaXNOb25FbXB0eVRleHROb2RlKG5vZGUpXHJcbiAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNOb25FbXB0eVRleHROb2RlKG5vZGUpIHtcclxuICByZXR1cm4gbm9kZS50ZXh0Q29udGVudC5sZW5ndGggPiAwXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcclxuICBpZiAoZWwucGFyZW50Tm9kZSkge1xyXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSkge1xyXG4gIGlmICh0eXBlb2Ygbm9kZS5wYXJlbnROb2RlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZW1vdmVFbGVtZW50KHJlcGxhY2VtZW50Tm9kZSk7XHJcbiAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSk7XHJcbiAgICByZW1vdmVFbGVtZW50KG5vZGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0VGV4dChub2RlKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChub2RlKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IHNlbGVjdCB0ZXh0IGluIG5vZGU6IFVuc3VwcG9ydGVkIGJyb3dzZXIuXCIpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xyXG4gIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXJGdW5jdGlvbih3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgdmFyIHN0YXJ0Tm9kZSA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLFxyXG4gICAgZW5kTm9kZSA9IHJhbmdlLmVuZENvbnRhaW5lcixcclxuICAgIHN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQsXHJcbiAgICBlbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXRcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBOb2RlKG5vZGUpIHtcclxuICAgIHZhciBjdXJyZW50UmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICBjdXJyZW50V3JhcHBlciA9IHdyYXBwZXJFbC5jbG9uZU5vZGUoKVxyXG5cclxuICAgIGN1cnJlbnRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICBpZiAobm9kZSA9PT0gc3RhcnROb2RlICYmIHN0YXJ0Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0U3RhcnQobm9kZSwgc3RhcnRPZmZzZXQpXHJcbiAgICAgIHN0YXJ0Tm9kZSA9IGN1cnJlbnRXcmFwcGVyXHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUgPT09IGVuZE5vZGUgJiYgZW5kTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0RW5kKG5vZGUsIGVuZE9mZnNldClcclxuICAgICAgZW5kTm9kZSA9IGN1cnJlbnRXcmFwcGVyO1xyXG4gICAgICBlbmRPZmZzZXQgPSAxXHJcbiAgICB9XHJcbiAgICBjdXJyZW50UmFuZ2Uuc3Vycm91bmRDb250ZW50cyhjdXJyZW50V3JhcHBlcilcclxuICAgIHJldHVybiBjdXJyZW50V3JhcHBlclxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RvclVuZGVyU2VsZWN0aW9uID0gKHF1ZXJ5U2VsZWN0b3IpID0+IHtcclxuICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHZhciByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChxdWVyeVNlbGVjdG9yKTtcclxuICBjb25zdCBhbGxTZWxlY3RlZCA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwLCBlbDsgZWwgPSBlbGVtZW50c1tpXTsgaSsrKSB7XHJcbiAgICAvLyBUaGUgc2Vjb25kIHBhcmFtZXRlciBzYXlzIHRvIGluY2x1ZGUgdGhlIGVsZW1lbnQgXHJcbiAgICAvLyBldmVuIGlmIGl0J3Mgbm90IGZ1bGx5IHNlbGVjdGVkXHJcbiAgICBpZiAoc2VsZWN0aW9uLmNvbnRhaW5zTm9kZShlbCwgdHJ1ZSkpIHtcclxuICAgICAgICBhbGxTZWxlY3RlZC5wdXNoKGVsKTtcclxuICAgIH1cclxufVxyXG5yZXR1cm4gYWxsU2VsZWN0ZWQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbE5vZGVzKCkge1xyXG4gIHZhciBub2RlcywgcmFuZ2U7XHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIHdoaWxlIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VUZXh0KHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICBpZiAodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICB9XHJcblxyXG4gIGlmIChyYW5nZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgd3JhcHBlckVsID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGFzc3VtZSBpdCdzIGEgdGFnbmFtZVxyXG4gICAgd3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gIH1cclxuXHJcbiAgd3JhcE5vZGUgPSBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSlcclxuXHJcbiAgbm9kZXMgPSBub2Rlcy5tYXAod3JhcE5vZGUpO1xyXG4gIHJldHVybiBub2Rlc1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgY29uc3QgX29wdGlvbnMgPSB7IHJlbW92ZTogdHJ1ZSB9O1xyXG4gIE9iamVjdC5hc3NpZ24oX29wdGlvbnMsIG9wdGlvbnMpO1xyXG4gIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLnNldEJhc2VBbmRFeHRlbnQoZmlyc3RGbGFnLCAwLCBsYXN0RmxhZywgbGFzdEZsYWcuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gIGlmIChfb3B0aW9ucy5yZW1vdmUpIHtcclxuICAgIFtmaXJzdEZsYWcsIGxhc3RGbGFnXS5mb3JFYWNoKGUgPT4gZS51bndyYXAoKSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25GbGFncyhmaXJzdEVsZW1lbnQsIExhc3RFbGVtZW50KSB7XHJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIGNvbnN0IGZpcnN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgZmlyc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIGZpcnN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgY29uc3QgbGFzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGxhc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIExhc3RFbGVtZW50LnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMClcclxuXHJcbiAgZmlyc3RFbGVtZW50LnByZXBlbmQoZmlyc3RGbGFnKTsgLy9TZXQgZmxhZyB0aGUgZmlyc3RcclxuICBMYXN0RWxlbWVudC5hcHBlbmRDaGlsZChsYXN0RmxhZyk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gIHJldHVybiB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRIVE1MKCkge1xyXG4gIHZhciByYW5nZTtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBudWxsKSByZXR1cm47XHJcbiAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgaWYgKHJhbmdlLmNvbGxhcHNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgY29udGVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgcmFuZ2U6IHJhbmdlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2VsZWN0aW9uKCkge1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlU2VsZWN0aW9uKHJhbmdlKSB7XHJcbiAgaWYgKHJhbmdlKSB7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiByYW5nZS5zZWxlY3QpIHtcclxuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3NOYW1lIH0gZnJvbSBcIi4vY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlUnVsZXMgfSBmcm9tIFwiLi4vcnVsZXMvcnVsZXNcIjtcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudHMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGludGFpbFN0eWxlID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuXHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBnZXRTdHlsZShjdXJyZWN0RWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwW3N0eWxlXTtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbiAgY291bGQgYmUgdHdpY2UgbGlrZSB1bmRlcmxpbmUgYW5kIHN0cmlrZSB0aGVyb3VnaC4uIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRhaWxTdHlsZVtzdHlsZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW50YWlsU3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGludGFpbFN0eWxlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IGVsLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9KVxyXG59XHJcbi8vVE9HR0xFXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBpc09uKSB7XHJcbiAgICBpZiAoaXNPbikge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7dmFsdWV9J11gKSkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGVba2V5XSA9IGNoaWxkLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoY2hpbGQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShjaGlsZCk7XHJcbiAgICB9KVxyXG59XHJcbi8vRVhURU5EXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBqc29uU3R5bGUpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25TdHlsZSkge1xyXG4gICAgICAgIGlmIChqc29uU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGpzb25TdHlsZVtrZXldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9UT0dHTEVcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICBpZihrZXkgPT09IFwiY29sb3JcIil7XHJcbiAgICAgICAgVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6J2NvbG9yJyx2YWx1ZTp2YWx1ZX0pO1xyXG4gICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgIH0pO1xyXG4gICAgLy9leHBlcmltZW50YWw6IHN0eWxlIHRoZSB0ZXh0IGRlY29yYXRpb25zIHdpdGggY29sb3IuLlxyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgLy8gVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6a2V5LHZhbHVlOnZhbHVlfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgPSAoY29ubmVjdGVjRWxlbWVudCkgPT57ICAgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gZ2V0SW5oZWlydENzcyhzZWxlY3RlZEVsZW1lbnQsY29ubmVjdGVjRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShlbGVtZW50KSB7XHJcbiAgICBpZighZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0U3R5bGVzID0gZ2V0U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdFN0eWxlcykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtjb2xsZWN0U3R5bGVzW2tleV19J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKHN0eWxlcykge1xyXG4gICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLnB1c2goYCR7a2V5fToke3N0eWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0U3R5bGVzLmpvaW4oJzsnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcclxuICAgIGlmICghZWwgfHwgIWVsLnN0eWxlKSByZXR1cm4ge307XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBsZXQgc3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsZXQgY29sbGVjdFN0eWxlcyA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdFN0eWxlcykpIHtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVbMV0gJiYga2V5VmFsdWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleVZhbHVlWzBdLnRyaW0oKV0gPSBrZXlWYWx1ZVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZXM7XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWVyZ2VOb2RlQ29udGVjdCwgbWVyZ2VUd29Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXMvbWVyZ2VyXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbCAtIGVsZW1lbnQgdG8gbm9ybWFsaXplXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudChlbCkge1xyXG4gICAgY29uc3QgcmVjdXJzZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICByZWN1cnNlKGNoaWxkKTtcclxuICAgICAgICAgICAgX25vcm1hbGl6ZShjaGlsZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBtZXJnZU5vZGVzU3R5bGVzID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAod3JhcHBlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gd3JhcHBlci5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5leHRFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZVR3b05vZGVzKHdyYXBwZXIsIG5leHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNDb250ZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICYmIHdyYXBwZXIubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyID0gbWVyZ2VOb2RlQ29udGVjdCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1lcmdlZFN0eWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtZXJnZWRDb250ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gX25vcm1hbGl6ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBtZXJnZWRTdHlsZXMgPSBtZXJnZU5vZGVzU3R5bGVzKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbWVyZ2VkQ29udGVudCA9IG1lcmdlTm9kZXNDb250ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSB3aGlsZSAobWVyZ2VkQ29udGVudCAmJiBlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGVsLm5vcm1hbGl6ZSgpO1xyXG4gICAgcmVjdXJzZShlbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZShlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vICBjb25zdCB0YWdzID0gW1wiU1RSSUtFXCIsIFwiRU1cIiwgXCJJXCIsIFwiQlwiLCBcIlNUUk9OR1wiLCBcIlVcIiwgXCJBXCJdO1xyXG5cclxuICAgICAgICAvL1RPRE86IG5vcm1hbGl6ciBhdHRyaWJ1dGVzIChubzpzdHlsZSxjbGFzc05hbWUpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIgJiYgKCFlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCB1bndyYXBwZWQgPSBlbGVtZW50LnVud3JhcCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtBcnJheX0gdGV4dE5vZGVzIC0gdGV4dG5vZGUgdG8gcmVtb3ZlIHRoZSB6ZXJvIHNwYWNlIGxpa2UgOiB1MjAwQlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVplcm9TcGFjZSh0ZXh0Tm9kZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXh0Tm9kZXMpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzID0gW3RleHROb2Rlc107XHJcbiAgICB9XHJcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiVEVYVC1TRUxFQ1RJT05cIikge1xyXG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIiwiY2xhc3MgRG9tVXRpbGlzIHtcclxuXHJcblxyXG4gIGlzRWxlbWVudChvYmopIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAob2JqLm5vZGVUeXBlID09PSAxKSAmJiAodHlwZW9mIG9iai5zdHlsZSA9PT0gXCJvYmplY3RcIikgJiZcclxuICAgICAgICAodHlwZW9mIG9iai5vd25lckRvY3VtZW50ID09PSBcIm9iamVjdFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgd3JhcChlbCwgd3JhcHBlcikge1xyXG4gICAgLy9lbCBzaG91bGQgYmUgYXJyYXlcclxuICAgIGxldCBlbGVtZW50cyA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gZWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50cyA9IFtlbF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFyZW50cyA9IGVsZW1lbnRzLm1hcChlID0+IGUucGFyZW50Tm9kZSk7XHJcbiAgICB2YXIgcGFyZW50c0RpZmYgPSBwYXJlbnRzLmZpbHRlcigocCwgXywgc2VsZikgPT4geyByZXR1cm4gc2VsZlswXSAhPT0gcCB9KTtcclxuICAgIGlmIChwYXJlbnRzRGlmZi5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coYFt3cmFwXSBmb3VuZCAke3BhcmVudHNEaWZmLmxlbmd0aH0gZGlmZmVyZW50IHBhcmVudHMg8J+YhWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYXJlbnRzWzBdLmluc2VydEJlZm9yZSh3cmFwcGVyLCBlbGVtZW50c1swXSlcclxuICAgIGVsZW1lbnRzLmZvckVhY2goX2VsID0+IHdyYXBwZXIuYXBwZW5kQ2hpbGQoX2VsKSlcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IERvbVV0aWxpcygpOyBcclxuXHJcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRTZWxlY3RlZEVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtpZihudWxsIT09ZSl7dmFyIHQ9ZS5hbmNob3JOb2RlO2lmKG51bGwhPT10KXtmb3IoOzM9PT10Lm5vZGVUeXBlOyl0PXQucGFyZW50Tm9kZTtyZXR1cm4gdH1yZXR1cm4gbnVsbH19XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSAoIHdyYXBwZXIpID0+IHtcclxuICBpZiAodHlwZW9mIHdyYXBwZXIgPT09IFwic3RyaW5nXCIpIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHdyYXBwZXIpO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5jcmVhdGVTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KHRoaXMpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gIH0gXHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuaXNjaGlsZE9mID0gZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgaWYgKCFwYXJlbnQpIHJldHVybiBmYWxzZTtcclxuICBsZXQgbm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcclxuICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmNvbnN0IF93cmFwID0gZnVuY3Rpb24od3JhcHBlcikge1xyXG4gIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gIHJldHVybiB3cmFwcGVyO1xyXG59XHJcblRleHQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9IF93cmFwO1xyXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlKSB7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlTm9kZSA9IGZ1bmN0aW9uKHJlcGxhY2VtZW50Tm9kZSkge1xyXG4gIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCB0aGlzKVxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XHJcbiAgfVxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcylcclxuICB2YXIgZXh0cmFDb250ZW50cyA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gIHRoaXMucmVwbGFjZU5vZGUoZXh0cmFDb250ZW50cylcclxuICByZXR1cm4gZXh0cmFDb250ZW50cztcclxufVxyXG4iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldENsYXNzZXMsIG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uL19hcHAuY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogICogUmV0dXJucyB0aGUgbmV3IG1lcmdlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBtZXJnZSB3aXRoIGhpcyBmaXJzdCBjaGlsZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlTm9kZUNvbnRlY3QgPSBub2RlID0+IHtcclxuXHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQobm9kZSkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBub2RlIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENoaWxkID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlmICghZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdCBjaGlsZCBub3QgZm91bmQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChmaXJzdENoaWxkLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdENoaWxkIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnRleHRDb250ZW50ICE9PSBmaXJzdENoaWxkLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIHRleHQgY29udGVudCBpcyBkaWZmZXJlbnQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50UHJvcHMgPSB7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKG5vZGUpLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMobm9kZSksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMobm9kZSlcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gX2VsZW1lbnRQcm9wcy5zdHlsZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBfZWxlbWVudFByb3BzLnN0eWxlW3N0eWxlXTtcclxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSA9IChmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSArIFwiIFwiICsgc3R5bGVWYWx1ZSkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIF9lbGVtZW50UHJvcHMuYXR0cnMpIHtcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBfZWxlbWVudFByb3BzLmF0dHJzW2F0dHJdO1xyXG4gICAgICAgIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmaXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoLi4uX2VsZW1lbnRQcm9wcy5jbGFzc2VzKTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShmaXJzdENoaWxkKTtcclxuICAgIG5vcm1hbGl6ZUVsZW1lbnQoZmlyc3RDaGlsZCk7XHJcbiAgICBpZihmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQpXHJcbiAgICBmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTm9kZXMoZWxlbWVudE9uZSwgZWxlbWVudFR3bykge1xyXG4gICAgY29uc29sZS5sb2coJ1ttZXJnZVR3b05vZGVzXSBTVEFSVCcpO1xyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRPbmUpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRUd28pKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudE9uZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZWxlbWVudFR3by5ub2RlTmFtZSAhPT0gXCJTUEFOXCIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50c0RhdGEgPSBbe1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50T25lKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRPbmUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRPbmUpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50VHdvKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRUd28pLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRUd28pXHJcbiAgICB9XVxyXG4gICAgY29uc3QgZ2V0Q29tbW9uQ2xhc3NlcyA9IChjbGFzc2VzMSwgY2xhc3NlczIpID0+IHtcclxuICAgICAgICBpZiAoIWNsYXNzZXMxIHx8ICFjbGFzc2VzMilcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGNvbnN0IGMxID0gWy4uLmNsYXNzZXMxXTtcclxuICAgICAgICBjb25zdCBjMiA9IFsuLi5jbGFzc2VzMl07XHJcbiAgICAgICAgcmV0dXJuIGMxLmZpbHRlcihjID0+IGMyLmluY2x1ZGVzKGMpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvbW1vblN0eWxlcyA9IChzdHlsZTEsIHN0eWxlMikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1tb25TdHlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gc3R5bGUxKSB7XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUyW3NdKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTFWYWx1ZXMgPSBzdHlsZTFbc107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlMlZhbHVlcyA9IHN0eWxlMltzXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlMlZhbHVlcyA9PT0gc3R5bGUxVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tbW9uU3R5bGVzW3NdID0gc3R5bGUyVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21tbW9uU3R5bGVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbW1vbmNMYXNzZXMgPSBnZXRDb21tb25DbGFzc2VzKF9lbGVtZW50c0RhdGFbMF0uY2xhc3NlcywgX2VsZW1lbnRzRGF0YVsxXS5jbGFzc2VzKTtcclxuICAgIGNvbnN0IGNvbW1vblN0eWxlcyA9IGdldENvbW1vblN0eWxlcyhfZWxlbWVudHNEYXRhWzBdLnN0eWxlLCBfZWxlbWVudHNEYXRhWzFdLnN0eWxlKTtcclxuICAgIGNvbnN0IGJ1aWxkV3JhcHBpbmdFbGVtZW50ID0gKGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN0eWxlc1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBpbiBjb21tb25TdHlsZXMpXHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGVbc10gPSBjb21tb25TdHlsZXNbc107XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAvLyBoYW5kbGUgY2xhc3Nlc1xyXG4gICAgICAgIGlmIChjb21tb25jTGFzc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLmNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod3JhcHBlci5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwcGVyID0gYnVpbGRXcmFwcGluZ0VsZW1lbnQoY29tbW9uU3R5bGVzLCBjb21tb25jTGFzc2VzKTtcclxuICAgIGlmICghd3JhcHBlcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3dyYXBwZXIgaXMgbnVsbCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJFbGVtZW50Q2xhc3NlcyA9IChub2RlLCBjb21tb25jTGFzc2VzKSA9PiB7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShub2RlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudFN0eWxlcyA9IChub2RlLCBjb21tb25TdHlsZXMpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICBub2RlLnN0eWxlW3NdID0gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW2VsZW1lbnRPbmUsIGVsZW1lbnRUd29dO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICBjbGVhckVsZW1lbnRDbGFzc2VzKGUsIGNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIGNsZWFyRWxlbWVudFN0eWxlcyhlLCBjb21tb25TdHlsZXMpO1xyXG4gICAgfSlcclxuXHJcbiAgICBEb21VdGlsaXMud3JhcChlbGVtZW50cywgd3JhcHBlcik7XHJcbiAgICBbLi4ud3JhcHBlci5jaGlsZHJlbl0uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KGMpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbW9uVmFsdWVzT2JqZWN0KG9iajEsIG9iajIpIHtcclxuICAgIGxldCBjb21tb25WYWx1ZXMgPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iajEpIHtcclxuICAgICAgICBpZiAob2JqMltrZXldICYmIG9iajJba2V5XSA9PT0gb2JqMVtrZXldKSB7XHJcbiAgICAgICAgICAgIGNvbW1vblZhbHVlc1trZXldID0gb2JqMVtrZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1vblZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbW9uQXJyYXlzKGFycjEsIGFycjIpIHtcclxuICAgIGNvbnN0IG1lcmdlQXJyID0gW107XHJcbiAgICBBcnJheS5mcm9tKGFycjEpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGFycjIuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbSkgPiAwKSB7XHJcbiAgICAgICAgICAgIG1lcmdlQXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBtZXJnZUFycjtcclxufSIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vRG9tVXRpbGlzXCJcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENzcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEluaGVpcnRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEhUTUwoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCxvcHRpb25zID0ge30pIHtcclxuICAgIGNvbnN0IHt0YWcgPSBcInNwYW5cIn0gPSBvcHRpb25zO1xyXG4gICAgaWYgKCFmcm9tRWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50KSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Zyb21FbGVtZW50IG11c3QgYmUgY2hpbGQgb2YgdG9FbGVtZW50JylcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghRG9tVXRpbGlzLmlzRWxlbWVudChmcm9tRWxlbWVudCkgfHwgIURvbVV0aWxpcy5pc0VsZW1lbnQodG9FbGVtZW50KSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Zyb21FbGVtZW50ICYmIHRvRWxlbWVudCBtdXN0IGJlIGRvbSBlbGVtZW50cy4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRBdHRycyA9IChmcm9tRWxlbWVudCwgdG9FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0SW5oZWlydENzcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBhdHRycyA9IGdldEluaGVpcnRBdHRyaWJ1dGVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGdldEluaGVpcnRDbGFzc05hbWVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKFwiIFwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1tzdHlsZV07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyc1thdHRyXTtcclxuICAgICAgICAgICAgdGVtcGxhdGUuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgZnJvbUVsZW1lbnQuY3JlYXRlU2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBjZW50ZXJUZW1wbGF0ZSA9IHNldEF0dHJzKGNlbnRlckVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAvL2NlbnRlclxyXG4gICAgY2VudGVyVGVtcGxhdGUuYXBwZW5kQ2hpbGQoZnJvbUVsZW1lbnQpO1xyXG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHZhciByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgLy9sZWZ0XHJcbiAgICByYW5nZS5zZXRTdGFydCh0b0VsZW1lbnQsIDApO1xyXG4gICAgY29uc3QgbGVmdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IGxlZnRUZW1wbGF0ZSA9IHNldEF0dHJzKGxlZnRFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgdmFyIGxlZnRSYW5nZSA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgbGVmdFRlbXBsYXRlLmFwcGVuZENoaWxkKGxlZnRSYW5nZSk7XHJcbiAgICAvL3JpZ2h0XHJcbiAgICByYW5nZS5zZXRFbmQodG9FbGVtZW50LCB0b0VsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gICAgY29uc3QgcmlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCByaWdodFRlbXBsYXRlID0gc2V0QXR0cnMocmlnaHRFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgdmFyIHJpZ2h0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIHJpZ2h0VGVtcGxhdGUuYXBwZW5kQ2hpbGQocmlnaHRSYW5nZSk7XHJcbiAgICBjb25zdCBzcGxpdCA9IHtcclxuICAgICAgICBsZWZ0OiBsZWZ0VGVtcGxhdGUsXHJcbiAgICAgICAgY2VudGVyOiBjZW50ZXJUZW1wbGF0ZSxcclxuICAgICAgICByaWdodDogcmlnaHRUZW1wbGF0ZVxyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IGVsIGluIHNwbGl0KSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0W2VsXTtcclxuICAgICAgICB0b0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0b0VsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gc3BsaXQ7XHJcblxyXG59IiwiaW1wb3J0IENvcmUgZnJvbSAnLi9TdHlsZUl0L2luZGV4JztcclxuaW1wb3J0ICBNT0RFUyAgZnJvbSAnLi9TdHlsZUl0L2NvbnN0YW50cy9Nb2Rlcy5qc29uJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3R5bGVJdFxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVJdCB7XHJcbiAgLy9leHBvc2Ugb25seSB0aGUgcmVsZXZhbnQgbWV0aG9kcy4uXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgIC8vVE9ETzogdmFsaWRhdGUgdGFyZ2V0ICYgY29uZmlnLi5cclxuICAgIGNvbnN0IHN0eWxlSXQgPSBuZXcgQ29yZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICBpZiAoc3R5bGVJdCkgeyAgXHJcbiAgICAgIHRoaXMuZXhlY0NtZCA9IHN0eWxlSXQuZXhlY0NtZDtcclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyA9IHN0eWxlSXQudG9nZ2xlQ2xhc3M7XHJcbiAgICAgIHRoaXMubGluayA9IHN0eWxlSXQubGluaztcclxuICAgICAgdGhpcy51bkxpbmsgPSBzdHlsZUl0LnVuTGluaztcclxuICAgICAgdGhpcy5zYXZlID0gc3R5bGVJdC5zYXZlO1xyXG4gICAgICB0aGlzLmxvYWQgPSBzdHlsZUl0LmxvYWQ7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHN0eWxlSXQuZGVzdHJveTtcclxuICAgICAgdGhpcy5vbiA9IHN0eWxlSXQub247XHJcbiAgICAgIHRoaXMuTU9ERVMgPSBNT0RFUztcclxuICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyA9IHRoaXMudG9nZ2xlQ2xhc3MuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5leGVjQ21kID0gdGhpcy5leGVjQ21kLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMub24gPSB0aGlzLm9uLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMubGluayA9IHRoaXMubGluay5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLnVuTGluayA9IHRoaXMudW5MaW5rLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmxvYWQgPSB0aGlzLmxvYWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQoc3R5bGVJdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==