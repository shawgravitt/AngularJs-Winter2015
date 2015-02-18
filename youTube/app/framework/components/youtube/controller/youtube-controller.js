angular.module('youtubeModule').controller('youtubeController', ['$scope', 'youtubeService', function($scope, youtubeService) {
  var ctrl = this;

  ctrl.getYoutube = function() {
    youtubeService.getYoutube()
      .then(function(results) {
        ctrl.youtubeData = results.feed.entry;
      }, function(error) {
        alert('controller');
      });
  };
  ctrl.getYoutube();
}]);
