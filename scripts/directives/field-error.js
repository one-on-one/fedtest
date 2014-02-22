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
});
