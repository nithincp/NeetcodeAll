var containsDuplicate = function(nums,k){
    let hashSet = new Set()

    let left = 0

    for(let right=0;right<nums.length;right++){
        if((right-left)>k){
            hashSet.delete(nums[left])
            left+=1
        }
        if(hashSet.has(nums[right])){
            return true
        }

        hashSet.add(nums[right])
    }

    return false
}