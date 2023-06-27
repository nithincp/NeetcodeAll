## Leetcode Problem - 1343

def numOfSubarrays(arr,k,threshold):
    left = 0
    right = k-1
    count = 0
    totalSum = sum(arr[:k-1])

    while right < len(arr):
        totalSum += arr[right]
        average = totalSum/k
        if average>=threshold:
                count+=1

        totalSum-=arr[left]
        left +=1
        right +=1

    return count


arr = [11,13,17,23,29,31,7,5,2,3]
k = 3
threshold = 5

print(numOfSubarrays(arr,k,threshold))




