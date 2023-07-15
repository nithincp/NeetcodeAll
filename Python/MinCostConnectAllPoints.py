## Leetcode Problem - 1584
import heapq

class UnionFind:
    def __init__(self,n) -> None:
        self.par = {}
        self.rank = {}

        for i in range(1,n+1):
            self.par[i] = i
            self.rank[i] = 0


    def find(self,n):
        p = self.par[n]

        while p!=self.par[p]:
            self.par[p] = self.par[self.par[p]]
            p = self.par[p]

        return p
    
    def union(self,n1,n2):
        p1,p2 = self.find(n1),self.find(n2)

        if p1 == p2:
            return False
        
        if self.rank[p1]>self.rank[p2]:
            self.par[p2] = p1
        elif self.rank[p1]<self.rank[p2]:
            self.par[p1] = p2
        else:
            self.par[p1] = p2
            self.rank[p2] += 1

        return True



def minCostConnectPoints(points):
    n = len(points)
    minHeap = []

    edgeDict = {}
    keyDict = {}
    count = 1

    for i in range(n):
        keyDict[tuple(points[i])] = count
        count+=1

    for i in range(n):
        edgeDict[keyDict[tuple(points[i])]] = []
        for j in range(i+1,n):
            cost= abs(points[j][0]-points[i][0]) + abs(points[j][1]-points[i][1])
            edgeDict[keyDict[tuple(points[i])]].append([cost,keyDict[tuple(points[j])]])

    edgeSDList = []
    totalNodes = len(edgeDict)
    for key,value in edgeDict.items():
        source = key
        destinations = value
        for destination in destinations:
            destination.append(source)
            edgeSDList.append(destination)
    

    for i in range(len(edgeSDList)):
        path = edgeSDList[i]
        cost = path[0]
        destination = path[1]
        source = path[2]

        heapq.heappush(minHeap,[cost,source,destination])

    

    unionfind = UnionFind(totalNodes)
    mst = []
    finalCost = 0
    while len(mst)<totalNodes-1:
        cost,n1,n2 = heapq.heappop(minHeap)
        if not unionfind.union(n1,n2):
            continue
        mst.append([n1,n2])
        finalCost+=cost

    return finalCost


points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
print(minCostConnectPoints(points))