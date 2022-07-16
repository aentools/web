angular.
  module('phonecatApp').
  config(['$routeProvider',
     function config($routeProvider) {
        $routeProvider.when('/', {
           template: '<phone-list></phone-list>'
     }).
     otherwise('/');
 }
]);
