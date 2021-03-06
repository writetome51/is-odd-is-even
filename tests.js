import { isEven, isOdd } from './index.js';
// Test 1
if (isEven(0))
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2
if (isEven(1))
    console.log('test 2 failed');
else
    console.log('test 2 passed');
// Test 3
if (isEven(2))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
if (isEven(5))
    console.log('test 4 failed');
else
    console.log('test 4 passed');
// Test 5
if (isEven(-5))
    console.log('test 5 failed');
else
    console.log('test 5 passed');
// Test 6
if (isEven(-2))
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7
if (isOdd(0))
    console.log('test 7 failed');
else
    console.log('test 7 passed');
// Test 8
if (isOdd(1))
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9
if (isOdd(2))
    console.log('test 9 failed');
else
    console.log('test 9 passed');
// Test 10
if (isOdd(5))
    console.log('test 10 passed');
else
    console.log('test 10 failed');
// Test 11
if (isOdd(-5))
    console.log('test 11 passed');
else
    console.log('test 11 failed');
// Test 12
let errorTriggered = false;
try {
    isOdd(1.1);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 12 passed');
else
    console.log('test 12 failed');
// Test 13
errorTriggered = false;
try {
    isOdd();
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 13 passed');
else
    console.log('test 13 failed');

