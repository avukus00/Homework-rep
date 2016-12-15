var appModule = angular.module("app1", ["ngRoute"]);

appModule.config(function ($routeProvider, $locationProvider) {

	$routeProvider.when("/homework2", {
		templateUrl: "homework2.html",
		controller: "homework2Controller"
	}).when("/profile", {
		templateUrl: "profile.html",
		controller: "profileController"
	}).otherwise({
        redirectTo: '/homework2'
    });
})