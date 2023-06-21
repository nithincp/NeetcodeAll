// Leetcode Problem - 496

var nextGreaterElement = function(nums1,nums2){
    const hashMap = {}
    const outputArray = []
    const stack = []

    for (const element of nums2.reverse()){
        while (stack && element>stack[stack.length-1]){
            stack.pop()
        }

        if (stack.length === 0){
            hashMap[element] = -1
        }
        else{
            hashMap[element] = stack[stack.length - 1]
        }

        stack.push(element)
    }

    for (const item of nums1){
        outputArray.push(hashMap[item])
    }

    return outputArray
}

nums1 = [2,4]
nums2 = [1,2,3,4]

console.log(nextGreaterElement(nums1,nums2))