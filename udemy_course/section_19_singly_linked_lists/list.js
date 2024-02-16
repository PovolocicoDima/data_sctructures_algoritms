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

    pop() {
        if (this.length === 0) {
            return undefined
        } else if (this.length === 1) {
            const temp = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return temp
        } else {
            let temp = null
            let current = this.head
            for (let i = 0; i < this.length; i++) {
                if (i === this.length - 2) {
                    temp = current.next
                    current.next = null
                    this.tail = current
                    this.length -= 1
                    break;
                }
                current = current.next
            }
            return temp
        }
    }

    traverse() {
        let current = this.head
        while(current) {
            console.log(current)
            current = current.next
        }
    }
}

const list = new SinglyLinkedList()
list.push('How')
list.push('are')
list.push('you')
// console.log(list)
// console.log(list.head)
// console.log(list.head.next)
// console.log(list.tail)

console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list)