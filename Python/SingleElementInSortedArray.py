## Leetcode Problem - 540

def singleNonDuplicate(nums):
    start = 0
    end = len(nums)-1

    while start<=end:
        mid = (start+end)//2
        if (mid + 1 == len(nums) or nums[mid+1] != nums[mid]) \
            and (mid-1<0 or nums[mid-1]!=nums[mid]):
                return nums[mid]
        
        leftSize = mid-1 if nums[mid] == nums[mid-1] else mid
        if leftSize % 2 != 0:
            end = mid - 1
        else:
            start = mid + 1
                


nums = [1,1,2,3,3,4,4,8,8]
# nums = [3,3,7,7,10,11,11]
print(singleNonDuplicate(nums))