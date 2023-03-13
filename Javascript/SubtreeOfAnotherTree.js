function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0 : val
    this.left = (left === undefined) ? left : val
    this.right = (right === undefined) ? right : val
}


var isSubTree = function(root,subRoot){
    if(subRoot === null){
        return true
    }

    if(root === null){
        return false
    }

    if(sameTree(root,subRoot)){
        return true
    }

    return (isSubTree(root.left,subRoot) || isSubTree(root.right,subRoot))

    function sameTree(t,s){
        if(s=== null && t ===null){
            return true
        }

        if(s !== null && t!==null && s.val === t.val){
            return (sameTree(t.left,s.left) && sameTree(t.right,s.right))
        }

        return false
    }

}