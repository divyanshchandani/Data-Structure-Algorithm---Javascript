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
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
console.log(myGraph)