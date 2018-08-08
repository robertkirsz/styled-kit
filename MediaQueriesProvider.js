module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=12)}([function(e,r,t){"use strict";e.exports=t(4)},function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("styled-components")},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(t(2)),o=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},i=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r},u=function(e){function r(){return o(this,r),i(this,e.apply(this,arguments))}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),r.prototype.render=function(){return n.Children.only(this.props.children)},r}(n.Component);r.AppContainer=u,r.hot=function(){return function(e){return e}},r.areComponentsEqual=function(e,r){return e===r},r.setConfig=function(){},r.cold=function(e){return e}},function(e,r){e.exports=require("prop-types")},,,,,,,function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(5),_propTypes2=_interopRequireDefault(_propTypes),_styledComponents=__webpack_require__(3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}!function(){var e=__webpack_require__(0).enterModule;e&&e(module)}();var getQueries=function(e){return e.reduce(function(e,r){return _extends({},e,_defineProperty({},r.name,function(){return(0,_styledComponents.css)(["@media only screen and ","{",";}"],r.value,_styledComponents.css.apply(void 0,arguments))}))},{})},MediaQueriesProvider=function(_Component){function MediaQueriesProvider(){var e,r,t;_classCallCheck(this,MediaQueriesProvider);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=t=_possibleConstructorReturn(this,(e=MediaQueriesProvider.__proto__||Object.getPrototypeOf(MediaQueriesProvider)).call.apply(e,[this].concat(o))),t.state={queries:getQueries(t.props.queries)},t.render=function(){return _react2.default.createElement(_styledComponents.ThemeProvider,_extends({theme:{queries:t.state.queries}},t.props))},_possibleConstructorReturn(t,r)}return _inherits(MediaQueriesProvider,_Component),_createClass(MediaQueriesProvider,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),MediaQueriesProvider}(_react.Component);MediaQueriesProvider.propTypes={queries:_propTypes2.default.arrayOf(_propTypes2.default.shape({name:_propTypes2.default.string.isRequired,value:_propTypes2.default.string.isRequired}))},MediaQueriesProvider.defaultProps={queries:[{name:"smallOnly",value:"(max-width: 639px)"},{name:"mediumUp",value:"(min-width: 640px)"},{name:"mediumDown",value:"(max-width: 1023px)"},{name:"largeUp",value:"(min-width: 1024px)"}]};var _default=MediaQueriesProvider;exports.default=_default,function(){var e=__webpack_require__(0).default,r=__webpack_require__(0).leaveModule;e&&(e.register(getQueries,"getQueries","/Users/robert/dev/styled-kit/src/providers/MediaQueriesProvider.js"),e.register(MediaQueriesProvider,"MediaQueriesProvider","/Users/robert/dev/styled-kit/src/providers/MediaQueriesProvider.js"),e.register(_default,"default","/Users/robert/dev/styled-kit/src/providers/MediaQueriesProvider.js"),r(module))}()}).call(this,__webpack_require__(1)(module))}]);