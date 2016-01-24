angular.module('ebay-store').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/view');

	$stateProvider.state('update', {

		url: '/update/:id',
		templateUrl: 'template/updateFabric.tpl.html',
		controller: 'updateCtrl'

	}).state('view', {

		url: '/view',
		templateUrl: 'template/viewFabric.tpl.html',
		controller: 'viewCtrl'

	}).state('create', {

		url: '/create',
		templateUrl: 'template/createFabric.tpl.html',
		controller: 'createCtrl'

	});



}]);
