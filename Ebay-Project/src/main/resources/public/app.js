// Code goes here

(function() {
  var app = angular.module('ebay-store', []);



  app.controller('StoreController', function($scope, $http) {

    $scope.products = {};
    console.log($scope.products);

    $http.get('/fabrics')
      .success(function(response) {
          $scope.products = response;
          console.log($scope.products);
        })
      .error(function(error){
        console.log("Error: " + error);
      });

    this.tab = -1;

    this.isSet = function(checkTab){
      return this.tab == checkTab;
    };

    this.setTab = function(activeTab) {
      this.tab = activeTab;
    };




  });


  var fabrics = [{
    serial_num: 'TES-001',
    fabric_name: "Test 1"

  }, {
    serial_num: 'TES-002',
    fabric_name: "Test 2",

  }
  ];

})();
