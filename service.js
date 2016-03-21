angular.module('noServer').service('quoteService', function($http, $q) {




	this.getNorris = function() {
		var defer = $q.defer();

		$http({
			method: "GET",
			url: "http://api.icndb.com/jokes/random/"
		})
		.then(function(res)  {
			var theJoke = res.data.value.joke;

			defer.resolve(theJoke);

			console.log(theJoke)		
		});
		return defer.promise;

	};	


	this.getLee = function() {
		var defer = $q.defer();

		$http({
			method: "GET",
			url: "./bruce.json"
		})
		.then(function(res) {
			defer.resolve(res);
		});
		return defer.promise;
	};

	
	this.getEastwood = function() {
		console.log('eastwood')
		var defer = $q.defer();

		$http({
			method: "GET",
			url: "./clint.json"
		})
		.then(function(res){
			defer.resolve(res);
		});
		return defer.promise;
	};



	// var myvar = "Joel Anjel Chacon";
	
	// this.getChuck = function() {
	// 	var joel = myvar;
	// 	return joel;
	// };





})