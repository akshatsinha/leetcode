// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard
// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

const keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

function isOneLine (word) {
  const firstLetter = word.charAt(0).toLowerCase()
  let rowToCheck
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].indexOf(firstLetter) >= 0) {
      rowToCheck = i
      break
    }
  }
  let keyB = keyboard[rowToCheck]
  for (let i = 1; i < word.length; i++) {
    if (keyB.indexOf(word.charAt(i).toLowerCase()) === -1) return false
  }
  return true
}

var findWords = function(words) {
  return words.filter(word => isOneLine(word))
}

console.log(findWords(["Aasdfghjkl","Qwertyuiop","zZxcvbnm"]))