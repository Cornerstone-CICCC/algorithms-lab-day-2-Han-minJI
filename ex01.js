// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(words){
  const splitWords = words.split(' ')

  const capitalized = splitWords.map(string => {
    const newString = string[0].toUpperCase() + string.slice(1)
    return newString
  })
  return capitalized.join(" ")
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
