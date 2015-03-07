angular.module('strainsModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'infinite-scroll']);

angular.module('strainsModule').config(function($stateProvider) {
  $stateProvider.state('strains', {
    url:'/strains',
    templateUrl: 'app/strains/view/strains-view.html',
    controller: 'strainsController',
    controllerAs: 'strainsCtrl'
  });
    /* Add New States Above */

});
