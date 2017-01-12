appModule.controller("userGeneratorController", function ($scope, $http) {

$scope.gender="0";
$scope.nationality="0";


	$scope.fetchUserData = function () {



		$http
			.get("https://api.randomuser.me/?gender="+$scope.gender+"&nat="+$scope.nationality)
			.then(function(response){
				$scope.user = response.data;				
		});
	};


$scope.fetchUserData();
});