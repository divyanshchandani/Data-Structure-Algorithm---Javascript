//Ques - 2: Palindrome Number
// An Integer is a palindrome number when it reads the same forward and backward

// Input: x = 121 ------>>>> Output: true
// Input: x = 10 ------>>>>> Output: false

const isPalindrome = function(x){

    if(x<0){return false}

    return x === +x.toString().split("").reverse().join("");
}

const result = isPalindrome(12121);
console.log(result);