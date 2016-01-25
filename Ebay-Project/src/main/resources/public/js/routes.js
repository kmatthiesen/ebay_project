angular.module('ebay-store').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/view/fabric');

	$stateProvider.state('updateFabric', {

		url: '/update/fabric/:id',
		templateUrl: 'template/updateFabric.tpl.html',
		controller: 'updateCtrl'

	}).state('viewFabric', {

		url: '/view/fabric',
		templateUrl: 'template/viewFabric.tpl.html',
		controller: 'viewCtrl'

	}).state('createFabric', {

		url: '/create/fabric',
		templateUrl: 'template/createFabric.tpl.html',
		controller: 'createCtrl'

	});



}]);
