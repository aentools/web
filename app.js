var prodApp = angular.module('prodApp', []);
prodApp.controller('ProdListController', function ProdListController($scope) {
$scope.itens = [
{
id: '001',
name: 'Motorola XOOM™ with Wi-Fi',
description: 'The Next, Next Generation',
imgUrl: 'img/creative.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Motorola XOOM™ with Wi-Fi',
description: 'The Next, Next Generation',
imgUrl: 'img/creative.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Motorola XOOM™ with Wi-Fi',
description: 'The Next, Next Generation',
imgUrl: 'img/creative.jpg',
price: '$200',
quantity: '10'
},
];
});
