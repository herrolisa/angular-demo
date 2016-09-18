angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService', 'Movies', function ($scope, mainCharacter, CharacterVersionFactory, BookService, Movies) {
    $scope.myFirstName = 'Lisa';
    $scope.myModel = 'Real Player One';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = CharacterVersionFactory;
    // $scope.books = BookService.getBooks();
    $scope.BookService = BookService;
    $scope.movies = [];
    Movies.getMovies()
      .then(function (response) {
        $scope.movies = response.data;
      })
  }])
  .controller('booksController', ['$scope', 'BookService', function ($scope, BookService) {
    $scope.BookService = BookService;
  }])
  .controller('moviesController', ['$scope', 'Movies', function ($scope, Movies) {
    $scope.movies = [];
    Movies.getMovies()
      .then(function (response) {
        $scope.movies = response.data;
      })
  }])