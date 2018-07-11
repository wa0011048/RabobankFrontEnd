(function (angular) {
    'use strict';

    angular.module('RabobankAssignment')
    .controller('IssuesController', [function() {
        var vm = this;
        vm.page = 'Issues';
        vm.issuesMinimum = 0;
        vm.validIssues = false;

        vm.isValidIssues = function (issues) {
            issues.forEach(function (issue) {
                if (issue.hasOwnProperty('first_name') && issue.hasOwnProperty('sur_name') &&
                    issue.hasOwnProperty('issue_count') && issue.hasOwnProperty('date_of_birth')) {
                    vm.validIssues = true;
                } else {
                    vm.validIssues = false;
                }
            });
        };

        vm.greaterThan = function (prop, value) {
            return function (item) {
                return item[prop] >= value;
            };
        };
    }]);
}(angular));
