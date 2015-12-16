(function(ng) {
	"use strict";

	function Banner() {
		return {
			restrict: "E",
			templateUrl: "app/shared/banner/bannerView.html"
		};
	}

	ng.module("com.endicia.sample.angular")
		.directive("banner", Banner);
}(angular));
