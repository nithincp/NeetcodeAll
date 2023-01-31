def fourSum(nums,target):

    def findSum(l,r,target,N,result,results):
        if r-l+1<N or N<2 or target<nums[l]*N or target>nums[r]*N:
            return

        if N==2:
            while l<r:
                sum=nums[l]+nums[r]
                if sum == target:
                    result.append(result+[nums[l]]+[nums[r]])
                    l+=1
                    while l<r and nums[l]==nums[l-1]:
                        l+=1
                elif sum<target:
                    l+=1
                elif sum>target:
                    r-=1

        else:
            for i in range(l,r+1):
                if i==l or (i>l and nums[l]!=nums[l-1]):
                    findSum(i+1,r,target-nums[i],N-1,result+[nums[i]],results)

    nums.sort()
    result = []
    results = []
    findSum(0,len(nums)-1,target,4,result,results)

    return results