angular.module('strainsModule').service('strainsService', ['$http', '$q', function($http, $q) {


  this.popularStrains = function() {
    var deferred = $q.defer(),
        url = 'http://data.leafly.com/strains',
        obj = {'Page':0, 'Take':50, 'sort':'popular'};

    $http.post(url, obj)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

  this.getStrainsByName = function(name) {
    var deferred = $q.defer(),
        url = 'http://data.leafly.com/strains/' + name;

    $http.get(url)
      .success(function (results) {
        var data = results || [];
        deferred.resolve(data);
      })
      .error(function (error) {
        deferred.reject (error);
      });

    return deferred.promise;
  };

}]);
