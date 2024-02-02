//Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
    //How do you detect that a new window of 1s has started?
    //if the previous number isn't 1;
    
    //How do you detect the ending point for an existing window
    //if the next number isn't 1
    
    let max = 0;
    let count = 0;
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] === 1) {
            count++;
        } else {
            count = 0;
        };
        
        if (count > max) {
            max = count;
        }
        
        i++
    }

    return max;
};