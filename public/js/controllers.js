angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService', function ($scope, mainCharacter, CharacterVersionFactory, BookService) {
    $scope.myFirstName = 'Lisa';
    $scope.myModel = 'Real Player One';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
    // $scope.books = BookService.getBooks();
    $scope.BookService = BookService;
  }])