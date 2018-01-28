// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

// recurssion
var addDigitsRec = function(num) {
  let numStr = num.toString()
  if (numStr.length === 1) return num
  else {
    let sum = 0
    for (let i = 0; i < numStr.length; i++) {
      sum += parseInt(numStr[i])
    }
    return addDigitsRec(sum)
  }
}

var addDigitsFormula = function (num) {
  return num - (9 * Math.floor((num - 1)/9))
}

console.log(addDigitsRec(3811))
console.log(addDigitsFormula(3811))