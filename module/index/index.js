/**
 * Created by tyw on 15/6/9.
 */
angular.module('yanzeSite.index', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: "module/index/index.html",
            controller: "indexcontroller"
        })
    }])

    .controller('indexcontroller', ['$scope', '$rootScope',function ($scope, $rootScope) {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            autoplay : 3000,
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        })

    }]);