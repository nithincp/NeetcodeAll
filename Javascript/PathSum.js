function TreeNode(val,left,right){
    this.val = (val===undefined) ? 0:val
    this.left = (left===undefined) ? null:left
    this.right = (right===undefined) ? null:right
}

var pathSum = function(root,targetSum){
    let sum = 0
    function helper(node,sum){
        if(node === null){
            return false
        }

        sum += node.val
        if(sum === targetSum){
            if(node.left === null && node.right === null){
                return true
            }
        }

        if (helper(node.left,sum)){
            return true
        }

        return helper(node.right,sum)
    }

    return helper(root,sum)

}