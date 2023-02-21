def containsDuplicate(nums,k):
    hashSet = set()

    left = 0

    for right in range(len(nums)):
        if right-left > k:
            hashSet.remove(nums[left])
            left+=1

        if nums[right] in hashSet:
            return True
        
        hashSet.add(nums[right])

    return False