/*
    Last in first out (LIFO)
    Последний зашел - первый вышел.
    Аналогия - стопка листов бумаги: 
    поставил лист сверху и потом его-же и взял

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
}

const stack = new Stack()
stack.push(1)
stack.push(2)
// stack.push(3)
console.log(stack)