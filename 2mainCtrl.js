angular.module('noServer').controller('2mainCtrl', function($scope, quote2,  quoteService){


	$scope.getLee = quote2;
	$scope.quoteBruce = function(){
		quoteService.getLee()
		.then(function(response){
			console.log(response);
			function getRandom(min, max){
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			function getQuote() {
				return response.data[getRandom(0, response.data.length - 1)];
			};
			$scope.bruceLee = getQuote();
			console.log($scope.bruceLee)
		})
	};

	$scope.quoteBruce();





})