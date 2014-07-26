angular.module('Patient', [])
	.service('Patient', ['$rootScope','Restangular', function($rootScope, Restangular){
	var Patient	= Restangular.service('patients');
	Restangular.extendModel('patients', function(model){
		model.fullname = function(){
			return this.fname+' '+this.sname;
		};
		model.over18 = function(){
			if(this.age >= 18){
				return 'yes';
			}else{
				return 'no';
			}
			
		};
		return model;
	})

	return Patient;
}]);
