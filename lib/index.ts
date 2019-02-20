import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';


export function isEven(num) {
	errorIfNotInteger(num);
	return (num % 2 === 0);
}


export function isOdd(num) {
	return (!isEven(num));
}
