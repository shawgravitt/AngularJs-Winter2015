describe('redditAppController', function() {

  beforeEach(module('redditAppModule'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('redditAppController', {$scope: scope});
  }));

  it('should ...', inject(function() {

    expect(1).toEqual(1);

  }));

});
