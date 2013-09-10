'use strict';

require.config({
	paths: {
		jquery: "lib/jquery-2.0.3.min",
		angular: "lib/angular.min",
		bootstrap: "lib/bootstrap.min"
	},
	shim: {
		angular : {exports : 'angular'},
		bootstrap: { deps: ['jquery'] }
	},
	priority: [
	'angular'
	],
	urlArgs: "bust=" + (new Date()).getTime()
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

	/*
		$(function () {
			$.ajax({
				type: "POST", dataType: "json", url: "http://mercaportal/smurfweb/employees/employeesdata", data: "", success: function (data) {
					console.log(data);
				}, error: function (XMLHttpRequest, textStatus, errorThrown) { console.log(textStatus); }
			});
		});
		*/
});

