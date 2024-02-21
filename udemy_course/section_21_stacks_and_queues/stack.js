/*
    Last in first out (LIFO)
    Последний зашел - первый вышел.
    Аналогия - стопка листов бумаги: 
    один за другим ставим листы в стопку, какой лист будет
    поставлен в стопку последним - тот лист первым из этой
    стопки и возьмут

    Stack - это концепт и он может быть реализован по разному
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            const oldFirst = this.first
            this.first = newNode
            this.first.next = oldFirst
        }

        this.size += 1
        return this.size
    }

    pop() {
        if (this.size === 0) return null
        if (this.first === this.last) this.last = null
        
        const node = this.first
        this.first = this.first.next
        this.size -= 1
        return node.val
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack)