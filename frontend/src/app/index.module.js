(function() {
  'use strict';

  // import {CompareToDirective} from './auth/auth.controller';

  angular
    .module('frontend', ['ui.router', 'ui.bootstrap', 'toastr', 'satellizer'])
.constant('API_URL','http://localhost:5000/');
  //.controller('MainController', AuthController);

})();
