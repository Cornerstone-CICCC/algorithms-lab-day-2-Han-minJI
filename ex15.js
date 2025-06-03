// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

function findMax(numArray){
  if (numArray.length === 1) {
    return numArray[0]
  }

  const current = numArray.shift()
  const remaining = findMax(numArray)

  return current > remaining ? current : remaining
  

}

console.log(findMax([3, 1, 4, 1, 5, 11, 9])); // Expected output: 9