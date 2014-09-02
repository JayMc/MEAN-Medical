angular.module('PatientsListCtrl', ['ngGrid']).controller('PatientsListCtrl', ['$scope', 'PatientsService', function($scope, PatientsService){

	$scope.filterOptions = {
		filterText: ''
	};

	$scope.newPatient = {
		fname: 'new name',
		sname: 'svsd'
	}

	/*$scope.modalShown = false;
	$scope.toggleModal = function(){
		$scope.modalShown = !$scope.modalShown;
	}
	$scope.saveNewPatient = function(){
		PatientsService.createPatient('thing');
	}
	*/

	$scope.modalShown = false;
	$scope.addPatient = function() {
	 	 /*
		PatientsService.setCurrentPatient({
			age: 0,
			fname: ''
		});
		*/
/*
		var newPatient = {
			fname: 'Zor',
			age: 99
		}

		Patient.post(newPatient).then(function(){
			//fetch new list of patients
			PatientsService.getPatients();
		});
		*/
	 	PatientsService.setCurrentPatient(null);
	  	$scope.modalShown = !$scope.modalShown;
	};
	$scope.confirmCtrl = function () {
	    alert('confirmed');
	}

	//when patient list changes update this local scope or patients
	$scope.$on('patientList.change', function(event,patientList){
		$scope.patients = patientList;
	})

	$scope.btns = '<button class="btn btn-default btn-xs" ng-click="deletePatient($event, row)">Delete</button>';

	$scope.deletePatient = function(event, row){
		event.stopPropagation();
		PatientsService.removePatient(row.entity);
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
				cellTemplate: $scope.btns,
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