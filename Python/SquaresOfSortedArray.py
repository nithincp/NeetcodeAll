def squaresOfSortedArray(nums):
    result = [0]*len(nums)
    left = 0
    right = len(nums)-1

    while left<=right:
        if abs(nums[left])>abs(nums[right]):
            result[right-left] = nums[left]*nums[left]
            left+=1
        else:
            result[right-left] = nums[right]*nums[right]
            right-=1

    return result