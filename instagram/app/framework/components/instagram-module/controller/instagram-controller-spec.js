describe('instagramController', function() {

  beforeEach(module('instagramModule'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('instagramController', {$scope: scope});
  }));

  it('should ...', inject(function() {

    expect(1).toEqual(1);

  }));

});
