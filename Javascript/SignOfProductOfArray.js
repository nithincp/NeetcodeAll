// Leetcode Problem - 1822

var arraySign = function(nums){
    let product = 1

    for (const element of nums){
        if (element === 0){
            return 0
        }
        product = product * element
    }

    if (product === 0){
        return 0
    }
    else if (product > 0){
        return 1
    }
    else{
        return -1
    }
}