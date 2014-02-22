// MainFormController
// ------------------
angular.module('FedTestApp.Controllers')
.controller('MainFormController', [
  '$scope',
  'appForm',
  function ($scope, appForm) {
    'use strict';

    appForm.getEducationLevels(function (data) {
      if (data) {
        $scope.educationLevels = data;
        $scope.educationLevel  = data[0].key;
      }
    });

    $scope.submit = function () {
      console.log($scope);
    };
  }
]);
