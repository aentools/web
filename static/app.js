/*var myApp = angular.module('myApp', []); myApp.controller('myController', function ($scope, $http) { $http.get('clientes.json').success(function(data) { $scope.clientes = data; });
});

var myApp = angular.module('myApp', []); myApp.controller('myController', function ($scope) {
$scope.clientes = [ {'nome': 'Nexus S', 'agencia': 'Fast just got faster Nexus S.'}, {'nome': 'Motorola XOOM Wi-Fi', 'agencia': 'The Next, Next Generation tablet.'}, {'nome': 'MOTOROLA XOOM', 'agencia': 'The Next, Next Generation tablet.'} ];
});*/

angular.module('myApp', []).controller('myController', ($scope) => {
   $scope.clientes = [
      {
      nome: 'Jonny J.',
      agencia: '8292',
      conta:'900839-11'
      },
      {
      nome: 'Fred A.',
      agencia: '8292',
      conta:'100839-12'
      }
   ];
});
  
  
   /*angular.module("myApp", []); myApp.controller("myController", function ($scope) { $scope.message = "Hello Angular World!"; });
*/
