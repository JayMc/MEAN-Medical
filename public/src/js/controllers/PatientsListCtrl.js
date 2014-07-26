angular.module('PatientsListCtrl', ['ngGrid']).controller('PatientsListCtrl', ['$scope', 'PatientsService', 'Patient', function($scope, PatientsService, Patient){

	$scope.filterOptions = {
		filterText: ''
	};

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