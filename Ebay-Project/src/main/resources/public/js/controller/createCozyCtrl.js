angular.module('ebay-store').controller('createCozyCtrl', ['httpFactory', '$scope', '$state', function(httpFactory, $scope, $state){
    httpFactory.getAllFabrics().then(function(response) {
        $scope.fabrics = response.data;
    });

    $scope.addCozy = function(){
        console.log($scope.cozy);
        httpFactory.newCozy($scope.cozy);
    };

}]);
