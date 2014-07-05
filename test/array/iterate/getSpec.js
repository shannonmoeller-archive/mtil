'use strict';

var get = require('../../../array/iterate/get'),
	expect = require('expect.js');

describe('array/iterate/get', function () {
	it('should return a list of properties', function () {
		var list = [
			{ foo: 'a', bar: 'b' },
			{ foo: 'c', bar: 'd' },
			{ foo: 'e', bar: 'f' }
		];

		expect(list.map(get('foo'))).to.eql(['a', 'c', 'e']);
		expect(list.map(get('bar'))).to.eql(['b', 'd', 'f']);
	});
});
