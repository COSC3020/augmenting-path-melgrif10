function augmentingPath(graph, start, end) {
    function dfs(currentNode, visited){     //Define a recursive depth-first search function
        if(currentNode==end){               //If the current node is the end node
            return[currentNode];            //There are only two nodes, return shortest path which is the end node
        }
        visited.add(currentNode);           //If not add the current node to the list of visited nodes

        for(const i of Object.keys(graph[currentNode] || {})){  //Iterate over the neighboring nodes of the current node in the graph
            if(!visited.has(i) && graph[currentNode][i]>0){     //Check if the neighboring node has not been visted and if there is a positve edge weight
                const path =dfs(i, new Set([...visited]));      //Recursively call dfs wit the neighboring node and a new set of visiting node in order to backtrack and keep the state of the previous recursive calls
                if(path.length>0){                              //If the shortest path is found
                    return [currentNode, ...path];              //Add the current node to path and return the path
                }
            }
        }
        return [];                          //If there isn't a valid path return an empty array
    }
    return dfs(start, new Set());           //Begin the dfs from the start node with an empty set of visited nodes
}
