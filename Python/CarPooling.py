## Leetcode Problem - 1094

def carPooling(trips,capacity):
    trips.sort(key = lambda t : t[1])

    minHeap = []
    totalPassengers = 0

    for trip in trips:
        numPassengers,start,end = trip

        while minHeap and minHeap[0][0] <= start:
            totalPassengers -= minHeap[0][1]
            heapq.heappop(minHeap)

        totalPassengers += numPassengers
        if totalPassengers>capacity:
            return False
        heapq.heappush(minHeap, [end,numPassengers])

    return True

        


# trips = [[2,1,15],[3,3,13],[2,9,12]]
trips = [[2,1,5],[3,3,7]]
capacity = 5

print(carPooling(trips,capacity))