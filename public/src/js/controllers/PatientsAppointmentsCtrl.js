angular.module('PatientsAppointmentsCtrl', ['ngGrid']).controller('PatientsAppointmentsCtrl', ['$scope', 'PatientsService', 'Patient', function($scope, PatientsService, Patient){

	$scope.appointments = [];

	$scope.$on('currentPatient.change', function(event, currentPatient){
		//get appointments
		if(currentPatient != null){
			currentPatient.getList('appointments').then(function(appointments){
				console.log(appointments);
				$scope.appointments = appointments;
			})
		}else{
			$scope.appointments = [];
		}
		
		
	})

	$scope.gridOptions = {
		data: 'appointments',
		//selectedItem: 
		//afterSelectionChange: function(rowItem, event){
		beforeSelectionChange: function(rowItem, event){
			$scope.focusAppointment(rowItem.entity);
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

	$scope.focusAppointment = function(appointment){
		
	}

}])