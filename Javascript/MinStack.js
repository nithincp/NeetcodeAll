var MinStack = function(){
    this.minStack = []
    this.minArray = []
    this.minElement = 0
}


MinStack.prototype.push = function(val){
    if(this.minStack.length === 0){
        this.minElement = val
        this.minArray.push(val)
    }
    else{
        if(val <= this.minElement){
            this.minElement = val
            this.minArray.push(val)
        }
    }

    this.minStack.push(val)
}

MinStack.prototype.pop = function(){
    let topElement = this.minStack[this.minStack.length - 1]
    if(topElement === this.minElement){
        this.minArray.pop()
        if(this.minArray.length !== 0){
            this.minElement = this.minArray[this.minArray.length - 1]
        }
        
    }
    this.minStack.pop()
}

MinStack.prototype.top = function(){
    return this.minStack[this.minStack.length - 1]
}

MinStack.prototype.getMin = function(){
    return this.minElement
}