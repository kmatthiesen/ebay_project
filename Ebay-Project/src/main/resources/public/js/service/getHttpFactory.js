angular.module('ebay-store').factory('getHttp',
		[ '$http', '$q', function($http, $q) {

			return {
				get : function() {
					var deferred = $q.defer();
					$http.get('/fabrics').then(function(response) {
						deferred.resolve(response.data);
					}, function(error) {
						console.log(error);
					});
					return deferred.promise;
				}
			};

		} ]);
