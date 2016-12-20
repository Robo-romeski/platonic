var fz = angular.module('friendZone');

fz.controller('checkCtrl', ['$scope', function ($scope) {

	$scope.final = 'Fever';
	console.log('controller loaded');
	
}]);

fz.controller('vidBgCtrl', ['$scope', function ($scope) {

	$scope.resources = [
			'./videos/vid1.mp4',
			'./videos/vid2.mp4',
			'./videos/vid3.mp4'
	],
			//$scope.poster = './images/dribble/flare.png',
			$scope.fullScreen = false,
			$scope.muted = true,
			$scope.zIndex = '22'
			$scope.pausePlay = true,
			$scope.currentResourceIdx = 0;
			$scope.playInfo = {};
}])