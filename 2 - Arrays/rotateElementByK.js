/*
Ques - 2: Rotate Array By K
Given an integer array nums, rorate the array to the right by K step, where k is non - negative

Input: nums = [1,2,3,4,5,6,7], k=3 ----> Output: [5,6,7,1,2,3,4]
Input: nums = [-1,-100,3,99], k=2 ----> Output:[3,99,-1,-100]
*/

//Approach using inbuilt function

// function rotateArray(nums,k){
//     let size = nums.length;
//     if(size > k)
//     {
//         k = k % size;
//     }
//     const rotated = nums.splice(size - k, size);
//     nums.unshift(...rotated);
    
//     return nums;
// }

// console.log(rotateArray([1,2,3,4,5,6,7],3));

// Optimised Approach

function rotateArrayOptimised(nums, k){
    let size = nums.length;

    if( size > k){
        k = k % size;
    }
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k -1);
    reverse(nums, k, nums.length-1);

    return nums;
}

function reverse(nums,left,right){
    while(left < right){
        const temp = nums[left]
        nums[left++] = nums[right]
        nums[right--] = temp;
    }
}

console.log(rotateArrayOptimised([1,2,3,4,5,6,7],3));