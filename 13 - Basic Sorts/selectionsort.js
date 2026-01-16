function selectionSort(array){
    let min;
    for(let i = 0; i < array.length -1; i++){
        min = i;
        for(let j = i+1; j < array.length; i++){
            if(array[j] < array[min]){
                return min = j;
            }
            if(i !== min){
                let temp = array[i]
                array[i] = array[min]
                array[min] = temp
            }
        }
        return array;
    }
}
console.log(selectionSort([4,2,3,5,1,3]))