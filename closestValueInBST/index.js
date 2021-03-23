// write a function that takes in a BST and a target integer value. Return the closesest value to the target contain in the BST
// input = `
// ` =      10
//        /     \
//       5      15
//     /   \   /   \
//    2     5 13   22
//  /           \
// 1            14`;
// output = 12
// expected ans = 13

const nearestValueInBST = (tree, target) => {
  let currentNode = tree;
  let closest = tree.value;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
};
