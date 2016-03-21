angular.module('noServer').controller('3mainCtrl', function($scope, quote3, quoteService){


	$scope.getEastwood = quote3;
	$scope.quoteClint = function(){
		quoteService.getEastwood()
		.then(function(response){
			console.log(response);
			function getRandom(min, max){
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			function getQuote() {
				return response.data[getRandom(0, response.data.length - 1)];
			};
			$scope.clintEastwood = getQuote();
		})
	};

	$scope.quoteClint();



})