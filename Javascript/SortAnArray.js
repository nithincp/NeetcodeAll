var sortArray = function(nums){
    let start = 0
    let end = nums.length-1

    
    var merge = function(nums,start,mid,end){
        let leftArray = nums.slice(start,mid+1)
        let rightArray = nums.slice(mid+1,end+1)

        let left = 0
        let right = 0
        let parent = start

        while(left<=leftArray.length-1 && right<=rightArray.length-1){
            if(leftArray[left]<=rightArray[right]){
                nums[parent] = leftArray[left]
                left+=1
                parent+=1
            }
            else{
                nums[parent] = rightArray[right]
                right+=1
                parent+=1
            }
        }

        while(left<=leftArray.length-1){
            nums[parent] = leftArray[left]
            left+=1
            parent+=1
        }

        while(right<=rightArray.length-1){
            nums[parent] = rightArray[right]
            right+=1
            parent+=1
        }
    }

    var mergeSort = function(nums,start,end){
        if(end-start+1<=1){
            return nums
        }

        let mid = Math.floor((start+end)/2)
        mergeSort(nums,start,mid)
        mergeSort(nums,mid+1,end)

        merge(nums,start,mid,end)
    }

    mergeSort(nums,start,end)

    return nums
}
