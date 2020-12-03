import { createRequire } from "module";
import * as h from "../helpers.js";

const require = createRequire(import.meta.url);
const fs = require("fs");

const data = fs.readFileSync("./2020/inputs/day_2.txt").toString();

const passwordsWithRules = h.strInput(data);

function validAtPasswordsAtCreation(passwordsWithRules) {
  let validPasswords = 0;

  for (const phrase of passwordsWithRules) {
    if (phrase.length) {
      const password = phrase.split(":")[1];
      const validRange = /\d*-\d*/.exec(phrase)[0];
      const [lowerLimit, upperLimit] = validRange.split("-");
      const desiredLetter = /[a-z]:/.exec(phrase)[0][0];

      let count = 0;
      for (let characterIdx in password) {
        if (password[characterIdx] == desiredLetter) {
          count++;
        }

        if (
          characterIdx == password.length - 1 &&
          count >= lowerLimit &&
          count <= upperLimit
        ) {
          validPasswords++;
        }
      }
    }
  }
  return validPasswords;
}

console.log(
  "Part One Solution:",
  validAtPasswordsAtCreation(passwordsWithRules)
);

function validAtPasswordsAtCreationBasedOnPosition(passwordsWithRules) {
  let validPasswords = 0;

  for (const phrase of passwordsWithRules) {
    let correctPositions = 0;

    if (phrase.length) {
      const password = phrase.split(":")[1];

      const validIndices = /\d*-\d*/.exec(phrase)[0].split("-");

      const desiredLetter = /[a-z]:/.exec(phrase)[0][0];

      for (let idx of validIndices) {
        if (password[idx] == desiredLetter) {
          correctPositions++;
        }
      }

      if (correctPositions == 1) {
        validPasswords++;
      }
    }
  }
  return validPasswords;
}

console.log(
  "Part Two Solution:",
  validAtPasswordsAtCreationBasedOnPosition(passwordsWithRules)
);

// --- Day 2: Password Philosophy ---
// Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

// The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

// Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

// To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

// For example, suppose you have the following list:

// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc
// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given desiredLetter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?
