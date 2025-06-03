// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(string){
  let splitString = string.split("_")
  let newString = ''
  splitString.forEach((word, index) => {
    if(index === 0){
      newString += word
    }else{
      newString += word[0].toUpperCase() + word.slice(1)
    }
    
  });

  return newString
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"