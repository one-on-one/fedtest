// appform
// -------
angular.module('FedTestApp.Services')
.service('appForm', [
  '$http',
  function ($http) {
    'use strict';

    var appForm  = {}
      , endpoint = 'http://fedtest.aws.af.cm'
      , defaultEducationLevels
      , toArray
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
          cb(toArray(data));
        })
        .error(function (data) {
          cb(toArray(defaultEducationLevels));
        });
    };

    /**
     * toArray
     *
     * Converts an object to an array of key/value pairs so that it can
     * be ordered propertly
     *
     * @parameters
     *   `object`: a flat object hash with simple key/value pairs
     *
     * @returns
     *   `array`: the arrayified object.
     */
    toArray = function (object) {
      var out = [];
      angular.forEach(object, function (val, key) {
        out.push({key: key, value: val});
      });
      return out;
    };

    return appForm;
  }
]);
