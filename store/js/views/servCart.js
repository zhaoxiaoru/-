servStore.factory("cartServ",function(){
	var data = new shoppingCart("Angular-store");
	return {
		cart:data
	}
})