ctrlStore.controller("storeController",["$scope","storeServ","$routeParams",function($scope,storeServ,$routeParams){
    var vm = $scope;
    vm.products = storeServ.store.products;
    
    // 如果有参数，则返回对应的水果数据
    if($routeParams.productSku){
    	vm.product = storeServ.store.getProduct($routeParams.productSku);
    	console.log(vm.product);
    }
}])
