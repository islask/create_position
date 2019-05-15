/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"YRG/create_position/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});