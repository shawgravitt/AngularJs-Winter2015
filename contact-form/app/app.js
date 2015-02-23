angular.module('contactForm', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'contactModule']);

angular.module('contactForm').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/contact');

});

angular.module('contactForm').run(function ($rootScope) {

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
