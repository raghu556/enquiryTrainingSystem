(function() {
  'use strict';

  angular
      .module('angular1Proj')
      .service('saveData', saveData);

  /** @ngInject */
  function saveData() {
    
    this.getData = getData;
    this.setData = setData;

    function getData(key) {
      return localStorage.getItem(key);
    }

    function setData(key,value){
      localStorage.setItem(key, value);
    }
  }

})();
