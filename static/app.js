/*angular.module('myApp', [])
.controller('myController', ($scope, $http) => {
   $http.get('clientes.json')
   .success(function(data) {
      $scope.clientes = data;
   });
});*/
angular.module('myApp', [])
.controller('myController', ($scope) => {
   $scope.clientes = [
        {
        'nome': 'Nexus S',
        'agencia': 'Fast just got faster Nexus S.'
        },
        {
        'nome': 'Motorola XOOM Wi-Fi',
        'agencia': 'The Next, Next Generation tablet.'
        }, {
        'nome': 'MOTOROLA XOOM',
        'agencia': 'The Next, Next Generation tablet.'
        }
   ];
});

