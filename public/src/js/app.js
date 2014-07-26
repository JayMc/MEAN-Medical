var app = angular.module('app', [
//routing
	'ui.router',
	'appRoutes',

//Restangular
	'restangular',
	'RestangularConfig',

//Patients
'Patient',
	'PatientsListCtrl',
	'PatientsDetailsCtrl',
	'PatientsService',



//ng-grid
	'ngGrid'
]);