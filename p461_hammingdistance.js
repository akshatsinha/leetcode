// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, calculate the Hamming distance.
// Note:
// 0 ≤ x, y < 2^31.
// Example:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

var hammingDistance = function(x, y) {
  let output = 0
  let xBin = x.toString(2).split('').reverse()
  let yBin = y.toString(2).split('').reverse()
  console.log(xBin, yBin)
  let maxLenBin = xBin.length >= yBin.length ? xBin : yBin
  let shortLenBin = xBin.length < yBin.length ? xBin : yBin
  for (let i = 0; i < maxLenBin.length; i++) {
    if (maxLenBin[i] !== (shortLenBin[i] ? shortLenBin[i] : '0')) output += 1
  }
  return output
}

console.log(hammingDistance(10, 15))


console.log(1^4)