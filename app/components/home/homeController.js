(function(ng) {
	"use strict";
	function controller($scope) {
		$scope.helloWorld = "Hello World"
	}

	return ng.module("com.endicia.sample.angular")
		.controller("HomeController", [
			"$scope",
			controller
		]);
}(angular));
