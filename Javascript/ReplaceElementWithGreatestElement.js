var replaceElement = function(arr){
    let rightMax = -1

    for(let i=arr.length-1;i>-1;i--){
        let newMax = Math.max(rightMax,arr[i])
        arr[i] = rightMax
        rightMax = newMax
    }

    return arr
}