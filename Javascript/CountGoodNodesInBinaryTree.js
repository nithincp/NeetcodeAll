function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val
    this.left = (left === undefined) ? null:left
    this.right = (right === undefined) ? null:right
}

var goodNodesInBinaryTree = function(root){

    function helper(node,maxVal)
    {
        if(node === null){
            return 0
        }

        if(node.val>=maxVal){
            res = 1
        }else{
            res = 0
        }

        maxVal = Math.max(node.val,maxVal)
        res += helper(node.left,maxVal)
        res += helper(node.right,maxVal)

        return res
    }

    return helper(root,root.val)


}