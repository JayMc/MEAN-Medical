angular.module('PatientsAppointmentsCtrl', ['ngGrid']).controller('PatientsAppointmentsCtrl', ['$scope', 'PatientsService', 'Patient', function($scope, PatientsService, Patient){

	$scope.appointments = [];

	$scope.$on('currentPatient.change', function(event, currentPatient){
		//get appointments
		currentPatient.getList('appointments').then(function(appointments){
			console.log(appointments);
			$scope.appointments = appointments;
		})
		
		
	})

	$scope.gridOptions = {
		data: 'appointments',
		//selectedItem: 
		//afterSelectionChange: function(rowItem, event){
		beforeSelectionChange: function(rowItem, event){
			$scope.focusPatient(rowItem.entity);
		},
		columnDefs: [
			{
				field:'type',
				displayName:'Type',
				cellClass: 'gridCell',
				headerClass: 'gridHeader'
			}
		],
		multiSelect: false
	}

}])