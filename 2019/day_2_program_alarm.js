function analyzeOpcode(array, initialIndex) {
  const tempArray = [];
  if (!array || array[initialIndex] === 99) {
    return "STOP";
  } else if (array[initialIndex] == 1 || array[initialIndex] == 2) {
    const firstIndex = array[initialIndex + 1];
    const secondIndex = array[initialIndex + 2];
    const overrideIndex = array[initialIndex + 3];

    const value =
      array[initialIndex] == 1
        ? array[firstIndex] + array[secondIndex]
        : array[firstIndex] * array[secondIndex];

    // array[overrideIndex] = value;
    tempArray[overrideIndex] = value;
    return array;
  }
}

function analyzeVerbCode(array, initialIndex, numOfInterest) {
  const noun = array[initialIndex + 1];
  const verb = array[initialIndex + 2];

  const output = analyzeOpcode(array, initialIndex);
  return output[initialIndex] == numOfInterest;
  // return 100 * (noun + verb) == numOfInterest;
}

function findPairs(array, numOfInterest) {
  let outputArray = array;
  let currentFirstIndex = 0;
  let value = "g";
  console.log(numOfInterest);
  while (
    outputArray[currentFirstIndex] != 99 &&
    currentFirstIndex < outputArray.length
  ) {
    if (outputArray[currentFirstIndex + 3] != numOfInterest) {
      outputArray = analyzeOpcode(outputArray, currentFirstIndex);
      currentFirstIndex = currentFirstIndex + 4;
    }
  }

  return [outputArray[currentFirstIndex]];
}

function findValuesForFinalNum(array, finalNum) {
  let outputArray = false;
  let currentFirstIndex = 0;

  while (!outputArray && currentFirstIndex < array.length - 1) {
    outputArray = analyzeVerbCode(array, currentFirstIndex, finalNum);
    console.log(outputArray);
    if (!outputArray) {
      currentFirstIndex = currentFirstIndex + 4;
    }
  }

  return [array[currentFirstIndex + 1], array[currentFirstIndex + 2]];
}
function takeOpcode(array) {
  let outputArray = array;
  let currentFirstIndex = 0;

  while (
    outputArray[currentFirstIndex] != 99 &&
    currentFirstIndex < outputArray.length
  ) {
    outputArray = analyzeOpcode(outputArray, currentFirstIndex);
    currentFirstIndex = currentFirstIndex + 4;
  }

  return outputArray;
}

console.log(
  findValuesForFinalNum(
    [
      1,
      12,
      2,
      3,
      1,
      1,
      2,
      3,
      1,
      3,
      4,
      3,
      1,
      5,
      0,
      3,
      2,
      13,
      1,
      19,
      1,
      19,
      10,
      23,
      1,
      23,
      6,
      27,
      1,
      6,
      27,
      31,
      1,
      13,
      31,
      35,
      1,
      13,
      35,
      39,
      1,
      39,
      13,
      43,
      2,
      43,
      9,
      47,
      2,
      6,
      47,
      51,
      1,
      51,
      9,
      55,
      1,
      55,
      9,
      59,
      1,
      59,
      6,
      63,
      1,
      9,
      63,
      67,
      2,
      67,
      10,
      71,
      2,
      71,
      13,
      75,
      1,
      10,
      75,
      79,
      2,
      10,
      79,
      83,
      1,
      83,
      6,
      87,
      2,
      87,
      10,
      91,
      1,
      91,
      6,
      95,
      1,
      95,
      13,
      99,
      1,
      99,
      13,
      103,
      2,
      103,
      9,
      107,
      2,
      107,
      10,
      111,
      1,
      5,
      111,
      115,
      2,
      115,
      9,
      119,
      1,
      5,
      119,
      123,
      1,
      123,
      9,
      127,
      1,
      127,
      2,
      131,
      1,
      5,
      131,
      0,
      99,
      2,
      0,
      14,
      0
    ],
    19690720
  )
);

// console.log(
//   findPairs(
//     [
//       1,
//       12,
//       2,
//       3,
//       1,
//       1,
//       2,
//       3,
//       1,
//       3,
//       4,
//       3,
//       1,
//       5,
//       0,
//       3,
//       2,
//       13,
//       1,
//       19,
//       1,
//       19,
//       10,
//       23,
//       1,
//       23,
//       6,
//       27,
//       1,
//       6,
//       27,
//       31,
//       1,
//       13,
//       31,
//       35,
//       1,
//       13,
//       35,
//       39,
//       1,
//       39,
//       13,
//       43,
//       2,
//       43,
//       9,
//       47,
//       2,
//       6,
//       47,
//       51,
//       1,
//       51,
//       9,
//       55,
//       1,
//       55,
//       9,
//       59,
//       1,
//       59,
//       6,
//       63,
//       1,
//       9,
//       63,
//       67,
//       2,
//       67,
//       10,
//       71,
//       2,
//       71,
//       13,
//       75,
//       1,
//       10,
//       75,
//       79,
//       2,
//       10,
//       79,
//       83,
//       1,
//       83,
//       6,
//       87,
//       2,
//       87,
//       10,
//       91,
//       1,
//       91,
//       6,
//       95,
//       1,
//       95,
//       13,
//       99,
//       1,
//       99,
//       13,
//       103,
//       2,
//       103,
//       9,
//       107,
//       2,
//       107,
//       10,
//       111,
//       1,
//       5,
//       111,
//       115,
//       2,
//       115,
//       9,
//       119,
//       1,
//       5,
//       119,
//       123,
//       1,
//       123,
//       9,
//       127,
//       1,
//       127,
//       2,
//       131,
//       1,
//       5,
//       131,
//       0,
//       99,
//       2,
//       0,
//       14,
//       0
//     ],
//     19690720
//   )
// );

module.exports = {
  analyzeOpcode,
  takeOpcode
};
