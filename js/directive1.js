angular.module('noServer')
.directive('directOne', function(){
	return {
		template: `<div class="col-lg-12 text-center">
        <hr />
        <button ng-click="quoteBruce()" class="btn btn-primary btn-lg">BOOM!!!</button>
        <h3 class="quote">{{bruceLee.quote}}
	{{bruceLee.author}}</h3>
      </div>`
	}
})


