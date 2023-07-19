

/*
Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

For sorting the index starts at 1, NOT at 0!

The sorting has to be ascending.

The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5

Product of value and index:

23 => 23 * 1 = 23 -> Output-Pos 4

2 => 2 * 2 = 4 -> Output-Pos 1

3 => 3 * 3 = 9 -> Output-Pos 2

4 => 4 * 4 = 16 -> Output-Pos 3

5 => 5 * 5 = 25 -> Output-Pos 5

Output: 2, 3, 4, 23, 5

*/



function sortByProduct(arr) {
    // Create an array of objects to store the original values and their multiplied values
    const mappedArray = arr.map((value, index) => ({
      originalValue: value,
      multipliedValue: value * (index + 1), // index starts at 1
    }));
  
    // Sort the mapped array based on the multiplied values in ascending order
    mappedArray.sort((a, b) => a.multipliedValue - b.multipliedValue);
  
    // Extract the original values from the sorted mapped array
    const sortedArray = mappedArray.map((item) => item.originalValue);
  
    return sortedArray;
  }
  
  // Test the function with the given example
  const inputArray = [23, 2, 3, 4, 5];
  const sortedArray = sortByProduct(inputArray);
  console.log(sortedArray); // Output: [2, 3, 4, 23, 5]

