angular.module('home', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('home').config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/home/view/home-view.html'
  });
    /* Add New States Above */

});
