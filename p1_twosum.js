// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function sum(nums, target) {
  var obj = {}
  for (let i = 0; i < nums.length; i++) {
      let number = nums[i]
      let position = i
      if (number in obj) { // repeated numbers
          let firstPosition = obj[number]
          if ((number * 2) == target) return [obj[number], position]
      }
      obj[number] = position
  }
  for (let i = 0; i < nums.length; i++) {
      let requiredKey = target - nums[i]
      if (requiredKey in obj && obj[nums[i]] != obj[requiredKey]) {
          return [obj[nums[i]], obj[requiredKey]]
      }
  }
}

console.log(sum([2,7,11,15], 9))
console.log(sum([2,5,2], 4))