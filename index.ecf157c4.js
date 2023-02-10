!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire78b5;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire78b5=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.ecf157c4.js","jTL1L":"No-Image-Placeholder.b4c3556e.svg","kxKJ3":"symbol-defs.c45723b7.svg","5UbS1":"index.a222e42c.css","7nwxg":"library.afa9487c.js"}'));var o,s=a("bpxeT"),u=a("1t1Wn"),c=a("2TvXO"),l=(s=a("bpxeT"),c=a("2TvXO"),a("fKAmx"));o=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("jTL1L");var f;f=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("kxKJ3");var h={};h=function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var u=void 0;if(!s&&u)return u(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[o]={exports:{}};t[o][0].call(l.exports,(function(e){return i(t[o][1][e]||e)}),l,l.exports,e,t,n,r)}return n[o].exports}for(var a=void 0,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var o=i(a,"IMG"),s=i(a,"VIDEO"),u=i(a,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===u&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(s)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var s={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(s)}))},close:o};return s}},{}]},{},[1])(1);var d,p=function(e,t){"Escape"!==e.code||t.close()},v=(d=t(s)(t(c).mark((function e(n){var r,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return r=n.target.dataset.id,e.prev=3,e.next=6,Promise.all([l.themoviedbApi.getMovieById(r),l.themoviedbApi.getMovieTrailer(r)]);case 6:i=e.sent,h.create((t=i[0],a=void 0,s=void 0,u=void 0,c=void 0,d=void 0,v=void 0,g=void 0,k=void 0,b=void 0,w=void 0,a=t.title,s=t.original_title,u=t.overview,c=t.popularity,d=t.poster_path,v=t.vote_average,g=t.vote_count,k=t.genres,b=t.name,w=k.map((function(e){return e.name})).join(", "),'\n    <div class="modal">\n      <button data-modal-close type="button" class="modal__close-button">\n        <svg\n            class="modal__close-icon"\n            width="16"\n            height="16"\n            aria-label="close"\n            lang="en"\n          >\n            <use href="'.concat(f,'#close-icon"></use>\n          </svg>\n      </button>\n      <div class="modal__media-container">\n        <img\n          class="modal__poster"\n          src="').concat(d?"https://image.tmdb.org/t/p/w500".concat(d):o,'"\n          alt="').concat(a||b,' movie poster"\n        />\n      </div>     \n      <div class="modal__info">\n          <h1>').concat(a||b,'</h1>\n            <div class="modal__info-short">\n              <ul class="modal__info--keys">\n                <li class="modal__info-item">Vote / Votes:</li>\n                <li class="modal__info-item">Popularity:</li>\n                <li class="modal__info-item">Original Title:</li>\n                <li class="modal__info-item">Genre:</li>\n              </ul>\n              <ul class="modal__info--values">\n                <li class="modal__info-item">\n                  <span class="modal__info-item--accent modal__rating">').concat(v,'</span> /\n                  <span class="modal__info-item--accent modal__total-rates">').concat(g,'</span>\n                </li>\n                <li class="modal__info-item">').concat(c,'</li>\n                <li class="modal__info-item modal__info-item--title">').concat(s,'</li>\n                <li class="modal__info-item">').concat(w,'</li>\n              </ul>\n            </div>\n            <div class="modal__description">\n              <h3>ABOUT</h3>\n              <p>\n                ').concat(u,'\n              </p>\n            </div>\n            <div class="modal__buttons">\n              <button type="button" modal-button class="modal__btn--watched">\n                ADD TO WATCHED\n              </button>\n              <button type="button" modal-button class="modal__btn--queue">\n                ADD TO QUEUE\n              </button>\n            </div>\n        </div>\n      </div>')),{onShow:function(e){m(),e.element().querySelector("button[data-modal-close]").onclick=e.close,document.addEventListener("keydown",(function(t){return p(t,e)}),{once:!0})},onClose:function(e){m(),document.removeEventListener("keydown",(function(t){return p(t,e)}))}}).show(),y(i),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}var t,a,s,u,c,d,v,g,k,b,w}),e,null,[[3,12]])}))),function(e){return d.apply(this,arguments)});function m(){document.body.classList.toggle("modal-open")}function y(e){if(e[1].results.length>0){var t=e[1].results[0].key,n=document.querySelector(".modal__media-container");n.addEventListener("click",(function(e){n.innerHTML='<iframe class="modal__trailer" width="420" height="315"\n        src="https://www.youtube.com/embed/'.concat(t,'"> frameborder="0" allowfullscreen\n        </iframe>')}))}}var g;
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,g=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e,t){var n,r,i,a,o=Object.prototype.hasOwnProperty;for(i=1,a=arguments.length;i<a;i+=1)for(r in n=arguments[i])o.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){"use strict";e.exports=function(e){return void 0===e}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,n){"use strict";var r=n(2),i=n(17),a=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):a(e,t,n)}},function(e,t,n){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){"use strict";var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){var i,a;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(a=t.length,i=n;n>=0&&i<a;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){"use strict";var r=n(29),i=n(30),a=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=a(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){"use strict";n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){"use strict";var r=n(13),i=n(7),a=n(0),o=n(1),s=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(e,t){this._options=a({},c,t),this._currentPage=0,this._view=new s(e,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),a=this._getEdge(e);return t.leftPageNumber=a.left,t.rightPageNumber=a.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),a=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(a/2),(n=(t=Math.max(e-r,1))+a-1)>i&&(t=Math.max(i-a+1,1),n=i)):(t=(o-1)*a+1,n=o*a,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),e.exports=l},function(e,t,n){"use strict";var r=n(0),i=n(14),a=n(4),o=n(16),s=n(2),u=n(5),c=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(e){r(e.prototype,f.prototype)},f.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},f.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},f.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},f.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},f.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},f.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},f.prototype.on=function(e,t,n){var r=this;a(e)?(e=e.split(l),c(e,(function(e){r._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},f.prototype.once=function(e,t,n){var r=this;if(o(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},f.prototype._spliceMatches=function(e,t){var n,r=0;if(s(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},f.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,a=t===r.context,o=i&&a;return o&&n._forgetContext(r.context),o}},f.prototype._offByEventName=function(e,t){var n=this,r=u(t),i=n._matchHandler(t);e=e.split(l),c(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},f.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},f.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):a(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):u(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},f.prototype.off=function(e,t){a(e)?this._offByEventName(e,t):arguments.length?u(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},f.prototype.fire=function(e){this.invoke.apply(this,arguments)},f.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(e){return this.getListenerLength(e)>0},f.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=f},function(e,t,n){"use strict";var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){"use strict";e.exports=function(e){return null===e}},function(e,t,n){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){"use strict";var r=n(3),i=n(7),a=n(21),o=n(22),s=n(24),u=n(25),c=n(0),l=n(4),f=n(28),h=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],v=["prev","next"],m=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},d,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!f(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(p,(function(e){this._buttons[e]=h.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(p,(function(e){var t="disabled"+h.capitalizeFirstLetter(e);this._buttons[t]=h.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(v,(function(e){var t=e+"More";this._buttons[t]=h.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,u(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,u(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=h.createElementByTemplate(this._template.currentPage,{page:n}):(t=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||u(t,this._firstItemClassName),n!==i||e.nextMore||u(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,r,i=a(t);s(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!h.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],h.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){"use strict";var r=n(4),i=n(3),a=n(23);function o(e,t,n,r){function o(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,r){var o=a(e,t),s=!1;i(o,(function(e){return e.handler!==n||(s=!0,!1)})),s||o.push({handler:n,wrappedHandler:r})}(e,t,n,o)}e.exports=function(e,t,n,a){r(t)?i(t.split(/\s+/g),(function(t){o(e,t,n,a)})):i(t,(function(t,r){o(e,r,t,n)}))}},function(e,t,n){"use strict";var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){"use strict";var r=n(3),i=n(8),a=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),s=e.classList,u=[];s?r(n,(function(t){e.classList.add(t)})):((t=a(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,u)<0&&u.push(e)})),o(e,u))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict";var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){"use strict";var r=n(8),i=n(3),a=n(2),o=n(4),s=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,d=/^["']\w+["']$/,p=/"|'/g,v=/^-?\d+\.?\d*$/,m={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],a=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?a+=1:"/if"===e?a-=1:a||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(o,i)),o=i+1)})),r.push(t.slice(o)),{exps:n,sourcesInsideIf:r}}(e,t),a=!1,o="";return i(r.exps,(function(e,t){return(a=b(e,n))&&(o=w(r.sourcesInsideIf[t],n)),!a})),o},each:function(e,t,n){var r=b(e,n),o=a(r)?"@index":"@key",u={},c="";return i(r,(function(e,r){u[o]=r,u["@this"]=e,s(n,u),c+=w(t.slice(),n)})),c},with:function(e,t,n){var i=r("as",e),a=e[i+1],o=b(e.slice(0,i),n),u={};return u[a]=o,w(t,s(n,u))||""}},y=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],a=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(a,r)),a=r+n[0].length,n=t.exec(e);return i.push(e.slice(a)),i};function g(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:d.test(e)?r=e.replace(p,""):c.test(e)?r=g((n=e.split(l))[0],t)[g(n[1],t)]:f.test(e)?r=g((n=e.split(h))[0],t)[n[1]]:v.test(e)&&(r=parseFloat(e)),r}function k(e,t,n){for(var r,i,a,s,u=m[e],c=1,l=2,f=t[l];c&&o(f);)0===f.indexOf(e)?c+=1:0===f.indexOf("/"+e)&&(c-=1,r=l),f=t[l+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=u(t[0].split(" ").slice(1),(i=0,a=r,(s=t.splice(i+1,a-i)).pop(),s),n),t}function b(e,t){var n=g(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(g(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function w(e,t){for(var n,r,i,a=1,s=e[a];o(s);)r=(n=s.split(" "))[0],m[r]?(i=k(r,e.splice(a,e.length-a),t),e=e.concat(i)):e[a]=b(n,t),s=e[a+=2];return e.join("")}e.exports=function(e,t){return w(y(e,u),t)}},function(e,t,n){"use strict";var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,a="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(a);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])};var k=new(t(g()))("pagination",{totalItems:300,itemsPerPage:7,visiblePages:7,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}),b=a("4Nugj");l=a("fKAmx");var w=a("8MBJY"),x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e,t){var n=_.default(e,t,"get");return E.default(e,n)};var _=I(a("1UHsN")),E=I(a("ffZzF"));function I(e){return e&&e.__esModule?e:{default:e}}var T={};Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(e,t,n){N.default(e,t),t.set(e,n)};var S,N=(S=a("5k7tO"))&&S.__esModule?S:{default:S};var A={};Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(e,t,n){var r=C.default(e,t,"set");return O.default(e,r,n),n};var C=D(a("1UHsN")),O=D(a("jdVyQ"));function D(e){return e&&e.__esModule?e:{default:e}}var R=a("a2hTj"),L=a("8nrFW"),P=new WeakMap,M=new WeakMap,U=new(function(){"use strict";function e(){t(w)(this,e),t(T)(this,P,{writable:!0,value:[]}),t(T)(this,M,{writable:!0,value:null})}return t(R)(e,[{key:"getMovieGenresPreview",value:function(e){var n=this,r=e.map((function(e){return t(x)(n,M).get(e)}));return 0===r.length?"Unknown genre":r.length<=1?r:2===r.length?r.join(", "):t(L)(r.slice(0,2)).concat(["other"]).join(", ")}},{key:"movies",get:function(){return t(x)(this,P)},set:function(e){t(A)(this,P,e)}},{key:"genres",get:function(){return t(x)(this,P)},set:function(e){t(A)(this,M,e)}}]),e}()),F={};!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof F?F=t(e):e.Notiflix=t(e)}(void 0!==n?n:"undefined"!=typeof window?window:F,(function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,h=function(s,l,h,p){if(!u("body"))return!1;t||d.Notify.init({});var v=c(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var m={};"object"==typeof h?m=h:"object"==typeof p&&(m=p),t=c(!0,t,m)}var y,g,k=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(y=l,(g=e.document.createElement("div")).innerHTML=y,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(k.fontAwesomeIconColor=k.background),t.cssAnimation||(t.cssAnimationDuration=0);var b=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(b.id=o.wrapID,b.style.width=t.width,b.style.zIndex=t.zindex,b.style.opacity=t.opacity,"center-center"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.top=t.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===t.position?(b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.left="auto"):"left-top"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===t.position?(b.style.left=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=t.distance,b.style.top=t.distance,b.style.left="auto",b.style.bottom="auto"),t.backOverlay){var w=e.document.getElementById(o.overlayID)||e.document.createElement("div");w.id=o.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=t.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=k.backOverlayColor||t.backOverlayColor,w.className=t.cssAnimation?"nx-with-animation":"",w.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(w)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(b);var x=e.document.createElement("div");x.id=t.ID+"-"+f,x.className=t.className+" "+k.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=k.textColor,x.style.background=k.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof h&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+k.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+k.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+k.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var E="";s===n?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=E+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var I=e.document.getElementById(o.wrapID);I.insertBefore(x,I.firstChild)}else e.document.getElementById(o.wrapID).appendChild(x);var T=e.document.getElementById(x.id);if(T){var S,N,A=function(){T.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&b.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},C=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(N)};if(t.closeButton&&"function"!=typeof h)e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)}));if(("function"==typeof h||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof h&&h(),A();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var O=function(){S=setTimeout((function(){A()}),t.timeout),N=setTimeout((function(){C()}),t.timeout+t.cssAnimationDuration)};O(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(N)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),O()})))}}if(t.showOnlyTheLastOne&&f>0)for(var D=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),R=0;R<D.length;R++){var L=D[R];null!==L.parentNode&&L.parentNode.removeChild(L)}t=c(!0,t,v)},d={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){h(n,e,t,r)},failure:function(e,t,n){h(r,e,t,n)},warning:function(e,t,n){h(i,e,t,n)},info:function(e,t,n){h(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}}));b=a("4Nugj");function V(e){if(e.total_results)1===e.total_results?F.Notify.success("We found 1 movie",{position:"center-top",borderRadius:"2px",success:{background:"#ffffff",textColor:"#000"}}):F.Notify.success("".concat(e.total_results," movies found"),{position:"center-top",borderRadius:"2px",success:{background:"#ffffff",textColor:"#000"}});else{b.refs.errorNotification.innerHTML="Search result is not successful. Enter the correct movie name.";setTimeout((function(){b.refs.errorNotification.innerHTML=""}),5e3)}}var j={};!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof j?j=t(e):e.Notiflix=t(e)}(void 0!==n?n:"undefined"!=typeof window?window:j,(function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",r="Hourglass",i="Circle",a="Arrows",o="Dots",s="Pulse",u="Custom",c="Notiflix",l={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},h=function(t){return t||(t="head"),null!==e.document[t]||(f('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},d=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=d(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},p=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},v=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},m=function(c,v,m,g,k){if(!h("body"))return!1;t||y.Loading.init({});var b=d(!0,t,{});if("object"==typeof v&&!Array.isArray(v)||"object"==typeof m&&!Array.isArray(m)){var w={};"object"==typeof v?w=v:"object"==typeof m&&(w=m),t=d(!0,t,w)}var x,_,E="";if("string"==typeof v&&v.length>0&&(E=v),g){var I="";(E=E.length>t.messageMaxLength?p(E).toString().substring(0,t.messageMaxLength)+"...":p(E).toString()).length>0&&(I='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+E+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var T="";if(c===n)x=t.svgSize,_=t.svgColor,x||(x="60px"),_||(_="#32c682"),T='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+_+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===r)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===i)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===a)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===u&&null!==t.customSvgCode&&null===t.customSvgUrl)T=t.customSvgCode||"";else if(c===u&&null!==t.customSvgUrl&&null===t.customSvgCode)T='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===u&&(null===t.customSvgUrl||null===t.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;T=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var S=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),N=e.innerWidth,A=S>=N?N-40+"px":S+"px",C='<div style="width:'+A+"; height:"+A+';" class="'+t.className+"-icon"+(E.length>0?" nx-with-message":"")+'">'+T+"</div>",O=e.document.createElement("div");if(O.id=l.ID,O.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),O.style.zIndex=t.zindex,O.style.background=t.backgroundColor,O.style.animationDuration=t.cssAnimationDuration+"ms",O.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',O.style.display="flex",O.style.flexWrap="wrap",O.style.flexDirection="column",O.style.alignItems="center",O.style.justifyContent="center",t.rtl&&(O.setAttribute("dir","rtl"),O.classList.add("nx-rtl-on")),O.innerHTML=C+I,!e.document.getElementById(O.id))if(e.document.body.appendChild(O),t.clickToClose)e.document.getElementById(O.id).addEventListener("click",(function(){O.classList.add("nx-remove");var e=setTimeout((function(){null!==O.parentNode&&(O.parentNode.removeChild(O),clearTimeout(e))}),t.cssAnimationDuration)}))}else if(e.document.getElementById(l.ID))var D=e.document.getElementById(l.ID),R=setTimeout((function(){D.classList.add("nx-remove");var e=setTimeout((function(){null!==D.parentNode&&(D.parentNode.removeChild(D),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(R)}),k);t=d(!0,t,b)},y={Loading:{init:function(n){t=d(!0,l,n),function(t,n){if(!h("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(v,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return f("You have to initialize the Loading module before call Merge function."),!1;t=d(!0,t,e)},standard:function(e,t){m(n,e,t,!0,0)},hourglass:function(e,t){m(r,e,t,!0,0)},circle:function(e,t){m(i,e,t,!0,0)},arrows:function(e,t){m(a,e,t,!0,0)},dots:function(e,t){m(o,e,t,!0,0)},pulse:function(e,t){m(s,e,t,!0,0)},custom:function(e,t){m(u,e,t,!0,0)},notiflix:function(e,t){m(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),m(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var r=e.document.getElementById(l.ID);if(r)if(n.length>0){n=n.length>t.messageMaxLength?p(n).substring(0,t.messageMaxLength)+"...":p(n);var i=r.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var a=e.document.createElement("p");a.id=t.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=t.messageColor,a.style.fontSize=t.messageFontSize,a.innerHTML=n,r.appendChild(a)}}else f("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?d(!0,e.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}}));var B=a("ds8z5"),H=(w=a("8MBJY"),R=a("a2hTj"),a("eYQtU")),z=(u=a("1t1Wn"),L=a("8nrFW"),{});Object.defineProperty(z,"__esModule",{value:!0}),z.default=function(e){return X(e)};var W=Q(a("ge8co")),q=Q(a("cZGw3")),G=Q(a("fVNic")),K=Q(a("gD1JV"));function Q(e){return e&&e.__esModule?e:{default:e}}function X(e){var t="function"==typeof Map?new Map:void 0;return X=function(e){if(null===e||!q.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return W.default(e,arguments,G.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),K.default(n,e)},X(e)}var J,Y,$,Z=a("2MbLg"),ee=J={};function te(){throw new Error("setTimeout has not been defined")}function ne(){throw new Error("clearTimeout has not been defined")}function re(e){if(Y===setTimeout)return setTimeout(e,0);if((Y===te||!Y)&&setTimeout)return Y=setTimeout,setTimeout(e,0);try{return Y(e,0)}catch(t){try{return Y.call(null,e,0)}catch(t){return Y.call(this,e,0)}}}!function(){try{Y="function"==typeof setTimeout?setTimeout:te}catch(e){Y=te}try{$="function"==typeof clearTimeout?clearTimeout:ne}catch(e){$=ne}}();var ie,ae=[],oe=!1,se=-1;function ue(){oe&&ie&&(oe=!1,ie.length?ae=ie.concat(ae):se=-1,ae.length&&ce())}function ce(){if(!oe){var e=re(ue);oe=!0;for(var t=ae.length;t;){for(ie=ae,ae=[];++se<t;)ie&&ie[se].run();se=-1,t=ae.length}ie=null,oe=!1,function(e){if($===clearTimeout)return clearTimeout(e);if(($===ne||!$)&&clearTimeout)return $=clearTimeout,clearTimeout(e);try{$(e)}catch(t){try{return $.call(null,e)}catch(t){return $.call(this,e)}}}(e)}}function le(e,t){this.fun=e,this.array=t}function fe(){}ee.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ae.push(new le(e,t)),1!==ae.length||oe||re(ce)},le.prototype.run=function(){this.fun.apply(null,this.array)},ee.title="browser",ee.browser=!0,ee.env={},ee.argv=[],ee.version="",ee.versions={},ee.on=fe,ee.addListener=fe,ee.once=fe,ee.off=fe,ee.removeListener=fe,ee.removeAllListeners=fe,ee.emit=fe,ee.prependListener=fe,ee.prependOnceListener=fe,ee.listeners=function(e){return[]},ee.binding=function(e){throw new Error("process.binding is not supported")},ee.cwd=function(){return"/"},ee.chdir=function(e){throw new Error("process.chdir is not supported")},ee.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var he=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},de={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(h=64)),r.push(n[l],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(he(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},pe=function(e){return function(e){var t=he(e);return de.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ve=function(e){try{return de.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var me=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},ye=function(){try{return me()||function(){if(void 0!==J&&void 0!==J.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&ve(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},ge=function(e){var t,n;return null===(n=null===(t=ye())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ke=function(e){var t=ge(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},be=function(){var e;return null===(e=ye())||void 0===e?void 0:e.config},we=function(e){var t;return null===(t=ye())||void 0===t?void 0:t["_".concat(e)]},xe=function(){"use strict";function e(){var n=this;t(w)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(R)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[pe(JSON.stringify({alg:"none",type:"JWT"})),pe(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ie(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Te=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a){var o;return t(w)(this,r),(o=n.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(t(B)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(B)(o),Se.prototype.create),o}return r}(t(z)(Error)),Se=function(){"use strict";function e(n,r,i){t(w)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(R)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Ne(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Te(a,u,i);return c}}]),e}();function Ne(e,t){return e.replace(Ae,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var Ae=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Oe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(De(l)&&De(f)){if(!Oe(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,d=!1,p=void 0;try{for(var v,m=r[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){d=!0,p=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw p}}return!0}function De(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=t(u)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},c=Object.entries(e)[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function Le(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(u)(e.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function Pe(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me=function(){"use strict";function e(n,r){var i=this;t(w)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(R)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ue),void 0===r.error&&(r.error=Ue),void 0===r.complete&&(r.complete=Ue);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Ue(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(e){return e&&e._delegate?e._delegate:e}s=a("bpxeT"),w=a("8MBJY"),R=a("a2hTj");var Ve=a("hKHmD"),je=(L=a("8nrFW"),c=a("2TvXO"),s=a("bpxeT"),w=a("8MBJY"),R=a("a2hTj"),u=a("1t1Wn"),L=a("8nrFW"),c=a("2TvXO"),function(){"use strict";function e(n,r,i){t(w)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(R)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}()),Be="[DEFAULT]",He=function(){"use strict";function e(n,r){t(w)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(R)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new xe;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=t(u)(a.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var h=this.getOrInitializeService({instanceIdentifier:f});l.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(L)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(L)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var h=t(u)(l.value,2),d=h[0],p=h[1],v=this.normalizeInstanceIdentifier(d);i===v&&p.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Be?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.component?this.component.multipleInstances?e:Be:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var ze,We,qe=function(){"use strict";function e(n){t(w)(this,e),this.name=n,this.providers=new Map}return t(R)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new He(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Ge=(w=a("8MBJY"),R=a("a2hTj"),Ve=a("hKHmD"),L=a("8nrFW"),[]);(We=ze||(ze={}))[We.DEBUG=0]="DEBUG",We[We.VERBOSE=1]="VERBOSE",We[We.INFO=2]="INFO",We[We.WARN=3]="WARN",We[We.ERROR=4]="ERROR",We[We.SILENT=5]="SILENT";var Ke,Qe={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},Xe=ze.INFO,Je=(Ke={},t(Ve)(Ke,ze.DEBUG,"log"),t(Ve)(Ke,ze.VERBOSE,"log"),t(Ve)(Ke,ze.INFO,"info"),t(Ve)(Ke,ze.WARN,"warn"),t(Ve)(Ke,ze.ERROR,"error"),Ke),Ye=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<e.logLevel)){var s=(new Date).toISOString(),u=Je[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(L)(i)))}},$e=function(){"use strict";function e(n){t(w)(this,e),this.name=n,this._logLevel=Xe,this._logHandler=Ye,this._userLogHandler=null,Ge.push(this)}return t(R)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ze))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Qe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.DEBUG].concat(t(L)(n))),this._logHandler.apply(this,[this,ze.DEBUG].concat(t(L)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.VERBOSE].concat(t(L)(n))),this._logHandler.apply(this,[this,ze.VERBOSE].concat(t(L)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.INFO].concat(t(L)(n))),this._logHandler.apply(this,[this,ze.INFO].concat(t(L)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.WARN].concat(t(L)(n))),this._logHandler.apply(this,[this,ze.WARN].concat(t(L)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.ERROR].concat(t(L)(n))),this._logHandler.apply(this,[this,ze.ERROR].concat(t(L)(n)))}}]),e}();s=a("bpxeT");var Ze={};Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){et.default(e,t,n[t])}))}return e};var et=function(e){return e&&e.__esModule?e:{default:e}}(a("hKHmD"));var tt,nt;L=a("8nrFW"),c=a("2TvXO"),L=a("8nrFW");var rt=new WeakMap,it=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap;var ut={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return it.get(e);if("objectStoreNames"===t)return e.objectStoreNames||at.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ct(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(nt||(nt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(ht(this),n),ft(rt.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return ft(e.apply(ht(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[ht(this),n].concat(t(L)(i)));return at.set(s,n.sort?n.sort():[n]),ft(s)}}function lt(e){return"function"==typeof e?ct(e):(e instanceof IDBTransaction&&function(e){if(!it.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));it.set(e,t)}}(e),t=e,(tt||(tt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,ut):e);var t}function ft(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(ft(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&rt.set(e,t)})).catch((function(){})),st.set(n,t),n;var t,n;if(ot.has(e))return ot.get(e);var r=lt(e);return r!==e&&(ot.set(e,r),st.set(r,e)),r}var ht=function(e){return st.get(e)};function dt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=ft(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(ft(s.result),e.oldVersion,e.newVersion,ft(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var pt=["get","getKey","getAll","getAllKeys","count"],vt=["put","add","delete","clear"],mt=new Map;function yt(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(mt.get(n))return mt.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=vt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||pt.includes(r))){var o=function(){var e=t(s)(t(c).mark((function e(n){var o,s,u,l,f,h,d=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=d.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=d[u];return f=this.transaction(n,a?"readwrite":"readonly"),h=f.store,i&&(h=h.index(s.shift())),e.next=7,Promise.all([(l=h)[r].apply(l,t(L)(s)),a&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}();return mt.set(n,o),o}}}ut=function(e){return t(Ze)({},e,{get:function(t,n,r){return yt(t,n)||e.get(t,n,r)},has:function(t,n){return!!yt(t,n)||e.has(t,n)}})}(ut);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gt=function(){"use strict";function e(n){t(w)(this,e),this.container=n}return t(R)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var kt,bt,wt="@firebase/app",xt="0.9.3",_t=new $e("@firebase/app"),Et="[DEFAULT]",It=(kt={},t(Ve)(kt,wt,"fire-core"),t(Ve)(kt,"@firebase/app-compat","fire-core-compat"),t(Ve)(kt,"@firebase/analytics","fire-analytics"),t(Ve)(kt,"@firebase/analytics-compat","fire-analytics-compat"),t(Ve)(kt,"@firebase/app-check","fire-app-check"),t(Ve)(kt,"@firebase/app-check-compat","fire-app-check-compat"),t(Ve)(kt,"@firebase/auth","fire-auth"),t(Ve)(kt,"@firebase/auth-compat","fire-auth-compat"),t(Ve)(kt,"@firebase/database","fire-rtdb"),t(Ve)(kt,"@firebase/database-compat","fire-rtdb-compat"),t(Ve)(kt,"@firebase/functions","fire-fn"),t(Ve)(kt,"@firebase/functions-compat","fire-fn-compat"),t(Ve)(kt,"@firebase/installations","fire-iid"),t(Ve)(kt,"@firebase/installations-compat","fire-iid-compat"),t(Ve)(kt,"@firebase/messaging","fire-fcm"),t(Ve)(kt,"@firebase/messaging-compat","fire-fcm-compat"),t(Ve)(kt,"@firebase/performance","fire-perf"),t(Ve)(kt,"@firebase/performance-compat","fire-perf-compat"),t(Ve)(kt,"@firebase/remote-config","fire-rc"),t(Ve)(kt,"@firebase/remote-config-compat","fire-rc-compat"),t(Ve)(kt,"@firebase/storage","fire-gcs"),t(Ve)(kt,"@firebase/storage-compat","fire-gcs-compat"),t(Ve)(kt,"@firebase/firestore","fire-fst"),t(Ve)(kt,"@firebase/firestore-compat","fire-fst-compat"),t(Ve)(kt,"fire-js","fire-js"),t(Ve)(kt,"firebase","fire-js-all"),kt),Tt=new Map,St=new Map;function Nt(e,t){try{e.container.addComponent(t)}catch(n){_t.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function At(e){var t=e.name;if(St.has(t))return _t.debug("There were multiple attempts to register component ".concat(t,".")),!1;St.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=Tt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Nt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Ct(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ot=(bt={},t(Ve)(bt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(Ve)(bt,"bad-app-name","Illegal App name: '{$appName}"),t(Ve)(bt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(Ve)(bt,"app-deleted","Firebase App named '{$appName}' already deleted"),t(Ve)(bt,"no-options","Need to provide options, when not being deployed to hosting via source."),t(Ve)(bt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(Ve)(bt,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(Ve)(bt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(Ve)(bt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(Ve)(bt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(Ve)(bt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),bt),Dt=new Se("app","Firebase",Ot),Rt=function(){"use strict";function e(n,r,i){var a=this;t(w)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new je("app",(function(){return a}),"PUBLIC"))}return t(R)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}]),e}(),Lt="9.17.1";function Pt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Et,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Dt.create("bad-app-name",{appName:String(a)});if(n||(n=be()),!n)throw Dt.create("no-options");var o=Tt.get(a);if(o){if(Oe(n,o.options)&&Oe(i,o.config))return o;throw Dt.create("duplicate-app",{appName:a})}var s=new qe(a),u=!0,c=!1,l=void 0;try{for(var f,h=St.values()[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=f.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var p=new Rt(n,i,s);return Tt.set(a,p),p}function Mt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=Tt.get(e);if(!t&&e===Et)return Pt();if(!t)throw Dt.create("no-app",{appName:e});return t}function Ut(e,t,n){var r,i=null!==(r=It[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void _t.warn(s.join(" "))}At(new je("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ft="firebase-heartbeat-store",Vt=null;function jt(){return Vt||(Vt=dt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ft)}}).catch((function(e){throw Dt.create("idb-open",{originalErrorMessage:e.message})}))),Vt}function Bt(e){return Ht.apply(this,arguments)}function Ht(){return(Ht=t(s)(t(c).mark((function e(n){var r,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,jt();case 3:return r=e.sent,e.abrupt("return",r.transaction(Ft).objectStore(Ft).get(qt(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Te?_t.warn(e.t0.message):(i=Dt.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),_t.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function zt(e,t){return Wt.apply(this,arguments)}function Wt(){return(Wt=t(s)(t(c).mark((function e(n,r){var i,a,o,s;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,jt();case 3:return i=e.sent,a=i.transaction(Ft,"readwrite"),o=a.objectStore(Ft),e.next=8,o.put(r,qt(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof Te?_t.warn(e.t0.message):(s=Dt.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),_t.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function qt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt=function(){"use strict";function e(n){var r=this;t(w)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Jt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(R)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r,i,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Kt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r,i,a,o,s;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=Kt(),i=Qt(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=pe(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function Kt(){return(new Date).toISOString().substring(0,10)}function Qt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Yt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Yt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Xt,Jt=function(){"use strict";function e(n){t(w)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(R)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ie()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Bt(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return a=t.sent,t.abrupt("return",zt(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a;return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",zt(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(L)(a.heartbeats).concat(t(L)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function Yt(e){return pe(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt="",At(new je("platform-logger",(function(e){return new gt(e)}),"PRIVATE")),At(new je("heartbeat",(function(e){return new Gt(e)}),"PRIVATE")),Ut(wt,xt,Xt),Ut(wt,xt,"esm2017"),Ut("fire-js","");B=a("ds8z5"),s=a("bpxeT"),w=a("8MBJY"),R=a("a2hTj"),Ve=a("hKHmD");var $t={};Object.defineProperty($t,"__esModule",{value:!0}),$t.default=function(e,t,n){return en(e,t,n)};var Zt=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function en(e,t,n){return(en="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Zt.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var tn=a("fVNic");H=a("eYQtU"),u=a("1t1Wn"),L=a("8nrFW"),Z=a("2MbLg"),c=a("2TvXO");function nn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function rn(){return t(Ve)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var an=rn,on=new Se("auth","Firebase",rn()),sn={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},un=new $e("@firebase/auth");function cn(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;un.logLevel<=ze.ERROR&&(a=un).error.apply(a,["Auth (".concat(Lt,"): ").concat(e)].concat(t(L)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw dn.apply(void 0,[e].concat(t(L)(r)))}function fn(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return dn.apply(void 0,[e].concat(t(L)(r)))}function hn(e,n,r){var i=Object.assign(Object.assign({},an()),t(Ve)({},n,r));return new Se("auth","Firebase",i).create(n,{appName:e.name})}function dn(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=t(L)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(L)(u)))}return(a=on).create.apply(a,[e].concat(t(L)(r)))}function pn(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw dn.apply(void 0,[n].concat(t(L)(i)))}function vn(e){var t="INTERNAL ASSERTION FAILED: "+e;throw cn(t),new Error(t)}function mn(e,t){e||vn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn=new Map;function gn(e){mn(e instanceof Function,"Expected a class definition");var t=yn.get(e);return t?(mn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,yn.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e,t){var n=Ct(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Oe(n.getOptions(),null!=t?t:{}))return r;ln(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function wn(){return"http:"===xn()||"https:"===xn()}function xn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!wn()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var En=function(){"use strict";function e(n,r){t(w)(this,e),this.shortDelay=n,this.longDelay=r,mn(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())||"object"==typeof navigator&&"ReactNative"===navigator.product}return t(R)(e,[{key:"get",value:function(){return _n()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e,t){mn(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn,Sn=function(){"use strict";function e(){t(w)(this,e)}return t(R)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Nn=(Tn={},t(Ve)(Tn,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(Ve)(Tn,"MISSING_CUSTOM_TOKEN","internal-error"),t(Ve)(Tn,"INVALID_IDENTIFIER","invalid-email"),t(Ve)(Tn,"MISSING_CONTINUE_URI","internal-error"),t(Ve)(Tn,"INVALID_PASSWORD","wrong-password"),t(Ve)(Tn,"MISSING_PASSWORD","internal-error"),t(Ve)(Tn,"EMAIL_EXISTS","email-already-in-use"),t(Ve)(Tn,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(Ve)(Tn,"INVALID_IDP_RESPONSE","invalid-credential"),t(Ve)(Tn,"INVALID_PENDING_TOKEN","invalid-credential"),t(Ve)(Tn,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(Ve)(Tn,"MISSING_REQ_TYPE","internal-error"),t(Ve)(Tn,"EMAIL_NOT_FOUND","user-not-found"),t(Ve)(Tn,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(Ve)(Tn,"EXPIRED_OOB_CODE","expired-action-code"),t(Ve)(Tn,"INVALID_OOB_CODE","invalid-action-code"),t(Ve)(Tn,"MISSING_OOB_CODE","internal-error"),t(Ve)(Tn,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(Ve)(Tn,"INVALID_ID_TOKEN","invalid-user-token"),t(Ve)(Tn,"TOKEN_EXPIRED","user-token-expired"),t(Ve)(Tn,"USER_NOT_FOUND","user-token-expired"),t(Ve)(Tn,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(Ve)(Tn,"INVALID_CODE","invalid-verification-code"),t(Ve)(Tn,"INVALID_SESSION_INFO","invalid-verification-id"),t(Ve)(Tn,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(Ve)(Tn,"MISSING_SESSION_INFO","missing-verification-id"),t(Ve)(Tn,"SESSION_EXPIRED","code-expired"),t(Ve)(Tn,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(Ve)(Tn,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(Ve)(Tn,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(Ve)(Tn,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(Ve)(Tn,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(Ve)(Tn,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(Ve)(Tn,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(Ve)(Tn,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(Ve)(Tn,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(Ve)(Tn,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(Ve)(Tn,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Tn),An=new En(3e4,6e4);function Cn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function On(e,t,n,r){return Dn.apply(this,arguments)}function Dn(){return Dn=t(s)(t(c).mark((function e(n,r,i,a){var o,u=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",Rn(n,o,t(s)(t(c).mark((function e(){var o,s,u,l;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=Re(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Sn.fetch()(Un(n,n.config.apiHost,i,u),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Dn.apply(this,arguments)}function Rn(e,t,n){return Ln.apply(this,arguments)}function Ln(){return(Ln=t(s)(t(c).mark((function e(n,r,i){var a,o,s,l,f,h,d,p,v;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},Nn),r),e.prev=2,o=new Fn(n),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(l=e.sent))){e.next=13;break}throw Vn(n,"account-exists-with-different-credential",l);case 13:if(!s.ok||"errorMessage"in l){e.next=17;break}return e.abrupt("return",l);case 17:if(f=s.ok?l.errorMessage:l.error.message,h=t(u)(f.split(" : "),2),d=h[0],p=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){e.next=23;break}throw Vn(n,"credential-already-in-use",l);case 23:if("EMAIL_EXISTS"!==d){e.next=27;break}throw Vn(n,"email-already-in-use",l);case 27:if("USER_DISABLED"!==d){e.next=29;break}throw Vn(n,"user-disabled",l);case 29:if(v=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){e.next=34;break}throw hn(n,v,p);case 34:ln(n,v);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof Te)){e.next=41;break}throw e.t0;case 41:ln(n,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Pn(e,t,n,r){return Mn.apply(this,arguments)}function Mn(){return Mn=t(s)(t(c).mark((function e(n,r,i,a){var o,s,u=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,On(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&ln(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Mn.apply(this,arguments)}function Un(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?In(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Fn=function(){"use strict";function e(n){var r=this;t(w)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(fn(n.auth,"network-request-failed"))}),An.get())}))}return t(R)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Vn(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=fn(e,t,r);return i.customData._tokenResponse=n,i}function jn(e,t){return Bn.apply(this,arguments)}function Bn(){return(Bn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Hn(e,t){return zn.apply(this,arguments)}function zn(){return(zn=t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return qn=t(s)(t(c).mark((function e(n){var r,i,a,o,s,u,l=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Fe(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,pn((o=Kn(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Wn(Gn(o.auth_time)),issuedAtTime:Wn(Gn(o.iat)),expirationTime:Wn(Gn(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),qn.apply(this,arguments)}function Gn(e){return 1e3*Number(e)}function Kn(e){var n=t(u)(e.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return cn("JWT malformed, contained fewer than 3 sections"),null;try{var o=ve(i);return o?JSON.parse(o):(cn("Failed to decode base64 JWT payload"),null)}catch(e){return cn("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Qn(e,t){return Xn.apply(this,arguments)}function Xn(){return Xn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){var i=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Te&&Jn(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),Xn.apply(this,arguments)}function Jn(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn=function(){"use strict";function e(n){t(w)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(R)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),$n=function(){"use strict";function e(n,r){t(w)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(R)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e){return er.apply(this,arguments)}function er(){return(er=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n){var r,i,a,o,s,u,l,f,h,d,p;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Qn(n,Hn(i,{idToken:a}));case 7:pn(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?rr(s.providerUserInfo):[],l=nr(n.providerData,u),f=n.isAnonymous,h=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!f&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $n(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tr(){return(tr=t(s)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Fe(n),e.next=3,Zn(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function nr(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(L)(r).concat(t(L)(n))}function rr(e){return e.map((function(e){var t=e.providerId,n=nn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ir(e,t){return ar.apply(this,arguments)}function ar(){return(ar=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){var i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Rn(n,{},t(s)(t(c).mark((function e(){var i,a,o,s,u,l;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Re({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Un(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Sn.fetch()(u,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or=function(){"use strict";function e(){t(w)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(R)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){pn(e.idToken,"internal-error"),pn(void 0!==e.idToken,"internal-error"),pn(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,pn(n=Kn(t),"internal-error"),pn(void 0!==n.exp,"internal-error"),pn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(s)(t(c).mark((function i(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(pn(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(s)(t(c).mark((function i(){var a,o,s,u;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ir(e,n);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return vn("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(pn("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(pn("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(pn("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){pn("string"==typeof e||void 0===e,"internal-error",{appName:t})}var ur=function(){"use strict";function e(n){t(w)(this,e);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=nn(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(L)(o.providerData):[],this.metadata=new $n(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(R)(e,[{key:"getIdToken",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Qn(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(pn(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return qn.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return tr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(pn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){pn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(s)(t(c).mark((function i(){var a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!n){t.next=5;break}return t.next=5,Zn(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,Qn(e,jn(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,h=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,w=n.isAnonymous,x=n.providerData,_=n.stsTokenManager;pn(k&&_,t,"internal-error");var E=or.fromJSON(this.name,_);pn("string"==typeof k,t,"internal-error"),sr(f,t.name),sr(h,t.name),pn("boolean"==typeof b,t,"internal-error"),pn("boolean"==typeof w,t,"internal-error"),sr(d,t.name),sr(p,t.name),sr(v,t.name),sr(m,t.name),sr(y,t.name),sr(g,t.name);var I=new e({uid:k,auth:t,email:h,emailVerified:b,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:E,createdAt:y,lastLoginAt:g});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(t(c).mark((function a(){var o,s;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new or).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),t.next=5,Zn(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),cr=function(){"use strict";function e(){t(w)(this,e),this.type="NONE",this.storage={}}return t(R)(e,[{key:"_isAvailable",value:function(){return t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(s)(t(c).mark((function i(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr.type="NONE";var lr=cr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var hr=function(){"use strict";function e(n,r,i){t(w)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=fr(this.userKey,o.apiKey,s),this.fullPersistenceKey=fr("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(R)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?ur._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(s)(t(c).mark((function a(){var o,u,l,f,h,d,p,v,m,y,g,k,b;return t(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(gn(lr),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),u=o[0]||gn(lr),l=fr(i,n.config.apiKey,n.name),f=null,h=!0,d=!1,p=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(h=(m=v.next()).done){a.next=29;break}return y=m.value,a.prev=13,a.next=16,y._get(l);case 16:if(!(g=a.sent)){a.next=22;break}return k=ur._fromJSON(n,g),y!==u&&(f=k),u=y,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,p=a.t1;case 35:a.prev=35,a.prev=36,h||null==v.return||v.return();case 38:if(a.prev=38,!d){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(b=o.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&b.length){a.next=46;break}return a.abrupt("return",new e(u,n,i));case 46:if(u=b[0],!f){a.next=50;break}return a.next=50,u._set(l,f.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(kr(t))return"Blackberry";if(br(t))return"Webos";if(vr(t))return"Safari";if((t.includes("chrome/")||mr(t))&&!t.includes("edge/"))return"Chrome";if(gr(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function pr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/firefox\//i.test(e)}function vr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/crios\//i.test(e)}function yr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/iemobile/i.test(e)}function gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/android/i.test(e)}function kr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/blackberry/i.test(e)}function br(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/webos/i.test(e)}function wr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xr(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return wr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _r(){return((e=Ee()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee();return wr(e)||gr(e)||br(e)||kr(e)||/windows phone/i.test(e)||yr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ir(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=dr(Ee());break;case"Worker":t="".concat(dr(Ee()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Lt,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr=function(){"use strict";function e(n){t(w)(this,e),this.auth=n,this.queue=[]}return t(R)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a,o,s,u,l,f,h,d,p,v,m,y;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,a=!0,o=!1,s=void 0,t.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(l=u.next()).done){t.next=15;break}return f=l.value,t.next=11,f(e);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),o=!0,s=t.t0;case 21:t.prev=21,t.prev=22,a||null==u.return||u.return();case 24:if(t.prev=24,!o){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),h=!0,d=!1,p=void 0,t.prev=35,v=i[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){y=m.value;try{y()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),d=!0,p=t.t2;case 43:t.prev=43,t.prev=44,h||null==v.return||v.return();case 46:if(t.prev=46,!d){t.next=49;break}throw p;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),Sr=function(){"use strict";function e(n,r,i){t(w)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ar(this),this.idTokenSubscription=new Ar(this),this.beforeStateQueue=new Tr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=on,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(R)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=gn(n));var r=this;return this._initializationPromise=this.queue(t(s)(t(c).mark((function i(){var a,o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,hr.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a,o,s,u,l,f;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:f=t.sent,u&&u!==l||!(null==f?void 0:f.user)||(o=f.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return pn(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(o));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Zn(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?Fe(e):null)&&pn(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(s)(t(c).mark((function i(){return t(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&pn(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(gn(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Se("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(s)(t(c).mark((function i(){var a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return pn(i=e&&gn(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,hr.create(n,[gn(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a;return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pn(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return pn(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ir(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r,i,a;return t(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(Ve)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){return Fe(e)}var Ar=function(){"use strict";function e(n){var r,i,a=this;t(w)(this,e),this.auth=n,this.observer=null,this.addObserver=(i=new Me((function(e){return a.observer=e}),r)).subscribe.bind(i)}return t(R)(e,[{key:"next",get:function(){return pn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Cr(e,n,r){var i=Nr(e);pn(i._canInitEmulator,i,"emulator-config-failed"),pn(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=Or(n),s=function(e){var n=Or(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Dr(i.substr(o.length+1))}}var s=t(u)(i.split(":"),2);return{host:s[0],port:Dr(s[1])}}(n),c=s.host,l=s.port,f=null===l?"":":".concat(l);i.config.emulator={url:"".concat(o,"//").concat(c).concat(f,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Or(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Dr(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Rr=function(){"use strict";function e(n,r){t(w)(this,e),this.providerId=n,this.signInMethod=r}return t(R)(e,[{key:"toJSON",value:function(){return vn("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return vn("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return vn("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return vn("not implemented")}}]),e}();function Lr(e,t){return Pr.apply(this,arguments)}function Pr(){return(Pr=t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mr(e,t){return Ur.apply(this,arguments)}function Ur(){return(Ur=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pn(n,"POST","/v1/accounts:signInWithPassword",Cn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fr(e,t){return Vr.apply(this,arguments)}function Vr(){return(Vr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pn(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jr(e,t){return Br.apply(this,arguments)}function Br(){return(Br=t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pn(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hr=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(w)(this,r),(o=n.call(this,"password",a))._email=e,o._password=i,o._tenantId=s,o}return t(R)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Mr(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",Fr(e,{email:n._email,oobCode:n._password}));case 5:ln(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(s)(t(c).mark((function i(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Lr(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",jr(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:ln(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Rr);function zr(e,t){return Wr.apply(this,arguments)}function Wr(){return(Wr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pn(n,"POST","/v1/accounts:signInWithIdp",Cn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qr=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){var e;return t(w)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(R)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return zr(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,zr(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Re(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ln("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=nn(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Rr);function Gr(e,t){return Kr.apply(this,arguments)}function Kr(){return(Kr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On(n,"POST","/v1/accounts:sendVerificationCode",Cn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qr(){return(Qr=t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pn(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xr(){return(Xr=t(s)(t(c).mark((function e(n,r){var i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pn(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Vn(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Jr=t(Ve)({},"USER_NOT_FOUND","user-not-found");function Yr(){return(Yr=t(s)(t(c).mark((function e(n,r){var i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Pn(n,"POST","/v1/accounts:signInWithPhoneNumber",Cn(n,i),Jr));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $r=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(R)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Qr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Xr.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Yr.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Rr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr=function(){"use strict";function e(n){var r,i,a,o,s,u;t(w)(this,e);var c=Le(Pe(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);pn(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return t(R)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=Le(Pe(e)).link,n=t?Le(Pe(t)).deep_link_id:null,r=Le(Pe(e)).deep_link_id;return(r?Le(Pe(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ei=function(){"use strict";function e(){t(w)(this,e),this.providerId=e.PROVIDER_ID}return t(R)(e,null,[{key:"credential",value:function(e,t){return Hr._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Zr.parseLink(t);return pn(n,"argument-error"),Hr._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();ei.PROVIDER_ID="password",ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ti=function(){"use strict";function e(n){t(w)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(R)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),ni=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){var e;return t(w)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(R)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(L)(this.scopes)}}]),r}(ti),ri=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){return t(w)(this,r),n.call(this,"facebook.com")}return t(R)(r,null,[{key:"credential",value:function(e){return qr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ni);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri.FACEBOOK_SIGN_IN_METHOD="facebook.com",ri.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ii=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){var e;return t(w)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(R)(r,null,[{key:"credential",value:function(e,t){return qr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(ni);ii.GOOGLE_SIGN_IN_METHOD="google.com",ii.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ai=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){return t(w)(this,r),n.call(this,"github.com")}return t(R)(r,null,[{key:"credential",value:function(e){return qr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(ni);ai.GITHUB_SIGN_IN_METHOD="github.com",ai.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){return t(w)(this,r),n.call(this,"twitter.com")}return t(R)(r,null,[{key:"credential",value:function(e,t){return qr._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(ni);function si(e,t){return ui.apply(this,arguments)}function ui(){return(ui=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pn(n,"POST","/v1/accounts:signUp",Cn(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi.TWITTER_SIGN_IN_METHOD="twitter.com",oi.PROVIDER_ID="twitter.com";var ci=function(){"use strict";function e(n){t(w)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(R)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(s)(t(c).mark((function o(){var s,u,l;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ur._fromIdTokenResponse(n,i,a);case 2:return s=t.sent,u=li(i),l=new e({user:s,providerId:u,_tokenResponse:i,operationType:r}),t.abrupt("return",l);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return t(s)(t(c).mark((function a(){var o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=li(i),t.abrupt("return",new e({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function li(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fi=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a,o){var s,u;return t(w)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(t(B)(s),r.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return t(R)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(Te);function hi(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw fi._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e,t){return pi.apply(this,arguments)}function pi(){return pi=t(s)(t(c).mark((function e(n,r){var i,a,o=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Qn,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",ci._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),e)}))),pi.apply(this,arguments)}function vi(e,t){return mi.apply(this,arguments)}function mi(){return mi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){var i,a,o,s,u,l,f=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,Qn(n,hi(a,o,r,n),i);case 6:return pn((s=e.sent).idToken,a,"internal-error"),pn(u=Kn(s.idToken),a,"internal-error"),l=u.sub,pn(n.uid===l,a,"user-mismatch"),e.abrupt("return",ci._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&ln(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),mi.apply(this,arguments)}function yi(e,t){return gi.apply(this,arguments)}function gi(){return gi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n,r){var i,a,o,s,u=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,hi(n,a,r);case 4:return o=e.sent,e.next=7,ci._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),gi.apply(this,arguments)}function ki(e,t){return bi.apply(this,arguments)}function bi(){return(bi=t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yi(Nr(n),r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wi(e,t,n){return xi.apply(this,arguments)}function xi(){return(xi=t(s)(t(c).mark((function e(n,r,i){var a,o,s;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Nr(n),e.next=3,si(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,ci._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _i(e,t,n,r){return Fe(e).onIdTokenChanged(t,n,r)}function Ei(e,t,n){return Fe(e).beforeAuthStateChanged(t,n)}function Ii(e,t,n,r){return Fe(e).onAuthStateChanged(t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ti(e,t){return On(e,"POST","/v2/accounts/mfaEnrollment:start",Cn(e,t))}new WeakMap;var Si="__sak",Ni=function(){"use strict";function e(n,r){t(w)(this,e),this.storageRetriever=n,this.type=r}return t(R)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Si,"1"),this.storage.removeItem(Si),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ai=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){var e,i;return t(w)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(vr(i=Ee())||wr(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Er(),e._shouldAllowMigration=!0,e}return t(R)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);_r()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,a=this;return t(s)(t(c).mark((function o(){return t(c).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t($t)(t(tn)(r.prototype),"_set",i).call(a,e,n);case 2:a.localCache[e]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(s)(t(c).mark((function a(){var o;return t(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t($t)(t(tn)(r.prototype),"_get",n).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(s)(t(c).mark((function a(){return t(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t($t)(t(tn)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(Ni);Ai.type="LOCAL";var Ci=Ai,Oi=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){return t(w)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(R)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Ni);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi.type="SESSION";var Di=Oi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e){return Promise.all(e.map(function(){var e=t(s)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li=function(){"use strict";function e(n){t(w)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(R)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a,o,u,l,f,h,d;return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,o=a.eventId,u=a.eventType,l=a.data,null==(f=n.handlersMap[u])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:u}),h=Array.from(f).map(function(){var e=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,Ri(h);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:u,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li.receivers=[];var Mi=function(){"use strict";function e(n){t(w)(this,e),this.target=n,this.handlers=new Set}return t(R)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(s)(t(c).mark((function a(){var o,s,u;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var c=Pi("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(e){var n=e;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fi(){return void 0!==Ui().WorkerGlobalScope&&"function"==typeof Ui().importScripts}function Vi(){return ji.apply(this,arguments)}function ji(){return(ji=t(s)(t(c).mark((function e(){var n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bi="firebaseLocalStorageDb",Hi="firebaseLocalStorage",zi="fbase_key",Wi=function(){"use strict";function e(n){t(w)(this,e),this.request=n}return t(R)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function qi(e,t){return e.transaction([Hi],t?"readwrite":"readonly").objectStore(Hi)}function Gi(){var e=indexedDB.deleteDatabase(Bi);return new Wi(e).toPromise()}function Ki(){var e=indexedDB.open(Bi,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Hi,{keyPath:zi})}catch(e){r(e)}})),e.addEventListener("success",t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Hi)){t.next=12;break}return i.close(),t.next=5,Gi();case 5:return t.t0=n,t.next=8,Ki();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function Qi(e,t,n){return Xi.apply(this,arguments)}function Xi(){return(Xi=t(s)(t(c).mark((function e(n,r,i){var a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=qi(n,!0).put((a={},t(Ve)(a,zi,r),t(Ve)(a,"value",i),a)),e.abrupt("return",new Wi(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ji(e,t){return Yi.apply(this,arguments)}function Yi(){return(Yi=t(s)(t(c).mark((function e(n,r){var i,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=qi(n,!1).get(r),e.next=3,new Wi(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $i(e,t){var n=qi(e,!0).delete(t);return new Wi(n).toPromise()}var Zi=function(){"use strict";function e(){t(w)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(R)(e,[{key:"_openDb",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Ki();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Fi()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=Li._getInstance(Fi()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(s)(t(c).mark((function n(r,i){var a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r,i,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Vi();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Mi(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(s)(t(c).mark((function e(){var n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ki();case 5:return n=e.sent,e.next=8,Qi(n,Si,"1");case 8:return e.next=10,$i(n,Si);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(s)(t(c).mark((function i(){return t(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(s)(t(c).mark((function i(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Qi(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return Ji(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return $i(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r,i,a,o,s,u,l,f,h,d,p,v,m,y,g,k,b;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=qi(e,!1).getAll();return new Wi(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,t.prev=10,l=r[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)h=f.value,d=h.fbase_key,p=h.value,a.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(p)&&(e.notifyListeners(d,p),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,o||null==l.return||l.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,y=void 0,t.prev=27,g=Object.keys(e.localCache)[Symbol.iterator]();!(v=(k=g.next()).done);v=!0)b=k.value,e.localCache[b]&&!a.has(b)&&(e.notifyListeners(b,null),i.push(b));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,y=t.t1;case 35:t.prev=35,t.prev=36,v||null==g.return||g.return();case 38:if(t.prev=38,!m){t.next=41;break}throw y;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Zi.type="LOCAL";var ea=Zi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e,t){return On(e,"POST","/v2/accounts/mfaSignIn:start",Cn(e,t))}function na(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=fn("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function ra(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ra("rcb"),new En(3e4,6e4);var ia="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e,t,n){return oa.apply(this,arguments)}function oa(){return(oa=t(s)(t(c).mark((function e(n,r,i){var a,o,s,u,l,f,h,d;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,pn("string"==typeof o,n,"argument-error"),pn(i.type===ia,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return pn("enroll"===u.type,n,"internal-error"),e.next=15,Ti(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return pn("signin"===u.type,n,"internal-error"),pn(f=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,ta(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Gr(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sa=function(){"use strict";function e(n){t(w)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Nr(n)}return t(R)(e,[{key:"verifyPhoneNumber",value:function(e,t){return aa(this.auth,e,Fe(t))}}],[{key:"credential",value:function(e,t){return $r._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?$r._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ua(e,t){return t?gn(t):(pn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sa.PROVIDER_ID="phone",sa.PHONE_SIGN_IN_METHOD="phone";var ca=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(R)(r,[{key:"_getIdTokenResponse",value:function(e){return zr(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return zr(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return zr(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Rr);function la(e){return yi(e.auth,new ca(e),e.bypassAuthState)}function fa(e){var t=e.auth,n=e.user;return pn(n,t,"internal-error"),vi(n,new ca(e),e.bypassAuthState)}function ha(e){return da.apply(this,arguments)}function da(){return(da=t(s)(t(c).mark((function e(n){var r,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,pn(i=n.user,r,"internal-error"),e.abrupt("return",di(i,new ca(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pa=function(){"use strict";function e(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(w)(this,e),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(R)(e,[{key:"execute",value:function(){var e=this;return new Promise(function(){var n=t(s)(t(c).mark((function n(r,i){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.pendingPromise={resolve:r,reject:i},t.prev=1,t.next=4,e.resolver._initialize(e.auth);case 4:return e.eventManager=t.sent,t.next=7,e.onExecution();case 7:e.eventManager.registerConsumer(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.reject(t.t0);case 13:case"end":return t.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a,o,s,u,l,f;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,u=e.error,l=e.type,!u){t.next=4;break}return n.reject(u),t.abrupt("return");case 4:return f={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(l)(f);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return la;case"linkViaPopup":case"linkViaRedirect":return ha;case"reauthViaPopup":case"reauthViaRedirect":return fa;default:ln(this.auth,"internal-error")}}},{key:"resolve",value:function(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),va=new En(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ma=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a,o,s){var u;return t(w)(this,r),(u=n.call(this,e,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(B)(u),u}return t(R)(r,[{key:"executeNotNull",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return pn(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return mn(1===e.filter.length,"Popup operations only handle one event"),r=Pi(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(fn(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(fn(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(fn(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,va.get())};t()}}]),r}(pa);ma.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ya=new Map,ga=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(w)(this,r),(a=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(R)(r,[{key:"execute",value:function(){var e=this,n=this;return t(s)(t(c).mark((function i(){var a,o;return t(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=ya.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ka(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t($t)(t(tn)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:ya.set(n.auth._key(),a);case 21:return n.bypassAuthState||ya.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,a=function(){return t($t)(t(tn)(r.prototype),"onAuthEvent",n)};return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(pa);function ka(e,t){return ba.apply(this,arguments)}function ba(){return(ba=t(s)(t(c).mark((function e(n,r){var i,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=_a(r),a=xa(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wa(e,t){ya.set(e._key(),t)}function xa(e){return gn(e._redirectPersistence)}function _a(e){return fr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e,t){return Ia.apply(this,arguments)}function Ia(){return Ia=t(s)(t(c).mark((function e(n,r){var i,a,o,s,u,l=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Nr(n),o=ua(a,r),s=new ga(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Ia.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ta=function(){"use strict";function e(n){t(w)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(R)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Na(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Na(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(fn(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Sa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Na(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Aa(e){return Ca.apply(this,arguments)}function Ca(){return Ca=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n){var r,i=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",On(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),Ca.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Da=/^https?/;function Ra(){return(Ra=t(s)(t(c).mark((function e(n){var r,i,a,o,s,u,l;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Aa(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(l=u.value,e.prev=10,!La(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:ln(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function La(e){var t=bn(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Da.test(r))return!1;if(Oa.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pa=new En(3e4,6e4);function Ma(){var e=Ui().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(L)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Ua=null;function Fa(e){return Ua=Ua||function(e){return new Promise((function(t,n){var r,i,a;function o(){Ma(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Ma(),n(fn(e,"network-request-failed"))},timeout:Pa.get()})}if(null===(i=null===(r=Ui().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Ui().gapi)||void 0===a?void 0:a.load)){var s=ra("iframefcb");return Ui()[s]=function(){gapi.load?o():n(fn(e,"network-request-failed"))},na("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Ua=null,e}))}(e),Ua}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Va=new En(5e3,15e3),ja={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ba=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ha(e){var t=e.config;pn(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?In(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Lt},i=Ba.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(Re(r).slice(1))}function za(e){return Wa.apply(this,arguments)}function Wa(){return Wa=t(s)(t(c).mark((function e(n){var r,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fa(n);case 2:return r=e.sent,pn(i=Ui().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Ha(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ja,dontclear:!0},(function(e){return new Promise(function(){var r=t(s)(t(c).mark((function r(i,a){var o,s,u;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){Ui().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=fn(n,"network-request-failed"),s=Ui().setTimeout((function(){a(o)}),Va.get()),e.ping(u).then(u,(function(){a(o)}));case 7:case"end":return t.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())})));case 6:case"end":return e.stop()}}),e)}))),Wa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ga="_blank",Ka="http://localhost",Qa=function(){"use strict";function e(n){t(w)(this,e),this.window=n,this.associatedEvent=null}return t(R)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Xa(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),c="",l=Object.assign(Object.assign({},qa),{width:i.toString(),height:a.toString(),top:o,left:s}),f=Ee().toLowerCase();r&&(c=mr(f)?Ga:r),pr(f)&&(n=n||Ka,l.scrollbars="yes");var h=Object.entries(l).reduce((function(e,n){var r=t(u)(n,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(xr(f)&&"_self"!==c)return Ja(n||"",c),new Qa(null);var d=window.open(n||"",c,h);pn(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Qa(d)}function Ja(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ya="__/auth/handler",$a="emulator/auth/handler";function Za(e,n,r,i,a,o){pn(e.config.authDomain,e,"auth-domain-config-required"),pn(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:Lt,eventId:a};if(n instanceof ti){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",Ce(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var c=!0,l=!1,f=void 0;try{for(var h,d=Object.entries(o||{})[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var p=t(u)(h.value,2),v=p[0],m=p[1];s[v]=m}}catch(e){l=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}}if(n instanceof ni){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}e.tenantId&&(s.tid=e.tenantId);var g,k,b=s,w=!0,x=!1,_=void 0;try{for(var E,I=Object.keys(b)[Symbol.iterator]();!(w=(E=I.next()).done);w=!0){var T=E.value;void 0===b[T]&&delete b[T]}}catch(e){x=!0,_=e}finally{try{w||null==I.return||I.return()}finally{if(x)throw _}}return"".concat((g=e,k=g.config,k.emulator?In(k,$a):"https://".concat(k.authDomain,"/").concat(Ya)),"?").concat(Re(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var eo="webStorageSupport",to=function(){"use strict";function e(){t(w)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Di,this._completeRedirectFn=Ea,this._overrideRedirectResult=wa}return t(R)(e,[{key:"_openPopup",value:function(e,n,r,i){var a=this;return t(s)(t(c).mark((function o(){var s,u;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return mn(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Za(e,n,r,bn(),i),t.abrupt("return",Xa(e,u,Pi()));case 4:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var a=this;return t(s)(t(c).mark((function o(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return o=Za(e,n,r,bn(),i),Ui().location.href=o,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(mn(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,za(e);case 2:return i=t.sent,a=new Ta(e),i.register("authEvent",(function(t){return pn(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:a},n.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(eo,{type:eo},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ln(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Ra.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Er()||vr()||wr()}}]),e}(),no=to,ro=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(R)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return On(e,"POST","/v2/accounts/mfaEnrollment:finalize",Cn(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return On(e,"POST","/v2/accounts/mfaSignIn:finalize",Cn(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(n){t(w)(this,e),this.factorId=n}return t(R)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return vn("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(w)(this,e)}return t(R)(e,null,[{key:"assertion",value:function(e){return ro._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var io="@firebase/auth",ao="0.21.3",oo=function(){"use strict";function e(n){t(w)(this,e),this.auth=n,this.internalListeners=new Map}return t(R)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){pn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var so,uo=we("authIdTokenMaxAge")||300,co=null,lo=function(e){return function(){var n=t(s)(t(c).mark((function n(r){var i,a,o;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>uo)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,co!==o){t.next=12;break}return t.abrupt("return");case 12:return co=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};so="Browser",At(new je("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){pn(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),pn(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:so,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ir(so)},i=new Sr(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),At(new je("auth-internal",(function(e){var t=Nr(e.getProvider("auth").getImmediate());return new oo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(io,ao,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(so)),Ut(io,ao,"esm2017");document.querySelector("#txtEmail"),document.querySelector("#txtPassword");var fo=document.querySelector("#btnLogin"),ho=document.querySelector("#btnSignup"),po=document.querySelector("#btnLogout"),vo=(document.querySelector("#divAuthState"),document.querySelector("#lblAuthState")),mo=document.querySelector("#divLoginError"),yo=document.querySelector("#lblLoginErrorMessage"),go=function(){mo.style.display="none",yo.innerHTML=""},ko=function(e){mo.style.display="block",e.code==sn.INVALID_PASSWORD?yo.innerHTML="Wrong password. Try again.":yo.innerHTML="Error: ".concat(e.message)},bo=function(e){vo.innerHTML="You're logged in with email: ".concat(e.email)};go();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ut("firebase","9.17.1","app");s=a("bpxeT"),w=a("8MBJY");var wo,xo=a("ge8co"),_o=(R=a("a2hTj"),tn=a("fVNic"),H=a("eYQtU"),a("jmhxu")),Eo=(u=a("1t1Wn"),L=a("8nrFW"),a("l5bVx")),Io=(Z=a("2MbLg"),c=a("2TvXO"),w=a("8MBJY"),R=a("a2hTj"),tn=a("fVNic"),H=a("eYQtU"),u=a("1t1Wn"),Eo=a("l5bVx"),Z=a("2MbLg"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{}),To={},So=So||{},No=Io||self;function Ao(){}function Co(e){var n=void 0===e?"undefined":t(Eo)(e);return"array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length}function Oo(e){var n=void 0===e?"undefined":t(Eo)(e);return"object"==n&&null!=e||"function"==n}var Do="closure_uid_"+(1e9*Math.random()>>>0),Ro=0;function Lo(e,t,n){return e.call.apply(e.bind,arguments)}function Po(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Mo(e,t,n){return(Mo=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Lo:Po).apply(null,arguments)}function Uo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Fo(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function Vo(){this.s=this.s,this.o=this.o}Vo.prototype.s=!1,Vo.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Do)&&e[Do]||(e[Do]=++Ro))},Vo.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var jo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Bo(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ho(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(Co(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function zo(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}zo.prototype.h=function(){this.defaultPrevented=!0};var Wo=function(){if(!No.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{No.addEventListener("test",Ao,t),No.removeEventListener("test",Ao,t)}catch(e){}return e}();function qo(e){return/^[\s\xa0]*$/.test(e)}var Go=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ko(e,t){return e<t?-1:e>t?1:0}function Qo(){var e=No.navigator;return e&&(e=e.userAgent)?e:""}function Xo(e){return-1!=Qo().indexOf(e)}function Jo(e){return Jo[" "](e),e}Jo[" "]=Ao;var Yo,$o,Zo=Xo("Opera"),es=Xo("Trident")||Xo("MSIE"),ts=Xo("Edge"),ns=ts||es,rs=Xo("Gecko")&&!(-1!=Qo().toLowerCase().indexOf("webkit")&&!Xo("Edge"))&&!(Xo("Trident")||Xo("MSIE"))&&!Xo("Edge"),is=-1!=Qo().toLowerCase().indexOf("webkit")&&!Xo("Edge");function as(){var e=No.document;return e?e.documentMode:void 0}e:{var os="",ss=($o=Qo(),rs?/rv:([^\);]+)(\)|;)/.exec($o):ts?/Edge\/([\d\.]+)/.exec($o):es?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($o):is?/WebKit\/(\S+)/.exec($o):Zo?/(?:Version)[ \/]?(\S+)/.exec($o):void 0);if(ss&&(os=ss?ss[1]:""),es){var us=as();if(null!=us&&us>parseFloat(os)){Yo=String(us);break e}}Yo=os}var cs,ls={};function fs(){return function(e){var t=ls;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=Go(String(Yo)).split("."),n=Go("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=Ko(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||Ko(0==a[2].length,0==o[2].length)||Ko(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))}if(No.document&&es){var hs=as();cs=hs||(parseInt(Yo,10)||void 0)}else cs=void 0;var ds=cs;function ps(e,t){if(zo.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rs){e:{try{Jo(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:vs[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ps.X.h.call(this)}}Fo(ps,zo);var vs={2:"touch",3:"pen",4:"mouse"};ps.prototype.h=function(){ps.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ms="closure_listenable_"+(1e6*Math.random()|0),ys=0;function gs(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ys,this.ba=this.ea=!1}function ks(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function bs(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function ws(e){var t={};for(var n in e)t[n]=e[n];return t}var xs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _s(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<xs.length;a++)n=xs[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Es(e){this.src=e,this.g={},this.h=0}function Is(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=jo(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(ks(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ts(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ba&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}Es.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=Ts(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new gs(t,this.src,a,!!r,i)).ea=n,e.push(t)),t};var Ss="closure_lm_"+(1e6*Math.random()|0),Ns={};function As(e,t,n,r,i){if(r&&r.once)return Os(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)As(e,t[a],n,r,i);return null}return n=Fs(n),e&&e[ms]?e.N(t,n,Oo(r)?!!r.capture:!!r,i):Cs(e,t,n,!1,r,i)}function Cs(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=Oo(i)?!!i.capture:!!i,s=Ms(e);if(s||(e[Ss]=s=new Es(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Ps;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Wo||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ls(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Os(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)Os(e,t[a],n,r,i);return null}return n=Fs(n),e&&e[ms]?e.O(t,n,Oo(r)?!!r.capture:!!r,i):Cs(e,t,n,!0,r,i)}function Ds(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)Ds(e,t[a],n,r,i);else r=Oo(r)?!!r.capture:!!r,n=Fs(n),e&&e[ms]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ts(a=e.g[t],n,r,i))&&(ks(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=Ms(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ts(t,n,r,i)),(n=-1<e?t[e]:null)&&Rs(n))}function Rs(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ms])Is(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ls(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ms(t))?(Is(n,e),0==n.h&&(n.src=null,t[Ss]=null)):ks(e)}}}function Ls(e){return e in Ns?Ns[e]:Ns[e]="on"+e}function Ps(e,t){if(e.ba)e=!0;else{t=new ps(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Rs(e),e=n.call(r,t)}return e}function Ms(e){return(e=e[Ss])instanceof Es?e:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fs(e){return"function"==typeof e?e:(e[Us]||(e[Us]=function(t){return e.handleEvent(t)}),e[Us])}function Vs(){Vo.call(this),this.i=new Es(this),this.P=this,this.I=null}function js(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new zo(t,e);else if(t instanceof zo)t.target=t.target||e;else{var i=t;_s(t=new zo(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=Bs(o,r,!0,t)&&i}if(i=Bs(o=t.g=e,r,!0,t)&&i,i=Bs(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=Bs(o=t.g=n[a],r,!1,t)&&i}function Bs(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.ba&&o.capture==n){var s=o.listener,u=o.ha||o.src;o.ea&&Is(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}Fo(Vs,Vo),Vs.prototype[ms]=!0,Vs.prototype.removeEventListener=function(e,t,n,r){Ds(this,e,t,n,r)},Vs.prototype.M=function(){if(Vs.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ks(n[r]);delete t.g[e],t.h--}}this.I=null},Vs.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Vs.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Hs=No.JSON.stringify;function zs(){var e=Ys,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ws,qs=function(){"use strict";function e(){t(w)(this,e),this.h=this.g=null}return t(R)(e,[{key:"add",value:function(e,t){var n=Gs.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),e}(),Gs=new(function(){"use strict";function e(n,r){t(w)(this,e),this.i=n,this.j=r,this.h=0,this.g=null}return t(R)(e,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),e}())((function(){return new Ks}),(function(e){return e.reset()})),Ks=function(){"use strict";function e(){t(w)(this,e),this.next=this.g=this.h=null}return t(R)(e,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),e}();function Qs(e){No.setTimeout((function(){throw e}),0)}function Xs(e,t){Ws||function(){var e=No.Promise.resolve(void 0);Ws=function(){e.then($s)}}(),Js||(Ws(),Js=!0),Ys.add(e,t)}var Js=!1,Ys=new qs;function $s(){for(var e;e=zs();){try{e.h.call(e.g)}catch(e){Qs(e)}var t=Gs;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Js=!1}function Zs(e,t){Vs.call(this),this.h=e||1,this.g=t||No,this.j=Mo(this.lb,this),this.l=Date.now()}function eu(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function tu(e,t,n){if("function"==typeof e)n&&(e=Mo(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Mo(e.handleEvent,e)}return 2147483647<Number(t)?-1:No.setTimeout(e,t||0)}function nu(e){e.g=tu((function(){e.g=null,e.i&&(e.i=!1,nu(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}Fo(Zs,Vs),(wo=Zs.prototype).ca=!1,wo.R=null,wo.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),js(this,"tick"),this.ca&&(eu(this),this.start()))}},wo.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},wo.M=function(){Zs.X.M.call(this),eu(this),delete this.g};var ru=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this)).m=e,a.j=i,a.h=null,a.i=!1,a.g=null,a}return t(R)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:nu(this)}},{key:"M",value:function(){t($t)(t(tn)(r.prototype),"M",this).call(this),this.g&&(No.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(Vo);function iu(e){Vo.call(this),this.h=e,this.g={}}Fo(iu,Vo);var au=[];function ou(e,t,n,r){Array.isArray(n)||(n&&(au[0]=n.toString()),n=au);for(var i=0;i<n.length;i++){var a=As(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function su(e){bs(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Rs(e)}),e),e.g={}}function uu(){this.g=!0}function cu(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Hs(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}iu.prototype.M=function(){iu.X.M.call(this),su(this)},iu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},uu.prototype.Aa=function(){this.g=!1},uu.prototype.info=function(){};var lu={},fu=null;function hu(){return fu=fu||new Vs}function du(e){zo.call(this,lu.Pa,e)}function pu(e){var t=hu();js(t,new du(t))}function vu(e,t){zo.call(this,lu.STAT_EVENT,e),this.stat=t}function mu(e){var t=hu();js(t,new vu(t,e))}function yu(e,t){zo.call(this,lu.Qa,e),this.size=t}function gu(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return No.setTimeout((function(){e()}),t)}lu.Pa="serverreachability",Fo(du,zo),lu.STAT_EVENT="statevent",Fo(vu,zo),lu.Qa="timingevent",Fo(yu,zo);var ku={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wu(){}function xu(e){return e.h||(e.h=e.i())}function _u(){}wu.prototype.h=null;var Eu,Iu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Tu(){zo.call(this,"d")}function Su(){zo.call(this,"c")}function Nu(){}function Au(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new iu(this),this.O=Ou,e=ns?125:void 0,this.T=new Zs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}Fo(Tu,zo),Fo(Su,zo),Fo(Nu,wu),Nu.prototype.g=function(){return new XMLHttpRequest},Nu.prototype.i=function(){return{}},Eu=new Nu;var Ou=45e3,Du={},Ru={};function Lu(e,t,n){e.K=1,e.v=Zu(Qu(t)),e.s=n,e.P=!0,Pu(e,null)}function Pu(e,t){e.F=Date.now(),Vu(e),e.A=Qu(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),hc(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Cu,e.g=hl(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ru(Mo(e.La,e,e.g),e.N)),ou(e.S,e.g,"readystatechange",e.ib),t=e.H?ws(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),pu(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var f=l.split("_");o=2<=f.length&&"type"==f[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Mu(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Uu(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=Fu(e,n))==Ru){4==t&&(e.o=4,mu(14),i=!1),cu(e.j,e.m,null,"[Incomplete Response]");break}if(r==Du){e.o=4,mu(15),cu(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}cu(e.j,e.m,r,null),Wu(e,r)}Mu(e)&&r!=Ru&&r!=Du&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,mu(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),il(t),t.K=!0,mu(11))):(cu(e.j,e.m,n,"[Invalid Chunked Response]"),zu(e),Hu(e))}function Fu(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ru:(n=Number(t.substring(n,r)),isNaN(n)?Du:(r+=1)+n>t.length?Ru:(t=t.substr(r,n),e.C=r+n,t))}function Vu(e){e.V=Date.now()+e.O,ju(e,e.O)}function ju(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=gu(Mo(e.gb,e),t)}function Bu(e){e.B&&(No.clearTimeout(e.B),e.B=null)}function Hu(e){0==e.l.G||e.I||sl(e.l,e)}function zu(e){Bu(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,eu(e.T),su(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Wu(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kc(n.h,e)))if(!e.J&&kc(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ol(n),Jc(n)}rl(n),mu(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=gu(Mo(n.cb,n),6e3));if(1>=gc(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else cl(n,11)}else if((e.J||n.g==e)&&ol(n),!qo(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.T=a[0],a=a[1],2==n.G)if("c"==a[0]){n.I=a[1],n.ka=a[2];var o=a[3];null!=o&&(n.ma=o,n.j.info("VER="+n.ma));var s=a[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var f=r.h;f.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(bc(f,f.h),f.h=null))}if(r.D){var h=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;h&&(r.za=h,$u(r.F,r.D,h))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var d=e;if((r=n).sa=fl(r,r.H?r.ka:null,r.V),d.J){wc(r.h,d);var p=d,v=r.J;v&&p.setTimeout(v),p.B&&(Bu(p),Vu(p)),r.g=d}else nl(r);0<n.i.length&&$c(n)}else"stop"!=a[0]&&"close"!=a[0]||cl(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?cl(n,7):Xc(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}pu()}catch(a){}}function qu(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Co(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Co(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Co(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(wo=Au.prototype).setTimeout=function(e){this.O=e},wo.ib=function(e){e=e.target;var t=this.L;t&&3==zc(e)?t.l():this.La(e)},wo.La=function(e){try{if(e==this.g)e:{var t=zc(this.g),n=this.g.Ea();this.g.aa();if(!(3>t)&&(3!=t||ns||this.g&&(this.h.h||this.g.fa()||Wc(this.g)))){this.I||4!=t||7==n||pu(),Bu(this);var r=this.g.aa();this.Y=r;t:if(Mu(this)){var i=Wc(this.g);e="";var a=i.length,o=4==zc(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){zu(this),Hu(this);var s="";break t}this.h.i=new No.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.U,t,r),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qo(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,mu(12),zu(this),Hu(this);break e}cu(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wu(this,r)}this.P?(Uu(this,t,s),ns&&this.i&&3==t&&(ou(this.S,this.T,"tick",this.hb),this.T.start())):(cu(this.j,this.m,s,null),Wu(this,s)),4==t&&zu(this),this.i&&!this.I&&(4==t?sl(this.l,this):(this.i=!1,Vu(this)))}else 400==r&&0<s.indexOf("Unknown SID")?(this.o=3,mu(12)):(this.o=0,mu(13)),zu(this),Hu(this)}}}catch(t){}},wo.hb=function(){if(this.g){var e=zc(this.g),t=this.g.fa();this.C<t.length&&(Bu(this),Uu(this,e,t),this.i&&4!=e&&Vu(this))}},wo.cancel=function(){this.I=!0,zu(this)},wo.gb=function(){this.B=null;var e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(pu(),mu(17)),zu(this),this.o=2,Hu(this)):ju(this,this.V-e)};var Gu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ku(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ku){this.h=void 0!==t?t:e.h,Xu(this,e.j),this.s=e.s,this.g=e.g,Ju(this,e.m),this.l=e.l,t=e.i;var n=new uc;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Yu(this,n),this.o=e.o}else e&&(n=String(e).match(Gu))?(this.h=!!t,Xu(this,n[1]||"",!0),this.s=ec(n[2]||""),this.g=ec(n[3]||"",!0),Ju(this,n[4]),this.l=ec(n[5]||"",!0),Yu(this,n[6]||"",!0),this.o=ec(n[7]||"")):(this.h=!!t,this.i=new uc(null,this.h))}function Qu(e){return new Ku(e)}function Xu(e,t,n){e.j=n?ec(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ju(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Yu(e,t,n){t instanceof uc?(e.i=t,function(e,t){t&&!e.j&&(cc(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(lc(this,t),hc(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=tc(t,oc)),e.i=new uc(t,e.h))}function $u(e,t,n){e.i.set(t,n)}function Zu(e){return $u(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ec(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tc(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,nc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nc(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ku.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tc(t,rc,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tc(t,rc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(tc(n,"/"==n.charAt(0)?ac:ic,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tc(n,sc)),e.join("")};var rc=/[#\/\?@]/g,ic=/[#\?:]/g,ac=/[#\?]/g,oc=/[#\?@]/g,sc=/#/g;function uc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function cc(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function lc(e,t){cc(e),t=dc(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function fc(e,t){return cc(e),t=dc(e,t),e.g.has(t)}function hc(e,t,n){lc(e,t),0<n.length&&(e.i=null,e.g.set(dc(e,t),Bo(n)),e.h+=n.length)}function dc(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(wo=uc.prototype).add=function(e,t){cc(this),this.i=null,e=dc(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},wo.forEach=function(e,t){cc(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},wo.oa=function(){cc(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},wo.W=function(e){cc(this);var t=[];if("string"==typeof e)fc(this,e)&&(t=t.concat(this.g.get(dc(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},wo.set=function(e,t){return cc(this),this.i=null,fc(this,e=dc(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},wo.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},wo.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var pc=function e(n,r){"use strict";t(w)(this,e),this.h=n,this.g=r};function vc(e){this.l=e||mc,No.PerformanceNavigationTiming?e=0<(e=No.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(No.g&&No.g.Ga&&No.g.Ga()&&No.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mc=10;function yc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function gc(e){return e.h?1:e.g?e.g.size:0}function kc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function bc(e,t){e.g?e.g.add(t):e.h=t}function wc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function xc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.D)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return Bo(e.i)}function _c(){}function Ec(){this.g=new _c}function Ic(e,t,n){var r=n||"";try{qu(e,(function(e,n){var i=e;Oo(e)&&(i=Hs(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function Tc(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Sc(e){this.l=e.ac||null,this.j=e.jb||!1}function Nc(e,t){Vs.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ac,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vc.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},_c.prototype.stringify=function(e){return No.JSON.stringify(e,void 0)},_c.prototype.parse=function(e){return No.JSON.parse(e,void 0)},Fo(Sc,wu),Sc.prototype.g=function(){return new Nc(this.l,this.j)},Sc.prototype.i=function(e){return function(){return e}}({}),Fo(Nc,Vs);var Ac=0;function Cc(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Oc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Dc(e)}function Dc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(wo=Nc.prototype).open=function(e,t){if(this.readyState!=Ac)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Dc(this)},wo.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||No).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},wo.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Oc(this)),this.readyState=Ac},wo.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Dc(this)),this.g&&(this.readyState=3,Dc(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==No.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cc(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},wo.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Oc(this):Dc(this),3==this.readyState&&Cc(this)}},wo.Va=function(e){this.g&&(this.response=this.responseText=e,Oc(this))},wo.Ua=function(e){this.g&&(this.response=e,Oc(this))},wo.ga=function(){this.g&&Oc(this)},wo.setRequestHeader=function(e,t){this.v.append(e,t)},wo.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},wo.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Rc=No.JSON.parse;function Lc(e){Vs.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pc,this.K=this.L=!1}Fo(Lc,Vs);var Pc="",Mc=/^https?$/i,Uc=["POST","PUT"];function Fc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vc(e),Bc(e)}function Vc(e){e.D||(e.D=!0,js(e,"complete"),js(e,"error"))}function jc(e){if(e.h&&void 0!==So&&(!e.C[1]||4!=zc(e)||2!=e.aa()))if(e.v&&4==zc(e))tu(e.Ha,0,e);else if(js(e,"readystatechange"),4==zc(e)){e.h=!1;try{var t,n=e.aa();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match(Gu)[1]||null;if(!a&&No.self&&No.self.location){var o=No.self.location.protocol;a=o.substr(0,o.length-1)}i=!Mc.test(a?a.toLowerCase():"")}t=i}if(t)js(e,"complete"),js(e,"success");else{e.m=6;try{var s=2<zc(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",Vc(e)}}finally{Bc(e)}}}function Bc(e,t){if(e.g){Hc(e);var n=e.g,r=e.C[0]?Ao:null;e.g=null,e.C=null,t||js(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Hc(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(No.clearTimeout(e.A),e.A=null)}function zc(e){return e.g?e.g.readyState:0}function Wc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Pc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function qc(e){var t="";return bs(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Gc(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qc(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):$u(e,t,n))}function Kc(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Qc(e){this.Ca=0,this.i=[],this.j=new uu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Kc("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Kc("baseRetryDelayMs",5e3,e),this.bb=Kc("retryDelaySeedMs",1e4,e),this.$a=Kc("forwardChannelMaxRetries",2,e),this.ta=Kc("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new vc(e&&e.concurrentRequestLimit),this.Fa=new Ec,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Xc(e){if(Yc(e),3==e.G){var t=e.U++,n=Qu(e.F);$u(n,"SID",e.I),$u(n,"RID",t),$u(n,"TYPE","terminate"),el(e,n),(t=new Au(e,e.j,t,void 0)).K=2,t.v=Zu(Qu(n)),n=!1,No.navigator&&No.navigator.sendBeacon&&(n=No.navigator.sendBeacon(t.v.toString(),"")),!n&&No.Image&&((new Image).src=t.v,n=!0),n||(t.g=hl(t.l,null),t.g.da(t.v)),t.F=Date.now(),Vu(t)}ll(e)}function Jc(e){e.g&&(il(e),e.g.cancel(),e.g=null)}function Yc(e){Jc(e),e.u&&(No.clearTimeout(e.u),e.u=null),ol(e),e.h.cancel(),e.m&&("number"==typeof e.m&&No.clearTimeout(e.m),e.m=null)}function $c(e){yc(e.h)||e.m||(e.m=!0,Xs(e.Ja,e),e.C=0)}function Zc(e,t){var n;n=t?t.m:e.U++;var r=Qu(e.F);$u(r,"SID",e.I),$u(r,"RID",n),$u(r,"AID",e.T),el(e,r),e.o&&e.s&&Gc(r,e.o,e.s),n=new Au(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=tl(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),bc(e.h,n),Lu(n,r,t)}function el(e,t){e.ia&&bs(e.ia,(function(e,n){$u(t,n,e)})),e.l&&qu({},(function(e,n){$u(t,n,e)}))}function tl(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Mo(e.l.Ra,e.l,e):null;e:for(var i=e.i,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{Ic(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.i.splice(0,n),t.D=e,r}function nl(e){e.g||e.u||(e.Z=1,Xs(e.Ia,e),e.A=0)}function rl(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=gu(Mo(e.Ia,e),ul(e,e.A)),e.A++,!0)}function il(e){null!=e.B&&(No.clearTimeout(e.B),e.B=null)}function al(e){e.g=new Au(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Qu(e.sa);$u(t,"RID","rpc"),$u(t,"SID",e.I),$u(t,"CI",e.L?"0":"1"),$u(t,"AID",e.T),$u(t,"TYPE","xmlhttp"),el(e,t),e.o&&e.s&&Gc(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Zu(Qu(t)),n.s=null,n.P=!0,Pu(n,e)}function ol(e){null!=e.v&&(No.clearTimeout(e.v),e.v=null)}function sl(e,t){var n=null;if(e.g==t){ol(e),il(e),e.g=null;var r=2}else{if(!kc(e.h,t))return;n=t.D,wc(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;js(r=hu(),new yu(r,n)),$c(e)}else nl(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(gc(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=gu(Mo(e.Ja,e,t),ul(e,e.C)),e.C++,0)))}(e,t)||2==r&&rl(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:cl(e,5);break;case 4:cl(e,10);break;case 3:cl(e,6);break;default:cl(e,2)}}function ul(e,t){var n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function cl(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=Mo(e.kb,e);n||(n=new Ku("//www.google.com/images/cleardot.gif"),No.location&&"http"==No.location.protocol||Xu(n,"https"),Zu(n)),function(e,t){var n=new uu;if(No.Image){var r=new Image;r.onload=Uo(Tc,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Uo(Tc,n,r,"TestLoadImage: error",!1,t),r.onabort=Uo(Tc,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Uo(Tc,n,r,"TestLoadImage: timeout",!1,t),No.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else mu(2);e.G=0,e.l&&e.l.va(t),ll(e),Yc(e)}function ll(e){if(e.G=0,e.la=[],e.l){var t=xc(e.h);0==t.length&&0==e.i.length||(Ho(e.la,t),Ho(e.la,e.i),e.h.i.length=0,Bo(e.i),e.i.length=0),e.l.ua()}}function fl(e,t,n){var r=n instanceof Ku?Qu(n):new Ku(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ju(r,r.m);else{var i=No.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Ku(null,void 0);r&&Xu(a,r),t&&(a.g=t),i&&Ju(a,i),n&&(a.l=n),r=a}return n=e.D,t=e.za,n&&t&&$u(r,n,t),$u(r,"VER",e.ma),el(e,r),r}function hl(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new Lc(new Sc({jb:!0})):new Lc(e.ra)).Ka(e.H),t}function dl(){}function pl(){if(es&&!(10<=Number(ds)))throw Error("Environmental error: no available transport.")}function vl(e,t){Vs.call(this),this.g=new Qc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!qo(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qo(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new gl(this)}function ml(e){Tu.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function yl(){Su.call(this),this.status=1}function gl(e){this.g=e}(wo=Lc.prototype).Ka=function(e){this.L=e},wo.da=function(e,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);n=n?n.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Eu.g(),this.C=this.u?xu(this.u):xu(Eu),this.g.onreadystatechange=Mo(this.Ha,this);try{this.F=!0,this.g.open(n,String(e),!0),this.F=!1}catch(e){return void Fc(this,e)}if(e=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var c in i)r.set(c,i[c]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var l,f=i.keys()[Symbol.iterator]();!(a=(l=f.next()).done);a=!0){var h=l.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==f.return||f.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),c=No.FormData&&e instanceof No.FormData,!(0<=jo(Uc,n))||i||c||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var d=!0,p=!1,v=void 0;try{for(var m,y=r[Symbol.iterator]();!(d=(m=y.next()).done);d=!0){var g=t(u)(m.value,2),k=g[0],b=g[1];this.g.setRequestHeader(k,b)}}catch(e){p=!0,v=e}finally{try{d||null==y.return||y.return()}finally{if(p)throw v}}this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hc(this),0<this.B&&((this.K=function(e){return es&&fs()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Mo(this.qa,this)):this.A=tu(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Fc(this,e)}},wo.qa=function(){void 0!==So&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,js(this,"timeout"),this.abort(8))},wo.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,js(this,"complete"),js(this,"abort"),Bc(this))},wo.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bc(this,!0)),Lc.X.M.call(this)},wo.Ha=function(){this.s||(this.F||this.v||this.l?jc(this):this.fb())},wo.fb=function(){jc(this)},wo.aa=function(){try{return 2<zc(this)?this.g.status:-1}catch(e){return-1}},wo.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},wo.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Rc(t)}},wo.Ea=function(){return this.m},wo.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(wo=Qc.prototype).ma=8,wo.G=1,wo.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;var t=new Au(this,this.j,e,void 0),n=this.s;if(this.S&&(n?_s(n=ws(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)e:{for(var r=0,i=0;i<this.i.length;i++){var a=this.i[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=tl(this,t,r),$u(i=Qu(this.F),"RID",e),$u(i,"CVER",22),this.D&&$u(i,"X-HTTP-Session-Id",this.D),el(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(qc(n)))+"&"+r:this.o&&Gc(i,this.o,n)),bc(this.h,t),this.Ya&&$u(i,"TYPE","init"),this.O?($u(i,"$req",r),$u(i,"SID","null"),t.Z=!0,Lu(t,i,null)):Lu(t,i,r),this.G=2}}else 3==this.G&&(e?Zc(this,e):0==this.i.length||yc(this.h)||Zc(this))},wo.Ia=function(){if(this.u=null,al(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=gu(Mo(this.eb,this),e)}},wo.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,mu(10),Jc(this),al(this))},wo.cb=function(){null!=this.v&&(this.v=null,Jc(this),rl(this),mu(19))},wo.kb=function(e){e?(this.j.info("Successfully pinged google.com"),mu(2)):(this.j.info("Failed to ping google.com"),mu(1))},(wo=dl.prototype).xa=function(){},wo.wa=function(){},wo.va=function(){},wo.ua=function(){},wo.Ra=function(){},pl.prototype.g=function(e,t){return new vl(e,t)},Fo(vl,Vs),vl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;mu(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=fl(e,null,e.V),$c(e)},vl.prototype.close=function(){Xc(this.g)},vl.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Hs(e),e=n);t.i.push(new pc(t.ab++,e)),3==t.G&&$c(t)},vl.prototype.M=function(){this.g.l=null,delete this.j,Xc(this.g),delete this.g,vl.X.M.call(this)},Fo(ml,Tu),Fo(yl,Su),Fo(gl,dl),gl.prototype.xa=function(){js(this.g,"a")},gl.prototype.wa=function(e){js(this.g,new ml(e))},gl.prototype.va=function(e){js(this.g,new yl)},gl.prototype.ua=function(){js(this.g,"b")},pl.prototype.createWebChannel=pl.prototype.g,vl.prototype.send=vl.prototype.u,vl.prototype.open=vl.prototype.m,vl.prototype.close=vl.prototype.close,ku.NO_ERROR=0,ku.TIMEOUT=8,ku.HTTP_ERROR=6,bu.COMPLETE="complete",_u.EventType=Iu,Iu.OPEN="a",Iu.CLOSE="b",Iu.ERROR="c",Iu.MESSAGE="d",Vs.prototype.listen=Vs.prototype.N,Lc.prototype.listenOnce=Lc.prototype.O,Lc.prototype.getLastError=Lc.prototype.Oa,Lc.prototype.getLastErrorCode=Lc.prototype.Ea,Lc.prototype.getStatus=Lc.prototype.aa,Lc.prototype.getResponseJson=Lc.prototype.Sa,Lc.prototype.getResponseText=Lc.prototype.fa,Lc.prototype.send=Lc.prototype.da,Lc.prototype.setWithCredentials=Lc.prototype.Ka;var kl=To.createWebChannelTransport=function(){return new pl},bl=To.getStatEventTarget=function(){return hu()},wl=To.ErrorCode=ku,xl=To.EventType=bu,_l=To.Event=lu,El=To.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Il=To.FetchXmlHttpFactory=Sc,Tl=To.WebChannel=_u,Sl=To.XhrIo=Lc,Nl="@firebase/firestore",Al=function(){"use strict";function e(n){t(w)(this,e),this.uid=n}return t(R)(e,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),e}();Al.UNAUTHENTICATED=new Al(null),Al.GOOGLE_CREDENTIALS=new Al("google-credentials-uid"),Al.FIRST_PARTY=new Al("first-party-uid"),Al.MOCK_USER=new Al("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cl="9.17.1",Ol=new $e("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return Ol.logLevel}function Rl(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Ol.logLevel<=ze.DEBUG){var a,o=r.map(Ml);(a=Ol).debug.apply(a,["Firestore (".concat(Cl,"): ").concat(e)].concat(t(L)(o)))}}function Ll(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Ol.logLevel<=ze.ERROR){var a,o=r.map(Ml);(a=Ol).error.apply(a,["Firestore (".concat(Cl,"): ").concat(e)].concat(t(L)(o)))}}function Pl(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Ol.logLevel<=ze.WARN){var a,o=r.map(Ml);(a=Ol).warn.apply(a,["Firestore (".concat(Cl,"): ").concat(e)].concat(t(L)(o)))}}function Ml(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(Cl,") INTERNAL ASSERTION FAILED: ")+e;throw Ll(t),new Error(t)}function Fl(e,t){e||Ul()}function Vl(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Bl=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this,e,i)).code=e,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},t(_o)(a)}return r}(Te),Hl=function e(){"use strict";var n=this;t(w)(this,e),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},zl=function e(n,r){"use strict";t(w)(this,e),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Wl=function(){"use strict";function e(){t(w)(this,e)}return t(R)(e,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Al.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),e}(),ql=function(){"use strict";function e(n){t(w)(this,e),this.token=n,this.changeListener=null}return t(R)(e,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),e}(),Gl=function(){"use strict";function e(n){t(w)(this,e),this.t=n,this.currentUser=Al.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return t(R)(e,[{key:"start",value:function(e,n){var r=this,i=this.i,a=function(e){return r.i!==i?(i=r.i,n(e)):Promise.resolve()},o=new Hl;this.o=function(){var t=r;r.i++,r.currentUser=r.u(),o.resolve(),o=new Hl,e.enqueueRetryable((function(){return a(t.currentUser)}))};var u=function(){var n=o,i=r;e.enqueueRetryable(t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,a(i.currentUser);case 4:case"end":return e.stop()}}),e)}))))},l=function(e){Rl("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),u()};this.t.onInit((function(e){return l(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?l(e):(Rl("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Hl)}}),0),u()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(Rl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(Fl("string"==typeof n.accessToken),new zl(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return Fl(null===e||"string"==typeof e),new Al(e)}}]),e}(),Kl=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.h=n,this.l=r,this.m=i,this.g=a,this.type="FirstParty",this.user=Al.FIRST_PARTY,this.p=new Map}return t(R)(e,[{key:"I",value:function(){return this.g?this.g():(Fl(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.p.set("X-Goog-AuthUser",this.l);var e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}]),e}(),Ql=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.h=n,this.l=r,this.m=i,this.g=a}return t(R)(e,[{key:"getToken",value:function(){return Promise.resolve(new Kl(this.h,this.l,this.m,this.g))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Al.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),e}(),Xl=function e(n){"use strict";t(w)(this,e),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Jl=function(){"use strict";function e(n){t(w)(this,e),this.T=n,this.forceRefresh=!1,this.appCheck=null,this.A=null}return t(R)(e,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&Rl("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.A;return n.A=e.token,Rl("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){Rl("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.T.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.T.getImmediate({optional:!0});e?r(e):Rl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(Fl("string"==typeof t.token),e.A=t.token,new Xl(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yl(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $l=function(){"use strict";function e(){t(w)(this,e)}return t(R)(e,null,[{key:"R",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=Yl(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),e}();function Zl(e,t){return e<t?-1:e>t?1:0}function ef(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var tf=function(){"use strict";function e(n,r){if(t(w)(this,e),this.seconds=n,this.nanoseconds=r,r<0)throw new Bl(jl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new Bl(jl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new Bl(jl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new Bl(jl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return t(R)(e,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?Zl(this.nanoseconds,e.nanoseconds):Zl(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return e.fromMillis(Date.now())}},{key:"fromDate",value:function(t){return e.fromMillis(t.getTime())}},{key:"fromMillis",value:function(t){var n=Math.floor(t/1e3);return new e(n,Math.floor(1e6*(t-1e3*n)))}}]),e}(),nf=function(){"use strict";function e(n){t(w)(this,e),this.timestamp=n}return t(R)(e,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(t){return new e(t)}},{key:"min",value:function(){return new e(new tf(0,0))}},{key:"max",value:function(){return new e(new tf(253402300799,999999999))}}]),e}(),rf=function(){"use strict";function e(n,r,i){t(w)(this,e),void 0===r?r=0:r>n.length&&Ul(),void 0===i?i=n.length-r:i>n.length-r&&Ul(),this.segments=n,this.offset=r,this.len=i}return t(R)(e,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(t){return 0===e.comparator(this,t)}},{key:"child",value:function(t){var n=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach((function(e){n.push(e)})):n.push(t),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),e}(),af=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){return t(w)(this,r),n.apply(this,arguments)}return t(R)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f,h=c.value;if(h.indexOf("//")>=0)throw new Bl(jl.INVALID_ARGUMENT,"Invalid segment (".concat(h,"). Paths must not contain // in them."));(f=a).push.apply(f,t(L)(h.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(rf),of=/^[_a-zA-Z][_a-zA-Z0-9]*$/,sf=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){return t(w)(this,r),n.apply(this,arguments)}return t(R)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return of.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new Bl(jl.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new Bl(jl.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new Bl(jl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new Bl(jl.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(rf),uf=function(){"use strict";function e(n){t(w)(this,e),this.path=n}return t(R)(e,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===af.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(t){return new e(af.fromString(t))}},{key:"fromName",value:function(t){return new e(af.fromString(t).popFirst(5))}},{key:"empty",value:function(){return new e(af.emptyPath())}},{key:"comparator",value:function(e,t){return af.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(t){return new e(new af(t.slice()))}}]),e}(),cf=function e(n,r,i,a){"use strict";t(w)(this,e),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cf.UNKNOWN_ID=-1;function lf(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=nf.fromTimestamp(1e9===r?new tf(n+1,0):new tf(n,r));return new hf(i,uf.empty(),t)}function ff(e){return new hf(e.readTime,e.key,-1)}var hf=function(){"use strict";function e(n,r,i){t(w)(this,e),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return t(R)(e,null,[{key:"min",value:function(){return new e(nf.min(),uf.empty(),-1)}},{key:"max",value:function(){return new e(nf.max(),uf.empty(),-1)}}]),e}();function df(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=uf.comparator(e.documentKey,t.documentKey))?n:Zl(e.largestBatchId,t.largestBatchId)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",vf=function(){"use strict";function e(){t(w)(this,e),this.onCommittedListeners=[]}return t(R)(e,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),e}();function mf(e){return yf.apply(this,arguments)}function yf(){return(yf=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===jl.FAILED_PRECONDITION&&n.message===pf){e.next=2;break}throw n;case 2:Rl("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gf=function(){"use strict";function e(n){var r=this;t(w)(this,e),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return t(R)(e,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(t,n){var r=this;return this.callbackAttached&&Ul(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new e((function(e,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(t,n).next(e,i)},r.catchCallback=function(t){a.wrapFailure(n,t).next(e,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(t){try{var n=t();return n instanceof e?n:e.resolve(n)}catch(t){return e.reject(t)}}},{key:"wrapSuccess",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.resolve(n)}},{key:"wrapFailure",value:function(t,n){return t?this.wrapUserFunction((function(){return t(n)})):e.reject(n)}}],[{key:"resolve",value:function(t){return new e((function(e,n){e(t)}))}},{key:"reject",value:function(t){return new e((function(e,n){n(t)}))}},{key:"waitFor",value:function(t){return new e((function(e,n){var r=0,i=0,a=!1;t.forEach((function(t){++r,t.next((function(){++i,a&&i===r&&e()}),(function(e){return n(e)}))})),a=!0,i===r&&e()}))}},{key:"or",value:function(t){var n=e.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=r.value;n=n.next((function(t){return t?e.resolve(t):i()}))},u=t[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(t,n){return new e((function(e,r){for(var i=function(i){var u=i;n(t[u]).next((function(t){o[u]=t,++s===a&&e(o)}),(function(e){return r(e)}))},a=t.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(t,n){return new e((function(e,r){var i=function(){!0===t()?n().next((function(){i()}),r):e()};i()}))}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(e){return"IndexedDbTransactionError"===e.name}var bf=function(){"use strict";function e(n,r){var i=this;t(w)(this,e),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.ut(e)},this.ct=function(e){return r.writeSequenceNumber(e)})}return t(R)(e,[{key:"ut",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.ct&&this.ct(e),e}}]),e}();bf.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wf=function e(n,r,i,a,o,s,u,c){"use strict";t(w)(this,e),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=u,this.useFetchStreams=c},xf=function(){"use strict";function e(n,r){t(w)(this,e),this.projectId=n,this.database=r||"(default)"}return t(R)(e,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}}],[{key:"empty",value:function(){return new e("","")}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _f(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ef(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function If(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(e){return null==e}function Sf(e){return 0===e&&1/e==-1/0}function Nf(e){return"number"==typeof e&&Number.isInteger(e)&&!Sf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Af=Symbol.iterator,Cf=function(){"use strict";function e(n){t(w)(this,e),this.binaryString=n}return t(R)(e,[{key:Af,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Zl(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(t){return new e(atob(t))}},{key:"fromUint8Array",value:function(t){return new e(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(t))}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cf.EMPTY_BYTE_STRING=new Cf("");var Of=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Df(e){if(Fl(!!e),"string"==typeof e){var t=0,n=Of.exec(e);if(Fl(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Rf(e.seconds),nanos:Rf(e.nanos)}}function Rf(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Lf(e){return"string"==typeof e?Cf.fromBase64String(e):Cf.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Mf(e){var t=Df(e.mapValue.fields.__local_write_time__.timestampValue);return new tf(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Uf={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ff(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pf(e)?4:Xf(e)?9007199254740991:10:Ul()}function Vf(e,t){if(e===t)return!0;var n,r=Ff(e);if(r!==Ff(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Mf(e).isEqual(Mf(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Df(e.timestampValue),r=Df(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Lf(e.bytesValue).isEqual(Lf(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Rf(e.geoPointValue.latitude)===Rf(t.geoPointValue.latitude)&&Rf(e.geoPointValue.longitude)===Rf(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Rf(e.integerValue)===Rf(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Rf(e.doubleValue),r=Rf(t.doubleValue);return n===r?Sf(n)===Sf(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ef(e.arrayValue.values||[],t.arrayValue.values||[],Vf);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(_f(n)!==_f(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Vf(n[i],r[i])))return!1;return!0}(e,t);default:return Ul()}}function jf(e,t){return void 0!==(e.values||[]).find((function(e){return Vf(e,t)}))}function Bf(e,t){if(e===t)return 0;var n,r,i,a,o=Ff(e),s=Ff(t);if(o!==s)return Zl(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return Zl(e.booleanValue,t.booleanValue);case 2:return r=t,i=Rf((n=e).integerValue||n.doubleValue),a=Rf(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return Hf(e.timestampValue,t.timestampValue);case 4:return Hf(Mf(e),Mf(t));case 5:return Zl(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Lf(e),r=Lf(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=Zl(n[i],r[i]);if(0!==a)return a}return Zl(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=Zl(Rf(e.latitude),Rf(t.latitude));return 0!==n?n:Zl(Rf(e.longitude),Rf(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Bf(n[i],r[i]);if(a)return a}return Zl(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Uf.mapValue&&t===Uf.mapValue)return 0;if(e===Uf.mapValue)return 1;if(t===Uf.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=Zl(r[o],a[o]);if(0!==s)return s;var u=Bf(n[r[o]],i[a[o]]);if(0!==u)return u}return Zl(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Ul()}}function Hf(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Zl(e,t);var n=Df(e),r=Df(t),i=Zl(n.seconds,r.seconds);return 0!==i?i:Zl(n.nanos,r.nanos)}function zf(e){return Wf(e)}function Wf(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=Df(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?Lf(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,uf.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Wf(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Wf(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):Ul()}function qf(e){return!!e&&"integerValue"in e}function Gf(e){return!!e&&"arrayValue"in e}function Kf(e){return!!e&&"mapValue"in e}function Qf(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return Ef(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=Qf(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=Qf(e.arrayValue.values[r]);return n}return Object.assign({},e)}function Xf(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jf=function e(n,r){"use strict";t(w)(this,e),this.position=n,this.inclusive=r};function Yf(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?uf.comparator(uf.fromName(o.referenceValue),n.key):Bf(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function $f(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!Vf(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zf=function e(){"use strict";t(w)(this,e)},eh=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a){var o;return t(w)(this,r),(o=n.call(this)).field=e,o.op=i,o.value=a,t(_o)(o)}return t(R)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Bf(t,this.value)):null!==t&&Ff(this.value)===Ff(t)&&this.matchesComparison(Bf(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ul()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new uh(e,t,n):"array-contains"===t?new hh(e,n):"in"===t?new dh(e,n):"not-in"===t?new ph(e,n):"array-contains-any"===t?new vh(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new ch(e,n):new lh(e,n)}}]),r}(Zf),th=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this)).filters=e,a.op=i,a.ht=null,t(_o)(a)}return t(R)(r,[{key:"matches",value:function(e){return nh(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ht||(this.ht=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ht}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.lt((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"lt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(Zf);function nh(e){return"and"===e.op}function rh(e){return ih(e)&&nh(e)}function ih(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof th)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function ah(e){if(e instanceof eh)return e.field.canonicalString()+e.op.toString()+zf(e.value);if(rh(e))return e.filters.map((function(e){return ah(e)})).join(",");var t=e.filters.map((function(e){return ah(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function oh(e,t){return e instanceof eh?(n=e,(r=t)instanceof eh&&n.op===r.op&&n.field.isEqual(r.field)&&Vf(n.value,r.value)):e instanceof th?function(e,t){return t instanceof th&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&oh(n,t.filters[r])}),!0)}(e,t):void Ul();var n,r}function sh(e){return e instanceof eh?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(zf(t.value)):e instanceof th?function(e){return e.op.toString()+" {"+e.getFilters().map(sh).join(" ,")+"}"}(e):"Filter";var t}var uh=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a){var o;return t(w)(this,r),(o=n.call(this,e,i,a)).key=uf.fromName(a.referenceValue),t(_o)(o)}return t(R)(r,[{key:"matches",value:function(e){var t=uf.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(eh),ch=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this,e,"in",i)).keys=fh("in",i),t(_o)(a)}return t(R)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(eh),lh=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this,e,"not-in",i)).keys=fh("not-in",i),t(_o)(a)}return t(R)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(eh);function fh(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return uf.fromName(e.referenceValue)}))}var hh=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){return t(w)(this,r),n.call(this,e,"array-contains",i)}return t(R)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Gf(t)&&jf(t.arrayValue,this.value)}}]),r}(eh),dh=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){return t(w)(this,r),n.call(this,e,"in",i)}return t(R)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&jf(this.value.arrayValue,t)}}]),r}(eh),ph=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){return t(w)(this,r),n.call(this,e,"not-in",i)}return t(R)(r,[{key:"matches",value:function(e){if(jf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!jf(this.value.arrayValue,t)}}]),r}(eh),vh=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){return t(w)(this,r),n.call(this,e,"array-contains-any",i)}return t(R)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return jf(t.value.arrayValue,e)}))}}]),r}(eh),mh=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";t(w)(this,e),this.field=n,this.dir=r};function yh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gh=function(){"use strict";function e(n,r){t(w)(this,e),this.comparator=n,this.root=r||bh.EMPTY}return t(R)(e,[{key:"insert",value:function(t,n){return new e(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,bh.BLACK,null,null))}},{key:"remove",value:function(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bh.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new kh(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new kh(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new kh(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new kh(this.root,e,this.comparator,!0)}}]),e}(),kh=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.isReverse=a,this.nodeStack=[];for(var o=1;!n.isEmpty();)if(o=r?i(n.key,r):1,r&&a&&(o*=-1),o<0)n=this.isReverse?n.left:n.right;else{if(0===o){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return t(R)(e,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),e}(),bh=function(){"use strict";function e(n,r,i,a,o){t(w)(this,e),this.key=n,this.value=r,this.color=null!=i?i:e.RED,this.left=null!=a?a:e.EMPTY,this.right=null!=o?o:e.EMPTY,this.size=this.left.size+1+this.right.size}return t(R)(e,[{key:"copy",value:function(t,n,r,i,a){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return e.EMPTY;var t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(t,n){var r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}},{key:"rotateRight",value:function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw Ul();if(this.right.isRed())throw Ul();var e=this.left.check();if(e!==this.right.check())throw Ul();return e+(this.isRed()?0:1)}}]),e}();bh.EMPTY=null,bh.RED=!0,bh.BLACK=!1,bh.EMPTY=new(function(){"use strict";function e(){t(w)(this,e),this.size=0}return t(R)(e,[{key:"key",get:function(){throw Ul()}},{key:"value",get:function(){throw Ul()}},{key:"color",get:function(){throw Ul()}},{key:"left",get:function(){throw Ul()}},{key:"right",get:function(){throw Ul()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new bh(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),e}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wh=function(){"use strict";function e(n){t(w)(this,e),this.comparator=n,this.data=new gh(this.comparator)}return t(R)(e,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new xh(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new xh(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(t){if(!(t instanceof e))return!1;if(this.size!==t.size)return!1;for(var n=this.data.getIterator(),r=t.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(t){var n=new e(this.comparator);return n.data=t,n}}]),e}(),xh=function(){"use strict";function e(n){t(w)(this,e),this.iter=n}return t(R)(e,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _h=function(){"use strict";function e(n){t(w)(this,e),this.fields=n,n.sort(sf.comparator)}return t(R)(e,[{key:"unionWith",value:function(t){var n=new wh(sf.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,f=void 0;try{for(var h,d=t[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var p=h.value;n=n.add(p)}}catch(e){l=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}return new e(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return ef(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new e([])}}]),e}(),Eh=function(){"use strict";function e(n){t(w)(this,e),this.value=n}return t(R)(e,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!Kf(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qf(t)}},{key:"setAll",value:function(e){var t=this,n=sf.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=Qf(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());Kf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return Vf(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];Kf(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){Ef(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new e(Qf(this.value))}}],[{key:"empty",value:function(){return new e({mapValue:{}})}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(e){var t=[];return Ef(e.fields,(function(e,n){var r=new sf([e]);if(Kf(n)){var i=Ih(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new _h(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Th=function(){"use strict";function e(n,r,i,a,o,s,u){t(w)(this,e),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=o,this.data=s,this.documentState=u}return t(R)(e,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(nf.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=Eh.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=Eh.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=nf.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}},{key:"mutableCopy",value:function(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(t){return new e(t,0,nf.min(),nf.min(),nf.min(),Eh.empty(),0)}},{key:"newFoundDocument",value:function(t,n,r,i){return new e(t,1,n,nf.min(),r,i,0)}},{key:"newNoDocument",value:function(t,n){return new e(t,2,n,nf.min(),nf.min(),Eh.empty(),0)}},{key:"newUnknownDocument",value:function(t,n){return new e(t,3,n,nf.min(),nf.min(),Eh.empty(),2)}}]),e}(),Sh=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;t(w)(this,e),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=o,this.startAt=s,this.endAt=u,this.ft=null};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new Sh(e,t,n,r,i,a,o)}function Ah(e){var t=Vl(e);if(null===t.ft){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return ah(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),Tf(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return zf(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return zf(e)})).join(",")),t.ft=n}return t.ft}function Ch(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!yh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!oh(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$f(e.startAt,t.startAt)&&$f(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oh=function e(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;t(w)(this,e),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=s,this.startAt=u,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt};function Dh(e,t,n,r,i,a,o,s){return new Oh(e,t,n,r,i,a,o,s)}function Rh(e){return new Oh(e)}function Lh(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ph(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Mh(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Uh(e){return null!==e.collectionGroup}function Fh(e){var t=Vl(e);if(null===t.dt){t.dt=[];var n=Mh(t),r=Ph(t);if(null!==n&&null===r)n.isKeyField()||t.dt.push(new mh(n)),t.dt.push(new mh(sf.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.dt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var f=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new mh(sf.keyField(),f))}}}return t.dt}function Vh(e){var t=Vl(e);if(!t._t)if("F"===t.limitType)t._t=Nh(t.path,t.collectionGroup,Fh(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=Fh(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new mh(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new Jf(t.endAt.position,t.endAt.inclusive):null,f=t.startAt?new Jf(t.startAt.position,t.startAt.inclusive):null;t._t=Nh(t.path,t.collectionGroup,n,t.filters,t.limit,l,f)}return t._t}function jh(e,t,n){return new Oh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bh(e,t){return Ch(Vh(e),Vh(t))&&e.limitType===t.limitType}function Hh(e){return"".concat(Ah(Vh(e)),"|lt:").concat(e.limitType)}function zh(e){return"Query(target=".concat((t=Vh(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return sh(e)})).join(", "),"]")),Tf(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return zf(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return zf(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function Wh(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):uf.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=Fh(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=Yf(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Fh(n),r)||n.endAt&&!function(e,t,n){var r=Yf(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Fh(n),r)));var n,r,i,a,o}function qh(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=Fh(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=Gh(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function Gh(e,t,n){var r,i,a,o,s=e.field.isKeyField()?uf.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Bf(a,o):Ul());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return Ul()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sf(t)?"-0":t}}function Qh(e){return{integerValue:""+e}}function Xh(e,t){return Nf(t)?Qh(t):Kh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jh=function e(){"use strict";t(w)(this,e),this._=void 0};function Yh(e,t,n){return e instanceof ed?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof td?nd(e,t):e instanceof rd?id(e,t):function(e,t){var n=Zh(e,t),r=od(n)+od(e.gt);return qf(n)&&qf(e.gt)?Qh(r):Kh(e.yt,r)}(e,t);var r,i,a}function $h(e,t,n){return e instanceof td?nd(e,t):e instanceof rd?id(e,t):n}function Zh(e,t){var n,r;return e instanceof ad?qf(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var ed=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(){return t(w)(this,r),n.apply(this,arguments)}return r}(Jh),td=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this)).elements=e,t(_o)(i)}return r}(Jh);function nd(e,t){var n=sd(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return Vf(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var rd=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this)).elements=e,t(_o)(i)}return r}(Jh);function id(e,t){var n=sd(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!Vf(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var ad=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this)).yt=e,a.gt=i,t(_o)(a)}return r}(Jh);function od(e){return Rf(e.integerValue||e.doubleValue)}function sd(e){return Gf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ud=function e(n,r){"use strict";t(w)(this,e),this.version=n,this.transformResults=r},cd=function(){"use strict";function e(n,r){t(w)(this,e),this.updateTime=n,this.exists=r}return t(R)(e,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new e}},{key:"exists",value:function(t){return new e(void 0,t)}},{key:"updateTime",value:function(t){return new e(t)}}]),e}();function ld(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var fd=function e(){"use strict";t(w)(this,e)};function hd(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ed(e.key,cd.none()):new yd(e.key,e.data,cd.none());var n=e.data,r=Eh.empty(),i=new wh(sf.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var f=n.field(l);null===f&&l.length>1&&(l=l.popLast(),f=n.field(l)),null===f?r.delete(l):r.set(l,f),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new gd(e.key,r,new _h(i.toArray()),cd.none())}function dd(e,t,n){var r,i,a,o,s;e instanceof yd?(i=t,a=n,o=(r=e).value.clone(),s=bd(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof gd?function(e,t,n){if(ld(e.precondition,t)){var r=bd(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(kd(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function pd(e,t,n,r){return e instanceof yd?function(e,t,n,r){if(!ld(e.precondition,t))return n;var i=e.value.clone(),a=wd(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof gd?function(e,t,n,r){if(!ld(e.precondition,t))return n;var i=wd(e.fieldTransforms,r,t),a=t.data;return a.setAll(kd(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,ld(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function vd(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=Zh(u.transform,c||null);null!=l&&(null===n&&(n=Eh.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function md(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&ef(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof td&&r instanceof td||n instanceof rd&&r instanceof rd?ef(n.elements,r.elements,Vf):n instanceof ad&&r instanceof ad?Vf(n.gt,r.gt):n instanceof ed&&r instanceof ed);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var yd=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t(w)(this,r),(o=n.call(this)).key=e,o.value=i,o.precondition=a,o.fieldTransforms=s,o.type=0,t(_o)(o)}return t(R)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(fd),gd=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a,o){var s,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return t(w)(this,r),(s=n.call(this)).key=e,s.data=i,s.fieldMask=a,s.precondition=o,s.fieldTransforms=u,s.type=1,t(_o)(s)}return t(R)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(fd);function kd(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function bd(e,t,n){var r=new Map;Fl(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,$h(o,s,n[i]))}return r}function wd(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,f=n.data.field(c.field);r.set(c.field,Yh(l,f,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var xd,_d,Ed=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=2,a.fieldTransforms=[],t(_o)(a)}return t(R)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(fd),Id=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i){var a;return t(w)(this,r),(a=n.call(this)).key=e,a.precondition=i,a.type=3,a.fieldTransforms=[],t(_o)(a)}return t(R)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(fd);function Td(e){switch(e){default:return Ul();case jl.CANCELLED:case jl.UNKNOWN:case jl.DEADLINE_EXCEEDED:case jl.RESOURCE_EXHAUSTED:case jl.INTERNAL:case jl.UNAVAILABLE:case jl.UNAUTHENTICATED:return!1;case jl.INVALID_ARGUMENT:case jl.NOT_FOUND:case jl.ALREADY_EXISTS:case jl.PERMISSION_DENIED:case jl.FAILED_PRECONDITION:case jl.ABORTED:case jl.OUT_OF_RANGE:case jl.UNIMPLEMENTED:case jl.DATA_LOSS:return!0}}function Sd(e){if(void 0===e)return Ll("GRPC error has no .code"),jl.UNKNOWN;switch(e){case xd.OK:return jl.OK;case xd.CANCELLED:return jl.CANCELLED;case xd.UNKNOWN:return jl.UNKNOWN;case xd.DEADLINE_EXCEEDED:return jl.DEADLINE_EXCEEDED;case xd.RESOURCE_EXHAUSTED:return jl.RESOURCE_EXHAUSTED;case xd.INTERNAL:return jl.INTERNAL;case xd.UNAVAILABLE:return jl.UNAVAILABLE;case xd.UNAUTHENTICATED:return jl.UNAUTHENTICATED;case xd.INVALID_ARGUMENT:return jl.INVALID_ARGUMENT;case xd.NOT_FOUND:return jl.NOT_FOUND;case xd.ALREADY_EXISTS:return jl.ALREADY_EXISTS;case xd.PERMISSION_DENIED:return jl.PERMISSION_DENIED;case xd.FAILED_PRECONDITION:return jl.FAILED_PRECONDITION;case xd.ABORTED:return jl.ABORTED;case xd.OUT_OF_RANGE:return jl.OUT_OF_RANGE;case xd.UNIMPLEMENTED:return jl.UNIMPLEMENTED;case xd.DATA_LOSS:return jl.DATA_LOSS;default:return Ul()}}(_d=xd||(xd={}))[_d.OK=0]="OK",_d[_d.CANCELLED=1]="CANCELLED",_d[_d.UNKNOWN=2]="UNKNOWN",_d[_d.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_d[_d.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_d[_d.NOT_FOUND=5]="NOT_FOUND",_d[_d.ALREADY_EXISTS=6]="ALREADY_EXISTS",_d[_d.PERMISSION_DENIED=7]="PERMISSION_DENIED",_d[_d.UNAUTHENTICATED=16]="UNAUTHENTICATED",_d[_d.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_d[_d.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_d[_d.ABORTED=10]="ABORTED",_d[_d.OUT_OF_RANGE=11]="OUT_OF_RANGE",_d[_d.UNIMPLEMENTED=12]="UNIMPLEMENTED",_d[_d.INTERNAL=13]="INTERNAL",_d[_d.UNAVAILABLE=14]="UNAVAILABLE",_d[_d.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nd=function(){"use strict";function e(n,r){t(w)(this,e),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return t(R)(e,[{key:"get",value:function(e){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,c=r[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=t(u)(s.value,2),f=l[0],h=l[1];if(this.equalsFn(f,e))return h}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(e){Ef(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,c=r[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=t(u)(s.value,2),f=l[0],h=l[1];e(f,h)}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return If(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),e}(),Ad=new gh(uf.comparator);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){return Ad}var Od=new gh(uf.comparator);function Dd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Od,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function Rd(e){var t=Od;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function Ld(){return Md()}function Pd(){return Md()}function Md(){return new Nd((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var Ud=new gh(uf.comparator),Fd=new wh(uf.comparator);function Vd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Fd,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var jd=new wh(Zl);function Bd(){return jd}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hd=function e(n,r){"use strict";t(w)(this,e),this.databaseId=n,this.wt=r};function zd(e,t){return e.wt?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wd(e,t){return e.wt?t.toBase64():t.toUint8Array()}function qd(e,t){return zd(e,t.toTimestamp())}function Gd(e){return Fl(!!e),nf.fromTimestamp((t=Df(e),new tf(t.seconds,t.nanos)));var t}function Kd(e,t){return(n=e,new af(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Qd(e){var t=af.fromString(e);return Fl(ip(t)),t}function Xd(e,t){return Kd(e.databaseId,t.path)}function Jd(e){var t=Qd(e);return 4===t.length?af.emptyPath():$d(t)}function Yd(e){return new af(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function $d(e){return Fl(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Zd(e,t,n){return{name:Xd(e,t),fields:n.value.mapValue.fields}}function ep(e,t){var n,r,i;if(t instanceof yd)n={update:Zd(e,t.key,t.value)};else if(t instanceof Ed)n={delete:Xd(e,t.key)};else if(t instanceof gd)n={update:Zd(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof Id))return Ul();n={verify:Xd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof ed)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof td)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof rd)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ad)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Ul()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:qd(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ul()}(e,t.precondition)),n}function tp(e){var t=Jd(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){Fl(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=np(o))instanceof th&&rh(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new mh(rp((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return Tf(t="object"==typeof e?e.value:e)?null:t}(n.limit));var f=null;n.startAt&&(f=function(e){var t=!!e.before,n=e.values||[];return new Jf(n,t)}(n.startAt));var h=null;return n.endAt&&(h=function(e){var t=!e.before,n=e.values||[];return new Jf(n,t)}(n.endAt)),Dh(t,i,c,u,l,"F",f,h)}function np(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=rp(e.unaryFilter.field);return eh.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=rp(e.unaryFilter.field);return eh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=rp(e.unaryFilter.field);return eh.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=rp(e.unaryFilter.field);return eh.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ul()}}(e):void 0!==e.fieldFilter?(n=e,eh.create(rp(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ul()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,th.create(t.compositeFilter.filters.map((function(e){return np(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ul()}}(t.compositeFilter.op))):Ul();var t,n}function rp(e){return sf.fromServerFormat(e.fieldPath)}function ip(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ap=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],op=(t(L)(ap).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),sp=op;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t(L)(sp).concat(["indexConfiguration","indexState","indexEntries"]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var up=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return t(R)(e,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&dd(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=pd(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var f,h=this.mutations[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=f.value;d.key.isEqual(e.key)&&(t=pd(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=Pd();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=hd(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(nf.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),Vd())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&ef(this.mutations,e.mutations,(function(e,t){return md(e,t)}))&&ef(this.baseMutations,e.baseMutations,(function(e,t){return md(e,t)}))}}]),e}(),cp=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return t(R)(e,null,[{key:"from",value:function(t,n,r){Fl(t.mutations.length===r.length);for(var i=Ud,a=t.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new e(t,n,r,i)}}]),e}(),lp=function(){"use strict";function e(n,r){t(w)(this,e),this.largestBatchId=n,this.mutation=r}return t(R)(e,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),e}(),fp=function e(n){"use strict";t(w)(this,e),this.ie=n};function hp(e){var t=tp({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?jh(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dp=function(){"use strict";function e(){t(w)(this,e)}return t(R)(e,[{key:"ue",value:function(e,t){this.ce(e,t),t.ae()}},{key:"ce",value:function(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Rf(e.integerValue));else if("doubleValue"in e){var n=Rf(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Sf(n)?t.le(0):t.le(n))}else if("timestampValue"in e){var r=e.timestampValue;this.he(t,20),"string"==typeof r?t.fe(r):(t.fe("".concat(r.seconds||"")),t.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Lf(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.he(t,45),t.le(i.latitude||0),t.le(i.longitude||0)}else"mapValue"in e?Xf(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Ul()}},{key:"de",value:function(e,t){this.he(t,25),this.pe(e,t)}},{key:"pe",value:function(e,t){t.fe(e)}},{key:"ge",value:function(e,t){var n=e.fields||{};this.he(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.de(u,t),this.ce(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"ye",value:function(e,t){var n=e.values||[];this.he(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ce(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"me",value:function(e,t){var n=this;this.he(t,37),uf.fromName(e).path.forEach((function(e){n.he(t,60),n.pe(e,t)}))}},{key:"he",value:function(e,t){e.le(t)}},{key:"_e",value:function(e){e.le(2)}}]),e}();dp.Ie=new dp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pp=function(){"use strict";function e(){t(w)(this,e),this.Je=new vp}return t(R)(e,[{key:"addToCollectionParentIndex",value:function(e,t){return this.Je.add(t),gf.resolve()}},{key:"getCollectionParents",value:function(e,t){return gf.resolve(this.Je.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return gf.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return gf.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return gf.resolve(null)}},{key:"getIndexType",value:function(e,t){return gf.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return gf.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return gf.resolve(null)}},{key:"getMinOffset",value:function(e,t){return gf.resolve(hf.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return gf.resolve(hf.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return gf.resolve()}},{key:"updateIndexEntries",value:function(e,t){return gf.resolve()}}]),e}(),vp=function(){"use strict";function e(){t(w)(this,e),this.index={}}return t(R)(e,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new wh(af.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new wh(af.comparator)).toArray()}}]),e}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mp=function(){"use strict";function e(n,r,i){t(w)(this,e),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return t(R)(e,null,[{key:"withCacheSize",value:function(t){return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mp.DEFAULT_COLLECTION_PERCENTILE=10,mp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mp.DEFAULT=new mp(41943040,mp.DEFAULT_COLLECTION_PERCENTILE,mp.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mp.DISABLED=new mp(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yp=function(){"use strict";function e(n){t(w)(this,e),this.bn=n}return t(R)(e,[{key:"next",value:function(){return this.bn+=2,this.bn}}],[{key:"Pn",value:function(){return new e(0)}},{key:"vn",value:function(){return new e(-1)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gp=function(){"use strict";function e(){t(w)(this,e),this.changes=new Nd((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return t(R)(e,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,Th.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?gf.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kp=function e(n,r){"use strict";t(w)(this,e),this.overlayedDocument=n,this.mutatedFields=r},bp=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return t(R)(e,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&pd(r.mutation,e,_h.empty(),tf.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,Vd()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Vd(),r=this,i=Ld();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=Dd();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=Ld();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,Vd())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=Cd(),a=Md(),o=Md();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof gd)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),pd(o.mutation,t,o.mutation.getFieldMask(),tf.now())):a.set(t.key,_h.empty())})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new kp(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=Md(),i=new gh((function(e,t){return e-t})),a=Vd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||_h.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||Vd()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,f=Pd();l.forEach((function(e){if(!a.has(e)){var n=hd(t.get(e),r.get(e));null!==n&&f.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,f))}return gf.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,uf.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Uh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):gf.resolve(Ld()),u=-1,c=a;return s.next((function(t){return gf.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?gf.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,Vd())})).next((function(e){return{batchId:u,changes:Rd(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new uf(t)).next((function(e){var t=Dd();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=Dd();return this.indexManager.getCollectionParents(e,i).next((function(o){return gf.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new Oh(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((function(a){return r=a,i.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)})).next((function(e){r.forEach((function(t,n){var r=n.getKey();null===e.get(r)&&(e=e.insert(r,Th.newInvalidDocument(r)))}));var n=Dd();return e.forEach((function(e,i){var a=r.get(e);void 0!==a&&pd(a.mutation,i,_h.empty(),tf.now()),Wh(t,i)&&(n=n.insert(e,i))})),n}))}}]),e}(),wp=function(){"use strict";function e(n){t(w)(this,e),this.yt=n,this.Zn=new Map,this.ts=new Map}return t(R)(e,[{key:"getBundleMetadata",value:function(e,t){return gf.resolve(this.Zn.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Gd(n.createTime)}),gf.resolve()}},{key:"getNamedQuery",value:function(e,t){return gf.resolve(this.ts.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.ts.set(t.name,{name:(n=t).name,query:hp(n.bundledQuery),readTime:Gd(n.readTime)}),gf.resolve();var n}}]),e}(),xp=function(){"use strict";function e(){t(w)(this,e),this.overlays=new gh(uf.comparator),this.es=new Map}return t(R)(e,[{key:"getOverlay",value:function(e,t){return gf.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=Ld();return gf.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.oe(e,t,i)})),gf.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.es.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.es.delete(n)),gf.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=Ld(),i=t.length+1,a=new uf(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return gf.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new gh((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=Ld(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=Ld(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return gf.resolve(u)}},{key:"oe",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new lp(t,n));var a=this.es.get(t);void 0===a&&(a=Vd(),this.es.set(t,a)),this.es.set(t,a.add(n.key))}}]),e}(),_p=function(){"use strict";function e(){t(w)(this,e),this.ns=new wh(Ep.ss),this.rs=new wh(Ep.os)}return t(R)(e,[{key:"isEmpty",value:function(){return this.ns.isEmpty()}},{key:"addReference",value:function(e,t){var n=new Ep(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}},{key:"us",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.cs(new Ep(e,t))}},{key:"hs",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"ls",value:function(e){var t=this,n=new uf(new af([])),r=new Ep(n,e),i=new Ep(n,e+1),a=[];return this.rs.forEachInRange([r,i],(function(e){t.cs(e),a.push(e.key)})),a}},{key:"fs",value:function(){var e=this;this.ns.forEach((function(t){return e.cs(t)}))}},{key:"cs",value:function(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}},{key:"ds",value:function(e){var t=new uf(new af([])),n=new Ep(t,e),r=new Ep(t,e+1),i=Vd();return this.rs.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new Ep(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),e}(),Ep=function(){"use strict";function e(n,r){t(w)(this,e),this.key=n,this._s=r}return t(R)(e,null,[{key:"ss",value:function(e,t){return uf.comparator(e.key,t.key)||Zl(e._s,t._s)}},{key:"os",value:function(e,t){return Zl(e._s,t._s)||uf.comparator(e.key,t.key)}}]),e}(),Ip=function(){"use strict";function e(n,r){t(w)(this,e),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.ws=1,this.gs=new wh(Ep.ss)}return t(R)(e,[{key:"checkEmpty",value:function(e){return gf.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new up(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=c.value;this.gs=this.gs.add(new Ep(f.key,i)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return gf.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return gf.resolve(this.ys(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.ps(n),i=r<0?0:r;return gf.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return gf.resolve(0===this.mutationQueue.length?-1:this.ws-1)}},{key:"getAllMutationBatches",value:function(e){return gf.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new Ep(t,0),i=new Ep(t,Number.POSITIVE_INFINITY),a=[];return this.gs.forEachInRange([r,i],(function(e){var t=n.ys(e._s);a.push(t)})),gf.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new wh(Zl);return t.forEach((function(e){var t=new Ep(e,0),i=new Ep(e,Number.POSITIVE_INFINITY);n.gs.forEachInRange([t,i],(function(e){r=r.add(e._s)}))})),gf.resolve(this.Is(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;uf.isDocumentKey(i)||(i=i.child(""));var a=new Ep(new uf(i),0),o=new wh(Zl);return this.gs.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),a),gf.resolve(this.Is(o))}},{key:"Is",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.ys(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;Fl(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();var r=this.gs;return gf.forEach(t.mutations,(function(i){var a=new Ep(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.gs=r}))}},{key:"An",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new Ep(t,0),r=this.gs.firstAfterOrEqual(n);return gf.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,gf.resolve()}},{key:"Ts",value:function(e,t){return this.ps(e)}},{key:"ps",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"ys",value:function(e){var t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),e}(),Tp=function(){"use strict";function e(n){t(w)(this,e),this.Es=n,this.docs=new gh(uf.comparator),this.size=0}return t(R)(e,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return gf.resolve(n?n.document.mutableCopy():Th.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=Cd();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():Th.newInvalidDocument(e))})),gf.resolve(r)}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){for(var i=Cd(),a=t.path,o=new uf(a.child("")),s=this.docs.getIteratorFrom(o);s.hasNext();){var u=s.getNext(),c=u.key,l=u.value.document;if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||df(ff(l),n)<=0||(r.has(l.key)||Wh(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return gf.resolve(i)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){Ul()}},{key:"As",value:function(e,t){return gf.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new Sp(this)}},{key:"getSize",value:function(e){return gf.resolve(this.size)}}]),e}(),Sp=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this)).Yn=e,t(_o)(i)}return t(R)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.Yn.addEntry(e,i)):t.Yn.removeEntry(r)})),gf.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.Yn.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.Yn.getEntries(e,t)}}]),r}(gp),Np=function(){"use strict";function e(n){t(w)(this,e),this.persistence=n,this.Rs=new Nd((function(e){return Ah(e)}),Ch),this.lastRemoteSnapshotVersion=nf.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _p,this.targetCount=0,this.vs=yp.Pn()}return t(R)(e,[{key:"forEachTarget",value:function(e,t){return this.Rs.forEach((function(e,n){return t(n)})),gf.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return gf.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return gf.resolve(this.bs)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.vs.next(),gf.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),gf.resolve()}},{key:"Dn",value:function(e){this.Rs.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.vs=new yp(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Dn(t),this.targetCount+=1,gf.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Dn(t),gf.resolve()}},{key:"removeTargetData",value:function(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,gf.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.Rs.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.Rs.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),gf.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return gf.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.Rs.get(t)||null;return gf.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.Ps.us(t,n),gf.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.Ps.hs(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),gf.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.Ps.ls(t),gf.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.Ps.ds(t);return gf.resolve(n)}},{key:"containsKey",value:function(e,t){return gf.resolve(this.Ps.containsKey(t))}}]),e}(),Ap=function(){"use strict";function e(n,r){var i=this;t(w)(this,e),this.Vs={},this.overlays={},this.Ss=new bf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=n(this),this.Cs=new Np(this),this.indexManager=new pp,this.remoteDocumentCache=new Tp((function(e){return i.referenceDelegate.xs(e)})),this.yt=new fp(r),this.Ns=new wp(this.yt)}return t(R)(e,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Ds=!1,Promise.resolve()}},{key:"started",get:function(){return this.Ds}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new xp,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.Vs[e.toKey()];return n||(n=new Ip(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Cs}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.Ns}},{key:"runTransaction",value:function(e,t,n){var r=this;Rl("MemoryPersistence","Starting transaction:",e);var i=new Cp(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((function(e){return r.referenceDelegate.Os(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Ms",value:function(e,t){return gf.or(Object.values(this.Vs).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),e}(),Cp=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this)).currentSequenceNumber=e,t(_o)(i)}return r}(vf),Op=function(){"use strict";function e(n){t(w)(this,e),this.persistence=n,this.Fs=new _p,this.$s=null}return t(R)(e,[{key:"Ls",get:function(){if(this.$s)return this.$s;throw Ul()}},{key:"addReference",value:function(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),gf.resolve()}},{key:"removeReference",value:function(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),gf.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Ls.add(t.toString()),gf.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.Fs.ls(t.targetId).forEach((function(e){return n.Ls.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Ls.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"ks",value:function(){this.$s=new Set}},{key:"Os",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gf.forEach(this.Ls,(function(r){var i=uf.fromPath(r);return t.qs(e,i).next((function(e){e||n.removeEntry(i,nf.min())}))})).next((function(){return t.$s=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.qs(e,t).next((function(e){e?n.Ls.delete(t.toString()):n.Ls.add(t.toString())}))}},{key:"xs",value:function(e){return 0}},{key:"qs",value:function(e,t){var n=this;return gf.or([function(){return gf.resolve(n.Fs.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Ms(e,t)}])}}],[{key:"Bs",value:function(t){return new e(t)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dp=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.targetId=n,this.fromCache=r,this.Si=i,this.Di=a}return t(R)(e,null,[{key:"Ci",value:function(t,n){var r=Vd(),i=Vd(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new e(t,n.fromCache,r,i)}}]),e}(),Rp=function(){"use strict";function e(){t(w)(this,e),this.xi=!1}return t(R)(e,[{key:"initialize",value:function(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.ki(e,t).next((function(a){return a||i.Oi(e,t,r,n)})).next((function(n){return n||i.Mi(e,t)}))}},{key:"ki",value:function(e,n){var r=this;if(Lh(n))return gf.resolve(null);var i=Vh(n);return this.indexManager.getIndexType(e,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=jh(n,null,"F"),i=Vh(n)),r.indexManager.getDocumentsMatchingTarget(e,i).next((function(a){var o=r,s=Vd.apply(void 0,t(L)(a));return r.Ni.getDocuments(e,s).next((function(t){return o.indexManager.getMinOffset(e,i).next((function(r){var i=o.Fi(n,t);return o.$i(n,i,s,r.readTime)?o.ki(e,jh(n,null,"F")):o.Bi(e,i,n,r)}))}))})))}))}},{key:"Oi",value:function(e,t,n,r){var i=this;return Lh(t)||r.isEqual(nf.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((function(a){var o=i.Fi(t,a);return i.$i(t,o,n,r)?i.Mi(e,t):(Dl()<=ze.DEBUG&&Rl("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zh(t)),i.Bi(e,o,t,lf(r,-1)))}))}},{key:"Fi",value:function(e,t){var n=new wh(qh(e));return t.forEach((function(t,r){Wh(e,r)&&(n=n.add(r))})),n}},{key:"$i",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Mi",value:function(e,t){return Dl()<=ze.DEBUG&&Rl("QueryEngine","Using full collection scan to execute query:",zh(t)),this.Ni.getDocumentsMatchingQuery(e,t,hf.min())}},{key:"Bi",value:function(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),e}(),Lp=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this.persistence=n,this.Li=r,this.yt=a,this.qi=new gh(Zl),this.Ui=new Nd((function(e){return Ah(e)}),Ch),this.Ki=new Map,this.Gi=n.getRemoteDocumentCache(),this.Cs=n.getTargetCache(),this.Ns=n.getBundleCache(),this.Qi(i)}return t(R)(e,[{key:"Qi",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bp(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.qi)}))}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e,t,n,r){return new Lp(e,t,n,r)}function Mp(e,t){return Up.apply(this,arguments)}function Up(){return(Up=t(s)(t(c).mark((function e(n,r){var i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Vl(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.Qi(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=Vd(),s=!0,u=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;r.push(h.batchId);var d=!0,p=!1,v=void 0;try{for(var m,y=h.mutations[Symbol.iterator]();!(d=(m=y.next()).done);d=!0){var g=m.value;o=o.add(g.key)}}catch(e){p=!0,v=e}finally{try{d||null==y.return||y.return()}finally{if(p)throw v}}}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var k=!0,b=!1,w=void 0;try{for(var x,_=n[Symbol.iterator]();!(k=(x=_.next()).done);k=!0){var E=x.value;a.push(E.batchId);var I=!0,T=!1,S=void 0;try{for(var N,A=E.mutations[Symbol.iterator]();!(I=(N=A.next()).done);I=!0){var C=N.value;o=o.add(C.key)}}catch(e){T=!0,S=e}finally{try{I||null==A.return||A.return()}finally{if(T)throw S}}}}catch(e){b=!0,w=e}finally{try{k||null==_.return||_.return()}finally{if(b)throw w}}return i.localDocuments.getDocuments(e,o).next((function(e){return{ji:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fp(e,t){var n=Vl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),f=n.Gi.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=f,s=a.batch,u=s.keys(),c=gf.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);Fl(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return f.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=Vd(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function Vp(e){var t=Vl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Cs.getLastRemoteSnapshotVersion(e)}))}function jp(e,t){var n=Vl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}var Bp=function(){"use strict";function e(){t(w)(this,e),this.activeTargetIds=Bd()}return t(R)(e,[{key:"er",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"nr",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"tr",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),e}(),Hp=function(){"use strict";function e(){t(w)(this,e),this.Lr=new Bp,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return t(R)(e,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Lr.er(e),this.qr[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.qr[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Lr.nr(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.qr[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Lr.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Lr=new Bp,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),e}(),zp=function(){"use strict";function e(){t(w)(this,e)}return t(R)(e,[{key:"Ur",value:function(e){}},{key:"shutdown",value:function(){}}]),e}(),Wp=function(){"use strict";function e(){var n=this;t(w)(this,e),this.Kr=function(){return n.Gr()},this.Qr=function(){return n.jr()},this.Wr=[],this.zr()}return t(R)(e,[{key:"Ur",value:function(e){this.Wr.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}},{key:"zr",value:function(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}},{key:"Gr",value:function(){Rl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"jr",value:function(){Rl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"C",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),e}(),qp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Gp=function(){"use strict";function e(n){t(w)(this,e),this.Hr=n.Hr,this.Jr=n.Jr}return t(R)(e,[{key:"Yr",value:function(e){this.Xr=e}},{key:"Zr",value:function(e){this.eo=e}},{key:"onMessage",value:function(e){this.no=e}},{key:"close",value:function(){this.Jr()}},{key:"send",value:function(e){this.Hr(e)}},{key:"so",value:function(){this.Xr()}},{key:"io",value:function(e){this.eo(e)}},{key:"ro",value:function(e){this.no(e)}}]),e}(),Kp=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e){var i;return t(w)(this,r),(i=n.call(this,e)).forceLongPolling=e.forceLongPolling,i.autoDetectLongPolling=e.autoDetectLongPolling,i.useFetchStreams=e.useFetchStreams,t(_o)(i)}return t(R)(r,[{key:"fo",value:function(e,t,n,r){return new Promise((function(i,a){var o=new Sl;o.setWithCredentials(!0),o.listenOnce(xl.COMPLETE,(function(){try{switch(o.getLastErrorCode()){case wl.NO_ERROR:var t=o.getResponseJson();Rl("Connection","XHR received:",JSON.stringify(t)),i(t);break;case wl.TIMEOUT:Rl("Connection",'RPC "'+e+'" timed out'),a(new Bl(jl.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:var n=o.getStatus();if(Rl("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){var r=o.getResponseJson();Array.isArray(r)&&(r=r[0]);var s=null==r?void 0:r.error;if(s&&s.status&&s.message){var u=(c=s.status,l=c.toLowerCase().replace(/_/g,"-"),Object.values(jl).indexOf(l)>=0?l:jl.UNKNOWN);a(new Bl(u,s.message))}else a(new Bl(jl.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Bl(jl.UNAVAILABLE,"Connection failed."));break;default:Ul()}}finally{Rl("Connection",'RPC "'+e+'" completed.')}var c,l}));var s=JSON.stringify(r);o.send(t,"POST",s,n,15)}))}},{key:"wo",value:function(e,t,n){var r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=kl(),a=bl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Il({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;var s=r.join("");Rl("Connection","Creating WebChannel: "+s,o);var u=i.createWebChannel(s,o),c=!1,l=!1,f=new Gp({Hr:function(e){l?Rl("Connection","Not sending because WebChannel is closed:",e):(c||(Rl("Connection","Opening WebChannel transport."),u.open(),c=!0),Rl("Connection","WebChannel sending:",e),u.send(e))},Jr:function(){return u.close()}}),h=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return h(u,Tl.EventType.OPEN,(function(){l||Rl("Connection","WebChannel transport opened.")})),h(u,Tl.EventType.CLOSE,(function(){l||(l=!0,Rl("Connection","WebChannel transport closed"),f.io())})),h(u,Tl.EventType.ERROR,(function(e){l||(l=!0,Pl("Connection","WebChannel transport errored:",e),f.io(new Bl(jl.UNAVAILABLE,"The operation could not be completed")))})),h(u,Tl.EventType.MESSAGE,(function(e){var t;if(!l){var n=e.data[0];Fl(!!n);var r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Rl("Connection","WebChannel received error:",i);var a=i.status,o=function(e){var t=xd[e];if(void 0!==t)return Sd(t)}(a),s=i.message;void 0===o&&(o=jl.INTERNAL,s="Unknown error status: "+a+" with message "+i.message),l=!0,f.io(new Bl(o,s)),u.close()}else Rl("Connection","WebChannel received:",n),f.ro(n)}})),h(a,_l.STAT_EVENT,(function(e){e.stat===El.PROXY?Rl("Connection","Detected buffering proxy"):e.stat===El.NOPROXY&&Rl("Connection","Detected no buffering proxy")})),setTimeout((function(){f.so()}),0),f}}]),r}(function(){"use strict";function e(n){t(w)(this,e),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.oo=r+"://"+n.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return t(R)(e,[{key:"co",get:function(){return!1}},{key:"ao",value:function(e,t,n,r,i){var a=this.ho(e,t);Rl("RestConnection","Sending: ",a,n);var o={};return this.lo(o,r,i),this.fo(e,a,o,n).then((function(e){return Rl("RestConnection","Received: ",e),e}),(function(t){throw Pl("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"_o",value:function(e,t,n,r,i,a){return this.ao(e,t,n,r,i)}},{key:"lo",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cl,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"ho",value:function(e,t){var n=qp[e];return"".concat(this.oo,"/v1/").concat(t,":").concat(n)}}]),e}());function Qp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(e){return new Hd(e,!0)}var Jp=function(){"use strict";function e(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;t(w)(this,e),this.Hs=n,this.timerId=r,this.mo=i,this.yo=a,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}return t(R)(e,[{key:"reset",value:function(){this.Io=0}},{key:"Ao",value:function(){this.Io=this.po}},{key:"Ro",value:function(e){var t=this;this.cancel();var n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&Rl("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.Io," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(function(){return t.Eo=Date.now(),e()})),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}},{key:"Po",value:function(){null!==this.To&&(this.To.skipDelay(),this.To=null)}},{key:"cancel",value:function(){null!==this.To&&(this.To.cancel(),this.To=null)}},{key:"bo",value:function(){return(Math.random()-.5)*this.Io}}]),e}(),Yp=function(){"use strict";function e(n,r,i,a,o,s,u,c){t(w)(this,e),this.Hs=n,this.vo=i,this.Vo=a,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Jp(n,r)}return t(R)(e,[{key:"No",value:function(){return 1===this.state||5===this.state||this.ko()}},{key:"ko",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.Oo()}},{key:"stop",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.No(),!t.t0){t.next=4;break}return t.next=4,e.close(0);case 4:case"end":return t.stop()}}),n)})))()}},{key:"Mo",value:function(){this.state=0,this.xo.reset()}},{key:"Fo",value:function(){var e=this;this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(function(){return e.$o()})))}},{key:"Bo",value:function(e){this.Lo(),this.stream.send(e)}},{key:"$o",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.ko()){t.next=2;break}return t.abrupt("return",e.close(0));case 2:case"end":return t.stop()}}),n)})))()}},{key:"Lo",value:function(){this.Do&&(this.Do.cancel(),this.Do=null)}},{key:"qo",value:function(){this.Co&&(this.Co.cancel(),this.Co=null)}},{key:"close",value:function(e,n){var r=this;return t(s)(t(c).mark((function i(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.Lo(),r.qo(),r.xo.cancel(),r.So++,4!==e?r.xo.reset():n&&n.code===jl.RESOURCE_EXHAUSTED?(Ll(n.toString()),Ll("Using maximum backoff delay to prevent overloading the backend."),r.xo.Ao()):n&&n.code===jl.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.Uo(),r.stream.close(),r.stream=null),r.state=e,t.next=9,r.listener.Zr(n);case 9:case"end":return t.stop()}}),i)})))()}},{key:"Uo",value:function(){}},{key:"auth",value:function(){var e=this;this.state=1;var n=this.Ko(this.So),r=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=t(u)(n,2),a=i[0],o=i[1];e.So===r&&e.Go(a,o)}),(function(t){var r=e;n((function(){var e=new Bl(jl.UNKNOWN,"Fetching auth token failed: "+t.message);return r.Qo(e)}))}))}},{key:"Go",value:function(e,t){var n=this,r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((function(){var e=n;r((function(){return e.state=2,e.Co=e.Hs.enqueueAfterDelay(e.Vo,1e4,(function(){return e.ko()&&(e.state=3),Promise.resolve()})),e.listener.Yr()}))})),this.stream.Zr((function(e){var t=n;r((function(){return t.Qo(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"Oo",value:function(){var e=this;this.state=5,this.xo.Ro(t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state=0,e.start();case 1:case"end":return t.stop()}}),n)}))))}},{key:"Qo",value:function(e){return Rl("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Ko",value:function(e){var t=this;return function(n){var r=t;t.Hs.enqueueAndForget((function(){return r.So===e?n():(Rl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),e}(),$p=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a,o,s,u){var c;return t(w)(this,r),(c=n.call(this,e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,u)).yt=s,c.Jo=!1,t(_o)(c)}return t(R)(r,[{key:"Yo",get:function(){return this.Jo}},{key:"start",value:function(){this.Jo=!1,this.lastStreamToken=void 0,t($t)(t(tn)(r.prototype),"start",this).call(this)}},{key:"Uo",value:function(){this.Jo&&this.Xo([])}},{key:"jo",value:function(e,t){return this.connection.wo("Write",e,t)}},{key:"onMessage",value:function(e){if(Fl(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(Fl(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?Gd(t.updateTime):Gd(n)).isEqual(nf.min())&&(r=Gd(n)),new ud(r,t.transformResults||[]);var t,n,r}))):[]),n=Gd(e.commitTime);return this.listener.Zo(n,t)}var r,i;return Fl(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}},{key:"eu",value:function(){var e={};e.database=Yd(this.yt),this.Bo(e)}},{key:"Xo",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return ep(t.yt,e)}))};this.Bo(n)}}]),r}(Yp),Zp=function(e){"use strict";t(H)(r,(function e(){t(w)(this,e)}));var n=t(Z)(r);function r(e,i,a,o){var s;return t(w)(this,r),(s=n.call(this)).authCredentials=e,s.appCheckCredentials=i,s.connection=a,s.yt=o,s.nu=!1,t(_o)(s)}return t(R)(r,[{key:"su",value:function(){if(this.nu)throw new Bl(jl.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"ao",value:function(e,n,r){var i=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=t(u)(a,2),s=o[0],c=o[1];return i.connection.ao(e,n,r,s,c)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===jl.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new Bl(jl.UNKNOWN,e.toString())}))}},{key:"_o",value:function(e,n,r,i){var a=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=t(u)(o,2),c=s[0],l=s[1];return a.connection._o(e,n,r,c,l,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===jl.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new Bl(jl.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.nu=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ev=function(){"use strict";function e(n,r){t(w)(this,e),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}return t(R)(e,[{key:"uu",value:function(){var e=this;0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.ru=null,e.au("Backend didn't respond within 10 seconds."),e.cu("Offline"),Promise.resolve()})))}},{key:"hu",value:function(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.cu("Offline")))}},{key:"set",value:function(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}},{key:"cu",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"au",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.ou?(Ll(t),this.ou=!1):Rl("OnlineStateTracker",t)}},{key:"lu",value:function(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}]),e}(),tv=function e(n,r,i,a,o){"use strict";var u=this;t(w)(this,e),this.localStore=n,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.Ur((function(e){var n=u;i.enqueueAndForget(t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=ov(n),!e.t0){e.next=5;break}return Rl("RemoteStore","Restarting streams for network reachability change."),e.next=5,function(){var e=t(s)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=Vl(n))._u.add(4),e.next=4,iv(r);case 4:return r.gu.set("Unknown"),r._u.delete(4),e.next=8,nv(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(n);case 5:case"end":return e.stop()}}),e)}))))})),this.gu=new ev(i,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(e){return rv.apply(this,arguments)}function rv(){return(rv=t(s)(t(c).mark((function e(n){var r,i,a,o,s,u;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!ov(n)){e.next=25;break}e.prev=2,o=n.wu[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return u=s.value,e.next=8,u(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),e,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function iv(e){return av.apply(this,arguments)}function av(){return(av=t(s)(t(c).mark((function e(n){var r,i,a,o,s,u;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=n.wu[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return u=s.value,e.next=7,u(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),e,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function ov(e){return 0===Vl(e)._u.size}function sv(e,t,n){return uv.apply(this,arguments)}function uv(){return(uv=t(s)(t(c).mark((function e(n,r,i){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(kf(r)){e.next=2;break}throw r;case 2:return n._u.add(1),e.next=5,iv(n);case 5:n.gu.set("Offline"),i||(i=function(){return Vp(n.localStore)}),n.asyncQueue.enqueueRetryable(t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Rl("RemoteStore","Retrying IndexedDB access"),e.next=3,i();case 3:return n._u.delete(1),e.next=6,nv(n);case 6:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function cv(e,t){return t().catch((function(n){return sv(e,n,t)}))}function lv(e){return fv.apply(this,arguments)}function fv(){return(fv=t(s)(t(c).mark((function e(n){var r,i,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Vl(n),i=Nv(r),a=r.fu.length>0?r.fu[r.fu.length-1].batchId:-1;case 2:if(!hv(r)){e.next=19;break}return e.prev=3,e.next=6,jp(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.fu.length&&i.Fo(),e.abrupt("break",19);case 10:a=o.batchId,dv(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,sv(r,e.t0);case 17:e.next=2;break;case 19:pv(r)&&vv(r);case 20:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function hv(e){return ov(e)&&e.fu.length<10}function dv(e,t){e.fu.push(t);var n=Nv(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function pv(e){return ov(e)&&!Nv(e).No()&&e.fu.length>0}function vv(e){Nv(e).start()}function mv(e){return yv.apply(this,arguments)}function yv(){return(yv=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Nv(n).eu();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function gv(e){return kv.apply(this,arguments)}function kv(){return(kv=t(s)(t(c).mark((function e(n){var r,i,a,o,s,u,l;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=Nv(n),i=!0,a=!1,o=void 0,e.prev=2,s=n.fu[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)l=u.value,r.Xo(l.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),e,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function bv(e,t,n){return wv.apply(this,arguments)}function wv(){return(wv=t(s)(t(c).mark((function e(n,r,i){var a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.fu.shift(),o=cp.from(a,r,i),e.next=3,cv(n,(function(){return n.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,lv(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xv(e,t){return _v.apply(this,arguments)}function _v(){return _v=t(s)(t(c).mark((function e(n,r){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r&&Nv(n).Yo,!e.t0){e.next=4;break}return e.next=4,function(){var e=t(s)(t(c).mark((function e(n,r){var i,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Td(a=r.code)||a===jl.ABORTED){e.next=7;break}return i=n.fu.shift(),Nv(n).Mo(),e.next=5,cv(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,lv(n);case 7:case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()(n,r);case 4:pv(n)&&vv(n);case 5:case"end":return e.stop()}}),e)}))),_v.apply(this,arguments)}function Ev(e,t){return Iv.apply(this,arguments)}function Iv(){return(Iv=t(s)(t(c).mark((function e(n,r){var i,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=Vl(n)).asyncQueue.verifyOperationInProgress(),Rl("RemoteStore","RemoteStore received new credentials"),a=ov(i),i._u.add(3),e.next=6,iv(i);case 6:return a&&i.gu.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i._u.delete(3),e.next=12,nv(i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Tv(e,t){return Sv.apply(this,arguments)}function Sv(){return(Sv=t(s)(t(c).mark((function e(n,r){var i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Vl(n),!r){e.next=7;break}return i._u.delete(2),e.next=5,nv(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i._u.add(2),e.next=12,iv(i);case 12:i.gu.set("Unknown");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Nv(e){return e.Iu||(e.Iu=(n=e.datastore,r=e.asyncQueue,i={Yr:mv.bind(null,e),Zr:xv.bind(null,e),tu:gv.bind(null,e),Zo:bv.bind(null,e)},(a=Vl(n)).su(),new $p(r,a.connection,a.authCredentials,a.appCheckCredentials,a.yt,i)),e.wu.push(function(){var n=t(s)(t(c).mark((function n(r){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return e.Iu.Mo(),t.next=4,lv(e);case 4:t.next=9;break;case 6:return t.next=8,e.Iu.stop();case 8:e.fu.length>0&&(Rl("RemoteStore","Stopping write stream with ".concat(e.fu.length," pending writes")),e.fu=[]);case 9:case"end":return t.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var n,r,i,a}var Av=function(){"use strict";function e(n,r,i,a,o){t(w)(this,e),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=o,this.deferred=new Hl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return t(R)(e,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Bl(jl.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(t,n,r,i,a){var o=new e(t,n,Date.now()+r,i,a);return o.start(r),o}}]),e}();function Cv(e,t){if(Ll("AsyncQueue","".concat(t,": ").concat(e)),kf(e))return new Bl(jl.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ov=function e(){"use strict";t(w)(this,e),this.queries=new Nd((function(e){return Hh(e)}),Bh),this.onlineState="Unknown",this.Ru=new Set};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(e){e.Ru.forEach((function(e){e.next()}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rv=function(){"use strict";function e(n,r,i,a,o,s){t(w)(this,e),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Nd((function(e){return Hh(e)}),Bh),this.rc=new Map,this.oc=new Set,this.uc=new gh(uf.comparator),this.cc=new Map,this.ac=new _p,this.hc={},this.lc=new Map,this.fc=yp.vn(),this.onlineState="Unknown",this.dc=void 0}return t(R)(e,[{key:"isPrimaryClient",get:function(){return!0===this.dc}}]),e}();function Lv(e,t,n){return Pv.apply(this,arguments)}function Pv(){return(Pv=t(s)(t(c).mark((function e(n,r,i){var a,o,s;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Kv(n),e.prev=1,e.next=4,function(e,t){var n,r,i=Vl(e),a=tf.now(),o=t.reduce((function(e,t){return e.add(t.key)}),Vd());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=Cd(),u=Vd();return i.Gi.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value,d=vd(h,n.get(h.key).overlayedDocument);null!=d&&o.push(new gd(h.key,d,Ih(d.value.mapValue),cd.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:Rd(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),t=a,u=o.batchId,c=i,l=void 0,(l=t.hc[t.currentUser.toKey()])||(l=new gh(Zl)),l=l.insert(u,c),t.hc[t.currentUser.toKey()]=l,e.next=9,zv(a,o.changes);case 9:return e.next=11,lv(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=Cv(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var t,u,c,l}),e,null,[[1,13]])})))).apply(this,arguments)}function Mv(e,t,n){var r=Vl(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.ic.forEach((function(e,n){var r=n.view.bu(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=Vl(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.bu(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Dv(n)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function Uv(e,t){return Fv.apply(this,arguments)}function Fv(){return(Fv=t(s)(t(c).mark((function e(n,r){var i,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Vl(n),a=r.batch.batchId,e.prev=1,e.next=4,Fp(i.localStore,r);case 4:return o=e.sent,Hv(i,a,null),Bv(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,zv(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,mf(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Vv(e,t,n){return jv.apply(this,arguments)}function jv(){return(jv=t(s)(t(c).mark((function e(n,r,i){var a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Vl(n),e.prev=1,e.next=4,function(e,t){var n=Vl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return Fl(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,Hv(a,r,i),Bv(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,zv(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,mf(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Bv(e,t){(e.lc.get(t)||[]).forEach((function(e){e.resolve()})),e.lc.delete(t)}function Hv(e,t,n){var r=Vl(e),i=r.hc[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function zv(e,t,n){return Wv.apply(this,arguments)}function Wv(){return Wv=t(s)(t(c).mark((function e(n,r,i){var a,o,u,l;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Vl(n),o=[],u=[],l=[],e.t0=a.ic.isEmpty(),e.t0){e.next=9;break}return a.ic.forEach((function(e,t){l.push(a._c(t,r,i).then((function(e){if((e||i)&&a.isPrimaryClient&&a.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){o.push(e);var n=Dp.Ci(t.targetId,e);u.push(n)}})))})),e.next=6,Promise.all(l);case 6:return a.sc.Wo(o),e.next=9,function(){var e=t(s)(t(c).mark((function e(n,r){var i,a,o,s,u,l,f,h,d,p,v;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Vl(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return gf.forEach(r,(function(t){return gf.forEach(t.Si,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return gf.forEach(t.Di,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),kf(e.t0)){e.next=10;break}throw e.t0;case 10:Rl("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,u=r[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)f=l.value,h=f.targetId,f.fromCache||(d=i.qi.get(h),p=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(p),i.qi=i.qi.insert(h,v));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),e,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(t,n){return e.apply(this,arguments)}}()(a.localStore,u);case 9:case"end":return e.stop()}}),e)}))),Wv.apply(this,arguments)}function qv(e,t){return Gv.apply(this,arguments)}function Gv(){return(Gv=t(s)(t(c).mark((function e(n,r){var i,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=Vl(n)).currentUser.isEqual(r)){e.next=11;break}return Rl("SyncEngine","User change. New user:",r.toKey()),e.next=5,Mp(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(t=i).lc.forEach((function(e){e.forEach((function(e){e.reject(new Bl(jl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,zv(i,a.ji);case 11:case"end":return e.stop()}var t}),e)})))).apply(this,arguments)}function Kv(e){var t=Vl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Vv.bind(null,t),t}var Qv=function(){"use strict";function e(){t(w)(this,e),this.synchronizeTabs=!1}return t(R)(e,[{key:"initialize",value:function(e){var n=this;return t(s)(t(c).mark((function r(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.yt=Xp(e.databaseInfo.databaseId),n.sharedClientState=n.gc(e),n.persistence=n.yc(e),t.next=5,n.persistence.start();case 5:n.localStore=n.Ic(e),n.gcScheduler=n.Tc(e,n.localStore),n.indexBackfillerScheduler=n.Ec(e,n.localStore);case 8:case"end":return t.stop()}}),r)})))()}},{key:"Tc",value:function(e,t){return null}},{key:"Ec",value:function(e,t){return null}},{key:"Ic",value:function(e){return Pp(this.persistence,new Rp,e.initialUser,this.yt)}},{key:"yc",value:function(e){return new Ap(Op.Bs,this.yt)}},{key:"gc",value:function(e){return new Hp}},{key:"terminate",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.gcScheduler&&e.gcScheduler.stop(),t.next=3,e.sharedClientState.shutdown();case 3:return t.next=5,e.persistence.shutdown();case 5:case"end":return t.stop()}}),n)})))()}}]),e}(),Xv=function(){"use strict";function e(){t(w)(this,e)}return t(R)(e,[{key:"initialize",value:function(e,n){var r=this;return t(s)(t(c).mark((function i(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r.localStore,t.t0){t.next=12;break}return r.localStore=e.localStore,r.sharedClientState=e.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!e.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return Mv(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=qv.bind(null,r.syncEngine),t.next=12,Tv(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return t.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Ov}},{key:"createDatastore",value:function(e){var t,n,r,i=Xp(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new Kp(t));return n=e.authCredentials,r=e.appCheckCredentials,new Zp(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return Mv(o.syncEngine,e,0)},a=Wp.C()?new Wp:new zp,new tv(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Rv(n,r,i,a,o,s),u&&(c.dc=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return function(){var e=t(s)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Vl(n),Rl("RemoteStore","RemoteStore shutting down."),r._u.add(5),e.next=5,iv(r);case 5:r.mu.shutdown(),r.gu.set("Unknown");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(this.remoteStore)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jv(e,t,n){if(!n)throw new Bl(jl.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function Yv(e){if(!uf.isDocumentKey(e))throw new Bl(jl.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function $v(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":Ul()}function Zv(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Bl(jl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=$v(e);throw new Bl(jl.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var em=new Map,tm=function(){"use strict";function e(n){var r;if(t(w)(this,e),void 0===n.host){if(void 0!==n.ssl)throw new Bl(jl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new Bl(jl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Bl(jl.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return t(R)(e,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),e}(),nm=function(){"use strict";function e(n,r,i,a){t(w)(this,e),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tm({}),this._settingsFrozen=!1}return t(R)(e,[{key:"app",get:function(){if(!this._app)throw new Bl(jl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new Bl(jl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tm(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Wl;switch(e.type){case"gapi":var t=e.client;return new Ql(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Bl(jl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=em.get(e))&&(Rl("ComponentProvider","Removing Datastore"),em.delete(e),t.terminate()),Promise.resolve();var e,t}}]),e}();function rm(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=Zv(e,nm))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&Pl("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=Al.MOCK_USER;else{o=_e(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Bl(jl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new Al(u)}e._authCredentials=new ql(new zl(o,s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var im=function(){"use strict";function e(n,r,i){t(w)(this,e),this.converter=r,this._key=i,this.type="document",this.firestore=n}return t(R)(e,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new om(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(t){return new e(this.firestore,t,this._key)}}]),e}(),am=function(){"use strict";function e(n,r,i){t(w)(this,e),this.converter=r,this._query=i,this.type="query",this.firestore=n}return t(R)(e,[{key:"withConverter",value:function(t){return new e(this.firestore,t,this._query)}}]),e}(),om=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a){var o;return t(w)(this,r),(o=n.call(this,e,i,Rh(a)))._path=a,o.type="collection",t(_o)(o)}return t(R)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new im(this.firestore,null,new uf(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(am);function sm(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(e=Fe(e),1===arguments.length&&(n=$l.R()),Jv("doc","path",n),e instanceof nm){var o,s=(o=af).fromString.apply(o,[n].concat(t(L)(i)));return Yv(s),new im(e,null,new uf(s))}var u;if(!(e instanceof im||e instanceof om))throw new Bl(jl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=e._path.child((u=af).fromString.apply(u,[n].concat(t(L)(i))));return Yv(c),new im(e.firestore,e instanceof om?e.converter:null,new uf(c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var um=function(){"use strict";function e(n,r,i,a){var o=this;t(w)(this,e);var u=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=a,this.user=Al.UNAUTHENTICATED,this.clientId=$l.R(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,function(){var e=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Rl("FirestoreClient","Received user=",n.uid),e.next=3,u.authCredentialListener(n);case 3:u.user=n;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.appCheckCredentials.start(i,(function(e){return Rl("FirestoreClient","Received new app check token=",e),o.appCheckCredentialListener(e,o.user)}))}return t(R)(e,[{key:"getConfiguration",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{asyncQueue:e.asyncQueue,databaseInfo:e.databaseInfo,clientId:e.clientId,authCredentials:e.authCredentials,appCheckCredentials:e.appCheckCredentials,initialUser:e.user,maxConcurrentLimboResolutions:100});case 1:case"end":return t.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new Bl(jl.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var e=new Hl,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(t(s)(t(c).mark((function r(){var i;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=n.onlineComponents,!t.t0){t.next=5;break}return t.next=5,n.onlineComponents.terminate();case 5:if(t.t1=n.offlineComponents,!t.t1){t.next=9;break}return t.next=9,n.offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),e.resolve(),t.next=18;break;case 14:t.prev=14,t.t2=t.catch(0),i=Cv(t.t2,"Failed to shutdown persistence"),e.reject(i);case 18:case"end":return t.stop()}}),r,null,[[0,14]])})))),e.promise}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(e,t){return lm.apply(this,arguments)}function lm(){return lm=t(s)(t(c).mark((function e(n,r){var i,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),Rl("FirestoreClient","Initializing OfflineComponentProvider"),e.next=3,n.getConfiguration();case 3:return i=e.sent,e.next=6,r.initialize(i);case 6:a=i.initialUser,n.setCredentialChangeListener(function(){var e=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=a.isEqual(n),e.t0){e.next=5;break}return e.next=4,Mp(r.localStore,n);case 4:a=n;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n.offlineComponents=r;case 8:case"end":return e.stop()}}),e)}))),lm.apply(this,arguments)}function fm(e,t){return hm.apply(this,arguments)}function hm(){return(hm=t(s)(t(c).mark((function e(n,r){var i,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,dm(n);case 3:return i=e.sent,Rl("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return Ev(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return Ev(r.remoteStore,t)})),n.onlineComponents=r;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dm(e){return pm.apply(this,arguments)}function pm(){return(pm=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.offlineComponents,e.t0){e.next=5;break}return Rl("FirestoreClient","Using default OfflineComponentProvider"),e.next=5,cm(n,new Qv);case 5:return e.abrupt("return",(e.t0||e.sent,n.offlineComponents));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vm(e){return mm.apply(this,arguments)}function mm(){return(mm=t(s)(t(c).mark((function e(n){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.onlineComponents,e.t0){e.next=5;break}return Rl("FirestoreClient","Using default OnlineComponentProvider"),e.next=5,fm(n,new Xv);case 5:return e.abrupt("return",(e.t0||e.sent,n.onlineComponents));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ym(e){return vm(e).then((function(e){return e.syncEngine}))}var gm=function(){"use strict";function e(){var n=this;t(w)(this,e),this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Jp(this,"async_queue_retry"),this.Wc=function(){var e=Qp();e&&Rl("AsyncQueue","Visibility state changed to "+e.visibilityState),n.xo.Po()};var r=Qp();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Wc)}return t(R)(e,[{key:"isShuttingDown",get:function(){return this.qc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.zc(),this.Hc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;var t=Qp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}},{key:"enqueue",value:function(e){var t=this;if(this.zc(),this.qc)return new Promise((function(){}));var n=new Hl;return this.Hc((function(){return t.qc&&t.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Lc.push(e),t.Jc()}))}},{key:"Jc",value:function(){var e=this;return t(s)(t(c).mark((function n(){return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.Lc.length){t.next=14;break}return t.prev=1,t.next=4,e.Lc[0]();case 4:e.Lc.shift(),e.xo.reset(),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(1),kf(t.t0)){t.next=12;break}throw t.t0;case 12:Rl("AsyncQueue","Operation failed with retryable error: "+t.t0);case 13:e.Lc.length>0&&e.xo.Ro((function(){return e.Jc()}));case 14:case"end":return t.stop()}}),n,null,[[1,8]])})))()}},{key:"Hc",value:function(e){var t=this,n=this.Bc.then((function(){return t.Gc=!0,e().catch((function(e){var n,r;throw t.Kc=e,t.Gc=!1,Ll("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Gc=!1,e}))}));return this.Bc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.zc(),this.jc.indexOf(e)>-1&&(t=0);var i=Av.createAndSchedule(this,e,t,n,(function(e){return r.Yc(e)}));return this.Uc.push(i),i}},{key:"zc",value:function(){this.Kc&&Ul()}},{key:"verifyOperationInProgress",value:function(){}},{key:"Xc",value:function(){var e=this;return t(s)(t(c).mark((function n(){var r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:return r=e.Bc,t.next=4,r;case 4:if(r!==e.Bc){t.next=1;break}case 5:case"end":return t.stop()}}),n)})))()}},{key:"Zc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.Uc[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"ta",value:function(e){var t=this;return this.Xc().then((function(){t.Uc.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.Uc[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.Xc()}))}},{key:"ea",value:function(e){this.jc.push(e)}},{key:"Yc",value:function(e){var t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}]),e}();var km=function(e){"use strict";t(H)(r,e);var n=t(Z)(r);function r(e,i,a,o){var s;return t(w)(this,r),(s=n.call(this,e,i,a,o)).type="firestore",s._queue=new gm,s._persistenceKey=(null==o?void 0:o.name)||"[DEFAULT]",t(_o)(s)}return t(R)(r,[{key:"_terminate",value:function(){return this._firestoreClient||wm(this),this._firestoreClient.terminate()}}]),r}(nm);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(e){return e._firestoreClient||wm(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wm(e){var t,n,r,i,a,o=e._freezeSettings(),s=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new wf(n,r,i,(a=o).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new um(e._authCredentials,e._appCheckCredentials,e._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xm=function(){"use strict";function e(n){t(w)(this,e),this._byteString=n}return t(R)(e,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(t){try{return new e(Cf.fromBase64String(t))}catch(e){throw new Bl(jl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(t){return new e(Cf.fromUint8Array(t))}}]),e}(),_m=function(){"use strict";function e(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t(w)(this,e);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new Bl(jl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sf(r)}return t(R)(e,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Em=function e(n){"use strict";t(w)(this,e),this._methodName=n},Im=function(){"use strict";function e(n,r){if(t(w)(this,e),!isFinite(n)||n<-90||n>90)throw new Bl(jl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new Bl(jl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return t(R)(e,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return Zl(this._lat,e._lat)||Zl(this._long,e._long)}}]),e}(),Tm=/^__.*__$/,Sm=function(){"use strict";function e(n,r,i){t(w)(this,e),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return t(R)(e,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new gd(e,this.data,this.fieldMask,t,this.fieldTransforms):new yd(e,this.data,t,this.fieldTransforms)}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ul()}}var Am=function(){"use strict";function e(n,r,i,a,o,s){t(w)(this,e),this.settings=n,this.databaseId=r,this.yt=i,this.ignoreUndefinedProperties=a,void 0===o&&this.na(),this.fieldTransforms=o||[],this.fieldMask=s||[]}return t(R)(e,[{key:"path",get:function(){return this.settings.path}},{key:"sa",get:function(){return this.settings.sa}},{key:"ia",value:function(t){return new e(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"ra",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}},{key:"ca",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}},{key:"aa",value:function(e){return this.ia({path:void 0,oa:!0})}},{key:"ha",value:function(e){return jm(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"na",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ua(this.path.get(e))}},{key:"ua",value:function(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Nm(this.sa)&&Tm.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}]),e}(),Cm=function(){"use strict";function e(n,r,i){t(w)(this,e),this.databaseId=n,this.ignoreUndefinedProperties=r,this.yt=i||Xp(n)}return t(R)(e,[{key:"da",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Am({sa:e,methodName:t,fa:n,path:sf.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}]),e}();function Om(e){var t=e._freezeSettings(),n=Xp(e._databaseId);return new Cm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Dm(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.da(a.merge||a.mergeFields?2:0,t,n,i);Mm("Data must be an object, but it was:",o,r);var s,u,c=Lm(r,o);if(a.merge)s=new _h(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],f=!0,h=!1,d=void 0;try{for(var p,v=a.mergeFields[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var m=p.value,y=Um(t,m,n);if(!o.contains(y))throw new Bl(jl.INVALID_ARGUMENT,"Field '".concat(y,"' is specified in your field mask but missing from your input data."));Bm(l,y)||l.push(y)}}catch(e){h=!0,d=e}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}s=new _h(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new Sm(new Eh(c),s,u)}function Rm(e,t){if(Pm(e=Fe(e)))return Mm("Unsupported field value:",t,e),Lm(e,t);if(e instanceof Em)return function(e,t){if(!Nm(t.sa))throw t.ha("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ha("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=Rm(s.value,t.aa(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Fe(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Xh(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=tf.fromDate(e);return{timestampValue:zd(t.yt,n)}}if(e instanceof tf){var r=new tf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:zd(t.yt,r)}}if(e instanceof Im)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof xm)return{bytesValue:Wd(t.yt,e._byteString)};if(e instanceof im){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ha("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:Kd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha("Unsupported field value: ".concat($v(e)))}(e,t)}function Lm(e,t){var n={};return If(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ef(e,(function(e,r){var i=Rm(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Pm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof tf||e instanceof Im||e instanceof xm||e instanceof im||e instanceof Em)}function Mm(e,t,n){if(!Pm(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=$v(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}var i}function Um(e,t,n){if((t=Fe(t))instanceof _m)return t._internalPath;if("string"==typeof t)return Vm(e,t);throw jm("Field path arguments must be of type string or ",e,!1,void 0,n)}var Fm=new RegExp("[~\\*/\\[\\]]");function Vm(e,n,r){if(n.search(Fm)>=0)throw jm("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,r);try{return t(xo)(_m,t(L)(n.split(".")))._internalPath}catch(t){throw jm("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,r)}}function jm(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new Bl(jl.INVALID_ARGUMENT,s+e+u)}function Bm(e,t){return e.some((function(e){return e.isEqual(t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hm(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}function zm(e,t,n){e=Zv(e,im);var r=Zv(e.firestore,km),i=Hm(e.converter,t,n);return Wm(r,[Dm(Om(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,cd.none())])}function Wm(e,n){return r=bm(e),i=n,a=new Hl,r.asyncQueue.enqueueAndForget(t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Lv,e.next=3,ym(r);case 3:return e.t1=e.sent,e.t2=i,e.t3=a,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))),a.promise;var r,i,a}!function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Cl=Lt,At(new je("firestore",(function(e,n){var r=n.instanceIdentifier,i=n.options,a=e.getProvider("app").getImmediate(),o=new km(new Gl(e.getProvider("auth-internal")),new Jl(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Bl(jl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xf(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),Ut(Nl,"3.8.3",e),Ut(Nl,"3.8.3","esm2017")}();var qm=function(){var e=t(s)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),b.refs.errorNotification.innerHTML="",r=n.target.searchedMovie.value.trim().toLowerCase()){e.next=5;break}return e.abrupt("return");case 5:return j.Loading.standard({svgColor:"#ff001b"}),j.Loading.remove(500),l.themoviedbApi.searchQuery=r,e.prev=8,e.next=11,Promise.all([l.themoviedbApi.getGenresOfMovies(),l.themoviedbApi.searchMovies()]).then((function(e){var n=t(u)(e,2),r=n[0],i=n[1];console.log(i),V(i),U.genres=r,U.movies=i.results,Gm(U)}));case 11:return e.next=13,l.themoviedbApi.searchMovies();case 13:e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(t){return e.apply(this,arguments)}}();b.refs.searchForm.addEventListener("submit",qm);function Gm(e){var t;b.refs.movieContainer.innerHTML=(t=e).movies.map((function(e){var n=e.title,r=e.poster_path,i=e.release_date,a=e.genre_ids,s=e.name,u=e.first_air_date,c=e.vote_average,l=e.id;return'\n\t<li class="trending-movie__card">\n\t\t<img\n\t\t\tclass="trending-movie__img"\n\t\t\tsrc="'.concat(r?"https://image.tmdb.org/t/p/w500".concat(r):o,'"\n\t\t\talt="').concat(n||s,'"\n\t\t\tloading="lazy"\n      data-id="').concat(l,'"\n\t\t/>\n\t\t<div class="wrapper">\n\t\t\t<p class="movie-card__title">\n\t\t\t\t').concat(n?n.toUpperCase():s.toUpperCase(),' </p>\n\t\t\t\t<div class="movie-card__wrp">\n\t\t\t\t<div class="movie-card__genre-wrp">\n\t\t\t\t<div class="movie-card__genre card-info">').concat(t.getMovieGenresPreview(a),'</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="movie-card__year card-info">').concat(i?parseFloat(i)||"":parseFloat(u)||"",' </div>\n\t\t\t\t<div class="movie-card__rating-wrp">\n\t\t\t\t<div class="movie-card__rating">').concat(c.toFixed(1),"</div>\n\t\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t</li>")})).join("")}!function(){try{Promise.all([l.themoviedbApi.getGenresOfMovies(),l.themoviedbApi.getTrendingMovies()]).then((function(e){var n=t(u)(e,2),r=n[0],i=n[1];U.genres=r,U.movies=i.results,Gm(U)}))}catch(e){console.log(e)}}();k.getCurrentPage();k.on("afterMove",function(){var e=t(s)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.page,e.prev=1,e.next=4,l.themoviedbApi.getTrendingMovies(r);case 4:e.sent.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()),b.refs.movieContainer.addEventListener("click",v),console.log("Firebase!");var Km,Qm=Pt({apiKey:"AIzaSyAQNEF1EZQq4hRQq21AEqmnTA4ysock-bY",authDomain:"filmoteka-77997.firebaseapp.com",projectId:"filmoteka-77997",storageBucket:"filmoteka-77997.appspot.com",messagingSenderId:"555325927364",appId:"1:555325927364:web:5f447ca8d4265db75c3e91",measurementId:"G-LZ05WYL8RJ"}),Xm=function(){var e=t(s)(t(c).mark((function e(){var n,r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=txtEmail.value,r=txtPassword.value,e.prev=2,e.next=5,t=n,i=r,ki(Fe(Zm),ei.credential(t,i));case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),console.log("There was an error: ".concat(e.t0)),ko(e.t0);case 11:case"end":return e.stop()}var t,i}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),Jm=(Km=t(s)(t(c).mark((function e(){var n,r,i,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=txtEmail.value,r=txtPassword.value,e.prev=2,e.next=5,wi(Zm,n,r);case 5:i=e.sent,a=sm(ey,"users",i.user.uid),o=function(){var e=t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,zm(a,{email:n});case 3:console.log("This user has been written to the Firestore"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("I got an error! ".concat(error));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),o(),console.log("This user has been written to the database"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("There was an error: ".concat(e.t0)),ko(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])}))),function(){return Km.apply(this,arguments)}),Ym=function(){var e=t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ii(Zm,(function(e){e?(console.log(e),login.style.display="none",app.style.display="block",bo(e),go()):(login.style.display="block",app.style.display="none",lblAuthState.innerHTML="You're not logged in.")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$m=function(){var e=t(s)(t(c).mark((function e(){return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe(Zm).signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();fo.addEventListener("click",Xm),ho.addEventListener("click",Jm),po.addEventListener("click",$m);var Zm=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt(),t=Ct(e,"auth");if(t.isInitialized())return t.getImmediate();var n=kn(e,{popupRedirectResolver:no,persistence:[ea,Ci,Di]}),r=we("authTokenSyncURL");if(r){var i=lo(r);Ei(n,i,(function(){return i(n.currentUser)})),_i(n,(function(e){return i(e)}))}var a=ge("auth");return a&&Cr(n,"http://".concat(a)),n}(Qm);Ym();var ey=function(e,n){var r="string"==typeof e?e:n||"(default)",i=Ct("object"==typeof e?e:Mt(),"firestore").getImmediate({identifier:r});if(!i._initialized){var a=ke("firestore");a&&rm.apply(void 0,[i].concat(t(L)(a)))}return i}(Qm)}();
//# sourceMappingURL=index.ecf157c4.js.map
