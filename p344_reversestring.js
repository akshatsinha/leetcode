// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".

var reverseString = function(s) {
  let output = ''
  for (let i = s.length - 1; i >= 0 ; i--) output += s.charAt(i)
  return output
}

console.log(reverseString('helloworld'))