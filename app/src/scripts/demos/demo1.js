angular.module("myApp",[])
.controller("democon",["$scope",function($scope){
    var user = [
       {
           user:"marry",
           email:"marry@sohu.com"
       },
       {
           user:"Lili",
           email:"Lili@sohu.com"
       }
    ]
    $scope.user = user;
    $scope.isShow = false;
    $scope.counter = 0;
    $scope.add = function(){
        this.counter++;
    }

    // 所学课程
    $scope.items = [];


    // 添加课程
    $scope.addItem = function(event){
        if(event.keyCode == "13"){
            $scope.items.unshift($scope.item);
            $scope.item = "";
        }
    }
 
    $scope.limit = 4;
    $scope.books = [
       {
           name:"JavaScript高级程序设计",publite:false,updated:1480574804538
       },
       {
           name:"Angular权威指南",publite:true,updated:1470574804525
       },
       {
           name:"Vue实战",publite:false,updated:1480374804538
       },
       {
           name:"Node全栈开发",publite:true,updated:1480271504538
       }
    ]

    $scope.price = 199.98;
}])