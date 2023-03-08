function Node(key,val){
    this.key = (key === undefined) ? 0 : key
    this.val = (key === undefined) ? 0 : val
    this.prev = null
    this.next = null
}


var LRUCache = function(capacity){
    this.cap = capacity
    this.map = new Map()
    this.left = new Node(0,0)
    this.right = new Node(0,0)
    this.left.next = this.right
    this.right.prev = this.left
}

LRUCache.prototype.remove = function(node){
    let prev = node.prev
    let next = node.next
    prev.next = next
    next.prev = prev
}

LRUCache.prototype.insert = function(node){
    let prev = this.right.prev
    let next = this.right
    prev.next = node
    next.prev = node
    node.next = next
    node.prev = prev
}

LRUCache.prototype.get = function(key){
    if(this.map.has(key)){
        this.remove(this.map.get(key))
        this.insert(this.map.get(key))
        return this.map.get(key).val
    }

    return -1
}

LRUCache.prototype.put = function(key,val){
    if(this.map.has(key)){
        this.remove(this.map.get(key))
    }
    this.map.set(key,new Node(key,val))
    this.insert(this.map.get(key))

    if(this.map.size > this.cap){
        let lru = this.left.next
        this.remove(lru)
        this.map.delete(lru.key)
    }
}





