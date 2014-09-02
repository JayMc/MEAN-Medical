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
	'PatientsNewCtrl',
	'PatientsService',
	'PatientsAppointmentsCtrl',
	
//ng-grid
	'ngGrid',
	'xeditable',

//Directives
	'newPatientModal'
]);