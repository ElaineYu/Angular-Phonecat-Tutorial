'use strict';

/* Filters */

// Added as a dependency in app.js, app module global
// include  js/filters.js as script in template.
angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
