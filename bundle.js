(function () {
    'use strict';

    console.log("SCRATCH LOADED");

    function compare(a, b) {
        return a === b ? true : false
    }

    function compTruthy(a, b) {
        return a == b ? true : false
    }

    document.addEventListener("DOMContentLoaded", function() {
        console.log("Compare 2 to 2", compare(2,2));
        console.log("Compare 2 to '2'", compare(2,'2'));
        console.log("CompareTruthy 2 to '2'", compTruthy(2,'2'));
     });

}());
