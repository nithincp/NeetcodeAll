var islandPerimeter = function(grid){
    const [ROWS,COLS] = [grid.length,grid[0].length]
    const queue = []
    let perimeter = 0

    for (let i =0;i<ROWS;i++){
        for(let j=0;j<COLS;j++){
            if(grid[i][j] === 1){
                perimeter += 4
                queue.push([i,j])
            }
        }
    }

    while(queue.length>0){
        const queueLength = queue.length
        for(let i=0;i<queueLength;i++){
            const [r,c] = queue.pop()

            const directions = [[1,0],[-1,0],[0,-1],[0,1]]
            for (const [x,y] of directions){
                const dr = x + r
                const dc = y + c

                if (dr>=0 && dc>=0 && dr<ROWS && dc<COLS && grid[dr][dc] === 1){
                    perimeter-=1
                }
            }
        }
    }

    return perimeter
}