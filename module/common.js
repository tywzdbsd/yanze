/**
 * Created by tyw on 15/6/5.
 */
"use strict";
angular.module('yanzeSite', [
    'ngRoute',
    'br.fullpage',
    'yanzeSite.cases',  //案例
    'yanzeSite.databinding',    //test
    'yanzeSite.index'   //首页滑动部分
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/index'});
    }])

    .run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.tiaozhuan = function () {
            $location.path('/databinding');
        }
    }]);