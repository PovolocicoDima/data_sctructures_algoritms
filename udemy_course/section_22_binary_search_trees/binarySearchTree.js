/*  
    INSERTION : O(LOG(N))
    SEARCHING : O(LOG(N))
*/

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (val === current.value) return undefined
      if (val < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  find(val) {
    if (!this.root) return false

    let current = this.root
    let found = false
    while (current && !found) {
      if (val < current.value) {
        current = current.left
      } else if (val > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return found
  }
}

const binaryTree = new BinarySearchTree()
binaryTree.insert(10)
binaryTree.insert(5)
binaryTree.insert(13)
binaryTree.insert(2)
binaryTree.insert(7)
binaryTree.insert(8)
binaryTree.insert(11)
binaryTree.insert(16)
binaryTree.insert(20)
binaryTree.insert(25)
console.log(binaryTree.find(8))

// console.dir(binaryTree)
