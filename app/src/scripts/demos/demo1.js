var myApp = angular.module("myApp",["ngRoute"]); // 注入路由
/*myApp.controller("mainController",["$scope",function($scope){
    $scope.pageUrl = "/app/src/scripts/tpls/home.html";
    $scope.goto = function(page){
        $scope.pageUrl = "/app/src/scripts/tpls/"+page+'.html';
    }
}])
*/

// 配置路由
myApp.config(["$routeProvider",function($routeProvider){
    $routeProvider
       .when("/home",{
           templateUrl:"/app/src/scripts/tpls/home.html",
           controller:"homeController",
           caseInsensitiveMatch:true    // 忽略大小写
       })
       .when("/product/:id/:name",{
           templateUrl:"/app/src/scripts/tpls/product.html",
           controller:"productController",
/*           controllerAs:"productCon",*/
           caseInsensitiveMatch:true
       })
       .when("/service",{
           templateUrl:"/app/src/scripts/tpls/service.html",
           controller:"serviceController as serviceCon",
           resolve:{
              serviceData:function($http){
                 return $http.get("/api/getLivelist.php")
                              .then(function(result){
                                  return result.data.data;
                              })
              }
           }
       })
       .when("/service/:id",{
          templateUrl:"/app/src/scripts/tpls/serviceDetail.html",
          controller:"serviceDetailController",
          controllerAs:"serDetailCon"
       })
       .when("/error",{
           template:"<h2>页面走丢了~~~~~~~~~</h2>"
       })
       .when("/search/:searchtext",{
           templateUrl:"/app/src/scripts/tpls/search.html",
           controller:"searchController"
       })
      /* .otherwise({
           redirectTo:"/error"
       });  */            // 配置默认路由
       .otherwise("/home");
}])

// 控制器

// home
myApp.controller("homeController",["$scope",function($scope){
     $scope.msg = "hello Home~~~~";
}])

// product
myApp.controller("productController",["$scope","$routeParams","$http",function($scope,$routeParams,$http){
     $scope.msg = "hello Product~~~~";
     // $rootParams 这个对象用于接收路由传递的参数
     var id = $routeParams.id,
         name = $routeParams.name,
         datas = null;
     $http({
         url:"/api/getLivelist.php",
         method:"post",
         data:{
            id:id,
            name:name
         }
     }).then(function(result){
         datas = result.data.data;
         $scope.datas = datas;
     })
}])

// service
myApp.controller("serviceController",["$rootScope","$scope","serviceData","$location","$log","$route",function($rootScope,$scope,serviceData,$location,$log,$route){
    var vm = this;
    vm.serviceListData = serviceData;
    vm.toSearch = function(){
       if(vm.search){
          $location.url("/search/"+vm.search);    // 跳转至指定的路由
       }
    }

    $scope.$on("$routeChangeStart",function(event,current,previous,next){
        if(!confirm("确定要离开该路由，去"+current.$$route.originalPath)){
            event.preventDefault();   // 
        }
        console.log(event);
    })


    $rootScope.$on("$routeChangeSuccess",function(){
        $log.info("ok~~~");
    })

    vm.reLoadData = function(){
        $route.reload();   // 重新加载路由，即刷新路由
    }
}])

myApp.controller("serviceDetailController",["$scope","$routeParams",function($scope,$routeParams){
    var id = $routeParams.id;
    this.id = id;
}])

myApp.controller("searchController",["$scope","$routeParams",function($scope,$routeParams){
    $scope.search = $routeParams.searchtext;
}])

/*myApp.controller("countryController",["$scope",function($scope){
     // $scope.name = "中国";
     this.name = "中国";
}])

myApp.controller("provinceController",["$scope",function($scope){
     // $scope.name = "浙江";
     this.name = "浙江"
}])

myApp.controller("cityController",["$scope",function($scope){
     // $scope.name = "杭州";
     this.name = "杭州";
}])*/


