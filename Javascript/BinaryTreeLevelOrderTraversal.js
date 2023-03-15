function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val 
    this.left = (left === undefined) ? null:left 
    this.right = (right === undefined) ? null:right 
}

var levelOrderTraversal = function(root){
    if(root === null){
        return []
    }

    const queue = []
    const outputArray = []

    queue.push(root)

    while(queue.length>0){
        const innerArray = []
        let queueLength = queue.length
        for(let i=0;i<queueLength;i++){
            const cur = queue.shift()
            innerArray.push(cur.val)
            if(cur.left !== null){
                queue.push(cur.left)
            }
            if(cur.right !== null){
                queue.push(cur.right)
            }
        }
        outputArray.push(innerArray)
    }

    return outputArray
}