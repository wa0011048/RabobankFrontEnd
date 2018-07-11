describe('IssuesController', function() {
    beforeEach(module('RabobankAssignment'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('controller variables', function() {
        it('should have controller properties defined', function() {
            var controller = $controller('IssuesController');

            expect(controller.page).toEqual('Issues');
            expect(controller.issuesMinimum).toEqual(0);
            expect(controller.validIssues).toEqual(false);
        });
    });

    describe('is valid issues object', function() {
        it('should check whether the issues object is valid', function() {
            var controller = $controller('IssuesController');
            var inputObject = [
                {
                    first_name: 'First',
                    sur_name: 'Surname',
                    issue_count: 'number',
                    date_of_birth: 'date'
                }
            ];

            controller.isValidIssues(inputObject);

            expect(controller.validIssues).toEqual(true);
        });
    });

    describe('is not a valid issues object', function() {
        it('should check whether the issues object is not valid', function() {
            var controller = $controller('IssuesController');
            var inputObject = [
                {
                    'First name': 'First',
                    'Sur name': 'Surname',
                    'Issue count': 'number',
                    'Date of birth': 'date'
                }
            ];

            controller.isValidIssues(inputObject);

            expect(controller.validIssues).toEqual(false);
        });
    });

    describe('is greater than', function() {
        it('should be greater than', function() {
            var controller = $controller('IssuesController');

            expect(controller.greaterThan('property', 1)({ property: 2 })).toEqual(true);
        });
    });

    describe('is not greater than', function() {
        it('should be greater than', function() {
            var controller = $controller('IssuesController');

            expect(controller.greaterThan('property', 2)({ property: 1 })).toEqual(false);
        });
    });
});
