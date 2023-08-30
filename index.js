function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (const num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// The time complexity of this function is O(n).
// This is because we iterate through the array once and perform constant time operations for each element.

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// We use a Set to keep track of numbers encountered so far. For each number in the array, 
// it calculates the complement (target minus current number). If the complement is found in the Set, 
// then a pair that sums up to the target has been found. Otherwise, the current number is added to the Set.
// If no pair is found after iterating through the array, the function returns false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
