angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', function ($scope, mainCharacter, CharacterVersionFactory) {
    $scope.myFirstName = 'Lisa';
    $scope.myModel = 'Real Player One';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
  }])