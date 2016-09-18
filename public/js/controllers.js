angular.module('myApp')
  .controller('myController', ['$scope', function ($scope) {
    $scope.myFirstName = 'Lisa';
    $scope.myModel = 'Real Player One';
  }])