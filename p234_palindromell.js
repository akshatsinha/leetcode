// Given a singly linked list, determine if it is a palindrome.
// Follow up:
// Could you do it in O(n) time and O(1) space?

var isPalindrome = function(head) {
  if (head === null) return true
  let node = head
  let stack = []
  while(node !== null) {
      stack.push(node.val)
      node = node.next
  }
  node = head
  while(node !== null) {
      if (node.val !== stack.pop()) return false
      node = node.next
  }
  return true
}
