function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val
    this.left = (left === undefined) ? null:left
    this.right = (right === undefined) ? null:right
}

var isBST = function(root){

    function helper(node,left,right){
        if (node === null){
            return true
        }

        if(!(node.val>left && node.val<right)){
            return false
        }

        return (helper(node.left,left,node.val) && helper(node.right,node.val,right))
    }

    return helper(root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)

}