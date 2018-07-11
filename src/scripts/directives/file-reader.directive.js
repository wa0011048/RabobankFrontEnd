(function (angular) {
    'use strict';

    angular.module('RabobankAssignment')
    .directive('fileReader', ['ParseCSV', function(ParseCSV) {
        return {
            scope: {
                fileReader: "=",
                validateFn: '&'
            },
            link: function(scope, element) {
                element.on('change', function(changeEvent) {
                    var files = changeEvent.target.files;
                    if (files.length) {
                        var r = new FileReader();
                        r.onload = function(e) {
                                var contents = e.target.result;
                                scope.$apply(function () {
                                    var result = null;
                                    if (files[0].name.indexOf('csv') > -1) {
                                        result = new ParseCSV(contents);
                                    } else if (files[0].name.indexOf('xml') > -1) {
                                        result = new ParseXML(contents);
                                    }
                                    scope.fileReader = result;
                                    scope.validateFn({ arg1: result });
                                });
                        };

                        r.readAsText(files[0]);
                    }
                });
            }
        };
    }]);
}(angular));
