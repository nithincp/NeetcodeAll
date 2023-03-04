def sortArray(nums):

    start = 0
    end = len(nums)-1

    def merge(nums,start,mid,end):
        leftArray = nums[start:mid+1]
        rightArray = nums[mid+1:end+1]

        left = 0
        right = 0
        parent = start

        while left<=len(leftArray)-1 and right<=len(rightArray)-1:
            if leftArray[left]<=rightArray[right]:
                nums[parent] = leftArray[left]
                left+=1
                parent+=1
            else:
                nums[parent] = rightArray[right]
                right+=1
                parent+=1

        while left<=len(leftArray)-1:
            nums[parent] = leftArray[left]
            left+=1
            parent+=1

        while right<=len(rightArray)-1:
            nums[parent] = rightArray[right]
            right+=1
            parent+=1

    def mergeSort(nums,start,end):

        if end-start+1<=1:
            return nums
        
        mid = (start+end)//2
        mergeSort(nums,start,mid)
        mergeSort(nums,mid+1,end)

        merge(nums,start,mid,end)

    mergeSort(nums,start,end)

    return nums