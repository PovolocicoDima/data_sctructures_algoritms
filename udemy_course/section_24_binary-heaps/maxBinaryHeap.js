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

    cascadeDown() {
        let idx = 0
        let length = this.values.length
        let element = this.values[0]

        while(true) {
            let leftIdx = 2 * idx + 1
            let rightIdx = 2 * idx + 2
            let leftChild, rightChild
            let swapIdx = null

            if (leftIdx < length) {
                leftChild = this.values[leftIdx]
                if (leftChild > element) {
                    swapIdx = leftIdx
                }
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx]
                if ((swapIdx === null && rightChild > element) || 
                    (swapIdx !== null && rightChild > leftChild)) 
                {
                    swapIdx = rightIdx
                }
            }

            if (swapIdx === null) break;
            this.values[idx] = this.values[swapIdx]
            this.values[swapIdx] = element
            idx = swapIdx
        }
    }

    insert(value) {
        this.values.push(value)
        this.bubbleUp()
        return this.values
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
          this.values[0] = end
          this.cascadeDown()
        }
        return max
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
console.log(maxBinaryHeap.values)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)
