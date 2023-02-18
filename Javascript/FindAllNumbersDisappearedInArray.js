var findAllNumbers = function(nums){
    let outputList = []

    for(let n of nums){
        let i = Math.abs(n)-1
        nums[i] = -1 * Math.abs(nums[i])
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            outputList.push(i+1)
        }
    }

    return outputList
}