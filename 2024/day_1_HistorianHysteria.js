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

// console.log(findDiffBetweenLists())


// part II

/// This time, you'll need to figure out exactly how often each number from the left list appears in the right list. Calculate a total similarity score by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.

function countFrequencyInList(list){

     const { first, second } = sortLists();


    let frequencies = {}
    for (let item of second){
 if(!isNaN(item)){
        frequencies[item] = (frequencies[item] || 0) + 1
       }
    }

      return frequencies;
}

//console.log(countFrequencyInList())

function getSimilarityScore(){
      const { first, second } = sortLists();

      const frequencies = countFrequencyInList();


   return  first.reduce((acc, item) => {
   const multiplier =  item * frequencies[item]

     return acc + (isNaN(multiplier) ? 0 : multiplier)
   }, 0)
}

console.log(getSimilarityScore())