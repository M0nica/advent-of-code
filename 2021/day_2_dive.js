import { createRequire } from "module";
import * as h from "../helpers.js";

const require = createRequire(import.meta.url);
const fs = require("fs");

const data = fs.readFileSync("./inputs/day_2.txt").toString();
const steps = h.strInput(data);

/* part one */
function getProductOfFinalPosition(steps) {
  let depth = 0;
  let horizontal = 0;

  for (let step of steps) {
    const [direction, num] = step.split(" ");
    const count = parseInt(num, 10);

    const updatePosition = {
      forward: horizontal + count,
      down: depth + count,
      up: depth - count,
    };

    if (direction === "forward") {
      horizontal = updatePosition[direction];
    } else {
      depth = updatePosition[direction];
    }
  }

  // console.log(depth * horizontal);
  return depth * horizontal;
}

getProductOfFinalPosition(steps); //1499229

/* part two */

function getProductOfFinalPositionWithAim(steps) {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  for (let step of steps) {
    const [direction, num] = step.split(" ");
    const count = parseInt(num, 10);

    if (direction === "down") {
      aim += count;
    } else if (direction === "up") {
      aim -= count;
    } else {
      horizontal += count;
      depth += aim * count;
    }
  }

  // console.log(depth * horizontal);
  return depth * horizontal;
}

getProductOfFinalPositionWithAim(steps); //1340836560
