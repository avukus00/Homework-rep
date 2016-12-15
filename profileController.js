appModule.controller("profileController", function ($scope) {
	$scope.inventarInp = "";
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
	        };
}	        
});
	

	
	



	
	