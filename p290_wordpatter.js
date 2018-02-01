// Given a pattern and a string str, find if str follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

var wordPattern = function(pattern, str) {
  let patternObj = {}
  let strObj = {}
  let strArr = str.split(' ')
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i]
    let letter = pattern.charAt(i)
    if ((patternObj[letter] && patternObj[letter] !== word) || (strObj[word] && strObj[word] !== letter) || (pattern.length !== strArr.length)) {
      return false
    } else {
      patternObj[letter] = word
      strObj[word] = letter
    }
  }
  return true
}

console.log(wordPattern('abba', 'dog dog dog dog'))
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('jquery', 'jquery'))
