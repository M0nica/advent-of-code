import { createRequire } from "module";
import * as h from "../helpers.js";

const require = createRequire(import.meta.url);
const fs = require("fs");

const data = fs.readFileSync("../2021-AOC-inputs/day_3.txt").toString();
const steps = h.strInput(data);

/* part one */
function getBinaryDiagnostics(steps) {
  //   // most common
  let gamma = [];

  //   // least common
  let epsilon = [];

  let digitsGroupedByindex = [[], [], [], [], [], []];

  for (let step of steps) {
    for (let digit in step) {
      digitsGroupedByindex[digit] = digitsGroupedByindex[digit]
        ? [...digitsGroupedByindex[digit], step[digit]]
        : [step[digit]];
    }
  }

  for (let index of digitsGroupedByindex) {
    const frequencies = index.reduce(
      (acc, val) => {
        if (val == 0) {
          return { ...acc, 0: acc[0] + 1 };
        } else {
          return { ...acc, 1: acc[1] + 1 };
        }
      },
      { 0: 0, 1: 0 }
    );

    gamma.push(frequencies[0] > frequencies[1] ? 0 : 1);
    epsilon.push(frequencies[0] > frequencies[1] ? 1 : 0);
  }

  // below is needed to get the right answer for sample input but not for the real input 🤔
  //   gamma.pop();
  //   epsilon.pop();

  const gammaNumber = parseInt(gamma.join(""), 2);
  const epsilonNumber = parseInt(epsilon.join(""), 2);

  return gammaNumber * epsilonNumber;
}
getBinaryDiagnostics(steps);
//sample 198
// real input /
// 693486
