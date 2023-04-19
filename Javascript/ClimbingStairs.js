var climbingStairs = function(n){
    let value1 = 1
    let value2 = 2
    let i = 0

    while(i<n-1){
        const temp = value2
        value2 = value1 + value2
        value1 = temp
        i+=1
    }

    return value1
}