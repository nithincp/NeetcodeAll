var pascalsTriangle = function(numRows){
    let first = [1]
    let result = []
    result.push(first)

    for(let i =1;i<numRows;i++){
        let tempList = []
        let prevList = [0].concat(result[i-1],[0])
        for(let j=0;j<prevList.length-1;j++){
            tempList.push(prevList[j]+prevList[j+1])
        }
        result.push(tempList)
    }
    return tempList
}