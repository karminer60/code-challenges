/**
 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //access all digits in the array to create the integer
    //add one to the integer
    //place the result back into the array and split it up into digits
    //large integers and floats will be rounded
    //I need to carry the number being added
    let number = ''
    let newNumber = 0
    for(let digit in digits){
        number += digit
        newNumber = Number(number)
    }
    newNumber += 1
    let newArray = newNumber.toString().split('')
    let newNumbers = newArray.map((str) => parseInt(str))
    return newNumbers 
};