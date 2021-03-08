/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.71
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
                if(plugin.destroy){
                    plugin.destroy();
                }
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
    "PRE":"PRE",
    "TD":"TD"
}   
const block_elments_queryString = "h1,h2,h3,h4,h5,h6,p,pre,ol,li,address,td";

/***/ }),

/***/ "./src/StyleIt/constants/inline_elems.js":
/*!***********************************************!*\
  !*** ./src/StyleIt/constants/inline_elems.js ***!
  \***********************************************/
/*! exports provided: inline_elemets_arr, inline_elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inline_elemets_arr", function() { return inline_elemets_arr; });
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
                elementToUnwrap = elementToUnwrap.__closest("a");
            }
            if (elementToUnwrap) {
                elementToUnwrap.unwrap();
            }
            return null;
        }
        const linkElements = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();
        Array.from(linkElements).forEach(r => {
            const closestATag = r.__closest("a");
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
                const closestATag = link.parentElement ? link.parentElement.__closest("a") : null;
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
        linkElements.forEach(aTag=>{
            Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(aTag.parentElement);// merge siblings and parents with child as possible.. 
        })
    }
    formatBlock(tagName, options) {
        if (!_constants_block_elms__WEBPACK_IMPORTED_MODULE_11__["block_elments"][tagName.toUpperCase()]) {
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
            Array.from(ranges).forEach(range => range.unwrap());
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
        const isToggleOn = (typeof (options.isON) === "boolean") ? options.isON : elements[0].__closest(`[class='${className}']`);
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
        elements.forEach(el=>Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(el.parentElement));

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
        //This is how i make the text selection, i dont know if this is good way, but it works..
        const { firstFlag, lastFlag } = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["setSelectionFlags"])(this.ELEMENTS[0], this.ELEMENTS[this.ELEMENTS.length - 1]);//Set Flag at last
        //======================================================================//
        // removeZeroSpace(getTextNodes(this.connectedElement));

        let ToggleMode;//Declare toggle mode, The first element determines whether it is on or off

        this.ELEMENTS.forEach((element, i) => {
            options.onOff = ToggleMode;
            const result = this.modeHandlers[mode](element, key, value, options);
            if (mode === _constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__.Toggle && typeof (ToggleMode) === 'undefined')
                ToggleMode = result;
        });
        const normalizedParents = [];
        this.ELEMENTS.forEach(el => {
            if (el.parentElement && normalizedParents.findIndex(n => n === el.parentElement) < 0) {
                Object(_services_textEditor_service__WEBPACK_IMPORTED_MODULE_4__["normalizeElement"])(el.parentElement);// merge siblings and parents with child as possible.. 
                normalizedParents.push(el.parentElement);
            }
        })
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
    onToggle(element, key, value, options = {}) {
        if (options.target === "block") {
            this.createBlockStyle(options, element, key, value);
        } else {
            // detect if there is any parent with style to split.
            //TODO: use the catch from options to detect more than one style or tag element.
             let elementToSplit =  element.__closest(`[style*='${value}']`);
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
    onExtend(element, key, value, options = {}) {
        if (options.target === "block") {
            this.createBlockStyle(options, element, key, value);
        } else {
            const elementToSplit = element.__closest(`[style*='${key}']`);
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
                const contentEditable = element.closest("[contenteditable]");
                if (contentEditable && contentEditable.isContentEditable) {
                    Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["wrapNakedTextNodes"])(contentEditable);
                    isSuccess = Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["findBlockAndStyleIt"])(element, key, value);
                    if (!isSuccess) {
                        console.log("text nodes and inline elements must be inside block element like p,h1,h2,h3,h4,h5,h6");
                    }
                }
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
        if (selectedElement && ((selectedElement.ischildOf(this.connectedElement) || selectedElement === this.connectedElement) && selectedElement.isContentEditable)) {
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

        this.destroy = () => {
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
/* harmony import */ var _constants_inline_elems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/inline_elems */ "./src/StyleIt/constants/inline_elems.js");
/* harmony import */ var _constants_void_elms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/void_elms */ "./src/StyleIt/constants/void_elms.js");
/* harmony import */ var _utilis_splitHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilis/splitHTML */ "./src/StyleIt/utilis/splitHTML.js");
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _textEditor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textEditor.service */ "./src/StyleIt/services/textEditor.service.js");









class CopyPaste {

  constructor(target, options) {
    if(options.plugins && typeof options.plugins.copyPaste === "boolean" && options.plugins.copyPaste === false){
      return;
  }
    this.target = target;
    this.stylesToPaste = typeof options.stylesToPaste === "object" ? options.stylesToPaste : null;
    this.paste = this.paste.bind(this);
    this.copy = this.copy.bind(this);
    this.destroy = this.destroy.bind(this);
    this.start();
  }

  copy(event) {
    let html = "";
    if (typeof window.getSelection) {
      var sel = window.getSelection();
      if (sel.rangeCount) {
        const container = document.createElement("div");
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          const range = sel.getRangeAt(i);
          let copiedNode = range.cloneContents();
          container.appendChild(copiedNode);
          if(event.type === "cut"){
            range.extractContents();
          }
          Array.from(container.childNodes).forEach(n => {
            if (n.nodeType === 3) {
              const parentCopiedNode = sel.getRangeAt(i).startContainer.parentNode;
              const collectedCSS = Object(_style_service__WEBPACK_IMPORTED_MODULE_5__["getInheirtCss"])(parentCopiedNode, this.target);
              const span = document.createElement("span");
              span.textContent = copiedNode.textContent;
              Object(_style_service__WEBPACK_IMPORTED_MODULE_5__["setStyles"])(span, collectedCSS);
              n.wrap(span);

            } else if (_constants_void_elms__WEBPACK_IMPORTED_MODULE_2__["void_elements"][n.nodeName] && n.nodeName !== "BR") {
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
      pastedContainer.innerHTML = copied;
      Object(_range_service__WEBPACK_IMPORTED_MODULE_4__["pasteHtmlAtCaret"])(pastedContainer);
      Array.from(pastedContainer.children).forEach(child => {
        if (!Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_6__["getCleanText"])(child.textContent) && !_constants_void_elms__WEBPACK_IMPORTED_MODULE_2__["void_elements"][child.nodeName] && (_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][child.nodeName] || _constants_inline_elems__WEBPACK_IMPORTED_MODULE_1__["inline_elements"][child.nodeName])) {
          child.parentElement.removeChild(child);
        }
      });
      Array.from(pastedContainer.children).forEach(child => {
        
        const sameNode = child.parentElement.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments_queryString"]);
        if (sameNode && _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][child.nodeName] && Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_6__["getCleanText"])(sameNode.textContent) === Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_6__["getCleanText"])(pastedContainer.textContent)) {
          sameNode.parentElement.insertBefore(child, sameNode);
        }
        else if (child.nodeType === 1 && _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][child.nodeName] && sameNode) {
          if (pastedContainer.children.length > 1) {
            child.insertAfter(document.createElement("BR"));
          }
          child.unwrap();
        }
        else if (!Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_6__["getCleanText"])(child.textContent)) {
          child.unwrap();
        }
      });
      const block = pastedContainer.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments_queryString"]);
      if (block) {
        const parts = Object(_utilis_splitHTML__WEBPACK_IMPORTED_MODULE_3__["splitHTML"])(pastedContainer, block, { tag: block.nodeName });
        if (parts) {
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
    this.target.addEventListener("cut", this.copy);
  }
  destroy() {
    if(this.target){
      this.target.removeEventListener("paste", this.paste);
    this.target.removeEventListener("copy", this.copy);
    this.target.addEventListener("cut", this.copy);
    }
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
        if (c.parentElement === target && c.textContent.trim() && ((c.nodeType === 1 && _constants_inline_elems__WEBPACK_IMPORTED_MODULE_3__["inline_elements"][c.nodeName] && !c.parentElement.closest(_constants_block_elms__WEBPACK_IMPORTED_MODULE_2__["block_elments_queryString"])) || c.nodeType === 3)) {
            const p = document.createElement("p");
            c.wrap(p);

            while (p.nextSibling && (p.nextSibling.nodeType === 3 || _constants_inline_elems__WEBPACK_IMPORTED_MODULE_3__["inline_elements"][p.nextSibling.nodeName])) {
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
        if (jsElement.attrs) {
            for (const attr in jsElement.attrs) {
                if (Object.hasOwnProperty.call(jsElement.attrs, attr)) {
                    const value = jsElement.attrs[attr];
                    element.setAttribute(attr, value);
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
                case "#comment":
                    element = document.createComment(jsElement.textContent)
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
        case "#comment":
            json.tag = nodeType;
            json.textContent = node.textContent.replace(/\u200B/g, '');
            isShouldRenderAttrs = false;
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
        Array.from(node.attributes).forEach(attr => {
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




class KeyPress {

    constructor(target, options = {}) {
        if (!target) {
            console.error('[-] keyPress => target is null');
            return null;
        }
        if(options.plugins && typeof options.plugins.keyPress === "boolean" && options.plugins.keyPress === false){
            return;
        }
        if (typeof options.onKeyPress === "function") {
            this.onKeyPress = options.onKeyPress;
        }
        this.target = target;
    

        this.keypress = (e) => {
            // const sel = window.getSelection();
            // if(sel.focusNode.nodeType === 3 && !sel.focusNode.parentElement.closest(block_elments_queryString)){
            //     const p = document.createElement("P");
            //     sel.focusNode.wrap(p);
            //     setCaretAt(p,1)
            // }
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

        this.destroy = () => {
            if(this.target){
                this.target.removeEventListener('keydown', this.keypress);
                this.target = null;
            }
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
/* harmony import */ var _textEditor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textEditor.service */ "./src/StyleIt/services/textEditor.service.js");




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
  } if (element) {
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
    return wrapRangeText(wrapTag, ranges);

}
function getRanges() {
  const sel = window.getSelection();
  return sel.getRangeAt(0);;
}
// return all text nodes that are contained within `el`
function getTextNodes(el) {
  el = el || document.body

  var doc = el.ownerDocument || document,
    walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false),
    textNodes = [],
    node = walker.nextNode();

  while (node) {
    if(Object(_textEditor_service__WEBPACK_IMPORTED_MODULE_2__["getCleanText"])(node.textContent))
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
    if (textNode) {
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
    if (!contenteditable.isContentEditable) {
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
    currentRange.surroundContents(currentWrapper);
    let parentEl = currentWrapper;
    while(parentEl.textContent  === parentEl.parentElement.textContent && parentEl.nodeName === parentEl.parentNode.nodeName){
      parentEl = parentEl.parentNode;
    }
    if(parentEl !== currentWrapper){
      currentWrapper.unwrap();
    }
    return parentEl
  }
}
const querySelectorUnderSelection = (querySelector) => {
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  const allSelected = [];

  let commonAncestorContainer = range.commonAncestorContainer;

  if (commonAncestorContainer.nodeType === 3) {
    commonAncestorContainer = commonAncestorContainer.parentElement;
  }
  if (!commonAncestorContainer) {
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
  if (allSelected.length === 0) {
    const selected = Object(_elements_service__WEBPACK_IMPORTED_MODULE_1__["getSelectedElement"])();
    if (selected) {
      const closestElement = selected.closest(querySelector);
      if (closestElement) {

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

  if (!range) {
    // get the current selection if no range is specified
    range = window.getSelection().getRangeAt(0)
  }

  if (range.isCollapsed) {
    // nothing to wrap
    return []
  }

  if (!wrapperEl) {
    wrapperEl = 'span'
  }

  if (typeof wrapperEl === 'string') {
    // assume it's a tagname
    wrapperEl = document.createElement(wrapperEl);
  }

  wrapNode = createWrapperFunction(wrapperEl, range)
  nodes = getRangeTextNodes(range);
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
    if(!el.isContentEditable){
        return;
    }
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
/* harmony import */ var _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/block_elms */ "./src/StyleIt/constants/block_elms.js");


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
Element.prototype.__closest =function (s){
      const el = this;
      let ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (ancestor.matches(s) && ancestor.isContentEditable && !_constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][ancestor.nodeName]) return ancestor;
        if( ancestor.parentElement && _constants_block_elms__WEBPACK_IMPORTED_MODULE_0__["block_elments"][ ancestor.parentElement.nodeName]){
          return null;
        }
        ancestor = ancestor.parentElement.isContentEditable ? ancestor.parentElement : null;
      } while (ancestor !== null);
      return null;
  
  
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
        }else{
            wrapper.normalize();
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
    if(fromElement === toElement){
        return null;
    }
    if (!fromElement.ischildOf(toElement)) {
        console.log(fromElement,toElement)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2NvbnN0YW50cy9ibG9ja19lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25zdGFudHMvaW5saW5lX2VsZW1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25zdGFudHMvdm9pZF9lbG1zLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvcnVsZXMvcnVsZXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvYXR0ci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvbGluay5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9Eb21VdGlsaXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9tZXJnZXIuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9zcGxpdEhUTUwuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0RUFBa0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InN0eWxlaXQtYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMnKS5kZWZhdWx0O1xyXG4iLCJcclxuY2xhc3MgVGV4dFNlbGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcclxuICAgICAgY29uc3QgY3JlYXRlWmVyb1NwYWNlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnKTtcclxuICAgICAgaWYoY3JlYXRlWmVyb1NwYWNlID09PSBcInRydWVcIil7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBcIiYjODIwMztcIjtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYoIWN1c3RvbUVsZW1lbnRzLmdldCgndGV4dC1zZWxlY3Rpb24nKSl7XHJcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RleHQtc2VsZWN0aW9uJywgVGV4dFNlbGVjdGlvbik7IFxyXG4gIH1cclxuIiwiaW1wb3J0IERvbVV0aWxpcyBmcm9tIFwiLi91dGlsaXMvRG9tVXRpbGlzXCI7XHJcbmltcG9ydCBDb3B5UGFzdGUgZnJvbSBcIi4vc2VydmljZXMvY29weVBhc3RlL2NvcHlQYXN0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBJbnBzZWN0b3IgZnJvbSBcIi4vc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBLZXlQcmVzcyBmcm9tIFwiLi9zZXJ2aWNlcy9rZXlQcmVzcy9LZXlQcmVzc1wiO1xyXG5pbXBvcnQgeyB3cmFwTmFrZWRUZXh0Tm9kZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICAgaWYgKERvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgLy8gdmFsaWQuLlxyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcicsIGZhbHNlLCAncCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcInN0eWxlV2l0aENTU1wiLCB0cnVlLCBudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBjb25zdCB1c2VQbHVnaW5zID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvcHlQYXN0ZTogbmV3IENvcHlQYXN0ZShlbGVtZW50LCBvcHRpb25zKSxcclxuICAgICAgICAgICAgICAgIGluc3BlY3RvcjogbmV3IElucHNlY3RvcihlbGVtZW50LCBvcHRpb25zLm9uSW5zcGVjdCksXHJcbiAgICAgICAgICAgICAgICBrZXlQcmVzczogbmV3IEtleVByZXNzKGVsZW1lbnQsIG9wdGlvbnMpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NvbnRlbnRlZGl0YWJsZV1cIikpLmZvckVhY2goZWRpdGFibGU9PnsgICAgXHJcbiAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2RlcyhlZGl0YWJsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0U3R5bGUoKTtcclxuICAgICAgICB0aGlzLnBsdWdpbnMgPSB1c2VQbHVnaW5zKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRGVmYXVsdFN0eWxlKCkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgW2NvbnRlbnRlZGl0YWJsZV17XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IGRlc3RvcnkgZXZlbnRzLi5cclxuICAgIC8vcXVlc3Rpb246IGhvdyB0byB1c2UgdGhlIGV2ZW50cyA/IFxyXG5cclxuXHJcbiAgICBEZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGx1Z2lucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1trZXldO1xyXG4gICAgICAgICAgICAgICAgaWYocGx1Z2luLmRlc3Ryb3kpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBibG9ja19lbG1lbnRzID0ge1xyXG4gICAgXCJIMVwiOlwiSDFcIixcclxuICAgIFwiSDJcIjpcIkgyXCIsXHJcbiAgICBcIkgzXCI6XCJIM1wiLFxyXG4gICAgXCJINFwiOlwiSDRcIixcclxuICAgIFwiSDVcIjpcIkg1XCIsXHJcbiAgICBcIkg2XCI6XCJINlwiLFxyXG4gICAgXCJQXCI6XCJQXCIsXHJcbiAgICBcIkxJXCI6XCJMSVwiLFxyXG4gICAgXCJPTFwiOlwiT0xcIixcclxuICAgIFwiQUREUkVTU1wiOlwiQUREUkVTU1wiLFxyXG4gICAgXCJQUkVcIjpcIlBSRVwiLFxyXG4gICAgXCJURFwiOlwiVERcIlxyXG59ICAgXHJcbmV4cG9ydCBjb25zdCBibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nID0gXCJoMSxoMixoMyxoNCxoNSxoNixwLHByZSxvbCxsaSxhZGRyZXNzLHRkXCI7IiwiZXhwb3J0IGNvbnN0IGlubGluZV9lbGVtZXRzX2FyciA9IFtcIlNQQU5cIixcIkJPTERcIixcIlNUUk9OR1wiLFwiRU1cIixcIklcIixcIlNcIixcIk1BUktcIixcIkJcIixcIlNVQlwiLFwiU1VQXCIsXCJTTUFMTFwiLFwiSU5TXCJdO1xyXG5leHBvcnQgY29uc3QgaW5saW5lX2VsZW1lbnRzID0ge307XHJcbmlubGluZV9lbGVtZXRzX2Fyci5mb3JFYWNoKHRhZz0+e2lubGluZV9lbGVtZW50c1t0YWddID0gdGFnfSk7IiwiZXhwb3J0IGNvbnN0IHZvaWRfZWxlbWVudHMgPSB7XHJcbiAgICBcIkJSXCI6XCJCUlwiLFxyXG4gICAgXCJIUlwiOlwiSFJcIixcclxuICAgIFwiSU1HXCI6XCJJTUdcIixcclxuICAgIFwiSU5QVVRcIjpcIklOUFVUXCIsXHJcbiAgICBcIkFVRElPXCI6XCJBVURJT1wiLFxyXG4gICAgXCJWSURFT1wiOlwiVklERU9cIixcclxuICAgIFwiUElDVFVSRVwiOlwiUElDVFVSRVwiXHJcbn0iLCJpbXBvcnQge1xyXG4gICAgd3JhcFJhbmdlV2l0aEVsZW1lbnQsXHJcbiAgICBzZXRTZWxlY3Rpb25GbGFncyxcclxuICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyxcclxuICAgIGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQsXHJcbiAgICBzZXRDYXJldEF0LFxyXG4gICAgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCxcclxuICAgIHF1ZXJ5U2VsZWN0b3JVbmRlclNlbGVjdGlvbixcclxufSBmcm9tIFwiLi9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RlcyBmcm9tICcuL2NvbnN0YW50cy9Nb2Rlcy5qc29uJztcclxuaW1wb3J0IHsgc3BsaXRIVE1MIH0gZnJvbSBcIi4vdXRpbGlzL3NwbGl0SFRNTFwiO1xyXG5pbXBvcnQgeyBzZXRTdHlsZSwgdG9nZ2xlU3R5bGUsIGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQsIGZpbmRCbG9ja0FuZFN0eWxlSXQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2N1c3RvbS90ZXh0U2VsZWN0ZWQnO1xyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCBnZXRTZWxlY3RlZEVsZW1lbnQsIHdyYXBOYWtlZFRleHROb2RlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRVZFTlRTIH0gZnJvbSAnLi9zZXJ2aWNlcy9ldmVudHMvZXZlbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlVGVtcExpbmtFbGVtZW50LCByZXNldFVSTCwgVEFSR0VUUyB9IGZyb20gXCIuL3NlcnZpY2VzL2xpbmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzL3ZvaWRfZWxtc1wiO1xyXG5pbXBvcnQgeyBibG9ja19lbG1lbnRzLCBibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nIH0gZnJvbSBcIi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XHJcblxyXG4gICAgLy8gKnRhcmdldCA9PiBjYW4gYmUgSWQgb2YgRWxlbWVudCB0aGF0IHNob3VsZCBjb250YWluIEVkaXRvciBpbnN0YW5jZSBvciB0aGUgZWxlbWVudCBpdHNlbGYuLlxyXG4gICAgLy8gKmNvbmZpZyA9PiAgY29uZmlndXJhdGlvbiBwYXNzZWQgdCAgIG8gVG9vbCBjb25zdHJ1Y3RvclxyXG4gICAgLy9UT0RPOiBhZGQgdGFyZ2V0IHZhbGlkYXRpb25zLi47XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuX19jb25maWcgPSB7XHJcbiAgICAgICAgICAgIG9uSW5zcGVjdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub24gPSAoa2V5LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChrZXkpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwia2V5IG11c3QgYmUgYSBzdHJpbmcuLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEVWRU5UU1trZXldID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkNvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IoKTtcclxuICAgICAgICB0aGlzLm1vZGVIYW5kbGVycyA9IHtcclxuICAgICAgICAgICAgW01vZGVzLlRvZ2dsZV06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uVG9nZ2xlKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgICAgICBbTW9kZXMuRXh0ZW5kXTogKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpID0+IHRoaXMub25FeHRlbmQodiwga2V5LCB2YWx1ZSwgb3B0aW9ucyksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gT2JqZWN0LmFzc2lnbih0aGlzLl9fY29uZmlnLCBjb25maWcpIDogdGhpcy5fX2NvbmZpZztcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHtcclxuICAgICAgICAgICAgc3R5bGVDaGFuZ2VkOiB0aGlzLmNvbmZpZy5vbkluc3BlY3QsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRWxlbWVudCA9IHRoaXMuQ29ubmVjdG9yLkNvbm5lY3QodGFyZ2V0LCB0aGlzLmNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBzYXZlKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFRvSnNvbihlbGVtZW50IHx8IHRoaXMuY29ubmVjdGVkRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBsb2FkKGpzb24pIHtcclxuICAgICAgICByZXR1cm4gSnNvblRvRWxlbWVudChqc29uLCB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLkNvbm5lY3Rvci5EZXN0cm95KCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2VsZikge1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3LlxyXG4gICAgLy9UT0RPOiBDcmVhdGUgbm9ybWFsaXplLi5cclxuICAgIC8vcXVlc3Rpb246IGlmIHRleHQgd2FzIHNlbGVjdGVkLCBzaG91bGQgd2UgdW53cmFwIHRoZSBzZWxlY3RpaW9uIG9ubHkgPyBcclxuICAgIHVuTGluaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZWN0aW9uICYmICFzZWxlY3Rpb24udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvVW53cmFwO1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlTm9kZSA9IHNlbGVjdGlvbi5iYXNlTm9kZTtcclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAzICYmIGJhc2VOb2RlLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1Vud3JhcCA9IGJhc2VOb2RlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2VOb2RlICYmIGJhc2VOb2RlLm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAgPSBlbGVtZW50VG9VbndyYXAuX19jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvVW53cmFwKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9VbndyYXAudW53cmFwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpbmtFbGVtZW50cyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgQXJyYXkuZnJvbShsaW5rRWxlbWVudHMpLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RBVGFnID0gci5fX2Nsb3Nlc3QoXCJhXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VzdEFUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKHIsIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcImFcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXJyYXkuZnJvbShyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYS51bndyYXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHIudW53cmFwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyhsaW5rRWxlbWVudHNbMF0sIGxpbmtFbGVtZW50c1tsaW5rRWxlbWVudHMubGVuZ3RoIC0gMV0pOyAvL1NldCBGbGFnIGF0IGxhc3RcclxuICAgICAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyk7XHJcbiAgICB9XHJcbiAgICAvL1RPRE86IHJldmlld1xyXG4gICAgLy9UT0RPOiBtZXJnZSBhIHRhZ3MuLlxyXG4gICAgLy9UT0RPOiByZW1vdmUgYSBjaGlsZHNcclxuICAgIC8vVE9ETzogbW92ZSBmdW5jdGlvbiB0byBMaW5rLnNlcnZpY2UuanNcclxuICAgIGxpbmsob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8IChvcHRpb25zICYmICFvcHRpb25zLmhyZWYpIHx8ICF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbiAmJiAhd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibm8gdGV4dCBzZWxlY3RlZC4uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdW53cmFwQXRhZ3MgPSAobGlua0VsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmtFbGVtZW50cy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShsaW5rLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKGFUYWcgPT4gYVRhZy51bndyYXAoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0QVRhZyA9IGxpbmsucGFyZW50RWxlbWVudCA/IGxpbmsucGFyZW50RWxlbWVudC5fX2Nsb3Nlc3QoXCJhXCIpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0QVRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gc3BsaXRIVE1MKGxpbmssIGNsb3Nlc3RBVGFnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJhXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNlbnRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2VzdEFUYWcudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRUYXJnZXRUb1RhZyA9IChsaW5rRWxlbWVudHMsIHJlbmRlcmVkTGluaywgX3RhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rRWxlbWVudHMuZm9yRWFjaChhVGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGFUYWcuaHJlZiA9IHJlbmRlcmVkTGluaztcclxuICAgICAgICAgICAgICAgIGlmIChfdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVRhZy5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgX3RhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZXRQcm90b2NvbCA9IChfcHJvdG9jb2wsIG5ld1VSTCkgPT4ge1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBfcHJvdG9jb2wucmVwbGFjZSgvOi9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sID0gX3Byb3RvY29sLnJlcGxhY2UoL1xcL1xcLy9nLCBcIlwiKTtcclxuICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiOlwiO1xyXG4gICAgICAgICAgICBpZiAoX3Byb3RvY29sLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAgICAgICAgX3Byb3RvY29sICs9IFwiLy9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdVUkwucHVzaChfcHJvdG9jb2wpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3Byb3RvY29sO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHsgaHJlZiA9IFwiXCIsIHByb3RvY29sID0gXCJcIiwgdGFyZ2V0ID0gXCJcIiB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgY29uc3QgbGlua0VsZW1lbnRzID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIGxldCBuZXdVUkwgPSBbXTtcclxuICAgICAgICBjb25zdCBBdGFnID0gY3JlYXRlVGVtcExpbmtFbGVtZW50KGhyZWYpO1xyXG4gICAgICAgIGxldCBfaHJlZiA9IHJlc2V0VVJMKGhyZWYudHJpbSgpKTtcclxuXHJcbiAgICAgICAgbGV0IF9wcm90b2NvbCA9IHByb3RvY29sLnRyaW0oKSB8fCBBdGFnLnByb3RvY29sO1xyXG4gICAgICAgIGxldCBfdGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICBjb25zdCB0ZXN0VGFyZ2V0ID0gVEFSR0VUU1t0YXJnZXQudHJpbSgpLnRvTG93ZXJDYXNlKCldO1xyXG4gICAgICAgIGlmICh0ZXN0VGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIF90YXJnZXQgPSB0ZXN0VGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3Byb3RvY29sLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBfcHJvdG9jb2wgPSBzZXRQcm90b2NvbChfcHJvdG9jb2wsIG5ld1VSTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfaHJlZikge1xyXG4gICAgICAgICAgICBuZXdVUkwucHVzaChfaHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVkTGluayA9IG5ld1VSTC5qb2luKFwiXCIpO1xyXG4gICAgICAgIHVud3JhcEF0YWdzKGxpbmtFbGVtZW50cyk7XHJcbiAgICAgICAgc2V0VGFyZ2V0VG9UYWcobGlua0VsZW1lbnRzLCByZW5kZXJlZExpbmssIF90YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gc2V0U2VsZWN0aW9uRmxhZ3MobGlua0VsZW1lbnRzWzBdLCBsaW5rRWxlbWVudHNbbGlua0VsZW1lbnRzLmxlbmd0aCAtIDFdKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIGxpbmtFbGVtZW50cy5mb3JFYWNoKGFUYWc9PntcclxuICAgICAgICAgICAgbm9ybWFsaXplRWxlbWVudChhVGFnLnBhcmVudEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZm9ybWF0QmxvY2sodGFnTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghYmxvY2tfZWxtZW50c1t0YWdOYW1lLnRvVXBwZXJDYXNlKCldKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGB2YWxpZCB0YWdzOiAke2Jsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmd9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlTZWxlY3RvclVuZGVyU2VsZWN0aW9uKGJsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlcyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gc2V0U2VsZWN0aW9uRmxhZ3MocmFuZ2VzWzBdLCByYW5nZXNbcmFuZ2VzLmxlbmd0aCAtIDFdKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGJsb2NrID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGJsb2NrLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBibG9jay53cmFwKHRhZyk7XHJcbiAgICAgICAgICAgICAgICBibG9jay51bndyYXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20ocmFuZ2VzKS5mb3JFYWNoKHJhbmdlID0+IHJhbmdlLnVud3JhcCgpKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgLy9UT0RPOiByZXZpZXdcclxuICAgIC8vcXVlc3Rpb24gOiB3ZSB3YW50IHRvIGhhbmRsZSBhbmQgdG9nZ2xlIGFueSBhdHRyaWJ1dGUgPyBcclxuICAgIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgb3B0aW9ucykge1xyXG4gICAgICAgIC8vaGVyZVxyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIChjbGFzc05hbWUpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNsYXNzTmFtZSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBjb25zdCBpc1RvZ2dsZU9uID0gKHR5cGVvZiAob3B0aW9ucy5pc09OKSA9PT0gXCJib29sZWFuXCIpID8gb3B0aW9ucy5pc09OIDogZWxlbWVudHNbMF0uX19jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgaWYgKCFpc1RvZ2dsZU9uKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdENsYXNzID0gZWwucGFyZW50RWxlbWVudC5jbG9zZXN0KGBbY2xhc3M9JyR7Y2xhc3NOYW1lfSddYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IHNwbGl0SFRNTChlbCwgY2xvc2VzdENsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdC5jZW50ZXIucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKGVsZW1lbnRzWzBdLCBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXSk7IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWw9Pm5vcm1hbGl6ZUVsZW1lbnQoZWwucGFyZW50RWxlbWVudCkpO1xyXG5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIGtleSBvZiBjc3MgXHJcbiAgICAqICBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBjc3NcclxuICAgICogIEBwYXJhbSB7KE9iamVjdCB8IFN0cmluZyl9IE1vZGVzIC0gbW9kZSBmcm9tIE1vZGVzID0+IEV4dGVuZCBvciBUb2dnbGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy5FeHRlbmQgLSBvdmVycmlkZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLnRvZ2dsZSAtIHRvZ2dsZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgXHJcbiAgICAqL1xyXG4gICAgZXhlY0NtZChrZXksIHZhbHVlLCBtb2RlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSB8fCAhdGhpcy5pc1ZBbGlkS2V5VmFsdWUoa2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMgPSBbXTtcclxuICAgICAgICBtb2RlID0gbW9kZSA/IG1vZGUgOiBNb2Rlcy5FeHRlbmQ7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcblxyXG5cclxuICAgICAgICAvLz09PT09PT09PT09PT09cmV2aWV3PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICAvL1RoaXMgaXMgaG93IGkgbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24sIGkgZG9udCBrbm93IGlmIHRoaXMgaXMgZ29vZCB3YXksIGJ1dCBpdCB3b3Jrcy4uXHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBzZXRTZWxlY3Rpb25GbGFncyh0aGlzLkVMRU1FTlRTWzBdLCB0aGlzLkVMRU1FTlRTW3RoaXMuRUxFTUVOVFMubGVuZ3RoIC0gMV0pOy8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbiAgICAgICAgLy8gcmVtb3ZlWmVyb1NwYWNlKGdldFRleHROb2Rlcyh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgbGV0IFRvZ2dsZU1vZGU7Ly9EZWNsYXJlIHRvZ2dsZSBtb2RlLCBUaGUgZmlyc3QgZWxlbWVudCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgaXMgb24gb3Igb2ZmXHJcblxyXG4gICAgICAgIHRoaXMuRUxFTUVOVFMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gVG9nZ2xlTW9kZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5tb2RlSGFuZGxlcnNbbW9kZV0oZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBNb2Rlcy5Ub2dnbGUgJiYgdHlwZW9mIChUb2dnbGVNb2RlKSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBUb2dnbGVNb2RlID0gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXJlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQgJiYgbm9ybWFsaXplZFBhcmVudHMuZmluZEluZGV4KG4gPT4gbiA9PT0gZWwucGFyZW50RWxlbWVudCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsLnBhcmVudEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRQYXJlbnRzLnB1c2goZWwucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vdXNlIHRoZSBmaXJzdCBhbmQgbGFzdCBmbGFncyB0byBtYWtlIHRoZSB0ZXh0IHNlbGVjdGlvbiBhbmQgdW53cmFwIHRoZW0uLlxyXG4gICAgICAgIGlmIChmaXJzdEZsYWcgJiYgbGFzdEZsYWcpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0aW9uQmV0d2VlblR3b05vZGVzKGZpcnN0RmxhZywgbGFzdEZsYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKHNlbC5yZW1vdmVBbGxSYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJldEhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZXRBdCh0aGlzLmNhcmV0SG9sZGVyLCB0aGlzLmNhcmV0SG9sZGVyLnRleHRDb250ZW50Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29sbGVjdGVkU3R5bGVzID0gY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEVWRU5UU1tcImluc3BlY3RcIl0pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgRVZFTlRTW1wiaW5zcGVjdFwiXShjb2xsZWN0ZWRTdHlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3N0eWxlQ2hhbmdlZCcsIGNvbGxlY3RlZFN0eWxlcyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDYXJldFBsYWNlbWVudChhdE5vZGUpIHtcclxuICAgICAgICBpZiAoIWF0Tm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgY2FyZXRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gICAgICAgIGNhcmV0SG9sZGVyLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsICd0cnVlJyk7XHJcbiAgICAgICAgYXROb2RlLmFwcGVuZENoaWxkKGNhcmV0SG9sZGVyKTtcclxuICAgICAgICByZXR1cm4gY2FyZXRIb2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGF5bG9hZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudF0pXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XShwYXlsb2FkKTtcclxuICAgIH1cclxuICAgIG9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZXRlY3QgaWYgdGhlcmUgaXMgYW55IHBhcmVudCB3aXRoIHN0eWxlIHRvIHNwbGl0LlxyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgY2F0Y2ggZnJvbSBvcHRpb25zIHRvIGRldGVjdCBtb3JlIHRoYW4gb25lIHN0eWxlIG9yIHRhZyBlbGVtZW50LlxyXG4gICAgICAgICAgICAgbGV0IGVsZW1lbnRUb1NwbGl0ID0gIGVsZW1lbnQuX19jbG9zZXN0KGBbc3R5bGUqPScke3ZhbHVlfSddYCk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogdGVzdHNcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0ICYmIGJsb2NrX2VsbWVudHNbZWxlbWVudFRvU3BsaXQubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXJTcGFuID0gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlubmVyU3Bhbi5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblRvZ2dsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQgJiYgZWxlbWVudFRvU3BsaXQgIT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL3VuYm9sZFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBzcGxpdCBlbGVtZW50cywgaXRzIGVycm9yIVxyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0RWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShzcGxpdEVsZW1lbnRzLmNlbnRlciwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NwbGl0SFRNTCByZXR1cm4gbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnRUb1NwbGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKG9wdGlvbnMub25PZmYpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucy5vbk9mZik7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vbk9mZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25FeHRlbmQoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5fX2Nsb3Nlc3QoYFtzdHlsZSo9JyR7a2V5fSddYCk7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRCbG9ja3MgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0QmxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRCbG9ja3MuY2VudGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRhcmdldCAhPT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlubmVyU3BhbiA9IGNyZWF0ZUlubmVyV3JhcHBlckVsZW1lbnQoZWxlbWVudFRvU3BsaXQsIHsgZWw6ICdzcGFuJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShpbm5lclNwYW4sIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uRXh0ZW5kKGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnRUb1NwbGl0ICE9PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRFbGVtZW50cyA9IHNwbGl0SFRNTChlbGVtZW50LCBlbGVtZW50VG9TcGxpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0RWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoc3BsaXRFbGVtZW50cy5jZW50ZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NwbGl0SFRNTCByZXR1cm4gbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheSAhPT0gXCJibG9ja1wiICYmIG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICYmIGJsb2NrRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHBhcmVudEVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LndyYXAod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUod3JhcHBlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZUJsb2NrU3R5bGUob3B0aW9ucywgZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5hcyA9PT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JhcFRleHROb2RlV2l0aEFwcGVuZFN0eWxlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS53cmFwKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUlubGluZVN0eWxlID0gKHBhcmVudE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RPRE86IHRlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHBhcmVudE5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmICF2b2lkX2VsZW1lbnRzW25vZGUubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmxpbmVTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUoYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIEFycmF5LmZyb20oYmxvY2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKS5mb3JFYWNoKGVsPT5lbC5zdHlsZVtrZXldID0gdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpc1N1Y2Nlc3MgPSBmaW5kQmxvY2tBbmRTdHlsZUl0KGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudEVkaXRhYmxlID0gZWxlbWVudC5jbG9zZXN0KFwiW2NvbnRlbnRlZGl0YWJsZV1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudEVkaXRhYmxlICYmIGNvbnRlbnRFZGl0YWJsZS5pc0NvbnRlbnRFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBOYWtlZFRleHROb2Rlcyhjb250ZW50RWRpdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3VjY2VzcyA9IGZpbmRCbG9ja0FuZFN0eWxlSXQoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXh0IG5vZGVzIGFuZCBpbmxpbmUgZWxlbWVudHMgbXVzdCBiZSBpbnNpZGUgYmxvY2sgZWxlbWVudCBsaWtlIHAsaDEsaDIsaDMsaDQsaDUsaDZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVkFsaWRLZXlWYWx1ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICEhKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKTtcclxuICAgIH1cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigncGxlYXNlIGNyZWF0ZSBuZXcgaW5zdGFuY2UuLicpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgKChzZWxlY3RlZEVsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkgfHwgc2VsZWN0ZWRFbGVtZW50ID09PSB0aGlzLmNvbm5lY3RlZEVsZW1lbnQpICYmIHNlbGVjdGVkRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VSdWxlcyhkYXRhKSB7XHJcbiAgICBjb25zdCBDb2xvclRleHREZWNvcmF0aW9uUnVsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEua2V5ID09PSBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBkYXRhLmVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0ndGV4dC1kZWNvcmF0aW9uJ11gKTtcclxuICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdHMgPSBzcGxpdEhUTUwoZGF0YS5lbGVtZW50LCB0ZXh0RGVjb3JhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdHMuY2VudGVyLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzcGxpdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUodGV4dERlY29yYXRpb24sICd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBgJHtkYXRhLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgUnVsZXMgPSBbXHJcbiAgICAgICAgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGVcclxuICAgIF1cclxuICAgIFJ1bGVzLmZvckVhY2gocnVsZSA9PiBydWxlKGRhdGEpKTtcclxufSIsIlxyXG5pbXBvcnQgeyBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vc3R5bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4uL2V2ZW50cy9ldmVudHMnO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcmVzZXRVUkwgfSBmcm9tICcuLi9saW5rLnNlcnZpY2UnO1xyXG5cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaG93IGNhbiB3ZSBleHBvc2UgdGhlIGNvbGxlY3RlZFN0eWxlID8gXHJcbi8vcXVlc3Rpb246IHNob3VsZCB3ZSB1c2UgdGhpcyA/IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NdXRhdGlvbk9ic2VydmVyXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHNlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9uSW5zcGVjdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gSW5wc2VjdG9yID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5vbkluc3BlY3QgPSBvbkluc3BlY3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhdW5jaEluc3BlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub25JbnNwZWN0KSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluc3BlY3QoY29sbGVjdGVkU3R5bGUpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIChFVkVOVFNbXCJpbnNwZWN0XCJdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBFVkVOVFNbXCJpbnNwZWN0XCJdKGNvbGxlY3RlZFN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkRWxlbWVudCApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYVRhZyA9IHNlbGVjdGVkRWxlbWVudC5jbG9zZXN0KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGlmKGFUYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihFVkVOVFNbXCJpbnNwZWN0TGlua1wiXSkgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVWRU5UU1tcImluc3BlY3RMaW5rXCJdKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3RvY29sOmFUYWcucHJvdG9jb2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOnJlc2V0VVJMKGFUYWcuaHJlZiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6YVRhZy5nZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIikgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6YVRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy9UT0RPOiByZXZpZXdcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCAmJiB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGggPD0gMSAmJiAhdGhpcy50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXVuY2hJbnNwZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XHJcblxyXG4gICAgICAgIHRoaXMuZGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcblxyXG4vL2NsYXNzIGFuZCBzdHlsZSBub3QgaW5jbHVkZXMgeWV0Li5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaGVpcnRBdHRyaWJ1dGVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgY3VycmVjdEVsZW1lbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gY3VycmVjdEVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZihhdHRyc1tpXS5uYW1lICAhPT1cImNsYXNzXCIgJiYgYXR0cnNbaV0ubmFtZSAgIT09IFwic3R5bGVcIil7XHJcbiAgICAgICAgICAgICAgICBpZighYXR0cmlidXRlc1thdHRyc1tpXS5uYW1lIF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnQsZ2V0QWxsKXtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0ge307XHJcbiAgICB2YXIgYXR0cnMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICBmb3IodmFyIGkgPSBhdHRycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmKGdldEFsbCAgfHwgKCFnZXRBbGwgJiYgYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpKXtcclxuICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdID0gYXR0cnNbaV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxBdHRycyhlbGVtZW50KXtcclxuICAgICAgaWYoZWxlbWVudCAmJiAhZWxlbWVudC5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlbGVtZW50IG5vdCBoYXZlIGF0dHJpYnV0ZXMuLlwiKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyPT5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKSlcclxuICB9IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgY2xhc3NlcyA9IFtdO1xyXG4gICAgdmFyIF9wYXJlbnQgPSBmcm9tRWxlbWVudDtcclxuICAgIHdoaWxlIChfcGFyZW50ICYmIF9wYXJlbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBfcGFyZW50LmNsYXNzTGlzdDtcclxuICAgICAgICBBcnJheS5mcm9tKG1hcCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsYXNzZXMuZmluZEluZGV4KGMgPT4gYyA9PT0gbmFtZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNsYXNzTGlzdCk7XHJcbn1cclxuXHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGlzIGV4cGVuc2l2ZSB0b28gbXVjaD8gXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCkge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcclxuICAgICAgICByZW1vdmVFbXB0eUNsYXNzKGVsZW1lbnQpO1xyXG4gICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbY2xhc3M9JyR7Y30nXWApKS5mb3JFYWNoKG5vZGUgPT57XHJcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYylcclxuICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5Q2xhc3Mobm9kZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbltjbGFzc10nKSkuY29uY2F0KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChjaGlsZCA9PiBjbGVhcihjaGlsZCkpO1xyXG59XHJcbi8vVE9ETzogcmV2aWV3XHJcbi8vcXVlc3Rpb246IGhvdyBhYm91dCB0aGlzIG5hbWUgPyBcclxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2NsYXNzTmFtZX0nXWApKS5jb25jYXQodGhpcyk7XHJcbm5vZGVzLmZvckVhY2gobm9kZT0+bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xyXG59IiwiaW1wb3J0IHsgYmxvY2tfZWxtZW50cywgYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvYmxvY2tfZWxtc1wiO1xyXG5pbXBvcnQgeyBpbmxpbmVfZWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2lubGluZV9lbGVtc1wiO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy92b2lkX2VsbXNcIjtcclxuaW1wb3J0IHsgc3BsaXRIVE1MIH0gZnJvbSBcIi4uLy4uL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgcGFzdGVIdG1sQXRDYXJldCwgc2V0Q2FyZXRBdCB9IGZyb20gXCIuLi9yYW5nZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEluaGVpcnRDc3MsIHNldFN0eWxlcyB9IGZyb20gXCIuLi9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldENsZWFuVGV4dCwgbm9ybWFsaXplRWxlbWVudCB9IGZyb20gXCIuLi90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3B5UGFzdGUge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMpIHtcclxuICAgIGlmKG9wdGlvbnMucGx1Z2lucyAmJiB0eXBlb2Ygb3B0aW9ucy5wbHVnaW5zLmNvcHlQYXN0ZSA9PT0gXCJib29sZWFuXCIgJiYgb3B0aW9ucy5wbHVnaW5zLmNvcHlQYXN0ZSA9PT0gZmFsc2Upe1xyXG4gICAgICByZXR1cm47XHJcbiAgfVxyXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLnN0eWxlc1RvUGFzdGUgPSB0eXBlb2Ygb3B0aW9ucy5zdHlsZXNUb1Bhc3RlID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5zdHlsZXNUb1Bhc3RlIDogbnVsbDtcclxuICAgIHRoaXMucGFzdGUgPSB0aGlzLnBhc3RlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvcHkgPSB0aGlzLmNvcHkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgY29weShldmVudCkge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbC5yYW5nZUNvdW50OyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICAgIGNvbnN0IHJhbmdlID0gc2VsLmdldFJhbmdlQXQoaSk7XHJcbiAgICAgICAgICBsZXQgY29waWVkTm9kZSA9IHJhbmdlLmNsb25lQ29udGVudHMoKTtcclxuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3BpZWROb2RlKTtcclxuICAgICAgICAgIGlmKGV2ZW50LnR5cGUgPT09IFwiY3V0XCIpe1xyXG4gICAgICAgICAgICByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkTm9kZXMpLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50Q29waWVkTm9kZSA9IHNlbC5nZXRSYW5nZUF0KGkpLnN0YXJ0Q29udGFpbmVyLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGVkQ1NTID0gZ2V0SW5oZWlydENzcyhwYXJlbnRDb3BpZWROb2RlLCB0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb3BpZWROb2RlLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgIHNldFN0eWxlcyhzcGFuLCBjb2xsZWN0ZWRDU1MpO1xyXG4gICAgICAgICAgICAgIG4ud3JhcChzcGFuKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodm9pZF9lbGVtZW50c1tuLm5vZGVOYW1lXSAmJiBuLm5vZGVOYW1lICE9PSBcIkJSXCIpIHtcclxuICAgICAgICAgICAgICBuLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sID0gY29udGFpbmVyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5zZWxlY3Rpb24pIHtcclxuICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbi50eXBlID09PSBcIlRleHRcIikge1xyXG4gICAgICAgIGh0bWwgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS5odG1sVGV4dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LmNsaXBib2FyZERhdGEuc2V0RGF0YSgnc3R5bGVpdC9odG1sJywgaHRtbC5pbm5lckhUTUwpO1xyXG4gICAgZXZlbnQuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCd0ZXh0L3BsYWluJywgaHRtbC50ZXh0Q29udGVudCk7XHJcbiAgfVxyXG4gIHBhc3RlKGV2ZW50KSB7XHJcbiAgICBjb25zdCBpc1NoaWZ0ZWQgPSBldmVudC5zaGlmdEtleTtcclxuICAgIGlmIChpc1NoaWZ0ZWQpIHtcclxuICAgICAgdGhpcy5wYXN0ZVBsYWluVGV4dChldmVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBhc3RlV2l0aFN0eWxlcyhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIHBhc3RlUGxhaW5UZXh0KGV2ZW50KSB7XHJcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY29waWVkID0gZGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykudHJpbSgpO1xyXG4gICAgY29waWVkID0gY29waWVkLnJlcGxhY2UoL1xcbi9nLCBcIjxici8+XCIpXHJcbiAgICBpZiAoIWNvcGllZC50cmltKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC5pbm5lckhUTUwgPSBjb3BpZWQ7XHJcblxyXG4gICAgcGFzdGVIdG1sQXRDYXJldChwKTtcclxuICAgIHNldENhcmV0QXQocCk7XHJcblxyXG4gICAgaWYgKHAucGFyZW50RWxlbWVudCAhPT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgcC51bndyYXAoKTtcclxuXHJcbiAgICB9XHJcbiAgICBBcnJheS5mcm9tKHRoaXMudGFyZ2V0LmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgaWYgKCFjaGlsZC50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHBhc3RlV2l0aFN0eWxlcyhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhO1xyXG4gICAgY29uc3QgY29waWVkID0gZGF0YS5nZXREYXRhKCdzdHlsZWl0L2h0bWwnKS50cmltKCk7XHJcbiAgICAvL29uIGNvcGllZCBvbiB0aGUgZWRpdG9yIGxvY2FseVxyXG4gICAgaWYgKGNvcGllZCkge1xyXG4gICAgICBjb25zdCBwYXN0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwYXN0ZWRDb250YWluZXIuaW5uZXJIVE1MID0gY29waWVkO1xyXG4gICAgICBwYXN0ZUh0bWxBdENhcmV0KHBhc3RlZENvbnRhaW5lcik7XHJcbiAgICAgIEFycmF5LmZyb20ocGFzdGVkQ29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBpZiAoIWdldENsZWFuVGV4dChjaGlsZC50ZXh0Q29udGVudCkgJiYgIXZvaWRfZWxlbWVudHNbY2hpbGQubm9kZU5hbWVdICYmIChibG9ja19lbG1lbnRzW2NoaWxkLm5vZGVOYW1lXSB8fCBpbmxpbmVfZWxlbWVudHNbY2hpbGQubm9kZU5hbWVdKSkge1xyXG4gICAgICAgICAgY2hpbGQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgQXJyYXkuZnJvbShwYXN0ZWRDb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhbWVOb2RlID0gY2hpbGQucGFyZW50RWxlbWVudC5jbG9zZXN0KGJsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmcpO1xyXG4gICAgICAgIGlmIChzYW1lTm9kZSAmJiBibG9ja19lbG1lbnRzW2NoaWxkLm5vZGVOYW1lXSAmJiBnZXRDbGVhblRleHQoc2FtZU5vZGUudGV4dENvbnRlbnQpID09PSBnZXRDbGVhblRleHQocGFzdGVkQ29udGFpbmVyLnRleHRDb250ZW50KSkge1xyXG4gICAgICAgICAgc2FtZU5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHNhbWVOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEgJiYgYmxvY2tfZWxtZW50c1tjaGlsZC5ub2RlTmFtZV0gJiYgc2FtZU5vZGUpIHtcclxuICAgICAgICAgIGlmIChwYXN0ZWRDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjaGlsZC5pbnNlcnRBZnRlcihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlJcIikpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2hpbGQudW53cmFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFnZXRDbGVhblRleHQoY2hpbGQudGV4dENvbnRlbnQpKSB7XHJcbiAgICAgICAgICBjaGlsZC51bndyYXAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBibG9jayA9IHBhc3RlZENvbnRhaW5lci5jbG9zZXN0KGJsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmcpO1xyXG4gICAgICBpZiAoYmxvY2spIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHNwbGl0SFRNTChwYXN0ZWRDb250YWluZXIsIGJsb2NrLCB7IHRhZzogYmxvY2subm9kZU5hbWUgfSk7XHJcbiAgICAgICAgaWYgKHBhcnRzKSB7XHJcbiAgICAgICAgICBwYXJ0cy5sZWZ0LmFwcGVuZENoaWxkKHBhcnRzLmNlbnRlcik7XHJcbiAgICAgICAgICBwYXJ0cy5jZW50ZXIuYXBwZW5kQ2hpbGQocGFydHMucmlnaHQpO1xyXG4gICAgICAgICAgcGFydHMucmlnaHQudW53cmFwKCk7XHJcbiAgICAgICAgICBwYXJ0cy5jZW50ZXIudW53cmFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICBzZXRDYXJldEF0KHBhc3RlZENvbnRhaW5lcik7XHJcbiAgICAgIHBhc3RlZENvbnRhaW5lci51bndyYXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGFzdGVQbGFpblRleHQoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImN1dFwiLCB0aGlzLmNvcHkpO1xyXG4gIH1cclxuICBkZXN0cm95KCkge1xyXG4gICAgaWYodGhpcy50YXJnZXQpe1xyXG4gICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgdGhpcy5wYXN0ZSk7XHJcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29weVwiLCB0aGlzLmNvcHkpO1xyXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImN1dFwiLCB0aGlzLmNvcHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0U3R5bGUsIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyB2b2lkX2VsZW1lbnRzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy92b2lkX2VsbXNcIjtcclxuaW1wb3J0IHsgYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZyB9IGZyb20gXCIuLi9jb25zdGFudHMvYmxvY2tfZWxtc1wiO1xyXG5pbXBvcnQgeyBpbmxpbmVfZWxlbWVudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2lubGluZV9lbGVtc1wiO1xyXG5pbXBvcnQgeyByZW1vdmVFbGVtZW50IH0gZnJvbSBcIi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBOYWtlZFRleHROb2Rlcyh0YXJnZXQpIHtcclxuXHJcbiAgICB0YXJnZXQubm9ybWFsaXplKCk7XHJcblxyXG4gICAgQXJyYXkuZnJvbSh0YXJnZXQuY2hpbGROb2RlcykuZm9yRWFjaChjID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGMubm9kZVR5cGUgPT09IDEgJiYgIWMudGV4dENvbnRlbnQudHJpbSgpICYmIGMuY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmICF2b2lkX2VsZW1lbnRzW2Mubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQoYyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMucGFyZW50RWxlbWVudCA9PT0gdGFyZ2V0ICYmIGMudGV4dENvbnRlbnQudHJpbSgpICYmICgoYy5ub2RlVHlwZSA9PT0gMSAmJiBpbmxpbmVfZWxlbWVudHNbYy5ub2RlTmFtZV0gJiYgIWMucGFyZW50RWxlbWVudC5jbG9zZXN0KGJsb2NrX2VsbWVudHNfcXVlcnlTdHJpbmcpKSB8fCBjLm5vZGVUeXBlID09PSAzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgICAgIGMud3JhcChwKTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChwLm5leHRTaWJsaW5nICYmIChwLm5leHRTaWJsaW5nLm5vZGVUeXBlID09PSAzIHx8IGlubGluZV9lbGVtZW50c1twLm5leHRTaWJsaW5nLm5vZGVOYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgIHAuYXBwZW5kQ2hpbGQocC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAubm9ybWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhbGtUaGVET00obm9kZSwgZnVuYykge1xyXG4gICAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcclxuICAgIGZ1bmMobm9kZSk7XHJcbiAgICBub2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpO1xyXG4gICAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3YWxrT25FbGVtZW50KG5vZGUsIGZ1bmMpIHtcclxuICAgIGlmICghbm9kZSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBjb250aW51ZVdpdGggPSBmdW5jKG5vZGUpO1xyXG4gICAgaWYgKGNvbnRpbnVlV2l0aCkge1xyXG4gICAgICAgIG5vZGUgPSBjb250aW51ZVdpdGg7XHJcbiAgICB9XHJcbiAgICBub2RlID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgd2Fsa09uRWxlbWVudChub2RlLCBmdW5jKTtcclxuICAgICAgICBub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkRWxlbWVudCgpIHtcclxuICAgIHZhciBub2RlID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHZhciBhbmNOb2RlID0gbm9kZS5mb2N1c05vZGU7XHJcbiAgICAgICAgaWYgKGFuY05vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGFuY05vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIGFuY05vZGUgPSBhbmNOb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc3QgZWwgPSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMyA/IGFuY05vZGUucGFyZW50Tm9kZSA6IG5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYW5jTm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25Ub0VsZW1lbnQoanNvbk9iamVjdCwgcGFyZW50RWxlbWVudCkge1xyXG4gICAgLy9UT0RPOiBjcmVhdGUgcGFyZW50ZWxlbWVudCBhbmQganNvbm9iamVjdCB2YWxpZGF0aW9uICAgXHJcbiAgICBjb25zdCByZW5kZXJBdHRycyA9IChqc0VsZW1lbnQsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoanNFbGVtZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdCA9IFsuLi5qc0VsZW1lbnQuY2xhc3NMaXN0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGpzRWxlbWVudC5zdHlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0ZWRTdHlsZSA9IEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKGpzRWxlbWVudC5zdHlsZSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUgPSBjb2xsZWN0ZWRTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGpzRWxlbWVudC5hdHRycykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4ganNFbGVtZW50LmF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoanNFbGVtZW50LmF0dHJzLCBhdHRyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0ganNFbGVtZW50LmF0dHJzW2F0dHJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IG90aGVyIGF0dHJzLi4uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChqc0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGpzRWxlbWVudC50YWc7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlzU2hvdWxkUmVuZGVyQXR0cnM7XHJcbiAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShqc0VsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiI2NvbW1lbnRcIjpcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChqc0VsZW1lbnQudGV4dENvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmhyZWYgPSBqc0VsZW1lbnQuaHJlZjtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0ID0ganNFbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZW5kZXJBdHRycyhqc0VsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICghcGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBjcmVhdGVIdG1sRWxlbWVudChqc29uT2JqZWN0KTtcclxuICAgIH1cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAganNvbk9iamVjdC5jaGlsZHJlbi5mb3JFYWNoKGpzQ2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICBpZiAoaHRtbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgSnNvblRvRWxlbWVudChqc0NoaWxkLCBodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IGNyZWF0ZSBkb20gZWxlbWVudCBmcm9tIGpzb24nLCBqc0NoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUb0pzb24obm9kZSkge1xyXG5cclxuICAgIGNvbnN0IG5vZGVUeXBlID0gbm9kZS5ub2RlTmFtZTtcclxuICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzID0gdHJ1ZTtcclxuICAgIGxldCBqc29uID0ge307XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG5cclxuICAgIHN3aXRjaCAobm9kZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFx1MjAwQi9nLCAnJyk7XHJcbiAgICAgICAgICAgIGlzU2hvdWxkUmVuZGVyQXR0cnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9xdWVzdGlvbjogcmVwbGFjZSBcXG4gP1xyXG4gICAgICAgICAgICBpZiAoIWpzb24udGV4dENvbnRlbnQudHJpbSgpKSBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIjY29tbWVudFwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIWpzb24udGV4dENvbnRlbnQudHJpbSgpKSBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgIGpzb24udGFnID0gbm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGpzb24uaHJlZiA9IG5vZGUuaHJlZjtcclxuICAgICAgICAgICAganNvbi50YXJnZXQgPSBub2RlLnRhcmdldDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAgLy9UT0RPOiBzaG91bGQgd2UgdW53cmFwIHRoaXMgbm9kZSA/IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmICghaXNWYWxpZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoaXNTaG91bGRSZW5kZXJBdHRycykge1xyXG4gICAgICAgIGpzb24uYXR0cnMgPSB7fTtcclxuICAgICAgICAvL1RPRE86IGdldCBhdHRycyBcclxuICAgICAgICBBcnJheS5mcm9tKG5vZGUuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChhdHRyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHlsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0U3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0eWxlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2xhc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbi5jbGFzc0xpc3QgPSBbLi4ubm9kZS5jbGFzc0xpc3RdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBqc29uLmF0dHJzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNoaWxkcmVuID0gWy4uLm5vZGUuY2hpbGROb2Rlc10ubWFwKChjbikgPT4gZWxlbWVudFRvSnNvbihjbikpLmZpbHRlcih2ID0+IHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBqc29uO1xyXG5cclxufSIsImV4cG9ydCBjb25zdCBFVkVOVFMgPSB7XHJcbiAgXHJcbn0iLCJpbXBvcnQgeyAgd3JhcE5ha2VkVGV4dE5vZGVzIH0gZnJvbSBcIi4uL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0Q2xvc2VzdEJsb2NrRWxlbWVudCwgaW5zZXJ0QWZ0ZXIsIHBhc3RlSHRtbEF0Q2FyZXQsIHNldENhcmV0QXQgfSBmcm9tIFwiLi4vcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge3ZvaWRfZWxlbWVudHN9IGZyb20gJy4uLy4uL2NvbnN0YW50cy92b2lkX2VsbXMnO1xyXG5pbXBvcnQgeyBnZXRDbGVhblRleHQgfSBmcm9tIFwiLi4vdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVByZXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSBrZXlQcmVzcyA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3B0aW9ucy5wbHVnaW5zICYmIHR5cGVvZiBvcHRpb25zLnBsdWdpbnMua2V5UHJlc3MgPT09IFwiYm9vbGVhblwiICYmIG9wdGlvbnMucGx1Z2lucy5rZXlQcmVzcyA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbktleVByZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbktleVByZXNzID0gb3B0aW9ucy5vbktleVByZXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIFxyXG5cclxuICAgICAgICB0aGlzLmtleXByZXNzID0gKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAvLyBpZihzZWwuZm9jdXNOb2RlLm5vZGVUeXBlID09PSAzICYmICFzZWwuZm9jdXNOb2RlLnBhcmVudEVsZW1lbnQuY2xvc2VzdChibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nKSl7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgICAgIC8vICAgICBzZWwuZm9jdXNOb2RlLndyYXAocCk7XHJcbiAgICAgICAgICAgIC8vICAgICBzZXRDYXJldEF0KHAsMSlcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmIChnZXRDbGVhblRleHQodGFyZ2V0LnRleHRDb250ZW50KSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXN0ZUh0bWxBdENhcmV0KFwiPC9icj4mIzgyMDM7XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrRWxlbWVudCA9IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQoc2VsZWN0aW9uLmFuY2hvck5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQgPT09IHRoaXMudGFyZ2V0IHx8ICFibG9ja0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlMmV4dHJhY3QgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlMmV4dHJhY3QuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5zZXRTdGFydChzZWxlY3Rpb24uYW5jaG9yTm9kZSwgc2VsZWN0aW9uLmFuY2hvck9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICByYW5nZS5zZXRFbmQoYmxvY2tFbGVtZW50LCBibG9ja0VsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50ICYmICF0aGlzLnRhcmdldC50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCAhPT0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy50YXJnZXQuY2hpbGRyZW4pLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGJsb2NrRWxlbWVudCAmJiAhYy50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tFbGVtZW50LmlubmVySFRNTCA9IGJsb2NrRWxlbWVudC5pbm5lckhUTUwgKyBcIiYjODIwMztcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhcmV0QXQoYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb2NGcmFnbWVudCA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2NGcmFnbWVudC5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxICYmICFjaGlsZC50ZXh0Q29udGVudC50cmltKCkgJiYgIXZvaWRfZWxlbWVudHNbY2hpbGQubm9kZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChibG9ja0VsZW1lbnQubm9kZU5hbWUgfHwgXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jRnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbC50ZXh0Q29udGVudC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIiYjODIwMztcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGluc2VydEFmdGVyKGVsLCBibG9ja0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbC5wcmV2aW91c1NpYmxpbmcuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIubmFtZSxhdHRyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuYXBwZW5kQ2hpbGQoYnIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICB3cmFwTmFrZWRUZXh0Tm9kZXModGhpcy50YXJnZXQsIHsgZXhwZWN0OiBibG9ja0VsZW1lbnQgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJldEF0KGVsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5vbktleVByZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlQcmVzcyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlwcmVzcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgICBjb25zdCBUQVJHRVRTID0ge1xyXG4gICAgX2JsYW5rOiBcIl9ibGFua1wiLFxyXG4gICAgX3NlbGY6IFwiX3NlbGZcIixcclxuICAgIF9wYXJlbnQ6IFwiX3BhcmVudFwiLFxyXG4gICAgX3RvcDogXCJfdG9wXCJcclxufVxyXG5leHBvcnQgIGNvbnN0IHJlc2V0VVJMID0gKHNyYykgPT4ge1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL2h0dHBzOi9nLCAnJyk7XHJcbiAgICBzcmMgPSBzcmMucmVwbGFjZSgvaHR0cDovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL21haWx0bzovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL3RlbDovZywgJycpO1xyXG4gICAgc3JjID0gc3JjLnJlcGxhY2UoL1xcLy9nLCAnJyk7XHJcbiAgICByZXR1cm4gc3JjO1xyXG59XHJcbmV4cG9ydCAgIGNvbnN0IGNyZWF0ZVRlbXBMaW5rRWxlbWVudCA9IChocmVmKSA9PiB7XHJcbiAgICBjb25zdCBBdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBBdGFnLmhyZWYgPSBocmVmO1xyXG4gICAgcmV0dXJuIEF0YWc7XHJcbn0iLCJpbXBvcnQgeyBibG9ja19lbG1lbnRzX3F1ZXJ5U3RyaW5nIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9ibG9ja19lbG1zXCI7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0Q2xlYW5UZXh0IH0gZnJvbSBcIi4vdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiAob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIG9wdGlvbnMgPSB7fTtcclxuICBsZXQgaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLmVsIHx8IFwic3BhblwiKTtcclxuICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiBpbm5lclNwYW4uYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyU3Bhbik7XHJcbiAgcmV0dXJuIGlubmVyU3BhbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KSB7XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcclxuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgfSBpZiAoZWxlbWVudCkge1xyXG4gICAgY29uc3QgYmxvY2sgPSBlbGVtZW50LmNsb3Nlc3QoYmxvY2tfZWxtZW50c19xdWVyeVN0cmluZyk7XHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG5cclxufVxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VXaXRoQmxvY2tFbGVtZW50KGxpbWl0RWxlbWVudCkge1xyXG4gIGNvbnN0IHdyYXBFbGVtZW50V2l0aEJsb2NrID0gKGVsKSA9PiB7XHJcbiAgICBsZXQgd0VsID0gXCJkaXZcIjtcclxuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIpIHtcclxuICAgICAgd0VsID0gXCJwXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3RWwpO1xyXG4gICAgZWwud3JhcCh3cmFwcGVyKTtcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG4gIH1cclxuICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gIGxldCBub2RlcyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgbm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBjb25zdCBibG9ja0VsID0gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbCk7XHJcbiAgICBpZiAoYmxvY2tFbCkge1xyXG4gICAgICBpZiAoYmxvY2tFbC5pc2NoaWxkT2YobGltaXRFbGVtZW50KSkge1xyXG4gICAgICAgIGNvbnN0IGZvdW5kZWQgPSBlbGVtZW50cy5maW5kKGJsb2NrID0+IGJsb2NrRWwuaXNjaGlsZE9mKGJsb2NrKSk7XHJcbiAgICAgICAgaWYgKCFmb3VuZGVkKVxyXG4gICAgICAgICAgZWxlbWVudHMucHVzaChibG9ja0VsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBfd3JhcHBlciA9IHdyYXBFbGVtZW50V2l0aEJsb2NrKGVsKTtcclxuICAgICAgICBlbGVtZW50cy5wdXNoKF93cmFwcGVyKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgX3dyYXBwZXIgPSB3cmFwRWxlbWVudFdpdGhCbG9jayhlbCk7XHJcbiAgICAgIGVsZW1lbnRzLnB1c2goX3dyYXBwZXIpO1xyXG5cclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgbm9kZXM6IG5vZGVzLFxyXG4gICAgYmxvY2tzOiBlbGVtZW50c1xyXG4gIH1cclxuICByZXR1cm4gZWxlbWVudHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSYW5nZVdpdGhFbGVtZW50KHdyYXBUYWcpIHtcclxuICBjb25zdCByYW5nZXMgPSBnZXRSYW5nZXMoKTtcclxuICAgIHJldHVybiB3cmFwUmFuZ2VUZXh0KHdyYXBUYWcsIHJhbmdlcyk7XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZXMoKSB7XHJcbiAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTs7XHJcbn1cclxuLy8gcmV0dXJuIGFsbCB0ZXh0IG5vZGVzIHRoYXQgYXJlIGNvbnRhaW5lZCB3aXRoaW4gYGVsYFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dE5vZGVzKGVsKSB7XHJcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XHJcblxyXG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50LFxyXG4gICAgd2Fsa2VyID0gZG9jLmNyZWF0ZVRyZWVXYWxrZXIoZWwsIE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSksXHJcbiAgICB0ZXh0Tm9kZXMgPSBbXSxcclxuICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcclxuXHJcbiAgd2hpbGUgKG5vZGUpIHtcclxuICAgIGlmKGdldENsZWFuVGV4dChub2RlLnRleHRDb250ZW50KSlcclxuICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG4gIH1cclxuICByZXR1cm4gdGV4dE5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlc0ludGVyc2VjdChyYW5nZUEsIHJhbmdlQikge1xyXG4gIHJldHVybiByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19TVEFSVCwgcmFuZ2VCKSA9PT0gLTEgJiZcclxuICAgIHJhbmdlQS5jb21wYXJlQm91bmRhcnlQb2ludHMoUmFuZ2UuU1RBUlRfVE9fRU5ELCByYW5nZUIpID09PSAxXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkge1xyXG4gIHZhciByYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpXHJcbiAgdHJ5IHtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSlcclxuICB9XHJcbiAgcmV0dXJuIHJhbmdlXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q2hhcmFjdGVyT2Zmc2V0V2l0aGluKGVsZW1lbnQpIHtcclxuICB2YXIgY2FyZXRPZmZzZXQgPSAwO1xyXG4gIHZhciBkb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudDtcclxuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XHJcbiAgdmFyIHNlbDtcclxuICBpZiAodHlwZW9mIHdpbi5nZXRTZWxlY3Rpb24gIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgc2VsID0gd2luLmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbC5yYW5nZUNvdW50ID4gMCkge1xyXG4gICAgICB2YXIgcmFuZ2UgPSB3aW4uZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgdmFyIHByZUNhcmV0UmFuZ2UgPSByYW5nZS5jbG9uZVJhbmdlKCk7XHJcbiAgICAgIHByZUNhcmV0UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBwcmVDYXJldFJhbmdlLnNldEVuZChyYW5nZS5lbmRDb250YWluZXIsIHJhbmdlLmVuZE9mZnNldCk7XHJcbiAgICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKChzZWwgPSBkb2Muc2VsZWN0aW9uKSAmJiBzZWwudHlwZSAhPSBcIkNvbnRyb2xcIikge1xyXG4gICAgdmFyIHRleHRSYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgdmFyIHByZUNhcmV0VGV4dFJhbmdlID0gZG9jLmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICBwcmVDYXJldFRleHRSYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChlbGVtZW50KTtcclxuICAgIHByZUNhcmV0VGV4dFJhbmdlLnNldEVuZFBvaW50KFwiRW5kVG9FbmRcIiwgdGV4dFJhbmdlKTtcclxuICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRUZXh0UmFuZ2UudGV4dC5sZW5ndGg7XHJcbiAgfVxyXG4gIHJldHVybiBjYXJldE9mZnNldDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FyZXRBdChlbGVtZW50LCBjaGFySW5kZXggPSAwKSB7XHJcblxyXG4gIHZhciBub2RlID0gZWxlbWVudDtcclxuICBub2RlLmZvY3VzKCk7XHJcbiAgdmFyIHRleHROb2RlID0gQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpO1xyXG4gIGlmICh0ZXh0Tm9kZS5sZW5ndGggPT09IDApIHtcclxuICAgIHRleHROb2RlID0gZWxlbWVudDtcclxuICAgIHdoaWxlICh0ZXh0Tm9kZSAmJiB0ZXh0Tm9kZS5maXJzdENoaWxkICYmIHRleHROb2RlLm5vZGVUeXBlICE9PSAzKSB7XHJcbiAgICAgIHRleHROb2RlID0gdGV4dE5vZGUuZmlyc3RDaGlsZDtcclxuICAgIH1cclxuICAgIGlmICh0ZXh0Tm9kZSkge1xyXG4gICAgICB0ZXh0Tm9kZSA9IFt0ZXh0Tm9kZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNldFN0YXJ0KHRleHROb2RlWzBdLCBjaGFySW5kZXgpO1xyXG4gIHJhbmdlLnNldEVuZCh0ZXh0Tm9kZVswXSwgY2hhckluZGV4KTtcclxuICByYW5nZS5jb2xsYXBzZSh0cnVlKVxyXG4gIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXN0ZUh0bWxBdENhcmV0KGh0bWwpIHtcclxuICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICBjb25zdCBjb250ZW50ZWRpdGFibGUgPSBzZWxlY3RlZEVsZW1lbnQuY2xvc2VzdChcIltjb250ZW50ZWRpdGFibGVdXCIpO1xyXG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICBpZiAoY29udGVudGVkaXRhYmxlKSB7XHJcbiAgICBpZiAoIWNvbnRlbnRlZGl0YWJsZS5pc0NvbnRlbnRFZGl0YWJsZSkge1xyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICB9XHJcbiAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgdmFyIHNlbCwgcmFuZ2U7XHJcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIC8vIElFOSBhbmQgbm9uLUlFXHJcbiAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsLmdldFJhbmdlQXQgJiYgc2VsLnJhbmdlQ291bnQpIHtcclxuICAgICAgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcclxuXHJcbiAgICAgIC8vIFJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCgpIHdvdWxkIGJlIHVzZWZ1bCBoZXJlIGJ1dCBpc1xyXG4gICAgICAvLyBvbmx5IHJlbGF0aXZlbHkgcmVjZSBudGx5IHN0YW5kYXJkaXplZCBhbmQgaXMgbm90IHN1cHBvcnRlZCBpblxyXG4gICAgICAvLyBzb21lIGJyb3dzZXJzIChJRTksIGZvciBvbmUpXHJcbiAgICAgIGxldCBlbDtcclxuICAgICAgaWYgKHR5cGVvZiAoaHRtbCkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgbm9kZSwgbGFzdE5vZGU7XHJcbiAgICAgICAgd2hpbGUgKChub2RlID0gZWwuZmlyc3RDaGlsZCkpIHtcclxuICAgICAgICAgIGxhc3ROb2RlID0gZnJhZy5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZShmcmFnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgKGh0bWwpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgcmFuZ2UuaW5zZXJ0Tm9kZShodG1sKTtcclxuXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgLy8gUHJlc2VydmUgdGhlIHNlbGVjdGlvblxyXG4gICAgICBpZiAobGFzdE5vZGUpIHtcclxuICAgICAgICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgICByYW5nZS5zZXRTdGFydEFmdGVyKGxhc3ROb2RlKTtcclxuICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkge1xyXG4gIGlmIChyYW5nZS5pbnRlcnNlY3RzTm9kZSkge1xyXG4gICAgcmV0dXJuIHJhbmdlLmludGVyc2VjdHNOb2RlKG5vZGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByYW5nZXNJbnRlcnNlY3QocmFuZ2UsIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZVRleHROb2RlcyhyYW5nZSkge1xyXG4gIHZhciBjb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcixcclxuICAgIG5vZGVzID0gZ2V0VGV4dE5vZGVzKGNvbnRhaW5lci5wYXJlbnROb2RlIHx8IGNvbnRhaW5lcilcclxuXHJcbiAgcmV0dXJuIG5vZGVzLmZpbHRlcigobm9kZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJhbmdlSW50ZXJzZWN0c05vZGUocmFuZ2UsIG5vZGUpICYmIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKVxyXG4gIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uRW1wdHlUZXh0Tm9kZShub2RlKSB7XHJcbiAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoID4gMFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XHJcbiAgaWYgKGVsLnBhcmVudE5vZGUpIHtcclxuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTm9kZShyZXBsYWNlbWVudE5vZGUsIG5vZGUpIHtcclxuICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XHJcbiAgICByZW1vdmVFbGVtZW50KHJlcGxhY2VtZW50Tm9kZSk7XHJcbiAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSk7XHJcbiAgICByZW1vdmVFbGVtZW50KG5vZGUpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0VGV4dChub2RlKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dChub2RlKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IHNlbGVjdCB0ZXh0IGluIG5vZGU6IFVuc3VwcG9ydGVkIGJyb3dzZXIuXCIpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xyXG4gIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXJGdW5jdGlvbih3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgdmFyIHN0YXJ0Tm9kZSA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLFxyXG4gICAgZW5kTm9kZSA9IHJhbmdlLmVuZENvbnRhaW5lcixcclxuICAgIHN0YXJ0T2Zmc2V0ID0gcmFuZ2Uuc3RhcnRPZmZzZXQsXHJcbiAgICBlbmRPZmZzZXQgPSByYW5nZS5lbmRPZmZzZXRcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBOb2RlKG5vZGUpIHtcclxuICAgIHZhciBjdXJyZW50UmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLFxyXG4gICAgICBjdXJyZW50V3JhcHBlciA9IHdyYXBwZXJFbC5jbG9uZU5vZGUoKVxyXG5cclxuICAgIGN1cnJlbnRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICBpZiAobm9kZSA9PT0gc3RhcnROb2RlICYmIHN0YXJ0Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0U3RhcnQobm9kZSwgc3RhcnRPZmZzZXQpXHJcbiAgICAgIHN0YXJ0Tm9kZSA9IGN1cnJlbnRXcmFwcGVyXHJcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUgPT09IGVuZE5vZGUgJiYgZW5kTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICBjdXJyZW50UmFuZ2Uuc2V0RW5kKG5vZGUsIGVuZE9mZnNldClcclxuICAgICAgZW5kTm9kZSA9IGN1cnJlbnRXcmFwcGVyO1xyXG4gICAgICBlbmRPZmZzZXQgPSAxXHJcbiAgICB9XHJcbiAgICBjdXJyZW50UmFuZ2Uuc3Vycm91bmRDb250ZW50cyhjdXJyZW50V3JhcHBlcik7XHJcbiAgICBsZXQgcGFyZW50RWwgPSBjdXJyZW50V3JhcHBlcjtcclxuICAgIHdoaWxlKHBhcmVudEVsLnRleHRDb250ZW50ICA9PT0gcGFyZW50RWwucGFyZW50RWxlbWVudC50ZXh0Q29udGVudCAmJiBwYXJlbnRFbC5ub2RlTmFtZSA9PT0gcGFyZW50RWwucGFyZW50Tm9kZS5ub2RlTmFtZSl7XHJcbiAgICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIGlmKHBhcmVudEVsICE9PSBjdXJyZW50V3JhcHBlcil7XHJcbiAgICAgIGN1cnJlbnRXcmFwcGVyLnVud3JhcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudEVsXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdG9yVW5kZXJTZWxlY3Rpb24gPSAocXVlcnlTZWxlY3RvcikgPT4ge1xyXG4gIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgdmFyIHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgY29uc3QgYWxsU2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgbGV0IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XHJcblxyXG4gIGlmIChjb21tb25BbmNlc3RvckNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgY29tbW9uQW5jZXN0b3JDb250YWluZXIgPSBjb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuICBpZiAoIWNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSB7XHJcbiAgICByZXR1cm4gYWxsU2VsZWN0ZWQ7XHJcbiAgfVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gY29tbW9uQW5jZXN0b3JDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChxdWVyeVNlbGVjdG9yKTtcclxuICBmb3IgKHZhciBpID0gMCwgZWw7IGVsID0gZWxlbWVudHNbaV07IGkrKykge1xyXG4gICAgLy8gVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2F5cyB0byBpbmNsdWRlIHRoZSBlbGVtZW50IFxyXG4gICAgLy8gZXZlbiBpZiBpdCdzIG5vdCBmdWxseSBzZWxlY3RlZFxyXG4gICAgaWYgKHNlbGVjdGlvbi5jb250YWluc05vZGUoZWwsIHRydWUpKSB7XHJcbiAgICAgIGFsbFNlbGVjdGVkLnB1c2goZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoYWxsU2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgIGNvbnN0IGNsb3Nlc3RFbGVtZW50ID0gc2VsZWN0ZWQuY2xvc2VzdChxdWVyeVNlbGVjdG9yKTtcclxuICAgICAgaWYgKGNsb3Nlc3RFbGVtZW50KSB7XHJcblxyXG4gICAgICAgIGFsbFNlbGVjdGVkLnB1c2goY2xvc2VzdEVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhbGxTZWxlY3RlZDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTm9kZXMoKSB7XHJcbiAgdmFyIG5vZGVzLCByYW5nZTtcclxuICBpZiAodHlwZW9mIHJhbmdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICB9XHJcbiAgaWYgKHJhbmdlLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAvLyBub3RoaW5nIHRvIHdyYXBcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxuICBub2RlcyA9IGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKVxyXG4gIG5vZGVzID0gbm9kZXMubWFwKG5vZGUgPT4ge1xyXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgd2hpbGUgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBSYW5nZVRleHQod3JhcHBlckVsLCByYW5nZSkge1xyXG4gIHZhciBub2Rlcywgd3JhcE5vZGU7XHJcblxyXG4gIGlmICghcmFuZ2UpIHtcclxuICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApXHJcbiAgfVxyXG5cclxuICBpZiAocmFuZ2UuaXNDb2xsYXBzZWQpIHtcclxuICAgIC8vIG5vdGhpbmcgdG8gd3JhcFxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG5cclxuICBpZiAoIXdyYXBwZXJFbCkge1xyXG4gICAgd3JhcHBlckVsID0gJ3NwYW4nXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGFzc3VtZSBpdCdzIGEgdGFnbmFtZVxyXG4gICAgd3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyRWwpO1xyXG4gIH1cclxuXHJcbiAgd3JhcE5vZGUgPSBjcmVhdGVXcmFwcGVyRnVuY3Rpb24od3JhcHBlckVsLCByYW5nZSlcclxuICBub2RlcyA9IGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKTtcclxuICBub2RlcyA9IG5vZGVzLm1hcCh3cmFwTm9kZSk7XHJcbiAgcmV0dXJuIG5vZGVzXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnLCBvcHRpb25zID0ge30pIHtcclxuICBjb25zdCBfb3B0aW9ucyA9IHsgcmVtb3ZlOiB0cnVlIH07XHJcbiAgT2JqZWN0LmFzc2lnbihfb3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuc2V0QmFzZUFuZEV4dGVudChmaXJzdEZsYWcsIDAsIGxhc3RGbGFnLCBsYXN0RmxhZy5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgaWYgKF9vcHRpb25zLnJlbW92ZSkge1xyXG4gICAgW2ZpcnN0RmxhZywgbGFzdEZsYWddLmZvckVhY2goZSA9PiBlLnVud3JhcCgpKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbkZsYWdzKGZpcnN0RWxlbWVudCwgTGFzdEVsZW1lbnQpIHtcclxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgY29uc3QgZmlyc3RGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dC1zZWxlY3Rpb24nKTtcclxuICBmaXJzdEZsYWcuc2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJywgZmlyc3RFbGVtZW50LnRleHRDb250ZW50Lmxlbmd0aCA9PT0gMClcclxuICBjb25zdCBsYXN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgbGFzdEZsYWcuc2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJywgTGFzdEVsZW1lbnQudGV4dENvbnRlbnQubGVuZ3RoID09PSAwKVxyXG5cclxuICBmaXJzdEVsZW1lbnQucHJlcGVuZChmaXJzdEZsYWcpOyAvL1NldCBmbGFnIHRoZSBmaXJzdFxyXG4gIExhc3RFbGVtZW50LmFwcGVuZENoaWxkKGxhc3RGbGFnKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgcmV0dXJuIHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEhUTUwoKSB7XHJcbiAgdmFyIHJhbmdlO1xyXG4gIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKHNlbGVjdGlvbi5mb2N1c05vZGUgPT09IG51bGwpIHJldHVybjtcclxuICAgIHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XHJcbiAgICBpZiAocmFuZ2UuY29sbGFwc2VkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBjb250ZW50ID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICByYW5nZTogcmFuZ2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTZWxlY3Rpb24oKSB7XHJcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoc2VsLmdldFJhbmdlQXQgJiYgc2VsLnJhbmdlQ291bnQpIHtcclxuICAgICAgcmV0dXJuIHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVTZWxlY3Rpb24ocmFuZ2UpIHtcclxuICBpZiAocmFuZ2UpIHtcclxuICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIHJhbmdlLnNlbGVjdCkge1xyXG4gICAgICByYW5nZS5zZWxlY3QoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VSdWxlcyB9IGZyb20gXCIuLi9ydWxlcy9ydWxlc1wiO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldENsb3Nlc3RCbG9ja0VsZW1lbnQgfSBmcm9tIFwiLi9yYW5nZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZWlydENzcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgaW50YWlsU3R5bGUgPSB7fTtcclxuICAgIHZhciBjdXJyZWN0RWxlbWVudCA9IGZyb21FbGVtZW50O1xyXG5cclxuICAgIHdoaWxlIChjdXJyZWN0RWxlbWVudCAmJiBjdXJyZWN0RWxlbWVudC5pc2NoaWxkT2YodG9FbGVtZW50LnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGdldFN0eWxlKGN1cnJlY3RFbGVtZW50KTtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIGluIG1hcCkge1xyXG4gICAgICAgICAgICBpZiAobWFwLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtYXBbc3R5bGVdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dC1kZWNvcmF0aW9uICBjb3VsZCBiZSB0d2ljZSBsaWtlIHVuZGVybGluZSBhbmQgc3RyaWtlIHRoZXJvdWdoLi4gXHJcbiAgICAgICAgICAgICAgICBpZiAoIWludGFpbFN0eWxlW3N0eWxlXSlcclxuICAgICAgICAgICAgICAgICAgICBpbnRhaWxTdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZWN0RWxlbWVudCA9IGN1cnJlY3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW50YWlsU3R5bGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc3R5bGUqPScke2tleX0nXWApKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5zdHlsZVtrZXldID0gZWwuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH0pXHJcbn1cclxuLy9UT0dHTEVcclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVN0eWxlKGVsZW1lbnQsIGtleSwgdmFsdWUsIGlzT24pIHtcclxuICAgIGlmIChpc09uKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldICsgXCIgXCIgKyB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gZWxlbWVudC5zdHlsZVtrZXldLnJlcGxhY2UodmFsdWUsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHt2YWx1ZX0nXWApKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBjaGlsZC5zdHlsZVtrZXldID0gY2hpbGQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShjaGlsZCk7XHJcbiAgICAgICAgbm9ybWFsaXplQ2xhc3NOYW1lKGNoaWxkKTtcclxuICAgIH0pXHJcbn1cclxuLy9FWFRFTkRcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIGpzb25TdHlsZSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4ganNvblN0eWxlKSB7XHJcbiAgICAgICAgaWYgKGpzb25TdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0ganNvblN0eWxlW2tleV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL1RPR0dMRVxyXG4vL1RPRE86IGZpeCBuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgIGlmIChrZXkgPT09IFwiY29sb3JcIikge1xyXG4gICAgICAgIFVzZVJ1bGVzKHsgZWxlbWVudDogZWxlbWVudCwga2V5OiAnY29sb3InLCB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgfSk7XHJcbiAgICAvL2V4cGVyaW1lbnRhbDogc3R5bGUgdGhlIHRleHQgZGVjb3JhdGlvbnMgd2l0aCBjb2xvci4uXHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICAvLyBVc2VSdWxlcyh7ZWxlbWVudDplbGVtZW50LGtleTprZXksdmFsdWU6dmFsdWV9KTtcclxufVxyXG5leHBvcnQgY29uc3QgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCA9IChjb25uZWN0ZWNFbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIHJldHVybiBnZXRJbmhlaXJ0Q3NzKHNlbGVjdGVkRWxlbWVudCwgY29ubmVjdGVjRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShlbGVtZW50KSB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIGlmICghc3R5bGUpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY29sbGVjdFN0eWxlcyA9IGdldFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbGxlY3RTdHlsZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbGxlY3RTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7Y29sbGVjdFN0eWxlc1trZXldfSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBKc29uT2JqZWN0VG9TdHlsZVN0cmluZyhzdHlsZXMpIHtcclxuICAgIGxldCBjb2xsZWN0U3R5bGVzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcclxuICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXNba2V5XTtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5wdXNoKGAke2tleX06JHtzdHlsZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sbGVjdFN0eWxlcy5qb2luKCc7Jyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlKGVsKSB7XHJcbiAgICBpZiAoIWVsIHx8ICFlbC5zdHlsZSkgcmV0dXJuIHt9O1xyXG4gICAgbGV0IHN0eWxlcyA9IHt9O1xyXG4gICAgbGV0IHN0eWxlID0gZWwuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBzdHlsZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbGxlY3RTdHlsZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3RTdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBzdHlsZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleVZhbHVlWzFdICYmIGtleVZhbHVlWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXlWYWx1ZVswXS50cmltKCldID0ga2V5VmFsdWVbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQmxvY2tBbmRTdHlsZUl0KGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgIGxldCBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKGJsb2NrRWxlbWVudCkge1xyXG4gICAgICAgIGJsb2NrRWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgQXJyYXkuZnJvbShibG9ja0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZVtrZXldID0gbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWVyZ2VOb2RlQ29udGVjdCwgbWVyZ2VUd29Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXMvbWVyZ2VyXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbCAtIGVsZW1lbnQgdG8gbm9ybWFsaXplXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudChlbCkge1xyXG4gICAgaWYoIWVsLmlzQ29udGVudEVkaXRhYmxlKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWN1cnNlID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJlY3Vyc2UoY2hpbGQpO1xyXG4gICAgICAgICAgICBfbm9ybWFsaXplKGNoaWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNTdHlsZXMgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSB3cmFwcGVyLm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dEVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlVHdvTm9kZXMod3JhcHBlciwgbmV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlZCB8fCB3cmFwcGVyICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVyZ2VOb2Rlc0NvbnRlbnQgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHdyYXBwZXIgJiYgd3JhcHBlci5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZU5vZGVDb250ZWN0KHdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IG1lcmdlZCB8fCB3cmFwcGVyICE9PSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWVyZ2VkU3R5bGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1lcmdlZENvbnRlbnQgPSBmYWxzZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBfbm9ybWFsaXplKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIG1lcmdlZFN0eWxlcyA9IG1lcmdlTm9kZXNTdHlsZXMoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBtZXJnZWRDb250ZW50ID0gbWVyZ2VOb2Rlc0NvbnRlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9IHdoaWxlIChtZXJnZWRDb250ZW50ICYmIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgICAgIHJlY3Vyc2UoZWwpO1xyXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZShlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICBub3JtYWxpemVDbGFzc05hbWUoZWxlbWVudCk7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIgJiYgKCFlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnVud3JhcCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtBcnJheX0gdGV4dE5vZGVzIC0gdGV4dG5vZGUgdG8gcmVtb3ZlIHRoZSB6ZXJvIHNwYWNlIGxpa2UgOiB1MjAwQlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVplcm9TcGFjZSh0ZXh0Tm9kZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXh0Tm9kZXMpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzID0gW3RleHROb2Rlc107XHJcbiAgICB9XHJcbiAgICB0ZXh0Tm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiVEVYVC1TRUxFQ1RJT05cIikge1xyXG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50LnJlcGxhY2UoL1xcdTIwMEIvZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsZWFuVGV4dCh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHMvZywgXCJcIikucmVwbGFjZSgvW1xcdTIwMEItXFx1MjAwRFxcdUZFRkZdL2csICcnKSBcclxufSIsImltcG9ydCB7IGJsb2NrX2VsbWVudHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Jsb2NrX2VsbXNcIjtcclxuXHJcbmNsYXNzIERvbVV0aWxpcyB7XHJcblxyXG5cclxuICBpc0VsZW1lbnQob2JqKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKG9iai5ub2RlVHlwZSA9PT0gMSkgJiYgKHR5cGVvZiBvYmouc3R5bGUgPT09IFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgKHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gXCJvYmplY3RcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHdyYXAoZWwsIHdyYXBwZXIpIHtcclxuICAgIC8vZWwgc2hvdWxkIGJlIGFycmF5XHJcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xyXG4gICAgICBlbGVtZW50cyA9IGVsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudHMgPSBbZWxdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhcmVudHMgPSBlbGVtZW50cy5tYXAoZSA9PiBlLnBhcmVudE5vZGUpO1xyXG4gICAgdmFyIHBhcmVudHNEaWZmID0gcGFyZW50cy5maWx0ZXIoKHAsIF8sIHNlbGYpID0+IHsgcmV0dXJuIHNlbGZbMF0gIT09IHAgfSk7XHJcbiAgICBpZiAocGFyZW50c0RpZmYubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBbd3JhcF0gZm91bmQgJHtwYXJlbnRzRGlmZi5sZW5ndGh9IGRpZmZlcmVudCBwYXJlbnRzIPCfmIVgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGFyZW50c1swXS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudHNbMF0pXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKF9lbCA9PiB3cmFwcGVyLmFwcGVuZENoaWxkKF9lbCkpXHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEb21VdGlsaXMoKTsgXHJcblxyXG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0U2VsZWN0ZWRFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7aWYobnVsbCE9PWUpe3ZhciB0PWUuYW5jaG9yTm9kZTtpZihudWxsIT09dCl7Zm9yKDszPT09dC5ub2RlVHlwZTspdD10LnBhcmVudE5vZGU7cmV0dXJuIHR9cmV0dXJuIG51bGx9fVxyXG5FbGVtZW50LnByb3RvdHlwZS53cmFwID0gKCB3cmFwcGVyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKSB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyKTtcclxuICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICByYW5nZS5tb3ZlVG9FbGVtZW50VGV4dCh0aGlzKTtcclxuICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMpO1xyXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9IFxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLl9fY2xvc2VzdCA9ZnVuY3Rpb24gKHMpe1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXM7XHJcbiAgICAgIGxldCBhbmNlc3RvciA9IHRoaXM7XHJcbiAgICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGVsKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBpZiAoYW5jZXN0b3IubWF0Y2hlcyhzKSAmJiBhbmNlc3Rvci5pc0NvbnRlbnRFZGl0YWJsZSAmJiAhYmxvY2tfZWxtZW50c1thbmNlc3Rvci5ub2RlTmFtZV0pIHJldHVybiBhbmNlc3RvcjtcclxuICAgICAgICBpZiggYW5jZXN0b3IucGFyZW50RWxlbWVudCAmJiBibG9ja19lbG1lbnRzWyBhbmNlc3Rvci5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lXSl7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnRFbGVtZW50LmlzQ29udGVudEVkaXRhYmxlID8gYW5jZXN0b3IucGFyZW50RWxlbWVudCA6IG51bGw7XHJcbiAgICAgIH0gd2hpbGUgKGFuY2VzdG9yICE9PSBudWxsKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgXHJcbiAgXHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUuaXNjaGlsZE9mID0gZnVuY3Rpb24ocGFyZW50KSB7XHJcbiAgaWYgKCFwYXJlbnQpIHJldHVybiBmYWxzZTtcclxuICBsZXQgbm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcclxuICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmNvbnN0IF93cmFwID0gZnVuY3Rpb24od3JhcHBlcikge1xyXG4gIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gZmFsc2U7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gIHJldHVybiB3cmFwcGVyO1xyXG59XHJcblRleHQucHJvdG90eXBlLndyYXAgPSBfd3JhcDtcclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9IF93cmFwO1xyXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uIChuZXdOb2RlKSB7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlTm9kZSA9IGZ1bmN0aW9uKHJlcGxhY2VtZW50Tm9kZSkge1xyXG4gIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnROb2RlLCB0aGlzKVxyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XHJcbiAgfVxyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLnVud3JhcCA9IGZ1bmN0aW9uKCkge1xyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcylcclxuICB2YXIgZXh0cmFDb250ZW50cyA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gIHRoaXMucmVwbGFjZU5vZGUoZXh0cmFDb250ZW50cylcclxuICByZXR1cm4gZXh0cmFDb250ZW50cztcclxufVxyXG4iLCJpbXBvcnQgRG9tVXRpbGlzIGZyb20gXCIuL0RvbVV0aWxpc1wiXHJcbmltcG9ydCB7IGdldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldENsYXNzZXMsIG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50IH0gZnJvbSBcIi4uL3NlcnZpY2VzL3RleHRFZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uL19hcHAuY29uZmlnLmpzb24nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogICogUmV0dXJucyB0aGUgbmV3IG1lcmdlIGVsZW1lbnRcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBtZXJnZSB3aXRoIGhpcyBmaXJzdCBjaGlsZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1lcmdlTm9kZUNvbnRlY3QgPSBub2RlID0+IHtcclxuXHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQobm9kZSkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBub2RlIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENoaWxkID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlmICghZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdCBjaGlsZCBub3QgZm91bmQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChmaXJzdENoaWxkLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ1ttZXJnZU5vZGVDb250ZWN0XSBmaXJzdENoaWxkIGlzIG5vdCBhIHNwYW4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChub2RlLnRleHRDb250ZW50ICE9PSBmaXJzdENoaWxkLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIHRleHQgY29udGVudCBpcyBkaWZmZXJlbnQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50UHJvcHMgPSB7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKG5vZGUpLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMobm9kZSksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMobm9kZSlcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gX2VsZW1lbnRQcm9wcy5zdHlsZSkge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBfZWxlbWVudFByb3BzLnN0eWxlW3N0eWxlXTtcclxuICAgICAgICBmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSA9IChmaXJzdENoaWxkLnN0eWxlW3N0eWxlXSArIFwiIFwiICsgc3R5bGVWYWx1ZSkudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgbm9ybWFsaXplU3R5bGUoZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIF9lbGVtZW50UHJvcHMuYXR0cnMpIHtcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBfZWxlbWVudFByb3BzLmF0dHJzW2F0dHJdO1xyXG4gICAgICAgIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmaXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoLi4uX2VsZW1lbnRQcm9wcy5jbGFzc2VzKTtcclxuICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShmaXJzdENoaWxkKTtcclxuICAgIG5vcm1hbGl6ZUVsZW1lbnQoZmlyc3RDaGlsZCk7XHJcbiAgICBpZihmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQpXHJcbiAgICBmaXJzdENoaWxkLnBhcmVudEVsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTm9kZXMoZWxlbWVudE9uZSwgZWxlbWVudFR3bykge1xyXG4gICAgaWYgKCFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRPbmUpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnRUd28pKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignb25lIG9mIHRoZSBwcm9wcyBpcyBub3QgZG9tIGVsZW1lbnQuLiwgcGxlYXNlIGluc2VydCB0d28gZWxlbWVudCB0byBtZXJnZS4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudE9uZS5ub2RlTmFtZSAhPT0gXCJTUEFOXCIgfHwgZWxlbWVudFR3by5ub2RlTmFtZSAhPT0gXCJTUEFOXCIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IF9lbGVtZW50c0RhdGEgPSBbe1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50T25lKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRPbmUpLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRPbmUpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHN0eWxlOiBnZXRTdHlsZShlbGVtZW50VHdvKSxcclxuICAgICAgICBjbGFzc2VzOiBnZXRDbGFzc2VzKGVsZW1lbnRUd28pLFxyXG4gICAgICAgIGF0dHJzOiBnZXRBdHRyaWJ1dGVzKGVsZW1lbnRUd28pXHJcbiAgICB9XVxyXG4gICAgY29uc3QgZ2V0Q29tbW9uQ2xhc3NlcyA9IChjbGFzc2VzMSwgY2xhc3NlczIpID0+IHtcclxuICAgICAgICBpZiAoIWNsYXNzZXMxIHx8ICFjbGFzc2VzMilcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGNvbnN0IGMxID0gWy4uLmNsYXNzZXMxXTtcclxuICAgICAgICBjb25zdCBjMiA9IFsuLi5jbGFzc2VzMl07XHJcbiAgICAgICAgcmV0dXJuIGMxLmZpbHRlcihjID0+IGMyLmluY2x1ZGVzKGMpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvbW1vblN0eWxlcyA9IChzdHlsZTEsIHN0eWxlMikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbW1tb25TdHlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gc3R5bGUxKSB7XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUyW3NdKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZTFWYWx1ZXMgPSBzdHlsZTFbc107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlMlZhbHVlcyA9IHN0eWxlMltzXTtcclxuICAgICAgICAgICAgaWYgKHN0eWxlMlZhbHVlcyA9PT0gc3R5bGUxVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tbW9uU3R5bGVzW3NdID0gc3R5bGUyVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21tbW9uU3R5bGVzO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbW1vbmNMYXNzZXMgPSBnZXRDb21tb25DbGFzc2VzKF9lbGVtZW50c0RhdGFbMF0uY2xhc3NlcywgX2VsZW1lbnRzRGF0YVsxXS5jbGFzc2VzKTtcclxuICAgIGNvbnN0IGNvbW1vblN0eWxlcyA9IGdldENvbW1vblN0eWxlcyhfZWxlbWVudHNEYXRhWzBdLnN0eWxlLCBfZWxlbWVudHNEYXRhWzFdLnN0eWxlKTtcclxuICAgIGNvbnN0IGJ1aWxkV3JhcHBpbmdFbGVtZW50ID0gKGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN0eWxlc1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBpbiBjb21tb25TdHlsZXMpXHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGVbc10gPSBjb21tb25TdHlsZXNbc107XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAvLyBoYW5kbGUgY2xhc3Nlc1xyXG4gICAgICAgIGlmIChjb21tb25jTGFzc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLmNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod3JhcHBlci5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd3JhcHBlci5ub3JtYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwcGVyID0gYnVpbGRXcmFwcGluZ0VsZW1lbnQoY29tbW9uU3R5bGVzLCBjb21tb25jTGFzc2VzKTtcclxuICAgIGlmICghd3JhcHBlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ3dyYXBwZXIgaXMgbnVsbCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJFbGVtZW50Q2xhc3NlcyA9IChub2RlLCBjb21tb25jTGFzc2VzKSA9PiB7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShub2RlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudFN0eWxlcyA9IChub2RlLCBjb21tb25TdHlsZXMpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICBub2RlLnN0eWxlW3NdID0gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW2VsZW1lbnRPbmUsIGVsZW1lbnRUd29dO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICBjbGVhckVsZW1lbnRDbGFzc2VzKGUsIGNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIGNsZWFyRWxlbWVudFN0eWxlcyhlLCBjb21tb25TdHlsZXMpO1xyXG4gICAgfSlcclxuXHJcbiAgICBEb21VdGlsaXMud3JhcChlbGVtZW50cywgd3JhcHBlcik7XHJcbiAgICBbLi4ud3JhcHBlci5jaGlsZHJlbl0uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KGMpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbW9uVmFsdWVzT2JqZWN0KG9iajEsIG9iajIpIHtcclxuICAgIGxldCBjb21tb25WYWx1ZXMgPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iajEpIHtcclxuICAgICAgICBpZiAob2JqMltrZXldICYmIG9iajJba2V5XSA9PT0gb2JqMVtrZXldKSB7XHJcbiAgICAgICAgICAgIGNvbW1vblZhbHVlc1trZXldID0gb2JqMVtrZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1vblZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbW9uQXJyYXlzKGFycjEsIGFycjIpIHtcclxuICAgIGNvbnN0IG1lcmdlQXJyID0gW107XHJcbiAgICBBcnJheS5mcm9tKGFycjEpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGFycjIuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbSkgPiAwKSB7XHJcbiAgICAgICAgICAgIG1lcmdlQXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBtZXJnZUFycjtcclxufSIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vRG9tVXRpbGlzXCJcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENzcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEluaGVpcnRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEhUTUwoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCxvcHRpb25zID0ge30pIHtcclxuICAgIGNvbnN0IHt0YWcgPSBcInNwYW5cIn0gPSBvcHRpb25zO1xyXG4gICAgaWYoZnJvbUVsZW1lbnQgPT09IHRvRWxlbWVudCl7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIWZyb21FbGVtZW50LmlzY2hpbGRPZih0b0VsZW1lbnQpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZnJvbUVsZW1lbnQsdG9FbGVtZW50KVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Zyb21FbGVtZW50IG11c3QgYmUgY2hpbGQgb2YgdG9FbGVtZW50JylcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghRG9tVXRpbGlzLmlzRWxlbWVudChmcm9tRWxlbWVudCkgfHwgIURvbVV0aWxpcy5pc0VsZW1lbnQodG9FbGVtZW50KSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Zyb21FbGVtZW50ICYmIHRvRWxlbWVudCBtdXN0IGJlIGRvbSBlbGVtZW50cy4uJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRBdHRycyA9IChmcm9tRWxlbWVudCwgdG9FbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0SW5oZWlydENzcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBhdHRycyA9IGdldEluaGVpcnRBdHRyaWJ1dGVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGdldEluaGVpcnRDbGFzc05hbWVzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKFwiIFwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1tzdHlsZV07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cnMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyc1thdHRyXTtcclxuICAgICAgICAgICAgdGVtcGxhdGUuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgZnJvbUVsZW1lbnQuY3JlYXRlU2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBjZW50ZXJUZW1wbGF0ZSA9IHNldEF0dHJzKGNlbnRlckVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAvL2NlbnRlclxyXG4gICAgY2VudGVyVGVtcGxhdGUuYXBwZW5kQ2hpbGQoZnJvbUVsZW1lbnQpO1xyXG4gICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHZhciByYW5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgLy9sZWZ0XHJcbiAgICByYW5nZS5zZXRTdGFydCh0b0VsZW1lbnQsIDApO1xyXG4gICAgY29uc3QgbGVmdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRTZWxlY3RlZEVsZW1lbnQoKTtcclxuICAgIGNvbnN0IGxlZnRUZW1wbGF0ZSA9IHNldEF0dHJzKGxlZnRFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgdmFyIGxlZnRSYW5nZSA9IHJhbmdlLmV4dHJhY3RDb250ZW50cygpO1xyXG4gICAgbGVmdFRlbXBsYXRlLmFwcGVuZENoaWxkKGxlZnRSYW5nZSk7XHJcbiAgICAvL3JpZ2h0XHJcbiAgICByYW5nZS5zZXRFbmQodG9FbGVtZW50LCB0b0VsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gICAgY29uc3QgcmlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCByaWdodFRlbXBsYXRlID0gc2V0QXR0cnMocmlnaHRFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgdmFyIHJpZ2h0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIHJpZ2h0VGVtcGxhdGUuYXBwZW5kQ2hpbGQocmlnaHRSYW5nZSk7XHJcbiAgICBjb25zdCBzcGxpdCA9IHtcclxuICAgICAgICBsZWZ0OiBsZWZ0VGVtcGxhdGUsXHJcbiAgICAgICAgY2VudGVyOiBjZW50ZXJUZW1wbGF0ZSxcclxuICAgICAgICByaWdodDogcmlnaHRUZW1wbGF0ZVxyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGNvbnN0IGVsIGluIHNwbGl0KSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0W2VsXTtcclxuICAgICAgICB0b0VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0b0VsZW1lbnQudW53cmFwKCk7XHJcbiAgICByZXR1cm4gc3BsaXQ7XHJcblxyXG59IiwiaW1wb3J0IENvcmUgZnJvbSAnLi9TdHlsZUl0L2luZGV4JztcclxuaW1wb3J0ICBNT0RFUyAgZnJvbSAnLi9TdHlsZUl0L2NvbnN0YW50cy9Nb2Rlcy5qc29uJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU3R5bGVJdFxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVJdCB7XHJcbiAgLy9leHBvc2Ugb25seSB0aGUgcmVsZXZhbnQgbWV0aG9kcy4uXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtcclxuICAgIC8vVE9ETzogdmFsaWRhdGUgdGFyZ2V0ICYgY29uZmlnLi5cclxuICAgIGNvbnN0IHN0eWxlSXQgPSBuZXcgQ29yZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICBpZiAoc3R5bGVJdCkgeyAgXHJcbiAgICAgIHRoaXMuZXhlY0NtZCA9IHN0eWxlSXQuZXhlY0NtZDtcclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyA9IHN0eWxlSXQudG9nZ2xlQ2xhc3M7XHJcbiAgICAgIHRoaXMubGluayA9IHN0eWxlSXQubGluaztcclxuICAgICAgdGhpcy51bkxpbmsgPSBzdHlsZUl0LnVuTGluaztcclxuICAgICAgdGhpcy5mb3JtYXRCbG9jayA9IHN0eWxlSXQuZm9ybWF0QmxvY2s7XHJcbiAgICAgIHRoaXMuc2F2ZSA9IHN0eWxlSXQuc2F2ZTtcclxuICAgICAgdGhpcy5sb2FkID0gc3R5bGVJdC5sb2FkO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSBzdHlsZUl0LmRlc3Ryb3k7XHJcbiAgICAgIHRoaXMub24gPSBzdHlsZUl0Lm9uO1xyXG4gICAgICB0aGlzLk1PREVTID0gTU9ERVM7XHJcbiAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgPSB0aGlzLnRvZ2dsZUNsYXNzLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuZXhlY0NtZCA9IHRoaXMuZXhlY0NtZC5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmZvcm1hdEJsb2NrID0gdGhpcy5mb3JtYXRCbG9jay5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLmxpbmsgPSB0aGlzLmxpbmsuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy51bkxpbmsgPSB0aGlzLnVuTGluay5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5sb2FkID0gdGhpcy5sb2FkLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHN0eWxlSXQpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=