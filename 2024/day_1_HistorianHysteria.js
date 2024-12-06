import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

import * as h from '../helpers.js';


/* Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are. Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.

Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. */
function sortLists(){
 const data = fs.readFileSync('../2024/inputs/day_1.txt').toString();

const formattedData = h.strInput(data).reduce((acc, row ) => {

   const [first, second] = row.split('  ');

   return {
     first: acc.first.concat(Number.parseInt(first)),
     second: acc.second.concat(Number.parseInt(second))
   };

},
{
    first: [],
    second: [],
})

// sort each list of numbers
formattedData.first.sort((a,b) => a -b)
formattedData.second.sort((a, b) => a - b);

return formattedData
}

function findDiffBetweenLists() {
 const {first, second} = sortLists();

 let totalDiff = 0;

 for (let idx in first){
    if (!isNaN(first[idx]) || !isNaN(second[idx])){
      totalDiff = totalDiff + Math.abs(first[idx] - second[idx])}
 }

 return totalDiff
}

console.log(findDiffBetweenLists())