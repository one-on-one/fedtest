angular.module('FedTestApp.Controllers')
.controller('MainFormController', [
  '$scope',
  'appForm',
  function ($scope, appForm) {
    'use strict';

    // This is the default order that the fields should be in. If the api values
    // end up being different later on, we'll need to change these values.
    //
    // The reason we need the order is because the api endpoint gives us an
    // object with keys, and we can't rely on the order of javascript objects
    // in the browser (at least in chrome)
    // http://dev-answers.blogspot.com/2012/03/javascript-object-keys-being-sorted-in.html
    var defaultOrder = [
      'high',
      'asso',
      'bach',
      'mast',
      'doct'
    ];

    // This is where we use the appForm service to get the data
    appForm.getEducationLevels(function (data) {
      if (data) {
        $scope.educationLevels = data;
      }
    });

    /**
     * educationLevelOrder
     *
     * The order function to be used with the orderBy filter. It determines the
     * order of the education levels. It uses the defaultOrder array defined
     * above to order things. Any 'keys' that aren't in the array will be
     * ordered first in the list
     */
    $scope.educationLevelOrder = function (level) {
      return defaultOrder.indexOf(level.key);
    };

    $scope.submit = function () {
      var submitObject;
      angular.forEach($scope.mainForm, function (field, key) {
        // This is how we filter out all of the angular fields. Kinda hacky,
        // need to adjust this later
        if (key.charAt(0) === '$') { return; }
        field.$dirty = true;
      });
      if ($scope.mainForm.$valid) {
        submitObject = {
          first_name: $scope.firstName,
          last_name: $scope.lastName,
          phone: $scope.phone,
          email: $scope.email,
          edu_level: $scope.educationLevel
        };
      }
    };
  }
]);
