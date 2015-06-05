/**
 * Created by tyw on 15/6/5.
 */
"use strict";
angular.module('yanzeSite', [
    'ngRoute',
    'yanzeSite.cases'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/index'});
    }])

    .run(['$rootScope', function ($rootScope) {

    }]);