 'use strict';

angular.module("myApp")
	.factory('jsonFactory', function($http) {
		var factory = {};

		factory.getJson = function (path) {
			var url = "data/"+path+".json";
			console.log(url);
			return  $http.get(url);  
		};
	return factory;
});
