function TreeNode(val,left,right){
    this.val = (val === undefined) ? 0 : val
    this.left = (left === undefined) ? null : left
    this.right = (right === undefined) ? null : right
}

var sortedArrayToBST = function(nums){
    const start = 0
    const end = nums.length-1

    function helper(start,end){
        if(end-start === 0){
            return new TreeNode(nums[start])
        }
        else if(end-start < 0){
            return null
        }

        const middle = Math.floor((start + end)/2)
        const middleNode = new TreeNode(nums[middle])

        middleNode.left = helper(start,middle-1)
        middleNode.right = helper(middle+1,end)

        return middleNode
    }

    return helper(start,end)
}