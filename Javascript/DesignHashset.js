var MyHashSet = function(){
    this.set = []
}

MyHashSet.prototype.add = function(key){
    if (!this.set.includes(key)){
        this.set.push(key)
    }
}

MyHashSet.prototype.remove = function(key){
    if (this.set.includes(key)){
        this.set.splice(this.set.indexOf(key),1)
    }
}

MyHashSet.prototype.contains = function(key){
    if (this.set.includes(key)){
        return true
    }else{
        return false
    }
}