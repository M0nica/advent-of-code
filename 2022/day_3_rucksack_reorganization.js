import { createRequire } from "module";
import * as h from "../helpers.js";

const require = createRequire(import.meta.url);
const fs = require("fs");


//    Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.


// "A".codePointAt()
// 65
// "a".codePointAt()
// 97



function getLetterPriority(letter) {
    const codePointValue = letter.codePointAt()
    return codePointValue < 97 ? codePointValue - 38 : codePointValue - 96;
}


function getOverlapBetweenHalves(rucksack) {
    let startOfSecondHalf = rucksack.length / 2;
    let seen = {}
    let dupes = [];
    for (let idx in rucksack) {
        let letter = rucksack[idx];

        if (idx < startOfSecondHalf) {
            seen[letter] = true;
        }
        if (idx >= startOfSecondHalf) {
            if (seen[letter]) {
                dupes.push(letter)
                // only add each dupe once
                seen[letter] = false
            }
        }
    }
    //   console.log('the overlap for', rucksack, 'is ', dupes)
    return dupes;
}


function priorityOfDupes() {
    const data = fs.readFileSync("../2022/inputs/day_3.txt").toString();

    const rucksacks = h.strInput(data);
    let totalPriorityOfDupes = 0;
    for (let rucksack of rucksacks) {
        const overlap = getOverlapBetweenHalves(rucksack)
        const priorityCount = overlap.reduce((acc, item) => {
            acc += getLetterPriority(item);
            return acc;
        }, 0)


        totalPriorityOfDupes += priorityCount
    }

    return totalPriorityOfDupes
}


// function to confirm that we are properly computing the letter priority -- should equal 157
// console.log(["p", "L", "P", "v", "t", "s"].reduce((acc, item) => {
//     acc += getLetterPriority(item);
//     return acc;
// }, 0))


console.log('part one solution', priorityOfDupes())