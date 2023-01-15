var Myqueue = function(){
    this.queue = []
}

Myqueue.prototype.push = function(x){
    this.queue.push(x)
}

Myqueue.prototype.pop = function(){
    for(let i=0;i<this.queue.length-1;i++){
        this.queue.push(this.queue.shift())
    }
    return this.queue.shift()
}

Myqueue.prototype.top = function(){
    return this.queue[this.queue.length-1]
}

Myqueue.prototype.empty = function(){
    if(this.queue.length == 0){
        return true
    }
    else{
        return false
    }
}