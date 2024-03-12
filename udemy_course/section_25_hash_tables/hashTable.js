/**
 * BIG O(average cases)
 *
 * ISERT:  O(1)
 * DELETE: O(1)
 * ACCESS: O(1)
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
  _traversal(idx) {
    let result = new Set()
    this.keyMap.map((item) => {
      if (item.length) {
        return item.map((i) => {
          return idx === 'keys' ? result.add(i[0]) : result.add(i[1])
        })
      }
    })

    return Array.from(result)
  }
  keys() {
    return this._traversal('keys')
  }
  values() {
    return this._traversal('values')
  }
}

let ht = new HashTable(17)
ht.set('maroon', '#800002')
ht.set('maroon', '#800002')
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000')
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#F08080')
ht.set('mediumvioletred', '#C71585')
ht.set('plum', '#DDA0DD')
console.log(ht.values())
console.log(ht.keys())
