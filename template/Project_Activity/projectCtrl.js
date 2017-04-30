 'use strict';

 angular.module("myApp")
	.controller("projectCtrl",["$scope","$interval","jsonFactory", function($scope, $interval, jsonFactory){

		//var label = [];
		//Set Range for data show
		/*if($scope.selectYear != null && $scope.selectMonth == null){
			$scope.rowLimit = 4;
		}
		else if($scope.selectYear != null && $scope.selectMonth != null){
			$scope.rowLimit = 7;
		}*/
		
		jsonFactory.getJson("year").success(function(data){
	          $scope.years = data;
	         // console.log("asd :"+$scope.years)
	      });

		$scope.getMonthJson = function(selectYear){
			$scope.months = null;
			console.log("hi");
			var key = $scope.years.indexOf(selectYear);
			jsonFactory.getJson("month").success(function(data){
		          $scope.months = data[key];
		          $scope.labels = data[key];
		      });
			jsonFactory.getJson("projectYearData").success(function(data){
		          $scope.data = data[key];
		      });
		}
		
		$scope.getDayJson = function(selectMonth){
			
			var index;
			var key = $scope.months.indexOf(selectMonth);
			if(selectMonth === "February"){
				index = 1;
			}else if(selectMonth === "January" || selectMonth === "March" || selectMonth === "May" ||
					 selectMonth === "July" || selectMonth === "August" || selectMonth === "October" 
						 || selectMonth === "December"){
				index = 0;
				
			}else if(selectMonth === "April" || selectMonth === "June" || selectMonth === "September" ||
					selectMonth === "November" ){
				index = 2;
			}
			//console.log("index : "+index);
			jsonFactory.getJson("day").success(function(data){
				$scope.labels = data[index];
			    
			 });
			jsonFactory.getJson("projectMonthData").success(function(data){
				$scope.data = data[key];
			    
			 });
			
		}
		
		  /*$scope.data = [
		    [65, 59, 80, 81, 56, 55, 40, 63, 93, 50, 28, 57],
		    [28, 48, 40, 19, 86, 27, 90, 68, 84, 90, 68, 98]
		  ];*/
		  		
}]);
