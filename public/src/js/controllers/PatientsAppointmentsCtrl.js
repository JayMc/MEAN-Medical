angular.module('PatientsAppointmentsCtrl', ['ngGrid']).controller('PatientsAppointmentsCtrl', ['$scope', 'PatientsService', function($scope, PatientsService){

	$scope.appointments = [];

	$scope.$on('currentPatient.change', function(event, currentPatient){
		//$scope.patient = currentPatient;
		console.log(currentPatient);
		currentPatient.one(currentPatient._id).getList('appointments').then(function(appointments){
			$scope.appointments = appointments;
		})
		//get appointments
		
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