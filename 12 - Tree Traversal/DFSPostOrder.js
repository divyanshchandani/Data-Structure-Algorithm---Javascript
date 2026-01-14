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

    DFSPostOrder(){
        let results = [];
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.value);
        }
    traverse(this.root)
    return results;
    }
}