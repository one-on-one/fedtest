// Set up the base App
angular.module('FedTestApp', [
  'FedTestApp.Controllers',
  'FedTestApp.Services'
]);
angular.module('FedTestApp.Controllers', []);
angular.module('FedTestApp.Services', []);

// Controllers
// ===========

// MainFormController
// ------------------
angular.module('FedTestApp.Controllers')
.controller('MainFormController', [
  '$scope',
  'appForm',
  function ($scope, appForm) {
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

// Services
// ========

// appform
// -------
angular.module('FedTestApp.Services')
.service('appForm', [
  '$http',
  function ($http) {
    var appForm  = {}
      , endpoint = 'http://fedtest.aws.af.cm'
      , defaultEducationLevels
      , defaultOrder
      ;

    // Here are the default education levels to use if the api endpoint
    // doesn't work.
    defaultEducationLevels = {
      high: "High School Diploma",
      asso: "Associate Degree",
      bach: "Bachelor Degree",
      mast: "Master Degree",
      doct: "Doctoral Degree"
    };

    defaultOrder = [
      'high',
      'asso',
      'bach',
      'mast',
      'doct'
    ];

    /**
     * appForm.getEducationLevels
     *
     * Gets the education levels from the endpoint.
     *
     * @parameters
     *   cb (function (data) {})
     */
    appForm.getEducationLevels = function (cb) {
      $http
        .jsonp(endpoint + '?callback=JSON_CALLBACK')
        .success(function (data) {
          data = appForm.educationLevelOrder(data);
          cb(data);
        })
        .error(function (data) {
          data = appForm.educationLevelOrder(defaultEducationLevels);
          cb(data);
        });
    };

    appForm.educationLevelOrder = function (levels) {
      var levelArr = [];
      angular.forEach(levels, function (val, key) {
        if (defaultOrder.indexOf(key) !== -1) { return; }
        levelArr.push({
          key: key,
          name: val
        });
      });
      defaultOrder.map(function (level) {
        if (levels[level]) {
          levelArr.push({
            key: level,
            name: levels[level]
          });
        }
      });
      return levelArr;
    };

    return appForm;
  }
]);
