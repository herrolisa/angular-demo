var express = require('express');
var app = express();

var PORT = 8080;
var movies = [
  {
    id: 1,
    title: 'Suicide Squad',
    year: 2016
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008
  },
  {
    id: 3,
    title: 'Willy Wonka & the Chocolate Factory',
    year: 1971
  },
  {
    id: 4,
    title: 'Star Wars: A New Hope',
    year: 1977
  },
  {
    id: 5,
    title: 'Star Wars: The Empire Strikes Back',
    year: 1980
  },
  {
    id: 6,
    title: 'Star Wars: Return of the Jedi',
    year: 1983
  }
]
app.use(express.static('public'));


app.get('/api/movies', function (req, res) {
  res.json(movies);
})
app.get('/', function (req, res) {
  res.render('index.html')
})

var server = app.listen(PORT, function () {
  console.log('Now listening on PORT:' + PORT);
});