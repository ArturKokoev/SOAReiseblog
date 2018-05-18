
(function() {
  "use strict";

  angular.module('frontend').directive('compareTo', compareTo);
  compareTo.$inject = [];

  function compareTo() {
    return {
      require: "ngModel",
      scope: {
        compareTolValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {
        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.compareTolValue;
        };

        scope.$watch("compareTolValue", function() {
          ngModel.$validate();
        });
      }
    };
  }
})();
