(function() {
  'use strict';

  angular
    .module('frontend')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider, API_URL) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $authProvider.signupUrl = API_URL + 'auth/register';
  }

})();
