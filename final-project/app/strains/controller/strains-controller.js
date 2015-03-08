angular.module('strainsModule').controller('strainsController', ['$scope', '$modal', 'strainsService', 'StrainsFactory', function($scope, $modal, strainsService, StrainsFactory) {

  var ctrl = this;
  ctrl.strains = new StrainsFactory();

  ctrl.popularStrains = function() {
    strainsService.popularStrains().then(function(results) {
      ctrl.strainData = results.Strains;
    }, function(error) {
      console.log('error in controller');
    });
  };

  ctrl.popularStrains();


  ctrl.getStrainsByName = function(name) {
    console.log(name);
    strainsService.getStrainsByName(name).then(function(results) {
      ctrl.nameData = results;
      ctrl.open(name);
    }, function(error) {
      console.log('error with name');
    });
  };

  ctrl.open = function(name) {
    var modalInstance = $modal.open({
      templateUrl: 'app/strains/view/strains-modal-view.html',
      controller: 'modalController',
      size: 'lg',
      resolve: {
        strainName: function() {
          console.log(name);
          return ctrl.nameData;
        }
      }
    });
  };

}]);
