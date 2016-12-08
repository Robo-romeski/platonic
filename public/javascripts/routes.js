var fz = angular.module('friendZone');

fz.config(['$stateProvider','$locationProvider', function ($stateProvider, $locationProvider) {

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

	$stateProvider.state(homeState);
	$stateProvider.state(featureState);
}]);