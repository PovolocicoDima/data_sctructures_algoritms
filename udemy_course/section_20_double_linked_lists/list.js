class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            const oldTail = this.tail
            oldTail.next = newNode
            newNode.prev = oldTail
            this.tail = newNode
        }
        this.length += 1
        return this
    }

    pop() {
        if (this.length === 0) {
            return undefined
        } else if (this.length === 1) {
            const node = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return node
        } else {
            const oldTail = this.tail
            const newTail = oldTail.prev
            newTail.next = null
            this.tail = newTail
            this.length -= 1
            return oldTail
        }
    }
}

const list = new DoublyLinkedList()
list.push('first')
list.push('second')
console.log(list)
console.log(list.pop())
console.log(list)

