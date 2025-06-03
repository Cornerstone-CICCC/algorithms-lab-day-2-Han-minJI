// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.


function getQueryParams(urlString){
  const newObj = {}
  const index = urlString.indexOf('?')

  const newString = urlString.slice(index+1)
  const splitStr = newString.split('&')

  splitStr.forEach(element => {
    const splitStr2 = element.split('=')
    newObj[`${splitStr2[0]}`] = splitStr2[1]

  });
  
  return newObj
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }