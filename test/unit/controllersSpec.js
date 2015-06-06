'use strict';

/* jasmine specs for controllers go here */
// Tests non-global controller
// https://docs.angularjs.org/tutorial/step_02
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('PhoneListCtrl', {$scope:scope});

      expect(scope.phones.length).toBe(3);
    }));

  });
});
