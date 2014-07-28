angular.module('appRoutes',[]).config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: 'views/home.html'
		})

		.state('patients', {
			url: '/patients',
			views: {
				'': {
					templateUrl: 'views/patients/index.html'
				},
				'main@patients': {
					templateUrl: 'views/patients/list.html',
					controller: 'PatientsListCtrl'
				},
				'side@patients': {
					templateUrl: 'views/patients/details.html',
					controller: 'PatientsDetailsCtrl'
				},
				'bottom@patients': {
					templateUrl: 'views/patients/appointments.html',
					controller: 'PatientsAppointmentsCtrl'
				}
			}
		})
}]);