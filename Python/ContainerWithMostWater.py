def maxArea(height):
    # left = 0
    # right = len(height)-1
    # maxProduct = 0
    # product = 0

    # while left<right:
    #     product = min(height[left],height[right]) * (right-left)
    #     maxProduct = max(maxProduct,product)
    #     if height[left] < height[right]:
    #         left +=1
    #     else:
    #         right -=1

    # return maxProduct


    left = 0 
    right = len(height)-1
    maxProduct = 0

    while left<right:
        diff = right-left
        maxProduct = max(maxProduct,height[right] * diff if height[left] > height[right] else height[left]*diff)
        if height[left] > height[right]:
            right -= 1
        else:
            left +=1

    return maxProduct

height = [1,8,6,2,5,4,8,3,7]
print(maxArea(height))
