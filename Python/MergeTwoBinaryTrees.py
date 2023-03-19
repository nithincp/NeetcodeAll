class TreeNode:
    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def mergeBinaryTrees(root1,root2):

        def helper(node1,node2):
            if not node1 and not node2:
                return None
            
            v1 = node1.val if node1 else 0
            v2 = node2.val if node2 else 0

            root = TreeNode(v1+v2)

            root.left = helper(node1.left if node1 else None,node2.left if node2 else None)
            root.right = helper(node1.right if node1 else None,node2.right if node2 else None)

            return root
        
        return helper(root1,root2)