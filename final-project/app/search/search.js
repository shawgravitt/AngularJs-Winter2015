angular.module('search', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('search').config(function($stateProvider) {
  $stateProvider.state('search', {
    url: '/search',
    templateUrl: 'app/search/view/search-view.html'
  });
    /* Add New States Above */

});
