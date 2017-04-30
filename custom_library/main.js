 'use strict';

var mainApp = angular.module("myApp",["ui.router","zingchart-angularjs","chart.js"]);

mainApp.config(function($stateProvider, $urlRouterProvider/*, $locationProvider*/) {
	
	/*$locationProvider.html5Mode(true);*/
	
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
	.state("mainView",{
		url : "/",
		views : {
			"sidebar" : {
				templateUrl: "template/Side_Bar/sideBar.html"
			},
			"dashboard" : {
				controller : "dashboardCtrl",
                templateUrl: "template/dashboard/dashboard.html"
			}
		}
		
	});
});
