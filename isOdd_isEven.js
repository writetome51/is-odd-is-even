"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
function isEven(num) {
    errorIfNotInteger_1.errorIfNotInteger(num);
    return (num % 2 === 0);
}
exports.isEven = isEven;
function isOdd(num) {
    return (!isEven(num));
}
exports.isOdd = isOdd;
