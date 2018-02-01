// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

const re = new RegExp("[a-z0-9]")
function isValidAlphaNumeric (s) {
    return re.test(s)
}

var isPalindrome = function(s) {
    if (!s.length) return true
    let newStr = ''
    for (let i = 0; i < s.length; i++) {
        if (isValidAlphaNumeric(s.charAt(i).toLowerCase())) newStr += s.charAt(i).toLowerCase()
    }
    return newStr === newStr.split('').reverse().join('')
}