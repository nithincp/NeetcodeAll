class TreeNode:

    def __init__(self,val=0,left=None,right=None) -> None:
        self.val = val
        self.left = left
        self.right = right

def invertTree(root):

    def swapChild(node):
        if node is None or (node.left == None and node.right == None):
            return
        
        temp = node.left
        node.left = node.right
        node.right = temp

        swapChild(node.left)
        swapChild(node.right)

    swapChild(root)

    return root