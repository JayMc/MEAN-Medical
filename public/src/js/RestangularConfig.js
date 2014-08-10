angular.module('RestangularConfig',[]).config(['RestangularProvider', function(RestangularProvider){
	//set REST URL end point prefix
	RestangularProvider.setBaseUrl('/api');

	//if you want to specify the id in urls when using PUT
	RestangularProvider.setRestangularFields({
  		id: '_id'
	});

}]);