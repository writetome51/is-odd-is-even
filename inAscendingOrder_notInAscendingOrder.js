"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfArrayItemIsNotNumber_1 = require("error-if-array-item-is-not-number/errorIfArrayItemIsNotNumber");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function notInAscendingOrder(numbers) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(numbers);
    var i = 0;
    while ((typeof numbers[i + 1]) !== 'undefined') {
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(numbers[i]);
        errorIfArrayItemIsNotNumber_1.errorIfArrayItemIsNotNumber(numbers[i + 1]);
        if (numbers[i] > numbers[i + 1])
            return true;
        ++i;
    }
    return false;
}
exports.notInAscendingOrder = notInAscendingOrder;
function inAscendingOrder(numbers) {
    return !(notInAscendingOrder(numbers));
}
exports.inAscendingOrder = inAscendingOrder;
