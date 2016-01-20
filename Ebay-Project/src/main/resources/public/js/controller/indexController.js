angular.module('ebay-store').controller('IndexController',
		[ '$scope', 'httpFactory', function($scope, httpFactory) {

			httpFactory.getAllFabrics().then(function(response) {
				$scope.fabrics = response;
			});

			$scope.tab = -1;

			$scope.isSet = function(checkTab) {
				return $scope.tab == checkTab;
			};

			$scope.setTab = function(activeTab) {
				$scope.tab = activeTab;
			};

		} ]);
