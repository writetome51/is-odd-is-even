import { errorIfArrayItemIsNotNumber } 
	from 'error-if-array-item-is-not-number/errorIfArrayItemIsNotNumber';
import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray';


export function notInAscendingOrder(numbers): boolean {
	errorIfNotArray(numbers);
	let i = 0;
	while ((typeof numbers[i + 1]) !== 'undefined') {

		errorIfArrayItemIsNotNumber(numbers[i]);
		errorIfArrayItemIsNotNumber(numbers[i + 1]);

		if (numbers[i] > numbers[i + 1]) return true;
		++i;
	}
	return false;
}


export function inAscendingOrder(numbers): boolean {
	return !(notInAscendingOrder(numbers));
}
