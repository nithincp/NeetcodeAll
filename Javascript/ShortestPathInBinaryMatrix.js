var shortestPathBinaryMatrix = function(grid){
    const [ROWS,COLS] = [grid.length, grid[0].length]
    const queue = []
    const visit = new Set()
    let length = 0
    queue.push([0,0])
    visit.add(`00`)

    if(grid[0][0] == 1){
        return -1
    }

    while(queue.length>0){
        const queueLength = queue.length
        for(let i=0;i<queueLength;i++){
            const [r,c] = queue.shift()

            if (r === ROWS-1 && c === COLS -1){
                length+=1
                return length
            }

            const directions = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]
            for (const [dr,dc] of directions){
                if (r+dr<0 || c+dc<0 || r+dr>=ROWS || c+dc>=COLS || 
                    grid[r+dr][c+dc]===1 || visit.has(`${r+dr}${c+dc}`)){
                    continue
                }
                queue.push([r+dr,c+dc])
                visit.add(`${r+dr}${c+dc}`)
            }   
        }
        length+=1 
        
    }

    return -1
}