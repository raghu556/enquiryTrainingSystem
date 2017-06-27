(function() {
  'use strict';

  angular
    .module('angular1Proj')
    .controller('EnquiryRegistrationController', EnquiryRegistrationController);

  /** @ngInject */
  function EnquiryRegistrationController($scope,$location, saveData) {
    $scope.usersArray = saveData.getData('users') == null ? [] : JSON.parse(saveData.getData('users'));
    $scope.usersobj = {};
    
    $scope.clearFunction = function(){
      $scope.registration = " ";
    }

    $scope.submitFunction = function(){
      $scope.usersobj = $scope.registration;
      
      $scope.usersArray.push($scope.usersobj);
      saveData.setData('users',JSON.stringify($scope.usersArray));
      $scope.users = saveData.getData('users');

      console.log(JSON.parse($scope.users));
      $scope.clearFunction();
      $location.path("/");
    }

  }
})();
