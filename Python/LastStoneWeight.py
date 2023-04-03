import heapq

def lastStoneWeight(stones):

    stones = [-s for s in stones]
    heapq.heapify(stones)

    while len(stones) > 1:
        first = heapq.heappop(stones)
        second = heapq.heappop(stones)
        if second > first:
            heapq.push(stones,first-second)

    stones.append(0)
    return -1*stones[0]