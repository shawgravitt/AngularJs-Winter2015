angular.module('youtubeModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'infinite-scroll']);

angular.module('youtubeModule').config(function($stateProvider) {
  $stateProvider.state('youtube', {
    url: '/youTube',
    templateUrl: 'app/framework/components/youtube/view/youtube-view.html',
    controller: 'youtubeController',
    controllerAs: 'youtubeCtrl',

  });
    /* Add New States Above */

});
