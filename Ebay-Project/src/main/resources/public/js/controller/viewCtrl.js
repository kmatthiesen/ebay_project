angular.module('ebay-store').controller('viewCtrl',
		[ '$scope', 'getFabric', function($scope, getFabric) {

			$scope.fabrics = getFabric;

			$scope.tab = -1;

			$scope.isSet = function(checkTab) {
				return $scope.tab == checkTab;
			};

			$scope.setTab = function(activeTab) {
				$scope.tab = activeTab;
			};

		} ]);
