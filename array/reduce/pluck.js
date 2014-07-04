'use strict';

function pluck(name) {
	return function (arr, item) {
		arr.push(item[name]);
		return arr;
	};
}

module.exports = pluck;
