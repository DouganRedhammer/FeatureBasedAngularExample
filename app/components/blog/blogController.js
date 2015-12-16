(function(ng) {
	"use strict";
	function controller($scope) {
		$scope.blogs = "blagh blagh blagh"
	}

	return ng.module("com.endicia.sample.angular")
		.controller("BlogController", [
			"$scope",
			controller
		]);
}(angular));
