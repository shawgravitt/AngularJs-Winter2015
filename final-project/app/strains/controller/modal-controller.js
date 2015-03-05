angular.module('strainsModule').controller('modalController', ['$scope', 'strainName', function($scope, strainName) {
  $scope.strainName = strainName;
}]);
