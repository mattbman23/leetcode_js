/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    
    for (let row in grid) {
        for (let col in grid[row]) {
            if (grid[row][col] === '1') {
                islandCount += 1;
                teraformIsland(parseInt(row), parseInt(col), grid);
            }
        }
    }
    
    return islandCount;
};

const teraformIsland = (row, col, grid) => {
    if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === '0') {
        return;
    }
    
    grid[row][col] = '0';
    
    teraformIsland(row + 1, col, grid);
    teraformIsland(row - 1, col, grid);
    teraformIsland(row, col + 1, grid);
    teraformIsland(row, col - 1, grid); 
}