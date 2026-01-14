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

    #deleteNode(value, currentNode){
        if(currentNode === null) return null;

        if(value < currentNode.value){
            currentNode.left = this.#deleteNode(value, currentNode.left)
        }else if(value > currentNode.value){
            currentNode.right = this.#deleteNode(value, currentNode.right)
        }else{
            if(currentNode.left === null && currentNode.right === null){
                currentNode = null;
            }else if(currentNode.left === null){
                currentNode = currentNode.right;
            }else if(currentNode.right === null){
                currentNode = currentNode.left
            }else{
                let subTreeMin = this.minValue(currentNode.right);
                currentNode.value = subTreeMin;
                currentNode.right = this.#deleteNode(subTreeMin, currentNode.right)
            }
        }
        return currentNode
    }
}