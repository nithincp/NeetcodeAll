def moveZeroes(nums):
    left = 0
    right = 1

    while right<len(nums):
        if nums[left] == 0 and nums[right] != 0:
            temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left+=1
        elif nums[left] != 0:
            left+=1

        right+=1