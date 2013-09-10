'use strict';

define(['app', 'SolventResidue', 'DeuteratedSolvent'], function (app, SolventResidue, DeuteratedSolvent) {
	return app.controller('NMRSolventCalculatorController', ['$scope', '$http', function NMRSolventCalculatorControl($scope, $http) {



		var solvent, deuteratedSolvents;

		solvent = SolventResidue.Product;

		deuteratedSolvents = DeuteratedSolvent.List;

		$scope.rangeFilter = {
			ppm: 4.1,
			delta: 0.1,
			deuteratedSolvents: deuteratedSolvents,
			deuteratedSolvent: deuteratedSolvents[0]
		};

		$scope.availableSolvents = SolventResidue.List;

		$scope.setSolvent = function (currentSolvent, selectedSolvent) {
			currentSolvent.name = selectedSolvent.name;
			currentSolvent.mass = selectedSolvent.mass;
			currentSolvent.nrH = selectedSolvent.nrH;
			currentSolvent.HData = selectedSolvent.HData;
		};

		$scope.addSolvent = function () {
			$scope.solvents.push(angular.copy($scope.availableSolvents[0]));
		};

		$scope.removeSolvent = function (id) {
			$scope.solvents.splice(id, 1);
		};

		$scope.getSolventClass = function (name) {
			return "solvent-" + name;
		};

		$scope.$watch(function () {
			return angular.toJson($scope.solvents);
		}, function (newval, oldval) {
			validateSolvents();
			if (!$scope.hasErrors) {
				setRelativeH();
				setweightPercentage();
			}
		}, true
		);

		$scope.$watch(function () {
			return angular.toJson([$scope.rangeFilter.ppm, $scope.rangeFilter.delta, $scope.rangeFilter.deuteratedSolvent]);
		}, function (newval, oldval) {
			checkRange();
		}, true
		);

		function isInRange(x, min, max) {
			return x >= min && x <= max;
		}

		function checkRange() {
			var delta, ppm, minimun, maximum;
			delta = parseFloat($scope.rangeFilter.delta);
			ppm = parseFloat($scope.rangeFilter.ppm);
			minimun = ppm - delta;
			maximum = ppm + delta;
			angular.forEach($scope.availableSolvents,
				function (solvent) {
					solvent.inRange = false;
					angular.forEach(solvent.HData, function (Hdata) {
						if (!solvent.inRange) {
							var Hvalue = Hdata.values[$scope.rangeFilter.deuteratedSolvent.id];
							if (isInRange(Hvalue, minimun, maximum)) {
								solvent.inRange = true;
							}
						}
					});
				});
		}

		function validateSolvents() {
			$scope.hasErrors = false;
			angular.forEach($scope.solvents, function (solvent) {
				var integral, nrH, mass;
				integral = parseFloat(solvent.integral);
				nrH = parseFloat(solvent.nrH);
				mass = parseFloat(solvent.mass);
				solvent.nrHError = false;
				solvent.hasErrors = false;
				if (isNaN(integral) || isNaN(nrH) || isNaN(mass)) {
					solvent.hasErrors = true;
					$scope.hasErrors = true;
				}

			});
		}

		function setRelativeH() {
			angular.forEach($scope.solvents, function (solvent) {
				var integral, nrH;
				integral = parseFloat(solvent.integral);
				if (isNaN(integral)) {
					integral = 0;
				}
				nrH = parseFloat(solvent.nrH);
				if (isNaN(nrH)) {
					return 0;
				} else {
					if (nrH === 0) {
						solvent.relativeH = 0;
					} else {
						solvent.relativeH = integral / nrH;
					}
				}
			});
		}

		function setweightPercentage() {
			var totalrelH, totalRelativemass;
			totalrelH = 0;
			angular.forEach($scope.solvents, function (solvent) {
				totalrelH += solvent.relativeH;
			});
			totalRelativemass = 0;
			angular.forEach($scope.solvents, function (solvent) {
				if (totalrelH > 0) {
					solvent.molPercentage = solvent.relativeH * 100 / totalrelH;
					solvent.massPercentage = solvent.molPercentage * solvent.mass;
					totalRelativemass += solvent.massPercentage;
				}
			});
			angular.forEach($scope.solvents, function (solvent) {
				if (totalRelativemass > 0) {
					solvent.weightPercentage = solvent.massPercentage * 100 / totalRelativemass;
				}
			});
		}

		$scope.solvents = [solvent];
		$scope.addSolvent();
	}]);
});