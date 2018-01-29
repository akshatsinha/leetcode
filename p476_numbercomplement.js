// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// Note:
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.
// Example 1:
// Input: 5 (101)
// Output: 2 (010)

var findComplement = function(num) {
  return parseInt(num.toString(2).split('').map(bit => bit === '0' ? '1' : '0').join(''), 2)
}

console.log(findComplement(5))
console.log(findComplement(2))
console.log(findComplement(1))