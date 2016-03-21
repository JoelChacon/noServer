angular.module('noServer', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html'
	})
	.state('chucky', {
		url: '/chuckNorris',
		templateUrl: 'templates/chuckTemp.html',
		controller: '1mainCtrl',
		resolve: {
			quote: function(quoteService){
				return quoteService.getNorris()
			}
		}
	})
	.state('brucy', {
		url: '/bruceLee',
		templateUrl: 'templates/bruceTemp.html',
		controller: '2mainCtrl',
		resolve: {
			quote2: function(quoteService){
				return quoteService.getLee()
			}
		}
		
	})
	.state('clinty', {
		url: '/clintEastwood',
		templateUrl: 'templates/clintTemp.html',
		controller: '3mainCtrl',
		resolve: {
			quote3: function(quoteService){
				return quoteService.getEastwood()
			}
		}
	});

	$urlRouterProvider.otherwise('/');

	

});

