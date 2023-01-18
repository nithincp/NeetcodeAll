def maxArea(height):
    left = 0
    right = len(height)-1
    maxProduct = 0
    product = 0

    while left<right:
        product = min(height[left],height[right]) * (right-left)
        maxProduct = max(maxProduct,product)
        if height[left] < height[right]:
            left +=1
        else:
            right -=1

    return maxProduct