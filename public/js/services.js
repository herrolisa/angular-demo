angular.module('myApp')
  .service('BookService', BookService);

function BookService() {
  this.value = "I am a Book Service!";
  this.books = [
    {
      id: 1,
      title: 'Green Eggs and Ham',
      author: 'Dr. Suess'
    },
    {
      id: 2,
      title: 'Harry Potter',
      author: 'J.K. Rowling'
    },
    {
      id: 3,
      title: 'The Giving Tree',
      author: 'Shel Silverstein'
    },
  ]
}

BookService.prototype.getBooks = function () {
  return this.books
}

BookService.prototype.getBook = function (id) {
  return this.books.find((book) => book.id === id)
}

BookService.prototype.addBook = function (bookData) {
  const {author, title } = bookData;
  this.books.unshift({
    author,
    title
  })
}