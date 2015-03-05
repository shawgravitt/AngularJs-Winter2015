angular.module('navigationModule').controller('navController', ['$scope', 'navigationService', function($scope, navigationService) {

  var ctrl = this;


  ctrl.getNavItems = function () {
    navigationService.getNavItems().then(function (items) {
      ctrl.items = items.list || [];
    })
      .catch(function (error) {
        console.log('error: ', error);
      });
  };

  ctrl.getNavItems();

}]);
