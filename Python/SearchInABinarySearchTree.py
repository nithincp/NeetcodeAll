## Leetcode Problem - 700

class TreeNode:
    def __init__(self,val=0, left=None, right=None) -> None:
        self.val = val
        self.right = right
        self.left = left


class Solution:
    def searchBST(self,root,val):
        if root == None:
            return None
        if root.val == val:
            return root
        elif val<root.val:
            leftChild = root.left
            return self.searchBST(self,leftChild,val)
        else:
            rightChild = root.right
            return self.searchBST(self,rightChild,val)
