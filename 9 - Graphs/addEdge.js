class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = []
            return true;
        }
        return false;
    }

    addEdge(vertex1,vertex2){
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1].push(vertex2);
            this.adjacentList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addEdge('A','B')
console.log(myGraph)