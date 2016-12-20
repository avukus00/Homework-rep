appModule.directive("inventarView", function(){

	function inventarViewController($scope) {
	$scope.imeInp="";
	$scope.brojInp="";
	$scope.vrijednostInp="";
	$scope.opisInp="";
	$scope.dostuponstInp= false;
	
	$scope.profile = 
		{
			ime: "",
			prezime: "",
			dob: "",
			items: []			
		};
		
	$scope.addToArray = function() {
	$scope.profile.items.push({
		ime : $scope.imeInp,
		broj : $scope.brojInp,
		value : $scope.vrijednostInp,
		opis : $scope.opisInp,
		dost : $scope.dostuponstInp
		});
		$scope.imeInp="";
		$scope.brojInp="";
		$scope.vrijednostInp="";
		$scope.opisInp="";
		$scope.dostuponstInp= false;
	};
	}

	return {
		controller: inventarViewController,
		templateUrl: "directive-view.html",
	};


});