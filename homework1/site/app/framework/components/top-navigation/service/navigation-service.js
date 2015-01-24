angular.module('topNavigation').service('navigationService', ['$http', '$q', function($http, $q) {

  var navigationUrl = 'app/framework/components/top-navigation/model/navigation.json';

  /**
   * function getData
   * service call pattern using angular $q promises
   * resolve returns response, reject returns error
   * @returns {promise.promise|jQuery.promise}
   */
  this.getNavItems = function() {
    var deferred = $q.defer();


    $http.get(navigationUrl)
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
