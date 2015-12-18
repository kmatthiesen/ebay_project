var app = angular.module('store-directives', []);

// app.directive("descriptions", function() {
//   return {
//     restrict: "E",
//     templateUrl: "descriptions.html"
//   };
// });

app.directive("productTabs", function() {
  return {
    restrict: "E",

    templateUrl: "descriptions.html",

    controller: function() {
      this.tab = null;

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
