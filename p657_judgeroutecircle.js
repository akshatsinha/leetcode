// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

var judgeCircle = function(moves) {
  let currentX = 0
  let currentY = 0
  moves.split('').forEach(move => {
    let lowerMove = move.toLowerCase()
    if (lowerMove === 'u') currentY += 1
    else if (lowerMove === 'd') currentY -= 1
    else if (lowerMove === 'l') currentX -= 1
    else currentX +=1
  })
  return (currentX === 0 && currentY === 0) ? true : false
}

console.log(judgeCircle('UD'))
console.log(judgeCircle('LL'))