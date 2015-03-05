angular.module('home', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('home').config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/home/view/home-view.html',
    controller: 'navController',
    controllerAs: 'navCtrl'
  });
    /* Add New States Above */

});
