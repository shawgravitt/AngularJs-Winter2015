angular.module('strainsModule').factory('strainsFactory',['strainsService', function(strainsService) {

  var strains = function() {
    this.items = [];
    this.busy = false;
    this.after = '';

    this.popularStrains = function() {
      var self = this;
      if (this.busy) {
        return;
      }
      this.busy = true;

      strainsService.popularStrains(this.after)
        .then(function (data) {
          var results = data.children;
          angular.forEach(results, function(item) {
            self.items.push(item.data);
          });
          self.after = self.items[self.items.length - 1];
          self.busy = false;
        });
    };
  };

  return strains;

}]);
