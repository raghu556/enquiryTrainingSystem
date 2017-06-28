(function() {
  'use strict';

  angular
    .module('angular1Proj')
    .controller('MainController', MainController);
    

  /** @ngInject */
  function MainController($scope,saveData) {
    $scope.users = JSON.parse(saveData.getData('users'));

    var followUpUsers = $scope.users
    console.log(saveData.getData('users'));

    

    //Graph Data
    Highcharts.chart('hcharts-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun' , 'Jul' , 'Aug', 'Sept' , 'Oct' , 'Nov' , 'Dec']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: ''
            }
        },
        series: [{
            name: 'Reminder',
            data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2 ,2, 4] //Monthly Reminder Count
        }, {
            name: 'Followup',
            data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 5, 9] //Monthly Followup Count
        }]  
    });
  }
})();
