import { MaxPriorityQueue} from "datastructures-js/priority-queue"

var lastStoneWeight = function(stones){

    const maxHeap = new MaxPriorityQueue()
    for(const stone of stones){
        maxHeap.enqueue(stone)
    }

    while(maxHeap.size() > 1){
        const [first,second] = [maxHeap.dequeue().element,maxHeap.dequeue().element]
        if (first > second){
            maxHeap.enqueue(first-second)
        }
    }

    maxHeap.enqueue(0)
    return maxHeap.dequeue().element
}