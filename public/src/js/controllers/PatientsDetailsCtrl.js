angular.module('PatientsDetailsCtrl',[]).controller('PatientsDetailsCtrl', ['$scope','PatientsService', function($scope, PatientsService){
	$scope.$on('currentPatient.change', function(event, currentPatient){
		$scope.patient = currentPatient;
	})
}])