function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0:val
    this.left = (left === undefined) ? null:left
    this.right = (right === undefined) ? null:right
}

var binaryTreeRightSideView = function(root){
    const outputArray = []
    const outputQueue = []
    const levelSet = new Set()
    

    let level = 0

    if(root !== null){
        outputQueue.push([root,level])
    }

    while(outputQueue.length>0){
        level += 1
        const lengthQueue = outputQueue.length
        for(let i=0;i<lengthQueue;i++){
            const [curr,levelToCheck] = outputQueue.shift()
            if(!levelSet.has(levelToCheck)){
                outputArray.push(curr.val)
                levelSet.add(levelToCheck)
            }

            if(curr.right){
                outputQueue.push([curr.right,level])
            }
            if(curr.left){
                outputQueue.push([curr.left,level])
            }
        }
    }

    return outputArray
}