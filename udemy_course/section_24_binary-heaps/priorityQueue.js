class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]

    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIndex]
      if (element.priority >= parent.priority) break
      this.values[parentIndex] = element
      this.values[idx] = parent
      idx = parentIndex
    }
  }

  cascadeDown() {
    let idx = 0
    let length = this.values.length
    let element = this.values[0]

    while (true) {
      let leftIdx = 2 * idx + 1
      let rightIdx = 2 * idx + 2
      let leftChild, rightChild
      let swapIdx = null

      if (leftIdx < length) {
        leftChild = this.values[leftIdx]
        if (leftChild.priority < element.priority) {
          swapIdx = leftIdx
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx]
        if (
          (swapIdx === null && rightChild.priority < element.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightIdx
        }
      }

      if (swapIdx === null) break
      this.values[idx] = this.values[swapIdx]
      this.values[swapIdx] = element
      idx = swapIdx
    }
  }

  enqueue(value, priority) {
    this.values.push(new Node(value, priority))
    this.bubbleUp()
    return this.values
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.cascadeDown()
    }
    return min
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('common cold', 5)
priorityQueue.enqueue('gunshot', 1)
priorityQueue.enqueue('hight fever', 4)
priorityQueue.enqueue('broken arm', 2)
priorityQueue.enqueue('glass in foor', 3)
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.values)
