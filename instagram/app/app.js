angular.module('instagram', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'instagramModule']);

angular.module('instagram').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/instagram');

});

angular.module('instagram').value('clientId', 'a9e14605db9148d5b1c0c9f465fa905b');

angular.module('instagram').run(function ($rootScope) {

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
