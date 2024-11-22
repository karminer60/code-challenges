/**
 * Given two binary strings a and b, return their sum as a binary string.


 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //binary system goes from right to left
    //the smallest number is on the right
    //and the largest number is on the left
    //the solution will be like the Plus One problem
    let result = ""
    let carry = 0
    //use an index for this problem
    for( let i = 0; i < a.length || i < b.length; i++ ){
        //go from the end then move backwards by subtracting i
        //one binary plus one binary equals 10 
        let digit = Number(a[a.length - 1 - i] || "0") + Number(b[b.length - 1 -i] || "0") + carry
        //this code instead of if statements below
        carry = Math.floor(digit / 2)
        digit = digit % 2
        // if(digit > 1){
        //     carry = 1
        //     digit = 0
        // }else{
        //     carry = 0
        // }
        result += digit
    }
    //do this at the end and apply it more generally
    if(carry){
        result += carry
    } 
   
    return result.split("").reverse().join("");
};