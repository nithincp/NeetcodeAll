var sortColors = function(nums){
    let l = 0
    let r = nums.length-1
    let i = 0

    var swap = function(i,j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    while(i<=r){
        if(nums[i]===0){
            swap(l,i)
            l+=1
        }
        else if(nums[i]===2){
            swap(i,r)
            r-=1
            i-=1
        }
        i+=1
    }
}