angular.module('PatientsNewCtrl', []).controller('PatientsNewCtrl', ['$scope', 'PatientService', 'Patient', function($scope, PatientService, Patient){

	$scope.newPatient = {
		fname: 'new name',
		sname: 'svsd'
	};

	$scope.save = function(){
		$scope.patient.fname = newPatient.fname;
		$scope.patient.sname = newPatient.sname;
		$scope.patient.post();
	};

}]);