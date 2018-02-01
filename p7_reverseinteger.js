// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output:  321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
  let output = x.toString()
  let max = (Math.pow(2, 31) - 1)
  let min = (-1 * Math.pow(2, 31) - 1)
  let isNegative = x.toString().charAt(0) === '-'
  if (isNegative) output = output.substring(1)
  output = output.split('').reverse().join('')
  if (isNegative) output = '-' + output
  output = parseInt(output)
  return output > max || output < min ? 0 : output
}