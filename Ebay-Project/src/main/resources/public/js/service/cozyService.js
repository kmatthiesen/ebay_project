angular.module('ebay-store').service('cozyService',
		[ '$http', function($http) {



			function getAllCozy() {
				return $http.get('/cozy');
			}

			function newCozy(cozy) {
				return $http.post("/cozy/new", cozy);
			}

			return {

				getAllCozy : getAllCozy,
				newCozy : newCozy

			};

		} ]);
