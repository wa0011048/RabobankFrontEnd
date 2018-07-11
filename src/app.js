(function (angular) {
    'use strict';

    angular.module('RabobankAssignment', [
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true).hashPrefix('!');

            $urlRouterProvider
            .otherwise('/');

            $stateProvider
            .state("home", {
                url: "/",
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            })

            .state("issues", {
                url: "/issues",
                controller: 'IssuesController',
                controllerAs: 'Issues',
                templateUrl: 'views/issues.html'
            });

        }
    ]);
}(angular));
