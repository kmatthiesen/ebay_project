angular.module('ebay-store').controller('createCozyCtrl', ['httpFactory', '$scope', '$state', function(httpFactory, $scope, $state){
    httpFactory.getAllFabrics().then(function(response) {
        $scope.fabrics = response.data;
    });

}]);
