angular.module('PatientsDetailsCtrl',[]).controller('PatientsDetailsCtrl', ['$scope','PatientsService', 'Patient', function($scope, PatientsService, Patient){
	
	$scope.$on('currentPatient.change', function(event, currentPatient){
		$scope.form.$cancel();
		$scope.patient = currentPatient;
	})

	//reserved for the form
	$scope.form;
	//on form load it will call this function setting the form so we can use form.$cancel() etc.. from the controller
	$scope.setForm = function(name){
		$scope.form = name;
	}

	$scope.checkName = function(data) {
		console.log($scope.patient);
	    if (data == '') {
	      return "Firstname cannot be empty";
	    }
  	};

  	$scope.savePatient = function(data){
  		console.log('saved patient');
  		console.log(data)
  		$scope.patient.fname = data.fname;
  		$scope.patient.sname = data.sname;
  		$scope.patient.put();
  	}

  	$scope.addPatient = function(){
  		//clear current patien
  		/*
		PatientsService.setCurrentPatient({
			age: 0,
			fname: ''
		});
		*/

		var newPatient = {
			fname: 'Zor',
			age: 99
		}

		Patient.post(newPatient).then(function(){
			//fetch new list of patients
			PatientsService.getPatients();
		});

		//show form edit
		$scope.form.$show();
  	}


}])