angular.module('ebay-store').controller('createCozyCtrl', ['$scope', '$state', 'getFabric', 'cozyService', function($scope, $state, getFabric, cozyService){

    $scope.fabrics = getFabric;

    $scope.addCozy = function(){
        console.log($scope.cozy);
        cozyService.newCozy($scope.cozy);
    };

}]);
