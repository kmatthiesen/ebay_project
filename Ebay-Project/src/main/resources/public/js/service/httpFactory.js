angular.module('ebay-store').factory('httpFactory',
		[ '$http', function($http) {

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

			function getAllCozy() {
				return $http.get('/cozy');
			}

			function newCozy(cozy) {
				return $http.post("/cozy/new", cozy);
			}

			return {
				getAllFabrics : getAllFabrics,
				newFabric : newFabric,
				getFabric : getFabric,
				updateFabric : updateFabric,
				deleteFabric : deleteFabric,
				getAllCozy : getAllCozy,
				newCozy : newCozy
			};

		} ]);
