angular.module('instagramModule').controller('instagramController', ['$scope', '$interval', 'instagramService', function($scope, $interval, instagramService) {

  var ctrl = this,
    interval;

  ctrl.igData = [];
  ctrl.activeImageIndex = 0;

  ctrl.incrementActiveIndex = function() {

    if (ctrl.activeImageIndex === ctrl.igData.length - 1) {
      ctrl.getTaggedImages();
    } else {
      ctrl.activeImageIndex ++;
    }
  };

  ctrl.restActiveIndex = function() {
    ctrl.activeImageIndex = 0;
  };



	ctrl.getPopularImages = function() {
		instagramService.getPopularImages()
		.then(function(results) {
			ctrl.igData = results.data;
		}, function(error) {
			console.log('controller error in getting popular images');
		});
	};

	//ctrl.getPopularImages();


  ctrl.getTaggedImages = function() {
    if (interval) {
      $interval.cancel(interval);
    }
    instagramService.getTaggedImages()
      .then(function(results) {
        ctrl.igData = results.data;
        interval = $interval(ctrl.incrementActiveIndex, 8000);
      }, function(error) {
        console.log('controller error in getting tagged images');
      });
  };

  ctrl.getTaggedImages();





  $scope.modalOpenController = function($event) {
    $('.modal-container').css('display', 'block');

  };

  $scope.modalCloseController = function($event) {
    $('.modal-container').css('display', 'none');
  };


}]);
