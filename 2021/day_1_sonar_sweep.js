import { createRequire } from "module";
import * as h from "../helpers.js";

const require = createRequire(import.meta.url);
const fs = require("fs");

const data = fs.readFileSync("./inputs/day_1.txt").toString();

const numarr = h.numInput(data);

function countIncreasing(numarr) {
  let count = 0;
  for (let i = 0; i < numarr.length - 1; i++) {
    if (numarr[i + 1] > numarr[i]) {
      count++;
    }
  }
  return count;
}

countIncreasing(numarr);
