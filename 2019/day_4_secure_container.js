function isCorrectLength(value) {
  return value.length === 6;
}

function hasIncreasingNumbers(value) {
  const numbers = value.split("");
  let prevNum;
  for (number of numbers) {
    if (number < prevNum) {
      return false;
    }
    prevNum = number;
  }
  return true;
}

function hasTwoDuplicatesInARow(value) {
  const numbers = value.split("");
  let prevNum;

  for (number of numbers) {
    if (number == prevNum) {
      return true;
    }
    prevNum = number;
  }
  return false;
}

/* need atleast one pair of two duplicates that is not a part 
of a longer repeated sequence*/
function hasExactlyTwoDuplicatesInARow(value) {
  const numbers = value.split("");
  let prevNum;
  let streak = 0;
  for (number of numbers) {
    if (number != prevNum && streak == 1) {
      return true;
    } else if (number == prevNum) {
      streak++;
    } else {
      streak = 0;
      prevNum = number;
    }
  }
  return streak == 1;
}

function passesRules(value) {
  return (
    hasIncreasingNumbers(value) &&
    hasTwoDuplicatesInARow(value) &&
    isCorrectLength(value)
  );
}

function passesRulesPartTwo(value) {
  return (
    hasIncreasingNumbers(value) &&
    hasExactlyTwoDuplicatesInARow(value) &&
    isCorrectLength(value)
  );
}

function generateNumbersFromRange(low, high) {
  const rangeSize = high - low - 1;
  const numArray = [];
  let valueToAdd = low + 1;
  while (numArray.length != rangeSize) {
    numArray.push(valueToAdd.toString());
    valueToAdd++;
  }
  return numArray;
}

function countPossiblePasswords(low, high) {
  const formattedInput = generateNumbersFromRange(low, high);
  let passesRulesCount = 0;
  for (input of formattedInput) {
    const isValid = passesRules(input);
    isValid && passesRulesCount++;
  }
  return passesRulesCount;
}

function countPossiblePasswordsPartTwo(low, high) {
  const formattedInput = generateNumbersFromRange(low, high);
  let passesRulesCount = 0;
  for (input of formattedInput) {
    const isValid = passesRulesPartTwo(input);
    isValid && passesRulesCount++;
  }
  return passesRulesCount;
}

// console.log(countPossiblePasswords(236491, 713787)); //1169
// console.log(countPossiblePasswordsPartTwo(236491, 713787)); //757

module.exports = {
  isCorrectLength,
  hasTwoDuplicatesInARow,
  hasIncreasingNumbers,
  passesRules,
  generateNumbersFromRange,
  countPossiblePasswords,
  hasExactlyTwoDuplicatesInARow
};
