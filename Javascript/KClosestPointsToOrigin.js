import { MinPriorityQueue } from "datastructures-js/priority-queue"

var closestPointsToOrigin = function(points,k){
    const minHeap = new MinPriorityQueue()

    for (const point of points){
        const distance = point[0]**2 + point[1]**2
        minHeap.enqueue(point,distance)
    }

    const outputArray = []
    let i = 0
    while (i<k)
    {
        const element = minHeap.dequeue().element
        outputArray.push(element)
        i+=1
    }

    return outputArray
}