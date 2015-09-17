var siteApp = angular.module('app', ['angular-carousel']);

siteApp.controller('siteCtl', ['$scope', function($scope) {

}]);

siteApp.directive('kaHeader', ['$window', function($window) {
  return {
    restrict: 'E',
    templateUrl: '/js/header/ka-header.html',
    link: function(scope, elem, attrs) {
      var w = angular.element($window);

      function setWidthAndHeight() {
        scope.width = window.innerWidth;
        scope.height = window.innerHeight;
      }

      w.bind('resize', function () {
        setWidthAndHeight();
        scope.$apply();
      });

      setWidthAndHeight();
    }
  };
}]);
