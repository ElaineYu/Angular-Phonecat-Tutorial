'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

// We passed in the name of the service - 'Phone' - and the factory function.
// The Phone service declared a dependency on the $resource service.

// The factory function is similar to a controller's constructor in that both
// can declare dependencies to be injected via function arguments.
// The Phone service declared a dependency on the $resource service.
phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
