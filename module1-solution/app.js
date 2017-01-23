(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope){

    var selectMessage = function(itemCount) {
      if (itemCount < 1) return "Please enter data first"
      if (itemCount > 3) return "Too much!"
      return "Enjoy!"
    }

    var computeItemCount = function(menuInput) {
      if(menuInput)
        return menuInput.split(',').length
      else
        return 0
    }

    $scope.checkIfTooMuch = function() {
      var itemCount = computeItemCount($scope.menuInput);
      $scope.messageToShow = selectMessage(itemCount);
    };
  });
})();
