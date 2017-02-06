/* global describe, it, beforeEach, fixture */

'use strict';

describe('<d2l-simple-overlay>', function() {
	var widget;

	beforeEach(function() {
		widget = fixture('d2l-simple-overlay-fixture');
	});

	it('should fire d2l-simple-overlay-closed event on closing', function(done) {
		var handler = function() {
			document.removeEventListener('d2l-simple-overlay-closed', handler);
			done();
		};
		document.addEventListener('d2l-simple-overlay-closed', handler);

		widget._handleClose();
	});

	it('should fire recalculate-columns event on closing', function(done) {
		var handler = function() {
			document.removeEventListener('recalculate-columns', handler);
			done();
		};
		document.addEventListener('recalculate-columns', handler);

		widget._handleClose();
	});

	it('should fire d2l-simple-overlay-opening event on opening', function(done) {
		var handler = function() {
			document.removeEventListener('d2l-simple-overlay-opening', handler);
			done();
		};
		document.addEventListener('d2l-simple-overlay-opening', handler);

		widget._renderOpened();
	});
});
