import heapq

def closestPointsToOrigin(points,k):
    minHeap = []

    for x,y in points:
        distance = x**2 + y**2
        minHeap.append([distance,x,y])

    heapq.heapify(minHeap)

    outputArray = []
    for i in range(k):
        distance,x,y = heapq.heappop(minHeap)
        outputArray.append([x,y])


    return outputArray