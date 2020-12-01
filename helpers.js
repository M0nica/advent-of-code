// Splits the input into an array of strings
export const strInput = (data) => data.split("\n");

// Splits the input into an array of numbers
export const numInput = (data) => data.split("\n").map(Number);

// Creates an empty array of a given length
export function lenArray(num) {
  return Array.from(Array(num).keys());
}
