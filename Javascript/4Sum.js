var fourSum = function(nums,target){


    var findSum = function(l,r,target,N,result,results){
        if(r-l+1<N || N<2 || target<nums[l]*N || target>nums[r]*N){
            return
        }

        if(N===2){
            while(l<r){
                let sum = nums[l] + nums[r]
                if(sum===target){
                    results.push(result.concat([nums[l]],[nums[r]]))
                    l+=1
                    while(l<r && nums[l]===nums[l-1]){
                        l+=1
                    }
                }
                else if(sum<target){
                    l+=1
                }
                else if(sum>target){
                    r-=1
                }
            }
        }
        else{
            for(let i=l;i<r+1;i++){
                if(i===l || (i>l && nums[i]!==nums[i-1])){
                    findSum(i+1,r,target-nums[i],N-1,result.concat([nums[i]]),results)
                }
            }
        }
    }

    nums.sort((a,b)=>(a-b))
    let result = []
    let results = []
    findSum(0,nums.length-1,target,4,result,results)
    
    return results
}