/*
    FIFO - data structures
    First in first out

    Обычная очередь: кто первый зашёл тот и первый вышел

    INSERTION - O(1)
    REMOVAL   - 0(1)
    SEARCHING - O(N)
    ACCESS    - O(N)
*/

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    
    enqueue(val) {
        const newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            const oldLast = this.last
            oldLast.next = newNode
            this.last = newNode
        }

        this.size += 1
        return this.size
    }

    dequeue() {
        if (this.size === 0) return null
        if (this.size === 1) this.last = null

        const oldFirst = this.first
        this.first = oldFirst.next
        this.size -= 1
        return oldFirst.val
    }
}

const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
console.log(queue.dequeue())
console.log(queue)