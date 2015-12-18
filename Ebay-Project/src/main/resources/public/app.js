// Code goes here

(function() {
  var app = angular.module('ebay-store', []);



  app.controller('StoreController', function() {
    this.products = items;

  });

  app.directive("items", function() {
    return {
      restrict: "E",

      templateUrl: "descriptions.html",

      controller: function() {
        this.tab = 0;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
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
