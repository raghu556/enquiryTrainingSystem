(function() {
  'use strict';

  angular
    .module('angular1Proj')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
