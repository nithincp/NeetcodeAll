class TreeNode:
    
    def __init__(self,val,left,right) -> None:
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):

    def findMaxDepth(node):
        if node is None:
            return 0
        
        leftSubTree = findMaxDepth(node.left)
        rightSubTree = findMaxDepth(node.right)

        return 1+ max(leftSubTree,rightSubTree)


    maxDepth = findMaxDepth(root)
    return maxDepth

    

