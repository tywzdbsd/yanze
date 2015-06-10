/**
 * Created by tyw on 15/6/5.
 */
"use strict";
angular.module('yanzeSite', [
    'ngRoute',
    'yanzeSite.cases',  //案例
    'yanzeSite.databinding',    //test
    'yanzeSite.index'   //首页内容
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/index'});
    }])

    .run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.goIndex = function () {
            $location.path('/index');
        }
    }]);