// Given a binary tree, return the preorder traversal of its nodes' values.

// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,2,3]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let stack = []
  let output = []
  stack.push(root)
  while (stack.length && root !== null) {
      root = stack.pop()
      output.push(root.val)
      if (root.right !== null) stack.push(root.right)
      if (root.left !== null) stack.push(root.left)
  }
  return output
};

