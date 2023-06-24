## Leetcode Problem - 2215

def findDifference(nums1,nums2):
    output1 = []
    output2 = []
    outputArray = []


    start1 = 0
    start2 = 0

    length1 = len(nums1)
    length2 = len(nums2)

    while start1<length1 and start2<length2:

        if nums1[start1] not in nums2:
            if nums1[start1] not in output1:
                output1.append(nums1[start1])

        if nums2[start2] not in nums1:
            if nums2[start2] not in output2:
                output2.append(nums2[start2])

        start1+=1
        start2+=1

    while start1<length1:
        if nums1[start1] not in nums2:
            if nums1[start1] not in output1:
                output1.append(nums1[start1])
        start1+=1

    while start2<length2:
        if nums2[start2] not in nums1:
            if nums2[start2] not in output2:
                output2.append(nums2[start2])
        start2+=1

    outputArray = [output1,output2]

    return outputArray


nums1 = [1,2,3]
nums2 = [2,4,6]

print(findDifference(nums1,nums2))