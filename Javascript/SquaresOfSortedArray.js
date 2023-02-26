var squareOfSortedArray = function(nums){
    let result = new Array(nums.length).fill(0)
    let left = 0
    let right = nums.length - 1
    
    while(left<=right){
        if(Math.abs(nums[left])>Math.abs(nums[right])){
            result[right-left] = nums[left]*nums[left]
            left+=1
        }
        else{
            result[right-left] = nums[right]*nums[right]
            right-=1
        }
    }

    return result
}