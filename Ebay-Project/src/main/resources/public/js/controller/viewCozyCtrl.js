angular.module('ebay-store').controller('viewCozyCtrl',
		[ '$scope', 'getCozy', function($scope, getCozy) {


			$scope.cozys = getCozy;

			$scope.tab = -1;

			$scope.isSet = function(checkTab) {
				return $scope.tab == checkTab;
			};

			$scope.setTab = function(activeTab) {
				$scope.tab = activeTab;
			};

		} ]);
