// Leetcode Problem - 80

var removeDuplicates = function(nums){
    const [l,r] = [0,0]

    while (r<nums.length){

        count = 1

        while (r+1<nums.length && nums[r] === nums[r+1]){
            count +=1 
            r +=1
        }

        for (let i =0;i<Math.min(2,count);i++){
            nums[l] = nums[r]
            l+=1
        }

        r+=1
    }

    return l
}

nums = [1,1,1,2,2,3]
console.log(removeDuplicates(nums))