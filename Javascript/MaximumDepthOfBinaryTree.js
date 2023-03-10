
function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0 : val
    this.left = (left === undefined) ? null : left
    this.right = (right === undefined) ? null : right
}

var maxDepth = function(root){
    if(root === null){
        return 0
    }

    return findMaxDepth(root)

}


function findMaxDepth(node){

    const leftSubTree = maxDepth(node.left)
    const rightSubTree = maxDepth(node.right)

    return 1 + Math.max(leftSubTree, rightSubTree)
}