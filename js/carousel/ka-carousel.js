angular.module('app').directive('kaCarousel', [function() {
  return {
    restrict: 'E',
    templateUrl: '/js/carousel/ka-carousel.html',
    scope: {
      imageList: '=?'
    },
    link: function(scope, elem, attrs) {
      if (!scope.imageList || !scope.imageList.length) {
        scope.images = [];
      }
      scope.images = [
        'Colors-SituatorSS.png',
        'AR-15-Black.jpg',
        'AR-15-Brown.jpg',
        'SituatorSS-Mounted-Black.jpg',
        'SituatorSS-Mounted-Grey.jpg',
      ];
    }
  };
}]);
