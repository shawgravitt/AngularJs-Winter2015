describe('navigationController', function() {

  beforeEach(module('topNavigation'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('navigationController', {$scope: scope});
  }));

  //it('should ...', inject(function() {
  //
  //  expect(1).toEqual(1);
  //
  //}));

});
