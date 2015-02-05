angular.module('youtubeModule').controller('youtubeController', ['$scope', 'youtubeFactory', function($scope, youtubeFactory) {
  var ctrl = this;

  ctrl.youtube = new youtubeFactory();

}]);
