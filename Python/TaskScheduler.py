from collections import Counter,deque
import heapq

def taskScheduler(tasks,n):

    countMap = Counter(tasks)
    maxHeap = [-count for count in countMap.values()]

    heapq.heapify(maxHeap)

    queue = deque()
    time = 0

    while maxHeap or queue:
        time += 1

        if maxHeap:
            count = 1 + heapq.heappop(maxHeap)
            if count:
                queue.append([count,time+n])


        if queue and queue[0][1] == time:
            heapq.heappush(maxHeap, queue.popleft()[0])


    return time