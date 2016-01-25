angular.module('ebay-store').controller('updateCtrl', ['$scope', 'httpFactory', '$stateParams', '$state', function($scope, httpFactory, $stateParams, $state){
    httpFactory.getFabric($stateParams.id).then(function(response){
      $scope.fabric = response.data;
      if ($scope.fabric.size == 10){
        $scope.fabricSize = $scope.sizes[0];
      } else {
        $scope.fabricSize = $scope.sizes[1];
      }
    });

    $scope.updateFabric = function(){
      $scope.fabric.size = $scope.fabricSize.value;
      console.log($scope.fabric);
      httpFactory.updateFabric($scope.fabric).then(function(){
        $state.go('viewFabric');
      });
    };

    $scope.deleteFabric = function() {
      httpFactory.deleteFabric($scope.fabric.id).then(function(){
        $state.go('viewFabric');
      });
    };

    $scope.sizes = [{value:10}, {value:12}];

}]);
