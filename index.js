'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _iterator = require('babel-runtime/core-js/symbol/iterator');

var _iterator2 = _interopRequireDefault(_iterator);

var _getOwnPropertySymbols = require('babel-runtime/core-js/object/get-own-property-symbols');

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _typeof3 = require('babel-runtime/helpers/typeof');

var _typeof4 = _interopRequireDefault(_typeof3);

var _toStringTag = require('babel-runtime/core-js/symbol/to-string-tag');

var _toStringTag2 = _interopRequireDefault(_toStringTag);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports =
/******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/(0, _defineProperty2.default)(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof _symbol2.default !== 'undefined' && _toStringTag2.default) {
      /******/(0, _defineProperty2.default)(exports, _toStringTag2.default, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : (0, _typeof4.default)(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = (0, _create2.default)(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "fb15");
  /******/
}(
/************************************************************************/
/******/{

  /***/"0d58":
  /***/function d58(module, exports, __webpack_require__) {

    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = __webpack_require__("ce10");
    var enumBugKeys = __webpack_require__("e11e");

    module.exports = _keys2.default || function keys(O) {
      return $keys(O, enumBugKeys);
    };

    /***/
  },

  /***/"230e":
  /***/function e(module, exports, __webpack_require__) {

    var isObject = __webpack_require__("d3f4");
    var document = __webpack_require__("7726").document;
    // typeof document.createElement is 'object' in old IE
    var is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };

    /***/
  },

  /***/"2621":
  /***/function _(module, exports) {

    exports.f = _getOwnPropertySymbols2.default;

    /***/
  },

  /***/"2aba":
  /***/function aba(module, exports, __webpack_require__) {

    var global = __webpack_require__("7726");
    var hide = __webpack_require__("32e9");
    var has = __webpack_require__("69a8");
    var SRC = __webpack_require__("ca5a")('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    __webpack_require__("8378").inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        hide(O, key, val);
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });

    /***/
  },

  /***/"2d00":
  /***/function d00(module, exports) {

    module.exports = false;

    /***/
  },

  /***/"2d95":
  /***/function d95(module, exports) {

    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };

    /***/
  },

  /***/"32e9":
  /***/function e9(module, exports, __webpack_require__) {

    var dP = __webpack_require__("86cc");
    var createDesc = __webpack_require__("4630");
    module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    /***/
  },

  /***/"4588":
  /***/function _(module, exports) {

    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

    /***/
  },

  /***/"4630":
  /***/function _(module, exports) {

    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    /***/
  },

  /***/"4bf8":
  /***/function bf8(module, exports, __webpack_require__) {

    // 7.1.13 ToObject(argument)
    var defined = __webpack_require__("be13");
    module.exports = function (it) {
      return Object(defined(it));
    };

    /***/
  },

  /***/"52a7":
  /***/function a7(module, exports) {

    exports.f = {}.propertyIsEnumerable;

    /***/
  },

  /***/"5537":
  /***/function _(module, exports, __webpack_require__) {

    var core = __webpack_require__("8378");
    var global = __webpack_require__("7726");
    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: core.version,
      mode: __webpack_require__("2d00") ? 'pure' : 'global',
      copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
    });

    /***/
  },

  /***/"5985":
  /***/function _(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
      return jsPanel;
    });
    "use strict";

    var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : (0, _typeof4.default)(obj);
    };

    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }return arr2;
      } else {
        return (0, _from2.default)(arr);
      }
    }

    var jsPanel = { version: "4.3.0", date: "2018-11-10 10:36", ajaxAlwaysCallbacks: [], autopositionSpacing: 4, closeOnEscape: void document.addEventListener("keydown", function (e) {
        "Escape" !== e.key && "Esc" !== e.code && 27 !== e.keyCode || jsPanel.getPanels(function () {
          return this.classList.contains("jsPanel");
        }).some(function (e) {
          return !!e.options.closeOnEscape && (e.close(), !0);
        });
      }, !1), defaults: { boxShadow: 3, container: "window", contentSize: { width: "400px", height: "200px" }, dragit: { cursor: "move", handles: ".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr", opacity: .8, disableOnMaximized: !0 }, header: !0, headerTitle: "jsPanel", headerControls: "all", iconfont: !1, maximizedMargin: 0, minimizeTo: "default", paneltype: "standard", position: "center", resizeit: { handles: "n, e, s, w, ne, se, sw, nw", minWidth: 128, minHeight: 128 }, theme: "default" }, defaultSnapConfig: { sensitivity: 70, trigger: "panel" }, error: void (window.jsPanelError || (window.jsPanelError = function (e) {
        this.name = "jsPanelError", this.message = e || "", this.stack = new Error().stack;
      }, window.jsPanelError.prototype = (0, _create2.default)(Error.prototype), window.jsPanelError.prototype.constructor = window.jsPanelError)), extensions: {}, globalCallbacks: !1, icons: { close: '<svg class="jsPanel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M17.75 16l9.85-9.85c0.5-0.5 0.5-1.3 0-1.75-0.5-0.5-1.3-0.5-1.75 0l-9.85 9.85-9.85-9.9c-0.5-0.5-1.3-0.5-1.75 0-0.5 0.5-0.5 1.3 0 1.75l9.85 9.9-9.9 9.85c-0.5 0.5-0.5 1.3 0 1.75 0.25 0.25 0.55 0.35 0.9 0.35s0.65-0.1 0.9-0.35l9.85-9.85 9.85 9.85c0.25 0.25 0.55 0.35 0.9 0.35s0.65-0.1 0.9-0.35c0.5-0.5 0.5-1.3 0-1.75l-9.9-9.85z"></path></svg>', maximize: '<svg class="jsPanel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M27.55 3.9h-22.6c-0.55 0-1 0.45-1 1v22.3c0 0.55 0.45 1 1 1h22.55c0.55 0 1-0.45 1-1v-22.3c0.050-0.55-0.4-1-0.95-1zM5.95 26.15v-18h20.55v18h-20.55z"></path></svg>', normalize: '<svg class="jsPanel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M27.9 3.75h-18.8c-0.4 0-0.75 0.35-0.75 0.75v4.3c0 0.1 0 0.2 0.050 0.3h-4.2c-0.55 0-1 0.45-1 1v17.4c0 0.55 0.45 1 1 1h17.65c0.55 0 1-0.45 1-1v-3.7c0.050 0 0.1 0.050 0.2 0.050h4.9c0.4 0 0.75-0.35 0.75-0.75v-18.6c-0.050-0.4-0.4-0.75-0.8-0.75zM5.2 26.5v-12.95c0.050 0 0.1 0 0.15 0h15.4c0.050 0 0.1 0 0.15 0v12.95h-15.7zM27.15 22.35h-4.15c-0.050 0-0.15 0-0.2 0.050v-12.3c0-0.55-0.45-1-1-1h-12c0.050-0.1 0.050-0.2 0.050-0.3v-3.55h17.3v17.1z"></path></svg>', minimize: '<svg class="jsPanel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M27.3 28.5h-22.6c-0.85 0-1.5-0.65-1.5-1.5s0.65-1.5 1.5-1.5h22.55c0.85 0 1.5 0.65 1.5 1.5s-0.65 1.5-1.45 1.5z"></path></svg>', smallifyrev: '<svg class="jsPanel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M15.95 23.2c0 0 0 0 0 0-0.35 0-0.65-0.15-0.9-0.35l-11.7-11.9c-0.5-0.5-0.5-1.3 0-1.75 0.5-0.5 1.3-0.5 1.75 0l10.85 10.95 10.9-10.8c0.5-0.5 1.3-0.5 1.75 0s0.5 1.3 0 1.75l-11.75 11.7c-0.25 0.25-0.55 0.4-0.9 0.4z"></path></svg>', smallify: '<svg class="jsPanel-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path fill="currentColor" d="M28.65 20.85l-11.8-11.65c-0.5-0.5-1.3-0.5-1.75 0l-11.75 11.85c-0.5 0.5-0.5 1.3 0 1.75 0.25 0.25 0.55 0.35 0.9 0.35 0.3 0 0.65-0.1 0.9-0.35l10.85-10.95 10.9 10.8c0.5 0.5 1.3 0.5 1.75 0 0.5-0.5 0.5-1.3 0-1.8z"></path></svg>' }, idCounter: 0, isIE: function () {
        return navigator.appVersion.match(/Trident/);
      }(), mdbthemes: ["secondary", "elegant", "stylish", "unique", "special"], pointerdown: "ontouchend" in window ? ["touchstart", "mousedown"] : ["mousedown"], pointermove: "ontouchend" in window ? ["touchmove", "mousemove"] : ["mousemove"], pointerup: "ontouchend" in window ? ["touchend", "mouseup"] : ["mouseup"], polyfills: (void [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
        e.append = e.append || function () {
          var e = Array.prototype.slice.call(arguments),
              t = document.createDocumentFragment();e.forEach(function (e) {
            var n = e instanceof Node;t.appendChild(n ? e : document.createTextNode(String(e)));
          }), this.appendChild(t);
        };
      }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
        var t = void 0,
            n = (this.document || this.ownerDocument).querySelectorAll(e),
            o = this;do {
          for (t = n.length; --t >= 0 && n.item(t) !== o;) {}
        } while (t < 0 && (o = o.parentElement));return o;
      }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
        t = t || window;for (var n = 0; n < this.length; n++) {
          e.call(t, this[n], n, this);
        }
      }), _assign2.default || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function value(e) {
          if (null == e) throw new TypeError("Cannot convert first argument to object");var t = Object(e);for (var _e = 1; _e < arguments.length; _e++) {
            var n = arguments[_e];if (null == n) continue;n = Object(n);var o = (0, _keys2.default)(Object(n));for (var _e2 = 0, a = o.length; _e2 < a; _e2++) {
              var a = o[_e2],
                  l = (0, _getOwnPropertyDescriptor2.default)(n, a);void 0 !== l && l.enumerable && (t[a] = n[a]);
            }
          }return t;
        } }), function () {
        if ("function" == typeof window.CustomEvent) return !1;function e(e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: void 0 };var n = document.createEvent("CustomEvent");return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
        }e.prototype = window.Event.prototype, window.CustomEvent = e;
      }(), String.prototype.endsWith || (String.prototype.endsWith = function (e, t) {
        return t < this.length ? t |= 0 : t = this.length, this.substr(t - e.length, e.length) === e;
      }), void (String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
        return this.substr(t || 0, e.length) === e;
      }))), themes: ["default", "primary", "info", "success", "warning", "danger"], ziBase: 100, colorLighteningFactor: .81, colorDarkeningFactor: .5, colorBrightnessThreshold: .55, colorNames: { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgrey: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", grey: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32", grey50: "fafafa", gray50: "fafafa", grey100: "f5f5f5", gray100: "f5f5f5", grey200: "eee", gray200: "eee", grey300: "e0e0e0", gray300: "e0e0e0", grey400: "bdbdbd", gray400: "bdbdbd", grey500: "9e9e9e", gray500: "9e9e9e", grey600: "757575", gray600: "757575", grey700: "616161", gray700: "616161", grey800: "424242", gray800: "424242", grey900: "212121", gray900: "212121", bluegrey50: "eceff1", bluegray50: "eceff1", bluegrey100: "CFD8DC", bluegray100: "CFD8DC", bluegrey200: "B0BEC5", bluegray200: "B0BEC5", bluegrey300: "90A4AE", bluegray300: "90A4AE", bluegrey400: "78909C", bluegray400: "78909C", bluegrey500: "607D8B", bluegray500: "607D8B", bluegrey600: "546E7A", bluegray600: "546E7A", bluegrey700: "455A64", bluegray700: "455A64", bluegrey800: "37474F", bluegray800: "37474F", bluegrey900: "263238", bluegray900: "263238", red50: "FFEBEE", red100: "FFCDD2", red200: "EF9A9A", red300: "E57373", red400: "EF5350", red500: "F44336", red600: "E53935", red700: "D32F2F", red800: "C62828", red900: "B71C1C", reda100: "FF8A80", reda200: "FF5252", reda400: "FF1744", reda700: "D50000", pink50: "FCE4EC", pink100: "F8BBD0", pink200: "F48FB1", pink300: "F06292", pink400: "EC407A", pink500: "E91E63", pink600: "D81B60", pink700: "C2185B", pink800: "AD1457", pink900: "880E4F", pinka100: "FF80AB", pinka200: "FF4081", pinka400: "F50057", pinka700: "C51162", purple50: "F3E5F5", purple100: "E1BEE7", purple200: "CE93D8", purple300: "BA68C8", purple400: "AB47BC", purple500: "9C27B0", purple600: "8E24AA", purple700: "7B1FA2", purple800: "6A1B9A", purple900: "4A148C", purplea100: "EA80FC", purplea200: "E040FB", purplea400: "D500F9", purplea700: "AA00FF", deeppurple50: "EDE7F6", deeppurple100: "D1C4E9", deeppurple200: "B39DDB", deeppurple300: "9575CD", deeppurple400: "7E57C2", deeppurple500: "673AB7", deeppurple600: "5E35B1", deeppurple700: "512DA8", deeppurple800: "4527A0", deeppurple900: "311B92", deeppurplea100: "B388FF", deeppurplea200: "7C4DFF", deeppurplea400: "651FFF", deeppurplea700: "6200EA", indigo50: "E8EAF6", indigo100: "C5CAE9", indigo200: "9FA8DA", indigo300: "7986CB", indigo400: "5C6BC0", indigo500: "3F51B5", indigo600: "3949AB", indigo700: "303F9F", indigo800: "283593", indigo900: "1A237E", indigoa100: "8C9EFF", indigoa200: "536DFE", indigoa400: "3D5AFE", indigoa700: "304FFE", blue50: "E3F2FD", blue100: "BBDEFB", blue200: "90CAF9", blue300: "64B5F6", blue400: "42A5F5", blue500: "2196F3", blue600: "1E88E5", blue700: "1976D2", blue800: "1565C0", blue900: "0D47A1", bluea100: "82B1FF", bluea200: "448AFF", bluea400: "2979FF", bluea700: "2962FF", lightblue50: "E1F5FE", lightblue100: "B3E5FC", lightblue200: "81D4FA", lightblue300: "4FC3F7", lightblue400: "29B6F6", lightblue500: "03A9F4", lightblue600: "039BE5", lightblue700: "0288D1", lightblue800: "0277BD", lightblue900: "01579B", lightbluea100: "80D8FF", lightbluea200: "40C4FF", lightbluea400: "00B0FF", lightbluea700: "0091EA", cyan50: "E0F7FA", cyan100: "B2EBF2", cyan200: "80DEEA", cyan300: "4DD0E1", cyan400: "26C6DA", cyan500: "00BCD4", cyan600: "00ACC1", cyan700: "0097A7", cyan800: "00838F", cyan900: "006064", cyana100: "84FFFF", cyana200: "18FFFF", cyana400: "00E5FF", cyana700: "00B8D4", teal50: "E0F2F1", teal100: "B2DFDB", teal200: "80CBC4", teal300: "4DB6AC", teal400: "26A69A", teal500: "009688", teal600: "00897B", teal700: "00796B", teal800: "00695C", teal900: "004D40", teala100: "A7FFEB", teala200: "64FFDA", teala400: "1DE9B6", teala700: "00BFA5", green50: "E8F5E9", green100: "C8E6C9", green200: "A5D6A7", green300: "81C784", green400: "66BB6A", green500: "4CAF50", green600: "43A047", green700: "388E3C", green800: "2E7D32", green900: "1B5E20", greena100: "B9F6CA", greena200: "69F0AE", greena400: "00E676", greena700: "00C853", lightgreen50: "F1F8E9", lightgreen100: "DCEDC8", lightgreen200: "C5E1A5", lightgreen300: "AED581", lightgreen400: "9CCC65", lightgreen500: "8BC34A", lightgreen600: "7CB342", lightgreen700: "689F38", lightgreen800: "558B2F", lightgreen900: "33691E", lightgreena100: "CCFF90", lightgreena200: "B2FF59", lightgreena400: "76FF03", lightgreena700: "64DD17", lime50: "F9FBE7", lime100: "F0F4C3", lime200: "E6EE9C", lime300: "DCE775", lime400: "D4E157", lime500: "CDDC39", lime600: "C0CA33", lime700: "AFB42B", lime800: "9E9D24", lime900: "827717", limea100: "F4FF81", limea200: "EEFF41", limea400: "C6FF00", limea700: "AEEA00", yellow50: "FFFDE7", yellow100: "FFF9C4", yellow200: "FFF59D", yellow300: "FFF176", yellow400: "FFEE58", yellow500: "FFEB3B", yellow600: "FDD835", yellow700: "FBC02D", yellow800: "F9A825", yellow900: "F57F17", yellowa100: "FFFF8D", yellowa200: "FFFF00", yellowa400: "FFEA00", yellowa700: "FFD600", amber50: "FFF8E1", amber100: "FFECB3", amber200: "FFE082", amber300: "FFD54F", amber400: "FFCA28", amber500: "FFC107", amber600: "FFB300", amber700: "FFA000", amber800: "FF8F00", amber900: "FF6F00", ambera100: "FFE57F", ambera200: "FFD740", ambera400: "FFC400", ambera700: "FFAB00", orange50: "FFF3E0", orange100: "FFE0B2", orange200: "FFCC80", orange300: "FFB74D", orange400: "FFA726", orange500: "FF9800", orange600: "FB8C00", orange700: "F57C00", orange800: "EF6C00", orange900: "E65100", orangea100: "FFD180", orangea200: "FFAB40", orangea400: "FF9100", orangea700: "FF6D00", deeporange50: "FBE9E7", deeporange100: "FFCCBC", deeporange200: "FFAB91", deeporange300: "FF8A65", deeporange400: "FF7043", deeporange500: "FF5722", deeporange600: "F4511E", deeporange700: "E64A19", deeporange800: "D84315", deeporange900: "BF360C", deeporangea100: "FF9E80", deeporangea200: "FF6E40", deeporangea400: "FF3D00", deeporangea700: "DD2C00", brown50: "EFEBE9", brown100: "D7CCC8", brown200: "BCAAA4", brown300: "A1887F", brown400: "8D6E63", brown500: "795548", brown600: "6D4C41", brown700: "5D4037", brown800: "4E342E", brown900: "3E2723" }, color: function color(e) {
        var t = void 0,
            n = void 0,
            o = void 0,
            a = void 0,
            l = void 0,
            i = void 0,
            r = void 0,
            s = void 0,
            c = void 0,
            d = e.toLowerCase(),
            p = {};var h = /^rgba?\(([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3}),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi,
            f = /^hsla?\(([0-9]{1,3}),([0-9]{1,3}%),([0-9]{1,3}%),?(0|1|0\.[0-9]{1,2}|\.[0-9]{1,2})?\)$/gi,
            m = this.colorNames;return m[d] && (d = m[d]), null !== d.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/gi) ? ((d = d.replace("#", "")).length % 2 == 1 ? (t = String(d.substr(0, 1)) + d.substr(0, 1), n = String(d.substr(1, 1)) + d.substr(1, 1), o = String(d.substr(2, 1)) + d.substr(2, 1), p.rgb = { r: parseInt(t, 16), g: parseInt(n, 16), b: parseInt(o, 16) }, p.hex = "#" + t + n + o) : (p.rgb = { r: parseInt(d.substr(0, 2), 16), g: parseInt(d.substr(2, 2), 16), b: parseInt(d.substr(4, 2), 16) }, p.hex = "#" + d), c = this.rgbToHsl(p.rgb.r, p.rgb.g, p.rgb.b), p.hsl = c, p.rgb.css = "rgb(" + p.rgb.r + "," + p.rgb.g + "," + p.rgb.b + ")") : d.match(h) ? (r = h.exec(d), p.rgb = { css: d, r: r[1], g: r[2], b: r[3] }, p.hex = this.rgbToHex(r[1], r[2], r[3]), c = this.rgbToHsl(r[1], r[2], r[3]), p.hsl = c) : d.match(f) ? (a = (r = f.exec(d))[1] / 360, l = r[2].substr(0, r[2].length - 1) / 100, i = r[3].substr(0, r[3].length - 1) / 100, s = this.hslToRgb(a, l, i), p.rgb = { css: "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")", r: s[0], g: s[1], b: s[2] }, p.hex = this.rgbToHex(p.rgb.r, p.rgb.g, p.rgb.b), p.hsl = { css: "hsl(" + r[1] + "," + r[2] + "," + r[3] + ")", h: r[1], s: r[2], l: r[3] }) : (p.hex = "#f5f5f5", p.rgb = { css: "rgb(245,245,245)", r: 245, g: 245, b: 245 }, p.hsl = { css: "hsl(0,0%,96%)", h: 0, s: "0%", l: "96%" }), p;
      },
      calcColors: function calcColors(e) {
        var t = this.colorBrightnessThreshold,
            n = this.color(e),
            o = this.lighten(e, this.colorLighteningFactor),
            a = this.darken(e, this.colorDarkeningFactor),
            l = this.perceivedBrightness(e) <= t ? "#ffffff" : "#000000",
            i = this.perceivedBrightness(o) <= t ? "#ffffff" : "#000000",
            r = this.perceivedBrightness(a) <= t ? "#ffffff" : "#000000";return [n.hsl.css, o, a, l, i, r];
      },
      darken: function darken(e, t) {
        var n = this.color(e).hsl,
            o = parseFloat(n.l),
            a = Math.round(o - o * t) + "%";return "hsl(" + n.h + "," + n.s + "," + a + ")";
      },
      lighten: function lighten(e, t) {
        var n = this.color(e).hsl,
            o = parseFloat(n.l),
            a = Math.round(o + (100 - o) * t) + "%";return "hsl(" + n.h + "," + n.s + "," + a + ")";
      },
      hslToRgb: function hslToRgb(e, t, n) {
        var o = void 0,
            a = void 0,
            l = void 0;if (0 === t) o = a = l = n;else {
          var i = function i(e, t, n) {
            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
          },
              r = n < .5 ? n * (1 + t) : n + t - n * t,
              s = 2 * n - r;o = i(s, r, e + 1 / 3), a = i(s, r, e), l = i(s, r, e - 1 / 3);
        }return [Math.round(255 * o), Math.round(255 * a), Math.round(255 * l)];
      },
      rgbToHsl: function rgbToHsl(e, t, n) {
        e /= 255, t /= 255, n /= 255;var o = void 0,
            a = void 0,
            l = Math.max(e, t, n),
            i = Math.min(e, t, n),
            r = (l + i) / 2;if (l === i) o = a = 0;else {
          var s = l - i;switch (a = r > .5 ? s / (2 - l - i) : s / (l + i), l) {case e:
              o = (t - n) / s + (t < n ? 6 : 0);break;case t:
              o = (n - e) / s + 2;break;case n:
              o = (e - t) / s + 4;}o /= 6;
        }return { css: "hsl(" + (o = Math.round(360 * o)) + "," + (a = Math.round(100 * a) + "%") + "," + (r = Math.round(100 * r) + "%") + ")", h: o, s: a, l: r };
      },
      rgbToHex: function rgbToHex(e, t, n) {
        var o = Number(e).toString(16),
            a = Number(t).toString(16),
            l = Number(n).toString(16);return 1 === o.length && (o = "0" + o), 1 === a.length && (a = "0" + a), 1 === l.length && (l = "0" + l), "#" + o + a + l;
      },
      perceivedBrightness: function perceivedBrightness(e) {
        var t = this.color(e).rgb;return t.r / 255 * .2126 + t.g / 255 * .7152 + t.b / 255 * .0722;
      },
      addScript: function addScript(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text/javascript";
        var n = arguments[2];
        var o = document.createElement("script");o.onload = n, o.src = e, o.type = t, document.head.appendChild(o);
      },
      ajax: function ajax(obj, ajaxConfig) {
        var objIsPanel = void 0;"object" == (typeof obj === "undefined" ? "undefined" : _typeof(obj)) && obj.classList.contains("jsPanel") ? objIsPanel = !0 : (objIsPanel = !1, "string" == typeof obj && (obj = document.querySelector(obj)));var conf = ajaxConfig,
            configDefaults = { method: "GET", async: !0, user: "", pwd: "", done: function done() {
            objIsPanel ? obj.content.innerHTML = this.responseText : obj.innerHTML = this.responseText;
          }, autoresize: !0, autoreposition: !0 };var config = void 0;if ("string" == typeof conf) config = (0, _assign2.default)({}, configDefaults, { url: encodeURI(conf), evalscripttags: !0 });else {
          if ("object" != (typeof conf === "undefined" ? "undefined" : _typeof(conf)) || !conf.url) return console.info("XMLHttpRequest seems to miss the request url!"), obj;config = (0, _assign2.default)({}, configDefaults, conf), config.url = encodeURI(conf.url), !1 === config.async && (config.timeout = 0, config.withCredentials && (config.withCredentials = void 0), config.responseType && (config.responseType = void 0));
        }var xhr = new XMLHttpRequest();return xhr.onreadystatechange = function () {
          if (4 === xhr.readyState) {
            if (200 === xhr.status) {
              if (config.done.call(xhr, obj), config.evalscripttags) {
                var scripttags = xhr.responseText.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi);scripttags && scripttags.forEach(function (tag) {
                  var js = tag.replace(/<script\b[^>]*>/i, "").replace(/<\/script>/i, "").trim();eval(js);
                });
              }
            } else config.fail && config.fail.call(xhr, obj);if (config.always && config.always.call(xhr, obj), objIsPanel) {
              var e = obj.options.contentSize;if ("string" == typeof e && e.match(/auto/i)) {
                var t = e.split(" "),
                    n = (0, _assign2.default)({}, { width: t[0], height: t[1] });config.autoresize && obj.resize(n), obj.classList.contains("jsPanel-contextmenu") || config.autoreposition && obj.reposition();
              } else if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && ("auto" === e.width || "auto" === e.height)) {
                var _t = (0, _assign2.default)({}, e);config.autoresize && obj.resize(_t), obj.classList.contains("jsPanel-contextmenu") || config.autoreposition && obj.reposition();
              }
            }jsPanel.ajaxAlwaysCallbacks.length && jsPanel.ajaxAlwaysCallbacks.forEach(function (e) {
              e.call(obj, obj);
            });
          }
        }, xhr.open(config.method, config.url, config.async, config.user, config.pwd), xhr.timeout = config.timeout || 0, config.withCredentials && (xhr.withCredentials = config.withCredentials), config.responseType && (xhr.responseType = config.responseType), config.beforeSend && config.beforeSend.call(xhr), config.data ? xhr.send(config.data) : xhr.send(null), obj;
      },
      createPanelTemplate: function createPanelTemplate() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = document.createElement("div");return t.className = "jsPanel", e && ["close", "maximize", "normalize", "minimize", "smallify", "smallifyrev"].forEach(function (e) {
          t.setAttribute("data-btn" + e, "enabled");
        }), t.innerHTML = "<div class=\"jsPanel-hdr\">\n                                <div class=\"jsPanel-headerbar\">\n                                    <div class=\"jsPanel-headerlogo\"></div>\n                                    <div class=\"jsPanel-titlebar\">\n                                        <span class=\"jsPanel-title\"></span>\n                                    </div>\n                                    <div class=\"jsPanel-controlbar\">\n                                        <div class=\"jsPanel-btn jsPanel-btn-smallify\">" + this.icons.smallify + "</div>\n                                        <div class=\"jsPanel-btn jsPanel-btn-smallifyrev\">" + this.icons.smallifyrev + "</div>\n                                        <div class=\"jsPanel-btn jsPanel-btn-minimize\">" + this.icons.minimize + "</div>\n                                        <div class=\"jsPanel-btn jsPanel-btn-normalize\">" + this.icons.normalize + "</div>\n                                        <div class=\"jsPanel-btn jsPanel-btn-maximize\">" + this.icons.maximize + "</div>\n                                        <div class=\"jsPanel-btn jsPanel-btn-close\">" + this.icons.close + "</div>\n                                    </div>\n                                </div>\n                                <div class=\"jsPanel-hdr-toolbar\"></div>\n                            </div>\n                            <div class=\"jsPanel-content\"></div>\n                            <div class=\"jsPanel-minimized-box\"></div>\n                            <div class=\"jsPanel-ftr\"></div>", t;
      },
      createMinimizedTemplate: function createMinimizedTemplate() {
        var e = document.createElement("div");return e.className = "jsPanel-replacement", e.innerHTML = "<div class=\"jsPanel-hdr\">\n                                <div class=\"jsPanel-headerbar\">\n                                    <div class=\"jsPanel-headerlogo\"></div>\n                                    <div class=\"jsPanel-titlebar\">\n                                        <span class=\"jsPanel-title\"></span>\n                                    </div>\n                                    <div class=\"jsPanel-controlbar\">\n                                        <div class=\"jsPanel-btn jsPanel-btn-normalize\">" + this.icons.normalize + "</div>\n                                        <div class=\"jsPanel-btn jsPanel-btn-maximize\">" + this.icons.maximize + "</div>\n                                        <div class=\"jsPanel-btn jsPanel-btn-close\">" + this.icons.close + "</div>\n                                    </div>\n                                </div>\n                            </div>", e;
      },
      createSnapArea: function createSnapArea(e, t, n) {
        var o = document.createElement("div"),
            a = e.parentElement;o.className = "jsPanel-snap-area jsPanel-snap-area-" + t, "lt" === t || "rt" === t || "rb" === t || "lb" === t ? (o.style.width = n + "px", o.style.height = n + "px") : "ct" === t || "cb" === t ? o.style.height = n + "px" : "lc" !== t && "rc" !== t || (o.style.width = n + "px"), a !== document.body && (o.style.position = "absolute"), document.querySelector(".jsPanel-snap-area.jsPanel-snap-area-" + t) || e.parentElement.appendChild(o);
      },
      dragit: function dragit(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = void 0,
            o = void 0,
            a = void 0,
            l = (0, _assign2.default)({}, this.defaults.dragit, t);var i = new CustomEvent("jspaneldragstart", { detail: e.id }),
            r = new CustomEvent("jspaneldrag", { detail: e.id }),
            s = new CustomEvent("jspaneldragstop", { detail: e.id });l.grid && Array.isArray(l.grid) && 1 === l.grid.length && (l.grid[1] = l.grid[0]), a = this.pOcontainment(l.containment);var c = function c() {
          document.removeEventListener("mousemove", o), e.style.opacity = 1;
        };return e.querySelectorAll(l.handles).forEach(function (t) {
          t.style.touchAction = "none", t.style.cursor = l.cursor, jsPanel.pointerdown.forEach(function (s) {
            t.addEventListener(s, function (t) {
              if (t.preventDefault(), t.button && t.button > 0) return !1;if (t.target.closest(".jsPanel-ftr-btn")) return;e.controlbar.style.pointerEvents = "none", e.content.style.pointerEvents = "none";var s = window.getComputedStyle(e),
                  d = parseFloat(s.left),
                  p = parseFloat(s.top),
                  h = t.touches ? t.touches[0].clientX : t.clientX,
                  f = t.touches ? t.touches[0].clientY : t.clientY,
                  m = e.parentElement,
                  g = m.getBoundingClientRect(),
                  u = window.getComputedStyle(m),
                  b = e.getScaleFactor();var y = 0;o = function o(t) {
                if (t.preventDefault(), !n) {
                  if (document.dispatchEvent(i), e.style.opacity = l.opacity, e.snapped && l.snap.resizeToPreSnap && e.currentData.beforeSnap) {
                    e.resize(e.currentData.beforeSnap.width + " " + e.currentData.beforeSnap.height);var _t2 = e.getBoundingClientRect(),
                        _n = h - (_t2.left + _t2.width),
                        _o = _t2.width / 2;_n > -_o && (y = _n + _o);
                  }l.start && jsPanel.processCallbacks(e, l.start, !1, { left: d, top: p }), jsPanel.front(e), e.snapped = !1;
                }if (n = 1, l.disableOnMaximized && "maximized" === e.status) return !1;var o = void 0,
                    s = void 0,
                    c = void 0,
                    w = void 0,
                    j = void 0,
                    v = void 0,
                    E = void 0,
                    C = void 0,
                    F = void 0,
                    P = void 0;var x = t.touches ? t.touches[0].clientX : t.clientX,
                    z = t.touches ? t.touches[0].clientY : t.clientY,
                    S = window.getComputedStyle(e);if (m === document.body) {
                  var _t3 = e.getBoundingClientRect();F = window.innerWidth - parseInt(u.borderLeftWidth, 10) - parseInt(u.borderRightWidth, 10) - (_t3.left + _t3.width), P = window.innerHeight - parseInt(u.borderTopWidth, 10) - parseInt(u.borderBottomWidth, 10) - (_t3.top + _t3.height);
                } else F = parseInt(u.width, 10) - parseInt(u.borderLeftWidth, 10) - parseInt(u.borderRightWidth, 10) - (parseInt(S.left, 10) + parseInt(S.width, 10)), P = parseInt(u.height, 10) - parseInt(u.borderTopWidth, 10) - parseInt(u.borderBottomWidth, 10) - (parseInt(S.top, 10) + parseInt(S.height, 10));o = parseFloat(S.left), c = parseFloat(S.top), j = F, E = P, l.snap && ("panel" === l.snap.trigger ? s = Math.pow(o, 2) : "pointer" === l.snap.trigger && (o = x, s = Math.pow(x, 2), c = z, j = window.innerWidth - x, E = window.innerHeight - z), w = Math.pow(c, 2), v = Math.pow(j, 2), C = Math.pow(E, 2));var A = Math.sqrt(s + w),
                    $ = Math.sqrt(s + C),
                    B = Math.sqrt(v + w),
                    T = Math.sqrt(v + C),
                    L = Math.abs(o - j) / 2,
                    D = Math.abs(c - E) / 2,
                    k = Math.sqrt(s + Math.pow(D, 2)),
                    q = Math.sqrt(w + Math.pow(L, 2)),
                    R = Math.sqrt(v + Math.pow(D, 2)),
                    W = Math.sqrt(C + Math.pow(L, 2));
                if (window.getSelection().removeAllRanges(), document.dispatchEvent(r), l.axis && "x" !== l.axis || (e.style.left = d + (x - h) / b.x + y + "px"), l.axis && "y" !== l.axis || (e.style.top = p + (z - f) / b.y + "px"), l.grid) {
                  var _t4 = parseFloat(S.left),
                      _n2 = parseFloat(S.top),
                      _o2 = _t4 % l.grid[0],
                      _a = _n2 % l.grid[1];_o2 < l.grid[0] / 2 ? e.style.left = _t4 - _o2 + "px" : e.style.left = _t4 + (l.grid[0] - _o2) + "px", _a < l.grid[1] / 2 ? e.style.top = _n2 - _a + "px" : e.style.top = _n2 + (l.grid[1] - _a) + "px";
                }if (l.containment || 0 === l.containment) {
                  var _t5 = void 0,
                      _n3 = void 0;if (e.options.container === document.body) _t5 = window.innerWidth - parseFloat(S.width) - a[1], _n3 = window.innerHeight - parseFloat(S.height) - a[2];else {
                    var _e3 = parseFloat(u.borderLeftWidth) + parseFloat(u.borderRightWidth),
                        _o3 = parseFloat(u.borderTopWidth) + parseFloat(u.borderBottomWidth);_t5 = g.width / b.x - parseFloat(S.width) - a[1] - _e3, _n3 = g.height / b.y - parseFloat(S.height) - a[2] - _o3;
                  }parseFloat(e.style.left) <= a[3] && (e.style.left = a[3] + "px"), parseFloat(e.style.top) <= a[0] && (e.style.top = a[0] + "px"), parseFloat(e.style.left) >= _t5 && (e.style.left = _t5 + "px"), parseFloat(e.style.top) >= _n3 && (e.style.top = _n3 + "px");
                }if (l.drag && jsPanel.processCallbacks(e, l.drag, !1, { left: o, top: c, right: j, bottom: E }), l.snap) {
                  var _t6 = l.snap.sensitivity,
                      _n4 = m === document.body ? window.innerWidth / 8 : g.width / 8,
                      _a2 = m === document.body ? window.innerHeight / 8 : g.height / 8;e.snappableTo = !1, jsPanel.removeSnapAreas(e), A < _t6 ? (e.snappableTo = "left-top", !1 !== l.snap.snapLeftTop && jsPanel.createSnapArea(e, "lt", _t6)) : $ < _t6 ? (e.snappableTo = "left-bottom", !1 !== l.snap.snapLeftBottom && jsPanel.createSnapArea(e, "lb", _t6)) : B < _t6 ? (e.snappableTo = "right-top", !1 !== l.snap.snapRightTop && jsPanel.createSnapArea(e, "rt", _t6)) : T < _t6 ? (e.snappableTo = "right-bottom", !1 !== l.snap.snapRightBottom && jsPanel.createSnapArea(e, "rb", _t6)) : c < _t6 && q < _n4 ? (e.snappableTo = "center-top", !1 !== l.snap.snapCenterTop && jsPanel.createSnapArea(e, "ct", _t6)) : o < _t6 && k < _a2 ? (e.snappableTo = "left-center", !1 !== l.snap.snapLeftCenter && jsPanel.createSnapArea(e, "lc", _t6)) : j < _t6 && R < _a2 ? (e.snappableTo = "right-center", !1 !== l.snap.snapRightCenter && jsPanel.createSnapArea(e, "rc", _t6)) : E < _t6 && W < _n4 && (e.snappableTo = "center-bottom", !1 !== l.snap.snapCenterBottom && jsPanel.createSnapArea(e, "cb", _t6));
                }
              }, jsPanel.pointermove.forEach(function (e) {
                document.addEventListener(e, o);
              }), document.addEventListener("mouseleave", c);
            });
          }), jsPanel.pointerup.forEach(function (t) {
            document.addEventListener(t, function () {
              jsPanel.pointermove.forEach(function (e) {
                document.removeEventListener(e, o);
              }), document.body.style.overflow = "inherit", jsPanel.removeSnapAreas(e), n && (document.dispatchEvent(s), e.style.opacity = 1, n = void 0, e.saveCurrentPosition(), l.snap && ("left-top" === e.snappableTo ? jsPanel.snapPanel(e, l.snap.snapLeftTop) : "center-top" === e.snappableTo ? jsPanel.snapPanel(e, l.snap.snapCenterTop) : "right-top" === e.snappableTo ? jsPanel.snapPanel(e, l.snap.snapRightTop) : "right-center" === e.snappableTo ? jsPanel.snapPanel(e, l.snap.snapRightCenter) : "right-bottom" === e.snappableTo ? jsPanel.snapPanel(e, l.snap.snapRightBottom) : "center-bottom" === e.snappableTo ? jsPanel.snapPanel(e, l.snap.snapCenterBottom) : "left-bottom" === e.snappableTo ? jsPanel.snapPanel(e, l.snap.snapLeftBottom) : "left-center" === e.snappableTo && jsPanel.snapPanel(e, l.snap.snapLeftCenter), l.snap.callback && e.snappableTo && "function" == typeof l.snap.callback && l.snap.callback.call(e, e), e.snappableTo && l.snap.repositionOnSnap && e.repositionOnSnap(e.snappableTo)), l.stop && jsPanel.processCallbacks(e, l.stop, !1, { left: parseFloat(e.style.left), top: parseFloat(e.style.top) })), e.controlbar.style.pointerEvents = "inherit", e.content.style.pointerEvents = "inherit", document.removeEventListener("mouseleave", c);
            });
          }), l.disable && (t.style.pointerEvents = "none");
        }), e;
      },
      emptyNode: function emptyNode(e) {
        for (; e.firstChild;) {
          e.removeChild(e.firstChild);
        }return e;
      },
      extend: function extend(e) {
        if ("[object Object]" === Object.prototype.toString.call(e)) for (var t in e) {
          e.hasOwnProperty(t) && (this.extensions[t] = e[t]);
        }
      },
      fetch: function (_fetch) {
        function fetch(_x4) {
          return _fetch.apply(this, arguments);
        }

        fetch.toString = function () {
          return _fetch.toString();
        };

        return fetch;
      }(function (obj) {
        var conf = obj.options.contentFetch,
            confDefaults = { bodyMethod: "text", evalscripttags: !0, autoresize: !0, autoreposition: !0, done: function done(e, t) {
            e.content.innerHTML = t;
          } };conf = "string" == typeof conf ? (0, _assign2.default)({ resource: obj.options.contentFetch }, confDefaults) : (0, _assign2.default)(confDefaults, conf);var fetchInit = conf.fetchInit || {};conf.beforeSend && conf.beforeSend.call(obj, obj), fetch(conf.resource, fetchInit).then(function (e) {
          if (e.ok) return e[conf.bodyMethod]();throw new Error("Network response was not ok.");
        }).then(function (response) {
          if (conf.done.call(obj, obj, response), conf.evalscripttags) {
            var scripttags = response.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi);scripttags && scripttags.forEach(function (tag) {
              var js = tag.replace(/<script\b[^>]*>/i, "").replace(/<\/script>/i, "").trim();eval(js);
            });
          }var oContentSize = obj.options.contentSize;if (conf.autoresize || conf.autoreposition) if ("string" == typeof oContentSize && oContentSize.match(/auto/i)) {
            var e = oContentSize.split(" "),
                t = (0, _assign2.default)({}, { width: e[0], height: e[1] });conf.autoresize && obj.resize(t), obj.classList.contains("jsPanel-contextmenu") || conf.autoreposition && obj.reposition();
          } else if ("object" == (typeof oContentSize === "undefined" ? "undefined" : _typeof(oContentSize)) && ("auto" === oContentSize.width || "auto" === oContentSize.height)) {
            var _e4 = (0, _assign2.default)({}, oContentSize);conf.autoresize && obj.resize(_e4), obj.classList.contains("jsPanel-contextmenu") || conf.autoreposition && obj.reposition();
          }
        }).catch(function (e) {
          console.error("There has been a problem with your fetch operation: " + e.message);
        });
      }),
      front: function front(e) {
        if ("minimized" === e.status) "maximized" === e.statusBefore ? e.maximize() : e.normalize();else {
          var t = Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(function (e) {
            return e.style.zIndex;
          });Math.max.apply(Math, _toConsumableArray(t)) > e.style.zIndex && (e.style.zIndex = jsPanel.zi.next()), this.resetZi();
        }this.getPanels().forEach(function (e, t) {
          var n = e.content.querySelector(".jsPanel-iframe-overlay");if (t > 0) {
            if (e.content.querySelector("iframe") && !n) {
              var _t7 = document.createElement("div");_t7.className = "jsPanel-iframe-overlay", e.content.appendChild(_t7);
            }
          } else n && e.content.removeChild(n);
        });
      },
      getPanels: function getPanels() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
          return this.classList.contains("jsPanel-standard");
        };
        return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(function (t) {
          return e.call(t, t);
        }).sort(function (e, t) {
          return t.style.zIndex - e.style.zIndex;
        });
      }, overlaps: function overlaps(e, t) {
        var n = void 0,
            o = "string" == typeof e ? document.querySelector(e) : e,
            a = o.getBoundingClientRect();return n = "string" == typeof t ? "window" === t ? { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight } : "parent" === t ? o.parentElement.getBoundingClientRect() : document.querySelector(t).getBoundingClientRect() : t.getBoundingClientRect(), { top: a.top - n.top, left: a.left - n.left, bottom: n.bottom - a.bottom, right: n.right - a.right };
      },
      pOcontainer: function pOcontainer(e, t) {
        if (e) {
          var _t8 = void 0;if ("string" == typeof e ? _t8 = "window" === e ? document.body : document.querySelector(e) : 1 === e.nodeType ? _t8 = e : e.length && (_t8 = e[0]), _t8 && 1 === _t8.nodeType) return _t8;
        }var n = new window.jsPanelError("NO NEW PANEL CREATED!\nThe container to append the panel to does not exist or a container was not specified!");try {
          throw n;
        } catch (e) {
          t && t.call(e, e);
        }return n;
      },
      pOcontainment: function pOcontainment(e) {
        var t = e;if ("function" == typeof e && (t = e()), "number" == typeof t) return [t, t, t, t];if (Array.isArray(t)) {
          if (1 === t.length) return [t[0], t[0], t[0], t[0]];if (2 === t.length) return t.concat(t);3 === t.length && (t[3] = t[1]);
        }return t;
      },
      pOsize: function pOsize(e, t) {
        var n = t || this.defaults.contentSize,
            o = e.parentElement;if ("string" == typeof n) {
          var _e5 = n.trim().split(" ");(n = {}).width = _e5[0], 2 === _e5.length ? n.height = _e5[1] : n.height = _e5[0];
        } else n.width && !n.height ? n.height = n.width : n.height && !n.width && (n.width = n.height);if (String(n.width).match(/^[0-9.]+$/gi)) n.width += "px";else if ("string" == typeof n.width && n.width.endsWith("%")) {
          if (o === document.body) n.width = window.innerWidth * (parseFloat(n.width) / 100) + "px";else {
            var _e6 = window.getComputedStyle(o),
                _t9 = parseFloat(_e6.borderLeftWidth) + parseFloat(_e6.borderRightWidth);n.width = (parseFloat(_e6.width) - _t9) * (parseFloat(n.width) / 100) + "px";
          }
        } else "function" == typeof n.width && (n.width = n.width.call(e, e), "number" == typeof n.width ? n.width += "px" : "string" == typeof n.width && n.width.match(/^[0-9.]+$/gi) && (n.width += "px"));if (String(n.height).match(/^[0-9.]+$/gi)) n.height += "px";else if ("string" == typeof n.height && n.height.endsWith("%")) {
          if (o === document.body) n.height = window.innerHeight * (parseFloat(n.height) / 100) + "px";else {
            var _e7 = window.getComputedStyle(o),
                _t10 = parseFloat(_e7.borderTopWidth) + parseFloat(_e7.borderBottomWidth);n.height = (parseFloat(_e7.height) - _t10) * (parseFloat(n.height) / 100) + "px";
          }
        } else "function" == typeof n.height && (n.height = n.height.call(e, e), "number" == typeof n.height ? n.height += "px" : "string" == typeof n.height && n.height.match(/^[0-9.]+$/gi) && (n.height += "px"));return n;
      },
      pOposition: function pOposition(e) {
        var t = e.match(/\b[a-z]{4,6}-{1}[a-z]{3,6}\b/i),
            n = e.match(/down|up|right([^-]|$)|left([^-]|$)/i),
            o = e.match(/[+-]?\d?\.?\d+([a-z%]{2,4}\b|%?)/gi);var a = void 0;return a = t ? { my: t[0].toLowerCase(), at: t[0].toLowerCase() } : { my: "center", at: "center" }, n && (a.autoposition = n[0].toLowerCase()), o && (o.forEach(function (e, t) {
          e.match(/^[+-]?[0-9]*$/) && (o[t] += "px"), o[t] = o[t].toLowerCase();
        }), 1 === o.length ? (a.offsetX = o[0], a.offsetY = o[0]) : (a.offsetX = o[0], a.offsetY = o[1])), a;
      },
      position: function position(e, t) {
        var n = void 0,
            o = void 0,
            a = void 0,
            l = { left: 0, top: 0 },
            i = 0,
            r = 0,
            s = 0,
            c = 0,
            d = { my: "center", at: "center", of: "window", offsetX: "0px", offsetY: "0px" };e.options.container === document.body && (d.of = document.body);var p = { width: document.documentElement.clientWidth, height: window.innerHeight },
            h = pageXOffset,
            f = pageYOffset;if (n = "string" == typeof e ? document.querySelector(e) : e, !t) return n.style.opacity = 1, n;var m = n.getBoundingClientRect();"string" == typeof t ? o = (0, _assign2.default)({}, d, jsPanel.pOposition(t)) : (o = (0, _assign2.default)({}, d, t), ["my", "at", "of", "offsetX", "offsetY", "minLeft", "maxLeft", "minTop", "maxTop"].forEach(function (t) {
          "function" == typeof o[t] && (o[t] = o[t].call(e, e));
        }));var g = n.parentElement,
            u = window.getComputedStyle(g),
            b = g.getBoundingClientRect(),
            y = g.tagName.toLowerCase();if (o.of && "window" !== o.of && (a = "string" == typeof o.of ? document.querySelector(o.of) : o.of), o.my.match(/^center-top$|^center$|^center-bottom$/i) ? i = m.width / 2 : o.my.match(/right/i) && (i = m.width), o.my.match(/^left-center$|^center$|^right-center$/i) ? r = m.height / 2 : o.my.match(/bottom/i) && (r = m.height), "window" === e.options.container && "body" === y && "window" === o.of) o.at.match(/^center-top$|^center$|^center-bottom$/i) ? s = p.width / 2 : o.at.match(/right/i) && (s = p.width), o.at.match(/^left-center$|^center$|^right-center$/i) ? c = p.height / 2 : o.at.match(/bottom/i) && (c = p.height), l.left = s - i - parseFloat(u.borderLeftWidth), l.top = c - r - parseFloat(u.borderTopWidth), n.style.position = "fixed";else if ("body" === y && "window" !== o.of) {
          var _e8 = a.getBoundingClientRect();s = o.at.match(/^center-top$|^center$|^center-bottom$/i) ? _e8.width / 2 + _e8.left + h : o.at.match(/right/i) ? _e8.width + _e8.left + h : _e8.left + h, c = o.at.match(/^left-center$|^center$|^right-center$/i) ? _e8.height / 2 + _e8.top + f : o.at.match(/bottom/i) ? _e8.height + _e8.top + f : _e8.top + f, l.left = s - i - parseFloat(u.borderLeftWidth), l.top = c - r - parseFloat(u.borderTopWidth);
        } else if ("body" === y || "window" !== o.of && o.of) {
          if ("body" !== y && g.contains(a)) {
            var _e9 = a.getBoundingClientRect();s = o.at.match(/^center-top$|^center$|^center-bottom$/i) ? _e9.left - b.left + _e9.width / 2 : o.at.match(/right/i) ? _e9.left - b.left + _e9.width : _e9.left - b.left, c = o.at.match(/^left-center$|^center$|^right-center$/i) ? _e9.top - b.top + _e9.height / 2 : o.at.match(/bottom/i) ? _e9.top - b.top + _e9.height : _e9.top - b.top, l.left = s - i - parseFloat(u.borderLeftWidth), l.top = c - r - parseFloat(u.borderTopWidth);
          }
        } else {
          var _e10 = parseFloat(u.borderLeftWidth) + parseFloat(u.borderRightWidth),
              _t11 = parseFloat(u.borderTopWidth) + parseFloat(u.borderBottomWidth);o.at.match(/^center-top$|^center$|^center-bottom$/i) ? s = b.width / 2 - _e10 / 2 : o.at.match(/right/i) && (s = b.width - _e10), o.at.match(/^left-center$|^center$|^right-center$/i) ? c = b.height / 2 - _t11 / 2 : o.at.match(/bottom/i) && (c = b.height - _t11), l.left = s - i, l.top = c - r;
        }if (o.autoposition && o.my === o.at && ["left-top", "center-top", "right-top", "left-bottom", "center-bottom", "right-bottom"].indexOf(o.my) >= 0) {
          "function" == typeof o.autoposition && (o.autoposition = o.autoposition());var _e11 = o.my + "-" + o.autoposition.toLowerCase();n.classList.add(_e11);var _t12 = Array.prototype.slice.call(document.querySelectorAll("." + _e11)),
              _a3 = _t12.indexOf(n);_t12.length > 1 && ("down" === o.autoposition ? _t12.forEach(function (e, n) {
            n > 0 && n <= _a3 && (l.top += _t12[--n].getBoundingClientRect().height + jsPanel.autopositionSpacing);
          }) : "up" === o.autoposition ? _t12.forEach(function (e, n) {
            n > 0 && n <= _a3 && (l.top -= _t12[--n].getBoundingClientRect().height + jsPanel.autopositionSpacing);
          }) : "right" === o.autoposition ? _t12.forEach(function (e, n) {
            n > 0 && n <= _a3 && (l.left += _t12[--n].getBoundingClientRect().width + jsPanel.autopositionSpacing);
          }) : "left" === o.autoposition && _t12.forEach(function (e, n) {
            n > 0 && n <= _a3 && (l.left -= _t12[--n].getBoundingClientRect().width + jsPanel.autopositionSpacing);
          }));
        }var w = n.getScaleFactor();l.left /= w.x, l.top /= w.y;var j = parseFloat(u.borderLeftWidth) + parseFloat(u.borderRightWidth),
            v = parseFloat(u.borderTopWidth) + parseFloat(u.borderBottomWidth),
            E = j * (1 - w.x) / w.x,
            C = v * (1 - w.y) / w.y;if (o.at.match(/^right-top$|^right-center$|^right-bottom$/i) ? l.left += E : o.at.match(/^center-top$|^center$|^center-bottom$/i) && (l.left += E / 2), o.at.match(/^left-bottom$|^center-bottom$|^right-bottom$/i) ? l.top += C : o.at.match(/^left-center$|^center$|^right-center$/i) && (l.top += C / 2), l.left += "px", l.top += "px", n.style.left = l.left, n.style.top = l.top, o.offsetX && ("number" == typeof o.offsetX ? n.style.left = "calc(" + l.left + " + " + o.offsetX + "px)" : n.style.left = "calc(" + l.left + " + " + o.offsetX + ")", l.left = window.getComputedStyle(n).left), o.offsetY && ("number" == typeof o.offsetY ? n.style.top = "calc(" + l.top + " + " + o.offsetY + "px)" : n.style.top = "calc(" + l.top + " + " + o.offsetY + ")", l.top = window.getComputedStyle(n).top), o.minLeft) {
          var _e12 = parseFloat(l.left);"number" == typeof o.minLeft && (o.minLeft += "px"), n.style.left = o.minLeft, _e12 > parseFloat(window.getComputedStyle(n).left) && (n.style.left = _e12 + "px"), l.left = window.getComputedStyle(n).left;
        }if (o.maxLeft) {
          var _e13 = parseFloat(l.left);"number" == typeof o.maxLeft && (o.maxLeft += "px"), n.style.left = o.maxLeft, _e13 < parseFloat(window.getComputedStyle(n).left) && (n.style.left = _e13 + "px"), l.left = window.getComputedStyle(n).left;
        }if (o.maxTop) {
          var _e14 = parseFloat(l.top);"number" == typeof o.maxTop && (o.maxTop += "px"), n.style.top = o.maxTop, _e14 < parseFloat(window.getComputedStyle(n).top) && (n.style.top = _e14 + "px"), l.top = window.getComputedStyle(n).top;
        }if (o.minTop) {
          var _e15 = parseFloat(l.top);"number" == typeof o.minTop && (o.minTop += "px"), n.style.top = o.minTop, _e15 > parseFloat(window.getComputedStyle(n).top) && (n.style.top = _e15 + "px"), l.top = window.getComputedStyle(n).top;
        }if ("function" == typeof o.modify) {
          var _e16 = o.modify.call(l, l);n.style.left = _e16.left, n.style.top = _e16.top;
        }return n.style.opacity = 1, n.style.left = window.getComputedStyle(n).left, n.style.top = window.getComputedStyle(n).top, n;
      },
      processCallbacks: function processCallbacks(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "some";
        var o = arguments[3];
        if ("function" == typeof t && (t = [t]), n) return t[n](function (t) {
          if ("function" == typeof t) return t.call(e, e, o);
        });t.forEach(function (t) {
          t.call(e, e, o);
        });
      },
      removeSnapAreas: function removeSnapAreas(e) {
        document.querySelectorAll(".jsPanel-snap-area").forEach(function (t) {
          e.parentElement && e.parentElement.removeChild(t);
        });
      },
      resetZi: function resetZi() {
        this.zi = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : jsPanel.ziBase;
          var t = e;return { next: function next() {
              return t++;
            } };
        }(), Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort(function (e, t) {
          return e.style.zIndex - t.style.zIndex;
        }).forEach(function (e) {
          e.style.zIndex = jsPanel.zi.next();
        });
      },
      resizeit: function resizeit(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = void 0,
            o = void 0,
            a = void 0,
            l = void 0,
            i = void 0,
            r = (0, _assign2.default)({}, this.defaults.resizeit, t),
            s = e.parentElement,
            c = s.tagName.toLowerCase(),
            d = "function" == typeof r.maxWidth ? r.maxWidth() : r.maxWidth || 1e4,
            p = "function" == typeof r.maxHeight ? r.maxHeight() : r.maxHeight || 1e4,
            h = "function" == typeof r.minWidth ? r.minWidth() : r.minWidth,
            f = "function" == typeof r.minHeight ? r.minHeight() : r.minHeight;var m = new CustomEvent("jspanelresizestart", { detail: e.id }),
            g = new CustomEvent("jspanelresize", { detail: e.id }),
            u = new CustomEvent("jspanelresizestop", { detail: e.id });return n = this.pOcontainment(r.containment), r.handles.split(",").forEach(function (t) {
          var n = document.createElement("DIV");n.className = "jsPanel-resizeit-handle jsPanel-resizeit-" + t.trim(), n.style.zIndex = 90, e.append(n);
        }), e.querySelectorAll(".jsPanel-resizeit-handle").forEach(function (t) {
          jsPanel.pointerdown.forEach(function (u) {
            t.addEventListener(u, function (t) {
              if (t.preventDefault(), t.button && t.button > 0) return !1;e.content.style.pointerEvents = "none";var u = e.getBoundingClientRect(),
                  b = s.getBoundingClientRect(),
                  y = window.getComputedStyle(s, null),
                  w = parseInt(y.borderLeftWidth, 10),
                  j = parseInt(y.borderTopWidth, 10),
                  v = y.getPropertyValue("position"),
                  E = t.clientX || t.touches[0].clientX,
                  C = t.clientY || t.touches[0].clientY,
                  F = E / C,
                  P = u.width,
                  x = u.height,
                  z = t.target.classList,
                  S = e.getScaleFactor(),
                  A = u.width / u.height;var $ = u.left,
                  B = u.top,
                  T = 1e4,
                  L = 1e4,
                  D = 1e4,
                  k = 1e4;"body" !== c && ($ = u.left - b.left + s.scrollLeft, B = u.top - b.top + s.scrollTop), "body" === c && n ? (T = document.documentElement.clientWidth - u.left, D = document.documentElement.clientHeight - u.top, L = u.width + u.left, k = u.height + u.top) : n && ("static" === v ? (T = b.width - u.left + w, D = b.height + b.top - u.top + j, L = u.width + (u.left - b.left) - w, k = u.height + (u.top - b.top) - j) : (T = s.clientWidth - (u.left - b.left) / S.x + w, D = s.clientHeight - (u.top - b.top) / S.y + j, L = (u.width + u.left - b.left) / S.x - w, k = e.clientHeight + (u.top - b.top) / S.y - j)), n && (L -= n[3], k -= n[0], T -= n[1], D -= n[2]);var q = window.getComputedStyle(e);var R = parseFloat(q.width) - u.width,
                  W = parseFloat(q.height) - u.height,
                  O = parseFloat(q.left) - u.left,
                  M = parseFloat(q.top) - u.top;s !== document.body && (O += b.left, M += b.top), o = function o(t) {
                a || (document.dispatchEvent(m), r.start && jsPanel.processCallbacks(e, r.start, !1, { width: P, height: x }), jsPanel.front(e)), a = 1, document.dispatchEvent(g);var o = void 0,
                    c = t.clientX || t.touches[0].clientX,
                    u = t.clientY || t.touches[0].clientY;z.contains("jsPanel-resizeit-e") ? ((l = P + (c - E) / S.x + R) >= T && (l = T), l >= d ? l = d : l <= h && (l = h), e.style.width = l + "px", r.aspectRatio && (e.style.height = l / A + "px", r.containment && (o = e.overlaps(s)).bottom <= n[2] && (e.style.height = D + "px", e.style.width = D * A + "px"))) : z.contains("jsPanel-resizeit-s") ? ((i = x + (u - C) / S.y + W) >= D && (i = D), i >= p ? i = p : i <= f && (i = f), e.style.height = i + "px", r.aspectRatio && (e.style.width = i * A + "px", r.containment && (o = e.overlaps(s)).right <= n[1] && (e.style.width = T + "px", e.style.height = T / A + "px"))) : z.contains("jsPanel-resizeit-w") ? ((l = P + (E - c) / S.x + R) <= d && l >= h && l <= L && (e.style.left = $ + (c - E) / S.x + O + "px"), l >= L && (l = L), l >= d ? l = d : l <= h && (l = h), e.style.width = l + "px", r.aspectRatio && (e.style.height = l / A + "px", r.containment && (o = e.overlaps(s)).bottom <= n[2] && (e.style.height = D + "px", e.style.width = D * A + "px"))) : z.contains("jsPanel-resizeit-n") ? ((i = x + (C - u) / S.y + W) <= p && i >= f && i <= k && (e.style.top = B + (u - C) / S.y + M + "px"), i >= k && (i = k), i >= p ? i = p : i <= f && (i = f), e.style.height = i + "px", r.aspectRatio && (e.style.width = i * A + "px", r.containment && (o = e.overlaps(s)).right <= n[1] && (e.style.width = T + "px", e.style.height = T / A + "px"))) : z.contains("jsPanel-resizeit-se") ? ((l = P + (c - E) / S.x + R) >= T && (l = T), l >= d ? l = d : l <= h && (l = h), e.style.width = l + "px", r.aspectRatio && (e.style.height = l / A + "px"), (i = x + (u - C) / S.y + W) >= D && (i = D), i >= p ? i = p : i <= f && (i = f), e.style.height = i + "px", r.aspectRatio && (e.style.width = i * A + "px", r.containment && (o = e.overlaps(s)).right <= n[1] && (e.style.width = T + "px", e.style.height = T / A + "px"))) : z.contains("jsPanel-resizeit-sw") ? ((i = x + (u - C) / S.y + W) >= D && (i = D), i >= p ? i = p : i <= f && (i = f), e.style.height = i + "px", r.aspectRatio && (e.style.width = i * A + "px"), (l = P + (E - c) / S.x + R) <= d && l >= h && l <= L && (e.style.left = $ + (c - E) / S.x + O + "px"), l >= L && (l = L), l >= d ? l = d : l <= h && (l = h), e.style.width = l + "px", r.aspectRatio && (e.style.height = l / A + "px", r.containment && (o = e.overlaps(s)).bottom <= n[2] && (e.style.height = D + "px", e.style.width = D * A + "px"))) : z.contains("jsPanel-resizeit-ne") ? ((l = P + (c - E) / S.x + R) >= T && (l = T), l >= d ? l = d : l <= h && (l = h), e.style.width = l + "px", r.aspectRatio && (e.style.height = l / A + "px"), (i = x + (C - u) / S.y + W) <= p && i >= f && i <= k && (e.style.top = B + (u - C) / S.y + M + "px"), i >= k && (i = k), i >= p ? i = p : i <= f && (i = f), e.style.height = i + "px", r.aspectRatio && (e.style.width = i * A + "px", r.containment && (o = e.overlaps(s)).right <= n[1] && (e.style.width = T + "px", e.style.height = T / A + "px"))) : z.contains("jsPanel-resizeit-nw") && (r.aspectRatio && z.contains("jsPanel-resizeit-nw") && (u = (c = u * F) / F), (l = P + (E - c) / S.x + R) <= d && l >= h && l <= L && (e.style.left = $ + (c - E) / S.x + O + "px"), l >= L && (l = L), l >= d ? l = d : l <= h && (l = h), e.style.width = l + "px", r.aspectRatio && (e.style.height = l / A + "px"), (i = x + (C - u) / S.y + W) <= p && i >= f && i <= k && (e.style.top = B + (u - C) / S.y + M + "px"), i >= k && (i = k), i >= p ? i = p : i <= f && (i = f), e.style.height = i + "px", r.aspectRatio && (e.style.width = i * A + "px")), window.getSelection().removeAllRanges();var b = window.getComputedStyle(e),
                    y = { left: parseFloat(b.left), top: parseFloat(b.top), right: parseFloat(b.right), bottom: parseFloat(b.bottom), width: parseFloat(b.width), height: parseFloat(b.height) };r.resize && jsPanel.processCallbacks(e, r.resize, !1, y);
              }, jsPanel.pointermove.forEach(function (e) {
                document.addEventListener(e, o, !1);
              }), window.addEventListener("mouseout", function (e) {
                null === e.relatedTarget && jsPanel.pointermove.forEach(function (e) {
                  document.removeEventListener(e, o, !1);
                });
              }, !1);
            });
          });
        }), jsPanel.pointerup.forEach(function (t) {
          document.addEventListener(t, function (t) {
            if (jsPanel.pointermove.forEach(function (e) {
              document.removeEventListener(e, o, !1);
            }), t.target.classList && t.target.classList.contains("jsPanel-resizeit-handle")) {
              var _n5 = void 0,
                  _o4 = void 0;var _a4 = t.target.className;if (_a4.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i) && (_n5 = !0), _a4.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i) && (_o4 = !0), r.grid && Array.isArray(r.grid)) {
                1 === r.grid.length && (r.grid[1] = r.grid[0]);var _t13 = parseFloat(e.style.width),
                    _a5 = parseFloat(e.style.height),
                    _l = _t13 % r.grid[0],
                    _i = _a5 % r.grid[1],
                    _s = parseFloat(e.style.left),
                    _c = parseFloat(e.style.top),
                    _d = _s % r.grid[0],
                    _p = _c % r.grid[1];_l < r.grid[0] / 2 ? e.style.width = _t13 - _l + "px" : e.style.width = _t13 + (r.grid[0] - _l) + "px", _i < r.grid[1] / 2 ? e.style.height = _a5 - _i + "px" : e.style.height = _a5 + (r.grid[1] - _i) + "px", _n5 && (_d < r.grid[0] / 2 ? e.style.left = _s - _d + "px" : e.style.left = _s + (r.grid[0] - _d) + "px"), _o4 && (_p < r.grid[1] / 2 ? e.style.top = _c - _p + "px" : e.style.top = _c + (r.grid[1] - _p) + "px");
              }
            }a && (e.content.style.pointerEvents = "inherit", document.dispatchEvent(u), a = void 0, e.saveCurrentDimensions(), e.saveCurrentPosition(), r.stop && jsPanel.processCallbacks(e, r.stop, !1, { width: parseFloat(e.style.width), height: parseFloat(e.style.height) })), e.content.style.pointerEvents = "inherit";
          }, !1);
        }), r.disable && e.querySelectorAll(".jsPanel-resizeit-handle").forEach(function (e) {
          e.style.pointerEvents = "none";
        }), e;
      },
      setClass: function setClass(e, t) {
        return t.split(" ").forEach(function (t) {
          return e.classList.add(t);
        }), e;
      }, remClass: function remClass(e, t) {
        return t.split(" ").forEach(function (t) {
          return e.classList.remove(t);
        }), e;
      }, setStyle: function setStyle(e, t) {
        for (var n in t) {
          if (t.hasOwnProperty(n)) {
            var o = String(n).replace(/-\w/gi, function (e) {
              return e.substr(-1).toUpperCase();
            });e.style[o] = t[n];
          }
        }return e;
      },
      snapPanel: function snapPanel(e, t) {
        if (e.currentData.beforeSnap = { width: e.currentData.width, height: e.currentData.height }, t && "function" == typeof t) t.call(e, e, e.snappableTo);else if (!1 !== t) {
          var _t14 = [0, 0];if (e.options.dragit.snap.containment && e.options.dragit.containment) {
            var n = this.pOcontainment(e.options.dragit.containment),
                o = e.snappableTo;o.startsWith("left") ? _t14[0] = n[3] : o.startsWith("right") && (_t14[0] = -n[1]), o.endsWith("top") ? _t14[1] = n[0] : o.endsWith("bottom") && (_t14[1] = -n[2]);
          }e.reposition(e.snappableTo + " " + _t14[0] + " " + _t14[1]), e.snapped = e.snappableTo;
        }
      },
      create: function create() {
        var _this = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments[1];
        var n = void 0;jsPanel.zi || (jsPanel.zi = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : jsPanel.ziBase;
          var t = e;return { next: function next() {
              return t++;
            } };
        }()), e.config ? delete (e = (0, _assign2.default)({}, this.defaults, e.config, e)).config : e = (0, _assign2.default)({}, this.defaults, e), e.id ? "function" == typeof e.id && (e.id = e.id()) : e.id = "jsPanel-" + (jsPanel.idCounter += 1);var o = document.getElementById(e.id);if (null !== o) {
          o.classList.contains("jsPanel") && o.front();var _n6 = new window.jsPanelError("NO NEW PANEL CREATED!\nAn element with the ID <" + e.id + "> already exists in the document.");try {
            throw _n6;
          } catch (e) {
            t && t.call(e, e);
          }return console.error(_n6.name + ":", _n6.message);
        }var a = this.pOcontainer(e.container, t);if (a && a.message) return console.error(a.name + ":", a.message);e.maximizedMargin = this.pOcontainment(e.maximizedMargin), e.dragit && (["start", "drag", "stop"].forEach(function (t) {
          e.dragit[t] ? "function" == typeof e.dragit[t] && (e.dragit[t] = [e.dragit[t]]) : e.dragit[t] = [];
        }), e.dragit.snap && ("object" == _typeof(e.dragit.snap) ? e.dragit.snap = (0, _assign2.default)({}, this.defaultSnapConfig, e.dragit.snap) : e.dragit.snap = this.defaultSnapConfig)), e.resizeit && ["start", "resize", "stop"].forEach(function (t) {
          e.resizeit[t] ? "function" == typeof e.resizeit[t] && (e.resizeit[t] = [e.resizeit[t]]) : e.resizeit[t] = [];
        }), ["onbeforeclose", "onbeforemaximize", "onbeforeminimize", "onbeforenormalize", "onbeforesmallify", "onbeforeunsmallify", "onclosed", "onfronted", "onmaximized", "onminimized", "onnormalized", "onsmallified", "onstatuschange", "onunsmallified"].forEach(function (t) {
          e[t] ? "function" == typeof e[t] && (e[t] = [e[t]]) : e[t] = [];
        }), e.headerRemove && (e.header = !1);var l = e.template ? e.template : this.createPanelTemplate();l.options = e, l.status = "initialized", l.currentData = {}, l.header = l.querySelector(".jsPanel-hdr"), l.headerbar = l.header.querySelector(".jsPanel-headerbar"), l.titlebar = l.header.querySelector(".jsPanel-titlebar"), l.headerlogo = l.headerbar.querySelector(".jsPanel-headerlogo"), l.headertitle = l.headerbar.querySelector(".jsPanel-title"), l.controlbar = l.headerbar.querySelector(".jsPanel-controlbar"), l.headertoolbar = l.header.querySelector(".jsPanel-hdr-toolbar"), l.content = l.querySelector(".jsPanel-content"), l.footer = l.querySelector(".jsPanel-ftr"), l.snappableTo = !1, l.snapped = !1;var i = new CustomEvent("jspanelloaded", { detail: e.id }),
            r = new CustomEvent("jspanelbeforeclose", { detail: e.id }),
            s = new CustomEvent("jspanelclosed", { detail: e.id }),
            c = new CustomEvent("jspanelcloseduser", { detail: e.id }),
            d = new CustomEvent("jspanelstatuschange", { detail: e.id }),
            p = new CustomEvent("jspanelbeforenormalize", { detail: e.id }),
            h = new CustomEvent("jspanelnormalized", { detail: e.id }),
            f = new CustomEvent("jspanelbeforemaximize", { detail: e.id }),
            m = new CustomEvent("jspanelmaximized", { detail: e.id }),
            g = new CustomEvent("jspanelbeforeminimize", { detail: e.id }),
            u = new CustomEvent("jspanelminimized", { detail: e.id }),
            b = new CustomEvent("jspanelbeforesmallify", { detail: e.id }),
            y = new CustomEvent("jspanelsmallified", { detail: e.id }),
            w = new CustomEvent("jspanelsmallifiedmax", { detail: e.id }),
            j = new CustomEvent("jspanelbeforeunsmallify", { detail: e.id }),
            v = new CustomEvent("jspanelfronted", { detail: e.id }),
            E = l.querySelector(".jsPanel-btn-close"),
            C = l.querySelector(".jsPanel-btn-maximize"),
            F = l.querySelector(".jsPanel-btn-normalize"),
            P = l.querySelector(".jsPanel-btn-smallify"),
            x = l.querySelector(".jsPanel-btn-smallifyrev"),
            z = l.querySelector(".jsPanel-btn-minimize");E && jsPanel.pointerup.forEach(function (e) {
          E.addEventListener(e, function (e) {
            if (e.preventDefault(), e.button && e.button > 0) return !1;l.close(), document.dispatchEvent(c);
          });
        }), C && jsPanel.pointerup.forEach(function (e) {
          C.addEventListener(e, function (e) {
            if (e.preventDefault(), e.button && e.button > 0) return !1;l.maximize();
          });
        }), F && jsPanel.pointerup.forEach(function (e) {
          F.addEventListener(e, function (e) {
            if (e.preventDefault(), e.button && e.button > 0) return !1;l.normalize();
          });
        }), P && jsPanel.pointerup.forEach(function (e) {
          P.addEventListener(e, function (e) {
            if (e.preventDefault(), e.button && e.button > 0) return !1;l.smallify();
          });
        }), x && jsPanel.pointerup.forEach(function (e) {
          x.addEventListener(e, function (e) {
            if (e.preventDefault(), e.button && e.button > 0) return !1;l.unsmallify();
          });
        }), z && jsPanel.pointerup.forEach(function (e) {
          z.addEventListener(e, function (e) {
            if (e.preventDefault(), e.button && e.button > 0) return !1;l.minimize();
          });
        });var S = jsPanel.extensions;for (var _e17 in S) {
          S.hasOwnProperty(_e17) && (l[_e17] = S[_e17]);
        }if (l.addToolbar = function (e, t, n) {
          if ("header" === e ? e = l.headertoolbar : "footer" === e && (e = l.footer), "string" == typeof t) e.innerHTML = t;else if (Array.isArray(t)) t.forEach(function (t) {
            "string" == typeof t ? e.innerHTML += t : e.append(t);
          });else if ("function" == typeof t) {
            var _n7 = t.call(l, l);"string" == typeof _n7 ? e.innerHTML = _n7 : e.append(_n7);
          } else e.append(t);return e.classList.add("active"), n && n.call(l, l), l;
        }, l.applyBuiltInTheme = function (t) {
          return l.classList.add("jsPanel-theme-" + t.color), l.header.classList.add("jsPanel-theme-" + t.color), t.filling && (l.content.style.background = "", l.content.classList.add("jsPanel-content-" + t.filling)), e.headerToolbar || (l.content.style.background = "", l.content.style.borderTop = "1px solid " + l.headertitle.style.color), l;
        }, l.applyArbitraryTheme = function (t) {
          l.style.backgroundColor = t.colors[0], l.header.style.backgroundColor = t.colors[0], [".jsPanel-headerlogo", ".jsPanel-title", ".jsPanel-hdr-toolbar"].forEach(function (e) {
            l.querySelector(e).style.color = t.colors[3];
          }, l), l.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(function (e) {
            e.style.color = t.colors[3];
          });var n = "#000000" === t.colors[3] ? "1px solid rgba(0,0,0,0.2)" : "1px solid rgba(255,255,255,0.2)";return e.headerToolbar ? (t.colors[3], l.headertoolbar.style.borderTop = n, jsPanel.setStyle(l.headertoolbar, { boxShadow: "0 0 1px " + t.colors[3] + " inset", width: "calc(100% + 4px)", marginLeft: "-1px" })) : l.content.style.borderTop = n, "filled" === t.filling ? jsPanel.setStyle(l.content, { backgroundColor: t.colors[0], color: t.colors[3], borderTop: n }) : "filledlight" === t.filling && (l.content.style.backgroundColor = t.colors[1]), l;
        }, l.applyBootstrapTheme = function (e) {
          var t = e.bstheme,
              n = $.fn.button.Constructor.VERSION[0];if ("4" === n ? l.classList.add("bg-" + t) : (["panel", "panel-" + t].forEach(function (e) {
            l.classList.add(e);
          }), l.header.classList.add("panel-heading")), "mdb" === e.bs) {
            var _n8 = t + "-color";e.mdbStyle && (_n8 = _n8 + "-dark"), l.classList.add(_n8);
          }var o = void 0;o = "4" === n ? window.getComputedStyle(l).backgroundColor.replace(/\s+/g, "") : window.getComputedStyle(l.header).backgroundColor.replace(/\s+/g, "");var a = jsPanel.calcColors(o);return l.header.style.color = a[3], e.filling ? l.setTheme(o + " " + e.filling) : l.setTheme(o), l;
        }, l.applyThemeBorder = function (t) {
          var n = e.border.split(" ");if (l.style.borderWidth = n[0], l.style.borderStyle = n[1], l.style.borderColor = n[2], t.bs) {
            var _e18 = void 0;_e18 = "transparent" === window.getComputedStyle(l.header).backgroundColor ? window.getComputedStyle(l).backgroundColor.replace(/\s+/g, "") : window.getComputedStyle(l.header).backgroundColor.replace(/\s+/g, ""), n[2] ? l.style.borderColor = n[2] : l.style.borderColor = _e18;
          } else -1 === jsPanel.themes.indexOf(t.color) && (n[2] ? l.style.borderColor = n[2] : l.style.borderColor = t.colors[0]);return l;
        }, l.autopositionRemaining = function () {
          var t = void 0;if (["left-top-down", "left-top-right", "center-top-down", "right-top-down", "right-top-left", "left-bottom-up", "left-bottom-right", "center-bottom-up", "right-bottom-up", "right-bottom-left"].forEach(function (e) {
            l.classList.contains(e) && (t = e);
          }), t) {
            ("window" === e.container ? document.body : e.container).querySelectorAll("." + t).forEach(function (e) {
              e.reposition();
            });
          }
        }, l.borderRadius = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
          var t = "string" == typeof e ? e : e + "px",
              n = l.header.style,
              o = l.content.style,
              a = l.footer.style;return l.style.borderRadius = t, l.querySelector(".jsPanel-hdr") ? (n.borderTopLeftRadius = t, n.borderTopRightRadius = t) : (o.borderTopLeftRadius = t, o.borderTopRightRadius = t), l.querySelector(".jsPanel-ftr.active") ? (a.borderBottomLeftRadius = t, a.borderBottomRightRadius = t) : (o.borderBottomLeftRadius = t, o.borderBottomRightRadius = t), l;
        }, l.calcSizeFactors = function () {
          var t = window.getComputedStyle(l);if (e.container === document.body) l.hf = parseFloat(l.style.left) / (document.body.clientWidth - parseFloat(l.style.width)), l.vf = parseFloat(l.style.top) / (window.innerHeight - parseFloat(t.height));else {
            var _e19 = l.parentElement.getBoundingClientRect();l.hf = parseFloat(l.style.left) / (_e19.width - parseFloat(l.style.width)), l.vf = parseFloat(l.style.top) / (_e19.height - parseFloat(t.height));
          }
        }, l.clearTheme = function (e) {
          return jsPanel.themes.concat(jsPanel.mdbthemes).forEach(function (e) {
            ["panel", "jsPanel-theme-" + e, "panel-" + e, e + "-color"].forEach(function (e) {
              l.classList.remove(e);
            }), l.header.classList.remove("panel-heading", "jsPanel-theme-" + e);
          }, l), l.headertitle.classList.remove("panel-title"), l.content.classList.remove("panel-body", "jsPanel-content-filled", "jsPanel-content-filledlight"), l.footer.classList.remove("panel-footer"), jsPanel.setStyle(l, { backgroundColor: "", borderWidth: "", borderStyle: "", borderColor: "" }), jsPanel.setStyle(l.content, { background: "", border: "" }), jsPanel.setStyle(l.headertoolbar, { boxShadow: "", width: "", marginLeft: "" }), l.header.style.background = "", Array.prototype.slice.call(l.controlbar.querySelectorAll(".jsPanel-icon")).concat([l.headerlogo, l.headertitle, l.headertoolbar, l.content]).forEach(function (e) {
            e.style.color = "";
          }), e && e.call(l, l), l;
        }, l.close = function (t) {
          var o = e.id;var a = void 0;var i = function i() {
            if (n && window.clearTimeout(n), l.closeChildpanels(), l.parentElement && (a = l.parentElement.removeChild(l)), !a) return !1;l.removeMinimizedReplacement(), document.dispatchEvent(s), e.onclosed && jsPanel.processCallbacks(l, e.onclosed, "every"), l.autopositionRemaining();
          };return document.dispatchEvent(r), e.onbeforeclose && e.onbeforeclose.length > 0 && !jsPanel.processCallbacks(l, e.onbeforeclose) ? l : (e.animateOut ? (e.animateIn && jsPanel.remClass(l, e.animateIn), jsPanel.setClass(l, e.animateOut), l.addEventListener("animationend", function () {
            i();
          })) : i(), a ? (t && t.call(o, o), a = void 0, o) : (t && t.call(l, o, l), !1));
        }, l.closeChildpanels = function (e) {
          return l.getChildpanels().forEach(function (e) {
            return e.close();
          }), e && e.call(l, l), l;
        }, l.contentRemove = function (e) {
          return jsPanel.emptyNode(l.content), e && e.call(l, l), l;
        }, l.createMinimizedReplacement = function () {
          var t = jsPanel.createMinimizedTemplate(),
              n = window.getComputedStyle(l.headertitle).color,
              o = e.iconfont,
              a = t.querySelector(".jsPanel-controlbar");return t.style.backgroundColor = "transparent" === window.getComputedStyle(l.header).backgroundColor ? window.getComputedStyle(l).backgroundColor : window.getComputedStyle(l.header).backgroundColor, t.id = l.id + "-min", t.querySelector(".jsPanel-headerbar").replaceChild(l.headerlogo.cloneNode(!0), t.querySelector(".jsPanel-headerlogo")), t.querySelector(".jsPanel-titlebar").replaceChild(l.headertitle.cloneNode(!0), t.querySelector(".jsPanel-title")), t.querySelector(".jsPanel-title").style.color = n, a.style.color = n, l.setIconfont(o, t), "enabled" === l.dataset.btnnormalize ? jsPanel.pointerup.forEach(function (e) {
            t.querySelector(".jsPanel-btn-normalize").addEventListener(e, function () {
              l.normalize();
            });
          }) : a.querySelector(".jsPanel-btn-normalize").style.display = "none", "enabled" === l.dataset.btnmaximize ? jsPanel.pointerup.forEach(function (e) {
            t.querySelector(".jsPanel-btn-maximize").addEventListener(e, function () {
              l.maximize();
            });
          }) : a.querySelector(".jsPanel-btn-maximize").style.display = "none", "enabled" === l.dataset.btnclose ? jsPanel.pointerup.forEach(function (e) {
            t.querySelector(".jsPanel-btn-close").addEventListener(e, function () {
              l.close();
            });
          }) : a.querySelector(".jsPanel-btn-close").style.display = "none", t;
        }, l.dragit = function (t) {
          var n = (0, _assign2.default)({}, jsPanel.defaults.dragit, e.dragit),
              o = l.querySelectorAll(n.handles);return "disable" === t ? o.forEach(function (e) {
            e.style.pointerEvents = "none";
          }) : o.forEach(function (e) {
            e.style.pointerEvents = "auto";
          }), l;
        }, l.front = function (t) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
          return jsPanel.front(l), document.dispatchEvent(v), t && t.call(l, l), e.onfronted && n && jsPanel.processCallbacks(l, e.onfronted, "every"), l;
        }, l.getChildpanels = function () {
          return Array.prototype.slice.call(l.content.querySelectorAll(".jsPanel"));
        }, l.getScaleFactor = function () {
          var e = l.getBoundingClientRect();return { x: e.width / l.offsetWidth, y: e.height / l.offsetHeight };
        }, l.getThemeDetails = function (e) {
          var t = e.toLowerCase().replace(/ /g, ""),
              n = { color: !1, colors: !1, filling: !1, bs: !1, bstheme: !1 };if (t.endsWith("filled") ? (n.filling = "filled", n.color = t.substr(0, t.length - 6)) : t.endsWith("filledlight") ? (n.filling = "filledlight", n.color = t.substr(0, t.length - 11)) : (n.filling = "", n.color = t), n.colors = jsPanel.calcColors(n.color), n.color.match("-")) {
            var _e20 = n.color.split("-");n.bs = _e20[0], n.bstheme = _e20[1], n.mdbStyle = _e20[2] || void 0;
          }return n;
        }, l.isChildpanel = function () {
          var e = l.closest(".jsPanel-content");return !!e && e.parentElement;
        }, l.maximize = function (t) {
          if (e.onbeforemaximize && e.onbeforemaximize.length > 0 && !jsPanel.processCallbacks(l, e.onbeforemaximize)) return l;document.dispatchEvent(f);var n = l.parentElement,
              o = e.maximizedMargin;return n === document.body ? (l.style.width = document.documentElement.clientWidth - o[1] - o[3] + "px", l.style.height = document.documentElement.clientHeight - o[0] - o[2] + "px", l.style.left = o[3] + "px", l.style.top = o[0] + "px", e.position.fixed || (l.style.left = window.pageXOffset + o[3] + "px", l.style.top = window.pageYOffset + o[0] + "px")) : (l.style.width = n.clientWidth - o[1] - o[3] + "px", l.style.height = n.clientHeight - o[0] - o[2] + "px", l.style.left = o[3] + "px", l.style.top = o[0] + "px"), l.removeMinimizedReplacement(), l.status = "maximized", l.setControls([".jsPanel-btn-maximize", ".jsPanel-btn-smallifyrev"]), jsPanel.front(l), document.dispatchEvent(m), document.dispatchEvent(d), e.onstatuschange && jsPanel.processCallbacks(l, e.onstatuschange, "every"), t && t.call(l, l), e.onmaximized && jsPanel.processCallbacks(l, e.onmaximized, "every"), l;
        }, l.minimize = function (t) {
          if ("minimized" === l.status) return l;if (e.onbeforeminimize && e.onbeforeminimize.length > 0 && !jsPanel.processCallbacks(l, e.onbeforeminimize)) return l;if (document.dispatchEvent(g), !document.getElementById("jsPanel-replacement-container")) {
            var _e21 = document.createElement("div");_e21.id = "jsPanel-replacement-container", document.body.append(_e21);
          }if (l.style.left = "-9999px", l.statusBefore = l.status, l.status = "minimized", document.dispatchEvent(u), document.dispatchEvent(d), e.onstatuschange && jsPanel.processCallbacks(l, e.onstatuschange, "every"), e.minimizeTo) {
            var _t15 = l.createMinimizedReplacement();var _n9 = void 0,
                _o5 = void 0,
                _a6 = void 0;"default" === e.minimizeTo ? document.getElementById("jsPanel-replacement-container").append(_t15) : "parentpanel" === e.minimizeTo ? (_n9 = (_a6 = (_o5 = l.closest(".jsPanel-content").parentElement).querySelectorAll(".jsPanel-minimized-box"))[_a6.length - 1]).append(_t15) : "parent" === e.minimizeTo ? ((_n9 = (_o5 = l.parentElement).querySelector(".jsPanel-minimized-container")) || ((_n9 = document.createElement("div")).className = "jsPanel-minimized-container", _o5.append(_n9)), _n9.append(_t15)) : document.querySelector(e.minimizeTo).append(_t15);
          }return t && t.call(l, l), e.onminimized && jsPanel.processCallbacks(l, e.onminimized, "every"), l;
        }, l.normalize = function (t) {
          return "normalized" === l.status ? l : e.onbeforenormalize && e.onbeforenormalize.length > 0 && !jsPanel.processCallbacks(l, e.onbeforenormalize) ? l : (document.dispatchEvent(p), l.style.width = l.currentData.width, l.style.height = l.currentData.height, l.style.left = l.currentData.left, l.style.top = l.currentData.top, l.removeMinimizedReplacement(), l.status = "normalized", l.setControls([".jsPanel-btn-normalize", ".jsPanel-btn-smallifyrev"]), jsPanel.front(l), document.dispatchEvent(h), document.dispatchEvent(d), e.onstatuschange && jsPanel.processCallbacks(l, e.onstatuschange, "every"), t && t.call(l, l), e.onnormalized && jsPanel.processCallbacks(l, e.onnormalized, "every"), l);
        }, l.overlaps = function (e) {
          return jsPanel.overlaps(l, e);
        }, l.removeMinimizedReplacement = function () {
          var e = document.getElementById(l.id + "-min");return e && e.parentElement.removeChild(e), l;
        }, l.reposition = function () {
          for (var _len = arguments.length, t = Array(_len), _key = 0; _key < _len; _key++) {
            t[_key] = arguments[_key];
          }

          var n = void 0,
              o = e.position,
              a = !0;return t.forEach(function (e) {
            "string" == typeof e || "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? o = e : "boolean" == typeof e ? a = e : "function" == typeof e && (n = e);
          }), jsPanel.position(l, o), a && l.saveCurrentPosition(), n && n.call(l, l), l;
        }, l.repositionOnSnap = function (t) {
          var n = "0",
              o = "0";var a = jsPanel.pOcontainment(e.dragit.containment);e.dragit.snap.containment && ("left-top" === t ? (n = a[3], o = a[0]) : "right-top" === t ? (n = -a[1], o = a[0]) : "right-bottom" === t ? (n = -a[1], o = -a[2]) : "left-bottom" === t ? (n = a[3], o = -a[2]) : "center-top" === t ? (n = a[3] / 2 - a[1] / 2, o = a[0]) : "center-bottom" === t ? (n = a[3] / 2 - a[1] / 2, o = -a[2]) : "left-center" === t ? (n = a[3], o = a[0] / 2 - a[2] / 2) : "right-center" === t && (n = -a[1], o = a[0] / 2 - a[2] / 2)), jsPanel.position(l, t), jsPanel.setStyle(l, { left: "calc(" + l.style.left + " + " + n + "px)", top: "calc(" + l.style.top + " + " + o + "px)" });
        }, l.resize = function () {
          for (var _len2 = arguments.length, e = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
          }

          var t = window.getComputedStyle(l);var n = void 0,
              o = { width: t.width, height: t.height },
              a = !0;e.forEach(function (e) {
            "string" == typeof e ? o = e : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? o = (0, _assign2.default)(o, e) : "boolean" == typeof e ? a = e : "function" == typeof e && (n = e);
          });var i = jsPanel.pOsize(l, o);return l.style.width = i.width, l.style.height = i.height, a && l.saveCurrentDimensions(), n && n.call(l, l), l;
        }, l.resizeit = function (e) {
          var t = l.querySelectorAll(".jsPanel-resizeit-handle");return "disable" === e ? t.forEach(function (e) {
            e.style.pointerEvents = "none";
          }) : t.forEach(function (e) {
            e.style.pointerEvents = "auto";
          }), l;
        }, l.saveCurrentDimensions = function () {
          var e = window.getComputedStyle(l);l.currentData.width = e.width, "normalized" === l.status && (l.currentData.height = e.height);
        }, l.saveCurrentPosition = function () {
          var e = window.getComputedStyle(l);l.currentData.left = e.left, l.currentData.top = e.top;
        }, l.setControls = function (e, t) {
          return l.header.querySelectorAll(".jsPanel-btn").forEach(function (e) {
            e.style.display = "block";
          }), e.forEach(function (e) {
            var t = l.controlbar.querySelector(e);t && (t.style.display = "none");
          }), t && t.call(l, l), l;
        }, l.setControlStatus = function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "enable";
          var n = arguments[2];
          if ("disable" === t) {
            if ("removed" !== l.getAttribute("data-btn" + e)) {
              l.setAttribute("data-btn" + e, "disabled");var _t16 = l.controlbar.querySelector(".jsPanel-btn-" + e);_t16.style.pointerEvents = "none", _t16.style.opacity = .4, _t16.style.cursor = "default";
            }
          } else if ("enable" === t) {
            if ("removed" !== l.getAttribute("data-btn" + e)) {
              l.setAttribute("data-btn" + e, "enabled");var _t17 = l.controlbar.querySelector(".jsPanel-btn-" + e);_t17.style.pointerEvents = "auto", _t17.style.opacity = 1, _t17.style.cursor = "pointer";
            }
          } else if ("remove" === t) {
            var _t18 = l.controlbar.querySelector(".jsPanel-btn-" + e);l.controlbar.removeChild(_t18), l.setAttribute("data-btn" + e, "removed");
          }return n && n.call(l, l), l;
        }, l.setHeaderControls = function (t) {
          var n = ["close", "maximize", "normalize", "minimize", "smallify", "smallifyrev"],
              o = e.headerControls;return "string" == typeof o ? "none" === o ? n.forEach(function (e) {
            l.setControlStatus(e, "remove");
          }) : "closeonly" === o && n.forEach(function (e) {
            "close" !== e && l.setControlStatus(e, "remove");
          }) : n.forEach(function (e) {
            o[e] && l.setControlStatus(e, o[e]);
          }), t && t.call(l, l), l;
        }, l.setHeaderLogo = function (e, t) {
          var n = [l.headerlogo],
              o = document.querySelector("#" + l.id + "-min");return o && n.push(o.querySelector(".jsPanel-headerlogo")), "string" == typeof e ? "<" !== e.substr(0, 1) ? n.forEach(function (t) {
            jsPanel.emptyNode(t);var n = document.createElement("img");n.src = e, t.append(n);
          }) : n.forEach(function (t) {
            t.innerHTML = e;
          }) : n.forEach(function (t) {
            jsPanel.emptyNode(t), t.append(e);
          }), n.forEach(function (e) {
            e.querySelectorAll("img").forEach(function (e) {
              e.style.maxHeight = getComputedStyle(l.headerbar).height;
            });
          }), t && t.call(l, l), l;
        }, l.setHeaderRemove = function (e) {
          return l.removeChild(l.header), l.content.classList.add("jsPanel-content-noheader"), ["close", "maximize", "normalize", "minimize", "smallify", "smallifyrev"].forEach(function (e) {
            l.setAttribute("data-btn" + e, "removed");
          }), e && e.call(l, l), l;
        }, l.setHeaderTitle = function (e, t) {
          var n = [l.headertitle],
              o = document.querySelector("#" + l.id + "-min");return o && n.push(o.querySelector(".jsPanel-title")), "string" == typeof e ? n.forEach(function (t) {
            t.innerHTML = e;
          }) : "function" == typeof e ? n.forEach(function (t) {
            jsPanel.emptyNode(t), t.innerHTML = e();
          }) : n.forEach(function (t) {
            jsPanel.emptyNode(t), t.append(e);
          }), t && t.call(l, l), l;
        }, l.setIconfont = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;
          var n = arguments[2];
          if (!1 !== e) {
            var _n10 = void 0,
                _o6 = void 0;if ("bootstrap" === e || "glyphicon" === e) _n10 = ["glyphicon glyphicon-remove", "glyphicon glyphicon-fullscreen", "glyphicon glyphicon-resize-full", "glyphicon glyphicon-minus", "glyphicon glyphicon-chevron-down", "glyphicon glyphicon-chevron-up"];else if ("fa" === e || "far" === e || "fal" === e || "fas" === e) _n10 = [e + " fa-window-close", e + " fa-window-maximize", e + " fa-window-restore", e + " fa-window-minimize", e + " fa-chevron-down", e + " fa-chevron-up"];else if ("material-icons" === e) _n10 = [e, e, e, e, e, e], _o6 = ["close", "fullscreen", "fullscreen_exit", "call_received", "expand_more", "expand_less"], t.controlbar.querySelectorAll(".jsPanel-btn").forEach(function (e) {
              e.style.padding = "6px 0 8px 0";
            });else {
              if (!Array.isArray(e)) return t;_n10 = ["custom-control-icon " + e[5], "custom-control-icon " + e[4], "custom-control-icon " + e[3], "custom-control-icon " + e[2], "custom-control-icon " + e[1], "custom-control-icon " + e[0]];
            }t.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(function (e) {
              jsPanel.emptyNode(e).innerHTML = "<span></span>";
            }), Array.prototype.slice.call(t.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach(function (t, a) {
              t.className = _n10[a], "material-icons" === e && (t.textContent = _o6[a]);
            });
          }return n && n.call(t, t), t;
        }, l.setRtl = function () {
          [l.header, l.headerbar, l.titlebar, l.controlbar, l.headertoolbar, l.footer].forEach(function (e) {
            e.classList.add("jsPanel-rtl");
          }), [l.headertitle, l.headertoolbar, l.content, l.footer].forEach(function (t) {
            t.dir = "rtl", e.rtl.lang && (t.lang = e.rtl.lang);
          });
        }, l.setSize = function () {
          if (e.panelSize) {
            var _t19 = jsPanel.pOsize(l, e.panelSize);l.style.width = _t19.width, l.style.height = _t19.height;
          } else if (e.contentSize) {
            var _t20 = jsPanel.pOsize(l, e.contentSize);l.content.style.width = _t20.width, l.content.style.height = _t20.height, l.style.width = _t20.width, l.content.style.width = "100%";
          }return l;
        }, l.setTheme = function () {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.theme;
          var n = arguments[1];
          if (l.clearTheme(), "none" === t) return l.style.backgroundColor = "#fff", l;var o = l.getThemeDetails(t);return o.bs ? l.applyBootstrapTheme(o) : -1 !== jsPanel.themes.indexOf(o.color) ? l.applyBuiltInTheme(o) : l.applyArbitraryTheme(o), e.border ? l.applyThemeBorder(o) : (l.style.borderWidth = "", l.style.borderStyle = "", l.style.borderColor = ""), n && n.call(l, l), l;
        }, l.smallify = function (t) {
          if ("smallified" === l.status || "smallifiedmax" === l.status) return l;if (e.onbeforesmallify && e.onbeforesmallify.length > 0 && !jsPanel.processCallbacks(l, e.onbeforesmallify)) return l;document.dispatchEvent(b), "normalized" === l.status && l.saveCurrentDimensions(), l.style.overflow = "hidden";var n = window.getComputedStyle(l),
              o = parseFloat(window.getComputedStyle(l.headerbar).height);l.style.height = parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth) + o + "px", "normalized" === l.status ? (l.setControls([".jsPanel-btn-normalize", ".jsPanel-btn-smallify"]), l.status = "smallified", document.dispatchEvent(y), document.dispatchEvent(d), e.onstatuschange && jsPanel.processCallbacks(l, e.onstatuschange, "every")) : "maximized" === l.status && (l.setControls([".jsPanel-btn-maximize", ".jsPanel-btn-smallify"]), l.status = "smallifiedmax", document.dispatchEvent(w), document.dispatchEvent(d), e.onstatuschange && jsPanel.processCallbacks(l, e.onstatuschange, "every"));var a = l.querySelectorAll(".jsPanel-minimized-box");return a[a.length - 1].style.display = "none", t && t.call(l, l), e.onsmallified && jsPanel.processCallbacks(l, e.onsmallified, "every"), l;
        }, l.unsmallify = function (t) {
          if ("smallified" === l.status || "smallifiedmax" === l.status) {
            if (e.onbeforeunsmallify && e.onbeforeunsmallify.length > 0 && !jsPanel.processCallbacks(l, e.onbeforeunsmallify)) return l;document.dispatchEvent(j), l.style.overflow = "visible", jsPanel.front(l), "smallified" === l.status ? (l.style.height = l.currentData.height, l.setControls([".jsPanel-btn-normalize", ".jsPanel-btn-smallifyrev"]), l.status = "normalized", document.dispatchEvent(h), document.dispatchEvent(d), e.onstatuschange && jsPanel.processCallbacks(l, e.onstatuschange, "every")) : "smallifiedmax" === l.status ? l.maximize() : "minimized" === l.status && l.normalize();var _n11 = l.querySelectorAll(".jsPanel-minimized-box");_n11[_n11.length - 1].style.display = "flex", t && t.call(l, l), e.onunsmallified && jsPanel.processCallbacks(l, e.onunsmallified, "every");
          }return l;
        }, l.id = e.id, l.classList.add("jsPanel-" + e.paneltype), "standard" === e.paneltype && (l.style.zIndex = this.zi.next()), a.append(l), l.front(!1, !1), l.setTheme(e.theme), e.boxShadow && l.classList.add("jsPanel-depth-" + e.boxShadow), e.header) {
          if (e.headerLogo && l.setHeaderLogo(e.headerLogo), l.setIconfont(e.iconfont), l.setHeaderTitle(e.headerTitle), l.setHeaderControls(), "auto-show-hide" === e.header) {
            var _t21 = void 0,
                _n12 = e.theme.split("-"),
                _o7 = "jsPanel-depth-" + e.boxShadow,
                _a7 = "bg-";_n12[1] && (_a7 += _n12[1]), _n12[2] && (_t21 = _n12[1] + "-color-" + _n12[2]), l.header.style.opacity = 0, "bootstrap" !== _n12[0] && "mdb" !== _n12[0] || (this.remClass(l, _a7), "mdb" === _n12[0] && this.remClass(l, _t21)), l.style.backgroundColor = "transparent", this.remClass(l, _o7), this.setClass(l.content, _o7), l.header.addEventListener("mouseenter", function () {
              l.header.style.opacity = 1, "bootstrap" !== _n12[0] && "mdb" !== _n12[0] || (jsPanel.setClass(l, _a7), "mdb" === _n12[0] && jsPanel.setClass(l, _t21)), jsPanel.setClass(l, _o7), jsPanel.remClass(l.content, _o7);
            }), l.header.addEventListener("mouseleave", function () {
              l.header.style.opacity = 0, "bootstrap" !== _n12[0] && "mdb" !== _n12[0] || (jsPanel.remClass(l, _a7), "mdb" === _n12[0] && jsPanel.remClass(l, _t21)), jsPanel.remClass(l, _o7), jsPanel.setClass(l.content, _o7);
            });
          }
        } else l.setHeaderRemove();if (e.headerToolbar && l.addToolbar(l.headertoolbar, e.headerToolbar), e.footerToolbar && l.addToolbar(l.footer, e.footerToolbar), e.borderRadius && l.borderRadius(e.borderRadius), e.content && ("function" == typeof e.content ? e.content.call(l, l) : "string" == typeof e.content ? l.content.innerHTML = e.content : l.content.append(e.content)), e.contentAjax && this.ajax(l, e.contentAjax), e.contentFetch && this.fetch(l), e.contentOverflow) {
          var _t22 = e.contentOverflow.split(" ");1 === _t22.length ? l.content.style.overflow = _t22[0] : 2 === _t22.length && (l.content.style.overflowX = _t22[0], l.content.style.overflowY = _t22[1]);
        }if (e.rtl && l.setRtl(), l.setSize(), l.status = "normalized", e.position || "cursor" !== e.position ? this.position(l, e.position) : l.style.opacity = 1, document.dispatchEvent(h), l.calcSizeFactors(), e.animateIn && (l.addEventListener("animationend", function () {
          _this.remClass(l, e.animateIn);
        }), this.setClass(l, e.animateIn)), e.syncMargins) {
          var _t23 = this.pOcontainment(e.maximizedMargin);e.dragit && (e.dragit.containment = _t23, e.dragit.snap && (e.dragit.snap.containment = !0)), e.resizeit && (e.resizeit.containment = _t23);
        }if (e.dragit ? (this.dragit(l, e.dragit), l.addEventListener("jspaneldragstop", function (e) {
          e.detail === l.id && l.calcSizeFactors();
        }, !1)) : l.titlebar.style.cursor = "default", e.resizeit) {
          var _t24 = void 0;this.resizeit(l, e.resizeit), l.addEventListener("jspanelresizestart", function (e) {
            e.detail === l.id && (_t24 = l.status);
          }, !1), l.addEventListener("jspanelresizestop", function (n) {
            n.detail === l.id && ("smallified" === _t24 || "smallifiedmax" === _t24 || "maximized" === _t24) && parseFloat(l.style.height) > parseFloat(window.getComputedStyle(l.header).height) && (l.setControls([".jsPanel-btn-normalize", ".jsPanel-btn-smallifyrev"]), l.status = "normalized", document.dispatchEvent(h), document.dispatchEvent(d), e.onstatuschange && jsPanel.processCallbacks(l, e.onstatuschange, "every"), l.calcSizeFactors());
          }, !1);
        }if (l.saveCurrentDimensions(), l.saveCurrentPosition(), e.setStatus) {
          var _t25 = e.setStatus;if ("smallifiedmax" === _t25) l.maximize().smallify();else if ("smallified" === _t25) l.smallify();else {
            var _e22 = _t25.substr(0, _t25.length - 1);l[_e22]();
          }
        }return e.autoclose && (n = window.setTimeout(function () {
          l && l.close();
        }, e.autoclose)), this.pointerdown.forEach(function (t) {
          l.addEventListener(t, function (t) {
            t.target.closest(".jsPanel-btn-close") || t.target.closest(".jsPanel-btn-minimize") || "standard" !== e.paneltype || l.front();
          }, !1);
        }), e.onwindowresize && window.addEventListener("resize", function (t) {
          if (t.target === window) {
            var _n13 = e.onwindowresize,
                _o8 = l.status,
                _a8 = window.getComputedStyle(l.parentElement);"maximized" === _o8 && !0 === _n13 ? l.maximize() : "normalized" !== _o8 && "smallified" !== _o8 && "maximized" !== _o8 || ("function" == typeof _n13 ? _n13.call(l, t, l) : (l.style.left = function () {
              var t = void 0;return (t = e.container === document.body ? (document.body.clientWidth - parseFloat(l.style.width)) * l.hf : (parseFloat(_a8.width) - parseFloat(l.style.width)) * l.hf) <= 0 ? 0 : t + "px";
            }(), l.style.top = function () {
              var t = void 0;return (t = e.container === document.body ? (window.innerHeight - parseFloat(l.currentData.height)) * l.vf : (parseFloat(_a8.height) - parseFloat(l.currentData.height)) * l.vf) <= 0 ? 0 : t + "px";
            }()));
          }
        }, !1), this.pointerup.forEach(function (e) {
          l.addEventListener(e, function () {
            l.content.style.pointerEvents = "inherit";
          });
        }), this.globalCallbacks && (Array.isArray(this.globalCallbacks) ? this.globalCallbacks.forEach(function (e) {
          e.call(l, l);
        }) : this.globalCallbacks.call(l, l)), e.callback && (Array.isArray(e.callback) ? e.callback.forEach(function (e) {
          e.call(l, l);
        }) : e.callback.call(l, l)), t && t.call(l, l), document.dispatchEvent(i), l;
      }
    };

    /***/
  },

  /***/"5ca1":
  /***/function ca1(module, exports, __webpack_require__) {

    var global = __webpack_require__("7726");
    var core = __webpack_require__("8378");
    var hide = __webpack_require__("32e9");
    var redefine = __webpack_require__("2aba");
    var ctx = __webpack_require__("9b43");
    var PROTOTYPE = 'prototype';

    var $export = function $export(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        // extend global
        if (target) redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };
    global.core = core;
    // type bitmap
    $export.F = 1; // forced
    $export.G = 2; // global
    $export.S = 4; // static
    $export.P = 8; // proto
    $export.B = 16; // bind
    $export.W = 32; // wrap
    $export.U = 64; // safe
    $export.R = 128; // real proto method for `library`
    module.exports = $export;

    /***/
  },

  /***/"613b":
  /***/function b(module, exports, __webpack_require__) {

    var shared = __webpack_require__("5537")('keys');
    var uid = __webpack_require__("ca5a");
    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };

    /***/
  },

  /***/"626a":
  /***/function a(module, exports, __webpack_require__) {

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = __webpack_require__("2d95");
    // eslint-disable-next-line no-prototype-builtins
    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };

    /***/
  },

  /***/"6821":
  /***/function _(module, exports, __webpack_require__) {

    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = __webpack_require__("626a");
    var defined = __webpack_require__("be13");
    module.exports = function (it) {
      return IObject(defined(it));
    };

    /***/
  },

  /***/"69a8":
  /***/function a8(module, exports) {

    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

    /***/
  },

  /***/"6a99":
  /***/function a99(module, exports, __webpack_require__) {

    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = __webpack_require__("d3f4");
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    /***/
  },

  /***/"7333":
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    // 19.1.2.1 Object.assign(target, source, ...)

    var getKeys = __webpack_require__("0d58");
    var gOPS = __webpack_require__("2621");
    var pIE = __webpack_require__("52a7");
    var toObject = __webpack_require__("4bf8");
    var IObject = __webpack_require__("626a");
    var $assign = _assign2.default;

    // should work with symbols and should have deterministic property order (V8 bug)
    module.exports = !$assign || __webpack_require__("79e5")(function () {
      var A = {};
      var B = {};
      // eslint-disable-next-line no-undef
      var S = (0, _symbol2.default)();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || (0, _keys2.default)($assign({}, B)).join('') != K;
    }) ? function assign(target, source) {
      // eslint-disable-line no-unused-vars
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
        }
      }return T;
    } : $assign;

    /***/
  },

  /***/"7726":
  /***/function _(module, exports) {

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


    /***/
  },

  /***/"77f1":
  /***/function f1(module, exports, __webpack_require__) {

    var toInteger = __webpack_require__("4588");
    var max = Math.max;
    var min = Math.min;
    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };

    /***/
  },

  /***/"79e5":
  /***/function e5(module, exports) {

    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };

    /***/
  },

  /***/"8378":
  /***/function _(module, exports) {

    var core = module.exports = { version: '2.5.7' };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


    /***/
  },

  /***/"86cc":
  /***/function cc(module, exports, __webpack_require__) {

    var anObject = __webpack_require__("cb7c");
    var IE8_DOM_DEFINE = __webpack_require__("c69a");
    var toPrimitive = __webpack_require__("6a99");
    var dP = _defineProperty2.default;

    exports.f = __webpack_require__("9e1e") ? _defineProperty2.default : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {/* empty */}
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    /***/
  },

  /***/"96cf":
  /***/function cf(module, exports) {

    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    !function (global) {
      "use strict";

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined; // More compressible than void 0.
      var $Symbol = typeof _symbol2.default === "function" ? _symbol2.default : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      var inModule = (typeof module === 'undefined' ? 'undefined' : (0, _typeof4.default)(module)) === "object";
      var runtime = global.regeneratorRuntime;
      if (runtime) {
        if (inModule) {
          // If regeneratorRuntime is defined globally and we're in a module,
          // make the exports object identical to regeneratorRuntime.
          module.exports = runtime;
        }
        // Don't bother evaluating the rest of this file if the runtime was
        // already defined globally.
        return;
      }

      // Define the runtime globally (as expected by generated code) as either
      // module.exports (if we're in a module) or a new, empty object.
      runtime = global.regeneratorRuntime = inModule ? module.exports : {};

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = (0, _create2.default)(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);

        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);

        return generator;
      }
      runtime.wrap = wrap;

      // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";

      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {};

      // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}

      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {};
      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = _getPrototypeOf2.default;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = (0, _create2.default)(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

      // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg);
          };
        });
      }

      runtime.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      runtime.mark = function (genFun) {
        if (_setPrototypeOf2.default) {
          (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        genFun.prototype = (0, _create2.default)(Gp);
        return genFun;
      };

      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      runtime.awrap = function (arg) {
        return { __await: arg };
      };

      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof4.default)(value)) === "object" && hasOwn.call(value, "__await")) {
              return _promise2.default.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return _promise2.default.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration. If the Promise is rejected, however, the
              // result for this iteration will be rejected with the same
              // reason. Note that rejections of yielded Promises are not
              // thrown back into the generator function, as is the case
              // when an awaited Promise is rejected. This difference in
              // behavior between yield and await is important, because it
              // allows the consumer to decide what to do with the yielded
              // rejection (swallow it and continue, manually .throw it back
              // into the generator, abandon iteration, whatever). With
              // await, by contrast, there is no opportunity to examine the
              // rejection reason outside the generator function, so the
              // only option is to throw it from the await expression, and
              // let the generator function handle the exception.
              result.value = unwrapped;
              resolve(result);
            }, reject);
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new _promise2.default(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }

        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };
      runtime.AsyncIterator = AsyncIterator;

      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      runtime.async = function (innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

        return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;

        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }

            // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;

            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }

      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            if (delegate.iterator.return) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value;

          // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc;

          // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        }

        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
      }

      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp);

      Gp[toStringTagSymbol] = "Generator";

      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      runtime.keys = function (object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();

        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          }

          // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined;
              next.done = true;

              return next;
            };

            return next.next = next;
          }
        }

        // Return an iterator with no values.
        return { next: doneResult };
      }
      runtime.values = values;

      function doneResult() {
        return { value: undefined, done: true };
      }

      Context.prototype = {
        constructor: Context,

        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;

          this.method = "next";
          this.arg = undefined;

          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined;
              }
            }
          }
        },

        stop: function stop() {
          this.done = true;

          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },

        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },

        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },

        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },

        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },

        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }

          // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error("illegal catch attempt");
        },

        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
          }

          return ContinueSentinel;
        }
      };
    }(
    // In sloppy mode, unbound `this` refers to the global object, fallback to
    // Function constructor if we're in global strict mode. That is sadly a form
    // of indirect eval which violates Content Security Policy.
    function () {
      return this;
    }() || Function("return this")());

    /***/
  },

  /***/"9b43":
  /***/function b43(module, exports, __webpack_require__) {

    // optional / simple context binding
    var aFunction = __webpack_require__("d8e8");
    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a);
          };
        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function () /* ...args */{
        return fn.apply(that, arguments);
      };
    };

    /***/
  },

  /***/"9def":
  /***/function def(module, exports, __webpack_require__) {

    // 7.1.15 ToLength
    var toInteger = __webpack_require__("4588");
    var min = Math.min;
    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };

    /***/
  },

  /***/"9e1e":
  /***/function e1e(module, exports, __webpack_require__) {

    // Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__("79e5")(function () {
      return Object.defineProperty({}, 'a', { get: function get() {
          return 7;
        } }).a != 7;
    });

    /***/
  },

  /***/"be13":
  /***/function be13(module, exports) {

    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };

    /***/
  },

  /***/"c366":
  /***/function c366(module, exports, __webpack_require__) {

    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = __webpack_require__("6821");
    var toLength = __webpack_require__("9def");
    var toAbsoluteIndex = __webpack_require__("77f1");
    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
          // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
        }return !IS_INCLUDES && -1;
      };
    };

    /***/
  },

  /***/"c69a":
  /***/function c69a(module, exports, __webpack_require__) {

    module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
      return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function get() {
          return 7;
        } }).a != 7;
    });

    /***/
  },

  /***/"ca5a":
  /***/function ca5a(module, exports) {

    var id = 0;
    var px = Math.random();
    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

    /***/
  },

  /***/"cb7c":
  /***/function cb7c(module, exports, __webpack_require__) {

    var isObject = __webpack_require__("d3f4");
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };

    /***/
  },

  /***/"ce10":
  /***/function ce10(module, exports, __webpack_require__) {

    var has = __webpack_require__("69a8");
    var toIObject = __webpack_require__("6821");
    var arrayIndexOf = __webpack_require__("c366")(false);
    var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

    module.exports = function (object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) {
        if (key != IE_PROTO) has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys
      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      }return result;
    };

    /***/
  },

  /***/"d3f4":
  /***/function d3f4(module, exports) {

    module.exports = function (it) {
      return (typeof it === 'undefined' ? 'undefined' : (0, _typeof4.default)(it)) === 'object' ? it !== null : typeof it === 'function';
    };

    /***/
  },

  /***/"d8e8":
  /***/function d8e8(module, exports) {

    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };

    /***/
  },

  /***/"e11e":
  /***/function e11e(module, exports) {

    // IE 8- don't enum bug keys
    module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

    /***/
  },

  /***/"f751":
  /***/function f751(module, exports, __webpack_require__) {

    // 19.1.3.1 Object.assign(target, source)
    var $export = __webpack_require__("5ca1");

    $export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });

    /***/
  },

  /***/"fb15":
  /***/function fb15(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      var i;
      if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
        __webpack_require__.p = i[1]; // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */var setPublicPath = null;

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08414a23-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/JsPanel.vue?vue&type=template&id=d2fa1fb4&
    var render = function render() {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.visible ? _c('div', [_vm._t("default"), _vm._t("headerToolbar")], 2) : _vm._e();
    };
    var staticRenderFns = [];

    // CONCATENATED MODULE: ./src/JsPanel.vue?vue&type=template&id=d2fa1fb4&

    // EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
    var runtime = __webpack_require__("96cf");

    // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }

      if (info.done) {
        resolve(value);
      } else {
        _promise2.default.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new _promise2.default(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }

          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }

          _next(undefined);
        });
      };
    }
    // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
    var es6_object_assign = __webpack_require__("f751");

    // EXTERNAL MODULE: ./node_modules/jspanel4/es6module/jspanel.min.js
    var jspanel_min = __webpack_require__("5985");

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/JsPanel.vue?vue&type=script&lang=js&


    //
    //
    //
    //
    //
    //
    //
    //
    //
    // import 'jspanel4/dist/jspanel.min.css'

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.component('JsPanel', component.exports);
    }

    /* harmony default export */var JsPanelvue_type_script_lang_js_ = {
      name: 'JsPanel',
      props: {
        visible: {
          type: Boolean,
          default: false
        },
        options: {
          type: Object,
          required: true,
          default: function _default() {
            return {};
          }
        }
      },
      computed: {
        panelOptions: function panelOptions() {
          return (0, _assign2.default)({
            onclosed: this.close
          }, this.options);
        }
      },
      watch: {
        visible: function visible(isVisible) {
          if (isVisible) {
            this.createPanel();
          }
        }
      },
      mounted: function mounted() {
        if (this.visible) {
          this.createPanel();
        }
      },
      methods: {
        createPanel: function () {
          var _createPanel = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator2.default.mark(function _callee() {
            var options;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.$nextTick();

                  case 2:
                    options = (0, _assign2.default)({
                      content: this.$slots.default[0].elm
                    }, this.panelOptions);

                    if (this.$slots.headerToolbar) {
                      options = (0, _assign2.default)({
                        headerToolbar: this.$slots.headerToolbar[0].elm
                      }, options);
                    }

                    jspanel_min["a" /* jsPanel */].create(options);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createPanel() {
            return _createPanel.apply(this, arguments);
          };
        }(),
        close: function close() {
          this.$emit('close');
          this.$emit('update:visible', false);
        }
      }
    };
    // CONCATENATED MODULE: ./src/JsPanel.vue?vue&type=script&lang=js&
    /* harmony default export */var src_JsPanelvue_type_script_lang_js_ = JsPanelvue_type_script_lang_js_;
    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
    shadowMode /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      // render functions
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true;
      }

      // scopedId
      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId;
      }

      var hook;
      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function () {
          injectStyles.call(this, this.$root.$options.shadowRoot);
        } : injectStyles;
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook;
          // register for functioal component in vue file
          var originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return {
        exports: scriptExports,
        options: options
      };
    }

    // CONCATENATED MODULE: ./src/JsPanel.vue


    /* normalize component */

    var JsPanel_component = normalizeComponent(src_JsPanelvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

    JsPanel_component.options.__file = "JsPanel.vue";
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.component('JsPanel', JsPanel_component.exports);
    }
    /* harmony default export */var JsPanel = JsPanel_component.exports;
    // CONCATENATED MODULE: ./src/index.js
    // Export components individually

    // What should happen if the user installs the library as a plugin

    function install(Vue) {
      Vue.component('JsPanel', JsPanel);
    } // Export the library as a plugin


    /* harmony default export */var src = {
      install: install
    };
    // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
    /* concated harmony reexport JsPanel */__webpack_require__.d(__webpack_exports__, "JsPanel", function () {
      return JsPanel;
    });

    /* harmony default export */var entry_lib = __webpack_exports__["default"] = src;

    /***/
  }

  /******/ });
//# sourceMappingURL=index.common.js.map
