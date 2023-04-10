var wordSearch = function(board,word){
    const ROWS = board.length
    const COLS = board[0].length
    const path = new Set()

    function dfs(r,c,i){
        if (i === word.length){
            return true
        }

        if(r<0 || c<0 || r>=ROWS || c>=COLS || 
            word[i]!=board[r][c] || path.has(`${r}${c}`)){
                return false
        }

        path.add(`${r}${c}`)
        const res = (dfs(r+1,c,i+1) ||
                    dfs(r-1,c,i+1) ||
                    dfs(r,c+1,i+1) ||
                    dfs(r,c-1,i+1))
        path.delete(`${r}${c}`)
        return res
    }

    for (let i=0;i<ROWS;i++){
        for (let j=0;j<COLS;j++){
            if(dfs(i,j,0)){
                return true
            }
        }
    }

    return false
}