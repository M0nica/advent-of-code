import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs");

import * as h from "../helpers.js";

// part 1
function getHighestCalorieCount() {

    const data = fs.readFileSync("../2022/inputs/day_1.txt").toString();

    const caloriesForElves = h.numInput(data);

    let currentTotal = 0;
    let highestTotal = 0;

    for (let entry of caloriesForElves) {
        if (entry == 0) {
            if (currentTotal > highestTotal) {
                highestTotal = currentTotal;
            }
            currentTotal = 0;
        }
        currentTotal += entry;
    }

    return Math.max(currentTotal, highestTotal)
}

console.log("Part One Solution:", getHighestCalorieCount());

//69310


// part 2
function getTopThreeHighestCalorieCounts() {

    const data = fs.readFileSync("../2022/inputs/day_1.txt").toString();

    const caloriesForElves = h.numInput(data);

    let currentTotal = 0;
    let totalsForEachElf = []

    for (let entry of caloriesForElves) {
        if (entry == 0) {
            totalsForEachElf.push(currentTotal)
            currentTotal = 0;
        }
        currentTotal += entry;
    }


    const [first, second, third] = totalsForEachElf.sort((a, b) => b - a);

    return [first, second, third].reduce((acc, count) => {
        return acc + count
    }, 0)
}

console.log("Part One Solution:", getTopThreeHighestCalorieCounts());
//206104