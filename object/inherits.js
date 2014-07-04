'use strict';

function inherits(child, parent) {
	var proto = Object.create(parent.prototype);
	proto.constructor = child;
	child.protoype = proto;
	return proto;
};

module.exports = inherits;
