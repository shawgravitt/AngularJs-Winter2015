angular.module('topRated', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('topRated').config(function($stateProvider) {
  $stateProvider.state('top-rated', {
    url: '/top-rated',
    templateUrl: 'app/top-rated/view/top-rated-view.html'
  });
    /* Add New States Above */

});
