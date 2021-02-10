/*! For license information please see styleit-api.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("styleit",[],t):"object"==typeof exports?exports.styleit=t():e.styleit=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e){e.exports=JSON.parse('{"Toggle":"toggle","Extend":"extend"}')},function(e){e.exports=JSON.parse('{"0":"holder","1":"block"}')},function(e,t,n){e.exports=n(5).default},function(e){e.exports=JSON.parse("{}")},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(){return(l=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,s(t).call(this))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(i=[{key:"connectedCallback",value:function(){"true"===this.getAttribute("zero-space")&&(this.innerHTML="&#8203;")}}])&&r(n.prototype,i),a&&r(n,a),t}(i(HTMLElement));customElements.get("text-selection")||customElements.define("text-selection",u)},function(e,t,n){"use strict";n.r(t);var r={H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6",P:"P",LI:"LI",OL:"OL"};function o(e,t){for(var n=[],r=e;r&&r.ischildOf(t.parentElement);){var o=r.classList;Array.from(o).forEach((function(e){n.findIndex((function(t){return t===e}))<0&&n.push(e)})),r=r.parentElement}return n}function i(e){return Array.from(e.classList)}function a(e){function t(e){e.className||e.removeAttribute("class")}Array.from(e.querySelectorAll("span[class]")).concat(e).forEach((function(e){return function(e){t(e),Array.from(e.classList).forEach((function(n){Array.from(e.querySelectorAll("[class='".concat(n,"']"))).forEach((function(e){e.classList.remove(n),t(e)}))}))}(e)}))}Element.prototype.removeClassName=function(e){Array.from(this.querySelectorAll("[class='".concat(e,"']"))).concat(this).forEach((function(t){return t.classList.remove(e)}))};var l=void 0;function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"isElement",value:function(e){try{return e instanceof HTMLElement}catch(t){return"object"===c(e)&&1===e.nodeType&&"object"===c(e.style)&&"object"===c(e.ownerDocument)}}},{key:"wrap",value:function(e,t){var n=[],r=(n=Array.isArray(e)?e:[e]).map((function(e){return e.parentNode}));if(0===r.filter((function(e,t,n){return n[0]!==e})).length)return r[0].insertBefore(t,n[0]),n.forEach((function(e){return t.appendChild(e)})),!0}}])&&s(t.prototype,n),r&&s(t,r),e}());Document.prototype.getSelectedElement=function(){var e=document.getSelection();if(null!==e){var t=e.anchorNode;if(null!==t){for(;3===t.nodeType;)t=t.parentNode;return t}return null}},Element.prototype.wrap=function(e){return"string"==typeof e&&(e=document.createElement(e)),l.parentNode.insertBefore(e,l),e.appendChild(l),e},Element.prototype.createSelection=function(){if(document.body.createTextRange){var e=document.body.createTextRange();e.moveToElementText(this),e.select()}else if(window.getSelection){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(this),t.removeAllRanges(),t.addRange(n)}},Element.prototype.ischildOf=function(e){if(!e)return!1;for(var t=this.parentNode;null!=t;){if(t===e)return!0;t=t.parentNode}return!1};var f=function(e){return!!this.parentNode&&(this.parentNode.insertBefore(e,this),e.appendChild(this),e)};function d(e,t){for(var n={},r=e;r&&r.ischildOf(t.parentElement);){for(var o=r.attributes,i=o.length-1;i>=0;i--)"class"!==o[i].name&&"style"!==o[i].name&&(n[o[i].name]||(n[o[i].name]=o[i].value));r=r.parentElement}return n}function p(e,t){for(var n={},r=e.attributes,o=r.length-1;o>=0;o--)(t||!t&&"class"!==r[o].name&&"style"!==r[o].name)&&(n[r[o].name]||(n[r[o].name]=r[o].value));return n}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.tag,i=void 0===r?"span":r;if(!e.ischildOf(t))return null;if(!u.isElement(e)||!u.isElement(t))return null;var a=function(e,t){var n=E(e,t),r=d(e,t),a=o(e,t),l=document.createElement(i);for(var c in l.className=a.join(" "),n){var s=n[c];l.style[c]=s}for(var u in r){var f=r[u];l.setAttribute(u,f)}return l};e.createSelection();var l=document.getSelectedElement(),c=a(l,t);c.appendChild(e);var s=window.getSelection(),f=s.getRangeAt(0);f.setStart(t,0);var p=document.getSelectedElement(),y=a(p,t),h=f.extractContents();y.appendChild(h),f.setEnd(t,t.childNodes.length);var m=document.getSelectedElement(),v=a(m,t),g=f.extractContents();v.appendChild(g);var b={left:y,center:c,right:v};for(var w in t.innerHTML="",b){var C=b[w];t.appendChild(C)}return t.unwrap(),b}Text.prototype.wrap=f,Element.prototype.wrap=f,Element.prototype.insertAfter=function(e){this.parentNode.insertBefore(e,this.nextSibling)},Element.prototype.replaceNode=function(e){if(this.parentNode)return this.parentNode.insertBefore(e,this),this.remove(),e},Element.prototype.unwrap=function(){var e=document.createRange();e.selectNodeContents(this);var t=e.extractContents();return this.replaceNode(t),t};n(3);function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(e){var t;if(!u.isElement(e))return null;if("SPAN"!==e.nodeName||e.nodeType!==Node.ELEMENT_NODE)return null;var n=e.firstElementChild;if(!n)return null;if("SPAN"!==n.nodeName||n.nodeType!==Node.ELEMENT_NODE)return null;if(e.textContent!==n.textContent)return null;var r={style:A(e),classes:i(e),attrs:p(e)};for(var o in r.style){var l=r.style[o];n.style[o]=(n.style[o]+" "+l).trim()}for(var c in S(n),r.attrs){var s=r.attrs[c];n.setAttribute(c,s)}return(t=n.classList).add.apply(t,h(r.classes)),a(n),g(n),n.parentElement&&n.parentElement.unwrap(),n};function v(e,t){if(!u.isElement(e)||!u.isElement(t))return null;if("SPAN"!==e.nodeName||"SPAN"!==t.nodeName)return null;var n=[{style:A(e),classes:i(e),attrs:p(e)},{style:A(t),classes:i(t),attrs:p(t)}],r=function(e,t){if(!e||!t)return[];var n=h(e),r=h(t);return n.filter((function(e){return r.includes(e)}))}(n[0].classes,n[1].classes),o=function(e,t){var n={};for(var r in e)if(t[r]){var o=e[r],i=t[r];i===o&&(n[r]=i)}return n}(n[0].style,n[1].style),l=function(e,t){var n,r=document.createElement("span");for(var o in e)r.style[o]=e[o];t.length>0&&(n=r.classList).add.apply(n,h(t));return 0===r.attributes.length?(r.unwrap(),null):r}(o,r);if(!l)return null;var c=[e,t];return c.forEach((function(e){!function(e,t){var n;(n=e.classList).remove.apply(n,h(t)),a(e)}(e,r),function(e,t){for(var n in t)e.style[n]=null}(e,o)})),u.wrap(c,l),h(l.children).forEach((function(e){g(e)})),l}function g(e){var t=function(e){Array.from(e.children).forEach((function(e){t(e),n(e)}));var r=function(e){var t=!1;return Array.from(e.children).forEach((function(e){for(var n=e;null!==n;){var r=n.nextSibling;if(!r)break;n=v(n,r),t=t||null!==n}})),t},o=function(e){var t=!1;return Array.from(e.children).forEach((function(e){for(var n=e;n&&1===n.nodeType;)n=m(n),t=t||null!==n})),t},i=!1;do{(e=n(e))&&(r(e),i=o(e))}while(i&&e)};function n(e){return e.normalize(),a(e),S(e),!e||"SPAN"!==e.nodeName||e.textContent.trim()&&0!==e.attributes.length?e:(e.unwrap(),null)}e.normalize(),t(e)}function E(e,t){for(var n={},r=e;r&&r.ischildOf(t.parentElement);){var o=A(r);for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];n[i]||(n[i]=a)}r=r.parentElement}return n}function b(e,t,n,r){e.style[t]=r?e.style[t]+" "+n:e.style[t].replace(n,""),S(e),a(e),Array.from(e.querySelectorAll("[style*='".concat(n,"']"))).forEach((function(e){e.style[t]=e.style[t].replace(n,""),S(e),a(e)}))}function w(e,t,n){var r;e.style[t]=n,"color"===t&&(r={element:e,key:"color",value:n},[function(e){if("color"===e.key){var t=e.element.closest("[style*='text-decoration']");if(t){var n=y(e.element,t);if(n)for(var r in S(),w(n.center,"text-decoration-color","".concat(e.value)),n)g(n[r]);else w(t,"text-decoration-color","".concat(e.value))}}}].forEach((function(e){return e(r)}))),Array.from(e.querySelectorAll("[style*='".concat(t,"']"))).forEach((function(e){e.style[t]=null,S(e)}))}var C=function(e){return E(O(),e)};function S(e){if(!e)return null;if(e.getAttribute("style")){var t=A(e),n=function(n){t.hasOwnProperty(n)&&Array.from(e.querySelectorAll("[style*='".concat(t[n],"']"))).forEach((function(e){e.style[n]=null,S(e)}))};for(var r in t)n(r)}else e.removeAttribute("style")}function A(e){if(!e||!e.style)return{};var t={},n=e.getAttribute("style");if(n){var r=n.split(";");Array.isArray(r)&&r.forEach((function(e){var n=e.split(":");n[1]&&n[0]&&(t[n[0].trim()]=n[1].trim())}))}return t}var N=n(1),T={BR:"BR",HR:"HR",IMG:"IMG",INPUT:"INPUT",AUDIO:"AUDIO",VIDEO:"VIDEO",PICTURE:"PICTURE"};function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(e){Array.from(e.childNodes).forEach((function(t){if(1!==t.nodeType||t.textContent.trim()||0!==t.children.length||T[t.nodeName]||t.parentNode.removeChild(t),3===t.nodeType&&t.parentElement&&t.parentElement.normalize(),3===t.nodeType&&t.parentElement===e&&!t.parentElement.closest("p")&&t.textContent.trim()){var n=document.createElement("p");t.wrap(n)}}))}function O(){var e=document.getSelection();if(e){var t=e.focusNode;if(null!==t){for(;3===t.nodeType;)t=t.parentNode;return t}return null}}function L(e,t){var n=function(e){var t,n,r=e.tag;switch(r){case"#text":t=document.createTextNode(e.textContent);break;case"A":(t=document.createElement(r)).href=e.href,t.target=e.target;break;default:t=document.createElement(r),n=!0}return n&&t&&function(e,t){if(e.classList&&(t.classList=x(e.classList)),e.style){var n=function(e){var t=[];for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];t.push("".concat(n,":").concat(r))}return t.join(";")}(e.style);t.style=n}}(e,t),t};return t||e.type!==N[0]||(t=n(e)),Array.isArray(e.children)&&e.children.forEach((function(e){var r=n(e);r&&(t.appendChild(r),L(e,r))})),t}function P(e,t){"number"!=typeof t&&(t=0);var n=e.nodeName,r=!0,o={},i=!0;switch(N[t]&&(o.type=N[t],t++),n){case"#text":o.tag=n,o.textContent=e.textContent.replace(/\u200B/g,""),r=!1,o.textContent.trim()||(i=!1);break;case"A":o.tag=n,o.href=e.href,o.target=e.target;break;default:o.tag=n}if(!i)return null;if(r){var a=A(e);Object.keys(a).length>0&&(o.style=a),e.classList&&e.classList.length>0&&(o.classList=x(e.classList)),e.childNodes&&e.childNodes.length>0&&(o.children=x(e.childNodes).map((function(e){return P(e,t)})).filter((function(e){return e})))}return o}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){"object"!==R(t)&&(t={});var n=document.createElement(t.el||"span");return Array.from(e.childNodes).forEach((function(e){return n.appendChild(e)})),e.appendChild(n),n}function j(e){if(!e)return null;if(1!==e.nodeType&&(e=e.parentElement),r[e.nodeName])return e;for(var t=e;t&&"inline"===window.getComputedStyle(t).display&&t.parentElement;)t=t.parentElement;return!(!t||!r[t.nodeName])&&t}function _(e){return function(){for(var e=[],t=window.getSelection(),n=0;n<t.rangeCount;n++)e[n]=t.getRangeAt(n);return e}().map((function(t){return function(e,t){var n;void 0===t&&(t=window.getSelection().getRangeAt(0));if(t.isCollapsed)return[];void 0===e&&(e="span");"string"==typeof e&&(e=document.createElement(e));return n=function(e,t){var n=t.startContainer,r=t.endContainer,o=t.startOffset,i=t.endOffset;return function(t){var a=document.createRange(),l=e.cloneNode();return a.selectNodeContents(t),t===n&&3===n.nodeType&&(a.setStart(t,o),n=l,o=0),t===r&&3===r.nodeType&&(a.setEnd(t,i),r=l,i=1),a.surroundContents(l),l}}(e,t),F(t).map(n)}(e,t)})).flat()}function H(e){for(var t=((e=e||document.body).ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),n=[],r=t.nextNode();r;)n.push(r),r=t.nextNode();return n}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e;n.focus();var r=Array.from(n.childNodes).filter((function(e){return e.nodeType===Node.TEXT_NODE}));if(0===r.length){for(r=e;r&&r.firstChild&&3!==r.nodeType;)r=r.firstChild;r&&(r=[r])}var o=document.createRange();o.setStart(r[0],t),o.setEnd(r[0],t),o.collapse(!0);var i=window.getSelection();i.removeAllRanges(),i.addRange(o)}function I(e){var t,n,r=O().closest("[contenteditable]"),o=!0;if(r&&r.contentEditable||(o=!1),!o)return null;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){var i;if((n=t.getRangeAt(0)).deleteContents(),"string"==typeof e){(i=document.createElement("div")).innerHTML=e;for(var a,l,c=document.createDocumentFragment();a=i.firstChild;)l=c.appendChild(a);n.insertNode(c)}else"object"===R(e)&&n.insertNode(e);l&&((n=n.cloneRange()).setStartAfter(l),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}}function B(e,t){return e.intersectsNode?e.intersectsNode(t):(n=e,r=function(e){var t=e.ownerDocument.createRange();try{t.selectNode(e)}catch(n){t.selectNodeContents(e)}return t}(t),-1===n.compareBoundaryPoints(Range.END_TO_START,r)&&1===n.compareBoundaryPoints(Range.START_TO_END,r));var n,r}function F(e){var t=e.commonAncestorContainer;return H(t.parentNode||t).filter((function(t){return B(e,t)&&function(e){return e.textContent.length>0}(t)}))}function K(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={remove:!0};Object.assign(r,n),document.getSelection().setBaseAndExtent(e,0,t,t.childNodes.length),r.remove&&[e,t].forEach((function(e){return e.unwrap()}))}function q(e,t){window.getSelection();var n=document.createElement("text-selection");n.setAttribute("zero-space",0===e.textContent.length);var r=document.createElement("text-selection");return r.setAttribute("zero-space",0===t.textContent.length),e.prepend(n),t.appendChild(r),{firstFlag:n,lastFlag:r}}var z=n(0);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.stylesToPaste="object"===W(n.stylesToPaste)?n.stylesToPaste:null,this.paste=this.paste.bind(this),this.copy=this.copy.bind(this),this.start()}var t,n,r;return t=e,(n=[{key:"copy",value:function(e){var t=this,n="";if(W(window.getSelection)){var r=window.getSelection();if(r.rangeCount){for(var o=document.createElement("div"),i=function(){var e=r.getRangeAt(a).cloneContents();o.appendChild(e),Array.from(o.childNodes).forEach((function(n){if(3===n.nodeType){var o=E(r.getRangeAt(a).startContainer.parentNode,t.target),i=document.createElement("span");i.textContent=e.textContent,function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];e.style[n]=r}}(i,o),n.wrap(i)}else T[n.nodeName]&&"BR"!==n.nodeName&&n.parentElement.removeChild(n)}))},a=0,l=r.rangeCount;a<l;++a)i();n=o}}else W(document.selection)&&"Text"===document.selection.type&&(n=document.selection.createRange().htmlText);e.preventDefault(),e.clipboardData.setData("styleit/html",n.innerHTML),e.clipboardData.setData("text/plain",n.textContent)}},{key:"paste",value:function(e){e.shiftKey?this.pastePlainText(e):this.pasteWithStyles(e)}},{key:"pastePlainText",value:function(e){var t=this,n=e.clipboardData||window.clipboardData;e.preventDefault();var r=n.getData("text/plain").trim();if((r=r.replace(/\n/g,"<br/>")).trim()){var o=document.createElement("p");o.innerHTML=r,I(o),M(o),o.parentElement!==this.target&&o.unwrap(),Array.from(this.target.children).forEach((function(e){e.textContent.trim()||t.target.removeChild(e)}))}}},{key:"pasteWithStyles",value:function(e){e.preventDefault();var t=(e.clipboardData||window.clipboardData).getData("styleit/html").trim();if(t){var n=document.createElement("div");n.innerHTML=t,I(n),Array.from(this.target.children).forEach((function(e){e.textContent.trim()||e.parentElement.removeChild(e)})),Array.from(n.children).forEach((function(e){var t=e.parentElement.closest("h1,h2,h3,h4,h5,h6,p");1===e.nodeType&&"SPAN"!==e.nodeName&&t&&e.unwrap(),e.textContent.trim()||e.unwrap()}));var r=n.closest("h1,h2,h3,h4,h5,h6,p");if(r){var o=y(n,r,{tag:r.nodeName});o&&(o.left.appendChild(o.center),o.center.appendChild(o.right),o.right.unwrap(),o.center.unwrap())}g(this.target),M(n),n.unwrap()}else this.pastePlainText(e)}},{key:"start",value:function(){this.target.addEventListener("paste",this.paste),this.target.addEventListener("copy",this.copy)}},{key:"destroy",value:function(){this.target.removeEventListener("paste",this.paste),this.target.removeEventListener("copy",this.copy)}}])&&U(t.prototype,n),r&&U(t,r),e}(),J={},G={_blank:"_blank",_self:"_self",_parent:"_parent",_top:"_top"},Q=function(e){return e=(e=(e=(e=(e=e.replace(/https:/g,"")).replace(/http:/g,"")).replace(/mailto:/g,"")).replace(/tel:/g,"")).replace(/\//g,"")},Y=function(e){var t=document.createElement("a");return t.href=e,t};var Z=function e(t,n){var r=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t)return null;this.onInspect=n,this.target=t;var o=function(){var e=C(r.target);"function"==typeof r.onInspect&&r.onInspect(e),"function"==typeof J.inspect&&J.inspect(e);var t=O();if(t){var n=t.closest("a");n&&"function"==typeof J.inspectLink&&J.inspectLink({protocol:n.protocol,href:Q(n.href),target:n.getAttribute("target")||"",element:n})}};this.onKeyDown=function(e){if(8===e.keyCode&&r.target.children.length<=1&&!r.target.textContent)return e.preventDefault(),!1;o()},this.onClick=function(){o()},this.target.addEventListener("click",this.onClick),this.target.addEventListener("keydown",this.onKeyDown),this.Destroy=function(){r.target.removeEventListener("click",r.onClick),r.target.removeEventListener("keydown",r.onKeyDown),r.target=null}};function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ee=function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if($(this,e),!t)return null;"function"==typeof r.onKeyPress&&(this.onKeyPress=r.onKeyPress),this.target=t,this.keypress=function(e){if(8===e.keyCode){if(""===e.target.textContent.replace(/\s/g,"").replace(/[\u200B-\u200D\uFEFF]/g,""))return e.preventDefault(),!1}else if(13===e.keyCode){if(e.shiftKey)return I("<br/>"),e.preventDefault(),!1;var t=document.createRange(),r=window.getSelection(),o=j(r.anchorNode);if(o===n.target||!o)return!1;if(r.getRangeAt(0).extractContents(),t.setStart(r.anchorNode,r.anchorOffset),t.setEnd(o,o.childNodes.length),r.removeAllRanges(),r.addRange(t),r.isCollapsed)return o&&!n.target.textContent.trim()&&o!==n.target&&(Array.from(n.target.children).forEach((function(e){e===o||e.textContent.trim()||e.unwrap()})),o.innerHTML=o.innerHTML+"&#8203;",M(o),e.preventDefault()),!1;e.preventDefault();var i=t.extractContents();Array.from(i.children).forEach((function(e){1!==e.nodeType||e.textContent.trim()||T[e.nodeName]||e.unwrap()}));var a=document.createElement(o.nodeName||"p");a.appendChild(i),a.textContent.trim()||(a.innerHTML="&#8203;"),K(a,o),Array.from(a.previousSibling.attributes).forEach((function(e){a.setAttribute(e.name,e.value)}));var l=document.createElement("br");o.appendChild(l),r.removeAllRanges(),k(n.target),M(a,0)}else"function"==typeof n.onKeyPress&&n.onKeyPress(e)},this.target.addEventListener("keydown",this.keypress),this.Destroy=function(){n.target.removeEventListener("keydown",n.keypress),n.target=null}};function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"Connect",value:function(e,t){if("string"==typeof e){if(!(e=document.getElementById(e)))return null}else if(!u.isElement(e))return null;return function(e){k(e);var t,n=L(P(e));(t=e,new Promise((function(e){for(;t.firstElementChild;)t.firstElementChild.remove();e()}))).then((function(){return e.innerHTML=n.innerHTML}))}(e),this.plugins=function(e,t){return{copyPaste:new X(e,t),inspector:new Z(e,t.onInspect),keyPress:new ee(e,t)}}(e,t),e}},{key:"Destroy",value:function(){for(var e in this.plugins)this.plugins.hasOwnProperty(e)&&this.plugins[e].Destroy()}}])&&te(t.prototype,n),r&&te(t,r),e}();n(4);function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie=function(){function e(t,n){var r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.__config={onInspect:void 0},this.on=function(e,t){J[e]=t},this.Connector=new ne,this.modeHandlers=(re(r={},z.Toggle,(function(e,t,n,r){return o.onToggle(e,t,n,r)})),re(r,z.Extend,(function(e,t,n,r){return o.onExtend(e,t,n,r)})),r),this.config=n?Object.assign(this.__config,n):this.__config,this.events={styleChanged:this.config.onInspect},this.connectedElement=this.Connector.Connect(t,this.config)}var t,n,o;return t=e,(n=[{key:"save",value:function(){return P(this.connectedElement)}},{key:"load",value:function(e){return L(e,this.connectedElement)}},{key:"destroy",value:function(){for(var e in this.Connector.Destroy(),this)this[e]=null,delete this[e]}},{key:"unLink",value:function(){if(this.isValid()){var e=window.getSelection();if(e&&!e.toString()){var t,n=e.baseNode;return n&&3===n.nodeType&&n.parentElement&&(t=n.parentElement),n&&1===n.nodeType&&(t=t.closest("a")),t&&t.unwrap(),null}var r=_();Array.from(r).forEach((function(e){var t=e.closest("a");if(t){var n=y(e,t,{tag:"a"});n&&n.center.unwrap()}Array.from(e.querySelectorAll("a")).forEach((function(e){e.unwrap()})),e.unwrap()}));var o=q(r[0],r[r.length-1]);V(o.firstFlag,o.lastFlag)}}},{key:"link",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&(!e||e.href)&&this.isValid()){if(window.getSelection&&!window.getSelection().toString())return null;var t=function(e,t){return e=(e=e.replace(/:/g,"")).replace(/\/\//g,""),(e+=":").includes("http")&&(e+="//"),t.push(e),e},n=e.href,r=void 0===n?"":n,o=e.protocol,i=void 0===o?"":o,a=e.target,l=void 0===a?"":a,c=_("a"),s=[],u=Y(r),f=Q(r.trim()),d=i.trim()||u.protocol,p=null,h=G[l.trim().toLowerCase()];h&&(p=h),d.trim()&&(d=t(d,s)),f&&s.push(f);var m=s.join("");!function(e){e.forEach((function(e){Array.from(e.querySelectorAll("a")).forEach((function(e){return e.unwrap()}));var t=e.parentElement?e.parentElement.closest("a"):null;if(t){var n=y(e,t,{tag:"a"});n&&n.center.unwrap()}}))}(c),function(e,t,n){e.forEach((function(e){e.href=t,n&&e.setAttribute("target",n)}))}(c,m,p);var v=q(c[0],c[c.length-1]),E=v.firstFlag,b=v.lastFlag;V(E,b),g(this.connectedElement)}}},{key:"toggleClass",value:function(e,t){if(this.isValid()){if("string"!=typeof e)return null;var n=_();if(0!==n.length){t||(t={}),"boolean"!=typeof t.selection&&(t.selection=!0),("boolean"==typeof t.isON?t.isON:n[0].closest("[class='".concat(e,"']")))?n.forEach((function(t){if(t.parentElement){var n=t.parentElement.closest("[class='".concat(e,"']"));if(n){var r=y(t,n);r&&r.center.removeClassName(e)}}else t.removeClassName(e)})):n.forEach((function(t){return t.classList.add(e)}));var r=t.selection?q(n[0],n[n.length-1]):{firstFlag:null,lastFlag:null},o=r.firstFlag,i=r.lastFlag;if(g(this.connectedElement),o&&i)V(o,i);else{var a=window.getSelection();a.removeAllRanges&&a.removeAllRanges()}}}}},{key:"execCmd",value:function(e,t,n,r){var o=this;if(this.isValid()&&this.isVAlidKeyValue(e,t)){if(this.connectedElement.normalize(),this.ELEMENTS=[],n=n||z.Extend,r||(r={}),"boolean"!=typeof r.selection&&(r.selection=!0),this.ELEMENTS=_(),!r.selection){var i=this.ELEMENTS[this.ELEMENTS.length-1];i&&(this.caretHolder=this.createCaretPlacement(i))}r.unWrap&&Array.isArray(r.unWrap)&&r.unWrap.forEach((function(e){o.ELEMENTS.forEach((function(t){var n=t.closest(e);n&&n.unwrap()}))}));var a,l,c=r.selection?q(this.ELEMENTS[0],this.ELEMENTS[this.ELEMENTS.length-1]):{firstFlag:null,lastFlag:null},s=c.firstFlag,u=c.lastFlag;if(a=H(this.connectedElement),Array.isArray(a)||(a=[a]),a.forEach((function(e){e.nodeType===Node.TEXT_NODE&&e.parentElement&&"TEXT-SELECTION"!==e.parentElement.nodeName&&(e.textContent=e.textContent.replace(/\u200B/g,""))})),this.ELEMENTS.forEach((function(i){r.onOff=l;var a=o.modeHandlers[n](i,e,t,r);n===z.Toggle&&void 0===l&&(l=a)})),g(this.connectedElement),s&&u)V(s,u);else{var f=window.getSelection();f.removeAllRanges&&f.removeAllRanges(),this.caretHolder&&(M(this.caretHolder,this.caretHolder.textContent.length),this.caretHolder.unwrap(),this.caretHolder=null)}var d=C(this.connectedElement);"function"==typeof J.inspect&&J.inspect(d),this.dispatchEvent("styleChanged",d)}}},{key:"createCaretPlacement",value:function(e){if(!e)return null;var t=document.createElement("text-selection");return t.setAttribute("zero-space","true"),e.appendChild(t),t}},{key:"dispatchEvent",value:function(e,t){this.events[e]&&this.events[e](t)}},{key:"onToggle",value:function(e,t,n,o){if("block"!==o.target){var i=e.closest("[style*='".concat(n,"']"));if(i&&r[i.nodeName]){var a=D(i);return i.style[t]=null,a.style[t]=n,o.onOff=!1,this.onToggle(e,t,n,o)}if(i&&i!==e){void 0===o.onOff&&(o.onOff=!1);var l=y(e,i);l&&b(l.center,t,n,o.onOff)}else void 0===o.onOff&&i?o.onOff=!1:void 0===o.onOff&&(o.onOff=!0),b(e,t,n,o.onOff),g(e);return o.onOff}this.createBlockStyle(o,e,t,n)}},{key:"onExtend",value:function(e,t,n,r){if("block"===r.target)this.createBlockStyle(r,e,t,n);else{var o=e.closest("[style*='".concat(t,"']"));if(o){var i=y(e,o);if(i)w(i.center,t,n);else if("block"===r.target)o.style[t]=n;else{if("block"!==r.target)return w(D(o,{el:"span"}),t,n),o.style[t]=null,this.onExtend(e,t,n);if(o!==e){var a=y(e,o);a&&w(a.center,t,n)}}}else if("block"!==window.getComputedStyle(e).display&&"block"===r.target){var l=j(e);if(l&&l.ischildOf(this.connectedElement))w(parentElement,t,n);else{var c=document.createElement("div");parentElement.wrap(c),w(c,t,n)}}else w(e,t,n)}}},{key:"createBlockStyle",value:function(e,t,n,r){if("inline"===e.as){var o=j(t);if(o){var i=function(e){e.style[n]=null,Array.from(e.childNodes).forEach((function(e){3===e.nodeType?function(e){var t=document.createElement("span");t.style[n]=r,e.wrap(t)}(e):1!==e.nodeType||T[e.nodeName]?e.style[n]=r:i(e)}))};i(o)}else this.createBlockElAndStyleIt(n,r,t)}else{var a=j(t);a?(a.style[n]=r,Array.from(a.querySelectorAll("[style*='".concat(n,"']"))).forEach((function(e){return e.style[n]=null}))):this.createBlockElAndStyleIt(n,r,t)}}},{key:"createBlockElAndStyleIt",value:function(e,t,n){var r=document.createElement("p");r.style[e]=t,n.wrap(r)}},{key:"isVAlidKeyValue",value:function(e,t){return!("string"!=typeof e||"string"!=typeof t)}},{key:"isValid",value:function(){if(!this.connectedElement)return!1;if("false"===this.connectedElement.contentEditable)return!1;var e=O();return!(!e||!e.ischildOf(this.connectedElement)&&e!==this.connectedElement)||void 0}}])&&oe(t.prototype,n),o&&oe(t,o),e}();n.d(t,"default",(function(){return ae}));var ae=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=new ie(t,n);r&&(this.execCmd=r.execCmd,this.toggleClass=r.toggleClass,this.link=r.link,this.unLink=r.unLink,this.save=r.save,this.load=r.load,this.destroy=r.destroy,this.on=r.on,this.MODES=z,this.toggleClass=this.toggleClass.bind(r),this.execCmd=this.execCmd.bind(r),this.on=this.on.bind(r),this.link=this.link.bind(r),this.unLink=this.unLink.bind(r),this.save=this.save.bind(r),this.load=this.load.bind(r),this.destroy=this.destroy.bind(r))}}])}));
//# sourceMappingURL=main.js.map
//# sourceMappingURL=styleit-api.js.map