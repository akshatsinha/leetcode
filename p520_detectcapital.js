// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital if it has more than one letter, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
// Example 1:
// Input: "USA"
// Output: True
// Example 2:
// Input: "FlaG"
// Output: False

function isCapitalLetter (letter) {
  let asciiVal = letter.charCodeAt(0)
  return asciiVal >= 65 && asciiVal <= 90
}

var detectCapitalUse = function(word) {
  let output = true
  let isFirstCapital = isCapitalLetter(word.charAt(0))
  let isSecondCaptial = isCapitalLetter(word.charAt(1))
  for (let i = 1; i < word.length; i++) {
    if (!isFirstCapital) {
      // everything should be lower case
      if (isCapitalLetter(word.charAt(i))) {
        output = false
        break
      }
    } else {
      // everything should be capital or nothing should be capital
      if ((isSecondCaptial && !isCapitalLetter(word.charAt(i))) || (!isSecondCaptial && isCapitalLetter(word.charAt(i)))) {
        output = false
          break
      }
    }
  }
  return output
}

console.log(detectCapitalUse('U'))
console.log(detectCapitalUse('USA'))
console.log(detectCapitalUse('leetcode'))
console.log(detectCapitalUse('Google'))
console.log(detectCapitalUse('FlaG'))
console.log(detectCapitalUse('flooaG'))