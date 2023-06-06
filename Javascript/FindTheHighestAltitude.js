// Leetcode Probelm - 1732

var largestAltitude = function (gain) {
    let height = 0
    let maxAltitude = 0

    for (const element of gain){
        height += element
        maxAltitude = Math.max(maxAltitude,height)
    }

    return maxAltitude
};
