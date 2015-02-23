angular.module('contactModule').controller('contactController', ['$scope', function($scope, $http) {

  var ctrl = this;

  ctrl.formData = {};

  //ctrl.update = function(user) {
  //  ctrl.master = angular.copy(user);
  //};

  //ctrl.reset = function(form) {
  //  if (form) {
  //    form.$setPristine();
  //    form.$setUntouched();
  //  }
  //  ctrl.user = angular.copy(ctrl.master);
  //};

  //ctrl.reset();

  ctrl.submission = false;

  var param = function(data) {
    var returnString = '',
      d;
    for (d in data){
      if (data.hasOwnProperty(d)) {
        returnString += d + '=' + data[d] + '&';
      }
    }
    // Remove last ampersand and return
    return returnString.slice( 0, returnString.length - 1 );
  };


  ctrl.submitForm = function() {
    $http({
      method : 'POST',
      url : 'process.php',
      data : param($scope.formData), // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
    })
      .success(function(data) {
        if (!data.success) {
          // if not successful, bind errors to error variables
          ctrl.errorName = data.errors.name;
          ctrl.errorEmail = data.errors.email;
          ctrl.errorTextarea = data.errors.message;
          ctrl.submissionMessage = data.messageError;
          ctrl.submission = true; //shows the error message
        } else {
          // if successful, bind success message to message
          ctrl.submissionMessage = data.messageSuccess;
          ctrl.formData = {}; // form fields are emptied with this line
          ctrl.submission = true; //shows the success message
        }
      });
  };
}]);
