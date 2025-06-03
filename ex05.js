// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.


function countConsonants(string){
  let count = 0
  const stringArr = string.split('')
  stringArr.forEach(char => {
    if(char !== 'a' && char !== 'e' && char !== 'i' 
      && char !== 'o' && char !== 'u' && char !== ' '){
        count ++
      }
  })


  return count
}

console.log(countConsonants("hello world")); // Expected output: 7