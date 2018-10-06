import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';


export function inRange(range: [number, number], num): boolean {
	if (range.length !== 2) {
		throw new Error(`The range array must have exactly 2 numbers`);
	}
	errorIfAnyArgumentIsNotNumber();

	if (range[0] > range[1]) {
		throw new Error('In the range array, the first number must be less than or' +
			' equal to the second number');
	}
	return (num >= range[0] && num <= range[1]);


	function errorIfAnyArgumentIsNotNumber() {
		let args = range.concat([num]);
		let i = -1;
		while (++i < args.length) errorIfNotNumber(args[i]);
	}
}
