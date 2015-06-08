/**
 * Created by tyw on 15/6/5.
 */
angular.module('yanzeSite.cases', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cases', {
            templateUrl: "module/cases/cases.html",
            controller: "casescontroller"
        })
    }])

    .controller('casescontroller', ['$scope', function ($scope) {
        $scope.var = "socoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocool";
        $scope.sync = "socoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocoolsocool";
    }]);