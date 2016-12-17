var AngularStore = angular.module("AngularStore",['ngRoute','ctrl-store','serv-store']);

AngularStore.config(['$routeProvider',function($routeProvider){
     $routeProvider
        .when("/store",{
        	templateUrl:"./tpls/store.html",
            controller:"storeController"
        })
        .when("/products/:productSku",{
        	templateUrl:"./tpls/product.html",
            controller:"storeController"
        })
        .when("/cart",{
            templateUrl:"./tpls/shoppingCart.html",
            controller:"cartController"
        })
        .otherwise({
        	redirectTo:"/store"
        })
}])