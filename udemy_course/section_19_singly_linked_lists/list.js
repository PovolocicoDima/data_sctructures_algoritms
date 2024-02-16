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

    traverse() {
        let current = this.head
        while(current) {
            console.log(current)
            current = current.next
        }
    }

    clearList() {
        this.head = null
        this.tail = null
        this.length = 0
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
            this.clearList()
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

    shift() {
        if (this.length === 0) {
            return undefined
        } else if (this.length === 1) {
            const temp = this.head
            this.clearList()
            return temp
        } else {
            const temp = this.head
            const tempNext = this.head.next
            this.head = tempNext
            this.length -= 1
            return temp
        }
    }

    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            const temp = this.head
            this.head = newNode
            newNode.next = temp
        }
        this.length += 1
        return this
    }

    get(idx) {
        if (this.length === 0 || idx >= this.length || idx < 0) {
            return undefined
        } else {
            let current = this.head
            for (let i = 0; i < idx; i++) {
                current = current.next
            }

            return current
        }
    }

    set(idx, val) {
        const foundNode = this.get(idx)
        if (foundNode) {
            foundNode.val = val
            return true
        } 

        return false
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false
        else if (idx === this.length) {
            this.push(val)
            return true
        } else if (idx === 0) {
            this.unshift(val)
            return true
        }
        else {
            const newNode = new Node(val)
            const current = this.get(idx)
            const past = this.get(idx - 1)
            past.next = newNode
            newNode.next = current
            this.length += 1
            return true
        }
    }
}

const list = new SinglyLinkedList()
list.push('How')
list.push('are')
list.push('you')

console.log(list.insert(0, 'test'))
console.log(list.traverse())