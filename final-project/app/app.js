angular.module('leafly', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'home', 'contact', 'navigationModule', 'strainsModule']);

angular.module('leafly').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

  /* Add New States Above */
  $urlRouterProvider.otherwise('/strains');


  $httpProvider.interceptors.push(function($q) {
    return {
      request: function(request) {

        if (request.url.match('leafly')) {
          console.log('url match');
          request.headers = {
            'app_id': '3614a232',
            'app_key': 'a1623936999f97f2c6b65b34e5c4edc6'
          };
        }

        return request || $q.when(request);
      }
    };
  });
});

angular.module('leafly').run(function ($rootScope) {


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



// todo

// pagination, multiple requests for each bit of information
//
