var fz = angular.module('friendZone');

fz.config(['$stateProvider','$locationProvider','$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/notfound');
	$locationProvider.html5Mode(true);

	var homeState = {
		name: 'home',
		url: '/',
		templateUrl: './views/home.html'
	}

	var featureState = {
		name: 'features',
		url: '/features',
		templateUrl: './views/features.html'
	}

	var page404State = {
		name: 'notfound',
		url: '/notfound',
		templateUrl: './views/tour.html'
		// template: '<h1> 404 </h1>'
	}

	$stateProvider.state(homeState);
	$stateProvider.state(featureState);
	$stateProvider.state(page404State);
}]);