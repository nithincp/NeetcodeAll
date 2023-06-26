## Leetcode Problem - 1498

def numSubseq(nums,target):
    
    right = len(nums)-1
    result = 0
    mod = (10**9 + 7)

    nums.sort()

    for i,left in enumerate(nums):
        while (left + nums[right]) > target and i<=right:
            right-=1

        if i<=right:
            result += 2**(right-i)

    return result

    

nums = [2,3,3,4,6,7]
target = 12

print(numSubseq(nums,target))