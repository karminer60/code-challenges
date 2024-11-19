/**
 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //large integers and floats will be rounded
    //I need to carry the number being added
    let newDigits = digits.reverse()
    let carry = 0
    let result = []
    for(let digit of newDigits){
        //do this at the end and apply it more generally
        digit += carry
        if(digit === 9 && newDigits.length === 1){
            digit = 0
            result.unshift(1, digit)
        }
        else if(digit === 9){
            carry = 0
            result.unshift(0)
            carry = 1
        }else if(carry === 1 && digit === 9){
            carry = 0
            result.unshift(0)
            carry += 1
        }else{
            result.unshift(digit + carry)  
        }
    }
   
    return result
};