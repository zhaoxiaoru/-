angular.module("myApp",[])
/*.controller("democon",["$scope",function($scope){
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
           name:"JavaScript高级程序设计",publite:false,ishas:true,updated:1480574804538
       },
       {
           name:"Angular权威指南",publite:true,ishas:false,updated:1470574804525
       },
       {
           name:"Vue实战",publite:false,ishas:true,updated:1480374804538
       },
       {
           name:"Node全栈开发",publite:true,ishas:false,updated:1480271504538
       }
    ]

    $scope.price = 199.98;
}])*/

/*.controller("myController",["$scope",function($scope){
    var friends = [
        {
          name:"marry",
          phone:"13521554644"
        },
        {
          name:"lili",
          phone:"13821555640"
        },
        {
          name:"kitty",
          phone:"13810703695"
        },
        {
          name:"amy",
          phone:"13810452890"
        }
    ]
    $scope.friends = friends;

    $scope.searchText = "";

    $scope.search = function(obj){
       if($scope.searchText !="" ){
           if(obj.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1 || obj.phone.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=-1){
              return true;
           }else{
              return false;
           }
       }else{
           return true;
       }
    }
}])*/

// promise
/*$.ajax("/mock/livelist.json")
.done(function(data){
    console.log(data);
})
.fail(function(){

})
.done(function(){
  console.log("done")
})

$.when($.ajax("/mock/livelist.json"),$.ajax("/mock/liveDetails.json"))
.done(function(data1,data2){
    console.log("执行成功");
})
.fail(function(){
    console.log("执行失败");
})

var dtd = $.Deferred();  // 创建一个deferred对象

var wait = function(dtd){
    var task = function(){
        alert("hello");
        dtd.resolve();   // 将dtd对象的状态改变为已完成
    }
    setTimeout(task,3000);
    return dtd.promise();
}

var d = wait(dtd);

$.when(d)
.done(function(){
    alert("ok");
})
.fail(function(){
    alert("error");
})
*/

.controller("myController",["$scope",function($scope){
     var userInfo = [
        {
           name:"marry",
           salary:12365,
           sex:"girl",
           birthday:new Date("2006-10-05")
        },
        {
           name:"amy",
           salary:19365,
           sex:"girl",
           birthday:new Date("1998-05-05")
        },
        {
           name:"jack",
           salary:9600,
           sex:"boy",
           birthday:new Date("1997-02-25")
        },
        {
           name:"jim",
           salary:10400,
           sex:"girl",
           birthday:new Date("1995-12-25")
        },
        {
           name:"lili",
           salary:8000,
           sex:"girl",
           birthday:new Date("1995-12-25")
        }
     ]
     $scope.userInfo = userInfo;
     $scope.sortColumn = "name";   // 排序字段
     $scope.reverseSort = false;   // 默认的排序方式

     // 设置排序字段
     $scope.setSort = function(column){
         // 如果传递过来的排序字段和当前字段一致，则要降序，否则升序
         $scope.reverseSort = $scope.sortColumn == column?!$scope.reverseSort:false;
         $scope.sortColumn = column;
     }

     // 设置类
     $scope.getClass = function(column){
         if($scope.sortColumn == column){
             return $scope.reverseSort? "allow-down" : "allow-up";
         }
     }
}])
