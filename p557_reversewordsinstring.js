// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

function reverseString(s) {
  return s.split('').reverse().join('')
}

var reverseWords = function(s) {
  return s.split(' ')
    .map(word => reverseString(word))
    .join(' ')

}

console.log(reverseWords("Let's take LeetCode contest"))