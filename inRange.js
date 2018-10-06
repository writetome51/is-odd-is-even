"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
function inRange(range, num) {
    if (range.length !== 2) {
        throw new Error("The range array must have exactly 2 numbers");
    }
    errorIfAnyArgumentIsNotNumber();
    if (range[0] > range[1]) {
        throw new Error('In the range array, the first number must be less than or' +
            ' equal to the second number');
    }
    return (num >= range[0] && num <= range[1]);
    function errorIfAnyArgumentIsNotNumber() {
        var args = range.concat([num]);
        var i = -1;
        while (++i < args.length)
            errorIfNotNumber_1.errorIfNotNumber(args[i]);
    }
}
exports.inRange = inRange;
