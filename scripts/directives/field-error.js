angular.module('FedTestApp.Directives', [])
.directive('fieldError', function () {
  'use strict';

  return {
    restrict: 'A',
    scope: {
      field: '=fieldError',
      fieldName: '@',
      maskError: '@'
    },
    replace: true,
    templateUrl: 'partials/field-error.html'
  };
})
.directive('input', function () {
  'use strict';

  return {
    restrict: 'E',
    require: '?ngModel',
    link: function (scope, elem, attrs, ctrl) {
      if (!ctrl) {
        return;
      }

      elem.on('blur', function () {
        scope.$apply(function () {
          ctrl.$hasVisited = true;
        });
      });
    }
  }
});
