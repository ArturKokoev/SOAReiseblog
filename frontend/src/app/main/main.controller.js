(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);


  /** @ngInject */
  function MainController($http) {
    var vm = this;

    vm.getMessages = function() {
      $http.get('http://localhost:5000/api/message').then(function(result) {
        console.log(result);
       vm.messages = result.data;
      });

    }

    vm.postMessage = function() {
      console.log("Post Ok:  " + vm.message);
      $http.post('http://localhost:5000/api/message', {
        msg: vm.message
      });
    }

    vm.getMessages();

  }

})();
