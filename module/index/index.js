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

    .controller('indexcontroller', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $(function() {
            $('.panel').css({'height': $(window).height()});
            $.scrollify({
                section: '.panel'
            });
        });
    }]);