
var app = angular.module('app', ['firebase']);

app.controller('BooksCtrl', function($scope) {

  // var ref = new Firebase('https://kato-books.firebaseio-demo.com/');

  $scope.books = [
    {author: 'Kato', title: 'The Catcher in the Rye'},
    {author: 'Kato', title: 'Great Expectations'},
    {author: 'Kato', title: 'Pride and Prejudice'},
    {author: 'Kato', title: 'Anabasis'}
  ];

});