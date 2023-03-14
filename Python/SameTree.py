class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSameTree(self,p,q):
        if p is None and q is None:
            return True
        
        if p is None:
            return False
        
        if q is None:
            return False
        
        if p.val == q.val:
            return (self.isSameTree(p.left,q.left) 
                    and self.isSameTree(p.right,q.right))
        
        return False