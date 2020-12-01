import { createRequire } from "module";
import * as h from "../helpers.js";

const require = createRequire(import.meta.url);
const fs = require("fs");

const data = fs.readFileSync("./2020/inputs/day_1.txt").toString();

const numarr = h.numInput(data);

function correctAccountingTwoNums(numarr) {
  // let's index all of the numbers

  let numMap = {};

  for (let num of numarr) {
    const remainder = 2020 - num;
    if (numMap[remainder]) {
      return num * remainder;
    }
    numMap[num] = num;
  }
}

console.log("Part One Solution:", correctAccountingTwoNums(numarr));

function correctAccountingThreeNums(numarr) {
  // let's index all of the numbers

  let numMap = {};
  numarr.sort();

  for (let num of numarr) {
    numMap[num] = num;
    const remainder = 2020 - num;
    for (let innerNum of numarr) {
      let innerRemainder = 2020 - innerNum - num;
      if (innerNum > num && numMap[innerRemainder]) {
        return innerNum * num * innerRemainder;
      }
    }
  }
}

console.log("Part Two Solution", correctAccountingThreeNums(numarr));

// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
