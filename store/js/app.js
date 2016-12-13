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
        .otherwise({
        	redirectTo:"/store"
        })
}])