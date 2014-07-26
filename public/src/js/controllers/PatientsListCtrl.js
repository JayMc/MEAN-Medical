angular.module('PatientsListCtrl', ['ngGrid']).controller('PatientsListCtrl', ['$scope', 'PatientsService', 'Patient', function($scope, PatientsService, Patient){
	/*$scope.patients = [
		{
			name: 'Joe',
			age: 20
		},
		{
			name: 'Bill',
			age: 25
		},
		{
			name: 'Joe',
			age: 20
		},
		{
			name: 'Bill',
			age: 25
		},
						{
			name: 'Joe',
			age: 20
		},
		{
			name: 'Bill',
			age: 25
		},
	];*/

	$scope.gridOptions = {
		data: 'patients',
		//selectedItem: 
		//afterSelectionChange: function(rowItem, event){
		beforeSelectionChange: function(rowItem, event){
			$scope.focusPatient(rowItem.entity);
		},
		columnDefs: [
			{
				field:'fname',
				displayName:'Firstname',
				cellClass: 'gridCell',
				headerClass: 'gridHeader'
			},
			{
				field:'age',
				displayName:'Age',
				cellClass: 'gridCell',
				headerClass: 'gridHeader'
			}
		],
		multiSelect: false
	}

	$scope.focusPatient = function(patient){
		PatientsService.setCurrentPatient(patient);
		//console.log();
		patient.fullname();
		//patient.over18();
	}

	$scope.loadPatients = function(){
		console.log('sdfg');
		Patient.getList().then(function(patients){
			$scope.patients = patients;
		})
	};
	$scope.loadPatients();

}]);