/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 * @param {string[]} strs
 * @return {string}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //iterate over the array of strings
    //iterate over each string and compare the letters from left to right
    for(let i = 0; true; i++){
        let letter = strs[0][i]
        for(let word of strs){
            if(i >= word.length || letter !== word[i]){
                return word.slice(0,i)
            }
        }
    }          
};