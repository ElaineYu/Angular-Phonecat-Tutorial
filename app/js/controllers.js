'use strict';

/* Controllers */


var phonecatApp = angular.module('phonecatApp', []);

// declare names of dependencies for controller constructor function
// requires specific services to the controller
// You can create your own services if needed
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  // GET Request
  // $http Angular service
  // Services are managed by Angular's dependency injection system

  // The $http service returns a promise object with a success method.
  //We call this method to handle the asynchronous response and assign
  //the phone data to the scope controlled by this controller, as a model called phones.
  // Notice that Angular detected the json response and parsed it for us!


  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}]);
