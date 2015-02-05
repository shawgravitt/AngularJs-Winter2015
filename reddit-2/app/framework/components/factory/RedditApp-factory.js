angular.module('redditAppModule').factory('RedditAppFactory',['redditAppService',  function(redditAppService) {

  var Reddit = function() {
    this.items = [];
    this.busy = false;
    var after = this.after = '';

    this.nextPage = function() {
      var self = this;
      if (this.busy) {
        return;
      }
      this.busy = true;

      redditAppService.nextPage(this.after)
        .then(function (data) {
          var results = data.data.children;
          console.log(results);
          angular.forEach(results, function(item) {
            self.items.push(item.data);
          });
          self.after = 't3_' + self.items[self.items.length - 1].id;
          self.busy = false;
        });
    };
  };

  return Reddit;

}]);
