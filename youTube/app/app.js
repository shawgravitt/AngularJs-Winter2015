angular.module('youTube', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'youtubeModule']);

angular.module('youTube').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/youTube');

});

angular.module('youTube').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
