var app = angular.module('mozApp');

app.controller('MozController', function($scope, mainService) {

  var url = 'www.google.com';
  $scope.getMetrics = function(url) {
    mainService.getMetrics(url).then(function(data) {
      console.log(data);
    })
  }
  $scope.getMetrics();
})