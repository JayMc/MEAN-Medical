angular.module('PatientsListCtrl', []).controller('PatientsListCtrl', ['$scope', 'PatientsService', function($scope, PatientsService){
	$scope.patients = [
		{
			name: 'Joe'
		},
		{
			name: 'Bill'
		},
	];

	$scope.focusPatient = function(patient){
		PatientsService.setCurrentPatient(patient);
	}

}]);