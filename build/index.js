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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Div = __webpack_require__(1);

Object.defineProperty(exports, 'Div', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Div).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n\n  ', '\n\n  align-self: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: ', ';\n\n  ', '\n\n  align-self: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        flex-direction: ', ';\n        flex-wrap: ', ';\n        justify-content: ', ';\n        align-items: ', ';\n        align-content: ', ';\n      '], ['\n        flex-direction: ', ';\n        flex-wrap: ', ';\n        justify-content: ', ';\n        align-items: ', ';\n        align-content: ', ';\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['flex: ', ';'], ['flex: ', ';']),
    _templateObject4 = _taggedTemplateLiteral(['width: ', ';'], ['width: ', ';']),
    _templateObject5 = _taggedTemplateLiteral(['height: ', ';'], ['height: ', ';']),
    _templateObject6 = _taggedTemplateLiteral(['min-width: ', ';'], ['min-width: ', ';']),
    _templateObject7 = _taggedTemplateLiteral(['min-height: ', ';'], ['min-height: ', ';']),
    _templateObject8 = _taggedTemplateLiteral(['max-width: ', ';'], ['max-width: ', ';']),
    _templateObject9 = _taggedTemplateLiteral(['max-height: ', ';'], ['max-height: ', ';']),
    _templateObject10 = _taggedTemplateLiteral(['min-height: 100vh;'], ['min-height: 100vh;']),
    _templateObject11 = _taggedTemplateLiteral(['margin: ', ';'], ['margin: ', ';']),
    _templateObject12 = _taggedTemplateLiteral(['padding: ', ';'], ['padding: ', ';']),
    _templateObject13 = _taggedTemplateLiteral(['z-index: ', ';'], ['z-index: ', ';']),
    _templateObject14 = _taggedTemplateLiteral(['width: ', '; height: ', ';'], ['width: ', '; height: ', ';']),
    _templateObject15 = _taggedTemplateLiteral(['pointer-events: none;'], ['pointer-events: none;']),
    _templateObject16 = _taggedTemplateLiteral(['background: ', ';'], ['background: ', ';']),
    _templateObject17 = _taggedTemplateLiteral(['background-image: url(', ');'], ['background-image: url(', ');']),
    _templateObject18 = _taggedTemplateLiteral(['\n    background-size: ', ';\n    background-position: center top;\n  '], ['\n    background-size: ', ';\n    background-position: center top;\n  ']),
    _templateObject19 = _taggedTemplateLiteral(['\n    position: ', ';\n\n    &::after {\n      content: "";\n      ', '\n      background: ', ';\n      opacity: 0.2;\n      pointer-events: none;\n    }\n  '], ['\n    position: ', ';\n\n    &::after {\n      content: "";\n      ', '\n      background: ', ';\n      opacity: 0.2;\n      pointer-events: none;\n    }\n  ']),
    _templateObject20 = _taggedTemplateLiteral(['\n    transition: opacity 0.3s;\n    ', '\n  '], ['\n    transition: opacity 0.3s;\n    ', '\n  ']);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;';

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.inline) {
    if (props.block) return 'inline-block';else if (props.flex === true) return 'inline-flex';else return 'inline';
  } else {
    if (props.flex === true) return 'flex';
    if (props.block) return 'block';
    return 'flex';
  }
}, function (props) {
  if (!props.block || !(props.inline && !props.flex)) {
    return (0, _styledComponents.css)(_templateObject2, function () {
      if (props.row) return 'row';
      if (props.rowReverse) return 'row-reverse';
      if (props.column) return 'column';
      if (props.columnReverse) return 'column-reverse';
      return 'row';
    }, props.wraps ? 'wrap' : 'nowrap', props.justifyContent || function () {
      if (props.justifyStart) return 'flex-start';
      if (props.justifyEnd) return 'flex-end';
      if (props.justifyCenter) return 'center';
      if (props.justifyBetween) return 'space-between';
      if (props.justifyAround) return 'space-around';
      if (props.justifyEvenly) return 'space-evenly';
      return 'flex-start';
    }, props.alignItems || function () {
      if (props.itemsStart) return 'flex-start';
      if (props.itemsEnd) return 'flex-end';
      if (props.itemsCenter) return 'center';
      if (props.itemsBaseline) return 'baseline';
      if (props.itemsStretch) return 'stretch';
      return 'stretch';
    }, props.alignContent || function () {
      if (props.contentStart) return 'flex-start';
      if (props.contentEnd) return 'flex-end';
      if (props.contentCenter) return 'center';
      if (props.contentBetween) return 'space-between';
      if (props.contentArouns) return 'space-around';
      if (props.contentStretch) return 'stretch';
      return 'stretch';
    });
  }
}, function (props) {
  return props.alignSelf || function () {
    if (props.selfAuto) return 'auto';
    if (props.selfStart) return 'flex-start';
    if (props.selfEnd) return 'flex-end';
    if (props.selfCenter) return 'center';
    if (props.selfBaseline) return 'baseline';
    if (props.selfStretch) return 'stretch';
    return 'auto';
  };
}, function (_ref) {
  var order = _ref.order;
  return (0, _utils.isAlphaNumeric)(order) && 'order: ' + order + ';';
}, function (_ref2) {
  var flexNone = _ref2.flexNone,
      flex = _ref2.flex;

  if (flexNone) return 'flex: none;';
  if ((0, _utils.isAlphaNumeric)(flex)) return (0, _styledComponents.css)(_templateObject3, flex);
}, function (_ref3) {
  var absolute = _ref3.absolute,
      relative = _ref3.relative;

  if (absolute) return 'position: absolute;';
  if (relative) return 'position: relative;';
}, _utils.createPosition, function (_ref4) {
  var width = _ref4.width;
  return width && (0, _styledComponents.css)(_templateObject4, (0, _utils.withUnit)(width));
}, function (_ref5) {
  var height = _ref5.height;
  return height && (0, _styledComponents.css)(_templateObject5, (0, _utils.withUnit)(height));
}, function (_ref6) {
  var minWidth = _ref6.minWidth;
  return minWidth && (0, _styledComponents.css)(_templateObject6, (0, _utils.withUnit)(minWidth));
}, function (_ref7) {
  var minHeight = _ref7.minHeight;
  return minHeight && (0, _styledComponents.css)(_templateObject7, (0, _utils.withUnit)(minHeight));
}, function (_ref8) {
  var maxWidth = _ref8.maxWidth;
  return maxWidth && (0, _styledComponents.css)(_templateObject8, (0, _utils.withUnit)(maxWidth));
}, function (_ref9) {
  var maxHeight = _ref9.maxHeight;
  return maxHeight && (0, _styledComponents.css)(_templateObject9, (0, _utils.withUnit)(maxHeight));
}, function (_ref10) {
  var fullHeight = _ref10.fullHeight;
  return fullHeight && (0, _styledComponents.css)(_templateObject10);
}, function (_ref11) {
  var margin = _ref11.margin,
      m = _ref11.m;
  return (margin || m) && (0, _styledComponents.css)(_templateObject11, (0, _utils.withUnit)(margin || m));
}, (0, _utils.createSpaces)('margin'), function (_ref12) {
  var padding = _ref12.padding,
      p = _ref12.p;
  return (padding || p) && (0, _styledComponents.css)(_templateObject12, (0, _utils.withUnit)(padding || p));
}, (0, _utils.createSpaces)('padding'), function (_ref13) {
  var z = _ref13.z;
  return (0, _utils.isAlphaNumeric)(z) && (0, _styledComponents.css)(_templateObject13, z);
}, _utils.createLists, function (_ref14) {
  var layer = _ref14.layer;
  return layer && layerStyles;
}, function (_ref15) {
  var square = _ref15.square;
  return square && (0, _styledComponents.css)(_templateObject14, (0, _utils.withUnit)(square), (0, _utils.withUnit)(square));
}, function (_ref16) {
  var clickable = _ref16.clickable;
  return clickable && 'cursor: pointer;';
}, function (_ref17) {
  var noPointerEvents = _ref17.noPointerEvents;
  return noPointerEvents && (0, _styledComponents.css)(_templateObject15);
}, function (_ref18) {
  var background = _ref18.background;
  return background && (0, _styledComponents.css)(_templateObject16, background);
}, function (_ref19) {
  var backgroundImage = _ref19.backgroundImage;
  return backgroundImage && (0, _styledComponents.css)(_templateObject17, backgroundImage);
}, function (_ref20) {
  var cover = _ref20.cover,
      contain = _ref20.contain;
  return (cover || contain) && (0, _styledComponents.css)(_templateObject18, cover ? 'cover' : 'contain');
}, function (props) {
  return props.overlay && (0, _styledComponents.css)(_templateObject19, props.absolute && 'absolute' || 'relative', layerStyles, props.overlay);
}, function (props) {
  return props.visible !== undefined && (0, _styledComponents.css)(_templateObject20, props.visible === false && 'opacity: 0;');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isNumber = exports.isNumber = function isNumber(value) {
  return typeof value === 'number';
};

var isString = exports.isString = function isString(value) {
  return typeof value === 'string';
};

var isAlphaNumeric = exports.isAlphaNumeric = function isAlphaNumeric(value) {
  return isString(value) || isNumber(value);
};

// Used to support number as size values in styled-components
var withUnit = exports.withUnit = function withUnit(value) {
  return isNumber(value) ? value + 'px' : value;
};

var directions = ['Left', 'Right', 'Top', 'Bottom'];

// Returns margin or padding shorthands ('mTop', 'pBottom' etc)
var createSpaces = exports.createSpaces = function createSpaces(type) {
  return function (props) {
    var result = '';

    directions.forEach(function (direction) {
      var property = props['' + type[0] + direction];

      if (property !== undefined) {
        result += type + '-' + direction.toLowerCase() + ': ' + withUnit(property) + ';';
      }
    });

    return result;
  };
};

// Returns position values ('top', 'left' etc)
var createPosition = exports.createPosition = function createPosition(props) {
  var result = '';

  directions.forEach(function (direction) {
    var property = props['' + direction.toLowerCase()];

    if (property !== undefined) {
      result += direction.toLowerCase() + ': ' + withUnit(property) + ';';
    }
  });

  return result;
};

// Creates list helpers ('listBottom' etc)
var createLists = exports.createLists = function createLists(props) {
  var result = '';

  directions.forEach(function (direction, index) {
    var property = props['list' + direction];

    if (property !== undefined) {
      var value = property === true ? '8px' : withUnit(property);
      result += '> *:not(:' + (index % 2 ? 'last' : 'first') + '-child) { margin-' + direction.toLowerCase() + ': ' + value + '; }';
    }
  });

  return result;
};

/***/ })
/******/ ]);