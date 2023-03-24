function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val
    this.left = (left === undefined) ? null:left
    this.right = (right === undefined) ? null:right 
}


var stringFromBinaryTree = function(root){
    let outputString = ""

    function helper(node){
        if(node === null){
            return
        }

        outputString += node.val.toString()

        if(node.left === null && node.right === null){
            return
        }
        else{
            outputString += "("
            helper(node.left)
            outputString += ")"
        }

        if(node.right){
            outputString += "("
            helper(node.right)
            outputString += ")"
        }

    }

    helper(root)
    return outputString
}