class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    DFSPreOrder(){
        let results = [];
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode);
            if(currentNode.right) traverse(currentNode.right)
        }
    traverse(this.root)
    return results;
    }
}