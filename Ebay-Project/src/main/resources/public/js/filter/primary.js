angular.module('ebay-store').filter('primaryFilter', function(){
    return function(input) {
        return (input ? 'Primary' : 'Secondary');
    };
});
