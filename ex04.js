// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(string){
  let obj = {}
  let strSplit = string.split('')
  let mostChar = ''
  strSplit.forEach(char => {
    if(!(char in obj)){
      obj[`${char}`] = 1
    }else{
      obj[`${char}`] ++
    }
  });


  let max = 0 
  for(const num in obj){
    if(max < obj[num]){
      max = obj[num]
      mostChar = num
      }
  }

  return mostChar
}


console.log(mostFrequentChar("javascript")); // Expected output: "a"