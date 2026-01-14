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

    #rInsert(value, currentNode=this.root){
        if(currentNode === null){return new Node(value)}
        if(value < currentNode.value){
            currentNode.left = this.#rInsert(value, currentNode.left)
        }else if(value > currentNode.value){
            currentNode.right = this.#rInsert(value, currentNode.right)
        }
        return currentNode;
    }

    rInsert(value){
        if(this.root === null){this.root = new Node(value)}
        this.#rInsert(value);
    }

}