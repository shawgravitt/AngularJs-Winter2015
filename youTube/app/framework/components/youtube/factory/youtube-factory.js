angular.module('youtubeModule').factory('youtubeFactory',['youtubeService', function(youtubeService) {

  var youtubeFactory = {
    this.items = [];
    this.busy = false;
    this.after = '';

    this.nextPage = function() {
      var self = this;
      if (this.busy) {
        return;
      }
      this.busy = true;

      youtubeService.nextPage(this.after)
        .then(function(data) {
          var results = data.feed.children;
          angular.forEach(results, function(item) {
            self.items.push(item.data);
          });
          self.after = ;
          self.busy = false;
        });
    };
  };

  return youtubeFactory;

}]);
