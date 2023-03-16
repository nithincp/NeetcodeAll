var findKthLargest = function (nums,k){


    function partition(nums,left,right){
        let fill = left
        let pivot = nums[right]

        for(let i =left;i<right;i++){
            if(nums[i]<pivot){
                let temp = nums[fill]
                nums[fill] = nums[i]
                nums[i] = temp
                fill += 1
            }
        }

        let temp = nums[fill]
        nums[fill] = nums[right]
        nums[right] = temp

        return fill
    }

    let left = 0
    let right = nums.length-1

    k = nums.length-k

    while(left<right){
        let pivotIndex = partition(nums,left,right)

        if(pivotIndex < k){
            left = pivotIndex + 1
        }
        else if (pivotIndex > k){
            right = pivotIndex + 1
        }
        else{
            break
        }
    }

    return nums[k]
}