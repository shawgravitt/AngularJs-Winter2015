describe('disneyController', function() {

  beforeEach(module('disneyModule'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('disneyController', {$scope: scope});
  }));

  it('should ...', inject(function() {

    expect(1).toEqual(1);

  }));

});
