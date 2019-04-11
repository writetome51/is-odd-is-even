import { errorIfNotInteger } from 'error-if-not-integer';


export function isEven(num) {
	errorIfNotInteger(num);
	return (num % 2 === 0);
}


export function isOdd(num) {
	return (!(isEven(num)));
}
