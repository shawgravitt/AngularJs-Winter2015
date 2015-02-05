angular.module('youtubeModule').service('youtubeService', ['$http', '$q', function($http, $q) {

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getData = function() {
    var deferred = $q.defer();
    var url = 'http://gdata.youtube.com/feeds/api/standardfeeds/most_popular?v=2&alt=json';

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
