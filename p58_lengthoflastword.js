// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
// If the last word does not exist, return 0.
// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:
// Input: "Hello World"
// Output: 5

var lengthOfLastWord = function(s) {
  if (s.trim() === '') return 0
  let sArr = s.trim().split(' ')
  if (sArr.length >= 1) {
      return sArr[sArr.length - 1].length
  }
}