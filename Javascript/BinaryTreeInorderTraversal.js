function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0 : val
    this.left = (left === undefined) ? null : left
    this.right = (right === undefined) ? null : right
}

var inorderTraversal = function (root) {

    let result = []

    function helper(node){
        if(node === null){
            return
        }

        helper(node.left)
        result.push(node.val)
        helper(node.right)
    }

    inorderTraversal(root)
    return result

}