// Leetcode Problem - 554

var leastBricks = function(wall){
    const hashMap = new Map()

    for (let i =0;i<wall.length;i++){
        let widthSum = 0
        for (let j=0;j<wall[i].length-1;j++){
            widthSum += wall[i][j]
            hashMap.set(widthSum,(hashMap.get(widthSum) || 0) + 1)
        }
    }
    console.log(hashMap)
    let maxValue = 0
    for (const [key,value] of hashMap){
        if (value > maxValue){
            maxValue = value
        }
    }

    return (wall.length - maxValue)

}


const wall =[[1,2,2,1],
             [3,1,2],
             [1,3,2],
             [2,4],
             [3,1,2],
             [1,3,1,1]]
console.log(leastBricks(wall))