!function(e){function r(o){if(t[o])return t[o].exports;var l=t[o]={exports:{},id:o,loaded:!1};return e[o].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(2)},,function(e,r){var t=angular.module("myApp",["ngRoute"]);t.config(["$routeProvider",function(e){e.when("/home",{templateUrl:"/app/src/scripts/tpls/home.html",controller:"homeController",caseInsensitiveMatch:!0}).when("/product/:id/:name",{templateUrl:"/app/src/scripts/tpls/product.html",controller:"productController",caseInsensitiveMatch:!0}).when("/service",{templateUrl:"/app/src/scripts/tpls/service.html",controller:"serviceController as serviceCon",resolve:{serviceData:function(e){return e.get("/api/getLivelist.php").then(function(e){return e.data.data})}}}).when("/service/:id",{templateUrl:"/app/src/scripts/tpls/serviceDetail.html",controller:"serviceDetailController",controllerAs:"serDetailCon"}).when("/error",{template:"<h2>页面走丢了~~~~~~~~~</h2>"}).when("/search/:searchtext",{templateUrl:"/app/src/scripts/tpls/search.html",controller:"searchController"}).otherwise("/home")}]),t.controller("homeController",["$scope",function(e){e.msg="hello Home~~~~"}]),t.controller("productController",["$scope","$routeParams","$http",function(e,r,t){e.msg="hello Product~~~~";var o=r.id,l=r.name,n=null;t({url:"/api/getLivelist.php",method:"post",data:{id:o,name:l}}).then(function(r){n=r.data.data,e.datas=n})}]),t.controller("serviceController",["$rootScope","$scope","serviceData","$location","$log","$route",function(e,r,t,o,l,n){var c=this;c.serviceListData=t,c.toSearch=function(){c.search&&o.url("/search/"+c.search)},r.$on("$routeChangeStart",function(e,r,t,o){confirm("确定要离开该路由，去"+r.$$route.originalPath)||e.preventDefault(),console.log(e)}),e.$on("$routeChangeSuccess",function(){l.info("ok~~~")}),c.reLoadData=function(){n.reload()}}]),t.controller("serviceDetailController",["$scope","$routeParams",function(e,r){var t=r.id;this.id=t}]),t.controller("searchController",["$scope","$routeParams",function(e,r){e.search=r.searchtext}])}]);