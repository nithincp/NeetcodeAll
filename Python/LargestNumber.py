## Leetcode Problem - 179

def largestNumber(nums):

    for i, element in enumerate(nums):
        nums[i] = str(element)

    for i in range(len(nums)-1):
        for j in range(len(nums)-i-1):
            if nums[j] + nums[j+1] < nums[j+1] + nums[j]:
                nums[j], nums[j+1] = nums[j+1], nums[j]
    
    return str(int(''.join(nums)))



nums = [3,30,34,5,9]
print(largestNumber(nums))