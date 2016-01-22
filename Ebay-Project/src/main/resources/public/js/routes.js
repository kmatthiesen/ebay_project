'use strict';

angular.module('omdb').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/view');

	$stateProvider.state('search', {

		url: '/search',
		templateUrl: 'template/search.tpl.html',
		controller: 'searchCtrl'

	}).state('view', {

		url: '/view',
		templateUrl: 'template/viewMovies.tpl.html',
		controller: 'viewCtrl'

	}).state('detail', {

		url: '/detail',
		templateUrl: 'template/movieDetail.tpl.html',
		controller: 'detailCtrl'
		
	});



}]);
