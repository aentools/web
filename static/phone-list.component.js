angular.module('phoneList').component('phoneList', {
template:
'<!-- Section-->'+
'<section class="py-5">'+
'<div class="container px-4 px-lg-5 mt-5">'+
'<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">'+
'<div class="col mb-5" ng-repeat="phone in $ctrl.phones">'+
'<div class="card h-100">'+
'<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>'+
'<!-- Product image-->'+
'<img class="card-img-top" src="{{phone.imgUrl}}" alt="..." />'+
'<!-- Product details-->'+
'<div class="card-body p-4">'+
'<div class="text-center">'+
'<!-- Product name-->'+
'<h5 class="fw-bolder">{{phone.name}}</h5>'+
'<!-- Product price-->'+
'<span class="text-muted text-decoration-line-through">$20.00</span><br>'+
'$18.00'+
'</div>'+
'</div>'+
'<!-- Product actions-->'+
'<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">'+
'<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</section>',
controller: function PhoneListController() {
this.phones = [
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
this.orderProp = 'age';
}
});
