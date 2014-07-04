'use strict';

var inherits = require('../../object/inherits'),
	expect = require('expect.js');

describe('object', function () {
	describe('inherits', function () {
		it('should properly create a subclass', function () {
			expect(inherits).to.be.a(Function);
		});
	});
});
