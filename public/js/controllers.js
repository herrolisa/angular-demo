angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', function ($scope, mainCharacter) {
    $scope.myFirstName = 'Lisa';
    $scope.myModel = 'Real Player One';
    $scope.mainCharacter = mainCharacter;
  }])