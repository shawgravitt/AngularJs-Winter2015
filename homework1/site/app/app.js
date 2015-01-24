angular.module('project1', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'home', 'about', 'contact', 'topNavigation']);

angular.module('project1').config(function ($stateProvider, $urlRouterProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/home');

});
angular.module('project1').value('appTitle', 'Chuck Norris');

angular.module('project1').run(function ($rootScope) {

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
