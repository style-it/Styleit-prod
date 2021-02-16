/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.60
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
        } 
         if (_utilis_DomUtilis__WEBPACK_IMPORTED_MODULE_0__["default"].isElement(element)) {
            // valid..
            document.execCommand('defaultParagraphSeparator', false, 'p');
            document.execCommand("styleWithCSS", true, null);
        } else {
            //TODO: use the validator
            console.error('[-] =>connectWith should be element id or dom element..');
            return null;
        }
      
        const usePlugins = (element, options) => {
            return {
                copyPaste: new _services_copyPaste_copyPaste_service__WEBPACK_IMPORTED_MODULE_1__["default"](element, options),
                inspector: new _services_Inspector_Inspector_service__WEBPACK_IMPORTED_MODULE_2__["default"](element, options.onInspect),
                keyPress: new _services_keyPress_KeyPress__WEBPACK_IMPORTED_MODULE_3__["default"](element, options),
            }
        }
        Array.from(element.querySelectorAll("[contenteditable]")).forEach(editable=>{    
            Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_4__["wrapNakedTextNodes"])(editable);
        });
        this.createDefaultStyle();
        this.plugins = usePlugins(element, options);
        return element;
    }
    createDefaultStyle() {
        const style = document.createElement("style");
        style.innerHTML = `
            [contenteditable]{
                min-height:10px;
            }
            `;
        document.head.appendChild(style);
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
/*! exports provided: block_elments, block_elments_queryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block_elments", function() { return block_elments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block_elments_queryString", function() { return block_elments_queryString; });
const block_elments = {
    "H1":"H1",
    "H2":"H2",
    "H3":"H3",
    "H4":"H4",
    "H5":"H5",
    "H6":"H6",
    "P":"P",
    "LI":"LI",
    "OL":"OL",
    "ADDRESS":"ADDRESS",
    "PRE":"PRE"
}   
const block_elments_queryString = "h1,h2,h3,h4,h5,h6,p,pre,address";

/***/ }),

/***/ "./src/StyleIt/constants/inline_elems.js":
/*!***********************************************!*\
  !*** ./src/StyleIt/constants/inline_elems.js ***!
  \***********************************************/
/*! exports provided: inline_elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inline_elements", function() { return inline_elements; });
const inline_elemets_arr = ["SPAN","BOLD","STRONG","EM","I","S","MARK","B","SUB","SUP","SMALL","INS"];
const inline_elements = {};
inline_elemets_arr.forEach(tag=>{inline_elements[tag] = tag});

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

        this.on = (key, callback) => {
            if (typeof (key) !== "string") {
                console.error("key must be a string..");
            }
            if (typeof (callback) !== "function") {
                console.error("callback must be a function..");
            }
            _services_events_events__WEBPACK_IMPORTED_MODULE_8__["EVENTS"][key] = callback;
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
    save(element) {
        return Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["elementToJson"])(element || this.connectedElement);
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
        if (!options || (options && !options.href) || !this.isValid()) {
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
    formatBlock(tagName, options) {
        if(!_constants_block_elms__WEBPACK_IMPORTED_MODULE_11__["block_elments"][tagName.toUpperCase()]){
            throw Error(`valid tags: ${_constants_block_elms__WEBPACK_IMPORTED_MODULE_11__["block_elments_queryString"]}`);
        }
        const elements = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["querySelectorUnderSelection"])(_constants_block_elms__WEBPACK_IMPORTED_MODULE_11__["block_elments_queryString"]);
        if (elements.length > 0) {
            const ranges = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();
            const { firstFlag, lastFlag } = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(ranges[0], ranges[ranges.length - 1]); //Set Flag at last

            elements.forEach(block => {
                const tag = document.createElement(tagName);
                Array.from(block.attributes).forEach(attr => {
                    tag.setAttribute(attr.name, attr.value);
                });
                block.wrap(tag);
                block.unwrap();
            });
            Array.from(ranges).forEach(range=>range.unwrap());
            Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionBetweenTwoNodes"])(firstFlag, lastFlag);
        }


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
        const { firstFlag, lastFlag } = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(elements[0], elements[elements.length - 1]); //Set Flag at last
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


        //==============review===============//
        this.ELEMENTS = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();


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
        const { firstFlag, lastFlag } = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(this.ELEMENTS[0], this.ELEMENTS[this.ELEMENTS.length - 1]);//Set Flag at last
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
        const collectedStyles = Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["collectStyleFromSelectedElement"])(this.connectedElement);
        if (typeof (_services_events_events__WEBPACK_IMPORTED_MODULE_8__["EVENTS"]["inspect"]) === "function") {
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
            }

        } else {
            let isSuccess = Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["findBlockAndStyleIt"])(element, key, value);
            if (!isSuccess) {
                console.log("text nodes and inline elements must be inside block element like p,h1,h2,h3,h4,h5,h6");
            }
        }
    }

    isVAlidKeyValue(key, value) {
        return !!(typeof key === "string" && typeof value === "string");
    }
    isValid() {
        if (!this.connectedElement) {
            console.error('please create new instance..')
            return false;
        };
        const selectedElement = Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["getSelectedElement"])();
        if (selectedElement && (selectedElement.ischildOf(this.connectedElement) && selectedElement.isContentEditable)) {
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
        
        const sameNode = child.parentElement.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments_queryString"]);
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
      const block = pastedContainer.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments_queryString"]);
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
/* harmony import */ var _constants_void_elms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/void_elms */ "./src/StyleIt/constants/void_elms.js");
/* harmony import */ var _constants_block_elms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/block_elms */ "./src/StyleIt/constants/block_elms.js");
/* harmony import */ var _constants_inline_elems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/inline_elems */ "./src/StyleIt/constants/inline_elems.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./range.service */ "./src/StyleIt/services/range.service.js");






function wrapNakedTextNodes(target) {

    target.normalize();

    Array.from(target.childNodes).forEach(c => {

        if (c.nodeType === 1 && !c.textContent.trim() && c.children.length === 0 && !_constants_void_elms__WEBPACK_IMPORTED_MODULE_1__["void_elements"][c.nodeName]) {
            Object(_range_service__WEBPACK_IMPORTED_MODULE_4__["removeElement"])(c);
            return;
        }
        if (c.parentElement === target  && c.textContent.trim() && ((c.nodeType === 1 && _constants_inline_elems__WEBPACK_IMPORTED_MODULE_3__["inline_elements"][c.nodeName]  &&  !c.parentElement.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_2__["block_elments_queryString"])) || c.nodeType === 3)) {
            const p = document.createElement("p");
            c.wrap(p);
            
            while(p.nextSibling && (p.nextSibling.nodeType === 3 || _constants_inline_elems__WEBPACK_IMPORTED_MODULE_3__["inline_elements"][p.nextSibling.nodeName]) ){
                p.appendChild(p.nextSibling);
            }     

            p.normalize();
        }
    })
}

function walkTheDOM(node, func) {
    if (!node) return null;
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}
function walkOnElement(node, func) {
    if (!node) return null;
    const continueWith = func(node);
    if (continueWith) {
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
        if(jsElement.attrs){
            for (const attr in jsElement.attrs) {
                if (Object.hasOwnProperty.call(jsElement.attrs, attr)) {
                    const value = jsElement.attrs[attr];
                    element.setAttribute(attr,value);
                }
            }
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
    if (!parentElement) {
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
function elementToJson(node) {

    const nodeType = node.nodeName;
    let isShouldRenderAttrs = true;
    let json = {};
    let isValid = true;


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
        json.attrs = {};
        //TODO: get attrs 
        Array.from(node.attributes).forEach(attr=>{
            switch (attr.name) {
                case "style":
                    const style = Object(_style_service__WEBPACK_IMPORTED_MODULE_0__["getStyle"])(node);
                    if (Object.keys(style).length > 0) {
                        json.style = style;
                    }
                    break;
                    case "class":
                        if (node.classList && node.classList.length > 0)
                        json.classList = [...node.classList];
                        break;
                default:
                    json.attrs[attr.name] = attr.value;
                    break;
            }
        })
      
 

        if (node.childNodes && node.childNodes.length > 0)
            json.children = [...node.childNodes].map((cn) => elementToJson(cn)).filter(v => v);
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
/* harmony import */ var _constants_block_elms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/block_elms */ "./src/StyleIt/constants/block_elms.js");





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
            const sel = window.getSelection();
            if(sel.focusNode.nodeType === 3 && !sel.focusNode.parentElement.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_4__["block_elments_queryString"])){
                const p = document.createElement("P");
                sel.focusNode.wrap(p);
                Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["setCaretAt"])(p,1)
            }
            if (e.keyCode === 8) {
                const target = e.target;
                if (Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_3__["getCleanText"])(target.textContent) === "") {
                    e.preventDefault();
                    return;
                }
            }
            else if (e.keyCode === 13) {
                if (e.shiftKey) {
                    Object(_range_service__WEBPACK_IMPORTED_MODULE_1__["pasteHtmlAtCaret"])("</br>&#8203;");
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
  }if(element){
    const block = element.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments_queryString"]);
    return block;
  }
 
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
  if (node.parentNode) {
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
  const allSelected = [];

  let commonAncestorContainer = range.commonAncestorContainer;
  
  if(commonAncestorContainer.nodeType === 3){
    commonAncestorContainer = commonAncestorContainer.parentElement;
  }
  if(!commonAncestorContainer){
    return allSelected;
  }
    const elements = commonAncestorContainer.querySelectorAll(querySelector);
  for (var i = 0, el; el = elements[i]; i++) {
    // The second parameter says to include the element 
    // even if it's not fully selected
    if (selection.containsNode(el, true)) {
        allSelected.push(el);
    }
}
if(allSelected.length === 0) {
  const selected = Object(_elements_service__WEBPACK_IMPORTED_MODULE_1__["getSelectedElement"])();
  if(selected){
    const closestElement = selected.closest(querySelector);
    if(closestElement){

      allSelected.push(closestElement);
    }
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
/*! exports provided: getInheirtCss, removeStyle, toggleStyle, setStyles, setStyle, collectStyleFromSelectedElement, normalizeStyle, JsonObjectToStyleString, getStyle, findBlockAndStyleIt */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBlockAndStyleIt", function() { return findBlockAndStyleIt; });
/* harmony import */ var _className_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./className.service */ "./src/StyleIt/services/className.service.js");
/* harmony import */ var _rules_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/rules */ "./src/StyleIt/rules/rules.js");
/* harmony import */ var _elements_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.service */ "./src/StyleIt/services/elements.service.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range.service */ "./src/StyleIt/services/range.service.js");





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
    if (key === "color") {
        Object(_rules_rules__WEBPACK_IMPORTED_MODULE_1__["UseRules"])({ element: element, key: 'color', value: value });
    }
    Array.from(element.querySelectorAll(`[style*='${key}']`)).forEach(el => {
        el.style[key] = null;
        normalizeStyle(el);
    });
    //experimental: style the text decorations with color..
    //TODO:review
    // UseRules({element:element,key:key,value:value});
}
const collectStyleFromSelectedElement = (connectecElement) => {
    const selectedElement = Object(_elements_service__WEBPACK_IMPORTED_MODULE_2__["getSelectedElement"])();
    return getInheirtCss(selectedElement, connectecElement);
}

function normalizeStyle(element) {
    if (!element) return null;
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
function findBlockAndStyleIt(element, key, value) {
    let blockElement = Object(_range_service__WEBPACK_IMPORTED_MODULE_3__["GetClosestBlockElement"])(element);
    if (blockElement) {
        blockElement.style[key] = value;
        Array.from(blockElement.querySelectorAll(`[style*='${key}']`)).forEach(el => el.style[key] = null);
        return true;
    }
    return false;
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
        recurse(el);
    function _normalize(element) {
        element.normalize();
        Object(_className_service__WEBPACK_IMPORTED_MODULE_0__["normalizeClassName"])(element);
        Object(_style_service__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])(element);
        if (element && element.nodeName === "SPAN" && (!element.textContent.trim() || element.attributes.length === 0)) {
            element.unwrap();
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
      this.formatBlock = styleIt.formatBlock;
      this.save = styleIt.save;
      this.load = styleIt.load;
      this.destroy = styleIt.destroy;
      this.on = styleIt.on;
      this.MODES = _StyleIt_constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__;
      //========================================//
      this.toggleClass = this.toggleClass.bind(styleIt);
      this.execCmd = this.execCmd.bind(styleIt);
      this.formatBlock = this.formatBlock.bind(styleIt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2NvbnN0YW50cy9ibG9ja19lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25zdGFudHMvaW5saW5lX2VsZW1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25zdGFudHMvdm9pZF9lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvcnVsZXMvcnVsZXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvYXR0ci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvbGluay5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9Eb21VdGlsaXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9tZXJnZXIuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9zcGxpdEhUTUwuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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O0FBQ0E7QUFDQSx1QkFBdUIsNkVBQWE7QUFDcEMsc0JBQXNCLG1GQUFvQjtBQUMxQywwQkFBMEIsd0ZBQW9CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ2tCOztBQUVyRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBSTtBQUM1QixrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InN0eWxlaXQtYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMnKS5kZWZhdWx0O1xyXG4iLCJcclxuY2xhc3MgVGV4dFNlbGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcclxuICAgICAgY29uc3QgY3JlYXRlWmVyb1NwYWNlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnKTtcclxuICAgICAgaWYoY3JlYXRlWmVyb1NwYWNlID09PSBcInRydWVcIil7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIiYjODIwMztcIjtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYoIWN1c3RvbUVsZW1lbnRzLmdldCgndGV4dC1zZWxlY3Rpb24nKSl7XHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RleHQtc2VsZWN0aW9uJywgVGV4dFNlbGVjdGlvbik7IFxyXG4gIH1cclxuIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi91dGlsaXMvRG9tVXRpbGlzXCI7XHJcbmltcG9ydCBDb3B5UGFzdGUgZnJvbSBcIi4vc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBJbnBzZWN0b3IgZnJvbSBcIi4vc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBLZXlQcmVzcyBmcm9tIFwiLi9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzc1wiO1xyXG5pbXBvcnQgeyB3cmFwTmFrZWRUZXh0Tm9kZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICAgaWYgKERvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgLy8gdmFsaWQuLlxyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcicsIGZhbHNlLCAncCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0eWxlV2l0aENTU1wiLCB0cnVlLCBudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBjb25zdCB1c2VQbHVnaW5zID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcHlQYXN0ZTogbmV3IENvcHlQYXN0ZShlbGVtZW50LCBvcHRpb25zKSxcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvcjogbmV3IElucHNlY3RvcihlbGVtZW50LCBvcHRpb25zLm9uSW5zcGVjdCksXHJcbiAgICAgICAgICAgICAgICBrZXlQcmVzczogbmV3IEtleVByZXNzKGVsZW1lbnQsIG9wdGlvbnMpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NvbnRlbnRlZGl0YWJsZV1cIikpLmZvckVhY2goZWRpdGFibGU9PnsgICAgXHJcbiAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2RlcyhlZGl0YWJsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0U3R5bGUoKTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMgPSB1c2VQbHVnaW5zKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRGVmYXVsdFN0eWxlKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgW2NvbnRlbnRlZGl0YWJsZV17XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IGRlc3RvcnkgZXZlbnRzLi5cclxuICAgIC8vcXVlc3Rpb246IGhvdyB0byB1c2UgdGhlIGV2ZW50cyA/IFxyXG5cclxuXHJcbiAgICBEZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGx1Z2lucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luLkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IGJsb2NrX2VsbWVudHMgPSB7XHJcbiAgICBcIkgxXCI6XCJIMVwiLFxyXG4gICAgXCJIMlwiOlwiSDJcIixcclxuICAgIFwiSDNcIjpcIkgzXCIsXHJcbiAgICBcIkg0XCI6XCJINFwiLFxyXG4gICAgXCJINVwiOlwiSDVcIixcclxuICAgIFwiSDZcIjpcIkg2XCIsXHJcbiAgICBcIlBcIjpcIlBcIixcclxuICAgIFwiTElcIjpcIkxJXCIsXHJcbiAgICBcIk9MXCI6XCJPTFwiLFxyXG4gICAgXCJBRERSRVNTXCI6XCJBRERSRVNTXCIsXHJcbiAgICBcIlBSRVwiOlwiUFJFXCJcclxufSAgIFxyXG5leHBvcnQgY29uc3QgYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZyA9IFwiaDEsaDIsaDMsaDQsaDUsaDYscCxwcmUsYWRkcmVzc1wiOyIsImNvbnN0IGlubGluZV9lbGVtZXRzX2FyciA9IFtcIlNQQU5cIixcIkJPTERcIixcIlNUUk9OR1wiLFwiRU1cIixcIklcIixcIlNcIixcIk1BUktcIixcIkJcIixcIlNVQlwiLFwiU1VQXCIsXCJTTUFMTFwiLFwiSU5TXCJdO1xyXG5leHBvcnQgY29uc3QgaW5saW5lX2VsZW1lbnRzID0ge307XHJcbmlubGluZV9lbGVtZXRzX2Fyci5mb3JFYWNoKHRhZz0+e2lubGluZV9lbGVtZW50c1t0YWddID0gdGFnfSk7IiwiZXhwb3J0IGNvbnN0IHZvaWRfZWxlbWVudHMgPSB7XHJcbiAgICBcIkJSXCI6XCJCUlwiLFxyXG4gICAgXCJIUlwiOlwiSFJcIixcclxuICAgIFwiSU1HXCI6XCJJTUdcIixcclxuICAgIFwiSU5QVVRcIjpcIklOUFVUXCIsXHJcbiAgICBcIkFVRElPXCI6XCJBVURJT1wiLFxyXG4gICAgXCJWSURFT1wiOlwiVklERU9cIixcclxuICAgIFwiUElDVFVSRVwiOlwiUElDVFVSRVwiXHJcbn0iLCJpbXBvcnQge1xyXG4gICAgd3JhcFJhbmdlV2l0aEVsZW1lbnQsXHJcbiAgICBzZXRTZWxlY3Rpb25GbGFncyxcclxuICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyxcclxuICAgIGdldFRleHROb2RlcyxcclxuICAgIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQsXHJcbiAgICBzZXRDYXJldEF0LFxyXG4gICAgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCxcclxuICAgIHF1ZXJ5U2VsZWN0b3JVbmRlclNlbGVjdGlvbixcclxufSBmcm9tIFwiLi9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RlcyBmcm9tICcuL2NvbnN0YW50cy9Nb2Rlcy5qc29uJztcclxuaW1wb3J0IHsgc3BsaXRIVE1MIH0gZnJvbSBcIi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBzZXRTdHlsZSwgdG9nZ2xlU3R5bGUsIGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQsIGZpbmRCbG9ja0FuZFN0eWxlSXQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQsIHJlbW92ZVplcm9TcGFjZSB9IGZyb20gXCIuL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29ubmVjdG9yIGZyb20gJy4vY29ubmVjdG9yJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY3VzdG9tL3RleHRTZWxlY3RlZCc7XHJcbmltcG9ydCB7IGVsZW1lbnRUb0pzb24sIEpzb25Ub0VsZW1lbnQsIGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRVZFTlRTIH0gZnJvbSAnLi9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlVGVtcExpbmtFbGVtZW50LCByZXNldFVSTCwgVEFSR0VUUyB9IGZyb20gXCIuL3NlcnZpY2VzL2xpbmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzL3ZvaWRfZWxtc1wiO1xyXG5pbXBvcnQgeyBibG9ja19lbG1lbnRzLCBibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nIH0gZnJvbSBcIi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xyXG5cclxuICAgIC8vICp0YXJnZXQgPT4gY2FuIGJlIElkIG9mIEVsZW1lbnQgdGhhdCBzaG91bGQgY29udGFpbiBFZGl0b3IgaW5zdGFuY2Ugb3IgdGhlIGVsZW1lbnQgaXRzZWxmLi5cclxuICAgIC8vICpjb25maWcgPT4gIGNvbmZpZ3VyYXRpb24gcGFzc2VkIHQgICBvIFRvb2wgY29uc3RydWN0b3JcclxuICAgIC8vVE9ETzogYWRkIHRhcmdldCB2YWxpZGF0aW9ucy4uO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLl9fY29uZmlnID0ge1xyXG4gICAgICAgICAgICBvbkluc3BlY3Q6IHVuZGVmaW5lZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9uID0gKGtleSwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoa2V5KSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImtleSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFVkVOVFNba2V5XSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlSGFuZGxlcnMgPSB7XHJcbiAgICAgICAgICAgIFtNb2Rlcy5Ub2dnbGVdOiAodiwga2V5LCB2YWx1ZSwgb3B0aW9ucykgPT4gdGhpcy5vblRvZ2dsZSh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSxcclxuICAgICAgICAgICAgW01vZGVzLkV4dGVuZF06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uRXh0ZW5kKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyA/IE9iamVjdC5hc3NpZ24odGhpcy5fX2NvbmZpZywgY29uZmlnKSA6IHRoaXMuX19jb25maWc7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlZDogdGhpcy5jb25maWcub25JbnNwZWN0LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQgPSB0aGlzLkNvbm5lY3Rvci5Db25uZWN0KHRhcmdldCwgdGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gICAgc2F2ZShlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRUb0pzb24oZWxlbWVudCB8fCB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgbG9hZChqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIEpzb25Ub0VsZW1lbnQoanNvbiwgdGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IuRGVzdHJveSgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGYpIHtcclxuICAgICAgICAgICAgdGhpc1trZXldID0gbnVsbDtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlldy5cclxuICAgIC8vVE9ETzogQ3JlYXRlIG5vcm1hbGl6ZS4uXHJcbiAgICAvL3F1ZXN0aW9uOiBpZiB0ZXh0IHdhcyBzZWxlY3RlZCwgc2hvdWxkIHdlIHVud3JhcCB0aGUgc2VsZWN0aWlvbiBvbmx5ID8gXHJcbiAgICB1bkxpbmsoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbiAmJiAhc2VsZWN0aW9uLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1Vud3JhcDtcclxuICAgICAgICAgICAgY29uc3QgYmFzZU5vZGUgPSBzZWxlY3Rpb24uYmFzZU5vZGU7XHJcbiAgICAgICAgICAgIGlmIChiYXNlTm9kZSAmJiBiYXNlTm9kZS5ub2RlVHlwZSA9PT0gMyAmJiBiYXNlTm9kZS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAgPSBiYXNlTm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiYXNlTm9kZSAmJiBiYXNlTm9kZS5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFRvVW53cmFwID0gZWxlbWVudFRvVW53cmFwLmNsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9VbndyYXApIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGlua0VsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBBcnJheS5mcm9tKGxpbmtFbGVtZW50cykuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdEFUYWcgPSByLmNsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VzdEFUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKHIsIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYS51bndyYXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHIudW53cmFwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyhsaW5rRWxlbWVudHNbMF0sIGxpbmtFbGVtZW50c1tsaW5rRWxlbWVudHMubGVuZ3RoIC0gMV0pOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlld1xyXG4gICAgLy9UT0RPOiBtZXJnZSBhIHRhZ3MuLlxyXG4gICAgLy9UT0RPOiByZW1vdmUgYSBjaGlsZHNcclxuICAgIC8vVE9ETzogbW92ZSBmdW5jdGlvbiB0byBMaW5rLnNlcnZpY2UuanNcclxuICAgIGxpbmsob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8IChvcHRpb25zICYmICFvcHRpb25zLmhyZWYpIHx8ICF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbiAmJiAhd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gdGV4dCBzZWxlY3RlZC4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW53cmFwQXRhZ3MgPSAobGlua0VsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtFbGVtZW50cy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShsaW5rLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGFUYWcgPT4gYVRhZy51bndyYXAoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0QVRhZyA9IGxpbmsucGFyZW50RWxlbWVudCA/IGxpbmsucGFyZW50RWxlbWVudC5jbG9zZXN0KFwiYVwiKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEFUYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHNwbGl0SFRNTChsaW5rLCBjbG9zZXN0QVRhZywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3Nlc3RBVGFnLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0VGFyZ2V0VG9UYWcgPSAobGlua0VsZW1lbnRzLCByZW5kZXJlZExpbmssIF90YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgbGlua0VsZW1lbnRzLmZvckVhY2goYVRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhVGFnLmhyZWYgPSByZW5kZXJlZExpbms7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFUYWcuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIF90YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2V0UHJvdG9jb2wgPSAoX3Byb3RvY29sLCBuZXdVUkwpID0+IHtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gX3Byb3RvY29sLnJlcGxhY2UoLzovZywgXCJcIik7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCA9IF9wcm90b2NvbC5yZXBsYWNlKC9cXC9cXC8vZywgXCJcIik7XHJcbiAgICAgICAgICAgIF9wcm90b2NvbCArPSBcIjpcIjtcclxuICAgICAgICAgICAgaWYgKF9wcm90b2NvbC5pbmNsdWRlcyhcImh0dHBcIikpIHtcclxuICAgICAgICAgICAgICAgIF9wcm90b2NvbCArPSBcIi8vXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3VVJMLnB1c2goX3Byb3RvY29sKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9wcm90b2NvbDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCB7IGhyZWYgPSBcIlwiLCBwcm90b2NvbCA9IFwiXCIsIHRhcmdldCA9IFwiXCIgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsZXQgbmV3VVJMID0gW107XHJcbiAgICAgICAgY29uc3QgQXRhZyA9IGNyZWF0ZVRlbXBMaW5rRWxlbWVudChocmVmKTtcclxuICAgICAgICBsZXQgX2hyZWYgPSByZXNldFVSTChocmVmLnRyaW0oKSk7XHJcblxyXG4gICAgICAgIGxldCBfcHJvdG9jb2wgPSBwcm90b2NvbC50cmltKCkgfHwgQXRhZy5wcm90b2NvbDtcclxuICAgICAgICBsZXQgX3RhcmdldCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgdGVzdFRhcmdldCA9IFRBUkdFVFNbdGFyZ2V0LnRyaW0oKS50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZiAodGVzdFRhcmdldCkge1xyXG4gICAgICAgICAgICBfdGFyZ2V0ID0gdGVzdFRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wcm90b2NvbC50cmltKCkpIHtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gc2V0UHJvdG9jb2woX3Byb3RvY29sLCBuZXdVUkwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX2hyZWYpIHtcclxuICAgICAgICAgICAgbmV3VVJMLnB1c2goX2hyZWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZW5kZXJlZExpbmsgPSBuZXdVUkwuam9pbihcIlwiKTtcclxuICAgICAgICB1bndyYXBBdGFncyhsaW5rRWxlbWVudHMpO1xyXG4gICAgICAgIHNldFRhcmdldFRvVGFnKGxpbmtFbGVtZW50cywgcmVuZGVyZWRMaW5rLCBfdGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGxpbmtFbGVtZW50c1swXSwgbGlua0VsZW1lbnRzW2xpbmtFbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7Ly8gbWVyZ2Ugc2libGluZ3MgYW5kIHBhcmVudHMgd2l0aCBjaGlsZCBhcyBwb3NzaWJsZS4uIFxyXG4gICAgfVxyXG4gICAgZm9ybWF0QmxvY2sodGFnTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmKCFibG9ja19lbG1lbnRzW3RhZ05hbWUudG9VcHBlckNhc2UoKV0pe1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgdmFsaWQgdGFnczogJHtibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5U2VsZWN0b3JVbmRlclNlbGVjdGlvbihibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nKTtcclxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZXMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKHJhbmdlc1swXSwgcmFuZ2VzW3Jhbmdlcy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG5cclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChibG9jayA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShibG9jay5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYmxvY2sud3JhcCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgYmxvY2sudW53cmFwKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKHJhbmdlcykuZm9yRWFjaChyYW5nZT0+cmFuZ2UudW53cmFwKCkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlld1xyXG4gICAgLy9xdWVzdGlvbiA6IHdlIHdhbnQgdG8gaGFuZGxlIGFuZCB0b2dnbGUgYW55IGF0dHJpYnV0ZSA/IFxyXG4gICAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lLCBvcHRpb25zKSB7XHJcbiAgICAgICAgLy9oZXJlXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgKGNsYXNzTmFtZSkgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiY2xhc3NOYW1lIG11c3QgYmUgYSBzdHJpbmcuLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGlzVG9nZ2xlT24gPSAodHlwZW9mIChvcHRpb25zLmlzT04pID09PSBcImJvb2xlYW5cIikgPyBvcHRpb25zLmlzT04gOiBlbGVtZW50c1swXS5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgaWYgKCFpc1RvZ2dsZU9uKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdENsYXNzID0gZWwucGFyZW50RWxlbWVudC5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IHNwbGl0SFRNTChlbCwgY2xvc2VzdENsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdC5jZW50ZXIucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGVsZW1lbnRzWzBdLCBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi5cclxuXHJcbiAgICAgICAgaWYgKGZpcnN0RmxhZyAmJiBsYXN0RmxhZykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsLnJlbW92ZUFsbFJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBrZXkgb2YgY3NzIFxyXG4gICAgKiAgQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdmFsdWUgb2YgY3NzXHJcbiAgICAqICBAcGFyYW0geyhPYmplY3QgfCBTdHJpbmcpfSBNb2RlcyAtIG1vZGUgZnJvbSBNb2RlcyA9PiBFeHRlbmQgb3IgVG9nZ2xlXHJcbiAgICAqICBAcGFyYW0ge3N0cmluZ30gTW9kZXMuRXh0ZW5kIC0gb3ZlcnJpZGUgc3R5bGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy50b2dnbGUgLSB0b2dnbGUgc3R5bGVcclxuICAgICogIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBvcHRpb25zIFxyXG4gICAgKi9cclxuICAgIGV4ZWNDbWQoa2V5LCB2YWx1ZSwgbW9kZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkgfHwgIXRoaXMuaXNWQWxpZEtleVZhbHVlKGtleSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50Lm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gW107XHJcbiAgICAgICAgbW9kZSA9IG1vZGUgPyBtb2RlIDogTW9kZXMuRXh0ZW5kO1xyXG4gICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG5cclxuXHJcbiAgICAgICAgLy89PT09PT09PT09PT09PXJldmlldz09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcblxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy51bldyYXAgJiYgQXJyYXkuaXNBcnJheShvcHRpb25zLnVuV3JhcCkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy51bldyYXAuZm9yRWFjaChzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkVMRU1FTlRTLmZvckVhY2godHh0Tm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcCA9IHR4dE5vZGUuY2xvc2VzdChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RFbGVtZW50VG9VbldyYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RoaXMgaXMgaG93IGkgbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24sIGkgZG9udCBrbm93IGlmIHRoaXMgaXMgZ29vZCB3YXksIGJ1dCBpdCB3b3Jrcy4uXHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyh0aGlzLkVMRU1FTlRTWzBdLCB0aGlzLkVMRU1FTlRTW3RoaXMuRUxFTUVOVFMubGVuZ3RoIC0gMV0pOy8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgcmVtb3ZlWmVyb1NwYWNlKGdldFRleHROb2Rlcyh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgbGV0IFRvZ2dsZU1vZGU7Ly9EZWNsYXJlIHRvZ2dsZSBtb2RlLCBUaGUgZmlyc3QgZWxlbWVudCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgaXMgb24gb3Igb2ZmXHJcblxyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gVG9nZ2xlTW9kZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5tb2RlSGFuZGxlcnNbbW9kZV0oZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBNb2Rlcy5Ub2dnbGUgJiYgdHlwZW9mIChUb2dnbGVNb2RlKSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBUb2dnbGVNb2RlID0gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi4gXHJcbiAgICAgICAgLy91c2UgdGhlIGZpcnN0IGFuZCBsYXN0IGZsYWdzIHRvIG1ha2UgdGhlIHRleHQgc2VsZWN0aW9uIGFuZCB1bndyYXAgdGhlbS4uXHJcbiAgICAgICAgaWYgKGZpcnN0RmxhZyAmJiBsYXN0RmxhZykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoc2VsLnJlbW92ZUFsbFJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmV0SG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJldEF0KHRoaXMuY2FyZXRIb2xkZXIsIHRoaXMuY2FyZXRIb2xkZXIudGV4dENvbnRlbnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZXMgPSBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50KHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRVZFTlRTW1wiaW5zcGVjdFwiXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc3R5bGVDaGFuZ2VkJywgY29sbGVjdGVkU3R5bGVzKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhcmV0UGxhY2VtZW50KGF0Tm9kZSkge1xyXG4gICAgICAgIGlmICghYXROb2RlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBjYXJldEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgICAgICAgY2FyZXRIb2xkZXIuc2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJywgJ3RydWUnKTtcclxuICAgICAgICBhdE5vZGUuYXBwZW5kQ2hpbGQoY2FyZXRIb2xkZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJldEhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSlcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdKHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgb25Ub2dnbGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZXRlY3QgaWYgdGhlcmUgaXMgYW55IHBhcmVudCB3aXRoIHN0eWxlIHRvIHNwbGl0LlxyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgY2F0Y2ggZnJvbSBvcHRpb25zIHRvIGRldGVjdCBtb3JlIHRoYW4gb25lIHN0eWxlIG9yIHRhZyBlbGVtZW50LlxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvU3BsaXQgPSBlbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9JyR7dmFsdWV9J11gKTtcclxuICAgICAgICAgICAgLy9UT0RPOiB0ZXN0c1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQgJiYgYmxvY2tfZWxtZW50c1tlbGVtZW50VG9TcGxpdC5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaW5uZXJTcGFuLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCAmJiBlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vdW5ib2xkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEVsZW1lbnRzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHNwbGl0IGVsZW1lbnRzLCBpdHMgZXJyb3IhXHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uT2ZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke2tleX0nXWApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0QmxvY2tzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdEJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0QmxvY2tzLmNlbnRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50YXJnZXQgIT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0LCB7IGVsOiAnc3BhbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoaW5uZXJTcGFuLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RWxlbWVudHMgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzcGxpdEhUTUwgcmV0dXJuIG51bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgIT09IFwiYmxvY2tcIiAmJiBvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCAmJiBibG9ja0VsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShwYXJlbnRFbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC53cmFwKHdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHdyYXBwZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYXMgPT09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZSA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUud3JhcChzcGFuKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVJbmxpbmVTdHlsZSA9IChwYXJlbnROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiB0ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJlbnROb2RlLmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dE5vZGVXaXRoQXBwZW5kU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhdm9pZF9lbGVtZW50c1tub2RlLm5vZGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUlubGluZVN0eWxlKGJsb2NrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAvLyBBcnJheS5mcm9tKGJsb2NrRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKSkuZm9yRWFjaChlbD0+ZWwuc3R5bGVba2V5XSA9IHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaXNTdWNjZXNzID0gZmluZEJsb2NrQW5kU3R5bGVJdChlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGV4dCBub2RlcyBhbmQgaW5saW5lIGVsZW1lbnRzIG11c3QgYmUgaW5zaWRlIGJsb2NrIGVsZW1lbnQgbGlrZSBwLGgxLGgyLGgzLGg0LGg1LGg2XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVkFsaWRLZXlWYWx1ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICEhKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKTtcclxuICAgIH1cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGxlYXNlIGNyZWF0ZSBuZXcgaW5zdGFuY2UuLicpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgKHNlbGVjdGVkRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSAmJiBzZWxlY3RlZEVsZW1lbnQuaXNDb250ZW50RWRpdGFibGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBzcGxpdEhUTUwgfSBmcm9tIFwiLi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5cclxuLy9UT0RPOnJldmlld1xyXG5leHBvcnQgZnVuY3Rpb24gVXNlUnVsZXMoZGF0YSkge1xyXG4gICAgY29uc3QgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmtleSA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHREZWNvcmF0aW9uID0gZGF0YS5lbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9J3RleHQtZGVjb3JhdGlvbiddYCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0RGVjb3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gc3BsaXRIVE1MKGRhdGEuZWxlbWVudCwgdGV4dERlY29yYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRzLmNlbnRlciwgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsIGAke2RhdGEudmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHRleHREZWNvcmF0aW9uLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFJ1bGVzID0gW1xyXG4gICAgICAgIENvbG9yVGV4dERlY29yYXRpb25SdWxlXHJcbiAgICBdXHJcbiAgICBSdWxlcy5mb3JFYWNoKHJ1bGUgPT4gcnVsZShkYXRhKSk7XHJcbn0iLCJcclxuaW1wb3J0IHsgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCB9IGZyb20gJy4uL3N0eWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFVkVOVFMgfSBmcm9tICcuLi9ldmVudHMvZXZlbnRzJztcclxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IHJlc2V0VVJMIH0gZnJvbSAnLi4vbGluay5zZXJ2aWNlJztcclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBjYW4gd2UgZXhwb3NlIHRoZSBjb2xsZWN0ZWRTdHlsZSA/IFxyXG4vL3F1ZXN0aW9uOiBzaG91bGQgd2UgdXNlIHRoaXMgPyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTXV0YXRpb25PYnNlcnZlclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnBzZWN0b3Ige1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBvbkluc3BlY3QpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dIElucHNlY3RvciA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgIHRoaXMub25JbnNwZWN0ID0gb25JbnNwZWN0O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICBjb25zdCBsYXVuY2hJbnNwZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZSA9IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLm9uSW5zcGVjdCkgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHRoaXMub25JbnNwZWN0KGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAoRVZFTlRTW1wiaW5zcGVjdFwiXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdFwiXShjb2xsZWN0ZWRTdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihzZWxlY3RlZEVsZW1lbnQgKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFUYWcgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBpZihhVGFnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoRVZFTlRTW1wiaW5zcGVjdExpbmtcIl0pID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b2NvbDphVGFnLnByb3RvY29sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpyZXNldFVSTChhVGFnLmhyZWYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OmFUYWcuZ2V0QXR0cmlidXRlKFwidGFyZ2V0XCIpIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OmFUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgdGhpcy50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoIDw9IDEgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxhdW5jaEluc3BlY3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuLy9jbGFzcyBhbmQgc3R5bGUgbm90IGluY2x1ZGVzIHlldC4uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIHZhciBhdHRycyA9IGN1cnJlY3RFbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYoYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGN1cnJlY3RFbGVtZW50ID0gY3VycmVjdEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhlbGVtZW50LGdldEFsbCl7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGF0dHJzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZihnZXRBbGwgIHx8ICghZ2V0QWxsICYmIGF0dHJzW2ldLm5hbWUgICE9PVwiY2xhc3NcIiAmJiBhdHRyc1tpXS5uYW1lICAhPT0gXCJzdHlsZVwiKSl7XHJcbiAgICAgICAgICAgIGlmKCFhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSl7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQXR0cnMoZWxlbWVudCl7XHJcbiAgICAgIGlmKGVsZW1lbnQgJiYgIWVsZW1lbnQuYXR0cmlidXRlcyl7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZWxlbWVudCBub3QgaGF2ZSBhdHRyaWJ1dGVzLi5cIik7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cj0+ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSkpXHJcbiAgfSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZWlydENsYXNzTmFtZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSBbXTtcclxuICAgIHZhciBfcGFyZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoX3BhcmVudCAmJiBfcGFyZW50LmlzY2hpbGRPZih0b0VsZW1lbnQucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICBsZXQgbWFwID0gX3BhcmVudC5jbGFzc0xpc3Q7XHJcbiAgICAgICAgQXJyYXkuZnJvbShtYXApLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzLmZpbmRJbmRleChjID0+IGMgPT09IG5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBfcGFyZW50ID0gX3BhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzZXMoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpO1xyXG59XHJcblxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBpcyBleHBlbnNpdmUgdG9vIG11Y2g/IFxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpIHtcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtcHR5Q2xhc3MoZWxlbWVudCl7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XHJcbiAgICAgICAgcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KTtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2xhc3NMaXN0KS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2N9J11gKSkuZm9yRWFjaChub2RlID0+e1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgICAgICAgICAgICAgICByZW1vdmVFbXB0eUNsYXNzKG5vZGUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bY2xhc3NdJykpLmNvbmNhdChlbGVtZW50KTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goY2hpbGQgPT4gY2xlYXIoY2hpbGQpKTtcclxufVxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBob3cgYWJvdXQgdGhpcyBuYW1lID8gXHJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSl7XHJcbmNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKSkuY29uY2F0KHRoaXMpO1xyXG5ub2Rlcy5mb3JFYWNoKG5vZGU9Pm5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcclxufSIsImltcG9ydCB7IGJsb2NrX2VsbWVudHMsIGJsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuaW1wb3J0IHsgdm9pZF9lbGVtZW50cyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvdm9pZF9lbG1zXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi8uLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q3NzLCBzZXRTdHlsZXMgfSBmcm9tIFwiLi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRDbGVhblRleHQsIG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weVBhc3RlIHtcclxuXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHRoaXMuc3R5bGVzVG9QYXN0ZSA9IHR5cGVvZiBvcHRpb25zLnN0eWxlc1RvUGFzdGUgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLnN0eWxlc1RvUGFzdGUgOiBudWxsO1xyXG4gICAgdGhpcy5wYXN0ZSA9IHRoaXMucGFzdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29weSA9IHRoaXMuY29weS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY29weShldmVudCkge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbC5yYW5nZUNvdW50OyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgIGxldCBjb3BpZWROb2RlID0gc2VsLmdldFJhbmdlQXQoaSkuY2xvbmVDb250ZW50cygpO1xyXG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcGllZE5vZGUpO1xyXG5cclxuICAgICAgICAgIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkTm9kZXMpLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50Q29waWVkTm9kZSA9IHNlbC5nZXRSYW5nZUF0KGkpLnN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGVkQ1NTID0gZ2V0SW5oZWlydENzcyhwYXJlbnRDb3BpZWROb2RlLCB0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb3BpZWROb2RlLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgc2V0U3R5bGVzKHNwYW4sIGNvbGxlY3RlZENTUyk7XHJcbiAgICAgICAgICAgICAgbi53cmFwKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkX2VsZW1lbnRzW24ubm9kZU5hbWVdICYmIG4ubm9kZU5hbWUgIT09IFwiQlJcIikge1xyXG4gICAgICAgICAgICAgIG4ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgPSBjb250YWluZXI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LnNlbGVjdGlvbikge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uLnR5cGUgPT09IFwiVGV4dFwiKSB7XHJcbiAgICAgICAgaHRtbCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLmh0bWxUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCdzdHlsZWl0L2h0bWwnLCBodG1sLmlubmVySFRNTCk7XHJcbiAgICBldmVudC5jbGlwYm9hcmREYXRhLnNldERhdGEoJ3RleHQvcGxhaW4nLCBodG1sLnRleHRDb250ZW50KTtcclxuICB9XHJcbiAgcGFzdGUoZXZlbnQpIHtcclxuICAgIGNvbnN0IGlzU2hpZnRlZCA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgaWYgKGlzU2hpZnRlZCkge1xyXG4gICAgICB0aGlzLnBhc3RlUGxhaW5UZXh0KGV2ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFzdGVXaXRoU3R5bGVzKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgcGFzdGVQbGFpblRleHQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjb3BpZWQgPSBkYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKS50cmltKCk7XHJcbiAgICBjb3BpZWQgPSBjb3BpZWQucmVwbGFjZSgvXFxuL2csIFwiPGJyLz5cIilcclxuICAgIGlmICghY29waWVkLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmlubmVySFRNTCA9IGNvcGllZDtcclxuXHJcbiAgICBwYXN0ZUh0bWxBdENhcmV0KHApO1xyXG4gICAgc2V0Q2FyZXRBdChwKTtcclxuXHJcbiAgICBpZiAocC5wYXJlbnRFbGVtZW50ICE9PSB0aGlzLnRhcmdldCkge1xyXG4gICAgICBwLnVud3JhcCgpO1xyXG5cclxuICAgIH1cclxuICAgIEFycmF5LmZyb20odGhpcy50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBpZiAoIWNoaWxkLnRleHRDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcGFzdGVXaXRoU3R5bGVzKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICBjb25zdCBjb3BpZWQgPSBkYXRhLmdldERhdGEoJ3N0eWxlaXQvaHRtbCcpLnRyaW0oKTtcclxuICAgIC8vb24gY29waWVkIG9uIHRoZSBlZGl0b3IgbG9jYWx5XHJcbiAgICBpZiAoY29waWVkKSB7XHJcbiAgICAgIGNvbnN0IHBhc3RlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHBhc3RlZENvbnRhaW5lci5pbm5lckhUTUwgPSBjb3BpZWQ7XHJcbiAgICAgIHBhc3RlSHRtbEF0Q2FyZXQocGFzdGVkQ29udGFpbmVyKTtcclxuICAgICAgQXJyYXkuZnJvbShwYXN0ZWRDb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGlmICghZ2V0Q2xlYW5UZXh0KGNoaWxkLnRleHRDb250ZW50KSAmJiAhdm9pZF9lbGVtZW50c1tjaGlsZC5ub2RlTmFtZV0pIHtcclxuICAgICAgICAgIGNoaWxkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIEFycmF5LmZyb20ocGFzdGVkQ29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzYW1lTm9kZSA9IGNoaWxkLnBhcmVudEVsZW1lbnQuY2xvc2VzdChibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nKTtcclxuICAgICAgICBpZiAoc2FtZU5vZGUgJiYgYmxvY2tfZWxtZW50c1tjaGlsZC5ub2RlTmFtZV0gJiYgZ2V0Q2xlYW5UZXh0KHNhbWVOb2RlLnRleHRDb250ZW50KSA9PT0gZ2V0Q2xlYW5UZXh0KHBhc3RlZENvbnRhaW5lci50ZXh0Q29udGVudCkpIHtcclxuICAgICAgICAgIHNhbWVOb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBzYW1lTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxICYmIGJsb2NrX2VsbWVudHNbY2hpbGQubm9kZU5hbWVdICYmIHNhbWVOb2RlKSB7XHJcbiAgICAgICAgICBpZiAocGFzdGVkQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY2hpbGQuaW5zZXJ0QWZ0ZXIoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkJSXCIpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoaWxkLnVud3JhcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghZ2V0Q2xlYW5UZXh0KGNoaWxkLnRleHRDb250ZW50KSkge1xyXG4gICAgICAgICAgY2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgYmxvY2sgPSBwYXN0ZWRDb250YWluZXIuY2xvc2VzdChibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nKTtcclxuICAgICAgaWYgKGJsb2NrKSB7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBzcGxpdEhUTUwocGFzdGVkQ29udGFpbmVyLCBibG9jaywgeyB0YWc6IGJsb2NrLm5vZGVOYW1lIH0pO1xyXG4gICAgICAgIGlmIChwYXJ0cykge1xyXG4gICAgICAgICAgcGFydHMubGVmdC5hcHBlbmRDaGlsZChwYXJ0cy5jZW50ZXIpO1xyXG4gICAgICAgICAgcGFydHMuY2VudGVyLmFwcGVuZENoaWxkKHBhcnRzLnJpZ2h0KTtcclxuICAgICAgICAgIHBhcnRzLnJpZ2h0LnVud3JhcCgpO1xyXG4gICAgICAgICAgcGFydHMuY2VudGVyLnVud3JhcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBub3JtYWxpemVFbGVtZW50KHRoaXMudGFyZ2V0KTtcclxuICAgICAgc2V0Q2FyZXRBdChwYXN0ZWRDb250YWluZXIpO1xyXG4gICAgICBwYXN0ZWRDb250YWluZXIudW53cmFwKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhc3RlUGxhaW5UZXh0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIHRoaXMucGFzdGUpO1xyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNvcHlcIiwgdGhpcy5jb3B5KTtcclxuICB9XHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCB0aGlzLnBhc3RlKTtcclxuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIHRoaXMuY29weSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0U3R5bGUsIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy92b2lkX2VsbXNcIjtcclxuaW1wb3J0IHsgYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZyB9IGZyb20gXCIuLi9jb25zdGFudHMvYmxvY2tfZWxtc1wiO1xyXG5pbXBvcnQgeyBpbmxpbmVfZWxlbWVudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2lubGluZV9lbGVtc1wiO1xyXG5pbXBvcnQgeyByZW1vdmVFbGVtZW50IH0gZnJvbSBcIi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBOYWtlZFRleHROb2Rlcyh0YXJnZXQpIHtcclxuXHJcbiAgICB0YXJnZXQubm9ybWFsaXplKCk7XHJcblxyXG4gICAgQXJyYXkuZnJvbSh0YXJnZXQuY2hpbGROb2RlcykuZm9yRWFjaChjID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGMubm9kZVR5cGUgPT09IDEgJiYgIWMudGV4dENvbnRlbnQudHJpbSgpICYmIGMuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmICF2b2lkX2VsZW1lbnRzW2Mubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQoYyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMucGFyZW50RWxlbWVudCA9PT0gdGFyZ2V0ICAmJiBjLnRleHRDb250ZW50LnRyaW0oKSAmJiAoKGMubm9kZVR5cGUgPT09IDEgJiYgaW5saW5lX2VsZW1lbnRzW2Mubm9kZU5hbWVdICAmJiAgIWMucGFyZW50RWxlbWVudC5jbG9zZXN0KGJsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmcpKSB8fCBjLm5vZGVUeXBlID09PSAzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIGMud3JhcChwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdoaWxlKHAubmV4dFNpYmxpbmcgJiYgKHAubmV4dFNpYmxpbmcubm9kZVR5cGUgPT09IDMgfHwgaW5saW5lX2VsZW1lbnRzW3AubmV4dFNpYmxpbmcubm9kZU5hbWVdKSApe1xyXG4gICAgICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChwLm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgfSAgICAgXHJcblxyXG4gICAgICAgICAgICBwLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpIHtcclxuICAgIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBmdW5jKG5vZGUpO1xyXG4gICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgd2Fsa1RoZURPTShub2RlLCBmdW5jKTtcclxuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd2Fsa09uRWxlbWVudChub2RlLCBmdW5jKSB7XHJcbiAgICBpZiAoIW5vZGUpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgY29udGludWVXaXRoID0gZnVuYyhub2RlKTtcclxuICAgIGlmIChjb250aW51ZVdpdGgpIHtcclxuICAgICAgICBub2RlID0gY29udGludWVXaXRoO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICAgIHdhbGtPbkVsZW1lbnQobm9kZSwgZnVuYyk7XHJcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEVsZW1lbnQoKSB7XHJcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgICB2YXIgYW5jTm9kZSA9IG5vZGUuZm9jdXNOb2RlO1xyXG4gICAgICAgIGlmIChhbmNOb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChhbmNOb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBhbmNOb2RlID0gYW5jTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGVsID0gKGFuY05vZGUubm9kZVR5cGUgPT09IDMgPyBhbmNOb2RlLnBhcmVudE5vZGUgOiBub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFuY05vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBKc29uVG9FbGVtZW50KGpzb25PYmplY3QsIHBhcmVudEVsZW1lbnQpIHtcclxuICAgIC8vVE9ETzogY3JlYXRlIHBhcmVudGVsZW1lbnQgYW5kIGpzb25vYmplY3QgdmFsaWRhdGlvbiAgIFxyXG4gICAgY29uc3QgcmVuZGVyQXR0cnMgPSAoanNFbGVtZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGpzRWxlbWVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgPSBbLi4uanNFbGVtZW50LmNsYXNzTGlzdF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuc3R5bGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdGVkU3R5bGUgPSBKc29uT2JqZWN0VG9TdHlsZVN0cmluZyhqc0VsZW1lbnQuc3R5bGUpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlID0gY29sbGVjdGVkU3R5bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGpzRWxlbWVudC5hdHRycyl7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiBqc0VsZW1lbnQuYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChqc0VsZW1lbnQuYXR0cnMsIGF0dHIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBqc0VsZW1lbnQuYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cix2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBvdGhlciBhdHRycy4uLlxyXG4gICAgfVxyXG4gICAgY29uc3QgY3JlYXRlSHRtbEVsZW1lbnQgPSAoanNFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZVR5cGUgPSBqc0VsZW1lbnQudGFnO1xyXG4gICAgICAgIGxldCBlbGVtZW50O1xyXG4gICAgICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzO1xyXG4gICAgICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIiN0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoanNFbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5ocmVmID0ganNFbGVtZW50LmhyZWY7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRhcmdldCA9IGpzRWxlbWVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcclxuICAgICAgICAgICAgICAgIGlzU2hvdWxkUmVuZGVyQXR0cnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVuZGVyQXR0cnMoanNFbGVtZW50LCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIXBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoanNvbk9iamVjdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0LmNoaWxkcmVuKSkge1xyXG4gICAgICAgIGpzb25PYmplY3QuY2hpbGRyZW4uZm9yRWFjaChqc0NoaWxkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudChqc0NoaWxkKTtcclxuICAgICAgICAgICAgaWYgKGh0bWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIEpzb25Ub0VsZW1lbnQoanNDaGlsZCwgaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FudCBjcmVhdGUgZG9tIGVsZW1lbnQgZnJvbSBqc29uJywganNDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50VG9Kc29uKG5vZGUpIHtcclxuXHJcbiAgICBjb25zdCBub2RlVHlwZSA9IG5vZGUubm9kZU5hbWU7XHJcbiAgICBsZXQgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICBsZXQganNvbiA9IHt9O1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICBzd2l0Y2ggKG5vZGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIiN0ZXh0XCI6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGpzb24udGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgICAgICBpc1Nob3VsZFJlbmRlckF0dHJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vcXVlc3Rpb246IHJlcGxhY2UgXFxuID9cclxuICAgICAgICAgICAgaWYgKCFqc29uLnRleHRDb250ZW50LnRyaW0oKSkgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiQVwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLmhyZWYgPSBub2RlLmhyZWY7XHJcbiAgICAgICAgICAgIGpzb24udGFyZ2V0ID0gbm9kZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIC8vVE9ETzogc2hvdWxkIHdlIHVud3JhcCB0aGlzIG5vZGUgPyBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVmFsaWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMpIHtcclxuICAgICAgICBqc29uLmF0dHJzID0ge307XHJcbiAgICAgICAgLy9UT0RPOiBnZXQgYXR0cnMgXHJcbiAgICAgICAgQXJyYXkuZnJvbShub2RlLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cj0+e1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGF0dHIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0eWxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3R5bGUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbi5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xhc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NMaXN0ICYmIG5vZGUuY2xhc3NMaXN0Lmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uY2xhc3NMaXN0ID0gWy4uLm5vZGUuY2xhc3NMaXN0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGpzb24uYXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBcclxuIFxyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNoaWxkcmVuID0gWy4uLm5vZGUuY2hpbGROb2Rlc10ubWFwKChjbikgPT4gZWxlbWVudFRvSnNvbihjbikpLmZpbHRlcih2ID0+IHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBqc29uO1xyXG5cclxufSIsImV4cG9ydCBjb25zdCBFVkVOVFMgPSB7XHJcbiAgXHJcbn0iLCJpbXBvcnQgeyAgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4uL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCwgaW5zZXJ0QWZ0ZXIsIHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge3ZvaWRfZWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92b2lkX2VsbXMnO1xyXG5pbXBvcnQgeyBnZXRDbGVhblRleHQgfSBmcm9tIFwiLi4vdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGJsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UHJlc3Mge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignWy1dIGtleVByZXNzID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25LZXlQcmVzcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25LZXlQcmVzcyA9IG9wdGlvbnMub25LZXlQcmVzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICBcclxuXHJcbiAgICAgICAgdGhpcy5rZXlwcmVzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYoc2VsLmZvY3VzTm9kZS5ub2RlVHlwZSA9PT0gMyAmJiAhc2VsLmZvY3VzTm9kZS5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZykpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsLmZvY3VzTm9kZS53cmFwKHApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChwLDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Q2xlYW5UZXh0KHRhcmdldC50ZXh0Q29udGVudCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzdGVIdG1sQXRDYXJldChcIjwvYnI+JiM4MjAzO1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KHNlbGVjdGlvbi5hbmNob3JOb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ID09PSB0aGlzLnRhcmdldCB8fCAhYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYW5nZTJleHRyYWN0ID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZTJleHRyYWN0LmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoc2VsZWN0aW9uLmFuY2hvck5vZGUsIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKGJsb2NrRWxlbWVudCwgYmxvY2tFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCAmJiAhdGhpcy50YXJnZXQudGV4dENvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgIT09IHRoaXMudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjICE9PSBibG9ja0VsZW1lbnQgJiYgIWMudGV4dENvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRWxlbWVudC5pbm5lckhUTUwgPSBibG9ja0VsZW1lbnQuaW5uZXJIVE1MICsgXCImIzgyMDM7XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXJldEF0KGJsb2NrRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jRnJhZ21lbnQgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jRnJhZ21lbnQuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSAmJiAhY2hpbGQudGV4dENvbnRlbnQudHJpbSgpICYmICF2b2lkX2VsZW1lbnRzW2NoaWxkLm5vZGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYmxvY2tFbGVtZW50Lm5vZGVOYW1lIHx8IFwicFwiKTtcclxuICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY0ZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghZWwudGV4dENvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCImIzgyMDM7XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRBZnRlcihlbCwgYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZWwucHJldmlvdXNTaWJsaW5nLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsYXR0ci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tFbGVtZW50LmFwcGVuZENoaWxkKGJyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgd3JhcE5ha2VkVGV4dE5vZGVzKHRoaXMudGFyZ2V0LCB7IGV4cGVjdDogYmxvY2tFbGVtZW50IH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZXRBdChlbCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXMub25LZXlQcmVzcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlwcmVzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuRGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICAgY29uc3QgVEFSR0VUUyA9IHtcclxuICAgIF9ibGFuazogXCJfYmxhbmtcIixcclxuICAgIF9zZWxmOiBcIl9zZWxmXCIsXHJcbiAgICBfcGFyZW50OiBcIl9wYXJlbnRcIixcclxuICAgIF90b3A6IFwiX3RvcFwiXHJcbn1cclxuZXhwb3J0ICBjb25zdCByZXNldFVSTCA9IChzcmMpID0+IHtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9odHRwczovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL2h0dHA6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9tYWlsdG86L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC90ZWw6L2csICcnKTtcclxuICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXC8vZywgJycpO1xyXG4gICAgcmV0dXJuIHNyYztcclxufVxyXG5leHBvcnQgICBjb25zdCBjcmVhdGVUZW1wTGlua0VsZW1lbnQgPSAoaHJlZikgPT4ge1xyXG4gICAgY29uc3QgQXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgQXRhZy5ocmVmID0gaHJlZjtcclxuICAgIHJldHVybiBBdGFnO1xyXG59IiwiaW1wb3J0IHsgYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZyB9IGZyb20gXCIuLi9jb25zdGFudHMvYmxvY2tfZWxtc1wiO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiAob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIG9wdGlvbnMgPSB7fTtcclxuICBsZXQgaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLmVsIHx8IFwic3BhblwiKTtcclxuICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiBpbm5lclNwYW4uYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyU3Bhbik7XHJcbiAgcmV0dXJuIGlubmVyU3BhbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KSB7XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcclxuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgfWlmKGVsZW1lbnQpe1xyXG4gICAgY29uc3QgYmxvY2sgPSBlbGVtZW50LmNsb3Nlc3QoYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZyk7XHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG4gXHJcbn1cclxuLy9UT0RPOnJldmlld1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEJsb2NrRWxlbWVudChsaW1pdEVsZW1lbnQpIHtcclxuICBjb25zdCB3cmFwRWxlbWVudFdpdGhCbG9jayA9IChlbCkgPT4ge1xyXG4gICAgbGV0IHdFbCA9IFwiZGl2XCI7XHJcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09IFwiU1BBTlwiKSB7XHJcbiAgICAgIHdFbCA9IFwicFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod0VsKTtcclxuICAgIGVsLndyYXAod3JhcHBlcik7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxuICB9XHJcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICBsZXQgbm9kZXMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gIG5vZGVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgYmxvY2tFbCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWwpO1xyXG4gICAgaWYgKGJsb2NrRWwpIHtcclxuICAgICAgaWYgKGJsb2NrRWwuaXNjaGlsZE9mKGxpbWl0RWxlbWVudCkpIHtcclxuICAgICAgICBjb25zdCBmb3VuZGVkID0gZWxlbWVudHMuZmluZChibG9jayA9PiBibG9ja0VsLmlzY2hpbGRPZihibG9jaykpO1xyXG4gICAgICAgIGlmICghZm91bmRlZClcclxuICAgICAgICAgIGVsZW1lbnRzLnB1c2goYmxvY2tFbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgX3dyYXBwZXIgPSB3cmFwRWxlbWVudFdpdGhCbG9jayhlbCk7XHJcbiAgICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKF93cmFwcGVyKTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5vZGVzOiBub2RlcyxcclxuICAgIGJsb2NrczogZWxlbWVudHNcclxuICB9XHJcbiAgcmV0dXJuIGVsZW1lbnRzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VXaXRoRWxlbWVudCh3cmFwVGFnKSB7XHJcbiAgY29uc3QgcmFuZ2VzID0gZ2V0UmFuZ2VzKCk7XHJcbiAgcmV0dXJuIHJhbmdlcy5tYXAociA9PiB7XHJcbiAgICByZXR1cm4gd3JhcFJhbmdlVGV4dCh3cmFwVGFnLCByKTtcclxuICB9KS5mbGF0KCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlcygpIHtcclxuICBsZXQgcmFuZ2VzID0gW107XHJcblxyXG4gIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWwucmFuZ2VDb3VudDsgaSsrKSB7XHJcbiAgICByYW5nZXNbaV0gPSBzZWwuZ2V0UmFuZ2VBdChpKTtcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlcztcclxufVxyXG4vLyByZXR1cm4gYWxsIHRleHQgbm9kZXMgdGhhdCBhcmUgY29udGFpbmVkIHdpdGhpbiBgZWxgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0Tm9kZXMoZWwpIHtcclxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQsXHJcbiAgICB3YWxrZXIgPSBkb2MuY3JlYXRlVHJlZVdhbGtlcihlbCwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKSxcclxuICAgIHRleHROb2RlcyA9IFtdLFxyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG5cclxuICB3aGlsZSAobm9kZSkge1xyXG4gICAgdGV4dE5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgfVxyXG4gIHJldHVybiB0ZXh0Tm9kZXNcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VzSW50ZXJzZWN0KHJhbmdlQSwgcmFuZ2VCKSB7XHJcbiAgcmV0dXJuIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuRU5EX1RPX1NUQVJULCByYW5nZUIpID09PSAtMSAmJlxyXG4gICAgcmFuZ2VBLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhSYW5nZS5TVEFSVF9UT19FTkQsIHJhbmdlQikgPT09IDFcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSB7XHJcbiAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICB0cnkge1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZShub2RlKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKVxyXG4gIH1cclxuICByZXR1cm4gcmFuZ2VcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZXRDaGFyYWN0ZXJPZmZzZXRXaXRoaW4oZWxlbWVudCkge1xyXG4gIHZhciBjYXJldE9mZnNldCA9IDA7XHJcbiAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50LmRvY3VtZW50O1xyXG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcclxuICB2YXIgc2VsO1xyXG4gIGlmICh0eXBlb2Ygd2luLmdldFNlbGVjdGlvbiAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBzZWwgPSB3aW4uZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsLnJhbmdlQ291bnQgPiAwKSB7XHJcbiAgICAgIHZhciByYW5nZSA9IHdpbi5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApO1xyXG4gICAgICB2YXIgcHJlQ2FyZXRSYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgcHJlQ2FyZXRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XHJcbiAgICAgIHByZUNhcmV0UmFuZ2Uuc2V0RW5kKHJhbmdlLmVuZENvbnRhaW5lciwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFJhbmdlLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoKHNlbCA9IGRvYy5zZWxlY3Rpb24pICYmIHNlbC50eXBlICE9IFwiQ29udHJvbFwiKSB7XHJcbiAgICB2YXIgdGV4dFJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICB2YXIgcHJlQ2FyZXRUZXh0UmFuZ2UgPSBkb2MuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHByZUNhcmV0VGV4dFJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgcHJlQ2FyZXRUZXh0UmFuZ2Uuc2V0RW5kUG9pbnQoXCJFbmRUb0VuZFwiLCB0ZXh0UmFuZ2UpO1xyXG4gICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFRleHRSYW5nZS50ZXh0Lmxlbmd0aDtcclxuICB9XHJcbiAgcmV0dXJuIGNhcmV0T2Zmc2V0O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDYXJldEF0KGVsZW1lbnQsIGNoYXJJbmRleCA9IDApIHtcclxuXHJcbiAgdmFyIG5vZGUgPSBlbGVtZW50O1xyXG4gIG5vZGUuZm9jdXMoKTtcclxuICB2YXIgdGV4dE5vZGUgPSBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSk7XHJcbiAgaWYgKHRleHROb2RlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgdGV4dE5vZGUgPSBlbGVtZW50O1xyXG4gICAgd2hpbGUgKHRleHROb2RlICYmIHRleHROb2RlLmZpcnN0Q2hpbGQgJiYgdGV4dE5vZGUubm9kZVR5cGUgIT09IDMpIHtcclxuICAgICAgdGV4dE5vZGUgPSB0ZXh0Tm9kZS5maXJzdENoaWxkO1xyXG4gICAgfVxyXG4gICAgaWYodGV4dE5vZGUpe1xyXG4gICAgICB0ZXh0Tm9kZSA9IFt0ZXh0Tm9kZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlWzBdLCBjaGFySW5kZXgpO1xyXG4gIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZVswXSwgY2hhckluZGV4KTtcclxuICByYW5nZS5jb2xsYXBzZSh0cnVlKVxyXG4gIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXN0ZUh0bWxBdENhcmV0KGh0bWwpIHtcclxuICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICBjb25zdCBjb250ZW50ZWRpdGFibGUgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpO1xyXG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICBpZiAoY29udGVudGVkaXRhYmxlKSB7XHJcbiAgICBpZiAoIWNvbnRlbnRlZGl0YWJsZS5jb250ZW50RWRpdGFibGUpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICghaXNWYWxpZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHZhciBzZWwsIHJhbmdlO1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAvLyBJRTkgYW5kIG5vbi1JRVxyXG4gICAgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XHJcblxyXG4gICAgICAvLyBSYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoKSB3b3VsZCBiZSB1c2VmdWwgaGVyZSBidXQgaXNcclxuICAgICAgLy8gb25seSByZWxhdGl2ZWx5IHJlY2UgbnRseSBzdGFuZGFyZGl6ZWQgYW5kIGlzIG5vdCBzdXBwb3J0ZWQgaW5cclxuICAgICAgLy8gc29tZSBicm93c2VycyAoSUU5LCBmb3Igb25lKVxyXG4gICAgICBsZXQgZWw7XHJcbiAgICAgIGlmICh0eXBlb2YgKGh0bWwpID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIG5vZGUsIGxhc3ROb2RlO1xyXG4gICAgICAgIHdoaWxlICgobm9kZSA9IGVsLmZpcnN0Q2hpbGQpKSB7XHJcbiAgICAgICAgICBsYXN0Tm9kZSA9IGZyYWcuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhbmdlLmluc2VydE5vZGUoZnJhZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodHlwZW9mIChodG1sKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIHJhbmdlLmluc2VydE5vZGUoaHRtbCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAvLyBQcmVzZXJ2ZSB0aGUgc2VsZWN0aW9uXHJcbiAgICAgIGlmIChsYXN0Tm9kZSkge1xyXG4gICAgICAgIHJhbmdlID0gcmFuZ2UuY2xvbmVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNldFN0YXJ0QWZ0ZXIobGFzdE5vZGUpO1xyXG4gICAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xyXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZUludGVyc2VjdHNOb2RlKHJhbmdlLCBub2RlKSB7XHJcbiAgaWYgKHJhbmdlLmludGVyc2VjdHNOb2RlKSB7XHJcbiAgICByZXR1cm4gcmFuZ2UuaW50ZXJzZWN0c05vZGUobm9kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJhbmdlc0ludGVyc2VjdChyYW5nZSwgY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSlcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKSB7XHJcbiAgdmFyIGNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxyXG4gICAgbm9kZXMgPSBnZXRUZXh0Tm9kZXMoY29udGFpbmVyLnBhcmVudE5vZGUgfHwgY29udGFpbmVyKVxyXG5cclxuICByZXR1cm4gbm9kZXMuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICByZXR1cm4gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkgJiYgaXNOb25FbXB0eVRleHROb2RlKG5vZGUpXHJcbiAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNOb25FbXB0eVRleHROb2RlKG5vZGUpIHtcclxuICByZXR1cm4gbm9kZS50ZXh0Q29udGVudC5sZW5ndGggPiAwXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcclxuICBpZiAoZWwucGFyZW50Tm9kZSkge1xyXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSkge1xyXG4gIGlmIChub2RlLnBhcmVudE5vZGUpIHtcclxuICAgIHJlbW92ZUVsZW1lbnQocmVwbGFjZW1lbnROb2RlKTtcclxuICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCBub2RlKTtcclxuICAgIHJlbW92ZUVsZW1lbnQobm9kZSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RUZXh0KG5vZGUpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KG5vZGUpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3Qgc2VsZWN0IHRleHQgaW4gbm9kZTogVW5zdXBwb3J0ZWQgYnJvd3Nlci5cIik7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XHJcbiAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV3JhcHBlckZ1bmN0aW9uKHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICB2YXIgc3RhcnROb2RlID0gcmFuZ2Uuc3RhcnRDb250YWluZXIsXHJcbiAgICBlbmROb2RlID0gcmFuZ2UuZW5kQ29udGFpbmVyLFxyXG4gICAgc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldCxcclxuICAgIGVuZE9mZnNldCA9IHJhbmdlLmVuZE9mZnNldFxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gd3JhcE5vZGUobm9kZSkge1xyXG4gICAgdmFyIGN1cnJlbnRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgIGN1cnJlbnRXcmFwcGVyID0gd3JhcHBlckVsLmNsb25lTm9kZSgpXHJcblxyXG4gICAgY3VycmVudFJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcclxuICAgIGlmIChub2RlID09PSBzdGFydE5vZGUgJiYgc3RhcnROb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIGN1cnJlbnRSYW5nZS5zZXRTdGFydChub2RlLCBzdGFydE9mZnNldClcclxuICAgICAgc3RhcnROb2RlID0gY3VycmVudFdyYXBwZXJcclxuICAgICAgc3RhcnRPZmZzZXQgPSAwXHJcbiAgICB9XHJcbiAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSAmJiBlbmROb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgIGN1cnJlbnRSYW5nZS5zZXRFbmQobm9kZSwgZW5kT2Zmc2V0KVxyXG4gICAgICBlbmROb2RlID0gY3VycmVudFdyYXBwZXI7XHJcbiAgICAgIGVuZE9mZnNldCA9IDFcclxuICAgIH1cclxuICAgIGN1cnJlbnRSYW5nZS5zdXJyb3VuZENvbnRlbnRzKGN1cnJlbnRXcmFwcGVyKVxyXG4gICAgcmV0dXJuIGN1cnJlbnRXcmFwcGVyXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdG9yVW5kZXJTZWxlY3Rpb24gPSAocXVlcnlTZWxlY3RvcikgPT4ge1xyXG4gIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgdmFyIHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgY29uc3QgYWxsU2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgbGV0IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XHJcbiAgXHJcbiAgaWYoY29tbW9uQW5jZXN0b3JDb250YWluZXIubm9kZVR5cGUgPT09IDMpe1xyXG4gICAgY29tbW9uQW5jZXN0b3JDb250YWluZXIgPSBjb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICBpZighY29tbW9uQW5jZXN0b3JDb250YWluZXIpe1xyXG4gICAgcmV0dXJuIGFsbFNlbGVjdGVkO1xyXG4gIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gY29tbW9uQW5jZXN0b3JDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChxdWVyeVNlbGVjdG9yKTtcclxuICBmb3IgKHZhciBpID0gMCwgZWw7IGVsID0gZWxlbWVudHNbaV07IGkrKykge1xyXG4gICAgLy8gVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2F5cyB0byBpbmNsdWRlIHRoZSBlbGVtZW50IFxyXG4gICAgLy8gZXZlbiBpZiBpdCdzIG5vdCBmdWxseSBzZWxlY3RlZFxyXG4gICAgaWYgKHNlbGVjdGlvbi5jb250YWluc05vZGUoZWwsIHRydWUpKSB7XHJcbiAgICAgICAgYWxsU2VsZWN0ZWQucHVzaChlbCk7XHJcbiAgICB9XHJcbn1cclxuaWYoYWxsU2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICBpZihzZWxlY3RlZCl7XHJcbiAgICBjb25zdCBjbG9zZXN0RWxlbWVudCA9IHNlbGVjdGVkLmNsb3Nlc3QocXVlcnlTZWxlY3Rvcik7XHJcbiAgICBpZihjbG9zZXN0RWxlbWVudCl7XHJcblxyXG4gICAgICBhbGxTZWxlY3RlZC5wdXNoKGNsb3Nlc3RFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxucmV0dXJuIGFsbFNlbGVjdGVkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxOb2RlcygpIHtcclxuICB2YXIgbm9kZXMsIHJhbmdlO1xyXG4gIGlmICh0eXBlb2YgcmFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGlmIG5vIHJhbmdlIGlzIHNwZWNpZmllZFxyXG4gICAgcmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKVxyXG4gIH1cclxuICBpZiAocmFuZ2UuaXNDb2xsYXBzZWQpIHtcclxuICAgIC8vIG5vdGhpbmcgdG8gd3JhcFxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG4gIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcbiAgbm9kZXMgPSBub2Rlcy5tYXAobm9kZSA9PiB7XHJcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICB3aGlsZSAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9KTtcclxuICByZXR1cm4gbm9kZXNcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlVGV4dCh3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgdmFyIG5vZGVzLCB3cmFwTm9kZTtcclxuXHJcbiAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG5cclxuICBpZiAocmFuZ2UuaXNDb2xsYXBzZWQpIHtcclxuICAgIC8vIG5vdGhpbmcgdG8gd3JhcFxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdyYXBwZXJFbCA9ICdzcGFuJ1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3cmFwcGVyRWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAvLyBhc3N1bWUgaXQncyBhIHRhZ25hbWVcclxuICAgIHdyYXBwZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlckVsKTtcclxuICB9XHJcblxyXG4gIHdyYXBOb2RlID0gY3JlYXRlV3JhcHBlckZ1bmN0aW9uKHdyYXBwZXJFbCwgcmFuZ2UpXHJcblxyXG4gIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcblxyXG4gIG5vZGVzID0gbm9kZXMubWFwKHdyYXBOb2RlKTtcclxuICByZXR1cm4gbm9kZXNcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IF9vcHRpb25zID0geyByZW1vdmU6IHRydWUgfTtcclxuICBPYmplY3QuYXNzaWduKF9vcHRpb25zLCBvcHRpb25zKTtcclxuICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5zZXRCYXNlQW5kRXh0ZW50KGZpcnN0RmxhZywgMCwgbGFzdEZsYWcsIGxhc3RGbGFnLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICBpZiAoX29wdGlvbnMucmVtb3ZlKSB7XHJcbiAgICBbZmlyc3RGbGFnLCBsYXN0RmxhZ10uZm9yRWFjaChlID0+IGUudW53cmFwKCkpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uRmxhZ3MoZmlyc3RFbGVtZW50LCBMYXN0RWxlbWVudCkge1xyXG4gIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICBjb25zdCBmaXJzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gIGZpcnN0RmxhZy5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCBmaXJzdEVsZW1lbnQudGV4dENvbnRlbnQubGVuZ3RoID09PSAwKVxyXG4gIGNvbnN0IGxhc3RGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dC1zZWxlY3Rpb24nKTtcclxuICBsYXN0RmxhZy5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCBMYXN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcblxyXG4gIGZpcnN0RWxlbWVudC5wcmVwZW5kKGZpcnN0RmxhZyk7IC8vU2V0IGZsYWcgdGhlIGZpcnN0XHJcbiAgTGFzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobGFzdEZsYWcpOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICByZXR1cm4geyBmaXJzdEZsYWcsIGxhc3RGbGFnIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkSFRNTCgpIHtcclxuICB2YXIgcmFuZ2U7XHJcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIGlmIChyYW5nZS5jb2xsYXBzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbnRlbnQgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIHJhbmdlOiByYW5nZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNlbGVjdGlvbigpIHtcclxuICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICByZXR1cm4gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVNlbGVjdGlvbihyYW5nZSkge1xyXG4gIGlmIChyYW5nZSkge1xyXG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgcmFuZ2Uuc2VsZWN0KSB7XHJcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZVJ1bGVzIH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzXCI7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCB9IGZyb20gXCIuL3JhbmdlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBpbnRhaWxTdHlsZSA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcblxyXG4gICAgd2hpbGUgKGN1cnJlY3RFbGVtZW50ICYmIGN1cnJlY3RFbGVtZW50LmlzY2hpbGRPZih0b0VsZW1lbnQucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICBsZXQgbWFwID0gZ2V0U3R5bGUoY3VycmVjdEVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gbWFwKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcFtzdHlsZV07XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb24gIGNvdWxkIGJlIHR3aWNlIGxpa2UgdW5kZXJsaW5lIGFuZCBzdHJpa2UgdGhlcm91Z2guLiBcclxuICAgICAgICAgICAgICAgIGlmICghaW50YWlsU3R5bGVbc3R5bGVdKVxyXG4gICAgICAgICAgICAgICAgICAgIGludGFpbFN0eWxlW3N0eWxlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlY3RFbGVtZW50ID0gY3VycmVjdEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnRhaWxTdHlsZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBlbC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgfSlcclxufVxyXG4vL1RPR0dMRVxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgaXNPbikge1xyXG4gICAgaWYgKGlzT24pIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0gKyBcIiBcIiArIHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBub3JtYWxpemVTdHlsZShlbGVtZW50KTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShlbGVtZW50KTtcclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke3ZhbHVlfSddYCkpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnN0eWxlW2tleV0gPSBjaGlsZC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGNoaWxkKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUoY2hpbGQpO1xyXG4gICAgfSlcclxufVxyXG4vL0VYVEVORFxyXG4vL1RPRE86IGZpeCBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwganNvblN0eWxlKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uU3R5bGUpIHtcclxuICAgICAgICBpZiAoanNvblN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBqc29uU3R5bGVba2V5XTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vVE9HR0xFXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgaWYgKGtleSA9PT0gXCJjb2xvclwiKSB7XHJcbiAgICAgICAgVXNlUnVsZXMoeyBlbGVtZW50OiBlbGVtZW50LCBrZXk6ICdjb2xvcicsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShlbCk7XHJcbiAgICB9KTtcclxuICAgIC8vZXhwZXJpbWVudGFsOiBzdHlsZSB0aGUgdGV4dCBkZWNvcmF0aW9ucyB3aXRoIGNvbG9yLi5cclxuICAgIC8vVE9ETzpyZXZpZXdcclxuICAgIC8vIFVzZVJ1bGVzKHtlbGVtZW50OmVsZW1lbnQsa2V5OmtleSx2YWx1ZTp2YWx1ZX0pO1xyXG59XHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50ID0gKGNvbm5lY3RlY0VsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgcmV0dXJuIGdldEluaGVpcnRDc3Moc2VsZWN0ZWRFbGVtZW50LCBjb25uZWN0ZWNFbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0U3R5bGVzID0gZ2V0U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdFN0eWxlcykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtjb2xsZWN0U3R5bGVzW2tleV19J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKHN0eWxlcykge1xyXG4gICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLnB1c2goYCR7a2V5fToke3N0eWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0U3R5bGVzLmpvaW4oJzsnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcclxuICAgIGlmICghZWwgfHwgIWVsLnN0eWxlKSByZXR1cm4ge307XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBsZXQgc3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsZXQgY29sbGVjdFN0eWxlcyA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdFN0eWxlcykpIHtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVbMV0gJiYga2V5VmFsdWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleVZhbHVlWzBdLnRyaW0oKV0gPSBrZXlWYWx1ZVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCbG9ja0FuZFN0eWxlSXQoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgbGV0IGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgYmxvY2tFbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBBcnJheS5mcm9tKGJsb2NrRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlW2tleV0gPSBudWxsKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtZXJnZU5vZGVDb250ZWN0LCBtZXJnZVR3b05vZGVzIH0gZnJvbSBcIi4uL3V0aWxpcy9tZXJnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIC0gZWxlbWVudCB0byBub3JtYWxpemVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVFbGVtZW50KGVsKSB7XHJcbiAgICBjb25zdCByZWN1cnNlID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJlY3Vyc2UoY2hpbGQpO1xyXG4gICAgICAgICAgICBfbm9ybWFsaXplKGNoaWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNTdHlsZXMgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSB3cmFwcGVyLm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dEVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlVHdvTm9kZXMod3JhcHBlciwgbmV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlZCB8fCB3cmFwcGVyICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVyZ2VOb2Rlc0NvbnRlbnQgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIgJiYgd3JhcHBlci5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZU5vZGVDb250ZWN0KHdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlZCB8fCB3cmFwcGVyICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWVyZ2VkU3R5bGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1lcmdlZENvbnRlbnQgPSBmYWxzZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBfbm9ybWFsaXplKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIG1lcmdlZFN0eWxlcyA9IG1lcmdlTm9kZXNTdHlsZXMoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBtZXJnZWRDb250ZW50ID0gbWVyZ2VOb2Rlc0NvbnRlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9IHdoaWxlIChtZXJnZWRDb250ZW50ICYmIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgICAgIHJlY3Vyc2UoZWwpO1xyXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZShlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIgJiYgKCFlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnVud3JhcCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtBcnJheX0gdGV4dE5vZGVzIC0gdGV4dG5vZGUgdG8gcmVtb3ZlIHRoZSB6ZXJvIHNwYWNlIGxpa2UgOiB1MjAwQlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVplcm9TcGFjZSh0ZXh0Tm9kZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXh0Tm9kZXMpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzID0gW3RleHROb2Rlc107XHJcbiAgICB9XHJcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiVEVYVC1TRUxFQ1RJT05cIikge1xyXG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsZWFuVGV4dCh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHMvZywgXCJcIikucmVwbGFjZSgvW1xcdTIwMEItXFx1MjAwRFxcdUZFRkZdL2csICcnKSBcclxufSIsImNsYXNzIERvbVV0aWxpcyB7XHJcblxyXG5cclxuICBpc0VsZW1lbnQob2JqKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKG9iai5ub2RlVHlwZSA9PT0gMSkgJiYgKHR5cGVvZiBvYmouc3R5bGUgPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gXCJvYmplY3RcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHdyYXAoZWwsIHdyYXBwZXIpIHtcclxuICAgIC8vZWwgc2hvdWxkIGJlIGFycmF5XHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xyXG4gICAgICBlbGVtZW50cyA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudHMgPSBbZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhcmVudHMgPSBlbGVtZW50cy5tYXAoZSA9PiBlLnBhcmVudE5vZGUpO1xyXG4gICAgdmFyIHBhcmVudHNEaWZmID0gcGFyZW50cy5maWx0ZXIoKHAsIF8sIHNlbGYpID0+IHsgcmV0dXJuIHNlbGZbMF0gIT09IHAgfSk7XHJcbiAgICBpZiAocGFyZW50c0RpZmYubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbd3JhcF0gZm91bmQgJHtwYXJlbnRzRGlmZi5sZW5ndGh9IGRpZmZlcmVudCBwYXJlbnRzIPCfmIVgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGFyZW50c1swXS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNbMF0pXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKF9lbCA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKF9lbCkpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEb21VdGlsaXMoKTsgXHJcblxyXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7aWYobnVsbCE9PWUpe3ZhciB0PWUuYW5jaG9yTm9kZTtpZihudWxsIT09dCl7Zm9yKDszPT09dC5ub2RlVHlwZTspdD10LnBhcmVudE5vZGU7cmV0dXJuIHR9cmV0dXJuIG51bGx9fVxyXG5FbGVtZW50LnByb3RvdHlwZS53cmFwID0gKCB3cmFwcGVyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKSB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyKTtcclxuICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dCh0aGlzKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IFxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLmlzY2hpbGRPZiA9IGZ1bmN0aW9uKHBhcmVudCkge1xyXG4gIGlmICghcGFyZW50KSByZXR1cm4gZmFsc2U7XHJcbiAgbGV0IG5vZGUgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xyXG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5jb25zdCBfd3JhcCA9IGZ1bmN0aW9uKHdyYXBwZXIpIHtcclxuICBpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuIGZhbHNlO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcyk7XHJcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzKTtcclxuICByZXR1cm4gd3JhcHBlcjtcclxufVxyXG5UZXh0LnByb3RvdHlwZS53cmFwID0gX3dyYXA7XHJcbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobmV3Tm9kZSkge1xyXG4gIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy5uZXh0U2libGluZyk7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZU5vZGUgPSBmdW5jdGlvbihyZXBsYWNlbWVudE5vZGUpIHtcclxuICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgdGhpcylcclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xyXG4gIH1cclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS51bndyYXAgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpXHJcbiAgdmFyIGV4dHJhQ29udGVudHMgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICB0aGlzLnJlcGxhY2VOb2RlKGV4dHJhQ29udGVudHMpXHJcbiAgcmV0dXJuIGV4dHJhQ29udGVudHM7XHJcbn1cclxuIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi9Eb21VdGlsaXNcIlxyXG5pbXBvcnQgeyBnZXRTdHlsZSwgbm9ybWFsaXplU3R5bGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRDbGFzc2VzLCBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gXCIuLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi9fYXBwLmNvbmZpZy5qc29uJztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqICAqIFJldHVybnMgdGhlIG5ldyBtZXJnZSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gRG9tRWxlbWVudCAtIGVsZW1lbnQgdG8gbWVyZ2Ugd2l0aCBoaXMgZmlyc3QgY2hpbGRcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZU5vZGVDb250ZWN0ID0gbm9kZSA9PiB7XHJcblxyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KG5vZGUpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gbm9kZSBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBpZiAoIWZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3QgY2hpbGQgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlyc3RDaGlsZC5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gZmlyc3RDaGlsZCBpcyBub3QgYSBzcGFuJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZS50ZXh0Q29udGVudCAhPT0gZmlyc3RDaGlsZC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSB0ZXh0IGNvbnRlbnQgaXMgZGlmZmVyZW50Jyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudFByb3BzID0ge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShub2RlKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKG5vZGUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKG5vZGUpXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIF9lbGVtZW50UHJvcHMuc3R5bGUpIHtcclxuICAgICAgICBjb25zdCBzdHlsZVZhbHVlID0gX2VsZW1lbnRQcm9wcy5zdHlsZVtzdHlsZV07XHJcbiAgICAgICAgZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gPSAoZmlyc3RDaGlsZC5zdHlsZVtzdHlsZV0gKyBcIiBcIiArIHN0eWxlVmFsdWUpLnRyaW0oKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBfZWxlbWVudFByb3BzLmF0dHJzKSB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gX2VsZW1lbnRQcm9wcy5hdHRyc1thdHRyXTtcclxuICAgICAgICBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKC4uLl9lbGVtZW50UHJvcHMuY2xhc3Nlcyk7XHJcbiAgICBub3JtYWxpemVDbGFzc05hbWUoZmlyc3RDaGlsZCk7XHJcbiAgICBub3JtYWxpemVFbGVtZW50KGZpcnN0Q2hpbGQpO1xyXG4gICAgaWYoZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50KVxyXG4gICAgZmlyc3RDaGlsZC5wYXJlbnRFbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVR3b05vZGVzKGVsZW1lbnRPbmUsIGVsZW1lbnRUd28pIHtcclxuICAgIGlmICghRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50T25lKSB8fCAhRG9tVXRpbGlzLmlzRWxlbWVudChlbGVtZW50VHdvKSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ29uZSBvZiB0aGUgcHJvcHMgaXMgbm90IGRvbSBlbGVtZW50Li4sIHBsZWFzZSBpbnNlcnQgdHdvIGVsZW1lbnQgdG8gbWVyZ2UuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsZW1lbnRPbmUubm9kZU5hbWUgIT09IFwiU1BBTlwiIHx8IGVsZW1lbnRUd28ubm9kZU5hbWUgIT09IFwiU1BBTlwiKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfZWxlbWVudHNEYXRhID0gW3tcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudE9uZSksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50T25lKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50T25lKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUoZWxlbWVudFR3byksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3NlcyhlbGVtZW50VHdvKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhlbGVtZW50VHdvKVxyXG4gICAgfV1cclxuICAgIGNvbnN0IGdldENvbW1vbkNsYXNzZXMgPSAoY2xhc3NlczEsIGNsYXNzZXMyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjbGFzc2VzMSB8fCAhY2xhc3NlczIpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICBjb25zdCBjMSA9IFsuLi5jbGFzc2VzMV07XHJcbiAgICAgICAgY29uc3QgYzIgPSBbLi4uY2xhc3NlczJdO1xyXG4gICAgICAgIHJldHVybiBjMS5maWx0ZXIoYyA9PiBjMi5pbmNsdWRlcyhjKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb21tb25TdHlsZXMgPSAoc3R5bGUxLCBzdHlsZTIpID0+IHtcclxuICAgICAgICBjb25zdCBjb21tbW9uU3R5bGVzID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIHN0eWxlMSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0eWxlMltzXSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUxVmFsdWVzID0gc3R5bGUxW3NdO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTJWYWx1ZXMgPSBzdHlsZTJbc107XHJcbiAgICAgICAgICAgIGlmIChzdHlsZTJWYWx1ZXMgPT09IHN0eWxlMVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgY29tbW1vblN0eWxlc1tzXSA9IHN0eWxlMlZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tbW1vblN0eWxlcztcclxuICAgIH07XHJcbiAgICBjb25zdCBjb21tb25jTGFzc2VzID0gZ2V0Q29tbW9uQ2xhc3NlcyhfZWxlbWVudHNEYXRhWzBdLmNsYXNzZXMsIF9lbGVtZW50c0RhdGFbMV0uY2xhc3Nlcyk7XHJcbiAgICBjb25zdCBjb21tb25TdHlsZXMgPSBnZXRDb21tb25TdHlsZXMoX2VsZW1lbnRzRGF0YVswXS5zdHlsZSwgX2VsZW1lbnRzRGF0YVsxXS5zdHlsZSk7XHJcbiAgICBjb25zdCBidWlsZFdyYXBwaW5nRWxlbWVudCA9IChjb21tb25TdHlsZXMsIGNvbW1vbmNMYXNzZXMpID0+IHtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdHlsZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlW3NdID0gY29tbW9uU3R5bGVzW3NdO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGNsYXNzZXNcclxuICAgICAgICBpZiAoY29tbW9uY0xhc3Nlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdyYXBwZXIuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci51bndyYXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGJ1aWxkV3JhcHBpbmdFbGVtZW50KGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3Nlcyk7XHJcbiAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCd3cmFwcGVyIGlzIG51bGwnKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudENsYXNzZXMgPSAobm9kZSwgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5jb21tb25jTGFzc2VzKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUobm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckVsZW1lbnRTdHlsZXMgPSAobm9kZSwgY29tbW9uU3R5bGVzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzIGluIGNvbW1vblN0eWxlcylcclxuICAgICAgICAgICAgbm9kZS5zdHlsZVtzXSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFtlbGVtZW50T25lLCBlbGVtZW50VHdvXTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgY2xlYXJFbGVtZW50Q2xhc3NlcyhlLCBjb21tb25jTGFzc2VzKTtcclxuICAgICAgICBjbGVhckVsZW1lbnRTdHlsZXMoZSwgY29tbW9uU3R5bGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgRG9tVXRpbGlzLndyYXAoZWxlbWVudHMsIHdyYXBwZXIpO1xyXG4gICAgWy4uLndyYXBwZXIuY2hpbGRyZW5dLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudChjKVxyXG4gICAgfSlcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vblZhbHVlc09iamVjdChvYmoxLCBvYmoyKSB7XHJcbiAgICBsZXQgY29tbW9uVmFsdWVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcbiAgICAgICAgaWYgKG9iajJba2V5XSAmJiBvYmoyW2tleV0gPT09IG9iajFba2V5XSkge1xyXG4gICAgICAgICAgICBjb21tb25WYWx1ZXNba2V5XSA9IG9iajFba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21tb25WYWx1ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbW1vbkFycmF5cyhhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBtZXJnZUFyciA9IFtdO1xyXG4gICAgQXJyYXkuZnJvbShhcnIxKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChhcnIyLmZpbmRJbmRleChpID0+IGkgPT09IGl0ZW0pID4gMCkge1xyXG4gICAgICAgICAgICBtZXJnZUFyci5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWVyZ2VBcnI7XHJcbn0iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0QXR0cmlidXRlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdHRyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENsYXNzTmFtZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvY2xhc3NOYW1lLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRIVE1MKGZyb21FbGVtZW50LCB0b0VsZW1lbnQsb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBjb25zdCB7dGFnID0gXCJzcGFuXCJ9ID0gb3B0aW9ucztcclxuICAgIGlmICghZnJvbUVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCBtdXN0IGJlIGNoaWxkIG9mIHRvRWxlbWVudCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQoZnJvbUVsZW1lbnQpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCAmJiB0b0VsZW1lbnQgbXVzdCBiZSBkb20gZWxlbWVudHMuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0QXR0cnMgPSAoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbihcIiBcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIGZyb21FbGVtZW50LmNyZWF0ZVNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgY2VudGVyVGVtcGxhdGUgPSBzZXRBdHRycyhjZW50ZXJFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgLy9jZW50ZXJcclxuICAgIGNlbnRlclRlbXBsYXRlLmFwcGVuZENoaWxkKGZyb21FbGVtZW50KTtcclxuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB2YXIgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIC8vbGVmdFxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodG9FbGVtZW50LCAwKTtcclxuICAgIGNvbnN0IGxlZnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBsZWZ0VGVtcGxhdGUgPSBzZXRBdHRycyhsZWZ0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciBsZWZ0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIGxlZnRUZW1wbGF0ZS5hcHBlbmRDaGlsZChsZWZ0UmFuZ2UpO1xyXG4gICAgLy9yaWdodFxyXG4gICAgcmFuZ2Uuc2V0RW5kKHRvRWxlbWVudCwgdG9FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgcmlnaHRUZW1wbGF0ZSA9IHNldEF0dHJzKHJpZ2h0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciByaWdodFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICByaWdodFRlbXBsYXRlLmFwcGVuZENoaWxkKHJpZ2h0UmFuZ2UpO1xyXG4gICAgY29uc3Qgc3BsaXQgPSB7XHJcbiAgICAgICAgbGVmdDogbGVmdFRlbXBsYXRlLFxyXG4gICAgICAgIGNlbnRlcjogY2VudGVyVGVtcGxhdGUsXHJcbiAgICAgICAgcmlnaHQ6IHJpZ2h0VGVtcGxhdGVcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBlbCBpbiBzcGxpdCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdFtlbF07XHJcbiAgICAgICAgdG9FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIHNwbGl0O1xyXG5cclxufSIsImltcG9ydCBDb3JlIGZyb20gJy4vU3R5bGVJdC9pbmRleCc7XHJcbmltcG9ydCAgTU9ERVMgIGZyb20gJy4vU3R5bGVJdC9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFN0eWxlSXRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcbiAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlSXQge1xyXG4gIC8vZXhwb3NlIG9ubHkgdGhlIHJlbGV2YW50IG1ldGhvZHMuLlxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAvL1RPRE86IHZhbGlkYXRlIHRhcmdldCAmIGNvbmZpZy4uXHJcbiAgICBjb25zdCBzdHlsZUl0ID0gbmV3IENvcmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgaWYgKHN0eWxlSXQpIHsgIFxyXG4gICAgICB0aGlzLmV4ZWNDbWQgPSBzdHlsZUl0LmV4ZWNDbWQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgPSBzdHlsZUl0LnRvZ2dsZUNsYXNzO1xyXG4gICAgICB0aGlzLmxpbmsgPSBzdHlsZUl0Lmxpbms7XHJcbiAgICAgIHRoaXMudW5MaW5rID0gc3R5bGVJdC51bkxpbms7XHJcbiAgICAgIHRoaXMuZm9ybWF0QmxvY2sgPSBzdHlsZUl0LmZvcm1hdEJsb2NrO1xyXG4gICAgICB0aGlzLnNhdmUgPSBzdHlsZUl0LnNhdmU7XHJcbiAgICAgIHRoaXMubG9hZCA9IHN0eWxlSXQubG9hZDtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gc3R5bGVJdC5kZXN0cm95O1xyXG4gICAgICB0aGlzLm9uID0gc3R5bGVJdC5vbjtcclxuICAgICAgdGhpcy5NT0RFUyA9IE1PREVTO1xyXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzID0gdGhpcy50b2dnbGVDbGFzcy5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmV4ZWNDbWQgPSB0aGlzLmV4ZWNDbWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5mb3JtYXRCbG9jayA9IHRoaXMuZm9ybWF0QmxvY2suYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5vbiA9IHRoaXMub24uYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5saW5rID0gdGhpcy5saW5rLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMudW5MaW5rID0gdGhpcy51bkxpbmsuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMubG9hZCA9IHRoaXMubG9hZC5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZChzdHlsZUl0KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9