function isCorrectSize(value) {
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

function hasNoMoreThanTwoDuplicatesInARow(value) {
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
    isCorrectSize(value)
  );
}

function passesRulesPartTwo(value) {
  return (
    hasIncreasingNumbers(value) &&
    hasNoMoreThanTwoDuplicatesInARow(value) &&
    isCorrectSize(value)
  );
}

function countPossiblePasswords(valueA, valueB) {
  const formattedInput = generateNumbersFromRange(valueA, valueB);
  let passesRulesCount = 0;
  for (input of formattedInput) {
    const isValid = passesRules(input);
    isValid && passesRulesCount++;
  }
  return passesRulesCount;
}

function countPossiblePasswordsPartTwo(valueA, valueB) {
  const formattedInput = generateNumbersFromRange(valueA, valueB);
  let passesRulesCount = 0;
  for (input of formattedInput) {
    const isValid = passesRulesPartTwo(input);
    isValid && passesRulesCount++;
  }
  return passesRulesCount;
}

function generateNumbersFromRange(valueA, valueB) {
  const rangeSize = valueB - valueA - 1;
  const numArray = [];
  let valueToAdd = valueA + 1;
  while (numArray.length != rangeSize) {
    numArray.push(valueToAdd.toString());
    valueToAdd++;
  }
  return numArray;
}

// console.log(countPossiblePasswords(236491, 713787)); //1169
// console.log(countPossiblePasswordsPartTwo(236491, 713787)); //757

module.exports = {
  isCorrectSize,
  hasTwoDuplicatesInARow,
  hasIncreasingNumbers,
  passesRules,
  generateNumbersFromRange,
  countPossiblePasswords,
  hasNoMoreThanTwoDuplicatesInARow
};
