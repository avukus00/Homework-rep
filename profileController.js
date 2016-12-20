appModule.controller("profileController", function ($scope) {
	
	$scope.imeInp="";
	$scope.brojInp="";
	$scope.vrijednostInp="";
	$scope.opisInp="";
	$scope.tempDost="";

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

    $scope.condition = function() {
		if ($scope.brojInp > 10000 || $scope.brojInp < 1 || ($scope.imeInp == '')) 
		{
			return true;
		}
		else 
		{
			return false;
		}		
		}; 

	$scope.condition1 = function() {
		if ($scope.brojInp > 10000 || $scope.brojInp < 1) 
		{
			return true;
		}
		else 
		{
			return false;
		}		
		}; 
});
	          


	
	