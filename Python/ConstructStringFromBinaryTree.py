class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left   
        self.right = right

class Solution:
    def stringFromBinaryTree(root):
        outputString = ""

        def helper(node,outputString):
            if not node:
                return outputString
            
            outputString += str(node.val)

            if not node.left and not node.right:
                return outputString
            else:
                outputString += "("
                outputString = helper(node.left,outputString)
                outputString += ")"

            if node.right:
                outputString += "("
                outputString = helper(node.right,outputString)
                outputString += ")"

            return outputString
        
        outputString = helper(root,outputString)

        return outputString