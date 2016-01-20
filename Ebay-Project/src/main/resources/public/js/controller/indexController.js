angular.module('ebay-store').controller('IndexController',
		[ '$scope', 'getHttp', function($scope, getHttp) {

			getHttp.get().then(function(response) {
				$scope.products = response;
			});

			$scope.tab = -1;

			$scope.isSet = function(checkTab) {
				return $scope.tab == checkTab;
			};

			$scope.setTab = function(activeTab) {
				$scope.tab = activeTab;
			};

		} ]);
