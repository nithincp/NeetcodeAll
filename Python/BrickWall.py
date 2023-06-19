## Leetcode Problem - 554

def leastBricks(wall):
    hashMap = {}

    for i in range(len(wall)):
        widthSum = 0
        for j in range(len(wall[i])-1):
            widthSum += wall[i][j]
            hashMap[widthSum] = hashMap.get(widthSum,0) + 1

    maxValue = 0

    print(hashMap)

    for key,value in hashMap.items():
        if value > maxValue:
            maxValue = value

    return len(wall) - maxValue


wall = [[1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]]
print(leastBricks(wall))