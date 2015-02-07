angular.module('instagramModule').service('instagramService', ['$http', '$q', 'clientId', function($http, $q, clientId) {

  var instagramUri = 'https://api.instagram.com/v1/';

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getPopularImages = function() {
    var deferred = $q.defer();
    //var url = instagramUri + 'media/popular?client_id=' + clientId + '&callback=JSON_CALLBACK';
    var url = instagramUri + 'tags/rei1440project/media/recent?client_id=' + clientId + '&callback=JSON_CALLBACK';


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
