## Leetcode Problem - 304

class NumMatrix:

    def __init__(self,matrix) -> None:
        rows,cols = len(matrix),len(matrix[0])
        self.sumMatrix = [[0]*(cols+1) for r in range(rows+1)]

        for r in range(rows):
            prefix = 0
            for c in range(cols):
                prefix += matrix[r][c]
                above = self.sumMatrix[r][c+1]
                self.sumMatrix[r+1][c+1] = prefix + above

    def sumRegion(self,row1,col1,row2,col2):
        r1,c1,r2,c2 = row1+1,col1+1,row2+1,col2+1
        above = self.sumMatrix[r1-1][c2]
        left = self.sumMatrix[r2][c1-1]
        bottomRight = self.sumMatrix[r2][c2]
        topLeft = self.sumMatrix[r1-1][c1-1]

        return bottomRight-above-left


matrix = [[2,3,1],[4,3,5],[5,3,6]]
obj = NumMatrix(matrix)


