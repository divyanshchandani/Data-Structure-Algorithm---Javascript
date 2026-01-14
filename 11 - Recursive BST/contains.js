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

rContains(value, currentNode=this.root){
    if(currentNode === null) return false;
    if(value === currentNode.value) return true;
    if(value < currentNode.value){
        return this.rContains(value, currentNode.left)
    }else{
        return this.rContains(value, currentNode.right)
    }
}
}