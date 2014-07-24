var app = angular.module('app', [
//routing
	'ui.router',
	'appRoutes',

//Restangular
	'restangular',
	'RestangularConfig',

//Patients
	'PatientsListCtrl',
	'PatientsDetailsCtrl',
	'PatientsService',

//ng-grid
	'ngGrid'
]);