/*
Ques - 4: Valid Anagram
An Anagram is a word or phrase formed by rearranging the letter of a different word or phrase,
using all the original letters exactly once.

Input: (s = "anagram"), (t = "nagaram"); ------>>>>> Output: true;
Input: (s = "rat"), (t = "car"); ------>>>>> Output: false;
*/


/*
1st Aproach: 
If a word or phrase is an anagram then it will be the same when we sort and compare it so both the words and phrase should be the same,
so we split the string(using .split() which  converts teh string into array of the elements), then sort then join and compare
*/
// const isAnagram = function(s,t){
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");

//     return s === t;
// }

/**
 * 2nd Approach:
 * Using Objects
*/

const isAnagram = function(s, t){
    if (s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i=0; i<s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[s[i]] = (obj2[s[i]] || 0) + 1;
    }

    for (const key in obj1){
        if(obj1[key]!==obj2[key]) return false;
    }

    return true;
};

console.log(isAnagram("anagram","nagaram"));