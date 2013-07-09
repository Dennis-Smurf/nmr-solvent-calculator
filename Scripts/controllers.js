function NMRSolventCalculatorControl($scope) {

	var solvent = {
		name: "Product",
		integral: 1,
		mass: 0,
		nrH: 1,
		relativeH: 0
	};
	//TODO:per gedeutereerd oplosmiddel delta ppm


	$scope.rangeFilter = {
		ppm : 4,
		delta : 0.1,
		deuteratedSolvents: [{ id: 0, solvent: "CDCl3", residualPeak:7.26 }, { id: 1, solvent: "(CD3)2CO", residualPeak:2.05 }, { id: 2, solvent: "(CD3)2SO", residualPeak:2.50 }, { id: 3, solvent: "C6D6" , residualPeak:7.16}, { id: 4, solvent: "CD3CN", residualPeak:1.94 }, { id: 5, solvent: "CD3OD", residualPeak:3.31 }, { id: 6, solvent: "D2O", residualPeak: 4.79 }]
	};
    $scope.availableSolvents = solventsList;
    $scope.rangeFilter.deuteratedSolvent = $scope.rangeFilter.deuteratedSolvents[0];

    $scope.setSolvent = function (currentSolvent, selectedSolvent) {
        currentSolvent.name = selectedSolvent.name;
        currentSolvent.mass = selectedSolvent.mass;
        currentSolvent.nrH = selectedSolvent.nrH;
        currentSolvent.HData = selectedSolvent.HData;
    }


    $scope.addSolvent = function () {
        $scope.solvents.push(angular.copy($scope.availableSolvents[0]));
    }

    $scope.removeSolvent = function (id) {
        $scope.solvents.splice(id, 1);
    }

    $scope.getSolventClass = function (name) {
        return "solvent-" + name;
    }

    $scope.$watch(function () {
            return angular.toJson($scope.solvents);
        },
        function (newval, oldval) {
            validateSolvents();
            if (!$scope.hasErrors) {
                setRelativeH();
                setweightPercentage();
            }
        },
        true
    );

    $scope.$watch(function () {
    
    	return angular.toJson([$scope.rangeFilter.ppm, $scope.rangeFilter.delta, $scope.rangeFilter.deuteratedSolvent]);
		},
		function (newval, oldval) {
			checkRange();
		},
		true
	);

	function isInRange(x, min, max) {
		return x >= min && x <= max;
	}

	function checkRange()
	{
		var delta = parseFloat($scope.rangeFilter.delta);
		var ppm = parseFloat($scope.rangeFilter.ppm);
		var minimun = ppm - delta;
		var maximum = ppm + delta;
		angular.forEach($scope.availableSolvents,
			function (solvent)
			{
				solvent.inRange = false;
				angular.forEach(solvent.HData, function(Hdata)
				{
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
        angular.forEach($scope.solvents,
            function (solvent) {
                var integral = parseFloat(solvent.integral);
                var nrH = parseFloat(solvent.nrH);
                var mass = parseFloat(solvent.mass);
                solvent.nrHError = false;
                solvent.hasErrors = false;

                if (isNaN(integral) || isNaN(nrH) || isNaN(mass)) {
                    solvent.hasErrors = true;
                    $scope.hasErrors = true;
                } else {
                    if (nrH == 0) {
                        solvent.nrHError = true;
                        $scope.hasErrors = true;
                    } else {
                        $scope.hasErrors = false;
                    }
                }
            });

    }

    function setRelativeH() {
        angular.forEach($scope.solvents,
            function (solvent) {
                var integral = parseFloat(solvent.integral);
                if (isNaN(integral)) {
                    integral = 0;

                }
                var nrH = parseFloat(solvent.nrH);
                if (isNaN(nrH)) {
                    return 0;
                } else {
                    if (nrh = 0) {
                        return 0;
                    } else {
                        solvent.relativeH = integral / nrH;
                    }
                }
            });
    }

    function setweightPercentage() {
        var totalrelH = 0;
        angular.forEach($scope.solvents,
            function (solvent) {
                totalrelH += solvent.relativeH;
            });
        var totalRelativemass = 0;
        angular.forEach($scope.solvents,
            function (solvent) {
                if (totalrelH > 0) {
                    solvent.molPercentage = solvent.relativeH * 100 / totalrelH;
                    solvent.massPercentage = solvent.molPercentage * solvent.mass;
                    totalRelativemass += solvent.massPercentage;
                }
            });
        angular.forEach($scope.solvents,
            function (solvent) {
                if (totalRelativemass > 0) {
                    solvent.weightPercentage = solvent.massPercentage * 100 / totalRelativemass;
                }
            });
    }


    $scope.solvents = [solvent];
    $scope.addSolvent();
}

var app = angular.module('NMRSolventCalculatorModule', []);