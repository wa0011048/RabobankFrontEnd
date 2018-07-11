(function (angular) {
    'use strict';

    angular.module('RabobankAssignment')
    .factory('ParseCSV', [function() {
        String.prototype.replaceAll = function (search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };

        return function (strData, strDelimiter) {
            strDelimiter = (strDelimiter || ",");

            var objPattern = new RegExp((
                // Delimiters.
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                // Quoted fields.
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                // Standard fields.
                "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");

            var arrData = [[]];
            var arrMatches = null;
            var strMatchedDelimiter = null;
            var strMatchedValue = null;
            while ((arrMatches = objPattern.exec(strData)) !== null) {
                strMatchedDelimiter = arrMatches[1];
                if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                    arrData.push([]);
                }

                if (arrMatches[2]) {
                    strMatchedValue = arrMatches[2]
                        .replace(new RegExp("\"\"", "g"), "\"");
                } else {
                    strMatchedValue = arrMatches[3];
                }

                arrData[arrData.length - 1].push(strMatchedValue);
            }


            var objArray = [];
            for (var i = 1; i < arrData.length; i++) {
                objArray[i - 1] = {};
                for (var k = 0; k < arrData[0].length && k < arrData[i].length; k++) {
                    var key = arrData[0][k];
                    key = key.toLowerCase().replaceAll(' ', '_');
                    objArray[i - 1][key] = arrData[i][k];
                }
            }

            return objArray;
        };
    }]);
}(angular));
