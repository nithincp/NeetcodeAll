class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:

    def sortedArrayToBST(nums):

        start = 0
        end = len(nums)-1

        def helper(start,end):
            if end-start == 0:
                return TreeNode(nums[start])
            elif end-start < 0:
                return None
            
            middle = (start + end) // 2
            middleNode = TreeNode(nums[middle])

            middleNode.left = helper(start,middle-1)
            middleNode.right = helper(middle+1,end)

            return middleNode
        
        return helper(start,end)