angular.module('PatientsListCtrl', ['ngGrid']).controller('PatientsListCtrl', ['$scope', 'PatientsService', function($scope, PatientsService){
	$scope.patients = [
		{
			name: 'Joe',
			age: 20
		},
		{
			name: 'Bill',
			age: 25
		},
	];

	$scope.gridOptions = {
		data: 'patients',
		//selectedItem: 
		afterSelectionChange: function(rowItem, event){
			$scope.focusPatient(rowItem.entity);
		},
		columnDefs: [
			{
				field:'name',
				displayName:'Name',
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
	}

}]);