'use strict';

function max(numbers) {
  let index = 1;
  let currentMax = numbers[0];
  while(index < numbers.length) {
    currentMax = numbers[index]>currentMax ? numbers[index] : currentMax;
    index++;
  }
  return currentMax;
}

function min(numbers) {
  let index = 1;
  let currentMin = numbers[0];
  while(index < numbers.length) {
    currentMin = numbers[index] < currentMin ? numbers[index] : currentMin;
    index++;
  }
  return currentMin;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.log(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function testEmpty(fn) {
  if (fn([]) === null || fn([]) == undefined) {
    console.log(`SUCCESS: ${fn.name} works on empty arrays`);
    return true;
  } else {
    console.log(
      `FAILURE: ${fn.name} should return undefined or null for empty arrays`
    );
    return false;
  }
}

(function runTests() {
  // we'll use the variables in our test cases
  const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  const realMin1 = numList1[3];
  const realMax1 = numList1[6];
  const numList2 = [0, 1, 2, 3, 4];
  const realMin2 = numList2[0];
  const realMax2 = numList2[4];

  const testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
    testEmpty(max),
    testEmpty(min),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();


function average(numbers) {
  let total = 0;
  numbers.forEach(function(element) {
    total += element;
  }, total);
  return total/numbers.length;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.log(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

(function runTests() {
  const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const correctAns1 = 5.5;
  const numList2 = [0, -1, 1];
  const correctAns2 = 0;

  const testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2),
  ];
  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();

function repeat(fn, n) {
  for(let i=0; i< n; i++) {
    fn();
  }
}

function hello() {
  console.log("hello world");
}

function goodbye() {
  console.log("goodbye world");
}

repeat(hello, 5);
repeat(goodbye, 5);



// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    if (fn(arr[i])) { 
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(filter(myNames,(name) => {return name[0] === 'R';}));

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
    console.log(`The ${typeOfWarning} has been triggered ${warningCounter} ${warningCounter===1 ? "time" : "times"} today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const apocalypseWarning = hazardWarningCreator('Apocalypse on the road and elsewhere');
const iceWarning = hazardWarningCreator('Ice on the Road');

rocksWarning('Main St and Pacific Ave');
rocksWarning('First St and Atlantic Ave');
rocksWarning('Second St and Maryland Ave');
rocksWarning('Third St and California Ave');
rocksWarning('Forth St and North Carolina Ave');
rocksWarning('Fifth St and New York Ave');
rocksWarning('Sixth St and Ohio Ave');

apocalypseWarning('Main St and Pacific Ave');
apocalypseWarning('First St and Atlantic Ave');
apocalypseWarning('Second St and Maryland Ave');
apocalypseWarning('Third St and California Ave');
apocalypseWarning('Forth St and North Carolina Ave');
apocalypseWarning('Fifth St and New York Ave');
apocalypseWarning('Sixth St and Ohio Ave');

iceWarning('Main St and Pacific Ave');
iceWarning('First St and Atlantic Ave');
iceWarning('Second St and Maryland Ave');
iceWarning('Third St and California Ave');
iceWarning('Forth St and North Carolina Ave');
iceWarning('Fifth St and New York Ave');
iceWarning('Sixth St and Ohio Ave');
