 'use strict';

angular.module("myApp")
	.controller("involvedCtrl",["$scope","jsonFactory", function($scope, jsonFactory){
		
		jsonFactory.getJson("involved").success(function(data){
	          $scope.employ = data.Employees;
	          //console.log("Items : "+$scope.employ)
	      });
		
}]);
