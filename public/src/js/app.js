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
	'PatientsAppointmentsCtrl',
	
//ng-grid
	'ngGrid'
]);