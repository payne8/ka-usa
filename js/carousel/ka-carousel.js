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
        'IMG_0944-Edit-small-black.png',
        'IMG_0008.jpg',
        'IMG_0009.jpg',
        'IMG_0010.jpg',
        'IMG_0011.jpg',
        // 'IMG_0956-Edit-small.png',
        // 'IMG_0958-Edit-small.png',
        // 'IMG_0959-Edit-small.png',
        // 'IMG_0961-Edit-small.png',
        // 'IMG_0962-Edit-small.png',
        // 'IMG_0963-Edit-small.png',
        // 'IMG_0964-Edit-small.png',
        // 'IMG_0966-Edit-small.png',
        // 'IMG_0967-Edit-small.png',
        // 'IMG_0970-Edit-small.png',
      ];
    }
  };
}]);
