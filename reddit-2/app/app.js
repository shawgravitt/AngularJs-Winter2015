angular.module('Reddit2App', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'redditAppModule']);

angular.module('Reddit2App').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/reddit');

});

angular.module('Reddit2App').run(function ($rootScope) {

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
