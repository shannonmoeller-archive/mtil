'use strict';

/**
 * Creates a function that will return a specific property of a given item.
 *
 * @type {Function}
 * @param {String} name
 * @return {Function(Any)}
 */
function get(name) {
	return function (item) {
		return item[name];
	};
}

module.exports = get;
