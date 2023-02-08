var search2DMatrix = function(matrix){
    let m = matrix.length
    let n = matrix[0].length

    let top = 0
    let bottom = m-1

    while(top<=bottom){
        let row = Math.floor((top+bottom)/2)
        if(target>matrix[row][n-1]){
            top=row+1
        }
        else if(target<matrix[row][0]){
            bottom=row-1
        }
        else{
            break
        }
    }

    if((top<=bottom)===false){
        return false
    }

    let row = Math.floor((top+bottom)/2)

    let left = 0
    let right = n-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(target > matrix[row][mid]){
            left = mid+1
        }
        else if(target<matrix[row][mid]){
            right=mid-1
        }
        else{
            return true
        }
    }

    return false


}