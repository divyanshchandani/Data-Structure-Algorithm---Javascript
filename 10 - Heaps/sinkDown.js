class Heap{
    #heap = [];

    getHeap(){
        return [...this.#heap];
    }

    #leftchild(index){
        return 2 * index + 1;
    }

    #rightchild(index){
        return 2 * index + 2;
    }

    #parent(index){
        return Math.floor((index - 1) /2);
    }

    #swap(index1, index2){
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]]
    }

    #sinkDown(index){
        let maxIndex = index;
        let size = this.#heap.length;
        while(true){
            let leftIndex = this.#leftchild(index);
            let rightIndex = this.#rightchild(index);

            if(leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]){
                maxIndex = leftIndex;
            }

            if(rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]){
                maxIndex = rightIndex;
            }

            if(maxIndex !== index){
                this.#swap(index, maxIndex);
                index = maxIndex;
            }else{
                return;
            }
        }
    }

}