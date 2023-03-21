function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val
    this.left = (left === undefined) ? null:left
    this.right = (right === undefined) ? null:right
}

var preOrderTraversal = function(root){
    const outputArray = []

    function helper(node){
        if(node === null){
            return null
        }

        outputArray.push(node.val)
        helper(node.left)
        helper(node.right)
    }

    helper(root)

    return outputArray
}