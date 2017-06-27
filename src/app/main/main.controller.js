(function() {
  'use strict';

  angular
    .module('angular1Proj')
    .controller('MainController', MainController);
    

  /** @ngInject */
  function MainController($scope,saveData) {
    $scope.users = JSON.parse(saveData.getData('users'));
    console.log($scope.users);
  }
})();
