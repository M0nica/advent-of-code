import { createRequire } from "module";
import * as h from "../helpers.js";

const require = createRequire(import.meta.url);
const fs = require("fs");

const data = fs.readFileSync("../2021-AOC-inputs/day_1.txt").toString();

const numarr = h.numInput(data);

/* part one */
function countIncreasing(numarr) {
  let count = 0;
  for (let i = 0; i < numarr.length - 1; i++) {
    if (numarr[i + 1] > numarr[i]) {
      count++;
    }
  }

  // console.log(count);
  return count;
}

countIncreasing(numarr); //1696

/* part two */
/* this solution is less optimal way of manually calculating and comparing the sums of the windows when all we care about is if numarr[i] < numarr[i+3] */
function countThreeIncreasing(numarr) {
  // Instead, consider sums of a three-measurement sliding window.
  let count = 0;

  const getWindowSum = (itemIndices) =>
    itemIndices.reduce((acc, index) => {
      const value = numarr[index];
      return acc + value;
    }, 0);

  for (let i = 0; i < numarr.length - 3; i++) {
    const currentWindow = getWindowSum([i, i + 1, i + 2]);
    const nextWindow = getWindowSum([i + 1, i + 2, i + 3]);

    if (nextWindow > currentWindow) {
      count++;
    }
  }
  // console.log(count);
  return count;
}

countThreeIncreasing(numarr); //1737

/* this solutio nis more optimal of just focusing on numarr[i] < numarr[i+3] calculation instead of the numbers that are the same between the two windows */
function simpleCountThreeIncreasing(numarr) {
  // Instead, consider sums of a three-measurement sliding window.
  let count = 0;

  for (let i = 0; i < numarr.length - 3; i++) {
    if (numarr[i] < numarr[i + 3]) {
      count++;
    }
  }
  return count;
}

simpleCountThreeIncreasing(numarr); //1737
