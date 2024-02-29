class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root
        while(true) {
            if (val === current.value) return undefined
            if (val < current.value) {
                if (!current.left) {
                    current.left = newNode
                    return this
                } 
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
                
            }
        }
    }

    find(val) {
        if (!this.root) return false

        let current = this.root 
        let found = false
        while(current && !found) {
            if (val < current.value) {
                current = current.left
            } else if (val > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return found
    }
    /**
     * BFS
     * сверху вниз и слева направо
     * каждый уровень проходится до конца
     * и только потом берёмся за следующий уровень 
     * точка отсчёта это root, который добавляется в самом начале
     * @returns {number[]}
     */
    BreadthFirstSearch() {   
        let node  = this.root  
        let data  = []       
        let queue = []     
        queue.push(node)

        while(queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        return data
    }
    /**
     * DFS PREORDER
     * Сверху вниз до конца одной ветки, добавляем всё подряд через рекурсию
     * Только когда с одной веткой закончили только тогда переходить ко второй
     * по сути по идём по крайнелй левой ветке до конца добавляя по пути все
     * ветки что идут справа. Когда рекурсия доходит до конца ветки и у листа
     * нет правой и левой ветки, то она начинает очищать call stack и рекурсия
     * начинает раскручиваться до момент крайней правой ветки, там всё повторяется
     * @returns {number[]}
     */
    DepthFirstSearchPreorder() {
        let data = []
        let current = this.root
        function traverse(node) {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

    /**
     * DFS POSTORDER
     * идём сверху вниз, но только считываем значения, ничего не добавляя
     * когда доходим до конца то добавляем каждое отдельное дерево на 
     * обоих ветках слева направо и снизу вверх, т.е. root добавляется 
     * в последнюю очередь
     * 
     * @returns {number[]}
     */
    DepthFirstSearchPostorder() {
        const visited = []
        let current = this.root
        function traversal(node) {
            if (node.left) traversal(node.left)
            if (node.right) traversal(node.right)
            visited.push(node.value)
        }
        traversal(current)

        return visited
    }
}

const binaryTree = new BinarySearchTree()
binaryTree.insert(10)
binaryTree.insert(6)
binaryTree.insert(15)
binaryTree.insert(3)
binaryTree.insert(8)
binaryTree.insert(20)
console.log(binaryTree.DepthFirstSearchPostorder())
