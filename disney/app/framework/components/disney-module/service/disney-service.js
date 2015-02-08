angular.module('disneyModule').service('disneyService', ['$http', '$q', function($http, $q) {

  //var attractionsUrl = 'http://touringplans.com/magic-kingdom/attractions.json';

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getDisneyAttractions = function() {
    var deferred = $q.defer();
    //var url = 'http://touringplans.com/magic-kingdom/attractions/haunted-mansion.json';
    var url = 'http://touringplans.com/magic-kingdom/attractions.json';

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
