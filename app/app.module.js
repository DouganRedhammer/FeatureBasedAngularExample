(function(ng) {
	"use strict";
	function app() {}

	function router($urlRouterProvider) {
		$urlRouterProvider.otherwise("home");
	}

	return ng.module("com.endicia.sample.angular", [
			"ui.bootstrap",
			"ui.router",
			app
		])
		.config([
			"$urlRouterProvider",
			router
		]);
}(angular));
