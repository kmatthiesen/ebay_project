angular.module('ebay-store').factory('httpFactory',
		[ '$http', '$q', function($http, $q) {

			return {
				getAllFabrics : function() {
					var deferred = $q.defer();
					$http.get('/fabrics').then(function(response) {
						deferred.resolve(response.data);
					}, function(error) {
						console.log(error);
					});
					return deferred.promise;
				}, /* /getAllFabrics */
				newFabric : function(fabric) {
					$http.post('/fabrics/new');
				} /* /newFabric */
			};

		} ]);
