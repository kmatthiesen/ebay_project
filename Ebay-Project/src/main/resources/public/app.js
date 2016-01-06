// Code goes here

(function() {
  var app = angular.module('ebay-store', []);



  app.controller('StoreController', function($scope, $http) {

    $scope.products = {};
    console.log($scope.products);

    $http.get('/fabrics')
      .success(function(response) {
          $scope.products = response;
          console.log(response);
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


  var items = [{
    name: 'Item one',
    description: "Words",
    amount: 5,
    id:1

  }, {
    name: 'Item 2',
    description: "Words2",
    amount: 4,
    id:2

  }, {
    name: 'Item three',
    description: "Words3",
    amount: 12,
    id:3
  }, {
    name: 'Item 4',
    description: "Words4",
    amount: 9001,
    id:4
  }
  ];

})();
