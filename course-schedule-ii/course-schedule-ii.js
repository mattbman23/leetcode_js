/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // init adjacency list
    let prereq = {};
    
    prerequisites.forEach(([course, dep]) => {
        if (prereq[course]) {
            prereq[course].push(dep);
        } else {
            prereq[course] = [dep];
        }
    });
    
    // init result
    let visited = [];
    let result = [];
    
    const DFS = (i) => {
        if (!visited[i] && !prereq[i]) {
            result.push(i);
            visited[i] = 2;
            return true;
        }
        
        if (visited[i] === 1) return false;
        if (visited[i] === 2) return true;
        
        visited[i] = 1;
        
        for (let k = 0; k < prereq[i].length; k++) {
            if (DFS(prereq[i][k]) === false) return false;
        }        
        
        visited[i] = 2;
        result.push(i);
        return true;
    }
    
    // loop possible courses
    for (let i = 0; i < numCourses; i++) {
        if (DFS(i) === false) {
            return [];
        }
    } 
    
    return result;
};