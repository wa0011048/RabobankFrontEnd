describe('HomeController', function() {
    beforeEach(module('RabobankAssignment'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('homepage controller', function() {
        it('should have controller properties defined', function() {
            var controller = $controller('HomeController');
            expect(controller.page).toEqual('Homepage');
        });
    });
});
