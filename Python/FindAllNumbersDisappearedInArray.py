def findAllNumbers(nums):
    outputList = []

    for n in nums:
        i = abs(n)-1
        nums[i] = -1 * abs(nums[i])

    for i in range(len(nums)):
        if nums[i]>0:
            outputList.append(i+1)

    return outputList