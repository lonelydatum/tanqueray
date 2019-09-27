(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var start = function start(x, time) {
	TweenLite.defaultEase = Power4.easeOut;
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.from('.product', time, { x: '-=' + x });

	tl.add('end', "-=.7");
	tl.from('.t1', time, { opacity: 0 }, 'end');

	tl.from('.legal', time, { opacity: 0 }, 'end');
};

module.exports = start;

},{}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsLondon_ginJs = require('../../_common/js/london_gin.js');

var _commonJsLondon_ginJs2 = _interopRequireDefault(_commonJsLondon_ginJs);

(0, _commonJsLondon_ginJs2["default"])(1000, 1.5);

TweenLite.from(".t2", 2, { opacity: 0, delay: 1.3 });

},{"../../_common/js/london_gin.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
