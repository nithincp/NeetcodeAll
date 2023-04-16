from collections import deque

def islandPerimeter(grid):

    ROWS,COLS = len(grid), len(grid[0])

    queue = deque()

    perimeter = 0

    for i in range(ROWS):
        for j in range(COLS):
            if grid[i][j] == 1:
                perimeter+=4
                queue.append((i,j))


    while queue:
        for i in range(len(queue)):
            r,c = queue.popleft()

            directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for x,y in directions:
                dr = x+r
                dc = y+c

                if dr>=0 and dc>=0 and dr<ROWS and dc<COLS and grid[dr][dc] == 1:
                    perimeter-=1

    return perimeter