'use strict';

require.config({
	paths: {
		jquery: "lib/jquery-1.9.1.min",
		angular: "lib/angular.min",
		bootstrap: "lib/bootstrap.min",
	},
	shim: {
		angular : {exports : 'angular'},
		bootstrap: { deps: ['jquery'] }
	},
	priority: [
	'angular'
	]
});

if (!window.JSON) {
	require(['lib/json2']);
}

require(['angular', 'app', 'jquery', 'NMRSolventCalculatorController', 'bootstrap'], function (angular, app, $) {
		$(document).ready(function () {
			angular.bootstrap(document, ['NMRSolventCalculatorModule']);

			$(function () {
				$('.dropdown-menu').find('form').click(function (e) {
					e.stopPropagation();
				});
			});
		});
		
	});