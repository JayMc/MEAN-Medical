angular.module('PatientsListCtrl', ['ngGrid']).controller('PatientsListCtrl', ['$scope', 'PatientsService', function($scope, PatientsService){

	$scope.filterOptions = {
		filterText: ''
	};

	//when patient list changes update this local scope or patients
	$scope.$on('patientList.change', function(event,patientList){
		$scope.patients = patientList;
	})

	$scope.testBtn = '<button class="btn btn-default btn-xs" ng-click="testClick(row)">test</button>';

	$scope.testClick = function(row){
		console.log(row.entity);
	}

	$scope.gridOptions = {
		data: 'patients',
		//selectedItem: 
		//afterSelectionChange: function(rowItem, event){
		beforeSelectionChange: function(rowItem, event){
			$scope.focusPatient(rowItem.entity);
		},
		columnDefs: [
			{
				//field:'fullname()',
				field:'fname',
				displayName:'Name',
				cellClass: 'gridCell',
				headerClass: 'gridHeader'
			},
			/*{
				//fullname() cannot be filtered on
				field: 'fullname()',
				displayName: 'Fullname',
				cellClass: 'gridCell',
				headerClass: 'gridHeader'
			},*/
			{
				field:'age',
				displayName:'Age',
				cellClass: 'gridCell',
				headerClass: 'gridHeader'
			},
			{
				displayName: 'Actions',
				cellTemplate: $scope.testBtn,
				cellClass: 'gridCell',
				headerClass: 'gridHeader'
			}
		],
		multiSelect: false,
		filterOptions: $scope.filterOptions
	}

	$scope.focusPatient = function(patient){
		PatientsService.setCurrentPatient(patient);
		console.log(PatientsService.currentPatient);
		patient.fullname();
		//patient.over18();
	}

	//fetch all patients
	PatientsService.getPatients();

}]);