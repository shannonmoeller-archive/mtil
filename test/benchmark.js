'use strict';

var suite = require('benchmark').Suite,
	start = function () {
		if (process.browser) {
			console.log('---');
		}
	},
	cycle = function (event) {
		console.log(String(event.target));
	},
	complete = function () {
		console.log('Fastest:', this.filter('fastest').pluck('name').join());
		console.log('Slowest:', this.filter('slowest').pluck('name').join());
	};

module.exports = function (done) {
	return suite()
		.on('start', start)
		.on('cycle', cycle)
		.on('complete', complete)
		.on('complete', done.bind(null, null));
};
