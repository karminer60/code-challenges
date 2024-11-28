/**
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    //will use bubble sort solution
    //create two for loops: one that goes through nums array
    //one that moves backward from the end of the array
    let tempNum;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length - 1 - i; j++){
            if(nums[j] > nums[ j + 1 ]){
                tempNum = nums[j]
                nums[j] = nums[ j + 1 ]
                nums[ j + 1 ] = tempNum
            }
        }
    }  
    return nums
};