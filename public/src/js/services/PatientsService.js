angular.module('PatientsService', []).service('PatientsService', ['$rootScope','Restangular', 'Patient', function($rootScope, Restangular, Patient){
	var service = {
		currentPatient: [],
		setCurrentPatient: function(patient){
			this.currentPatient = patient;
			$rootScope.$broadcast('currentPatient.change', patient);
		},
		getPatients: function(){
				Patient.getList().then(function(patients){
				$rootScope.$broadcast('patientList.change', patients);
			})
		},
		removePatient: function(patient){
			patient.remove().then(function(){
				//refresh list
				this.getList();
			});
		},
		createPatient: function(newPatient){
			console.log(newPatient);
		}
	};

	return service;
}]);
