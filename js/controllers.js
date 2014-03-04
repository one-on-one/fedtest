'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
controller('mainController', ['$scope', '$http', function($scope, $http) {

	$scope.edu_levels = {};

	window.jsonp_callback = function(data) {
		$scope.edu_levels.choices = data;
	};

	var url = "http://fedtest.aws.af.cm/?callback=jsonp_callback";

	$http.jsonp(url);

	$scope.submit = function(){
		var submission = {
			"first_name": $scope.first_name,
			"last_name": $scope.last_name,
			"phone": $scope.phone,
			"email": $scope.email,
			"edu_level": $scope.edu_level
		};
		console.log(submission);
		//validate form even further, and process information however you want.
	};
}]);