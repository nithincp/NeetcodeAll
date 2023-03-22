function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val
    this.left = (left === undefined) ? null:left
    this.right = (right === undefined) ? null:right
}


var postOrderTraversal = function(root){
    const outputArray = []


    function helper(node){
        if(node === null){
            return null
        }

        helper(node.left)
        helper(node.right)
        outputArray.push(node.val)
    }

    helper(root)

    return outputArray
}