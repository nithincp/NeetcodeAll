def findKthLargest(nums,k):

    def partition(nums,left,right):
        fill = left
        pivot = nums[right]

        for i in range(left,right):
            if nums[i] < pivot:
                temp = nums[fill]
                nums[fill] = nums[i]
                nums[i] = temp
                fill += 1

        temp = nums[fill]
        nums[fill] = nums[right]
        nums[right] = temp

        return fill


    left = 0
    right = len(nums)-1
    k = len(nums) - k

    while left < right:
        pivotIndex = partition(nums,left,right)

        if pivotIndex < k:
            left = pivotIndex + 1
        elif pivotIndex > k:
            right = pivotIndex-1
        else:
            break


    return nums[k]