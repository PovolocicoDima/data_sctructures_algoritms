/** 
 * MAX BINARY HEAP
 * Структура данных похожая на бинарное дерево, но есть отличия:
 * - все новые значения заполняются слева на право
 * - правила по заполнения:
 *     - родитель должен быть больше дочерних элементов
 * - Структура данных можно реализовать через обычный массив и 
 *   заполнять его используя выше стоящие правила а также формулы:
 * - найти родителя можно по формуле:
 *   (n - 1) / 2, где n - это индекс текущего элемента в массиве
 * - соответственно для родителя его дочерние элементы будут распологаться
 *   по индексам : (n * 2 + 1) - левый элемент и (n * 2 + 2) - правый
 */

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while(idx > 0) {
            let parentIndex = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIndex]
            if (element <= parent) break;
            this.values[parentIndex] = element
            this.values[idx] = parent
            idx = parentIndex
        }
    }

    insert(value) {
        this.values.push(value)
        this.bubbleUp()
        return this.values
    }
}

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(41)
maxBinaryHeap.insert(39)
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(18)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(12)
maxBinaryHeap.insert(55)
maxBinaryHeap.insert(32)
maxBinaryHeap.insert(15)
maxBinaryHeap.insert(40)
maxBinaryHeap.insert(43)
maxBinaryHeap.insert(100)
maxBinaryHeap.insert(1)
maxBinaryHeap.insert(0)
maxBinaryHeap.insert(101)
console.log(maxBinaryHeap.values)
