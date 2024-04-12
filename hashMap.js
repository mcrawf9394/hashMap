class node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}
class linkedList {
    constructor () {
        this.head = null
        this.size = 0
    }
    isEmpty () {
        return this.size === 0
    }
    find (value) {
        let currentNode = this.head
        let i = 1
        while (currentNode) {
            if (currentNode.value == value) {
                return i
            }
            else {
                currentNode = currentNode.next
                i++
            }
        }
        return "this value does not exist!"
    }
    prepend (value) {
        let newNode = new node(value)
        if (this.isEmpty() === false) {
            newNode.next = this.head
        }
        this.head = newNode
        this.size++
    }
}
class hashMap {
    constructor () {
        this.buckets = []
        this.buckets.length = 16
        this.Length = 0
        this.loadFactor = 0.75
    }
    length () {
        return this.Length
    }
    checkLength () {
        if (this.Length == this.loadFactor * this.buckets.length) {
            this.buckets.length = this.buckets.length * 2
        }
        else {
            return
        }
    }
    hash (key) {
        let hashCode = 0;  
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.buckets.length
        }
        console.log(hashCode)
        return hashCode;
      }
    set (key, value) {
        let hashCode = this.hash(key)
        if (this.buckets[hashCode] === undefined) {
            this.Length++
            this.buckets[hashCode] = new linkedList
            this.checkLength()
        }
        this.buckets[hashCode].prepend(value)
    }
    get (key) {
        let hashCode
        hashCode = this.hash(key)
        if (this.buckets[hashCode]) {
            let array = []
            let currentNode = this.buckets[hashCode].head
            while (currentNode) {
                array.push(currentNode.value)
                currentNode = currentNode.next
            }
            return array.join(" ")
        }
        else {
            return null
        }
    }
    has (key) {
        let hashCode = this.hash (key)
        let contains = false
        if (this.buckets[hashCode]) {
            contains = true
        }
        return contains
    }
    remove (key) {
        let hashCode = this.hash(key)
        let contained = false
        if (this.buckets[hashCode]) {
            delete this.buckets[hashCode]
            contained = true
        }
        return contained

    }
    clear () {
        let i = 0
        while (i < this.buckets.length) {
           delete this.buckets[i];
           i++
        }
        this.buckets.length = 16
    }
    keys () {
        let i = 0
        let array = []
        while (i < this.buckets.length) {
            if (this.buckets[i]) {
                array.push(i)
            }
            i++
        }
        return array.join(" ")
    }
    values () {
        let i = 0
        let array = []
        while (i < this.buckets.length) {
            if (this.buckets[i]) {
                let currentNode = this.buckets[i].head
                while (currentNode) {
                    array.push(currentNode.value)
                    currentNode = currentNode.next
                }
            }
            i++
        }
        return array.join(" ")
    }
    entries () {
        let i = 0
        let array = []
        while (i < this.buckets.length) {
            if (this.buckets[i]) {
                let keyValue = []
                keyValue.push(i)
                let currentNode = this.buckets[i].head
                while (currentNode) {
                    keyValue.push(currentNode.value)
                    currentNode = currentNode.next
                }
                array.push(keyValue)
            }
            i++
        }
        return array
    }
}
stuff = new hashMap
stuff.set("Sam", "Apple")
stuff.set("Brady", "Potato")
stuff.set("Heather", "Pear")
stuff.set("Neptune", "Tuna")
stuff.set("Nova", "Cat Food")
stuff.set("Sam", "Pear")
stuff.set("Adam", "Peas")
stuff.set("Terry", "Yogurt")
stuff.set("Kyle", "Something")
stuff.set("Someone", "Something Else")
stuff.set("Dingus", "Hamburger")
stuff.set("Bingus", "Chicken Nuggets")
stuff.set("Venus", "Steak")
stuff.set("Cupid", "Applesauce")
console.log(stuff.get("Venus"))
stuff.remove("Sam")
console.log(stuff.keys())
console.log(stuff.values())
console.log(stuff.entries())