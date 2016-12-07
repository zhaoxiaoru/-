var myApp = angular.module("myApp",["ui.router"]);

myApp.config(function($stateProvider){
    $stateProvider
       .state("home",{
       	   url:"/home",
       	   templateUrl:"/app/src/scripts/tpls/home.html",
       	   controller:"homeController"
       })
       .state("product",{
       	   url:"/product/:id",
       	   templateUrl:"/app/src/scripts/tpls/product.html",
       	   controller:"productController"
       })
})

myApp.controller("homeController",["$scope",function($scope){}])

myApp.controller("productController",["$scope",function($scope){}])