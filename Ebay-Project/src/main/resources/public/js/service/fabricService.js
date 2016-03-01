angular.module('ebay-store').service('fabricService', ['$http', function($http) {

    function getAllFabrics() {

        return $http.get('/fabrics');

    }

    function newFabric(fabric) {

        return $http.post('/fabrics/new', fabric);

    }

    function getFabric(id) {

        return $http.get('/fabrics/'+id);

    }

    function updateFabric(fabric){

        return $http.put('/fabrics/update', fabric);

    }

    function deleteFabric(id){

        return $http.delete('/fabrics/delete/' + id);

    }

    return {

        getAllFabrics : getAllFabrics,
        newFabric : newFabric,
        getFabric : getFabric,
        updateFabric : updateFabric,
        deleteFabric : deleteFabric

    };
}]);
