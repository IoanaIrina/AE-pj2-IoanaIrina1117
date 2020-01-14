function CustomerViewModel ()
{
	var self = this;
	
	//Proprieties
	self.products=ko.observableArray();
	self.currentContext=ko.observable("home");
	
	//the product in context is expose as separate fields
	self.currentCustomerFullName = ko.observable("");
	self.currentCustomerEmailAddress = ko.observable("");
	self.currentCustomerPictureURL = ko.observable("");
	
	//Operations
	self.loadCustomers = function()
	{
		self.products.removeAll();
		var dataService = new productDataService();
		var products = dataService.getCustomers();
		
		for (var i=0 ; i< products.length ; i++)
		{
			var product = new Product(
			products[i].id,
			products[i].Name,
			products[i].desciption,
			products[i].pictureURL);
			
			self.products.push(product);
		}
	};
	
	self.viewAll = function ()
	{
		self.currentContext("all");
	}
	
	self.reset = function ()
	{
		self.currentContext("home");
	}
	
	self.setCurrentProduct = function()
	{
		self.currentContext("detail");
		self.currentProduct = this;
		self.currentProductFullName(this.fullName());
		self.currentProductEmailAddress(this.description());
		self.currentProductPictureURL(this.pictureURL());
	};
	self.loadProducts();
}
;
