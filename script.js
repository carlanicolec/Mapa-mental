	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			.when('/page1', {
				templateUrl : 'pages/page1.html',
				controller  : 'mainController'
			})

			.when('/page2', {
				templateUrl : 'pages/page2.html',
				controller  : 'mainController'
			})

			.when('/page3', {
				templateUrl : 'pages/page3.html',
				controller  : 'mainController'
			})

			.when('/page4', {
				templateUrl : 'pages/page4.html',
				controller  : 'mainController'
			})

			.when('/page5', {
				templateUrl : 'pages/page5.html',
				controller  : 'mainController'
			})

			.when('/page6', {
				templateUrl : 'pages/page6.html',
				controller  : 'mainController'
			})
			.otherwise({redirectTo: '/page1'});
	});

	// create the controller and inject Angular's $scope and $location
	scotchApp.controller('mainController', function($scope, $location) {
		$scope.pages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'];

		var location = $location.path();
		var index = parseInt(location.replace("/page", ""));
		$scope.currentIndex = index - 1;

		$scope.previousPage = function() {
			if ($scope.currentIndex >= 1) {
				$location.path($scope.pages[--$scope.currentIndex]);
			}
		}

		$scope.nextPage = function() {
			if ($scope.currentIndex < $scope.pages.length - 1) {
				$location.path($scope.pages[++$scope.currentIndex]);
			}
		}
	});
