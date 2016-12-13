ctrlStore.controller("storeController",["$scope","storeServ",function($scope,storeServ){
    var vm = $scope;
    vm.products = storeServ.store;
    console.log(vm.products);
}])

ctrlStore.controller("productController",["$scope",function($scope){

}])