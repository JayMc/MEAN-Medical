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
	    if (data == '' || data == 'a') {
	      return "Firstname cannot be empty";
	    }
  	};

  	$scope.savePatient = function(){
  		console.log('saved patient');
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
			
		});

		//show form edit
		$scope.form.$show();
  	}


}])