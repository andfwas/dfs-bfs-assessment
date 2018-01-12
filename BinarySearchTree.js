const Node = require('./Node')
const Queue = require('./Queue')

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    if (!this.root) {
      this.root = new Node(data)
    } else {
      let currentNode = this.root

      while (true) {
        if (data <= currentNode.data) {
          if (currentNode.left) {
            currentNode = currentNode.left
          } else {
            currentNode.left = new Node(data)
            break
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right
          } else {
            currentNode.right = new Node(data)
            break
          }
        }
      }
    }
  }

  dfs(cb, node = this.root) {
		if (!node) return
		cb(node.data)
		this.dfs(cb, node.left)
		this.dfs(cb, node.right)
  }

  bfs(cb, node = this.root) {
    var q = new Queue
    if (node)
      q.enqueue(node)
    while (q.queue.length > 0) {
      const current = q.dequeue()
      cb(current.data);
      if (current.left)
        q.enqueue(current.left)
      if (current.right)
        q.enqueue(current.right)
    }
  }
}

module.exports = BinarySearchTree
