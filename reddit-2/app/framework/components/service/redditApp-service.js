angular.module('redditAppModule').service('redditAppService', ['$http', '$q', function($http, $q) {

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.nextPage = function() {
    var deferred = $q.defer(),
    url = 'http://api.reddit.com/hot?after=' + this.after + '&jsonp=JSON_CALLBACK';

    $http.jsonp(url)
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
