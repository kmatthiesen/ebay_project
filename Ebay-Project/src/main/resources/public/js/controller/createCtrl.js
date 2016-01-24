angular.module('ebay-store').controller('createCtrl', ['httpFactory', '$scope', '$state', function(httpFactory, $scope, $state){
  $scope.addFabric = function(){
    console.log($scope.fabric);
    httpFactory.newFabric($scope.fabric).then(function(){
      $state.go('view');
    });
  };

  $scope.update = function(){
    console.log($scope.fabric);
  };

}]);
