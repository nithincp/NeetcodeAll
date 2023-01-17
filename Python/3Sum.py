def threeSum(nums): 
    finalList = []
    nums.sort()

    for i in range(len(nums)-2):
        if i >0 and nums[i]==nums[i-1]:
            continue

        left = i+1
        right = len(nums)-1

        while(left < right):
            sum = nums[i] + [left] + [right]
            if sum>0:
                right -=1
            elif sum<0:
                left +=1
            else:
                finalList.append([nums[i],nums[left],nums[right]])
                left += 1
                while nums[left] == nums[left-1] and left <right:
                    left += 1

    return finalList