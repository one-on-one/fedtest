'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('inputMask', function(){
	return {
		restrict: 'A',
		link: function(scope, el, attrs){
			el.inputmask(scope.$eval(attrs.inputMask));
			el.on('blur', function(){
				scope.$eval(attrs.ngModel + "='" + el.val() + "'");
        // or scope[attrs.ngModel] = el.val() if your expression doesn't contain dot.
    });
		}
	};
});