var numberOfIslands = function(grid){
    const ROWS = grid.length
    const COLS = grid[0].length
    let islands = 0

    function dfs(r,c){
        if ( r<0 || c<0 || r>=ROWS || c>=COLS || grid[r][c] !=='1'){
            return
        }

        grid[r][c] = '#'
        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)
    }

    for (let row=0;row<ROWS;row++){
        for (let col=0;col<COLS;col++){
            if (grid[row][col] === '1'){
                islands+=1
                dfs(row,co)
            }
        }
    }

    return islands
}