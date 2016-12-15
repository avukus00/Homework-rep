appModule.controller("profileController", function ($scope) {

$scope.profile = 
	{
		ime: "",
		prezime: "",
		dob: "",
		items: []			
	};
	
$scope.addToArray = function() {
        if ($scope.inventarInp) {
          $scope.profile.items.push(this.inventarInp);
          $scope.inventarInp = '';
        }
};
	

	
	



	
	