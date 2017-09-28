var eShopper = angular.module('estore', []);

eShopper.config(function($routeProvider) {
  $routeProvider
          .when('/',
                    {
                      templateUrl: 'views/home.html'
                      ,controller: 'home'
                    }
              )

          .when('/products',
                    {
                      templateUrl: 'views/products.html'
                      //controller:  'home',
                    })

          .when('/cart',
                    {
                      templateUrl: 'views/cart.html'
                      ,controller:  'cart',
                    })

          .when('/product-details',
                    {
                      templateUrl: 'views/product-details.html'
                      //controller:  'home',
                    })

          .otherwise({ redirectTo: '/' });
});

eShopper.factory("data", function (){


  var obj = [];

  obj.products = [
    {"nombre": "Levi's Lng Slv Perfect Tee", "precio":"25", "webID":"123456", "imagen":"images/home/product1.jpg"},
    {"nombre": "RAY BAN 7097 Ophthalmic Lens Black", "precio":"30", "webID":"654321", "imagen":"images/home/product2.jpg"},
    {"nombre": "Black Sleeveless Dress", "precio":"15", "webID":"547812", "imagen":"images/home/product3.jpg"},
    {"nombre": "Black Short Sleeve Dress", "precio":"20", "webID":"951852", "imagen":"images/home/product4.jpg"},
    {"nombre": "Modaling Women's Tank Top Tops Blue", "precio":"21", "webID":"654852", "imagen":"images/home/product5.jpg"},
    {"nombre": "V neck short sleeve blouse white", "precio":"200", "webID":"357159", "imagen":"images/home/product6.jpg"},
    {"nombre": "Tank Top Gray", "precio":"12", "webID":"179328", "imagen":"images/home/gallery1.jpg"},
    {"nombre": "Cardigan Blue", "precio":"35", "webID":"264837", "imagen":"images/home/product1.jpg"},
    {"nombre": "Striped Polo Shirt", "precio":"18", "webID":"943464", "imagen":"images/home/product2.jpg"},
    {"nombre": "Polo Shirt Blue", "precio":"15", "webID":"784362", "imagen":"images/home/gallery2.jpg"}
  ];

  obj.cart = [];

  return obj
});


function home ($scope, data) {

  $scope.products = data.products;

  $scope.add = function (prod) {
    data.cart.push(prod);
    console.log("producto agregado");
  }
}

function cart ($scope, data) {

  $scope.cart = data.cart;
  $scope.subTotal = 0.0;
  $scope.total = 0.0;

  $scope.totalizar = function () {

    $scope.total = 0.0;
    for (var i = 0; i < $scope.cart.length; i++) {
      $scope.total += parseFloat($scope.cart[i].precio);
    }
  }

  $scope.delete = function (p) {

    for (var i = 0; i < $scope.cart.length; i++) {
      if (p.nombre == $scope.cart[i].nombre) {
        $scope.cart.splice(i,1);
        $scope.totalizar();
        break;
      }
    }
  }
  $scope.totalizar();

}

eShopper.controller("home", home);
eShopper.controller("cart", cart);
