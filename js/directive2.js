angular.module('noServer')
.directive('directTwo', function(){
	return {
		scope: {
			quote: '@'
		},
		template: `
			{{quote}}
		`

	}
});