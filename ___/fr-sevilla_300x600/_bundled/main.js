(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var start = function start() {
	TweenLite.defaultEase = Power4.easeOut;
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	var time = 1.5;
	tl.add('end', 1);
	tl.from('.t1', time, { opacity: 0 }, 'end');
	tl.from('.legal', time, { opacity: 0 }, 'end');
};

module.exports = start;

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsSevillaJs = require('../../_common/js/sevilla.js');

var _commonJsSevillaJs2 = _interopRequireDefault(_commonJsSevillaJs);

var tl = new TimelineMax();
tl.add('leaf');
tl.from('.leaf.top', .9, { y: "-=100" }, 'leaf');
tl.from('.leaf.bottom', 1.2, { y: "+=100" }, 'leaf+=.2');

(0, _commonJsSevillaJs2['default'])();

},{"../../_common/js/sevilla.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
