angular.module('topNavigation').controller('navigationController', ['$scope', 'appTitle', 'navigationService',
  function ($scope, appTitle, navigationService) {

    var ctrl = this;

    ctrl.appTitle = appTitle;

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
