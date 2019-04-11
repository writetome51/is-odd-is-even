"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_1 = require("error-if-not-integer");
function isEven(num) {
    error_if_not_integer_1.errorIfNotInteger(num);
    return (num % 2 === 0);
}
exports.isEven = isEven;
function isOdd(num) {
    return (!(isEven(num)));
}
exports.isOdd = isOdd;
