function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val
    this.left = (left === undefined) ? null:left
    this.right = (right === undefined) ? null:right
}

//Iterative Method
var kthSmallestElementBST = function(root){
    let n = 0
    const stack = []
    let cur = root

    while(cur !== null || stack){
        while(cur){
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        n+=1
        if(n===k) return cur.val
        cur = cur.right
    }
}