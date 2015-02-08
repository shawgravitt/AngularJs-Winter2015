angular.module('disney', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'disneyModule']);

angular.module('disney').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/disney');

});

angular.module('disney').run(function ($rootScope) {

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
