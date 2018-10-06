import { inRange } from '../inRange';


// Test 1
if (inRange([1, 10], 0)) console.log('test 1 failed');
else console.log('test 1 passed');

// Test 2
if (inRange([1, 10], 11)) console.log('test 2 failed');
else console.log('test 2 passed');

// Test 3
if (inRange([1, 10], 1)) console.log('test 3 passed');
else console.log('test 3 failed');

// Test 4
if (inRange([1, 10], 10)) console.log('test 4 passed');
else console.log('test 4 failed');

// Test 5
if (inRange([-10, 0], -11)) console.log('test 5 failed');
else console.log('test 5 passed');

// Test 6
if (inRange([-10, 0], -10)) console.log('test 6 passed');
else console.log('test 6 failed');

// Test 7
if (inRange([-10, 0], 1)) console.log('test 7 failed');
else console.log('test 7 passed');

// Test 8
if (inRange([-10, 0], 0)) console.log('test 8 passed');
else console.log('test 8 failed');

// Test 9
if (inRange([10, 50], 10)) console.log('test 9 passed');
else console.log('test 9 failed');

// Test 10
if (inRange([10, 50], 50)) console.log('test 10 passed');
else console.log('test 10 failed');

// Test 11
if (inRange([9.5, 20.2], 9.49)) console.log('test 11 failed');
else console.log('test 11 passed');

// Test 12
let errorTriggered = false;
try {
	inRange([20, 10], 6);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 12 passed');
else console.log('test 12 failed');


// Test 13
errorTriggered = false;
try {
	inRange(6, [0, 10]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 13 passed');
else console.log('test 13 failed');


// Test 14
errorTriggered = false;
try {
	inRange([0, 10]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 14 passed');
else console.log('test 14 failed');


// Test 15
errorTriggered = false;
try {
	var x = inRange([1], 5);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 15 passed');
else console.log('test 15 failed');



// Test 16
errorTriggered = false;
try {
	var x = inRange();
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 16 passed');
else console.log('test 16 failed');
