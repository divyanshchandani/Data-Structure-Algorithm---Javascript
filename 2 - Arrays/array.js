// Arrays - Decalaration

let person = {
    name: "Divyansh",
    age: 25
}

let arr = ['apple','banana','cherry', person];
console.log(arr[0]);
console.log(arr.length);

// Arrays - Add and Remove Elements

arr.push("orange"); // Add to End of the array
console.log(arr);

arr.pop();

// Add to top of the array
arr.unshift("Orange");

arr.shift();


// Loops in Array
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let i = 0;
while(i<arr.length){
    console.log(arr[i])

    i++
}

//Inbuilt Loop Menthods

//Map Function
const numbers = [1,2,3,4,5];
const newNum = numbers.map((item, index, array) =>{
    return item + 5;
}) 

//Filter Function
const newNum2 = numbers.filter((item, index, array) =>{
    return item > 3;
}) 

// Reduce Function
const newNums = numbers.reduce((prev, item) =>{
    return prev + item
},0);

//Spread & Rest Operators

const nums = [1,2,3];
const nums2 = [4,5,6,7];

const finalNums = [...nums,...nums2] //Spread Operatos

function sun(...numbers) {
    return numbers;
}

