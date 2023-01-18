var maxArea = function(height){
    let left = 0
    let right = height.length-1
    let maxProduct = 0
    let product =0

    while(left<right){
        product = Math.min(height[left],height[right]) * (right-left)
        maxProduct = Math.max(maxProduct,product)
        if(height[left]<height[right]){
            left +=1
        }
        else{
            right -= 1
        }
    }
    return maxProduct
}