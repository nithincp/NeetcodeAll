## Leetcode Problem - 743

def networkDelayTime(times,n,k):
    
    adjList = {}
    for i in range(1,n+1):
        adjList[i] = []

    for u,v,w in times:
        adjList[u].append((v,w))

    
    minHeap = [(0,k)]
    shortest = {}
    t = 0

    while minHeap:
        w1,n1 = heapq.heappop(minHeap)

        if n1 in shortest:
            continue

        shortest[n1] = w1
        t = w1

        for n2,w2 in adjList[n1]:
            if n2 not in shortest:
                heapq.heappush(minHeap,(w2+w1,n2))

    
    return t if len(shortest) == n else -1


