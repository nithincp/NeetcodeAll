def search2DMatrix(matrix,target):
    m,n = len(matrix),len(matrix[0])

    top,bottom = 0,m-1

    while top<=bottom:
        row = (top+bottom)//2
        if target>matrix[row][n-1]:
            top=row+1
        elif target<matrix[row][0]:
            bottom=row-1
        else:
            break

    if not (top<=bottom):
        return False

    row = (top+bottom)//2

    left,right = 0,n-1

    while left<=right:
        mid = (left+right)//2
        if target > matrix[row][mid]:
            left=mid+1
        elif target < matrix[row][mid]:
            right=mid-1
        else:
            return True

    return False