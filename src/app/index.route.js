(function() {
  'use strict';

  angular
    .module('angular1Proj')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('enquiryRegistration',{
        url: '/enquiryRegistration',
        templateUrl: 'app/enquiryRegistration/enquiryRegistration.html',
        controller: 'EnquiryRegistrationController',
        controllerAs: 'enreg'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
