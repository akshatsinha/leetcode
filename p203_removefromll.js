// Remove all elements from a linked list of integers that have value val.
// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5

var removeElements = function(head, val) {
  let node = head
  if (head === null) return head
  while (node !== null) {
      if (node === head && node.val === val) { // first node
          head = node.next ? node.next : null
          node = head
      } else {
          if (node.next && node.next.val === val) {
              node.next = node.next.next ? node.next.next : null
          } else {
              node = node.next
          }
      }
  }
  return head
}
