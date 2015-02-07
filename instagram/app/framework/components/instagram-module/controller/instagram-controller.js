angular.module('instagramModule').controller('instagramController', ['$scope', 'instagramService', function($scope, instagramService) {
	var ctrl = this;

	ctrl.getPopularImages = function() {
		instagramService.getPopularImages()
		.then(function(results) {
			ctrl.igData = results.data;
		}, function(error) {
			console.log('controller error in getting popular images');
		});
	};

	ctrl.getPopularImages();
}]);
