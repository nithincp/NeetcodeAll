class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left =left
        self.right = right


class Solution:
    def pathSum(root,targetSum):
        sum = 0
        def helper(node,sum):
            if not node:
                return False
            
            sum += node.val
            if sum == targetSum:
                if node.left == None and node.right == None:
                    return True
                
            if helper(node.left,sum):
                return True
            
            return helper(node.right,sum)

        return helper(root,sum)