(function(M) {
	"use strict";
	function loadNPMTasks(grunt) {
		[
			"grunt-angular-templates",
			"grunt-bower-concat",
			"grunt-contrib-clean",
			"grunt-contrib-concat",
			"grunt-contrib-compass",
			"grunt-contrib-copy",
			"grunt-contrib-jshint",
			"grunt-contrib-watch",
			"grunt-jscs",
			"grunt-preprocess"
		].forEach(grunt.loadNpmTasks);
		return grunt;
	}

	function initConfig(grunt) {
		grunt.initConfig({

			clean: {
				html: [
					"tmp/*.html"
				],
				javascripts: [
					"tmp/app/components/*",
					"tmp/app/*",
					"tmp/*"
				]
			},
			concat: {
				app: {
					dest: "tmp/Scripts/<%= pkg.name %>.app.js",
					src: [
						"bower_components/angular/angular.js",
						"bower_components/angular-ui-router/release/angular-ui-router.js",
						"bower_components/angular-bootstrap/ui-bootstrap.js",
						"app/app.module.js",
						"app/app.routes.js",
						"app/shared/banner/bannerDirective.js",
						"app/components/home/homeController.js",
						"app/components/blog/blogController.js",
						"tmp/javascripts/_templates.js"

					]
				}
			},
			copy: {
				dev: {
					files: [ {
						cwd: "tmp/Scripts",
						dest: "dist/Scripts",
						expand: true,
						src: ["**"]
					}]
				}
			},

			jshint: {
				options: {
					curly: true,
					eqeqeq: true,
					nonew: true,
					predef: [
						"angular",
						"module"
					],
					quotmark: "double",
					singleGroups: true,
					strict: true,
					undef: true,
					unused: true
				},
				files: [
					"Gruntfile.js",
					"src/javascripts/**/*.js"
				]
			},
			ngtemplates: {
				"com.endicia.sample.angular": {
					dest: "tmp/app/_templates.js",
					src: [
						"app/components/**/*View.html",
						"app/shared/**/*View.html"
					],
					options: {
						url: function(path) {
							return path.replace("src/templates/", "");
						}
					}
				}
			},
			pkg: grunt.file.readJSON("package.json"),

			watch: {
				demo: {
					files: [
						"Gruntfile.js",
						"src/**/*"
					],
					tasks: [
						"demo"
					]
				},
				dev: {
					files: [
						"Gruntfile.js",
						"src/**/*"
					],
					tasks: [
						"dev"
					]
				}
			}
		});
		return grunt;
	}

	function registerTasks(grunt) {
		grunt.registerTask("dev", [
			"clean",
			"ngtemplates",
			"concat",
			"copy:dev"
		]);
		
		return grunt;
	}

	function exports(grunt) {
		loadNPMTasks(grunt);
		initConfig(grunt);
		registerTasks(grunt);
	}

	M.exports = exports;
}(module));
