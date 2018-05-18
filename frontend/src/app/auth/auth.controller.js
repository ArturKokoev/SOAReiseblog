(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('AuthController', function($scope, $auth) {

      $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
      };

      var vm = this;


      vm.register = function() {
        $auth.signup(vm.user);

      }


    });




  /** @ngInject */
  /*  function AuthController($auth) {
      var vm = this;


      vm.register = function() {
        $auth.signup({email: 'test@test.com'})

      }

    }*/




})();
