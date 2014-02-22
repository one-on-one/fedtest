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
        .jsonp(endpoint + '?callback=JSON_CALLBACK', {timeout: 2500})
        .success(function (data) {
          cb(toArray(data));
        })
        .error(function (data) {
          cb(toArray(defaultEducationLevels));
        });
    };

    /**
     * appForm.submit
     *
     * Submits the form. TODO: hook up to actual endpoint for real response
     *
     * @parameters
     *   `formData` - A hash with each property with a string value. Below are
     *     the values needed for this form
     *     - first_name
     *     - last_name
     *     - phone
     *     - email
     *     - edu_level
     *   `cb` - the callback to be called when the form submission is complete.
     *     the first parameter will be an error if there was any. The second
     *     parameter is the if the form submission was valid or not: boolean
     */
    appForm.submit = function (formData, cb) {
      // TODO: Make the actual request
      console.log('Form Submitted', formData);
      cb(null, true);
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
