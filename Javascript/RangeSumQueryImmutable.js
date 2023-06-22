var NumArray = function(nums){
    this.cumulativeSum = new Array(nums.length).fill(nums[0])

    for (let i=1;i<nums.length;i++){
        this.cumulativeSum[i] = this.cumulativeSum[i-1] + nums[i]
    }
}

NumArray.prototype.sumRange = function(left,right){
    if (left === 0){
        return this.cumulativeSum[right]
    }

    return this.cumulativeSum[right] - this.cumulativeSum[left-1]
}