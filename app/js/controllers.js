'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

// The controller is simply a constructor function that takes a $scope parameter
// An object constructor is merely a regular JavaScript function,
// so it's just as robust (ie: define parameters, call other functions etc).
// We need a way to create an object "type" that can be used multiple times
// without having to redefine the object every time to meet each particular instance's needs.
// http://www.javascriptkit.com/javatutors/oopjs2.shtml
//Tthe controller allows us to establish data-binding between the model and the view
phonecatApp.controller('PhoneListCtrl', function($scope) {
  // The data model (a simple array of phones in object literal notation)
  // is now instantiated within the PhoneListCtrl controller.
  // The PhoneListCtrl controller attaches the phone data to the $scope that was injected into our controller function.
  //This scope is a prototypical descendant of the root scope that was created when the application was defined.
  // This controller scope is available to all bindings located within the <body ng-controller="PhoneListCtrl"> tag.

  // !! A scope can be seen as the glue which allows the template, model and controller to work together.
  //  Keeps it all in sync
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
