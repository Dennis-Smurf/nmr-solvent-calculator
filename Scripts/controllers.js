
function NMRSolventCalculatorControl($scope) {
    $scope.availableSolvents = solventsList;
    var solvent = { name: "Product", integral: 1, mass: 0, nrH: 1 , relativeH:0};

    $scope.solvents = [solvent];
    $scope.setSolvent = function (currentSolvent, selectedSolvent) {
        currentSolvent.name = selectedSolvent.name; 
        currentSolvent.mass = selectedSolvent.mass;
        currentSolvent.nrH = selectedSolvent.nrH;
         
    }
    $scope.addSolvent = function () {
        $scope.solvents.push(angular.copy($scope.availableSolvents[0]));
  
    }

    $scope.$watch(function () { return angular.toJson($scope.solvents); },
       function (newval, oldval) {
         
           setRelativeH();
           setweightPercentage();

       }, true);
     
    function setRelativeH() {
        angular.forEach($scope.solvents, function (solvent) {
            var integral = parseFloat(solvent.integral);
            if (isNaN(integral)) {
                integral = 0;
            }
            var nrH = parseFloat(solvent.nrH);
            if (isNaN(nrH)) {
                return 0;
            }
            else {
                if (nrh = 0) {
                    return 0;
                }
                else {
                    solvent.relativeH = integral / nrH;
                }
            }
        });
    }

    function setweightPercentage() {
            var totalrelH = 0;
            angular.forEach($scope.solvents, function (solvent) {
                totalrelH += solvent.relativeH;
            });
            var totalRelativemass = 0;
            angular.forEach($scope.solvents, function (solvent) {
                if (totalrelH > 0) {
                    solvent.molPercentage = solvent.relativeH / totalrelH;
                    solvent.massPercentage = solvent.molPercentage * solvent.mass;
                    totalRelativemass += solvent.massPercentage;
                }
            });
            angular.forEach($scope.solvents, function (solvent) {
                if (totalRelativemass > 0) {
                    solvent.weightPercentage=solvent.massPercentage / totalRelativemass;
                }
            });
        }
        
}