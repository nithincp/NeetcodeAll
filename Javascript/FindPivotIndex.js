var findPivotIndex = function(nums){
    let lsum = 0
    let rsum = 0
    for(let i=0;i<nums.length;i++){
        rsum+=nums[i]
    }

    for(let i=0;i<nums.length;i++){
        rsum-=nums[i]
        if(lsum===rsum){
            return i
        }
        lsum+=nums[i]
    }
    
    return -1
}