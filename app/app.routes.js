(function(ng) {
	"use strict";
	function router($stateProvider) {
		$stateProvider.state("home", {
			url: "/home",
		    controller: "HomeController",
			templateUrl: "app/components/home/homeView.html"

		})
		.state("blog", {
			url: "/blog",
		    controller: "BlogController",
			templateUrl: "app/components/blog/blogView.html"

		});
	}

	return ng.module("com.endicia.sample.angular")
		.config([
			"$stateProvider",
			router
		]);
}(angular));
