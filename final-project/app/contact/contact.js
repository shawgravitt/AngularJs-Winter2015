angular.module('contact', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('contact').config(function($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'app/contact/view/contact-view.html',
    controller: 'contactController',
    controllerAs: 'contactCtrl'
  });
    /* Add New States Above */

});
