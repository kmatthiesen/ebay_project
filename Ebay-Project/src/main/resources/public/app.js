// Code goes here

(function() {
  var app = angular.module('ebay-store', []);



  app.controller('StoreController', ["$scope", "$http", function($scope, $http) {

    $http.get('/fabrics').then(
      function(response) {
        $scope.$apply(function(){
          $scope.products = response.data;
        });
      });

    this.tab = -1;

    this.isSet = function(checkTab){
      return this.tab == checkTab;
    };

    this.setTab = function(activeTab) {
      this.tab = activeTab;
    };

    // this.applycrap = function(){
    //   console.log(1);
    // };




  }]);


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
