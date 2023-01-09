def longestConsecutive(nums):
    numsSet = set(nums)
    maxLength = 0

    while(numsSet):
        num = numsSet.pop()
        length = 1

        left = num-1
        while left in numsSet:
            numsSet.remove(left)
            length += 1
            left -= 1

        right = num + 1
        while right in numsSet:
            numsSet.remove(right)
            length += 1
            right += 1

        maxLength = max(maxLength,length)

    return maxLength
