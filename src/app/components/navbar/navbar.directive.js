(function() {
  'use strict';

  angular
    .module('angular1Proj')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          activeClass: '@activeClass'
      },
      controller: NavbarController,
      bindToController: false
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope) {
      
    }
  }

})();
