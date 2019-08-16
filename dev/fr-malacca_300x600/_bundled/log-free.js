(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var start = function start(num) {
	TweenLite.defaultEase = Power4.easeOut;
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	var tl_leaf = new TimelineMax();
	tl_leaf.add('leaf');
	tl_leaf.from('.leaf_nw', 1, { y: '-=' + num, x: '-=' + num }, 'leaf');
	tl_leaf.from('.leaf_ne', 1, { y: '-=' + num, x: '+=' + num }, 'leaf');
	tl_leaf.from('.leaf_se', 1, { y: '+=' + num, x: '+=' + num }, 'leaf');

	var time = 1.5;
	tl.add('end', .6);
	tl.from('.t1', time, { opacity: 0 }, 'end');
	tl.from('.legal', time, { opacity: 0 }, 'end');
};

module.exports = start;

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsMalaccaJs = require('../../_common/js/malacca.js');

var _commonJsMalaccaJs2 = _interopRequireDefault(_commonJsMalaccaJs);

(0, _commonJsMalaccaJs2['default'])(120);

},{"../../_common/js/malacca.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
