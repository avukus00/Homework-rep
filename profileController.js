appModule.controller("profileController", function ($scope) {
	
	

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
	          


	
	