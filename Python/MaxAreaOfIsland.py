def maxAreaOfIsland(grid):
    ROWS,COLS = len(grid),len(grid[0])
    maxArea = 0
    islands = 0
    area = 0

    def dfs(r,c,area):
        if r<0 or c<0 or r>=ROWS or c>=COLS or grid[r][c] != 1:
            return area
        
        grid[r][c] = '#'
        area += 1

        area = dfs(r+1,c,area)
        area = dfs(r-1,c,area)
        area = dfs(r,c+1,area)
        area = dfs(r,c-1,area)

        return area
    

    for row in range(ROWS):
        for col in range(COLS):
            if grid[row][col] == 1:
                islands += 1
                area = dfs(row,col,0)
                maxArea = max(maxArea,area)

    return maxArea