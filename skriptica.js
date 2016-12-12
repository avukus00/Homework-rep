var appModule = angular.module("app1", ["ngRoute"]);

appModule.config(function ($routeProvider, $locationProvider) {

	$routeProvider.when("/home", {
		templateUrl: "homework2.html",
		controller: "homework2Controller"
	}).when("/about", {
		templateUrl: "profile.html",
		controller: "profileController"
	}).otherwise({
        redirectTo: '/homework2'
    });
})