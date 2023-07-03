// Leetcode Problem - 101

function TreeNode(val,left,right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function(root){

    const queue = []

    queue.push(root.left)
    queue.push(root.right)

    while (queue.length>0){
        lChild = queue.shift()
        rChild = queue.shift()

        if (!lChild && !rChild){
            continue
        }else if ((!lChild || !rChild) || (lChild.val !== rChild.val)){
            return false
        }

        queue.push(lChild.left)
        queue.push(rChild.right)
        queue.push(lChild.right)
        queue.push(rChild.left)
    }

    return true
}