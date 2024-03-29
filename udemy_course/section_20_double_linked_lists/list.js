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

    show() {
        let current = this.head
        for (let i = 0; i < this.length; i++) {
            let result = current
            current = current.next
            console.dir(result)
        }
        console.log(`LENGTH: ${this.length}`)
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
            oldTail.prev = null
            this.length -= 1
            return oldTail
        }
    }

    shift() {
        if (this.length === 0) {
            return undefined
        } else if (this.length === 1) {
            const node = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return node
        } else {
            const oldHead = this.head
            const newHead = oldHead.next
            this.head = newHead
            this.head.prev = null
            oldHead.next = null
            this.length -= 1
            return oldHead
        }
    }

    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            const oldHead = this.head
            oldHead.prev = newNode
            this.head = newNode
            newNode.next = oldHead
        }
        this.length += 1
        return this
    }

    get(idx) {
        if (this.length === 0 || idx < 0 || idx >= this.length) {
            return undefined
        } else if (idx <= Math.floor(this.length / 2)) {
            let current = this.head
            for (let i = 0; i < idx; i++) {
                current = current.next
            }

            return current
        } else if (idx > Math.floor(this.length / 2)) {
            let current = this.tail
            const idxCount = (this.length - idx) - 1
            for (let i = 0; i < idxCount; i++) {
                current = current.prev
            }

            return current
        }
    }

    set(idx, val) {
        const current = this.get(idx)
        if (current) {
            current.val = val
            return true
        }

        return false
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false
        if (idx === 0) return !!this.unshift(val)
        if (idx === this.length) return !!this.push(val)

        const newNode = new Node(val)
        const pastNode = this.get(idx - 1)
        const next = pastNode.next
        pastNode.next = newNode
        newNode.prev = pastNode
        newNode.next = next
        this.length += 1
        return true
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return false
        if (idx === 0) return this.shift()
        if (idx === this.length - 1) return this.pop()

        const node = this.get(idx)
        const next = node.next
        const prev = node.prev
        prev.next = next
        next.prev = prev
        this.length -= 1
        node.prev = null
        node.next = null
        return node
    }
}

const list = new DoublyLinkedList()
list.push('first')
list.push('second')
list.push('third')
// list.unshift('test')
console.log(list.remove(2))
list.show()

