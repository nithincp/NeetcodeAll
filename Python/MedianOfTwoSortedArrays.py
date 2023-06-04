#Leetcode Problem - 4

def findMedianSortedArrays(nums1,nums2):
    newArray = (nums1 + nums2)
    newArray.sort()
    if len(newArray) % 2 != 0:
        return newArray[len(newArray)//2]
    else:
        return (newArray[len(newArray)//2] + newArray[len(newArray)//2 - 1])/2


nums1 = [1,2,5,7,9]
nums2 = [3,4,6,8,10,12]
print(findMedianSortedArrays(nums1,nums2))


# Given  two arrays nums1 and nums2. Return the median of the two sorted arrays.
# Overall run time complexity should be O(log(m+n))