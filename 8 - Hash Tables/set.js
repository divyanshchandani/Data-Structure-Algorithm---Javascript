class hashTable{
    constructor(size = 7){
        this.dataSet = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataSet.length;
        }
        return hash;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.dataSet[index]){
            this.dataSet[index] = [];
        }
        this.dataSet[index].push([key, value])
        return this;
    }
}

let myHashTable = new hashTable;
myHashTable.set('lumber',70)
myHashTable.set('washers',80)
myHashTable.set('bolts',90)
console.log(myHashTable)