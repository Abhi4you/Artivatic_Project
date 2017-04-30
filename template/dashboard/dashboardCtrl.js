 'use strict';

angular.module("myApp")
	.controller("dashboardCtrl",["$scope", function($scope){
	$scope.template = {
			
		     "projectActivity"  : "template/Project_Activity/projectActivity.html",
		     "involvedTeam"     : "template/Involved_Team/involvedTeam.html",
		     "mangersActivity"  : "template/Mangers_Activity/mangersActivity.html"
		     
		     
		   }
}]);
