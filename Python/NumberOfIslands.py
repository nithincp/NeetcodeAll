def numberOfIslands(grid):
    ROWS,COLS = len(grid),len(grid[0])
    islands = 0

    def dfs(r,c):
        if r<0 or c<0 or r>=ROWS or c>=COLS or grid[r][c] != '1':
            return
        
        grid[r][c] = '#'
        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)


    for row in range(ROWS):
        for col in range(COLS):
            if grid[row][col] == '1':
                islands +=1
                dfs(row,col)


    return islands