angular.module('contactModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('contactModule').config(function($stateProvider) {

  $stateProvider.state('contact-form', {
    url: '/contact',
    templateUrl: 'app/framework/components/contactModule/view/contact-view.html',
    controller: 'contactController',
    controllerAs: 'contactCtrl'
  });
    /* Add New States Above */

});
