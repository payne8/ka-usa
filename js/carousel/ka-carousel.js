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
        'AR-15-Black.JPG',
        'AR-15-Brown.JPG',
        'SituatorSS-Mounted-Black.JPG',
        'SituatorSS-Mounted-Grey.JPG',
      ];
    }
  };
}]);
