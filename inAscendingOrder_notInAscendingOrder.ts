import { errorIfArrayItemIsNotNumber } 
	from 'error-if-array-item-is-not-number/errorIfArrayItemIsNotNumber';
import {errorIfNotPopulatedArray} from 'error-if-not-populated-array';


export function notInAscendingOrder(numbers): boolean {
	errorIfNotPopulatedArray(numbers);
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
