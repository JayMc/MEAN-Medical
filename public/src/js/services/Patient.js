/*
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
*/

angular.module('Patient', [])
	.service('Patient', ['$rootScope','Restangular', function($rootScope, Restangular){
	var Patient	= Restangular.service('patients');
	Restangular.extendModel('patients', function(model){
		model.fullname = function(){
			console.log('customer method');
			console.log(model.fname)
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

/*
angular.module('job.models', [])
  .service('Job', ['Restangular', function(Restangular) {
    var Job = Restangular.service('jobs');
 
    Restangular.extendModel('jobs', function(model) {
      model.getResult = function() {
        if (this.status == 'complete') {
          if (this.passed === null) return "Finished";
          else if (this.passed === true) return "Pass";
          else if (this.passed === false) return "Fail";
        }
        else return "Running";
      };
 
      return model;
    });
 
    return Job;
  }]);
  */