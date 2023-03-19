function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0 : val
    this.left = (left === undefined) ? 0 : left
    this.right = (right === undefined) ? 0 : right
}

var mergeBinaryTrees = function (root1,root2){

    function helper(node1,node2){

        if(node1 === null && node2 === null){
            return null
        }

        const v1 = (node1 !== null) ? node1.val:0
        const v2 = (node2 !== null) ? node2.val:0

        const root = new TreeNode(v1+v2)

        root.left = helper((node1 !== null) ? node1.left:null , 
        (node2 !== null) ? node2.left:null)
        root.right = helper((node1 !== null) ? node1.right:null , 
        (node2 !== null) ? node2.right:null)

        return root
    }

    return helper(root1,root2)
}