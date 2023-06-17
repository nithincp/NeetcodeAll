function TreeNode(val,left,right){
    this.val = val
    this.left = left
    this.right = right
}


var getMinimumDifference = function(root){
    const values = []
    function dfs(root){
        if (!root){
            return
        }

        dfs(root.left)
        values.push(root.val)
        dfs(root.right)
    }

    dfs(root)

    values.sort((a,b) => a-b)
    let minDiff = Infinity
    for (let i=0;i<values.length-1;i++){
        minDiff = Math.min(minDiff,Math.abs(values[i]-values[i+1]))
    }

    return minDiff
}