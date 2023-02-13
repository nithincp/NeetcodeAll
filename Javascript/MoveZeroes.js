var moveZeroes = function(nums){
    let left = 0
    let right = 1

    while(right<nums.length){
        if(nums[left]===0 && nums[right]!==0){
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left += 1
        }
        else if(nums[left]!==0){
            left+=1
        }
        right+=1
    }
}