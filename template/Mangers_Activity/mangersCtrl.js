 'use strict';

angular.module("myApp")
	.controller("mangersCtrl",["$scope","$interval","jsonFactory", function($scope, $interval, jsonFactory){
		
		jsonFactory.getJson("month").success(function(data){
	          $scope.months = data[0];
	          //console.log("Items : "+$scope.months)
	      });
		 
		$scope.getMonthJson = function(month){
			var key = $scope.months.indexOf(month);
			jsonFactory.getJson("mangerMonthData").success(function(data){
		          $scope.data = data[key];
		          console.log("Items : "+$scope.data)
		      });
		}
			
		  $scope.data = [23,20,77,66,39,55,83,19,52,4,
		                 21,10,41,67,30,84,19,8,50,52,
		                 63,81,94,23,96,55,93,34,14,33,
		                 28];
		  /*$interval(function(){
			  $scope.data.push(Math.random()*50);
		  }, 2000);*/
	
}]);
