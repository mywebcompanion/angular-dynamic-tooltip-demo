/**
 * Created by ARUN on 24/2/2016.
 */

var testapp = angular.module('testapp',['ui.bootstrap','ui.router']);
testapp.config(['$logProvider','$stateProvider','$urlRouterProvider',function($logProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'views/home.html',
        controller : 'HomeController'
    })
}]);