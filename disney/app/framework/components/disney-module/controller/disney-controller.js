angular.module('disneyModule').controller('disneyController', ['$scope', 'disneyService', function($scope, disneyService) {
  var ctrl = this;

  ctrl.getDisneyAttractions = function() {
    disneyService.getDisneyAttractions()
      .then(function(resutls) {
        ctrl.attractionData = resutls.data;
      }, function(error) {
        alert('controller error getting attraction data');
      });
  };
  ctrl.getDisneyAttractions();
}]);
