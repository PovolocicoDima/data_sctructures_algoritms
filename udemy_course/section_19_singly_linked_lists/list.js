class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this
    }
}


const list = new SinglyLinkedList()
list.push('How')
list.push('are')
list.push('you')
// console.log(list)
console.log(list.head)
console.log(list.head.next)
console.log(list.tail)