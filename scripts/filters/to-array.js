angular.module('FedTestApp.Filters')
.filter('toArray', function () {
  'use strict';

  return function (input) {
    var out = [];
    angular.forEach(input, function (val, key) {
      out.push({key: key, val: val});
    });
    return out;
  };
});