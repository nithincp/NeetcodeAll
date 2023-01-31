def pascalsTriangle(numRows):
    result = []
    first = [1]
    result.append(first)

    for i in range(1,numRows):
        prevList = [0] + result[i-1] + [0]
        tempList = []
        for j in range(len(prevList)-1):
            tempList.append(prevList[j]+prevList[j+1])
        result.append(tempList)

    return tempList
