## Leetcode Problem - 496

def nextGreaterElement(nums1,nums2):
    outputArray = []

    # for item in nums1:
    #     start = 0
    #     found = 0
    #     for i in range(len(nums2)):
    #         if nums2[i] == item:
    #             start = 1
    #         if start == 1:
    #             if nums2[i] > item:
    #                 found = 1
    #             if found == 1:
    #                 outputArray.append(nums2[i])
    #                 break
    #     if found == 0:
    #         outputArray.append(-1)
    hashMap = {}
    stack = []
    
    for element in reversed(nums2):
        while stack and element>stack[-1]:
            stack.pop()
        
        if not stack:
            hashMap[element] = -1
        else:
            hashMap[element] = stack[-1]

        stack.append(element)
        

    for item in nums1:
        outputArray.append(hashMap.get(item))

    return outputArray
             

nums1 = [2,4]
nums2 = [1,2,3,4]

print(nextGreaterElement(nums1,nums2))