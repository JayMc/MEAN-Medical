angular.module('RestangularConfig',[]).config(['RestangularProvider', function(RestangularProvider){
	//set REST URL end point prefix
	RestangularProvider.setBaseUrl('/api');

}]);