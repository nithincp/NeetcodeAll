var maxAreaOfIsland = function(grid){
    const [ROWS,COLS] = [grid.length, grid[0].length]
    let maxArea = 0
    let islands = 0 
    let area = 0

    function dfs(r,c,area){
        if(r<0 || c<0 || r>=ROWS || c>=COLS || grid[r][c] !== 1){
            return area
        }

        grid[r][c] = '#'
        area += 1
        area = dfs(r+1,c,area)
        area = dfs(r-1,c,area)
        area = dfs(r,c+1,area)
        area = dfs(r,c-1,area)

        return area
    }

    for(let row=0;row<ROWS;row++){
        for(let col=0;col<COLS;col++){
            if(grid[row][col] === 1){
                islands += 1
                area = dfs(row,col,0)
                maxArea = Math.max(maxArea,area)
            }
        }
    }

    return maxArea
}