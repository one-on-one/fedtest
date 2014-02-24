// Set up the base App
angular.module('FedTestApp', [
  'FedTestApp.Controllers',
  'FedTestApp.Services',
  'FedTestApp.Filters',
  'FedTestApp.Directives',
  'ui.mask'
])
.run(function () {
  FastClick.attach(document.body);
});
angular.module('FedTestApp.Controllers', []);
angular.module('FedTestApp.Services', []);
angular.module('FedTestApp.Filters', []);
angular.module('FedTestApp.Directives', []);
