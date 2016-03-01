angular.module('ebay-store').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/view/cozy');

	$stateProvider

	.state('updateFabric', {

		url: '/update/fabric/:id',
		templateUrl: 'template/updateFabric.tpl.html',
		controller: 'updateCtrl',
		resolve : {

			getFabric: ['$stateParams', 'fabricService', function($stateParams, fabricService){
				console.log($stateParams.id);
				return fabricService.getFabric($stateParams.id).then(function(response) {
					return response.data;
				});
			}]

		}

	}).state('viewFabric', {

		url: '/view/fabric',
		templateUrl: 'template/viewFabric.tpl.html',
		controller: 'viewCtrl',
		resolve : {

			getFabric: ['fabricService', function(fabricService){
				return fabricService.getAllFabrics().then(function(response) {
					return response.data;
				});
			}]

		}

	}).state('createFabric', {

		url: '/create/fabric',
		templateUrl: 'template/createFabric.tpl.html',
		controller: 'createCtrl'

	}).state('viewCozy', {

		url: '/view/cozy',
		templateUrl: 'template/viewCozy.tpl.html',
		controller: 'viewCozyCtrl',
		resolve : {

			getCozy: ['cozyService', function(cozyService){
				return cozyService.getAllCozy().then(function(response) {
					return response.data;
				});
			}]

		}

	}).state('createCozy', {

		url: '/create/cozy',
		templateUrl: 'template/createCozy.tpl.html',
		controller: 'createCozyCtrl',
		resolve : {

			getFabric: ['fabricService', function(fabricService){
				return fabricService.getAllFabrics().then(function(response) {
					return response.data;
				});
			}]

		}

	});



}]);
