// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

var selfDividingNumbers = function(left, right) {
  let output = []
  for (let num = left; num <= right; num++) {
    let isValid = true

    for (let i = 0; i < num.toString().length; i++) {
      if (num % parseInt(num.toString().charAt(i)) !== 0) {
        isValid = false
        break
      }
    }

    if (isValid) output.push(num)

  }
  return output
}

console.log(selfDividingNumbers(1, 22))