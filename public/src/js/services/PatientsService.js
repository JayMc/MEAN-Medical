angular.module('PatientsService', []).service('PatientsService', ['$rootScope','Restangular', function($rootScope, Restangular){
	var service = {
		currentPatient: [],
		setCurrentPatient: function(patient){
			this.currentPatient = patient;
			$rootScope.$broadcast('currentPatient.change', patient);
		}
	};

	return service;
}]);
