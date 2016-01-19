angular.module('ebay-store').controller('IndexController', ['$scope', '$http', function($scope, $http) {

  $scope.products = {};

  $http.get('/fabrics')
    .success(function(response) {
        $scope.products = response;
      })
    .error(function(error){
      console.log("Error: " + error);
    });

  $scope.tab = -1;

  $scope.isSet = function(checkTab){
    return $scope.tab == checkTab;
  };

  $scope.setTab = function(activeTab) {
    $scope.tab = activeTab;
  };




}]);
