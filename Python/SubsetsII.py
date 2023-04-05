def subsetsWithDuplicates(nums):

    outputArray = []
    subArray = []
    nums.sort()

    def dfs(i):
        if i == nums.length:
            outputArray.append(subArray.copy())
            return
        
        subArray.append(nums[i])
        dfs(i+1)

        subArray.pop()
        while i+1 < len(nums) and nums[i] == nums[i+1]:
            i+=1
        dfs(i+1)

    dfs(0)
    return outputArray