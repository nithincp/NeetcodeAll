var KthLargest = function(k,nums){
    this.minHeap = new MinPriorityQueue()
    this.k = k

    nums.forEach(num => this.add(num));
}

KthLargest.prototype.add = function(val, { minHeap } = this){
    if (minHeap.size() < this.k){
        minHeap.enqueue(val)

        return this.top()
    }

    if (this.top() < val){
        minHeap.dequeue()
        minHeap.enqueue(val)
    }

    return this.top()
}


KthLargest.prototype.top = function({ minHeap } = this){
    return minHeap.front()?.element || 0
}