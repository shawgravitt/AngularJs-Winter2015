angular.module('strainsModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('strainsModule').config(function($stateProvider) {
  $stateProvider.state('strains', {
    url:'/strains',
    templateUrl: 'app/strains/view/strains-view.html',
    controller: 'strainsController',
    controllerAs: 'strainsCtrl'
  });
    /* Add New States Above */

});
