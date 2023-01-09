var longestConsecutiveSubsequence = function(nums){

    let numsSet = new Set(nums)
    let maxLength = 0

    while(numsSet.size > 0){
        let num = numsSet.values().next().value
        let length = 1

        let left = num - 1
        while(numsSet.has(left)){
            numsSet.delete(left)
            length += 1
            left -= 1
        }

        let right = num + 1
        while(numsSet.has(right)){
            numsSet.delete(right)
            length += 1
            right += 1
        }

        maxLength = Math.max(maxLength, length)

        if(num !== undefined){
            numsSet.delete(num)
        }

    }

    return maxLength
}

