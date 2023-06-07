//Leetcode Problem - 700

function TreeNode(val,right,left){
    this.val = val
    this.left = left
    this.right = right
}

function searchBST(root,val){
    if (root === null){
        return null
    }

    if (root.val === val){
        return root
    }else if(val < root.val){
        return searchBST(root.left,val)
    }else{
        return searchBST(root.right,val)
    }
}