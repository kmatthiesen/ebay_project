// Code goes here


  angular.module('ebay-store', []);



  angular.module('ebay-store').controller('StoreController', ['$scope', '$http', function($scope, $http) {

    $scope.products = {};
    console.log($scope.products);

    $http.get('/fabrics')
      .success(function(response) {
          console.log(response);
          $scope.products = response;
          console.log($scope.products);
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


  var fabrics = [{
    serial_num: 'TES-001',
    fabric_name: "Test 1"

  }, {
    serial_num: 'TES-002',
    fabric_name: "Test 2",

  }
  ];
