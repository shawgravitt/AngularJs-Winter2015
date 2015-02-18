angular.module('instagramModule').controller('instagramTagController', ['$scope', 'instagramTagService', function($scope, instagramTagService) {
  var ctrl = this;

  ctrl.getTaggedImages = function() {
    instagramTagService.getTaggedImages()
      .then(function(results) {
        ctrl.igData = results.data;
      }, function(error) {
        console.log('controller error in getting tagged images');
      });
  };

  ctrl.getTaggedImages();
}]);
