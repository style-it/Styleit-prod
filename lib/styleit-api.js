/*!
 * styleit-api
 * StyleIt is a simple text editor API built for Developers. 
 * 
 * @version v1.0.13
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
        this.RenderInnerHTML(element);
        // element.contentEditable = 'true';
        this.plugins = this.usePlugins(element, options);
        return element;
    }
    //TODO: destory events..
    //question: how to use the events ? 
    usePlugins(element, options) {
        return {
            copyPaste: new _services_copyPaste_copyPaste_service__WEBPACK_IMPORTED_MODULE_1__["default"](element),
            inspector: new _services_Inspector_Inspector_service__WEBPACK_IMPORTED_MODULE_2__["default"](element, options.onInspect),
            keyPress: new _services_keyPress_KeyPress__WEBPACK_IMPORTED_MODULE_3__["default"](element, options.onKeyPress)
        }
    }
    RenderInnerHTML(element) {
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









class Core {

    // *target => can be Id of Element that should contain Editor instance or the element itself..
    // *config =>  configuration passed t   o Tool constructor
    //TODO: add target validations..;
    constructor(target, config) {
        this.__config = {
            onInspect: undefined,
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
    Save() {
        return Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["elementToJson"])(this.connectedElement);
    }
    Load(json) {
        return Object(_services_elements_service__WEBPACK_IMPORTED_MODULE_7__["JsonToElement"])(json, this.connectedElement);
    }
    Destroy() {
        this.Connector.Destroy();
        const self = this;
        for (const key in self) {
            const instance = this[key];
            instance = null;
        }
        this.connectedElement = null;
    }
    //TODO: review
    //question : we want to handle and toggle any attribute ? 
    ToggleClass(className, options) {
        //here
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

        this.connectedElement.normalize();
        this.ELEMENTS = [];
        mode = mode ? mode : _constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__.Extend;
        if (!options) options = {};
        if (typeof (options.selection) !== "boolean") options.selection = true;
        if (!this.isValid(key, value)) {
            return;
        }
      
        //==============review===============//
        this.ELEMENTS = Object(_services_range_service__WEBPACK_IMPORTED_MODULE_0__["wrapRangeWithElement"])();
        if (!options.selection) {
            const lastNode = this.ELEMENTS[this.ELEMENTS.length - 1];
            if (lastNode)
                this.caretHolder = this.createCaretPlacement(lastNode);
        }

        if (options.unWrap && Array.isArray(options.unWrap)) {
            options.unWrap.forEach(selector=>{
                this.ELEMENTS.forEach(txtNode=>{
                    const closestElementToUnWrap = txtNode.closest(selector);
                    if(closestElementToUnWrap){
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
        this.dispatchEvent('styleChanged', Object(_services_style_service__WEBPACK_IMPORTED_MODULE_3__["collectStyleFromSelectedElement"])(this.connectedElement));
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

    isValid(key, value) {
        if (!this.connectedElement) {
            console.error('please use connectWith method')
            return false;
        };
        if (this.connectedElement.contentEditable !== "true") {
            return false;
        }
        if (typeof key !== "string" && typeof value !== "string") {
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
/* harmony import */ var _range_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../range.service */ "./src/StyleIt/services/range.service.js");
/* harmony import */ var _textEditor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../textEditor.service */ "./src/StyleIt/services/textEditor.service.js");
/* harmony import */ var _style_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.service */ "./src/StyleIt/services/style.service.js");
/* harmony import */ var _utilis_splitHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilis/splitHTML */ "./src/StyleIt/utilis/splitHTML.js");




// import { elementToJson } from '../elements.service';


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
        this.onPaste = (event) =>{
            debugger
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
                // walkTheDOM(temp, function (node) {
                //   if(node.nodeType === 8) {
                //     node.remove();
                //   }else if(node.nodeName ==="STYLE"){
                //     node.remove();
                //   }
                // });
                walkTheDOM(temp, function (node) {
                  if (!notValid.includes(node.nodeName)) {
                    nodes.push(node);
                  }
                });
                
                const rendered = document.createElement("div");
                document.body.appendChild(rendered);
              
                nodes.forEach((newEl,index) => {
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
                  if(!element.textContent.trim()){
                    element.remove();
                  }else{
                    if(!arr[arr.length -1 ].textContent.trim()){
                      arr[arr.length -1 ].remove();
                    }
                    break;
                  }
                }
                event.preventDefault();
                
                Object(_range_service__WEBPACK_IMPORTED_MODULE_0__["pasteHtmlAtCaret"])(rendered);
                  rendered.remove();
              }
        } 
        // this.onPaste = (e) => {
        //     const stringToHTML = function (str) {
        //         const parser = new DOMParser();
        //         const doc = parser.parseFromString(str, 'text/html');
        //         return doc.body;
        //     };
        //     const clip = e.clipboardData.getData('text/html');
        //     const markup = stringToHTML(clip);
        //     const isLocalElement = markup.querySelector(`.${this.uniqeID}`);
        //     if (isLocalElement) {
        //         pasteHtmlAtCaret(isLocalElement.outerHTML);
        //         let pastedElement = this.target.querySelector(`.${this.uniqeID}`);
        //         if (pastedElement) {
        //             Array.from(pastedElement.querySelectorAll('span')).forEach(child => {
        //                 const style = getStyle(child);
        //                 normalizeStyle(child);
        //                 for (const key in style) {
        //                     if (style.hasOwnProperty(key)) {
        //                         const foundedEl = child.parentElement.closest(`[style*='${key}']`);
        //                         if (foundedEl) {
        //                             splitHTML(child, foundedEl);
        //                         }
        //                     }
        //                 }
        //             });
        //             Array.from(this.target.querySelectorAll(`.${this.uniqeID}`)).forEach(flag => flag.classList.remove(this.uniqeID));
        //             normalizeElement(this.target);
        //         }

        //     }
        //     else {
        //         let paste = (e.clipboardData || window.clipboardData).getData('text');
        //         const selection = window.getSelection();
        //         if (!selection.rangeCount) return false;
        //         selection.deleteFromDocument();
        //         selection.getRangeAt(0).insertNode(document.createTextNode(paste));
        //     }
        //     e.preventDefault();
        // }
        // this.onCopy = (e) => {
        //     //review: what should we can do here... it always array of one element..
        //     const ranges = wrapRangeWithElement();
        //     if(ranges.length === 0){
        //         console.warn('no selected elements..');
        //     }
        //     // set flags to keep text selection..
        //     let nodes = ranges.map(el => {
        //         //clone the nodes and unwrap the wrapped textnodes on the dom..
        //         const collectStyle = getInheirtCss(el, this.target);
        //         setStyles(el, collectStyle);
        //         return el.cloneNode(true);
        //     });
            
        //     const { firstFlag, lastFlag } = setSelectionFlags(ranges[0], ranges[ranges.length - 1]);
        //     ranges.forEach(we => we.unwrap());
            
        //     setSelectionBetweenTwoNodes(firstFlag, lastFlag);
        //     this.target.normalize();

        //     const element = document.createElement('span');

        //     nodes = nodes.reduce(function(filtered, node) {
        //         //TODO: filtered by the valid tags..
        //         if (node.nodeName === "SPAN") {
        //            filtered.push(node.outerHTML);
        //         }
        //         return filtered;
        //       }, []);
        //       element.innerHTML = nodes.join("");
        //     element.className = this.uniqeID;
        //     // this.savedJson = elementToJson(element);
        //     e.clipboardData.setData('text/html', element.outerHTML);
        //     e.preventDefault();
        // }

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
  function wrapRangeWithElement() {
    const ranges = getRanges();
    return ranges.map(r => {
      return wrapRangeText(undefined, r);
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






function splitHTML(fromElement, toElement) {

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
        const template = document.createElement('span');
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
      this.ExecCmd = styleIt.execCmd;
      this.ToggleClass = styleIt.ToggleClass;
      this.Save = styleIt.Save;
      this.Load = styleIt.Load;
      this.Destroy = styleIt.Destroy;
      this.Modes = _StyleIt_constants_Modes_json__WEBPACK_IMPORTED_MODULE_1__;
      //========================================//
      this.ToggleClass = this.ToggleClass.bind(styleIt);
      this.ExecCmd = this.ExecCmd.bind(styleIt);
      this.Save = this.Save.bind(styleIt);
      this.Load = this.Load.bind(styleIt);
      this.Destroy = this.Destroy.bind(styleIt);
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHlsZWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0eWxlaXQvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvY29tcG9uZW50cy9jdXN0b20vdGV4dFNlbGVjdGVkLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L2luZGV4LmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9ydWxlcy9ydWxlcy5qcyIsIndlYnBhY2s6Ly9zdHlsZWl0Ly4vc3JjL1N0eWxlSXQvc2VydmljZXMvSW5zcGVjdG9yL0luc3BlY3Rvci5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9hdHRyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9jb3B5UGFzdGUvY29weVBhc3RlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2VsZW1lbnRzLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3NlcnZpY2VzL2tleVByZXNzL0tleVByZXNzLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9yYW5nZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlLmpzIiwid2VicGFjazovL3N0eWxlaXQvLi9zcmMvU3R5bGVJdC9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9Eb21VdGlsaXMuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9tZXJnZXIuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9TdHlsZUl0L3V0aWxpcy9zcGxpdEhUTUwuanMiLCJ3ZWJwYWNrOi8vc3R5bGVpdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLDZCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLHlEOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNvQjtBQUNBO0FBQ1g7O0FBRXVC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QUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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Q0E7QUFDQSxLQUFLOztBQUVMLElBQUksa0RBQVM7QUFDYjtBQUNBLFFBQVEscUZBQWdCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUN1QjtBQUNNO0FBQ0s7OztBQUc5RDs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0RBQVMsNEJBQTRCLGtEQUFTO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZFQUFhO0FBQ3BDLHNCQUFzQixtRkFBb0I7QUFDMUMsMEJBQTBCLHdGQUFvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNrQjs7QUFFdEM7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQUk7QUFDNUIsa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InN0eWxlaXQtYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMnKS5kZWZhdWx0O1xyXG4iLCJcclxuY2xhc3MgVGV4dFNlbGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpe1xyXG4gICAgICBjb25zdCBjcmVhdGVaZXJvU3BhY2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnemVyby1zcGFjZScpO1xyXG4gICAgICBpZihjcmVhdGVaZXJvU3BhY2UgPT09IFwidHJ1ZVwiKXtcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IFwiJiM4MjAzO1wiO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RleHQtc2VsZWN0aW9uJywgVGV4dFNlbGVjdGlvbik7ICIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vdXRpbGlzL0RvbVV0aWxpc1wiO1xyXG5pbXBvcnQgQ29weVBhc3RlIGZyb20gXCIuL3NlcnZpY2VzL2NvcHlQYXN0ZS9jb3B5UGFzdGUuc2VydmljZVwiO1xyXG5pbXBvcnQgSW5wc2VjdG9yIGZyb20gXCIuL3NlcnZpY2VzL0luc3BlY3Rvci9JbnNwZWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgS2V5UHJlc3MgZnJvbSBcIi4vc2VydmljZXMva2V5UHJlc3MvS2V5UHJlc3NcIjtcclxuXHJcbmltcG9ydCB7IGVsZW1lbnRUb0pzb24sIEpzb25Ub0VsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBDb25uZWN0KGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogdXNlIHRoZSB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChEb21VdGlsaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkLi5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1stXSA9PmNvbm5lY3RXaXRoIHNob3VsZCBiZSBlbGVtZW50IGlkIG9yIGRvbSBlbGVtZW50Li4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuUmVuZGVySW5uZXJIVE1MKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucyA9IHRoaXMudXNlUGx1Z2lucyhlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIC8vVE9ETzogZGVzdG9yeSBldmVudHMuLlxyXG4gICAgLy9xdWVzdGlvbjogaG93IHRvIHVzZSB0aGUgZXZlbnRzID8gXHJcbiAgICB1c2VQbHVnaW5zKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3B5UGFzdGU6IG5ldyBDb3B5UGFzdGUoZWxlbWVudCksXHJcbiAgICAgICAgICAgIGluc3BlY3RvcjogbmV3IElucHNlY3RvcihlbGVtZW50LCBvcHRpb25zLm9uSW5zcGVjdCksXHJcbiAgICAgICAgICAgIGtleVByZXNzOiBuZXcgS2V5UHJlc3MoZWxlbWVudCwgb3B0aW9ucy5vbktleVByZXNzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJlbmRlcklubmVySFRNTChlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlFbGVtZW50ID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGpzb25Db250ZW50ID0gZWxlbWVudFRvSnNvbihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWRFbGVtZW50ID0gSnNvblRvRWxlbWVudChqc29uQ29udGVudCk7XHJcblxyXG4gICAgICAgIGVtcHR5RWxlbWVudChlbGVtZW50KS50aGVuKCgpID0+IGVsZW1lbnQuaW5uZXJIVE1MID0gcmVuZGVyZWRFbGVtZW50LmlubmVySFRNTCk7XHJcbiAgICB9XHJcbiAgICBEZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGx1Z2lucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luc1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luLkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIHdyYXBSYW5nZVdpdGhFbGVtZW50LFxyXG4gICAgc2V0U2VsZWN0aW9uRmxhZ3MsXHJcbiAgICBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMsXHJcbiAgICBnZXRUZXh0Tm9kZXMsXHJcbiAgICBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50LFxyXG4gICAgd3JhcFJhbmdlV2l0aEJsb2NrRWxlbWVudCxcclxuICAgIHNldENhcmV0QXQsXHJcbiAgICBHZXRDbG9zZXN0QmxvY2tFbGVtZW50XHJcbn0gZnJvbSBcIi4vc2VydmljZXMvcmFuZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgTW9kZXMgZnJvbSAnLi9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuL3V0aWxpcy9zcGxpdEhUTUxcIjtcclxuaW1wb3J0IHsgc2V0U3R5bGUsIHRvZ2dsZVN0eWxlLCBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSBcIi4vc2VydmljZXMvc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVFbGVtZW50LCByZW1vdmVaZXJvU3BhY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy90ZXh0RWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2N1c3RvbS90ZXh0U2VsZWN0ZWQnO1xyXG5pbXBvcnQgeyBlbGVtZW50VG9Kc29uLCBKc29uVG9FbGVtZW50LCBnZXRTZWxlY3RlZEVsZW1lbnQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9lbGVtZW50cy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcclxuXHJcbiAgICAvLyAqdGFyZ2V0ID0+IGNhbiBiZSBJZCBvZiBFbGVtZW50IHRoYXQgc2hvdWxkIGNvbnRhaW4gRWRpdG9yIGluc3RhbmNlIG9yIHRoZSBlbGVtZW50IGl0c2VsZi4uXHJcbiAgICAvLyAqY29uZmlnID0+ICBjb25maWd1cmF0aW9uIHBhc3NlZCB0ICAgbyBUb29sIGNvbnN0cnVjdG9yXHJcbiAgICAvL1RPRE86IGFkZCB0YXJnZXQgdmFsaWRhdGlvbnMuLjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5fX2NvbmZpZyA9IHtcclxuICAgICAgICAgICAgb25JbnNwZWN0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlSGFuZGxlcnMgPSB7XHJcbiAgICAgICAgICAgIFtNb2Rlcy5Ub2dnbGVdOiAodiwga2V5LCB2YWx1ZSwgb3B0aW9ucykgPT4gdGhpcy5vblRvZ2dsZSh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSxcclxuICAgICAgICAgICAgW01vZGVzLkV4dGVuZF06ICh2LCBrZXksIHZhbHVlLCBvcHRpb25zKSA9PiB0aGlzLm9uRXh0ZW5kKHYsIGtleSwgdmFsdWUsIG9wdGlvbnMpLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyA/IE9iamVjdC5hc3NpZ24odGhpcy5fX2NvbmZpZywgY29uZmlnKSA6IHRoaXMuX19jb25maWc7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7XHJcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlZDogdGhpcy5jb25maWcub25JbnNwZWN0LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZEVsZW1lbnQgPSB0aGlzLkNvbm5lY3Rvci5Db25uZWN0KHRhcmdldCwgdGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gICAgU2F2ZSgpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudFRvSnNvbih0aGlzLmNvbm5lY3RlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgTG9hZChqc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIEpzb25Ub0VsZW1lbnQoanNvbiwgdGhpcy5jb25uZWN0ZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIERlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5Db25uZWN0b3IuRGVzdHJveSgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlbGYpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzW2tleV07XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRFbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAvL3F1ZXN0aW9uIDogd2Ugd2FudCB0byBoYW5kbGUgYW5kIHRvZ2dsZSBhbnkgYXR0cmlidXRlID8gXHJcbiAgICBUb2dnbGVDbGFzcyhjbGFzc05hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAvL2hlcmVcclxuICAgICAgICBpZiAodHlwZW9mIChjbGFzc05hbWUpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImNsYXNzTmFtZSBtdXN0IGJlIGEgc3RyaW5nLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLnNlbGVjdGlvbikgIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNlbGVjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaXNUb2dnbGVPbiA9ICh0eXBlb2YgKG9wdGlvbnMuaXNPTikgPT09IFwiYm9vbGVhblwiKSA/IG9wdGlvbnMuaXNPTiA6IGVsZW1lbnRzWzBdLmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICBpZiAoIWlzVG9nZ2xlT24pIHtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Q2xhc3MgPSBlbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdENsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0gc3BsaXRIVE1MKGVsLCBjbG9zZXN0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0LmNlbnRlci5yZW1vdmVDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZmlyc3RGbGFnLCBsYXN0RmxhZyB9ID0gb3B0aW9ucy5zZWxlY3Rpb24gPyBzZXRTZWxlY3Rpb25GbGFncyhlbGVtZW50c1swXSwgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0pIDogeyBmaXJzdEZsYWc6IG51bGwsIGxhc3RGbGFnOiBudWxsIH07IC8vU2V0IEZsYWcgYXQgbGFzdFxyXG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy5jb25uZWN0ZWRFbGVtZW50KTsvLyBtZXJnZSBzaWJsaW5ncyBhbmQgcGFyZW50cyB3aXRoIGNoaWxkIGFzIHBvc3NpYmxlLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIGtleSBvZiBjc3MgXHJcbiAgICAqICBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB2YWx1ZSBvZiBjc3NcclxuICAgICogIEBwYXJhbSB7KE9iamVjdCB8IFN0cmluZyl9IE1vZGVzIC0gbW9kZSBmcm9tIE1vZGVzID0+IEV4dGVuZCBvciBUb2dnbGVcclxuICAgICogIEBwYXJhbSB7c3RyaW5nfSBNb2Rlcy5FeHRlbmQgLSBvdmVycmlkZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtzdHJpbmd9IE1vZGVzLnRvZ2dsZSAtIHRvZ2dsZSBzdHlsZVxyXG4gICAgKiAgQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbnMgXHJcbiAgICAqL1xyXG4gICAgZXhlY0NtZChrZXksIHZhbHVlLCBtb2RlLCBvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkRWxlbWVudC5ub3JtYWxpemUoKTtcclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gW107XHJcbiAgICAgICAgbW9kZSA9IG1vZGUgPyBtb2RlIDogTW9kZXMuRXh0ZW5kO1xyXG4gICAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMuc2VsZWN0aW9uKSAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2VsZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZChrZXksIHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLz09PT09PT09PT09PT09cmV2aWV3PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICB0aGlzLkVMRU1FTlRTID0gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoIW9wdGlvbnMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROb2RlID0gdGhpcy5FTEVNRU5UU1t0aGlzLkVMRU1FTlRTLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAobGFzdE5vZGUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmV0SG9sZGVyID0gdGhpcy5jcmVhdGVDYXJldFBsYWNlbWVudChsYXN0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy51bldyYXAgJiYgQXJyYXkuaXNBcnJheShvcHRpb25zLnVuV3JhcCkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy51bldyYXAuZm9yRWFjaChzZWxlY3Rvcj0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKHR4dE5vZGU9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0RWxlbWVudFRvVW5XcmFwID0gdHh0Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihjbG9zZXN0RWxlbWVudFRvVW5XcmFwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEVsZW1lbnRUb1VuV3JhcC51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RoaXMgaXMgaG93IGkgbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24sIGkgZG9udCBrbm93IGlmIHRoaXMgaXMgZ29vZCB3YXksIGJ1dCBpdCB3b3Jrcy4uXHJcbiAgICAgICAgY29uc3QgeyBmaXJzdEZsYWcsIGxhc3RGbGFnIH0gPSBvcHRpb25zLnNlbGVjdGlvbiA/IHNldFNlbGVjdGlvbkZsYWdzKHRoaXMuRUxFTUVOVFNbMF0sIHRoaXMuRUxFTUVOVFNbdGhpcy5FTEVNRU5UUy5sZW5ndGggLSAxXSkgOiB7IGZpcnN0RmxhZzogbnVsbCwgbGFzdEZsYWc6IG51bGwgfTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICAgICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuICAgICAgICByZW1vdmVaZXJvU3BhY2UoZ2V0VGV4dE5vZGVzKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpO1xyXG5cclxuICAgICAgICBsZXQgVG9nZ2xlTW9kZTsvL0RlY2xhcmUgdG9nZ2xlIG1vZGUsIFRoZSBmaXJzdCBlbGVtZW50IGRldGVybWluZXMgd2hldGhlciBpdCBpcyBvbiBvciBvZmZcclxuXHJcbiAgICAgICAgdGhpcy5FTEVNRU5UUy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBUb2dnbGVNb2RlO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm1vZGVIYW5kbGVyc1ttb2RlXShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IE1vZGVzLlRvZ2dsZSAmJiB0eXBlb2YgKFRvZ2dsZU1vZGUpID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIFRvZ2dsZU1vZGUgPSByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpOy8vIG1lcmdlIHNpYmxpbmdzIGFuZCBwYXJlbnRzIHdpdGggY2hpbGQgYXMgcG9zc2libGUuLiBcclxuICAgICAgICAvL3VzZSB0aGUgZmlyc3QgYW5kIGxhc3QgZmxhZ3MgdG8gbWFrZSB0aGUgdGV4dCBzZWxlY3Rpb24gYW5kIHVud3JhcCB0aGVtLi5cclxuICAgICAgICBpZiAoZmlyc3RGbGFnICYmIGxhc3RGbGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWwucmVtb3ZlQWxsUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZXRIb2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldENhcmV0QXQodGhpcy5jYXJldEhvbGRlciwgdGhpcy5jYXJldEhvbGRlci50ZXh0Q29udGVudC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJldEhvbGRlci51bndyYXAoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZXRIb2xkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnc3R5bGVDaGFuZ2VkJywgY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLmNvbm5lY3RlZEVsZW1lbnQpKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNhcmV0UGxhY2VtZW50KGF0Tm9kZSkge1xyXG4gICAgICAgIGlmICghYXROb2RlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBjYXJldEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgICAgICAgY2FyZXRIb2xkZXIuc2V0QXR0cmlidXRlKCd6ZXJvLXNwYWNlJywgJ3RydWUnKTtcclxuICAgICAgICBhdE5vZGUuYXBwZW5kQ2hpbGQoY2FyZXRIb2xkZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJldEhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSlcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdKHBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgb25Ub2dnbGUoZWxlbWVudCwga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZXRlY3QgaWYgdGhlcmUgaXMgYW55IHBhcmVudCB3aXRoIHN0eWxlIHRvIHNwbGl0LlxyXG4gICAgICAgICAgICAvL1RPRE86IHVzZSB0aGUgY2F0Y2ggZnJvbSBvcHRpb25zIHRvIGRldGVjdCBtb3JlIHRoYW4gb25lIHN0eWxlIG9yIHRhZyBlbGVtZW50LlxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvU3BsaXQgPSBlbGVtZW50LmNsb3Nlc3QoYFtzdHlsZSo9JyR7dmFsdWV9J11gKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb1NwbGl0ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnRUb1NwbGl0KS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRUb1NwbGl0LnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaW5uZXJTcGFuLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uVG9nZ2xlKGVsZW1lbnQsIGtleSwgdmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9TcGxpdCAmJiBlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25PZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vdW5ib2xkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEVsZW1lbnRzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHNwbGl0IGVsZW1lbnRzLCBpdHMgZXJyb3IhXHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3BsaXRIVE1MIHJldHVybiBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChvcHRpb25zLm9uT2ZmKSA9PT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT2ZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAob3B0aW9ucy5vbk9mZikgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbk9mZiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zLm9uT2ZmKTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uT2ZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja1N0eWxlKG9wdGlvbnMsIGVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1NwbGl0ID0gZWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke2tleX0nXWApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvU3BsaXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0QmxvY2tzID0gc3BsaXRIVE1MKGVsZW1lbnQsIGVsZW1lbnRUb1NwbGl0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdEJsb2Nrcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0QmxvY2tzLmNlbnRlciwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU3BsaXQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy50YXJnZXQgIT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbm5lclNwYW4gPSBjcmVhdGVJbm5lcldyYXBwZXJFbGVtZW50KGVsZW1lbnRUb1NwbGl0LCB7IGVsOiAnc3BhbicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUoaW5uZXJTcGFuLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9TcGxpdC5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbkV4dGVuZChlbGVtZW50LCBrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50VG9TcGxpdCAhPT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0RWxlbWVudHMgPSBzcGxpdEhUTUwoZWxlbWVudCwgZWxlbWVudFRvU3BsaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHNwbGl0RWxlbWVudHMuY2VudGVyLCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzcGxpdEhUTUwgcmV0dXJuIG51bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgIT09IFwiYmxvY2tcIiAmJiBvcHRpb25zLnRhcmdldCA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0VsZW1lbnQgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRWxlbWVudCAmJiBibG9ja0VsZW1lbnQuaXNjaGlsZE9mKHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShwYXJlbnRFbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC53cmFwKHdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxlKHdyYXBwZXIsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY3JlYXRlQmxvY2tTdHlsZShvcHRpb25zLCBlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZmluZEJsb2NrID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKGNvbXB1dGVkICYmIGNvbXB1dGVkLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZSAhPT0gdGhpcy5jb25uZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZEJsb2NrKGVsZW1lbnQucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zLmFzID09PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja0VsZW1lbnQgPSBmaW5kQmxvY2soZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChibG9ja0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZSA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUud3JhcChzcGFuKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVJbmxpbmVTdHlsZSA9IChwYXJlbnROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5zdHlsZVtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHBhcmVudE5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBUZXh0Tm9kZVdpdGhBcHBlbmRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIG5vZGUubm9kZU5hbWUgIT09IFwiQlJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wdXRlZC5kaXNwbGF5ICE9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSW5saW5lU3R5bGUoYmxvY2tFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIC8vIEFycmF5LmZyb20oYmxvY2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKS5mb3JFYWNoKGVsPT5lbC5zdHlsZVtrZXldID0gdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCbG9ja0VsQW5kU3R5bGVJdChrZXksIHZhbHVlLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmxvY2tFbGVtZW50ID0gZmluZEJsb2NrKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBibG9ja0VsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShibG9ja0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZVtrZXldID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJsb2NrRWxBbmRTdHlsZUl0KGtleSwgdmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBwYXJnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBhcmdoLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBlbGVtZW50LndyYXAocGFyZ2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3BsZWFzZSB1c2UgY29ubmVjdFdpdGggbWV0aG9kJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkRWxlbWVudC5jb250ZW50RWRpdGFibGUgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgKHNlbGVjdGVkRWxlbWVudC5pc2NoaWxkT2YodGhpcy5jb25uZWN0ZWRFbGVtZW50KSB8fCBzZWxlY3RlZEVsZW1lbnQgPT09IHRoaXMuY29ubmVjdGVkRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gXCIuLi91dGlsaXMvc3BsaXRIVE1MXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcblxyXG4vL1RPRE86cmV2aWV3XHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VSdWxlcyhkYXRhKSB7XHJcbiAgICBjb25zdCBDb2xvclRleHREZWNvcmF0aW9uUnVsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEua2V5ID09PSBcImNvbG9yXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBkYXRhLmVsZW1lbnQuY2xvc2VzdChgW3N0eWxlKj0ndGV4dC1kZWNvcmF0aW9uJ11gKTtcclxuICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdHMgPSBzcGxpdEhUTUwoZGF0YS5lbGVtZW50LCB0ZXh0RGVjb3JhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsZShzcGxpdHMuY2VudGVyLCAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJywgYCR7ZGF0YS52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzcGxpdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNwbGl0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGUodGV4dERlY29yYXRpb24sICd0ZXh0LWRlY29yYXRpb24tY29sb3InLCBgJHtkYXRhLnZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgUnVsZXMgPSBbXHJcbiAgICAgICAgQ29sb3JUZXh0RGVjb3JhdGlvblJ1bGVcclxuICAgIF1cclxuICAgIFJ1bGVzLmZvckVhY2gocnVsZSA9PiBydWxlKGRhdGEpKTtcclxufSIsIlxyXG5pbXBvcnQgeyBjb2xsZWN0U3R5bGVGcm9tU2VsZWN0ZWRFbGVtZW50IH0gZnJvbSAnLi4vc3R5bGUuc2VydmljZSc7XHJcblxyXG5cclxuLy9UT0RPOiByZXZpZXdcclxuLy9xdWVzdGlvbjogaG93IGNhbiB3ZSBleHBvc2UgdGhlIGNvbGxlY3RlZFN0eWxlID8gXHJcbi8vcXVlc3Rpb246IHNob3VsZCB3ZSB1c2UgdGhpcyA/IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NdXRhdGlvbk9ic2VydmVyXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHNlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9uSW5zcGVjdCkge1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gSW5wc2VjdG9yID0+IHRhcmdldCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IHVzZSB0aGUgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5vbkluc3BlY3QgPSBvbkluc3BlY3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhdW5jaEluc3BlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gY29sbGVjdFN0eWxlRnJvbVNlbGVjdGVkRWxlbWVudCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub25JbnNwZWN0KSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkluc3BlY3QoY29sbGVjdGVkU3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogcmV2aWV3XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDggJiYgdGhpcy50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoIDw9IDEgJiYgIXRoaXMudGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGF1bmNoSW5zcGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxhdW5jaEluc3BlY3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuLy9jbGFzcyBhbmQgc3R5bGUgbm90IGluY2x1ZGVzIHlldC4uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KSB7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIHZhciBhdHRycyA9IGN1cnJlY3RFbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYoYXR0cnNbaV0ubmFtZSAgIT09XCJjbGFzc1wiICYmIGF0dHJzW2ldLm5hbWUgICE9PSBcInN0eWxlXCIpe1xyXG4gICAgICAgICAgICAgICAgaWYoIWF0dHJpYnV0ZXNbYXR0cnNbaV0ubmFtZSBdKXtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGN1cnJlY3RFbGVtZW50ID0gY3VycmVjdEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QXR0cmlidXRlcyhlbGVtZW50LGdldEFsbCl7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgdmFyIGF0dHJzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgZm9yKHZhciBpID0gYXR0cnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZihnZXRBbGwgIHx8ICghZ2V0QWxsICYmIGF0dHJzW2ldLm5hbWUgICE9PVwiY2xhc3NcIiAmJiBhdHRyc1tpXS5uYW1lICAhPT0gXCJzdHlsZVwiKSl7XHJcbiAgICAgICAgICAgIGlmKCFhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSl7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzW2F0dHJzW2ldLm5hbWUgXSA9IGF0dHJzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQXR0cnMoZWxlbWVudCl7XHJcbiAgICAgIGlmKGVsZW1lbnQgJiYgIWVsZW1lbnQuYXR0cmlidXRlcyl7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZWxlbWVudCBub3QgaGF2ZSBhdHRyaWJ1dGVzLi5cIik7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cj0+ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSkpXHJcbiAgfSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5oZWlydENsYXNzTmFtZXMoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSBbXTtcclxuICAgIHZhciBfcGFyZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoX3BhcmVudCAmJiBfcGFyZW50LmlzY2hpbGRPZih0b0VsZW1lbnQucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICBsZXQgbWFwID0gX3BhcmVudC5jbGFzc0xpc3Q7XHJcbiAgICAgICAgQXJyYXkuZnJvbShtYXApLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzLmZpbmRJbmRleChjID0+IGMgPT09IG5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBfcGFyZW50ID0gX3BhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzZXMoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jbGFzc0xpc3QpO1xyXG59XHJcblxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBpcyBleHBlbnNpdmUgdG9vIG11Y2g/IFxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpIHtcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUVtcHR5Q2xhc3MoZWxlbWVudCl7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhcihlbGVtZW50KSB7XHJcbiAgICAgICAgcmVtb3ZlRW1wdHlDbGFzcyhlbGVtZW50KTtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2xhc3NMaXN0KS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2NsYXNzPScke2N9J11gKSkuZm9yRWFjaChub2RlID0+e1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGMpXHJcbiAgICAgICAgICAgICAgICByZW1vdmVFbXB0eUNsYXNzKG5vZGUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bY2xhc3NdJykpLmNvbmNhdChlbGVtZW50KTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goY2hpbGQgPT4gY2xlYXIoY2hpbGQpKTtcclxufVxyXG4vL1RPRE86IHJldmlld1xyXG4vL3F1ZXN0aW9uOiBob3cgYWJvdXQgdGhpcyBuYW1lID8gXHJcbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSl7XHJcbmNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYFtjbGFzcz0nJHtjbGFzc05hbWV9J11gKSkuY29uY2F0KHRoaXMpO1xyXG5ub2Rlcy5mb3JFYWNoKG5vZGU9Pm5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcclxufSIsIlxyXG5pbXBvcnQgeyB3cmFwUmFuZ2VXaXRoRWxlbWVudCwgc2V0U2VsZWN0aW9uRmxhZ3MsIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcywgcGFzdGVIdG1sQXRDYXJldH0gZnJvbSAnLi4vcmFuZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tICcuLi90ZXh0RWRpdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q3NzLCBzZXRTdHlsZXMsIGdldFN0eWxlLCBub3JtYWxpemVTdHlsZSB9IGZyb20gJy4uL3N0eWxlLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBlbGVtZW50VG9Kc29uIH0gZnJvbSAnLi4vZWxlbWVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IHNwbGl0SFRNTCB9IGZyb20gJy4uLy4uL3V0aWxpcy9zcGxpdEhUTUwnO1xyXG5cclxuLy9UT0RPOnJldmlld1xyXG4vL3Nob3VsZCB3ZSB1c2UgdGhlIGNsaXBib2FyZCBhcyBzdHJpbmcgPyBvciBwYXNzIGluIG90aGVyIHdheSBhcyBqc29uID8gXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcHlQYXN0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnVuaXFlSUQgPSAnc3R5bGVpdC1jb3B5LXBhc3RlLW9uLWFjdGlvbic7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgLy9UT0RPOiB1c2UgdGhlIHZhbGlkYXRvclxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0gQ29weSBQYXN0ZSA9PiB0YXJnZXQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5vblBhc3RlID0gKGV2ZW50KSA9PntcclxuICAgICAgICAgICAgZGVidWdnZXJcclxuICAgICAgICAgICAgZnVuY3Rpb24gd2Fsa1RoZURPTShub2RlLCBmdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHdhbGtUaGVET00obm9kZSwgZnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gdGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudGFyZ2V0LmlkfWApO1xyXG4gICAgICAgICAgICAgIGlmIChibG9jaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcCA9IGRhdGEuZ2V0RGF0YSgndGV4dC9odG1sJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNsaXAgPSBkYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKS50cmltKCk7ICAgIFxyXG4gICAgICAgICAgICAgICAgICBjbGlwID0gY2xpcC5yZXBsYWNlKC9cXG4vZywgXCI8YnIvPlwiKSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IHJlZ2V4IGFsbCB0b2doZXRlciFcclxuICAgICAgICAgICAgICAgIGxldCBtYXJrdXAgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgW1wiPGh0bWw+XCIsIFwiPGJvZHk+XCIsIFwiPCEtLVN0YXJ0RnJhZ21lbnQtLT5cIiwgXCI8IS0tRW5kRnJhZ21lbnQtLT5cIiwgXCI8L2JvZHk+XCIsIFwiPC9odG1sPlwiXS5cclxuICAgICAgICAgICAgICAgICAgZm9yRWFjaChyZXAgPT4gbWFya3VwID0gbWFya3VwLnJlcGxhY2UocmVwLCBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHRlbXAuaW5uZXJIVE1MID0gbWFya3VwLnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT4vZywgXCJcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIEV4YW1wbGUgdXNhZ2U6IFByb2Nlc3MgYWxsIFRleHQgbm9kZXMgb24gdGhlIHBhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdFZhbGlkID0gW1wiTUVUQVwiLCBcIkxJTktcIiwgXCJTQ1JJUFRcIiwgXCJUQ1hTUEFOXCIsIFwiTzpQXCIsIFwiU1RZTEVcIl07XHJcbiAgICAgICAgICAgICAgICAvLyB3YWxrVGhlRE9NKHRlbXAsIGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGlmKG5vZGUubm9kZVR5cGUgPT09IDgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBub2RlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICB9ZWxzZSBpZihub2RlLm5vZGVOYW1lID09PVwiU1RZTEVcIil7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB3YWxrVGhlRE9NKHRlbXAsIGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghbm90VmFsaWQuaW5jbHVkZXMobm9kZS5ub2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBub2Rlcy5mb3JFYWNoKChuZXdFbCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZW5kZXJlZC5hcHBlbmRDaGlsZChuZXdFbCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChuZXdFbC50ZXh0Q29udGVudCAmJiBuZXdFbC5ub2RlVHlwZSA9PT0gMSAmJiBuZXdFbC5ub2RlTmFtZSAhPT0gXCJiclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShuZXdFbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVkLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFbC5pbnNlcnRBZnRlcihicik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmIChuZXdFbC5ub2RlVHlwZSAhPT0gMyAmJiBuZXdFbC5ub2RlTmFtZSAhPT0gXCJCUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gQXJyYXkuZnJvbShyZW5kZXJlZC5jaGlsZE5vZGVzKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICBpZighZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFhcnJbYXJyLmxlbmd0aCAtMSBdLnRleHRDb250ZW50LnRyaW0oKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnJbYXJyLmxlbmd0aCAtMSBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFzdGVIdG1sQXRDYXJldChyZW5kZXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcmVkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIC8vIHRoaXMub25QYXN0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHN0cmluZ1RvSFRNTCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gZG9jLmJvZHk7XHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGNsaXAgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9odG1sJyk7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IG1hcmt1cCA9IHN0cmluZ1RvSFRNTChjbGlwKTtcclxuICAgICAgICAvLyAgICAgY29uc3QgaXNMb2NhbEVsZW1lbnQgPSBtYXJrdXAucXVlcnlTZWxlY3RvcihgLiR7dGhpcy51bmlxZUlEfWApO1xyXG4gICAgICAgIC8vICAgICBpZiAoaXNMb2NhbEVsZW1lbnQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHBhc3RlSHRtbEF0Q2FyZXQoaXNMb2NhbEVsZW1lbnQub3V0ZXJIVE1MKTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBwYXN0ZWRFbGVtZW50ID0gdGhpcy50YXJnZXQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy51bmlxZUlEfWApO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHBhc3RlZEVsZW1lbnQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBBcnJheS5mcm9tKHBhc3RlZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShjaGlsZCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVN0eWxlKGNoaWxkKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRlZEVsID0gY2hpbGQucGFyZW50RWxlbWVudC5jbG9zZXN0KGBbc3R5bGUqPScke2tleX0nXWApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZGVkRWwpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRIVE1MKGNoaWxkLCBmb3VuZGVkRWwpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy50YXJnZXQucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy51bmlxZUlEfWApKS5mb3JFYWNoKGZsYWcgPT4gZmxhZy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudW5pcWVJRCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBwYXN0ZSA9IChlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGEpLmdldERhdGEoJ3RleHQnKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghc2VsZWN0aW9uLnJhbmdlQ291bnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIHNlbGVjdGlvbi5kZWxldGVGcm9tRG9jdW1lbnQoKTtcclxuICAgICAgICAvLyAgICAgICAgIHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApLmluc2VydE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFzdGUpKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMub25Db3B5ID0gKGUpID0+IHtcclxuICAgICAgICAvLyAgICAgLy9yZXZpZXc6IHdoYXQgc2hvdWxkIHdlIGNhbiBkbyBoZXJlLi4uIGl0IGFsd2F5cyBhcnJheSBvZiBvbmUgZWxlbWVudC4uXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJhbmdlcyA9IHdyYXBSYW5nZVdpdGhFbGVtZW50KCk7XHJcbiAgICAgICAgLy8gICAgIGlmKHJhbmdlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS53YXJuKCdubyBzZWxlY3RlZCBlbGVtZW50cy4uJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgLy8gc2V0IGZsYWdzIHRvIGtlZXAgdGV4dCBzZWxlY3Rpb24uLlxyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZXMgPSByYW5nZXMubWFwKGVsID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vY2xvbmUgdGhlIG5vZGVzIGFuZCB1bndyYXAgdGhlIHdyYXBwZWQgdGV4dG5vZGVzIG9uIHRoZSBkb20uLlxyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29sbGVjdFN0eWxlID0gZ2V0SW5oZWlydENzcyhlbCwgdGhpcy50YXJnZXQpO1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0U3R5bGVzKGVsLCBjb2xsZWN0U3R5bGUpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGVsLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICBjb25zdCB7IGZpcnN0RmxhZywgbGFzdEZsYWcgfSA9IHNldFNlbGVjdGlvbkZsYWdzKHJhbmdlc1swXSwgcmFuZ2VzW3Jhbmdlcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgLy8gICAgIHJhbmdlcy5mb3JFYWNoKHdlID0+IHdlLnVud3JhcCgpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHNldFNlbGVjdGlvbkJldHdlZW5Ud29Ob2RlcyhmaXJzdEZsYWcsIGxhc3RGbGFnKTtcclxuICAgICAgICAvLyAgICAgdGhpcy50YXJnZXQubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgICAgICAvLyAgICAgbm9kZXMgPSBub2Rlcy5yZWR1Y2UoZnVuY3Rpb24oZmlsdGVyZWQsIG5vZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vVE9ETzogZmlsdGVyZWQgYnkgdGhlIHZhbGlkIHRhZ3MuLlxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IFwiU1BBTlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKG5vZGUub3V0ZXJIVE1MKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmaWx0ZXJlZDtcclxuICAgICAgICAvLyAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgLy8gICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBub2Rlcy5qb2luKFwiXCIpO1xyXG4gICAgICAgIC8vICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMudW5pcWVJRDtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5zYXZlZEpzb24gPSBlbGVtZW50VG9Kc29uKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9odG1sJywgZWxlbWVudC5vdXRlckhUTUwpO1xyXG4gICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMub25QYXN0ZSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIHRoaXMub25Db3B5KTtcclxuICAgIH1cclxuICAgIERlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLm9uUGFzdGUpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvcHknLCB0aGlzLm9uQ29weSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0U3R5bGUsIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nIH0gZnJvbSBcIi4vc3R5bGUuc2VydmljZVwiO1xyXG5pbXBvcnQgTGV2ZWxzIGZyb20gJy4uL2NvbnN0YW50cy9MZXZlbHMuanNvbic7XHJcblxyXG5leHBvcnQgIGZ1bmN0aW9uIHdhbGtUaGVET00obm9kZSwgZnVuYykge1xyXG4gICAgaWYoIW5vZGUpIHJldHVybiBudWxsO1xyXG4gICAgZnVuYyhub2RlKTtcclxuICAgIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcbiAgICB3aGlsZSAobm9kZSkge1xyXG4gICAgICB3YWxrVGhlRE9NKG5vZGUsIGZ1bmMpO1xyXG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEVsZW1lbnQoKSB7XHJcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICB2YXIgYW5jTm9kZSA9IG5vZGUuZXh0ZW50Tm9kZTtcclxuICAgICAgICBpZiAoYW5jTm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoYW5jTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgYW5jTm9kZSA9IGFuY05vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBlbCA9IChhbmNOb2RlLm5vZGVUeXBlID09PSAzID8gYW5jTm9kZS5wYXJlbnROb2RlIDogbm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmNOb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gSnNvblRvRWxlbWVudChqc29uT2JqZWN0LCBwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAvL1RPRE86IGNyZWF0ZSBwYXJlbnRlbGVtZW50IGFuZCBqc29ub2JqZWN0IHZhbGlkYXRpb24gICBcclxuICAgIGNvbnN0IHJlbmRlckF0dHJzID0gKGpzRWxlbWVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmIChqc0VsZW1lbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gWy4uLmpzRWxlbWVudC5jbGFzc0xpc3RdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoanNFbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3RlZFN0eWxlID0gSnNvbk9iamVjdFRvU3R5bGVTdHJpbmcoanNFbGVtZW50LnN0eWxlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbGxlY3RlZFN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1RPRE86IG90aGVyIGF0dHJzLi4uXHJcbiAgICB9XHJcbiAgICBjb25zdCBjcmVhdGVIdG1sRWxlbWVudCA9IChqc0VsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlVHlwZSA9IGpzRWxlbWVudC50YWc7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IGlzU2hvdWxkUmVuZGVyQXR0cnM7XHJcbiAgICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiI3RleHRcIjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShqc0VsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmhyZWYgPSBqc0VsZW1lbnQuaHJlZjtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0ID0ganNFbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU2hvdWxkUmVuZGVyQXR0cnMgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZW5kZXJBdHRycyhqc0VsZW1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICghcGFyZW50RWxlbWVudCAmJiBqc29uT2JqZWN0LnR5cGUgPT09IExldmVsc1snMCddKSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGNyZWF0ZUh0bWxFbGVtZW50KGpzb25PYmplY3QpO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdC5jaGlsZHJlbikpIHtcclxuICAgICAgICBqc29uT2JqZWN0LmNoaWxkcmVuLmZvckVhY2goanNDaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gY3JlYXRlSHRtbEVsZW1lbnQoanNDaGlsZCk7XHJcbiAgICAgICAgICAgIGlmIChodG1sRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChodG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBKc29uVG9FbGVtZW50KGpzQ2hpbGQsIGh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbnQgY3JlYXRlIGRvbSBlbGVtZW50IGZyb20ganNvbicsIGpzQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFRvSnNvbihub2RlLCBsZXZlbCkge1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIChsZXZlbCkgIT09IFwibnVtYmVyXCIpIGxldmVsID0gMDtcclxuICAgIGNvbnN0IG5vZGVUeXBlID0gbm9kZS5ub2RlTmFtZTtcclxuICAgIGxldCBpc1Nob3VsZFJlbmRlckF0dHJzID0gdHJ1ZTtcclxuICAgIGxldCBqc29uID0ge307XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKExldmVsc1tsZXZlbF0pIHtcclxuICAgICAgICBqc29uLnR5cGUgPSBMZXZlbHNbbGV2ZWxdO1xyXG4gICAgICAgIGxldmVsKys7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCIjdGV4dFwiOlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICBqc29uLnRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHUyMDBCL2csICcnKTtcclxuICAgICAgICAgICAgaXNTaG91bGRSZW5kZXJBdHRycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3F1ZXN0aW9uOiByZXBsYWNlIFxcbiA/XHJcbiAgICAgICAgICAgIGlmICghanNvbi50ZXh0Q29udGVudC50cmltKCkpIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIkFcIjpcclxuICAgICAgICAgICAganNvbi50YWcgPSBub2RlVHlwZTtcclxuICAgICAgICAgICAganNvbi5ocmVmID0gbm9kZS5ocmVmO1xyXG4gICAgICAgICAgICBqc29uLnRhcmdldCA9IG5vZGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBqc29uLnRhZyA9IG5vZGVUeXBlO1xyXG4gICAgICAgICAgICAvL1RPRE86IHNob3VsZCB3ZSB1bndyYXAgdGhpcyBub2RlID8gXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChpc1Nob3VsZFJlbmRlckF0dHJzKSB7XHJcbiAgICAgICAgLy9UT0RPOiBnZXQgYXR0cnMgXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRTdHlsZShub2RlKTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3R5bGUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAganNvbi5zdHlsZSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5jbGFzc0xpc3QgJiYgbm9kZS5jbGFzc0xpc3QubGVuZ3RoID4gMClcclxuICAgICAgICAgICAganNvbi5jbGFzc0xpc3QgPSBbLi4ubm9kZS5jbGFzc0xpc3RdO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzICYmIG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBqc29uLmNoaWxkcmVuID0gWy4uLm5vZGUuY2hpbGROb2Rlc10ubWFwKChjbikgPT4gZWxlbWVudFRvSnNvbihjbiwgbGV2ZWwpKS5maWx0ZXIodiA9PiB2KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ganNvbjtcclxuXHJcbn0iLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVByZXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwga2V5cykge1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbLV0ga2V5UHJlc3MgPT4gdGFyZ2V0IGlzIG51bGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWy1dIGtleVByZXNzID0+IGtleXMgbXVzdCBiZSBhbiBhcnJheVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2V5cyA9IGtleXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmtleXByZXNzID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuY3RybEtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpICYmIGtleS5sZW5ndGggPT09IDIgJiYga2V5WzBdID09PSBlLmtleUNvZGUgJiYgdHlwZW9mKGtleVsxXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVsxXSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5cHJlc3MpO1xyXG5cclxuICAgICAgICB0aGlzLkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleXByZXNzKTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5uZXJXcmFwcGVyRWxlbWVudChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiAob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIG9wdGlvbnMgPSB7fTtcclxuICBsZXQgaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLmVsIHx8IFwic3BhblwiKTtcclxuICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2RlcykuZm9yRWFjaChjaGlsZCA9PiBpbm5lclNwYW4uYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyU3Bhbik7XHJcbiAgcmV0dXJuIGlubmVyU3BhbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q2xvc2VzdEJsb2NrRWxlbWVudChlbGVtZW50KSB7XHJcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwiYmxvY2tcIikgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgbGV0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgd2hpbGUgKHBhcmVudEVsZW1lbnQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50RWxlbWVudCkuZGlzcGxheSAhPT0gXCJibG9ja1wiKSB7XHJcbiAgICBpZiAocGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XHJcbn1cclxuLy9UT0RPOnJldmlld1xyXG4gIGV4cG9ydCBmdW5jdGlvbiB3cmFwUmFuZ2VXaXRoQmxvY2tFbGVtZW50KGxpbWl0RWxlbWVudCkge1xyXG4gICAgY29uc3Qgd3JhcEVsZW1lbnRXaXRoQmxvY2sgPSAoZWwpID0+e1xyXG4gICAgICBsZXQgd0VsID0gXCJkaXZcIjtcclxuICAgICAgaWYoZWwubm9kZU5hbWUgPT09IFwiU1BBTlwiKXtcclxuICAgICAgICB3RWwgPSBcInBcIjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3RWwpO1xyXG4gICAgICBlbC53cmFwKHdyYXBwZXIpO1xyXG4gICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgICBsZXQgbm9kZXMgPSB3cmFwUmFuZ2VXaXRoRWxlbWVudCgpO1xyXG4gICAgbm9kZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGNvbnN0IGJsb2NrRWwgPSBHZXRDbG9zZXN0QmxvY2tFbGVtZW50KGVsKTtcclxuICAgICAgaWYgKGJsb2NrRWwpIHtcclxuICAgICAgICBpZiggYmxvY2tFbC5pc2NoaWxkT2YobGltaXRFbGVtZW50KSl7XHJcbiAgICAgICAgICBjb25zdCBmb3VuZGVkID0gZWxlbWVudHMuZmluZChibG9jaz0+YmxvY2tFbC5pc2NoaWxkT2YoYmxvY2spKTtcclxuICAgICAgICAgIGlmKCFmb3VuZGVkKVxyXG4gICAgICAgICAgZWxlbWVudHMucHVzaChibG9ja0VsKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGNvbnN0IF93cmFwcGVyID0gd3JhcEVsZW1lbnRXaXRoQmxvY2soZWwpO1xyXG4gICAgICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgY29uc3QgX3dyYXBwZXIgPSB3cmFwRWxlbWVudFdpdGhCbG9jayhlbCk7XHJcbiAgICAgICAgZWxlbWVudHMucHVzaChfd3JhcHBlcik7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vZGVzOiBub2RlcyxcclxuICAgICAgYmxvY2tzOiBlbGVtZW50c1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlV2l0aEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCByYW5nZXMgPSBnZXRSYW5nZXMoKTtcclxuICAgIHJldHVybiByYW5nZXMubWFwKHIgPT4ge1xyXG4gICAgICByZXR1cm4gd3JhcFJhbmdlVGV4dCh1bmRlZmluZWQsIHIpO1xyXG4gICAgfSkuZmxhdCgpO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZ2VzKCkge1xyXG4gICAgbGV0IHJhbmdlcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbC5yYW5nZUNvdW50OyBpKyspIHtcclxuICAgICAgcmFuZ2VzW2ldID0gc2VsLmdldFJhbmdlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmFuZ2VzO1xyXG4gIH1cclxuICAvLyByZXR1cm4gYWxsIHRleHQgbm9kZXMgdGhhdCBhcmUgY29udGFpbmVkIHdpdGhpbiBgZWxgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFRleHROb2RlcyhlbCkge1xyXG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQsXHJcbiAgICAgIHdhbGtlciA9IGRvYy5jcmVhdGVUcmVlV2Fsa2VyKGVsLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpLFxyXG4gICAgICB0ZXh0Tm9kZXMgPSBbXSxcclxuICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xyXG5cclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dE5vZGVzXHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByYW5nZXNJbnRlcnNlY3QocmFuZ2VBLCByYW5nZUIpIHtcclxuICAgIHJldHVybiByYW5nZUEuY29tcGFyZUJvdW5kYXJ5UG9pbnRzKFJhbmdlLkVORF9UT19TVEFSVCwgcmFuZ2VCKSA9PT0gLTEgJiZcclxuICAgICAgcmFuZ2VBLmNvbXBhcmVCb3VuZGFyeVBvaW50cyhSYW5nZS5TVEFSVF9UT19FTkQsIHJhbmdlQikgPT09IDFcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJhbmdlRnJvbU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKClcclxuICAgIHRyeSB7XHJcbiAgICAgIHJhbmdlLnNlbGVjdE5vZGUobm9kZSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmFuZ2VcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q2hhcmFjdGVyT2Zmc2V0V2l0aGluKGVsZW1lbnQpIHtcclxuICAgIHZhciBjYXJldE9mZnNldCA9IDA7XHJcbiAgICB2YXIgZG9jID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQ7XHJcbiAgICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XHJcbiAgICB2YXIgc2VsO1xyXG4gICAgaWYgKHR5cGVvZiB3aW4uZ2V0U2VsZWN0aW9uICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgc2VsID0gd2luLmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBpZiAoc2VsLnJhbmdlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gd2luLmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgICAgdmFyIHByZUNhcmV0UmFuZ2UgPSByYW5nZS5jbG9uZVJhbmdlKCk7XHJcbiAgICAgICAgcHJlQ2FyZXRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XHJcbiAgICAgICAgcHJlQ2FyZXRSYW5nZS5zZXRFbmQocmFuZ2UuZW5kQ29udGFpbmVyLCByYW5nZS5lbmRPZmZzZXQpO1xyXG4gICAgICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jLnNlbGVjdGlvbikgJiYgc2VsLnR5cGUgIT0gXCJDb250cm9sXCIpIHtcclxuICAgICAgdmFyIHRleHRSYW5nZSA9IHNlbC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICB2YXIgcHJlQ2FyZXRUZXh0UmFuZ2UgPSBkb2MuYm9keS5jcmVhdGVUZXh0UmFuZ2UoKTtcclxuICAgICAgcHJlQ2FyZXRUZXh0UmFuZ2UubW92ZVRvRWxlbWVudFRleHQoZWxlbWVudCk7XHJcbiAgICAgIHByZUNhcmV0VGV4dFJhbmdlLnNldEVuZFBvaW50KFwiRW5kVG9FbmRcIiwgdGV4dFJhbmdlKTtcclxuICAgICAgY2FyZXRPZmZzZXQgPSBwcmVDYXJldFRleHRSYW5nZS50ZXh0Lmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYXJldE9mZnNldDtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNldENhcmV0QXQoZWxlbWVudCwgY2hhckluZGV4KSB7XHJcbiAgICB2YXIgbm9kZSA9IGVsZW1lbnQ7XHJcbiAgICBub2RlLmZvY3VzKCk7XHJcbiAgICB2YXIgdGV4dE5vZGUgPSBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSk7XHJcbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodGV4dE5vZGVbMF0sIGNoYXJJbmRleCk7XHJcbiAgICByYW5nZS5zZXRFbmQodGV4dE5vZGVbMF0sIGNoYXJJbmRleCk7XHJcbiAgICB2YXIgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHBhc3RlSHRtbEF0Q2FyZXQoaHRtbCkge1xyXG4gICAgdmFyIHNlbCwgcmFuZ2U7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAvLyBJRTkgYW5kIG5vbi1JRVxyXG4gICAgICBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgICAgcmFuZ2UuZGVsZXRlQ29udGVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgd291bGQgYmUgdXNlZnVsIGhlcmUgYnV0IGlzXHJcbiAgICAgICAgLy8gb25seSByZWxhdGl2ZWx5IHJlY2VudGx5IHN0YW5kYXJkaXplZCBhbmQgaXMgbm90IHN1cHBvcnRlZCBpblxyXG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgKElFOSwgZm9yIG9uZSlcclxuICAgICAgICBsZXQgZWw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoaHRtbCkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiAoaHRtbCkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIGVsID0gaHRtbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCBub2RlLCBsYXN0Tm9kZTtcclxuICAgICAgICB3aGlsZSAoKG5vZGUgPSBlbC5maXJzdENoaWxkKSkge1xyXG4gICAgICAgICAgbGFzdE5vZGUgPSBmcmFnLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByYW5nZS5pbnNlcnROb2RlKGZyYWcpO1xyXG5cclxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGUgc2VsZWN0aW9uXHJcbiAgICAgICAgaWYgKGxhc3ROb2RlKSB7XHJcbiAgICAgICAgICByYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0QWZ0ZXIobGFzdE5vZGUpO1xyXG4gICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3RzTm9kZShyYW5nZSwgbm9kZSkge1xyXG4gICAgaWYgKHJhbmdlLmludGVyc2VjdHNOb2RlKSB7XHJcbiAgICAgIHJldHVybiByYW5nZS5pbnRlcnNlY3RzTm9kZShub2RlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJhbmdlc0ludGVyc2VjdChyYW5nZSwgY3JlYXRlUmFuZ2VGcm9tTm9kZShub2RlKSlcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlVGV4dE5vZGVzKHJhbmdlKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIsXHJcbiAgICAgIG5vZGVzID0gZ2V0VGV4dE5vZGVzKGNvbnRhaW5lci5wYXJlbnROb2RlIHx8IGNvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gbm9kZXMuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiByYW5nZUludGVyc2VjdHNOb2RlKHJhbmdlLCBub2RlKSAmJiBpc05vbkVtcHR5VGV4dE5vZGUobm9kZSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpc05vbkVtcHR5VGV4dE5vZGUobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQubGVuZ3RoID4gMFxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xyXG4gICAgaWYgKGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSkge1xyXG4gICAgaWYgKHR5cGVvZiBub2RlLnBhcmVudE5vZGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgcmVtb3ZlRWxlbWVudChyZXBsYWNlbWVudE5vZGUpO1xyXG4gICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlcGxhY2VtZW50Tm9kZSwgbm9kZSk7XHJcbiAgICAgIHJlbW92ZUVsZW1lbnQobm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3RUZXh0KG5vZGUpIHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICAgIHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KG5vZGUpO1xyXG4gICAgICByYW5nZS5zZWxlY3QoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG5vZGUpO1xyXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3Qgc2VsZWN0IHRleHQgaW4gbm9kZTogVW5zdXBwb3J0ZWQgYnJvd3Nlci5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XHJcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlV3JhcHBlckZ1bmN0aW9uKHdyYXBwZXJFbCwgcmFuZ2UpIHtcclxuICAgIHZhciBzdGFydE5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcixcclxuICAgICAgZW5kTm9kZSA9IHJhbmdlLmVuZENvbnRhaW5lcixcclxuICAgICAgc3RhcnRPZmZzZXQgPSByYW5nZS5zdGFydE9mZnNldCxcclxuICAgICAgZW5kT2Zmc2V0ID0gcmFuZ2UuZW5kT2Zmc2V0XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBOb2RlKG5vZGUpIHtcclxuICAgICAgdmFyIGN1cnJlbnRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksXHJcbiAgICAgICAgY3VycmVudFdyYXBwZXIgPSB3cmFwcGVyRWwuY2xvbmVOb2RlKClcclxuXHJcbiAgICAgIGN1cnJlbnRSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobm9kZSk7XHJcbiAgICAgIGlmIChub2RlID09PSBzdGFydE5vZGUgJiYgc3RhcnROb2RlLm5vZGVUeXBlID09PSAzKSB7XHJcbiAgICAgICAgY3VycmVudFJhbmdlLnNldFN0YXJ0KG5vZGUsIHN0YXJ0T2Zmc2V0KVxyXG4gICAgICAgIHN0YXJ0Tm9kZSA9IGN1cnJlbnRXcmFwcGVyXHJcbiAgICAgICAgc3RhcnRPZmZzZXQgPSAwXHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vZGUgPT09IGVuZE5vZGUgJiYgZW5kTm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgIGN1cnJlbnRSYW5nZS5zZXRFbmQobm9kZSwgZW5kT2Zmc2V0KVxyXG4gICAgICAgIGVuZE5vZGUgPSBjdXJyZW50V3JhcHBlcjtcclxuICAgICAgICBlbmRPZmZzZXQgPSAxXHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudFJhbmdlLnN1cnJvdW5kQ29udGVudHMoY3VycmVudFdyYXBwZXIpXHJcbiAgICAgIHJldHVybiBjdXJyZW50V3JhcHBlclxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QWxsTm9kZXMoKSB7XHJcbiAgICB2YXIgbm9kZXMsIHJhbmdlO1xyXG4gICAgaWYgKHR5cGVvZiByYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpZiBubyByYW5nZSBpcyBzcGVjaWZpZWRcclxuICAgICAgcmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKVxyXG4gICAgfVxyXG4gICAgaWYgKHJhbmdlLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIC8vIG5vdGhpbmcgdG8gd3JhcFxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcbiAgICBub2RlcyA9IG5vZGVzLm1hcChub2RlID0+IHtcclxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICB3aGlsZSAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG4gICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBub2Rlc1xyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gd3JhcFJhbmdlVGV4dCh3cmFwcGVyRWwsIHJhbmdlKSB7XHJcbiAgICB2YXIgbm9kZXMsIHdyYXBOb2RlO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcmFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3Rpb24gaWYgbm8gcmFuZ2UgaXMgc3BlY2lmaWVkXHJcbiAgICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmFuZ2UuaXNDb2xsYXBzZWQpIHtcclxuICAgICAgLy8gbm90aGluZyB0byB3cmFwXHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygd3JhcHBlckVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3cmFwcGVyRWwgPSAnc3BhbidcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHdyYXBwZXJFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgLy8gYXNzdW1lIGl0J3MgYSB0YWduYW1lXHJcbiAgICAgIHdyYXBwZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlckVsKTtcclxuICAgIH1cclxuXHJcbiAgICB3cmFwTm9kZSA9IGNyZWF0ZVdyYXBwZXJGdW5jdGlvbih3cmFwcGVyRWwsIHJhbmdlKVxyXG5cclxuICAgIG5vZGVzID0gZ2V0UmFuZ2VUZXh0Tm9kZXMocmFuZ2UpXHJcblxyXG4gICAgbm9kZXMgPSBub2Rlcy5tYXAod3JhcE5vZGUpO1xyXG4gICAgcmV0dXJuIG5vZGVzXHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25CZXR3ZWVuVHdvTm9kZXMoZmlyc3RGbGFnLCBsYXN0RmxhZyxvcHRpb25zID0ge30pIHtcclxuICAgICBjb25zdCBfb3B0aW9ucyA9IHtyZW1vdmU6dHJ1ZX07XHJcbiAgICAgT2JqZWN0LmFzc2lnbihfb3B0aW9ucyxvcHRpb25zKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5zZXRCYXNlQW5kRXh0ZW50KGZpcnN0RmxhZywgMCwgbGFzdEZsYWcsIGxhc3RGbGFnLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgICAgICBpZihfb3B0aW9ucy5yZW1vdmUpe1xyXG4gICAgICAgICAgW2ZpcnN0RmxhZywgbGFzdEZsYWddLmZvckVhY2goZSA9PiBlLnVud3JhcCgpKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb25GbGFncyhmaXJzdEVsZW1lbnQsIExhc3RFbGVtZW50KSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBjb25zdCBmaXJzdEZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0LXNlbGVjdGlvbicpO1xyXG4gICAgZmlyc3RGbGFnLnNldEF0dHJpYnV0ZSgnemVyby1zcGFjZScsIGZpcnN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcbiAgICBjb25zdCBsYXN0RmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQtc2VsZWN0aW9uJyk7XHJcbiAgICBsYXN0RmxhZy5zZXRBdHRyaWJ1dGUoJ3plcm8tc3BhY2UnLCBMYXN0RWxlbWVudC50ZXh0Q29udGVudC5sZW5ndGggPT09IDApXHJcblxyXG4gICAgZmlyc3RFbGVtZW50LnByZXBlbmQoZmlyc3RGbGFnKTsgLy9TZXQgZmxhZyB0aGUgZmlyc3RcclxuICAgIExhc3RFbGVtZW50LmFwcGVuZENoaWxkKGxhc3RGbGFnKTsgLy9TZXQgRmxhZyBhdCBsYXN0XHJcbiAgICByZXR1cm4geyBmaXJzdEZsYWcsIGxhc3RGbGFnIH07XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZEhUTUwoKSB7XHJcbiAgICB2YXIgcmFuZ2U7XHJcbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xyXG4gICAgICBpZiAocmFuZ2UuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb250ZW50ID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgICByYW5nZTogcmFuZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgZnVuY3Rpb24gc2F2ZVNlbGVjdGlvbigpIHtcclxuICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIGlmIChzZWwuZ2V0UmFuZ2VBdCAmJiBzZWwucmFuZ2VDb3VudCkge1xyXG4gICAgICAgIHJldHVybiBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVTZWxlY3Rpb24ocmFuZ2UpIHtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIHJhbmdlLnNlbGVjdCkge1xyXG4gICAgICAgIHJhbmdlLnNlbGVjdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiIsImltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSB9IGZyb20gXCIuL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZVJ1bGVzIH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzXCI7XHJcbmltcG9ydCB7IGdldFNlbGVjdGVkRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlaXJ0Q3NzKGZyb21FbGVtZW50LCB0b0VsZW1lbnQpIHtcclxuICAgIHZhciBpbnRhaWxTdHlsZSA9IHt9O1xyXG4gICAgdmFyIGN1cnJlY3RFbGVtZW50ID0gZnJvbUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoY3VycmVjdEVsZW1lbnQgJiYgY3VycmVjdEVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudC5wYXJlbnRFbGVtZW50KSkge1xyXG4gICAgICAgIGxldCBtYXAgPSBnZXRTdHlsZShjdXJyZWN0RWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBtYXApIHtcclxuICAgICAgICAgICAgaWYgKG1hcC5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbWFwW3N0eWxlXTtcclxuICAgICAgICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbiAgY291bGQgYmUgdHdpY2UgbGlrZSB1bmRlcmxpbmUgYW5kIHN0cmlrZSB0aGVyb3VnaC4uIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnRhaWxTdHlsZVtzdHlsZV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW50YWlsU3R5bGVbc3R5bGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVjdEVsZW1lbnQgPSBjdXJyZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGludGFpbFN0eWxlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtrZXl9J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGVba2V5XSA9IGVsLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICB9KVxyXG59XHJcbi8vVE9HR0xFXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTdHlsZShlbGVtZW50LCBrZXksIHZhbHVlLCBpc09uKSB7XHJcbiAgICBpZiAoaXNPbikge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XSArIFwiIFwiICsgdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XS5yZXBsYWNlKHZhbHVlLCBcIlwiKTtcclxuICAgIH1cclxuICAgIG5vcm1hbGl6ZVN0eWxlKGVsZW1lbnQpO1xyXG4gICAgbm9ybWFsaXplQ2xhc3NOYW1lKGVsZW1lbnQpO1xyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7dmFsdWV9J11gKSkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGVba2V5XSA9IGNoaWxkLnN0eWxlW2tleV0ucmVwbGFjZSh2YWx1ZSwgXCJcIik7XHJcbiAgICAgICAgbm9ybWFsaXplU3R5bGUoY2hpbGQpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShjaGlsZCk7XHJcbiAgICB9KVxyXG59XHJcbi8vRVhURU5EXHJcbi8vVE9ETzogZml4IG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBqc29uU3R5bGUpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGpzb25TdHlsZSkge1xyXG4gICAgICAgIGlmIChqc29uU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGpzb25TdHlsZVtrZXldO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9UT0dHTEVcclxuLy9UT0RPOiBmaXggbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICBpZihrZXkgPT09IFwiY29sb3JcIil7XHJcbiAgICAgICAgVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6J2NvbG9yJyx2YWx1ZTp2YWx1ZX0pO1xyXG4gICAgfVxyXG4gICAgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtzdHlsZSo9JyR7a2V5fSddYCkpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlW2tleV0gPSBudWxsO1xyXG4gICAgICAgIG5vcm1hbGl6ZVN0eWxlKGVsKTtcclxuICAgIH0pO1xyXG4gICAgLy9leHBlcmltZW50YWw6IHN0eWxlIHRoZSB0ZXh0IGRlY29yYXRpb25zIHdpdGggY29sb3IuLlxyXG4gICAgLy9UT0RPOnJldmlld1xyXG4gICAgLy8gVXNlUnVsZXMoe2VsZW1lbnQ6ZWxlbWVudCxrZXk6a2V5LHZhbHVlOnZhbHVlfSk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3RTdHlsZUZyb21TZWxlY3RlZEVsZW1lbnQgPSAoY29ubmVjdGVjRWxlbWVudCkgPT57ICAgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRTZWxlY3RlZEVsZW1lbnQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICByZXR1cm4gZ2V0SW5oZWlydENzcyhzZWxlY3RlZEVsZW1lbnQsY29ubmVjdGVjRWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShlbGVtZW50KSB7XHJcbiAgICBpZighZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcbiAgICAvL1RPRE86cmV2aWV3XHJcbiAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0U3R5bGVzID0gZ2V0U3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29sbGVjdFN0eWxlcykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3N0eWxlKj0nJHtjb2xsZWN0U3R5bGVzW2tleV19J11gKSkuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplU3R5bGUoZWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEpzb25PYmplY3RUb1N0eWxlU3RyaW5nKHN0eWxlcykge1xyXG4gICAgbGV0IGNvbGxlY3RTdHlsZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgICAgICBjb2xsZWN0U3R5bGVzLnB1c2goYCR7a2V5fToke3N0eWxlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2xsZWN0U3R5bGVzLmpvaW4oJzsnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwpIHtcclxuICAgIGlmICghZWwgfHwgIWVsLnN0eWxlKSByZXR1cm4ge307XHJcbiAgICBsZXQgc3R5bGVzID0ge307XHJcbiAgICBsZXQgc3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsZXQgY29sbGVjdFN0eWxlcyA9IHN0eWxlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdFN0eWxlcykpIHtcclxuICAgICAgICAgICAgY29sbGVjdFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHN0eWxlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVbMV0gJiYga2V5VmFsdWVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleVZhbHVlWzBdLnRyaW0oKV0gPSBrZXlWYWx1ZVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdHlsZXM7XHJcbn0iLCJpbXBvcnQgeyBub3JtYWxpemVDbGFzc05hbWUgfSBmcm9tIFwiLi9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBub3JtYWxpemVTdHlsZSB9IGZyb20gXCIuL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWVyZ2VOb2RlQ29udGVjdCwgbWVyZ2VUd29Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXMvbWVyZ2VyXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtFbGVtZW50fSBEb21FbGVtZW50IC0gZWxlbWVudCB0byBub3JtYWxpemVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVFbGVtZW50KGVsKSB7XHJcbiAgICBjb25zdCByZWN1cnNlID0gKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHJlY3Vyc2UoY2hpbGQpO1xyXG4gICAgICAgICAgICBfbm9ybWFsaXplKGNoaWxkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNTdHlsZXMgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnQgPSB3cmFwcGVyLm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV4dEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBtZXJnZVR3b05vZGVzKHdyYXBwZXIsIG5leHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSBtZXJnZWQgfHwgd3JhcHBlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1lcmdlTm9kZXNDb250ZW50ID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlciA9IG1lcmdlTm9kZUNvbnRlY3Qod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gbWVyZ2VkIHx8IHdyYXBwZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZXJnZWRTdHlsZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbWVyZ2VkQ29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgX25vcm1hbGl6ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgbWVyZ2VkU3R5bGVzID0gbWVyZ2VOb2Rlc1N0eWxlcyhlbGVtZW50KTtcclxuICAgICAgICAgICAgbWVyZ2VkQ29udGVudCA9IG1lcmdlTm9kZXNDb250ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIH0gd2hpbGUgKG1lcmdlZENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWwubm9ybWFsaXplKCk7XHJcbiAgICByZWN1cnNlKGVsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfbm9ybWFsaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50Lm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShlbGVtZW50KTtcclxuICAgICAgICBub3JtYWxpemVTdHlsZShlbGVtZW50KTtcclxuICAgICAgICAvL1RPRE86IG5vcm1hbGl6ciBhdHRyaWJ1dGVzIChubzpzdHlsZSxjbGFzc05hbWUpXHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSA9PT0gXCJTUEFOXCIgJiYgKCFlbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSB8fCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICBjb25zdCB1bndyYXBwZWQgPSBlbGVtZW50LnVud3JhcCgpO1xyXG4gICAgICAgICAgICB1bndyYXBwZWQubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIC8vVE9ETzogY2hlY2sgdGhlIHJldHVybjtcclxuICAgICAgICAgICAgcmV0dXJuIHVud3JhcHBlZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0FycmF5fSB0ZXh0Tm9kZXMgLSB0ZXh0bm9kZSB0byByZW1vdmUgdGhlIHplcm8gc3BhY2UgbGlrZSA6IHUyMDBCXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlWmVyb1NwYWNlKHRleHROb2Rlcykge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRleHROb2RlcykpIHtcclxuICAgICAgICB0ZXh0Tm9kZXMgPSBbdGV4dE5vZGVzXTtcclxuICAgIH1cclxuICAgIHRleHROb2Rlcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBpZiAoZWwubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFICYmIGVsLnBhcmVudEVsZW1lbnQgJiYgZWwucGFyZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJURVhULVNFTEVDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQucmVwbGFjZSgvXFx1MjAwQi9nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4iLCJjbGFzcyBEb21VdGlsaXMge1xyXG5cclxuXHJcbiAgaXNFbGVtZW50KG9iaikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgIChvYmoubm9kZVR5cGUgPT09IDEpICYmICh0eXBlb2Ygb2JqLnN0eWxlID09PSBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgICh0eXBlb2Ygb2JqLm93bmVyRG9jdW1lbnQgPT09IFwib2JqZWN0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB3cmFwKGVsLCB3cmFwcGVyKSB7XHJcbiAgICAvL2VsIHNob3VsZCBiZSBhcnJheVxyXG4gICAgbGV0IGVsZW1lbnRzID0gW107XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcclxuICAgICAgZWxlbWVudHMgPSBlbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnRzID0gW2VsXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXJlbnRzID0gZWxlbWVudHMubWFwKGUgPT4gZS5wYXJlbnROb2RlKTtcclxuICAgIHZhciBwYXJlbnRzRGlmZiA9IHBhcmVudHMuZmlsdGVyKChwLCBfLCBzZWxmKSA9PiB7IHJldHVybiBzZWxmWzBdICE9PSBwIH0pO1xyXG4gICAgaWYgKHBhcmVudHNEaWZmLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgW3dyYXBdIGZvdW5kICR7cGFyZW50c0RpZmYubGVuZ3RofSBkaWZmZXJlbnQgcGFyZW50cyDwn5iFYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBhcmVudHNbMF0uaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnRzWzBdKVxyXG4gICAgZWxlbWVudHMuZm9yRWFjaChfZWwgPT4gd3JhcHBlci5hcHBlbmRDaGlsZChfZWwpKVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRG9tVXRpbGlzKCk7IFxyXG5cclxuRG9jdW1lbnQucHJvdG90eXBlLmdldFNlbGVjdGVkRWxlbWVudD1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmdldFNlbGVjdGlvbigpO2lmKG51bGwhPT1lKXt2YXIgdD1lLmFuY2hvck5vZGU7aWYobnVsbCE9PXQpe2Zvcig7Mz09PXQubm9kZVR5cGU7KXQ9dC5wYXJlbnROb2RlO3JldHVybiB0fXJldHVybiBudWxsfX1cclxuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9ICggd3JhcHBlcikgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd3JhcHBlciA9PT0gXCJzdHJpbmdcIikgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlcik7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzKTtcclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gIHJldHVybiB3cmFwcGVyO1xyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5ib2R5LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgcmFuZ2UubW92ZVRvRWxlbWVudFRleHQodGhpcyk7XHJcbiAgICByYW5nZS5zZWxlY3QoKTtcclxuICB9IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzKTtcclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgfSBcclxufVxyXG5FbGVtZW50LnByb3RvdHlwZS5pc2NoaWxkT2YgPSBmdW5jdGlvbihwYXJlbnQpIHtcclxuICBpZiAoIXBhcmVudCkgcmV0dXJuIGZhbHNlO1xyXG4gIGxldCBub2RlID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gIHdoaWxlIChub2RlICE9IG51bGwpIHtcclxuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuY29uc3QgX3dyYXAgPSBmdW5jdGlvbih3cmFwcGVyKSB7XHJcbiAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVybiBmYWxzZTtcclxuICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHRoaXMpO1xyXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgcmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuVGV4dC5wcm90b3R5cGUud3JhcCA9IF93cmFwO1xyXG5FbGVtZW50LnByb3RvdHlwZS53cmFwID0gX3dyYXA7XHJcbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5ld05vZGUpIHtcclxuICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHRoaXMubmV4dFNpYmxpbmcpO1xyXG59XHJcbkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VOb2RlID0gZnVuY3Rpb24ocmVwbGFjZW1lbnROb2RlKSB7XHJcbiAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xyXG4gICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXBsYWNlbWVudE5vZGUsIHRoaXMpXHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcclxuICB9XHJcbn1cclxuRWxlbWVudC5wcm90b3R5cGUudW53cmFwID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzKVxyXG4gIHZhciBleHRyYUNvbnRlbnRzID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgdGhpcy5yZXBsYWNlTm9kZShleHRyYUNvbnRlbnRzKVxyXG4gIHJldHVybiBleHRyYUNvbnRlbnRzO1xyXG59XHJcbiIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vRG9tVXRpbGlzXCJcclxuaW1wb3J0IHsgZ2V0U3R5bGUsIG5vcm1hbGl6ZVN0eWxlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0eWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0Q2xhc3Nlcywgbm9ybWFsaXplQ2xhc3NOYW1lIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NsYXNzTmFtZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXR0ci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUVsZW1lbnQgfSBmcm9tIFwiLi4vc2VydmljZXMvdGV4dEVkaXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vX2FwcC5jb25maWcuanNvbic7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgKiBSZXR1cm5zIHRoZSBuZXcgbWVyZ2UgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IERvbUVsZW1lbnQgLSBlbGVtZW50IHRvIG1lcmdlIHdpdGggaGlzIGZpcnN0IGNoaWxkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWVyZ2VOb2RlQ29udGVjdCA9IG5vZGUgPT4ge1xyXG5cclxuICAgIGlmICghRG9tVXRpbGlzLmlzRWxlbWVudChub2RlKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uZSBvZiB0aGUgcHJvcHMgaXMgbm90IGRvbSBlbGVtZW50Li4sIHBsZWFzZSBpbnNlcnQgdHdvIGVsZW1lbnQgdG8gbWVyZ2UuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUubm9kZU5hbWUgIT09IFwiU1BBTlwiIHx8IG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIG5vZGUgaXMgbm90IGEgc3BhbicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBub2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgaWYgKCFmaXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIGZpcnN0IGNoaWxkIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpcnN0Q2hpbGQubm9kZU5hbWUgIT09IFwiU1BBTlwiIHx8IGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignW21lcmdlTm9kZUNvbnRlY3RdIGZpcnN0Q2hpbGQgaXMgbm90IGEgc3BhbicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUudGV4dENvbnRlbnQgIT09IGZpcnN0Q2hpbGQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdbbWVyZ2VOb2RlQ29udGVjdF0gdGV4dCBjb250ZW50IGlzIGRpZmZlcmVudCcpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX2VsZW1lbnRQcm9wcyA9IHtcclxuICAgICAgICBzdHlsZTogZ2V0U3R5bGUobm9kZSksXHJcbiAgICAgICAgY2xhc3NlczogZ2V0Q2xhc3Nlcyhub2RlKSxcclxuICAgICAgICBhdHRyczogZ2V0QXR0cmlidXRlcyhub2RlKVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBzdHlsZSBpbiBfZWxlbWVudFByb3BzLnN0eWxlKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVWYWx1ZSA9IF9lbGVtZW50UHJvcHMuc3R5bGVbc3R5bGVdO1xyXG4gICAgICAgIGZpcnN0Q2hpbGQuc3R5bGVbc3R5bGVdID0gKGZpcnN0Q2hpbGQuc3R5bGVbc3R5bGVdICsgXCIgXCIgKyBzdHlsZVZhbHVlKS50cmltKCk7XHJcbiAgICB9XHJcbiAgICBub3JtYWxpemVTdHlsZShmaXJzdENoaWxkKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gX2VsZW1lbnRQcm9wcy5hdHRycykge1xyXG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IF9lbGVtZW50UHJvcHMuYXR0cnNbYXR0cl07XHJcbiAgICAgICAgZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0clZhbHVlKTtcclxuICAgIH1cclxuICAgIGZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCguLi5fZWxlbWVudFByb3BzLmNsYXNzZXMpO1xyXG4gICAgbm9ybWFsaXplQ2xhc3NOYW1lKGZpcnN0Q2hpbGQpO1xyXG4gICAgbm9ybWFsaXplRWxlbWVudChmaXJzdENoaWxkKTtcclxuICAgIGlmKGZpcnN0Q2hpbGQucGFyZW50RWxlbWVudClcclxuICAgIGZpcnN0Q2hpbGQucGFyZW50RWxlbWVudC51bndyYXAoKTtcclxuICAgIHJldHVybiBmaXJzdENoaWxkO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUd29Ob2RlcyhlbGVtZW50T25lLCBlbGVtZW50VHdvKSB7XHJcbiAgICBjb25zb2xlLmxvZygnW21lcmdlVHdvTm9kZXNdIFNUQVJUJyk7XHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudE9uZSkgfHwgIURvbVV0aWxpcy5pc0VsZW1lbnQoZWxlbWVudFR3bykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdvbmUgb2YgdGhlIHByb3BzIGlzIG5vdCBkb20gZWxlbWVudC4uLCBwbGVhc2UgaW5zZXJ0IHR3byBlbGVtZW50IHRvIG1lcmdlLi4nKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChlbGVtZW50T25lLm5vZGVOYW1lICE9PSBcIlNQQU5cIiB8fCBlbGVtZW50VHdvLm5vZGVOYW1lICE9PSBcIlNQQU5cIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uZSBvZiB0aGUgcHJvcHMgaXMgbm90IGRvbSBlbGVtZW50Li4sIHBsZWFzZSBpbnNlcnQgdHdvIGVsZW1lbnQgdG8gbWVyZ2UuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX2VsZW1lbnRzRGF0YSA9IFt7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKGVsZW1lbnRPbmUpLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMoZWxlbWVudE9uZSksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMoZWxlbWVudE9uZSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3R5bGU6IGdldFN0eWxlKGVsZW1lbnRUd28pLFxyXG4gICAgICAgIGNsYXNzZXM6IGdldENsYXNzZXMoZWxlbWVudFR3byksXHJcbiAgICAgICAgYXR0cnM6IGdldEF0dHJpYnV0ZXMoZWxlbWVudFR3bylcclxuICAgIH1dXHJcbiAgICBjb25zdCBnZXRDb21tb25DbGFzc2VzID0gKGNsYXNzZXMxLCBjbGFzc2VzMikgPT4ge1xyXG4gICAgICAgIGlmICghY2xhc3NlczEgfHwgIWNsYXNzZXMyKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgY29uc3QgYzEgPSBbLi4uY2xhc3NlczFdO1xyXG4gICAgICAgIGNvbnN0IGMyID0gWy4uLmNsYXNzZXMyXTtcclxuICAgICAgICByZXR1cm4gYzEuZmlsdGVyKGMgPT4gYzIuaW5jbHVkZXMoYykpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q29tbW9uU3R5bGVzID0gKHN0eWxlMSwgc3R5bGUyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29tbW1vblN0eWxlcyA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBpbiBzdHlsZTEpIHtcclxuICAgICAgICAgICAgaWYgKCFzdHlsZTJbc10pXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlMVZhbHVlcyA9IHN0eWxlMVtzXTtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUyVmFsdWVzID0gc3R5bGUyW3NdO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUyVmFsdWVzID09PSBzdHlsZTFWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1tb25TdHlsZXNbc10gPSBzdHlsZTJWYWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbW1tb25TdHlsZXM7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29tbW9uY0xhc3NlcyA9IGdldENvbW1vbkNsYXNzZXMoX2VsZW1lbnRzRGF0YVswXS5jbGFzc2VzLCBfZWxlbWVudHNEYXRhWzFdLmNsYXNzZXMpO1xyXG4gICAgY29uc29sZS5sb2coJ2NvbW1vbkNsYXNzc2VzJyxjb21tb25jTGFzc2VzLGVsZW1lbnRPbmUsZWxlbWVudFR3byxfZWxlbWVudHNEYXRhKVxyXG5cclxuICAgIGNvbnN0IGNvbW1vblN0eWxlcyA9IGdldENvbW1vblN0eWxlcyhfZWxlbWVudHNEYXRhWzBdLnN0eWxlLCBfZWxlbWVudHNEYXRhWzFdLnN0eWxlKTtcclxuICAgIGNvbnN0IGJ1aWxkV3JhcHBpbmdFbGVtZW50ID0gKGNvbW1vblN0eWxlcywgY29tbW9uY0xhc3NlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN0eWxlc1xyXG4gICAgICAgIGZvciAoY29uc3QgcyBpbiBjb21tb25TdHlsZXMpXHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGVbc10gPSBjb21tb25TdHlsZXNbc107XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAvLyBoYW5kbGUgY2xhc3Nlc1xyXG4gICAgICAgIGlmIChjb21tb25jTGFzc2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKC4uLmNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod3JhcHBlci5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLnVud3JhcCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCB3cmFwcGVyID0gYnVpbGRXcmFwcGluZ0VsZW1lbnQoY29tbW9uU3R5bGVzLCBjb21tb25jTGFzc2VzKTtcclxuICAgIGlmICghd3JhcHBlcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3dyYXBwZXIgaXMgbnVsbCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJFbGVtZW50Q2xhc3NlcyA9IChub2RlLCBjb21tb25jTGFzc2VzKSA9PiB7XHJcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIG5vcm1hbGl6ZUNsYXNzTmFtZShub2RlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyRWxlbWVudFN0eWxlcyA9IChub2RlLCBjb21tb25TdHlsZXMpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHMgaW4gY29tbW9uU3R5bGVzKVxyXG4gICAgICAgICAgICBub2RlLnN0eWxlW3NdID0gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW2VsZW1lbnRPbmUsIGVsZW1lbnRUd29dO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICBjbGVhckVsZW1lbnRDbGFzc2VzKGUsIGNvbW1vbmNMYXNzZXMpO1xyXG4gICAgICAgIGNsZWFyRWxlbWVudFN0eWxlcyhlLCBjb21tb25TdHlsZXMpO1xyXG4gICAgfSlcclxuXHJcbiAgICBEb21VdGlsaXMud3JhcChlbGVtZW50cywgd3JhcHBlcik7XHJcbiAgICBbLi4ud3JhcHBlci5jaGlsZHJlbl0uZm9yRWFjaChjID0+IHtcclxuICAgICAgICBub3JtYWxpemVFbGVtZW50KGMpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbW9uVmFsdWVzT2JqZWN0KG9iajEsIG9iajIpIHtcclxuICAgIGxldCBjb21tb25WYWx1ZXMgPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iajEpIHtcclxuICAgICAgICBpZiAob2JqMltrZXldICYmIG9iajJba2V5XSA9PT0gb2JqMVtrZXldKSB7XHJcbiAgICAgICAgICAgIGNvbW1vblZhbHVlc1trZXldID0gb2JqMVtrZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1vblZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbW9uQXJyYXlzKGFycjEsIGFycjIpIHtcclxuICAgIGNvbnN0IG1lcmdlQXJyID0gW107XHJcbiAgICBBcnJheS5mcm9tKGFycjEpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGFycjIuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbSkgPiAwKSB7XHJcbiAgICAgICAgICAgIG1lcmdlQXJyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBtZXJnZUFycjtcclxufSIsImltcG9ydCBEb21VdGlsaXMgZnJvbSBcIi4vRG9tVXRpbGlzXCJcclxuaW1wb3J0IHsgZ2V0SW5oZWlydENzcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldEluaGVpcnRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F0dHIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jbGFzc05hbWUuc2VydmljZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEhUTUwoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkge1xyXG5cclxuICAgIGlmICghZnJvbUVsZW1lbnQuaXNjaGlsZE9mKHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCBtdXN0IGJlIGNoaWxkIG9mIHRvRWxlbWVudCcpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIURvbVV0aWxpcy5pc0VsZW1lbnQoZnJvbUVsZW1lbnQpIHx8ICFEb21VdGlsaXMuaXNFbGVtZW50KHRvRWxlbWVudCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdmcm9tRWxlbWVudCAmJiB0b0VsZW1lbnQgbXVzdCBiZSBkb20gZWxlbWVudHMuLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0QXR0cnMgPSAoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldEluaGVpcnRDc3MoZnJvbUVsZW1lbnQsIHRvRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgYXR0cnMgPSBnZXRJbmhlaXJ0QXR0cmlidXRlcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBnZXRJbmhlaXJ0Q2xhc3NOYW1lcyhmcm9tRWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0ZW1wbGF0ZS5jbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbihcIiBcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbc3R5bGVdO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbYXR0cl07XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIGZyb21FbGVtZW50LmNyZWF0ZVNlbGVjdGlvbigpO1xyXG4gICAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgY2VudGVyVGVtcGxhdGUgPSBzZXRBdHRycyhjZW50ZXJFbGVtZW50LCB0b0VsZW1lbnQpO1xyXG4gICAgLy9jZW50ZXJcclxuICAgIGNlbnRlclRlbXBsYXRlLmFwcGVuZENoaWxkKGZyb21FbGVtZW50KTtcclxuICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICB2YXIgcmFuZ2UgPSBzZWwuZ2V0UmFuZ2VBdCgwKTtcclxuICAgIC8vbGVmdFxyXG4gICAgcmFuZ2Uuc2V0U3RhcnQodG9FbGVtZW50LCAwKTtcclxuICAgIGNvbnN0IGxlZnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0U2VsZWN0ZWRFbGVtZW50KCk7XHJcbiAgICBjb25zdCBsZWZ0VGVtcGxhdGUgPSBzZXRBdHRycyhsZWZ0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciBsZWZ0UmFuZ2UgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcclxuICAgIGxlZnRUZW1wbGF0ZS5hcHBlbmRDaGlsZChsZWZ0UmFuZ2UpO1xyXG4gICAgLy9yaWdodFxyXG4gICAgcmFuZ2Uuc2V0RW5kKHRvRWxlbWVudCwgdG9FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmdldFNlbGVjdGVkRWxlbWVudCgpO1xyXG4gICAgY29uc3QgcmlnaHRUZW1wbGF0ZSA9IHNldEF0dHJzKHJpZ2h0RWxlbWVudCwgdG9FbGVtZW50KTtcclxuICAgIHZhciByaWdodFJhbmdlID0gcmFuZ2UuZXh0cmFjdENvbnRlbnRzKCk7XHJcbiAgICByaWdodFRlbXBsYXRlLmFwcGVuZENoaWxkKHJpZ2h0UmFuZ2UpO1xyXG4gICAgY29uc3Qgc3BsaXQgPSB7XHJcbiAgICAgICAgbGVmdDogbGVmdFRlbXBsYXRlLFxyXG4gICAgICAgIGNlbnRlcjogY2VudGVyVGVtcGxhdGUsXHJcbiAgICAgICAgcmlnaHQ6IHJpZ2h0VGVtcGxhdGVcclxuICAgIH1cclxuICAgIHRvRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBlbCBpbiBzcGxpdCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzcGxpdFtlbF07XHJcbiAgICAgICAgdG9FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdG9FbGVtZW50LnVud3JhcCgpO1xyXG4gICAgcmV0dXJuIHNwbGl0O1xyXG5cclxufSIsImltcG9ydCBDb3JlIGZyb20gJy4vU3R5bGVJdC9pbmRleCc7XHJcbmltcG9ydCAgTW9kZXMgIGZyb20gJy4vU3R5bGVJdC9jb25zdGFudHMvTW9kZXMuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUl0IHtcclxuICAvL2V4cG9zZSBvbmx5IHRoZSByZWxldmFudCBtZXRob2RzLi5cclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgLy9UT0RPOiB2YWxpZGF0ZSB0YXJnZXQgJiBjb25maWcuLlxyXG4gICAgY29uc3Qgc3R5bGVJdCA9IG5ldyBDb3JlKHRhcmdldCwgY29uZmlnKTtcclxuICAgIGlmIChzdHlsZUl0KSB7ICBcclxuICAgICAgdGhpcy5FeGVjQ21kID0gc3R5bGVJdC5leGVjQ21kO1xyXG4gICAgICB0aGlzLlRvZ2dsZUNsYXNzID0gc3R5bGVJdC5Ub2dnbGVDbGFzcztcclxuICAgICAgdGhpcy5TYXZlID0gc3R5bGVJdC5TYXZlO1xyXG4gICAgICB0aGlzLkxvYWQgPSBzdHlsZUl0LkxvYWQ7XHJcbiAgICAgIHRoaXMuRGVzdHJveSA9IHN0eWxlSXQuRGVzdHJveTtcclxuICAgICAgdGhpcy5Nb2RlcyA9IE1vZGVzO1xyXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG4gICAgICB0aGlzLlRvZ2dsZUNsYXNzID0gdGhpcy5Ub2dnbGVDbGFzcy5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLkV4ZWNDbWQgPSB0aGlzLkV4ZWNDbWQuYmluZChzdHlsZUl0KTtcclxuICAgICAgdGhpcy5TYXZlID0gdGhpcy5TYXZlLmJpbmQoc3R5bGVJdCk7XHJcbiAgICAgIHRoaXMuTG9hZCA9IHRoaXMuTG9hZC5iaW5kKHN0eWxlSXQpO1xyXG4gICAgICB0aGlzLkRlc3Ryb3kgPSB0aGlzLkRlc3Ryb3kuYmluZChzdHlsZUl0KTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9