angular.module('redditAppModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'infinite-scroll']);

angular.module('redditAppModule').config(function($stateProvider) {
  $stateProvider.state('reddit', {
    url: '/reddit',
    templateUrl: 'app/framework/components/view/redditApp-view.html',
    controller: 'redditAppController',
    controllerAs: 'redditAppCtrl'
  });
    /* Add New States Above */

});
