// Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// The Elves quickly load you into a spacecraft and prepare to launch.

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

//     For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
//     For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
//     For a mass of 1969, the fuel required is 654.
//     For a mass of 100756, the fuel required is 33583.

// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft?

const input = [
  "92903",
  "97793",
  "95910",
  "104540",
  "122569",
  "60424",
  "145155",
  "90081",
  "81893",
  "140366",
  "77358",
  "122977",
  "114868",
  "135274",
  "80770",
  "104328",
  "87475",
  "135948",
  "128585",
  "71353",
  "93571",
  "69870",
  "137262",
  "142606",
  "95397",
  "62517",
  "87269",
  "73336",
  "118502",
  "82894",
  "125097",
  "102311",
  "134164",
  "119828",
  "116181",
  "99303",
  "88937",
  "63418",
  "145060",
  "91014",
  "136031",
  "106000",
  "105084",
  "139280",
  "99775",
  "94626",
  "99081",
  "119824",
  "58232",
  "54759",
  "93633",
  "142621",
  "63718",
  "106439",
  "62425",
  "119965",
  "73033",
  "130019",
  "93223",
  "118848",
  "122769",
  "130704",
  "63418",
  "87205",
  "137230",
  "147960",
  "51051",
  "65279",
  "82183",
  "57705",
  "102519",
  "144031",
  "94413",
  "98485",
  "130646",
  "111400",
  "100503",
  "95963",
  "143785",
  "97857",
  "146611",
  "67684",
  "79662",
  "147350",
  "60427",
  "118683",
  "128729",
  "65014",
  "55844",
  "120846",
  "117969",
  "134494",
  "127003",
  "139614",
  "95021",
  "124970",
  "100680",
  "91622",
  "106898",
  "79702"
];

function getFuelAmount(mass) {
  const amount = Math.floor(mass / 3) - 2;
  return amount;
}

function getTotalFuelAmount(masses) {
  return masses
    .map(mass => getFuelAmount(parseInt(mass)))
    .reduce((a, b) => a + b, 0);
}

// console.log(getTotalFuelAmount(input)); // Challenge 1.1

// During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

// Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

// So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

//     A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
//     At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
//     The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

// What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

function getRecursiveTotalFuelAmount(modules) {
  let amount = 0;
  for (module of modules) {
    let size = module;
    while (getFuelAmount(parseInt(size)) > 0) {
      amount = amount + getFuelAmount(parseInt(size));
      size = getFuelAmount(parseInt(size));
    }
  }
  return amount;
}
// console.log(getRecursiveTotalFuelAmount(input)); // Challenge 1.2

module.exports = {
  getFuelAmount,
  getTotalFuelAmount,
  getRecursiveTotalFuelAmount
};
