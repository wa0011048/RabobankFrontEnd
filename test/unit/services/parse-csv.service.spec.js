describe('ParseCSV', function () {
    beforeEach(module('RabobankAssignment'));

    describe('service defined', function () {
        it('should have the service defined', inject(function (ParseCSV) {
            expect(ParseCSV).toBeDefined();
        }));
    });

    describe('header to key', function () {
        it('should transform the header case and add underscores in spaces', inject(function (ParseCSV) {
            var input = "A a A,bB B,cCCCcC\n1,2,3";

            var result = ParseCSV(input);
            expect(result[0].hasOwnProperty('a_a_a')).toEqual(true);
            expect(result[0].hasOwnProperty('bb_b')).toEqual(true);
            expect(result[0].hasOwnProperty('cccccc')).toEqual(true);
        }));
    });

    describe('parse csv', function () {
        it('should transform a csv into an array of objects', inject(function (ParseCSV) {
            var input = "Header 1,Header 2,Header 3\n1.1,1.2,1.3\n2.1,2.2,2.3";

            expect(ParseCSV(input)).toEqual([
                {
                    header_1: '1.1',
                    header_2: '1.2',
                    header_3: '1.3'
                },
                {
                    header_1: '2.1',
                    header_2: '2.2',
                    header_3: '2.3'
                }
            ]);
        }));
    });
});
