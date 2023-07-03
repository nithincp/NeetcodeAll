## Leetcode Problem - 101

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSymmetric(root):
    
    def dfs(lChild,rChild):
        if not lChild and not rChild:
            return True
        if not lChild or not rChild:
            return False
        
        return (lChild.val == rChild.val \
            and dfs(lChild.left,rChild.right) \
            and dfs(lChild.right,rChild.left))

    return dfs(root.left,root.right)

root = [1,2,2,3,4,4,3]
print(isSymmetric(root))