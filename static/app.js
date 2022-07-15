var prodApp = angular.module('prodApp', []);
prodApp.controller('ProdListController', function ProdListController($scope) {
$scope.itens = [
{
id: '001',
name: 'Coming Soon',
description: 'The Next, Next Generation',
imgUrl: 'static/img/comingsoon.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Creative',
description: 'The Next, Next Generation',
imgUrl: 'static/img/creative.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'New Age',
description: 'The Next, Next Generation',
imgUrl: 'static/img/newage.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Stylish Portfolio',
description: 'The Next, Next Generation',
imgUrl: 'static/img/stylishportfolio.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Business Casual',
description: 'The Next',
imgUrl: 'static/img/businesscasual.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'One Page Wonder',
description: 'The Next, Next Generation',
imgUrl: 'static/img/onepagewonder.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Landing Page',
description: 'The Next, Next Generation',
imgUrl: 'static/img/landingpage.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Clean Blog',
description: 'The Next, Next Generation',
imgUrl: 'static/img/cleanblog.jpg',
price: '$200',
quantity: '10'
},
{
id: '001',
name: 'Grey Scale',
description: 'The Next, Next Generation',
imgUrl: 'static/img/greyscale.jpg',
price: '$200',
quantity: '10'
},
];

$scope.portfolio = 'Portfolio';
$scope.func = function(a, b){
   return a + b;
}
});
