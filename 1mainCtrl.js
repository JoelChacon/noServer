angular.module('noServer').controller('1mainCtrl', function($scope, quote, quoteService){

	// $scope.beSeen = noServerService.getChuck();
    $scope.chuckNorris = quote.split('&quot;').join('');
	$scope.quoteChuck = function(){
		quoteService.getNorris()
		.then(function(response){
			console.log("2nd", response)
			$scope.chuckNorris = response.split('&quot;').join('');
		})
	};



})