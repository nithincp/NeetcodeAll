//Leetcode Problem - 1984

var minimumDifference = function(nums,k){
    let minValue = 0
    nums.sort((a,b) => a-b)

    for (let i =k-1;i<nums.length;i++){
        if (i === (k-1)){
            minValue = nums[i] - nums[i-(k-1)]
            continue
        }
        minValue = Math.min(minValue,nums[i] - nums[i-(k-1)])

    }

    return minValue
}