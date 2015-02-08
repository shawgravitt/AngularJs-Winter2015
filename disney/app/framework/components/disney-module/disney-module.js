angular.module('disneyModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('disneyModule').config(function($stateProvider) {
  $stateProvider.state('disney', {
    url: '/disney',
    templateUrl: 'app/framework/components/disney-module/view/disney-view.html',
    controller: 'disneyController',
    controllerAs: 'disneyCtrl'
  });
  /* Add New States Above */

});
