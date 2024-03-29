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
     * 
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

    /**
     * DFS IN ORDER
     * До конца проходимся по левой ветке, ничего не записываем пока
     * не упрёмся по левой стороне до листка, затем начинаем добавлять
     * всю левую ветку с конца по уровням, доходим до рута и делаем тоже
     * самое с правой стороной
     * 
     * Все три метода меняются только порядком добавления элементов в массив по которым
     * мы прошлись
     * 
     * @returns {number[]}
     */
    DepthFirstSearchInOrder() {
        const visited = []
        let current = this.root
        function traversal(node) {
            if (node.left) traversal(node.left)
            visited.push(node.value)
            if (node.right) traversal(node.right)
        }
        traversal(current)

        return visited
    }

    /** 
     * Так какой-же использовать?
     * В зависимости от ситуации =\
     * 
     * Так как по времени они все работают одинакого, так как каждую ноду надо пройти 1 раз
     * то мы будем их распределять по месту ( space )
     * 
     * Если говорить о больших бинарных деревьях, с большим количеством нод по обе стороны
     * то лучше всего использовать DEPTH FIRST, так как BREADTH FIRST создаёт ещё и очередь
     * из элементов ,которая будет занимать большое количесво места.
     * Что касается этих трёх разновидностей DEPTH FIRST:
     * - In Order  - можно использовать если мы хотим получить например массив чисел по возрастанию
     * - Pre Order - может помочь в воссоздании дерева, так как первым элементом идёт root, потом идут
     *               левый и правый дочерние компоненты, потом левый и правый их дочерние и так далее,
     *               т.е. по сути выстраивается такая пирамида из нод
     */

    /** 
     * Что такое деревья - это не линейная структура данных, которая состоит из главного элемента и 
     * его потомков. Бинарные деревья могут иметь значения нод в качестве любого типа данных. Но может
     * быть не более 2 потомков от 1 родителя(собственно поэтому они и называются бинарными)
     * В свою очередь Бинарные "поисковые" деревья (Binary Search Trees) также имеет такую структуру, но
     * разница уже в значениях этих самых нод, потомок с левой стороны должен быть меньше чем родитель, а 
     * потомок с правой стороны должен быть больше родителя(ПО ЗНАЧЕНИЮ!)
     * Из этого можно сделать вывод что Binary Search Tree могут состоять только из значений, которые могут
     * быть сравнимы по значению
     */
}

const binaryTree = new BinarySearchTree()
binaryTree.insert(10)
binaryTree.insert(6)
binaryTree.insert(15)
binaryTree.insert(12)
binaryTree.insert(11)
binaryTree.insert(3)
binaryTree.insert(8)
binaryTree.insert(20)
console.log(binaryTree.DepthFirstSearchInOrder())
