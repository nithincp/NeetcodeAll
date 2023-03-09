function TreeNode(val,left, right) {
    this.val = (val === undefined) ? 0 : val
    this.left = (left === undefined) ? null : left
    this.right = (right === undefined) ? null : right
}

var invertTree = function(root){

    function swapChild(node){
        if(node === null || (node.left === null & node.right === null)){
            return
        }

        let temp = node.left
        node.left = node.right
        node.right = temp

        swapChild(node.left)
        swapChild(node.right)
    }

    swapChild(root)

    return root
}