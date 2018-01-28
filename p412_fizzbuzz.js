// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

var fizzBuzz = function (n) {
  let output = []
  for (let i = 1; i <= n; i++) {
    let word = ''
    if (i%3 === 0) word = 'Fizz'
    if (i%5 === 0) word += 'Buzz'
    if (!word.length) word = i.toString()
    output.push(word)
  }
  return output
}

console.log(fizzBuzz(15))