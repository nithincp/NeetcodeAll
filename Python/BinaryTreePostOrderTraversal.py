class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def postOrderTraversal(root):
        outputList = []


        def helper(node, outputList):
            if not node:
                return None
            
            helper(node.left,outputList)
            helper(node.right,outputList)
            outputList.append(node.val)


        helper(root,outputList)

        return outputList