angular.
  module('phonecatApp').
  config(['$routeProvider',
     function config($routeProvider) {
        $routeProvider.when('/phones', {
           template: '<phone-list></phone-list>'
     }).
     otherwise('/phones');
 }
]);
