angular.module('ebay-store').controller('viewCtrl',
		[ '$scope', 'httpFactory', function($scope, httpFactory) {

			httpFactory.getAllFabrics().then(function(response) {
				console.log(response.data);
				$scope.fabrics = response.data;
			});

			$scope.tab = -1;

			$scope.isSet = function(checkTab) {
				return $scope.tab == checkTab;
			};

			$scope.setTab = function(activeTab) {
				$scope.tab = activeTab;
			};

		} ]);
