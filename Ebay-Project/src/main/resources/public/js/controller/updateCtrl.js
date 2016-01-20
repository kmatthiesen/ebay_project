angular.module('ebay-store').controller('updateController', ['$scope', 'httpFactory', function($scope, httpFactory){
    $scope.clicky = function(event, name, serial){
        fabric.fabric_name = event.target.parentNode.id;
        fabric.serial_num = serial;
        fabric.fabric_name = name;
        httpFactory.newFabric(fabric).then(function(){

        });
    };
}]);
