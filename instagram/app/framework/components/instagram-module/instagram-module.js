angular.module('instagramModule', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('instagramModule').config(function($stateProvider) {
	$stateProvider.state('instagram', {
		url: '/instagram',
		//templateUrl: 'app/framework/components/instagram-module/view/instagram-view.html',
    templateUrl: 'app/framework/components/instagram-module/view/instagram-tag-view.html',
    //controller: 'instagramController',
    controller: 'instagramTagController',
		controllerAs: 'instagramCtrl'
	});
    /* Add New States Above */

});
