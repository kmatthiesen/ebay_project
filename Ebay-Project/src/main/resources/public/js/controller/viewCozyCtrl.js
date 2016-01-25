angular.module('ebay-store').controller('viewCozyCtrl',
		[ '$scope', 'httpFactory', function($scope, httpFactory) {

			httpFactory.getAllCozy().then(function(response) {
				$scope.cozys = response.data;
			});

			$scope.tab = -1;

			$scope.isSet = function(checkTab) {
				return $scope.tab == checkTab;
			};

			$scope.setTab = function(activeTab) {
				$scope.tab = activeTab;
			};

		} ]);
