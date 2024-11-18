/**
 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //large integers and floats will be rounded
    //I need to carry the number being added
    for(let i; true; i++){
        for(let digit in digits){
            if(digit === 9){
                digit[i - 1] += 1
                digit[i] = 0
            }else{
                digit[digits.length - 1] += 1
            }
        }
    }    
    return digits
};