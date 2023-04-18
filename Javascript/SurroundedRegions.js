var surroundedRegions = function(board){
    const [ROWS,COLS] = [board.length, board[0].length]

    function dfs(r,c){
        if (r<0 || c<0 || r>=ROWS || c>=COLS || board[r][c] !== 'O'){
            return
        }

        board[r][c] = 'T'
        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)
    
    }


    for (let r=0;r<ROWS;r++){
        if (board[r][0] === 'O'){
            dfs(r,0)
        }
        if (board[r][COLS-1] === 'O'){
            dfs(r,COLS-1)
        }
    }

    for(let c=0;c<COLS;c++){
        if (board[0][c] === 'O'){
            dfs(0,c)
        }
        if (board[ROWS-1][c] === 'O'){
            dfs(ROWS-1,c)
        }
    }


    for(let r=0;r<ROWS;r++){
        for (let c=0;c<COLS;c++){
            if (board[r][c] === 'O'){
                board[r][c] = 'X'
            }
            if (board[r][c] === 'T'){
                board[r][c] = 'O'
            }
        }
    }

    return board
}