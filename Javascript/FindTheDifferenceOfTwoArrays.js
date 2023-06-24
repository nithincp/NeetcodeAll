// Leetcode Problem - 2215

var findDifference = function(nums1,nums2){
    const output1 = []
    const output2 = []
    let outputArray = []

    let start1 = 0
    let start2 = 0

    const length1 = nums1.length
    const length2 = nums2.length

    while (start1<length1 && start2<length2){
        if (!nums2.includes(nums1[start1])){
            if (!output1.includes(nums1[start1])){
                output1.push(nums1[start1])
            }
        }

        if (!nums1.includes(nums2[start2])){
            if (!output2.includes(nums2[start2])){
                output2.push(nums2[start2])
            }
        }

        start1 += 1
        start2 += 1
    }

    while (start1<length1){
        if (!nums2.includes(nums1[start1])){
            if (!output1.includes(nums1[start1])){
                output1.push(nums1[start1])
            }
        }
        start1+=1
    }

    while (start2<length2){
        if (!nums1.includes(nums2[start2])){
            if (!output2.includes(nums2[start2])){
                output2.push(nums2[start2])
            }
        }
        start2+=1
    }

    outputArray = [output1,output2]

    return outputArray
}