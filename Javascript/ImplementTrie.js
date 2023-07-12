// Leetcode Problem - 208

var TrieNode = function(){
    this.children = new Map()
    this.word = false
}

var Trie = function(){
    this.root = new TrieNode()
}

Trie.prototype.insert = function(word){
    let cur = this.root

    for (const c of word){
        if (!cur.children.has(c)){
            cur.children.set(c,new TrieNode())
        }

        cur = cur.children.get(c)
    }

    cur.word = true
}
Trie.prototype.search = function(word){
    let cur = this.root

    for (const c of word){
        if (!cur.children.has(c)){
            return false
        }
        cur = cur.children.get(c)
    }

    return cur.word
}
Trie.prototype.startsWith = function(prefix){
    let cur = this.root

    for (const c of prefix){
        if (!cur.children.has(c)){
            return false
        }
        cur = cur.children.get(c)
    }

    return true
}