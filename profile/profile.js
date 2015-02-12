

var app = angular.module('app', ['firebase']);

app.controller('ProfileCtrl', function($scope) {

  // var ref = new Firebase('https://kato-sandbox.firebaseio.com/profiles/test');

  $scope.profile = {
    name: 'Kato',
    email: 'kato@firebase.com',
    color: 'frangipane'
  };

  $scope.saveProfile = function() {
    alert('Turn down for what!');
  };

});