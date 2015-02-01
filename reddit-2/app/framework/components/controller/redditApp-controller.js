angular.module('redditAppModule').controller('redditAppController', ['$scope', 'RedditAppFactory', function($scope, RedditAppFactory) {
  var ctrl = this;

  ctrl.reddit = new RedditAppFactory();

}]);
