ctrlStore.controller("cartController",["$scope","cartServ","$routeParams",function($scope,storeServ,$routeParams){
    var vm = $scope;
    vm.cart = cartServ.cart;
}])
